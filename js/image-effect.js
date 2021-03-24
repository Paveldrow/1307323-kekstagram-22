/* global noUiSlider:readonly */

const imageUploadForm = document.querySelector('.img-upload__form');
const sliderArea = imageUploadForm.querySelector('.img-upload__effect-level');
const effectList = imageUploadForm.querySelector('.effects__list');
const effectLevel = imageUploadForm.querySelector('.effect-level__value');
const uploadPreviewPhoto = imageUploadForm.querySelector('.img-upload__preview');

const filterEffects = {
  original: {
    name: 'effect-none',
    filter: '',
  },
  chrome: {
    name: 'effect-chrome',
    className: 'effects__preview--chrome',
    filter: 'grayscale',
    unit: '',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
  },
  sepia: {
    name: 'effect-sepia',
    className: 'effects__preview--sepia',
    filter: 'sepia',
    unit: '',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
  },
  marvin: {
    name: 'effect-marvin',
    className: 'effects__preview--marvin',
    filter: 'invert',
    unit: '%',
    min: 0,
    max: 100,
    start: 100,
    step: 1,
  },
  phobos: {
    name: 'effect-phobos',
    className: 'effects__preview--phobos',
    filter: 'blur',
    unit: 'px',
    min: 0,
    max: 3,
    start: 3,
    step: 0.1,
  },
  heat: {
    name: 'effect-heat',
    className: 'effects__preview--heat',
    filter: 'brightness',
    unit: '',
    min: 1,
    max: 3,
    start: 3,
    step: 0.1,
  },
};

const setAttributeEffects = (min, max, step) => {
  effectLevel.setAttribute('min', `${min}`);
  effectLevel.setAttribute('max', `${max}`);
  effectLevel.setAttribute('step', `${step}`);
};

const removeAttributeEffects = () => {
  effectLevel.removeAttribute('min');
  effectLevel.removeAttribute('max');
  effectLevel.removeAttribute('step');
  uploadPreviewPhoto.removeAttribute('style');
};

const slider = imageUploadForm.querySelector('.effect-level__slider');

const addImageEffects = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });
  sliderArea.classList.add('hidden');
  effectList.addEventListener('change', getEffect);
};

const getSliderValue = (filter, unit) => {
  slider.noUiSlider.on('update', (values, handle) => {
    effectLevel.value = values[handle];
    uploadPreviewPhoto.style.filter = `${filter}(${effectLevel.value}${unit})`;
  });
};

const removeImageEffects = () => {
  slider.noUiSlider.destroy();
  effectList.removeEventListener('change', getEffect);
  uploadPreviewPhoto.style.filter = filterEffects.original.filter;
  uploadPreviewPhoto.className = 'img-upload__preview';
  imageUploadForm.querySelector('#effect-none').checked = true;
  effectLevel.value = '';
};

const addRenderEffectRule = (obj) => {
  uploadPreviewPhoto.classList.add(obj.className);
  setAttributeEffects(obj.min, obj.max, obj.step);
  slider.noUiSlider.updateOptions({
    range: {
      min: obj.min,
      max: obj.max,
    },
    start: obj.start,
    step: obj.step,
  });
  getSliderValue(obj.filter, obj.unit);
};

const getEffect = (evt) => {
  sliderArea.classList.toggle('hidden', evt.target.id === filterEffects.original.name);

  uploadPreviewPhoto.className = 'img-upload__preview';

  if (evt.target.id !== filterEffects.original.name) {
    addRenderEffectRule(filterEffects[evt.target.value]);
  } else {
    uploadPreviewPhoto.style.filter = '';
    removeAttributeEffects();
  }
};

export { addImageEffects, removeImageEffects };

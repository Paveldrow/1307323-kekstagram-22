/* global noUiSlider:readonly */
const image = document.querySelector('.img-upload__preview img')
const effect = document.querySelectorAll('.effects__radio');
const sliderContainer = document.querySelector('.img-upload__effect-level')
const sliderElement = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');

const MIN_RANGE = 0;
const MIN_RANGE_SPECIAL = 1;
const MAX_RANGE = 1;
const MAX_RANGE_SPECIAL = 3
const MULTIPLIER = 100;
const STEP_RANGE = 0.1;
const STEP_RANGE_SPECIAL = 1;


const slider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: MIN_RANGE,
      max: MAX_RANGE,
    },
    start: MAX_RANGE,
    step: STEP_RANGE,
    connect: 'lower',
    format: {
      to: function(value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function(value) {
        return parseFloat(value);
      },
    },
  });
};

const filter = {
  DEFAULD: 'default',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const filterOptions = {
  'defoult': {
    range: {
      min: MIN_RANGE,
      max: MAX_RANGE,
    },
    start: MAX_RANGE_SPECIAL,
    step: STEP_RANGE_SPECIAL,
  },
  'chrome': {
    range: {
      min: MIN_RANGE,
      max: MAX_RANGE,
    },
    start: MAX_RANGE,
    step: STEP_RANGE,
  },
  'sepia': {
    range: {
      min: MIN_RANGE,
      max: MAX_RANGE,
    },
    start: MAX_RANGE,
    step: STEP_RANGE,
  },
  'marvin': {
    range: {
      min: MIN_RANGE,
      max: MAX_RANGE * MULTIPLIER,
    },
    start: MAX_RANGE * MULTIPLIER,
    step: STEP_RANGE_SPECIAL,
  },
  'phobos': {
    range: {
      min: MIN_RANGE,
      max: MAX_RANGE_SPECIAL,
    },
    start: MAX_RANGE_SPECIAL,
    step: STEP_RANGE,
  },
  'heat': {
    range: {
      min: MIN_RANGE_SPECIAL,
      max: MAX_RANGE_SPECIAL,
    },
    start: MAX_RANGE,
    step: STEP_RANGE,
  },
};


export {slider};

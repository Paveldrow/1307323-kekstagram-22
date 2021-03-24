const scaleValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img')
const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');

const SCALE_DEFAULT = 100;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_STEP = 25;
const DIVIDER = 100;

let imageSize = SCALE_DEFAULT;

const checkScaleImage = (limitValue, buttonType) => {
  buttonType.disabled = (imageSize === limitValue);
};

const scaleImageSize = (changeValue) => {
  imageSize += changeValue;

  scaleValue.value = `${imageSize}%`;
  scaleValue.setAttribute('value', `${imageSize}%`);
  image.style.transform = `scale(${imageSize / DIVIDER})`;

  checkScaleImage(SCALE_MIN, scaleSmallerButton);
  checkScaleImage(SCALE_MAX, scaleBiggerButton);
};

const scaleImageDecrease = () => {
  scaleImageSize(-SCALE_STEP);
};

const scaleImageIncrease = () => {
  scaleImageSize(SCALE_STEP);
};


const setSizeImage = () => {
  imageSize = SCALE_DEFAULT;
  scaleBiggerButton.disabled = true;


  scaleValue.value = `${SCALE_DEFAULT}%`;
  scaleValue.setAttribute('value', `${imageSize}%`);
  image.style.transform = `scale(${imageSize / DIVIDER})`;

  scaleSmallerButton.addEventListener('click', scaleImageDecrease);
  scaleBiggerButton.addEventListener('click', scaleImageIncrease);
};

const removeSetSizeImage = () => {
  scaleSmallerButton.removeEventListener('click', scaleImageDecrease);
  scaleBiggerButton.removeEventListener('click', scaleImageIncrease);
}


export { setSizeImage, removeSetSizeImage };

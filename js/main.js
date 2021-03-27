import { getPhotos } from './data.js';
import { renderPictures } from './gallery.js';
import { uploadFile } from './upload-file.js'

renderPictures(getPhotos());
uploadFile();




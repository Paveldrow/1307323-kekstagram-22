import { getPhotos } from './data.js';
import { createPhotoList } from './gallery.js';
import { uploadFile } from './upload-file.js'

createPhotoList(getPhotos());
uploadFile();




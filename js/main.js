import { getPhotos } from './data.js';
import { createPhotoList } from './create-photo-list.js';
import { uploadFile } from './upload-file.js'



createPhotoList(getPhotos());
uploadFile();




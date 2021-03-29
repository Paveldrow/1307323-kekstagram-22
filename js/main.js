import {setImageRedactorFormSubmit} from './api.js';
import { renderPicturesContent } from './gallery.js';
import { uploadFile } from './upload-file.js';

setImageRedactorFormSubmit(() => renderPicturesContent());
uploadFile();



import {creatingMiniatures} from "./thumbnail-renderer.js";
import {displayPhotoEditPreview,closeImageEditor} from "./upload-photo.js";
import {setUserFormSubmit} from "./validation-form.js";
import {getData} from "./api.js";

displayPhotoEditPreview ();
getData()
  .then((miniatures) => {
    creatingMiniatures(miniatures);

  });

setUserFormSubmit(closeImageEditor);

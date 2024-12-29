
import {creatingMiniatures} from "./thumbnail-renderer.js";
import {displayPhotoEditPreview,closeImageEditor} from "./upload-photo.js";


import {getData} from "./api.js";

displayPhotoEditPreview ();
getData()
  .then((miniatures) => {
    creatingMiniatures(miniatures);

  });



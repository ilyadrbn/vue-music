import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";

const storage = getStorage();

export { storage, ref, uploadBytesResumable, getDownloadURL };

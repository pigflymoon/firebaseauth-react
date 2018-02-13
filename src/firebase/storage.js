import {storage} from './firebase';

//User API

export const getImages = () =>
    storage.ref().child('images');

export const getDefaultImages = () =>
    storage.ref().child('defaultImages');

// set localStorage item
// @param string key
// @param string value
export const setStorage = (key, value) => {

    localStorage.setItem(key, JSON.stringify(value));
};

// retrieve a locally stored item
// @param string key - item name
export const getStorage = key => {

    let storage = JSON.parse(localStorage.getItem(key));

    if(storage) return storage;

    return null;
};
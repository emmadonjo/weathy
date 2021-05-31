
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

export const saveLocation = (id, name, value) => {

    if(exists(id)) return false;
    
    // first get sace locations if any
    let locs = getStorage('_weathy_locations_');

    if(!locs) locs = [];

    locs.push({
        id: id,
        name: name,
        saved_at: (new Date()).getTime(),
        data: value
    });

    // save to location storage
    setStorage('_weathy_locations_', locs);
    return true;
};



// removes a location from localStorage
// @param string id
// @return boolean
export const deleteLocation = id => {

    // get locations
    let locs = getStorage('_weathy_locations_');

    if(locs === null) return;

    for(let loc in locs){
        // if  loc's id matches the given id
        // remove location and exit loop
        if(loc.id === id){

            delete loc.id;

            break;
        }
    }

};


// removes all stored locations
export const deleteAll = () => {

    localStorage.removeItem('_weathy_locations_');
};



// checks if a particular location exists already
// @param string id
// @return boolean
export const exists = id => {

    //get existing locations
    let locs = getStorage('_weathy_locations_');

    // if nothing is in localStorage
    // return false

    if(locs === null) return false;

    // if there locations in localStorage
    // loop through and find location with the given id
    for(let loc in locs){

        if(loc.id === id) return true;
    }

    // if location does not exist
    // return false
    return false;
};

// returns the short format of a day from the Date object
// e.g Sun, Mon
// @param Date date
export const shortDay = date => {
    if(typeof date !== 'object' || !(date instanceof Date)){
        throw new Exception('Param must be a Date object')
    }

    let day = date.getUTCDay();

    switch(day){
        case 1:
            return 'Mon';
        
        case 2: 
            return 'Tue'
        
        case 3:
            return 'Wed'

        case 4:
            return 'Thu'

        case 5:
            return 'Fri'

        case 6:
            return 'Sat'

        default:
            return 'Sun'
    }
};


// returns date with two digits and 
// st, nd, rd, or th
export const doubleDate = date => {
    if(typeof date !== 'object' || !(date instanceof Date)){
        throw new Exception('Param must be a Date object')
    }

    let day = date.getUTCDate();
    let dateString = day.toString();

    switch(day){
        case 1 || 21:
            return dateString + 'st';
        case 2 || 22:
            return dateString + 'nd'
        case 3 || 23:
            return dateString + 'rd';
        default:
            return dateString + 'th';
    }
};
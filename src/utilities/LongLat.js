// returns the longitude and latitude of a city
// @param string city
// return mixed - object|null

const longLat = async city => {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

    await fetch(url, {
        method: 'get',
        headers: {
            'Accept': 'application/json;utf-8'
        }
        .then(response => response.json())
        .then(data =>{

            return {
                long: +data.coord.lon ,
                lat: +data.coord.lat
            };

        })
    })
    .catch(e => {
        console.log(e);
        return null;
    });
};

export default longLat;
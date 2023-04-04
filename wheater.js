//fetch wheater data from Oslo, Norway from api.met.no and display it on the screen
//the api has been used before in the project "weather forecast" on the course web app development 1
//also add a search field for latitude and longitude so that the user can search for a location and get the weather data for that location
// create a chart with the temperature data for the next 24 hours
//fetch api url below and parse the data to json format and display it on the screen in a table format
fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.913770000000056&lon=10.633240000000058")
//fetch("https://api.met.no/weatherapi/locationforecast/2.0/classic?lat=59.913129&lon=10.640499")
.then(response => response.json())
.then(data => {
    //console.log(data.properties.timeseries)
    let output = '<table class="table table-striped">';
    output += `
    <thead class="thead-dark">
        <tr>
            <th scope="col">Location</th>
            <th scope="col">Cordinates</th>
            <th scope="col">Time</th>
            <th scope="col">Temperature</th>
            <th scope="col">Wind speed</th>
            <th scope="col">Wind direction</th>
            <th scope="col">Cloud cover</th>
            <th scope="col">Air pressure</th>
            <th scope="col">Humidity</th>       
        </tr>
    </thead>
    `;
    //also add a search field for latitude and longitude so that the user can search for a location and get the weather data for that location
    data.properties.timeseries.forEach(function(element) {
        output += `
        <tr>
            <td>Lysaker, Norway</td>
            <td>59.913869, 10.752245</td>
            <td>${element.time}</td>
            <td>${element.data.instant.details.air_temperature} °C</td>
            <td>${element.data.instant.details.wind_speed} m/s</td>
            <td>${element.data.instant.details.wind_from_direction} degrees</td>
            <td>${element.data.instant.details.cloud_area_fraction} %</td>
            <td>${element.data.instant.details.air_pressure_at_sea_level} hPa</td>
            <td>${element.data.instant.details.relative_humidity} %</td>
        </tr>
        `;
    });
    output += '</table>';
    document.getElementById('output').innerHTML = output;
})
.catch(err => console.log(err));
const table = document.getElementById("output");
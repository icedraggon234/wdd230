const weatherElement = document.querySelector("#weather");
url = "https://api.openweathermap.org/data/2.5/weather?lat=40.53&lon=-112.00&units=imperial&appid=fde16edefe406554abd0f4c987b9d352"


async function getWeatherAPI() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            

            // console.table(data);
            // console.log(data.weather[0].description);
            // console.log(data.main.temp);
            // console.log(data.weather[0].icon);

            displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log("Somethings wrong...")
        console.log(error)
    }
}



function displayWeather(weatherData) {
    const temp = weatherData.main.temp;
    let description = weatherData.weather[0].description;
    const iconSource = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    const capitalizedDescription = capitalizeWords(description);

    const imgElement = `<img src="${iconSource}" alt="Icon for the current weather." height="50" width="50">`

    weatherElement.innerHTML = `${imgElement} ${temp}℉ - ${capitalizedDescription}`;
}


function capitalizeWords(string) {
    const words = string.split(" ");
    const capitalizedWords = words.map(word => {
        const capitalizedWord = `${word[0].toUpperCase()}${word.slice(1)}`;
        return capitalizedWord;
    });

    const capitalizedString = capitalizedWords.join(" ")

    return capitalizedString;
}


getWeatherAPI();


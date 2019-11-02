window.addEventListener('load', () => {
    let long;
    let lat;
    let tempDescription = document.querySelector('.temp-description');
    let tempDegree = document.querySelector('.temp-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let tempSection = document.querySelector('.temprature');
    let tempSectionSpan = document.querySelector('.temprature span');

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const api = `${proxy}https://api.darksky.net/forecast/7151ec49154cfc4d2cc0c3259e679378/${lat},${long}`;
            fetch(api)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    const { temperature, summary, icon } = data.currently;
                    // Set DOM elements
                    tempDegree.textContent = temperature
                    tempDescription.textContent = summary
                    locationTimezone.textContent = data.timezone

                    // formula for celsius
                    let celsius = (temperature - 32) * (5 / 9);

                    //set icons
                    setIcons(icon, document.querySelector('.icon'))

                    // Change temprature to Celsius/Farenheit
                    tempSection.addEventListener('click', () => {
                        if (tempSectionSpan.textContent === "F") {
                            tempSectionSpan.textContent = "C";
                            tempDegree.textContent = Math.floor(celsius);
                        } else {
                            tempSectionSpan.textContent = "F";
                            tempDegree.textContent = temperature;
                        }
                    })
                })
        });
    }

    function setIcons(icon, iconId) {
        const skycons = new Skycons({ "color": "white" });
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconId, Skycons[currentIcon])
    }
});
var moment = require('moment');
export function parseForecastJson(forecastJson) {

    let fiveDayForecast = []
    let currentDate = moment().date()
    for (let i = 1; i < forecastJson["list"].length; i += 3) {

        let fiveDayForecastObj = {}
        forecast = forecastJson["list"][i];
        let timeOfWeek = moment.unix(forecast["dt"]).format("dddd h A")
        fiveDayForecastObj["day"] = timeOfWeek
        fiveDayForecastObj["icon"] = forecast["weather"][0]["icon"]
        fiveDayForecastObj["temp"] = forecast["main"]["temp"]
        fiveDayForecast.push(fiveDayForecastObj)
    }
    return fiveDayForecast;
}
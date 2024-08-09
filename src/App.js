// function getWeatherIcon(wmoCode) {
//   const icons = new Map([
//     [[0], "☀️"],
//     [[1], "🌤"],
//     [[2], "⛅️"],
//     [[3], "☁️"],
//     [[45, 48], "🌫"],
//     [[51, 56, 61, 66, 80], "🌦"],
//     [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
//     [[71, 73, 75, 77, 85, 86], "🌨"],
//     [[95], "🌩"],
//     [[96, 99], "⛈"],
//   ]);
//   const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
//   if (!arr) return "NOT FOUND";
//   return icons.get(arr);
// }

// function convertToFlag(countryCode) {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => 127397 + char.charCodeAt());
//   return String.fromCodePoint(...codePoints);
// }

// function formatDay(dateStr) {
//   return new Intl.DateTimeFormat("en", {
//     weekday: "short",
//   }).format(new Date(dateStr));
// }

// async function getWeather(location) {
//   try {
//     // 1) Getting location (geocoding)
//     const geoRes = await fetch(
//       `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
//     );
//     const geoData = await geoRes.json();
//     console.log(geoData);

//     if (!geoData.results) throw new Error("Location not found");

//     const { latitude, longitude, timezone, name, country_code } =
//       geoData.results.at(0);
//     console.log(`${name} ${convertToFlag(country_code)}`);

//     // 2) Getting actual weather
//     const weatherRes = await fetch(
//       `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
//     );
//     const weatherData = await weatherRes.json();
//     console.log(weatherData.daily);
//   } catch (err) {
//     console.err(err);
//   }
// }

import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleDecrement() {
    console.log(this);
    this.setState((currState) => {
      return {
        count: currState.count - 1,
      };
    });
  }

  handleIncrement() {
    console.log(this);
    this.setState((currState) => {
      return {
        count: currState.count + 1,
      };
    });
  }

  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {" "}
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
export default Counter;

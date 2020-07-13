const displayTime = (time) => {
  const dateArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

  const monthArr = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'Jun.',
    'July',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.',
  ];

  const hour = time.getHours();
  const mins = time.getMinutes();
  const day = dateArr[time.getDay()];
  const date = time.getDate();
  const month = monthArr[time.getMonth()];
  const year = time.getFullYear();
  return {
    hour, date, mins, day, year, month
  };
};

const calcTime = (tZone) => {
  // offset in hours
  const offset = tZone / 3600;

  // create Date object for current location
  const d = new Date();

  // convert to msec
  // add local time zone offset
  // get UTC time in msec
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;

  // create new Date object for different city
  // using supplied offset
  return new Date(utc + 3600000 * offset);
};

const weatherFactory = (cityData) => {
  const { timezone } = cityData;

  return {
    ...cityData,
    getCloud() {
      return this.clouds ? this.clouds.all : 0;
    },
    getHumidity() {
      return this.main ? this.main.humidity : 0;
    },
    getWindSpeed() {
      return this.wind ? this.wind.speed : 0;
    },
    getTemperature() {
      return this.main ? this.main.temp : 0;
    },
    convertTime(tz) {
      return calcTime(tz);
    },
    getDayInfo() {
      const date = this.convertTime(timezone);
      return displayTime(date);
    },
    dateFormat() {
      if (!timezone) return '';

      const {
        hour, mins, day, date, month, year
      } = this.getDayInfo();

      return `${hour}:${mins} - ${day}, ${date} ${month} ${year}`;
    },
  };
};

export default weatherFactory;

const _ = require('lodash');
const moment = require('moment');

const holidays = [
  { name: 'Christmas', date: '2024-12-25' },
  { name: 'Canada Day', date: '2024-07-01' },
  { name: 'New Year', date: '2024-01-01' }
];

const calculateDaysUntilHoliday = (holidayDate) => {
  return moment(holidayDate).diff(moment(), 'days');
};

holidays.forEach(holiday => {
  const daysUntil = calculateDaysUntilHoliday(holiday.date);
  console.log(`${holiday.name}: ${daysUntil} days until the holiday`);
});

const randomHoliday = _.sample(holidays);
console.log(`Random Holiday: ${randomHoliday.name}, Date: ${randomHoliday.date}`);

const christmasIndex = _.findIndex(holidays, { name: 'Christmas' });
const canadaDayIndex = _.findIndex(holidays, { name: 'Canada Day' });

console.log(`Index of Christmas: ${christmasIndex}`);
console.log(`Index of Canada Day: ${canadaDayIndex}`);

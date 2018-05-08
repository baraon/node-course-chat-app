var moment = require('moment');

var createdAt = 1234;

var date = moment(createdAt);
//date.add(1, 'year').subtract(9, 'months');
console.log(date.format('h:mm a'));

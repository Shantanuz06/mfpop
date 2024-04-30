"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function add(x, y) {
    return x + y;
}
exports.add = add;
const moment = require('moment');
function formatDate(date, date_format, required_date_format) {
    // Parse the input date using the specified format
    const parsedDate = moment(date, date_format);
    // Format the parsed date according to the required format
    const formattedDate = parsedDate.format(required_date_format);
    // Return the formatted date
    return formattedDate;
}
// Example usage:
const inputDate = "2001-05-01";
const inputFormat = "YYYY-MM-DD";
const outputFormat = "DD-MM-YYYY";
const formattedDate = formatDate(inputDate, inputFormat, outputFormat);
console.log(formattedDate); // Output: 01-05-2001

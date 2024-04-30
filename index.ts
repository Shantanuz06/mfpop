const moment = require('moment');



export function formatDate(date:any, date_format:any, required_date_format:any) {
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
function formatDate(date, currentFormat, requiredFormat) {
    const dt = luxon_1.DateTime.fromFormat(date.replace(/-/g, ' '), currentFormat.replace(/-/g, ' '));
    return dt.toFormat(requiredFormat.replace(/-/g, ' ')).replace(/ /g, '-');
}
exports.default = formatDate;

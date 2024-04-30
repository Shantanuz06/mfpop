import { DateTime } from "luxon";

export default function formatDate(date: string, currentFormat: string, requiredFormat: string): string {
    
    const dt = DateTime.fromFormat(date.replace(/-/g, ' '), currentFormat.replace(/-/g, ' '));
   
    return dt.toFormat(requiredFormat.replace(/-/g, ' ')).replace(/ /g, '-');
}   
const moment = require('moment');
class Utility {
    constructor() { }

    async sendResponse(data, status) {
        const respObj = {
            status: status,
            message: "success",
            data: data
        }
        return respObj
    }

    async errorResponse(errorMessage, status) {
        const respObj = {
            status: status,
            message: errorMessage,
        }
        return respObj
    }
    
    static toDate(date) {
        // if (!date || !(date instanceof Date)) {
        //     throw new Error('Invalid input: Expected a Date object');
        // }
        const momentDate = moment(date)
        const FormattedDate = momentDate.format('YYYY-MM-DDTHH:mm:ss');

        // Return the formatted date string
        return FormattedDate;
    }

    static formattedDate(date){
        const momentDate = moment(date);
        const FormattedDate = momentDate.format('YYYY-MM-DD');

        return FormattedDate
    }
}

module.exports = Utility


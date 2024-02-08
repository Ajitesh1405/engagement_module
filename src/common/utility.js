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
}

module.exports = Utility
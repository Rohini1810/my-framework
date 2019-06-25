export default {
    /**
     * This function adds one to its input.
     * @param {number} input any number
     * @returns {number} that number, plus one.
     */
    search: async function(_query, callback) {
        const company = await Company.find().exec()
        callback(null, company)
    },
    getOne(data, callback) {
        Company.findOne({
            _id: data.id
        }).exec(callback)
    },
    saveData: (data, callback) => {
        const company = new Company(data)
        company.save(callback)
    }
}

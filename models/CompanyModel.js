/* eslint-disable no-undef */
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

    /**
     * 
     * @param {object} data  input given to a function as an argument
     * @param {object} callback returns data for given object_id
     */
    getOne(data, callback) {
        Company.findOne({
            _id: data.id
        }).exec(callback)
    },

    /**
     * @param {object} data  enter the input data 
     * @param {object} callback sends the data to the backend
     * 
     */
    saveData: (data, callback) => {
        const company = new Company(data)
        company.save(callback)
    },


    /**
     * 
     * @param{object} data input as a given id
     * @param{} bodydata
     * @param{} callback 
     * 
     */
    updateData: (data, bodydata, callback) => {
        const company= Company.findOneAndUpdate(
            { _id: data.id },
            { $set: bodydata },
            {
                new: true
            }
        ).exec(callback)
    },

    
    deleteData:(data,callback)=>{
        Company.deleteOne({_id: data.id 

        }).exec(callback)
    },

    /**
     * 
     * @returns output value of a function as total number of document
     * 
     */
    countData:(data,callback)=>{
        Company.find({}).count().exec(callback)
    } ,  
    
}

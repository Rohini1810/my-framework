var schema = new Schema({
    name: String,
    email: String
})
export default mongoose.model("Company", schema)

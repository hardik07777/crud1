import mongoose from "mongoose";

const productschema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    price:{
        type : Number,
        required : true,
    },
    image :{
        type : String,
        required : true,
    }

},{
    timestamps : true, // it will create two more fields automatically createdAt and updatedAt
});

const Product = mongoose.model("Product", productschema); // here inside the model the first field is the name of the collection  and second is the name of the schema
// we should make name of collection singular and first letter to be capital
export default Product;
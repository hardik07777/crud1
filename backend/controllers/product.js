// controller folder is used to optimize and separate the logic of routes and controllers
// all the logic of routes will be written here
import mongoose from "mongoose";
import Product from "../model/Product.js";


export const createProduct = async (req,res)=>{
    const product = req.body ; // user will send the product details in the body  
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success : false , message : "please provide all the fields"})
    }
    // if this check completes then we will save the product in database

    const newproduct = new Product(product); // this will create a new instance of the product model
    try {
       await newproduct.save(); // this will save the product in database
       res.status(201).json({success : true , data : newproduct}) 
    } catch (error) {
        console.log("error :",error.message);
        res.status(500).json({success : false , message: " server error"})
    }


}
export const deleteProduct = async(req,res)=>{ // here :id is a placeholder for the actual id of the product to be deleted , : shows that the id is dynamic
    const {id} = req.params; // getting the id from the params
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success : true , message : "product deleted successfully"})

        
    } catch (error) {
        res.status(500).json({success : false , message : "product not found"})
        
    }

}
export const updateProduct = async(req,res)=>{
    const {id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success : false , message : "invalid id"})
    }
    try {
        const updatedproduct = await Product.findByIdAndUpdate(id , product , {new : true}); // new true means it will return the updated product
        res.status(200).json({success : true , data : updatedproduct})
    } catch (error) {
        res.status(500).json({success : false , message : "server error"})
    }

}
export const showProduct = async(req,res)=>{
    const products = await Product.find({});
    try {
        res.status(200).json({success : true , data : products})  ;  
    } catch (error) {
        res.status(500).json({success : false , message : "server error"}) 
    }

}
const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});



const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is:", req.body);
    const{name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");  
     }const contact = await Contact.create({
        name,
        email,
        phone,
     });

    res.status(201).json(contact);
});


const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contacts for ${req.params.id}` });
});
  
const updateContact = asyncHandler(async (req, res) => {
    res.status(201).json({ message: `Update all contacts for ${req.params.id}` });
});


const deleteContact = asyncHandler(async (req, res) => {
    res.status(201  ).json({ message: `Delete contacts for ${req.params.id}`});
}) ;

module.exports = { 
    getContacts, 
    deleteContact,
    getContact, 
    updateContact, 
    createContact }
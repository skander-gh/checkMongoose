const express=require('express')
const Contact = require("../models/Contact")
const router=express.Router()


router.get('/test',(req,res)=>{
    res.send("server connected")
})

router.post("/",async (req,res)=>{
    const{name,email,age}=req.body;
    try {
        const contact= new Contact({
            name,email,age
        })
        await contact.save()
        res.send({msg : 'msg added',contact})
    } catch (error) {
        res.status(500).send('error')
    }
})

router.get("/",async (req,res)=>{
    try {
        const contact=await Contact.find()
        res.send(contact)
    } catch (error) {
        res.status(500).send('error server')

    }
})

router.delete("/:contactId",async (req,res)=>{
    const { contactId }=req.params;
    try {
        await Contact.findByIdAndDelete(contactId)
        res.send('contact deleted')
    } catch (error) {
        res.status(500).send('error')
    }
})
router.put("/:contactId",async(req,res)=>{
    const { contactId }=req.params;
    try {
        await Contact.findByIdAndUpdate(contactId)  
        res.send('contact updated')
    } catch (error) {
        res.status
    }

})

module.exports=router
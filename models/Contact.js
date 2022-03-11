const mongoose=require('mongoose')
const schema=mongoose.Schema

const contactschema=new schema({

    name: {
        type:String,
        required : true
    },
    email: {
        type:String,
        required : true
    },
    age : {
        type:Number,
        required : true
    },
})

module.exports=mongoose.model('Contact',contactschema)


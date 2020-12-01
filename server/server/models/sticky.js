import mongoose from 'mongoose';

//schema defined to indicate to the api call which fields are required.
const stickySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            // mandatory field
            required: true
        },
        description: {
            type: String,
            // mandatory field
            required: true
        },
        duedate: {
            type: String,
            unmodifiable: true
            // to not allow users to modify the content
            
        },
        //date defined to understand the last operation performed on the JSON document
        time: {
            type: String
        },
        completed:{
            type: Boolean
        }
    }, 
    {
        versionKey : false
    }
    
);

//creates the virtual property called id and converts it to hexadecimal string
stickySchema.virtual('id').get(function() {
    return this._id.toHexString();
});

//convert virtual id to json    
stickySchema.set('toJSON' , { virtuals : true})

const model = mongoose.model('Sticky' , stickySchema)

export default model;
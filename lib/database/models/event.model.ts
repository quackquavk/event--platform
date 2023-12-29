import { Schema , model , models } from "mongoose";

import { Document, Types } from 'mongoose';

export interface IEvent extends Document {
    _id: String
    title: string;
    description?: string;
    location: string;
    createdAt?: Date;
    startDateTime?: Date;
    endDateTime?: Date;
    isFree: boolean;
    url?: string;
    category: {_id:string , name:string}; // Assuming 'Category' has a corresponding schema
    organizer:  {_id:string ,firstName:string , lastName: string}; // Assuming 'User' has a corresponding schema
}


const EventSchema = new Schema ({
    title : {type:String , required:true},
    description:{type:String },
    location:{type:String , required:true},
    createdAt :{type:Date ,default: Date.now},
    startDateTime: {type:Date ,default: Date.now},
    endDateTime:{type:Date ,default: Date.now},
    isFree:{type:Boolean ,default: false},
    url: {type:String},
    category: {type:Schema.Types.ObjectId , ref:'Category'},
    organizer: {type:Schema.Types.ObjectId , ref:'User'}
})

const Event = models.Event  || model("Event" , EventSchema);

export default Event
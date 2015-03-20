// Add the autoform package by executing these two commands before using this schema 
// meteor add aldeed:autoform
// meteor add aldeed:collection2

Volunteer = new Mongo.Collection(volunteer);
Volunteer.attachSchema(new SimpleSchema({

   volunteer:{  
      type:Number,
      label:"",
      optional:""
   },
   name:{  
      type:String,
      label:"Name",
      optional:FALSE
   },
   gender:{  
      type:String,
      label:"Gender",
      optional:FALSE
   },
   dob:{  
      type:Date,
      label:"Date of Birth",
      optional:FALSE
   },
   mobile:{  
      type:Number,
      label:"Mobile",
      optional:FALSE
   },
   mobile_alt:{  
      type:Number,
      label:"Alternate phone",
      optional:TRUE
   },
   email:{  
      type:String,
      label:"Email",
      optional:TRUE
   },
   skype_id:{  
      type:String,
      label:"Skype Id",
      optional:TRUE
   },
   hometown:{  
      type:String,
      label:"Hometown",
      optional:FALSE
   },
   homestate:{  
      type:String,
      label:"Home State",
      optional:FALSE
   },
   current_city:{  
      type:String,
      label:"Current City",
      optional:FALSE
   },
   current_timezone:{  
      type:String,
      label:"Current Timezone",
      optional:FALSE
   },
   education:{  
      type:String,
      label:"Postgraduate College",
      optional:FALSE
   },
   profession:{  
      type:String,
      label:"Current Professional Status",
      optional:FALSE
   },
   languages:
   	{  
      type:Array,
      label:"Languages Spoken",
      optional:FALSE
      minCount:1,
      maxCount:10
   },
      "languages.$": {
      type: Object
   },
   "languages.$.language": {
      type: String
      optional: false
   },
   "items.$.proficiency": {
      type: String
      optional: false
   }
}));

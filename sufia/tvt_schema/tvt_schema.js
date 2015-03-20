Volunteer = new Mongo.Collection("volunteer");
Volunteer.attachSchema(new SimpleSchema({

   volunteer_id:{  
      type:Number,
      label:"id",
      optional:false
   },
   name:{  
      type:String,
      label:"Name",
      optional:false
   },
   gender:{  
      type:String,
      label:"Gender",
      optional:false
   },
   dob:{  
      type:Date,
      label:"Date of Birth",
      optional:false
   },
   mobile:{  
      type:Number,
      label:"Mobile",
      optional:false
   },
   mobile_alt:{  
      type:Number,
      label:"Alternate phone",
      optional:true
   },
   email:{  
      type:String,
      label:"Email",
      optional:true
   },
   skype_id:{  
      type:String,
      label:"Skype Id",
      optional:true
   },
   hometown:{  
      type:String,
      label:"Hometown",
      optional:false
   },
   homestate:{  
      type:String,
      label:"Home State",
      optional:false
   },
   current_city:{  
      type:String,
      label:"Current City",
      optional:false
   },
   current_timezone:{  
      type:String,
      label:"Current Timezone",
      optional:false
   },
   education:{  
      type:String,
      label:"Postgraduate College",
      optional:false
   },
   profession:{  
      type:String,
      label:"Current Professional Status",
      optional:false
   },
   languages:
    {  
      type:Array,
      label:"Languages Spoken",
      optional:false,
      minCount:1,
      maxCount:10
   },
      "languages.$": {
      type: Object,
      optional: false
   },
   "languages.$.language": {
      type: String
   },
   "languages.$.proficiency": {
      type: String
   }
}));


if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

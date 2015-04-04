AppController = RouteController.extend({
  layoutTemplate: 'appLayout'
});

AppController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});

VolSignUpController = AppController.extend({
  layoutTemplate: 'appLayout'
});


// // Volunteer = new Mongo.Collection("volunteer");
// currentUserId = function () {
//   return Meteor.userId()};
// Volunteer.attachSchema(new SimpleSchema({
//    createdAT: {
//     type: String,
//     autoform: {
//       type: "hidden",
//       label: false
//     },
//     defaultValue: new Date()
//   },
//   volunteer_id: {
//     type:String,
//     autoform: {
//       type: "hidden",
//       label: false
//     },
//     defaultValue: currentUserId
//   },

//    status: {
//        type: String,
//        autoform: {
//          type: "hidden",
//          label: false
//        },
//        defaultValue: "Pending"
//      },

//    name:{  
//       type:String,
//       label:"Name",
//       optional:false,
//       // setDefault: "sufia"
//    },
//    gender:{  
//       type:String,
//       label:"Gender",
//       // setDefault : "Female",
//       optional:true,
//       autoform: {
//       type: "select-radio-inline",
//       options: function () {
//         return [
//           {label: "Male", value: "Male"},
//           {label: "Female", value: "Female"}
//         ];
//         }
//       }  
//     },
//    dob:{  
//       type:Date,
//       // setDefault : "1/1/1980",
//       label:"Date of Birth",
//       optional:true
//    },
//    mobile:{  
//       type:Number,
//       // setDefault: 2222,
//       label:"Mobile",
//       optional:true
//    },
//    mobile_alt:{  
//       type:Number,
//       // setDefault: 2222,
//       label:"Alternate phone",
//       optional:true
//    },
//    email:{  
//       type:String,
//       label:"Email",
//       optional:true,
//       // setDefault : "test@test.com"
//    },
//    skype_id:{  
//       type:String,
//       label:"Skype Id",
//       optional:true,
//       // setDefault : "test"
//    },
//    hometown:{  
//       type:String,
//       label:"Hometown",
//       optional:true,
//       // setDefault : "Dubai"
//    },
//    homestate:{  
//       type:String,
//       label:"Home State",
//       optional:true,
//       // setDefault : "Bihar"
//    },
//    current_city:{  
//       type:String,
//       label:"Current City",
//       optional:true,
//       // setDefault : "berkeley"
//    },
//    current_timezone:{  
//       type:String,
//       label:"Current Timezone",
//       optional:true,
//       // setDefault : "pst"
//    },
//    education:{  
//       type:String,
//       label:"Postgraduate College",
//       optional:true,
//       // setDefault : "mims"
//    },
//    profession:{  
//       type:String,
//       label:"Current Professional Status",
//       optional:true,
//       // setDefault : "student"
//    },
//    languages:
//     {  
//       type:Array,
//       label:"Languages Spoken",
//       optional:true,
//       minCount:1,
//       maxCount:10
//    },
//       "languages.$": {
//       type: Object,
//       optional: false
//    },
//    "languages.$.language": {
//       type: String,
//       // setDefault : "hindi"
//    },
//    "languages.$.proficiency": {
//       type: String,
//       autoform: {
//          type: "select-radio-inline",
//          options: function () {
//            return [
//              {label: "High", value: "High"},
//              {label: "Medium", value: "Medium"},
//              {label: "Medium", value: "Low"}
//            ];
//            }
//          }
//       // setDefault : "low"
//    }
// }));

// if (Meteor.isClient) {
//    console.log("hello client");
//    // Upon submit use iron router to route to another page:
//    // "http://stackoverflow.com/questions/21475671/how-to-navigate-to-new-page-when-click-on-submit-button-using-meteor-js"
//   // Template.insertVolunteerForm.events({
//             // Display the filled up form here or some sort of confirmation
//   //   }
//   // });
// }

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     // code to run on server at startup
//   })
// }

// Create a new MongoDB collection for calendar events

// Set session defaults
Session.setDefault('editing_calevent', null);
Session.setDefault('showEditEvent', false);
Session.setDefault('volunteer_id', 90);

Template.calendar.showEditEvent = function() {
        return Session.get('showEditEvent');
}

Template.editEvent.evt = function() {
        // run a query to the database
        var calEvent = CalEvents.findOne({
                _id: Session.get('editing_calevent')
        });
        return calEvent;
}

var updateCalendar = function() {
        $('#calendar').fullCalendar('refetchEvents');
}

// If something with a class of .save in the editEvent template is clicked, run this function
Template.editEvent.events({
        'click .save': function(evt, tmpl) {
                console.log(evt);
                //                updateCalEvent(Session.get('editing_calevent'), tmpl.find('.title').value);
                updateCalEvent(Session.get('editing_calevent'), 'true');
                Session.set('editing_calevent', null);
                Session.set('showEditEvent', false);
        },
        'click .close': function(evt, tmpl) {
                Session.set('editing_calevent', null);
                Session.set('showEditEvent', false);
                $('#EditEventModal').modal("hide");
        },
        'click .remove': function(evt, tmpl) {
                removeCalEvent(Session.get('editing_calevent'));
                Session.set('editing_calevent', null);
                Session.set('showEditEvent', false);
                $('#EditEventModal').modal("hide");
        }
})

// Fullcalendar package
// As soon as the calendar renders, it has to execute this function
Template.calendar.rendered = function() {
        updateCalendar();
        $('#calendar').fullCalendar({
                header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                },
                'defaultView': 'agendaWeek',
                'weekMode': 'liquid',
                'minTime': '08:00:00',
                'maxTime': '20:00:00',
                'firstDay': 1,
                contentHeight: 500,
                aspectRatio: 20,
                'hiddenDays': [7],
                'slotDuration': '00:30:00',
                'allDayDefault': false,
                'editable': false,
                'allDaySlot': false,
                defaultEventMinutes: 60,
                forceEventDuration: true,
                defaultTimedEventDuration: '00:60:00',
                // Event triggered when someone clicks on a day in the calendar
                dayClick: function(date, allDay, jsEvent, view) {
                        // Insert the day someone's clicked on
                        var indate = date;
                        //                  var end                      = indate._d;
                        console.log(indate);
                        //                  console.log(end);
                        CalEvents.insert({
                                title: 'New Class',
                                start: date
                        });
                        // Refreshes the calendar
                        updateCalendar();
                },
                eventClick: function(calEvent, jsEvent, view) {
                        // Set the editing_calevent variable to equal the calEvent.id
                        Session.set('editing_calevent', calEvent.id);
                        // Set the showEditEvent variable to true
                        Session.set('showEditEvent', true);
                        //Trigger the modal bootstrap 3 box as defined in the calendar.html page
                        $('#EditEventModal').modal("show");

                },
                eventDrop: function(calEvent) {
                        CalEvents.update(calEvent.id, {
                                $set: {
                                        start: calEvent.start,
                                        end: calEvent.end
                                }
                        });
                        updateCalendar();
                },
                events: function(start, end, callback) {
                        // Create an empty array to store the events
                        var events = [];
                        // Variable to pass events to the calendar
                        // Gets us all of the calendar events and puts them in the array
                        //                        calEvents = CalEvents.find({assigned:null});
                        calEvents = CalEvents.find();
                        // Do a for each loop and add what you find to events array
                        calEvents.forEach(function(evt) {
                                events.push({
                                        id: evt._id,
                                        title: evt.title,
                                        start: evt.start,
                                        end: evt.end
                                });
                        })

                        // Callback to pass events back to the calendar
                        callback(events);
                },
                editable: true
        });
}
var removeCalEvent = function(id, title) {
        CalEvents.remove({
                _id: id
        });
        updateCalendar();
}
var updateCalEvent = function(id, title) {
        CalEvents.update(id, {
                $set: {
                        assigned: 'true'
                }
        });
        console.log(id + " " + Session.get('volunteer_id'));
        StudentVolunteer.insert({
                student_id: id,
                voluteer_id: Session.get('volunteer_id'),
				start:CalEvents.findOne({_id : id},{start:1,_id:0})
        });
        updateCalendar();
}

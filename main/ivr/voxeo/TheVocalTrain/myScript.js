// var data = '{"5105299695":"Siddharth", "4439946671":"Sufia"}';
// var jsonData = JSON.parse(data);

// function getNameFrom(callerID)
// {
//       var callerName = null;
//       callerName = jsonData.callerID;
//       return callerName;
//       // return "Siddharth";
// }

function getNameFrom(callerID) {
	var callerName = "undefined";
	var data={"users":[
	            {
	                "firstName":"Siddharth",
	                "lastName":"Agrawal",
	                "phoneNumber":"5105299695",
	                "joined": {
	                    "month":"January",
	                    "day":12,
	                    "year":2012
	                }
	            },
	            {
	                "firstName":"Sufia",
	                "lastName":"Siddiqui",
	                "phoneNumber":"4439946671",
	                "joined": {
	                    "month":"April",
	                    "day":28,
	                    "year":2010
	                }
	            },
	            {
	                "firstName":"Swapnil",
	                "lastName":"Dixit",
	                "phoneNumber":"5106122178",
	                "joined": {
	                    "month":"April",
	                    "day":7,
	                    "year":2015
	                }
	            },
	            {
	                "firstName":"Ankita",
	                "lastName":"Bhosle",
	                "phoneNumber":"5106465871",
	                "joined": {
	                    "month":"April",
	                    "day":7,
	                    "year":2015
	                }
	            },
	            {
	                "firstName":"Divya",
	                "lastName":"Menghani",
	                "phoneNumber":"4159993161",
	                "joined": {
	                    "month":"April",
	                    "day":7,
	                    "year":2015
	                }
	            }
	    ]}

	for (var i in data.users) {
		if (data.users[i].phoneNumber == callerID) {
			callerName = data.users[i].firstName;
		};
        // output+="<li>" + data.users[i].firstName + " " + data.users[i].lastName + "--" + data.users[i].joined.month+"</li>";
    }

    return callerName;

	//document.getElementById("demo").innerHTML=data.users[0].firstName + " " + data.users[0].lastName+"--"+ data.users[0].joined.month;
}
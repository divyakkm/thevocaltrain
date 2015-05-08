$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            Students: 2666,
            Volunteers: null,
            phoneSessions: 2647,
            ivrSessions: 2647
        }, {
            period: '2010 Q2',
            Students: 2778,
            Volunteers: 2294,
            phoneSessions: 2441,
            ivrSessions: 3647
        }, {
            period: '2010 Q3',
            Students: 4912,
            Volunteers: 1969,
            phoneSessions: 2501,
            ivrSessions: 4647
        }, {
            period: '2010 Q4',
            Students: 3767,
            Volunteers: 3597,
            phoneSessions: 5689,
            ivrSessions: 5647
        }, {
            period: '2011 Q1',
            Students: 6810,
            Volunteers: 1914,
            phoneSessions: 2293,
            ivrSessions: 6647
        }, {
            period: '2011 Q2',
            Students: 5670,
            Volunteers: 4293,
            phoneSessions: 1881,
            ivrSessions: 7647
        }, {
            period: '2011 Q3',
            Students: 4820,
            Volunteers: 3795,
            phoneSessions: 1588,
            ivrSessions: 8647
        }, {
            period: '2011 Q4',
            Students: 15073,
            Volunteers: 5967,
            phoneSessions: 5175,
            ivrSessions: 9647
        }, {
            period: '2012 Q1',
            Students: 10687,
            Volunteers: 4460,
            phoneSessions: 2028,
            ivrSessions: 9947
        }, {
            period: '2012 Q2',
            Students: 8432,
            Volunteers: 5713,
            phoneSessions: 1791,
            ivrSessions: 10647
        }],
        xkey: 'period',
        ykeys: ['Students', 'Volunteers', 'phoneSessions', 'ivrSessions'],
        labels: ['Students', 'Volunteers', 'Phone Sessions', 'IVR Sessions'],
        xLabels:["month"],
        pointSize: 2,
        hideHover: 'auto',
        lineColors: ['#337AB7','#5CB85C','#F0AD4E', '#D9534F'],
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});

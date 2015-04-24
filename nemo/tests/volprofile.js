// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
	test.equal(true, true);
});

if (Meteor.isClient) {
	console.log("tinytests, client");
}

Tinytest.addAsync('Click increases score', function (test, done) {
	var $player = $('ol.leaderboard .player').eq(1);
	var getScore = function () {
		return parseInt($player.find('.score').html(), 10);
	};
	var startScore = getScore();
	$player.trigger('click');

	Meteor.setTimeout(function () {
		$('.details button.inc').trigger('click');
		Meteor.setTimeout(compareScore, 100)
	}, 10)

	var compareScore = function () {
		test.equal(getScore(), startScore + 5);
		done();
	};
});
$(function () {
	console.log("window loaded")
	var number
	$('h1').each( function ( i, d ) {
		number = number || 800
		stylizeWords($(d), number)
		number += 100
	});
	var s = skrollr.init({
		render: function(data) {
		  //Log the current scroll position.
		  $('#info').text(data.curTop);
		}, 
    smoothScrolling : 'true'
	});
});

function stylizeWords ($dom, skroll) {
	var s = skroll
	var interval = skroll + 0
	$dom.lettering().children().each(function (index, child) {
		var obj = {}
		var data1 = 'data-'+interval
		var data2 = 'data-'+(interval + 100)
		obj[data1] = "opacity: 0"
		obj[data2] = "opacity: 1"
		$(child).attr( obj )
		interval += 50
	})
}
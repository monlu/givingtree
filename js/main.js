$(function () {
	console.log("window loaded")
	var number

	// $('.fade').each( function ( i, d ) {
	// 	number = number || 300
	// 	stylizeWords($(d), number, 100, 50, "fade")
	// 	number += 100
	// });

	$('.fade').each( function ( i, d ) {
		number = number || 300
		stylizeWords($(d), number, 100, 50, "fade")
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

function stylizeWords ($dom, skroll, skrollInterval, letterInterval, effect) {
	var s = skroll
	var interval = skroll + 0
	$dom.lettering().children().each(function (index, child) {
		var obj = {}
		var data1 = 'data-'+interval
		var data2 = 'data-'+(interval + skrollInterval)

		if(effect == "fade"){
			obj[data1] = "opacity: 0;"
			obj[data2] = "opacity: 1;"
		}
		else if(effect == "fall") {
			obj[data1] = "opacity: 0; opacity: 1; transform: translateY(-20px);"
			obj[data2] = "opacity: 1; opacity: 1; transform: translateY(0px); display: inline-block;"
		}

		$(child).attr( obj )
		interval += letterInterval
	})
}
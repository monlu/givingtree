$(function () {
	console.log("window loaded")

	var number
	scrolltop = 0

	$('.fade').each( function ( i, d ) {
		number = number || 300
		stylizeWords($(d), number, 100, 50, "fade")
		number += 100
	});

	var number2
	$('#boyasks').each( function ( i, d ) {
		number2 = number2 || 51500
		stylizeWords($(d), number2, 100, 50, "fade")
		number2 += 100
	});

	var number3
	$('#boyasks_wtf').each( function ( i, d ) {
		number3 = number3 || 58400
		stylizeWords($(d), number3, 100, 50, "fade")
		number3 += 100
	});

	var number4
	$('#boyasks3').each( function ( i, d ) {
		number4 = number4 || 61300
		stylizeWords($(d), number4, 100, 50, "fade")
		number4 += 100
	});

	var number5
	$('#boyasks4').each( function ( i, d ) {
		number5 = number5 || 66000
		stylizeWords($(d), number5, 100, 50, "fade")
		number5 += 100
	});

	var number6
	$('#manasks').each( function ( i, d ) {
		number6 = number6 || 89500
		stylizeWords($(d), number6, 100, 50, "fade")
		number6 += 100
	});

	var number7
	$('#manasks2').each( function ( i, d ) {
		number7 = number7 || 93600
		stylizeWords($(d), number7, 100, 50, "fade")
		number7 += 100
	});

	var number8
	$('#manasks3').each( function ( i, d ) {
		number8 = number8 || 100300
		stylizeWords($(d), number8, 100, 50, "fade")
		number8 += 100
	});

	var number9
	$('#oldmanasks').each( function ( i, d ) {
		number9 = number9 || 114900
		stylizeWords($(d), number9, 100, 50, "fade")
		number9 += 100
	});

	var number10
	$('#oldmanasks2').each( function ( i, d ) {
		number10 = number10 || 116800
		stylizeWords($(d), number10, 100, 50, "fade")
		number10 += 100
	});

	var number11
	$('#oldmanasks3').each( function ( i, d ) {
		number11 = number11 || 122700
		stylizeWords($(d), number11, 100, 50, "fade")
		number11 += 100
	});

	var number12
	$('#geezerasks').each( function ( i, d ) {
		number12 = number12 || 136000
		stylizeWords($(d), number12, 100, 50, "fade")
		number12 += 100
	});

	var number13
	$('#geezerasks2').each( function ( i, d ) {
		number13 = number13 || 140300
		stylizeWords($(d), number13, 100, 50, "fade")
		number13 += 100
	});

	var number14
	$('#geezerasks3').each( function ( i, d ) {
		number14 = number14 || 142600
		stylizeWords($(d), number14, 100, 50, "fade")
		number14 += 100
	});

	var number15
	$('#geezerasks4').each( function ( i, d ) {
		number15 = number15 || 145600
		stylizeWords($(d), number15, 100, 50, "fade")
		number15 += 100
	});

	var number16
	$('#geezerasks5').each( function ( i, d ) {
		number16 = number16 || 148000
		stylizeWords($(d), number16, 100, 50, "fade")
		number16 += 100
	});

	var number17
	$('#geezerasks6').each( function ( i, d ) {
		number17 = number17 || 150400
		stylizeWords($(d), number17, 100, 50, "fade")
		number17 += 100
	});

	var number18
	$('#geezerasks7').each( function ( i, d ) {
		number18 = number18 || 152300
		stylizeWords($(d), number18, 100, 50, "fade")
		number18 += 100
	});

	var number19
	$('#geezerasks8').each( function ( i, d ) {
		number19 = number19 || 158900
		stylizeWords($(d), number19, 100, 50, "fade")
		number19 += 100
	});

	var number20
	$('#geezerasks9').each( function ( i, d ) {
		number20 = number20 || 163600
		stylizeWords($(d), number20, 100, 50, "fade")
		number20 += 100
	});


	var pages = [2600, 6100, 9500, 13700]
	var p = [1800, 6713, 14307, 17600, 22384, 25643, 28630, 33423, 37607, 39179, 41468, 45668, 48769, 74484, 83457, 87464, 107144, 111546, 114291, 127429, 131037, 132516, 135174, 169925]



	function scrollPage (pageIndex, time) {
		var page = pages[pageIndex]
		var lastPage = pages[pageIndex - 1] || 0
		var pageDiff = page - lastPage
		$("html, body").animate({ scrollTop: page+"px"}, ( ( (page-scrolltop) / pageDiff ) * time ) );
	}

	function scrollLastPage (pageIndex, time) {
		var page = pages[pageIndex]
		var lastPage = pages[pageIndex - 1] || 0
		var pageDiff = page - lastPage
		$("html, body").animate({ scrollTop: lastPage+"px"}, ( ( (scrolltop-lastPage) / pageDiff ) * time ) );
	}

	$('#up').click( function (e) {
		switch(true) {
			case (scrolltop < pages[0]):
				scrollPage(0, 5000)
				return false
			case (scrolltop < pages[1]):
				scrollPage(1, 6000)
				return false
			case (scrolltop < 9500):
				$("html, body").animate({ scrollTop: "9500px"}, 5000);
				return false
			case (scrolltop < 13700):
				$("html, body").animate({ scrollTop: "13700px"}, 6000);
				return false
		}
	})

	$('#down').click( function (e) {
		switch(true) {
			case (scrolltop <= pages[0]):
				scrollLastPage(0, 5000)
				return false
			case (scrolltop <= pages[1]):
				scrollLastPage(1, 6000)
				return false
		}
	})

	var s = skrollr.init({
		render: function(data) {
		  //Log the current scroll position.
		  $('#up').text(data.curTop);
		  scrolltop = data.curTop;
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


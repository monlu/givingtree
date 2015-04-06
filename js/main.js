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


	var p = [2600, 6100, 9500, 13700]
	var pages = [1800, 6700, 14300, 17600, 22000, 25400, 28400, 33200, 37600, 38800, 41500, 45700, 48800, 74500, 81700, 83400, 87400, 107100, 109500, 111300, 114000, 127200, 130600, 132400, 135400, 170700, 171900, 172800]



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
				scrollPage(1, 7000);
				return false
			case (scrolltop < pages[2]):
				scrollPage(2, 12000);
				return false
			case (scrolltop < pages[3]):
				scrollPage(3, 7000);
				return false
			case (scrolltop < pages[4]):
				scrollPage(4, 7000);
				return false
			case (scrolltop < pages[5]):
				scrollPage(5, 7000);
				return false
			case (scrolltop < pages[6]):
				scrollPage(6, 7000);
				return false
			case (scrolltop < pages[7]):
				scrollPage(7, 7000);
				return false
			case (scrolltop < pages[8]):
				scrollPage(8, 7000);
				return false
			case (scrolltop < pages[9]):
				scrollPage(9, 5000);
				return false
			case (scrolltop < pages[10]):
				scrollPage(10, 6500);
				return false
			case (scrolltop < pages[11]):
				scrollPage(11, 9000);
				return false
			case (scrolltop < pages[12]):
				scrollPage(12, 7000);
				return false
			case (scrolltop < pages[13]):
				scrollPage(13, 25000);
				return false
			case (scrolltop < pages[14]):
				scrollPage(14, 15000);
				return false
			case (scrolltop < pages[15]):
				scrollPage(15, 5000);
				return false
			case (scrolltop < pages[16]):
				scrollPage(16, 7000);
				return false
			case (scrolltop < pages[17]):
				scrollPage(17, 22500);
				return false
			case (scrolltop < pages[18]):
				scrollPage(18, 7000);
				return false
			case (scrolltop < pages[19]):
				scrollPage(19, 5000);
				return false
			case (scrolltop < pages[20]):
				scrollPage(20, 6500);
				return false
			case (scrolltop < pages[21]):
				scrollPage(21, 15000);
				return false
			case (scrolltop < pages[22]):
				scrollPage(22, 10000);
				return false
			case (scrolltop < pages[23]):
				scrollPage(23, 5000);
				return false
			case (scrolltop < pages[24]):
				scrollPage(24, 6500);
				return false
			case (scrolltop < pages[25]):
				scrollPage(25, 35000);
				return false
			case (scrolltop < pages[26]):
				scrollPage(26, 3500);
				return false
			case (scrolltop < pages[27]):
				scrollPage(27, 3500);
				return false
		}
	})

	$('#down').click( function (e) {
		switch(true) {
			case (scrolltop <= pages[0]):
				scrollLastPage(0, 5000)
				return false
			case (scrolltop <= pages[1]):
				scrollLastPage(1, 7000)
				return false
			case (scrolltop <= pages[2]):
				scrollLastPage(2, 12000);
				return false
			case (scrolltop <= pages[3]):
				scrollLastPage(3, 7000);
				return false
			case (scrolltop <= pages[4]):
				scrollLastPage(4, 7000);
				return false
			case (scrolltop <= pages[5]):
				scrollLastPage(5, 7000);
				return false
			case (scrolltop <= pages[6]):
				scrollLastPage(6, 7000);
				return false
			case (scrolltop <= pages[7]):
				scrollLastPage(7, 7000);
				return false
			case (scrolltop <= pages[8]):
				scrollLastPage(8, 7000);
				return false
			case (scrolltop <= pages[9]):
				scrollLastPage(9, 3500);
				return false
			case (scrolltop <= pages[10]):
				scrollLastPage(10, 4000);
				return false
			case (scrolltop <= pages[11]):
				scrollLastPage(11, 9000);
				return false
			case (scrolltop <= pages[12]):
				scrollLastPage(12, 7000);
				return false
			case (scrolltop <= pages[13]):
				scrollLastPage(13, 7000);
				return false
			case (scrolltop <= pages[14]):
				scrollLastPage(14, 7000);
				return false
			case (scrolltop <= pages[15]):
				scrollLastPage(15, 3500);
				return false
			case (scrolltop <= pages[16]):
				scrollLastPage(16, 4500);
				return false
			case (scrolltop <= pages[17]):
				scrollLastPage(17, 7000);
				return false
			case (scrolltop <= pages[18]):
				scrollLastPage(18, 7000);
				return false
			case (scrolltop <= pages[19]):
				scrollLastPage(19, 3500);
				return false
			case (scrolltop <= pages[20]):
				scrollLastPage(20, 4500);
				return false
			case (scrolltop <= pages[21]):
				scrollLastPage(21, 7000);
				return false
			case (scrolltop <= pages[22]):
				scrollLastPage(22, 7000);
				return false
			case (scrolltop <= pages[23]):
				scrollLastPage(23, 3500);
				return false
			case (scrolltop <= pages[24]):
				scrollLastPage(24, 4500);
				return false
			case (scrolltop <= pages[25]):
				scrollLastPage(25, 7000);
				return false
			case (scrolltop <= pages[26]):
				scrollLastPage(26, 3500);
				return false
			case (scrolltop <= pages[27]):
				scrollLastPage(27, 3500);
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


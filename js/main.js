$(function () {
	console.log("window loaded")

	var number
	scrolltop = 0

	$('.title').each( function ( i, d ) {
		number = number || 300
		stylizeWords($(d), number, 100, 50, "fade")
		number += 100
	});

	var dialogIndex = [51500, 58400, 61300, 66000, 89500, 93600, 100300, 114900, 116800, 122700, 136000, 140300, 142600, 145600, 148000, 150400, 152300, 158900, 163600]

	for (var i= 0; i < dialogIndex.length; i++) {
			var pagePosition = dialogIndex[i]
		$($('.dialogue')[i]).each( function ( i, d ) {
			stylizeWords($(d), pagePosition, 100, 50, "fade")
		});
	};
	
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


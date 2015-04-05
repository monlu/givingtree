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
		number2 = number2 || 30000
		stylizeWords($(d), number2, 100, 50, "fade")
		number2 += 100
	});

	pages = [2600, 6100, 9500, 13700]

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


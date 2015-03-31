$(function () {
	console.log("window loaded")
	var s = skrollr.init({
		render: function(data) {
		  //Log the current scroll position.
		  $('#info').text(data.curTop);
		}, 
    smoothScrolling : 'true'
	});
})


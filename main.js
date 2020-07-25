
// Toggle Celebrate Section On Button Click

var btn = $("#doIt");
btn.click(()=>{
	$("section").toggle('slow', ()=>{
		$("section span").toggle('400')
	})
});

// Adjust "wrapper" Height

$(".wrapper").height($(window).height());

$(window).resize(function(){
	$(".wrapper").height($(window).height());
});

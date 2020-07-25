
// Toggle Celebrate Section On Button Click

var btn = $("#doIt");
btn.click(()=>{

	if($(window).width() <= 768){
		$("section").delay(1000).toggle('slow', ()=>{
			$("section span").toggle('400');
		});
	}else{
		$("section").toggle('slow', ()=>{
			$("section span").toggle('400');
		});
	}
	
});

// Adjust "wrapper" Height

$(".wrapper").height($(window).height());

$(window).resize(function(){
	$(".wrapper").height($(window).height());
});

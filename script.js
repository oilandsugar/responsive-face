$(document).ready(function(){
	

	
	// face interractions
	
	$('.eye').mousedown(function(){
		eye_poke($(this));
	})
	.mouseup(function(){
		eye_unpoke($(this));
	});
	
	$('#tongue').draggable({ containment: "parent" });
	
	// normal animation

	var left_eye = $('#left-eye');
	var right_eye = $('#right-eye');
	
	/*blink_eye(1000, left_eye);
	blink_eye(1000, right_eye);
	cernes(500,0);
	bigger_cerne(2000,0);
	tongue_out(1000,0);
	change_color(1000,2000,'#eee');
	pupil_middle(300,0,left_eye);
	pupil_middle(300,0,right_eye);
	roll_eyes(5000);*/
	
	// tired
	
	for(i=0; i<10; i++){
		blink_eye(10000, left_eye);
		blink_eye(10000, right_eye);
	}

	function tired() {
		blink_eye(1000, left_eye);
		blink_eye(1000, right_eye);
	}
});

	// face animation functions
	
	function cernes(t,d,callback){
		$('.cerne').delay(d).animate({
			opacity: '0.3'
		},t, callback);
	}
	
	function bigger_cerne(t,d,callback){
		$('.cerne').delay(d).animate({
			height: '300px',
			top: '-80px',
			'border-radius': '100px'
		},t,callback);
	}
	
	function smaller_eyes(t,d,callback){
		$('.white').delay(d).animate({
			height: '20px'
		},t,callback);
	}
	
	function tongue_out(t,d,callback){
		$('#tongue').delay(d).animate({
			top: '0'
		},t,callback);
	}
	
	function change_color(t,d,c,callback){
		$('body').delay(d).animate({
			backgroundColor: c
		},t,callback);
	}
	
	function blink_eye(d,eye,callback){
		$(eye).find('.white').delay(d).animate({
			backgroundColor: '#000',
			height:'20px',
			top: '20px'
		},100, function(){
			$(this).animate({
				backgroundColor: '#fff',
				height: '60px',
				top:'0'
			},100,callback);
		});
	}
	
	function pupil_bottom(t,d,eye,callback){
		$(eye).find('.pupil').delay(d).animate({
			top: '20px'
		},t,callback);
	}
	
	function pupil_top(t,d,eye,callback){
		$(eye).find('.pupil').delay(d).animate({
			top: '-40px'
		},t,callback);
	}
	
	function pupil_middle(t,d,eye,callback){
		$(eye).find('.pupil').delay(d).animate({
			top: '-10px'
		},t,callback);
	}
	
	function eye_poke(eye){
		var content_eye = $(eye).html();
		$(eye).html('<div class="x-eye"><div class="line"></div><div class="line"></div></div>');
	}
	
	function eye_unpoke(eye){
		$(eye).html('<div class="white"><div class="pupil"></div></div><div class="cerne"></div>');
	}
	
	function roll_eyes(d,callback){
		$('.eye').find('.pupil').delay(d).animate({
			top:'-80px'
		},100, function(){
			$(this).css('opacity','0');
			$(this).css('top','160px');
			$(this).css('opacity','1');
			$(this).animate({
				top: '-10px'
			},200,callback);
		});
	}
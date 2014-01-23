window.onload=function(){

	var step = 1;
	var max_step = 2;

	var get_step = function (action) {
		if (action == 0) // left
			step = (step == 1 ? (max_step) : (step - 1));
		else
			step = (step == max_step ? (1) : (step + 1));
		return step;
	};

	// Mon code javascript après que la page se soit chargée
	document.getElementById('previous').onclick=function(){
		document.getElementById('image').src = "res/img/img" + get_step(0) + ".jpg";
	};

	document.getElementById('next').onclick=function(){
		document.getElementById('image').src = "res/img/img"+get_step(1) +".jpg";
	};

	window.setInterval("javascript function",milliseconds);
};
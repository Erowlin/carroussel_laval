window.onload=function(){

	var step = 1;
	var max_step = 2;
	// Mon code javascript après que la page se soit chargée
	document.getElementById('previous').onclick=function(){
		if (step == 1) { // On doit aller à la dernière image
			step = max_step
		}
		else {
			--step;
		}
		document.getElementById('image').src = "res/img/img"+step+".jpg";
	};

	document.getElementById('next').onclick=function(){
		if (step == max_step) { // On doit aller à la dernière image
			step = 1;
		}
		else {
			++step;
		}
			document.getElementById('image').src = "res/img/img"+step+".jpg";
	};


};

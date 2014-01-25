window.onload=function(){
	
	var time = 0;
	
	// Get all the images with the carrousel-image class
	var getImages = function(){
		return document.getElementsByClassName("carrousel-image");
	}

	// Change current active image
	// State = 0 -> Previous
	// State = 1 -> Next
	var changeActiveImage = function(state) {
			time = 0;
			var images = getImages();
			var step = 0;
			var changed = false;
			Array.prototype.forEach.call(images, function(el){
				if (changed == false && el.className.indexOf("active") >= 0) // Active trouvé dans la balise
				{
					el.className = "carrousel-image"
					if ( state == 0 ) // Previous 
						(step != 0 ) ? (step--) : (step = (images.length - 1)); // Do you like ternaire ?
					else // Next
						(step != images.length - 1) ? (step++) : (step = 0);
					images[step].className = "carrousel-image active";
					changed = true; // Trick because break or return suck in forEach;
				}
				step++;
			});
	}

	document.getElementById('previous').onclick=function(){
		changeActiveImage(0);
	};

	document.getElementById('next').onclick=function(){
		changeActiveImage(1);
	};

	// Timer for image rotation
	var timer = function () {
		if (time > 4)
			changeActiveImage(1);
		else
			time++;
	};

	window.setInterval(timer, 1000);
};
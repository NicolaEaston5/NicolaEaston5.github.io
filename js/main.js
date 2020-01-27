function updatePicture(picture) {
	picture.lam = picture.lamSlider.value;
	picture.lamOutput.innerHTML = picture.lam;

	picture.mu = picture.muSlider.value;
	picture.muOutput.innerHTML = picture.mu
	
	var lambda = Math.round(picture.lam * Math.pow(10, picture.lamScale));
	var lambda_string = "";
	lambda_string = lambda.toString();
	while(lambda_string.length < picture.lamDigits) {
		lambda_string = "0"+lambda_string;
	}
	
	var mu = Math.round(picture.mu * Math.pow(10, picture.muScale));
	var mu_string = "";
	mu_string = mu.toString();
	while(mu_string.length < picture.muDigits) {
		mu_string = "0"+mu_string;
	}

	var filename = `${picture.denoised_root}/denoised_${lambda_string}_${mu_string}.png`;
	picture.holder.src = filename;
}

pictures.forEach(function (picture) {
	picture.lamSlider = document.getElementById(picture.lamSliderID);
	picture.muSlider = document.getElementById(picture.muSliderID);
	picture.lamOutput = document.getElementById(picture.lamOutputID);
	picture.muOutput = document.getElementById(picture.muOutputID);
	picture.holder = document.getElementById(picture.holderID);

	updatePicture(picture);
	picture.lamSlider.oninput = function() {
		updatePicture(picture);
	}
	picture.muSlider.oninput = function() {
		updatePicture(picture);
	}
});

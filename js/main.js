var GLOBAL_LAMBDA;
var GLOBAL_MU;
var denoisedImageHolder = document.getElementById("denoised_img");
// Seutp sliders
var lambdaSlider = document.getElementById("lambdaSlider");
var lambdaOutput = document.getElementById("lambdaOutput");
GLOBAL_LAMBDA = lambdaSlider.value;
lambdaOutput.innerHTML = lambdaSlider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
lambdaSlider.oninput = function() {
	lambdaOutput.innerHTML = this.value;
	GLOBAL_LAMBDA = this.value;
	updatePicture();
}
var muSlider = document.getElementById("muSlider");
var muOutput = document.getElementById("muOutput");
GLOBAL_MU = muSlider.value;
muOutput.innerHTML = muSlider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
muSlider.oninput = function() {
	muOutput.innerHTML = this.value;
	GLOBAL_MU = this.value;
	updatePicture();
}

function updatePicture() {
	var lambda = Math.round(GLOBAL_LAMBDA * 100);
	if(lambda < 10) {
		lambda_string="0";
		lambda_string += lambda.toString();
	} else {
		lambda_string = lambda.toString();
	}
	var mu = Math.round(GLOBAL_MU * 100);
	if(mu < 10) {
		mu_string="0";
		mu_string += mu.toString();
	} else {
		mu_string = mu.toString();
	}
	var filename = `/assets/denoised/Yellow_flower_400_denoised_${lambda_string}_${mu_string}.png`;
	denoisedImageHolder.src = filename;
}

updatePicture();

const pictures = [
	{
		sigmaSliderID : "sigmaSlider_Yellow_flower",
		kernelSliderID : "kernelSlider_Yellow_flower",
		sigmaOutputID : "sigmaOutput_Yellow_flower",
		kernelOutputID : "kernelOutput_Yellow_flower",
		holderID : "denoised_img_Yellow_flower",
		noisyID : "noisy_img_Yellow_flower",
		denoised_root : "/assets/filtered/Yellow_flower",
		noisy_root : "/assets/filtered/Yellow_flower",
		sigmaScale: 4,
		sigmaDigits: 3,
		kernelScale: 0,
		kernelDigits: 1
	},
	{
		sigmaSliderID : "sigmaSlider_Squirrel",
		kernelSliderID : "kernelSlider_Squirrel",
		sigmaOutputID : "sigmaOutput_Squirrel",
		kernelOutputID : "kernelOutput_Squirrel",
		holderID : "denoised_img_Squirrel",
		noisyID : "noisy_img_Squirrel",
		denoised_root : "/assets/filtered/Squirrel",
		noisy_root : "/assets/filtered/Squirrel",
		sigmaScale: 4,
		sigmaDigits: 3,
		kernelScale: 0,
		kernelDigits: 1
	}
];

function updatePicture(picture) {
	picture.sigma = picture.sigmaSlider.value;
	picture.sigmaOutput.innerHTML = picture.sigma;

	picture.kernel = picture.kernelSlider.value;
	picture.kernelOutput.innerHTML = picture.kernel
	
	var sigma = Math.round(picture.sigma * Math.pow(10, picture.sigmaScale));
	var sigma_string = "";
	sigma_string = sigma.toString();
	while(sigma_string.length < picture.sigmaDigits) {
		sigma_string = "0"+sigma_string;
	}
	
	var kernel = Math.round(picture.kernel * Math.pow(10, picture.kernelScale));
	var kernel_string = "";
	kernel_string = kernel.toString();
	while(kernel_string.length < picture.kernelDigits) {
		kernel_string = "0"+kernel_string;
	}

	var filename = `${picture.denoised_root}/filtered_${sigma_string}_${kernel_string}.png`;
	picture.holder.src = filename;

	filename = `${picture.noisy_root}/noisy_${sigma_string}.png`;
	picture.noisyHolder.src = filename;
}

pictures.forEach(function (picture) {
	picture.sigmaSlider = document.getElementById(picture.sigmaSliderID);
	picture.kernelSlider = document.getElementById(picture.kernelSliderID);
	picture.sigmaOutput = document.getElementById(picture.sigmaOutputID);
	picture.kernelOutput = document.getElementById(picture.kernelOutputID);
	picture.holder = document.getElementById(picture.holderID);
	picture.noisyHolder = document.getElementById(picture.noisyID);

	updatePicture(picture);
	picture.sigmaSlider.oninput = function() {
		updatePicture(picture);
	}
	picture.kernelSlider.oninput = function() {
		updatePicture(picture);
	}
});

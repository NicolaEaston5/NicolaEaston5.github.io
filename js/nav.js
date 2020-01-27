navHolder = document.getElementById("nav_holder");
navSlider = document.getElementById("nav_slider");
activeNav = document.getElementById("active_nav");

var TRANSITION_APPLIED = false;

moveSlider(activeNav);

var navItems = navHolder.children;
for(i = 0; i < navItems.length; i++) {
	navItems[i].addEventListener("mouseover", function () {
		moveSlider(this);
	});
	navItems[i].addEventListener("mouseleave", function () {
		moveSlider(activeNav);
	});

}

window.addEventListener("resize",  function() {
	moveSlider(activeNav);
})

function moveSlider(item) {
	var targetTop = Math.round(navHolder.offsetTop + item.offsetTop + item.offsetHeight);
	var targetLeft = Math.round(navHolder.offsetLeft + item.offsetLeft);
	navSlider.style.top = targetTop.toString()+"px";
	navSlider.style.left = targetLeft.toString()+"px";

	if(!TRANSITION_APPLIED) {
		setTimeout(function () {
			navSlider.classList.add("smooth_scroll");
		}, 300);
		TRANSITION_APPLIED = true;
	}
}

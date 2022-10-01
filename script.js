/*fetch("https://dummyjson.com/products/1")
	.then((res) => res.json())
	.then(console.log);*/

const mq = window.matchMedia("screen and (min-width: 900px)");

$(window).on("resize", function () {
	if (mq.matches) {
		$("#nav_bar")[0].className = "nav flex-row";
	} else {
		$("#nav_bar")[0].className = "nav flex-column";
	}
});

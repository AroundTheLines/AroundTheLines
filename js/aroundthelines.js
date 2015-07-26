$(".sidenav-toggle").on("click", function(e){
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
	$("#wrapper").toggleClass("collapsed");
});
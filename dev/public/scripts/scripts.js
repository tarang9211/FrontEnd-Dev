(function(){
	var burger = document.querySelector('.burger-container');
	var headContainer = document.querySelector('.head-container');


	burger.onclick = function() {
		headContainer.classList.toggle('menu-opened');
	}

}());
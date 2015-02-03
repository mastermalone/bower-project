$(document).ready(function(){
	console.log("jQuery is ready");
	
	var SiteUtils = {
		fizzBuzz: function(){
			var frag = document.createDocumentFragment();
			for(var i = 0; i < 100; i++){
				if(i % 3 === 0){
					console.log("Fizz", i);
					$(frag).append('<p>Fizz</p>');
					//$("#results").append('<p>Fizz</p>');
				}
				if(i % 5 === 0){
					console.log("Buzz", i);
					$(frag).append('<p>Buzz</p>');
					//$("#results").append('<p>Buzz</p>');
				}
				if(i % 3 === 0 && i % 5 === 0){
					console.log("Fizz Buzz", i);
					$(frag).append('<p>Fizz Buzz</p>');
					//$("#results").append('<p>Fizz Buzz</p>');
				}
			}
			$("#results").append(frag);
		}
	};
	SiteUtils.fizzBuzz();
});

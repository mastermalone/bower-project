(function(){
	var app = angular.module("mikeApp", []);
	
	app.controller("MikeController", function(){
		this.users = users;
		console.log("Users:", users);
	});
	
	var users = [
		{
			name: "Mike",
			email: "mastermalone@gmail.com",
			userId: Math.floor(Math.random() * 100000000)
		},
		{
			name: "Erin",
			email: "elgmalone@gmail.com",
			userId: Math.floor(Math.random() * 100000000)
		},
		{
			name: "Elijah",
			email: "EmasterLee@gmail.com",
			userId: Math.floor(Math.random() * 100000000)
		}
	];
})();

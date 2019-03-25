/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


module.exports = (function(createUser) { 
	
	createUser.userCreate = function (URL, firstName, lastName, email, username, password){
		//open page
		browser.get (URL);
		
		//verificam ca butonul Sign UP este prezent
		expect (createUser.signUpButtonPresent).toBeTruthy();
		//expect (createUser.signUpButtonPresent).toBeFalsy();
		console.log ("Butonul Sign Up este prezent in pagina.");
		
		//dam click pe butonul de Sign UP
		createUser.signUpButtonClick();
		
		//verificam ca field-ul First Name este prezent
		expect (createUser.firstNamePresent).toBeTruthy();
		console.log ("Campul First Name este prezent in pagina.");
		
		//facem clear si completam campul de First Name
		createUser.firstNameClear(firstName);
		
		//verificam ca field-ul Last Name este prezent
		expect (createUser.lastNamePresent).toBeTruthy();
		console.log ("Campul Last Name este prezent in pagina.");
	
		//facem clear si completam campul de Last Name
		createUser.lastNameClear(lastName);
		
		//verificam ca field-ul Email este prezent
		expect (createUser.emailPresent).toBeTruthy();
		console.log ("Campul Last Name este prezent in pagina.");
	
		//facem clear si completam campul de Email
		createUser.emailClear(email);
		
		//verificam ca field-ul Userame este prezent
		expect (createUser.usernamePresent).toBeTruthy();
		console.log ("Campul Last Name este prezent in pagina.");
	
		//facem clear si completam campul de Username
		createUser.usernameClear(username);
		
		//verificam ca field-ul Password este prezent
		expect (createUser.passwordPresent).toBeTruthy();
		console.log ("Campul Last Name este prezent in pagina.");
	
		//facem clear si completam campul de Password
		createUser.passwordClear(password);
		
		//verificam ca butonul Sign UP! este prezent
		expect (createUser.signUpRegisterPresent).toBeTruthy();
		//expect (createUser.signUpRegisterPresent).toBeFalsy();
		console.log ("Butonul Sign Up! este prezent in pagina.");
		
		//dam click pe butonul de Sign UP
		createUser.signUpRegisterClick();
		
	
		
		
	};
	
	
	return createUser;
	
})(require('../02.Functions/basePageObj.js'));
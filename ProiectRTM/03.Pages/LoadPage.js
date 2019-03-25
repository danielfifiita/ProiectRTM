/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


module.exports = (function(loadPage) { 
	
	loadPage.openBrowser = function (URL){
		//open page
		browser.get (URL);
		
		//verificam ca butonul Tour este prezent
		expect (loadPage.tourButtonPresent).toBeTruthy();
		//expect (loadPage.tourButtonPresent).toBeFalsy();
		console.log ("Butonul Tour este prezent in pagina.");
		
		//verificam ca butonul What's New este prezent
		expect (loadPage.whatsnewButtonPresent).toBeTruthy();
		//expect (loadPage.whatsnewButtonPresent).toBeFalsy();
		console.log ("Butonul What's New este prezent in pagina.");
		
		//verificam ca butonul Upgrade este prezent
		expect (loadPage.upgradeButtonPresent).toBeTruthy();
		//expect (loadPage.upgradeButtonPresent).toBeFalsy();
		console.log ("Butonul Upgrade este prezent in pagina.");
		
		//verificam ca butonul Help este prezent
		expect (loadPage.helpButtonPresent).toBeTruthy();
		//expect (loadPage.helpButtonPresent).toBeFalsy();
		console.log ("Butonul Help este prezent in pagina.");
		
		//verificam ca butonul Login este prezent
		expect (loadPage.loginButtonPresent).toBeTruthy();
		//expect (loadPage.loginButtonPresent).toBeFalsy();
		console.log ("Butonul Login este prezent in pagina.");
		
		//verificam ca butonul Sign Up este prezent
		expect (loadPage.signUpButtonPresent).toBeTruthy();
		//expect (loadPage.signUpButtonPresent).toBeFalsy();
		console.log ("Butonul Sign UP este prezent in pagina.");
		
		
	};
	

	
	return loadPage;
	
})(require('../02.Functions/basePageObj.js'));
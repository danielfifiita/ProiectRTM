/**********************************************************************************
* 
*Created by: Fifiita Daniel Florin
*
*Description: Aici descriem pasii care ii urmeaza scriptul automat.
*
*
*
**********************************************************************************/


module.exports = (function(loginPage) { 
	
	//----------------------------------------------------------------------------------------------//
	loginPage.userLogin = function (URL, username, password, email){
		//open page
		browser.get (URL);
		
		//verificam ca butonul LOG IN este prezent
		expect (loginPage.loginButtonPresent).toBeTruthy();
		//expect (loginPage.loginButtonPresent).toBeFalsy();
		console.log ("Butonul Login este prezent in pagina.");
		
		//dam click pe butonul de LOGIN
		loginPage.loginButtonClick();
		
		//verificam ca field-ul USERNAME este prezent in pagina de Login
		expect (loginPage.usernameLoginPresent).toBeTruthy();
		console.log ("Campul USERNAME este prezent in pagina.");
		
		//facem clear si completam campul de USERNAME din pagina de Login
		loginPage.usernameLoginComplete(username);
				
		//verificam ca field-ul PASSWORD este prezent in pagina de Login
		expect (loginPage.passwordLoginPresent).toBeTruthy();
		console.log ("Campul USERNAME este prezent in pagina.");
		
		//facem clear si completam campul de PASSWORD din pagina de Login
		loginPage.passwordLoginComplete(password);
		
		
		//verificam ca Checkbox-ul RememberMe este prezent
		expect (loginPage.rememberMePresent).toBeTruthy();
		console.log ("Checkbox-ul RememberMe este prezent in pagina.");
		//asteapta X secunde pana trece la urmatorul pas
		browser.sleep (1000);
		
		//dam click pe Checkbox-ul RememberMe din pagina de Login
		loginPage.rememberMeClick2();
		
		//verificam ca butonul Login este prezent in pagina de Login
		expect (loginPage.buttonLoginPresent).toBeTruthy();
		console.log ("Butonul de Login este prezent in pagina.");
		
		//dam click pe butonul de LOGIN din pagina de Login
		loginPage.buttonLoginClick();
		
		//browser.waitForAngular();
		//browser.sleep(1000);
		//browser.refresh();
		 
		browser.ignoreSynchronization = true;
	    browser.sleep(4000);
		
		//dam click pe butonul Settings din pagina de dashboard
		loginPage.settingsButtonClick();
		//Aici verificam ca textul nostru de email este egal cu emailul din json
		expect(loginPage.verifyEmail()).toEqual(email);
		console.log("The email is " + email);
		
		/*browser.wait(()=> {
		    browser.ignoreSynchronization = true;
		    browser.sleep(4000);
		    loginPage.settingsButtonClick(); 		    
		  }); */
		
		
		
	};//end function
	//----------------------------------------------------------------------------------------------//
	
	
	
	//----------------------------------------------------------------------------------------------//
	
	//functia 2 cu login fara Username
	loginPage.loginNoUsername = function (URL, username, password, wrongCredentials){
		
		//open page
		browser.get (URL);
				
		//dam click pe butonul de LOGIN
		loginPage.loginButtonClick();
		
		//facem clear si completam campul de USERNAME din pagina de Login
		loginPage.usernameLoginComplete(username);
		
		//facem clear si completam campul de PASSWORD din pagina de Login
		loginPage.passwordLoginComplete(password);
				
		//dam click pe Checkbox-ul RememberMe din pagina de Login
		loginPage.rememberMeClick2();
						
		//dam click pe butonul de LOGIN din pagina de Login
		loginPage.buttonLoginClick();
		
		//asteapta X secunde pana trece la urmatorul pas
		browser.sleep (2000);
		
		//Aici verificam ca textul nostru de email este egal cu emailul din json
		expect(loginPage.incorrectCredentials()).toEqual(wrongCredentials);
		
	};	// end function
	//----------------------------------------------------------------------------------------------//
	
	
	
	//----------------------------------------------------------------------------------------------//
	
	//functia 2 cu login fara Password
	loginPage.loginNoPassword = function (URL, username, password, wrongCredentials){
		
		//open page
		browser.get (URL);
				
		//dam click pe butonul de LOGIN
		loginPage.loginButtonClick();
		
		//facem clear si completam campul de USERNAME din pagina de Login
		loginPage.usernameLoginComplete(username);
		
		//facem clear si completam campul de PASSWORD din pagina de Login
		loginPage.passwordLoginComplete(password);
				
		//dam click pe Checkbox-ul RememberMe din pagina de Login
		loginPage.rememberMeClick2();
						
		//dam click pe butonul de LOGIN din pagina de Login
		loginPage.buttonLoginClick();
		
		//asteapta X secunde pana trece la urmatorul pas
		browser.sleep (2000);
		
		//Aici verificam ca textul nostru de email este egal cu emailul din json
		expect(loginPage.incorrectCredentials()).toEqual(wrongCredentials);
		
	};	// end function
	//----------------------------------------------------------------------------------------------//
	
	
	
	return loginPage;
	
})(require('../02.Functions/basePageObj.js'));
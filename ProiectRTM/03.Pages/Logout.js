/**********************************************************************************
* 
*Created by: Fifiita Daniel Florin
*
*Description: Aici descriem pasii care ii urmeaza scriptul automat pentru flow-ul de Login --> Logout
*
*
*
**********************************************************************************/


module.exports = (function(logoutScript) { 
	
	logoutScript.userLogout = function (URL, username, password){
		
												
		//verificam ca butonul LOGOUT este prezent in drop-down-ul de Settings
		expect (logoutScript.logoutButtonPresent).toBeTruthy();	
		console.log ("Butonul Logout este prezent in drop-down-ul de Settings.");
		
		//dam click pe butonul de Logout din drop-down menu-ul de Settings
		logoutScript.logoutButtonClick();		
		
		//verificam ca butonul Login Again este prezent in pagina de dupa Logout
		expect (logoutScript.loginAgainButtonPresent).toBeTruthy();
		console.log ("Butonul Log In Again este prezent in pagina de dupa Logout.");
		
	};
	
	
	return logoutScript;
	
})(require('../02.Functions/basePageObj.js'));


describe('spec_Login', function() {
	
	var loginPage = require('../03.Pages/LoginPage.js');
	var testdata = require('../04.InputData/PageInputData.json');
	
			testdata.forEach (function (data) {
			
		//Login not successful due to no username
		it('Login - blank username', function(){
					
			loginPage.loginNoUsername(data.URL,"",data.password, data.email, data.wrongCredentials);
			console.log ("Logarea nu a reusit, username-ul este gol!");
					
			}); // Close it
				
			//Login not successful due to no password
		it('Login - blank password', function(){
					
			loginPage.loginNoPassword(data.URL,data.username,"", data.wrongCredentials);
			console.log ("Logarea nu a reusit, parola nu este completata!");
					
			}); // Close it		
				
		//positive scenario
		it('Open the page and Login', function(){
		
			loginPage.userLogin(data.URL,data.username,data.password, data.email);
			console.log ("Logarea s-a efectuat cu succes!");
			
			}); // Close it
		
		
		
		
	});
	
});

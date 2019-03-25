

describe('spec_Logout', function() {
	
	var loginPage = require('../03.Pages/LoginPage.js');
	var logoutScript = require('../03.Pages/Logout.js');
	var testdata = require('../04.InputData/PageInputData.json');
	
			testdata.forEach (function (data) {
				
		it('Open the page, Login and Logout', function(){
			
					
			loginPage.userLogin(data.URL,data.username,data.password, data.email);
			console.log ("Logarea s-a efectuat cu succes!");
								
			logoutScript.userLogout();
			
	
		});
	});
	
});

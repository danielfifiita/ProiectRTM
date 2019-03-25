describe('spec_MultipleScrolls', function() {
	
	var loginPage = require('../03.Pages/LoginPage.js');
	var logoutScript = require('../03.Pages/Logout.js');
	var testdata = require('../04.InputData/PageInputData.json');
	var multipleScrolls = require('../03.Pages/MultipleScrolls.js');
	
	
			testdata.forEach (function (data) {
				
		it('Open the page Click on Jobs, The Diary, Tips and Tricks, COW LOGO, Login and Logout', function(){
		
			
			multipleScrolls.clickOnMultipleElements(data.URL, data.jobsPageCheck, data.tourPageCheck, data.theDiaryPageCheck, data.tipsAndTricksPageCheck);
			
			loginPage.userLogin(data.URL,data.username,data.password, data.email);
			console.log ("Logarea s-a efectuat cu succes!");
								
			logoutScript.userLogout();
			
	
		});
				
	});
	
});
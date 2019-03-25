

describe('spec_CreateUser', function() {
	
	var createUser = require('../03.Pages/SignUpPage.js');
	var testdata = require('../04.InputData/PageInputData.json');
	
			testdata.forEach (function (data) {
				
		it('Open the page and Sign Up', function(){
		
			createUser.userCreate(data.URL,data.firstName,data.lastName,data.email,data.username,data.password);
			
	
		});
	});
	
});

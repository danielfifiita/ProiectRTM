
describe('spec_AddNewTask', function() {
	
	var loginPage = require('../03.Pages/LoginPage.js');
	var logoutScript = require('../03.Pages/Logout.js');
	var addNewTask = require('../03.Pages/AddNewTask.js');
	var testdata = require('../04.InputData/PageInputData.json');
	var taskname = "Task1"+(new Date().getMiliseconds());
	
			testdata.forEach (function (data) {
					
			//login function 
			 beforeEach (function(){
				 loginPage.userLogin(data.URL,data.username,data.password, data.email);
				 console.log ("Logarea s-a efectuat cu succes!");
			 });
			 
			 //logout function
			afterEach (function(){
				logoutScript.userLogout();
			});
											
			it('AddNew Task', function(){
				addNewTask.newTask (taskname);
	
		});
	});
	
});

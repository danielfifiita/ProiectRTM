/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


describe('spec_LoadPage', function() {
	
	var loadPage = require('../03.Pages/LoadPage.js');
	var testdata = require('../04.InputData/PageInputData.json');
	
			testdata.forEach (function (data) {
				
		it('Open the page', function(){
		
			loadPage.openBrowser(data.URL);
	
		});
	});
	
});

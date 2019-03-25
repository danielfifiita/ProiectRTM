describe('spec_FooterScroll', function() {
	
	var testdata = require('../04.InputData/PageInputData.json');
	var footerScroll = require('../03.Pages/FooterScroll.js');
	
			testdata.forEach (function (data) {
				
		it('Open the page scroll and click on about', function(){
		
			
			footerScroll.scrollAndClickAbout(data.URL);
			
	
		});
				
	});
	
});
/**********************************************************************************
* 
*Created by: 
*
*Description: 
*
*
*
**********************************************************************************/


module.exports = (function(footerScroll) { 
	
	footerScroll.scrollAndClickAbout = function (URL){
		
		//browser get url
		browser.get (URL);
		
		//Scrollam la elementul About
		footerScroll.scrollElemFinderIntoView(footerScroll.aboutButton);
		
		//Scrollam la elementul About - METODA 2
		//browser.actions().mouseMove(footerScroll.aboutButton).perform();
		
		 browser.sleep(3000);
		
		//verificam ca butonul About este prezent in footer
		expect (footerScroll.aboutFooterPresent).toBeTruthy();
		console.log ("Butonul About este prezent in Footer-ul paginii RTM.");
		
		//dam click pe butonul About din Footer-ul paginii
		footerScroll.aboutFooterClick();
		
		browser.sleep(3000);
		
	};
	

	
	return footerScroll;
	
})(require('../02.Functions/basePageObj.js'));
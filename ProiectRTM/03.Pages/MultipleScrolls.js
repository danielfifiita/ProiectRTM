/**********************************************************************************
* 
*Created by: Daniel FIfiita
*
*Description: Clcik on multiple elements and then login / logout.
*
*
*
**********************************************************************************/


module.exports = (function(multipleScrolls) { 
	
	multipleScrolls.clickOnMultipleElements = function (URL, jobsPageCheck, tourPageCheck, theDiaryPageCheck, tipsAndTricksPageCheck){
		
		//browser get url
		browser.get (URL);

//---------------------------------------------- JOBS
		//Scrollam la elementul JOBS
		multipleScrolls.scrollElemFinderIntoView(multipleScrolls.jobsButton);
		
		//Scrollam la elementul About - METODA 2
		//browser.actions().mouseMove(footerScroll.aboutButton).perform();
		
		 browser.sleep(1500);
		
		//verificam ca butonul JOBS este prezent in footer
		expect (multipleScrolls.jobsFooterPresent).toBeTruthy();
		console.log ("Butonul JOBS este prezent in Footer-ul paginii RTM.");
		
		//dam click pe butonul JOBS din Footer-ul paginii
		multipleScrolls.jobsFooterClick();
		
		//Verificare Text
		expect(multipleScrolls.verifyJobsText()).toEqual(jobsPageCheck);
		console.log("Text Verification for this page is ->  " + jobsPageCheck);
		
		browser.sleep(1500);
//---------------------------------------------- JOBS

//---------------------------------------------- TOUR
		//Scrollam la elementul TOUR
		multipleScrolls.scrollElemFinderIntoView(multipleScrolls.tourButton);
				
		 browser.sleep(1500);
		
		//verificam ca butonul TOUR este prezent in footer
		expect (multipleScrolls.tourFooterPresent).toBeTruthy();
		console.log ("Butonul TOUR este prezent in Footer-ul paginii RTM.");
		
		//dam click pe butonul TOUR din Footer-ul paginii
		multipleScrolls.tourFooterClick();
		
		//Verificare Text
		expect(multipleScrolls.verifyTourText()).toEqual(tourPageCheck);
		console.log("Text Verification for this page is ->  " + tourPageCheck);
		
		browser.sleep(1500);
//---------------------------------------------- TOUR
		
//---------------------------------------------- The Dairy
		//Scrollam la elementul The Dairy
		multipleScrolls.scrollElemFinderIntoView(multipleScrolls.theDiaryButton);
				
		 browser.sleep(1500);
		
		//verificam ca butonul The Dairy este prezent in footer
		expect (multipleScrolls.theDiaryFooterPresent).toBeTruthy();
		console.log ("Butonul The Dairy este prezent in Footer-ul paginii RTM.");
		
		//dam click pe butonul The Dairy din Footer-ul paginii
		multipleScrolls.theDiaryFooterClick();
		
		//Verificare Text
		expect(multipleScrolls.verifyTheDiaryText()).toEqual(theDiaryPageCheck);
		console.log("Text Verification for this page is ->  " + theDiaryPageCheck);
		
		browser.sleep(1500);
//---------------------------------------------- The Dairy
		
		//---------------------------------------------- Tips and Tricks
		//Scrollam la elementul Tips and Tricks
		multipleScrolls.scrollElemFinderIntoView(multipleScrolls.tipsAndTricksButton);
				
		 browser.sleep(1500);
		
		//verificam ca butonul Tips and Tricks este prezent in footer
		expect (multipleScrolls.tipsAndTricksFooterPresent).toBeTruthy();
		console.log ("Butonul Tips and Tricks este prezent in Footer-ul paginii RTM.");
		
		//dam click pe butonul Tips and Tricks din Footer-ul paginii
		multipleScrolls.tipsAndTricksFooterClick();
		
		//Verificare Text
		expect(multipleScrolls.verifyTipsAndTricksText()).toEqual(tipsAndTricksPageCheck);
		console.log("Text Verification for this page is ->  " + tipsAndTricksPageCheck);
		
		browser.sleep(1500);
//---------------------------------------------- Tips and Tricks
		
		//dam click pe LOGO-ul cu Vacuta
		multipleScrolls.cowLogoHeaderClick();
		
		
		
		
	};
	

	
	return multipleScrolls;
	
})(require('../02.Functions/basePageObj.js'));
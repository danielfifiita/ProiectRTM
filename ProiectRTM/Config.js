var Jasmine2HtmlReporter = require('C:/Users/Miki/eclipse-workspace/ProiectRTM/node_modules/protractor-jasmine2-screenshot-reporter');
var timeStamp = new Date().getTime();

exports.config = {
		
		
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		directConnect: true,		
		
		//Capabilities to be passed to the webdriver instance.
		capabilities:{
			'browserName':'chrome'
		},
		
		//Framework to use: Jasmine
		framework:'jasmine',
		
		onPrepare: function() {
			
			browser.driver.manage().window().maximize();
			
			jasmine.getEnv().addReporter (
					
					new Jasmine2HtmlReporter ({
						
						savePath: 'C:/Users/Miki/eclipse-workspace/ProiectRTM/target/screenshots',
	                        showSummary: true,
	                        showQuickLinks: true,
	                        showConfiguration: true,
	                        screenshotsFolder: 'images',
	                        takeScreenshots: true,
	                        takeScreenshotsOnlyOnFailures: true,
	                        fixedScreenshotName: true,
	                        ignoreSkippedSpecs: true,
	                        consolidate: true,
	                        consolidateAll: true,
	                        preserveDirectory: true,                                                                                                          
	                        fileName: 'Protractor-Execution-Report-' + timeStamp 

					})
			);	
		},
		
		 // Options to be passed to Jasmine.
		jasmineNodeOpts: {
			
    	    showColors: true,
    	    isVerbose: true,
    	    realtimeFailure: true,
    	    includeStackTrace: true,
    	    defaultTimeoutInterval: 500000
			
		},
		
		
		
		//specs: ['../ProiectRTM/01.Scenarios/spec_LoadPage.js'],
		//specs: ['../ProiectRTM/01.Scenarios/spec_CreateUser.js'],
		//specs: ['../ProiectRTM/01.Scenarios/spec_Login.js'],
		//specs: ['../ProiectRTM/01.Scenarios/spec_Logout.js'],
		//specs: ['../ProiectRTM/01.Scenarios/spec_FooterScroll.js']
		specs: ['../ProiectRTM/01.Scenarios/spec_MultipleScrolls.js']
		
		
/*		suites:{		    	  
			suite:[
			'../',
			'../',

			] 
		},*/ 
			
		
};
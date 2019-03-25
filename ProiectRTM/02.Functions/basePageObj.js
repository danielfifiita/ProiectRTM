/**********************************************************************************
* 
*	Created by: Fifiita Daniel
*
*	Description: aici se afla toate functiile folosite pentru testele automate de pe aplicata web
*
*	
*
**********************************************************************************/

module.exports = (function () {
	
	//that este numele obiectului care contine mai multe functii.
	var that = {};
	var tourButton = "/html/body/nav/div/ul[2]/li[1]/a";
	var loginHeaderXpath = "//ul[@class='nav navbar-nav navbar-right hidden-xs']/li/a[@href='/login/']";
	var usernameLoginXpath = "//div[@class='form-group']/input[@id='username']";
	var passwordLoginXpath = "//div[@class='form-group']/input[@id='password']";
	var loginButtonXpath = "//button[@id='login-button']";
	var settingsButtonXpath = "//div[@class='b-ho-Vm-i']/i[2]";
	var logoutButtonXpath = "//div[contains(text(),'Sign out')]"; //  "//div[@id=':2i']/div[@class='Um-sn-Dn']";
	var rememberMeCheckbox = "//div[@class='form-group']/label[@class='rtm-login-remember-label']";
	var loginEmailText = "//div[@class='b-ho-Vm-bb-an-dk']";
	var loginAgainButton = "//div[@class='container']/a[@href='/login/']";
	var badCredentials = "//div[@class='rtm-alert alert alert-warning']";
	var aboutFooter = "//a[@href='/about/']";
	var jobsFooter = "//a[@href='/about/jobs.rtm']";
	var tourFooter = "//ul[@class='nav nav-pills nav-stacked']//a[contains(text(),'Tour')]";
	var theDiaryFooter = "//a[@href='/dairy/']";
	var tipsAndTricks = "//a[@href='/help/tips/']";
	var cowLogoHeader = "//body[@class='rtm-help-tips ng-scope']/nav[@class='navbar navbar-default navbar-static-top rtm-top-nav']/div[@class='container']/a[1]";
	var jobsTextCheck = "//div[@class='rtm-well']";
	var tourTextCheck = "//h2[contains(text(),'Hop aboard and enjoy the tour!')]";
	var theDiaryTextCheck ="//h1[contains(text(),'The Dairy')]";
	var tipsAndTricksTextCheck = "//h2[contains(text(),'Featured tips for using Remember The Milk.')]";
	
	
	that.tourButtonPresent = function (){
		return element (by.xpath(tourButton)).isPresent();
	};
	
	that.whatsnewButtonPresent = function (){
		return element (by.xpath('/html/body/nav/div/ul[2]/li[2]/a')).isPresent();
	};
	
	that.upgradeButtonPresent = function (){
		return element (by.xpath('/html/body/nav/div/ul[2]/li[3]/a')).isPresent();
	};
	
	that.helpButtonPresent = function (){
		return element (by.xpath('/html/body/nav/div/ul[2]/li[4]/a')).isPresent();
	};
		
	that.signUpButtonPresent = function (){
		return element (by.xpath('/html/body/nav/div/ul[2]/li[6]/a')).isPresent();
	};	
	
	that.signUpButtonClick = function () {
		return element (by.xpath('/html/body/nav/div/ul[2]/li[6]/a')).click();
	};
	
	that.loginButtonPresent = function (){
		return element (by.xpath(loginHeaderXpath)).isPresent();
	};
	
	that.loginButtonClick = function () {
		return element (by.xpath('/html/body/nav/div/ul[2]/li[5]/a')).click();
	};
	
	that.buttonLoginPresent = function (){
		return element (by.xpath(loginButtonXpath)).isPresent();
	};
	
	that.buttonLoginClick = function () {
		return element (by.xpath(loginButtonXpath)).click();
	};
			
	that.firstNamePresent = function (){
		return element (by.xpath('/html/body/main/section/article[2]/div/div/form/div[1]/input')).isPresent();
	};	
	
	that.firstNameClear = function (firstname) {
		element(by.xpath('/html/body/main/section/article[2]/div/div/form/div[1]/input')).clear();
		return element (by.xpath('/html/body/main/section/article[2]/div/div/form/div[1]/input')).sendKeys(firstname);
	};	
	
	that.lastNamePresent = function (){
		return element (by.xpath('/html/body/main/section/article[2]/div/div/form/div[2]/input')).isPresent();
	};	
	
	that.lastNameClear = function (lastname) {
		element(by.xpath('/html/body/main/section/article[2]/div/div/form/div[2]/input')).clear();
		return element (by.xpath('/html/body/main/section/article[2]/div/div/form/div[2]/input')).sendKeys(lastname);
	};	
	
	that.emailPresent = function (){
		return element (by.xpath('/html/body/main/section/article[2]/div/div/form/div[3]/input')).isPresent();
	};	
	
	that.emailClear = function (email) {
		element(by.xpath('/html/body/main/section/article[2]/div/div/form/div[3]/input')).clear();
		return element (by.xpath('/html/body/main/section/article[2]/div/div/form/div[3]/input')).sendKeys(email);
	};	
	
	that.usernamePresent = function (){
		return element (by.xpath('/html/body/main/section/article[2]/div/div/form/div[4]/input')).isPresent();
	};	
	
	that.usernameClear = function (username) {
		element(by.xpath('/html/body/main/section/article[2]/div/div/form/div[4]/input')).clear();
		return element (by.xpath('/html/body/main/section/article[2]/div/div/form/div[4]/input')).sendKeys(username);
	};	
	
	that.passwordPresent = function (){
		return element (by.xpath('/html/body/main/section/article[2]/div/div/form/div[5]/input')).isPresent();
	};	
	
	that.passwordClear = function (password) {
		element(by.xpath('/html/body/main/section/article[2]/div/div/form/div[5]/input')).clear();
		return element (by.xpath('/html/body/main/section/article[2]/div/div/form/div[5]/input')).sendKeys(password);
	};	
	
	that.passwordLoginPresent = function (){
		return element (by.xpath(passwordLoginXpath)).isPresent();
	};	
	
	that.passwordLoginComplete = function (password) {
		element(by.xpath(passwordLoginXpath)).clear();
		return element (by.xpath(passwordLoginXpath)).sendKeys(password);
	};	
	
	that.signUpRegisterPresent = function (){
		return element (by.xpath('/html/body/main/section/article[2]/div/div/form/input[2]')).isPresent();
	};	
	
	that.signUpRegisterClick = function () {
		return element (by.xpath('/html/body/main/section/article[2]/div/div/form/input[2]')).click();
	};
	
	that.usernameLoginPresent = function (){
		return element (by.xpath(usernameLoginXpath)).isPresent();
	};
		
	that.usernameLoginComplete = function (username) {
		element(by.xpath(usernameLoginXpath)).clear();
		return element (by.xpath(usernameLoginXpath)).sendKeys(username);	
	};
	
	that.settingsButtonPresent = function (){		
		return element (by.xpath(settingsButtonXpath)).isPresent();		
	};	
	
	that.settingsButtonClick = function () {
		return element (by.xpath(settingsButtonXpath)).click();
	};
	
	that.logoutButtonPresent = function (){		
		return element (by.xpath(logoutButtonXpath)).isPresent();
	};	
	
	that.logoutButtonClick = function () {
		return element (by.xpath(logoutButtonXpath)).click();
	};
	
	that.rememberMePresent = function (){		
		return element (by.xpath(rememberMeCheckbox)).isPresent();
	};	
	
	that.rememberMeClick = function () {
		return element (by.xpath(rememberMeCheckbox)).click();
	};
	
	//Pentru CHECKBOX-uri este un best practice
	that.rememberMeClick2 = function () {
		return $('[for="remember"]').click();
	};
		
	//luam textul de pe campul de email
	that.verifyEmail = function () {
		return element (by.xpath(loginEmailText)).getText();	
	};
		
	//luam textul de incorrect username
	that.incorrectCredentials = function () {
		return element (by.xpath(badCredentials)).getText();	
	};
	
	//log in again button is present
	that.loginAgainButtonPresent = function (){
		return element (by.xpath(loginAgainButton)).isPresent();
	};
	
	//Functie SCROLLLLL
	that.scrollElemFinderIntoView = function(elemFinder) {
		var promise = browser.executeScript(function(elem){
			elem.scrollIntoView(false);
			}, elemFinder);
			return promise;
	};
	
	
	//verificam ca exista butonul About in footerul din RTM
	that.aboutFooterPresent = function (){
		return element (by.xpath(aboutFooter)).isPresent();
	};
	
	//ia elementul dupa XPATH --> about button
	that.aboutButton = element (by.xpath(aboutFooter));
	
	//click pe elementul About din footerul din RTM
	that.aboutFooterClick = function () {
		return element (by.xpath(aboutFooter)).click();
	};
	
//------------------------------ JOBS
	//verificam ca exista butonul JOBS in footerul din RTM
	that.jobsFooterPresent = function (){
		return element (by.xpath(jobsFooter)).isPresent();
	};
	
	//ia elementul dupa XPATH --> JOBS button
	that.jobsButton = element (by.xpath(jobsFooter));
	
	//click pe elementul JOBS din footerul din RTM
	that.jobsFooterClick = function () {
		return element (by.xpath(jobsFooter)).click();
	};
	
	//luam textul de pe pagina Jobs
	that.verifyJobsText = function () {
		return element (by.xpath(jobsTextCheck)).getText();	
	};
//------------------------------- JOBS
	
	
//------------------------------ TOUR
	//verificam ca exista butonul TOUR in footerul din RTM
	that.tourFooterPresent = function (){
		return element (by.xpath(tourFooter)).isPresent();
	};
		
	//ia elementul dupa XPATH --> TOUR button
	that.tourButton = element (by.xpath(tourFooter));
		
	//click pe elementul TOUR din footerul din RTM
	that.tourFooterClick = function () {
		return element (by.xpath(tourFooter)).click();
	};
	
	//luam textul de pe pagina Tour
	that.verifyTourText = function () {
		return element (by.xpath(tourTextCheck)).getText();	
	};
//------------------------------- TOUR
	
//------------------------------ THE DIARY
	//verificam ca exista butonul THE DIARY in footerul din RTM
	that.theDiaryFooterPresent = function (){
		return element (by.xpath(theDiaryFooter)).isPresent();
	};
		
	//ia elementul dupa XPATH --> THE DIARY button
	that.theDiaryButton = element (by.xpath(theDiaryFooter));
		
	//click pe elementul THE DIARY din footerul din RTM
	that.theDiaryFooterClick = function () {
		return element (by.xpath(theDiaryFooter)).click();
	};
	
	//luam textul de pe pagina THE DIARY
	that.verifyTheDiaryText = function () {
		return element (by.xpath(theDiaryTextCheck)).getText();	
	};
//------------------------------- THE DIARY
	
	
//------------------------------ TIPS AND TRICKS
	//verificam ca exista butonul TIPS AND TRICKS in footerul din RTM
	that.tipsAndTricksFooterPresent = function (){
		return element (by.xpath(tipsAndTricks)).isPresent();
	};
		
	//ia elementul dupa XPATH --> TIPS AND TRICKS button
	that.tipsAndTricksButton = element (by.xpath(tipsAndTricks));
		
	//click pe elementul TIPS AND TRICKS din footerul din RTM
	that.tipsAndTricksFooterClick = function () {
		return element (by.xpath(tipsAndTricks)).click();
	};
	
	//luam textul de pe pagina THE DIARY
	that.verifyTipsAndTricksText = function () {
		return element (by.xpath(tipsAndTricksTextCheck)).getText();	
	};
//------------------------------- TIPS AND TRICKS
	
//------------------------------- COW CLICK
	//click pe LOGO-ul cu REMEMBER THE MILK din HEADER
	that.cowLogoHeaderClick = function () {
		return element (by.xpath(cowLogoHeader)).click();
	};	
//------------------------------- COW CLICK
	
	
	return that;
	
})();



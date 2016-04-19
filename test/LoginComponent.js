/**
 * User should be able to login
 */
var webdriver = require('selenium-webdriver');
var until = webdriver.until;
var conf = require('../ConfigFile/config.json');//configuration file
var ui = require('../SharedUIMap/SharedUIMap.json');//shared ui map
var test = require('selenium-webdriver/testing');
var assert = require('assert');
var By = webdriver.By;
var driver;	
var capabilities = {
  platformName: 'iOS',
  platformVersion: '9.3',
  browserName: 'safari',
  deviceName: 'iPhone 6s'
};

const mochaTimeOut = 200000;


describe('Login Tests', function() {
	this.timeout(mochaTimeOut);	//allow more time before testRunner fails the test

	beforeEach(function(done) {
		driver = new webdriver.Builder().usingServer('http://0.0.0.0:4723/wd/hub').
		  withCapabilities(capabilities).
		  build();

		driver.get(conf.url);
		done();
	});

	test.it('Allow user to login', function(){
		

		driver.findElement(By.xpath(ui.Btn_Mainpage_SignIn)).click();
		driver.findElement(By.xpath(ui.TxtField_login_Email)).sendKeys(conf.username);
		driver.findElement(By.xpath(ui.TxtField_login_Password)).sendKeys(conf.password);
		driver.findElement(By.xpath(ui.Btn_SignInPage_SignIn)).click();
	  	driver.wait(until.elementLocated(By.xpath(ui.Dropdown_MainPage_MyAccount)), 30000);
	  	driver.isElementPresent(By.xpath(ui.Dropdown_MainPage_MyAccount)).then(function(login){
			assert.equal(login, true);
	  	});	
	});

	afterEach(function(done){
		driver.quit();
		done();	
	});

});
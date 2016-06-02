var webdriver = require('selenium-webdriver');
var assert = require('assert');
var until = webdriver.until;
var login = require('../Utilities/functions.js')
var By = webdriver.By;
var conf = require('../ConfigFile/config.json');//configuration file
var ui = require('../SharedUIMap/SharedUIMap.json');//shared ui map
var test = require('selenium-webdriver/testing');
var utility = require('../Utilities/utilities.js');
var driver;
var capabilities = {
  platformName: 'iOS',
  platformVersion: '9.3',
  browserName: 'safari',
  deviceName: 'iPhone 6s'
};

const mochaTimeOut = 200000;

describe('Saved Search', function(){
	this.timeout(mochaTimeOut);

	beforeEach(function(done){
		driver = new webdriver.Builder().usingServer('http://0.0.0.0:4723/wd/hub').
		  withCapabilities(capabilities).
		  build();

		driver.get(conf.url);
		done();
	});



	test.it('Allow user to save search', function(){
		login.userLogin(driver);
		driver.findElement(By.xpath(ui.Btn_MainPage_SearchMagnifyGlss)).click();
		driver.findElement(By.xpath(ui.Btn_SearchPage_Search)).click();
		driver.wait(until.elementLocated(By.xpath(ui.Btn_ResultsPage_SaveSearch)), 30000);
		driver.findElement(By.xpath(ui.Btn_ResultsPage_SaveSearch)).click();
		driver.findElement(By.xpath(ui.TxtField_SaveSearchWindow_Name)).clear();
		driver.findElement(By.xpath(ui.TxtField_SaveSearchWindow_Name)).sendKeys("SavedSearch");
		driver.findElement(By.xpath(ui.Dropdown_SaveSearchWindow_EmailFrequencyWeekly)).click();
		driver.findElement(By.xpath(ui.Btn_SaveSearchWindow_SaveSearch)).click();
		driver.sleep(5000);
		driver.findElement(By.xpath(ui.Dropdown_MainPage_MyAccount)).click();
		driver.findElement(By.xpath(ui.Btn_MtAccountDropdown_AccountSettings)).click();
		driver.wait(until.elementLocated(By.xpath(ui.Btn_ProfilePage_SaveSearches)), 10000);
		driver.findElement(By.xpath(ui.Btn_ProfilePage_SaveSearches)).click();
		driver.isElementPresent(By.xpath(ui.Text_ProfilePageSaveSearches_NoSavedSearch)).then(function(savedSearch){
			assert.equal(savedSearch, false);	
		});	

	});

	afterEach(function(done){
		driver.quit();
		done();	
	});
});
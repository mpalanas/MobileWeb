var webdriver = require('selenium-webdriver');
var assert = require('assert');
var until = webdriver.until;
var login = require('./Utilities/functions.js')
var By = webdriver.By;
var conf = require('./ConfigFile/config.json');//configuration file
var ui = require('./SharedUIMap/SharedUIMap.json');//shared ui map
var test = require('selenium-webdriver/testing');
var utility = require('./Utilities/utilities.js');
var capabilities = {
  platformName: 'iOS',
  platformVersion: '9.3',
  browserName: 'safari',
  deviceName: 'iPhone 6s'
};

var driver = new webdriver.Builder().usingServer('http://0.0.0.0:4723/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get(conf.url);

login.userLogin(driver);

driver.findElement(By.xpath(ui.Btn_MainPage_SearchMagnifyGlss)).click();
driver.findElement(By.xpath(ui.Btn_ResultsPage_SaveProperty)).click();
driver.findElement(By.xpath(ui.Btn_ResultsPage_SaveSearch)).click;
driver.findElement(By.xpath(ui.TxtField_SaveSearchWindow_Name)).clear()

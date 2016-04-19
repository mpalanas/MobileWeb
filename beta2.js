var webdriver = require('selenium-webdriver');
var conf = require('./ConfigFile/config.json');//configuration file
var ui = require('./SharedUIMap/SharedUIMap.json');//shared ui map
var test = require('selenium-webdriver/testing');
var utility = require('./Utilities/utilities.js');
var assert = require('assert');
var By = webdriver.By;
var driver; 
var capabilities = {
  platformName: 'iOS',
  platformVersion: '9.3',
  browserName: 'safari',
  deviceName: 'iPhone 6s'
};


utility.generateUsername(); 


driver = new webdriver.Builder().usingServer('http://0.0.0.0:4723/wd/hub').
withCapabilities(capabilities).
build();

driver.get(conf.url);

driver.findElement(By.xpath(ui.Btn_MainPage_Register)).click();

driver.wait(driver.isElementPresent(By.xpath(ui.TxtField_RegisterPage_FirstName)),10000);

driver.findElement(By.xpath(ui.TxtField_RegisterPage_FirstName)).sendKeys("TestFirstName");
driver.findElement(By.xpath(ui.TxtField_RegisterPage_LastName)).sendKeys("TestLastName");
driver.findElement(By.xpath(ui.TxtField_RegisterPage_Email)).sendKeys(conf.username);
driver.findElement(By.xpath(ui.TxtField_RegisterPage_Password)).sendKeys(conf.password);
driver.findElement(By.xpath(ui.Btn_RegisterPage_RegisterNow)).click();
driver.wait(driver.isElementPresent(By.xpath(ui.Dropdown_MainPage_MyAccount)), 30000); 

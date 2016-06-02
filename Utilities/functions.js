/**
 * This is to ensure user can log in using a public account
 */
var webdriver = require('selenium-webdriver');
var conf = require('../ConfigFile/config.json');//configuration file
var ui = require('../SharedUIMap/SharedUIMap.json');//shared ui map
var By = webdriver.By;
var until = webdriver.until;
var exports = module.exports = {};

exports.userLogin = function(driver)
{
	driver.findElement(By.xpath(ui.Btn_Mainpage_SignIn)).click();
	driver.findElement(By.xpath(ui.TxtField_login_Email)).sendKeys(conf.username);
	driver.findElement(By.xpath(ui.TxtField_login_Password)).sendKeys(conf.password);
	driver.findElement(By.xpath(ui.Btn_SignInPage_SignIn)).click();
	driver.wait(until.elementLocated(By.xpath(ui.Dropdown_MainPage_MyAccount)), 30000);

}
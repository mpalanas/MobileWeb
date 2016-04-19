/**
 * This is to ensure user can log in using a public account
 */
var webdriver = require('selenium-webdriver');
var conf = require('../ConfigFile/config.json');//configuration file
var ui = require('../SharedUIMap/SharedUIMap.json');//shared ui map
var By = webdriver.By;
var exports = module.exports = {};

exports.userLogin = function(driver)
{
	driver.findElement(By.xpath(ui.Btn_Mainpage_SignIn)).click();
	driver.findElement(By.xpath(ui.TxtField_login_Email)).sendKeys(conf.username);
	driver.findElement(By.xpath(ui.TxtField_login_Password)).sendKeys(conf.password);
	driver.findElement(By.xpath(ui.Btn_SignInPage_SignIn)).click();
		

	driver.wait(user_login, 30000);



	function user_login() {
		var promise = driver.isElementPresent(By.xpath(".//*[@id='account-dropdown']")).then	(function(login)
		{
			if(login === true)
			{
				console.log('success');
				return true;
			}
			else
			{
				console.log('fail');
			}	
		});
		return promise;										
	}
}
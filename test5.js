var webdriver = require('selenium-webdriver');
var fs = require('fs');

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

function sleep(milliSeconds)
{
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
}

driver.get("http://www.kaasan.info/sample/2012/10/simple_form/mail.php").
    then(function() {
      sleep(1000);
      return driver.findElement(webdriver.By.name('submit')).click();
    }).
    then(function(submit) {
      sleep(1000);
      return driver.findElement(webdriver.By.name('name')).sendKeys('ITかあさん');
    }).
    then(function() {
      sleep(1000);
      return driver.findElement(webdriver.By.name('e_mail')).sendKeys('info@kaasan.info');
    }).
    then(function() {
      sleep(1000);
      return driver.findElement(webdriver.By.name('comment')).sendKeys('今からJavaScript祭の参加は可能ですか？');
    }).
    then(function() {
      sleep(2000);
      return driver.findElement(webdriver.By.name('submit')).click();
    }).
    then(function() {
      sleep(1000);
      return driver.findElement(webdriver.By.name('submit')).click();
    });
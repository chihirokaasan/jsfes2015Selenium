var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
usingServer('http://localhost:4444/wd/hub').
withCapabilities(webdriver.Capabilities.chrome()).
build();

driver.get('https://peraichi.com/landing_pages/view/jsfes2015vol1');

driver.quit();

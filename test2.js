var webdriver = require('selenium-webdriver');
var fs = require('fs');

var driver = new webdriver.Builder().
    usingServer('http://localhost:4444/wd/hub').
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

webdriver.WebDriver.prototype.saveScreenshot = function(filename) 
{
    return driver.takeScreenshot().
        then(function(data)
        {
            fs.writeFile
            (
                filename,
                data.replace(/^data:image\/png;base64,/,''), 
                'base64',
                function(error)
                {
                    if(error) throw error;
                }
            );
        });
};


function waiting(ms){
var d1 = new Date().getTime(); 
var d2 = d1;
while (d2 < d1 + ms) { //T秒待つ 
d2 = new Date().getTime(); 
} 
return; 
}

var i = 0;
var folder = '/Users/matsudachihiro/jsfes2015test/capture/'
driver.get('https://peraichi.com/landing_pages/view/jsfes2015vol1');
driver.manage().window().maximize();
waiting(3000);
i = i + 1;
driver.saveScreenshot( folder + i + '_max.png');
driver.manage().window().setSize(640, 1500);
i = i + 1;
driver.saveScreenshot( folder +  i + '_640x360.png');
driver.manage().window().setSize(320, 1500);
i = i + 1;
driver.saveScreenshot( folder +  i + '_320x640.png');
   
driver.quit();
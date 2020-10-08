const { Builder, By, Key, until } = require('selenium-webdriver');
const data = require('./data');

/*const comandos = {
  login: '//*[@id="loginfrm"]/div[3]/div[1]/label/input',
  password: '//*[@id="loginfrm"]/div[3]/div[2]/label/span',
  botaoLogin: '//*[@id="loginfrm"]/button'
};*/



(async function falha() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(data[0].url);
    await driver.findElement(By.xpath(comandos.login)).sendKeys(data[0].Email);
    await driver.findElement(By.xpath(comandos.password)).sendKeys(data[0].password);
    await driver.findElement(By.xpath(comandos.botaoLogin)).click;

    //*await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    //await driver.quit();
  }
})();
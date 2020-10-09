const { Builder, By, Key, until } = require('selenium-webdriver');
const data = require('./data');

const comandos = {
partida: '//*[@id="select2-drop"]/div/input',
chegada: '//*[@id="select2-drop"]/div/input',
classe: '//*[@id="flights"]/div/div/form/div/div/div[1]/div[2]/div/div/a/span'
};

(async function falha() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get(data[0].url);
    await driver.findElement(By.xpath(comandos.partida)).sendKeys(goiania);
    await driver.findElement(By.xpath(comandos.chegada).sendKeys(guarulhos);
    await driver.findElement(By.xpath(comandos.classe);

    //*await driver.wait(until.titleIs('webdriver - '), 1000);
  //} finally {
    //await driver.quit();
  //}
})();
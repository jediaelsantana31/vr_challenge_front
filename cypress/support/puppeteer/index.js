const { setup, retry } = require('@cypress/puppeteer')

module.exports = function puppeteerSetup(on) {
  setup({
    on,
    onMessage: {
      async switchTabAndGetContent (browser) {
        const page = await pageRetrier(browser, 'loja.vr.com.br')

        await page.bringToFront()

        const headingTwo = await page.waitForSelector('h2')
        const headingTwoText = await page.evaluate(el => el.textContent, headingTwo)

        headingTwo.dispose()

        await page.close()

        return headingTwoText
      }
    },
  })
}

async function pageRetrier(browser, url) {
  const page = await retry(async () => {
    const pages = await browser.pages()
    const page = pages.find(page => page.url().includes(url))

    if (!page) throw new Error('Não foi possível encontrar a página')

    return page
  })

  return page
}
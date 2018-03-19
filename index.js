const { parse } = require('url')
const metascraper = require('metascraper')
const got = require('got')
const { handleErrors, createError } = require('micro-boom')

module.exports = handleErrors(async (req, res) => {
  const { query: { url } } = parse(req.url, true)

  if (!url) {
    throw createError(400, 'Missing `url` parameter')
  }

  try {
    const {body: html, url: responseUrl} = await got(url)
    return await metascraper({html, url: responseUrl})
  } catch (err) {
    console.error(`${req.url}: ${err.message}`)
    throw createError(400, err)
  }
})

const { parse } = require('url')
const { scrapeUrl } = require('metascraper')
const { handleErrors, createError } = require('micro-boom')

module.exports = handleErrors(async (req, res) => {
  const { query: { url } } = parse(req.url, true)

  if (!url) {
    throw createError(400, 'Missing `url` parameter')
  }

  try {
    return await scrapeUrl(url)
  } catch (err) {
    console.error(`${req.url}: ${err.message}`)
    throw createError(400, err)
  }
})

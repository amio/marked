const fs = require('fs')
const marked = require('marked')
const micro = require('micro')

const README = marked(fs.readFileSync('README.md', 'utf-8'))
const IndexHTML = helmet(README, {
  title: 'Marked: markdown render service.',
  linkCSS: 'https://markdowncss.github.io/splendor/css/splendor.css'
})

const endpoint = async (req, res) => {
  if (req.method === 'POST' && req.url === '/') {
    const { text, title, linkCSS, inlineCSS } = await micro.json(req)

    if (text) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      return helmet(marked(text), { title, linkCSS, inlineCSS })
    } else {
      return micro.send(res, 400, '"text" field is required')
    }
  }

  if (req.method === 'GET') {
    switch (req.url) {
      case '/favicon.ico':
        return ''
      default:
        return IndexHTML
    }
  }
}

function helmet (bodyHTML, { title = '', linkCSS, inlineCSS }) {
  const linkStyle = linkCSS ? `<link rel="stylesheet" href="${linkCSS}" />` : ''
  const inlineStyles = inlineCSS ? `<style>${inlineCSS}</style>` : ''

  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        ${linkStyle}
        ${inlineStyles}
      </head>
      <body>
        ${bodyHTML}
      </body>
    </html>
  `
}

module.exports = endpoint
micro(module.exports).listen(3000)

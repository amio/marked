# Marked

[![Greenkeeper badge](https://badges.greenkeeper.io/amio/marked.svg)](https://greenkeeper.io/)

Markdown render service.

## Endpoint

- `POST`: render markdown text  
  ```javascript
  {
      text: '<MarkdownText>',   // required
      title: '<DocumentTitle>',
      linkCSS: '<URL>',
      inlineCSS: '<CSSText>'
  }
  ```

## License

MIT @ [Amio](author)

[repo]:   https://github.com/amio/marked
[author]: https://github.com/amio

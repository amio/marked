# Marked

Markdown render service.

## Endpoint

- POST __`/`__ render markdown text  
  ```javascript
  {
      text: '<MarkdownText>',   // required
      title: '<DocumentTitle>',
      linkCSS: '<URL>',
      inlineCSS: '<CSSText>'
  }
  ```
  returns html raw string.

  tryout:
  ```bash
  curl -X POST -d '{"text": "hola"}' https://marked.now.sh
  ```

## License

MIT @ [Amio](author)

[repo]:   https://github.com/amio/marked
[author]: https://github.com/amio

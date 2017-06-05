const React = require('react')
const T = require('prop-types')
const pkg = require('./package.json')

const Template = ({
  title = pkg.name,
  description = pkg.description,
  body = '',
  lang = 'ja',
  manifest = {},
  favicon,
}) => (
  <html lang={lang}>
    <head>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={description} />
      {favicon ? <link rel='shortcut icon' href={favicon} /> : null}
      {manifest['app.css'] ? <link rel='stylesheet' href={manifest['app.css']} /> : null}
    </head>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: body }} />
      <script src={manifest['app.js']} />
    </body>
  </html>
)

Template.propTypes = {
  title: T.string,
  body: T.string,
  favicon: T.string,
  lang: T.string,
  manifest: T.shape({ 'app.js': T.string, 'app.css': T.string }),
}

module.exports = Template

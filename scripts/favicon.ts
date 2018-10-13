import { writeFileSync } from 'fs'
import * as favicons from 'favicons'
import * as toIco from 'to-ico'
import chalk from 'chalk'

const source = './src/images/portrait.png'
const outDir = 'build'
const configuration = {
  ...favicons.config,
  icons: {
    android: false,
    appleIcon: false,
    appleStartup: false,
    coast: false,
    favicons: true, // just only this
    firefox: false,
    windows: false,
    yandex: false,
  },
}
const target = 'favicon-32x32.png'

interface IResponse {
  images: { name: string; contents: Buffer; }[]
}

favicons(source, configuration, (err: Error, res: IResponse) => {
  if (err) throw err
  const buffers = res.images.filter(({ name }) => name === target).map(({ contents }) => contents)
  toIco(buffers)
  .then((buf: Buffer) => {
    const path = `${outDir}/favicon.ico`
    writeFileSync(path, buf)
    console.log(`  ${chalk.bgGreen(' generate ')} ${chalk.gray(path)}`)
  })
  .catch((err: Error) => { throw err })
})

import { $ } from 'zx'
import fs from 'node:fs/promises'
import path from 'node:path'
import {
  fileURLToPath
} from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

;(async () => {
  const files = await fs.readdir(__dirname)
  const dirs = []

  for (let file of files) {
    const stat = await fs.stat(path.join(__dirname, file))
    if (!stat.isDirectory()) continue
    const subFiles = await fs.readdir(path.join(__dirname, file))
    for (let subFile of subFiles) {
      if (subFile === 'slides.md') {
        dirs.push(file)
        break
      }
    }
  }

  for (let dir of dirs) {
    await $`pwd`
    await $`npx slidev build ./${dir}/slides.md --base /slides/${dir}/ --out ../slides/flex`
  }
  
})()
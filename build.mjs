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

  // 筛选出所有包含 slides.md 的文件夹，并进行 build
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
    await $`npx slidev build ./${dir}/slides.md --base /slides/${dir}/ --out ../slides/${dir}`
  }
})()
const fs = require('fs')
const map = {
  directory: '📁',
  file: '📄',
}

function toTree(path) {
  const stats = fs.statSync(path)
  
  if (stats.isDirectory()) {
    const dir = fs.readdirSync(path)
    const temp = dir.filter(child => child !== 'node_modules').map(child => {
      return toTree(`${path}/${child}`)
    })
    const dirName = path.split('/').pop()
    return {
      type: 'directory',
      name: dirName,
      children: temp
    }
  } else {
    return {
      type: 'file',
      name: path.split('/').pop(),
    }
  }
}

const result = toTree('D:\\www\\github\\npm-pkgs-reading\\yocto-queue')

let output = ''

function generateTreeStructure(data, indent = 0) {
  data.forEach(item => {
    if (item.children) {
      // 目录
      output += map[item.type] + ' ' + item.name + '\n'
      generateTreeStructure(item.children, indent + 2)
    } else {
      // 文件
      output += '-'.repeat(indent) + map[item.type] + ' ' + item.name + '\n'
    }
  })
}

console.log(JSON.stringify(result, null, 2));

generateTreeStructure(result.children)

console.log(output);
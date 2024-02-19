# 【造轮子】treei —— 一个用于输出目录树形结构的命令行工具

## 前言

写博客的时候，可能经常要用到类似 linux 系统中的 tree 命令，用来在文章中展示目录的树形结构，比如下面这种形式:

```
├──.gitignore
├──.release-it.json
├──CHANGELOG.md
├──package-lock.json
├──package.json
├──README.md
└──src
|   └──index.js
```

但是，在 windows 系统中，并没有 tree 命令。

之前也用过 [treer](https://www.npmjs.com/package/treer) 这个工具，总体来说蛮好用的，但是我想加点新的功能，比如:

- 支持将结果输出到文件时使用追加模式，而不是覆盖模式
- 支持用 emoji 区分文件和文件夹

于是，本着学习的目的，我就造了一个轮子 [treei](https://www.npmjs.com/package/treei)。

自己用了一段时间后，发现还真挺好用的，哈哈。

## 准备工作

用到的依赖:

- `fs`: Node.js 内置模块，提供了文件操作相关的功能
- `commander`: Node.js 命令行界面的完整解决方案
- `release-it`: 用于管理 npm 包的版本和发布等工作

## 实现

## 调试

现在我们已经完成了所有功能的开发，接下来就是进行调试了。

但总不能将包发布到 `npm` 后再下载下来进行调试吧？

因此，可以使用 `npm link` 命令，将包链接到全局，这样我们就可以直接在项目中使用这个包了。

在项目根目录下执行:

```bash
npm link
```

查看全局安装包:

```bash
$ npm ls  -g
D:\software\nvm\nodejs -> .\
├── @antfu/ni@0.21.12
├── http-server@14.1.1
├── npm@9.6.7
├── nrm@1.2.6
├── pnpm@8.6.12
├── treei@1.2.3 -> .\..\..\..\www\github\wheels\treei
├── typescript@5.3.3
```

可以看到 `npm link` 其实就是生成了一个指向 `treei` 项目的 **软连接**。

简单测试下效果:

```bash
treei $ (main) treei -i '.git|node_modules' --icon
D:\www\github\wheels\treei
├──📄.gitignore
├──📄.release-it.json
├──📄CHANGELOG.md
├──📄package-lock.json
├──📄package.json
├──📄README.md
└──📁src
|   ├──📄config.js
|   ├──📄generate.js
|   ├──📄index.js
|   ├──📄toTree.js
|   └──📄utils.js
```

:tada::tada::tada:


## 发布

### 手动管理

如果没账号就加添加一个账号，有账号就登录然后发布即可。

```bash
# 登录
npm login
# 发布
npm publish
```

发布成功后，就可以在 npm 上搜索到这个包了。

https://www.npmjs.com/package/treei

但是，如果后续有更新的话，每次都得手动更改**版本号**，然后再次执行 `npm login` 和 `npm publish`。

显然，这样重复的操作太繁琐了，而且还容易出错。

因此手动管理包的版本发布是不推荐的。

### 自动管理

[release-it](https://github.com/release-it/release-it)

一句话介绍 `release-it`: 一个自动管理包版本和包发布相关任务的命令行工具。

安装:

```bash
npm install release-it -D
```

配置 `package.json`:

```json
{
  "scripts": {
    "release": "release-it"
  }
}
```

由于这里我使用了自动生成 `changelog` 的功能，因此还需要安装一个 `release-it` 的插件:

```bash
npm install @release-it/conventional-changelog -D
```

在根目录创建 `release-it.json` 文件，内容如下:

```json
{
  "github": {
    "release": true,
    "web": true,
    "autoGenerate": true
  },
  "git": {
    "commitMessage": "release: v${version}"
  },
  "npm": {
    "publish": true
  },
  "hooks": {
    "after:bump": "echo 更新版本成功"
  },
  "plugins": {
    "@release-it/conventional-changelog": {
      "preset": "angular",
      "infile": "CHANGELOG.md"
    }
  }
}
```

执行命令:

```bash
npm run release
```

过程大概如下图所示:

![release](./images/release.png)

执行成功后就可以在 `npm` 找到这个包了。

https://www.npmjs.com/package/treei

## 总结

这里我们手摸手完成了一个包的开发，测试，发布等工作。

似乎一切都是那么的简单，就像呼吸一样，开个玩笑，哈哈。

来看下，整个过程我们学到了什么:

- 如何写一个Node命令行工具
- npm 包的本地调试
- `release-it` 包版本控制

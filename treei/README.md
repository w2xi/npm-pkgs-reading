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
├──📄.editorconfig
├──📄.eslintrc.js
├──📄.gitignore
├──📄.prettierrc.js
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

这没啥好说的，没账号就加添加一个账号，有账号就登录然后发布即可。

```bash
# 登录
npm login
# 发布
npm publish
```

发布成功后，就可以在 npm 上搜索到这个包了。

https://www.npmjs.com/package/treei

## 总结
# 【源码阅读】@vue/reactivity —— Vue3 响应式系统模块库

## 前言

[@vue/reactivity](https://www.npmjs.com/package/@vue/reactivity) 是 Vue3 响应式系统模块库，其源码位于 [Vue3 仓库](https://github.com/vuejs/core) 的 `packages/reactivity` 目录下，同时作为 Vue3 的一个单独的 NPM 包发布，其版本号与 Vue3 保持一致。

> 注意：本文基于 `@vue/reactivity` 版本 `v3.3.4` 进行分析的。

## 目录结构

```
├──📁dist // 打包输出
|   ├──📄reactivity.cjs.js
|   ├──📄reactivity.cjs.prod.js
|   ├──📄reactivity.d.ts
|   ├──📄reactivity.esm-browser.js
|   ├──📄reactivity.esm-browser.prod.js
|   ├──📄reactivity.esm-bundler.js
|   ├──📄reactivity.global.js
|   └──📄reactivity.global.prod.js
├──📄index.js // commonjs 入口文件
├──📄LICENSE
├──📄package.json
├──📄README.md
├──📁src  // 源代码
|   ├──📄baseHandlers.ts
|   ├──📄collectionHandlers.ts
|   ├──📄computed.ts
|   ├──📄deferredComputed.ts
|   ├──📄dep.ts
|   ├──📄effect.ts
|   ├──📄effectScope.ts
|   ├──📄index.ts
|   ├──📄operations.ts
|   ├──📄reactive.ts
|   ├──📄ref.ts
|   └──📄warning.ts
└──📁__tests__ // 单元测试
|   ├──📁collections
|   |   ├──📄Map.spec.ts
|   |   ├──📄Set.spec.ts
|   |   ├──📄shallowReadonly.spec.ts
|   |   ├──📄WeakMap.spec.ts
|   |   └──📄WeakSet.spec.ts
|   ├──📄computed.spec.ts
|   ├──📄deferredComputed.spec.ts
|   ├──📄effect.spec.ts
|   ├──📄effectScope.spec.ts
|   ├──📄reactive.spec.ts
|   ├──📄reactiveArray.spec.ts
|   ├──📄readonly.spec.ts
|   ├──📄ref.spec.ts
|   ├──📄shallowReactive.spec.ts
|   └──📄shallowReadonly.spec.ts
```
# deno_deploy_examples

[![Build Status](https://github.com/justjavac/deno_deploy_examples/workflows/ci/badge.svg?branch=main)](https://github.com/justjavac/deno_deploy_examples/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_deploy_examples)](https://github.com/justjavac/deno_deploy_examples/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.8-green.svg)](https://github.com/denoland/deno)

Deno 官方提供了一个类似 Cloudflare Workers 的 Serverless 平台，让开发者可以轻松的部署 Deno 代码。

**注**：去年我注册了 deno.dev 域名，随后将其送给了 ry。目前此域名用于代码部署服务，代码的默认部署域名为
`{project_name}-{deployment_id}.deno.dev`。

## 步骤

1. 进入 https://deno.com/deploy 网站，点击右上角 `Sign in`。
2. 默认可以使用 github 直接登录。
3. 点击 `New Project` 创建一个新项目。
4. 可以直接通过 url 部署，或者在设置（`Setting`）里面关联 GitHub 后在每次 push 的时候自动部署。

## 本地开发

1. 安装命令行工具

```shell
deno install --allow-read --allow-write --allow-env --allow-net --allow-run --no-check -r -f https://deno.land/x/deploy/deployctl.ts
```

2. 生成类型定义文件

```shell
deployctl types > deployctl.d.ts
```

3. 新建 mod.ts 文件开始编写代码

```ts
/// <reference path="./deployctl.d.ts" />

addEventListener("fetch", (event: FetchEvent) => {
  const response = new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
```

4. 本地启动服务

```shell
eployctl run --watch ./mod.ts
```

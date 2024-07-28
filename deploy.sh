#!/bin/bash
#打包本地代码
pnpm docs:build
#上传到服务器
rsync -avz .vitepress/dist koitori77:/www/wwwroot/default
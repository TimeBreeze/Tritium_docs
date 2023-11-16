

# 旧忆 残梦

## 玩yunzai也快1年了，从当初的手动部署，到现在的各种脚本，时间过的很快，但是我发现，没有一个整合型的文档，也确实没人写，谁没事写那玩意，工作量巨大，但考虑到很多作者的脚本，了解的人较少。以及各种问题层出不穷，为此，写了一篇这样的文档，

## 首先就是要感谢各位大佬的辛苦付出，没有你们我也写不出来这样的文档，

当前脚本日益完善，我再去写一个脚本也没多大作用，也不是写不出来，主要是考虑到后续维护，bug多了也不是很想去管，所以不如写给文档，就当交作业了

## 文档截图
![主页](./docs/public/img/截图1.jpg)





## 如果你觉着有能力参与到文档的书写中来，那做好不过了，所有人都可以拉去本仓库，修改然后提交到本仓库



```sh
# 克隆本仓库
git clone https://github.com/Oldmemorie/yunzai-bot-docs.git

# 2.安装 PNPM
npm install pnpm -g

# 3.设置淘宝镜像源
pnpm config set registry https://registry.npmmirror.com/

# 4.安装依赖
pnpm install

# 5.dev 运行，访问：http://localhost:5173
pnpm dev

# 6.打包
pnpm build
```

 文件存放位置：docs/.vitepress/dist,如果是部署到 GitHub Pages，可以利用 GitHub Actions，在 push 到 GitHub 后自动部署打包
 详情见：.github/workflows/deploy-pages.yml，根据个人需要删减工作流配置
 数据

### 7.部署
#### 7.1 push 到 GitHub 仓库，部署到 GitHub Pages：需要在仓库设置中启用 GitHub Pages（本仓库采用此种部署方式）
## 7.2 在其他平台部署, 例如：Gitee Pages、Vercel、Netlify、个人虚拟主机、个人服务器等



## License

- 文章遵循[ CC 4.0 BY-SA ](http://creativecommons.org/licenses/by-sa/4.0/)版权协议，转载请附上原文出处链接和声明
- 源码遵循 [MIT](https://github.com/Oldmemorie/Oldmemorie.github.io/blob/main/LICENSE) 许可协议
- Copyright © 2022-2023 旧忆 残梦

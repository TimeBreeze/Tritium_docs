# 什么是Redemption Project
***Redemption Project***
`救赎计划`

欢迎你参加到文档的建设中来，请确保你永远以下工具

Android端推荐使用zerotermux 

---
# Android zerotermux 安装Arch Linux
---

```sh
awk -f <(curl -L l.tmoe.me/2.awk)
# 备用地址
awk -f <(curl -L gitee.com/mo2/linux/raw/2/2.awk)
```


在 Linux 中启动 TMOE，会出现以下选项，请选择 Manager

![1](/img/1.jpg)


---

第一次进入，请阅读说明

![2](/img/2.jpg)


在出现 `您要继续吗? Do you want to continue?` 之类的选项时：`[Y/n]直接按回车，[y/N]输入y再回车`

---

由于国内 GitHub 连接较慢，推荐使用 Gitee

![3](/img/3.jpg)



在出现 `(Y/I/N/O/D/Z) [default=N] ?` 之类的选项时：`直接按回车即可`

![4](/img/4.jpg)


---

进入 TMOE 后，有 `root 权限` 使用 `chroot 容器`，否则使用 `PRoot 容器`

![5](/img/5.jpg)

---

首次进入，按提示选择配置：

1. DNS 推荐选择：`[240c::6666](CFIEC)`

2. 一言：`按需选择`

3. 时区(Timezone)：Asia/Shanghai `回车`

4. 共享目录：用于在容器中访问宿主文件，`按需选择`

5. chroot 模式(CHROOT MODE)：用不到 systemctl，`选择 normal`

---

进入容器菜单之后，选择 `发行版列表`

![6]/(img/6.jpg)

选择 `Arch`

![7](/img/7.jpg)

选择 `启动`


如果要多开容器，请选择新建容器

![8](/img/8.jpg)

---

等待容器安装完成


如果在安装中出现问题，可以尝试移除容器后重装



首次启动，按提示选择配置：

1. 新建 sudo 用户：一般使用 root 用户即可，`选择 否`

2. 为 root 用户配置 zsh：终端美化，按需选择，`推荐 是`

3. delete ~/zsh.sh：`选择 是`

4. 启动 tmoe tools?：`选择 否` (需要使用输入 tmoe 启动即可)


进入容器命令：`tmoe p/c a` (p 指 PRoot 容器，c 指 chroot 容器)

管理容器命令：`tmoe ls`
## 然后我们可以输入命令安装nodejs
```sh
pacman -S nodejs 
```

```sh
# 克隆本仓库
git clone https://github.com/Oldmemorie/RedemptionProject.git

# 2.安装 PNPM
npm install pnpm -g

# 3.设置淘宝镜像源
pnpm config set registry https://registry.npmmirror.com/

# 4.安装依赖
pnpm install

# 5.dev 运行，访问：http://localhost:5173/RedemptionProject/
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
- Copyright © 2023-now 旧忆 残梦
# Redemption-Project

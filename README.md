# HotPE Client

**警告：此仓库为早期 WIP！**

欲下载体验请到右边的 “Releases”。

# 介绍

此仓库为HotPE的聚合客户端

![Electron](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-%23323330.svg?style=for-the-badge&logo=TypeScript&logoColor=%23F7DF1E)
![Vite](https://img.shields.io/badge/Vite-%2335495e.svg?style=for-the-badge&logo=Vite&logoColor=%916CFE)
![React](https://img.shields.io/badge/React-%2335495e.svg?style=for-the-badge&logo=React&logoColor=%234FC08D)
![Semi Design](https://img.shields.io/badge/-SemiDesign-%230170FE?style=for-the-badge&logo=Semi-Design&logoColor=white)

![image](https://github.com/VirtualHotBar/HotPE_Client/assets/96966978/da49f6d9-edf9-45a8-9f8c-9233412d63a9)



# 使用

## 开发服务器
```batch
rem 启动渲染进程调试
yarn run dev 

rem 启动主进程调试
yarn run dev-main 

rem 启动electron调试
yarn run dev-ele 

rem 一键启动
cmd /c "start yarn run dev && start yarn run dev-main  && yarn run dev-ele"
```

## 构建
直接输出二进制可执行文件
```batch
yarn run build
```

## 许可证
HotPE Client的自编代码基于Apache 2.0许可证开源。

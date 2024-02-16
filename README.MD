# 使用说明-测试猿testMonkey
- vscode中使用，配合vscode插件: testMonkey - 自动化测试猿


## 官网文档-测试猿
https://test.844.ai

## 安装环境
- vscode 安装testmonkey 插件，离线安装或在线安装插件；
  - 离线安装方式：https://test.844.ai/download.html  下载testmonkey.vsix 文件


## 运行
- 连接手机 ctrl + alt + F6
  - 选择第二个：客户端模式，保持在一个局域网里。
- 输入手机ip。查看ip：
  - 方式1：测试猿app -->“我的”--> 查看 ip
  - 方式2：手机、设置、wifi网络、
- 运行代码： f6 
  - 直接创建js文件，按f6就能运行。

> 注意：框架提交便捷性，在运行代码时，如果检测到await 却没有async function，会自动包装。

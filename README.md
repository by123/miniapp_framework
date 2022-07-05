#### 安装依赖
	yarn


### 目录结构

- src
    - common 工具类
        - event.ts 消息订阅与发送
        - netutil.ts 网络请求
        - util.ts 工具集
        - constans.ts 字符集
        - login.ts 小程序登录工具
    - component 自定义组件
    - hooks 自定义hooks
    - imgs 图片集
    - pages 页面
 - app.scss
 - app.tsx 入口文件
 - config.json 配置各个环境的小程序appid及请求地址

#### 开发
- 测试环境
	yarn dev:weapp 		代码输出在 dist/weapp,用微信开发者工具导入项目
	yarn dev:alipay		代码输出在 dist/alipay，用支付宝开发工具导入项目

- 正式环境
	yarn build:weapp	目录为release
	yarn build:alipay
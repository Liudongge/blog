(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{426:function(t,e,a){"use strict";a.r(e);var s=a(20),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"h5屏幕录制并生成视频文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h5屏幕录制并生成视频文件"}},[t._v("#")]),t._v(" H5屏幕录制并生成视频文件")]),t._v(" "),a("h3",{attrs:{id:"工作内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作内容"}},[t._v("#")]),t._v(" 工作内容")]),t._v(" "),a("p",[t._v("todolist：")]),t._v(" "),a("ul",[a("li",[t._v("[ ] 「本地开发两个服务」")]),t._v(" "),a("li",[t._v("[ ] 「docker及pipeline编写」")]),t._v(" "),a("li",[t._v("[ ] 「发布到华为云CCE」")]),t._v(" "),a("li",[t._v("[ ] 「通过egg-react-ssr改造为ssr服务」")])]),t._v(" "),a("hr"),t._v(" "),a("h5",{attrs:{id:"本地开发两个服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本地开发两个服务"}},[t._v("#")]),t._v(" 本地开发两个服务")]),t._v(" "),a("p",[t._v("一、node服务")]),t._v(" "),a("ul",[a("li",[t._v("[x] 库表设计：目前缺失视频时间、视窗宽高字段，生成视频时使用")]),t._v(" "),a("li",[t._v("[x] 接口：保存eventlog信息")]),t._v(" "),a("li",[t._v("[x] 接口：获取eventlog列表")]),t._v(" "),a("li",[t._v("[x] 接口：获取eventlog详情")]),t._v(" "),a("li",[t._v("[ ] 接口：mp4文件下载")]),t._v(" "),a("li",[t._v("[ ] 模版渲染：eventlog重放")]),t._v(" "),a("li",[t._v("[ ] timecut生成视频")])]),t._v(" "),a("p",[t._v("二、vue前端服务")]),t._v(" "),a("p",[t._v("页面有：「操作记录列表页面」「重要操作页面」「在线播放页面」「生成视频按钮、下载视频按钮、是否生成视频状态」")]),t._v(" "),a("ul",[a("li",[t._v("[ ] 「操作记录列表页面」\n新增按钮进入重要操作页面 ✅\n在线播放按钮进入在线播放页面 ✅\n下载按钮下载视频文件 ❌")]),t._v(" "),a("li",[t._v("[x] 「重要操作页面」\n表单提交页面，进入页面开始操作录制，提交表单结束录制 ✅")]),t._v(" "),a("li",[t._v("[ ] 「在线播放页面」\n从接口获取eventlog，并在线播放 ✅\n在线播放页面展示优化 ❌")])]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"遇到的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[t._v("#")]),t._v(" 遇到的问题")]),t._v(" "),a("h5",{attrs:{id:"一、模版引擎渲染如何在js中取得参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、模版引擎渲染如何在js中取得参数"}},[t._v("#")]),t._v(" 一、模版引擎渲染如何在JS中取得参数")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("dump")]),t._v(" 和 "),a("code",[t._v("safe")]),t._v(" 过滤器")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" eventlog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" eventlog "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" dump "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" safe "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h5",{attrs:{id:"二、node使用eventlog渲染页面时-静态文件获取时elementui的woff和ttf文件出现跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、node使用eventlog渲染页面时-静态文件获取时elementui的woff和ttf文件出现跨域"}},[t._v("#")]),t._v(" 二、node使用eventlog渲染页面时，静态文件获取时elementui的woff和ttf文件出现跨域")]),t._v(" "),a("h5",{attrs:{id:"三、通过node执行timecut时-出现allow-scripts报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、通过node执行timecut时-出现allow-scripts报错"}},[t._v("#")]),t._v(" 三、通过node执行timecut时，出现"),a("code",[t._v("allow-scripts")]),t._v("报错")]),t._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1111"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("140921"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("391008:INFO:CONSOLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Blocked script execution in 'http://127.0.0.1:7001/video/1' because the document's frame is sandboxed and the 'allow-scripts' permission is not set.\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" source: http:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("127"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("1:7001"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("video"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("通过rrweb回放时的"),a("code",[t._v("UNSAFE_replayCanvas")]),t._v("属性关闭沙盒策略")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" replayer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("rrweb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Replayer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventlog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tUNSAFE_replayCanvas"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回放时是否回放 canvas 内容，开启后将会关闭沙盒策略")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nreplayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h5",{attrs:{id:"四、ffmpeg未安装报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、ffmpeg未安装报错"}},[t._v("#")]),t._v(" 四、ffmpeg未安装报错")]),t._v(" "),a("p",[t._v("报错"),a("code",[t._v("spawn ffmpeg ENOENT")])]),t._v(" "),a("p",[t._v("可以使用"),a("code",[t._v("brew install ffmpeg")]),t._v("安装，也可以通过源码编译安装。如果提示"),a("code",[t._v("nasm/yasm not found or too old. Use --disable-x86asm for a crippled build.")]),t._v("汇编工具没有安装，可以安装yasm。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://trac.ffmpeg.org/wiki/CompilationGuide/macOS",target:"_blank",rel:"noopener noreferrer"}},[t._v("macos安装ffmpeg"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("em",[a("strong",[t._v("注意：服务器部署时需要提前安装ffmpeg")])])]),t._v(" "),a("h5",{attrs:{id:"五、timecut使用时的参数设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、timecut使用时的参数设置"}},[t._v("#")]),t._v(" 五、timecut使用时的参数设置")]),t._v(" "),a("p",[t._v("参数如viewport的宽高、视频的时长等属性不能写成固定值，需要根据eventlog信息赋值。")]),t._v(" "),a("p",[t._v("在前端提交eventlog信息时，同时传入client的宽高，操作时长等信息")]),t._v(" "),a("h5",{attrs:{id:"六、timeouterror-navigation-timeout-of-30000-ms-exceeded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、timeouterror-navigation-timeout-of-30000-ms-exceeded"}},[t._v("#")]),t._v(" 六、"),a("code",[t._v("TimeoutError: Navigation timeout of 30000 ms exceeded")])]),t._v(" "),a("p",[t._v("使用egg view模版生成的页面，引用rrweb的replayer之后加载时一直转圈。另外引用的element的woff和ttf文件出现跨域问题。感觉应该是跨域问题导致的一直加载中，从而影响到puppeteer超时。")]),t._v(" "),a("ol",[a("li",[t._v("方案一：考虑解决跨域问题 => 研究下webpack是否可配置header。"),a("code",[t._v("devServer.headers")]),t._v("可以做相应配置。"),a("code",[t._v("headers: { 'Access-Control-Allow-Origin': '*' }")])]),t._v(" "),a("li",[t._v("方案二：去除使用element的icon的组件。不可行，字体文件是elementui必引入的？？")])]),t._v(" "),a("p",[t._v("采用方案一可以解决跨域问题，但是目前浏览器仍然处于加载的转圈状态。")]),t._v(" "),a("p",[t._v("暂无解决方案。尝试不使用服务端渲染的写法来做。")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("注意：前端部署时需要允许跨域")])])]),t._v(" "),a("h5",{attrs:{id:"_2020年11月13日"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020年11月13日"}},[t._v("#")]),t._v(" 2020年11月13日")]),t._v(" "),a("p",[t._v("在录屏demo的vue项目前端渲染，浏览器不出现转圈加载，但是timecut中的puppeteer仍然报超时。")]),t._v(" "),a("h5",{attrs:{id:"_2020年11月18日11-15-06"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020年11月18日11-15-06"}},[t._v("#")]),t._v(" 2020年11月18日11:15:06")]),t._v(" "),a("p",[t._v("直接使用puppeteer来打开服务端渲染的页面及录屏vue客户端渲染的页面，两者都没有完成page.goto()。使用订单贷的登录页面可以正常执行（和启动方式、部署方式无关）")]),t._v(" "),a("h5",{attrs:{id:"_2020年11月18日16-39-24"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2020年11月18日16-39-24"}},[t._v("#")]),t._v(" 2020年11月18日16:39:24")]),t._v(" "),a("p",[t._v("使用原生html渲染回放功能，浏览器出现转圈加载的状态。puppeteer加载出现超时无返回。")]),t._v(" "),a("h5",{attrs:{id:"【总结】使用自己生成的eventlog时-不管采用何种方式做回放渲染-在用puppeteer执行回放时page-goto-方法都无返回-直至超时。但是直接在浏览器渲染是能看到效果的。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【总结】使用自己生成的eventlog时-不管采用何种方式做回放渲染-在用puppeteer执行回放时page-goto-方法都无返回-直至超时。但是直接在浏览器渲染是能看到效果的。"}},[t._v("#")]),t._v(" 【总结】使用自己生成的eventlog时，不管采用何种方式做回放渲染，在用puppeteer执行回放时"),a("code",[t._v("page.goto()")]),t._v("方法都无返回，直至超时。但是直接在浏览器渲染是能看到效果的。")]),t._v(" "),a("h5",{attrs:{id:"_2021年08月24日10-45-25"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2021年08月24日10-45-25"}},[t._v("#")]),t._v(" 2021年08月24日10:45:25")]),t._v(" "),a("p",[t._v("上述总结有误，自己生成的页面，在直接使用puppeteer的goto时是正常的，直接使用timecut时才出现了30s超时问题。原因是timecut引用的timesnap在使用puppeteer的goto时，添加了属性"),a("code",[t._v("{ waitUntil: 'networkidle0' }")]),t._v("，去掉即可。")]),t._v(" "),a("p",[t._v("参考：https://github.com/tungs/timecut/issues/38")]),t._v(" "),a("p",[t._v("TODO：需要修改timesnap的代码，生成新的npm包。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/rrweb-io/rrweb/blob/master/guide.zh_CN.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("rrweb"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tungs/timecut",target:"_blank",rel:"noopener noreferrer"}},[t._v("timecut"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2020/01/ffmpeg.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FFmpeg 视频处理入门教程-阮一峰"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);
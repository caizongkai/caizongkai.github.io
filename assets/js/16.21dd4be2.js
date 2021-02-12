(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{208:function(a,s,t){"use strict";t.r(s);var e=t(0),n=Object(e.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"docker容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker容器"}},[a._v("#")]),a._v(" Docker容器")]),a._v(" "),t("blockquote",[t("p",[a._v("Docker容器我们分为两部分去讲解")])]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Docker容器简介")])]),a._v(" "),t("li",[t("p",[a._v("Docker容器详解")])])]),a._v(" "),t("h2",{attrs:{id:"docker容器简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker容器简介"}},[a._v("#")]),a._v(" Docker容器简介")]),a._v(" "),t("p",[a._v("我们可以用docker container run命令来启动容器，用docker container stop来停止容器，docker container rm命令来删除容器。")]),a._v(" "),t("h2",{attrs:{id:"docker容器详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker容器详解"}},[a._v("#")]),a._v(" Docker容器详解")]),a._v(" "),t("h3",{attrs:{id:"启动docker容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动docker容器"}},[a._v("#")]),a._v(" 启动Docker容器")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker contain run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("option"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("tag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#常用的option")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -it:使容器具备交互性并于终端连接")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -d:后台运行")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# --name 给容器命名")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# -p绑定端口映射，如-p 8000:80表示将宿主机的8000映射到容器的80端口")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# --volume,-v:表示绑定一个卷")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("h3",{attrs:{id:"查看运行中的容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看运行中的容器"}},[a._v("#")]),a._v(" 查看运行中的容器")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker contain "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#加上-a选项可以列出暂停中的容器")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("h3",{attrs:{id:"将命令终端连接到docker容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将命令终端连接到docker容器"}},[a._v("#")]),a._v(" 将命令终端连接到Docker容器")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker container "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" -it "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("container id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"停止docker容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止docker容器"}},[a._v("#")]),a._v(" 停止Docker容器")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker contain stop "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("contain id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"删除docker容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除docker容器"}},[a._v("#")]),a._v(" 删除Docker容器")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker contain "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("contain id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"启动暂停的docker容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动暂停的docker容器"}},[a._v("#")]),a._v(" 启动暂停的Docker容器")]),a._v(" "),t("p",[a._v("当Docker容器使用了docker contain stop后，Docker container的状态就会变成Exited(0)，我们可以通过下面的命令来启动容器")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker container start "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("container id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("然后可以用exec命令连接到Docker容器的终端。")]),a._v(" "),t("h3",{attrs:{id:"优雅的停止docker容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优雅的停止docker容器"}},[a._v("#")]),a._v(" 优雅的停止Docker容器")]),a._v(" "),t("p",[a._v("当我们想对容器进行删除操作时，我们要先对容器进行停止操作，再进行删除操作，也就是通过下面两个命令进行停止删除：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker container stop "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("container id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\ndocker container "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("container id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("但是我们也可以用下面的命令进行强制删除的操作")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker container "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("container id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" -f\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("但是我们先用stop命令来停止容器，该命令会想容器的PID 1进程发送SIGTERM这样的信号，给容器10s处理自己的后事，然后再发送SIGKILL信号，杀死容器。但是当我们用强制删除命令，相当于直接对容器发送了SIGKILL信号，容器毫无反应就被当头一击，当场去世。")]),a._v(" "),t("h3",{attrs:{id:"容器的策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器的策略"}},[a._v("#")]),a._v(" 容器的策略")]),a._v(" "),t("p",[a._v("容器的策略有三种，包括always、unless-stopped和on-failure，我们可以通过在启动Docker容器的时候进行赋值")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker container run --name neversaydie -it --restart always alpine "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# --restart always指定了当Docker daemon重启时，该容器也会重启")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# unless-stopped策略不会在Docker daemon重启时重启容器，可以用(systemctl restart docker验证)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# on-failure策略会在退出容器并且返回值不是0的时候重启容器，在Docker daemon重启时也会重启容器。")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h3",{attrs:{id:"容器的策略的对比以及详解（todo）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器的策略的对比以及详解（todo）"}},[a._v("#")]),a._v(" 容器的策略的对比以及详解（todo）")]),a._v(" "),t("h3",{attrs:{id:"docker查看容器详情"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker查看容器详情"}},[a._v("#")]),a._v(" Docker查看容器详情")]),a._v(" "),t("p",[a._v("可以使用inspect命令来查看容器运行时使用的镜像的信息")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("docker image inspect "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("container id"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}],!1,null,null,null);s.default=n.exports}}]);
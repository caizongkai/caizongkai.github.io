(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{228:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"java-基础-注解机制详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-基础-注解机制详解"}},[s._v("#")]),s._v(" Java 基础 - 注解机制详解")]),s._v(" "),t("h2",{attrs:{id:"注解基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注解基础"}},[s._v("#")]),s._v(" 注解基础")]),s._v(" "),t("h3",{attrs:{id:"java内置注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java内置注解"}},[s._v("#")]),s._v(" Java内置注解")]),s._v(" "),t("h4",{attrs:{id:"override"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#override"}},[s._v("#")]),s._v(" @Override")]),s._v(" "),t("p",[s._v("表示当前的方法定义将覆盖父类中的方法")]),s._v(" "),t("h4",{attrs:{id:"deprecated"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deprecated"}},[s._v("#")]),s._v(" @Deprecated")]),s._v(" "),t("p",[s._v("表示代码被弃用，如果使用了被@Deprecated注解的代码则编译器将发出警告")]),s._v(" "),t("h4",{attrs:{id:"suppresswarnings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#suppresswarnings"}},[s._v("#")]),s._v(" @SuppressWarnings")]),s._v(" "),t("p",[s._v("表示关闭编译器警告信息")]),s._v(" "),t("h3",{attrs:{id:"元注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元注解"}},[s._v("#")]),s._v(" 元注解")]),s._v(" "),t("p",[s._v("元注解就是注解的注解。")]),s._v(" "),t("h4",{attrs:{id:"target"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#target"}},[s._v("#")]),s._v(" @Target")]),s._v(" "),t("p",[s._v("Target注解的作用是：描述注解的使用范围（即：被修饰的注解可以用在什么地方） 。它的取值范围定义在ElementType 枚举中。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ElementType")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n \n    TYPE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 类、接口、枚举类")]),s._v("\n \n    FIELD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 成员变量（包括：枚举常量）")]),s._v("\n \n    METHOD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 成员方法")]),s._v("\n \n    PARAMETER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 方法参数")]),s._v("\n \n    CONSTRUCTOR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 构造方法")]),s._v("\n \n    LOCAL_VARIABLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 局部变量")]),s._v("\n \n    ANNOTATION_TYPE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注解类")]),s._v("\n \n    PACKAGE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 可用于修饰：包")]),s._v("\n \n    TYPE_PARAMETER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 类型参数，JDK 1.8 新增")]),s._v("\n \n    TYPE_USE "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用类型的任何地方，JDK 1.8 新增")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h4",{attrs:{id:"retention"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#retention"}},[s._v("#")]),s._v(" @Retention")]),s._v(" "),t("p",[s._v("Reteniton注解的作用是：描述注解保留的时间范围（即：被描述的注解在它所修饰的类中可以被保留到何时） ,一共有三种策略，定义在RetentionPolicy枚举中。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("enum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RetentionPolicy")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n \n    SOURCE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 源文件保留")]),s._v("\n    CLASS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编译期保留，默认值")]),s._v("\n    RUNTIME   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 运行期保留，可通过反射去获取注解信息")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"documented"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#documented"}},[s._v("#")]),s._v(" @Documented")]),s._v(" "),t("p",[s._v("Documented注解的作用是：描述在使用 javadoc 工具为类生成帮助文档时是否要保留其注解信息。")]),s._v(" "),t("h4",{attrs:{id:"inherited"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inherited"}},[s._v("#")]),s._v(" @Inherited")]),s._v(" "),t("p",[s._v("Inherited注解的作用：被它修饰的Annotation将具有继承性。如果某个类使用了被@Inherited修饰的Annotation，则其子类将自动具有该注解。")]),s._v(" "),t("h4",{attrs:{id:"repeatable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repeatable"}},[s._v("#")]),s._v(" @Repeatable")]),s._v(" "),t("p",[s._v("重复注解，定义后")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Repeatable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Authorities")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Authority")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("role")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Authorities")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Authority")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("value")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RepeatAnnotationUseNewVersion")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Authority")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("role"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Admin"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Authority")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("role"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Manager"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("doSomeThing")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("定义后，可以在一个地方使用多次同一个注解。")]),s._v(" "),t("h4",{attrs:{id:"native"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#native"}},[s._v("#")]),s._v(" @Native")]),s._v(" "),t("p",[s._v("表示该方法已经实现过了，用不同的语言实现，可能是C或者C++。")]),s._v(" "),t("h3",{attrs:{id:"注解与反射接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注解与反射接口"}},[s._v("#")]),s._v(" 注解与反射接口")]),s._v(" "),t("p",[s._v("定义注解后，如何获取注解中的内容呢？反射包java.lang.reflect下的AnnotatedElement接口提供这些方法。这里注意：只有注解被定义为RUNTIME后，该注解才能是运行时可见，当class文件被装载时被保存在class文件中的Annotation才会被虚拟机读取。")]),s._v(" "),t("h3",{attrs:{id:"自定义注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义注解"}},[s._v("#")]),s._v(" 自定义注解")]),s._v(" "),t("p",[s._v("自定义注解后可以通过切面来实现解耦。")])])}],!1,null,null,null);a.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{172:function(e,t,r){"use strict";var o=r(309),a=(r(310),r(311)),n=(r(312),function(){return o.createElement(o.Fragment,{},o.createElement("h1",{id:"formslot",className:"react-demo-h1"},"FormSlot"),o.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),o.createElement("p",{className:"react-demo-p"},"顾名思义，它就是一个表单的插槽组件，有些场景，表单结构很可能会插入一些跟整个表单\n没任何关系的内容，但是它在交互，信息流层面却又是一个值得插入的行为，所以\n，FormSlot 就是为了解决这个问题而存在的"),o.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),o.createElement(a,{code:"import {FormLayout} from '@uform/next(antd)'\n",justCode:!0,lang:null}),o.createElement("h2",{id:"api",className:"react-demo-h2"},"API"),o.createElement("p",{className:"react-demo-p"},"没有任何属性 API，您只需给其子节点随意的填充内容即可"),o.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),o.createElement(a,{code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { SchemaForm, Field, FormLayout, FormSlot } from '@uform/next(antd)'\n\nReactDOM.render(\n  <SchemaForm>\n    <Field type=\"object\">\n      <FormBlock title=\"基础信息\">\n        <FormSlot>\n          <div>这是一个随意插入的内容</div>\n        </FormSlot>\n      </FormBlock>\n    </Field>\n  </SchemaForm>,\n  document.getElementById('root')\n)\n",justCode:!0,lang:"javascript"}))});n.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=n},313:function(e,t,r){var o={"./bash":238,"./bash.js":238,"./css":239,"./css.js":239,"./htmlbars":240,"./htmlbars.js":240,"./javascript":241,"./javascript.js":241,"./scss":242,"./scss.js":242,"./typescript":243,"./typescript.js":243};function a(e){var t=n(e);return r(t)}function n(e){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=n,e.exports=a,a.id=313}}]);
//# sourceMappingURL=bundle.33.4dee4b15bf841df962ae.js.map
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.LiquorTree=t()}(this,function(){"use strict";!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" .tree-node { white-space: nowrap; } .tree-arrow { display: inline-block; height: 30px; cursor: pointer; margin-left: 30px; width: 0; } .tree-checkbox { display: inline-block; height: 30px; width: 30px; cursor: pointer; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAABaCAYAAACv+ebYAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAejAAAHowEwL7LFAAAAB3RJTUUH4gIDCy4HZhufyQAAAZVJREFUaN7t2U8og3EYB/DvO3pdRKR2UIiViNzsyE4yHCQiSSIHkQOSFuZPSqklDliSkhknBw4UhYPiJgebNaQtorc5rHfz6nVz0cqYdzt8n+PvOXz69TxPPfUI/pdXFXEIHeIUhAkTTmzY73/G9bVbW1iSApiZXYL3/lE7OBiUMTtnR2lJIWrNJm1gRfmAbX4NmRnp6Oxo1KbGqqpi2e6ALIfQ39eOpCSdNvCWcw8ezwOGBrqQkiLGpqvtq9t4V5SI+YPDM5ycXmB4qBtpaamxGyef7wmT04uQpMC33MXlFZw7+xgc6IRenxXbObaM9CAvNxuWMRtuXN6vd5fbi6UVB3p72lCQnxN1eYSfbiBHx+fY2NxFa0sdiosMsE4tormpBqZK46/6Qohm9XG57zC/sA5ZDsFcXYGG+qpfN6QQ7c4lSW9wub0wlpf9aRIELnuECRMmTJgwYcKECRMmTJgwYcKECRMmTJgwYcL/EMmRElMTVnhubyGKIhDtnUYAwuEwCgwGjI5bE+vHvDsRJkyYMOGI8Ql68IQ9vE0/3AAAAABJRU5ErkJggg=='); background-repeat: no-repeat; background-position-x: center; background-position-y: -30px; } .tree-anchor { outline-color: #eee; outline-width: 1px; display: inline-block; text-decoration: none; color: #343434; vertical-align: top; height: 24px; line-height: 24px; padding: 3px 6px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; } .tree-anchor:hover { background-color: #fafafa; } .tree--selected > .tree-anchor { background: #f0f0f0; } .tree--checked > .tree-checkbox { background-position-y: 0; } .tree--indeterminate > .tree-checkbox { background-position-y: -60px; } .tree--checked > .tree-anchor { background: #dadada; } .tree--has-child > .tree-arrow { margin-left: 0; width: 30px; background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAACXBIWXMAAA3XAAAN1wFCKJt4AAADGGlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBFTAyMHy7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BSMDVQYqg4jIKAUICxE+CDEESC4tKoMHJQODAIMCgwGDA0MAQyJDPcMChqMMbxjFGV0YSxlXMN5jEmMKYprAdIFZmDmSeSHzGxZLlg6WW6x6rK2s99gs2aaxfWMPZ9/NocTRxfGFM5HzApcj1xZuTe4FPFI8U3mFeCfxCfNN45fhXyygI7BD0FXwilCq0A/hXhEVkb2i4aJfxCaJG4lfkaiQlJM8JpUvLS19QqZMVl32llyfvIv8H4WtioVKekpvldeqFKiaqP5UO6jepRGqqaT5QeuA9iSdVF0rPUG9V/pHDBYY1hrFGNuayJsym740u2C+02KJ5QSrOutcmzjbQDtXe2sHY0cdJzVnJRcFV3k3BXdlD3VPXS8Tbxsfd99gvwT//ID6wIlBS4N3hVwMfRnOFCEXaRUVEV0RMzN2T9yDBLZE3aSw5IaUNak30zkyLDIzs+ZmX8xlz7PPryjYVPiuWLskq3RV2ZsK/cqSql01jLVedVPrHzbqNdU0n22VaytsP9op3VXUfbpXta+x/+5Em0mzJ/+dGj/t8AyNmf2zvs9JmHt6vvmCpYtEFrcu+bYsc/m9lSGrTq9xWbtvveWGbZtMNm/ZarJt+w6rnft3u+45uy9s/4ODOYd+Hmk/Jn58xUnrU+fOJJ/9dX7SRe1LR68kXv13fc5Nm1t379TfU75/4mHeY7En+59lvhB5efB1/lv5dxc+NH0y/fzq64Lv4T8Ffp360/rP8f9/AA0ADzT6lvFdAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAACCSURBVHja7JSxDkBQDEVPzYIVg/gAETaL//8NFonJKiRMwlAR78UgtOs9uU1vU1kwL4cffjcsrkTC3vecUxq8S+tFbSBnJNxMT1SnMFT0JKYw1AwEpjCUzASmMBR0xLrKKucHx7ZYmEVUFkeSMR3PU1eJ/gDFx6c9wqrq/56fgNcBAInl7e4ANk/XAAAAAElFTkSuQmCC'); background-repeat: no-repeat; transition: transform .3s; } .tree--expanded > .tree-arrow { transform: rotate(90deg); } .tree--disabled { color: #fff; background: #fff; opacity: .6; cursor: default; } .tree--disabled > .tree-anchor, .tree--disabled > .tree-anchor span { background: #fff; cursor: default; } .tree--disabled > .tree-anchor:focus { outline: none } .l-fade-enter-active, .l-fade-leave-active { transition: opacity .3s, transform .3s; transform: translateX(0); } .l-fade-enter, .l-fade-leave-to { opacity: 0; transform: translateX(-2em); } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var e={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"tree-node",class:e.nodeClass},[n("i",{staticClass:"tree-arrow",on:{click:e.toggleExpand}}),e._v(" "),e.options.checkbox?n("i",{staticClass:"tree-checkbox",on:{click:e.check}}):e._e(),e._v(" "),n("a",{ref:"anchor",staticClass:"tree-anchor",attrs:{href:"javascript:void(0)",tabindex:"1"},on:{focus:e.onNodeFocus,click:e.select}},[n("node-content",{attrs:{node:e.node}})],1),e._v(" "),n("transition",{attrs:{name:"l-fade"}},[e.hasChildren()&&e.state.expanded?n("ul",{staticClass:"tree-children"},e._l(e.node.children,function(t,i){return t.visible()?n("node",{key:t.id,attrs:{node:t,options:e.options}}):e._e()})):e._e()])],1)},staticRenderFns:[],name:"Node",inject:["tree"],props:["node","options"],components:{NodeContent:{props:["node"],render:function(e){var t=this.node,n=this.node.tree.vm;return n.$scopedSlots.default?n.$scopedSlots.default({node:this.node}):e("span",{domProps:{innerHTML:t.text}})}}},data:function(){return this.node.vm=this,{state:this.node.states}},computed:{nodeClass:function(){var e=this.state,t=this.hasChildren(),n={"tree--has-child":t,"tree--expanded":t&&e.expanded,"tree--selected":e.selected,"tree--disabled":e.disabled};return this.options.checkbox&&(n["tree--checked"]=e.checked,n["tree--indeterminate"]=e.indeterminate),n}},methods:{onNodeFocus:function(){this.tree.activeElement=this.node},focus:function(){this.$refs.anchor.focus()},check:function(){this.node.checked()?this.node.uncheck():this.node.check()},select:function(e){void 0===e&&(e=evnt);var t=e.ctrlKey;if(!this.options.parentSelect&&this.hasChildren())return this.toggleExpand();var n=this.tree,i=this.node;this.options.multiple?i.selected()?t?i.unselect():(n.unselectAll(),i.select()):i.select(t):i.selected()?i.unselect():i.select()},toggleExpand:function(){this.hasChildren()&&this.node.toggleExpand()},hasChildren:function(){return this.node.hasChildren()}}};function t(e,n){var i;return Array.isArray(e)?e.map(function(e){return t(e,n)}):(!1!==(i=n(e))&&e.hasChildren()&&(i=t(e.children,n)),i)}var n=function(e,t){if(this.id=t.id,this.states=t.state,this.children=t.children||[],this.parent=t.parent||null,this._data=Object.assign({},{text:t.text},t.data||{}),!e)throw new Error("Node must has a Tree context!");this.tree=e},i={depth:{configurable:!0},text:{configurable:!0}};function r(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function o(){return r()+r()+"-"+r()+"-"+r()+"-"+r()+"-"+r()+r()+r()}n.prototype.$emit=function(e){for(var t,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];(t=this.tree).$emit.apply(t,["node:"+e,this].concat(n))},i.depth.get=function(){var e=0,t=this.parent;if(!t)return e;do{e++}while(t=t.parent);return e},i.text.get=function(){return this.data("text")},i.text.set=function(e){var t=this.text;this.data("text",e),this.tree.$emit("node:text:changed",e,t)},n.prototype.data=function(e,t){return void 0===t?this._data[e]:(this._data[e]=t,this)},n.prototype.state=function(e,t){return void 0===t?this.states[e]:(this.states[e]=t,this)},n.prototype.recurseUp=function(e,t){if(void 0===t&&(t=this),t.parent)return!1!==e(t.parent)?this.recurseUp(e,t.parent):void 0},n.prototype.recurseDown=function(e,n){!0!==n&&e(this),this.hasChildren()&&t(this.children,e)},n.prototype.refreshIndeterminateState=function(){if(this.state("indeterminate",!1),this.hasChildren()){var e=this.children.length,t=0,n=0,i=0;this.children.forEach(function(e){e.checked()&&t++,e.disabled()&&i++,e.indeterminate()&&n++}),t==e-i?this.checked()||(this.state("checked",!0),this.$emit("checked")):(this.checked()&&(this.state("checked",!1),this.$emit("unchecked")),this.state("indeterminate",n>0||t>0&&t<e))}this.parent&&this.parent.refreshIndeterminateState()},n.prototype.indeterminate=function(){return this.state("indeterminate")},n.prototype.selectable=function(){return!this.state("disabled")&&this.state("selectable")},n.prototype.selected=function(){return this.state("selected")},n.prototype.select=function(e){return!this.selectable()||this.selected()?this:(this.tree.select(this,e),this.state("selected",!0),this.$emit("selected"),this)},n.prototype.unselect=function(){return this.selectable()&&this.selected()?(this.tree.unselect(this),this.state("selected",!1),this.$emit("unselected"),this):this},n.prototype.checked=function(){return this.state("checked")},n.prototype.check=function(){var e=this;return this.checked()||this.disabled()?this:this.indeterminate()?this.uncheck():(this.recurseDown(function(t){t.state("checked",!0),t.$emit("checked"),e.tree.check(t)}),this.parent&&this.parent.refreshIndeterminateState(),this)},n.prototype.uncheck=function(){var e=this;return!this.indeterminate()&&!this.checked()||this.disabled()?this:(this.recurseDown(function(t){t.state("checked",!1),t.state("indeterminate",!1),t.$emit("unchecked"),e.tree.check(t)}),this.parent&&this.parent.refreshIndeterminateState(),this)},n.prototype.show=function(){return this.visible()?this:(this.state("visible",!0),this.$emit("shown"),this)},n.prototype.hide=function(){return this.hidden()?this:(this.state("visible",!1),this.$emit("hidden"),this)},n.prototype.visible=function(){return this.state("visible")},n.prototype.hidden=function(){return!this.state("visible")},n.prototype.enable=function(){return this.enabled()?this:(this.recurseDown(function(e){e.disabled()&&(e.state("disabled",!1),e.$emit("enabled"))}),this)},n.prototype.enabled=function(){return!this.state("disabled")},n.prototype.disable=function(){return this.disabled()?this:(this.recurseDown(function(e){e.enabled()&&(e.state("disabled",!0),e.$emit("disabled"))}),this)},n.prototype.disabled=function(){return this.state("disabled")},n.prototype.expand=function(){return!this.hasChildren()||this.expanded()||this.disabled()?this:(this.state("expanded",!0),this.$emit("expanded"),this)},n.prototype.expanded=function(){return this.state("expanded")},n.prototype.collapse=function(){return!this.hasChildren()||this.collapsed()||this.disabled()?this:(this.state("expanded",!1),this.$emit("collapsed"),this)},n.prototype.collapsed=function(){return!this.state("expanded")},n.prototype.toggleExpand=function(){return this._toggleOpenedState()},n.prototype.toggleCollapse=function(){return this._toggleOpenedState()},n.prototype._toggleOpenedState=function(){return this.disabled()||!this.hasChildren()?this:this.expanded()?this.collapse():this.expand()},n.prototype.index=function(){return this.tree.index(this,verbose)},n.prototype.first=function(){return this.hasChildren()?this.children[0]:null},n.prototype.last=function(){return this.hasChildren()?this.children[this.children.length-1]:null},n.prototype.next=function(){return this.tree.nextNode(this)},n.prototype.prev=function(){return this.tree.prevNode(this)},n.prototype.focus=function(){this.vm&&this.vm.focus()},n.prototype.remove=function(){return this.tree.removeNode(this),this.$emit("removed"),this},n.prototype.hasChildren=function(){return this.children.length>0},n.prototype.isRoot=function(){return null===this.parent},Object.defineProperties(n.prototype,i);var s={selected:!1,selectable:!0,checked:!1,expanded:!1,disabled:!1,visible:!0,indeterminate:!1};function d(e){return void 0===e&&(e={}),Object.assign({},s,e)}function c(e,t){var i=null;return"string"==typeof t?i=new n(e,{text:t,state:d(),id:o()}):((i=new n(e,t)).states=d(i.states),i.id||(i.id=o()),i.children.length&&(i.children=i.children.map(function(t){return(t=c(e,t)).parent=i,t}))),i}var a=function(e){function t(){e.call(this)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.empty=function(){return this.splice(0,this.length),this},t.prototype.add=function(){for(var e,t=[],n=arguments.length;n--;)t[n]=arguments[n];return(e=this).push.apply(e,t),this},t.prototype.remove=function(e){var t=this.indexOf(e);return-1==t?this:(this.splice(t,1),this)},t.prototype.removeAll=function(e){for(;this.includes(e);)this.remove(e);return this},t.prototype.top=function(){return this[this.length-1]},t}(Array),h={id:"id",text:"text",children:"children",state:"state",data:"data"};var l=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)||(e=[e]);var i=Object.assign({},h,n);return e.map(function e(t){var n,r,o={id:(n=t)[(r=i).id],text:n[r.text],children:n[r.children],state:n[r.state],data:n[r.data]};return o.children&&(o.children=o.children.map(e)),o}).map(function(e){return c(t,e)})},p=function(e){this.vm=e,this.options=e.options,this.activeElement=null};p.prototype.$on=function(e){for(var t,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];(t=this.vm).$on.apply(t,[e].concat(n))},p.prototype.$once=function(e){for(var t,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];(t=this.vm).$once.apply(t,[e].concat(n))},p.prototype.$off=function(e){for(var t,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];(t=this.vm).$off.apply(t,[e].concat(n))},p.prototype.$emit=function(e){for(var t,n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];(t=this.vm).$emit.apply(t,[e].concat(n))},p.prototype.setModel=function(e){var n=this;if(this.model=e,this.selectedNodes=new a,this.checkedNodes=new a,t(e,function(e){e.tree=n,e.selected()&&n.selectedNodes.add(e),e.checked()&&(n.checkedNodes.add(e),e.parent&&e.parent.refreshIndeterminateState())}),!this.options.multiple&&this.selectedNodes.length){var i=this.selectedNodes.top();this.selectedNodes.forEach(function(e){i!==e&&e.state("selected",!1)}),this.selectedNodes.empty().add(i)}},p.prototype.recurseDown=function(e,n){return!n&&e&&(n=e,e=this.model),t(e,n)},p.prototype.select=function(e,t){var n=this.findNode(e);return!!n&&(this.options.multiple&&t?this.selectedNodes.add(n):(this.unselectAll(),this.selectedNodes.empty().add(n)),!0)},p.prototype.selectAll=function(){var e=this;return!!this.options.multiple&&(this.selectedNodes.empty(),this.recurseDown(function(t){e.selectedNodes.add(t.select(!0))}),!0)},p.prototype.unselect=function(e){var t=this.findNode(e);return!!t&&(this.selectedNodes.remove(t),!0)},p.prototype.unselectAll=function(){for(var e;e=this.selectedNodes.pop();)e.unselect();return!0},p.prototype.check=function(e){this.checkedNodes.add(e)},p.prototype.uncheck=function(e){this.checkedNodes.remove(e)},p.prototype.expand=function(e){return!e.expanded()&&(e.expand(),!0)},p.prototype.collapse=function(e){return!e.collapsed()&&(e.collapse(),!0)},p.prototype.toggleExpand=function(e){return!!e.hasChildren()&&(e.toggleExpand(),!0)},p.prototype.toggleCollapse=function(e){return!!e.hasChildren()&&(e.toggleCollapse(),!0)},p.prototype.addToModel=function(e,t){var n=this;void 0===t&&(t=this.model.length),this.model.splice(t,0,e),this.recurseDown(e,function(e){e.tree=n})},p.prototype.append=function(e){return e=c(e),this.addToModel(e),e},p.prototype.prepend=function(e){return e=c(e),this.addToModel(e,0),e},p.prototype.addNode=function(e){var t=this.model.length;return e=c(e),this.model.splice(t,0,e),this.$emit("node:added",e),e},p.prototype.removeNode=function(e){return e.parent?e.parent.children.splice(e.parent.children.indexOf(e),1):this.model.splice(this.model.indexOf(e),1),this.selectedNodes.remove(e),this.checkedNodes.remove(e),e},p.prototype.index=function(e,t){var n=e.parent;return n=n?n.children:this.model,t?{index:n.indexOf(e),target:n}:n.indexOf(e)},p.prototype.nextNode=function(e){var t=this.index(e,!0);return t.target[t.index+1]||null},p.prototype.nextVisibleNode=function(e){if(e.hasChildren()&&e.expanded())return e.first();var t=this.nextNode(e);return!t&&e.parent?e.parent.next():t},p.prototype.prevNode=function(e){var t=this.index(e,!0);return t.target[t.index-1]||null},p.prototype.prevVisibleNode=function(e){var t=this.prevNode(e);return t?t.hasChildren()&&t.expanded()?t.last():t:e.parent},p.prototype.isNode=function(e){return e instanceof n},p.prototype.findNode=function(e){if("string"==typeof e);else if(e instanceof n)return e},p.prototype.parse=function(e,t){t||(t=this.options.propertyNames);try{return l(e,this,t)}catch(e){return console.error(e),[]}};var u={ARROW_LEFT:37,ARROW_TOP:38,ARROW_RIGHT:39,ARROW_BOTTOM:40,SPACE:32},f=[37,38,39,40,32];function m(e){e.vm.$el.addEventListener("keydown",function(t){var n=t.keyCode,i=e.activeElement;if(e.isNode(i))switch(f.includes(n)&&(t.preventDefault(),t.stopPropagation()),n){case u.ARROW_LEFT:return i.collapse();case u.ARROW_RIGHT:return i.expand();case u.ARROW_TOP:return function e(t,n){var i=t.prevVisibleNode(n);if(i)return i.disabled()?e(t,i):void i.focus()}(e,i);case u.ARROW_BOTTOM:return function e(t,n){var i=t.nextVisibleNode(n);if(i)return i.disabled()?e(t,i):void i.focus()}(e,i);case u.SPACE:return function(e,t){t.checked()?e.uncheck(t):e.check(t)}(e,i)}},!0)}console.log("навигация КАК в сайдбаре винды.\n  Для чуваков, которые имеют детей:\n    Стрелка вправо - открываем. Если открыто, то делаем имитацию СТРЕЛКИ ВНИЗ\n    Стрелка влево - для закрытого элемента выделяем РОДИТЕЛЯ\n");var A={mounted:function(){var e=new p(this);this.model=e.parse(this.data,this.options.modelParse),this.tree=e,this.tree.setModel(this.model),this._provided.tree=e,m(e)},methods:{selected:function(){return this.options.multiple?this.tree.selectedNodes:this.tree.selectedNodes[0]||null},checked:function(){return this.options.checkbox?this.tree.checkedNodes:null},append:function(e){return this.tree.append(e)},prepend:function(e){return this.tree.prepend(e)},addNode:function(e){return this.tree.addNode(e)}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=" .tree { overflow: auto; } .tree-root, .tree-children { list-style: none; } .tree > .tree-root { padding: 0; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var y={multiple:!0,checkbox:!1,parentSelect:!1},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree",attrs:{role:"tree"}},[n("ul",{staticClass:"tree-root"},e._l(e.model,function(t,i){return t.visible()?n("node",{key:t.id,attrs:{node:t,options:e.options}}):e._e()}))])},staticRenderFns:[],name:"Tree",components:{node:e},mixins:[A],provide:function(e){return{tree:null}},props:{data:{type:Array,default:function(e){return[]}},options:{type:Object,default:function(e){return{}}}},data:function(){for(var e in y)!1==e in this.options&&(this.options[e]=y[e]);return{model:null,tree:null}}};return v.install=function(e){e.component(v.name,v)},"undefined"!=typeof window&&window.Vue&&window.Vue.use(v),v});

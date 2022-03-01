"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[158],{92158:function(e,t,a){a.d(t,{Z:function(){return P}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{afterClose:e.onClosed,bodyStyle:{padding:0},maskClosable:!1,width:680,destroyOnClose:""},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" "+e._s(e.modalTitle)+" "),e.loading?a("a-icon",{attrs:{type:"loading"}}):e._e()]},proxy:!0}]),model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[a("div",{staticClass:"card-container"},[a("a-tabs",{attrs:{type:"card"}},[a("a-tab-pane",{key:"normal",attrs:{tab:"常规"}},[a("a-form",{attrs:{"label-col":{span:4},"wrapper-col":{span:20},labelAlign:"left"}},[a("a-form-item",{attrs:{label:"文章标题"}},[a("a-input",{model:{value:e.form.model.title,callback:function(t){e.$set(e.form.model,"title",t)},expression:"form.model.title"}})],1),a("a-form-item",{attrs:{help:e.fullPath,label:"文章别名"}},[a("a-input",{scopedSlots:e._u([{key:"addonAfter",fn:function(){return[a("a-popconfirm",{attrs:{"cancel-text":"取消","ok-text":"确定",placement:"left",title:"是否确定根据标题重新生成别名？"},on:{confirm:e.handleGenerateSlug}},[a("a-icon",{staticClass:"cursor-pointer",attrs:{type:"sync"}})],1)]},proxy:!0}]),model:{value:e.form.model.slug,callback:function(t){e.$set(e.form.model,"slug",t)},expression:"form.model.slug"}})],1),a("a-form-item",{attrs:{label:"分类目录"}},[a("category-tree",{model:{value:e.form.model.categoryIds,callback:function(t){e.$set(e.form.model,"categoryIds",t)},expression:"form.model.categoryIds"}})],1),a("a-form-item",{attrs:{label:"标签"}},[a("TagSelect",{model:{value:e.form.model.tagIds,callback:function(t){e.$set(e.form.model,"tagIds",t)},expression:"form.model.tagIds"}})],1),a("a-form-item",{attrs:{label:"摘要"}},[a("a-input",{attrs:{autoSize:{minRows:5},placeholder:"如不填写，会从文章中自动截取",type:"textarea"},model:{value:e.form.model.summary,callback:function(t){e.$set(e.form.model,"summary",t)},expression:"form.model.summary"}})],1)],1)],1),a("a-tab-pane",{key:"advanced",attrs:{tab:"高级"}},[a("a-form",{attrs:{"label-col":{span:4},"wrapper-col":{span:20},labelAlign:"left"}},[a("a-form-item",{attrs:{label:"禁止评论"}},[a("a-switch",{model:{value:e.form.model.disallowComment,callback:function(t){e.$set(e.form.model,"disallowComment",t)},expression:"form.model.disallowComment"}})],1),a("a-form-item",{attrs:{label:"是否置顶"}},[a("a-switch",{model:{value:e.topPriority,callback:function(t){e.topPriority=t},expression:"topPriority"}})],1),a("a-form-item",{attrs:{label:"发表时间："}},[a("a-date-picker",{attrs:{defaultValue:e.createTimeDefaultValue,format:"YYYY-MM-DD HH:mm:ss",placeholder:"选择文章发表时间",showTime:""},on:{change:e.onCreateTimeSelect,ok:e.onCreateTimeSelect}})],1),a("a-form-item",{attrs:{label:"自定义模板："}},[a("a-select",{model:{value:e.form.model.template,callback:function(t){e.$set(e.form.model,"template",t)},expression:"form.model.template"}},[a("a-select-option",{key:"",attrs:{value:""}},[e._v("无")]),e._l(e.templates,(function(t){return a("a-select-option",{key:t,attrs:{value:t}},[e._v(" "+e._s(t)+" ")])}))],2)],1),a("a-form-item",{attrs:{label:"访问密码："}},[a("a-input-password",{attrs:{autocomplete:"new-password"},model:{value:e.form.model.password,callback:function(t){e.$set(e.form.model,"password",t)},expression:"form.model.password"}})],1),a("a-form-item",{attrs:{label:"封面图："}},[a("div",{staticClass:"post-thumb"},[a("a-space",{attrs:{direction:"vertical"}},[a("img",{staticClass:"img",attrs:{src:e.form.model.thumbnail||"/images/placeholder.jpg",alt:"Post cover thumbnail"},on:{click:function(t){e.attachmentSelectVisible=!0}}}),a("a-input",{attrs:{"allow-clear":"",placeholder:"点击封面图选择图片，或者输入外部链接"},model:{value:e.form.model.thumbnail,callback:function(t){e.$set(e.form.model,"thumbnail",t)},expression:"form.model.thumbnail"}})],1)],1)])],1)],1),a("a-tab-pane",{key:"seo",attrs:{tab:"SEO"}},[a("a-form",{attrs:{"label-col":{span:4},"wrapper-col":{span:20},labelAlign:"left"}},[a("a-form-item",{attrs:{label:"自定义关键词"}},[a("a-input",{attrs:{autoSize:{minRows:5},placeholder:"多个关键词以英文逗号隔开，如不填写，将自动使用标签作为关键词",type:"textarea"},model:{value:e.form.model.metaKeywords,callback:function(t){e.$set(e.form.model,"metaKeywords",t)},expression:"form.model.metaKeywords"}})],1),a("a-form-item",{attrs:{label:"自定义描述"}},[a("a-input",{attrs:{autoSize:{minRows:5},placeholder:"如不填写，会从文章中自动截取",type:"textarea"},model:{value:e.form.model.metaDescription,callback:function(t){e.$set(e.form.model,"metaDescription",t)},expression:"form.model.metaDescription"}})],1)],1)],1),a("a-tab-pane",{key:"meta",attrs:{tab:"元数据"}},[a("MetaEditor",{attrs:{metas:e.form.model.metas,targetId:e.form.model.id,target:"post"},on:{"update:metas":function(t){return e.$set(e.form.model,"metas",t)}}})],1)],1)],1),a("template",{slot:"footer"},[e._t("extraFooter"),a("a-button",{attrs:{disabled:e.loading},on:{click:function(t){e.modalVisible=!1}}},[e._v(" 关闭")]),e.form.model.id?e._e():a("ReactiveButton",{attrs:{errored:e.form.draftSaveErrored,loading:e.form.draftSaving,erroredText:"保存失败",loadedText:"保存成功",text:"保存草稿",type:"danger"},on:{callback:e.handleSavedCallback,click:function(t){return e.handleCreateOrUpdate("DRAFT")}}}),a("ReactiveButton",{attrs:{errored:e.form.saveErrored,erroredText:(e.form.model.id?"保存":"发布")+"失败",loadedText:(e.form.model.id?"保存":"发布")+"成功",loading:e.form.saving,text:e.form.model.id?"保存":"发布"},on:{callback:e.handleSavedCallback,click:function(t){return e.handleCreateOrUpdate()}}})],2),a("AttachmentSelectModal",{attrs:{multiSelect:!1,visible:e.attachmentSelectVisible},on:{"update:visible":function(t){e.attachmentSelectVisible=t},confirm:e.handleSelectPostThumbnail}})],2)},o=[],n=a(91057),l=a(76381),s=(a(70315),a(41479),a(30535),a(85018),a(31875),a(18482),a(86381),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tree",{attrs:{checkedKeys:e.categoryIds,treeData:e.categoryTree,checkStrictly:"",checkable:"",defaultExpandAll:"",showLine:""},on:{check:e.onCheck}})}),i=[],c=(a(21082),a(1540));function m(e,t){t.forEach((function(t){e.key===t.parentId&&(e.children||(e.children=[]),e.children.push({key:t.id,title:t.name,isLeaf:!1}))})),e.children?e.children.forEach((function(e){return m(e,t)})):e.isLeaf=!0}function d(e){var t={key:0,title:"top",children:[]};return m(t,e),t.children}var u={name:"CategoryTree",model:{prop:"categoryIds",event:"check"},props:{categoryIds:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{categories:{data:[],loading:!1}}},computed:{categoryTree:function(){return this.categories.data.length?d(this.categories.data):[]}},created:function(){this.handleListCategories()},methods:{handleListCategories:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.categories.loading=!0,t.next=4,c.Z.category.list({sort:[],more:!1});case 4:a=t.sent,r=a.data,e.categories.data=r,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),e.$log.error(t.t0);case 12:return t.prev=12,e.categories.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()},onCheck:function(e,t){this.$log.debug("Chekced keys",e),this.$log.debug("e",t),this.$emit("check",e.checked)}}},f=u,p=a(18156),h=(0,p.Z)(f,s,i,!1,null,null,null),g=h.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-select",{staticClass:"w-full",attrs:{"token-separators":[",","|"],allowClear:"",mode:"tags",placeholder:"选择或输入标签"},on:{change:e.handleChange},model:{value:e.selectedTagNames,callback:function(t){e.selectedTagNames=t},expression:"selectedTagNames"}},e._l(e.tags,(function(t){return a("a-select-option",{key:t.id,attrs:{value:t.name}},[e._v(e._s(t.name))])})),1)},b=[],k=(a(82395),a(90195),a(10299)),y=a.n(k),x={name:"TagSelect",model:{prop:"tagIds",event:"change"},props:{tagIds:{type:Array,required:!1,default:function(){return[]}}},data:function(){return{tags:[],selectedTagNames:[]}},created:function(){this.handleListTags()},watch:{tags:function(e){var t=this;e&&(this.selectedTagNames=this.tagIds.map((function(e){return t.tagIdMap[e].name})))},tagIds:{handler:function(e){var t=this;this.tags.length&&(this.selectedTagNames=e.map((function(e){return t.tagIdMap[e].name})))},deep:!0}},computed:{tagIdMap:function(){var e={};return this.tags.forEach((function(t){e[t.id]=t})),e},tagNameMap:function(){var e={};return this.tags.forEach((function(t){e[t.name]=t})),e}},methods:{handleListTags:function(e){var t=this;c.Z.tag.list({sort:"name,asc",more:!0}).then((function(a){t.tags=a.data,e&&e()}))},handleChange:function(){var e=this,t=this.selectedTagNames.filter((function(t){return!e.tagNameMap[t]}));if(this.$log.debug("Tag names to create",t),t.length){var a=t.map((function(e){return c.Z.tag.create({name:e})}));y().all(a).then(y().spread((function(){e.handleListTags((function(){e.$log.debug("Tag name map",e.tagNameMap);var t=e.selectedTagNames.map((function(t){return e.tagNameMap[t].id}));e.$emit("change",t)}))})))}else{var r=this.selectedTagNames.map((function(t){return e.tagNameMap[t].id}));this.$emit("change",r)}}}},w=x,T=(0,p.Z)(w,v,b,!1,null,null,null),S=T.exports,C=a(59563),_=a(3832),$=a(86637),E=a(73511),D=a.n(E),Y=a(98906),I={name:"PostSettingModal",mixins:[_.jB,_.KT],components:{CategoryTree:g,TagSelect:S,MetaEditor:C.Z},props:{visible:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},post:{type:Object,default:function(){return{}}},savedCallback:{type:Function,default:null}},data:function(){return{form:{model:{},saving:!1,saveErrored:!1,draftSaving:!1,draftSaveErrored:!1},templates:[],attachmentSelectVisible:!1}},computed:(0,l.Z)((0,l.Z)({},(0,Y.Se)(["options"])),{},{modalVisible:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}},modalTitle:function(){return this.form.model.id?"文章设置":"文章发布"},createTimeDefaultValue:function(){if(this.form.model.createTime){var e=new Date(this.form.model.createTime);return(0,$._)(e,"YYYY-MM-DD HH:mm:ss")}return(0,$._)(new Date,"YYYY-MM-DD HH:mm:ss")},topPriority:{get:function(){return 0!==this.form.model.topPriority},set:function(e){this.form.model.topPriority=e?1:0}},fullPath:function(){var e=this.options.post_permalink_type,t=this.options.blog_url,a=this.options.archives_prefix,r=this.options.path_suffix||"",o=this.form.model.slug||"{slug}",n=this.form.model.createTime||new Date,l=this.form.model.id||"{id}";switch(e){case"DEFAULT":return"".concat(t,"/").concat(a,"/").concat(o).concat(r);case"YEAR":return"".concat(t).concat((0,$._)(n,"/YYYY/")).concat(o).concat(r);case"DATE":return"".concat(t).concat((0,$._)(n,"/YYYY/MM/")).concat(o).concat(r);case"DAY":return"".concat(t).concat((0,$._)(n,"/YYYY/MM/DD/")).concat(o).concat(r);case"ID":return"".concat(t,"/?p=").concat(l);case"ID_SLUG":return"".concat(t,"/").concat(a,"/").concat(l).concat(r);default:return""}}}),watch:{modalVisible:function(e){e&&(this.form.model=Object.assign({},this.post),this.form.model.slug||this.form.model.id||this.handleGenerateSlug())},post:{deep:!0,handler:function(e){this.form.model=Object.assign({},e)}}},created:function(){this.handleListCustomTemplates()},methods:{handleCreateOrUpdate:function(){var e=arguments,t=this;return(0,n.Z)(regeneratorRuntime.mark((function a(){var r,o,n,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=e.length>0&&void 0!==e[0]?e[0]:"PUBLISHED",t.form.model.title){a.next=4;break}return t.$notification["error"]({message:"提示",description:"文章标题不能为空！"}),a.abrupt("return");case 4:if(t.form.model.status=r,t.form.model.keepRaw=!0,o=t.form.model,n=o.id,l=o.status,a.prev=7,t.form["PUBLISHED"===l?"saving":"draftSaving"]=!0,!n){a.next=14;break}return a.next=12,c.Z.post.update(n,t.form.model);case 12:a.next=16;break;case 14:return a.next=16,c.Z.post.create(t.form.model);case 16:a.next=22;break;case 18:a.prev=18,a.t0=a["catch"](7),t.form["PUBLISHED"===l?"saveErrored":"draftSaveErrored"]=!0,t.$log.error(a.t0);case 22:return a.prev=22,setTimeout((function(){t.form.saving=!1,t.form.draftSaving=!1}),400),a.finish(22);case 25:case"end":return a.stop()}}),a,null,[[7,18,22,25]])})))()},handleSavedCallback:function(){this.form.saveErrored||this.form.draftSaveErrored?(this.form.saveErrored=!1,this.form.draftSaveErrored=!1):this.savedCallback&&this.savedCallback()},handleListCustomTemplates:function(){var e=this;return(0,n.Z)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.theme.listCustomPostTemplates();case 3:a=t.sent,e.templates=a.data,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.$log.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},onCreateTimeSelect:function(e){this.form.model.createTime=e.valueOf()},handleGenerateSlug:function(){if(this.form.model.title&&D().isSupported()){var e,t="",a=D().parse(this.form.model.title.replace(/\s+/g,"").toLowerCase());a.forEach((function(a){if(2===a.type){var r=a.target?a.target.toLowerCase():"";t+=t&&!/\n|\s/.test(e.target)?"-"+r:r}else t+=(e&&2===e.type?"-":"")+a.target;e=a})),this.$set(this.form.model,"slug",t)}},handleSelectPostThumbnail:function(e){var t=e.raw;t.length&&(this.form.model.thumbnail=encodeURI(t[0].path)),this.attachmentSelectVisible=!1},onClosed:function(){this.$emit("onClose"),this.$emit("onUpdate",this.form.model)}}},M=I,L=(0,p.Z)(M,r,o,!1,null,null,null),P=L.exports}}]);
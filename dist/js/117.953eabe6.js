"use strict";(self["webpackChunkwms_web"]=self["webpackChunkwms_web"]||[]).push([[117,987,796],{5987:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var a=function(){var e=this,t=e._self._c;return t("div",[e.isVisible?t("el-button",{staticClass:"scroll-to-top",attrs:{circle:"",icon:"el-icon-top"},on:{click:e.scrollToTop}}):e._e(),t("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","padding-top":"20px"}},[t("div",{staticStyle:{display:"flex","justify-content":"center"}},[t("el-input",{staticStyle:{width:"400px"},attrs:{clearable:"",placeholder:"查询帖子"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchLoad.apply(null,arguments)}},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}}),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{circle:"",icon:"el-icon-search"},on:{click:e.searchLoad}}),t("el-button",{attrs:{circle:"",icon:"el-icon-refresh-left",type:"info"},on:{click:e.restParam}})],1),e.loading?t("div",{staticStyle:{"margin-top":"20px"}},[t("el-row",{attrs:{type:"flex",gutter:10,justify:"center"}},[t("el-col",{attrs:{span:10}},[t("el-skeleton",{attrs:{animated:""}},[t("template",{slot:"template"},[t("el-skeleton-item",{staticStyle:{width:"100%",height:"300px"},attrs:{variant:"image"}})],1)],2)],1),t("el-col",{attrs:{span:10}},[t("el-skeleton",{attrs:{rows:9,animated:""}})],1)],1),t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:20}},[t("el-skeleton",{attrs:{rows:10,animated:""}})],1)],1)],1):e._e(),t("div",{staticStyle:{display:"flex","flex-wrap":"wrap","justify-content":"center","align-items":"stretch","margin-top":"10px"}},[e._l(e.tableData,(function(s,a){return t("el-card",{key:a,staticClass:"box-card",staticStyle:{"min-height":"600px",margin:"20px"}},[t("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between"},attrs:{slot:"header"},slot:"header"},[t("div",[t("el-avatar",{staticStyle:{margin:"0px 10px"},attrs:{size:40,src:s.post.avatar}},[e._v(e._s(s.post.userno.charAt(0)))]),e.isMobile?e._e():t("span",{staticStyle:{position:"relative",top:"-12px"}},[e._v(e._s(s.post.userno))])],1),t("div",{staticStyle:{position:"relative",left:"-25px"}},[t("span",{staticStyle:{"font-weight":"10","font-size":"16px",color:"#777777"}},[e._v(e._s(s.post.id)+".")]),t("span",{staticClass:"text2",staticStyle:{"padding-left":"10px"}},[e._v(e._s(s.post.title))])]),t("div",{staticStyle:{"font-weight":"10","font-size":"16px",position:"relative",top:"-5px"}},[e._v(" "+e._s(new Date(s.post.time).getMonth()+1)+"/"+e._s(new Date(s.post.time).getDate())+" "),t("br"),e._v(" "+e._s(new Date(s.post.time).getHours())+":"+e._s(new Date(s.post.time).getMinutes())+" ")])]),t("div",{staticClass:"text item",staticStyle:{"white-space":"pre-line",padding:"0 15px",height:"500px"}},[t("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ql-editor",domProps:{innerHTML:e._s(s.post.name)}})]),t("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[t("span",{staticStyle:{"font-weight":"bold",color:"#0043a1","text-shadow":"0px 2px 3px rgb(73,230,255)",position:"relative",top:"5px"}},[e._v(" 点赞量"+e._s(s.post.likenum)+" ")]),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"el-icon-delete-solid",size:"small",type:"danger"},on:{click:function(t){return e.del(s.post.id)}}},[e._v("删除 ")])],1),e._l(s.post2,(function(a,i){return t("div",{key:i},[0===i?t("el-divider"):e._e(),t("div",{staticStyle:{width:"100%","min-height":"50px",display:"flex","justify-content":"space-between"}},[t("div",{staticStyle:{display:"flex","align-items":"center"}},[t("el-avatar",{staticStyle:{margin:"0px 10px"},attrs:{size:30,src:a.avatar,shape:"square"}},[e._v(e._s(s.post.userno.charAt(0)))]),t("div",[t("span",{staticStyle:{"font-size":"12px","font-weight":"lighter",color:"#6e6e6e"}},[e._v(" "+e._s(a.userName))]),t("br"),t("span",{staticStyle:{"font-size":"16px"}},[e._v(" "+e._s(a.content))])])],1),t("div",{staticStyle:{"font-weight":"10","font-size":"14px"}},[t("el-button",{staticStyle:{"margin-left":"10px","margin-top":"10px"},attrs:{icon:"el-icon-delete-solid",size:"mini",type:"warning"},on:{click:function(t){return e.delPost2(a.id)}}},[e._v("删除 ")])],1)])],1)}))],2)})),t("div",{staticStyle:{width:"100%",margin:"20px 0","text-align":"center"}},[t("el-button",{staticStyle:{width:"50%"},attrs:{loading:e.loading},on:{click:e.autoLoad}},[e._v(e._s(e.loading?"请稍后...":"更多"))])],1)],2)])],1)},i=[],l={name:"AdminText",data(){return{isMobile:!1,isVisible:!1,loading:!1,pageSize:12,pageNum:1,user:"",text:"",tableData:[]}},methods:{loadPost(){this.loading=!0,this.$axios.post(this.$httpUrl+"/post/listPage",{pageSize:this.pageSize,pageNum:this.pageNum,param:{name:this.text,full:"yes"}}).then((e=>e.data)).then((e=>{200===e.code?(0===e.data.length&&this.$message({showClose:!0,message:"没有更多啦",type:"info"}),this.tableData=[...this.tableData,...e.data]):alert("获取失败"),this.loading=!1}))},searchLoad(){this.tableData=[],this.pageNum=1,this.loadPost()},autoLoad(){this.pageNum+=1,this.loadPost()},restParam(){this.text="",this.tableData=[],this.pageNum=1,this.loadPost()},del(e){this.$confirm("确认删除这条帖子吗？").then((()=>{this.$axios.get(this.$httpUrl+"/post/delete?id="+e).then((e=>e.data)).then((e=>{200===e.code?(this.$message({showClose:!0,message:"删除成功",type:"success"}),this.restParam()):this.$message({showClose:!0,message:"服务器开小差啦~请稍后重试",type:"error"})}))})).catch((()=>{}))},resetForm(e){this.$refs[e].resetFields()},delPost2(e){this.$confirm("确认删除这条评论吗？").then((()=>{this.$axios.get(this.$httpUrl+"/post2/delete?id="+e).then((e=>e.data)).then((e=>{200===e.code?(this.$message({showClose:!0,message:"删除成功",type:"success"}),this.loadPost()):this.$message({showClose:!0,message:"服务器开小差啦~请稍后重试",type:"error"})}))})).catch((()=>{}))},handleScroll(){this.isVisible=window.scrollY>100},scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})},handleClose(e){this.$confirm("确认关闭？您的信息不会保存").then((()=>{e()})).catch((()=>{}))},checkIfMobile(){this.isMobile=window.innerWidth<768}},beforeMount(){this.user=JSON.parse(sessionStorage.getItem("CurUser")),this.loadPost()},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.checkIfMobile)},mounted(){this.checkIfMobile(),window.addEventListener("resize",this.checkIfMobile)},filters:{truncate:function(e,t,s){return s=s||"...",t=t||30,e.length<=t?e:e.substring(0,t)+s}}},o=l,r=s(1001),n=(0,r.Z)(o,a,i,!1,null,"7061828a",null),c=n.exports},3117:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var a=function(){var e=this,t=e._self._c;return t("el-tabs",{attrs:{type:"border-card"}},[t("el-tab-pane",[t("span",{attrs:{slot:"label"},slot:"label"},[t("i",{staticClass:"el-icon-date"}),e._v(" 用户管理")]),t("UserContour")],1),t("el-tab-pane",[t("span",{attrs:{slot:"label"},slot:"label"},[t("i",{staticClass:"el-icon-s-check"}),e._v(" 文章审核")]),t("AdminText")],1)],1)},i=[],l=s(5987),o=s(796),r={name:"User",components:{UserContour:o["default"],AdminText:l["default"]}},n=r,c=s(1001),d=(0,c.Z)(n,a,i,!1,null,"454f2430",null),p=d.exports},796:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{margin:"10px 5px",display:"flex","justify-content":"space-between"}},[t("div",[t("el-input",{staticStyle:{width:"500px"},attrs:{clearable:"",placeholder:"请输入名称","suffix-icon":"el-icon-search"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.loadPost.apply(null,arguments)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t("el-select",{staticStyle:{"margin-left":"5px",width:"100px"},attrs:{filterable:"",placeholder:"性别"},model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},e._l(e.sexs,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.loadPost}}),t("el-button",{attrs:{type:"info",icon:"el-icon-refresh-left"},on:{click:e.restParam}})],1),t("div",[t("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-upload"},on:{click:e.add}},[e._v("新增")])],1)]),t("div",{staticStyle:{position:"relative"}},[t("el-table",{staticStyle:{width:"100%",margin:"10px auto"},attrs:{data:e.tableData,border:"",stripe:""}},[t("el-table-column",{attrs:{label:"ID",prop:"id",width:"80"}}),t("el-table-column",{attrs:{label:"头像",prop:"avatar",width:"60"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-avatar",{attrs:{size:35,src:s.row.avatar}},[e._v(" "+e._s(s.row.name.charAt(0)))])]}}])}),t("el-table-column",{attrs:{label:"账号",prop:"no",width:"170"}}),t("el-table-column",{attrs:{label:"名称",prop:"name",width:"170"}}),t("el-table-column",{attrs:{label:"电话",prop:"phone"}}),t("el-table-column",{attrs:{label:"年龄",prop:"age",width:"80"}}),t("el-table-column",{attrs:{label:"性别",prop:"sex",width:"80"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-tag",{attrs:{type:1===s.row.sex?"primary":"success","disable-transitions":""}},[e._v(e._s(1===s.row.sex?"男":"女")+" ")])]}}])}),t("el-table-column",{attrs:{label:"角色",prop:"roleId",width:"120"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-tag",{attrs:{type:0===s.row.roleId?"danger":1===s.row.roleId?"warning":"success","disable-transitions":""}},[e._v(" "+e._s(0===s.row.roleId?"超级管理员":1===s.row.roleId?"管理员":"用户")+" ")])]}}])}),t("el-table-column",{attrs:{label:"等级",prop:"level",width:"70"}}),t("el-table-column",{attrs:{label:"状态",prop:"isvalid",width:"80"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-tag",{attrs:{type:"Y"===s.row.isvalid?"success":"primary","disable-transitions":""}},[e._v(e._s("Y"===s.row.isvalid?"正常":"停用")+" ")])]}}])}),t("el-table-column",{attrs:{label:"操作",prop:"operate",fixed:"right",width:"150"},scopedSlots:e._u([{key:"default",fn:function(s){return[t("el-button",{attrs:{size:"small",type:"success",disabled:0===s.row.roleId},on:{click:function(t){return e.mod(s.row)}}},[e._v("编辑")]),t("el-popconfirm",{staticStyle:{"margin-left":"5px"},attrs:{"confirm-button-text":"好的","cancel-button-text":"点错了",icon:"el-icon-info","icon-color":"red",title:"确定删除吗？"},on:{confirm:function(t){return e.del(s.row.id)}}},[t("el-button",{attrs:{slot:"reference",type:"danger",size:"small",disabled:0===s.row.roleId},slot:"reference"},[e._v("删除")])],1)]}}])})],1)],1),t("div",{staticStyle:{display:"flex","justify-content":"center"}},[t("el-pagination",{attrs:{"current-page":e.pageNum,"page-size":e.pageSize,"page-sizes":[10,15,20],total:e.total,background:"",layout:"total, prev, sizes ,pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),t("el-dialog",{attrs:{"before-close":e.handleClose,visible:e.centerDialogVisible,center:"",title:"用户",width:"30%"},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px","status-icon":""}},[t("el-form-item",{attrs:{label:"账号",prop:"no"}},[t("el-col",{attrs:{span:20}},[t("el-input",{attrs:{disabled:!!e.form.id},model:{value:e.form.no,callback:function(t){e.$set(e.form,"no",t)},expression:"form.no"}})],1)],1),t("el-form-item",{attrs:{label:"名称",prop:"name"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-col",{attrs:{span:20}},[t("el-input",{attrs:{"show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),t("el-form-item",{attrs:{label:"性别",prop:"sex"}},[t("el-radio-group",{attrs:{size:"small"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},[t("el-radio-button",{attrs:{label:"1"}},[e._v("男")]),t("el-radio-button",{attrs:{label:"0"}},[e._v("女")])],1)],1),t("el-form-item",{attrs:{label:"年龄",prop:"age"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",e._n(t))},expression:"form.age"}})],1)],1),t("el-form-item",{attrs:{label:"电话",prop:"phone"}},[t("el-col",{attrs:{span:20}},[t("el-input",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v(e._s(e.loading?"提交中 ...":"确 定"))])],1)],1)],1)},i=[],l=s(9002),o=s.n(l),r=s(1586),n=s.n(r),c={name:"UserContour",data(){let e=(e,t,s)=>{if(this.form.id)return s();this.$axios.post(this.$httpUrl+"/user/findByNo",{pageSize:"",pageNum:"",param:{no:this.form.no}}).then((e=>e.data)).then((e=>{200===e.code?s(new Error("账号已存在")):s()}))};return{loading:!1,pageSize:9,pageNum:1,total:1,tableData:[],name:"",sex:"",sexs:[{value:"1",label:"男"},{value:"0",label:"女"}],centerDialogVisible:!1,form:{id:"",no:"",name:"",password:"",age:"",sex:"",phone:"",isvalid:"Y"},rules:{no:[{required:!0,message:"请输入账号",trigger:"blur"},{min:4,max:36,message:"长度在 4 到 36 个字符",trigger:"blur"},{validator:e,trigger:"blur"}],name:[{required:!0,message:"请输入名称",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],sex:[{required:!0,message:"请输入性别",trigger:"blur"}],age:[{required:!0,message:"请输入年龄",trigger:"blur"},{type:"number",message:"年龄必须为数字"}]}}},methods:{loadGet(){this.$axios.get(this.$httpUrl+"/user/list").then((e=>e.data)).then((e=>{console.log(e),this.tableData=e}))},loadPost(){this.$axios.post(this.$httpUrl+"/user/listPageN",{pageSize:this.pageSize,pageNum:this.pageNum,param:{name:this.name,sex:this.sex}}).then((e=>e.data)).then((e=>{console.log(e),200===e.code?(this.tableData=e.data,this.total=e.total):alert("获取失败")}))},restParam(){this.name="",this.sex="",this.loadPost()},resetForm(e){this.$refs[e].resetFields()},mod(e){this.centerDialogVisible=!0,this.$nextTick((()=>{this.form.id=e.id,this.form.no=e.no,this.form.name=e.name,this.form.password="",this.form.age=e.age,this.form.sex=e.sex+"",this.form.phone=e.phone}))},del(e){this.$axios.get(this.$httpUrl+"/user/delete?id="+e).then((e=>e.data)).then((e=>{200==e.code?(this.$message({showClose:!0,message:"删除成功",type:"success"}),this.loadPost()):this.$message({showClose:!0,message:"服务器开小差啦~请稍后重试",type:"error"})}))},add(){this.form.id="",this.centerDialogVisible=!0,this.$nextTick((()=>{this.resetForm("form")}))},save(){this.$refs["form"].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.form.id?this.doMod():this.doSave(),this.resetForm("form")}))},doMod(){this.loading=!0,this.form.password=o()(this.form.password+"xtyopen").toString(n()),this.$axios.post(this.$httpUrl+"/user/update",this.form).then((e=>e.data)).then((e=>{console.log(e),200===e.code?(this.centerDialogVisible=!1,this.$message({showClose:!0,message:"修改成功",type:"success"}),this.loadPost(),this.loading=!1):this.$message({showClose:!0,message:"服务器开小差啦~请稍后重试",type:"error"})}))},doSave(){this.loading=!0,this.form.password=o()(this.form.password+"xtyopen").toString(n()),this.$axios.post(this.$httpUrl+"/user/save",this.form).then((e=>e.data)).then((e=>{console.log(e),200===e.code?(this.centerDialogVisible=!1,this.$message({showClose:!0,message:"添加成功",type:"success"}),this.loadPost(),this.loading=!1):this.$message({showClose:!0,message:"服务器开小差啦~请稍后重试",type:"error"})}))},handleClose(e){this.$confirm("确认关闭？您的信息不会保存").then((()=>{e()})).catch((()=>{}))},handleSizeChange(e){console.log(`每页 ${e} 条`),this.pageNum=1,this.pageSize=e,this.loadPost()},handleCurrentChange(e){console.log(`当前页: ${e}`),this.pageNum=e,this.loadPost()}},beforeMount(){this.loadPost()}},d=c,p=s(1001),h=(0,p.Z)(d,a,i,!1,null,"252c52d8",null),u=h.exports}}]);
//# sourceMappingURL=117.953eabe6.js.map
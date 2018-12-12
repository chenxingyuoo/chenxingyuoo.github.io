(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0309"],{"3PQM":function(t,a,e){},"4vag":function(t,a,e){"use strict";var s=e("3PQM");e.n(s).a},CMYn:function(t,a,e){"use strict";var s=e("rhTJ");e.n(s).a},D1zF:function(t,a,e){"use strict";var s=e("P2sY"),i=e.n(s);a.a={methods:{chartInit:function(){this.chart=echarts.init(this.$refs.chart),this.chart.setOption(this.option)},chartDispose:function(){this.chart.dispose()},setOption:function(){if(this.chartOption){var t=this.chartOption;t.xAxisData&&(this.option.xAxis.data=t.xAxisData),t.yAxisData&&(this.option.yAxis.data=t.yAxisData),this.option.yAxis.name=t.yAxisName||"",this.option=i()(this.option,this.chartOption)}},chartResize:function(){var t=this;setTimeout(function(){t.chart.resize()},10)}},beforeMount:function(){this.setOption()},mounted:function(){this.chartInit()},destroyed:function(){this.chartDispose()},watch:{chartOption:function(){this.setOption(),this.chart.setOption(this.options),this.chartResize()}}}},WiTk:function(t,a,e){"use strict";var s={props:{top:{type:[Number,String],default:50},width:{type:[Number],default:300},leftId:{type:String,default:""},isPosition:{type:Boolean,default:!0},padding:{type:[Number],default:20}},name:"RightPlane",components:{},data:function(){return{isShow:!1}},computed:{planeStyle:function(){var t={},a=this.top,e=this.width;return"number"==typeof a&&(a+="px"),t.top=a,t.width=e+"px",t.right="-"+e+"px",this.isShow?t.transform="translate3d(-"+t.width+",0,0)":t.transform="translate3d(0,0,0)",t}},beforeMount:function(){},mounted:function(){},methods:{togglePlane:function(){this.isShow?this.hide():this.show(),this.setLeftElStyle()},show:function(){this.isShow=!0,this.$emit("onShow")},hide:function(){this.isShow=!1,this.$emit("onHide")},setLeftElStyle:function(){if(!1===this.isPosition&&this.leftId){var t=document.getElementById(this.leftId);t&&(t.style.transition="all .3s ease",t.style.marginRight=this.isShow?this.width+70+"px":0)}}}},i=(e("CMYn"),e("KHd+")),n=Object(i.a)(s,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"right-plane",class:{open:this.isShow},style:this.planeStyle},[a("div",{staticClass:"toggle-btn",on:{click:this.togglePlane}},[a("i",{staticClass:"el-icon-arrow-left rotate"})]),this._v(" "),a("div",{staticClass:"right-plane-content",style:{padding:this.padding+"px"}},[this._t("default")],2)])},[],!1,null,"3fb65e84",null);n.options.__file="index.vue";a.a=n.exports},gRuL:function(t,a,e){"use strict";var s=e("lPiH");e.n(s).a},lAbF:function(t,a,e){"use strict";e.r(a);var s=e("QbLZ"),i=e.n(s),n=e("L2JU"),r=e("uRE+"),l=e("WiTk"),o=e("D1zF"),c={mixins:[o.a],props:{chartHeight:{type:Number,default:300},chartOption:{type:Object,default:function(){return null}}},data:function(){return{isShow:!0,option:{tooltip:{show:!0,trigger:"item",formatter:"{c}"},toolbox:{show:!0,feature:{mark:{show:!0}}},grid:{left:"3%",right:"1%",bottom:"3%",containLabel:!0},xAxis:{type:"category",axisLine:{},axisLabel:{show:!0},axisTick:{show:!1},data:[]},yAxis:{type:"value",name:"",splitLine:{show:!1},nameTextStyle:{color:"#ddd"},axisLine:{},axisLabel:{show:!0},axisTick:{show:!1}},series:[]}}},components:{},computed:{}},h=(e("lErV"),e("KHd+")),u=Object(h.a)(c,function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:this.isShow,expression:"isShow"}],ref:"chart",style:{height:this.chartHeight+"px"}})])},[],!1,null,null,null);u.options.__file="BarChart.vue";var p=u.exports,v={mixins:[o.a],name:"LineChart",components:{},props:{chartHeight:{type:Number,default:300},chartOption:{type:Object,default:function(){return null}}},data:function(){return{option:{color:r.a.colorOpacityList,tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{left:"3%",right:"1%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:[],axisTick:{show:!1},axisLabel:{show:!0}},yAxis:{name:"",type:"value",axisTick:{show:!1},splitLine:{show:!1}},series:[]}}},computed:{}},d=(e("4vag"),Object(h.a)(v,function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"chart",style:{height:this.chartHeight+"px"}})},[],!1,null,null,null));d.options.__file="LineChart.vue";var m=d.exports,b={name:"Dashboard",data:function(){return{tableData:[{date:"2014年5月",name:"天河区名苑小区高层住宅建设工程",className:"居住建筑",total:"139,375,298",single:"1411.77元/㎡",type:"投标价"},{date:"2016年7月",name:"天河万丽办公楼工程",className:"办公建筑",total:"1,261,797.07",single:"1983.21元/㎡",type:"招标价"},{date:"2016年3月",name:"广州番禺文化馆建设工程",className:"市政建筑",total:"32,095,265.8",single:"2656.96元/㎡",type:"估算价"},{date:"2015年10月",name:"广州市白云区三元里中学场室改造工程",className:"教育建筑",total:"23,919,084.4",single:"2102.45元/㎡",type:"预算价"},{date:"2017年3月",name:"创境汇盈科智谷前广场景观工程",className:"公共绿化",total:"1,3581,827.12",single:"1242.14元/㎡",type:"合同价"}],tableData1:[{name:"土石方",unit1:"182.7元/㎡",unit2:"2.54m³/㎡"},{name:"桩基础",unit1:"12.72元/㎡",unit2:"2.54m³/㎡"},{name:"混凝土与钢筋混凝土",unit1:"970.06元/㎡",unit2:"1.56m³/㎡"},{name:"砌筑",unit1:"57.88元/㎡",unit2:"0.4m³/㎡"},{name:"消防工程",unit1:"119.42元/㎡",unit2:"--"},{name:"脚手架",unit1:"31.68元/㎡",unit2:"2.95㎡/㎡"},{name:"天棚装饰",unit1:"38.67元/㎡",unit2:"0.46㎡/㎡"},{name:"楼地面",unit1:"35.01元/㎡",unit2:"0.29㎡/㎡"}],activeName:"first",barOption:{xAxisData:[1,2,3,4,5,6],series:[{name:"",type:"bar",barWidth:30,itemStyle:{normal:{color:function(t){return r.a.colorList[t.dataIndex%r.a.colorList.length]}}},data:[100,200,300,400,500,600]},{name:"",type:"line",itemStyle:{color:"#35e6c7"},lineStyle:{color:"#35e6c7"},data:[100,200,300,400,500,600]}]},lineOption:{xAxisData:["1月",2,3,4,5,6],legend:{data:["2017年","2018年"]},series:[{name:"2017年",type:"line",stack:"总量",areaStyle:{},data:[120,132,101,134,90,230]},{name:"2018年",type:"line",stack:"总量",areaStyle:{},data:[220,182,191,234,290,330]}]},lineOption2:{xAxisData:[1,2,3,4,5,6],yAxisName:"(发布数)",series:[{name:"2017",type:"line",data:[120,132,101,134,90,230]}]}}},computed:i()({},Object(n.b)(["name","roles"]),Object(n.c)({historySidebarProduct:function(t){return t.app.sidebar.historySidebarProduct}})),components:{RightPlane:l.a,BarChart:p,LineChart:m},mounted:function(){window.addEventListener("resize",this.chartResize,!1)},beforeDestroy:function(){window.removeEventListener("resize",this.chartResize)},methods:{chartResize:function(){this.$refs.barChart.chartResize(),this.$refs.lineChart1.chartResize(),this.$refs.lineChart2.chartResize()}}},_=(e("gRuL"),Object(h.a)(b,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard"},[e("div",{attrs:{id:"dashboard-container"}},[e("el-row",{staticClass:"mb-15",attrs:{gutter:15}},[e("el-col",{attrs:{span:18}},[e("el-row",{attrs:{gutter:15}},[e("el-col",{attrs:{span:16}},[e("el-card",[e("div",{staticClass:"clearfix"},[e("div",{staticClass:"fl",staticStyle:{width:"65%"}},[e("h3",{staticClass:"mb-10"},[t._v("我的任务")]),t._v(" "),e("div",{staticClass:"clearfix"},[e("div",{staticClass:"item-task"},[e("div",{staticClass:"item-content block-hover"},[e("div",{staticClass:"item-number"},[t._v("52")]),t._v(" "),e("span",{staticClass:"item-text"},[t._v("我的待办")])])]),t._v(" "),e("div",{staticClass:"item-task"},[e("div",{staticClass:"item-content block-hover"},[e("div",{staticClass:"item-number"},[t._v("186")]),t._v(" "),e("span",{staticClass:"item-text"},[t._v("已处理")])])]),t._v(" "),e("div",{staticClass:"item-task"},[e("div",{staticClass:"item-content block-hover"},[e("div",{staticClass:"item-number"},[t._v("23")]),t._v(" "),e("span",{staticClass:"item-text"},[t._v("我发起的")])])])])]),t._v(" "),e("div",{staticClass:"fr",staticStyle:{width:"35%"}},[e("h3",{staticClass:"mb-10"},[t._v("待办事项")]),t._v(" "),e("div",{staticClass:"undo-item block-hover"},[e("span",{staticClass:"item-text"},[t._v("审批")]),t._v(" "),e("span",{staticClass:"item-number"},[t._v("5")])]),t._v(" "),e("div",{staticClass:"undo-item block-hover"},[e("span",{staticClass:"item-text"},[t._v("采集")]),t._v(" "),e("span",{staticClass:"item-number"},[t._v("1459")])]),t._v(" "),e("div",{staticClass:"undo-item block-hover"},[e("span",{staticClass:"item-text"},[t._v("校验")]),t._v(" "),e("span",{staticClass:"item-number"},[t._v("268")])])])])])],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-card",[e("h3",{staticClass:"mb-10"},[t._v("任务准时完成率")]),t._v(" "),e("div",{staticClass:"text-center"},[e("el-progress",{staticClass:"mb-10",attrs:{percentage:96,width:114,type:"circle"}}),t._v(" "),e("div",[e("span",{staticClass:"mr-10"},[t._v("准时完成：178")]),t._v(" "),e("span",[t._v("超时完成：8")])])],1)])],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("el-card",[e("el-tabs",{model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"公告",name:"first"}},[e("div",{staticClass:"tab-content"},[e("p",[t._v("【发布】11月土建材料信息价已发布")]),t._v(" "),e("p",[t._v("【发布】11月安装材料信息价已发布")]),t._v(" "),e("p",[t._v("【发布】11月人工劳务信息价已发布")]),t._v(" "),e("p",[t._v("【审核】请尽快审核站外上报员提交的材价信息")])])]),t._v(" "),e("el-tab-pane",{attrs:{label:"采集",name:"second"}},[e("div",{staticClass:"tab-content"},[t._v("\n                【采集】11月已采集土建材料价格4254条"),e("br"),t._v("\n                【采集】请采集员上报采集材价"),e("br"),t._v("\n                【采集】请尽快上报土建材料价格"),e("br"),t._v("\n                【采集】10月已采集土建材料价格5487条\n              ")])]),t._v(" "),e("el-tab-pane",{attrs:{label:"审核",name:"third"}},[e("div",{staticClass:"tab-content"},[t._v("\n                【审核】请尽快审核站外上报员提交的材价信息"),e("br"),t._v("\n                【审核】待审核材价条数为6548条"),e("br"),t._v("\n                【审核】已完成11月安装材料价格审核任务"),e("br"),t._v("\n                【审核】已完成11月人工劳务价格审核任务\n              ")])]),t._v(" "),e("el-tab-pane",{attrs:{label:"发布",name:"fourth"}},[e("div",{staticClass:"tab-content"},[t._v("\n                【发布】11月土建材料信息价已发布"),e("br"),t._v("\n                【发布】11月安装材料信息价已发布"),e("br"),t._v("\n                【发布】11月人工劳务信息价已发布"),e("br"),t._v("\n                【发布】11月机械租赁信息价已发布\n              ")])])],1)],1)],1)],1),t._v(" "),e("el-row",{staticClass:"mb-15",attrs:{gutter:15}},[e("el-col",{attrs:{span:8}},[e("el-card",{staticClass:"relative"},[e("h3",[t._v("项目总数")]),t._v(" "),e("div",{staticClass:"pos-chart-info"},[e("strong",{staticClass:"mr-10 f-16"},[t._v("908")]),t._v("本月新增："),e("strong",{staticClass:"primary-color"},[t._v("80")])]),t._v(" "),e("BarChart",{ref:"barChart",attrs:{"chart-option":t.barOption}})],1)],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-card",[e("h3",[t._v("指标库")]),t._v(" "),e("LineChart",{ref:"lineChart1",attrs:{"chart-option":t.lineOption}})],1)],1),t._v(" "),e("el-col",{attrs:{span:8}},[e("el-card",{staticClass:"relative"},[e("h3",[t._v("材价库")]),t._v(" "),e("div",{staticClass:"pos-chart-info"},[t._v("\n            新增："),e("strong",{staticClass:"primary-color"},[t._v("12856")])]),t._v(" "),e("LineChart",{ref:"lineChart2",attrs:{"chart-option":t.lineOption2}})],1)],1)],1),t._v(" "),e("el-row",{attrs:{gutter:15}},[e("el-col",{attrs:{span:18}},[0!==t.historySidebarProduct.length?e("el-card",{staticClass:"mb-15"},[e("h3",[t._v("最近使用")]),t._v(" "),e("div",{staticClass:"clearfix"},t._l(t.historySidebarProduct.slice(0,8),function(a,s){return e("div",{key:s,staticClass:"history-item"},[e("router-link",{attrs:{to:{path:a.link}}},[e("div",{staticClass:"block-hover"},[t._v(t._s(a.title))])])],1)}))]):t._e(),t._v(" "),e("el-card",[e("h3",[t._v("我关注的项目")]),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"name",label:"项目名称","min-width":"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"primary-color"},[e("router-link",{attrs:{to:"/projectDetails"}},[t._v(t._s(a.row.name))])],1)]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"className",label:"建筑分类"}}),t._v(" "),e("el-table-column",{attrs:{prop:"total",label:"总造价(元)"}}),t._v(" "),e("el-table-column",{attrs:{prop:"single",label:"单方造价"}}),t._v(" "),e("el-table-column",{attrs:{prop:"date",label:"编制时间"}}),t._v(" "),e("el-table-column",{attrs:{prop:"type",label:"造价阶段"}})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("el-card",[e("h3",[t._v("我收藏的指标")]),t._v(" "),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData1}},[e("el-table-column",{attrs:{prop:"name",label:"指标名称"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticClass:"primary-color"},[e("router-link",{attrs:{to:"/standardDetails"}},[t._v(t._s(a.row.name))])],1)]}}])}),t._v(" "),e("el-table-column",{attrs:{prop:"unit1",label:"经济指标"}}),t._v(" "),e("el-table-column",{attrs:{prop:"unit2",label:"工程量指标"}})],1)],1)],1)],1)],1)])},[],!1,null,"11ff261c",null));_.options.__file="index.vue";a.default=_.exports},lErV:function(t,a,e){"use strict";var s=e("mb5m");e.n(s).a},lPiH:function(t,a,e){},mb5m:function(t,a){},rhTJ:function(t,a,e){},"uRE+":function(t,a,e){"use strict";a.a={colorList:["rgb(53,200,230)","rgb(157,53,230)","rgb(230,53,236)","rgb(251,135,60)"],colorOpacityList:["rgba(53,200,230,.5)","rgba(157,53,230,.5)","rgba(230,53,236,.5)","rgba(251,135,60,.5)"]}}}]);
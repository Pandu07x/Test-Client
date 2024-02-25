"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[568],{9299:(D,u,s)=>{s.d(u,{Z:()=>O});var r=s(6814),h=s(7818),b=s(8351),g=s(8856),p=s(1043),d=s(95),a=s(9468),T=s(4143),V=s(3946);function A(n,c){if(1&n&&(a.TgZ(0,"option",31),a._uU(1),a.qZA()),2&n){const t=c.$implicit;a.Q6J("value",t.ProjectId),a.xp6(1),a.hij("",t.ProjectName," ")}}function P(n,c){if(1&n&&(a.TgZ(0,"option",31),a._uU(1),a.qZA()),2&n){const t=c.$implicit;a.Q6J("value",t.TestRunId),a.xp6(1),a.hij("",t.TestRunName," ")}}function M(n,c){if(1&n&&(a.TgZ(0,"option",31),a._uU(1),a.qZA()),2&n){const t=c.$implicit;a.Q6J("value",t.VariableId),a.xp6(1),a.hij("",t.VariableName," ")}}function I(n,c){if(1&n){const t=a.EpF();a.TgZ(0,"div",32),a._uU(1),a.TgZ(2,"span",33),a.NdJ("click",function(){const l=a.CHM(t).$implicit,o=a.oxw();return a.KtG(o.removeProjectVariableTag(l))}),a._UZ(3,"i",30),a.qZA()()}if(2&n){const t=c.$implicit,i=a.oxw();a.xp6(1),a.hij(" ",i.getTagValue(t)," ")}}function C(n,c){if(1&n&&(a.TgZ(0,"option",31),a._uU(1),a.qZA()),2&n){const t=c.$implicit;a.Q6J("value",t.IotPanelId),a.xp6(1),a.hij("",t.IotPanelName," ")}}function Z(n,c){if(1&n&&(a.TgZ(0,"option",31),a._uU(1),a.qZA()),2&n){const t=c.$implicit;a.Q6J("value",t.VariableId),a.xp6(1),a.hij("",t.VariableName," ")}}function y(n,c){if(1&n){const t=a.EpF();a.TgZ(0,"div",32),a._uU(1),a.TgZ(2,"span",33),a.NdJ("click",function(){const l=a.CHM(t).$implicit,o=a.oxw();return a.KtG(o.removeAnalogVariableTag(l))}),a._UZ(3,"i",30),a.qZA()()}if(2&n){const t=c.$implicit,i=a.oxw();a.xp6(1),a.hij(" ",i.getAnalogTagValue(t)," ")}}function j(n,c){if(1&n&&(a.TgZ(0,"option",31),a._uU(1),a.qZA()),2&n){const t=c.$implicit;a.Q6J("value",t.VariableId),a.xp6(1),a.hij("",t.VariableName," ")}}function R(n,c){if(1&n){const t=a.EpF();a.TgZ(0,"div",32),a._uU(1),a.TgZ(2,"span",33),a.NdJ("click",function(){const l=a.CHM(t).$implicit,o=a.oxw();return a.KtG(o.removeAmbientVariableTag(l))}),a._UZ(3,"i",30),a.qZA()()}if(2&n){const t=c.$implicit,i=a.oxw();a.xp6(1),a.hij(" ",i.getAmbientTagValue(t)," ")}}let O=(()=>{class n{constructor(t,i){this.dataAnalyticsService=t,this.activeModal=i,this.label="",this.formControl=new d.NI,this.projectList=[],this.projectId="",this.projectsId=[],this.testRunList=[],this.testRunId="",this.variableList=[],this.variableId="",this.IotPanelList=[],this.IotPanelId="",this.analogVariableList=[],this.analogVariableId="",this.ambientVariableList=[],this.ambientVariableId="",this.tmpAmbientVariableId=[],this.projectVariableTags=[],this.analogVariableTags=[],this.ambientVariableTags=[],this.aodd=[{id:"StrokeCount",name:"Stroke Count"},{id:"FcvSP",name:"Control Valve SP"},{id:"FlowGrav",name:"Gravimetric Flow"},{id:"WeightScaleRead",name:"Grav Weigh Scale"},{id:"DischargeFlow",name:"Discharge Flow"},{id:"StrokeCountRate",name:"Stroke Count Rate"},{id:"DischargePressureSP",name:"Discharge Press.SP"},{id:"InAirPressSP",name:"In Let Air Press.SP"},{id:"FcvPos",name:"Control Valve FB"},{id:"DischargePressurePV",name:"Discharge Press.PV"},{id:"AoddInAirPressPV",name:"In Let Air Press.PV"},{id:"SuctionPressurePV",name:"Suction Pressure PV"}],this.eodd=[{id:"MotorKWH",name:"Motor Energy"},{id:"StrokeCount",name:"Stroke Count"},{id:"FcvSP",name:"Control Valve SP"},{id:"Act_MotorRPM",name:"Motor RPM"},{id:"MotorAMP",name:"Motor Current"},{id:"MotorKW",name:"Motor Power"},{id:"MotorKW",name:"Gravimetric Flow"},{id:"FlowGrav",name:"Grav Weigh Scale"},{id:"WeightScaleRead",name:"Discharge Flow"},{id:"Set_MotorRPM",name:"Motor Hz SP"},{id:"DischargePressureSP",name:"Discharge Press.SP"},{id:"FcvPos",name:"Control Valve FB"},{id:"DischargePressurePV",name:"Discharge Press.PV"},{id:"SuctionPressurePV",name:"Suction Pressure PV"},{id:"PumpRPM",name:"Pump RPM"}],this.singleTagSelectionNameList=["Linear Regression","Histogram Analysis"]}ngOnInit(){console.log(this.inputData),this.inputData.projectType&&(this.projectType=this.inputData.projectType),this.projectId=this.inputData.filterData.productId,this.testRunId=this.inputData.filterData.testRunId;const t=this.inputData.startDate,i=this.inputData.endDate,e=this.inputData.filterData;this.projectVariableTags=e.variableIds,this.analogVariableTags=e.analogVariableIds,this.ambientVariableTags=e.ambientVariableIds,this.dataAnalyticsService.getProjectData({fromDate:t,toDate:i}).subscribe({next:_=>{this.projectList=_.data,this.inputData.filterData.productId&&this.loadTestRun(),console.log(this.projectList)},error:_=>{console.log(_)}}),this.IotPanelList=[{IotPanelId:"Iot Panel 1",IotPanelName:"Iot Panel 1"}],this.dataAnalyticsService.getAnalogVariableData({start:t,end:i}).subscribe({next:_=>{_.forEach(f=>{this.analogVariableList.push({VariableId:f.Data,VariableName:f.Data})}),console.log(this.analogVariableId)},error:_=>{console.log(_)}}),this.ambientVariableList=[{VariableId:"LabAirQualityPM2_5",VariableName:"PM2.5"},{VariableId:"LabAirQualityPM10",VariableName:"PM10"},{VariableId:"LabAirQualityVOC",VariableName:"VOC"},{VariableId:"LabHumidity",VariableName:"Humidity"},{VariableId:"LabTemp",VariableName:"Temperature"}]}getTagValue(t){let i;return i="EODD"==this.projectType?this.eodd.find(e=>e.id==t):this.aodd.find(e=>e.id==t),i?.name}getAnalogTagValue(t){return this.analogVariableList.find(i=>i.VariableId==t).VariableName}getAmbientTagValue(t){return this.ambientVariableList.find(i=>i.VariableId==t).VariableName}isDisableOption(){return!(!this.inputData.name||!this.singleTagSelectionNameList.includes(this.inputData.name)||!(this.projectVariableTags.length||this.ambientVariableTags.length||this.analogVariableTags.length))}removeProjectVariableTag(t){this.projectVariableTags=this.projectVariableTags.filter(i=>i!==t)}changeVariable(t="dummy"){this.projectVariableTags.push(this.variableId)}removeAnalogVariableTag(t){this.analogVariableTags=this.analogVariableTags.filter(i=>i!==t)}changeAnalogVariable(t="dummy"){this.analogVariableTags.push(this.analogVariableId)}removeAmbientVariableTag(t){this.ambientVariableTags=this.ambientVariableTags.filter(i=>i!==t)}changeAmbientVariable(){this.ambientVariableTags.push(this.ambientVariableId)}changeMatAmbientVariable(t){this.ambientVariableTags=t}handleVariableLableClick(t){t.stopPropagation(),console.log("clicked")}loadVariableData(){this.variableList=[];let t=[];t="EODD"==this.projectType?this.eodd:this.aodd,t.forEach(i=>{this.variableList.push({VariableId:i.id,VariableName:i.name})})}changeProject(){this.testRunList=[];const t=this.projectList.find(e=>e.ProjectId===this.projectId);this.projectType=t.ProjectType,this.loadTestRun()}loadTestRun(){this.testRunList=[],this.dataAnalyticsService.getAllProjectData({fromDate:this.inputData.startDate,toDate:this.inputData.endDate}).subscribe(l=>{this.testRunList=[],console.log(this.projectId);const o=new Set;l.map(m=>{m.ProjectId==this.projectId&&o.add(m.TestNo)}),console.log(o),o.forEach(m=>{this.testRunList.unshift({TestRunId:m,TestRunName:"Test Run "+m})})})}changeTestRun(){this.loadVariableData()}selectDataAndClose(){this.activeModal.close({isSearch:!0,filterData:{productId:this.projectId,testRunId:this.testRunId,variableIds:this.projectVariableTags,IotPanelId:this.IotPanelId,analogVariableIds:this.analogVariableTags,ambientVariableIds:this.ambientVariableTags},aodd:this.aodd,eodd:this.eodd,projectType:this.projectType,analogVariableList:this.analogVariableList,ambientVariableList:this.ambientVariableList})}closeModal(){this.activeModal.dismiss({isSearch:!1})}static#a=this.\u0275fac=function(i){return new(i||n)(a.Y36(T._),a.Y36(V.Kz))};static#t=this.\u0275cmp=a.Xpm({type:n,selectors:[["app-data-analytics-modal"]],inputs:{inputData:"inputData",label:"label",formControl:"formControl"},standalone:!0,features:[a.jDz],decls:95,vars:21,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row","modal-row-border"],[1,"mb-2"],[1,"section-title"],[1,"col-xl-4","col-md-6"],[1,"form-group"],[1,"form-control",3,"ngModel","disabled","ngModelChange","change"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-xl-1","col-md-6"],[1,"icon-container"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 25 25"],["d","m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z","data-name","Right",2,"fill","#232326"],[1,"col-xl-3","col-md-1"],[1,"col-xl-1","col-md-1"],[1,"col-xl-3","col-md-6"],[1,"col-xl-12","col-md-12"],[1,"tag-input"],["class","tag",4,"ngFor","ngForOf"],[1,"col-xl-6","col-md-6"],[1,"form-control",3,"ngModel","disabled","ngModelChange"],[1,"col-xl-5","col-md-6"],[1,"d-flex","justify-content-end"],["type","button","ngbAutofocus","",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-check"],["type","button",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-times"],[3,"value"],[1,"tag"],[1,"remove",3,"click"]],template:function(i,e){1&i&&(a.TgZ(0,"div",0)(1,"h6",1),a._uU(2,"Select Variable"),a.qZA(),a.TgZ(3,"button",2),a.NdJ("click",function(){return e.closeModal()}),a.TgZ(4,"span",3),a._uU(5,"\xd7"),a.qZA()()(),a.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),a._uU(10,"Project Variable"),a.qZA()(),a.TgZ(11,"div",8)(12,"div",9)(13,"label"),a._uU(14,"Select Project"),a.qZA(),a.TgZ(15,"select",10),a.NdJ("ngModelChange",function(o){return e.projectId=o})("change",function(){return e.changeProject()}),a.TgZ(16,"option",11),a._uU(17,"Select Project"),a.qZA(),a.YNc(18,A,2,2,"option",12),a.qZA()()(),a.TgZ(19,"div",13)(20,"div",14),a.O4$(),a.TgZ(21,"svg",15),a._UZ(22,"path",16),a.qZA()()(),a.kcU(),a.TgZ(23,"div",17)(24,"div",9)(25,"label"),a._uU(26,"Select Test Run"),a.qZA(),a.TgZ(27,"select",10),a.NdJ("ngModelChange",function(o){return e.testRunId=o})("change",function(){return e.changeTestRun()}),a.TgZ(28,"option",11),a._uU(29,"Select Test Run"),a.qZA(),a.YNc(30,P,2,2,"option",12),a.qZA()()(),a.TgZ(31,"div",18)(32,"div",14),a.O4$(),a.TgZ(33,"svg",15),a._UZ(34,"path",16),a.qZA()()(),a.kcU(),a.TgZ(35,"div",19)(36,"div",9)(37,"label"),a._uU(38,"Select Variable"),a.qZA(),a.TgZ(39,"select",10),a.NdJ("ngModelChange",function(o){return e.variableId=o})("change",function(){return e.changeVariable()}),a.TgZ(40,"option",11),a._uU(41,"Select Variable"),a.qZA(),a.YNc(42,M,2,2,"option",12),a.qZA()()(),a.TgZ(43,"div",20)(44,"div",21),a.YNc(45,I,4,1,"div",22),a.qZA()()(),a.TgZ(46,"div",5)(47,"div",6)(48,"label",7),a._uU(49,"Analog Measurement Variable"),a.qZA()(),a.TgZ(50,"div",23)(51,"div",9)(52,"label"),a._uU(53,"Select Iot Panel"),a.qZA(),a.TgZ(54,"select",24),a.NdJ("ngModelChange",function(o){return e.IotPanelId=o}),a.TgZ(55,"option",11),a._uU(56,"Select Iot Panel"),a.qZA(),a.YNc(57,C,2,2,"option",12),a.qZA()()(),a.TgZ(58,"div",18)(59,"div",14),a.O4$(),a.TgZ(60,"svg",15),a._UZ(61,"path",16),a.qZA()()(),a.kcU(),a.TgZ(62,"div",25)(63,"div",9)(64,"label"),a._uU(65,"Select Variable"),a.qZA(),a.TgZ(66,"select",10),a.NdJ("ngModelChange",function(o){return e.analogVariableId=o})("change",function(){return e.changeAnalogVariable()}),a.TgZ(67,"option",11),a._uU(68,"Select Analog Variable"),a.qZA(),a.YNc(69,Z,2,2,"option",12),a.qZA()()(),a.TgZ(70,"div",20)(71,"div",21),a.YNc(72,y,4,1,"div",22),a.qZA()()(),a.TgZ(73,"div",5)(74,"div",6)(75,"label",7),a._uU(76,"Ambient Variable"),a.qZA()(),a.TgZ(77,"div",23)(78,"div",9)(79,"label"),a._uU(80,"Ambient Variable"),a.qZA(),a.TgZ(81,"select",10),a.NdJ("ngModelChange",function(o){return e.ambientVariableId=o})("change",function(){return e.changeAmbientVariable()}),a.TgZ(82,"option",11),a._uU(83,"Select Ambient Variable"),a.qZA(),a.YNc(84,j,2,2,"option",12),a.qZA()()(),a.TgZ(85,"div",20)(86,"div",21),a.YNc(87,R,4,1,"div",22),a.qZA()()(),a.TgZ(88,"div",26)(89,"button",27),a.NdJ("click",function(){return e.selectDataAndClose()}),a._UZ(90,"i",28),a._uU(91," Apply "),a.qZA(),a.TgZ(92,"button",29),a.NdJ("click",function(){return e.closeModal()}),a._UZ(93,"i",30),a._uU(94," Cancel "),a.qZA()()()),2&i&&(a.xp6(15),a.Q6J("ngModel",e.projectId)("disabled",0!==e.projectVariableTags.length),a.xp6(3),a.Q6J("ngForOf",e.projectList),a.xp6(9),a.Q6J("ngModel",e.testRunId)("disabled",0!==e.projectVariableTags.length),a.xp6(3),a.Q6J("ngForOf",e.testRunList),a.xp6(9),a.Q6J("ngModel",e.variableId)("disabled",e.isDisableOption()),a.xp6(3),a.Q6J("ngForOf",e.variableList),a.xp6(3),a.Q6J("ngForOf",e.projectVariableTags),a.xp6(9),a.Q6J("ngModel",e.IotPanelId)("disabled",e.isDisableOption()),a.xp6(3),a.Q6J("ngForOf",e.IotPanelList),a.xp6(9),a.Q6J("ngModel",e.analogVariableId)("disabled",e.isDisableOption()),a.xp6(3),a.Q6J("ngForOf",e.analogVariableList),a.xp6(3),a.Q6J("ngForOf",e.analogVariableTags),a.xp6(9),a.Q6J("ngModel",e.ambientVariableId)("disabled",e.isDisableOption()),a.xp6(3),a.Q6J("ngForOf",e.ambientVariableList),a.xp6(3),a.Q6J("ngForOf",e.ambientVariableTags))},dependencies:[r.ez,r.sg,h.m,d.YN,d.Kr,d.EJ,d.JJ,d.On,b.Qf,g.LD,p.lN],styles:[".modal-title{font-style:normal;font-weight:400}  .modal-header{padding:10px}  .close{border-radius:50%;padding:0 8px;border-color:#666}  .modal-row-border{border-color:#ced4da;border-style:solid;border-width:.8px;border-radius:5px;padding:10px;margin:20px 10px}  .ml-10{margin-left:10px}  .mb-5{margin-bottom:5px}  select.form-control{background-color:#e4e4e4!important}  .modal-header{border-bottom:none}  .modal-body{padding:0}  .modal-body .row{margin:10px;padding-left:0;padding-right:0}  .section-title{font-size:12px}  .form-group label{font-size:10px;font-weight:400}  .icon-container{margin-top:25px}  .custom-btn.btn{border-radius:20px;margin-bottom:5px!important}  .card-header-right{display:none}  .cdk-overlay-container{z-index:9999}  .tag-input{display:flex;flex-wrap:wrap;align-items:center;margin:0}  .tag{background-color:#6c757d;color:#fff;padding:6px 8px;margin:0 4px;display:flex;align-items:center;border-radius:20px;font-size:10px}  .remove{cursor:pointer;margin-left:4px;font-weight:700}  .mat-mdc-form-field-subscript-wrapper{display:none!important}@media only screen and (max-width: 768px){  .icon-container{display:none}}"]})}return n})()},4143:(D,u,s)=>{s.d(u,{_:()=>g});var r=s(5449),h=s(9468),b=s(9862);let g=(()=>{class p{constructor(a){this.http=a}getProjectData(a){return this.http.post(`${r.N.apiUrl}/getListView`,a)}getAllProjectData(a){return this.http.post(`${r.N.apiUrl}/getAllTestView`,a)}getProjectSectionChartData(a){return this.http.post(`${r.N.apiUrl}/getAnalysisData`,a)}getAnalogVariableData(a){return this.http.post(`${r.N.apiUrl}/getCvariData`,a)}getAnalogSectionChartData(a){return this.http.post(`${r.N.apiUrl}/getGroupCData`,a)}getAmbientSectionChartData(a){return this.http.post(`${r.N.apiUrl}/GetambiantData`,a)}static#a=this.\u0275fac=function(T){return new(T||p)(h.LFG(b.eN))};static#t=this.\u0275prov=h.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},4270:(D,u,s)=>{s.d(u,{c:()=>b});var r=s(9468),h=s(7635);let b=(()=>{class g{constructor(d,a,T){this.templateRef=d,this.viewContainer=a,this.authService=T,this.visible=!1,this.appHasRoles=[]}ngOnChanges(){if(!this.visible){if(this.authService.checkRole(this.appHasRoles)||!this.appHasRoles?.length)return this.viewContainer.clear(),this.viewContainer.createEmbeddedView(this.templateRef),void(this.visible=!0);this.viewContainer.clear(),this.visible=!1}}static#a=this.\u0275fac=function(a){return new(a||g)(r.Y36(r.Rgc),r.Y36(r.s_b),r.Y36(h.u))};static#t=this.\u0275dir=r.lG2({type:g,selectors:[["","appHasRoles",""]],inputs:{appHasRoles:"appHasRoles"},features:[r.TTD]})}return g})()}}]);
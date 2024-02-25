"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[681],{4681:(F,b,l)=>{l.r(b),l.d(b,{default:()=>I});var d=l(6814),m=l(7818),_=l(8351),e=l(9468),U=l(5738),p=l(5449),M=l(9862);let g=(()=>{class i{constructor(t){this.http=t}getAlluser(){return this.http.post(`${p.N.apiUrl}/getAlluser`,null)}createUser(t){return this.http.post(`${p.N.apiUrl}/CreateUser`,t)}updateUser(t){return this.http.post(`${p.N.apiUrl}/UpdateUser`,t)}deleteUser(t){return this.http.post(`${p.N.apiUrl}/deleteUser`,t)}static#e=this.\u0275fac=function(s){return new(s||i)(e.LFG(M.eN))};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var h=l(3946),u=l(95);function Z(i,r){if(1&i&&(e.TgZ(0,"div")(1,"div",10),e._uU(2),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.nameValidatorMsg)}}function D(i,r){if(1&i&&(e.TgZ(0,"div")(1,"div",10),e._uU(2),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.fullNameValidatorMsg)}}function v(i,r){if(1&i&&(e.TgZ(0,"div")(1,"div",10),e._uU(2),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.mobileValidatorMsg)}}function y(i,r){if(1&i&&(e.TgZ(0,"div")(1,"div",10),e._uU(2),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.emailValidatorMsg)}}function T(i,r){if(1&i&&(e.TgZ(0,"div")(1,"div",10),e._uU(2),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.typeValidatorMsg)}}function C(i,r){if(1&i&&(e.TgZ(0,"option",28),e._uU(1),e.qZA()),2&i){const t=r.$implicit;e.Q6J("value",t.roleid),e.xp6(1),e.hij("",t.rolename," ")}}function A(i,r){if(1&i&&(e.TgZ(0,"div")(1,"div",10),e._uU(2),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Oqu(t.roleValidatorMsg)}}let x=(()=>{class i{constructor(t,s,a){this.baseService=t,this.userManagementService=s,this.activeModal=a,this.userData={uid:0,uname:"",createddate:new Date,fullname:"",status:!1,mobileno:"",email:"",password:"",type:"",rolename:"",roleid:0,userimage:""},this.action="Add",this.isNameValid=!1,this.isFullNameValid=!1,this.isMobileValid=!1,this.isEmailValid=!1,this.isTypeValid=!1,this.isRoleValid=!1,this.nameValidatorMsg="",this.fullNameValidatorMsg="",this.mobileValidatorMsg="",this.emailValidatorMsg="",this.typeValidatorMsg="",this.roleValidatorMsg=""}ngOnInit(){const t=localStorage.getItem("loggedUser");null!=t&&(this.loggedUserDetails=JSON.parse(t)),console.log(this.inputData),this.baseService.getRoles().subscribe(s=>{if(this.roles=s,this.roleId="",this.type="",0!=this.inputData.isCreateUser){this.action="Update",this.userData=this.inputData.user,this.roleId=this.userData.roleid,this.type="all"==this.userData.type||"All"==this.userData.type?"all":this.userData.type;let a="";const n=new Uint8Array(this.userData.userimage.data),o=n.byteLength;for(let f=0;f<o;f++)a+=String.fromCharCode(n[f]);btoa(a),this.imagestring=a}})}selectDataAndClose(){1!=this.checkValidation()&&(0==this.userData.uid||null==this.userData.uid?(this.userData.status=!1,this.userData.updateby=this.loggedUserDetails.uid,this.userManagementService.createUser({data:{name:this.userData.uname,password:null,updateDate:new Date,updateby:this.userData.updateby,email:this.userData.email,roleid:this.userData.roleid,mobile:this.userData.mobileno,createdate:this.userData.createddate,status:!1,fullname:this.userData.fullname,type:this.userData.type}}).subscribe(n=>{console.log(n),200==n.status&&this.activeModal.close({isSuccess:!0,user:{isCreatedNewUser:this.userData.uid,user:this.userData}})})):this.userManagementService.updateUser({id:this.userData.uid,data:["ustatus="+this.userData.status,"uname='"+this.userData.uname+"'","updateddate='"+this.userData.createddate+"'","updatedby="+this.loggedUserDetails.uid,"email='"+this.userData.email+"'","roleid="+this.userData.roleid,"mobileno="+this.userData.mobileno,"type='"+this.userData.type+"'"]}).subscribe(n=>{console.log(n),200==n.status&&this.activeModal.close({isSuccess:!0,user:{isCreatedNewUser:this.userData.uid,user:this.userData}})}))}onKeyPress(t){const s=t.which||t.keyCode;(s<48||s>57)&&t.preventDefault()}checkValidation(){let t=!1;return this.isNameValid=!0,this.isFullNameValid=!0,this.isMobileValid=!0,this.isEmailValid=!0,this.isTypeValid=!0,this.isRoleValid=!0,(""==this.userData.uname||null==this.userData.uname)&&(this.isNameValid=!1,this.nameValidatorMsg="Username is required",t=!0),(""==this.userData.fullname||null==this.userData.fullname)&&(this.isFullNameValid=!1,this.fullNameValidatorMsg="Fullname is required",t=!0),this.userData.mobileno.length<10&&(this.isMobileValid=!1,this.mobileValidatorMsg="Mobile must be at least 10 characters long.",t=!0),this.userData.mobileno.length>10&&(this.isMobileValid=!1,this.mobileValidatorMsg="Mobile cannot be more than 10 characters long.",t=!0),(""==this.userData.mobileno||null==this.userData.mobileno)&&(this.isMobileValid=!1,this.mobileValidatorMsg="Mobile No. is required",t=!0),this.isEmailValidRegex(this.userData.email)||(this.isEmailValid=!1,this.emailValidatorMsg="Invalid email format",t=!0),(""==this.userData.email||null==this.userData.email)&&(this.isEmailValid=!1,this.emailValidatorMsg="Email is required",t=!0),(""==this.userData.type||null==this.userData.type)&&(this.isTypeValid=!1,this.typeValidatorMsg="Type is required",t=!0),(0==this.userData.roleid||null==this.userData.roleid)&&(this.isRoleValid=!1,this.roleValidatorMsg="Role is required",t=!0),t}isEmailValidRegex(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}closeModal(){this.activeModal.dismiss({isSuccess:!1})}changeRoleId(){this.isRoleValid=!0,this.userData.roleid=this.roleId}changeType(){this.isTypeValid=!0,this.userData.type=this.type}onFileSelected(t){const s=t.target.files[0];if(s){const a=new FileReader;a.readAsDataURL(s),a.onload=()=>{this.imagestring=a.result}}else this.imagestring=null}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(U.b),e.Y36(g),e.Y36(h.Kz))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-user-modal"]],inputs:{inputData:"inputData"},standalone:!0,features:[e.jDz],decls:81,vars:15,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row","modal-row-border"],[1,"mb-2"],[1,"section-title"],[1,"col-xl-6","col-md-6"],[1,"form-group"],[1,"text-danger"],["placeholder","Name","aria-label","name","aria-describedby","basic-addon1",1,"form-control",3,"ngModel","ngModelChange","keyup"],[4,"ngIf"],["placeholder","Full Name","aria-label","fullname","aria-describedby","basic-addon1",1,"form-control",3,"ngModel","ngModelChange","keyup"],["placeholder","Mobile Number","aria-label","mobileno","aria-describedby","basic-addon1",1,"form-control",3,"ngModel","ngModelChange","keyup","keypress"],["placeholder","Email","aria-label","email","aria-describedby","basic-addon1",1,"form-control",3,"ngModel","ngModelChange","keyup"],[1,"form-control",3,"ngModel","ngModelChange","change"],["value","","disabled","","selected",""],["value","EODD"],["value","AODD"],["value","all"],[3,"value",4,"ngFor","ngForOf"],[1,"row","justify-content-end"],[1,"col-xl-3","col-md-3"],["type","button","ngbAutofocus","",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-check"],["type","button",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-times"],[3,"value"]],template:function(s,a){1&s&&(e.TgZ(0,"div",0)(1,"h6",1),e._uU(2),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return a.closeModal()}),e.TgZ(4,"span",3),e._uU(5,"\xd7"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10,"User Details"),e.qZA()(),e.TgZ(11,"div",8)(12,"div",9)(13,"label"),e._uU(14,"Username"),e.TgZ(15,"span",10),e._uU(16,"*"),e.qZA()(),e.TgZ(17,"input",11),e.NdJ("ngModelChange",function(o){return a.userData.uname=o})("keyup",function(){return a.checkValidation()}),e.qZA(),e.YNc(18,Z,3,1,"div",12),e.qZA()(),e.TgZ(19,"div",8)(20,"div",9)(21,"label"),e._uU(22,"Full Name"),e.TgZ(23,"span",10),e._uU(24,"*"),e.qZA()(),e.TgZ(25,"input",13),e.NdJ("ngModelChange",function(o){return a.userData.fullname=o})("keyup",function(){return a.checkValidation()}),e.qZA(),e.YNc(26,D,3,1,"div",12),e.qZA()(),e.TgZ(27,"div",8)(28,"div",9)(29,"label"),e._uU(30,"Mobile Number"),e.TgZ(31,"span",10),e._uU(32,"*"),e.qZA()(),e.TgZ(33,"input",14),e.NdJ("ngModelChange",function(o){return a.userData.mobileno=o})("keyup",function(){return a.checkValidation()})("keypress",function(o){return a.onKeyPress(o)}),e.qZA(),e.YNc(34,v,3,1,"div",12),e.qZA()(),e.TgZ(35,"div",8)(36,"div",9)(37,"label"),e._uU(38,"Email"),e.TgZ(39,"span",10),e._uU(40,"*"),e.qZA()(),e.TgZ(41,"input",15),e.NdJ("ngModelChange",function(o){return a.userData.email=o})("keyup",function(){return a.checkValidation()}),e.qZA(),e.YNc(42,y,3,1,"div",12),e.qZA()(),e.TgZ(43,"div",8)(44,"div",9)(45,"div",8)(46,"div",9)(47,"label"),e._uU(48,"Type"),e.TgZ(49,"span",10),e._uU(50,"*"),e.qZA()(),e.TgZ(51,"select",16),e.NdJ("ngModelChange",function(o){return a.type=o})("change",function(){return a.changeType()}),e.TgZ(52,"option",17),e._uU(53,"Select Type"),e.qZA(),e.TgZ(54,"option",18),e._uU(55,"EODD"),e.qZA(),e.TgZ(56,"option",19),e._uU(57,"AODD"),e.qZA(),e.TgZ(58,"option",20),e._uU(59,"All"),e.qZA()(),e.YNc(60,T,3,1,"div",12),e.qZA()()()(),e.TgZ(61,"div",8)(62,"div",9)(63,"label"),e._uU(64,"User Role"),e.TgZ(65,"span",10),e._uU(66,"*"),e.qZA()(),e.TgZ(67,"select",16),e.NdJ("ngModelChange",function(o){return a.roleId=o})("change",function(){return a.changeRoleId()}),e.TgZ(68,"option",17),e._uU(69,"Select Role"),e.qZA(),e.YNc(70,C,2,2,"option",21),e.qZA(),e.YNc(71,A,3,1,"div",12),e.qZA()()(),e.TgZ(72,"div",22)(73,"div",23)(74,"button",24),e.NdJ("click",function(){return a.selectDataAndClose()}),e._UZ(75,"i",25),e._uU(76),e.qZA()(),e.TgZ(77,"div",23)(78,"button",26),e.NdJ("click",function(){return a.closeModal()}),e._UZ(79,"i",27),e._uU(80," Cancel "),e.qZA()()()()),2&s&&(e.xp6(2),e.hij("",a.action," User"),e.xp6(15),e.Q6J("ngModel",a.userData.uname),e.xp6(1),e.Q6J("ngIf",!a.isNameValid),e.xp6(7),e.Q6J("ngModel",a.userData.fullname),e.xp6(1),e.Q6J("ngIf",!a.isFullNameValid),e.xp6(7),e.Q6J("ngModel",a.userData.mobileno),e.xp6(1),e.Q6J("ngIf",!a.isMobileValid),e.xp6(7),e.Q6J("ngModel",a.userData.email),e.xp6(1),e.Q6J("ngIf",!a.isEmailValid),e.xp6(9),e.Q6J("ngModel",a.type),e.xp6(9),e.Q6J("ngIf",!a.isTypeValid),e.xp6(7),e.Q6J("ngModel",a.roleId),e.xp6(3),e.Q6J("ngForOf",a.roles),e.xp6(1),e.Q6J("ngIf",!a.isRoleValid),e.xp6(5),e.hij(" ",a.action," "))},dependencies:[d.ez,d.sg,d.O5,m.m,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.On,_.Qf],styles:[".modal-title{font-style:normal;font-weight:400}  .modal-header{padding:10px}  .close{border-radius:50%;padding:0 8px;border-color:#666}  .modal-row-border{border-color:#ced4da;border-style:solid;border-width:.8px;border-radius:5px;padding:10px;margin:20px 10px}  .ml-10{margin-left:10px}  .mb-5{margin-bottom:5px}  select.form-control{background-color:#e4e4e4!important}  .modal-header{border-bottom:none}  .modal-body{padding:0}  .modal-body .row{margin:10px;padding-left:0;padding-right:0}  .section-title{font-size:12px}  .form-group label{font-size:10px;font-weight:400}  .icon-container{margin-top:25px}  .custom-btn.btn{border-radius:20px;margin-bottom:5px!important}  .card-header-right{display:none}.tag-input[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;margin:0}.tag[_ngcontent-%COMP%]{background-color:#6c757d;color:#fff;padding:6px 8px;margin:0 4px;display:flex;align-items:center;border-radius:20px;font-size:10px}.remove[_ngcontent-%COMP%]{cursor:pointer;margin-left:4px;font-weight:700}"]})}return i})(),q=(()=>{class i{constructor(t,s,a){this.baseService=t,this.userManagementService=s,this.activeModal=a}ngOnInit(){let t=localStorage.getItem("loggedUser");null!=t&&(this.loggedUserDetails=JSON.parse(t)),console.log(this.inputData)}selectDataAndClose(){console.log(this.inputData.userId),this.userManagementService.deleteUser({id:this.inputData.userId}).subscribe(s=>{console.log(s),200==s.status&&this.activeModal.close({isSuccess:!0})},s=>{})}closeModal(){this.activeModal.dismiss({isSuccess:!1})}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(U.b),e.Y36(g),e.Y36(h.Kz))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-delete-user"]],inputs:{inputData:"inputData"},standalone:!0,features:[e.jDz],decls:19,vars:0,consts:[[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row","modal-row-border"],[1,"row","justify-content-end"],[1,"col-xl-4","col-md-4"],["type","button","ngbAutofocus","",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-check"],["type","button",1,"btn","btn-block","btn-primary","mb-4","custom-btn",3,"click"],[1,"fas","fa-times"]],template:function(s,a){1&s&&(e.TgZ(0,"div",0)(1,"h6",1),e._uU(2,"Delete User"),e.qZA(),e.TgZ(3,"button",2),e.NdJ("click",function(){return a.closeModal()}),e.TgZ(4,"span",3),e._uU(5,"\xd7"),e.qZA()()(),e.TgZ(6,"div",4)(7,"div",5)(8,"h6"),e._uU(9," Are you sure you wants to delete user? "),e.qZA()(),e.TgZ(10,"div",6)(11,"div",7)(12,"button",8),e.NdJ("click",function(){return a.selectDataAndClose()}),e._UZ(13,"i",9),e._uU(14," Delete "),e.qZA()(),e.TgZ(15,"div",7)(16,"button",10),e.NdJ("click",function(){return a.closeModal()}),e._UZ(17,"i",11),e._uU(18," Cancel "),e.qZA()()()())},dependencies:[d.ez,m.m,_.Qf],styles:[".modal-title{font-style:normal;font-weight:400}  .modal-header{padding:10px}  .close{border-radius:50%;padding:0 8px;border-color:#666}  .modal-row-border{border-color:#ced4da;border-style:solid;border-width:.8px;border-radius:5px;padding:10px;margin:20px 10px}  .ml-10{margin-left:10px}  .mb-5{margin-bottom:5px}  select.form-control{background-color:#e4e4e4!important}  .modal-header{border-bottom:none}  .modal-body{padding:0}  .modal-body .row{margin:10px;padding-left:0;padding-right:0}  .section-title{font-size:12px}  .form-group label{font-size:10px;font-weight:400}  .icon-container{margin-top:25px}  .custom-btn.btn{border-radius:20px;margin-bottom:5px!important}  .card-header-right{display:none}.tag-input[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;margin:0}.tag[_ngcontent-%COMP%]{background-color:#6c757d;color:#fff;padding:6px 8px;margin:0 4px;display:flex;align-items:center;border-radius:20px;font-size:10px}.remove[_ngcontent-%COMP%]{cursor:pointer;margin-left:4px;font-weight:700}"]})}return i})();var V=l(7911),N=l(9074),k=l(8642),O=l(220);function S(i,r){1&i&&(e.TgZ(0,"th")(1,"span"),e._uU(2,"Delete"),e.qZA()())}function w(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"td")(1,"i",9),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,n=e.oxw();return e.KtG(n.deleteModal(a.uid))}),e.qZA()()}}function J(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.ALo(9,"date"),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td")(13,"i",8),e.NdJ("click",function(){const n=e.CHM(t).$implicit,o=e.oxw();return e.KtG(o.addUpdateUser(n.uid,n))}),e.qZA()(),e.YNc(14,w,2,0,"td",6),e.qZA()}if(2&i){const t=r.$implicit,s=e.oxw();e.xp6(2),e.Oqu(t.uname),e.xp6(2),e.Oqu(t.fullname),e.xp6(2),e.Oqu(t.rolename),e.xp6(2),e.Oqu(e.xi3(9,6,t.createddate,"dd/MM/yyyy HH:mm:ss")),e.xp6(3),e.Oqu(t.updatedby),e.xp6(3),e.Q6J("ngIf",s.isSuperAdmin)}}let I=(()=>{class i{constructor(t,s,a,n,o){this.toastService=t,this.headerService=s,this.router=a,this.modalService=n,this.userManagementService=o,this.isSuperAdmin=!1,this.headerService.setHeaderName("User Management")}ngOnInit(){const t=localStorage.getItem("loggedUser");null!=t&&(this.loggedUserDetails=JSON.parse(t),this.isSuperAdmin="SuperAdmin"==this.loggedUserDetails.uname),this.getAllusers()}getAllusers(){this.userManagementService.getAlluser().subscribe(t=>{this.userList=t,console.log(this.userList)})}addUpdateUser(t,s){const a={isCreateUser:t,user:s};let n="Updated";0==t&&(n="Added");const o=this.modalService.open(x,{size:"lg"});o.componentInstance.inputData=a,o.result.then(c=>{console.log(c),1==c.isSuccess&&(this.getAllusers(),this.toastService.show({template:"User "+n+" successfully",classname:"bg-success",delay:3e3}))},c=>{console.log(`Modal dismissed with: ${c}`)})}deleteModal(t){const s={userId:t},a=this.modalService.open(q);a.componentInstance.inputData=s,a.result.then(n=>{console.log(n),1==n.isSuccess&&(this.getAllusers(),this.toastService.show({template:"User Removed successfully",classname:"bg-success",delay:3e3}))},n=>{console.log(`Modal dismissed with: ${n}`)})}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(V.k),e.Y36(N.r),e.Y36(k.F0),e.Y36(h.FF),e.Y36(g))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-user-list"]],standalone:!0,features:[e.jDz],decls:31,vars:3,consts:[["cardTitle","User Management",3,"options"],[1,"row","justify-content-end"],[1,"col-xl-2","col-md-2","mb-4"],[1,"btn","btn-success",3,"click"],[1,"table-responsive"],[1,"table","table-styling"],[4,"ngIf"],[4,"ngFor","ngForOf"],["aria-hidden","true",1,"icon","feather","icon-edit",3,"click"],[1,"icon","feather","icon-trash",3,"click"]],template:function(s,a){1&s&&(e.TgZ(0,"app-card",0)(1,"div",1)(2,"div",2)(3,"button",3),e.NdJ("click",function(){return a.addUpdateUser(0,null)}),e._uU(4,"Add User"),e.qZA()()(),e.TgZ(5,"div",1)(6,"div",4)(7,"table",5)(8,"thead")(9,"tr")(10,"th")(11,"span"),e._uU(12,"User Name"),e.qZA()(),e.TgZ(13,"th")(14,"span"),e._uU(15,"Full Name"),e.qZA()(),e.TgZ(16,"th")(17,"span"),e._uU(18,"Role"),e.qZA()(),e.TgZ(19,"th")(20,"span"),e._uU(21,"Created Date"),e.qZA()(),e.TgZ(22,"th")(23,"span"),e._uU(24,"Updated By"),e.qZA()(),e.TgZ(25,"th")(26,"span"),e._uU(27,"Edit"),e.qZA()(),e.YNc(28,S,3,0,"th",6),e.qZA()(),e.TgZ(29,"tbody"),e.YNc(30,J,15,9,"tr",7),e.qZA()()()()()),2&s&&(e.Q6J("options",!1),e.xp6(28),e.Q6J("ngIf",a.isSuperAdmin),e.xp6(2),e.Q6J("ngForOf",a.userList))},dependencies:[d.ez,d.sg,d.O5,d.uU,m.m,O.A],styles:[".properties[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background:linear-gradient(45deg,#2ed8b6,#59e0c5)!important}"]})}return i})()}}]);
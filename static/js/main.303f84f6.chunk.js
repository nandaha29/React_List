(this.webpackJsonprpp3=this.webpackJsonprpp3||[]).push([[0],{82:function(t,e,a){},91:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a(10),r=a.n(i),c=(a(82),a(28)),s=a(121),l=a(124),o=a(126),d=a(127),j=a(128),u=a(129),h=a(130),m=a(48),b=a.n(m),x=a(49),g=a.n(x),p=a(2),O=Object(s.a)((function(t){return{root:{backgroundColor:"#fff"},title:{color:"#008891"}}}));function f(){var t=O();return Object(p.jsx)(l.a,{position:"static",className:t.root,children:Object(p.jsx)(o.a,{children:Object(p.jsx)(d.a,{children:Object(p.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(p.jsx)(j.a,{item:!0,children:Object(p.jsx)(u.a,{className:t.title,variant:"h6",noWrap:!0,children:"My React List"})}),Object(p.jsx)(j.a,{item:!0,sm:!0})," ",Object(p.jsxs)(j.a,{item:!0,children:[Object(p.jsx)(h.a,{component:c.b,to:"/",children:Object(p.jsx)(b.a,{fontSize:"small"})}),Object(p.jsx)(h.a,{component:c.b,to:"/Belanja",children:Object(p.jsx)(g.a,{fontSize:"small"})})]})]})})})})}var v=a(11),y=a(50),k=a(51),S=a(55),C=a(54),w=a(71),N=a(131),H=Object(s.a)((function(t){return{root:{backgroundColor:"#fdfdff"},pageHeader:{padding:t.spacing(4),display:"flex",marginBottom:t.spacing(2)},pageIcon:{display:"inline-block",padding:t.spacing(2),color:"#3c44b1",float:"left"},pageTitle:{paddingLeft:t.spacing(4),"& .MuiTypography-subtitle2":{opacity:"0.6"},float:"left"}}}));function B(t){var e=H(),a=t.title,n=t.subTitle,i=t.icon;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(w.a,{elevation:0,square:!0,className:e.root,children:Object(p.jsx)("div",{className:e.pageHeader,children:Object(p.jsxs)(d.a,{children:[Object(p.jsx)(N.a,{className:e.pageIcon,children:i}),Object(p.jsxs)("div",{className:e.pageTitle,children:[Object(p.jsx)(u.a,{variant:"h6",component:"div",children:a}),Object(p.jsx)(u.a,{variant:"subtitle2",component:"div",children:n})]})]})})})})}var L=a(134),T=a(132),A=a(56),q=a(52),I=a.n(q),P=a(53),F=a.n(P),D=a(21),_=a.n(D),M=function(t){Object(S.a)(a,t);var e=Object(C.a)(a);function a(){var t;return Object(y.a)(this,a),(t=e.call(this)).Add=function(){_()("#modal_hb").modal("show"),t.setState({nama:"",tgl:"",action:"insert"})},t.Edit=function(e){_()("#modal_hb").modal("show"),t.setState({nama:e.nama,tgl:e.tgl,action:"update",selectedItem:e})},t.Save=function(e){e.preventDefault();var a=t.state.hb;if("insert"===t.state.action)a.push({nama:t.state.nama,tgl:t.state.tgl});else if("update"===t.state.action){var n=a.indexOf(t.state.selectedItem);a[n].nama=t.state.nama,a[n].tgl=t.state.tgl}t.setState({hari:a}),_()("#modal_hb").modal("hide")},t.Drop=function(e){if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){var a=t.state.hb,n=a.indexOf(e);a.splice(n,1),t.setState({hari:a})}},t.searching=function(e){if(13===e.keyCode){var a=t.state.keyword.toLowerCase(),n=t.state.hb.filter((function(t){return t.nama.toLowerCase().includes(a)}));t.setState({filterHb:n})}},t.state={hb:[{nama:"Hari Peringatan Laut dan Samudera nasional",tgl:"15 januari"},{nama:"Hari Lahan Basah Sedunia",tgl:"2 Februari"},{nama:"Hari Peduli Sampah Nasional",tgl:"15 januari"},{nama:"Hari Hutan Sedunia",tgl:"21 Maret"},{nama:"Hari Bumi",tgl:"22 April"}],action:"",nama:"",tgl:"",selectedItem:null,keyword:"",filterHb:[]},t.state.filterHb=t.state.hb,t}return Object(k.a)(a,[{key:"render",value:function(){var t=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(B,{title:"List Hari Besar Lingkungan",subTitle:"Penilaian Keterampilan React JS List",icon:Object(p.jsx)(b.a,{fontSize:"large"})}),Object(p.jsxs)("div",{className:"container",style:{margin:"auto auto 50 50"},children:[Object(p.jsxs)("div",{style:{margin:"3% auto 3% auto"},children:[Object(p.jsx)(L.a,{id:"outlined-required",label:"Cari yuk",variant:"outlined",value:this.state.keyword,onChange:function(e){return t.setState({keyword:e.target.value})},onKeyUp:function(e){return t.searching(e)},style:{width:"850px",margin:"0 0 auto auto"}}),Object(p.jsx)(T.a,{variant:"outlined",color:"primary",onClick:function(){return t.Add()},style:{margin:"10px 10px 0 60px"},children:"+ Tambah Data"})]}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)(A.a,{striped:!0,bordered:!0,hover:!0,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Hari Besar Lingkungan"}),Object(p.jsx)("th",{children:"Tanggal Masehi"}),Object(p.jsx)("th",{children:"Action"})]})}),Object(p.jsx)("tbody",{children:this.state.filterHb.map((function(e,a){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.nama}),Object(p.jsx)("td",{children:e.tgl}),Object(p.jsxs)("td",{children:[Object(p.jsx)(T.a,{variant:"contained",onClick:function(){return t.Edit(e)},style:{backgroundColor:"#c6cbef",margin:" auto 13px"},children:Object(p.jsx)(I.a,{})}),Object(p.jsx)(T.a,{variant:"contained",onClick:function(){return t.Drop(e)},style:{backgroundColor:"#fc9d9d"},children:Object(p.jsx)(F.a,{})})]})]},a)}))})]})}),Object(p.jsx)("div",{className:"modal",id:"modal_hb",children:Object(p.jsx)("div",{className:"modal-dialog",children:Object(p.jsxs)("div",{className:"modal-content",children:[Object(p.jsx)("div",{className:"modal-header",style:{textAlign:"center",margin:"20px 20px 0 10px"},children:Object(p.jsx)("h4",{children:"Form Hari Besar"})}),Object(p.jsx)("div",{className:"modal-body",children:Object(p.jsxs)("form",{onSubmit:function(e){return t.Save(e)},style:{textAlign:"center",margin:"25px auto"},children:[Object(p.jsx)(L.a,{id:"outlined-required",label:"Hari besar",variant:"outlined",value:this.state.nama,onChange:function(e){return t.setState({nama:e.target.value})},required:!0}),Object(p.jsx)(L.a,{id:"date",label:"Birthday",type:"date",defaultValue:"2017-05-24",InputLabelProps:{shrink:!0},value:this.state.tgl,onChange:function(e){return t.setState({tgl:e.target.value})},required:!0,style:{margin:"auto 13px"}}),Object(p.jsx)("div",{style:{margin:"25px auto"},children:Object(p.jsx)(T.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})})]})})]})})})]})]})}}]),a}(n.Component),z=function(t){Object(S.a)(a,t);var e=Object(C.a)(a);function a(){var t;return Object(y.a)(this,a),(t=e.call(this)).Add=function(){_()("#modal_produk").modal("show"),t.setState({nama:"",harga:"",jumlah:"",action:"insert"})},t.Edit=function(e){_()("#modal_produk").modal("show"),t.setState({nama:e.nama,harga:e.harga,jumlah:e.jumlah,action:"update",selectedItem:e})},t.Save=function(e){var a=t.state.produk;if("insert"===t.state.action)a.push({nama:t.state.nama,harga:t.state.harga,jumlah:t.state.jumlah});else if("update"===t.state.action){var n=a.indexOf(t.state.selectedItem);a[n].nama=t.state.nama,a[n].harga=t.state.harga,a[n].jumlah=t.state.jumlah}t.setState({prod:a}),_()("#modal_produk").modal("hide"),t.totalHarga(),e.preventDefault()},t.Drop=function(e){if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){var a=t.state.produk,n=a.indexOf(e);a.splice(n,1),t.setState({prod:a})}t.totalHarga()},t.searching=function(e){if(13===e.keyCode){var a=t.state.keyword.toLowerCase(),n=t.state.produk.filter((function(t){return t.nama.toLowerCase().includes(a)}));t.setState({filterProduk:n})}},t.totalHarga=function(){var e=t.state.produk,a=0;e.map((function(t){a+=t.harga*t.jumlah})),t.setState({total:a})},t.state={produk:[{nama:"Pizza",harga:2e3,jumlah:1},{nama:"Donat",harga:12e3,jumlah:1},{nama:"Bolu",harga:3e3,jumlah:3},{nama:"Makaron",harga:5e3,jumlah:2},{nama:"Kue Tart",harga:3e4,jumlah:5}],action:"",nama:"",harga:0,jumlah:0,total:0,selectedItem:null,keyword:"",filterProduk:[]},t.state.filterProduk=t.state.produk,t}return Object(k.a)(a,[{key:"render",value:function(){var t=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(B,{title:"List Belanja Kue",subTitle:"Penilaian Keterampilan React JS List",icon:Object(p.jsx)(g.a,{fontSize:"large"})}),Object(p.jsxs)("div",{className:"container",style:{margin:"auto auto 50 50"},children:[Object(p.jsxs)("div",{style:{margin:"3% auto 3% auto"},children:[Object(p.jsx)(L.a,{id:"outlined-required",label:"Cari yuk",variant:"outlined",value:this.state.keyword,onChange:function(e){return t.setState({keyword:e.target.value})},onKeyUp:function(e){return t.searching(e)},style:{width:"850px"}}),Object(p.jsx)(T.a,{variant:"outlined",color:"primary",onClick:function(){return t.Add()},style:{margin:"10px 10px 0 20px"},children:"+ Tambah Data"}),Object(p.jsx)(T.a,{variant:"outlined",onClick:function(){return t.totalHarga()},style:{margin:"10px 10px 0 0",color:"green"},children:"Total"})]}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)(A.a,{striped:!0,bordered:!0,hover:!0,children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Nama Barang"}),Object(p.jsx)("th",{children:"Harga"}),Object(p.jsx)("th",{children:"Jumlah"}),Object(p.jsx)("th",{children:"Total"}),Object(p.jsx)("th",{children:"Action"})]})}),Object(p.jsx)("tbody",{children:this.state.filterProduk.map((function(e,a){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.nama}),Object(p.jsx)("td",{children:e.harga}),Object(p.jsx)("td",{children:e.jumlah}),Object(p.jsx)("td",{children:e.harga*e.jumlah}),Object(p.jsxs)("td",{children:[Object(p.jsx)(T.a,{variant:"contained",onClick:function(){return t.Edit(e)},style:{backgroundColor:"#c6cbef",margin:" auto 13px"},children:Object(p.jsx)(I.a,{})}),Object(p.jsx)(T.a,{variant:"contained",onClick:function(){return t.Drop(e)},style:{backgroundColor:"#fc9d9d"},children:Object(p.jsx)(F.a,{})})]})]},a)}))})]})}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h4",{style:{margin:"auto 13px"},children:"Total Belanja: Rp "}),Object(p.jsx)("input",{type:"number",className:"form-control mb-3",value:this.state.total,readOnly:!0,style:{width:"200px",margin:"10px auto auto -5px"}})]}),Object(p.jsx)("div",{className:"modal",id:"modal_produk",children:Object(p.jsx)("div",{className:"modal-dialog",children:Object(p.jsxs)("div",{className:"modal-content",children:[Object(p.jsx)("div",{className:"modal-header",style:{textAlign:"center",margin:"20px 20px 0 10px"},children:Object(p.jsx)("h4",{children:"Form Belanja"})}),Object(p.jsx)("div",{className:"modal-body",children:Object(p.jsxs)("form",{onSubmit:function(e){return t.Save(e)},style:{textAlign:"center"},children:[Object(p.jsx)(L.a,{id:"outlined-required",label:"Barang",variant:"outlined",value:this.state.nama,onChange:function(e){return t.setState({nama:e.target.value})},required:!0,style:{marginBottom:"20px"}}),Object(p.jsx)("br",{}),Object(p.jsx)(L.a,{id:"outlined-required",label:"Harga",variant:"outlined",value:this.state.harga,onChange:function(e){return t.setState({harga:e.target.value})},required:!0,style:{marginBottom:"20px"}}),Object(p.jsx)("br",{}),Object(p.jsx)(L.a,{id:"outlined-required",label:"Jumlah",variant:"outlined",value:this.state.jumlah,onChange:function(e){return t.setState({jumlah:e.target.value})},required:!0}),Object(p.jsx)("div",{style:{margin:"25px auto"},children:Object(p.jsx)(T.a,{variant:"contained",color:"primary",type:"submit",children:"Submit"})})]})})]})})})]})]})}}]),a}(n.Component),J=function(){return Object(p.jsxs)(v.c,{children:[Object(p.jsx)(v.a,{exact:!0,path:"/",component:M}),Object(p.jsx)(v.a,{path:"/Hari",component:M}),Object(p.jsx)(v.a,{path:"/Belanja",component:z})]})},K=a(133),E=Object(s.a)({appMain:{width:"100%",display:"inline-block"}});function R(){var t=E();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:t.appMain,children:[Object(p.jsx)(f,{}),Object(p.jsx)(J,{})]}),Object(p.jsx)(K.a,{})]})}var U=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,136)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;a(t),n(t),i(t),r(t),c(t)}))};a(89),a(90);r.a.render(Object(p.jsx)(c.a,{children:Object(p.jsx)(R,{})}),document.getElementById("root")),U()}},[[91,1,2]]]);
//# sourceMappingURL=main.303f84f6.chunk.js.map
import{f as a,g as e,o as s,h as o,i as r,n as t,u as l,j as d,k as i,r as n,F as c,l as v,m as p,p as u,q as f,w as g,s as h,t as m,v as b,x as _,y as w,z as y,A as k,B as x,C as $,D as z,E as B,G as I,H as M,I as H,J as C,K as D,L as O}from"./app-B_Uzjjru.js";const A={"data-name":"Calque 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1920 1186.8"},L=d(a({__name:"HeroWaveMask",props:{color:{default:"white"}},setup(a){const d=a,i=e((()=>[d.color&&`mask-${d.color}`]));return(a,e)=>(s(),o("svg",A,[r("path",{d:"M1755.5 78.3a863.94 863.94 0 00-120.4 65.5c-65.5 34-100.5 149-100.5 149-17 71-78.5 156-78.5 156s-99 140-346 168c-189.9 21.5-234.4 124-244.8 170.2-5.2 22.3-16.9 36.8-21.1 41.3-28.7 30.2-53.1 41.6-59.4 44.2-61.6 24.1-145 38.6-204.7 88.3-95.3 79.3-288 83.3-288 83.3C82.8 1045.5 0 1186.8 0 1186.8h1920V.3c-74-4.5-97.5 48.5-164.5 78z",class:t(l(i))},null,2)]))}}),[["__scopeId","data-v-d18fb5d8"]]),P={version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",viewBox:"0 0 1440 440","xml:space":"preserve"},j={id:"XMLID_29_"},E=d(a({__name:"HeroCircleMask",props:{color:{default:"white"}},setup(a){const d=a,i=e((()=>[d.color&&`mask-${d.color}`]));return(a,e)=>(s(),o("svg",P,[r("g",j,[r("path",{id:"XMLID_30_",class:t(l(i)),d:"M-15 442.5h707.4c-261.2 0-504.3-77.7-707.4-211.2v211.2z"},null,2),r("path",{id:"XMLID_31_",class:t(l(i)),d:"M692.4 442.5H1455V192.9c-213.6 156.9-477.2 249.6-762.6 249.6z"},null,2)])]))}}),[["__scopeId","data-v-baa4b3c5"]]),X={key:0,class:"starfall"},q=["src"],F={key:2,class:"hero-mask-circle"},K={key:3,class:"hero-mask-wave"},V={key:4,class:"hero-mask-slant"},G={key:5,class:"hero-overlay"},J={key:6,class:"hero-body"},N={key:7,class:"hero-foot"},S=a({__name:"Hero",props:{size:{default:void 0},alignment:{default:void 0},color:{default:void 0},shape:{default:void 0},shapeOrientation:{default:void 0},overlay:{type:Boolean,default:!1},starfall:{type:Boolean,default:!1},mask:{default:void 0}},setup(a){const d=i(),m=a,b=e((()=>[m.shape&&"has-top-bg",m.shapeOrientation&&`top-bg-${m.shapeOrientation}`,m.size&&`is-${m.size}`,m.alignment&&`is-${m.alignment}`,m.color&&`is-${m.color}`,m.mask&&"has-mask"]));return(a,e)=>{const i=E,_=L,w=n("HeroSlantMask"),y=h;return s(),o("section",{class:t(["hero",l(b)])},[m.starfall?(s(),o("div",X,[(s(),o(c,null,v(40,(a=>r("div",{key:a,class:"falling-star"}))),64))])):p("",!0),m.shape?(s(),o("img",{key:1,class:"top-bg",src:m.shape,alt:"hero shape",width:"240",height:"150"},null,8,q)):p("",!0),"circle"===m.mask?(s(),o("div",F,[u(i,{color:m.color},null,8,["color"])])):p("",!0),"wave"===m.mask?(s(),o("div",K,[u(_,{color:m.color},null,8,["color"])])):p("",!0),"slant"===m.mask?(s(),o("div",V,[u(w,{color:m.color},null,8,["color"])])):p("",!0),m.overlay?(s(),o("div",G)):p("",!0),f(a.$slots,"background"),"body"in l(d)?(s(),o("div",J,[u(y,null,{default:g((()=>[f(a.$slots,"body")])),_:3})])):p("",!0),"footer"in l(d)?(s(),o("div",N,[f(a.$slots,"footer")])):p("",!0)],2)}}}),T=d(a({__name:"ErrorHero",props:{color:{default:"grey"},pattern:{type:Boolean,default:!1}},setup(a){const o=a,r=e((()=>[o.color&&`is-${o.color}`,o.pattern&&""]));return(a,e)=>{const o=S;return s(),m(o,{class:t(["error-hero",l(r)]),size:"fullheight"},{body:g((()=>[f(a.$slots,"error",{},void 0,!0)])),_:3},8,["class"])}}}),[["__scopeId","data-v-8c411f6c"]]),W=d(a({__name:"Title",props:{size:{default:void 0},weight:{default:void 0},inverted:{type:Boolean,default:!1},narrow:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},uppercase:{type:Boolean,default:!1},tag:{default:"h2"},text:{default:void 0}},setup(a){const o=a,r=e((()=>[o.size&&`is-${o.size}`,o.weight&&`is-${o.weight}`,o.inverted&&"is-inverted",o.narrow&&"is-narrow",o.leading&&"is-leading",o.uppercase&&"is-uppercase"]));return(a,e)=>(s(),m(w(a.tag),{class:t(["title",l(r)])},{default:g((()=>[f(a.$slots,"default",{},(()=>[b(_(a.text),1)]),!0)])),_:3},8,["class"]))}}),[["__scopeId","data-v-029d3f38"]]),Q=a=>(H("data-v-7b8ac72f"),a=a(),C(),a),R={class:"error-nav"},U={class:"error-nav-inner"},Y={class:"left"},Z={class:"right"},aa={class:"error-wrapper"},ea=$('<div class="error-wrapper-inner" data-v-7b8ac72f><div class="underlay" data-v-7b8ac72f><span data-v-7b8ac72f>404</span></div><div class="error-box" data-v-7b8ac72f><div class="error-box-face front" data-v-7b8ac72f> 4 </div><div class="error-box-face back" data-v-7b8ac72f> 0 </div><div class="error-box-face right" data-v-7b8ac72f> 4 </div><div class="error-box-face left" data-v-7b8ac72f> 0 </div><div class="error-box-face top" data-v-7b8ac72f> 0 </div><div class="error-box-face bottom" data-v-7b8ac72f> 0 </div></div><div class="error-box-shadow" data-v-7b8ac72f></div></div>',1),sa={class:"error-content"},oa=Q((()=>r("span",null,"Page Not Found",-1))),ra={class:"paragraph rem-115 is-inverted-light mx-auto max-w-4 mb-4"},ta=d(a({__name:"ErrorAnimated",setup:a=>(a,e)=>{const t=z,d=B,i=h,n=W,c=I,v=M;return s(),o("div",null,[r("div",R,[u(i,null,{default:g((()=>[r("div",U,[r("div",Y,[u(t,{class:"navbar-logo",src:l(y).logo.src,"src-dark":l(y).logo.srcDark,alt:"",width:l(y).logo.width,height:l(y).logo.height},null,8,["src","src-dark","width","height"])]),r("div",Z,[u(d)])])])),_:1})]),r("div",aa,[ea,r("div",sa,[u(n,{tag:"h2",size:2,weight:"bold",inverted:"",leading:""},{default:g((()=>[oa])),_:1}),r("p",ra,[f(a.$slots,"default",{},(()=>[b(" Oops, something went wrong and we couldn't find that page. Please try again later. ")]),!0)]),u(v,{alignment:"centered"},{default:g((()=>[u(c,{to:"/",long:3,color:"light",outlined:"",bold:""},{default:g((()=>[b(" Homepage ")])),_:1}),u(c,{long:3,color:"light",outlined:"",bold:"",onClick:e[0]||(e[0]=k((e=>a.$router.back()),["prevent"])),onKeydown:e[1]||(e[1]=x(k((()=>a.$router.back()),["prevent"]),["space"]))},{default:g((()=>[b(" Back ")])),_:1})])),_:1})])])])}}),[["__scopeId","data-v-7b8ac72f"]]),la=a({__name:"[...all]",setup(a){D({title:"Page not found"});const t=O(),d=e((()=>Array.isArray(t.params.all)?t.params.all:[])),i=e((()=>`/${d.value.join("/")}`));return(a,e)=>{const t=ta,d=T;return s(),o("div",null,[u(d,{color:"primary",pattern:""},{error:g((()=>[u(t,null,{default:g((()=>[b(" Oops, something went wrong and we couldn't find that page at "),r("strong",null,_(l(i)),1),b(" . Please try again later. ")])),_:1})])),_:1})])}}}),da={};"function"==typeof da&&da(la);export{la as default};

import{F as lp,d as _r,y as ht,z as bt,A as te,G as fp,B as Ct,H as ye,C as it,k as Qs,I as Mo,D as zc,J as dp,K as up,L as un,T as hp,_ as pp,M as wd,N as Eo,O as To,o as Pd,P as mp,g as Si,Q as _p,R as gp,E as Vt,S as mi,U as Tl,V as Cl,W as Al,q as Rl}from"./CUKZfyvX.js";function xp(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}function vp(n){return wi(new TextEncoder().encode(n))}function wi(n){const e=Array.from(n).map(i=>String.fromCharCode(i)).join("");return btoa(e).replaceAll("=","").replaceAll("+","-").replaceAll("/","_")}function Dd(n){const t=n.padEnd(n.length+(4-n.length%4)%4,"=").replaceAll("-","+").replaceAll("_","/"),i=atob(t);return Uint8Array.from(i,r=>r.charCodeAt(0))}const wl=globalThis.setInterval;class pa{_socket;_onAnswer=null;constructor(e){this._socket=e}static async connect({url:e,info:t,onMessage:i,generateNewInfo:r,onClose:s}){console.log(`Connecting to ${e}`);const a=vp(JSON.stringify(t)),o=await new Promise((u,d)=>{const h=new WebSocket(`${e}?d=${a}`);h.onopen=()=>u(h),h.onerror=_=>d(_)}),l=wl(()=>{o.send("")},120*1e3),c=wl(async()=>{const u=await r();o.send(JSON.stringify({type:"UPDATE",info:u}))},1800*1e3);o.onclose=()=>{console.log("Signaling connection closed"),clearInterval(l),clearInterval(c),s()},console.log("Signaling connection established");const f=new pa(o);return o.onmessage=u=>{const d=JSON.parse(u.data);console.log(`WS in: ${u.data}`),d.type==="ANSWER"&&f._onAnswer&&d.sessionId===f._onAnswer.sessionId&&(f._onAnswer.callback(d),f._onAnswer=null),i(d)},f}send(e){console.log(`WS out: ${JSON.stringify(e)}`),this._socket.send(JSON.stringify(e))}async waitForAnswer(e){return await new Promise(t=>{this._onAnswer={sessionId:e,callback:i=>t(i)}})}async waitUntilClose(){return new Promise(e=>{this._socket.addEventListener("close",()=>{e()})})}}var Id=(n=>(n.mobile="MOBILE",n.desktop="DESKTOP",n.web="WEB",n.headless="HEADLESS",n.server="SERVER",n))(Id||{});class Sp{_stream;_controller;constructor(){let e;this._stream=new ReadableStream({start(t){e=t}}),this._controller=e}add(e){this._controller.enqueue(e)}async readNext(){const e=this._stream.getReader();try{const{value:t,done:i}=await e.read();if(i)throw new Error("No more data");return t}finally{e.releaseLock()}}createAsyncIterator(){let e;return{asyncIterator:this._createAsyncIterator(i=>e=i),releaseLock:()=>e.releaseLock()}}async*_createAsyncIterator(e){const t=this._stream.getReader();e(t);try{for(;;){const{value:i,done:r}=await t.read();if(r)break;yield i}}finally{t.releaseLock()}}}const bp=4,Pl=0,Dl=1,yp=2;function gr(n){let e=n.length;for(;--e>=0;)n[e]=0}const Mp=0,Ld=1,Ep=2,Tp=3,Cp=258,Gc=29,Jr=256,Gr=Jr+1+Gc,ar=30,Hc=19,Ud=2*Gr+1,Ei=15,Ca=16,Ap=7,Vc=256,Nd=16,Fd=17,Od=18,Co=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Bs=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),Rp=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),kd=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wp=512,Bn=new Array((Gr+2)*2);gr(Bn);const Or=new Array(ar*2);gr(Or);const Hr=new Array(wp);gr(Hr);const Vr=new Array(Cp-Tp+1);gr(Vr);const Wc=new Array(Gc);gr(Wc);const ea=new Array(ar);gr(ea);function Aa(n,e,t,i,r){this.static_tree=n,this.extra_bits=e,this.extra_base=t,this.elems=i,this.max_length=r,this.has_stree=n&&n.length}let Bd,zd,Gd;function Ra(n,e){this.dyn_tree=n,this.max_code=0,this.stat_desc=e}const Hd=n=>n<256?Hr[n]:Hr[256+(n>>>7)],Wr=(n,e)=>{n.pending_buf[n.pending++]=e&255,n.pending_buf[n.pending++]=e>>>8&255},$t=(n,e,t)=>{n.bi_valid>Ca-t?(n.bi_buf|=e<<n.bi_valid&65535,Wr(n,n.bi_buf),n.bi_buf=e>>Ca-n.bi_valid,n.bi_valid+=t-Ca):(n.bi_buf|=e<<n.bi_valid&65535,n.bi_valid+=t)},Mn=(n,e,t)=>{$t(n,t[e*2],t[e*2+1])},Vd=(n,e)=>{let t=0;do t|=n&1,n>>>=1,t<<=1;while(--e>0);return t>>>1},Pp=n=>{n.bi_valid===16?(Wr(n,n.bi_buf),n.bi_buf=0,n.bi_valid=0):n.bi_valid>=8&&(n.pending_buf[n.pending++]=n.bi_buf&255,n.bi_buf>>=8,n.bi_valid-=8)},Dp=(n,e)=>{const t=e.dyn_tree,i=e.max_code,r=e.stat_desc.static_tree,s=e.stat_desc.has_stree,a=e.stat_desc.extra_bits,o=e.stat_desc.extra_base,l=e.stat_desc.max_length;let c,f,u,d,h,_,y=0;for(d=0;d<=Ei;d++)n.bl_count[d]=0;for(t[n.heap[n.heap_max]*2+1]=0,c=n.heap_max+1;c<Ud;c++)f=n.heap[c],d=t[t[f*2+1]*2+1]+1,d>l&&(d=l,y++),t[f*2+1]=d,!(f>i)&&(n.bl_count[d]++,h=0,f>=o&&(h=a[f-o]),_=t[f*2],n.opt_len+=_*(d+h),s&&(n.static_len+=_*(r[f*2+1]+h)));if(y!==0){do{for(d=l-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[l]--,y-=2}while(y>0);for(d=l;d!==0;d--)for(f=n.bl_count[d];f!==0;)u=n.heap[--c],!(u>i)&&(t[u*2+1]!==d&&(n.opt_len+=(d-t[u*2+1])*t[u*2],t[u*2+1]=d),f--)}},Wd=(n,e,t)=>{const i=new Array(Ei+1);let r=0,s,a;for(s=1;s<=Ei;s++)r=r+t[s-1]<<1,i[s]=r;for(a=0;a<=e;a++){let o=n[a*2+1];o!==0&&(n[a*2]=Vd(i[o]++,o))}},Ip=()=>{let n,e,t,i,r;const s=new Array(Ei+1);for(t=0,i=0;i<Gc-1;i++)for(Wc[i]=t,n=0;n<1<<Co[i];n++)Vr[t++]=i;for(Vr[t-1]=i,r=0,i=0;i<16;i++)for(ea[i]=r,n=0;n<1<<Bs[i];n++)Hr[r++]=i;for(r>>=7;i<ar;i++)for(ea[i]=r<<7,n=0;n<1<<Bs[i]-7;n++)Hr[256+r++]=i;for(e=0;e<=Ei;e++)s[e]=0;for(n=0;n<=143;)Bn[n*2+1]=8,n++,s[8]++;for(;n<=255;)Bn[n*2+1]=9,n++,s[9]++;for(;n<=279;)Bn[n*2+1]=7,n++,s[7]++;for(;n<=287;)Bn[n*2+1]=8,n++,s[8]++;for(Wd(Bn,Gr+1,s),n=0;n<ar;n++)Or[n*2+1]=5,Or[n*2]=Vd(n,5);Bd=new Aa(Bn,Co,Jr+1,Gr,Ei),zd=new Aa(Or,Bs,0,ar,Ei),Gd=new Aa(new Array(0),Rp,0,Hc,Ap)},Xd=n=>{let e;for(e=0;e<Gr;e++)n.dyn_ltree[e*2]=0;for(e=0;e<ar;e++)n.dyn_dtree[e*2]=0;for(e=0;e<Hc;e++)n.bl_tree[e*2]=0;n.dyn_ltree[Vc*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},$d=n=>{n.bi_valid>8?Wr(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},Il=(n,e,t,i)=>{const r=e*2,s=t*2;return n[r]<n[s]||n[r]===n[s]&&i[e]<=i[t]},wa=(n,e,t)=>{const i=n.heap[t];let r=t<<1;for(;r<=n.heap_len&&(r<n.heap_len&&Il(e,n.heap[r+1],n.heap[r],n.depth)&&r++,!Il(e,i,n.heap[r],n.depth));)n.heap[t]=n.heap[r],t=r,r<<=1;n.heap[t]=i},Ll=(n,e,t)=>{let i,r,s=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+s++]&255,i+=(n.pending_buf[n.sym_buf+s++]&255)<<8,r=n.pending_buf[n.sym_buf+s++],i===0?Mn(n,r,e):(a=Vr[r],Mn(n,a+Jr+1,e),o=Co[a],o!==0&&(r-=Wc[a],$t(n,r,o)),i--,a=Hd(i),Mn(n,a,t),o=Bs[a],o!==0&&(i-=ea[a],$t(n,i,o)));while(s<n.sym_next);Mn(n,Vc,e)},Ao=(n,e)=>{const t=e.dyn_tree,i=e.stat_desc.static_tree,r=e.stat_desc.has_stree,s=e.stat_desc.elems;let a,o,l=-1,c;for(n.heap_len=0,n.heap_max=Ud,a=0;a<s;a++)t[a*2]!==0?(n.heap[++n.heap_len]=l=a,n.depth[a]=0):t[a*2+1]=0;for(;n.heap_len<2;)c=n.heap[++n.heap_len]=l<2?++l:0,t[c*2]=1,n.depth[c]=0,n.opt_len--,r&&(n.static_len-=i[c*2+1]);for(e.max_code=l,a=n.heap_len>>1;a>=1;a--)wa(n,t,a);c=s;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],wa(n,t,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,t[c*2]=t[a*2]+t[o*2],n.depth[c]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,t[a*2+1]=t[o*2+1]=c,n.heap[1]=c++,wa(n,t,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],Dp(n,e),Wd(t,l,n.bl_count)},Ul=(n,e,t)=>{let i,r=-1,s,a=e[1],o=0,l=7,c=4;for(a===0&&(l=138,c=3),e[(t+1)*2+1]=65535,i=0;i<=t;i++)s=a,a=e[(i+1)*2+1],!(++o<l&&s===a)&&(o<c?n.bl_tree[s*2]+=o:s!==0?(s!==r&&n.bl_tree[s*2]++,n.bl_tree[Nd*2]++):o<=10?n.bl_tree[Fd*2]++:n.bl_tree[Od*2]++,o=0,r=s,a===0?(l=138,c=3):s===a?(l=6,c=3):(l=7,c=4))},Nl=(n,e,t)=>{let i,r=-1,s,a=e[1],o=0,l=7,c=4;for(a===0&&(l=138,c=3),i=0;i<=t;i++)if(s=a,a=e[(i+1)*2+1],!(++o<l&&s===a)){if(o<c)do Mn(n,s,n.bl_tree);while(--o!==0);else s!==0?(s!==r&&(Mn(n,s,n.bl_tree),o--),Mn(n,Nd,n.bl_tree),$t(n,o-3,2)):o<=10?(Mn(n,Fd,n.bl_tree),$t(n,o-3,3)):(Mn(n,Od,n.bl_tree),$t(n,o-11,7));o=0,r=s,a===0?(l=138,c=3):s===a?(l=6,c=3):(l=7,c=4)}},Lp=n=>{let e;for(Ul(n,n.dyn_ltree,n.l_desc.max_code),Ul(n,n.dyn_dtree,n.d_desc.max_code),Ao(n,n.bl_desc),e=Hc-1;e>=3&&n.bl_tree[kd[e]*2+1]===0;e--);return n.opt_len+=3*(e+1)+5+5+4,e},Up=(n,e,t,i)=>{let r;for($t(n,e-257,5),$t(n,t-1,5),$t(n,i-4,4),r=0;r<i;r++)$t(n,n.bl_tree[kd[r]*2+1],3);Nl(n,n.dyn_ltree,e-1),Nl(n,n.dyn_dtree,t-1)},Np=n=>{let e=4093624447,t;for(t=0;t<=31;t++,e>>>=1)if(e&1&&n.dyn_ltree[t*2]!==0)return Pl;if(n.dyn_ltree[18]!==0||n.dyn_ltree[20]!==0||n.dyn_ltree[26]!==0)return Dl;for(t=32;t<Jr;t++)if(n.dyn_ltree[t*2]!==0)return Dl;return Pl};let Fl=!1;const Fp=n=>{Fl||(Ip(),Fl=!0),n.l_desc=new Ra(n.dyn_ltree,Bd),n.d_desc=new Ra(n.dyn_dtree,zd),n.bl_desc=new Ra(n.bl_tree,Gd),n.bi_buf=0,n.bi_valid=0,Xd(n)},Yd=(n,e,t,i)=>{$t(n,(Mp<<1)+(i?1:0),3),$d(n),Wr(n,t),Wr(n,~t),t&&n.pending_buf.set(n.window.subarray(e,e+t),n.pending),n.pending+=t},Op=n=>{$t(n,Ld<<1,3),Mn(n,Vc,Bn),Pp(n)},kp=(n,e,t,i)=>{let r,s,a=0;n.level>0?(n.strm.data_type===yp&&(n.strm.data_type=Np(n)),Ao(n,n.l_desc),Ao(n,n.d_desc),a=Lp(n),r=n.opt_len+3+7>>>3,s=n.static_len+3+7>>>3,s<=r&&(r=s)):r=s=t+5,t+4<=r&&e!==-1?Yd(n,e,t,i):n.strategy===bp||s===r?($t(n,(Ld<<1)+(i?1:0),3),Ll(n,Bn,Or)):($t(n,(Ep<<1)+(i?1:0),3),Up(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),Ll(n,n.dyn_ltree,n.dyn_dtree)),Xd(n),i&&$d(n)},Bp=(n,e,t)=>(n.pending_buf[n.sym_buf+n.sym_next++]=e,n.pending_buf[n.sym_buf+n.sym_next++]=e>>8,n.pending_buf[n.sym_buf+n.sym_next++]=t,e===0?n.dyn_ltree[t*2]++:(n.matches++,e--,n.dyn_ltree[(Vr[t]+Jr+1)*2]++,n.dyn_dtree[Hd(e)*2]++),n.sym_next===n.sym_end);var zp=Fp,Gp=Yd,Hp=kp,Vp=Bp,Wp=Op,Xp={_tr_init:zp,_tr_stored_block:Gp,_tr_flush_block:Hp,_tr_tally:Vp,_tr_align:Wp};const $p=(n,e,t,i)=>{let r=n&65535|0,s=n>>>16&65535|0,a=0;for(;t!==0;){a=t>2e3?2e3:t,t-=a;do r=r+e[i++]|0,s=s+r|0;while(--a);r%=65521,s%=65521}return r|s<<16|0};var Xr=$p;const Yp=()=>{let n,e=[];for(var t=0;t<256;t++){n=t;for(var i=0;i<8;i++)n=n&1?3988292384^n>>>1:n>>>1;e[t]=n}return e},qp=new Uint32Array(Yp()),jp=(n,e,t,i)=>{const r=qp,s=i+t;n^=-1;for(let a=i;a<s;a++)n=n>>>8^r[(n^e[a])&255];return n^-1};var Pt=jp,Pi={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Qr={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:Zp,_tr_stored_block:Ro,_tr_flush_block:Kp,_tr_tally:li,_tr_align:Jp}=Xp,{Z_NO_FLUSH:fi,Z_PARTIAL_FLUSH:Qp,Z_FULL_FLUSH:em,Z_FINISH:an,Z_BLOCK:Ol,Z_OK:Dt,Z_STREAM_END:kl,Z_STREAM_ERROR:Cn,Z_DATA_ERROR:tm,Z_BUF_ERROR:Pa,Z_DEFAULT_COMPRESSION:nm,Z_FILTERED:im,Z_HUFFMAN_ONLY:ls,Z_RLE:rm,Z_FIXED:sm,Z_DEFAULT_STRATEGY:am,Z_UNKNOWN:om,Z_DEFLATED:ma}=Qr,cm=9,lm=15,fm=8,dm=29,um=256,wo=um+1+dm,hm=30,pm=19,mm=2*wo+1,_m=15,We=3,ai=258,An=ai+We+1,gm=32,fr=42,Xc=57,Po=69,Do=73,Io=91,Lo=103,Ti=113,Dr=666,zt=1,xr=2,Di=3,vr=4,xm=3,Ci=(n,e)=>(n.msg=Pi[e],e),Bl=n=>n*2-(n>4?9:0),ri=n=>{let e=n.length;for(;--e>=0;)n[e]=0},vm=n=>{let e,t,i,r=n.w_size;e=n.hash_size,i=e;do t=n.head[--i],n.head[i]=t>=r?t-r:0;while(--e);e=r,i=e;do t=n.prev[--i],n.prev[i]=t>=r?t-r:0;while(--e)};let Sm=(n,e,t)=>(e<<n.hash_shift^t)&n.hash_mask,di=Sm;const Qt=n=>{const e=n.state;let t=e.pending;t>n.avail_out&&(t=n.avail_out),t!==0&&(n.output.set(e.pending_buf.subarray(e.pending_out,e.pending_out+t),n.next_out),n.next_out+=t,e.pending_out+=t,n.total_out+=t,n.avail_out-=t,e.pending-=t,e.pending===0&&(e.pending_out=0))},en=(n,e)=>{Kp(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,e),n.block_start=n.strstart,Qt(n.strm)},Ze=(n,e)=>{n.pending_buf[n.pending++]=e},yr=(n,e)=>{n.pending_buf[n.pending++]=e>>>8&255,n.pending_buf[n.pending++]=e&255},Uo=(n,e,t,i)=>{let r=n.avail_in;return r>i&&(r=i),r===0?0:(n.avail_in-=r,e.set(n.input.subarray(n.next_in,n.next_in+r),t),n.state.wrap===1?n.adler=Xr(n.adler,e,r,t):n.state.wrap===2&&(n.adler=Pt(n.adler,e,r,t)),n.next_in+=r,n.total_in+=r,r)},qd=(n,e)=>{let t=n.max_chain_length,i=n.strstart,r,s,a=n.prev_length,o=n.nice_match;const l=n.strstart>n.w_size-An?n.strstart-(n.w_size-An):0,c=n.window,f=n.w_mask,u=n.prev,d=n.strstart+ai;let h=c[i+a-1],_=c[i+a];n.prev_length>=n.good_match&&(t>>=2),o>n.lookahead&&(o=n.lookahead);do if(r=e,!(c[r+a]!==_||c[r+a-1]!==h||c[r]!==c[i]||c[++r]!==c[i+1])){i+=2,r++;do;while(c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&c[++i]===c[++r]&&i<d);if(s=ai-(d-i),i=d-ai,s>a){if(n.match_start=e,a=s,s>=o)break;h=c[i+a-1],_=c[i+a]}}while((e=u[e&f])>l&&--t!==0);return a<=n.lookahead?a:n.lookahead},dr=n=>{const e=n.w_size;let t,i,r;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=e+(e-An)&&(n.window.set(n.window.subarray(e,e+e-i),0),n.match_start-=e,n.strstart-=e,n.block_start-=e,n.insert>n.strstart&&(n.insert=n.strstart),vm(n),i+=e),n.strm.avail_in===0)break;if(t=Uo(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=t,n.lookahead+n.insert>=We)for(r=n.strstart-n.insert,n.ins_h=n.window[r],n.ins_h=di(n,n.ins_h,n.window[r+1]);n.insert&&(n.ins_h=di(n,n.ins_h,n.window[r+We-1]),n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,n.insert--,!(n.lookahead+n.insert<We)););}while(n.lookahead<An&&n.strm.avail_in!==0)},jd=(n,e)=>{let t=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,r,s,a=0,o=n.strm.avail_in;do{if(i=65535,s=n.bi_valid+42>>3,n.strm.avail_out<s||(s=n.strm.avail_out-s,r=n.strstart-n.block_start,i>r+n.strm.avail_in&&(i=r+n.strm.avail_in),i>s&&(i=s),i<t&&(i===0&&e!==an||e===fi||i!==r+n.strm.avail_in)))break;a=e===an&&i===r+n.strm.avail_in?1:0,Ro(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,Qt(n.strm),r&&(r>i&&(r=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+r),n.strm.next_out),n.strm.next_out+=r,n.strm.avail_out-=r,n.strm.total_out+=r,n.block_start+=r,i-=r),i&&(Uo(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?vr:e!==fi&&e!==an&&n.strm.avail_in===0&&n.strstart===n.block_start?xr:(s=n.window_size-n.strstart,n.strm.avail_in>s&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,s+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),s>n.strm.avail_in&&(s=n.strm.avail_in),s&&(Uo(n.strm,n.window,n.strstart,s),n.strstart+=s,n.insert+=s>n.w_size-n.insert?n.w_size-n.insert:s),n.high_water<n.strstart&&(n.high_water=n.strstart),s=n.bi_valid+42>>3,s=n.pending_buf_size-s>65535?65535:n.pending_buf_size-s,t=s>n.w_size?n.w_size:s,r=n.strstart-n.block_start,(r>=t||(r||e===an)&&e!==fi&&n.strm.avail_in===0&&r<=s)&&(i=r>s?s:r,a=e===an&&n.strm.avail_in===0&&i===r?1:0,Ro(n,n.block_start,i,a),n.block_start+=i,Qt(n.strm)),a?Di:zt)},Da=(n,e)=>{let t,i;for(;;){if(n.lookahead<An){if(dr(n),n.lookahead<An&&e===fi)return zt;if(n.lookahead===0)break}if(t=0,n.lookahead>=We&&(n.ins_h=di(n,n.ins_h,n.window[n.strstart+We-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),t!==0&&n.strstart-t<=n.w_size-An&&(n.match_length=qd(n,t)),n.match_length>=We)if(i=li(n,n.strstart-n.match_start,n.match_length-We),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=We){n.match_length--;do n.strstart++,n.ins_h=di(n,n.ins_h,n.window[n.strstart+We-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart;while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.ins_h=n.window[n.strstart],n.ins_h=di(n,n.ins_h,n.window[n.strstart+1]);else i=li(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(en(n,!1),n.strm.avail_out===0))return zt}return n.insert=n.strstart<We-1?n.strstart:We-1,e===an?(en(n,!0),n.strm.avail_out===0?Di:vr):n.sym_next&&(en(n,!1),n.strm.avail_out===0)?zt:xr},Vi=(n,e)=>{let t,i,r;for(;;){if(n.lookahead<An){if(dr(n),n.lookahead<An&&e===fi)return zt;if(n.lookahead===0)break}if(t=0,n.lookahead>=We&&(n.ins_h=di(n,n.ins_h,n.window[n.strstart+We-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=We-1,t!==0&&n.prev_length<n.max_lazy_match&&n.strstart-t<=n.w_size-An&&(n.match_length=qd(n,t),n.match_length<=5&&(n.strategy===im||n.match_length===We&&n.strstart-n.match_start>4096)&&(n.match_length=We-1)),n.prev_length>=We&&n.match_length<=n.prev_length){r=n.strstart+n.lookahead-We,i=li(n,n.strstart-1-n.prev_match,n.prev_length-We),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=r&&(n.ins_h=di(n,n.ins_h,n.window[n.strstart+We-1]),t=n.prev[n.strstart&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=n.strstart);while(--n.prev_length!==0);if(n.match_available=0,n.match_length=We-1,n.strstart++,i&&(en(n,!1),n.strm.avail_out===0))return zt}else if(n.match_available){if(i=li(n,0,n.window[n.strstart-1]),i&&en(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return zt}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=li(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<We-1?n.strstart:We-1,e===an?(en(n,!0),n.strm.avail_out===0?Di:vr):n.sym_next&&(en(n,!1),n.strm.avail_out===0)?zt:xr},bm=(n,e)=>{let t,i,r,s;const a=n.window;for(;;){if(n.lookahead<=ai){if(dr(n),n.lookahead<=ai&&e===fi)return zt;if(n.lookahead===0)break}if(n.match_length=0,n.lookahead>=We&&n.strstart>0&&(r=n.strstart-1,i=a[r],i===a[++r]&&i===a[++r]&&i===a[++r])){s=n.strstart+ai;do;while(i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&i===a[++r]&&r<s);n.match_length=ai-(s-r),n.match_length>n.lookahead&&(n.match_length=n.lookahead)}if(n.match_length>=We?(t=li(n,1,n.match_length-We),n.lookahead-=n.match_length,n.strstart+=n.match_length,n.match_length=0):(t=li(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++),t&&(en(n,!1),n.strm.avail_out===0))return zt}return n.insert=0,e===an?(en(n,!0),n.strm.avail_out===0?Di:vr):n.sym_next&&(en(n,!1),n.strm.avail_out===0)?zt:xr},ym=(n,e)=>{let t;for(;;){if(n.lookahead===0&&(dr(n),n.lookahead===0)){if(e===fi)return zt;break}if(n.match_length=0,t=li(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++,t&&(en(n,!1),n.strm.avail_out===0))return zt}return n.insert=0,e===an?(en(n,!0),n.strm.avail_out===0?Di:vr):n.sym_next&&(en(n,!1),n.strm.avail_out===0)?zt:xr};function vn(n,e,t,i,r){this.good_length=n,this.max_lazy=e,this.nice_length=t,this.max_chain=i,this.func=r}const Ir=[new vn(0,0,0,0,jd),new vn(4,4,8,4,Da),new vn(4,5,16,8,Da),new vn(4,6,32,32,Da),new vn(4,4,16,16,Vi),new vn(8,16,32,32,Vi),new vn(8,16,128,128,Vi),new vn(8,32,128,256,Vi),new vn(32,128,258,1024,Vi),new vn(32,258,258,4096,Vi)],Mm=n=>{n.window_size=2*n.w_size,ri(n.head),n.max_lazy_match=Ir[n.level].max_lazy,n.good_match=Ir[n.level].good_length,n.nice_match=Ir[n.level].nice_length,n.max_chain_length=Ir[n.level].max_chain,n.strstart=0,n.block_start=0,n.lookahead=0,n.insert=0,n.match_length=n.prev_length=We-1,n.match_available=0,n.ins_h=0};function Em(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ma,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(mm*2),this.dyn_dtree=new Uint16Array((2*hm+1)*2),this.bl_tree=new Uint16Array((2*pm+1)*2),ri(this.dyn_ltree),ri(this.dyn_dtree),ri(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(_m+1),this.heap=new Uint16Array(2*wo+1),ri(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*wo+1),ri(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const es=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.status!==fr&&e.status!==Xc&&e.status!==Po&&e.status!==Do&&e.status!==Io&&e.status!==Lo&&e.status!==Ti&&e.status!==Dr?1:0},Zd=n=>{if(es(n))return Ci(n,Cn);n.total_in=n.total_out=0,n.data_type=om;const e=n.state;return e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap===2?Xc:e.wrap?fr:Ti,n.adler=e.wrap===2?0:1,e.last_flush=-2,Zp(e),Dt},Kd=n=>{const e=Zd(n);return e===Dt&&Mm(n.state),e},Tm=(n,e)=>es(n)||n.state.wrap!==2?Cn:(n.state.gzhead=e,Dt),Jd=(n,e,t,i,r,s)=>{if(!n)return Cn;let a=1;if(e===nm&&(e=6),i<0?(a=0,i=-i):i>15&&(a=2,i-=16),r<1||r>cm||t!==ma||i<8||i>15||e<0||e>9||s<0||s>sm||i===8&&a!==1)return Ci(n,Cn);i===8&&(i=9);const o=new Em;return n.state=o,o.strm=n,o.status=fr,o.wrap=a,o.gzhead=null,o.w_bits=i,o.w_size=1<<o.w_bits,o.w_mask=o.w_size-1,o.hash_bits=r+7,o.hash_size=1<<o.hash_bits,o.hash_mask=o.hash_size-1,o.hash_shift=~~((o.hash_bits+We-1)/We),o.window=new Uint8Array(o.w_size*2),o.head=new Uint16Array(o.hash_size),o.prev=new Uint16Array(o.w_size),o.lit_bufsize=1<<r+6,o.pending_buf_size=o.lit_bufsize*4,o.pending_buf=new Uint8Array(o.pending_buf_size),o.sym_buf=o.lit_bufsize,o.sym_end=(o.lit_bufsize-1)*3,o.level=e,o.strategy=s,o.method=t,Kd(n)},Cm=(n,e)=>Jd(n,e,ma,lm,fm,am),Am=(n,e)=>{if(es(n)||e>Ol||e<0)return n?Ci(n,Cn):Cn;const t=n.state;if(!n.output||n.avail_in!==0&&!n.input||t.status===Dr&&e!==an)return Ci(n,n.avail_out===0?Pa:Cn);const i=t.last_flush;if(t.last_flush=e,t.pending!==0){if(Qt(n),n.avail_out===0)return t.last_flush=-1,Dt}else if(n.avail_in===0&&Bl(e)<=Bl(i)&&e!==an)return Ci(n,Pa);if(t.status===Dr&&n.avail_in!==0)return Ci(n,Pa);if(t.status===fr&&t.wrap===0&&(t.status=Ti),t.status===fr){let r=ma+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=ls||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,r|=s<<6,t.strstart!==0&&(r|=gm),r+=31-r%31,yr(t,r),t.strstart!==0&&(yr(t,n.adler>>>16),yr(t,n.adler&65535)),n.adler=1,t.status=Ti,Qt(n),t.pending!==0)return t.last_flush=-1,Dt}if(t.status===Xc){if(n.adler=0,Ze(t,31),Ze(t,139),Ze(t,8),t.gzhead)Ze(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),Ze(t,t.gzhead.time&255),Ze(t,t.gzhead.time>>8&255),Ze(t,t.gzhead.time>>16&255),Ze(t,t.gzhead.time>>24&255),Ze(t,t.level===9?2:t.strategy>=ls||t.level<2?4:0),Ze(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(Ze(t,t.gzhead.extra.length&255),Ze(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(n.adler=Pt(n.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Po;else if(Ze(t,0),Ze(t,0),Ze(t,0),Ze(t,0),Ze(t,0),Ze(t,t.level===9?2:t.strategy>=ls||t.level<2?4:0),Ze(t,xm),t.status=Ti,Qt(n),t.pending!==0)return t.last_flush=-1,Dt}if(t.status===Po){if(t.gzhead.extra){let r=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let o=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+o),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex+=o,Qt(n),t.pending!==0)return t.last_flush=-1,Dt;r=0,s-=o}let a=new Uint8Array(t.gzhead.extra);t.pending_buf.set(a.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Do}if(t.status===Do){if(t.gzhead.name){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),Qt(n),t.pending!==0)return t.last_flush=-1,Dt;r=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,Ze(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),t.gzindex=0}t.status=Io}if(t.status===Io){if(t.gzhead.comment){let r=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r)),Qt(n),t.pending!==0)return t.last_flush=-1,Dt;r=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,Ze(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>r&&(n.adler=Pt(n.adler,t.pending_buf,t.pending-r,r))}t.status=Lo}if(t.status===Lo){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(Qt(n),t.pending!==0))return t.last_flush=-1,Dt;Ze(t,n.adler&255),Ze(t,n.adler>>8&255),n.adler=0}if(t.status=Ti,Qt(n),t.pending!==0)return t.last_flush=-1,Dt}if(n.avail_in!==0||t.lookahead!==0||e!==fi&&t.status!==Dr){let r=t.level===0?jd(t,e):t.strategy===ls?ym(t,e):t.strategy===rm?bm(t,e):Ir[t.level].func(t,e);if((r===Di||r===vr)&&(t.status=Dr),r===zt||r===Di)return n.avail_out===0&&(t.last_flush=-1),Dt;if(r===xr&&(e===Qp?Jp(t):e!==Ol&&(Ro(t,0,0,!1),e===em&&(ri(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),Qt(n),n.avail_out===0))return t.last_flush=-1,Dt}return e!==an?Dt:t.wrap<=0?kl:(t.wrap===2?(Ze(t,n.adler&255),Ze(t,n.adler>>8&255),Ze(t,n.adler>>16&255),Ze(t,n.adler>>24&255),Ze(t,n.total_in&255),Ze(t,n.total_in>>8&255),Ze(t,n.total_in>>16&255),Ze(t,n.total_in>>24&255)):(yr(t,n.adler>>>16),yr(t,n.adler&65535)),Qt(n),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?Dt:kl)},Rm=n=>{if(es(n))return Cn;const e=n.state.status;return n.state=null,e===Ti?Ci(n,tm):Dt},wm=(n,e)=>{let t=e.length;if(es(n))return Cn;const i=n.state,r=i.wrap;if(r===2||r===1&&i.status!==fr||i.lookahead)return Cn;if(r===1&&(n.adler=Xr(n.adler,e,t,0)),i.wrap=0,t>=i.w_size){r===0&&(ri(i.head),i.strstart=0,i.block_start=0,i.insert=0);let l=new Uint8Array(i.w_size);l.set(e.subarray(t-i.w_size,t),0),e=l,t=i.w_size}const s=n.avail_in,a=n.next_in,o=n.input;for(n.avail_in=t,n.next_in=0,n.input=e,dr(i);i.lookahead>=We;){let l=i.strstart,c=i.lookahead-(We-1);do i.ins_h=di(i,i.ins_h,i.window[l+We-1]),i.prev[l&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=l,l++;while(--c);i.strstart=l,i.lookahead=We-1,dr(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=We-1,i.match_available=0,n.next_in=a,n.input=o,n.avail_in=s,i.wrap=r,Dt};var Pm=Cm,Dm=Jd,Im=Kd,Lm=Zd,Um=Tm,Nm=Am,Fm=Rm,Om=wm,km="pako deflate (from Nodeca project)",kr={deflateInit:Pm,deflateInit2:Dm,deflateReset:Im,deflateResetKeep:Lm,deflateSetHeader:Um,deflate:Nm,deflateEnd:Fm,deflateSetDictionary:Om,deflateInfo:km};const Bm=(n,e)=>Object.prototype.hasOwnProperty.call(n,e);var zm=function(n){const e=Array.prototype.slice.call(arguments,1);for(;e.length;){const t=e.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const i in t)Bm(t,i)&&(n[i]=t[i])}}return n},Gm=n=>{let e=0;for(let i=0,r=n.length;i<r;i++)e+=n[i].length;const t=new Uint8Array(e);for(let i=0,r=0,s=n.length;i<s;i++){let a=n[i];t.set(a,r),r+=a.length}return t},_a={assign:zm,flattenChunks:Gm};let Qd=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Qd=!1}const $r=new Uint8Array(256);for(let n=0;n<256;n++)$r[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;$r[254]=$r[254]=1;var Hm=n=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(n);let e,t,i,r,s,a=n.length,o=0;for(r=0;r<a;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),o+=t<128?1:t<2048?2:t<65536?3:4;for(e=new Uint8Array(o),s=0,r=0;s<o;r++)t=n.charCodeAt(r),(t&64512)===55296&&r+1<a&&(i=n.charCodeAt(r+1),(i&64512)===56320&&(t=65536+(t-55296<<10)+(i-56320),r++)),t<128?e[s++]=t:t<2048?(e[s++]=192|t>>>6,e[s++]=128|t&63):t<65536?(e[s++]=224|t>>>12,e[s++]=128|t>>>6&63,e[s++]=128|t&63):(e[s++]=240|t>>>18,e[s++]=128|t>>>12&63,e[s++]=128|t>>>6&63,e[s++]=128|t&63);return e};const Vm=(n,e)=>{if(e<65534&&n.subarray&&Qd)return String.fromCharCode.apply(null,n.length===e?n:n.subarray(0,e));let t="";for(let i=0;i<e;i++)t+=String.fromCharCode(n[i]);return t};var Wm=(n,e)=>{const t=e||n.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(n.subarray(0,e));let i,r;const s=new Array(t*2);for(r=0,i=0;i<t;){let a=n[i++];if(a<128){s[r++]=a;continue}let o=$r[a];if(o>4){s[r++]=65533,i+=o-1;continue}for(a&=o===2?31:o===3?15:7;o>1&&i<t;)a=a<<6|n[i++]&63,o--;if(o>1){s[r++]=65533;continue}a<65536?s[r++]=a:(a-=65536,s[r++]=55296|a>>10&1023,s[r++]=56320|a&1023)}return Vm(s,r)},Xm=(n,e)=>{e=e||n.length,e>n.length&&(e=n.length);let t=e-1;for(;t>=0&&(n[t]&192)===128;)t--;return t<0||t===0?e:t+$r[n[t]]>e?t:e},Yr={string2buf:Hm,buf2string:Wm,utf8border:Xm};function $m(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var eu=$m;const tu=Object.prototype.toString,{Z_NO_FLUSH:Ym,Z_SYNC_FLUSH:qm,Z_FULL_FLUSH:jm,Z_FINISH:Zm,Z_OK:ta,Z_STREAM_END:Km,Z_DEFAULT_COMPRESSION:Jm,Z_DEFAULT_STRATEGY:Qm,Z_DEFLATED:e_}=Qr;function ts(n){this.options=_a.assign({level:Jm,method:e_,chunkSize:16384,windowBits:15,memLevel:8,strategy:Qm},n||{});let e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new eu,this.strm.avail_out=0;let t=kr.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(t!==ta)throw new Error(Pi[t]);if(e.header&&kr.deflateSetHeader(this.strm,e.header),e.dictionary){let i;if(typeof e.dictionary=="string"?i=Yr.string2buf(e.dictionary):tu.call(e.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(e.dictionary):i=e.dictionary,t=kr.deflateSetDictionary(this.strm,i),t!==ta)throw new Error(Pi[t]);this._dict_set=!0}}ts.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize;let r,s;if(this.ended)return!1;for(e===~~e?s=e:s=e===!0?Zm:Ym,typeof n=="string"?t.input=Yr.string2buf(n):tu.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),(s===qm||s===jm)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(r=kr.deflate(t,s),r===Km)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),r=kr.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===ta;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0};ts.prototype.onData=function(n){this.chunks.push(n)};ts.prototype.onEnd=function(n){n===ta&&(this.result=_a.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function $c(n,e){const t=new ts(e);if(t.push(n,!0),t.err)throw t.msg||Pi[t.err];return t.result}function t_(n,e){return e=e||{},e.raw=!0,$c(n,e)}function n_(n,e){return e=e||{},e.gzip=!0,$c(n,e)}var i_=ts,r_=$c,s_=t_,a_=n_,o_={Deflate:i_,deflate:r_,deflateRaw:s_,gzip:a_};const fs=16209,c_=16191;var l_=function(e,t){let i,r,s,a,o,l,c,f,u,d,h,_,y,m,p,b,C,S,T,M,R,x,A,P;const w=e.state;i=e.next_in,A=e.input,r=i+(e.avail_in-5),s=e.next_out,P=e.output,a=s-(t-e.avail_out),o=s+(e.avail_out-257),l=w.dmax,c=w.wsize,f=w.whave,u=w.wnext,d=w.window,h=w.hold,_=w.bits,y=w.lencode,m=w.distcode,p=(1<<w.lenbits)-1,b=(1<<w.distbits)-1;e:do{_<15&&(h+=A[i++]<<_,_+=8,h+=A[i++]<<_,_+=8),C=y[h&p];t:for(;;){if(S=C>>>24,h>>>=S,_-=S,S=C>>>16&255,S===0)P[s++]=C&65535;else if(S&16){T=C&65535,S&=15,S&&(_<S&&(h+=A[i++]<<_,_+=8),T+=h&(1<<S)-1,h>>>=S,_-=S),_<15&&(h+=A[i++]<<_,_+=8,h+=A[i++]<<_,_+=8),C=m[h&b];n:for(;;){if(S=C>>>24,h>>>=S,_-=S,S=C>>>16&255,S&16){if(M=C&65535,S&=15,_<S&&(h+=A[i++]<<_,_+=8,_<S&&(h+=A[i++]<<_,_+=8)),M+=h&(1<<S)-1,M>l){e.msg="invalid distance too far back",w.mode=fs;break e}if(h>>>=S,_-=S,S=s-a,M>S){if(S=M-S,S>f&&w.sane){e.msg="invalid distance too far back",w.mode=fs;break e}if(R=0,x=d,u===0){if(R+=c-S,S<T){T-=S;do P[s++]=d[R++];while(--S);R=s-M,x=P}}else if(u<S){if(R+=c+u-S,S-=u,S<T){T-=S;do P[s++]=d[R++];while(--S);if(R=0,u<T){S=u,T-=S;do P[s++]=d[R++];while(--S);R=s-M,x=P}}}else if(R+=u-S,S<T){T-=S;do P[s++]=d[R++];while(--S);R=s-M,x=P}for(;T>2;)P[s++]=x[R++],P[s++]=x[R++],P[s++]=x[R++],T-=3;T&&(P[s++]=x[R++],T>1&&(P[s++]=x[R++]))}else{R=s-M;do P[s++]=P[R++],P[s++]=P[R++],P[s++]=P[R++],T-=3;while(T>2);T&&(P[s++]=P[R++],T>1&&(P[s++]=P[R++]))}}else if((S&64)===0){C=m[(C&65535)+(h&(1<<S)-1)];continue n}else{e.msg="invalid distance code",w.mode=fs;break e}break}}else if((S&64)===0){C=y[(C&65535)+(h&(1<<S)-1)];continue t}else if(S&32){w.mode=c_;break e}else{e.msg="invalid literal/length code",w.mode=fs;break e}break}}while(i<r&&s<o);T=_>>3,i-=T,_-=T<<3,h&=(1<<_)-1,e.next_in=i,e.next_out=s,e.avail_in=i<r?5+(r-i):5-(i-r),e.avail_out=s<o?257+(o-s):257-(s-o),w.hold=h,w.bits=_};const Wi=15,zl=852,Gl=592,Hl=0,Ia=1,Vl=2,f_=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),d_=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),u_=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),h_=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),p_=(n,e,t,i,r,s,a,o)=>{const l=o.bits;let c=0,f=0,u=0,d=0,h=0,_=0,y=0,m=0,p=0,b=0,C,S,T,M,R,x=null,A;const P=new Uint16Array(Wi+1),w=new Uint16Array(Wi+1);let U=null,W,X,F;for(c=0;c<=Wi;c++)P[c]=0;for(f=0;f<i;f++)P[e[t+f]]++;for(h=l,d=Wi;d>=1&&P[d]===0;d--);if(h>d&&(h=d),d===0)return r[s++]=1<<24|64<<16|0,r[s++]=1<<24|64<<16|0,o.bits=1,0;for(u=1;u<d&&P[u]===0;u++);for(h<u&&(h=u),m=1,c=1;c<=Wi;c++)if(m<<=1,m-=P[c],m<0)return-1;if(m>0&&(n===Hl||d!==1))return-1;for(w[1]=0,c=1;c<Wi;c++)w[c+1]=w[c]+P[c];for(f=0;f<i;f++)e[t+f]!==0&&(a[w[e[t+f]]++]=f);if(n===Hl?(x=U=a,A=20):n===Ia?(x=f_,U=d_,A=257):(x=u_,U=h_,A=0),b=0,f=0,c=u,R=s,_=h,y=0,T=-1,p=1<<h,M=p-1,n===Ia&&p>zl||n===Vl&&p>Gl)return 1;for(;;){W=c-y,a[f]+1<A?(X=0,F=a[f]):a[f]>=A?(X=U[a[f]-A],F=x[a[f]-A]):(X=96,F=0),C=1<<c-y,S=1<<_,u=S;do S-=C,r[R+(b>>y)+S]=W<<24|X<<16|F|0;while(S!==0);for(C=1<<c-1;b&C;)C>>=1;if(C!==0?(b&=C-1,b+=C):b=0,f++,--P[c]===0){if(c===d)break;c=e[t+a[f]]}if(c>h&&(b&M)!==T){for(y===0&&(y=h),R+=u,_=c-y,m=1<<_;_+y<d&&(m-=P[_+y],!(m<=0));)_++,m<<=1;if(p+=1<<_,n===Ia&&p>zl||n===Vl&&p>Gl)return 1;T=b&M,r[T]=h<<24|_<<16|R-s|0}}return b!==0&&(r[R+b]=c-y<<24|64<<16|0),o.bits=h,0};var Br=p_;const m_=0,nu=1,iu=2,{Z_FINISH:Wl,Z_BLOCK:__,Z_TREES:ds,Z_OK:Ii,Z_STREAM_END:g_,Z_NEED_DICT:x_,Z_STREAM_ERROR:cn,Z_DATA_ERROR:ru,Z_MEM_ERROR:su,Z_BUF_ERROR:v_,Z_DEFLATED:Xl}=Qr,ga=16180,$l=16181,Yl=16182,ql=16183,jl=16184,Zl=16185,Kl=16186,Jl=16187,Ql=16188,ef=16189,na=16190,Ln=16191,La=16192,tf=16193,Ua=16194,nf=16195,rf=16196,sf=16197,af=16198,us=16199,hs=16200,of=16201,cf=16202,lf=16203,ff=16204,df=16205,Na=16206,uf=16207,hf=16208,ft=16209,au=16210,ou=16211,S_=852,b_=592,y_=15,M_=y_,pf=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24);function E_(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const Fi=n=>{if(!n)return 1;const e=n.state;return!e||e.strm!==n||e.mode<ga||e.mode>ou?1:0},cu=n=>{if(Fi(n))return cn;const e=n.state;return n.total_in=n.total_out=e.total=0,n.msg="",e.wrap&&(n.adler=e.wrap&1),e.mode=ga,e.last=0,e.havedict=0,e.flags=-1,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new Int32Array(S_),e.distcode=e.distdyn=new Int32Array(b_),e.sane=1,e.back=-1,Ii},lu=n=>{if(Fi(n))return cn;const e=n.state;return e.wsize=0,e.whave=0,e.wnext=0,cu(n)},fu=(n,e)=>{let t;if(Fi(n))return cn;const i=n.state;return e<0?(t=0,e=-e):(t=(e>>4)+5,e<48&&(e&=15)),e&&(e<8||e>15)?cn:(i.window!==null&&i.wbits!==e&&(i.window=null),i.wrap=t,i.wbits=e,lu(n))},du=(n,e)=>{if(!n)return cn;const t=new E_;n.state=t,t.strm=n,t.window=null,t.mode=ga;const i=fu(n,e);return i!==Ii&&(n.state=null),i},T_=n=>du(n,M_);let mf=!0,Fa,Oa;const C_=n=>{if(mf){Fa=new Int32Array(512),Oa=new Int32Array(32);let e=0;for(;e<144;)n.lens[e++]=8;for(;e<256;)n.lens[e++]=9;for(;e<280;)n.lens[e++]=7;for(;e<288;)n.lens[e++]=8;for(Br(nu,n.lens,0,288,Fa,0,n.work,{bits:9}),e=0;e<32;)n.lens[e++]=5;Br(iu,n.lens,0,32,Oa,0,n.work,{bits:5}),mf=!1}n.lencode=Fa,n.lenbits=9,n.distcode=Oa,n.distbits=5},uu=(n,e,t,i)=>{let r;const s=n.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),i>=s.wsize?(s.window.set(e.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(r=s.wsize-s.wnext,r>i&&(r=i),s.window.set(e.subarray(t-i,t-i+r),s.wnext),i-=r,i?(s.window.set(e.subarray(t-i,t),0),s.wnext=i,s.whave=s.wsize):(s.wnext+=r,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=r))),0},A_=(n,e)=>{let t,i,r,s,a,o,l,c,f,u,d,h,_,y,m=0,p,b,C,S,T,M,R,x;const A=new Uint8Array(4);let P,w;const U=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Fi(n)||!n.output||!n.input&&n.avail_in!==0)return cn;t=n.state,t.mode===Ln&&(t.mode=La),a=n.next_out,r=n.output,l=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,c=t.hold,f=t.bits,u=o,d=l,x=Ii;e:for(;;)switch(t.mode){case ga:if(t.wrap===0){t.mode=La;break}for(;f<16;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}if(t.wrap&2&&c===35615){t.wbits===0&&(t.wbits=15),t.check=0,A[0]=c&255,A[1]=c>>>8&255,t.check=Pt(t.check,A,2,0),c=0,f=0,t.mode=$l;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((c&255)<<8)+(c>>8))%31){n.msg="incorrect header check",t.mode=ft;break}if((c&15)!==Xl){n.msg="unknown compression method",t.mode=ft;break}if(c>>>=4,f-=4,R=(c&15)+8,t.wbits===0&&(t.wbits=R),R>15||R>t.wbits){n.msg="invalid window size",t.mode=ft;break}t.dmax=1<<t.wbits,t.flags=0,n.adler=t.check=1,t.mode=c&512?ef:Ln,c=0,f=0;break;case $l:for(;f<16;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}if(t.flags=c,(t.flags&255)!==Xl){n.msg="unknown compression method",t.mode=ft;break}if(t.flags&57344){n.msg="unknown header flags set",t.mode=ft;break}t.head&&(t.head.text=c>>8&1),t.flags&512&&t.wrap&4&&(A[0]=c&255,A[1]=c>>>8&255,t.check=Pt(t.check,A,2,0)),c=0,f=0,t.mode=Yl;case Yl:for(;f<32;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}t.head&&(t.head.time=c),t.flags&512&&t.wrap&4&&(A[0]=c&255,A[1]=c>>>8&255,A[2]=c>>>16&255,A[3]=c>>>24&255,t.check=Pt(t.check,A,4,0)),c=0,f=0,t.mode=ql;case ql:for(;f<16;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}t.head&&(t.head.xflags=c&255,t.head.os=c>>8),t.flags&512&&t.wrap&4&&(A[0]=c&255,A[1]=c>>>8&255,t.check=Pt(t.check,A,2,0)),c=0,f=0,t.mode=jl;case jl:if(t.flags&1024){for(;f<16;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}t.length=c,t.head&&(t.head.extra_len=c),t.flags&512&&t.wrap&4&&(A[0]=c&255,A[1]=c>>>8&255,t.check=Pt(t.check,A,2,0)),c=0,f=0}else t.head&&(t.head.extra=null);t.mode=Zl;case Zl:if(t.flags&1024&&(h=t.length,h>o&&(h=o),h&&(t.head&&(R=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(i.subarray(s,s+h),R)),t.flags&512&&t.wrap&4&&(t.check=Pt(t.check,i,h,s)),o-=h,s+=h,t.length-=h),t.length))break e;t.length=0,t.mode=Kl;case Kl:if(t.flags&2048){if(o===0)break e;h=0;do R=i[s+h++],t.head&&R&&t.length<65536&&(t.head.name+=String.fromCharCode(R));while(R&&h<o);if(t.flags&512&&t.wrap&4&&(t.check=Pt(t.check,i,h,s)),o-=h,s+=h,R)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=Jl;case Jl:if(t.flags&4096){if(o===0)break e;h=0;do R=i[s+h++],t.head&&R&&t.length<65536&&(t.head.comment+=String.fromCharCode(R));while(R&&h<o);if(t.flags&512&&t.wrap&4&&(t.check=Pt(t.check,i,h,s)),o-=h,s+=h,R)break e}else t.head&&(t.head.comment=null);t.mode=Ql;case Ql:if(t.flags&512){for(;f<16;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}if(t.wrap&4&&c!==(t.check&65535)){n.msg="header crc mismatch",t.mode=ft;break}c=0,f=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),n.adler=t.check=0,t.mode=Ln;break;case ef:for(;f<32;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}n.adler=t.check=pf(c),c=0,f=0,t.mode=na;case na:if(t.havedict===0)return n.next_out=a,n.avail_out=l,n.next_in=s,n.avail_in=o,t.hold=c,t.bits=f,x_;n.adler=t.check=1,t.mode=Ln;case Ln:if(e===__||e===ds)break e;case La:if(t.last){c>>>=f&7,f-=f&7,t.mode=Na;break}for(;f<3;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}switch(t.last=c&1,c>>>=1,f-=1,c&3){case 0:t.mode=tf;break;case 1:if(C_(t),t.mode=us,e===ds){c>>>=2,f-=2;break e}break;case 2:t.mode=rf;break;case 3:n.msg="invalid block type",t.mode=ft}c>>>=2,f-=2;break;case tf:for(c>>>=f&7,f-=f&7;f<32;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}if((c&65535)!==(c>>>16^65535)){n.msg="invalid stored block lengths",t.mode=ft;break}if(t.length=c&65535,c=0,f=0,t.mode=Ua,e===ds)break e;case Ua:t.mode=nf;case nf:if(h=t.length,h){if(h>o&&(h=o),h>l&&(h=l),h===0)break e;r.set(i.subarray(s,s+h),a),o-=h,s+=h,l-=h,a+=h,t.length-=h;break}t.mode=Ln;break;case rf:for(;f<14;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}if(t.nlen=(c&31)+257,c>>>=5,f-=5,t.ndist=(c&31)+1,c>>>=5,f-=5,t.ncode=(c&15)+4,c>>>=4,f-=4,t.nlen>286||t.ndist>30){n.msg="too many length or distance symbols",t.mode=ft;break}t.have=0,t.mode=sf;case sf:for(;t.have<t.ncode;){for(;f<3;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}t.lens[U[t.have++]]=c&7,c>>>=3,f-=3}for(;t.have<19;)t.lens[U[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,P={bits:t.lenbits},x=Br(m_,t.lens,0,19,t.lencode,0,t.work,P),t.lenbits=P.bits,x){n.msg="invalid code lengths set",t.mode=ft;break}t.have=0,t.mode=af;case af:for(;t.have<t.nlen+t.ndist;){for(;m=t.lencode[c&(1<<t.lenbits)-1],p=m>>>24,b=m>>>16&255,C=m&65535,!(p<=f);){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}if(C<16)c>>>=p,f-=p,t.lens[t.have++]=C;else{if(C===16){for(w=p+2;f<w;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}if(c>>>=p,f-=p,t.have===0){n.msg="invalid bit length repeat",t.mode=ft;break}R=t.lens[t.have-1],h=3+(c&3),c>>>=2,f-=2}else if(C===17){for(w=p+3;f<w;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}c>>>=p,f-=p,R=0,h=3+(c&7),c>>>=3,f-=3}else{for(w=p+7;f<w;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}c>>>=p,f-=p,R=0,h=11+(c&127),c>>>=7,f-=7}if(t.have+h>t.nlen+t.ndist){n.msg="invalid bit length repeat",t.mode=ft;break}for(;h--;)t.lens[t.have++]=R}}if(t.mode===ft)break;if(t.lens[256]===0){n.msg="invalid code -- missing end-of-block",t.mode=ft;break}if(t.lenbits=9,P={bits:t.lenbits},x=Br(nu,t.lens,0,t.nlen,t.lencode,0,t.work,P),t.lenbits=P.bits,x){n.msg="invalid literal/lengths set",t.mode=ft;break}if(t.distbits=6,t.distcode=t.distdyn,P={bits:t.distbits},x=Br(iu,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,P),t.distbits=P.bits,x){n.msg="invalid distances set",t.mode=ft;break}if(t.mode=us,e===ds)break e;case us:t.mode=hs;case hs:if(o>=6&&l>=258){n.next_out=a,n.avail_out=l,n.next_in=s,n.avail_in=o,t.hold=c,t.bits=f,l_(n,d),a=n.next_out,r=n.output,l=n.avail_out,s=n.next_in,i=n.input,o=n.avail_in,c=t.hold,f=t.bits,t.mode===Ln&&(t.back=-1);break}for(t.back=0;m=t.lencode[c&(1<<t.lenbits)-1],p=m>>>24,b=m>>>16&255,C=m&65535,!(p<=f);){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}if(b&&(b&240)===0){for(S=p,T=b,M=C;m=t.lencode[M+((c&(1<<S+T)-1)>>S)],p=m>>>24,b=m>>>16&255,C=m&65535,!(S+p<=f);){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}c>>>=S,f-=S,t.back+=S}if(c>>>=p,f-=p,t.back+=p,t.length=C,b===0){t.mode=df;break}if(b&32){t.back=-1,t.mode=Ln;break}if(b&64){n.msg="invalid literal/length code",t.mode=ft;break}t.extra=b&15,t.mode=of;case of:if(t.extra){for(w=t.extra;f<w;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}t.length+=c&(1<<t.extra)-1,c>>>=t.extra,f-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=cf;case cf:for(;m=t.distcode[c&(1<<t.distbits)-1],p=m>>>24,b=m>>>16&255,C=m&65535,!(p<=f);){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}if((b&240)===0){for(S=p,T=b,M=C;m=t.distcode[M+((c&(1<<S+T)-1)>>S)],p=m>>>24,b=m>>>16&255,C=m&65535,!(S+p<=f);){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}c>>>=S,f-=S,t.back+=S}if(c>>>=p,f-=p,t.back+=p,b&64){n.msg="invalid distance code",t.mode=ft;break}t.offset=C,t.extra=b&15,t.mode=lf;case lf:if(t.extra){for(w=t.extra;f<w;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}t.offset+=c&(1<<t.extra)-1,c>>>=t.extra,f-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){n.msg="invalid distance too far back",t.mode=ft;break}t.mode=ff;case ff:if(l===0)break e;if(h=d-l,t.offset>h){if(h=t.offset-h,h>t.whave&&t.sane){n.msg="invalid distance too far back",t.mode=ft;break}h>t.wnext?(h-=t.wnext,_=t.wsize-h):_=t.wnext-h,h>t.length&&(h=t.length),y=t.window}else y=r,_=a-t.offset,h=t.length;h>l&&(h=l),l-=h,t.length-=h;do r[a++]=y[_++];while(--h);t.length===0&&(t.mode=hs);break;case df:if(l===0)break e;r[a++]=t.length,l--,t.mode=hs;break;case Na:if(t.wrap){for(;f<32;){if(o===0)break e;o--,c|=i[s++]<<f,f+=8}if(d-=l,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Pt(t.check,r,d,a-d):Xr(t.check,r,d,a-d)),d=l,t.wrap&4&&(t.flags?c:pf(c))!==t.check){n.msg="incorrect data check",t.mode=ft;break}c=0,f=0}t.mode=uf;case uf:if(t.wrap&&t.flags){for(;f<32;){if(o===0)break e;o--,c+=i[s++]<<f,f+=8}if(t.wrap&4&&c!==(t.total&4294967295)){n.msg="incorrect length check",t.mode=ft;break}c=0,f=0}t.mode=hf;case hf:x=g_;break e;case ft:x=ru;break e;case au:return su;case ou:default:return cn}return n.next_out=a,n.avail_out=l,n.next_in=s,n.avail_in=o,t.hold=c,t.bits=f,(t.wsize||d!==n.avail_out&&t.mode<ft&&(t.mode<Na||e!==Wl))&&uu(n,n.output,n.next_out,d-n.avail_out),u-=n.avail_in,d-=n.avail_out,n.total_in+=u,n.total_out+=d,t.total+=d,t.wrap&4&&d&&(n.adler=t.check=t.flags?Pt(t.check,r,d,n.next_out-d):Xr(t.check,r,d,n.next_out-d)),n.data_type=t.bits+(t.last?64:0)+(t.mode===Ln?128:0)+(t.mode===us||t.mode===Ua?256:0),(u===0&&d===0||e===Wl)&&x===Ii&&(x=v_),x},R_=n=>{if(Fi(n))return cn;let e=n.state;return e.window&&(e.window=null),n.state=null,Ii},w_=(n,e)=>{if(Fi(n))return cn;const t=n.state;return(t.wrap&2)===0?cn:(t.head=e,e.done=!1,Ii)},P_=(n,e)=>{const t=e.length;let i,r,s;return Fi(n)||(i=n.state,i.wrap!==0&&i.mode!==na)?cn:i.mode===na&&(r=1,r=Xr(r,e,t,0),r!==i.check)?ru:(s=uu(n,e,t,t),s?(i.mode=au,su):(i.havedict=1,Ii))};var D_=lu,I_=fu,L_=cu,U_=T_,N_=du,F_=A_,O_=R_,k_=w_,B_=P_,z_="pako inflate (from Nodeca project)",zn={inflateReset:D_,inflateReset2:I_,inflateResetKeep:L_,inflateInit:U_,inflateInit2:N_,inflate:F_,inflateEnd:O_,inflateGetHeader:k_,inflateSetDictionary:B_,inflateInfo:z_};function G_(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var H_=G_;const hu=Object.prototype.toString,{Z_NO_FLUSH:V_,Z_FINISH:W_,Z_OK:qr,Z_STREAM_END:ka,Z_NEED_DICT:Ba,Z_STREAM_ERROR:X_,Z_DATA_ERROR:_f,Z_MEM_ERROR:$_}=Qr;function ns(n){this.options=_a.assign({chunkSize:1024*64,windowBits:15,to:""},n||{});const e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,e.windowBits===0&&(e.windowBits=-15)),e.windowBits>=0&&e.windowBits<16&&!(n&&n.windowBits)&&(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&(e.windowBits&15)===0&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new eu,this.strm.avail_out=0;let t=zn.inflateInit2(this.strm,e.windowBits);if(t!==qr)throw new Error(Pi[t]);if(this.header=new H_,zn.inflateGetHeader(this.strm,this.header),e.dictionary&&(typeof e.dictionary=="string"?e.dictionary=Yr.string2buf(e.dictionary):hu.call(e.dictionary)==="[object ArrayBuffer]"&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(t=zn.inflateSetDictionary(this.strm,e.dictionary),t!==qr)))throw new Error(Pi[t])}ns.prototype.push=function(n,e){const t=this.strm,i=this.options.chunkSize,r=this.options.dictionary;let s,a,o;if(this.ended)return!1;for(e===~~e?a=e:a=e===!0?W_:V_,hu.call(n)==="[object ArrayBuffer]"?t.input=new Uint8Array(n):t.input=n,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(i),t.next_out=0,t.avail_out=i),s=zn.inflate(t,a),s===Ba&&r&&(s=zn.inflateSetDictionary(t,r),s===qr?s=zn.inflate(t,a):s===_f&&(s=Ba));t.avail_in>0&&s===ka&&t.state.wrap>0&&n[t.next_in]!==0;)zn.inflateReset(t),s=zn.inflate(t,a);switch(s){case X_:case _f:case Ba:case $_:return this.onEnd(s),this.ended=!0,!1}if(o=t.avail_out,t.next_out&&(t.avail_out===0||s===ka))if(this.options.to==="string"){let l=Yr.utf8border(t.output,t.next_out),c=t.next_out-l,f=Yr.buf2string(t.output,l);t.next_out=c,t.avail_out=i-c,c&&t.output.set(t.output.subarray(l,l+c),0),this.onData(f)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(s===qr&&o===0)){if(s===ka)return s=zn.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0)break}}return!0};ns.prototype.onData=function(n){this.chunks.push(n)};ns.prototype.onEnd=function(n){n===qr&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=_a.flattenChunks(this.chunks)),this.chunks=[],this.err=n,this.msg=this.strm.msg};function Yc(n,e){const t=new ns(e);if(t.push(n),t.err)throw t.msg||Pi[t.err];return t.result}function Y_(n,e){return e=e||{},e.raw=!0,Yc(n,e)}var q_=ns,j_=Yc,Z_=Y_,K_=Yc,J_={Inflate:q_,inflate:j_,inflateRaw:Z_,ungzip:K_};const{Deflate:Q_,deflate:eg,deflateRaw:tg,gzip:ng}=o_,{Inflate:ig,inflate:rg,inflateRaw:sg,ungzip:ag}=J_;var og=Q_,cg=eg,lg=tg,fg=ng,dg=ig,ug=rg,hg=sg,pg=ag,mg=Qr,pu={Deflate:og,deflate:cg,deflateRaw:lg,gzip:fg,Inflate:dg,inflate:ug,inflateRaw:hg,ungzip:pg,constants:mg};function _g(n,e,t="application/octet-stream"){const i=URL.createObjectURL(n),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(i)}async function mu(){const n=new Uint8Array(32);return window.crypto.getRandomValues(n),n}function gg(n){return n.byteLength>=16&&n.byteLength<=128}const No={ed25519:{identifier:"ed25519",generate:{name:"Ed25519"},import:{name:"Ed25519"},sign:{name:"Ed25519"}},rsaPss:{identifier:"rsa-pss",generate:{name:"RSA-PSS",modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},import:{name:"RSA-PSS",hash:"SHA-256"},sign:{name:"RSA-PSS",saltLength:32}}};let ia=No.rsaPss;function xg(){return window.crypto&&window.crypto.subtle&&"generateKey"in window.crypto.subtle}async function vg(){try{await window.crypto.subtle.generateKey(No.ed25519.generate,!0,["sign","verify"]),ia=No.ed25519,console.log("Switched to Ed25519 for cryptographic operations.")}catch{console.warn("Ed25519 not supported.")}}async function Sg(){return await window.crypto.subtle.generateKey(ia.generate,!0,["sign","verify"])}async function bg(n){const e=await window.crypto.subtle.exportKey("spki",n),t=btoa(String.fromCharCode(...new Uint8Array(e))),i=`-----BEGIN PUBLIC KEY-----
`,r=`
-----END PUBLIC KEY-----`,s=t.match(/.{1,64}/g).join(`
`);return i+s+r}async function qc(n){const e=yg();return await jc(n,e)}async function jc(n,e){const t=new Uint8Array(await window.crypto.subtle.exportKey("spki",n.publicKey)),i=Eg(t,e),r=await window.crypto.subtle.digest("SHA-256",i),s=await window.crypto.subtle.sign(ia.sign,n.privateKey,r),a="sha256",o=wi(new Uint8Array(r)),l=wi(e),c=ia.identifier,f=wi(new Uint8Array(s));return[a,o,l,c,f].join(".")}function yg(){const n=Math.floor(Date.now()/1e3);return Mg(BigInt(n))}function Mg(n){const e=new ArrayBuffer(8);return new DataView(e).setBigUint64(0,n,!0),new Uint8Array(e)}function Eg(...n){const e=n.reduce((r,s)=>r+s.length,0),t=new Uint8Array(e);let i=0;for(const r of n)t.set(r,i),i+=r.length;return t}const Tg="2.3",_u=["stun:stun.l.google.com:19302"];async function Cg({signaling:n,stunServers:e,fileDtoList:t,fileMap:i,targetId:r,signingKey:s,pin:a,onPin:o,onFilesSkip:l,onFileProgress:c}){console.log("Sending to target:",r),console.log("Sending files:",t);const f=await gu(e),u=f.createDataChannel("data");u.binaryType="arraybuffer";const d=xu(u),h=new Promise(k=>{u.onopen=()=>k()});console.log("Creating offer...");const _=await f.createOffer();await f.setLocalDescription(_),await yu(f);const y=f.localDescription.sdp;console.log("Local SDP: ",y);const m=Math.random().toString(36).substring(2,15);n.send({type:"OFFER",sessionId:m,target:r,sdp:vu(y)}),console.log("Waiting for answer...");const p=await n.waitForAnswer(m),b=Fo(p.sdp);console.log("Received answer SDP: ",b),await f.setRemoteDescription({type:"answer",sdp:b}),await h,console.log("Data channel opened. Exchanging nonce...");const C=await mu();u.send(JSON.stringify({nonce:wi(C)}));const S=await Su(d),T=new Uint8Array(C.length+S.length);T.set(C),T.set(S,C.length),console.log("Nonce exchanged. Exchanging token...");const M=await jc(s,T);u.send(JSON.stringify({token:M}));const R=await d.readNext();if(typeof R!="string")throw new Error("Expected string");const x=JSON.parse(R);if(x.status==="INVALID_SIGNATURE"){console.error("Invalid signature");return}let A;if(x.status==="OK")A=x.token;else if(x.status==="PIN_REQUIRED")A=x.token,await bu(d,u,o,!1,k=>{const Z=JSON.parse(k);return Z.status==="PIN_REQUIRED"||Z.status==="TOO_MANY_ATTEMPTS"?Z.status:1});else{console.error("Invalid response");return}if(console.log(`Received token: ${A}`),a){let k="",Z=0;for(;k!==a.pin;){if(Z>=a.maxTries){zs(u,JSON.stringify({status:"TOO_MANY_ATTEMPTS"})),Lr(u),await Oo(u);return}zs(u,JSON.stringify({status:"PIN_REQUIRED"})),Lr(u);const ee=await d.readNext();if(typeof ee!="string")throw new Error("Expected string");k=JSON.parse(ee).pin,Z++}}zs(u,JSON.stringify({status:"OK",files:t})),Lr(u),console.log("Sent file list. Waiting for selection...");let P=await ra(d),w=JSON.parse(P),U;if(w.status==="OK")U=w.files;else if(w.status==="PAIR")if(console.log("Pairing required. Reject..."),u.send(JSON.stringify({status:"PAIR_DECLINED"})),P=await ra(d),w=JSON.parse(P),w.status==="OK")U=w.files;else return;else return;console.log(`Selected files: ${Object.keys(U).length} / ${t.length}`);const W=[];t=t.filter(k=>{const Z=U[k.id];return Z||W.push(k.id),Z}),W.length>0&&l(W);const X=Date.now(),F=t[0];u.send(JSON.stringify({id:F.id,token:U[F.id]}));for(let k=0;k<t.length;k++){const Z=t[k],ee=i[Z.id],le=ee.size;if(console.log(`Sending file: ${Z.fileName}`),await wg(u,ee,ze=>{c({id:Z.id,curr:ze})}),k+1<t.length){const ze=t[k+1],Ke=U[ze.id];u.send(JSON.stringify({id:ze.id,token:Ke}))}else Lr(u);console.log("Waiting for file status...");const Se=await d.readNext();if(typeof Se!="string")throw new Error("Expected string");const Ee=JSON.parse(Se);c({id:Z.id,curr:le,success:Ee.success,error:Ee.error})}const H=t.reduce((k,Z)=>k+Z.size,0);console.log(`Finished in ${Date.now()-X} ms. Speed: ${H*1e3/(Date.now()-X)/(1024*1024)} MB/s`),u.close(),f.close(),console.log("Connection closed")}async function Ag({signaling:n,stunServers:e,offer:t,signingKey:i,pin:r,onPin:s,selectFiles:a,onFileProgress:o}){console.log("Accepting offer from:",t.peer.id),console.log("Remote SDP: ",Fo(t.sdp));const l=await gu(e),c=new Promise(U=>{l.ondatachannel=W=>{U(W.channel)}});await l.setRemoteDescription({type:"offer",sdp:Fo(t.sdp)}),console.log("Creating answer...");const f=await l.createAnswer();await l.setLocalDescription(f),await yu(l);const u=l.localDescription.sdp;console.log("Local SDP: ",u),n.send({type:"ANSWER",sessionId:t.sessionId,target:t.peer.id,sdp:vu(u)}),console.log("Waiting for data channel...");const d=await c;d.binaryType="arraybuffer",console.log("Received data channel");const h=xu(d);await new Promise(U=>{d.onopen=()=>U()}),console.log("Data channel opened. Exchanging nonce...");const _=await Su(h),y=await mu();d.send(JSON.stringify({nonce:wi(y)}));const m=new Uint8Array(y.length+_.length);m.set(_),m.set(y,_.length);const p=await h.readNext();if(typeof p!="string")throw new Error("Expected string");const b=JSON.parse(p);console.log(`Received token: ${b.token}`);const C=await jc(i,m);if(r){let U="",W=0;for(d.send(JSON.stringify({status:"PIN_REQUIRED",token:C}));U!==r.pin;){if(W>=r.maxTries){d.send(JSON.stringify({status:"TOO_MANY_ATTEMPTS"})),await Oo(d);return}W!==0&&d.send(JSON.stringify({status:"PIN_REQUIRED"}));const X=await h.readNext();if(typeof X!="string")throw new Error("Expected string");U=JSON.parse(X).pin,W++}d.send(JSON.stringify({status:"OK"}))}else d.send(JSON.stringify({status:"OK",token:C}));console.log("Waiting for sender PIN status...");let S=await ra(h),T=JSON.parse(S),M;switch(T.status){case"OK":M=T.files;break;case"TOO_MANY_ATTEMPTS":console.error("Too many attempts");return;case"PIN_REQUIRED":M=await bu(h,d,s,!0,U=>{const W=JSON.parse(U);return W.status==="PIN_REQUIRED"||W.status==="TOO_MANY_ATTEMPTS"?W.status:W.files});break}console.log("Received file list:",M);const R=await a(M),x={},A={};for(const U of M)R.includes(U.id)&&(x[U.id]=U,A[U.id]=Math.random().toString());console.log(`Selected files: ${R.length} / ${M.length}`),zs(d,JSON.stringify({status:"OK",files:A})),Lr(d),console.log("Receiving files...");const P=h.createAsyncIterator();let w=null;for await(const U of P.asyncIterator)if(typeof U=="string"){if(w&&(_g(new Blob(w.chunks),x[w.id].fileName),o({id:w.id,curr:w.curr,success:!0}),d.send(JSON.stringify({id:w.id,success:!0})),U.length<=1)){w=null,await Oo(d);break}w={id:JSON.parse(U).id,chunks:[],curr:0}}else{if(!w)throw new Error("Expected file state");w.chunks.push(U),w.curr+=U.byteLength,o({id:w.id,curr:w.curr})}P.releaseLock(),d.close(),l.close()}async function gu(n){const e=new RTCPeerConnection({iceServers:n.length===0?void 0:[{urls:n}]});return e.onicecandidateerror=t=>{console.error("ICE candidate error:",t)},e.oniceconnectionstatechange=()=>{console.log("ICE connection state:",e.iceConnectionState,e.getConfiguration().iceServers?.map(t=>t.urls))},e}function xu(n){const e=new Sp;return n.onmessage=t=>{e.add(t.data)},e}function vu(n){const e=new TextEncoder().encode(n),t=pu.deflate(e);return wi(t)}function Fo(n){const e=Dd(n),t=pu.inflate(e);if(!t)throw new Error("Decompression failed.");return new TextDecoder().decode(t)}async function Su(n){const e=await n.readNext();if(typeof e!="string")throw new Error("Expected string");const t=JSON.parse(e),i=Dd(t.nonce);if(!gg(i))throw new Error("Invalid remote nonce");return i}async function bu(n,e,t,i,r){for(;;){const s=await t();if(!s)throw e.close(),new Error("PIN required");e.send(JSON.stringify({pin:s}));let a;if(i)a=await ra(n);else{const l=await n.readNext();if(typeof l!="string")throw new Error("Expected string");a=l}const o=r(a);if(o&&typeof o!="string")return o;switch(o){case"PIN_REQUIRED":break;case"TOO_MANY_ATTEMPTS":throw new Error("Too many attempts")}}}async function ra(n){let e=n.createAsyncIterator(),t=[];for await(const i of e.asyncIterator){if(typeof i=="string")break;t.push(i)}return e.releaseLock(),Pg(t)}function Lr(n){n.send("0")}const zr=16*1024,Rg=1024*1024;function zs(n,e){const t=new TextEncoder().encode(e);for(let i=0;i<t.length;i+=zr)n.send(t.slice(i,i+zr))}async function wg(n,e,t){const i=e.stream().getReader();let r=new Uint8Array(0),s=0;for(;;){const{done:a,value:o}=await i.read();if(a){r.length>0&&n.send(r);break}const l=new Uint8Array(r.length+o.length);for(l.set(r),l.set(o,r.length),r=l;r.length>=zr;){for(;n.bufferedAmount>Rg;)await new Promise(f=>setTimeout(f,50));const c=r.slice(0,zr);n.send(c),s+=c.length,t(s),r=r.slice(zr)}}}function Pg(n){const e=n.reduce((r,s)=>r+s.byteLength,0),t=new Uint8Array(e);let i=0;return n.forEach(r=>{t.set(new Uint8Array(r),i),i+=r.byteLength}),new TextDecoder().decode(t)}async function Oo(n){for(;n.bufferedAmount>0;)await new Promise(e=>setTimeout(e,50))}async function yu(n){n.iceGatheringState!=="complete"&&await new Promise(e=>{n.onicegatheringstatechange=()=>{n.iceGatheringState==="complete"&&e()}})}class Dg{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(e){this.flush(),this._parts.push(e)}append(e){this._pieces.push(e)}flush(){if(this._pieces.length>0){const e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[]}}toArrayBuffer(){const e=[];for(const t of this._parts)e.push(t);return Ig(e).buffer}}function Ig(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n){const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t.set(s,i),i+=r.byteLength}return t}function Mu(n){return new Lg(n).unpack()}function Eu(n){const e=new Ug,t=e.pack(n);return t instanceof Promise?t.then(()=>e.getBuffer()):e.getBuffer()}class Lg{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return(e^224)-32;let t;if((t=e^160)<=15)return this.unpack_raw(t);if((t=e^176)<=15)return this.unpack_string(t);if((t=e^144)<=15)return this.unpack_array(t);if((t=e^128)<=15)return this.unpack_map(t);switch(e){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return t=this.unpack_uint16(),this.unpack_string(t);case 217:return t=this.unpack_uint32(),this.unpack_string(t);case 218:return t=this.unpack_uint16(),this.unpack_raw(t);case 219:return t=this.unpack_uint32(),this.unpack_raw(t);case 220:return t=this.unpack_uint16(),this.unpack_array(t);case 221:return t=this.unpack_uint32(),this.unpack_array(t);case 222:return t=this.unpack_uint16(),this.unpack_map(t);case 223:return t=this.unpack_uint32(),this.unpack_map(t)}}unpack_uint8(){const e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){const e=this.read(2),t=(e[0]&255)*256+(e[1]&255);return this.index+=2,t}unpack_uint32(){const e=this.read(4),t=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,t}unpack_uint64(){const e=this.read(8),t=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,t}unpack_int8(){const e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){const e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){const e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){const e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);const t=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,t}unpack_string(e){const t=this.read(e);let i=0,r="",s,a;for(;i<e;)s=t[i],s<160?(a=s,i++):(s^192)<32?(a=(s&31)<<6|t[i+1]&63,i+=2):(s^224)<16?(a=(s&15)<<12|(t[i+1]&63)<<6|t[i+2]&63,i+=3):(a=(s&7)<<18|(t[i+1]&63)<<12|(t[i+2]&63)<<6|t[i+3]&63,i+=4),r+=String.fromCodePoint(a);return this.index+=e,r}unpack_array(e){const t=new Array(e);for(let i=0;i<e;i++)t[i]=this.unpack();return t}unpack_map(e){const t={};for(let i=0;i<e;i++){const r=this.unpack();t[r]=this.unpack()}return t}unpack_float(){const e=this.unpack_uint32(),t=e>>31,i=(e>>23&255)-127,r=e&8388607|8388608;return(t===0?1:-1)*r*2**(i-23)}unpack_double(){const e=this.unpack_uint32(),t=this.unpack_uint32(),i=e>>31,r=(e>>20&2047)-1023,a=(e&1048575|1048576)*2**(r-20)+t*2**(r-52);return(i===0?1:-1)*a}read(e){const t=this.index;if(t+e<=this.length)return this.dataView.subarray(t,t+e);throw new Error("BinaryPackFailure: read index out of range")}}class Ug{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===!0?this._bufferBuilder.append(195):e===!1&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else{const t=e.constructor;if(e instanceof Array){const i=this.pack_array(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){const i=e;this.pack_bin(new Uint8Array(i.buffer,i.byteOffset,i.byteLength))}else if(e instanceof Date)this.pack_string(e.toString());else{if(e instanceof Blob)return e.arrayBuffer().then(i=>{this.pack_bin(new Uint8Array(i)),this._bufferBuilder.flush()});if(t==Object||t.toString().startsWith("class")){const i=this.pack_object(e);if(i instanceof Promise)return i.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${t.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush()}pack_bin(e){const t=e.length;if(t<=15)this.pack_uint8(160+t);else if(t<=65535)this._bufferBuilder.append(218),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(t);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e)}pack_string(e){const t=this._textEncoder.encode(e),i=t.length;if(i<=15)this.pack_uint8(176+i);else if(i<=65535)this._bufferBuilder.append(216),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(t)}pack_array(e){const t=e.length;if(t<=15)this.pack_uint8(144+t);else if(t<=65535)this._bufferBuilder.append(220),this.pack_uint16(t);else if(t<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(t);else throw new Error("Invalid length");const i=r=>{if(r<t){const s=this.pack(e[r]);return s instanceof Promise?s.then(()=>i(r+1)):i(r+1)}};return i(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let t=0;e<0&&(t=1,e=-e);const i=Math.floor(Math.log(e)/Math.LN2),r=e/2**i-1,s=Math.floor(r*2**52),a=2**32,o=t<<31|i+1023<<20|s/a&1048575,l=s%a;this._bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(l)}pack_object(e){const t=Object.keys(e),i=t.length;if(i<=15)this.pack_uint8(128+i);else if(i<=65535)this._bufferBuilder.append(222),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(i);else throw new Error("Invalid length");const r=s=>{if(s<t.length){const a=t[s];if(e.hasOwnProperty(a)){this.pack(a);const o=this.pack(e[a]);if(o instanceof Promise)return o.then(()=>r(s+1))}return r(s+1)}};return r(0)}pack_uint8(e){this._bufferBuilder.append(e)}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255)}pack_uint32(e){const t=e&4294967295;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255)}pack_uint64(e){const t=e/4294967296,i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_int8(e){this._bufferBuilder.append(e&255)}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255)}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255)}pack_int64(e){const t=Math.floor(e/4294967296),i=e%2**32;this._bufferBuilder.append((t&4278190080)>>>24),this._bufferBuilder.append((t&16711680)>>>16),this._bufferBuilder.append((t&65280)>>>8),this._bufferBuilder.append(t&255),this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}constructor(){this._bufferBuilder=new Dg,this._textEncoder=new TextEncoder}}let Tu=!0,Cu=!0;function Ur(n,e,t){const i=n.match(e);return i&&i.length>=t&&parseFloat(i[t],10)}function Oi(n,e,t){if(!n.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Zc("Unable to polyfill events");return}const r=n.RTCPeerConnection.prototype,s=r.addEventListener;r.addEventListener=function(o,l){if(o!==e)return s.apply(this,arguments);const c=f=>{const u=t(f);u&&(l.handleEvent?l.handleEvent(u):l(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(l,c),s.apply(this,[o,c])};const a=r.removeEventListener;r.removeEventListener=function(o,l){if(o!==e||!this._eventMap||!this._eventMap[e])return a.apply(this,arguments);if(!this._eventMap[e].has(l))return a.apply(this,arguments);const c=this._eventMap[e].get(l);return this._eventMap[e].delete(l),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,a.apply(this,[o,c])},Object.defineProperty(r,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function Ng(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(Tu=n,n?"adapter.js logging disabled":"adapter.js logging enabled")}function Fg(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(Cu=!n,"adapter.js deprecation warnings "+(n?"disabled":"enabled"))}function Zc(){if(typeof window=="object"){if(Tu)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function Kc(n,e){Cu&&console.warn(n+" is deprecated, please use "+e+" instead.")}function Og(n){const e={browser:null,version:null};if(typeof n>"u"||!n.navigator||!n.navigator.userAgent)return e.browser="Not a browser.",e;const{navigator:t}=n;if(t.userAgentData&&t.userAgentData.brands){const i=t.userAgentData.brands.find(r=>r.brand==="Chromium");if(i)return{browser:"chrome",version:parseInt(i.version,10)}}if(t.mozGetUserMedia)e.browser="firefox",e.version=parseInt(Ur(t.userAgent,/Firefox\/(\d+)\./,1));else if(t.webkitGetUserMedia||n.isSecureContext===!1&&n.webkitRTCPeerConnection)e.browser="chrome",e.version=parseInt(Ur(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(n.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=parseInt(Ur(t.userAgent,/AppleWebKit\/(\d+)\./,1)),e.supportsUnifiedPlan=n.RTCRtpTransceiver&&"currentDirection"in n.RTCRtpTransceiver.prototype,e._safariVersion=Ur(t.userAgent,/Version\/(\d+(\.?\d+))/,1);else return e.browser="Not a supported browser.",e;return e}function gf(n){return Object.prototype.toString.call(n)==="[object Object]"}function Au(n){return gf(n)?Object.keys(n).reduce(function(e,t){const i=gf(n[t]),r=i?Au(n[t]):n[t],s=i&&!Object.keys(r).length;return r===void 0||s?e:Object.assign(e,{[t]:r})},{}):n}function ko(n,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?ko(n,n.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(r=>{ko(n,n.get(r),t)})}))}function xf(n,e,t){const i=t?"outbound-rtp":"inbound-rtp",r=new Map;if(e===null)return r;const s=[];return n.forEach(a=>{a.type==="track"&&a.trackIdentifier===e.id&&s.push(a)}),s.forEach(a=>{n.forEach(o=>{o.type===i&&o.trackId===a.id&&ko(n,o,r)})}),r}const vf=Zc;function Ru(n,e){const t=n&&n.navigator;if(!t.mediaDevices)return;const i=function(o){if(typeof o!="object"||o.mandatory||o.optional)return o;const l={};return Object.keys(o).forEach(c=>{if(c==="require"||c==="advanced"||c==="mediaSource")return;const f=typeof o[c]=="object"?o[c]:{ideal:o[c]};f.exact!==void 0&&typeof f.exact=="number"&&(f.min=f.max=f.exact);const u=function(d,h){return d?d+h.charAt(0).toUpperCase()+h.slice(1):h==="deviceId"?"sourceId":h};if(f.ideal!==void 0){l.optional=l.optional||[];let d={};typeof f.ideal=="number"?(d[u("min",c)]=f.ideal,l.optional.push(d),d={},d[u("max",c)]=f.ideal,l.optional.push(d)):(d[u("",c)]=f.ideal,l.optional.push(d))}f.exact!==void 0&&typeof f.exact!="number"?(l.mandatory=l.mandatory||{},l.mandatory[u("",c)]=f.exact):["min","max"].forEach(d=>{f[d]!==void 0&&(l.mandatory=l.mandatory||{},l.mandatory[u(d,c)]=f[d])})}),o.advanced&&(l.optional=(l.optional||[]).concat(o.advanced)),l},r=function(o,l){if(e.version>=61)return l(o);if(o=JSON.parse(JSON.stringify(o)),o&&typeof o.audio=="object"){const c=function(f,u,d){u in f&&!(d in f)&&(f[d]=f[u],delete f[u])};o=JSON.parse(JSON.stringify(o)),c(o.audio,"autoGainControl","googAutoGainControl"),c(o.audio,"noiseSuppression","googNoiseSuppression"),o.audio=i(o.audio)}if(o&&typeof o.video=="object"){let c=o.video.facingMode;c=c&&(typeof c=="object"?c:{ideal:c});const f=e.version<66;if(c&&(c.exact==="user"||c.exact==="environment"||c.ideal==="user"||c.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!f)){delete o.video.facingMode;let u;if(c.exact==="environment"||c.ideal==="environment"?u=["back","rear"]:(c.exact==="user"||c.ideal==="user")&&(u=["front"]),u)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(_=>_.kind==="videoinput");let h=d.find(_=>u.some(y=>_.label.toLowerCase().includes(y)));return!h&&d.length&&u.includes("back")&&(h=d[d.length-1]),h&&(o.video.deviceId=c.exact?{exact:h.deviceId}:{ideal:h.deviceId}),o.video=i(o.video),vf("chrome: "+JSON.stringify(o)),l(o)})}o.video=i(o.video)}return vf("chrome: "+JSON.stringify(o)),l(o)},s=function(o){return e.version>=64?o:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[o.name]||o.name,message:o.message,constraint:o.constraint||o.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},a=function(o,l,c){r(o,f=>{t.webkitGetUserMedia(f,l,u=>{c&&c(s(u))})})};if(t.getUserMedia=a.bind(t),t.mediaDevices.getUserMedia){const o=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(l){return r(l,c=>o(c).then(f=>{if(c.audio&&!f.getAudioTracks().length||c.video&&!f.getVideoTracks().length)throw f.getTracks().forEach(u=>{u.stop()}),new DOMException("","NotFoundError");return f},f=>Promise.reject(s(f))))}}}function wu(n){n.MediaStream=n.MediaStream||n.webkitMediaStream}function Pu(n,e){if(!(e.version>102))if(typeof n=="object"&&n.RTCPeerConnection&&!("ontrack"in n.RTCPeerConnection.prototype)){Object.defineProperty(n.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(i){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=i)},enumerable:!0,configurable:!0});const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=r=>{r.stream.addEventListener("addtrack",s=>{let a;n.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(l=>l.track&&l.track.id===s.track.id):a={track:s.track};const o=new Event("track");o.track=s.track,o.receiver=a,o.transceiver={receiver:a},o.streams=[r.stream],this.dispatchEvent(o)}),r.stream.getTracks().forEach(s=>{let a;n.RTCPeerConnection.prototype.getReceivers?a=this.getReceivers().find(l=>l.track&&l.track.id===s.id):a={track:s};const o=new Event("track");o.track=s,o.receiver=a,o.transceiver={receiver:a},o.streams=[r.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else Oi(n,"track",t=>(t.transceiver||Object.defineProperty(t,"transceiver",{value:{receiver:t.receiver}}),t))}function Du(n){if(typeof n=="object"&&n.RTCPeerConnection&&!("getSenders"in n.RTCPeerConnection.prototype)&&"createDTMFSender"in n.RTCPeerConnection.prototype){const e=function(r,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=r.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:r}};if(!n.RTCPeerConnection.prototype.getSenders){n.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const r=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(o,l){let c=r.apply(this,arguments);return c||(c=e(this,o),this._senders.push(c)),c};const s=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(o){s.apply(this,arguments);const l=this._senders.indexOf(o);l!==-1&&this._senders.splice(l,1)}}const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(a=>{this._senders.push(e(this,a))})};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],i.apply(this,[s]),s.getTracks().forEach(a=>{const o=this._senders.find(l=>l.track===a);o&&this._senders.splice(this._senders.indexOf(o),1)})}}else if(typeof n=="object"&&n.RTCPeerConnection&&"getSenders"in n.RTCPeerConnection.prototype&&"createDTMFSender"in n.RTCPeerConnection.prototype&&n.RTCRtpSender&&!("dtmf"in n.RTCRtpSender.prototype)){const e=n.RTCPeerConnection.prototype.getSenders;n.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i},Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Iu(n,e){if(e.version>=67||!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender&&n.RTCRtpReceiver))return;if(!("getStats"in n.RTCRtpSender.prototype)){const i=n.RTCPeerConnection.prototype.getSenders;i&&(n.RTCPeerConnection.prototype.getSenders=function(){const a=i.apply(this,[]);return a.forEach(o=>o._pc=this),a});const r=n.RTCPeerConnection.prototype.addTrack;r&&(n.RTCPeerConnection.prototype.addTrack=function(){const a=r.apply(this,arguments);return a._pc=this,a}),n.RTCRtpSender.prototype.getStats=function(){const a=this;return this._pc.getStats().then(o=>xf(o,a.track,!0))}}if(!("getStats"in n.RTCRtpReceiver.prototype)){const i=n.RTCPeerConnection.prototype.getReceivers;i&&(n.RTCPeerConnection.prototype.getReceivers=function(){const s=i.apply(this,[]);return s.forEach(a=>a._pc=this),s}),Oi(n,"track",r=>(r.receiver._pc=r.srcElement,r)),n.RTCRtpReceiver.prototype.getStats=function(){const s=this;return this._pc.getStats().then(a=>xf(a,s.track,!1))}}if(!("getStats"in n.RTCRtpSender.prototype&&"getStats"in n.RTCRtpReceiver.prototype))return;const t=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof n.MediaStreamTrack){const r=arguments[0];let s,a,o;return this.getSenders().forEach(l=>{l.track===r&&(s?o=!0:s=l)}),this.getReceivers().forEach(l=>(l.track===r&&(a?o=!0:a=l),l.track===r)),o||s&&a?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):s?s.getStats():a?a.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return t.apply(this,arguments)}}function Lu(n){n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(a=>this._shimmedLocalStreams[a][0])};const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(a,o){if(!o)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const l=e.apply(this,arguments);return this._shimmedLocalStreams[o.id]?this._shimmedLocalStreams[o.id].indexOf(l)===-1&&this._shimmedLocalStreams[o.id].push(l):this._shimmedLocalStreams[o.id]=[o,l],l};const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(a){this._shimmedLocalStreams=this._shimmedLocalStreams||{},a.getTracks().forEach(c=>{if(this.getSenders().find(u=>u.track===c))throw new DOMException("Track already exists.","InvalidAccessError")});const o=this.getSenders();t.apply(this,arguments);const l=this.getSenders().filter(c=>o.indexOf(c)===-1);this._shimmedLocalStreams[a.id]=[a].concat(l)};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[a.id],i.apply(this,arguments)};const r=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(a){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},a&&Object.keys(this._shimmedLocalStreams).forEach(o=>{const l=this._shimmedLocalStreams[o].indexOf(a);l!==-1&&this._shimmedLocalStreams[o].splice(l,1),this._shimmedLocalStreams[o].length===1&&delete this._shimmedLocalStreams[o]}),r.apply(this,arguments)}}function Uu(n,e){if(!n.RTCPeerConnection)return;if(n.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Lu(n);const t=n.RTCPeerConnection.prototype.getLocalStreams;n.RTCPeerConnection.prototype.getLocalStreams=function(){const f=t.apply(this);return this._reverseStreams=this._reverseStreams||{},f.map(u=>this._reverseStreams[u.id])};const i=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(f){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},f.getTracks().forEach(u=>{if(this.getSenders().find(h=>h.track===u))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[f.id]){const u=new n.MediaStream(f.getTracks());this._streams[f.id]=u,this._reverseStreams[u.id]=f,f=u}i.apply(this,[f])};const r=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(f){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},r.apply(this,[this._streams[f.id]||f]),delete this._reverseStreams[this._streams[f.id]?this._streams[f.id].id:f.id],delete this._streams[f.id]},n.RTCPeerConnection.prototype.addTrack=function(f,u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(y=>y===f))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(y=>y.track===f))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const _=this._streams[u.id];if(_)_.addTrack(f),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const y=new n.MediaStream([f]);this._streams[u.id]=y,this._reverseStreams[y.id]=u,this.addStream(y)}return this.getSenders().find(y=>y.track===f)};function s(c,f){let u=f.sdp;return Object.keys(c._reverseStreams||[]).forEach(d=>{const h=c._reverseStreams[d],_=c._streams[h.id];u=u.replace(new RegExp(_.id,"g"),h.id)}),new RTCSessionDescription({type:f.type,sdp:u})}function a(c,f){let u=f.sdp;return Object.keys(c._reverseStreams||[]).forEach(d=>{const h=c._reverseStreams[d],_=c._streams[h.id];u=u.replace(new RegExp(h.id,"g"),_.id)}),new RTCSessionDescription({type:f.type,sdp:u})}["createOffer","createAnswer"].forEach(function(c){const f=n.RTCPeerConnection.prototype[c],u={[c](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?f.apply(this,[_=>{const y=s(this,_);d[0].apply(null,[y])},_=>{d[1]&&d[1].apply(null,_)},arguments[2]]):f.apply(this,arguments).then(_=>s(this,_))}};n.RTCPeerConnection.prototype[c]=u[c]});const o=n.RTCPeerConnection.prototype.setLocalDescription;n.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?o.apply(this,arguments):(arguments[0]=a(this,arguments[0]),o.apply(this,arguments))};const l=Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(n.RTCPeerConnection.prototype,"localDescription",{get(){const c=l.get.apply(this);return c.type===""?c:s(this,c)}}),n.RTCPeerConnection.prototype.removeTrack=function(f){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!f._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(f._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(h=>{this._streams[h].getTracks().find(y=>f.track===y)&&(d=this._streams[h])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(f.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Bo(n,e){!n.RTCPeerConnection&&n.webkitRTCPeerConnection&&(n.RTCPeerConnection=n.webkitRTCPeerConnection),n.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]})}function Nu(n,e){e.version>102||Oi(n,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const Sf=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Nu,shimAddTrackRemoveTrack:Uu,shimAddTrackRemoveTrackWithNative:Lu,shimGetSendersWithDtmf:Du,shimGetUserMedia:Ru,shimMediaStream:wu,shimOnTrack:Pu,shimPeerConnection:Bo,shimSenderReceiverGetStats:Iu},Symbol.toStringTag,{value:"Module"}));function Fu(n,e){const t=n&&n.navigator,i=n&&n.MediaStreamTrack;if(t.getUserMedia=function(r,s,a){Kc("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(r).then(s,a)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const r=function(a,o,l){o in a&&!(l in a)&&(a[l]=a[o],delete a[o])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(a){return typeof a=="object"&&typeof a.audio=="object"&&(a=JSON.parse(JSON.stringify(a)),r(a.audio,"autoGainControl","mozAutoGainControl"),r(a.audio,"noiseSuppression","mozNoiseSuppression")),s(a)},i&&i.prototype.getSettings){const a=i.prototype.getSettings;i.prototype.getSettings=function(){const o=a.apply(this,arguments);return r(o,"mozAutoGainControl","autoGainControl"),r(o,"mozNoiseSuppression","noiseSuppression"),o}}if(i&&i.prototype.applyConstraints){const a=i.prototype.applyConstraints;i.prototype.applyConstraints=function(o){return this.kind==="audio"&&typeof o=="object"&&(o=JSON.parse(JSON.stringify(o)),r(o,"autoGainControl","mozAutoGainControl"),r(o,"noiseSuppression","mozNoiseSuppression")),a.apply(this,[o])}}}}function kg(n,e){n.navigator.mediaDevices&&"getDisplayMedia"in n.navigator.mediaDevices||n.navigator.mediaDevices&&(n.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,n.navigator.mediaDevices.getUserMedia(i)})}function Ou(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function zo(n,e){typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||(!n.RTCPeerConnection&&n.mozRTCPeerConnection&&(n.RTCPeerConnection=n.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]}))}function ku(n,e){if(typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection)||e.version>=151)return;const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){const[s,a,o]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):i.apply(this,[s||null]).then(l=>{if(e.version<53&&!a)try{l.forEach(c=>{c.type=t[c.type]||c.type})}catch(c){if(c.name!=="TypeError")throw c;l.forEach((f,u)=>{l.set(u,Object.assign({},f,{type:t[f.type]||f.type}))})}return l}).then(a,o)}}function Bu(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpSender.prototype)return;const e=n.RTCPeerConnection.prototype.getSenders;e&&(n.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(s=>s._pc=this),r});const t=n.RTCPeerConnection.prototype.addTrack;t&&(n.RTCPeerConnection.prototype.addTrack=function(){const r=t.apply(this,arguments);return r._pc=this,r}),n.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function zu(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpReceiver.prototype)return;const e=n.RTCPeerConnection.prototype.getReceivers;e&&(n.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i}),Oi(n,"track",t=>(t.receiver._pc=t.srcElement,t)),n.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Gu(n){!n.RTCPeerConnection||"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){Kc("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function Hu(n){n.DataChannel&&!n.RTCDataChannel&&(n.RTCDataChannel=n.DataChannel)}function Vu(n){if(!(typeof n=="object"&&n.RTCPeerConnection))return;const e=n.RTCPeerConnection.prototype.addTransceiver;e&&(n.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let i=arguments[1]&&arguments[1].sendEncodings;i===void 0&&(i=[]),i=[...i];const r=i.length>0;r&&i.forEach(a=>{if("rid"in a&&!/^[a-z0-9]{0,16}$/i.test(a.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in a&&!(parseFloat(a.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in a&&!(parseFloat(a.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const s=e.apply(this,arguments);if(r){const{sender:a}=s,o=a.getParameters();(!("encodings"in o)||o.encodings.length===1&&Object.keys(o.encodings[0]).length===0)&&(o.encodings=i,a.sendEncodings=i,this.setParametersPromises.push(a.setParameters(o).then(()=>{delete a.sendEncodings}).catch(()=>{delete a.sendEncodings})))}return s})}function Wu(n){if(!(typeof n=="object"&&n.RTCRtpSender))return;const e=n.RTCRtpSender.prototype.getParameters;e&&(n.RTCRtpSender.prototype.getParameters=function(){const i=e.apply(this,arguments);return"encodings"in i||(i.encodings=[].concat(this.sendEncodings||[{}])),i})}function Xu(n){if(!(typeof n=="object"&&n.RTCPeerConnection))return;const e=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}function $u(n){if(!(typeof n=="object"&&n.RTCPeerConnection))return;const e=n.RTCPeerConnection.prototype.createAnswer;n.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}const bf=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Vu,shimCreateAnswer:$u,shimCreateOffer:Xu,shimGetDisplayMedia:kg,shimGetParameters:Wu,shimGetStats:ku,shimGetUserMedia:Fu,shimOnTrack:Ou,shimPeerConnection:zo,shimRTCDataChannel:Hu,shimReceiverGetStats:zu,shimRemoveStream:Gu,shimSenderGetStats:Bu},Symbol.toStringTag,{value:"Module"}));function Yu(n){if(!(typeof n!="object"||!n.RTCPeerConnection)){if("getLocalStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in n.RTCPeerConnection.prototype)){const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(r=>e.call(this,r,i)),i.getVideoTracks().forEach(r=>e.call(this,r,i))},n.RTCPeerConnection.prototype.addTrack=function(i,...r){return r&&r.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const r=t.getTracks();this.getSenders().forEach(s=>{r.includes(s.track)&&this.removeTrack(s)})})}}function qu(n){if(!(typeof n!="object"||!n.RTCPeerConnection)&&("getRemoteStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in n.RTCPeerConnection.prototype))){Object.defineProperty(n.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(r=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(r))return;this._remoteStreams.push(r);const s=new Event("addstream");s.stream=r,this.dispatchEvent(s)})})}});const e=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(s=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(s)>=0)return;i._remoteStreams.push(s);const a=new Event("addstream");a.stream=s,i.dispatchEvent(a)})}),e.apply(i,arguments)}}}function ju(n){if(typeof n!="object"||!n.RTCPeerConnection)return;const e=n.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,r=e.setLocalDescription,s=e.setRemoteDescription,a=e.addIceCandidate;e.createOffer=function(c,f){const u=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[u]);return f?(d.then(c,f),Promise.resolve()):d},e.createAnswer=function(c,f){const u=arguments.length>=2?arguments[2]:arguments[0],d=i.apply(this,[u]);return f?(d.then(c,f),Promise.resolve()):d};let o=function(l,c,f){const u=r.apply(this,[l]);return f?(u.then(c,f),Promise.resolve()):u};e.setLocalDescription=o,o=function(l,c,f){const u=s.apply(this,[l]);return f?(u.then(c,f),Promise.resolve()):u},e.setRemoteDescription=o,o=function(l,c,f){const u=a.apply(this,[l]);return f?(u.then(c,f),Promise.resolve()):u},e.addIceCandidate=o}function Zu(n){const e=n&&n.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=r=>i(Ku(r))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=(function(i,r,s){e.mediaDevices.getUserMedia(i).then(r,s)}).bind(e))}function Ku(n){return n&&n.video!==void 0?Object.assign({},n,{video:Au(n.video)}):n}function Ju(n){if(!n.RTCPeerConnection)return;const e=n.RTCPeerConnection;n.RTCPeerConnection=function(i,r){if(i&&i.iceServers){const s=[];for(let a=0;a<i.iceServers.length;a++){let o=i.iceServers[a];o.urls===void 0&&o.url?(Kc("RTCIceServer.url","RTCIceServer.urls"),o=JSON.parse(JSON.stringify(o)),o.urls=o.url,delete o.url,s.push(o)):s.push(i.iceServers[a])}i.iceServers=s}return new e(i,r)},n.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(n.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function Qu(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function eh(n){const e=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const r=this.getTransceivers().find(a=>a.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):i.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio",{direction:"recvonly"}),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const s=this.getTransceivers().find(a=>a.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):i.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video",{direction:"recvonly"})}return e.apply(this,arguments)}}function th(n){typeof n!="object"||n.AudioContext||(n.AudioContext=n.webkitAudioContext)}const yf=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:th,shimCallbacksAPI:ju,shimConstraints:Ku,shimCreateOfferLegacy:eh,shimGetUserMedia:Zu,shimLocalStreamsAPI:Yu,shimRTCIceServerUrls:Ju,shimRemoteStreamsAPI:qu,shimTrackEventTransceiver:Qu},Symbol.toStringTag,{value:"Module"}));function Bg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var za={exports:{}},Mf;function zg(){return Mf||(Mf=1,(function(n){const e={};e.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(i=>i.trim())},e.splitSections=function(t){return t.split(`
m=`).map((r,s)=>(s>0?"m="+r:r).trim()+`\r
`)},e.getDescription=function(t){const i=e.splitSections(t);return i&&i[0]},e.getMediaSections=function(t){const i=e.splitSections(t);return i.shift(),i},e.matchPrefix=function(t,i){return e.splitLines(t).filter(r=>r.indexOf(i)===0)},e.parseCandidate=function(t){let i;t.indexOf("a=candidate:")===0?i=t.substring(12).split(" "):i=t.substring(10).split(" ");const r={foundation:i[0],component:{1:"rtp",2:"rtcp"}[i[1]]||i[1],protocol:i[2].toLowerCase(),priority:parseInt(i[3],10),ip:i[4],address:i[4],port:parseInt(i[5],10),type:i[7]};for(let s=8;s<i.length;s+=2)switch(i[s]){case"raddr":r.relatedAddress=i[s+1];break;case"rport":r.relatedPort=parseInt(i[s+1],10);break;case"tcptype":r.tcpType=i[s+1];break;case"ufrag":r.ufrag=i[s+1],r.usernameFragment=i[s+1];break;default:r[i[s]]===void 0&&(r[i[s]]=i[s+1]);break}return r},e.writeCandidate=function(t){const i=[];i.push(t.foundation);const r=t.component;r==="rtp"?i.push(1):r==="rtcp"?i.push(2):i.push(r),i.push(t.protocol.toUpperCase()),i.push(t.priority),i.push(t.address||t.ip),i.push(t.port);const s=t.type;return i.push("typ"),i.push(s),s!=="host"&&t.relatedAddress&&t.relatedPort!==void 0&&(i.push("raddr"),i.push(t.relatedAddress),i.push("rport"),i.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(i.push("tcptype"),i.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(i.push("ufrag"),i.push(t.usernameFragment||t.ufrag)),"candidate:"+i.join(" ")},e.parseIceOptions=function(t){return t.substring(14).split(" ")},e.parseRtpMap=function(t){let i=t.substring(9).split(" ");const r={payloadType:parseInt(i.shift(),10)};return i=i[0].split("/"),r.name=i[0],r.clockRate=parseInt(i[1],10),r.channels=i.length===3?parseInt(i[2],10):1,r.numChannels=r.channels,r},e.writeRtpMap=function(t){let i=t.payloadType;t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType);const r=t.channels||t.numChannels||1;return"a=rtpmap:"+i+" "+t.name+"/"+t.clockRate+(r!==1?"/"+r:"")+`\r
`},e.parseExtmap=function(t){const i=t.substring(9).split(" ");return{id:parseInt(i[0],10),direction:i[0].indexOf("/")>0?i[0].split("/")[1]:"sendrecv",uri:i[1],attributes:i.slice(2).join(" ")}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`},e.parseFmtp=function(t){const i={};let r;const s=t.substring(t.indexOf(" ")+1).split(";");for(let a=0;a<s.length;a++)r=s[a].trim().split("="),i[r[0].trim()]=r[1];return i},e.writeFmtp=function(t){let i="",r=t.payloadType;if(t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){const s=[];Object.keys(t.parameters).forEach(a=>{t.parameters[a]!==void 0?s.push(a+"="+t.parameters[a]):s.push(a)}),i+="a=fmtp:"+r+" "+s.join(";")+`\r
`}return i},e.parseRtcpFb=function(t){const i=t.substring(t.indexOf(" ")+1).split(" ");return{type:i.shift(),parameter:i.join(" ")}},e.writeRtcpFb=function(t){let i="",r=t.payloadType;return t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(s=>{i+="a=rtcp-fb:"+r+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),i},e.parseSsrcMedia=function(t){const i=t.indexOf(" "),r={ssrc:parseInt(t.substring(7,i),10)},s=t.indexOf(":",i);return s>-1?(r.attribute=t.substring(i+1,s),r.value=t.substring(s+1)):r.attribute=t.substring(i+1),r},e.parseSsrcGroup=function(t){const i=t.substring(13).split(" ");return{semantics:i.shift(),ssrcs:i.map(r=>parseInt(r,10))}},e.getMid=function(t){const i=e.matchPrefix(t,"a=mid:")[0];if(i)return i.substring(6)},e.parseFingerprint=function(t){const i=t.substring(14).split(" ");return{algorithm:i[0].toLowerCase(),value:i[1].toUpperCase()}},e.getDtlsParameters=function(t,i){return{role:"auto",fingerprints:e.matchPrefix(t+i,"a=fingerprint:").map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,i){let r="a=setup:"+i+`\r
`;return t.fingerprints.forEach(s=>{r+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),r},e.parseCryptoLine=function(t){const i=t.substring(9).split(" ");return{tag:parseInt(i[0],10),cryptoSuite:i[1],keyParams:i[2],sessionParams:i.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;const i=t.substring(7).split("|");return{keyMethod:"inline",keySalt:i[0],lifeTime:i[1],mkiValue:i[2]?i[2].split(":")[0]:void 0,mkiLength:i[2]?i[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,i){return e.matchPrefix(t+i,"a=crypto:").map(e.parseCryptoLine)},e.getIceParameters=function(t,i){const r=e.matchPrefix(t+i,"a=ice-ufrag:")[0],s=e.matchPrefix(t+i,"a=ice-pwd:")[0];return r&&s?{usernameFragment:r.substring(12),password:s.substring(10)}:null},e.writeIceParameters=function(t){let i="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(i+=`a=ice-lite\r
`),i},e.parseRtpParameters=function(t){const i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},s=e.splitLines(t)[0].split(" ");i.profile=s[2];for(let o=3;o<s.length;o++){const l=s[o],c=e.matchPrefix(t,"a=rtpmap:"+l+" ")[0];if(c){const f=e.parseRtpMap(c),u=e.matchPrefix(t,"a=fmtp:"+l+" ");switch(f.parameters=u.length?e.parseFmtp(u[0]):{},f.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+l+" ").map(e.parseRtcpFb),i.codecs.push(f),f.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(f.name.toUpperCase());break}}}e.matchPrefix(t,"a=extmap:").forEach(o=>{i.headerExtensions.push(e.parseExtmap(o))});const a=e.matchPrefix(t,"a=rtcp-fb:* ").map(e.parseRtcpFb);return i.codecs.forEach(o=>{a.forEach(l=>{o.rtcpFeedback.find(f=>f.type===l.type&&f.parameter===l.parameter)||o.rtcpFeedback.push(l)})}),i},e.writeRtpDescription=function(t,i){let r="";r+="m="+t+" ",r+=i.codecs.length>0?"9":"0",r+=" "+(i.profile||"UDP/TLS/RTP/SAVPF")+" ",r+=i.codecs.map(a=>a.preferredPayloadType!==void 0?a.preferredPayloadType:a.payloadType).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(a=>{r+=e.writeRtpMap(a),r+=e.writeFmtp(a),r+=e.writeRtcpFb(a)});let s=0;return i.codecs.forEach(a=>{a.maxptime>s&&(s=a.maxptime)}),s>0&&(r+="a=maxptime:"+s+`\r
`),i.headerExtensions&&i.headerExtensions.forEach(a=>{r+=e.writeExtmap(a)}),r},e.parseRtpEncodingParameters=function(t){const i=[],r=e.parseRtpParameters(t),s=r.fecMechanisms.indexOf("RED")!==-1,a=r.fecMechanisms.indexOf("ULPFEC")!==-1,o=e.matchPrefix(t,"a=ssrc:").map(d=>e.parseSsrcMedia(d)).filter(d=>d.attribute==="cname"),l=o.length>0&&o[0].ssrc;let c;const f=e.matchPrefix(t,"a=ssrc-group:FID").map(d=>d.substring(17).split(" ").map(_=>parseInt(_,10)));f.length>0&&f[0].length>1&&f[0][0]===l&&(c=f[0][1]),r.codecs.forEach(d=>{if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){let h={ssrc:l,codecPayloadType:parseInt(d.parameters.apt,10)};l&&c&&(h.rtx={ssrc:c}),i.push(h),s&&(h=JSON.parse(JSON.stringify(h)),h.fec={ssrc:l,mechanism:a?"red+ulpfec":"red"},i.push(h))}}),i.length===0&&l&&i.push({ssrc:l});let u=e.matchPrefix(t,"b=");return u.length&&(u[0].indexOf("b=TIAS:")===0?u=parseInt(u[0].substring(7),10):u[0].indexOf("b=AS:")===0?u=parseInt(u[0].substring(5),10)*1e3*.95-2e3*8:u=void 0,i.forEach(d=>{d.maxBitrate=u})),i},e.parseRtcpParameters=function(t){const i={},r=e.matchPrefix(t,"a=ssrc:").map(o=>e.parseSsrcMedia(o)).filter(o=>o.attribute==="cname")[0];r&&(i.cname=r.value,i.ssrc=r.ssrc);const s=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=s.length>0,i.compound=s.length===0;const a=e.matchPrefix(t,"a=rtcp-mux");return i.mux=a.length>0,i},e.writeRtcpParameters=function(t){let i="";return t.reducedSize&&(i+=`a=rtcp-rsize\r
`),t.mux&&(i+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(i+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),i},e.parseMsid=function(t){let i;const r=e.matchPrefix(t,"a=msid:");if(r.length===1)return i=r[0].substring(7).split(" "),{stream:i[0],track:i[1]};const s=e.matchPrefix(t,"a=ssrc:").map(a=>e.parseSsrcMedia(a)).filter(a=>a.attribute==="msid");if(s.length>0)return i=s[0].value.split(" "),{stream:i[0],track:i[1]}},e.parseSctpDescription=function(t){const i=e.parseMLine(t),r=e.matchPrefix(t,"a=max-message-size:");let s;r.length>0&&(s=parseInt(r[0].substring(19),10)),isNaN(s)&&(s=65536);const a=e.matchPrefix(t,"a=sctp-port:");if(a.length>0)return{port:parseInt(a[0].substring(12),10),protocol:i.fmt,maxMessageSize:s};const o=e.matchPrefix(t,"a=sctpmap:");if(o.length>0){const l=o[0].substring(10).split(" ");return{port:parseInt(l[0],10),protocol:l[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,i){let r=[];return t.protocol!=="DTLS/SCTP"?r=["m="+t.kind+" 9 "+t.protocol+" "+i.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+i.port+`\r
`]:r=["m="+t.kind+" 9 "+t.protocol+" "+i.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+i.port+" "+i.protocol+` 65535\r
`],i.maxMessageSize!==void 0&&r.push("a=max-message-size:"+i.maxMessageSize+`\r
`),r.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,22)},e.writeSessionBoilerplate=function(t,i,r){let s;const a=i!==void 0?i:2;return t?s=t:s=e.generateSessionId(),`v=0\r
o=`+(r||"thisisadapterortc")+" "+s+" "+a+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.getDirection=function(t,i){const r=e.splitLines(t);for(let s=0;s<r.length;s++)switch(r[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[s].substring(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){return e.splitLines(t)[0].split(" ")[0].substring(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){const r=e.splitLines(t)[0].substring(2).split(" ");return{kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}},e.parseOLine=function(t){const r=e.matchPrefix(t,"o=")[0].substring(2).split(" ");return{username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;const i=e.splitLines(t);for(let r=0;r<i.length;r++)if(i[r].length<2||i[r].charAt(1)!=="=")return!1;return!0},n.exports=e})(za)),za.exports}var nh=zg();const or=Bg(nh),Gg=xp({__proto__:null,default:or},[nh]);function Gs(n){if(!n.RTCIceCandidate||n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)return;const e=n.RTCIceCandidate;n.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substring(2)),i.candidate&&i.candidate.length){const r=new e(i),s=or.parseCandidate(i.candidate);for(const a in s)a in r||Object.defineProperty(r,a,{value:s[a]});return r.toJSON=function(){return{candidate:r.candidate,sdpMid:r.sdpMid,sdpMLineIndex:r.sdpMLineIndex,usernameFragment:r.usernameFragment}},r}return new e(i)},n.RTCIceCandidate.prototype=e.prototype,Oi(n,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new n.RTCIceCandidate(t.candidate),writable:"false"}),t))}function Go(n){!n.RTCIceCandidate||n.RTCIceCandidate&&"relayProtocol"in n.RTCIceCandidate.prototype||Oi(n,"icecandidate",e=>{if(e.candidate){const t=or.parseCandidate(e.candidate.candidate);t.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[t.priority>>24])}return e})}function Hs(n,e){if(!n.RTCPeerConnection)return;"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(o){if(!o||!o.sdp)return!1;const l=or.splitSections(o.sdp);return l.shift(),l.some(c=>{const f=or.parseMLine(c);return f&&f.kind==="application"&&f.protocol.indexOf("SCTP")!==-1})},i=function(o){const l=o.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(l===null||l.length<2)return-1;const c=parseInt(l[1],10);return c!==c?-1:c},r=function(o){let l=65536;return e.browser==="firefox"&&(e.version<57?o===-1?l=16384:l=2147483637:e.version<60?l=e.version===57?65535:65536:l=2147483637),l},s=function(o,l){let c=65536;e.browser==="firefox"&&e.version===57&&(c=65535);const f=or.matchPrefix(o.sdp,"a=max-message-size:");return f.length>0?c=parseInt(f[0].substring(19),10):e.browser==="firefox"&&l!==-1&&(c=2147483637),c},a=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:l}=this.getConfiguration();l==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const l=i(arguments[0]),c=r(l),f=s(arguments[0],l);let u;c===0&&f===0?u=Number.POSITIVE_INFINITY:c===0||f===0?u=Math.max(c,f):u=Math.min(c,f);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return u}}),this._sctp=d}return a.apply(this,arguments)}}function Vs(n,e){if(!(n.RTCPeerConnection&&"createDataChannel"in n.RTCPeerConnection.prototype)||e.browser==="chrome"&&e.version>149||e.browser==="firefox"&&e.version>60)return;function t(r,s){const a=r.send;r.send=function(){const l=arguments[0],c=l.length||l.size||l.byteLength;if(r.readyState==="open"&&s.sctp&&c>s.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+s.sctp.maxMessageSize+" bytes)");return a.apply(r,arguments)}}const i=n.RTCPeerConnection.prototype.createDataChannel;n.RTCPeerConnection.prototype.createDataChannel=function(){const s=i.apply(this,arguments);return t(s,this),s},Oi(n,"datachannel",r=>(t(r.channel,r.target),r))}function Ho(n){if(!n.RTCPeerConnection||"connectionState"in n.RTCPeerConnection.prototype)return;const e=n.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=r=>{const s=r.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const a=new Event("connectionstatechange",r);s.dispatchEvent(a)}return r},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function Vo(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e._safariVersion>=13.1)return;const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(r){if(r&&r.sdp&&r.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=r.sdp.split(`
`).filter(a=>a.trim()!=="a=extmap-allow-mixed").join(`
`);n.RTCSessionDescription&&r instanceof n.RTCSessionDescription?arguments[0]=new n.RTCSessionDescription({type:r.type,sdp:s}):r.sdp=s}return t.apply(this,arguments)}}function Ws(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(n.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function Xs(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.setLocalDescription;!t||t.length===0||(n.RTCPeerConnection.prototype.setLocalDescription=function(){let r=arguments[0]||{};if(typeof r!="object"||r.type&&r.sdp)return t.apply(this,arguments);if(r={type:r.type,sdp:r.sdp},!r.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":r.type="offer";break;default:r.type="answer";break}return r.sdp||r.type!=="offer"&&r.type!=="answer"?t.apply(this,[r]):(r.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(a=>t.apply(this,[a]))})}const Hg=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Vo,shimAddIceCandidateNullOrEmpty:Ws,shimConnectionState:Ho,shimMaxMessageSize:Hs,shimParameterlessSetLocalDescription:Xs,shimRTCIceCandidate:Gs,shimRTCIceCandidateRelayProtocol:Go,shimSendThrowTypeError:Vs},Symbol.toStringTag,{value:"Module"}));function Vg({window:n}={},e={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const t=Zc,i=Og(n),r={browserDetails:i,commonShim:Hg,extractVersion:Ur,disableLog:Ng,disableWarnings:Fg,sdp:Gg};switch(i.browser){case"chrome":if(!Sf||!Bo||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),r;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),r;t("adapter.js shimming chrome."),r.browserShim=Sf,Ws(n,i),Xs(n),Ru(n,i),wu(n),Bo(n,i),Pu(n,i),Uu(n,i),Du(n),Iu(n,i),Nu(n,i),Gs(n),Go(n),Ho(n),Hs(n,i),Vs(n,i),Vo(n,i);break;case"firefox":if(!bf||!zo||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),r;t("adapter.js shimming firefox."),r.browserShim=bf,Ws(n,i),Xs(n),Fu(n,i),zo(n,i),ku(n,i),Ou(n),Gu(n),Bu(n),zu(n),Hu(n),Vu(n),Wu(n),Xu(n),$u(n),Gs(n),Ho(n),Hs(n,i),Vs(n,i);break;case"safari":if(!yf||!e.shimSafari)return t("Safari shim is not included in this adapter release."),r;t("adapter.js shimming safari."),r.browserShim=yf,Ws(n,i),Xs(n),Ju(n),eh(n),ju(n),Yu(n),qu(n),Qu(n),Zu(n),th(n),Gs(n),Go(n),Hs(n,i),Vs(n,i),Vo(n,i);break;default:t("Unsupported browser!");break}return r}const Ef=Vg({window:typeof window>"u"?void 0:window});function ki(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}class ih{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{const t=[],i=e.byteLength,r=Math.ceil(i/this.chunkedMTU);let s=0,a=0;for(;a<i;){const o=Math.min(i,a+this.chunkedMTU),l=e.slice(a,o),c={__peerData:this._dataCount,n:s,data:l,total:r};t.push(c),a=o,s++}return this._dataCount++,t}}}function Wg(n){let e=0;for(const r of n)e+=r.byteLength;const t=new Uint8Array(e);let i=0;for(const r of n)t.set(r,i),i+=r.byteLength;return t}const Ga=Ef.default||Ef,Mr=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const n=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(n)?n==="chrome"?e>=this.minChromeVersion:n==="firefox"?e>=this.minFirefoxVersion:n==="safari"?!this.isIOS&&e>=this.minSafariVersion:!1:!1}getBrowser(){return Ga.browserDetails.browser}getVersion(){return Ga.browserDetails.version||0}isUnifiedPlanSupported(){const n=this.getBrowser(),e=Ga.browserDetails.version||0;if(n==="chrome"&&e<this.minChromeVersion)return!1;if(n==="firefox"&&e>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let t,i=!1;try{t=new RTCPeerConnection,t.addTransceiver("audio"),i=!0}catch{}finally{t&&t.close()}return i}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},Xg=n=>!n||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(n),rh=()=>Math.random().toString(36).slice(2),Tf={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class $g extends ih{noop(){}blobToArrayBuffer(e,t){const i=new FileReader;return i.onload=function(r){r.target&&t(r.target.result)},i.readAsArrayBuffer(e),i}binaryStringToArrayBuffer(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=Tf,this.browser=Mr.getBrowser(),this.browserVersion=Mr.getVersion(),this.pack=Eu,this.unpack=Mu,this.supports=(function(){const t={browser:Mr.isBrowserSupported(),webRTC:Mr.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!t.webRTC)return t;let i;try{i=new RTCPeerConnection(Tf),t.audioVideo=!0;let r;try{r=i.createDataChannel("_PEERJSTEST",{ordered:!0}),t.data=!0,t.reliable=!!r.ordered;try{r.binaryType="blob",t.binaryBlob=!Mr.isIOS}catch{}}catch{}finally{r&&r.close()}}catch{}finally{i&&i.close()}return t})(),this.validateId=Xg,this.randomToken=rh}}const Xt=new $g,Yg="PeerJS: ";class qg{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e}log(...e){this._logLevel>=3&&this._print(3,...e)}warn(...e){this._logLevel>=2&&this._print(2,...e)}error(...e){this._logLevel>=1&&this._print(1,...e)}setLogFunction(e){this._print=e}_print(e,...t){const i=[Yg,...t];for(const r in i)i[r]instanceof Error&&(i[r]="("+i[r].name+") "+i[r].message);e>=3?console.log(...i):e>=2?console.warn("WARNING",...i):e>=1&&console.error("ERROR",...i)}constructor(){this._logLevel=0}}var be=new qg,Jc={},jg=Object.prototype.hasOwnProperty,Ht="~";function jr(){}Object.create&&(jr.prototype=Object.create(null),new jr().__proto__||(Ht=!1));function Zg(n,e,t){this.fn=n,this.context=e,this.once=t||!1}function sh(n,e,t,i,r){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new Zg(t,i||n,r),a=Ht?Ht+e:e;return n._events[a]?n._events[a].fn?n._events[a]=[n._events[a],s]:n._events[a].push(s):(n._events[a]=s,n._eventsCount++),n}function $s(n,e){--n._eventsCount===0?n._events=new jr:delete n._events[e]}function kt(){this._events=new jr,this._eventsCount=0}kt.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)jg.call(t,i)&&e.push(Ht?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};kt.prototype.listeners=function(e){var t=Ht?Ht+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,a=new Array(s);r<s;r++)a[r]=i[r].fn;return a};kt.prototype.listenerCount=function(e){var t=Ht?Ht+e:e,i=this._events[t];return i?i.fn?1:i.length:0};kt.prototype.emit=function(e,t,i,r,s,a){var o=Ht?Ht+e:e;if(!this._events[o])return!1;var l=this._events[o],c=arguments.length,f,u;if(l.fn){switch(l.once&&this.removeListener(e,l.fn,void 0,!0),c){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,t),!0;case 3:return l.fn.call(l.context,t,i),!0;case 4:return l.fn.call(l.context,t,i,r),!0;case 5:return l.fn.call(l.context,t,i,r,s),!0;case 6:return l.fn.call(l.context,t,i,r,s,a),!0}for(u=1,f=new Array(c-1);u<c;u++)f[u-1]=arguments[u];l.fn.apply(l.context,f)}else{var d=l.length,h;for(u=0;u<d;u++)switch(l[u].once&&this.removeListener(e,l[u].fn,void 0,!0),c){case 1:l[u].fn.call(l[u].context);break;case 2:l[u].fn.call(l[u].context,t);break;case 3:l[u].fn.call(l[u].context,t,i);break;case 4:l[u].fn.call(l[u].context,t,i,r);break;default:if(!f)for(h=1,f=new Array(c-1);h<c;h++)f[h-1]=arguments[h];l[u].fn.apply(l[u].context,f)}}return!0};kt.prototype.on=function(e,t,i){return sh(this,e,t,i,!1)};kt.prototype.once=function(e,t,i){return sh(this,e,t,i,!0)};kt.prototype.removeListener=function(e,t,i,r){var s=Ht?Ht+e:e;if(!this._events[s])return this;if(!t)return $s(this,s),this;var a=this._events[s];if(a.fn)a.fn===t&&(!r||a.once)&&(!i||a.context===i)&&$s(this,s);else{for(var o=0,l=[],c=a.length;o<c;o++)(a[o].fn!==t||r&&!a[o].once||i&&a[o].context!==i)&&l.push(a[o]);l.length?this._events[s]=l.length===1?l[0]:l:$s(this,s)}return this};kt.prototype.removeAllListeners=function(e){var t;return e?(t=Ht?Ht+e:e,this._events[t]&&$s(this,t)):(this._events=new jr,this._eventsCount=0),this};kt.prototype.off=kt.prototype.removeListener;kt.prototype.addListener=kt.prototype.on;kt.prefixed=Ht;kt.EventEmitter=kt;Jc=kt;var Bi={};ki(Bi,"ConnectionType",()=>ui);ki(Bi,"PeerErrorType",()=>yt);ki(Bi,"BaseConnectionErrorType",()=>Wo);ki(Bi,"DataConnectionErrorType",()=>Qc);ki(Bi,"SerializationType",()=>xa);ki(Bi,"SocketEventType",()=>oi);ki(Bi,"ServerMessageType",()=>Ft);var ui=(function(n){return n.Data="data",n.Media="media",n})({}),yt=(function(n){return n.BrowserIncompatible="browser-incompatible",n.Disconnected="disconnected",n.InvalidID="invalid-id",n.InvalidKey="invalid-key",n.Network="network",n.PeerUnavailable="peer-unavailable",n.SslUnavailable="ssl-unavailable",n.ServerError="server-error",n.SocketError="socket-error",n.SocketClosed="socket-closed",n.UnavailableID="unavailable-id",n.WebRTC="webrtc",n})({}),Wo=(function(n){return n.NegotiationFailed="negotiation-failed",n.ConnectionClosed="connection-closed",n})({}),Qc=(function(n){return n.NotOpenYet="not-open-yet",n.MessageToBig="message-too-big",n})({}),xa=(function(n){return n.Binary="binary",n.BinaryUTF8="binary-utf8",n.JSON="json",n.None="raw",n})({}),oi=(function(n){return n.Message="message",n.Disconnected="disconnected",n.Error="error",n.Close="close",n})({}),Ft=(function(n){return n.Heartbeat="HEARTBEAT",n.Candidate="CANDIDATE",n.Offer="OFFER",n.Answer="ANSWER",n.Open="OPEN",n.Error="ERROR",n.IdTaken="ID-TAKEN",n.InvalidKey="INVALID-KEY",n.Leave="LEAVE",n.Expire="EXPIRE",n})({});const ah="1.5.5";class Kg extends Jc.EventEmitter{constructor(e,t,i,r,s,a=5e3){super(),this.pingInterval=a,this._disconnected=!0,this._messagesQueue=[];const o=e?"wss://":"ws://";this._baseUrl=o+t+":"+i+r+"peerjs?key="+s}start(e,t){this._id=e;const i=`${this._baseUrl}&id=${e}&token=${t}`;this._socket||!this._disconnected||(this._socket=new WebSocket(i+"&version="+ah),this._disconnected=!1,this._socket.onmessage=r=>{let s;try{s=JSON.parse(r.data),be.log("Server message received:",s)}catch{be.log("Invalid server message",r.data);return}this.emit(oi.Message,s)},this._socket.onclose=r=>{this._disconnected||(be.log("Socket closed.",r),this._cleanup(),this._disconnected=!0,this.emit(oi.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),be.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){be.log("Cannot send heartbeat, because socket closed");return}const e=JSON.stringify({type:Ft.Heartbeat});this._socket.send(e),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const e=[...this._messagesQueue];this._messagesQueue=[];for(const t of e)this.send(t)}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(oi.Error,"Invalid message");return}if(!this._wsOpen())return;const t=JSON.stringify(e);this._socket.send(t)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class oh{constructor(e){this.connection=e}startConnection(e){const t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===ui.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){const i=this.connection,r={ordered:!!e.reliable},s=t.createDataChannel(i.label,r);i._initializeDataChannel(s),this._makeOffer()}else this.handleSDP("OFFER",e.sdp)}_startPeerConnection(){be.log("Creating RTCPeerConnection.");const e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){const t=this.connection.peer,i=this.connection.connectionId,r=this.connection.type,s=this.connection.provider;be.log("Listening for ICE candidates."),e.onicecandidate=a=>{!a.candidate||!a.candidate.candidate||(be.log(`Received ICE candidates for ${t}:`,a.candidate),s.socket.send({type:Ft.Candidate,payload:{candidate:a.candidate,type:r,connectionId:i},dst:t}))},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case"failed":be.log("iceConnectionState is failed, closing connections to "+t),this.connection.emitError(Wo.NegotiationFailed,"Negotiation of connection to "+t+" failed."),this.connection.close();break;case"closed":be.log("iceConnectionState is closed, closing connections to "+t),this.connection.emitError(Wo.ConnectionClosed,"Connection to "+t+" closed."),this.connection.close();break;case"disconnected":be.log("iceConnectionState changed to disconnected on the connection with "+t);break;case"completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState)},be.log("Listening for data channel"),e.ondatachannel=a=>{be.log("Received data channel");const o=a.channel;s.getConnection(t,i)._initializeDataChannel(o)},be.log("Listening for remote stream"),e.ontrack=a=>{be.log("Received remote stream");const o=a.streams[0],l=s.getConnection(t,i);if(l.type===ui.Media){const c=l;this._addStreamToMediaConnection(o,c)}}}cleanup(){be.log("Cleaning up PeerConnection to "+this.connection.peer);const e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};const t=e.signalingState!=="closed";let i=!1;const r=this.connection.dataChannel;r&&(i=!!r.readyState&&r.readyState!=="closed"),(t||i)&&e.close()}async _makeOffer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createOffer(this.connection.options.constraints);be.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),be.log("Set localDescription:",i,`for:${this.connection.peer}`);let r={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===ui.Data){const s=this.connection;r={...r,label:s.label,reliable:s.reliable,serialization:s.serialization}}t.socket.send({type:Ft.Offer,payload:r,dst:this.connection.peer})}catch(r){r!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(yt.WebRTC,r),be.log("Failed to setLocalDescription, ",r))}}catch(i){t.emitError(yt.WebRTC,i),be.log("Failed to createOffer, ",i)}}async _makeAnswer(){const e=this.connection.peerConnection,t=this.connection.provider;try{const i=await e.createAnswer();be.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp);try{await e.setLocalDescription(i),be.log("Set localDescription:",i,`for:${this.connection.peer}`),t.socket.send({type:Ft.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(r){t.emitError(yt.WebRTC,r),be.log("Failed to setLocalDescription, ",r)}}catch(i){t.emitError(yt.WebRTC,i),be.log("Failed to create answer, ",i)}}async handleSDP(e,t){t=new RTCSessionDescription(t);const i=this.connection.peerConnection,r=this.connection.provider;be.log("Setting remote description",t);const s=this;try{await i.setRemoteDescription(t),be.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer()}catch(a){r.emitError(yt.WebRTC,a),be.log("Failed to setRemoteDescription, ",a)}}async handleCandidate(e){be.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),be.log(`Added ICE candidate for:${this.connection.peer}`)}catch(t){this.connection.provider.emitError(yt.WebRTC,t),be.log("Failed to handleCandidate, ",t)}}_addTracksToConnection(e,t){if(be.log(`add tracks from stream ${e.id} to peer connection`),!t.addTrack)return be.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(i=>{t.addTrack(i,e)})}_addStreamToMediaConnection(e,t){be.log(`add stream ${e.id} to media connection ${t.connectionId}`),t.addStream(e)}}class ch extends Jc.EventEmitter{emitError(e,t){be.error("Error:",t),this.emit("error",new Jg(`${e}`,t))}}class Jg extends Error{constructor(e,t){typeof t=="string"?super(t):(super(),Object.assign(this,t)),this.type=e}}class lh extends ch{get open(){return this._open}constructor(e,t,i){super(),this.peer=e,this.provider=t,this.options=i,this._open=!1,this.metadata=i.metadata}}class sa extends lh{static#e=this.ID_PREFIX="mc_";get type(){return ui.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,t,i){super(e,t,i),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||sa.ID_PREFIX+Xt.randomToken(),this._negotiator=new oh(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{be.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{be.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(e){be.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e)}handleMessage(e){const t=e.type,i=e.payload;switch(e.type){case Ft.Answer:this._negotiator.handleSDP(t,i.sdp),this._open=!0;break;case Ft.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:be.warn(`Unrecognized message type:${t} from peer:${this.peer}`);break}}answer(e,t={}){if(this._localStream){be.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,t&&t.sdpTransform&&(this.options.sdpTransform=t.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});const i=this.provider._getMessages(this.connectionId);for(const r of i)this.handleMessage(r);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}}class Qg{constructor(e){this._options=e}_buildRequest(e){const t=this._options.secure?"https":"http",{host:i,port:r,path:s,key:a}=this._options,o=new URL(`${t}://${i}:${r}${s}${a}/${e}`);return o.searchParams.set("ts",`${Date.now()}${Math.random()}`),o.searchParams.set("version",ah),fetch(o.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){be.error("Error retrieving ID",e);let t="";throw this._options.path==="/"&&this._options.host!==Xt.CLOUD_HOST&&(t=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+t)}}async listAllPeers(){try{const e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let t="";throw this._options.host===Xt.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw be.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}}class aa extends lh{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return ui.Data}constructor(e,t,i){super(e,t,i),this.connectionId=this.options.connectionId||aa.ID_PREFIX+rh(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new oh(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{be.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=t=>{be.log(`DC#${this.connectionId} dc onmessage:`,t.data)},this.dataChannel.onclose=()=>{be.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(e,t=!1){if(!this.open){this.emitError(Qc.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,t)}async handleMessage(e){const t=e.payload;switch(e.type){case Ft.Answer:await this._negotiator.handleSDP(e.type,t.sdp);break;case Ft.Candidate:await this._negotiator.handleCandidate(t.candidate);break;default:be.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}}class el extends aa{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",t=>this._handleDataMessage(t))}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length)}_trySend(e){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>aa.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(e)}catch(t){return be.error(`DC#:${this.connectionId} Error when sending:`,t),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Ha extends el{close(e){super.close(e),this._chunkedData={}}constructor(e,t,i){super(e,t,i),this.chunker=new ih,this.serialization=xa.Binary,this._chunkedData={}}_handleDataMessage({data:e}){const t=Mu(e),i=t.__peerData;if(i){if(i.type==="close"){this.close();return}this._handleChunk(t);return}this.emit("data",t)}_handleChunk(e){const t=e.__peerData,i=this._chunkedData[t]||{data:[],count:0,total:e.total};if(i.data[e.n]=new Uint8Array(e.data),i.count++,this._chunkedData[t]=i,i.total===i.count){delete this._chunkedData[t];const r=Wg(i.data);this._handleDataMessage({data:r})}}_send(e,t){const i=Eu(e);if(i instanceof Promise)return this._send_blob(i);if(!t&&i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}async _send_blob(e){const t=await e;if(t.byteLength>this.chunker.chunkedMTU){this._sendChunks(t);return}this._bufferedSend(t)}_sendChunks(e){const t=this.chunker.chunk(e);be.log(`DC#${this.connectionId} Try to send ${t.length} chunks...`);for(const i of t)this.send(i,!0)}}class e0 extends el{_handleDataMessage({data:e}){super.emit("data",e)}_send(e,t){this._bufferedSend(e)}constructor(...e){super(...e),this.serialization=xa.None}}class t0 extends el{_handleDataMessage({data:e}){const t=this.parse(this.decoder.decode(e)),i=t.__peerData;if(i&&i.type==="close"){this.close();return}this.emit("data",t)}_send(e,t){const i=this.encoder.encode(this.stringify(e));if(i.byteLength>=Xt.chunkedMTU){this.emitError(Qc.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(i)}constructor(...e){super(...e),this.serialization=xa.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}class tl extends ch{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const e=Object.create(null);for(const[t,i]of this._connections)e[t]=i;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,t){super(),this._serializers={raw:e0,json:t0,binary:Ha,"binary-utf8":Ha,default:Ha},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let i;if(e&&e.constructor==Object?t=e:e&&(i=e.toString()),t={debug:0,host:Xt.CLOUD_HOST,port:Xt.CLOUD_PORT,path:"/",key:tl.DEFAULT_KEY,token:Xt.randomToken(),config:Xt.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...t},this._options=t,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==Xt.CLOUD_HOST?this._options.secure=Xt.isSecure():this._options.host==Xt.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&be.setLogFunction(this._options.logFunction),be.logLevel=this._options.debug||0,this._api=new Qg(t),this._socket=this._createServerConnection(),!Xt.supports.audioVideo&&!Xt.supports.data){this._delayedAbort(yt.BrowserIncompatible,"The current browser does not support WebRTC");return}if(i&&!Xt.validateId(i)){this._delayedAbort(yt.InvalidID,`ID "${i}" is invalid`);return}i?this._initialize(i):this._api.retrieveId().then(r=>this._initialize(r)).catch(r=>this._abort(yt.ServerError,r))}_createServerConnection(){const e=new Kg(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(oi.Message,t=>{this._handleMessage(t)}),e.on(oi.Error,t=>{this._abort(yt.SocketError,t)}),e.on(oi.Disconnected,()=>{this.disconnected||(this.emitError(yt.Network,"Lost connection to server."),this.disconnect())}),e.on(oi.Close,()=>{this.disconnected||this._abort(yt.SocketClosed,"Underlying socket is already closed.")}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token)}_handleMessage(e){const t=e.type,i=e.payload,r=e.src;switch(t){case Ft.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case Ft.Error:this._abort(yt.ServerError,i.msg);break;case Ft.IdTaken:this._abort(yt.UnavailableID,`ID "${this.id}" is taken`);break;case Ft.InvalidKey:this._abort(yt.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case Ft.Leave:be.log(`Received leave message from ${r}`),this._cleanupPeer(r),this._connections.delete(r);break;case Ft.Expire:this.emitError(yt.PeerUnavailable,`Could not connect to peer ${r}`);break;case Ft.Offer:{const s=i.connectionId;let a=this.getConnection(r,s);if(a&&(a.close(),be.warn(`Offer received for existing Connection ID:${s}`)),i.type===ui.Media){const l=new sa(r,this,{connectionId:s,_payload:i,metadata:i.metadata});a=l,this._addConnection(r,a),this.emit("call",l)}else if(i.type===ui.Data){const l=new this._serializers[i.serialization](r,this,{connectionId:s,_payload:i,metadata:i.metadata,label:i.label,serialization:i.serialization,reliable:i.reliable});a=l,this._addConnection(r,a),this.emit("connection",l)}else{be.warn(`Received malformed connection type:${i.type}`);return}const o=this._getMessages(s);for(const l of o)a.handleMessage(l);break}default:{if(!i){be.warn(`You received a malformed message from ${r} of type ${t}`);return}const s=i.connectionId,a=this.getConnection(r,s);a&&a.peerConnection?a.handleMessage(e):s?this._storeMessage(s,e):be.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,t){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(t)}_getMessages(e){const t=this._lostMessages.get(e);return t?(this._lostMessages.delete(e),t):[]}connect(e,t={}){if(t={serialization:"default",...t},this.disconnected){be.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(yt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const i=new this._serializers[t.serialization](e,this,t);return this._addConnection(e,i),i}call(e,t,i={}){if(this.disconnected){be.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(yt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!t){be.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const r=new sa(e,this,{...i,_stream:t});return this._addConnection(e,r),r}_addConnection(e,t){be.log(`add connection ${t.type}:${t.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(t)}_removeConnection(e){const t=this._connections.get(e.peer);if(t){const i=t.indexOf(e);i!==-1&&t.splice(i,1)}this._lostMessages.delete(e.connectionId)}getConnection(e,t){const i=this._connections.get(e);if(!i)return null;for(const r of i)if(r.connectionId===t)return r;return null}_delayedAbort(e,t){setTimeout(()=>{this._abort(e,t)},0)}_abort(e,t){be.error("Aborting!"),this.emitError(e,t),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(be.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners()}_cleanupPeer(e){const t=this._connections.get(e);if(t)for(const i of t)i.close()}disconnect(){if(this.disconnected)return;const e=this.id;be.log(`Disconnect peer with ID:${e}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e)}reconnect(){if(this.disconnected&&!this.destroyed)be.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)be.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=t=>{}){this._api.listAllPeers().then(t=>e(t)).catch(t=>this._abort(yt.ServerError,t))}}var Cf=tl;class n0{_peer;_connections=new Map;_hubId;_myId="";_isHub=!1;onPeerJoin=null;onPeerLeave=null;onData=null;onError=null;constructor(e,t){const i=`oxy-${Math.random().toString(36).substring(2,8)}`;this._hubId=i,this._peer=new Cf({...t?{config:t}:{}})}get myId(){return this._myId}get hubId(){return this._hubId}get peers(){return Array.from(this._connections.keys())}async connectAsHub(e){this._hubId=`oxy-hub-${e}`;try{this._peer=new Cf(this._hubId),await this._waitForOpen(),this._isHub=!0,this._myId=this._hubId,this._peer.on("connection",t=>this._handleConnection(t))}catch{throw new Error("No se pudo crear la sala como hub")}}async connectToHub(e,t){await this._waitForOpen();const i=this._peer.connect(e,{reliable:!0,serialization:"binary"});this._setupConnection(i,e),await new Promise((r,s)=>{i.on("open",()=>{i.send({type:"peer-info",alias:t}),r()}),i.on("error",s),setTimeout(()=>s(new Error("Timeout conectando al hub")),1e4)})}async startLan(){await this._waitForOpen(),this._myId=this._peer.id}connectToPeer(e,t){const i=this._peer.connect(e,{reliable:!0,serialization:"binary"});return this._setupConnection(i,e),i.on("open",()=>{i.send({type:"peer-info",alias:t})}),i}sendTo(e,t){const i=this._connections.get(e);i&&i.open&&i.send(t)}sendToAll(e){this._connections.forEach(t=>{t.open&&t.send(e)})}disconnect(){this._connections.forEach(e=>e.close()),this._connections.clear(),this._peer.destroy()}_handleConnection(e){const t=e.peer;this._setupConnection(e,t)}_setupConnection(e,t){this._connections.set(t,e),e.on("data",i=>{const r=i;if(r.type==="peer-info"){const s={id:t,alias:r.alias||"Desconocido",deviceType:"web"};this.onPeerJoin?.(s),this._isHub&&(this._connections.size>1,this.sendTo(t,{type:"text",text:`Bienvenido a la sala ${this._hubId}`}));return}this.onData?.(t,i)}),e.on("close",()=>{this._connections.delete(t),this.onPeerLeave?.(t)})}_waitForOpen(){return new Promise((e,t)=>{if(this._peer.open){this._myId=this._peer.id,e();return}this._peer.on("open",i=>{this._myId=i,e()}),this._peer.on("error",i=>t(i)),setTimeout(()=>t(new Error("Timeout esperando peer open")),15e3)})}}function i0(n,e,t,i){let s=0,a=0;const o=new FileReader;o.onload=()=>{const c=o.result;t({type:"file-chunk",sessionId:e,index:a,data:c}),a++,s+=65536,s<n.size?l():i()};function l(){const c=n.slice(s,s+65536);o.readAsArrayBuffer(c)}l()}var Xo=(n=>(n.idle="idle",n.sending="sending",n.receiving="receiving",n))(Xo||{});const D=lp({_loopStarted:!1,_proposingClient:null,_onPin:null,_pendingChunks:new Map,_pendingMeta:new Map,key:null,pin:null,signaling:null,peerConnection:null,client:null,peers:[],peersRaw:[],session:{state:"idle",curr:0,total:1,fileState:{}},connectionMode:"lan",roomPin:null,receivedText:null,receivedClipboard:null});async function r0({info:n,onPin:e,signalingUrl:t}){D._proposingClient=n,D._onPin=e,D._loopStarted||(D._loopStarted=!0,s0(t).then(()=>console.log("Connection loop ended")))}async function s0(n){for(;;){if(D.connectionMode==="web"){await new Promise(e=>setTimeout(e,1e3));continue}if(D.connectionMode==="lan"){D.peerConnection&&(D.peerConnection.disconnect(),D.peerConnection=null),D.peers=[],D.client=null;const e=n||"wss://public.localsend.org/v1/ws";try{D.signaling=await pa.connect({url:e,info:D._proposingClient,onMessage:t=>{switch(t.type){case"HELLO":D.client=t.client,D.peersRaw=t.peers,D.peers=t.peers.map(i=>({id:i.id,alias:i.alias,deviceType:i.deviceType||"web"}));break;case"JOIN":D.peersRaw=[...D.peersRaw,t.peer],D.peers.push({id:t.peer.id,alias:t.peer.alias,deviceType:t.peer.deviceType||"web"});break;case"UPDATE":D.peersRaw=D.peersRaw.map(i=>i.id===t.peer.id?t.peer:i),D.peers=D.peersRaw.map(i=>({id:i.id,alias:i.alias,deviceType:i.deviceType||"web"}));break;case"LEFT":D.peersRaw=D.peersRaw.filter(i=>i.id!==t.peerId),D.peers=D.peers.filter(i=>i.id!==t.peerId);break;case"OFFER":uh({offer:t,onPin:D._onPin});break}},generateNewInfo:async()=>{const t=await qc(D.key);return fh(t),{...D._proposingClient,token:t}},onClose:()=>{D.signaling=null,D.client=null,D.peersRaw=[],D.peers=[]}}),await D.signaling.waitUntilClose()}catch{await new Promise(t=>setTimeout(t,5e3))}}}}function sr(){if(D.signaling){const n=D.signaling._socket;n&&typeof n.close=="function"&&n.close()}D.signaling=null,D.peerConnection&&(D.peerConnection.disconnect(),D.peerConnection=null),D.client=null,D.peers=[],D.peersRaw=[],D.receivedText=null}async function a0(n){sr(),D.connectionMode="lan";const e=n||"wss://public.localsend.org/v1/ws";try{D.signaling=await pa.connect({url:e,info:D._proposingClient,onMessage:t=>{switch(t.type){case"HELLO":D.client=t.client,D.peersRaw=t.peers,D.peers=t.peers.map(i=>({id:i.id,alias:i.alias,deviceType:i.deviceType||"web"}));break;case"JOIN":D.peersRaw=[...D.peersRaw,t.peer],D.peers.push({id:t.peer.id,alias:t.peer.alias,deviceType:t.peer.deviceType||"web"});break;case"UPDATE":D.peersRaw=D.peersRaw.map(i=>i.id===t.peer.id?t.peer:i),D.peers=D.peersRaw.map(i=>({id:i.id,alias:i.alias,deviceType:i.deviceType||"web"}));break;case"LEFT":D.peersRaw=D.peersRaw.filter(i=>i.id!==t.peerId),D.peers=D.peers.filter(i=>i.id!==t.peerId);break;case"OFFER":uh({offer:t,onPin:D._onPin});break}},generateNewInfo:async()=>{const t=await qc(D.key);return fh(t),{...D._proposingClient,token:t}},onClose:()=>{D.signaling=null,D.client=null,D.peersRaw=[],D.peers=[]}})}catch(t){console.error("Error connecting to LAN signaling:",t)}}async function o0(n){sr(),D.connectionMode="web",D.roomPin=n;const e=new n0(D._proposingClient?.alias||"User");D.peerConnection=e,e.onPeerJoin=t=>{D.peers.some(i=>i.id===t.id)||(D.peers=[...D.peers,t])},e.onPeerLeave=t=>{D.peers=D.peers.filter(i=>i.id!==t)},e.onData=(t,i)=>{if(i.type==="file-meta"){const r=i;D._pendingMeta.set(r.sessionId,{fileName:r.fileName,fileSize:r.fileSize,mimeType:r.mimeType}),D._pendingChunks.set(r.sessionId,new Map),D.session.state="receiving",D.session.curr=0,D.session.total=r.fileSize,D.session.fileState={[r.sessionId]:{id:r.sessionId,name:r.fileName,curr:0,total:r.fileSize,state:"receiving"}}}else if(i.type==="file-chunk"){const r=i,s=D._pendingChunks.get(r.sessionId);if(s){s.set(r.index,r.data),D._pendingMeta.get(r.sessionId)?.fileSize;const a=Array.from(s.values()).reduce((o,l)=>o+l.byteLength,0);D.session.curr=a,D.session.fileState[r.sessionId]&&(D.session.fileState[r.sessionId].curr=a)}}else if(i.type==="file-end"){const r=D._pendingMeta.get(i.sessionId),s=D._pendingChunks.get(i.sessionId);if(r&&s){const a=Array.from(s.entries()).sort(([c],[f])=>c-f).map(([,c])=>c),o=new Blob(a,{type:r.mimeType}),l=document.createElement("a");l.href=URL.createObjectURL(o),l.download=r.fileName,l.click(),URL.revokeObjectURL(l.href),D.session.fileState[i.sessionId]&&(D.session.fileState[i.sessionId].state="finished")}D._pendingMeta.delete(i.sessionId),D._pendingChunks.delete(i.sessionId),D._pendingMeta.size===0&&(D.session.state="idle")}else i.type==="text"&&(D.receivedText=i.text)};try{await e.startLan(),D.client={id:e.myId,alias:D._proposingClient?.alias||""},D.roomPin=n;const t=e.connectToPeer(`oxy-hub-${n}`,D._proposingClient?.alias||"User");t.on("open",()=>{console.log("Connected to WEB hub")}),t.on("error",async()=>{await e.connectAsHub(n),D.client={id:e.myId,alias:D._proposingClient?.alias||""}})}catch(t){console.error("Error in WEB connection:",t)}}async function c0(n,e){const t=Math.random().toString(36).substring(2,15),i=D.peerConnection;i&&(i.sendTo(n,{type:"file-meta",sessionId:t,fileName:e.name,fileSize:e.size,mimeType:e.type}),D.session.state="sending",D.session.total=e.size,D.session.fileState={[t]:{id:t,name:e.name,curr:0,total:e.size,state:"sending"}},i0(e,t,r=>{i.sendTo(n,r),D.session.curr+=r.data.byteLength,D.session.fileState[t]&&(D.session.fileState[t].curr=D.session.curr)},()=>{i.sendTo(n,{type:"file-end",sessionId:t}),D.session.fileState[t].state="finished",D.session.state="idle"}))}async function l0(n,e){const t=D.peerConnection;t&&t.sendTo(n,{type:"text",text:e})}function f0(n){D._proposingClient&&(D._proposingClient.alias=n),D.client&&(D.client.alias=n)}function fh(n){D._proposingClient&&(D._proposingClient.token=n),D.client&&(D.client.token=n)}const dh=3;async function Af({files:n,targetId:e,onPin:t}){D.session.state="sending";const i={},r=d0(n),s=r.reduce((a,o)=>(a[o.id]=n[parseInt(o.id)],i[o.id]={id:o.id,name:o.fileName,curr:0,total:o.size,state:"pending"},a),{});D.session.fileState=i,D.session.curr=0,D.session.total=r.reduce((a,o)=>a+o.size,0);try{await Cg({signaling:D.signaling,stunServers:_u,fileDtoList:r,fileMap:s,targetId:e,signingKey:D.key,pin:D.pin?{pin:D.pin,maxTries:dh}:void 0,onPin:t,onFilesSkip:a=>{for(const o of a)D.session.fileState[o].state="skipped"},onFileProgress:hh})}finally{D.session.state="idle"}}async function uh({offer:n,onPin:e}){D.session.state="receiving";try{await Ag({signaling:D.signaling,stunServers:_u,offer:n,signingKey:D.key,pin:D.pin?{pin:D.pin,maxTries:dh}:void 0,onPin:e,selectFiles:async t=>{D.session.curr=0,D.session.total=t.reduce((i,r)=>i+r.size,0),D.session.fileState={};for(const i of t)D.session.fileState[i.id]={id:i.id,name:i.fileName,curr:0,total:i.size,state:"pending"};return t.map(i=>i.id)},onFileProgress:hh})}finally{D.session.state="idle"}}function d0(n){const e=[];for(let t=0;t<n.length;t++){const i=n[t];e.push({id:t.toString(),fileName:i.name,size:i.size,fileType:i.type,metadata:{modified:new Date(i.lastModified).toISOString()}})}return e}function hh(n){D.session.fileState[n.id].curr=n.curr,D.session.curr=Object.values(D.session.fileState).reduce((e,t)=>e+t.curr,0),n.success?D.session.fileState[n.id].state="finished":n.error&&(D.session.fileState[n.id].state="error",D.session.fileState[n.id].error=n.error)}function u0(n){const e=h0(n),t=p0(n);return e&&t?`${t} • ${e}`:e||t||"Unknown"}function h0(n){return n.includes("Firefox")?"Firefox":n.includes("Chrome")?"Chrome":n.includes("Safari")?"Safari":n.includes("Opera")||n.includes("OPR")?"Opera":n.includes("Edg")?"Edge":n.includes("MSIE")||n.includes("Trident")?"Internet Explorer":n.includes("insomnia")?"Insomnia":null}function p0(n){return n.includes("Win")?"Windows":n.includes("Android")?"Android":n.includes("Macintosh")?"macOS":n.includes("iPhone")||n.includes("iPad")||n.includes("iPod")?"iOS":n.includes("X11")?"Linux":null}const Rf=["Adorable","Beautiful","Big","Bright","Clean","Clever","Cool","Cute","Cunning","Determined","Energetic","Efficient","Fantastic","Fast","Fine","Fresh","Good","Gorgeous","Great","Handsome","Hot","Kind","Lovely","Mystic","Neat","Nice","Patient","Pretty","Powerful","Rich","Secret","Smart","Solid","Special","Strategic","Strong","Tidy","Wise"],wf=["Apple","Avocado","Banana","Blackberry","Blueberry","Broccoli","Carrot","Cherry","Coconut","Grape","Lemon","Lettuce","Mango","Melon","Mushroom","Onion","Orange","Papaya","Peach","Pear","Pineapple","Potato","Pumpkin","Raspberry","Strawberry","Tomato"];function m0(){const n=Rf[Math.floor(Math.random()*Rf.length)],e=wf[Math.floor(Math.random()*wf.length)];return`${n} ${e}`}const _0={class:"w-full h-2 bg-gray-200 rounded-lg mt-1"},g0=_r({__name:"ProgressBar",props:{progress:{}},setup(n){const e=n;return(t,i)=>(ht(),bt("div",_0,[te("div",{class:"h-full bg-teal-500 rounded-lg",style:fp({width:`${e.progress*100}%`})},null,4)]))}}),ph=Object.assign(g0,{__name:"ProgressBar"});function $o(n){return n<1024?n+" B":n<1024*1024?(n/1024).toFixed(1)+" KB":n<1024*1024*1024?(n/(1024*1024)).toFixed(1)+" MB":(n/(1024*1024*1024)).toFixed(1)+" GB"}const x0={class:"flex"},v0={class:"flex-1 truncate"},S0=_r({__name:"FileProgress",props:{state:{}},setup(n){const e=n,t=Qs(()=>$o(e.state.total));return(i,r)=>{const s=ph;return ht(),bt("div",null,[te("div",x0,[te("span",v0,Ct(e.state.name),1),te("span",null,Ct(ye(t)),1)]),it(s,{progress:e.state.curr/e.state.total},null,8,["progress"])])}}}),b0=Object.assign(S0,{__name:"FileProgress"}),y0={class:"w-full max-w-lg mx-auto",role:"dialog","aria-modal":"true"},M0=_r({__name:"Dialog",props:{visible:{type:Boolean}},emits:["close"],setup(n,{emit:e}){const t=n,i=e;return(r,s)=>(ht(),Mo(hp,{name:"fade"},{default:zc(()=>[t.visible?(ht(),bt("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4",onClick:s[0]||(s[0]=dp(a=>i("close"),["self"]))},[te("div",y0,[up(r.$slots,"default",{},void 0,!0)])])):un("",!0)]),_:3}))}}),mh=Object.assign(pp(M0,[["__scopeId","data-v-edd7b9d3"]]),{__name:"Dialog"}),E0={class:"mt-4 mx-4"},T0={class:"text-xl text-center mb-4"},C0={class:"flex"},A0={class:"pl-4 pt-2 pr-4 max-h-[300px] overflow-y-auto"},R0=_r({__name:"SessionDialog",setup(n){const{t:e}=wd(),t=Qs(()=>$o(D.session.curr)),i=Qs(()=>$o(D.session.total));return(r,s)=>{const a=ph,o=b0,l=mh;return ht(),Mo(l,{visible:ye(D).session.state!==ye(Xo).idle},{default:zc(()=>[te("div",E0,[te("h1",T0,Ct(ye(D).session.state===ye(Xo).sending?ye(e)("index.progress.titleSending"):ye(e)("index.progress.titleReceiving")),1),te("div",C0,[s[0]||(s[0]=te("span",{class:"flex-1 font-bold"},"Total:",-1)),te("span",null,Ct(ye(t))+" / "+Ct(ye(i)),1)]),it(a,{progress:ye(D).session.curr/ye(D).session.total},null,8,["progress"]),s[1]||(s[1]=te("p",{class:"mt-4 font-bold"},"Files:",-1))]),te("div",A0,[(ht(!0),bt(Eo,null,To(ye(D).session.fileState,c=>(ht(),Mo(o,{state:c,class:"mb-4"},null,8,["state"]))),256))])]),_:1},8,["visible"])}}}),w0=Object.assign(R0,{__name:"DialogSessionDialog"});const nl="184",P0=0,Pf=1,D0=2,Ys=1,I0=2,Nr=3,hi=0,Yt=1,Gn=2,Vn=0,cr=1,Yo=2,Df=3,If=4,L0=5,yi=100,U0=101,N0=102,F0=103,O0=104,k0=200,B0=201,z0=202,G0=203,qo=204,jo=205,H0=206,V0=207,W0=208,X0=209,$0=210,Y0=211,q0=212,j0=213,Z0=214,Zo=0,Ko=1,Jo=2,ur=3,Qo=4,ec=5,tc=6,nc=7,_h=0,K0=1,J0=2,Rn=0,gh=1,xh=2,vh=3,Sh=4,bh=5,yh=6,Mh=7,Eh=300,Li=301,hr=302,Va=303,Wa=304,va=306,ic=1e3,Hn=1001,rc=1002,It=1003,Q0=1004,ps=1005,Ot=1006,Xa=1007,Ai=1008,on=1009,Th=1010,Ch=1011,Zr=1012,il=1013,Pn=1014,En=1015,$n=1016,rl=1017,sl=1018,Kr=1020,Ah=35902,Rh=35899,wh=1021,Ph=1022,pn=1023,Yn=1026,Ri=1027,Dh=1028,al=1029,Ui=1030,ol=1031,cl=1033,qs=33776,js=33777,Zs=33778,Ks=33779,sc=35840,ac=35841,oc=35842,cc=35843,lc=36196,fc=37492,dc=37496,uc=37488,hc=37489,oa=37490,pc=37491,mc=37808,_c=37809,gc=37810,xc=37811,vc=37812,Sc=37813,bc=37814,yc=37815,Mc=37816,Ec=37817,Tc=37818,Cc=37819,Ac=37820,Rc=37821,wc=36492,Pc=36494,Dc=36495,Ic=36283,Lc=36284,ca=36285,Uc=36286,ex=3200,Lf=0,tx=1,si="",rn="srgb",la="srgb-linear",fa="linear",Je="srgb",Xi=7680,Uf=519,nx=512,ix=513,rx=514,ll=515,sx=516,ax=517,fl=518,ox=519,Nf=35044,Ff="300 es",Tn=2e3,da=2001;function cx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lx(){const n=ua("canvas");return n.style.display="block",n}const Of={};function kf(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ih(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pe(...n){n=Ih(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function qe(...n){n=Ih(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Nc(...n){const e=n.join(" ");e in Of||(Of[e]=!0,Pe(...n))}function fx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const dx={[Zo]:Ko,[Jo]:tc,[Qo]:nc,[ur]:ec,[Ko]:Zo,[tc]:Jo,[nc]:Qo,[ec]:ur};class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$a=Math.PI/180,Fc=180/Math.PI;function is(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function ux(n,e){return(n%e+e)%e}function Ya(n,e,t){return(1-t)*n+t*e}function Er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ul=class ul{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ul.prototype.isVector2=!0;let rt=ul;class Sr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],u=i[r+3],d=s[a+0],h=s[a+1],_=s[a+2],y=s[a+3];if(u!==y||l!==d||c!==h||f!==_){let m=l*d+c*h+f*_+u*y;m<0&&(d=-d,h=-h,_=-_,y=-y,m=-m);let p=1-o;if(m<.9995){const b=Math.acos(m),C=Math.sin(b);p=Math.sin(p*b)/C,o=Math.sin(o*b)/C,l=l*p+d*o,c=c*p+h*o,f=f*p+_*o,u=u*p+y*o}else{l=l*p+d*o,c=c*p+h*o,f=f*p+_*o,u=u*p+y*o;const b=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=b,c*=b,f*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],u=s[a],d=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+f*u+l*h-c*d,e[t+1]=l*_+f*d+c*u-o*h,e[t+2]=c*_+f*h+o*d-l*u,e[t+3]=f*_-o*u-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),u=o(s/2),d=l(i/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*f*u+c*h*_,this._y=c*h*u-d*f*_,this._z=c*f*_+d*h*u,this._w=c*f*u-d*h*_;break;case"YXZ":this._x=d*f*u+c*h*_,this._y=c*h*u-d*f*_,this._z=c*f*_-d*h*u,this._w=c*f*u+d*h*_;break;case"ZXY":this._x=d*f*u-c*h*_,this._y=c*h*u+d*f*_,this._z=c*f*_+d*h*u,this._w=c*f*u-d*h*_;break;case"ZYX":this._x=d*f*u-c*h*_,this._y=c*h*u+d*f*_,this._z=c*f*_-d*h*u,this._w=c*f*u+d*h*_;break;case"YZX":this._x=d*f*u+c*h*_,this._y=c*h*u+d*f*_,this._z=c*f*_-d*h*u,this._w=c*f*u-d*h*_;break;case"XZY":this._x=d*f*u-c*h*_,this._y=c*h*u-d*f*_,this._z=c*f*_+d*h*u,this._w=c*f*u+d*h*_;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],f=t[6],u=t[10],d=i+o+u;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(f-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>u){const h=2*Math.sqrt(1+i-o-u);this._w=(f-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>u){const h=2*Math.sqrt(1+o-i-u);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+f)/h}else{const h=2*Math.sqrt(1+u-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,f=t._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,t=Math.sin(t*c)/f,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const hl=class hl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*t-s*r),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*f,this.y=i+l*f+o*c-s*u,this.z=r+l*u+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qa.copy(this).projectOnVector(e),this.sub(qa)}reflect(e){return this.sub(qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hl.prototype.isVector3=!0;let G=hl;const qa=new G,Bf=new Sr,pl=class pl{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],u=i[7],d=i[2],h=i[5],_=i[8],y=r[0],m=r[3],p=r[6],b=r[1],C=r[4],S=r[7],T=r[2],M=r[5],R=r[8];return s[0]=a*y+o*b+l*T,s[3]=a*m+o*C+l*M,s[6]=a*p+o*S+l*R,s[1]=c*y+f*b+u*T,s[4]=c*m+f*C+u*M,s[7]=c*p+f*S+u*R,s[2]=d*y+h*b+_*T,s[5]=d*m+h*C+_*M,s[8]=d*p+h*S+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return t*a*f-t*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=f*a-o*c,d=o*l-f*s,h=c*s-a*l,_=t*u+i*d+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=u*y,e[1]=(r*c-f*i)*y,e[2]=(o*i-r*a)*y,e[3]=d*y,e[4]=(f*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=h*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};pl.prototype.isMatrix3=!0;let Le=pl;const ja=new Le,zf=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gf=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hx(){const n={enabled:!0,workingColorSpace:la,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=Wn(r.r),r.g=Wn(r.g),r.b=Wn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=lr(r.r),r.g=lr(r.g),r.b=lr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===si?fa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Nc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Nc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[la]:{primaries:e,whitePoint:i,transfer:fa,toXYZ:zf,fromXYZ:Gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:zf,fromXYZ:Gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const Xe=hx();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let $i;class px{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$i===void 0&&($i=ua("canvas")),$i.width=e.width,$i.height=e.height;const r=$i.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$i}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ua("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wn(t[i]/255)*255):t[i]=Wn(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mx=0;class dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Za(r[a].image)):s.push(Za(r[a]))}else s=Za(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?px.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let _x=0;const Ka=new G;class Gt extends zi{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=Hn,r=Hn,s=Ot,a=Ai,o=pn,l=on,c=Gt.DEFAULT_ANISOTROPY,f=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=is(),this.name="",this.source=new dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ic:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ic:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Eh;Gt.DEFAULT_ANISOTROPY=1;const ml=class ml{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],f=l[4],u=l[8],d=l[1],h=l[5],_=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(f-d)<.01&&Math.abs(u-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(u+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,S=(h+1)/2,T=(p+1)/2,M=(f+d)/4,R=(u+y)/4,x=(_+m)/4;return C>S&&C>T?C<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(C),r=M/i,s=R/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=M/r,s=x/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=x/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(u-y)*(u-y)+(d-f)*(d-f));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(u-y)/b,this.z=(d-f)/b,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ml.prototype.isVector4=!0;let vt=ml;class gx extends zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Gt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new dl(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends gx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Lh extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xx extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=It,this.minFilter=It,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ha=class ha{constructor(e,t,i,r,s,a,o,l,c,f,u,d,h,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,f,u,d,h,_,y,m)}set(e,t,i,r,s,a,o,l,c,f,u,d,h,_,y,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=u,p[14]=d,p[3]=h,p[7]=_,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ha().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Yi.setFromMatrixColumn(e,0).length(),s=1/Yi.setFromMatrixColumn(e,1).length(),a=1/Yi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*f,h=a*u,_=o*f,y=o*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=h+_*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=_+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*f,h=l*u,_=c*f,y=c*u;t[0]=d+y*o,t[4]=_*o-h,t[8]=a*c,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=h*o-_,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*f,h=l*u,_=c*f,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*f,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*f,h=a*u,_=o*f,y=o*u;t[0]=l*f,t[4]=_*c-h,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=h*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,_=o*l,y=o*c;t[0]=l*f,t[4]=y-d*u,t[8]=_*u+h,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-c*f,t[6]=h*u+_,t[10]=d-y*u}else if(e.order==="XZY"){const d=a*l,h=a*c,_=o*l,y=o*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=d*u+y,t[5]=a*f,t[9]=h*u-_,t[2]=_*u-h,t[6]=o*f,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vx,e,Sx)}lookAt(e,t,i){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Jn.crossVectors(i,Kt),Jn.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Jn.crossVectors(i,Kt)),Jn.normalize(),ms.crossVectors(Kt,Jn),r[0]=Jn.x,r[4]=ms.x,r[8]=Kt.x,r[1]=Jn.y,r[5]=ms.y,r[9]=Kt.y,r[2]=Jn.z,r[6]=ms.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],u=i[5],d=i[9],h=i[13],_=i[2],y=i[6],m=i[10],p=i[14],b=i[3],C=i[7],S=i[11],T=i[15],M=r[0],R=r[4],x=r[8],A=r[12],P=r[1],w=r[5],U=r[9],W=r[13],X=r[2],F=r[6],H=r[10],k=r[14],Z=r[3],ee=r[7],le=r[11],Se=r[15];return s[0]=a*M+o*P+l*X+c*Z,s[4]=a*R+o*w+l*F+c*ee,s[8]=a*x+o*U+l*H+c*le,s[12]=a*A+o*W+l*k+c*Se,s[1]=f*M+u*P+d*X+h*Z,s[5]=f*R+u*w+d*F+h*ee,s[9]=f*x+u*U+d*H+h*le,s[13]=f*A+u*W+d*k+h*Se,s[2]=_*M+y*P+m*X+p*Z,s[6]=_*R+y*w+m*F+p*ee,s[10]=_*x+y*U+m*H+p*le,s[14]=_*A+y*W+m*k+p*Se,s[3]=b*M+C*P+S*X+T*Z,s[7]=b*R+C*w+S*F+T*ee,s[11]=b*x+C*U+S*H+T*le,s[15]=b*A+C*W+S*k+T*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],u=e[6],d=e[10],h=e[14],_=e[3],y=e[7],m=e[11],p=e[15],b=l*h-c*d,C=o*h-c*u,S=o*d-l*u,T=a*h-c*f,M=a*d-l*f,R=a*u-o*f;return t*(y*b-m*C+p*S)-i*(_*b-m*T+p*M)+r*(_*C-y*T+p*R)-s*(_*S-y*M+m*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],u=e[9],d=e[10],h=e[11],_=e[12],y=e[13],m=e[14],p=e[15],b=t*o-i*a,C=t*l-r*a,S=t*c-s*a,T=i*l-r*o,M=i*c-s*o,R=r*c-s*l,x=f*y-u*_,A=f*m-d*_,P=f*p-h*_,w=u*m-d*y,U=u*p-h*y,W=d*p-h*m,X=b*W-C*U+S*w+T*P-M*A+R*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/X;return e[0]=(o*W-l*U+c*w)*F,e[1]=(r*U-i*W-s*w)*F,e[2]=(y*R-m*M+p*T)*F,e[3]=(d*M-u*R-h*T)*F,e[4]=(l*P-a*W-c*A)*F,e[5]=(t*W-r*P+s*A)*F,e[6]=(m*S-_*R-p*C)*F,e[7]=(f*R-d*S+h*C)*F,e[8]=(a*U-o*P+c*x)*F,e[9]=(i*P-t*U-s*x)*F,e[10]=(_*M-y*S+p*b)*F,e[11]=(u*S-f*M-h*b)*F,e[12]=(o*A-a*w-l*x)*F,e[13]=(t*w-i*A+r*x)*F,e[14]=(y*C-_*T-m*b)*F,e[15]=(f*T-u*C+d*b)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,f=a+a,u=o+o,d=s*c,h=s*f,_=s*u,y=a*f,m=a*u,p=o*u,b=l*c,C=l*f,S=l*u,T=i.x,M=i.y,R=i.z;return r[0]=(1-(y+p))*T,r[1]=(h+S)*T,r[2]=(_-C)*T,r[3]=0,r[4]=(h-S)*M,r[5]=(1-(d+p))*M,r[6]=(m+b)*M,r[7]=0,r[8]=(_+C)*R,r[9]=(m-b)*R,r[10]=(1-(d+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Yi.set(r[0],r[1],r[2]).length();const o=Yi.set(r[4],r[5],r[6]).length(),l=Yi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),ln.copy(this);const c=1/a,f=1/o,u=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=f,ln.elements[5]*=f,ln.elements[6]*=f,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Tn,l=!1){const c=this.elements,f=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let _,y;if(l)_=s/(a-s),y=a*s/(a-s);else if(o===Tn)_=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===da)_=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Tn,l=!1){const c=this.elements,f=2/(t-e),u=2/(i-r),d=-(t+e)/(t-e),h=-(i+r)/(i-r);let _,y;if(l)_=1/(a-s),y=a/(a-s);else if(o===Tn)_=-2/(a-s),y=-(a+s)/(a-s);else if(o===da)_=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ha.prototype.isMatrix4=!0;let Mt=ha;const Yi=new G,ln=new Mt,vx=new G(0,0,0),Sx=new G(1,1,1),Jn=new G,ms=new G,Kt=new G,Hf=new Mt,Vf=new Sr;class Ni{constructor(e=0,t=0,i=0,r=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],u=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vf.setFromEuler(this),this.setFromQuaternion(Vf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Uh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bx=0;const Wf=new G,qi=new Sr,Un=new Mt,_s=new G,Tr=new G,yx=new G,Mx=new Sr,Xf=new G(1,0,0),$f=new G(0,1,0),Yf=new G(0,0,1),qf={type:"added"},Ex={type:"removed"},ji={type:"childadded",child:null},Ja={type:"childremoved",child:null};class qt extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new G,t=new Ni,i=new Sr,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Le}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(Xf,e)}rotateY(e){return this.rotateOnAxis($f,e)}rotateZ(e){return this.rotateOnAxis(Yf,e)}translateOnAxis(e,t){return Wf.copy(e).applyQuaternion(this.quaternion),this.position.add(Wf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xf,e)}translateY(e){return this.translateOnAxis($f,e)}translateZ(e){return this.translateOnAxis(Yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_s.copy(e):_s.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Tr,_s,this.up):Un.lookAt(_s,Tr,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),qi.setFromRotationMatrix(Un),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qf),ji.child=e,this.dispatchEvent(ji),ji.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ex),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qf),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,e,yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tr,Mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),u=a(e.shapes),d=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new G(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class gs extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tx={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=f.position.distanceTo(u.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},xs={h:0,s:0,l:0};function eo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Xe.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Xe.workingColorSpace){if(e=ux(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=eo(a,s,e+1/3),this.g=eo(a,s,e),this.b=eo(a,s,e-1/3)}return Xe.colorSpaceToWorking(this,r),this}setStyle(e,t=rn){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=Nh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return Xe.workingToColorSpace(Nt.copy(this),e),Math.round($e(Nt.r*255,0,255))*65536+Math.round($e(Nt.g*255,0,255))*256+Math.round($e(Nt.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,s=Nt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=f<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=rn){Xe.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(xs);const i=Ya(Qn.h,xs.h,t),r=Ya(Qn.s,xs.s,t),s=Ya(Qn.l,xs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Qe;Qe.NAMES=Nh;class Cx extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const fn=new G,Nn=new G,to=new G,Fn=new G,Zi=new G,Ki=new G,jf=new G,no=new G,io=new G,ro=new G,so=new vt,ao=new vt,oo=new vt;class hn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Nn.subVectors(i,t),to.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Nn),l=fn.dot(to),c=Nn.dot(Nn),f=Nn.dot(to),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,h=(c*l-o*f)*d,_=(a*f-o*l)*d;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return so.setScalar(0),ao.setScalar(0),oo.setScalar(0),so.fromBufferAttribute(e,t),ao.fromBufferAttribute(e,i),oo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(so,s.x),a.addScaledVector(ao,s.y),a.addScaledVector(oo,s.z),a}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Nn.subVectors(e,t),fn.cross(Nn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),fn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Zi.subVectors(r,i),Ki.subVectors(s,i),no.subVectors(e,i);const l=Zi.dot(no),c=Ki.dot(no);if(l<=0&&c<=0)return t.copy(i);io.subVectors(e,r);const f=Zi.dot(io),u=Ki.dot(io);if(f>=0&&u<=f)return t.copy(r);const d=l*u-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),t.copy(i).addScaledVector(Zi,a);ro.subVectors(e,s);const h=Zi.dot(ro),_=Ki.dot(ro);if(_>=0&&h<=_)return t.copy(s);const y=h*c-l*_;if(y<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Ki,o);const m=f*_-h*u;if(m<=0&&u-f>=0&&h-_>=0)return jf.subVectors(s,r),o=(u-f)/(u-f+(h-_)),t.copy(r).addScaledVector(jf,o);const p=1/(m+y+d);return a=y*p,o=d*p,t.copy(i).addScaledVector(Zi,a).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rs{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vs.copy(i.boundingBox)),vs.applyMatrix4(e.matrixWorld),this.union(vs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Ss.subVectors(this.max,Cr),Ji.subVectors(e.a,Cr),Qi.subVectors(e.b,Cr),er.subVectors(e.c,Cr),ei.subVectors(Qi,Ji),ti.subVectors(er,Qi),_i.subVectors(Ji,er);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-_i.z,_i.y,ei.z,0,-ei.x,ti.z,0,-ti.x,_i.z,0,-_i.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-_i.y,_i.x,0];return!co(t,Ji,Qi,er,Ss)||(t=[1,0,0,0,1,0,0,0,1],!co(t,Ji,Qi,er,Ss))?!1:(bs.crossVectors(ei,ti),t=[bs.x,bs.y,bs.z],co(t,Ji,Qi,er,Ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new G,new G,new G,new G,new G,new G,new G,new G],dn=new G,vs=new rs,Ji=new G,Qi=new G,er=new G,ei=new G,ti=new G,_i=new G,Cr=new G,Ss=new G,bs=new G,gi=new G;function co(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){gi.fromArray(n,s);const o=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),l=e.dot(gi),c=t.dot(gi),f=i.dot(gi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const St=new G,ys=new rt;let Ax=0;class mn extends zi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ax++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Nf,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ys.fromBufferAttribute(this,t),ys.applyMatrix3(e),this.setXY(t,ys.x,ys.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Er(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Er(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Er(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Fh extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Oh extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xn extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Rx=new rs,Ar=new G,lo=new G;class Sa{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Rx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ar.subVectors(e,this.center);const t=Ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ar.copy(e.center).add(lo)),this.expandByPoint(Ar.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wx=0;const nn=new Mt,fo=new qt,tr=new G,Jt=new rs,Rr=new rs,wt=new G;class _n extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cx(e)?Oh:Fh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Le().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,i){return nn.makeTranslation(e,t,i),this.applyMatrix4(nn),this}scale(e,t,i){return nn.makeScale(e,t,i),this.applyMatrix4(nn),this}lookAt(e){return fo.lookAt(e),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Jt.min,Rr.min),Jt.expandByPoint(wt),wt.addVectors(Jt.max,Rr.max),Jt.expandByPoint(wt)):(Jt.expandByPoint(Rr.min),Jt.expandByPoint(Rr.max))}Jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)wt.fromBufferAttribute(o,c),l&&(tr.fromBufferAttribute(e,c),wt.add(tr)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new G,l[x]=new G;const c=new G,f=new G,u=new G,d=new rt,h=new rt,_=new rt,y=new G,m=new G;function p(x,A,P){c.fromBufferAttribute(i,x),f.fromBufferAttribute(i,A),u.fromBufferAttribute(i,P),d.fromBufferAttribute(s,x),h.fromBufferAttribute(s,A),_.fromBufferAttribute(s,P),f.sub(c),u.sub(c),h.sub(d),_.sub(d);const w=1/(h.x*_.y-_.x*h.y);isFinite(w)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(u,-h.y).multiplyScalar(w),m.copy(u).multiplyScalar(h.x).addScaledVector(f,-_.x).multiplyScalar(w),o[x].add(y),o[A].add(y),o[P].add(y),l[x].add(m),l[A].add(m),l[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let x=0,A=b.length;x<A;++x){const P=b[x],w=P.start,U=P.count;for(let W=w,X=w+U;W<X;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const C=new G,S=new G,T=new G,M=new G;function R(x){T.fromBufferAttribute(r,x),M.copy(T);const A=o[x];C.copy(A),C.sub(T.multiplyScalar(T.dot(A))).normalize(),S.crossVectors(M,A);const w=S.dot(l[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,w)}for(let x=0,A=b.length;x<A;++x){const P=b[x],w=P.start,U=P.count;for(let W=w,X=w+U;W<X;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,f=new G,u=new G;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,u=o.normalized,d=new c.constructor(l.length*f);let h=0,_=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?h=l[y]*o.data.stride+o.offset:h=l[y]*f;for(let p=0;p<f;p++)d[_++]=c[h++]}return new mn(d,f,u)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,u=c.length;f<u;f++){const d=c[f],h=e(d,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,d=c.length;u<d;u++){const h=c[u];f.push(h.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let d=0,h=u.length;d<h;d++)f.push(u[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Px=0;class ss extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=is(),this.name="",this.type="Material",this.blending=cr,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=jo,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qo&&(i.blendSrc=this.blendSrc),this.blendDst!==jo&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const kn=new G,uo=new G,Ms=new G,ni=new G,ho=new G,Es=new G,po=new G;class kh{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){uo.copy(e).add(t).multiplyScalar(.5),Ms.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(uo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ms),o=ni.dot(this.direction),l=-ni.dot(Ms),c=ni.lengthSq(),f=Math.abs(1-a*a);let u,d,h,_;if(f>0)if(u=a*l-o,d=a*o-l,_=s*f,u>=0)if(d>=-_)if(d<=_){const y=1/f;u*=y,d*=y,h=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),h=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),h=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),h=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),h=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),h=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(uo).addScaledVector(Ms,d),h}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,r,s){ho.subVectors(t,e),Es.subVectors(i,e),po.crossVectors(ho,Es);let a=this.direction.dot(po),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,e);const l=o*this.direction.dot(Es.crossVectors(ni,Es));if(l<0)return null;const c=o*this.direction.dot(ho.cross(ni));if(c<0||l+c>a)return null;const f=-o*ni.dot(po);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bh extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zf=new Mt,xi=new kh,Ts=new Sa,Kf=new G,Cs=new G,As=new G,Rs=new G,mo=new G,ws=new G,Jf=new G,Ps=new G;class qn extends qt{constructor(e=new _n,t=new Bh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ws.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],u=s[l];f!==0&&(mo.fromBufferAttribute(u,e),a?ws.addScaledVector(mo,f):ws.addScaledVector(mo.sub(t),f))}t.add(ws)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ts.copy(i.boundingSphere),Ts.applyMatrix4(s),xi.copy(e.ray).recast(e.near),!(Ts.containsPoint(xi.origin)===!1&&(xi.intersectSphere(Ts,Kf)===null||xi.origin.distanceToSquared(Kf)>(e.far-e.near)**2))&&(Zf.copy(s).invert(),xi.copy(e.ray).applyMatrix4(Zf),!(i.boundingBox!==null&&xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const m=d[_],p=a[m.materialIndex],b=Math.max(m.start,h.start),C=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let S=b,T=C;S<T;S+=3){const M=o.getX(S),R=o.getX(S+1),x=o.getX(S+2);r=Ds(this,p,e,i,c,f,u,M,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),y=Math.min(o.count,h.start+h.count);for(let m=_,p=y;m<p;m+=3){const b=o.getX(m),C=o.getX(m+1),S=o.getX(m+2);r=Ds(this,a,e,i,c,f,u,b,C,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,y=d.length;_<y;_++){const m=d[_],p=a[m.materialIndex],b=Math.max(m.start,h.start),C=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=b,T=C;S<T;S+=3){const M=S,R=S+1,x=S+2;r=Ds(this,p,e,i,c,f,u,M,R,x),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let m=_,p=y;m<p;m+=3){const b=m,C=m+1,S=m+2;r=Ds(this,a,e,i,c,f,u,b,C,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Dx(n,e,t,i,r,s,a,o){let l;if(e.side===Yt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===hi,o),l===null)return null;Ps.copy(o),Ps.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ps);return c<t.near||c>t.far?null:{distance:c,point:Ps.clone(),object:n}}function Ds(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Cs),n.getVertexPosition(l,As),n.getVertexPosition(c,Rs);const f=Dx(n,e,t,i,Cs,As,Rs,Jf);if(f){const u=new G;hn.getBarycoord(Jf,Cs,As,Rs,u),r&&(f.uv=hn.getInterpolatedAttribute(r,o,l,c,u,new rt)),s&&(f.uv1=hn.getInterpolatedAttribute(s,o,l,c,u,new rt)),a&&(f.normal=hn.getInterpolatedAttribute(a,o,l,c,u,new G),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new G,materialIndex:0};hn.getNormal(Cs,As,Rs,d.normal),f.face=d,f.barycoord=u}return f}class Ix extends Gt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=It,f=It,u,d){super(null,a,o,l,c,f,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _o=new G,Lx=new G,Ux=new Le;class bi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=_o.subVectors(i,t).cross(Lx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(_o),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ux.getNormalMatrix(e),r=this.coplanarPoint(_o).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Sa,Nx=new rt(.5,.5),Is=new G;class zh{constructor(e=new bi,t=new bi,i=new bi,r=new bi,s=new bi,a=new bi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],u=s[5],d=s[6],h=s[7],_=s[8],y=s[9],m=s[10],p=s[11],b=s[12],C=s[13],S=s[14],T=s[15];if(r[0].setComponents(c-a,h-f,p-_,T-b).normalize(),r[1].setComponents(c+a,h+f,p+_,T+b).normalize(),r[2].setComponents(c+o,h+u,p+y,T+C).normalize(),r[3].setComponents(c-o,h-u,p-y,T-C).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,h-d,p-m,T-S).normalize();else if(r[4].setComponents(c-l,h-d,p-m,T-S).normalize(),t===Tn)r[5].setComponents(c+l,h+d,p+m,T+S).normalize();else if(t===da)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){vi.center.set(0,0,0);const t=Nx.distanceTo(e.center);return vi.radius=.7071067811865476+t,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Is.x=r.normal.x>0?e.max.x:e.min.x,Is.y=r.normal.y>0?e.max.y:e.min.y,Is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gh extends ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qf=new Mt,Oc=new kh,Ls=new Sa,Us=new G;class Fx extends qt{constructor(e=new _n,t=new Gh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(r),Ls.radius+=s,e.ray.intersectsSphere(Ls)===!1)return;Qf.copy(r).invert(),Oc.copy(e.ray).applyMatrix4(Qf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let _=d,y=h;_<y;_++){const m=c.getX(_);Us.fromBufferAttribute(u,m),ed(Us,m,l,r,e,t,this)}}else{const d=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let _=d,y=h;_<y;_++)Us.fromBufferAttribute(u,_),ed(Us,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ed(n,e,t,i,r,s,a){const o=Oc.distanceSqToPoint(n);if(o<t){const l=new G;Oc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Hh extends Gt{constructor(e=[],t=Li,i,r,s,a,o,l,c,f){super(e,t,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pr extends Gt{constructor(e,t,i=Pn,r,s,a,o=It,l=It,c,f=Yn,u=1){if(f!==Yn&&f!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ox extends pr{constructor(e,t=Pn,i=Li,r,s,a=It,o=It,l,c=Yn){const f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,t,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vh extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class as extends _n{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],u=[];let d=0,h=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xn(c,3)),this.setAttribute("normal",new Xn(f,3)),this.setAttribute("uv",new Xn(u,2));function _(y,m,p,b,C,S,T,M,R,x,A){const P=S/R,w=T/x,U=S/2,W=T/2,X=M/2,F=R+1,H=x+1;let k=0,Z=0;const ee=new G;for(let le=0;le<H;le++){const Se=le*w-W;for(let Ee=0;Ee<F;Ee++){const ze=Ee*P-U;ee[y]=ze*b,ee[m]=Se*C,ee[p]=X,c.push(ee.x,ee.y,ee.z),ee[y]=0,ee[m]=0,ee[p]=M>0?1:-1,f.push(ee.x,ee.y,ee.z),u.push(Ee/R),u.push(1-le/x),k+=1}}for(let le=0;le<x;le++)for(let Se=0;Se<R;Se++){const Ee=d+Se+F*le,ze=d+Se+F*(le+1),Ke=d+(Se+1)+F*(le+1),Fe=d+(Se+1)+F*le;l.push(Ee,ze,Fe),l.push(ze,Ke,Fe),Z+=6}o.addGroup(h,Z,A),h+=Z,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ba extends _n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,u=e/o,d=t/l,h=[],_=[],y=[],m=[];for(let p=0;p<f;p++){const b=p*d-a;for(let C=0;C<c;C++){const S=C*u-s;_.push(S,-b,0),y.push(0,0,1),m.push(C/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const C=b+c*p,S=b+c*(p+1),T=b+1+c*(p+1),M=b+1+c*p;h.push(C,S,M),h.push(S,T,M)}this.setIndex(h),this.setAttribute("position",new Xn(_,3)),this.setAttribute("normal",new Xn(y,3)),this.setAttribute("uv",new Xn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.width,e.height,e.widthSegments,e.heightSegments)}}function mr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(td(r))r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(td(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=mr(n[t]);for(const r in i)e[r]=i[r]}return e}function td(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function kx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Wh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Bx={clone:mr,merge:Bt};var zx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zx,this.fragmentShader=Gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hx extends Dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vx extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ex,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wx extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ns=new G,Fs=new Sr,Sn=new G;class Xh extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ns,Fs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ns,Fs,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ns,Fs,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ns,Fs,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ii=new G,nd=new rt,id=new rt;class sn extends Xh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fc*2*Math.atan(Math.tan($a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,nd,id),t.subVectors(id,nd)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($a*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class $h extends Xh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const nr=-90,ir=1;class Xx extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(nr,ir,e,t);r.layers=this.layers,this.add(r);const s=new sn(nr,ir,e,t);s.layers=this.layers,this.add(s);const a=new sn(nr,ir,e,t);a.layers=this.layers,this.add(a);const o=new sn(nr,ir,e,t);o.layers=this.layers,this.add(o);const l=new sn(nr,ir,e,t);l.layers=this.layers,this.add(l);const c=new sn(nr,ir,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===da)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(u,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class $x extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const _l=class _l{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};_l.prototype.isMatrix2=!0;let rd=_l;function sd(n,e,t,i){const r=Yx(i);switch(t){case wh:return n*e;case Dh:return n*e/r.components*r.byteLength;case al:return n*e/r.components*r.byteLength;case Ui:return n*e*2/r.components*r.byteLength;case ol:return n*e*2/r.components*r.byteLength;case Ph:return n*e*3/r.components*r.byteLength;case pn:return n*e*4/r.components*r.byteLength;case cl:return n*e*4/r.components*r.byteLength;case qs:case js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zs:case Ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ac:case cc:return Math.max(n,16)*Math.max(e,8)/4;case sc:case oc:return Math.max(n,8)*Math.max(e,8)/2;case lc:case fc:case uc:case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dc:case oa:case pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wc:case Pc:case Dc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ic:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ca:case Uc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yx(n){switch(n){case on:case Th:return{byteLength:1,components:1};case Zr:case Ch:case $n:return{byteLength:2,components:1};case rl:case sl:return{byteLength:2,components:4};case Pn:case il:case En:return{byteLength:4,components:1};case Ah:case Rh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);function Yh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function qx(n){const e=new WeakMap;function t(o,l){const c=o.array,f=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,f),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const f=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,f);else{u.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<u.length;h++){const _=u[d],y=u[h];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,u[d]=y)}u.length=d+1;for(let h=0,_=u.length;h<_;h++){const y=u[h];n.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,av=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ov=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ev=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Av=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$v=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ES=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,TS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,LS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,US=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,NS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,OS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,VS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ib=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ab=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ub=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_b=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ab=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:jx,alphahash_pars_fragment:Zx,alphamap_fragment:Kx,alphamap_pars_fragment:Jx,alphatest_fragment:Qx,alphatest_pars_fragment:ev,aomap_fragment:tv,aomap_pars_fragment:nv,batching_pars_vertex:iv,batching_vertex:rv,begin_vertex:sv,beginnormal_vertex:av,bsdfs:ov,iridescence_fragment:cv,bumpmap_pars_fragment:lv,clipping_planes_fragment:fv,clipping_planes_pars_fragment:dv,clipping_planes_pars_vertex:uv,clipping_planes_vertex:hv,color_fragment:pv,color_pars_fragment:mv,color_pars_vertex:_v,color_vertex:gv,common:xv,cube_uv_reflection_fragment:vv,defaultnormal_vertex:Sv,displacementmap_pars_vertex:bv,displacementmap_vertex:yv,emissivemap_fragment:Mv,emissivemap_pars_fragment:Ev,colorspace_fragment:Tv,colorspace_pars_fragment:Cv,envmap_fragment:Av,envmap_common_pars_fragment:Rv,envmap_pars_fragment:wv,envmap_pars_vertex:Pv,envmap_physical_pars_fragment:Gv,envmap_vertex:Dv,fog_vertex:Iv,fog_pars_vertex:Lv,fog_fragment:Uv,fog_pars_fragment:Nv,gradientmap_pars_fragment:Fv,lightmap_pars_fragment:Ov,lights_lambert_fragment:kv,lights_lambert_pars_fragment:Bv,lights_pars_begin:zv,lights_toon_fragment:Hv,lights_toon_pars_fragment:Vv,lights_phong_fragment:Wv,lights_phong_pars_fragment:Xv,lights_physical_fragment:$v,lights_physical_pars_fragment:Yv,lights_fragment_begin:qv,lights_fragment_maps:jv,lights_fragment_end:Zv,lightprobes_pars_fragment:Kv,logdepthbuf_fragment:Jv,logdepthbuf_pars_fragment:Qv,logdepthbuf_pars_vertex:eS,logdepthbuf_vertex:tS,map_fragment:nS,map_pars_fragment:iS,map_particle_fragment:rS,map_particle_pars_fragment:sS,metalnessmap_fragment:aS,metalnessmap_pars_fragment:oS,morphinstance_vertex:cS,morphcolor_vertex:lS,morphnormal_vertex:fS,morphtarget_pars_vertex:dS,morphtarget_vertex:uS,normal_fragment_begin:hS,normal_fragment_maps:pS,normal_pars_fragment:mS,normal_pars_vertex:_S,normal_vertex:gS,normalmap_pars_fragment:xS,clearcoat_normal_fragment_begin:vS,clearcoat_normal_fragment_maps:SS,clearcoat_pars_fragment:bS,iridescence_pars_fragment:yS,opaque_fragment:MS,packing:ES,premultiplied_alpha_fragment:TS,project_vertex:CS,dithering_fragment:AS,dithering_pars_fragment:RS,roughnessmap_fragment:wS,roughnessmap_pars_fragment:PS,shadowmap_pars_fragment:DS,shadowmap_pars_vertex:IS,shadowmap_vertex:LS,shadowmask_pars_fragment:US,skinbase_vertex:NS,skinning_pars_vertex:FS,skinning_vertex:OS,skinnormal_vertex:kS,specularmap_fragment:BS,specularmap_pars_fragment:zS,tonemapping_fragment:GS,tonemapping_pars_fragment:HS,transmission_fragment:VS,transmission_pars_fragment:WS,uv_pars_fragment:XS,uv_pars_vertex:$S,uv_vertex:YS,worldpos_vertex:qS,background_vert:jS,background_frag:ZS,backgroundCube_vert:KS,backgroundCube_frag:JS,cube_vert:QS,cube_frag:eb,depth_vert:tb,depth_frag:nb,distance_vert:ib,distance_frag:rb,equirect_vert:sb,equirect_frag:ab,linedashed_vert:ob,linedashed_frag:cb,meshbasic_vert:lb,meshbasic_frag:fb,meshlambert_vert:db,meshlambert_frag:ub,meshmatcap_vert:hb,meshmatcap_frag:pb,meshnormal_vert:mb,meshnormal_frag:_b,meshphong_vert:gb,meshphong_frag:xb,meshphysical_vert:vb,meshphysical_frag:Sb,meshtoon_vert:bb,meshtoon_frag:yb,points_vert:Mb,points_frag:Eb,shadow_vert:Tb,shadow_frag:Cb,sprite_vert:Ab,sprite_frag:Rb},de={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},yn={basic:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Bt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Bt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Bt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Bt([de.points,de.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Bt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Bt([de.common,de.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Bt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Bt([de.sprite,de.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Bt([de.common,de.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Bt([de.lights,de.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};yn.physical={uniforms:Bt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Os={r:0,b:0,g:0},wb=new Mt,qh=new Le;qh.set(-1,0,0,0,1,0,0,0,1);function Pb(n,e,t,i,r,s){const a=new Qe(0);let o=r===!0?0:1,l,c,f=null,u=0,d=null;function h(b){let C=b.isScene===!0?b.background:null;if(C&&C.isTexture){const S=b.backgroundBlurriness>0;C=e.get(C,S)}return C}function _(b){let C=!1;const S=h(b);S===null?m(a,o):S&&S.isColor&&(m(S,1),C=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(b,C){const S=h(C);S&&(S.isCubeTexture||S.mapping===va)?(c===void 0&&(c=new qn(new as(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:mr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(wb.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qh),c.material.toneMapped=Xe.getTransfer(S.colorSpace)!==Je,(f!==S||u!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=S,u=S.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new qn(new ba(2,2),new Dn({name:"BackgroundMaterial",uniforms:mr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(S.colorSpace)!==Je,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||u!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,f=S,u=S.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,C){b.getRGB(Os,Wh(n)),t.buffers.color.setClear(Os.r,Os.g,Os.b,C,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,C=1){a.set(b),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:_,addToRenderList:y,dispose:p}}function Db(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(w,U,W,X,F){let H=!1;const k=u(w,X,W,U);s!==k&&(s=k,c(s.object)),H=h(w,X,W,F),H&&_(w,X,W,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(w,U,W,X),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function f(w){return n.deleteVertexArray(w)}function u(w,U,W,X){const F=X.wireframe===!0;let H=i[U.id];H===void 0&&(H={},i[U.id]=H);const k=w.isInstancedMesh===!0?w.id:0;let Z=H[k];Z===void 0&&(Z={},H[k]=Z);let ee=Z[W.id];ee===void 0&&(ee={},Z[W.id]=ee);let le=ee[F];return le===void 0&&(le=d(l()),ee[F]=le),le}function d(w){const U=[],W=[],X=[];for(let F=0;F<t;F++)U[F]=0,W[F]=0,X[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:X,object:w,attributes:{},index:null}}function h(w,U,W,X){const F=s.attributes,H=U.attributes;let k=0;const Z=W.getAttributes();for(const ee in Z)if(Z[ee].location>=0){const Se=F[ee];let Ee=H[ee];if(Ee===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(Ee=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(Ee=w.instanceColor)),Se===void 0||Se.attribute!==Ee||Ee&&Se.data!==Ee.data)return!0;k++}return s.attributesNum!==k||s.index!==X}function _(w,U,W,X){const F={},H=U.attributes;let k=0;const Z=W.getAttributes();for(const ee in Z)if(Z[ee].location>=0){let Se=H[ee];Se===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor));const Ee={};Ee.attribute=Se,Se&&Se.data&&(Ee.data=Se.data),F[ee]=Ee,k++}s.attributes=F,s.attributesNum=k,s.index=X}function y(){const w=s.newAttributes;for(let U=0,W=w.length;U<W;U++)w[U]=0}function m(w){p(w,0)}function p(w,U){const W=s.newAttributes,X=s.enabledAttributes,F=s.attributeDivisors;W[w]=1,X[w]===0&&(n.enableVertexAttribArray(w),X[w]=1),F[w]!==U&&(n.vertexAttribDivisor(w,U),F[w]=U)}function b(){const w=s.newAttributes,U=s.enabledAttributes;for(let W=0,X=U.length;W<X;W++)U[W]!==w[W]&&(n.disableVertexAttribArray(W),U[W]=0)}function C(w,U,W,X,F,H,k){k===!0?n.vertexAttribIPointer(w,U,W,F,H):n.vertexAttribPointer(w,U,W,X,F,H)}function S(w,U,W,X){y();const F=X.attributes,H=W.getAttributes(),k=U.defaultAttributeValues;for(const Z in H){const ee=H[Z];if(ee.location>=0){let le=F[Z];if(le===void 0&&(Z==="instanceMatrix"&&w.instanceMatrix&&(le=w.instanceMatrix),Z==="instanceColor"&&w.instanceColor&&(le=w.instanceColor)),le!==void 0){const Se=le.normalized,Ee=le.itemSize,ze=e.get(le);if(ze===void 0)continue;const Ke=ze.buffer,Fe=ze.type,K=ze.bytesPerElement,pe=Fe===n.INT||Fe===n.UNSIGNED_INT||le.gpuType===il;if(le.isInterleavedBufferAttribute){const se=le.data,Re=se.stride,Ie=le.offset;if(se.isInstancedInterleavedBuffer){for(let we=0;we<ee.locationSize;we++)p(ee.location+we,se.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let we=0;we<ee.locationSize;we++)m(ee.location+we);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let we=0;we<ee.locationSize;we++)C(ee.location+we,Ee/ee.locationSize,Fe,Se,Re*K,(Ie+Ee/ee.locationSize*we)*K,pe)}else{if(le.isInstancedBufferAttribute){for(let se=0;se<ee.locationSize;se++)p(ee.location+se,le.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let se=0;se<ee.locationSize;se++)m(ee.location+se);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let se=0;se<ee.locationSize;se++)C(ee.location+se,Ee/ee.locationSize,Fe,Se,Ee*K,Ee/ee.locationSize*se*K,pe)}}else if(k!==void 0){const Se=k[Z];if(Se!==void 0)switch(Se.length){case 2:n.vertexAttrib2fv(ee.location,Se);break;case 3:n.vertexAttrib3fv(ee.location,Se);break;case 4:n.vertexAttrib4fv(ee.location,Se);break;default:n.vertexAttrib1fv(ee.location,Se)}}}}b()}function T(){A();for(const w in i){const U=i[w];for(const W in U){const X=U[W];for(const F in X){const H=X[F];for(const k in H)f(H[k].object),delete H[k];delete X[F]}}delete i[w]}}function M(w){if(i[w.id]===void 0)return;const U=i[w.id];for(const W in U){const X=U[W];for(const F in X){const H=X[F];for(const k in H)f(H[k].object),delete H[k];delete X[F]}}delete i[w.id]}function R(w){for(const U in i){const W=i[U];for(const X in W){const F=W[X];if(F[w.id]===void 0)continue;const H=F[w.id];for(const k in H)f(H[k].object),delete H[k];delete F[w.id]}}}function x(w){for(const U in i){const W=i[U],X=w.isInstancedMesh===!0?w.id:0,F=W[X];if(F!==void 0){for(const H in F){const k=F[H];for(const Z in k)f(k[Z].object),delete k[Z];delete F[H]}delete W[X],Object.keys(W).length===0&&delete i[U]}}}function A(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function Ib(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,f){f!==0&&(n.drawArraysInstanced(i,l,c,f),t.update(c,i,f))}function o(l,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,f);let d=0;for(let h=0;h<f;h++)d+=c[h];t.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Lb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==pn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===$n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==on&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==En&&!x)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(Pe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:S,maxSamples:T,samples:M}}function Ub(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new bi,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const h=u.length!==0||d||i!==0||r;return r=d,i=u.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=f(u,d,0)},this.setState=function(u,d,h){const _=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!r||_===null||_.length===0||s&&!m)s?f(null):c();else{const b=s?0:i,C=b*4;let S=p.clippingState||null;l.value=S,S=f(_,d,C,h);for(let T=0;T!==C;++T)S[T]=t[T];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,d,h,_){const y=u!==null?u.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const p=h+y*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,S=h;C!==y;++C,S+=4)a.copy(u[C]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const ci=4,ad=[.125,.215,.35,.446,.526,.582],Mi=20,Nb=256,wr=new $h,od=new Qe;let go=null,xo=0,vo=0,So=!1;const Fb=new G;class cd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Fb}=s;go=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(go,xo,vo),this._renderer.xr.enabled=So,e.scissorTest=!1,rr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),go=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),So=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:$n,format:pn,colorSpace:la,depthBuffer:!1},r=ld(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ob(s)),this._blurMaterial=Bb(s,e,t),this._ggxMaterial=kb(s,e,t)}return r}_compileMaterial(e){const t=new qn(new _n,e);this._renderer.compile(t,wr)}_sceneToCubeUV(e,t,i,r,s){const l=new sn(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(od),u.toneMapping=Rn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qn(new as,new Bh({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(od),p=!0);for(let C=0;C<6;C++){const S=C%3;S===0?(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[C],s.y,s.z)):S===1?(l.up.set(0,0,c[C]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[C],s.z)):(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[C]));const T=this._cubeSize;rr(r,S*T,C>2?T:0,T,T),u.setRenderTarget(r),p&&u.render(y,l),u.render(e,l)}u.toneMapping=h,u.autoClear=d,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Li||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;rr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,wr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),d=0+c*1.25,h=u*d,{_lodMax:_}=this,y=this._sizeLods[i],m=3*y*(i>_-ci?i-_+ci:0),p=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=_-t,rr(s,m,p,3*y,2*y),r.setRenderTarget(s),r.render(o,wr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,rr(e,m,p,3*y,2*y),r.setRenderTarget(e),r.render(o,wr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&qe("blur direction must be either latitudinal or longitudinal!");const f=3,u=this._lodMeshes[r];u.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Mi-1),y=s/_,m=isFinite(s)?1+Math.floor(f*y):Mi;m>Mi&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mi}`);const p=[];let b=0;for(let R=0;R<Mi;++R){const x=R/y,A=Math.exp(-x*x/2);p.push(A),R===0?b+=A:R<m&&(b+=2*A)}for(let R=0;R<p.length;R++)p[R]=p[R]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:C}=this;d.dTheta.value=_,d.mipInt.value=C-i;const S=this._sizeLods[r],T=3*S*(r>C-ci?r-C+ci:0),M=4*(this._cubeSize-S);rr(t,T,M,3*S,2*S),l.setRenderTarget(t),l.render(u,wr)}}function Ob(n){const e=[],t=[],i=[];let r=n;const s=n-ci+1+ad.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-ci?l=ad[a-n+ci-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),f=-c,u=1+c,d=[f,f,u,f,u,u,f,f,u,u,f,u],h=6,_=6,y=3,m=2,p=1,b=new Float32Array(y*_*h),C=new Float32Array(m*_*h),S=new Float32Array(p*_*h);for(let M=0;M<h;M++){const R=M%3*2/3-1,x=M>2?0:-1,A=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];b.set(A,y*_*M),C.set(d,m*_*M);const P=[M,M,M,M,M,M];S.set(P,p*_*M)}const T=new _n;T.setAttribute("position",new mn(b,y)),T.setAttribute("uv",new mn(C,m)),T.setAttribute("faceIndex",new mn(S,p)),i.push(new qn(T,null)),r>ci&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ld(n,e,t){const i=new wn(n,e,t);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function kb(n,e,t){return new Dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Bb(n,e,t){const i=new Float32Array(Mi),r=new G(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function fd(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function dd(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class jh extends wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new as(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Vn});s.uniforms.tEquirect.value=t;const a=new qn(r,s),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Ot),new Xx(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function zb(n){let e=new WeakMap,t=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?a(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Va||h===Wa)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const y=new jh(_.height);return y.fromEquirectangularTexture(n,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const h=d.mapping,_=h===Va||h===Wa,y=h===Li||h===hr;if(_||y){let m=t.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new cd(n)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const b=d.image;return _&&b&&b.height>0||y&&b&&l(b)?(i===null&&(i=new cd(n)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function o(d,h){return h===Va?d.mapping=Li:h===Wa&&(d.mapping=hr),d}function l(d){let h=0;const _=6;for(let y=0;y<_;y++)d[y]!==void 0&&h++;return h===_}function c(d){const h=d.target;h.removeEventListener("dispose",c);const _=e.get(h);_!==void 0&&(e.delete(h),_.dispose())}function f(d){const h=d.target;h.removeEventListener("dispose",f);const _=t.get(h);_!==void 0&&(t.delete(h),_.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:u}}function Gb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Nc("WebGLRenderer: "+i+" extension not supported."),r}}}function Hb(n,e,t,i){const r={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const h in d)e.update(d[h],n.ARRAY_BUFFER)}function c(u){const d=[],h=u.index,_=u.attributes.position;let y=0;if(_===void 0)return;if(h!==null){const b=h.array;y=h.version;for(let C=0,S=b.length;C<S;C+=3){const T=b[C+0],M=b[C+1],R=b[C+2];d.push(T,M,M,R,R,T)}}else{const b=_.array;y=_.version;for(let C=0,S=b.length/3-1;C<S;C+=3){const T=C+0,M=C+1,R=C+2;d.push(T,M,M,R,R,T)}}const m=new(_.count>=65535?Oh:Fh)(d,1);m.version=y;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function f(u){const d=s.get(u);if(d){const h=u.index;h!==null&&d.version<h.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:f}}function Vb(n,e,t){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,s,u*a),t.update(d,i,1)}function c(u,d,h){h!==0&&(n.drawElementsInstanced(i,d,s,u*a,h),t.update(d,i,h))}function f(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,h);let y=0;for(let m=0;m<h;m++)y+=d[m];t.update(y,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Wb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Xb(n,e,t){const i=new WeakMap,r=new vt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let A=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let C=0;h===!0&&(C=1),_===!0&&(C=2),y===!0&&(C=3);let S=o.attributes.position.count*C,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const M=new Float32Array(S*T*4*u),R=new Lh(M,S,T,u);R.type=En,R.needsUpdate=!0;const x=C*4;for(let P=0;P<u;P++){const w=m[P],U=p[P],W=b[P],X=S*T*4*P;for(let F=0;F<w.count;F++){const H=F*x;h===!0&&(r.fromBufferAttribute(w,F),M[X+H+0]=r.x,M[X+H+1]=r.y,M[X+H+2]=r.z,M[X+H+3]=0),_===!0&&(r.fromBufferAttribute(U,F),M[X+H+4]=r.x,M[X+H+5]=r.y,M[X+H+6]=r.z,M[X+H+7]=0),y===!0&&(r.fromBufferAttribute(W,F),M[X+H+8]=r.x,M[X+H+9]=r.y,M[X+H+10]=r.z,M[X+H+11]=W.itemSize===4?r.w:1)}}d={count:u,texture:R,size:new rt(S,T)},i.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let y=0;y<c.length;y++)h+=c[y];const _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function $b(n,e,t,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==f&&(h.update(),s.set(h,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const Yb={[gh]:"LINEAR_TONE_MAPPING",[xh]:"REINHARD_TONE_MAPPING",[vh]:"CINEON_TONE_MAPPING",[Sh]:"ACES_FILMIC_TONE_MAPPING",[yh]:"AGX_TONE_MAPPING",[Mh]:"NEUTRAL_TONE_MAPPING",[bh]:"CUSTOM_TONE_MAPPING"};function qb(n,e,t,i,r){const s=new wn(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new pr(e,t):void 0}),a=new wn(e,t,{type:$n,depthBuffer:!1,stencilBuffer:!1}),o=new _n;o.setAttribute("position",new Xn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Xn([0,2,0,0,2,0],2));const l=new Hx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new qn(o,l),f=new $h(-1,1,1,-1,0,1);let u=null,d=null,h=!1,_,y=null,m=[],p=!1;this.setSize=function(b,C){s.setSize(b,C),a.setSize(b,C);for(let S=0;S<m.length;S++){const T=m[S];T.setSize&&T.setSize(b,C)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;const C=s.width,S=s.height;for(let T=0;T<m.length;T++){const M=m[T];M.setSize&&M.setSize(C,S)}},this.begin=function(b,C){if(h||b.toneMapping===Rn&&m.length===0)return!1;if(y=C,C!==null){const S=C.width,T=C.height;(s.width!==S||s.height!==T)&&this.setSize(S,T)}return p===!1&&b.setRenderTarget(s),_=b.toneMapping,b.toneMapping=Rn,!0},this.hasRenderPass=function(){return p},this.end=function(b,C){b.toneMapping=_,h=!0;let S=s,T=a;for(let M=0;M<m.length;M++){const R=m[M];if(R.enabled!==!1&&(R.render(b,T,S,C),R.needsSwap!==!1)){const x=S;S=T,T=x}}if(u!==b.outputColorSpace||d!==b.toneMapping){u=b.outputColorSpace,d=b.toneMapping,l.defines={},Xe.getTransfer(u)===Je&&(l.defines.SRGB_TRANSFER="");const M=Yb[d];M&&(l.defines[M]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,b.setRenderTarget(y),b.render(c,f),y=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Zh=new Gt,kc=new pr(1,1),Kh=new Lh,Jh=new xx,Qh=new Hh,ud=[],hd=[],pd=new Float32Array(16),md=new Float32Array(9),_d=new Float32Array(4);function br(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=ud[r];if(s===void 0&&(s=new Float32Array(r),ud[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ma(n,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Zb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function Kb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function Jb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function Qb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;_d.set(i),n.uniformMatrix2fv(this.addr,!1,_d),Rt(t,i)}}function ey(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;md.set(i),n.uniformMatrix3fv(this.addr,!1,md),Rt(t,i)}}function ty(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(At(t,i))return;pd.set(i),n.uniformMatrix4fv(this.addr,!1,pd),Rt(t,i)}}function ny(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function ry(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function sy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function ay(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function oy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function cy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function ly(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function fy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(kc.compareFunction=t.isReversedDepthBuffer()?fl:ll,s=kc):s=Zh,t.setTexture2D(e||s,r)}function dy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Jh,r)}function uy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Qh,r)}function hy(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kh,r)}function py(n){switch(n){case 5126:return jb;case 35664:return Zb;case 35665:return Kb;case 35666:return Jb;case 35674:return Qb;case 35675:return ey;case 35676:return ty;case 5124:case 35670:return ny;case 35667:case 35671:return iy;case 35668:case 35672:return ry;case 35669:case 35673:return sy;case 5125:return ay;case 36294:return oy;case 36295:return cy;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return fy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return hy}}function my(n,e){n.uniform1fv(this.addr,e)}function _y(n,e){const t=br(e,this.size,2);n.uniform2fv(this.addr,t)}function gy(n,e){const t=br(e,this.size,3);n.uniform3fv(this.addr,t)}function xy(n,e){const t=br(e,this.size,4);n.uniform4fv(this.addr,t)}function vy(n,e){const t=br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sy(n,e){const t=br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function by(n,e){const t=br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yy(n,e){n.uniform1iv(this.addr,e)}function My(n,e){n.uniform2iv(this.addr,e)}function Ey(n,e){n.uniform3iv(this.addr,e)}function Ty(n,e){n.uniform4iv(this.addr,e)}function Cy(n,e){n.uniform1uiv(this.addr,e)}function Ay(n,e){n.uniform2uiv(this.addr,e)}function Ry(n,e){n.uniform3uiv(this.addr,e)}function wy(n,e){n.uniform4uiv(this.addr,e)}function Py(n,e,t){const i=this.cache,r=e.length,s=Ma(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=kc:a=Zh;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Dy(n,e,t){const i=this.cache,r=e.length,s=Ma(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Jh,s[a])}function Iy(n,e,t){const i=this.cache,r=e.length,s=Ma(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Qh,s[a])}function Ly(n,e,t){const i=this.cache,r=e.length,s=Ma(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Kh,s[a])}function Uy(n){switch(n){case 5126:return my;case 35664:return _y;case 35665:return gy;case 35666:return xy;case 35674:return vy;case 35675:return Sy;case 35676:return by;case 5124:case 35670:return yy;case 35667:case 35671:return My;case 35668:case 35672:return Ey;case 35669:case 35673:return Ty;case 5125:return Cy;case 36294:return Ay;case 36295:return Ry;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Ly}}class Ny{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=py(t.type)}}class Fy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uy(t.type)}}class Oy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function gd(n,e){n.seq.push(e),n.map[e.id]=e}function ky(n,e,t){const i=n.name,r=i.length;for(bo.lastIndex=0;;){const s=bo.exec(i),a=bo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){gd(t,c===void 0?new Ny(o,n,e):new Fy(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Oy(o),gd(t,u)),t=u}}}class Js{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ky(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function xd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const By=37297;let zy=0;function Gy(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const vd=new Le;function Hy(n){Xe._getMatrix(vd,Xe.workingColorSpace,n);const e=`mat3( ${vd.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(n)){case fa:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Gy(n.getShaderSource(e),o)}else return s}function Vy(n,e){const t=Hy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Wy={[gh]:"Linear",[xh]:"Reinhard",[vh]:"Cineon",[Sh]:"ACESFilmic",[yh]:"AgX",[Mh]:"Neutral",[bh]:"Custom"};function Xy(n,e){const t=Wy[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ks=new G;function $y(){Xe.getLuminanceCoefficients(ks);const n=ks.x.toFixed(4),e=ks.y.toFixed(4),t=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function qy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Fr(n){return n!==""}function bd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(n){return n.replace(Zy,Jy)}const Ky=new Map;function Jy(n,e){let t=ke[e];if(t===void 0){const i=Ky.get(e);if(i!==void 0)t=ke[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bc(t)}const Qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Md(n){return n.replace(Qy,eM)}function eM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ed(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const tM={[Ys]:"SHADOWMAP_TYPE_PCF",[Nr]:"SHADOWMAP_TYPE_VSM"};function nM(n){return tM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iM={[Li]:"ENVMAP_TYPE_CUBE",[hr]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE_UV"};function rM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":iM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const sM={[hr]:"ENVMAP_MODE_REFRACTION"};function aM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":sM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oM={[_h]:"ENVMAP_BLENDING_MULTIPLY",[K0]:"ENVMAP_BLENDING_MIX",[J0]:"ENVMAP_BLENDING_ADD"};function cM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":oM[n.combine]||"ENVMAP_BLENDING_NONE"}function lM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=nM(t),c=rM(t),f=aM(t),u=cM(t),d=lM(t),h=Yy(t),_=qy(s),y=r.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Fr).join(`
`),p.length>0&&(p+=`
`)):(m=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),p=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Xy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Vy("linearToOutputTexel",t.outputColorSpace),$y(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),a=Bc(a),a=bd(a,t),a=yd(a,t),o=Bc(o),o=bd(o,t),o=yd(o,t),a=Md(a),o=Md(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const C=b+m+a,S=b+p+o,T=xd(r,r.VERTEX_SHADER,C),M=xd(r,r.FRAGMENT_SHADER,S);r.attachShader(y,T),r.attachShader(y,M),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(w){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(y)||"",W=r.getShaderInfoLog(T)||"",X=r.getShaderInfoLog(M)||"",F=U.trim(),H=W.trim(),k=X.trim();let Z=!0,ee=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,T,M);else{const le=Sd(r,T,"vertex"),Se=Sd(r,M,"fragment");qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+le+`
`+Se)}else F!==""?Pe("WebGLProgram: Program Info Log:",F):(H===""||k==="")&&(ee=!1);ee&&(w.diagnostics={runnable:Z,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:k,prefix:p}})}r.deleteShader(T),r.deleteShader(M),x=new Js(r,y),A=jy(r,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,By)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zy++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=M,this}let dM=0;class uM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new hM(e),t.set(e,i)),i}}class hM{constructor(e){this.id=dM++,this.code=e,this.usedTimes=0}}function pM(n){return n===Ui||n===oa||n===ca}function mM(n,e,t,i,r,s){const a=new Uh,o=new uM,l=new Set,c=[],f=new Map,u=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,A,P,w,U,W){const X=w.fog,F=U.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Z=e.get(x.envMap||H,k),ee=Z&&Z.mapping===va?Z.image.height:null,le=h[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Pe("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const Se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ee=Se!==void 0?Se.length:0;let ze=0;F.morphAttributes.position!==void 0&&(ze=1),F.morphAttributes.normal!==void 0&&(ze=2),F.morphAttributes.color!==void 0&&(ze=3);let Ke,Fe,K,pe;if(le){const Ue=yn[le];Ke=Ue.vertexShader,Fe=Ue.fragmentShader}else Ke=x.vertexShader,Fe=x.fragmentShader,o.update(x),K=o.getVertexShaderID(x),pe=o.getFragmentShaderID(x);const se=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Ie=U.isInstancedMesh===!0,we=U.isBatchedMesh===!0,dt=!!x.map,He=!!x.matcap,et=!!Z,lt=!!x.aoMap,Ge=!!x.lightMap,Et=!!x.bumpMap,ut=!!x.normalMap,jt=!!x.displacementMap,L=!!x.emissiveMap,Tt=!!x.metalnessMap,Ve=!!x.roughnessMap,ot=x.anisotropy>0,fe=x.clearcoat>0,pt=x.dispersion>0,E=x.iridescence>0,g=x.sheen>0,O=x.transmission>0,q=ot&&!!x.anisotropyMap,Q=fe&&!!x.clearcoatMap,ne=fe&&!!x.clearcoatNormalMap,ce=fe&&!!x.clearcoatRoughnessMap,$=E&&!!x.iridescenceMap,j=E&&!!x.iridescenceThicknessMap,me=g&&!!x.sheenColorMap,xe=g&&!!x.sheenRoughnessMap,ae=!!x.specularMap,ie=!!x.specularColorMap,De=!!x.specularIntensityMap,Oe=O&&!!x.transmissionMap,je=O&&!!x.thicknessMap,I=!!x.gradientMap,re=!!x.alphaMap,Y=x.alphaTest>0,_e=!!x.alphaHash,oe=!!x.extensions;let J=Rn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(J=n.toneMapping);const Te={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:Ke,fragmentShader:Fe,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:we,batchingColor:we&&U._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,instancingMorph:Ie&&U.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:dt,matcap:He,envMap:et,envMapMode:et&&Z.mapping,envMapCubeUVHeight:ee,aoMap:lt,lightMap:Ge,bumpMap:Et,normalMap:ut,displacementMap:jt,emissiveMap:L,normalMapObjectSpace:ut&&x.normalMapType===tx,normalMapTangentSpace:ut&&x.normalMapType===Lf,packedNormalMap:ut&&x.normalMapType===Lf&&pM(x.normalMap.format),metalnessMap:Tt,roughnessMap:Ve,anisotropy:ot,anisotropyMap:q,clearcoat:fe,clearcoatMap:Q,clearcoatNormalMap:ne,clearcoatRoughnessMap:ce,dispersion:pt,iridescence:E,iridescenceMap:$,iridescenceThicknessMap:j,sheen:g,sheenColorMap:me,sheenRoughnessMap:xe,specularMap:ae,specularColorMap:ie,specularIntensityMap:De,transmission:O,transmissionMap:Oe,thicknessMap:je,gradientMap:I,opaque:x.transparent===!1&&x.blending===cr&&x.alphaToCoverage===!1,alphaMap:re,alphaTest:Y,alphaHash:_e,combine:x.combine,mapUv:dt&&_(x.map.channel),aoMapUv:lt&&_(x.aoMap.channel),lightMapUv:Ge&&_(x.lightMap.channel),bumpMapUv:Et&&_(x.bumpMap.channel),normalMapUv:ut&&_(x.normalMap.channel),displacementMapUv:jt&&_(x.displacementMap.channel),emissiveMapUv:L&&_(x.emissiveMap.channel),metalnessMapUv:Tt&&_(x.metalnessMap.channel),roughnessMapUv:Ve&&_(x.roughnessMap.channel),anisotropyMapUv:q&&_(x.anisotropyMap.channel),clearcoatMapUv:Q&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:j&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(x.sheenRoughnessMap.channel),specularMapUv:ae&&_(x.specularMap.channel),specularColorMapUv:ie&&_(x.specularColorMap.channel),specularIntensityMapUv:De&&_(x.specularIntensityMap.channel),transmissionMapUv:Oe&&_(x.transmissionMap.channel),thicknessMapUv:je&&_(x.thicknessMap.channel),alphaMapUv:re&&_(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ut||ot),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(dt||re),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&ut===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Re,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ze,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:J,decodeVideoTexture:dt&&x.map.isVideoTexture===!0&&Xe.getTransfer(x.map.colorSpace)===Je,decodeVideoTextureEmissive:L&&x.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(x.emissiveMap.colorSpace)===Je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gn,flipSided:x.side===Yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)A.push(P),A.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(A,x),b(A,x),A.push(n.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function p(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function b(x,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function C(x){const A=h[x.type];let P;if(A){const w=yn[A];P=Bx.clone(w.uniforms)}else P=x.uniforms;return P}function S(x,A){let P=f.get(A);return P!==void 0?++P.usedTimes:(P=new fM(n,A,x,r),c.push(P),f.set(A,P)),P}function T(x){if(--x.usedTimes===0){const A=c.indexOf(x);c[A]=c[c.length-1],c.pop(),f.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:C,acquireProgram:S,releaseProgram:T,releaseShaderCache:M,programs:c,dispose:R}}function _M(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function gM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Td(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,_,y,m,p){let b=n[e];return b===void 0?(b={id:d.id,object:d,geometry:h,material:_,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},n[e]=b):(b.id=d.id,b.object=d,b.geometry=h,b.material=_,b.materialVariant=a(d),b.groupOrder=y,b.renderOrder=d.renderOrder,b.z=m,b.group=p),e++,b}function l(d,h,_,y,m,p){const b=o(d,h,_,y,m,p);_.transmission>0?i.push(b):_.transparent===!0?r.push(b):t.push(b)}function c(d,h,_,y,m,p){const b=o(d,h,_,y,m,p);_.transmission>0?i.unshift(b):_.transparent===!0?r.unshift(b):t.unshift(b)}function f(d,h){t.length>1&&t.sort(d||gM),i.length>1&&i.sort(h||Td),r.length>1&&r.sort(h||Td)}function u(){for(let d=e,h=n.length;d<h;d++){const _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:u,sort:f}}function xM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Cd,n.set(i,[a])):r>=s.length?(a=new Cd,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function vM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Qe};break;case"SpotLight":t={position:new G,direction:new G,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function SM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let bM=0;function yM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function MM(n){const e=new vM,t=SM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new Mt,a=new Mt;function o(c){let f=0,u=0,d=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let h=0,_=0,y=0,m=0,p=0,b=0,C=0,S=0,T=0,M=0,R=0;c.sort(yM);for(let A=0,P=c.length;A<P;A++){const w=c[A],U=w.color,W=w.intensity,X=w.distance;let F=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Ui?F=w.shadow.map.texture:F=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)f+=U.r*W,u+=U.g*W,d+=U.b*W;else if(w.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(w.sh.coefficients[H],W);R++}else if(w.isDirectionalLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const k=w.shadow,Z=t.get(w);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.directionalShadow[h]=Z,i.directionalShadowMap[h]=F,i.directionalShadowMatrix[h]=w.shadow.matrix,b++}i.directional[h]=H,h++}else if(w.isSpotLight){const H=e.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(U).multiplyScalar(W),H.distance=X,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,i.spot[y]=H;const k=w.shadow;if(w.map&&(i.spotLightMap[T]=w.map,T++,k.updateMatrices(w),w.castShadow&&M++),i.spotLightMatrix[y]=k.matrix,w.castShadow){const Z=t.get(w);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,i.spotShadow[y]=Z,i.spotShadowMap[y]=F,S++}y++}else if(w.isRectAreaLight){const H=e.get(w);H.color.copy(U).multiplyScalar(W),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=H,m++}else if(w.isPointLight){const H=e.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const k=w.shadow,Z=t.get(w);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,i.pointShadow[_]=Z,i.pointShadowMap[_]=F,i.pointShadowMatrix[_]=w.shadow.matrix,C++}i.point[_]=H,_++}else if(w.isHemisphereLight){const H=e.get(w);H.skyColor.copy(w.color).multiplyScalar(W),H.groundColor.copy(w.groundColor).multiplyScalar(W),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==h||x.pointLength!==_||x.spotLength!==y||x.rectAreaLength!==m||x.hemiLength!==p||x.numDirectionalShadows!==b||x.numPointShadows!==C||x.numSpotShadows!==S||x.numSpotMaps!==T||x.numLightProbes!==R)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=S+T-M,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=R,x.directionalLength=h,x.pointLength=_,x.spotLength=y,x.rectAreaLength=m,x.hemiLength=p,x.numDirectionalShadows=b,x.numPointShadows=C,x.numSpotShadows=S,x.numSpotMaps=T,x.numLightProbes=R,i.version=bM++)}function l(c,f){let u=0,d=0,h=0,_=0,y=0;const m=f.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const C=c[p];if(C.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(C.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(C.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(C.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(C.width*.5,0,0),S.halfHeight.set(0,C.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(C.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(C.matrixWorld),S.position.applyMatrix4(m),d++}else if(C.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(C.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Ad(n){const e=new MM(n),t=[],i=[],r=[];function s(d){u.camera=d,t.length=0,i.length=0,r.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){e.setup(t)}function f(d){e.setupView(t,d)}const u={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function EM(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ad(n),e.set(r,[o])):s>=a.length?(o=new Ad(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const TM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,AM=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],RM=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Rd=new Mt,Pr=new G,yo=new G;function wM(n,e,t){let i=new zh;const r=new rt,s=new rt,a=new vt,o=new Vx,l=new Wx,c={},f=t.maxTextureSize,u={[hi]:Yt,[Yt]:hi,[Gn]:Gn},d=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:TM,fragmentShader:CM}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new _n;_.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new qn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let p=this.type;this.render=function(M,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===I0&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ys);const A=n.getRenderTarget(),P=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Vn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const W=p!==this.type;W&&R.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(F=>F.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,F=M.length;X<F;X++){const H=M[X],k=H.shadow;if(k===void 0){Pe("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const Z=k.getFrameExtents();r.multiply(Z),s.copy(k.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Z.x),r.x=s.x*Z.x,k.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Z.y),r.y=s.y*Z.y,k.mapSize.y=s.y));const ee=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=ee,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Nr){if(H.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new wn(r.x,r.y,{format:Ui,type:$n,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new pr(r.x,r.y,En),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=Yn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=It,k.map.depthTexture.magFilter=It}else H.isPointLight?(k.map=new jh(r.x),k.map.depthTexture=new Ox(r.x,Pn)):(k.map=new wn(r.x,r.y),k.map.depthTexture=new pr(r.x,r.y,Pn)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=Yn,this.type===Ys?(k.map.depthTexture.compareFunction=ee?fl:ll,k.map.depthTexture.minFilter=Ot,k.map.depthTexture.magFilter=Ot):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=It,k.map.depthTexture.magFilter=It);k.camera.updateProjectionMatrix()}const le=k.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<le;Se++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,Se),n.clear();else{Se===0&&(n.setRenderTarget(k.map),n.clear());const Ee=k.getViewport(Se);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),U.viewport(a)}if(H.isPointLight){const Ee=k.camera,ze=k.matrix,Ke=H.distance||Ee.far;Ke!==Ee.far&&(Ee.far=Ke,Ee.updateProjectionMatrix()),Pr.setFromMatrixPosition(H.matrixWorld),Ee.position.copy(Pr),yo.copy(Ee.position),yo.add(AM[Se]),Ee.up.copy(RM[Se]),Ee.lookAt(yo),Ee.updateMatrixWorld(),ze.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Rd.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Rd,Ee.coordinateSystem,Ee.reversedDepth)}else k.updateMatrices(H);i=k.getFrustum(),S(R,x,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===Nr&&b(k,x),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(A,P,w)};function b(M,R){const x=e.update(y);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,h.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new wn(r.x,r.y,{format:Ui,type:$n})),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(R,null,x,d,y,null),h.uniforms.shadow_pass.value=M.mapPass.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(R,null,x,h,y,null)}function C(M,R,x,A){let P=null;const w=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)P=w;else if(P=x.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const U=P.uuid,W=R.uuid;let X=c[U];X===void 0&&(X={},c[U]=X);let F=X[W];F===void 0&&(F=P.clone(),X[W]=F,R.addEventListener("dispose",T)),P=F}if(P.visible=R.visible,P.wireframe=R.wireframe,A===Nr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:u[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const U=n.properties.get(P);U.light=x}return P}function S(M,R,x,A,P){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Nr)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);const W=e.update(M),X=M.material;if(Array.isArray(X)){const F=W.groups;for(let H=0,k=F.length;H<k;H++){const Z=F[H],ee=X[Z.materialIndex];if(ee&&ee.visible){const le=C(M,ee,A,P);M.onBeforeShadow(n,M,R,x,W,le,Z),n.renderBufferDirect(x,null,W,le,M,Z),M.onAfterShadow(n,M,R,x,W,le,Z)}}}else if(X.visible){const F=C(M,X,A,P);M.onBeforeShadow(n,M,R,x,W,F,null),n.renderBufferDirect(x,null,W,F,M,null),M.onAfterShadow(n,M,R,x,W,F,null)}}const U=M.children;for(let W=0,X=U.length;W<X;W++)S(U[W],R,x,A,P)}function T(M){M.target.removeEventListener("dispose",T);for(const x in c){const A=c[x],P=M.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function PM(n,e){function t(){let I=!1;const re=new vt;let Y=null;const _e=new vt(0,0,0,0);return{setMask:function(oe){Y!==oe&&!I&&(n.colorMask(oe,oe,oe,oe),Y=oe)},setLocked:function(oe){I=oe},setClear:function(oe,J,Te,Ue,_t){_t===!0&&(oe*=Ue,J*=Ue,Te*=Ue),re.set(oe,J,Te,Ue),_e.equals(re)===!1&&(n.clearColor(oe,J,Te,Ue),_e.copy(re))},reset:function(){I=!1,Y=null,_e.set(-1,0,0,0)}}}function i(){let I=!1,re=!1,Y=null,_e=null,oe=null;return{setReversed:function(J){if(re!==J){const Te=e.get("EXT_clip_control");J?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),re=J;const Ue=oe;oe=null,this.setClear(Ue)}},getReversed:function(){return re},setTest:function(J){J?se(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(J){Y!==J&&!I&&(n.depthMask(J),Y=J)},setFunc:function(J){if(re&&(J=dx[J]),_e!==J){switch(J){case Zo:n.depthFunc(n.NEVER);break;case Ko:n.depthFunc(n.ALWAYS);break;case Jo:n.depthFunc(n.LESS);break;case ur:n.depthFunc(n.LEQUAL);break;case Qo:n.depthFunc(n.EQUAL);break;case ec:n.depthFunc(n.GEQUAL);break;case tc:n.depthFunc(n.GREATER);break;case nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=J}},setLocked:function(J){I=J},setClear:function(J){oe!==J&&(oe=J,re&&(J=1-J),n.clearDepth(J))},reset:function(){I=!1,Y=null,_e=null,oe=null,re=!1}}}function r(){let I=!1,re=null,Y=null,_e=null,oe=null,J=null,Te=null,Ue=null,_t=null;return{setTest:function(tt){I||(tt?se(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(tt){re!==tt&&!I&&(n.stencilMask(tt),re=tt)},setFunc:function(tt,In,gn){(Y!==tt||_e!==In||oe!==gn)&&(n.stencilFunc(tt,In,gn),Y=tt,_e=In,oe=gn)},setOp:function(tt,In,gn){(J!==tt||Te!==In||Ue!==gn)&&(n.stencilOp(tt,In,gn),J=tt,Te=In,Ue=gn)},setLocked:function(tt){I=tt},setClear:function(tt){_t!==tt&&(n.clearStencil(tt),_t=tt)},reset:function(){I=!1,re=null,Y=null,_e=null,oe=null,J=null,Te=null,Ue=null,_t=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},u={},d={},h=new WeakMap,_=[],y=null,m=!1,p=null,b=null,C=null,S=null,T=null,M=null,R=null,x=new Qe(0,0,0),A=0,P=!1,w=null,U=null,W=null,X=null,F=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Z=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ee)[1]),k=Z>=1):ee.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),k=Z>=2);let le=null,Se={};const Ee=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),Ke=new vt().fromArray(Ee),Fe=new vt().fromArray(ze);function K(I,re,Y,_e){const oe=new Uint8Array(4),J=n.createTexture();n.bindTexture(I,J),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Te=0;Te<Y;Te++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(re+Te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return J}const pe={};pe[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(n.DEPTH_TEST),a.setFunc(ur),Et(!1),ut(Pf),se(n.CULL_FACE),lt(Vn);function se(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function Re(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function Ie(I,re){return d[I]!==re?(n.bindFramebuffer(I,re),d[I]=re,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=re),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=re),!0):!1}function we(I,re){let Y=_,_e=!1;if(I){Y=h.get(re),Y===void 0&&(Y=[],h.set(re,Y));const oe=I.textures;if(Y.length!==oe.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Te=oe.length;J<Te;J++)Y[J]=n.COLOR_ATTACHMENT0+J;Y.length=oe.length,_e=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,_e=!0);_e&&n.drawBuffers(Y)}function dt(I){return y!==I?(n.useProgram(I),y=I,!0):!1}const He={[yi]:n.FUNC_ADD,[U0]:n.FUNC_SUBTRACT,[N0]:n.FUNC_REVERSE_SUBTRACT};He[F0]=n.MIN,He[O0]=n.MAX;const et={[k0]:n.ZERO,[B0]:n.ONE,[z0]:n.SRC_COLOR,[qo]:n.SRC_ALPHA,[$0]:n.SRC_ALPHA_SATURATE,[W0]:n.DST_COLOR,[H0]:n.DST_ALPHA,[G0]:n.ONE_MINUS_SRC_COLOR,[jo]:n.ONE_MINUS_SRC_ALPHA,[X0]:n.ONE_MINUS_DST_COLOR,[V0]:n.ONE_MINUS_DST_ALPHA,[Y0]:n.CONSTANT_COLOR,[q0]:n.ONE_MINUS_CONSTANT_COLOR,[j0]:n.CONSTANT_ALPHA,[Z0]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(I,re,Y,_e,oe,J,Te,Ue,_t,tt){if(I===Vn){m===!0&&(Re(n.BLEND),m=!1);return}if(m===!1&&(se(n.BLEND),m=!0),I!==L0){if(I!==p||tt!==P){if((b!==yi||T!==yi)&&(n.blendEquation(n.FUNC_ADD),b=yi,T=yi),tt)switch(I){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yo:n.blendFunc(n.ONE,n.ONE);break;case Df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case If:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:qe("WebGLState: Invalid blending: ",I);break}else switch(I){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Df:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case If:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",I);break}C=null,S=null,M=null,R=null,x.set(0,0,0),A=0,p=I,P=tt}return}oe=oe||re,J=J||Y,Te=Te||_e,(re!==b||oe!==T)&&(n.blendEquationSeparate(He[re],He[oe]),b=re,T=oe),(Y!==C||_e!==S||J!==M||Te!==R)&&(n.blendFuncSeparate(et[Y],et[_e],et[J],et[Te]),C=Y,S=_e,M=J,R=Te),(Ue.equals(x)===!1||_t!==A)&&(n.blendColor(Ue.r,Ue.g,Ue.b,_t),x.copy(Ue),A=_t),p=I,P=!1}function Ge(I,re){I.side===Gn?Re(n.CULL_FACE):se(n.CULL_FACE);let Y=I.side===Yt;re&&(Y=!Y),Et(Y),I.blending===cr&&I.transparent===!1?lt(Vn):lt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const _e=I.stencilWrite;o.setTest(_e),_e&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),L(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Et(I){w!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),w=I)}function ut(I){I!==P0?(se(n.CULL_FACE),I!==U&&(I===Pf?n.cullFace(n.BACK):I===D0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),U=I}function jt(I){I!==W&&(k&&n.lineWidth(I),W=I)}function L(I,re,Y){I?(se(n.POLYGON_OFFSET_FILL),(X!==re||F!==Y)&&(X=re,F=Y,a.getReversed()&&(re=-re),n.polygonOffset(re,Y))):Re(n.POLYGON_OFFSET_FILL)}function Tt(I){I?se(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function Ve(I){I===void 0&&(I=n.TEXTURE0+H-1),le!==I&&(n.activeTexture(I),le=I)}function ot(I,re,Y){Y===void 0&&(le===null?Y=n.TEXTURE0+H-1:Y=le);let _e=Se[Y];_e===void 0&&(_e={type:void 0,texture:void 0},Se[Y]=_e),(_e.type!==I||_e.texture!==re)&&(le!==Y&&(n.activeTexture(Y),le=Y),n.bindTexture(I,re||pe[I]),_e.type=I,_e.texture=re)}function fe(){const I=Se[le];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function pt(){try{n.compressedTexImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function g(){try{n.texSubImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function O(){try{n.texSubImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function ne(){try{n.texStorage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function ce(){try{n.texStorage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function $(){try{n.texImage2D(...arguments)}catch(I){qe("WebGLState:",I)}}function j(){try{n.texImage3D(...arguments)}catch(I){qe("WebGLState:",I)}}function me(I){return u[I]!==void 0?u[I]:n.getParameter(I)}function xe(I,re){u[I]!==re&&(n.pixelStorei(I,re),u[I]=re)}function ae(I){Ke.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ke.copy(I))}function ie(I){Fe.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Fe.copy(I))}function De(I,re){let Y=c.get(re);Y===void 0&&(Y=new WeakMap,c.set(re,Y));let _e=Y.get(I);_e===void 0&&(_e=n.getUniformBlockIndex(re,I.name),Y.set(I,_e))}function Oe(I,re){const _e=c.get(re).get(I);l.get(re)!==_e&&(n.uniformBlockBinding(re,_e,I.__bindingPointIndex),l.set(re,_e))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},u={},le=null,Se={},d={},h=new WeakMap,_=[],y=null,m=!1,p=null,b=null,C=null,S=null,T=null,M=null,R=null,x=new Qe(0,0,0),A=0,P=!1,w=null,U=null,W=null,X=null,F=null,Ke.set(0,0,n.canvas.width,n.canvas.height),Fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:Re,bindFramebuffer:Ie,drawBuffers:we,useProgram:dt,setBlending:lt,setMaterial:Ge,setFlipSided:Et,setCullFace:ut,setLineWidth:jt,setPolygonOffset:L,setScissorTest:Tt,activeTexture:Ve,bindTexture:ot,unbindTexture:fe,compressedTexImage2D:pt,compressedTexImage3D:E,texImage2D:$,texImage3D:j,pixelStorei:xe,getParameter:me,updateUBOMapping:De,uniformBlockBinding:Oe,texStorage2D:ne,texStorage3D:ce,texSubImage2D:g,texSubImage3D:O,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:ae,viewport:ie,reset:je}}function DM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,f=new WeakMap,u=new Set;let d;const h=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,g){return _?new OffscreenCanvas(E,g):ua("canvas")}function m(E,g,O){let q=1;const Q=pt(E);if((Q.width>O||Q.height>O)&&(q=O/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ne=Math.floor(q*Q.width),ce=Math.floor(q*Q.height);d===void 0&&(d=y(ne,ce));const $=g?y(ne,ce):d;return $.width=ne,$.height=ce,$.getContext("2d").drawImage(E,0,0,ne,ce),Pe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ne+"x"+ce+")."),$}else return"data"in E&&Pe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function p(E){return E.generateMipmaps}function b(E){n.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(E,g,O,q,Q,ne=!1){if(E!==null){if(n[E]!==void 0)return n[E];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ce;q&&(ce=e.get("EXT_texture_norm16"),ce||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===n.RED&&(O===n.FLOAT&&($=n.R32F),O===n.HALF_FLOAT&&($=n.R16F),O===n.UNSIGNED_BYTE&&($=n.R8),O===n.UNSIGNED_SHORT&&ce&&($=ce.R16_EXT),O===n.SHORT&&ce&&($=ce.R16_SNORM_EXT)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.R8UI),O===n.UNSIGNED_SHORT&&($=n.R16UI),O===n.UNSIGNED_INT&&($=n.R32UI),O===n.BYTE&&($=n.R8I),O===n.SHORT&&($=n.R16I),O===n.INT&&($=n.R32I)),g===n.RG&&(O===n.FLOAT&&($=n.RG32F),O===n.HALF_FLOAT&&($=n.RG16F),O===n.UNSIGNED_BYTE&&($=n.RG8),O===n.UNSIGNED_SHORT&&ce&&($=ce.RG16_EXT),O===n.SHORT&&ce&&($=ce.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RG8UI),O===n.UNSIGNED_SHORT&&($=n.RG16UI),O===n.UNSIGNED_INT&&($=n.RG32UI),O===n.BYTE&&($=n.RG8I),O===n.SHORT&&($=n.RG16I),O===n.INT&&($=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGB8UI),O===n.UNSIGNED_SHORT&&($=n.RGB16UI),O===n.UNSIGNED_INT&&($=n.RGB32UI),O===n.BYTE&&($=n.RGB8I),O===n.SHORT&&($=n.RGB16I),O===n.INT&&($=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&($=n.RGBA8UI),O===n.UNSIGNED_SHORT&&($=n.RGBA16UI),O===n.UNSIGNED_INT&&($=n.RGBA32UI),O===n.BYTE&&($=n.RGBA8I),O===n.SHORT&&($=n.RGBA16I),O===n.INT&&($=n.RGBA32I)),g===n.RGB&&(O===n.UNSIGNED_SHORT&&ce&&($=ce.RGB16_EXT),O===n.SHORT&&ce&&($=ce.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),g===n.RGBA){const j=ne?fa:Xe.getTransfer(Q);O===n.FLOAT&&($=n.RGBA32F),O===n.HALF_FLOAT&&($=n.RGBA16F),O===n.UNSIGNED_BYTE&&($=j===Je?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&ce&&($=ce.RGBA16_EXT),O===n.SHORT&&ce&&($=ce.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function T(E,g){let O;return E?g===null||g===Pn||g===Kr?O=n.DEPTH24_STENCIL8:g===En?O=n.DEPTH32F_STENCIL8:g===Zr&&(O=n.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Pn||g===Kr?O=n.DEPTH_COMPONENT24:g===En?O=n.DEPTH_COMPONENT32F:g===Zr&&(O=n.DEPTH_COMPONENT16),O}function M(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==It&&E.minFilter!==Ot?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function R(E){const g=E.target;g.removeEventListener("dispose",R),A(g),g.isVideoTexture&&f.delete(g),g.isHTMLTexture&&u.delete(g)}function x(E){const g=E.target;g.removeEventListener("dispose",x),w(g)}function A(E){const g=i.get(E);if(g.__webglInit===void 0)return;const O=E.source,q=h.get(O);if(q){const Q=q[g.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(E),Object.keys(q).length===0&&h.delete(O)}i.remove(E)}function P(E){const g=i.get(E);n.deleteTexture(g.__webglTexture);const O=E.source,q=h.get(O);delete q[g.__cacheKey],a.memory.textures--}function w(E){const g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let Q=0;Q<g.__webglFramebuffer[q].length;Q++)n.deleteFramebuffer(g.__webglFramebuffer[q][Q]);else n.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)n.deleteFramebuffer(g.__webglFramebuffer[q]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=E.textures;for(let q=0,Q=O.length;q<Q;q++){const ne=i.get(O[q]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(O[q])}i.remove(E)}let U=0;function W(){U=0}function X(){return U}function F(E){U=E}function H(){const E=U;return E>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),U+=1,E}function k(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function Z(E,g){const O=i.get(E);if(E.isVideoTexture&&ot(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&O.__version!==E.version){const q=E.image;if(q===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(O,E,g);return}}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function ee(E,g){const O=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){Re(O,E,g);return}else E.isExternalTexture&&(O.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function le(E,g){const O=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){Re(O,E,g);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function Se(E,g){const O=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&O.__version!==E.version){Ie(O,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const Ee={[ic]:n.REPEAT,[Hn]:n.CLAMP_TO_EDGE,[rc]:n.MIRRORED_REPEAT},ze={[It]:n.NEAREST,[Q0]:n.NEAREST_MIPMAP_NEAREST,[ps]:n.NEAREST_MIPMAP_LINEAR,[Ot]:n.LINEAR,[Xa]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},Ke={[nx]:n.NEVER,[ox]:n.ALWAYS,[ix]:n.LESS,[ll]:n.LEQUAL,[rx]:n.EQUAL,[fl]:n.GEQUAL,[sx]:n.GREATER,[ax]:n.NOTEQUAL};function Fe(E,g){if(g.type===En&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ot||g.magFilter===Xa||g.magFilter===ps||g.magFilter===Ai||g.minFilter===Ot||g.minFilter===Xa||g.minFilter===ps||g.minFilter===Ai)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Ee[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Ee[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Ee[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ze[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ze[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ke[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===It||g.minFilter!==ps&&g.minFilter!==Ai||g.type===En&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function K(E,g){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",R));const q=g.source;let Q=h.get(q);Q===void 0&&(Q={},h.set(q,Q));const ne=k(g);if(ne!==E.__cacheKey){Q[ne]===void 0&&(Q[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[ne].usedTimes++;const ce=Q[E.__cacheKey];ce!==void 0&&(Q[E.__cacheKey].usedTimes--,ce.usedTimes===0&&P(g)),E.__cacheKey=ne,E.__webglTexture=Q[ne].texture}return O}function pe(E,g,O){return Math.floor(Math.floor(E/O)/g)}function se(E,g,O,q){const ne=E.updateRanges;if(ne.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,O,q,g.data);else{ne.sort((xe,ae)=>xe.start-ae.start);let ce=0;for(let xe=1;xe<ne.length;xe++){const ae=ne[ce],ie=ne[xe],De=ae.start+ae.count,Oe=pe(ie.start,g.width,4),je=pe(ae.start,g.width,4);ie.start<=De+1&&Oe===je&&pe(ie.start+ie.count-1,g.width,4)===Oe?ae.count=Math.max(ae.count,ie.start+ie.count-ae.start):(++ce,ne[ce]=ie)}ne.length=ce+1;const $=t.getParameter(n.UNPACK_ROW_LENGTH),j=t.getParameter(n.UNPACK_SKIP_PIXELS),me=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let xe=0,ae=ne.length;xe<ae;xe++){const ie=ne[xe],De=Math.floor(ie.start/4),Oe=Math.ceil(ie.count/4),je=De%g.width,I=Math.floor(De/g.width),re=Oe,Y=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,je),t.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,je,I,re,Y,O,q,g.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,j),t.pixelStorei(n.UNPACK_SKIP_ROWS,me)}}function Re(E,g,O){let q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=n.TEXTURE_3D);const Q=K(E,g),ne=g.source;t.bindTexture(q,E.__webglTexture,n.TEXTURE0+O);const ce=i.get(ne);if(ne.version!==ce.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const Y=Xe.getPrimaries(Xe.workingColorSpace),_e=g.colorSpace===si?null:Xe.getPrimaries(g.colorSpace),oe=g.colorSpace===si||Y===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let j=m(g.image,!1,r.maxTextureSize);j=fe(g,j);const me=s.convert(g.format,g.colorSpace),xe=s.convert(g.type);let ae=S(g.internalFormat,me,xe,g.normalized,g.colorSpace,g.isVideoTexture);Fe(q,g);let ie;const De=g.mipmaps,Oe=g.isVideoTexture!==!0,je=ce.__version===void 0||Q===!0,I=ne.dataReady,re=M(g,j);if(g.isDepthTexture)ae=T(g.format===Ri,g.type),je&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,ae,j.width,j.height):t.texImage2D(n.TEXTURE_2D,0,ae,j.width,j.height,0,me,xe,null));else if(g.isDataTexture)if(De.length>0){Oe&&je&&t.texStorage2D(n.TEXTURE_2D,re,ae,De[0].width,De[0].height);for(let Y=0,_e=De.length;Y<_e;Y++)ie=De[Y],Oe?I&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ie.width,ie.height,me,xe,ie.data):t.texImage2D(n.TEXTURE_2D,Y,ae,ie.width,ie.height,0,me,xe,ie.data);g.generateMipmaps=!1}else Oe?(je&&t.texStorage2D(n.TEXTURE_2D,re,ae,j.width,j.height),I&&se(g,j,me,xe)):t.texImage2D(n.TEXTURE_2D,0,ae,j.width,j.height,0,me,xe,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Oe&&je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,ae,De[0].width,De[0].height,j.depth);for(let Y=0,_e=De.length;Y<_e;Y++)if(ie=De[Y],g.format!==pn)if(me!==null)if(Oe){if(I)if(g.layerUpdates.size>0){const oe=sd(ie.width,ie.height,g.format,g.type);for(const J of g.layerUpdates){const Te=ie.data.subarray(J*oe/ie.data.BYTES_PER_ELEMENT,(J+1)*oe/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,J,ie.width,ie.height,1,me,Te)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ie.width,ie.height,j.depth,me,ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,ae,ie.width,ie.height,j.depth,0,ie.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,ie.width,ie.height,j.depth,me,xe,ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,ae,ie.width,ie.height,j.depth,0,me,xe,ie.data)}else{Oe&&je&&t.texStorage2D(n.TEXTURE_2D,re,ae,De[0].width,De[0].height);for(let Y=0,_e=De.length;Y<_e;Y++)ie=De[Y],g.format!==pn?me!==null?Oe?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,ie.width,ie.height,me,ie.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,ae,ie.width,ie.height,0,ie.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ie.width,ie.height,me,xe,ie.data):t.texImage2D(n.TEXTURE_2D,Y,ae,ie.width,ie.height,0,me,xe,ie.data)}else if(g.isDataArrayTexture)if(Oe){if(je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,ae,j.width,j.height,j.depth),I)if(g.layerUpdates.size>0){const Y=sd(j.width,j.height,g.format,g.type);for(const _e of g.layerUpdates){const oe=j.data.subarray(_e*Y/j.data.BYTES_PER_ELEMENT,(_e+1)*Y/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,j.width,j.height,1,me,xe,oe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,me,xe,j.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ae,j.width,j.height,j.depth,0,me,xe,j.data);else if(g.isData3DTexture)Oe?(je&&t.texStorage3D(n.TEXTURE_3D,re,ae,j.width,j.height,j.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,me,xe,j.data)):t.texImage3D(n.TEXTURE_3D,0,ae,j.width,j.height,j.depth,0,me,xe,j.data);else if(g.isFramebufferTexture){if(je)if(Oe)t.texStorage2D(n.TEXTURE_2D,re,ae,j.width,j.height);else{let Y=j.width,_e=j.height;for(let oe=0;oe<re;oe++)t.texImage2D(n.TEXTURE_2D,oe,ae,Y,_e,0,me,xe,null),Y>>=1,_e>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const Y=n.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),j.parentNode!==Y){Y.appendChild(j),u.add(g),Y.onpaint=Ue=>{const _t=Ue.changedElements;for(const tt of u)_t.includes(tt.image)&&(tt.needsUpdate=!0)},Y.requestPaint();return}const _e=0,oe=n.RGBA,J=n.RGBA,Te=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,_e,oe,J,Te,j),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(De.length>0){if(Oe&&je){const Y=pt(De[0]);t.texStorage2D(n.TEXTURE_2D,re,ae,Y.width,Y.height)}for(let Y=0,_e=De.length;Y<_e;Y++)ie=De[Y],Oe?I&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,me,xe,ie):t.texImage2D(n.TEXTURE_2D,Y,ae,me,xe,ie);g.generateMipmaps=!1}else if(Oe){if(je){const Y=pt(j);t.texStorage2D(n.TEXTURE_2D,re,ae,Y.width,Y.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,xe,j)}else t.texImage2D(n.TEXTURE_2D,0,ae,me,xe,j);p(g)&&b(q),ce.__version=ne.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Ie(E,g,O){if(g.image.length!==6)return;const q=K(E,g),Q=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+O);const ne=i.get(Q);if(Q.version!==ne.__version||q===!0){t.activeTexture(n.TEXTURE0+O);const ce=Xe.getPrimaries(Xe.workingColorSpace),$=g.colorSpace===si?null:Xe.getPrimaries(g.colorSpace),j=g.colorSpace===si||ce===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const me=g.isCompressedTexture||g.image[0].isCompressedTexture,xe=g.image[0]&&g.image[0].isDataTexture,ae=[];for(let J=0;J<6;J++)!me&&!xe?ae[J]=m(g.image[J],!0,r.maxCubemapSize):ae[J]=xe?g.image[J].image:g.image[J],ae[J]=fe(g,ae[J]);const ie=ae[0],De=s.convert(g.format,g.colorSpace),Oe=s.convert(g.type),je=S(g.internalFormat,De,Oe,g.normalized,g.colorSpace),I=g.isVideoTexture!==!0,re=ne.__version===void 0||q===!0,Y=Q.dataReady;let _e=M(g,ie);Fe(n.TEXTURE_CUBE_MAP,g);let oe;if(me){I&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,je,ie.width,ie.height);for(let J=0;J<6;J++){oe=ae[J].mipmaps;for(let Te=0;Te<oe.length;Te++){const Ue=oe[Te];g.format!==pn?De!==null?I?Y&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Ue.width,Ue.height,De,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,je,Ue.width,Ue.height,0,Ue.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,0,0,Ue.width,Ue.height,De,Oe,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te,je,Ue.width,Ue.height,0,De,Oe,Ue.data)}}}else{if(oe=g.mipmaps,I&&re){oe.length>0&&_e++;const J=pt(ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,je,J.width,J.height)}for(let J=0;J<6;J++)if(xe){I?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ae[J].width,ae[J].height,De,Oe,ae[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,ae[J].width,ae[J].height,0,De,Oe,ae[J].data);for(let Te=0;Te<oe.length;Te++){const _t=oe[Te].image[J].image;I?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,_t.width,_t.height,De,Oe,_t.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,je,_t.width,_t.height,0,De,Oe,_t.data)}}else{I?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,De,Oe,ae[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,De,Oe,ae[J]);for(let Te=0;Te<oe.length;Te++){const Ue=oe[Te];I?Y&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,0,0,De,Oe,Ue.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te+1,je,De,Oe,Ue.image[J])}}}p(g)&&b(n.TEXTURE_CUBE_MAP),ne.__version=Q.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function we(E,g,O,q,Q,ne){const ce=s.convert(O.format,O.colorSpace),$=s.convert(O.type),j=S(O.internalFormat,ce,$,O.normalized,O.colorSpace),me=i.get(g),xe=i.get(O);if(xe.__renderTarget=g,!me.__hasExternalTextures){const ae=Math.max(1,g.width>>ne),ie=Math.max(1,g.height>>ne);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ne,j,ae,ie,g.depth,0,ce,$,null):t.texImage2D(Q,ne,j,ae,ie,0,ce,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Q,xe.__webglTexture,0,Tt(g)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Q,xe.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(E,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const q=g.depthTexture,Q=q&&q.isDepthTexture?q.type:null,ne=T(g.stencilBuffer,Q),ce=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ve(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt(g),ne,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt(g),ne,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ne,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,E)}else{const q=g.textures;for(let Q=0;Q<q.length;Q++){const ne=q[Q],ce=s.convert(ne.format,ne.colorSpace),$=s.convert(ne.type),j=S(ne.internalFormat,ce,$,ne.normalized,ne.colorSpace);Ve(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt(g),j,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt(g),j,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,j,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(E,g,O){const q=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(g.depthTexture);if(Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,g.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,g.depthTexture);const me=s.convert(g.depthTexture.format),xe=s.convert(g.depthTexture.type);let ae;g.depthTexture.format===Yn?ae=n.DEPTH_COMPONENT24:g.depthTexture.format===Ri&&(ae=n.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ae,g.width,g.height,0,me,xe,null)}}else Z(g.depthTexture,0);const ne=Q.__webglTexture,ce=Tt(g),$=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,j=g.depthTexture.format===Ri?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Yn)Ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,$,ne,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,j,$,ne,0);else if(g.depthTexture.format===Ri)Ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,$,ne,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,j,$,ne,0);else throw new Error("Unknown depthTexture format")}function et(E){const g=i.get(E),O=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const Q=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),g.__depthDisposeCallback=Q}g.__boundDepthTexture=q}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(O)for(let q=0;q<6;q++)He(g.__webglFramebuffer[q],E,q);else{const q=E.texture.mipmaps;q&&q.length>0?He(g.__webglFramebuffer[0],E,0):He(g.__webglFramebuffer,E,0)}else if(O){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=n.createRenderbuffer(),dt(g.__webglDepthbuffer[q],E,!1);else{const Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ne)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),dt(g.__webglDepthbuffer,E,!1);else{const Q=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ne)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(E,g,O){const q=i.get(E);g!==void 0&&we(q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&et(E)}function Ge(E){const g=E.texture,O=i.get(E),q=i.get(g);E.addEventListener("dispose",x);const Q=E.textures,ne=E.isWebGLCubeRenderTarget===!0,ce=Q.length>1;if(ce||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=g.version,a.memory.textures++),ne){O.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[$]=[];for(let j=0;j<g.mipmaps.length;j++)O.__webglFramebuffer[$][j]=n.createFramebuffer()}else O.__webglFramebuffer[$]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)O.__webglFramebuffer[$]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(ce)for(let $=0,j=Q.length;$<j;$++){const me=i.get(Q[$]);me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ve(E)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let $=0;$<Q.length;$++){const j=Q[$];O.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[$]);const me=s.convert(j.format,j.colorSpace),xe=s.convert(j.type),ae=S(j.internalFormat,me,xe,j.normalized,j.colorSpace,E.isXRRenderTarget===!0),ie=Tt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ae,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,O.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(O.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)we(O.__webglFramebuffer[$][j],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else we(O.__webglFramebuffer[$],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(g)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let $=0,j=Q.length;$<j;$++){const me=Q[$],xe=i.get(me);let ae=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,xe.__webglTexture),Fe(ae,me),we(O.__webglFramebuffer,E,me,n.COLOR_ATTACHMENT0+$,ae,0),p(me)&&b(ae)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,q.__webglTexture),Fe($,g),g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)we(O.__webglFramebuffer[j],E,g,n.COLOR_ATTACHMENT0,$,j);else we(O.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,$,0);p(g)&&b($),t.unbindTexture()}E.depthBuffer&&et(E)}function Et(E){const g=E.textures;for(let O=0,q=g.length;O<q;O++){const Q=g[O];if(p(Q)){const ne=C(E),ce=i.get(Q).__webglTexture;t.bindTexture(ne,ce),b(ne),t.unbindTexture()}}}const ut=[],jt=[];function L(E){if(E.samples>0){if(Ve(E)===!1){const g=E.textures,O=E.width,q=E.height;let Q=n.COLOR_BUFFER_BIT;const ne=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(E),$=g.length>1;if($)for(let me=0;me<g.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const j=E.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let me=0;me<g.length;me++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[me]);const xe=i.get(g[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,xe,0)}n.blitFramebuffer(0,0,O,q,0,0,O,q,Q,n.NEAREST),l===!0&&(ut.length=0,jt.length=0,ut.push(n.COLOR_ATTACHMENT0+me),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ut.push(ne),jt.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,jt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let me=0;me<g.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,ce.__webglColorRenderbuffer[me]);const xe=i.get(g[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Tt(E){return Math.min(r.maxSamples,E.samples)}function Ve(E){const g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ot(E){const g=a.render.frame;f.get(E)!==g&&(f.set(E,g),E.update())}function fe(E,g){const O=E.colorSpace,q=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==la&&O!==si&&(Xe.getTransfer(O)===Je?(q!==pn||Q!==on)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",O)),g}function pt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.getTextureUnits=X,this.setTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=ee,this.setTexture3D=le,this.setTextureCube=Se,this.rebindTextures=lt,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function IM(n,e){function t(i,r=si){let s;const a=Xe.getTransfer(r);if(i===on)return n.UNSIGNED_BYTE;if(i===rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Ah)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Rh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Th)return n.BYTE;if(i===Ch)return n.SHORT;if(i===Zr)return n.UNSIGNED_SHORT;if(i===il)return n.INT;if(i===Pn)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===$n)return n.HALF_FLOAT;if(i===wh)return n.ALPHA;if(i===Ph)return n.RGB;if(i===pn)return n.RGBA;if(i===Yn)return n.DEPTH_COMPONENT;if(i===Ri)return n.DEPTH_STENCIL;if(i===Dh)return n.RED;if(i===al)return n.RED_INTEGER;if(i===Ui)return n.RG;if(i===ol)return n.RG_INTEGER;if(i===cl)return n.RGBA_INTEGER;if(i===qs||i===js||i===Zs||i===Ks)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===js)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===sc||i===ac||i===oc||i===cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===sc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===oc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===lc||i===fc||i===dc||i===uc||i===hc||i===oa||i===pc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===lc||i===fc)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===dc)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===uc)return s.COMPRESSED_R11_EAC;if(i===hc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===oa)return s.COMPRESSED_RG11_EAC;if(i===pc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===mc||i===_c||i===gc||i===xc||i===vc||i===Sc||i===bc||i===yc||i===Mc||i===Ec||i===Tc||i===Cc||i===Ac||i===Rc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===mc)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gc)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vc)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sc)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bc)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yc)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mc)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ec)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tc)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cc)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ac)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rc)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wc||i===Pc||i===Dc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===wc)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ic||i===Lc||i===ca||i===Uc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ic)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ca)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const LM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Vh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Dn({vertexShader:LM,fragmentShader:UM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qn(new ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FM extends zi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,u=null,d=null,h=null,_=null;const y=typeof XRWebGLBinding<"u",m=new NM,p={},b=t.getContextAttributes();let C=null,S=null;const T=[],M=[],R=new rt;let x=null;const A=new sn;A.viewport=new vt;const P=new sn;P.viewport=new vt;const w=[A,P],U=new $x;let W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let pe=T[K];return pe===void 0&&(pe=new Qa,T[K]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(K){let pe=T[K];return pe===void 0&&(pe=new Qa,T[K]=pe),pe.getGripSpace()},this.getHand=function(K){let pe=T[K];return pe===void 0&&(pe=new Qa,T[K]=pe),pe.getHandSpace()};function F(K){const pe=M.indexOf(K.inputSource);if(pe===-1)return;const se=T[pe];se!==void 0&&(se.update(K.inputSource,K.frame,c||a),se.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",k);for(let K=0;K<T.length;K++){const pe=M[K];pe!==null&&(M[K]=null,T[K].disconnect(pe))}W=null,X=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(C),h=null,d=null,u=null,r=null,S=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u===null&&y&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",H),r.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Re=null,Ie=null;b.depth&&(Ie=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=b.stencil?Ri:Yn,Re=b.stencil?Kr:Pn);const we={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new wn(d.textureWidth,d.textureHeight,{format:pn,type:on,depthTexture:new pr(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new wn(h.framebufferWidth,h.framebufferHeight,{format:pn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(K){for(let pe=0;pe<K.removed.length;pe++){const se=K.removed[pe],Re=M.indexOf(se);Re>=0&&(M[Re]=null,T[Re].disconnect(se))}for(let pe=0;pe<K.added.length;pe++){const se=K.added[pe];let Re=M.indexOf(se);if(Re===-1){for(let we=0;we<T.length;we++)if(we>=M.length){M.push(se),Re=we;break}else if(M[we]===null){M[we]=se,Re=we;break}if(Re===-1)break}const Ie=T[Re];Ie&&Ie.connect(se)}}const Z=new G,ee=new G;function le(K,pe,se){Z.setFromMatrixPosition(pe.matrixWorld),ee.setFromMatrixPosition(se.matrixWorld);const Re=Z.distanceTo(ee),Ie=pe.projectionMatrix.elements,we=se.projectionMatrix.elements,dt=Ie[14]/(Ie[10]-1),He=Ie[14]/(Ie[10]+1),et=(Ie[9]+1)/Ie[5],lt=(Ie[9]-1)/Ie[5],Ge=(Ie[8]-1)/Ie[0],Et=(we[8]+1)/we[0],ut=dt*Ge,jt=dt*Et,L=Re/(-Ge+Et),Tt=L*-Ge;if(pe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Tt),K.translateZ(L),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(pe.projectionMatrix),K.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ve=dt+L,ot=He+L,fe=ut-Tt,pt=jt+(Re-Tt),E=et*He/ot*Ve,g=lt*He/ot*Ve;K.projectionMatrix.makePerspective(fe,pt,E,g,Ve,ot),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Se(K,pe){pe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(pe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let pe=K.near,se=K.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(se=m.depthFar)),U.near=P.near=A.near=pe,U.far=P.far=A.far=se,(W!==U.near||X!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),W=U.near,X=U.far),U.layers.mask=K.layers.mask|6,A.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;const Re=K.parent,Ie=U.cameras;Se(U,Re);for(let we=0;we<Ie.length;we++)Se(Ie[we],Re);Ie.length===2?le(U,A,P):U.projectionMatrix.copy(A.projectionMatrix),Ee(K,U,Re)};function Ee(K,pe,se){se===null?K.matrix.copy(pe.matrixWorld):(K.matrix.copy(se.matrixWorld),K.matrix.invert(),K.matrix.multiply(pe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(pe.projectionMatrix),K.projectionMatrixInverse.copy(pe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(K){return p[K]};let ze=null;function Ke(K,pe){if(f=pe.getViewerPose(c||a),_=pe,f!==null){const se=f.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Re=!1;se.length!==U.cameras.length&&(U.cameras.length=0,Re=!0);for(let He=0;He<se.length;He++){const et=se[He];let lt=null;if(h!==null)lt=h.getViewport(et);else{const Et=u.getViewSubImage(d,et);lt=Et.viewport,He===0&&(e.setRenderTargetTextures(S,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(S))}let Ge=w[He];Ge===void 0&&(Ge=new sn,Ge.layers.enable(He),Ge.viewport=new vt,w[He]=Ge),Ge.matrix.fromArray(et.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(et.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(lt.x,lt.y,lt.width,lt.height),He===0&&(U.matrix.copy(Ge.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Re===!0&&U.cameras.push(Ge)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){u=i.getBinding();const He=u.getDepthInformation(se[0]);He&&He.isValid&&He.texture&&m.init(He,r.renderState)}if(Ie&&Ie.includes("camera-access")&&y){e.state.unbindTexture(),u=i.getBinding();for(let He=0;He<se.length;He++){const et=se[He].camera;if(et){let lt=p[et];lt||(lt=new Vh,p[et]=lt);const Ge=u.getCameraImage(et);lt.sourceTexture=Ge}}}}for(let se=0;se<T.length;se++){const Re=M[se],Ie=T[se];Re!==null&&Ie!==void 0&&Ie.update(Re,pe,c||a)}ze&&ze(K,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),_=null}const Fe=new Yh;Fe.setAnimationLoop(Ke),this.setAnimationLoop=function(K){ze=K},this.dispose=function(){}}}const OM=new Mt,ep=new Le;ep.set(-1,0,0,0,1,0,0,0,1);function kM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Wh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,C,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,C):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),C=b.envMap,S=b.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(OM.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ep),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=C*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function BM(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,C){const S=C.program;i.uniformBlockBinding(b,S)}function c(b,C){let S=r[b.id];S===void 0&&(_(b),S=f(b),r[b.id]=S,b.addEventListener("dispose",m));const T=C.program;i.updateUBOMapping(b,T);const M=e.render.frame;s[b.id]!==M&&(d(b),s[b.id]=M)}function f(b){const C=u();b.__bindingPointIndex=C;const S=n.createBuffer(),T=b.__size,M=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,T,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,S),S}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const C=r[b.id],S=b.uniforms,T=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let M=0,R=S.length;M<R;M++){const x=Array.isArray(S[M])?S[M]:[S[M]];for(let A=0,P=x.length;A<P;A++){const w=x[A];if(h(w,M,A,T)===!0){const U=w.__offset,W=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let F=0;F<W.length;F++){const H=W[F],k=y(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,U+X,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):ArrayBuffer.isView(H)?w.__data.set(new H.constructor(H.buffer,H.byteOffset,w.__data.length)):(H.toArray(w.__data,X),X+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,C,S,T){const M=b.value,R=C+"_"+S;if(T[R]===void 0)return typeof M=="number"||typeof M=="boolean"?T[R]=M:ArrayBuffer.isView(M)?T[R]=M.slice():T[R]=M.clone(),!0;{const x=T[R];if(typeof M=="number"||typeof M=="boolean"){if(x!==M)return T[R]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(x.equals(M)===!1)return x.copy(M),!0}}return!1}function _(b){const C=b.uniforms;let S=0;const T=16;for(let R=0,x=C.length;R<x;R++){const A=Array.isArray(C[R])?C[R]:[C[R]];for(let P=0,w=A.length;P<w;P++){const U=A[P],W=Array.isArray(U.value)?U.value:[U.value];for(let X=0,F=W.length;X<F;X++){const H=W[X],k=y(H),Z=S%T,ee=Z%k.boundary,le=Z+ee;S+=ee,le!==0&&T-le<k.storage&&(S+=T-le),U.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=k.storage}}}const M=S%T;return M>0&&(S+=T-M),b.__size=S,b.__cache={},this}function y(b){const C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=48,C.storage=48):b.isMatrix4?(C.boundary=64,C.storage=64):b.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(C.boundary=16,C.storage=b.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",b),C}function m(b){const C=b.target;C.removeEventListener("dispose",m);const S=a.indexOf(C.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function p(){for(const b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}const zM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let bn=null;function GM(){return bn===null&&(bn=new Ix(zM,16,16,Ui,$n),bn.name="DFG_LUT",bn.minFilter=Ot,bn.magFilter=Ot,bn.wrapS=Hn,bn.wrapT=Hn,bn.generateMipmaps=!1,bn.needsUpdate=!0),bn}class HM{constructor(e={}){const{canvas:t=lx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=on}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const y=h,m=new Set([cl,ol,al]),p=new Set([on,Pn,Zr,Kr,rl,sl]),b=new Uint32Array(4),C=new Int32Array(4),S=new G;let T=null,M=null;const R=[],x=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let w=!1,U=null;this._outputColorSpace=rn;let W=0,X=0,F=null,H=-1,k=null;const Z=new vt,ee=new vt;let le=null;const Se=new Qe(0);let Ee=0,ze=t.width,Ke=t.height,Fe=1,K=null,pe=null;const se=new vt(0,0,ze,Ke),Re=new vt(0,0,ze,Ke);let Ie=!1;const we=new zh;let dt=!1,He=!1;const et=new Mt,lt=new G,Ge=new vt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function jt(){return F===null?Fe:1}let L=i;function Tt(v,N){return t.getContext(v,N)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nl}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),L===null){const N="webgl2";if(L=Tt(N,v),L===null)throw Tt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw qe("WebGLRenderer: "+v.message),v}let Ve,ot,fe,pt,E,g,O,q,Q,ne,ce,$,j,me,xe,ae,ie,De,Oe,je,I,re,Y;function _e(){Ve=new Gb(L),Ve.init(),I=new IM(L,Ve),ot=new Lb(L,Ve,e,I),fe=new PM(L,Ve),ot.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),pt=new Wb(L),E=new _M,g=new DM(L,Ve,fe,E,ot,I,pt),O=new zb(P),q=new qx(L),re=new Db(L,q),Q=new Hb(L,q,pt,re),ne=new $b(L,Q,q,re,pt),De=new Xb(L,ot,g),xe=new Ub(E),ce=new mM(P,O,Ve,ot,re,xe),$=new kM(P,E),j=new xM,me=new EM(Ve),ie=new Pb(P,O,fe,ne,_,l),ae=new wM(P,ne,ot),Y=new BM(L,pt,ot,fe),Oe=new Ib(L,Ve,pt),je=new Vb(L,Ve,pt),pt.programs=ce.programs,P.capabilities=ot,P.extensions=Ve,P.properties=E,P.renderLists=j,P.shadowMap=ae,P.state=fe,P.info=pt}_e(),y!==on&&(A=new qb(y,t.width,t.height,r,s));const oe=new FM(P,L);this.xr=oe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=Ve.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ve.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Fe},this.setPixelRatio=function(v){v!==void 0&&(Fe=v,this.setSize(ze,Ke,!1))},this.getSize=function(v){return v.set(ze,Ke)},this.setSize=function(v,N,V=!0){if(oe.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=v,Ke=N,t.width=Math.floor(v*Fe),t.height=Math.floor(N*Fe),V===!0&&(t.style.width=v+"px",t.style.height=N+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(ze*Fe,Ke*Fe).floor()},this.setDrawingBufferSize=function(v,N,V){ze=v,Ke=N,Fe=V,t.width=Math.floor(v*V),t.height=Math.floor(N*V),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(y===on){qe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){Pe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Z)},this.getViewport=function(v){return v.copy(se)},this.setViewport=function(v,N,V,B){v.isVector4?se.set(v.x,v.y,v.z,v.w):se.set(v,N,V,B),fe.viewport(Z.copy(se).multiplyScalar(Fe).round())},this.getScissor=function(v){return v.copy(Re)},this.setScissor=function(v,N,V,B){v.isVector4?Re.set(v.x,v.y,v.z,v.w):Re.set(v,N,V,B),fe.scissor(ee.copy(Re).multiplyScalar(Fe).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(v){fe.setScissorTest(Ie=v)},this.setOpaqueSort=function(v){K=v},this.setTransparentSort=function(v){pe=v},this.getClearColor=function(v){return v.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,V=!0){let B=0;if(v){let z=!1;if(F!==null){const he=F.texture.format;z=m.has(he)}if(z){const he=F.texture.type,ve=p.has(he),ue=ie.getClearColor(),Me=ie.getClearAlpha(),Ce=ue.r,Ne=ue.g,Be=ue.b;ve?(b[0]=Ce,b[1]=Ne,b[2]=Be,b[3]=Me,L.clearBufferuiv(L.COLOR,0,b)):(C[0]=Ce,C[1]=Ne,C[2]=Be,C[3]=Me,L.clearBufferiv(L.COLOR,0,C))}else B|=L.COLOR_BUFFER_BIT}N&&(B|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&L.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),ie.dispose(),j.dispose(),me.dispose(),E.dispose(),O.dispose(),ne.dispose(),re.dispose(),Y.dispose(),ce.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",gl),oe.removeEventListener("sessionend",xl),pi.stop()};function J(v){v.preventDefault(),kf("WebGLRenderer: Context Lost."),w=!0}function Te(){kf("WebGLRenderer: Context Restored."),w=!1;const v=pt.autoReset,N=ae.enabled,V=ae.autoUpdate,B=ae.needsUpdate,z=ae.type;_e(),pt.autoReset=v,ae.enabled=N,ae.autoUpdate=V,ae.needsUpdate=B,ae.type=z}function Ue(v){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function _t(v){const N=v.target;N.removeEventListener("dispose",_t),tt(N)}function tt(v){In(v),E.remove(v)}function In(v){const N=E.get(v).programs;N!==void 0&&(N.forEach(function(V){ce.releaseProgram(V)}),v.isShaderMaterial&&ce.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,V,B,z,he){N===null&&(N=Et);const ve=z.isMesh&&z.matrixWorld.determinant()<0,ue=ip(v,N,V,B,z);fe.setMaterial(B,ve);let Me=V.index,Ce=1;if(B.wireframe===!0){if(Me=Q.getWireframeAttribute(V),Me===void 0)return;Ce=2}const Ne=V.drawRange,Be=V.attributes.position;let Ae=Ne.start*Ce,nt=(Ne.start+Ne.count)*Ce;he!==null&&(Ae=Math.max(Ae,he.start*Ce),nt=Math.min(nt,(he.start+he.count)*Ce)),Me!==null?(Ae=Math.max(Ae,0),nt=Math.min(nt,Me.count)):Be!=null&&(Ae=Math.max(Ae,0),nt=Math.min(nt,Be.count));const gt=nt-Ae;if(gt<0||gt===1/0)return;re.setup(z,B,ue,V,Me);let mt,st=Oe;if(Me!==null&&(mt=q.get(Me),st=je,st.setIndex(mt)),z.isMesh)B.wireframe===!0?(fe.setLineWidth(B.wireframeLinewidth*jt()),st.setMode(L.LINES)):st.setMode(L.TRIANGLES);else if(z.isLine){let Lt=B.linewidth;Lt===void 0&&(Lt=1),fe.setLineWidth(Lt*jt()),z.isLineSegments?st.setMode(L.LINES):z.isLineLoop?st.setMode(L.LINE_LOOP):st.setMode(L.LINE_STRIP)}else z.isPoints?st.setMode(L.POINTS):z.isSprite&&st.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(Ve.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Lt=z._multiDrawStarts,ge=z._multiDrawCounts,Zt=z._multiDrawCount,Ye=Me?q.get(Me).bytesPerElement:1,tn=E.get(B).currentProgram.getUniforms();for(let xn=0;xn<Zt;xn++)tn.setValue(L,"_gl_DrawID",xn),st.render(Lt[xn]/Ye,ge[xn])}else if(z.isInstancedMesh)st.renderInstances(Ae,gt,z.count);else if(V.isInstancedBufferGeometry){const Lt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ge=Math.min(V.instanceCount,Lt);st.renderInstances(Ae,gt,ge)}else st.render(Ae,gt)};function gn(v,N,V){v.transparent===!0&&v.side===Gn&&v.forceSinglePass===!1?(v.side=Yt,v.needsUpdate=!0,cs(v,N,V),v.side=hi,v.needsUpdate=!0,cs(v,N,V),v.side=Gn):cs(v,N,V)}this.compile=function(v,N,V=null){V===null&&(V=v),M=me.get(V),M.init(N),x.push(M),V.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(M.pushLight(z),z.castShadow&&M.pushShadow(z))}),v!==V&&v.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(M.pushLight(z),z.castShadow&&M.pushShadow(z))}),M.setupLights();const B=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){const ue=he[ve];gn(ue,V,z),B.add(ue)}else gn(he,V,z),B.add(he)}),M=x.pop(),B},this.compileAsync=function(v,N,V=null){const B=this.compile(v,N,V);return new Promise(z=>{function he(){if(B.forEach(function(ve){E.get(ve).currentProgram.isReady()&&B.delete(ve)}),B.size===0){z(v);return}setTimeout(he,10)}Ve.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Ea=null;function tp(v){Ea&&Ea(v)}function gl(){pi.stop()}function xl(){pi.start()}const pi=new Yh;pi.setAnimationLoop(tp),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(v){Ea=v,oe.setAnimationLoop(v),v===null?pi.stop():pi.start()},oe.addEventListener("sessionstart",gl),oe.addEventListener("sessionend",xl),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;U!==null&&U.renderStart(v,N);const V=oe.enabled===!0&&oe.isPresenting===!0,B=A!==null&&(F===null||V)&&A.begin(P,F);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(N),N=oe.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,N,F),M=me.get(v,x.length),M.init(N),M.state.textureUnits=g.getTextureUnits(),x.push(M),et.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),we.setFromProjectionMatrix(et,Tn,N.reversedDepth),He=this.localClippingEnabled,dt=xe.init(this.clippingPlanes,He),T=j.get(v,R.length),T.init(),R.push(T),oe.enabled===!0&&oe.isPresenting===!0){const ve=P.xr.getDepthSensingMesh();ve!==null&&Ta(ve,N,-1/0,P.sortObjects)}Ta(v,N,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(K,pe),ut=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ut&&ie.addToRenderList(T,v),this.info.render.frame++,dt===!0&&xe.beginShadows();const z=M.state.shadowsArray;if(ae.render(z,v,N),dt===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&A.hasRenderPass())===!1){const ve=T.opaque,ue=T.transmissive;if(M.setupLights(),N.isArrayCamera){const Me=N.cameras;if(ue.length>0)for(let Ce=0,Ne=Me.length;Ce<Ne;Ce++){const Be=Me[Ce];Sl(ve,ue,v,Be)}ut&&ie.render(v);for(let Ce=0,Ne=Me.length;Ce<Ne;Ce++){const Be=Me[Ce];vl(T,v,Be,Be.viewport)}}else ue.length>0&&Sl(ve,ue,v,N),ut&&ie.render(v),vl(T,v,N)}F!==null&&X===0&&(g.updateMultisampleRenderTarget(F),g.updateRenderTargetMipmap(F)),B&&A.end(P),v.isScene===!0&&v.onAfterRender(P,v,N),re.resetDefaultState(),H=-1,k=null,x.pop(),x.length>0?(M=x[x.length-1],g.setTextureUnits(M.state.textureUnits),dt===!0&&xe.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,U!==null&&U.renderEnd()};function Ta(v,N,V,B){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)V=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLightProbeGrid)M.pushLightProbeGrid(v);else if(v.isLight)M.pushLight(v),v.castShadow&&M.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||we.intersectsSprite(v)){B&&Ge.setFromMatrixPosition(v.matrixWorld).applyMatrix4(et);const ve=ne.update(v),ue=v.material;ue.visible&&T.push(v,ve,ue,V,Ge.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||we.intersectsObject(v))){const ve=ne.update(v),ue=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ge.copy(v.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ge.copy(ve.boundingSphere.center)),Ge.applyMatrix4(v.matrixWorld).applyMatrix4(et)),Array.isArray(ue)){const Me=ve.groups;for(let Ce=0,Ne=Me.length;Ce<Ne;Ce++){const Be=Me[Ce],Ae=ue[Be.materialIndex];Ae&&Ae.visible&&T.push(v,ve,Ae,V,Ge.z,Be)}}else ue.visible&&T.push(v,ve,ue,V,Ge.z,null)}}const he=v.children;for(let ve=0,ue=he.length;ve<ue;ve++)Ta(he[ve],N,V,B)}function vl(v,N,V,B){const{opaque:z,transmissive:he,transparent:ve}=v;M.setupLightsView(V),dt===!0&&xe.setGlobalState(P.clippingPlanes,V),B&&fe.viewport(Z.copy(B)),z.length>0&&os(z,N,V),he.length>0&&os(he,N,V),ve.length>0&&os(ve,N,V),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Sl(v,N,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[B.id]===void 0){const Ae=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[B.id]=new wn(1,1,{generateMipmaps:!0,type:Ae?$n:on,minFilter:Ai,samples:Math.max(4,ot.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const he=M.state.transmissionRenderTarget[B.id],ve=B.viewport||Z;he.setSize(ve.z*P.transmissionResolutionScale,ve.w*P.transmissionResolutionScale);const ue=P.getRenderTarget(),Me=P.getActiveCubeFace(),Ce=P.getActiveMipmapLevel();P.setRenderTarget(he),P.getClearColor(Se),Ee=P.getClearAlpha(),Ee<1&&P.setClearColor(16777215,.5),P.clear(),ut&&ie.render(V);const Ne=P.toneMapping;P.toneMapping=Rn;const Be=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),M.setupLightsView(B),dt===!0&&xe.setGlobalState(P.clippingPlanes,B),os(v,V,B),g.updateMultisampleRenderTarget(he),g.updateRenderTargetMipmap(he),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let nt=0,gt=N.length;nt<gt;nt++){const mt=N[nt],{object:st,geometry:Lt,material:ge,group:Zt}=mt;if(ge.side===Gn&&st.layers.test(B.layers)){const Ye=ge.side;ge.side=Yt,ge.needsUpdate=!0,bl(st,V,B,Lt,ge,Zt),ge.side=Ye,ge.needsUpdate=!0,Ae=!0}}Ae===!0&&(g.updateMultisampleRenderTarget(he),g.updateRenderTargetMipmap(he))}P.setRenderTarget(ue,Me,Ce),P.setClearColor(Se,Ee),Be!==void 0&&(B.viewport=Be),P.toneMapping=Ne}function os(v,N,V){const B=N.isScene===!0?N.overrideMaterial:null;for(let z=0,he=v.length;z<he;z++){const ve=v[z],{object:ue,geometry:Me,group:Ce}=ve;let Ne=ve.material;Ne.allowOverride===!0&&B!==null&&(Ne=B),ue.layers.test(V.layers)&&bl(ue,N,V,Me,Ne,Ce)}}function bl(v,N,V,B,z,he){v.onBeforeRender(P,N,V,B,z,he),v.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(P,N,V,B,v,he),z.transparent===!0&&z.side===Gn&&z.forceSinglePass===!1?(z.side=Yt,z.needsUpdate=!0,P.renderBufferDirect(V,N,B,z,v,he),z.side=hi,z.needsUpdate=!0,P.renderBufferDirect(V,N,B,z,v,he),z.side=Gn):P.renderBufferDirect(V,N,B,z,v,he),v.onAfterRender(P,N,V,B,z,he)}function cs(v,N,V){N.isScene!==!0&&(N=Et);const B=E.get(v),z=M.state.lights,he=M.state.shadowsArray,ve=z.state.version,ue=ce.getParameters(v,z.state,he,N,V,M.state.lightProbeGridArray),Me=ce.getProgramCacheKey(ue);let Ce=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;const Ne=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=O.get(v.envMap||B.environment,Ne),B.envMapRotation=B.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Ce===void 0&&(v.addEventListener("dispose",_t),Ce=new Map,B.programs=Ce);let Be=Ce.get(Me);if(Be!==void 0){if(B.currentProgram===Be&&B.lightsStateVersion===ve)return Ml(v,ue),Be}else ue.uniforms=ce.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,V,ue),v.onBeforeCompile(ue,P),Be=ce.acquireProgram(ue,Me),Ce.set(Me,Be),B.uniforms=ue.uniforms;const Ae=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ae.clippingPlanes=xe.uniform),Ml(v,ue),B.needsLights=sp(v),B.lightsStateVersion=ve,B.needsLights&&(Ae.ambientLightColor.value=z.state.ambient,Ae.lightProbe.value=z.state.probe,Ae.directionalLights.value=z.state.directional,Ae.directionalLightShadows.value=z.state.directionalShadow,Ae.spotLights.value=z.state.spot,Ae.spotLightShadows.value=z.state.spotShadow,Ae.rectAreaLights.value=z.state.rectArea,Ae.ltc_1.value=z.state.rectAreaLTC1,Ae.ltc_2.value=z.state.rectAreaLTC2,Ae.pointLights.value=z.state.point,Ae.pointLightShadows.value=z.state.pointShadow,Ae.hemisphereLights.value=z.state.hemi,Ae.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ae.spotLightMatrix.value=z.state.spotLightMatrix,Ae.spotLightMap.value=z.state.spotLightMap,Ae.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=M.state.lightProbeGridArray.length>0,B.currentProgram=Be,B.uniformsList=null,Be}function yl(v){if(v.uniformsList===null){const N=v.currentProgram.getUniforms();v.uniformsList=Js.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function Ml(v,N){const V=E.get(v);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function np(v,N){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(N.matrixWorld);for(let V=0,B=v.length;V<B;V++){const z=v[V];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function ip(v,N,V,B,z){N.isScene!==!0&&(N=Et),g.resetTextureUnits();const he=N.fog,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,ue=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Xe.workingColorSpace,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ce=O.get(B.envMap||ve,Me),Ne=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!V.morphAttributes.position,nt=!!V.morphAttributes.normal,gt=!!V.morphAttributes.color;let mt=Rn;B.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(mt=P.toneMapping);const st=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Lt=st!==void 0?st.length:0,ge=E.get(B),Zt=M.state.lights;if(dt===!0&&(He===!0||v!==k)){const ct=v===k&&B.id===H;xe.setState(B,v,ct)}let Ye=!1;B.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Zt.state.version||ge.outputColorSpace!==ue||z.isBatchedMesh&&ge.batching===!1||!z.isBatchedMesh&&ge.batching===!0||z.isBatchedMesh&&ge.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ge.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ge.instancing===!1||!z.isInstancedMesh&&ge.instancing===!0||z.isSkinnedMesh&&ge.skinning===!1||!z.isSkinnedMesh&&ge.skinning===!0||z.isInstancedMesh&&ge.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ge.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ge.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ge.instancingMorph===!1&&z.morphTexture!==null||ge.envMap!==Ce||B.fog===!0&&ge.fog!==he||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==xe.numPlanes||ge.numIntersection!==xe.numIntersection)||ge.vertexAlphas!==Ne||ge.vertexTangents!==Be||ge.morphTargets!==Ae||ge.morphNormals!==nt||ge.morphColors!==gt||ge.toneMapping!==mt||ge.morphTargetsCount!==Lt||!!ge.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,ge.__version=B.version);let tn=ge.currentProgram;Ye===!0&&(tn=cs(B,N,z),U&&B.isNodeMaterial&&U.onUpdateProgram(B,tn,ge));let xn=!1,jn=!1,Gi=!1;const at=tn.getUniforms(),xt=ge.uniforms;if(fe.useProgram(tn.program)&&(xn=!0,jn=!0,Gi=!0),B.id!==H&&(H=B.id,jn=!0),ge.needsLights){const ct=np(M.state.lightProbeGridArray,z);ge.lightProbeGrid!==ct&&(ge.lightProbeGrid=ct,jn=!0)}if(xn||k!==v){fe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),at.setValue(L,"projectionMatrix",v.projectionMatrix),at.setValue(L,"viewMatrix",v.matrixWorldInverse);const Kn=at.map.cameraPosition;Kn!==void 0&&Kn.setValue(L,lt.setFromMatrixPosition(v.matrixWorld)),ot.logarithmicDepthBuffer&&at.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&at.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),k!==v&&(k=v,jn=!0,Gi=!0)}if(ge.needsLights&&(Zt.state.directionalShadowMap.length>0&&at.setValue(L,"directionalShadowMap",Zt.state.directionalShadowMap,g),Zt.state.spotShadowMap.length>0&&at.setValue(L,"spotShadowMap",Zt.state.spotShadowMap,g),Zt.state.pointShadowMap.length>0&&at.setValue(L,"pointShadowMap",Zt.state.pointShadowMap,g)),z.isSkinnedMesh){at.setOptional(L,z,"bindMatrix"),at.setOptional(L,z,"bindMatrixInverse");const ct=z.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),at.setValue(L,"boneTexture",ct.boneTexture,g))}z.isBatchedMesh&&(at.setOptional(L,z,"batchingTexture"),at.setValue(L,"batchingTexture",z._matricesTexture,g),at.setOptional(L,z,"batchingIdTexture"),at.setValue(L,"batchingIdTexture",z._indirectTexture,g),at.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&at.setValue(L,"batchingColorTexture",z._colorsTexture,g));const Zn=V.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&De.update(z,V,tn),(jn||ge.receiveShadow!==z.receiveShadow)&&(ge.receiveShadow=z.receiveShadow,at.setValue(L,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(xt.envMapIntensity.value=N.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=GM()),jn){if(at.setValue(L,"toneMappingExposure",P.toneMappingExposure),ge.needsLights&&rp(xt,Gi),he&&B.fog===!0&&$.refreshFogUniforms(xt,he),$.refreshMaterialUniforms(xt,B,Fe,Ke,M.state.transmissionRenderTarget[v.id]),ge.needsLights&&ge.lightProbeGrid){const ct=ge.lightProbeGrid;xt.probesSH.value=ct.texture,xt.probesMin.value.copy(ct.boundingBox.min),xt.probesMax.value.copy(ct.boundingBox.max),xt.probesResolution.value.copy(ct.resolution)}Js.upload(L,yl(ge),xt,g)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Js.upload(L,yl(ge),xt,g),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&at.setValue(L,"center",z.center),at.setValue(L,"modelViewMatrix",z.modelViewMatrix),at.setValue(L,"normalMatrix",z.normalMatrix),at.setValue(L,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const ct=B.uniformsGroups;for(let Kn=0,Hi=ct.length;Kn<Hi;Kn++){const El=ct[Kn];Y.update(El,tn),Y.bind(El,tn)}}return tn}function rp(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function sp(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,N,V){const B=E.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),E.get(v.texture).__webglTexture=N,E.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){const V=E.get(v);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};const ap=L.createFramebuffer();this.setRenderTarget=function(v,N=0,V=0){F=v,W=N,X=V;let B=null,z=!1,he=!1;if(v){const ue=E.get(v);if(ue.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(L.FRAMEBUFFER,ue.__webglFramebuffer),Z.copy(v.viewport),ee.copy(v.scissor),le=v.scissorTest,fe.viewport(Z),fe.scissor(ee),fe.setScissorTest(le),H=-1;return}else if(ue.__webglFramebuffer===void 0)g.setupRenderTarget(v);else if(ue.__hasExternalTextures)g.rebindTextures(v,E.get(v.texture).__webglTexture,E.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ne=v.depthTexture;if(ue.__boundDepthTexture!==Ne){if(Ne!==null&&E.has(Ne)&&(v.width!==Ne.image.width||v.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(v)}}const Me=v.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(he=!0);const Ce=E.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ce[N])?B=Ce[N][V]:B=Ce[N],z=!0):v.samples>0&&g.useMultisampledRTT(v)===!1?B=E.get(v).__webglMultisampledFramebuffer:Array.isArray(Ce)?B=Ce[V]:B=Ce,Z.copy(v.viewport),ee.copy(v.scissor),le=v.scissorTest}else Z.copy(se).multiplyScalar(Fe).floor(),ee.copy(Re).multiplyScalar(Fe).floor(),le=Ie;if(V!==0&&(B=ap),fe.bindFramebuffer(L.FRAMEBUFFER,B)&&fe.drawBuffers(v,B),fe.viewport(Z),fe.scissor(ee),fe.setScissorTest(le),z){const ue=E.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ue.__webglTexture,V)}else if(he){const ue=N;for(let Me=0;Me<v.textures.length;Me++){const Ce=E.get(v.textures[Me]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Me,Ce.__webglTexture,V,ue)}}else if(v!==null&&V!==0){const ue=E.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ue.__webglTexture,V)}H=-1},this.readRenderTargetPixels=function(v,N,V,B,z,he,ve,ue=0){if(!(v&&v.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=E.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){fe.bindFramebuffer(L.FRAMEBUFFER,Me);try{const Ce=v.textures[ue],Ne=Ce.format,Be=Ce.type;if(v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue),!ot.textureFormatReadable(Ne)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Be)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-B&&V>=0&&V<=v.height-z&&L.readPixels(N,V,B,z,I.convert(Ne),I.convert(Be),he)}finally{const Ce=F!==null?E.get(F).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(v,N,V,B,z,he,ve,ue=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=E.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(N>=0&&N<=v.width-B&&V>=0&&V<=v.height-z){fe.bindFramebuffer(L.FRAMEBUFFER,Me);const Ce=v.textures[ue],Ne=Ce.format,Be=Ce.type;if(v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ue),!ot.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(N,V,B,z,I.convert(Ne),I.convert(Be),0);const nt=F!==null?E.get(F).__webglFramebuffer:null;fe.bindFramebuffer(L.FRAMEBUFFER,nt);const gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fx(L,gt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.deleteBuffer(Ae),L.deleteSync(gt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,V=0){const B=Math.pow(2,-V),z=Math.floor(v.image.width*B),he=Math.floor(v.image.height*B),ve=N!==null?N.x:0,ue=N!==null?N.y:0;g.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,ve,ue,z,he),fe.unbindTexture()};const op=L.createFramebuffer(),cp=L.createFramebuffer();this.copyTextureToTexture=function(v,N,V=null,B=null,z=0,he=0){let ve,ue,Me,Ce,Ne,Be,Ae,nt,gt;const mt=v.isCompressedTexture?v.mipmaps[he]:v.image;if(V!==null)ve=V.max.x-V.min.x,ue=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,Ce=V.min.x,Ne=V.min.y,Be=V.isBox3?V.min.z:0;else{const xt=Math.pow(2,-z);ve=Math.floor(mt.width*xt),ue=Math.floor(mt.height*xt),v.isDataArrayTexture?Me=mt.depth:v.isData3DTexture?Me=Math.floor(mt.depth*xt):Me=1,Ce=0,Ne=0,Be=0}B!==null?(Ae=B.x,nt=B.y,gt=B.z):(Ae=0,nt=0,gt=0);const st=I.convert(N.format),Lt=I.convert(N.type);let ge;N.isData3DTexture?(g.setTexture3D(N,0),ge=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(g.setTexture2DArray(N,0),ge=L.TEXTURE_2D_ARRAY):(g.setTexture2D(N,0),ge=L.TEXTURE_2D),fe.activeTexture(L.TEXTURE0),fe.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),fe.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),fe.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const Zt=fe.getParameter(L.UNPACK_ROW_LENGTH),Ye=fe.getParameter(L.UNPACK_IMAGE_HEIGHT),tn=fe.getParameter(L.UNPACK_SKIP_PIXELS),xn=fe.getParameter(L.UNPACK_SKIP_ROWS),jn=fe.getParameter(L.UNPACK_SKIP_IMAGES);fe.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),fe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),fe.pixelStorei(L.UNPACK_SKIP_PIXELS,Ce),fe.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),fe.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);const Gi=v.isDataArrayTexture||v.isData3DTexture,at=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){const xt=E.get(v),Zn=E.get(N),ct=E.get(xt.__renderTarget),Kn=E.get(Zn.__renderTarget);fe.bindFramebuffer(L.READ_FRAMEBUFFER,ct.__webglFramebuffer),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Hi=0;Hi<Me;Hi++)Gi&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,E.get(v).__webglTexture,z,Be+Hi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,E.get(N).__webglTexture,he,gt+Hi)),L.blitFramebuffer(Ce,Ne,ve,ue,Ae,nt,ve,ue,L.DEPTH_BUFFER_BIT,L.NEAREST);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||E.has(v)){const xt=E.get(v),Zn=E.get(N);fe.bindFramebuffer(L.READ_FRAMEBUFFER,op),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,cp);for(let ct=0;ct<Me;ct++)Gi?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.__webglTexture,z,Be+ct):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xt.__webglTexture,z),at?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zn.__webglTexture,he,gt+ct):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zn.__webglTexture,he),z!==0?L.blitFramebuffer(Ce,Ne,ve,ue,Ae,nt,ve,ue,L.COLOR_BUFFER_BIT,L.NEAREST):at?L.copyTexSubImage3D(ge,he,Ae,nt,gt+ct,Ce,Ne,ve,ue):L.copyTexSubImage2D(ge,he,Ae,nt,Ce,Ne,ve,ue);fe.bindFramebuffer(L.READ_FRAMEBUFFER,null),fe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else at?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(ge,he,Ae,nt,gt,ve,ue,Me,st,Lt,mt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(ge,he,Ae,nt,gt,ve,ue,Me,st,mt.data):L.texSubImage3D(ge,he,Ae,nt,gt,ve,ue,Me,st,Lt,mt):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,Ae,nt,ve,ue,st,Lt,mt.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,Ae,nt,mt.width,mt.height,st,mt.data):L.texSubImage2D(L.TEXTURE_2D,he,Ae,nt,ve,ue,st,Lt,mt);fe.pixelStorei(L.UNPACK_ROW_LENGTH,Zt),fe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ye),fe.pixelStorei(L.UNPACK_SKIP_PIXELS,tn),fe.pixelStorei(L.UNPACK_SKIP_ROWS,xn),fe.pixelStorei(L.UNPACK_SKIP_IMAGES,jn),he===0&&N.generateMipmaps&&L.generateMipmap(ge),fe.unbindTexture()},this.initRenderTarget=function(v){E.get(v).__webglFramebuffer===void 0&&g.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?g.setTextureCube(v,0):v.isData3DTexture?g.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?g.setTexture2DArray(v,0):g.setTexture2D(v,0),fe.unbindTexture()},this.resetState=function(){W=0,X=0,F=null,fe.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const VM=_r({__name:"ThreeBackground",setup(n){const e=Si();return Pd(()=>{if(!e.value)return;const t=new Cx,i=new sn(75,window.innerWidth/window.innerHeight,.1,1e3),r=new HM({antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.value.appendChild(r.domElement);const s=new _n,a=2e3,o=new Float32Array(a*3);for(let m=0;m<a*3;m++)o[m]=(Math.random()-.5)*20;s.setAttribute("position",new mn(o,3));const l=new Gh({size:.03,color:889992,transparent:!0,opacity:.6,blending:Yo}),c=new Fx(s,l);t.add(c),i.position.z=5;let f=0,u=0;const d=m=>{f=m.clientX/window.innerWidth*2-1,u=-(m.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",d);const h=()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",h);let _;function y(){_=requestAnimationFrame(y),c.rotation.x+=3e-4,c.rotation.y+=5e-4,c.rotation.x+=u*1e-4,c.rotation.y+=f*1e-4,r.render(t,i)}y(),mp(()=>{cancelAnimationFrame(_),window.removeEventListener("mousemove",d),window.removeEventListener("resize",h),r.dispose()})}),(t,i)=>(ht(),bt("div",{ref_key:"containerRef",ref:e,class:"fixed inset-0 -z-10 pointer-events-none"},null,512))}}),WM=Object.assign(VM,{__name:"ThreeBackground"}),XM={class:"min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col pb-12 transition-colors duration-500 relative"},$M={class:"relative z-10 flex items-center justify-between px-6 py-4 border-b border-slate-800/50 bg-slate-900/40 backdrop-blur-xl sticky top-0"},YM={class:"flex items-center gap-2"},qM={class:"flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800 text-xs"},jM={class:"relative flex h-2 w-2"},ZM={class:"text-slate-400 font-semibold uppercase tracking-wider text-[10px]"},KM={class:"relative z-10 max-w-4xl w-full mx-auto px-4 mt-6 flex-1 flex flex-col"},JM={class:"flex justify-center mb-8 bg-slate-900/60 backdrop-blur-xl rounded-2xl p-1.5 max-w-md w-full mx-auto border border-slate-800/50 shadow-xl"},QM={key:0,class:"bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-2xl p-4 mb-6 shadow-xl flex items-center justify-between"},eE={class:"flex items-center gap-3"},tE={class:"bg-teal-500/10 p-2.5 rounded-xl border border-teal-500/20 text-teal-400"},nE={class:"text-[10px] text-slate-500 uppercase tracking-wider font-semibold"},iE={class:"flex items-center gap-3"},rE={class:"bg-indigo-500/10 p-2.5 rounded-xl border border-indigo-500/20 text-indigo-400"},sE={class:"flex-1 flex flex-col"},aE={key:0,class:"flex-1 flex flex-col gap-6"},oE={class:"bg-slate-900/30 backdrop-blur-md border border-slate-800/50 rounded-3xl p-6 shadow-xl"},cE={class:"flex items-center gap-3 mb-4"},lE={class:"p-2.5 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-600/20 border border-teal-500/20"},fE={class:"flex gap-2 mb-4"},dE=["disabled"],uE={key:0,class:"bg-slate-900/30 backdrop-blur-md border border-slate-800/50 rounded-3xl p-6 shadow-xl"},hE={class:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2"},pE={class:"grid grid-cols-1 md:grid-cols-2 gap-3"},mE=["onClick"],_E={class:"flex items-center gap-3"},gE={class:"p-2 rounded-lg bg-teal-500/10 text-teal-400"},xE={class:"font-semibold text-sm text-slate-200"},vE={class:"text-[10px] text-slate-500"},SE={key:1,class:"flex-1 flex items-center justify-center"},bE={class:"text-center"},yE={key:1,class:"flex-1 flex flex-col gap-6"},ME={class:"bg-slate-900/30 backdrop-blur-md border border-slate-800/50 rounded-3xl p-6 shadow-xl"},EE={class:"flex items-center gap-3 mb-4"},TE={class:"p-2.5 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-600/20 border border-indigo-500/20"},CE={class:"flex flex-col md:flex-row gap-3 items-end mb-4"},AE={class:"flex-1 w-full"},RE=["disabled"],wE=["disabled"],PE={key:0,class:"bg-slate-900/30 backdrop-blur-md border border-slate-800/50 rounded-3xl p-6 shadow-xl"},DE={class:"text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2"},IE={class:"grid grid-cols-1 md:grid-cols-2 gap-3"},LE=["onClick"],UE={class:"flex items-center gap-3"},NE={class:"p-2 rounded-lg bg-indigo-500/10 text-indigo-400"},FE={class:"font-semibold text-sm text-slate-200"},OE={class:"text-[10px] text-slate-500"},kE={key:1,class:"flex items-center justify-center py-8"},BE={class:"text-center"},zE={class:"text-slate-500 text-sm"},GE={class:"bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl max-w-md w-full p-6 shadow-2xl"},HE={class:"flex justify-between items-center mb-5"},VE={class:"font-bold text-slate-100 flex items-center gap-2 text-sm"},WE={class:"flex flex-col gap-4"},XE={class:"border-t border-slate-800 pt-4"},$E=["disabled"],qE=_r({__name:"index",setup(n){const{t:e}=wd(),t=Si(null),i=async()=>{if(!t.value)return;const S=t.value;S.prompt(),(await S.userChoice).outcome==="accepted"&&(t.value=null),S.prompt=void 0},r=Si("lan"),s=Si(""),a=Si(""),o=Si(!1),l=Si(""),{open:c,onChange:f}=_p();f(async S=>{if(!(!S||S.length===0||!l.value)){if(D.connectionMode==="web"&&D.peerConnection){for(let T=0;T<S.length;T++)await c0(l.value,S[T]);return}D.signaling&&await Af({files:S,targetId:l.value,onPin:async()=>prompt(e("index.enterPin"))})}});const u=Qs(()=>D.signaling!==null||D.peerConnection!==null),d=async()=>{const S=Rl();await a0(S.public.signalingUrl)},h=async()=>{s.value&&(D.pin=s.value,await o0(s.value))},_=()=>{o.value=!1,setTimeout(()=>c(),300)},y=async()=>{if(!(!a.value||!l.value)){if(D.connectionMode==="web"&&D.peerConnection&&await l0(l.value,a.value),D.connectionMode==="lan"&&D.signaling&&D.client){const S=new TextEncoder().encode(a.value),T=new Blob([S],{type:"text/plain"}),M=new File([T],"__clipboard__.txt",{type:"text/plain"}),R=new DataTransfer;R.items.add(M),await Af({files:R.files,targetId:l.value,onPin:async()=>prompt(e("index.enterPin"))})}a.value="",o.value=!1}},m=S=>{const T=D.peers.find(M=>M.id===S);return T?T.alias:"el dispositivo"},p=S=>{switch(S){case"mobile":return"material-symbols:smartphone";case"desktop":return"material-symbols:computer";case"web":return"material-symbols:language";default:return"material-symbols:person"}},b=async()=>{if(!D.client)return;const S=prompt("Nuevo nombre:",D.client.alias);S&&f0(S)},C=async()=>{const S=prompt("PIN opcional para cifrado:");typeof S=="string"&&(D.pin=S||null)};return Pd(async()=>{if(window.addEventListener("beforeinstallprompt",A=>{A.preventDefault(),t.value=A}),window.addEventListener("appinstalled",()=>{t.value=null}),!xg()){console.error("Web Crypto API no soportada");return}await vg(),D.key=await Sg(),console.log(await bg(D.key.publicKey));const T=navigator.userAgent,M=await qc(D.key),R={alias:m0(),version:Tg,deviceModel:u0(T),deviceType:Id.web,token:M},x=Rl();await r0({info:R,onPin:async()=>prompt(e("index.enterPin")),signalingUrl:x.public.signalingUrl})}),(S,T)=>{const M=gp;return ht(),bt("div",XM,[it(WM),te("header",$M,[T[9]||(T[9]=te("div",{class:"flex items-center gap-3"},[te("div",{class:"h-10 w-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-teal-900/30"}," OX "),te("div",null,[te("h1",{class:"text-lg font-bold tracking-wider bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent"}," Oxy-Web "),te("p",{class:"text-xs text-slate-500 font-medium"},"Peer-to-Peer")])],-1)),te("div",YM,[ye(t)?(ht(),bt("button",{key:0,onClick:i,class:"flex items-center gap-1.5 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full transition-all shadow-lg shadow-teal-900/30"},[it(M,{name:"material-symbols:install-desktop",class:"size-3.5"}),T[8]||(T[8]=Vt(" Instalar ",-1))])):un("",!0),te("div",qM,[te("span",jM,[te("span",{class:mi([ye(u)?"bg-emerald-500":"bg-rose-500","animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"])},null,2),te("span",{class:mi([ye(u)?"bg-emerald-600":"bg-rose-600","relative inline-flex rounded-full h-2 w-2"])},null,2)]),te("span",ZM,Ct(ye(u)?"Conectado":"Desconectado"),1)])])]),te("div",KM,[te("nav",JM,[te("button",{onClick:T[0]||(T[0]=R=>r.value="lan"),class:mi([ye(r)==="lan"?"bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-900/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50","flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm"])},[it(M,{name:"material-symbols:wifi",class:"size-4"}),T[10]||(T[10]=Vt(" LAN ",-1))],2),te("button",{onClick:T[1]||(T[1]=R=>r.value="web"),class:mi([ye(r)==="web"?"bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-900/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50","flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm"])},[it(M,{name:"material-symbols:public",class:"size-4"}),T[11]||(T[11]=Vt(" WEB ",-1))],2)]),ye(D).client?(ht(),bt("div",QM,[te("div",eE,[te("div",tE,[it(M,{name:"material-symbols:person",class:"size-5"})]),te("div",null,[te("p",nE,Ct(ye(e)("index.you")),1),te("p",{class:"font-bold text-slate-200 cursor-pointer hover:text-teal-400 flex items-center gap-1.5 text-sm",onClick:b},[Vt(Ct(ye(D).client.alias)+" ",1),it(M,{name:"material-symbols:edit-outline",class:"size-3.5 opacity-50"})])])]),T[13]||(T[13]=te("div",{class:"h-8 w-px bg-slate-800"},null,-1)),te("div",iE,[te("div",rE,[it(M,{name:"material-symbols:lock",class:"size-5"})]),te("div",null,[T[12]||(T[12]=te("p",{class:"text-[10px] text-slate-500 uppercase tracking-wider font-semibold"},"PIN",-1)),te("p",{class:"font-bold text-slate-200 cursor-pointer hover:text-indigo-400 flex items-center gap-1.5 text-sm",onClick:C},[Vt(Ct(ye(D).pin??"ninguno")+" ",1),it(M,{name:"material-symbols:edit-outline",class:"size-3.5 opacity-50"})])])])])):un("",!0),te("main",sE,[ye(r)==="lan"?(ht(),bt("div",aE,[te("div",oE,[te("div",cE,[te("div",lE,[it(M,{name:"material-symbols:wifi",class:"size-5 text-teal-400"})]),T[14]||(T[14]=te("div",null,[te("h3",{class:"font-bold text-slate-200"},"Red Local (LAN)"),te("p",{class:"text-xs text-slate-500"},"Dispositivos en la misma red se descubren automáticamente")],-1))]),te("div",fE,[te("button",{onClick:d,disabled:ye(D).connectionMode==="lan"&&ye(D).signaling,class:mi([ye(D).connectionMode==="lan"&&ye(D).signaling?"opacity-50 cursor-not-allowed":"hover:bg-teal-500","flex-1 bg-teal-600 text-white font-semibold py-2.5 px-4 rounded-xl transition-all text-sm flex items-center justify-center gap-2"])},[it(M,{name:"material-symbols:search",class:"size-4"}),Vt(" "+Ct(ye(D).connectionMode==="lan"&&ye(D).signaling?"Buscando...":"Buscar dispositivos"),1)],10,dE),ye(D).connectionMode==="lan"&&ye(D).signaling?(ht(),bt("button",{key:0,onClick:T[2]||(T[2]=(...R)=>ye(sr)&&ye(sr)(...R)),class:"bg-rose-600/20 border border-rose-600/30 text-rose-300 font-semibold py-2.5 px-4 rounded-xl transition-all text-sm flex items-center justify-center gap-2 hover:bg-rose-600/30"},[it(M,{name:"material-symbols:logout",class:"size-4"}),T[15]||(T[15]=Vt(" Desconectar ",-1))])):un("",!0)])]),ye(D).peers.length>0?(ht(),bt("div",uE,[te("h4",hE,[it(M,{name:"material-symbols:devices",class:"size-4 text-teal-500"}),Vt(" Dispositivos ("+Ct(ye(D).peers.length)+") ",1)]),te("div",pE,[(ht(!0),bt(Eo,null,To(ye(D).peers,R=>(ht(),bt("div",{key:R.id,onClick:x=>{l.value=R.id,o.value=!0},class:"bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800/50 rounded-2xl p-4 cursor-pointer transition-all hover:scale-[1.02] hover:border-teal-500/30"},[te("div",_E,[te("div",gE,[it(M,{name:p(R.deviceType),class:"size-5"},null,8,["name"])]),te("div",null,[te("p",xE,Ct(R.alias),1),te("p",vE,Ct(R.deviceType||"Web"),1)])])],8,mE))),128))])])):un("",!0),ye(D).connectionMode==="lan"&&ye(D).peers.length===0&&!ye(D).signaling?(ht(),bt("div",SE,[te("div",bE,[it(M,{name:"material-symbols:search",class:"size-12 text-slate-800 mx-auto mb-3"}),T[16]||(T[16]=te("p",{class:"text-slate-500 text-sm"},'Presiona "Buscar dispositivos" para encontrar otros dispositivos en la red',-1))])])):un("",!0)])):un("",!0),ye(r)==="web"?(ht(),bt("div",yE,[te("div",ME,[te("div",EE,[te("div",TE,[it(M,{name:"material-symbols:public",class:"size-5 text-indigo-400"})]),T[17]||(T[17]=te("div",null,[te("h3",{class:"font-bold text-slate-200"},"Internet (WEB)"),te("p",{class:"text-xs text-slate-500"},"Conéctate con dispositivos fuera de tu red usando un PIN")],-1))]),te("div",CE,[te("div",AE,[T[18]||(T[18]=te("label",{class:"block text-[10px] text-slate-500 font-semibold mb-1.5 uppercase tracking-wider"},"PIN de sala",-1)),Tl(te("input",{"onUpdate:modelValue":T[3]||(T[3]=R=>Al(s)?s.value=R:null),type:"text",placeholder:"Ej. 1234",class:"w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors",disabled:ye(D).connectionMode==="web"},null,8,RE),[[Cl,ye(s)]])]),te("button",{onClick:h,disabled:!ye(s)||ye(D).connectionMode==="web",class:mi([!ye(s)||ye(D).connectionMode==="web"?"opacity-50 cursor-not-allowed":"hover:bg-indigo-500","w-full md:w-auto bg-indigo-600 text-white font-semibold py-2.5 px-6 rounded-xl transition-all text-sm flex items-center justify-center gap-2"])},[it(M,{name:"material-symbols:vpn-key",class:"size-4"}),Vt(" "+Ct(ye(D).connectionMode==="web"?"Conectado":"Conectar"),1)],10,wE)]),ye(D).connectionMode==="web"?(ht(),bt("button",{key:0,onClick:T[4]||(T[4]=(...R)=>ye(sr)&&ye(sr)(...R)),class:"w-full bg-rose-600/20 border border-rose-600/30 text-rose-300 font-semibold py-2.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2 hover:bg-rose-600/30"},[it(M,{name:"material-symbols:logout",class:"size-4"}),T[19]||(T[19]=Vt(" Desconectar ",-1))])):un("",!0)]),ye(D).peers.length>0?(ht(),bt("div",PE,[te("h4",DE,[it(M,{name:"material-symbols:devices",class:"size-4 text-indigo-500"}),Vt(" Dispositivos en sala ("+Ct(ye(D).peers.length)+") ",1)]),te("div",IE,[(ht(!0),bt(Eo,null,To(ye(D).peers,R=>(ht(),bt("div",{key:R.id,onClick:x=>{l.value=R.id,o.value=!0},class:"bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800/50 rounded-2xl p-4 cursor-pointer transition-all hover:scale-[1.02] hover:border-indigo-500/30"},[te("div",UE,[te("div",NE,[it(M,{name:"material-symbols:person",class:"size-5"})]),te("div",null,[te("p",FE,Ct(R.alias),1),te("p",OE,Ct(R.deviceType||"Web"),1)])])],8,LE))),128))])])):un("",!0),ye(D).connectionMode==="web"&&ye(D).peers.length===0?(ht(),bt("div",kE,[te("div",BE,[it(M,{name:"material-symbols:hourglass-empty",class:"size-10 text-slate-700 animate-spin mx-auto mb-3"}),te("p",zE,"Esperando dispositivos con el PIN "+Ct(ye(s))+"...",1)])])):un("",!0)])):un("",!0)])]),it(mh,{visible:ye(o),onClose:T[7]||(T[7]=R=>o.value=!1)},{default:zc(()=>[te("div",GE,[te("div",HE,[te("h3",VE,[it(M,{name:ye(r)==="lan"?"material-symbols:wifi":"material-symbols:public",class:"size-4 text-teal-400"},null,8,["name"]),Vt(" Enviar a "+Ct(m(ye(l))),1)]),te("button",{onClick:T[5]||(T[5]=R=>o.value=!1),class:"text-slate-500 hover:text-white bg-slate-800 p-1.5 rounded-lg"},[it(M,{name:"material-symbols:close",class:"size-4"})])]),te("div",WE,[te("div",null,[T[21]||(T[21]=te("label",{class:"block text-[10px] text-slate-500 font-semibold mb-2 uppercase tracking-wider"},"Archivos",-1)),te("button",{onClick:_,class:"w-full bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 text-slate-300 font-semibold py-3 rounded-xl transition-all text-sm flex items-center justify-center gap-2"},[it(M,{name:"material-symbols:attach-file",class:"size-4 text-teal-400"}),T[20]||(T[20]=Vt(" Seleccionar archivos ",-1))])]),te("div",XE,[T[23]||(T[23]=te("label",{class:"block text-[10px] text-slate-500 font-semibold mb-2 uppercase tracking-wider"},"Texto directo",-1)),Tl(te("textarea",{"onUpdate:modelValue":T[6]||(T[6]=R=>Al(a)?a.value=R:null),placeholder:"Escribe o pega el texto aquí...",rows:"3",class:"w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"},null,512),[[Cl,ye(a)]]),te("button",{onClick:y,disabled:!ye(a),class:mi([ye(a)?"hover:bg-indigo-500":"opacity-50 cursor-not-allowed","w-full mt-2 bg-indigo-600 text-white font-semibold py-2.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2"])},[it(M,{name:"material-symbols:send",class:"size-4"}),T[22]||(T[22]=Vt(" Enviar texto ",-1))],10,$E)])])])]),_:1},8,["visible"]),it(w0)])}}});export{qE as default};

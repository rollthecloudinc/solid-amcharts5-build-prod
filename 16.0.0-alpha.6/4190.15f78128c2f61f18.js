(self.webpackChunkplugin_amcharts5=self.webpackChunkplugin_amcharts5||[]).push([[4190,8023,4254,7241,4945,690,3356],{54121:(w,u,e)=>{e.d(u,{X:()=>a});var t=e(38023);class a extends t.x{constructor(l){super(),this._value=l}get value(){return this.getValue()}_subscribe(l){const i=super._subscribe(l);return!i.closed&&l.next(this._value),i}getValue(){const{hasError:l,thrownError:i,_value:f}=this;if(l)throw i;return this._throwIfClosed(),f}next(l){super.next(this._value=l)}}},87241:(w,u,e)=>{e.d(u,{y:()=>v});var t=e(94021),a=e(14813),d=e(43122),l=e(17824),i=e(42046),f=e(35975),m=e(1519);let v=(()=>{class c{constructor(h){h&&(this._subscribe=h)}lift(h){const D=new c;return D.source=this,D.operator=h,D}subscribe(h,D,T){const C=function n(c){return c&&c instanceof t.Lv||function s(c){return c&&(0,f.m)(c.next)&&(0,f.m)(c.error)&&(0,f.m)(c.complete)}(c)&&(0,a.Nn)(c)}(h)?h:new t.Hp(h,D,T);return(0,m.x)(()=>{const{operator:I,source:F}=this;C.add(I?I.call(C,F):F?this._subscribe(C):this._trySubscribe(C))}),C}_trySubscribe(h){try{return this._subscribe(h)}catch(D){h.error(D)}}forEach(h,D){return new(D=b(D))((T,C)=>{const I=new t.Hp({next:F=>{try{h(F)}catch(S){C(S),I.unsubscribe()}},error:C,complete:T});this.subscribe(I)})}_subscribe(h){var D;return null===(D=this.source)||void 0===D?void 0:D.subscribe(h)}[d.L](){return this}pipe(...h){return(0,l.U)(h)(this)}toPromise(h){return new(h=b(h))((D,T)=>{let C;this.subscribe(I=>C=I,I=>T(I),()=>D(C))})}}return c.create=x=>new c(x),c})();function b(c){var x;return null!==(x=c??i.config.Promise)&&void 0!==x?x:Promise}},38023:(w,u,e)=>{e.d(u,{x:()=>m});var t=e(87241),a=e(14813);const l=(0,e(95776).d)(b=>function(){b(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var i=e(78308),f=e(1519);let m=(()=>{class b extends t.y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(n){const c=new v(this,this);return c.operator=n,c}_throwIfClosed(){if(this.closed)throw new l}next(n){(0,f.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const c of this.currentObservers)c.next(n)}})}error(n){(0,f.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=n;const{observers:c}=this;for(;c.length;)c.shift().error(n)}})}complete(){(0,f.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:n}=this;for(;n.length;)n.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var n;return(null===(n=this.observers)||void 0===n?void 0:n.length)>0}_trySubscribe(n){return this._throwIfClosed(),super._trySubscribe(n)}_subscribe(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)}_innerSubscribe(n){const{hasError:c,isStopped:x,observers:h}=this;return c||x?a.Lc:(this.currentObservers=null,h.push(n),new a.w0(()=>{this.currentObservers=null,(0,i.P)(h,n)}))}_checkFinalizedStatuses(n){const{hasError:c,thrownError:x,isStopped:h}=this;c?n.error(x):h&&n.complete()}asObservable(){const n=new t.y;return n.source=this,n}}return b.create=(s,n)=>new v(s,n),b})();class v extends m{constructor(s,n){super(),this.destination=s,this.source=n}next(s){var n,c;null===(c=null===(n=this.destination)||void 0===n?void 0:n.next)||void 0===c||c.call(n,s)}error(s){var n,c;null===(c=null===(n=this.destination)||void 0===n?void 0:n.error)||void 0===c||c.call(n,s)}complete(){var s,n;null===(n=null===(s=this.destination)||void 0===s?void 0:s.complete)||void 0===n||n.call(s)}_subscribe(s){var n,c;return null!==(c=null===(n=this.source)||void 0===n?void 0:n.subscribe(s))&&void 0!==c?c:a.Lc}}},94021:(w,u,e)=>{e.d(u,{Hp:()=>T,Lv:()=>c});var t=e(35975),a=e(14813),d=e(42046),l=e(34922),i=e(408);const f=b("C",void 0,void 0);function b(O,_,P){return{kind:O,value:_,error:P}}var s=e(84146),n=e(1519);class c extends a.w0{constructor(_){super(),this.isStopped=!1,_?(this.destination=_,(0,a.Nn)(_)&&_.add(this)):this.destination=S}static create(_,P,p){return new T(_,P,p)}next(_){this.isStopped?F(function v(O){return b("N",O,void 0)}(_),this):this._next(_)}error(_){this.isStopped?F(function m(O){return b("E",void 0,O)}(_),this):(this.isStopped=!0,this._error(_))}complete(){this.isStopped?F(f,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(_){this.destination.next(_)}_error(_){try{this.destination.error(_)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const x=Function.prototype.bind;function h(O,_){return x.call(O,_)}class D{constructor(_){this.partialObserver=_}next(_){const{partialObserver:P}=this;if(P.next)try{P.next(_)}catch(p){C(p)}}error(_){const{partialObserver:P}=this;if(P.error)try{P.error(_)}catch(p){C(p)}else C(_)}complete(){const{partialObserver:_}=this;if(_.complete)try{_.complete()}catch(P){C(P)}}}class T extends c{constructor(_,P,p){let E;if(super(),(0,t.m)(_)||!_)E={next:_??void 0,error:P??void 0,complete:p??void 0};else{let M;this&&d.config.useDeprecatedNextContext?(M=Object.create(_),M.unsubscribe=()=>this.unsubscribe(),E={next:_.next&&h(_.next,M),error:_.error&&h(_.error,M),complete:_.complete&&h(_.complete,M)}):E=_}this.destination=new D(E)}}function C(O){d.config.useDeprecatedSynchronousErrorHandling?(0,n.O)(O):(0,l.h)(O)}function F(O,_){const{onStoppedNotification:P}=d.config;P&&s.z.setTimeout(()=>P(O,_))}const S={closed:!0,next:i.Z,error:function I(O){throw O},complete:i.Z}},14813:(w,u,e)=>{e.d(u,{Lc:()=>f,w0:()=>i,Nn:()=>m});var t=e(35975);const d=(0,e(95776).d)(b=>function(n){b(this),this.message=n?`${n.length} errors occurred during unsubscription:\n${n.map((c,x)=>`${x+1}) ${c.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=n});var l=e(78308);class i{constructor(s){this.initialTeardown=s,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let s;if(!this.closed){this.closed=!0;const{_parentage:n}=this;if(n)if(this._parentage=null,Array.isArray(n))for(const h of n)h.remove(this);else n.remove(this);const{initialTeardown:c}=this;if((0,t.m)(c))try{c()}catch(h){s=h instanceof d?h.errors:[h]}const{_finalizers:x}=this;if(x){this._finalizers=null;for(const h of x)try{v(h)}catch(D){s=s??[],D instanceof d?s=[...s,...D.errors]:s.push(D)}}if(s)throw new d(s)}}add(s){var n;if(s&&s!==this)if(this.closed)v(s);else{if(s instanceof i){if(s.closed||s._hasParent(this))return;s._addParent(this)}(this._finalizers=null!==(n=this._finalizers)&&void 0!==n?n:[]).push(s)}}_hasParent(s){const{_parentage:n}=this;return n===s||Array.isArray(n)&&n.includes(s)}_addParent(s){const{_parentage:n}=this;this._parentage=Array.isArray(n)?(n.push(s),n):n?[n,s]:s}_removeParent(s){const{_parentage:n}=this;n===s?this._parentage=null:Array.isArray(n)&&(0,l.P)(n,s)}remove(s){const{_finalizers:n}=this;n&&(0,l.P)(n,s),s instanceof i&&s._removeParent(this)}}i.EMPTY=(()=>{const b=new i;return b.closed=!0,b})();const f=i.EMPTY;function m(b){return b instanceof i||b&&"closed"in b&&(0,t.m)(b.remove)&&(0,t.m)(b.add)&&(0,t.m)(b.unsubscribe)}function v(b){(0,t.m)(b)?b():b.unsubscribe()}},42046:(w,u,e)=>{e.d(u,{config:()=>t});const t={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},15696:(w,u,e)=>{e.d(u,{a:()=>s});var t=e(87241),a=e(20447),d=e(17108),l=e(68330),i=e(52692),f=e(46651),m=e(89299),v=e(28499),b=e(16903);function s(...x){const h=(0,f.yG)(x),D=(0,f.jO)(x),{args:T,keys:C}=(0,a.D)(x);if(0===T.length)return(0,d.D)([],h);const I=new t.y(function n(x,h,D=l.y){return T=>{c(h,()=>{const{length:C}=x,I=new Array(C);let F=C,S=C;for(let O=0;O<C;O++)c(h,()=>{const _=(0,d.D)(x[O],h);let P=!1;_.subscribe((0,v.x)(T,p=>{I[O]=p,P||(P=!0,S--),S||T.next(D(I.slice()))},()=>{--F||T.complete()}))},T)},T)}}(T,h,C?F=>(0,m.n)(C,F):l.y));return D?I.pipe((0,i.Z)(D)):I}function c(x,h,D){x?(0,b.f)(D,x,h):h()}},9018:(w,u,e)=>{e.d(u,{E:()=>a});const a=new(e(87241).y)(i=>i.complete())},17108:(w,u,e)=>{e.d(u,{D:()=>P});var t=e(75955),a=e(57513),d=e(32085);function l(p,E=0){return(0,d.e)((M,A)=>{A.add(p.schedule(()=>M.subscribe(A),E))})}var m=e(87241),b=e(44565),s=e(35975),n=e(16903);function x(p,E){if(!p)throw new Error("Iterable cannot be null");return new m.y(M=>{(0,n.f)(M,E,()=>{const A=p[Symbol.asyncIterator]();(0,n.f)(M,E,()=>{A.next().then(B=>{B.done?M.complete():M.next(B.value)})},0,!0)})})}var h=e(82021),D=e(29450),T=e(56602),C=e(76920),I=e(82604),F=e(5626),S=e(51559);function P(p,E){return E?function _(p,E){if(null!=p){if((0,h.c)(p))return function i(p,E){return(0,t.Xf)(p).pipe(l(E),(0,a.Q)(E))}(p,E);if((0,T.z)(p))return function v(p,E){return new m.y(M=>{let A=0;return E.schedule(function(){A===p.length?M.complete():(M.next(p[A++]),M.closed||this.schedule())})})}(p,E);if((0,D.t)(p))return function f(p,E){return(0,t.Xf)(p).pipe(l(E),(0,a.Q)(E))}(p,E);if((0,I.D)(p))return x(p,E);if((0,C.T)(p))return function c(p,E){return new m.y(M=>{let A;return(0,n.f)(M,E,()=>{A=p[b.h](),(0,n.f)(M,E,()=>{let B,j;try{({value:B,done:j}=A.next())}catch(H){return void M.error(H)}j?M.complete():M.next(B)},0,!0)}),()=>(0,s.m)(A?.return)&&A.return()})}(p,E);if((0,S.L)(p))return function O(p,E){return x((0,S.Q)(p),E)}(p,E)}throw(0,F.z)(p)}(p,E):(0,t.Xf)(p)}},21860:(w,u,e)=>{e.d(u,{T:()=>f});var t=e(70549),a=e(75955),d=e(9018),l=e(46651),i=e(17108);function f(...m){const v=(0,l.yG)(m),b=(0,l._6)(m,1/0),s=m;return s.length?1===s.length?(0,a.Xf)(s[0]):(0,t.J)(b)((0,i.D)(s,v)):d.E}},84945:(w,u,e)=>{e.d(u,{of:()=>d});var t=e(46651),a=e(17108);function d(...l){const i=(0,t.yG)(l);return(0,a.D)(l,i)}},28499:(w,u,e)=>{e.d(u,{x:()=>a});var t=e(94021);function a(l,i,f,m,v){return new d(l,i,f,m,v)}class d extends t.Lv{constructor(i,f,m,v,b,s){super(i),this.onFinalize=b,this.shouldUnsubscribe=s,this._next=f?function(n){try{f(n)}catch(c){i.error(c)}}:super._next,this._error=v?function(n){try{v(n)}catch(c){i.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=m?function(){try{m()}catch(n){i.error(n)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var i;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:f}=this;super.unsubscribe(),!f&&(null===(i=this.onFinalize)||void 0===i||i.call(this))}}}},27969:(w,u,e)=>{e.d(u,{U:()=>d});var t=e(32085),a=e(28499);function d(l,i){return(0,t.e)((f,m)=>{let v=0;f.subscribe((0,a.x)(m,b=>{m.next(l.call(i,b,v++))}))})}},70549:(w,u,e)=>{e.d(u,{J:()=>d});var t=e(54882),a=e(68330);function d(l=1/0){return(0,t.z)(a.y,l)}},54882:(w,u,e)=>{e.d(u,{z:()=>v});var t=e(27969),a=e(75955),d=e(32085),l=e(16903),i=e(28499),m=e(35975);function v(b,s,n=1/0){return(0,m.m)(s)?v((c,x)=>(0,t.U)((h,D)=>s(c,h,x,D))((0,a.Xf)(b(c,x))),n):("number"==typeof s&&(n=s),(0,d.e)((c,x)=>function f(b,s,n,c,x,h,D,T){const C=[];let I=0,F=0,S=!1;const O=()=>{S&&!C.length&&!I&&s.complete()},_=p=>I<c?P(p):C.push(p),P=p=>{h&&s.next(p),I++;let E=!1;(0,a.Xf)(n(p,F++)).subscribe((0,i.x)(s,M=>{x?.(M),h?_(M):s.next(M)},()=>{E=!0},void 0,()=>{if(E)try{for(I--;C.length&&I<c;){const M=C.shift();D?(0,l.f)(s,D,()=>P(M)):P(M)}O()}catch(M){s.error(M)}}))};return b.subscribe((0,i.x)(s,_,()=>{S=!0,O()})),()=>{T?.()}}(c,x,b,n)))}},57513:(w,u,e)=>{e.d(u,{Q:()=>l});var t=e(16903),a=e(32085),d=e(28499);function l(i,f=0){return(0,a.e)((m,v)=>{m.subscribe((0,d.x)(v,b=>(0,t.f)(v,i,()=>v.next(b),f),()=>(0,t.f)(v,i,()=>v.complete(),f),b=>(0,t.f)(v,i,()=>v.error(b),f)))})}},84146:(w,u,e)=>{e.d(u,{z:()=>t});const t={setTimeout(a,d,...l){const{delegate:i}=t;return i?.setTimeout?i.setTimeout(a,d,...l):setTimeout(a,d,...l)},clearTimeout(a){const{delegate:d}=t;return(d?.clearTimeout||clearTimeout)(a)},delegate:void 0}},43122:(w,u,e)=>{e.d(u,{L:()=>t});const t="function"==typeof Symbol&&Symbol.observable||"@@observable"},46651:(w,u,e)=>{e.d(u,{_6:()=>f,jO:()=>l,yG:()=>i});var t=e(35975),a=e(1830);function d(m){return m[m.length-1]}function l(m){return(0,t.m)(d(m))?m.pop():void 0}function i(m){return(0,a.K)(d(m))?m.pop():void 0}function f(m,v){return"number"==typeof d(m)?m.pop():v}},20447:(w,u,e)=>{e.d(u,{D:()=>i});const{isArray:t}=Array,{getPrototypeOf:a,prototype:d,keys:l}=Object;function i(m){if(1===m.length){const v=m[0];if(t(v))return{args:v,keys:null};if(function f(m){return m&&"object"==typeof m&&a(m)===d}(v)){const b=l(v);return{args:b.map(s=>v[s]),keys:b}}}return{args:m,keys:null}}},78308:(w,u,e)=>{function t(a,d){if(a){const l=a.indexOf(d);0<=l&&a.splice(l,1)}}e.d(u,{P:()=>t})},95776:(w,u,e)=>{function t(a){const l=a(i=>{Error.call(i),i.stack=(new Error).stack});return l.prototype=Object.create(Error.prototype),l.prototype.constructor=l,l}e.d(u,{d:()=>t})},89299:(w,u,e)=>{function t(a,d){return a.reduce((l,i,f)=>(l[i]=d[f],l),{})}e.d(u,{n:()=>t})},1519:(w,u,e)=>{e.d(u,{O:()=>l,x:()=>d});var t=e(42046);let a=null;function d(i){if(t.config.useDeprecatedSynchronousErrorHandling){const f=!a;if(f&&(a={errorThrown:!1,error:null}),i(),f){const{errorThrown:m,error:v}=a;if(a=null,m)throw v}}else i()}function l(i){t.config.useDeprecatedSynchronousErrorHandling&&a&&(a.errorThrown=!0,a.error=i)}},16903:(w,u,e)=>{function t(a,d,l,i=0,f=!1){const m=d.schedule(function(){l(),f?a.add(this.schedule(null,i)):this.unsubscribe()},i);if(a.add(m),!f)return m}e.d(u,{f:()=>t})},68330:(w,u,e)=>{function t(a){return a}e.d(u,{y:()=>t})},35975:(w,u,e)=>{function t(a){return"function"==typeof a}e.d(u,{m:()=>t})},1830:(w,u,e)=>{e.d(u,{K:()=>a});var t=e(35975);function a(d){return d&&(0,t.m)(d.schedule)}},32085:(w,u,e)=>{e.d(u,{A:()=>a,e:()=>d});var t=e(35975);function a(l){return(0,t.m)(l?.lift)}function d(l){return i=>{if(a(i))return i.lift(function(f){try{return l(f,this)}catch(m){this.error(m)}});throw new TypeError("Unable to lift unknown Observable type")}}},52692:(w,u,e)=>{e.d(u,{Z:()=>l});var t=e(27969);const{isArray:a}=Array;function l(i){return(0,t.U)(f=>function d(i,f){return a(f)?i(...f):i(f)}(i,f))}},408:(w,u,e)=>{function t(){}e.d(u,{Z:()=>t})},17824:(w,u,e)=>{e.d(u,{U:()=>d,z:()=>a});var t=e(68330);function a(...l){return d(l)}function d(l){return 0===l.length?t.y:1===l.length?l[0]:function(f){return l.reduce((m,v)=>v(m),f)}}},34922:(w,u,e)=>{e.d(u,{h:()=>d});var t=e(42046),a=e(84146);function d(l){a.z.setTimeout(()=>{const{onUnhandledError:i}=t.config;if(!i)throw l;i(l)})}},44190:(w,u,e)=>{e.r(u),e.d(u,{MatCell:()=>p,MatCellDef:()=>I,MatColumnDef:()=>O,MatFooterCell:()=>P,MatFooterCellDef:()=>S,MatFooterRow:()=>j,MatFooterRowDef:()=>M,MatHeaderCell:()=>_,MatHeaderCellDef:()=>F,MatHeaderRow:()=>B,MatHeaderRowDef:()=>E,MatNoDataRow:()=>N,MatRecycleRows:()=>T,MatRow:()=>H,MatRowDef:()=>A,MatTable:()=>C,MatTableDataSource:()=>Q,MatTableModule:()=>$,MatTextColumn:()=>V,_MatTableDataSource:()=>X});var t=e(56718),a=e(33730),d=e(81382),l=e(6606),i=e(54121),f=e(38023),m=e(21860),v=e(84945),b=e(15696),s=e(35333),n=e(27969);const c=[[["caption"]],[["colgroup"],["col"]]],x=["caption","colgroup, col"];function h(r,R){if(1&r&&(t.\u0275\u0275elementStart(0,"th",3),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&r){const o=t.\u0275\u0275nextContext();t.\u0275\u0275styleProp("text-align",o.justify),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",o.headerText," ")}}function D(r,R){if(1&r&&(t.\u0275\u0275elementStart(0,"td",4),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&r){const o=R.$implicit,y=t.\u0275\u0275nextContext();t.\u0275\u0275styleProp("text-align",y.justify),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",y.dataAccessor(o,y.name)," ")}}let T=(()=>{class r{static#t=this.\u0275fac=function(y){return new(y||r)};static#e=this.\u0275dir=t.\u0275\u0275defineDirective({type:r,selectors:[["mat-table","recycleRows",""],["table","mat-table","","recycleRows",""]],features:[t.\u0275\u0275ProvidersFeature([{provide:d._VIEW_REPEATER_STRATEGY,useClass:d._RecycleViewRepeaterStrategy}])]})}return r})(),C=(()=>{class r extends a.CdkTable{constructor(){super(...arguments),this.stickyCssClass="mat-mdc-table-sticky",this.needsPositionStickyOnElement=!1}ngOnInit(){super.ngOnInit(),this._isNativeHtmlTable&&this._elementRef.nativeElement.querySelector("tbody").classList.add("mdc-data-table__content")}static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:r,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:["ngSkipHydration","",1,"mat-mdc-table","mdc-data-table__table"],hostVars:2,hostBindings:function(y,g){2&y&&t.\u0275\u0275classProp("mdc-table-fixed-layout",g.fixedLayout)},exportAs:["matTable"],features:[t.\u0275\u0275ProvidersFeature([{provide:a.CdkTable,useExisting:r},{provide:a.CDK_TABLE,useExisting:r},{provide:a._COALESCED_STYLE_SCHEDULER,useClass:a._CoalescedStyleScheduler},{provide:d._VIEW_REPEATER_STRATEGY,useClass:d._DisposeViewRepeaterStrategy},{provide:a.STICKY_POSITIONING_LISTENER,useValue:null}]),t.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:x,decls:6,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["noDataRowOutlet",""],["footerRowOutlet",""]],template:function(y,g){1&y&&(t.\u0275\u0275projectionDef(c),t.\u0275\u0275projection(0),t.\u0275\u0275projection(1,1),t.\u0275\u0275elementContainer(2,0)(3,1)(4,2)(5,3))},dependencies:[a.DataRowOutlet,a.HeaderRowOutlet,a.FooterRowOutlet,a.NoDataRowOutlet],styles:[".mdc-data-table{border-radius:var(--mdc-shape-medium, 4px);border-width:1px;border-style:solid}.mdc-data-table .mdc-data-table__header-cell:first-child{border-top-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:first-child,.mdc-data-table .mdc-data-table__header-cell:first-child[dir=rtl]{border-top-right-radius:var(--mdc-shape-medium, 4px);border-top-left-radius:0}.mdc-data-table .mdc-data-table__header-cell:last-child{border-top-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table .mdc-data-table__header-cell:last-child,.mdc-data-table .mdc-data-table__header-cell:last-child[dir=rtl]{border-top-left-radius:var(--mdc-shape-medium, 4px);border-top-right-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child{border-bottom-left-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:first-child[dir=rtl]{border-bottom-right-radius:var(--mdc-shape-medium, 4px);border-bottom-left-radius:0}.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child{border-bottom-right-radius:var(--mdc-shape-medium, 4px)}[dir=rtl] .mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child,.mdc-data-table.mdc-data-table--without-footer .mdc-data-table__row:last-child .mdc-data-table__cell:last-child[dir=rtl]{border-bottom-left-radius:var(--mdc-shape-medium, 4px);border-bottom-right-radius:0}.mdc-data-table__cell,.mdc-data-table__header-cell{border-bottom-width:1px;border-bottom-style:solid}.mdc-data-table__pagination{border-top-width:1px;border-top-style:solid}.mdc-data-table__row:last-child .mdc-data-table__cell{border-bottom:none}.mdc-data-table__row{height:52px}.mdc-data-table__pagination{min-height:52px}.mdc-data-table__header-row{height:56px}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px 0 16px}.mdc-data-table__header-cell--checkbox,.mdc-data-table__cell--checkbox{padding-left:4px;padding-right:0}[dir=rtl] .mdc-data-table__header-cell--checkbox,[dir=rtl] .mdc-data-table__cell--checkbox,.mdc-data-table__header-cell--checkbox[dir=rtl],.mdc-data-table__cell--checkbox[dir=rtl]{padding-left:0;padding-right:4px}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__cell--checkbox{width:1px}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__header-cell--checkbox{width:1px}.mdc-data-table__sort-icon-button{width:28px;height:28px;padding:2px;transform:rotate(0.0001deg);margin-left:4px;margin-right:0;opacity:0}.mdc-data-table__sort-icon-button .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__ripple{width:28px;height:28px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-data-table__sort-icon-button.mdc-icon-button--reduced-size .mdc-icon-button__focus-ring{max-height:28px;max-width:28px}.mdc-data-table__sort-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:28px;left:50%;width:28px;transform:translate(-50%, -50%)}[dir=rtl] .mdc-data-table__sort-icon-button,.mdc-data-table__sort-icon-button[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--numeric .mdc-data-table__sort-icon-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__header-cell--sorted-descending .mdc-data-table__sort-icon-button{transform:rotate(-180deg)}.mdc-data-table__sort-icon-button:focus,.mdc-data-table__header-cell:hover .mdc-data-table__sort-icon-button,.mdc-data-table__header-cell--sorted .mdc-data-table__sort-icon-button{opacity:1}.mdc-data-table__header-cell--with-sort{cursor:pointer}.mdc-data-table__sort-status-label{clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}.mdc-data-table--sticky-header .mdc-data-table__header-cell{position:sticky;top:0;z-index:1}.mdc-data-table{-webkit-overflow-scrolling:touch;display:inline-flex;flex-direction:column;box-sizing:border-box;position:relative}.mdc-data-table__table-container{-webkit-overflow-scrolling:touch;overflow-x:auto;width:100%}.mdc-data-table__table{min-width:100%;border:0;white-space:nowrap;border-spacing:0;table-layout:fixed}.mdc-data-table__header-cell{box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mdc-data-table__header-cell,.mdc-data-table__header-cell[dir=rtl]{text-align:right}.mdc-data-table__header-cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__header-cell--numeric,.mdc-data-table__header-cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__header-cell-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell,.mdc-data-table__cell[dir=rtl]{text-align:right}.mdc-data-table__cell--numeric{text-align:right}[dir=rtl] .mdc-data-table__cell--numeric,.mdc-data-table__cell--numeric[dir=rtl]{text-align:left}.mdc-data-table__pagination{box-sizing:border-box;display:flex;justify-content:flex-end}.mdc-data-table__pagination-trailing{margin-left:4px;margin-right:0;align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-end}[dir=rtl] .mdc-data-table__pagination-trailing,.mdc-data-table__pagination-trailing[dir=rtl]{margin-left:0;margin-right:4px}.mdc-data-table__pagination-navigation{align-items:center;display:flex}.mdc-data-table__pagination-button{margin-left:0;margin-right:4px}[dir=rtl] .mdc-data-table__pagination-button .mdc-button__icon,.mdc-data-table__pagination-button .mdc-button__icon[dir=rtl]{transform:rotate(180deg)}[dir=rtl] .mdc-data-table__pagination-button,.mdc-data-table__pagination-button[dir=rtl]{margin-left:4px;margin-right:0}.mdc-data-table__pagination-total{margin-left:14px;margin-right:36px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-total,.mdc-data-table__pagination-total[dir=rtl]{margin-left:36px;margin-right:14px}.mdc-data-table__pagination-rows-per-page{margin-left:0;margin-right:22px;align-items:center;display:inline-flex}[dir=rtl] .mdc-data-table__pagination-rows-per-page,.mdc-data-table__pagination-rows-per-page[dir=rtl]{margin-left:22px;margin-right:0}.mdc-data-table__pagination-rows-per-page-label{margin-left:0;margin-right:12px;white-space:nowrap}[dir=rtl] .mdc-data-table__pagination-rows-per-page-label,.mdc-data-table__pagination-rows-per-page-label[dir=rtl]{margin-left:12px;margin-right:0}.mdc-data-table__pagination-rows-per-page-select{min-width:var(--mdc-menu-min-width, 80px);margin:8px 0}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{width:100%;min-width:80px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor{height:36px}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{transform:translateY(-27.25px) scale(1)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-floating-label--float-above{font-size:.75rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-24.75px) scale(0.75)}.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-data-table__pagination-rows-per-page-select .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-data-table__pagination-rows-per-page-select .mdc-select__dropdown-icon{width:20px;height:20px}.mdc-data-table__pagination-rows-per-page-select.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 56px)}.mdc-data-table__pagination-rows-per-page-select .mdc-list-item.mdc-list-item--with-one-line{height:36px}.mdc-data-table__progress-indicator{display:none;position:absolute;width:100%}.mdc-data-table--in-progress .mdc-data-table__progress-indicator{display:block}.mdc-data-table__scrim{background-color:var(--mdc-theme-surface, #fff);height:100%;opacity:.32;position:absolute;top:0;width:100%}mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table-sticky{position:sticky !important}.mat-mdc-table{table-layout:auto;white-space:normal}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table .mat-mdc-row:hover,.mat-mdc-table .mat-mdc-footer-row:hover{background-color:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}"],encapsulation:2})}return r})(),I=(()=>{class r extends a.CdkCellDef{static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275dir=t.\u0275\u0275defineDirective({type:r,selectors:[["","matCellDef",""]],features:[t.\u0275\u0275ProvidersFeature([{provide:a.CdkCellDef,useExisting:r}]),t.\u0275\u0275InheritDefinitionFeature]})}return r})(),F=(()=>{class r extends a.CdkHeaderCellDef{static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275dir=t.\u0275\u0275defineDirective({type:r,selectors:[["","matHeaderCellDef",""]],features:[t.\u0275\u0275ProvidersFeature([{provide:a.CdkHeaderCellDef,useExisting:r}]),t.\u0275\u0275InheritDefinitionFeature]})}return r})(),S=(()=>{class r extends a.CdkFooterCellDef{static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275dir=t.\u0275\u0275defineDirective({type:r,selectors:[["","matFooterCellDef",""]],features:[t.\u0275\u0275ProvidersFeature([{provide:a.CdkFooterCellDef,useExisting:r}]),t.\u0275\u0275InheritDefinitionFeature]})}return r})(),O=(()=>{class r extends a.CdkColumnDef{get name(){return this._name}set name(o){this._setNameInput(o)}_updateColumnCssClassName(){super._updateColumnCssClassName(),this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`)}static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275dir=t.\u0275\u0275defineDirective({type:r,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[t.\u0275\u0275ProvidersFeature([{provide:a.CdkColumnDef,useExisting:r},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:r}]),t.\u0275\u0275InheritDefinitionFeature]})}return r})(),_=(()=>{class r extends a.CdkHeaderCell{static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275dir=t.\u0275\u0275defineDirective({type:r,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-mdc-header-cell","mdc-data-table__header-cell"],features:[t.\u0275\u0275InheritDefinitionFeature]})}return r})(),P=(()=>{class r extends a.CdkFooterCell{static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275dir=t.\u0275\u0275defineDirective({type:r,selectors:[["mat-footer-cell"],["td","mat-footer-cell",""]],hostAttrs:[1,"mat-mdc-footer-cell","mdc-data-table__cell"],features:[t.\u0275\u0275InheritDefinitionFeature]})}return r})(),p=(()=>{class r extends a.CdkCell{static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275dir=t.\u0275\u0275defineDirective({type:r,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:[1,"mat-mdc-cell","mdc-data-table__cell"],features:[t.\u0275\u0275InheritDefinitionFeature]})}return r})(),E=(()=>{class r extends a.CdkHeaderRowDef{static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275dir=t.\u0275\u0275defineDirective({type:r,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[t.\u0275\u0275ProvidersFeature([{provide:a.CdkHeaderRowDef,useExisting:r}]),t.\u0275\u0275InheritDefinitionFeature]})}return r})(),M=(()=>{class r extends a.CdkFooterRowDef{static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275dir=t.\u0275\u0275defineDirective({type:r,selectors:[["","matFooterRowDef",""]],inputs:{columns:["matFooterRowDef","columns"],sticky:["matFooterRowDefSticky","sticky"]},features:[t.\u0275\u0275ProvidersFeature([{provide:a.CdkFooterRowDef,useExisting:r}]),t.\u0275\u0275InheritDefinitionFeature]})}return r})(),A=(()=>{class r extends a.CdkRowDef{static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275dir=t.\u0275\u0275defineDirective({type:r,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[t.\u0275\u0275ProvidersFeature([{provide:a.CdkRowDef,useExisting:r}]),t.\u0275\u0275InheritDefinitionFeature]})}return r})(),B=(()=>{class r extends a.CdkHeaderRow{static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:r,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-mdc-header-row","mdc-data-table__header-row"],exportAs:["matHeaderRow"],features:[t.\u0275\u0275ProvidersFeature([{provide:a.CdkHeaderRow,useExisting:r}]),t.\u0275\u0275InheritDefinitionFeature],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(y,g){1&y&&t.\u0275\u0275elementContainer(0,0)},dependencies:[a.CdkCellOutlet],encapsulation:2})}return r})(),j=(()=>{class r extends a.CdkFooterRow{static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:r,selectors:[["mat-footer-row"],["tr","mat-footer-row",""]],hostAttrs:["role","row",1,"mat-mdc-footer-row","mdc-data-table__row"],exportAs:["matFooterRow"],features:[t.\u0275\u0275ProvidersFeature([{provide:a.CdkFooterRow,useExisting:r}]),t.\u0275\u0275InheritDefinitionFeature],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(y,g){1&y&&t.\u0275\u0275elementContainer(0,0)},dependencies:[a.CdkCellOutlet],encapsulation:2})}return r})(),H=(()=>{class r extends a.CdkRow{static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:r,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-mdc-row","mdc-data-table__row"],exportAs:["matRow"],features:[t.\u0275\u0275ProvidersFeature([{provide:a.CdkRow,useExisting:r}]),t.\u0275\u0275InheritDefinitionFeature],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(y,g){1&y&&t.\u0275\u0275elementContainer(0,0)},dependencies:[a.CdkCellOutlet],encapsulation:2})}return r})(),N=(()=>{class r extends a.CdkNoDataRow{constructor(){super(...arguments),this._contentClassName="mat-mdc-no-data-row"}static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275dir=t.\u0275\u0275defineDirective({type:r,selectors:[["ng-template","matNoDataRow",""]],features:[t.\u0275\u0275ProvidersFeature([{provide:a.CdkNoDataRow,useExisting:r}]),t.\u0275\u0275InheritDefinitionFeature]})}return r})(),V=(()=>{class r extends a.CdkTextColumn{static#t=this.\u0275fac=function(){let o;return function(g){return(o||(o=t.\u0275\u0275getInheritedFactory(r)))(g||r)}}();static#e=this.\u0275cmp=t.\u0275\u0275defineComponent({type:r,selectors:[["mat-text-column"]],features:[t.\u0275\u0275InheritDefinitionFeature],decls:3,vars:0,consts:[["matColumnDef",""],["mat-header-cell","",3,"text-align",4,"matHeaderCellDef"],["mat-cell","",3,"text-align",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""]],template:function(y,g){1&y&&(t.\u0275\u0275elementContainerStart(0,0),t.\u0275\u0275template(1,h,2,3,"th",1),t.\u0275\u0275template(2,D,2,3,"td",2),t.\u0275\u0275elementContainerEnd())},dependencies:[F,O,I,_,p],encapsulation:2})}return r})(),$=(()=>{class r{static#t=this.\u0275fac=function(y){return new(y||r)};static#e=this.\u0275mod=t.\u0275\u0275defineNgModule({type:r});static#r=this.\u0275inj=t.\u0275\u0275defineInjector({imports:[l.MatCommonModule,a.CdkTableModule,l.MatCommonModule]})}return r})();class X extends d.DataSource{get data(){return this._data.value}set data(R){R=Array.isArray(R)?R:[],this._data.next(R),this._renderChangesSubscription||this._filterData(R)}get filter(){return this._filter.value}set filter(R){this._filter.next(R),this._renderChangesSubscription||this._filterData(this.data)}get sort(){return this._sort}set sort(R){this._sort=R,this._updateChangeSubscription()}get paginator(){return this._paginator}set paginator(R){this._paginator=R,this._updateChangeSubscription()}constructor(R=[]){super(),this._renderData=new i.X([]),this._filter=new i.X(""),this._internalPageChanges=new f.x,this._renderChangesSubscription=null,this.sortingDataAccessor=(o,y)=>{const g=o[y];if((0,s._isNumberValue)(g)){const U=Number(g);return U<9007199254740991?U:g}return g},this.sortData=(o,y)=>{const g=y.active,U=y.direction;return g&&""!=U?o.sort((z,L)=>{let K=this.sortingDataAccessor(z,g),W=this.sortingDataAccessor(L,g);const Y=typeof K,G=typeof W;Y!==G&&("number"===Y&&(K+=""),"number"===G&&(W+=""));let k=0;return null!=K&&null!=W?K>W?k=1:K<W&&(k=-1):null!=K?k=1:null!=W&&(k=-1),k*("asc"==U?1:-1)}):o},this.filterPredicate=(o,y)=>{const g=Object.keys(o).reduce((z,L)=>z+o[L]+"\u25ec","").toLowerCase(),U=y.trim().toLowerCase();return-1!=g.indexOf(U)},this._data=new i.X(R),this._updateChangeSubscription()}_updateChangeSubscription(){const R=this._sort?(0,m.T)(this._sort.sortChange,this._sort.initialized):(0,v.of)(null),o=this._paginator?(0,m.T)(this._paginator.page,this._internalPageChanges,this._paginator.initialized):(0,v.of)(null),g=(0,b.a)([this._data,this._filter]).pipe((0,n.U)(([L])=>this._filterData(L))),U=(0,b.a)([g,R]).pipe((0,n.U)(([L])=>this._orderData(L))),z=(0,b.a)([U,o]).pipe((0,n.U)(([L])=>this._pageData(L)));this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=z.subscribe(L=>this._renderData.next(L))}_filterData(R){return this.filteredData=null==this.filter||""===this.filter?R:R.filter(o=>this.filterPredicate(o,this.filter)),this.paginator&&this._updatePaginator(this.filteredData.length),this.filteredData}_orderData(R){return this.sort?this.sortData(R.slice(),this.sort):R}_pageData(R){if(!this.paginator)return R;const o=this.paginator.pageIndex*this.paginator.pageSize;return R.slice(o,o+this.paginator.pageSize)}_updatePaginator(R){Promise.resolve().then(()=>{const o=this.paginator;if(o&&(o.length=R,o.pageIndex>0)){const y=Math.ceil(o.length/o.pageSize)-1||0,g=Math.min(o.pageIndex,y);g!==o.pageIndex&&(o.pageIndex=g,this._internalPageChanges.next())}})}connect(){return this._renderChangesSubscription||this._updateChangeSubscription(),this._renderData}disconnect(){this._renderChangesSubscription?.unsubscribe(),this._renderChangesSubscription=null}}class Q extends X{}}}]);
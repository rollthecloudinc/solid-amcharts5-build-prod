(self.webpackChunkplugin_amcharts5=self.webpackChunkplugin_amcharts5||[]).push([[3410,8023,4254,7241,5598],{87241:(g,h,t)=>{t.d(h,{y:()=>E});var s=t(94021),r=t(14813),n=t(43122),a=t(17824),i=t(42046),_=t(35975),f=t(1519);let E=(()=>{class c{constructor(v){v&&(this._subscribe=v)}lift(v){const D=new c;return D.source=this,D.operator=v,D}subscribe(v,D,I){const S=function e(c){return c&&c instanceof s.Lv||function o(c){return c&&(0,_.m)(c.next)&&(0,_.m)(c.error)&&(0,_.m)(c.complete)}(c)&&(0,r.Nn)(c)}(v)?v:new s.Hp(v,D,I);return(0,f.x)(()=>{const{operator:C,source:B}=this;S.add(C?C.call(S,B):B?this._subscribe(S):this._trySubscribe(S))}),S}_trySubscribe(v){try{return this._subscribe(v)}catch(D){v.error(D)}}forEach(v,D){return new(D=u(D))((I,S)=>{const C=new s.Hp({next:B=>{try{v(B)}catch(A){S(A),C.unsubscribe()}},error:S,complete:I});this.subscribe(C)})}_subscribe(v){var D;return null===(D=this.source)||void 0===D?void 0:D.subscribe(v)}[n.L](){return this}pipe(...v){return(0,a.U)(v)(this)}toPromise(v){return new(v=u(v))((D,I)=>{let S;this.subscribe(C=>S=C,C=>I(C),()=>D(S))})}}return c.create=M=>new c(M),c})();function u(c){var M;return null!==(M=c??i.config.Promise)&&void 0!==M?M:Promise}},38023:(g,h,t)=>{t.d(h,{x:()=>f});var s=t(87241),r=t(14813);const a=(0,t(95776).d)(u=>function(){u(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var i=t(78308),_=t(1519);let f=(()=>{class u extends s.y{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){const c=new E(this,this);return c.operator=e,c}_throwIfClosed(){if(this.closed)throw new a}next(e){(0,_.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(const c of this.currentObservers)c.next(e)}})}error(e){(0,_.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;const{observers:c}=this;for(;c.length;)c.shift().error(e)}})}complete(){(0,_.x)(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;const{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return(null===(e=this.observers)||void 0===e?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){const{hasError:c,isStopped:M,observers:v}=this;return c||M?r.Lc:(this.currentObservers=null,v.push(e),new r.w0(()=>{this.currentObservers=null,(0,i.P)(v,e)}))}_checkFinalizedStatuses(e){const{hasError:c,thrownError:M,isStopped:v}=this;c?e.error(M):v&&e.complete()}asObservable(){const e=new s.y;return e.source=this,e}}return u.create=(o,e)=>new E(o,e),u})();class E extends f{constructor(o,e){super(),this.destination=o,this.source=e}next(o){var e,c;null===(c=null===(e=this.destination)||void 0===e?void 0:e.next)||void 0===c||c.call(e,o)}error(o){var e,c;null===(c=null===(e=this.destination)||void 0===e?void 0:e.error)||void 0===c||c.call(e,o)}complete(){var o,e;null===(e=null===(o=this.destination)||void 0===o?void 0:o.complete)||void 0===e||e.call(o)}_subscribe(o){var e,c;return null!==(c=null===(e=this.source)||void 0===e?void 0:e.subscribe(o))&&void 0!==c?c:r.Lc}}},94021:(g,h,t)=>{t.d(h,{Hp:()=>I,Lv:()=>c});var s=t(35975),r=t(14813),n=t(42046),a=t(34922),i=t(408);const _=u("C",void 0,void 0);function u(P,m,y){return{kind:P,value:m,error:y}}var o=t(84146),e=t(1519);class c extends r.w0{constructor(m){super(),this.isStopped=!1,m?(this.destination=m,(0,r.Nn)(m)&&m.add(this)):this.destination=A}static create(m,y,l){return new I(m,y,l)}next(m){this.isStopped?B(function E(P){return u("N",P,void 0)}(m),this):this._next(m)}error(m){this.isStopped?B(function f(P){return u("E",void 0,P)}(m),this):(this.isStopped=!0,this._error(m))}complete(){this.isStopped?B(_,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(m){this.destination.next(m)}_error(m){try{this.destination.error(m)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const M=Function.prototype.bind;function v(P,m){return M.call(P,m)}class D{constructor(m){this.partialObserver=m}next(m){const{partialObserver:y}=this;if(y.next)try{y.next(m)}catch(l){S(l)}}error(m){const{partialObserver:y}=this;if(y.error)try{y.error(m)}catch(l){S(l)}else S(m)}complete(){const{partialObserver:m}=this;if(m.complete)try{m.complete()}catch(y){S(y)}}}class I extends c{constructor(m,y,l){let p;if(super(),(0,s.m)(m)||!m)p={next:m??void 0,error:y??void 0,complete:l??void 0};else{let d;this&&n.config.useDeprecatedNextContext?(d=Object.create(m),d.unsubscribe=()=>this.unsubscribe(),p={next:m.next&&v(m.next,d),error:m.error&&v(m.error,d),complete:m.complete&&v(m.complete,d)}):p=m}this.destination=new D(p)}}function S(P){n.config.useDeprecatedSynchronousErrorHandling?(0,e.O)(P):(0,a.h)(P)}function B(P,m){const{onStoppedNotification:y}=n.config;y&&o.z.setTimeout(()=>y(P,m))}const A={closed:!0,next:i.Z,error:function C(P){throw P},complete:i.Z}},14813:(g,h,t)=>{t.d(h,{Lc:()=>_,w0:()=>i,Nn:()=>f});var s=t(35975);const n=(0,t(95776).d)(u=>function(e){u(this),this.message=e?`${e.length} errors occurred during unsubscription:\n${e.map((c,M)=>`${M+1}) ${c.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=e});var a=t(78308);class i{constructor(o){this.initialTeardown=o,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let o;if(!this.closed){this.closed=!0;const{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(const v of e)v.remove(this);else e.remove(this);const{initialTeardown:c}=this;if((0,s.m)(c))try{c()}catch(v){o=v instanceof n?v.errors:[v]}const{_finalizers:M}=this;if(M){this._finalizers=null;for(const v of M)try{E(v)}catch(D){o=o??[],D instanceof n?o=[...o,...D.errors]:o.push(D)}}if(o)throw new n(o)}}add(o){var e;if(o&&o!==this)if(this.closed)E(o);else{if(o instanceof i){if(o.closed||o._hasParent(this))return;o._addParent(this)}(this._finalizers=null!==(e=this._finalizers)&&void 0!==e?e:[]).push(o)}}_hasParent(o){const{_parentage:e}=this;return e===o||Array.isArray(e)&&e.includes(o)}_addParent(o){const{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(o),e):e?[e,o]:o}_removeParent(o){const{_parentage:e}=this;e===o?this._parentage=null:Array.isArray(e)&&(0,a.P)(e,o)}remove(o){const{_finalizers:e}=this;e&&(0,a.P)(e,o),o instanceof i&&o._removeParent(this)}}i.EMPTY=(()=>{const u=new i;return u.closed=!0,u})();const _=i.EMPTY;function f(u){return u instanceof i||u&&"closed"in u&&(0,s.m)(u.remove)&&(0,s.m)(u.add)&&(0,s.m)(u.unsubscribe)}function E(u){(0,s.m)(u)?u():u.unsubscribe()}},42046:(g,h,t)=>{t.d(h,{config:()=>s});const s={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},9018:(g,h,t)=>{t.d(h,{E:()=>r});const r=new(t(87241).y)(i=>i.complete())},17108:(g,h,t)=>{t.d(h,{D:()=>y});var s=t(75955),r=t(57513),n=t(32085);function a(l,p=0){return(0,n.e)((d,b)=>{b.add(l.schedule(()=>d.subscribe(b),p))})}var f=t(87241),u=t(44565),o=t(35975),e=t(16903);function M(l,p){if(!l)throw new Error("Iterable cannot be null");return new f.y(d=>{(0,e.f)(d,p,()=>{const b=l[Symbol.asyncIterator]();(0,e.f)(d,p,()=>{b.next().then(O=>{O.done?d.complete():d.next(O.value)})},0,!0)})})}var v=t(82021),D=t(29450),I=t(56602),S=t(76920),C=t(82604),B=t(5626),A=t(51559);function y(l,p){return p?function m(l,p){if(null!=l){if((0,v.c)(l))return function i(l,p){return(0,s.Xf)(l).pipe(a(p),(0,r.Q)(p))}(l,p);if((0,I.z)(l))return function E(l,p){return new f.y(d=>{let b=0;return p.schedule(function(){b===l.length?d.complete():(d.next(l[b++]),d.closed||this.schedule())})})}(l,p);if((0,D.t)(l))return function _(l,p){return(0,s.Xf)(l).pipe(a(p),(0,r.Q)(p))}(l,p);if((0,C.D)(l))return M(l,p);if((0,S.T)(l))return function c(l,p){return new f.y(d=>{let b;return(0,e.f)(d,p,()=>{b=l[u.h](),(0,e.f)(d,p,()=>{let O,T;try{({value:O,done:T}=b.next())}catch(R){return void d.error(R)}T?d.complete():d.next(O)},0,!0)}),()=>(0,o.m)(b?.return)&&b.return()})}(l,p);if((0,A.L)(l))return function P(l,p){return M((0,A.Q)(l),p)}(l,p)}throw(0,B.z)(l)}(l,p):(0,s.Xf)(l)}},21860:(g,h,t)=>{t.d(h,{T:()=>_});var s=t(70549),r=t(75955),n=t(9018),a=t(46651),i=t(17108);function _(...f){const E=(0,a.yG)(f),u=(0,a._6)(f,1/0),o=f;return o.length?1===o.length?(0,r.Xf)(o[0]):(0,s.J)(u)((0,i.D)(o,E)):n.E}},28499:(g,h,t)=>{t.d(h,{x:()=>r});var s=t(94021);function r(a,i,_,f,E){return new n(a,i,_,f,E)}class n extends s.Lv{constructor(i,_,f,E,u,o){super(i),this.onFinalize=u,this.shouldUnsubscribe=o,this._next=_?function(e){try{_(e)}catch(c){i.error(c)}}:super._next,this._error=E?function(e){try{E(e)}catch(c){i.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=f?function(){try{f()}catch(e){i.error(e)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var i;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:_}=this;super.unsubscribe(),!_&&(null===(i=this.onFinalize)||void 0===i||i.call(this))}}}},74970:(g,h,t)=>{t.d(h,{h:()=>n});var s=t(32085),r=t(28499);function n(a,i){return(0,s.e)((_,f)=>{let E=0;_.subscribe((0,r.x)(f,u=>a.call(i,u,E++)&&f.next(u)))})}},27969:(g,h,t)=>{t.d(h,{U:()=>n});var s=t(32085),r=t(28499);function n(a,i){return(0,s.e)((_,f)=>{let E=0;_.subscribe((0,r.x)(f,u=>{f.next(a.call(i,u,E++))}))})}},70549:(g,h,t)=>{t.d(h,{J:()=>n});var s=t(54882),r=t(68330);function n(a=1/0){return(0,s.z)(r.y,a)}},54882:(g,h,t)=>{t.d(h,{z:()=>E});var s=t(27969),r=t(75955),n=t(32085),a=t(16903),i=t(28499),f=t(35975);function E(u,o,e=1/0){return(0,f.m)(o)?E((c,M)=>(0,s.U)((v,D)=>o(c,v,M,D))((0,r.Xf)(u(c,M))),e):("number"==typeof o&&(e=o),(0,n.e)((c,M)=>function _(u,o,e,c,M,v,D,I){const S=[];let C=0,B=0,A=!1;const P=()=>{A&&!S.length&&!C&&o.complete()},m=l=>C<c?y(l):S.push(l),y=l=>{v&&o.next(l),C++;let p=!1;(0,r.Xf)(e(l,B++)).subscribe((0,i.x)(o,d=>{M?.(d),v?m(d):o.next(d)},()=>{p=!0},void 0,()=>{if(p)try{for(C--;S.length&&C<c;){const d=S.shift();D?(0,a.f)(o,D,()=>y(d)):y(d)}P()}catch(d){o.error(d)}}))};return u.subscribe((0,i.x)(o,m,()=>{A=!0,P()})),()=>{I?.()}}(c,M,u,e)))}},57513:(g,h,t)=>{t.d(h,{Q:()=>a});var s=t(16903),r=t(32085),n=t(28499);function a(i,_=0){return(0,r.e)((f,E)=>{f.subscribe((0,n.x)(E,u=>(0,s.f)(E,i,()=>E.next(u),_),()=>(0,s.f)(E,i,()=>E.complete(),_),u=>(0,s.f)(E,i,()=>E.error(u),_)))})}},65598:(g,h,t)=>{t.d(h,{q:()=>a});var s=t(9018),r=t(32085),n=t(28499);function a(i){return i<=0?()=>s.E:(0,r.e)((_,f)=>{let E=0;_.subscribe((0,n.x)(f,u=>{++E<=i&&(f.next(u),i<=E&&f.complete())}))})}},84146:(g,h,t)=>{t.d(h,{z:()=>s});const s={setTimeout(r,n,...a){const{delegate:i}=s;return i?.setTimeout?i.setTimeout(r,n,...a):setTimeout(r,n,...a)},clearTimeout(r){const{delegate:n}=s;return(n?.clearTimeout||clearTimeout)(r)},delegate:void 0}},43122:(g,h,t)=>{t.d(h,{L:()=>s});const s="function"==typeof Symbol&&Symbol.observable||"@@observable"},46651:(g,h,t)=>{t.d(h,{_6:()=>_,jO:()=>a,yG:()=>i});var s=t(35975),r=t(1830);function n(f){return f[f.length-1]}function a(f){return(0,s.m)(n(f))?f.pop():void 0}function i(f){return(0,r.K)(n(f))?f.pop():void 0}function _(f,E){return"number"==typeof n(f)?f.pop():E}},78308:(g,h,t)=>{function s(r,n){if(r){const a=r.indexOf(n);0<=a&&r.splice(a,1)}}t.d(h,{P:()=>s})},95776:(g,h,t)=>{function s(r){const a=r(i=>{Error.call(i),i.stack=(new Error).stack});return a.prototype=Object.create(Error.prototype),a.prototype.constructor=a,a}t.d(h,{d:()=>s})},1519:(g,h,t)=>{t.d(h,{O:()=>a,x:()=>n});var s=t(42046);let r=null;function n(i){if(s.config.useDeprecatedSynchronousErrorHandling){const _=!r;if(_&&(r={errorThrown:!1,error:null}),i(),_){const{errorThrown:f,error:E}=r;if(r=null,f)throw E}}else i()}function a(i){s.config.useDeprecatedSynchronousErrorHandling&&r&&(r.errorThrown=!0,r.error=i)}},16903:(g,h,t)=>{function s(r,n,a,i=0,_=!1){const f=n.schedule(function(){a(),_?r.add(this.schedule(null,i)):this.unsubscribe()},i);if(r.add(f),!_)return f}t.d(h,{f:()=>s})},68330:(g,h,t)=>{function s(r){return r}t.d(h,{y:()=>s})},35975:(g,h,t)=>{function s(r){return"function"==typeof r}t.d(h,{m:()=>s})},1830:(g,h,t)=>{t.d(h,{K:()=>r});var s=t(35975);function r(n){return n&&(0,s.m)(n.schedule)}},32085:(g,h,t)=>{t.d(h,{A:()=>r,e:()=>n});var s=t(35975);function r(a){return(0,s.m)(a?.lift)}function n(a){return i=>{if(r(i))return i.lift(function(_){try{return a(_,this)}catch(f){this.error(f)}});throw new TypeError("Unable to lift unknown Observable type")}}},408:(g,h,t)=>{function s(){}t.d(h,{Z:()=>s})},17824:(g,h,t)=>{t.d(h,{U:()=>n,z:()=>r});var s=t(68330);function r(...a){return n(a)}function n(a){return 0===a.length?s.y:1===a.length?a[0]:function(_){return a.reduce((f,E)=>E(f),_)}}},34922:(g,h,t)=>{t.d(h,{h:()=>n});var s=t(42046),r=t(84146);function n(a){r.z.setTimeout(()=>{const{onUnhandledError:i}=s.config;if(!i)throw a;i(a)})}},3410:(g,h,t)=>{t.r(h),t.d(h,{MAT_BOTTOM_SHEET_DATA:()=>B,MAT_BOTTOM_SHEET_DEFAULT_OPTIONS:()=>m,MatBottomSheet:()=>y,MatBottomSheetConfig:()=>A,MatBottomSheetContainer:()=>S,MatBottomSheetModule:()=>C,MatBottomSheetRef:()=>P,matBottomSheetAnimations:()=>I});var s=t(69064),r=t(18142),n=t(56718),a=t(6606),i=t(908),_=t(25121),f=t(43662),E=t(94055),u=t(23503),o=t(52069),e=t(38023),c=t(21860),M=t(74970),v=t(65598);function D(l,p){}const I={bottomSheetState:(0,u.X$)("state",[(0,u.SB)("void, hidden",(0,u.oB)({transform:"translateY(100%)"})),(0,u.SB)("visible",(0,u.oB)({transform:"translateY(0%)"})),(0,u.eR)("visible => void, visible => hidden",(0,u.ru)([(0,u.jt)(`${a.AnimationDurations.COMPLEX} ${a.AnimationCurves.ACCELERATION_CURVE}`),(0,u.IO)("@*",(0,u.pV)(),{optional:!0})])),(0,u.eR)("void => visible",(0,u.ru)([(0,u.jt)(`${a.AnimationDurations.EXITING} ${a.AnimationCurves.DECELERATION_CURVE}`),(0,u.IO)("@*",(0,u.pV)(),{optional:!0})]))])};let S=(()=>{class l extends s.CdkDialogContainer{constructor(d,b,O,T,R,U,L,x,K,W){super(d,b,O,T,R,U,L,W),this._changeDetectorRef=K,this._animationState="void",this._animationStateChanged=new n.EventEmitter,this._breakpointSubscription=x.observe([_.Breakpoints.Medium,_.Breakpoints.Large,_.Breakpoints.XLarge]).subscribe(()=>{this._toggleClass("mat-bottom-sheet-container-medium",x.isMatched(_.Breakpoints.Medium)),this._toggleClass("mat-bottom-sheet-container-large",x.isMatched(_.Breakpoints.Large)),this._toggleClass("mat-bottom-sheet-container-xlarge",x.isMatched(_.Breakpoints.XLarge))})}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges())}exit(){this._destroyed||(this._animationState="hidden",this._changeDetectorRef.markForCheck())}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_onAnimationDone(d){"visible"===d.toState&&this._trapFocus(),this._animationStateChanged.emit(d)}_onAnimationStart(d){this._animationStateChanged.emit(d)}_captureInitialFocus(){}_toggleClass(d,b){this._elementRef.nativeElement.classList.toggle(d,b)}static#t=this.\u0275fac=function(b){return new(b||l)(n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(i.FocusTrapFactory),n.\u0275\u0275directiveInject(E.DOCUMENT,8),n.\u0275\u0275directiveInject(s.DialogConfig),n.\u0275\u0275directiveInject(i.InteractivityChecker),n.\u0275\u0275directiveInject(n.NgZone),n.\u0275\u0275directiveInject(f.OverlayRef),n.\u0275\u0275directiveInject(_.BreakpointObserver),n.\u0275\u0275directiveInject(n.ChangeDetectorRef),n.\u0275\u0275directiveInject(i.FocusMonitor))};static#e=this.\u0275cmp=n.\u0275\u0275defineComponent({type:l,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:4,hostBindings:function(b,O){1&b&&n.\u0275\u0275syntheticHostListener("@state.start",function(R){return O._onAnimationStart(R)})("@state.done",function(R){return O._onAnimationDone(R)}),2&b&&(n.\u0275\u0275attribute("role",O._config.role)("aria-modal",O._config.ariaModal)("aria-label",O._config.ariaLabel),n.\u0275\u0275syntheticHostProperty("@state",O._animationState))},features:[n.\u0275\u0275InheritDefinitionFeature],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(b,O){1&b&&n.\u0275\u0275template(0,D,0,0,"ng-template",0)},dependencies:[r.CdkPortalOutlet],styles:[".mat-bottom-sheet-container{padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto}.cdk-high-contrast-active .mat-bottom-sheet-container{outline:1px solid}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:4px;border-top-right-radius:4px}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}"],encapsulation:2,data:{animation:[I.bottomSheetState]}})}return l})(),C=(()=>{class l{static#t=this.\u0275fac=function(b){return new(b||l)};static#e=this.\u0275mod=n.\u0275\u0275defineNgModule({type:l});static#n=this.\u0275inj=n.\u0275\u0275defineInjector({imports:[s.DialogModule,a.MatCommonModule,r.PortalModule,a.MatCommonModule]})}return l})();const B=new n.InjectionToken("MatBottomSheetData");class A{constructor(){this.data=null,this.hasBackdrop=!0,this.disableClose=!1,this.ariaLabel=null,this.ariaModal=!0,this.closeOnNavigation=!0,this.autoFocus="dialog",this.restoreFocus=!0}}class P{get instance(){return this._ref.componentInstance}constructor(p,d,b){this._ref=p,this._afterOpened=new e.x,this.containerInstance=b,this.disableClose=d.disableClose,b._animationStateChanged.pipe((0,M.h)(O=>"done"===O.phaseName&&"visible"===O.toState),(0,v.q)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),b._animationStateChanged.pipe((0,M.h)(O=>"done"===O.phaseName&&"hidden"===O.toState),(0,v.q)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),p.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),(0,c.T)(this.backdropClick(),this.keydownEvents().pipe((0,M.h)(O=>O.keyCode===o.ESCAPE))).subscribe(O=>{!this.disableClose&&("keydown"!==O.type||!(0,o.hasModifierKey)(O))&&(O.preventDefault(),this.dismiss())})}dismiss(p){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe((0,M.h)(d=>"start"===d.phaseName),(0,v.q)(1)).subscribe(d=>{this._closeFallbackTimeout=setTimeout(()=>{this._ref.close(this._result)},d.totalTime+100),this._ref.overlayRef.detachBackdrop()}),this._result=p,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}}const m=new n.InjectionToken("mat-bottom-sheet-default-options");let y=(()=>{class l{get _openedBottomSheetRef(){const d=this._parentBottomSheet;return d?d._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(d){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=d:this._bottomSheetRefAtThisLevel=d}constructor(d,b,O,T){this._overlay=d,this._parentBottomSheet=O,this._defaultOptions=T,this._bottomSheetRefAtThisLevel=null,this._dialog=b.get(s.Dialog)}open(d,b){const O={...this._defaultOptions||new A,...b};let T;return this._dialog.open(d,{...O,disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:"100%",container:S,scrollStrategy:O.scrollStrategy||this._overlay.scrollStrategies.block(),positionStrategy:this._overlay.position().global().centerHorizontally().bottom("0"),templateContext:()=>({bottomSheetRef:T}),providers:(R,U,L)=>(T=new P(R,O,L),[{provide:P,useValue:T},{provide:B,useValue:O.data}])}),T.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===T&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>T.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):T.containerInstance.enter(),this._openedBottomSheetRef=T,T}dismiss(d){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(d)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static#t=this.\u0275fac=function(b){return new(b||l)(n.\u0275\u0275inject(f.Overlay),n.\u0275\u0275inject(n.Injector),n.\u0275\u0275inject(l,12),n.\u0275\u0275inject(m,8))};static#e=this.\u0275prov=n.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:C})}return l})()}}]);
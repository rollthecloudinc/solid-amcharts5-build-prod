(self.webpackChunkplugin_amcharts5=self.webpackChunkplugin_amcharts5||[]).push([[1346,7241,5598],{87241:(P,m,o)=>{o.d(m,{y:()=>M});var d=o(94021),u=o(14813),h=o(43122),c=o(17824),e=o(42046),y=o(35975),v=o(1519);let M=(()=>{class g{constructor(f){f&&(this._subscribe=f)}lift(f){const T=new g;return T.source=this,T.operator=f,T}subscribe(f,T,B){const I=function _(g){return g&&g instanceof d.Lv||function b(g){return g&&(0,y.m)(g.next)&&(0,y.m)(g.error)&&(0,y.m)(g.complete)}(g)&&(0,u.Nn)(g)}(f)?f:new d.Hp(f,T,B);return(0,v.x)(()=>{const{operator:D,source:w}=this;I.add(D?D.call(I,w):w?this._subscribe(I):this._trySubscribe(I))}),I}_trySubscribe(f){try{return this._subscribe(f)}catch(T){f.error(T)}}forEach(f,T){return new(T=s(T))((B,I)=>{const D=new d.Hp({next:w=>{try{f(w)}catch(F){I(F),D.unsubscribe()}},error:I,complete:B});this.subscribe(D)})}_subscribe(f){var T;return null===(T=this.source)||void 0===T?void 0:T.subscribe(f)}[h.L](){return this}pipe(...f){return(0,c.U)(f)(this)}toPromise(f){return new(f=s(f))((T,B)=>{let I;this.subscribe(D=>I=D,D=>B(D),()=>T(I))})}}return g.create=C=>new g(C),g})();function s(g){var C;return null!==(C=g??e.config.Promise)&&void 0!==C?C:Promise}},94021:(P,m,o)=>{o.d(m,{Hp:()=>B,Lv:()=>g});var d=o(35975),u=o(14813),h=o(42046),c=o(34922),e=o(408);const y=s("C",void 0,void 0);function s(L,l,E){return{kind:L,value:l,error:E}}var b=o(84146),_=o(1519);class g extends u.w0{constructor(l){super(),this.isStopped=!1,l?(this.destination=l,(0,u.Nn)(l)&&l.add(this)):this.destination=F}static create(l,E,A){return new B(l,E,A)}next(l){this.isStopped?w(function M(L){return s("N",L,void 0)}(l),this):this._next(l)}error(l){this.isStopped?w(function v(L){return s("E",void 0,L)}(l),this):(this.isStopped=!0,this._error(l))}complete(){this.isStopped?w(y,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(l){this.destination.next(l)}_error(l){try{this.destination.error(l)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const C=Function.prototype.bind;function f(L,l){return C.call(L,l)}class T{constructor(l){this.partialObserver=l}next(l){const{partialObserver:E}=this;if(E.next)try{E.next(l)}catch(A){I(A)}}error(l){const{partialObserver:E}=this;if(E.error)try{E.error(l)}catch(A){I(A)}else I(l)}complete(){const{partialObserver:l}=this;if(l.complete)try{l.complete()}catch(E){I(E)}}}class B extends g{constructor(l,E,A){let S;if(super(),(0,d.m)(l)||!l)S={next:l??void 0,error:E??void 0,complete:A??void 0};else{let R;this&&h.config.useDeprecatedNextContext?(R=Object.create(l),R.unsubscribe=()=>this.unsubscribe(),S={next:l.next&&f(l.next,R),error:l.error&&f(l.error,R),complete:l.complete&&f(l.complete,R)}):S=l}this.destination=new T(S)}}function I(L){h.config.useDeprecatedSynchronousErrorHandling?(0,_.O)(L):(0,c.h)(L)}function w(L,l){const{onStoppedNotification:E}=h.config;E&&b.z.setTimeout(()=>E(L,l))}const F={closed:!0,next:e.Z,error:function D(L){throw L},complete:e.Z}},14813:(P,m,o)=>{o.d(m,{Lc:()=>y,w0:()=>e,Nn:()=>v});var d=o(35975);const h=(0,o(95776).d)(s=>function(_){s(this),this.message=_?`${_.length} errors occurred during unsubscription:\n${_.map((g,C)=>`${C+1}) ${g.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=_});var c=o(78308);class e{constructor(b){this.initialTeardown=b,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let b;if(!this.closed){this.closed=!0;const{_parentage:_}=this;if(_)if(this._parentage=null,Array.isArray(_))for(const f of _)f.remove(this);else _.remove(this);const{initialTeardown:g}=this;if((0,d.m)(g))try{g()}catch(f){b=f instanceof h?f.errors:[f]}const{_finalizers:C}=this;if(C){this._finalizers=null;for(const f of C)try{M(f)}catch(T){b=b??[],T instanceof h?b=[...b,...T.errors]:b.push(T)}}if(b)throw new h(b)}}add(b){var _;if(b&&b!==this)if(this.closed)M(b);else{if(b instanceof e){if(b.closed||b._hasParent(this))return;b._addParent(this)}(this._finalizers=null!==(_=this._finalizers)&&void 0!==_?_:[]).push(b)}}_hasParent(b){const{_parentage:_}=this;return _===b||Array.isArray(_)&&_.includes(b)}_addParent(b){const{_parentage:_}=this;this._parentage=Array.isArray(_)?(_.push(b),_):_?[_,b]:b}_removeParent(b){const{_parentage:_}=this;_===b?this._parentage=null:Array.isArray(_)&&(0,c.P)(_,b)}remove(b){const{_finalizers:_}=this;_&&(0,c.P)(_,b),b instanceof e&&b._removeParent(this)}}e.EMPTY=(()=>{const s=new e;return s.closed=!0,s})();const y=e.EMPTY;function v(s){return s instanceof e||s&&"closed"in s&&(0,d.m)(s.remove)&&(0,d.m)(s.add)&&(0,d.m)(s.unsubscribe)}function M(s){(0,d.m)(s)?s():s.unsubscribe()}},42046:(P,m,o)=>{o.d(m,{config:()=>d});const d={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},9018:(P,m,o)=>{o.d(m,{E:()=>u});const u=new(o(87241).y)(e=>e.complete())},28499:(P,m,o)=>{o.d(m,{x:()=>u});var d=o(94021);function u(c,e,y,v,M){return new h(c,e,y,v,M)}class h extends d.Lv{constructor(e,y,v,M,s,b){super(e),this.onFinalize=s,this.shouldUnsubscribe=b,this._next=y?function(_){try{y(_)}catch(g){e.error(g)}}:super._next,this._error=M?function(_){try{M(_)}catch(g){e.error(g)}finally{this.unsubscribe()}}:super._error,this._complete=v?function(){try{v()}catch(_){e.error(_)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:y}=this;super.unsubscribe(),!y&&(null===(e=this.onFinalize)||void 0===e||e.call(this))}}}},65598:(P,m,o)=>{o.d(m,{q:()=>c});var d=o(9018),u=o(32085),h=o(28499);function c(e){return e<=0?()=>d.E:(0,u.e)((y,v)=>{let M=0;y.subscribe((0,h.x)(v,s=>{++M<=e&&(v.next(s),e<=M&&v.complete())}))})}},84146:(P,m,o)=>{o.d(m,{z:()=>d});const d={setTimeout(u,h,...c){const{delegate:e}=d;return e?.setTimeout?e.setTimeout(u,h,...c):setTimeout(u,h,...c)},clearTimeout(u){const{delegate:h}=d;return(h?.clearTimeout||clearTimeout)(u)},delegate:void 0}},43122:(P,m,o)=>{o.d(m,{L:()=>d});const d="function"==typeof Symbol&&Symbol.observable||"@@observable"},78308:(P,m,o)=>{function d(u,h){if(u){const c=u.indexOf(h);0<=c&&u.splice(c,1)}}o.d(m,{P:()=>d})},95776:(P,m,o)=>{function d(u){const c=u(e=>{Error.call(e),e.stack=(new Error).stack});return c.prototype=Object.create(Error.prototype),c.prototype.constructor=c,c}o.d(m,{d:()=>d})},1519:(P,m,o)=>{o.d(m,{O:()=>c,x:()=>h});var d=o(42046);let u=null;function h(e){if(d.config.useDeprecatedSynchronousErrorHandling){const y=!u;if(y&&(u={errorThrown:!1,error:null}),e(),y){const{errorThrown:v,error:M}=u;if(u=null,v)throw M}}else e()}function c(e){d.config.useDeprecatedSynchronousErrorHandling&&u&&(u.errorThrown=!0,u.error=e)}},68330:(P,m,o)=>{function d(u){return u}o.d(m,{y:()=>d})},35975:(P,m,o)=>{function d(u){return"function"==typeof u}o.d(m,{m:()=>d})},32085:(P,m,o)=>{o.d(m,{A:()=>u,e:()=>h});var d=o(35975);function u(c){return(0,d.m)(c?.lift)}function h(c){return e=>{if(u(e))return e.lift(function(y){try{return c(y,this)}catch(v){this.error(v)}});throw new TypeError("Unable to lift unknown Observable type")}}},408:(P,m,o)=>{function d(){}o.d(m,{Z:()=>d})},17824:(P,m,o)=>{o.d(m,{U:()=>h,z:()=>u});var d=o(68330);function u(...c){return h(c)}function h(c){return 0===c.length?d.y:1===c.length?c[0]:function(y){return c.reduce((v,M)=>M(v),y)}}},34922:(P,m,o)=>{o.d(m,{h:()=>h});var d=o(42046),u=o(84146);function h(c){u.z.setTimeout(()=>{const{onUnhandledError:e}=d.config;if(!e)throw c;e(c)})}},61346:(P,m,o)=>{o.r(m),o.d(m,{MAT_LEGACY_TAB:()=>s.MAT_TAB,MAT_LEGACY_TABS_CONFIG:()=>s.MAT_TABS_CONFIG,MAT_LEGACY_TAB_CONTENT:()=>s.MAT_TAB_CONTENT,MAT_LEGACY_TAB_GROUP:()=>s.MAT_TAB_GROUP,MatLegacyInkBar:()=>N,MatLegacyPaginatedTabHeader:()=>s.MatPaginatedTabHeader,MatLegacyTab:()=>U,MatLegacyTabBody:()=>j,MatLegacyTabBodyPortal:()=>H,MatLegacyTabChangeEvent:()=>s.MatTabChangeEvent,MatLegacyTabContent:()=>ee,MatLegacyTabGroup:()=>$,MatLegacyTabHeader:()=>W,MatLegacyTabLabel:()=>q,MatLegacyTabLabelWrapper:()=>Q,MatLegacyTabLink:()=>z,MatLegacyTabNav:()=>K,MatLegacyTabNavPanel:()=>X,MatLegacyTabsModule:()=>te,_MAT_LEGACY_INK_BAR_POSITIONER:()=>s._MAT_INK_BAR_POSITIONER,_MAT_LEGACY_INK_BAR_POSITIONER_FACTORY:()=>s._MAT_INK_BAR_POSITIONER_FACTORY,_MatLegacyTabBase:()=>s._MatTabBase,_MatLegacyTabBodyBase:()=>s._MatTabBodyBase,_MatLegacyTabGroupBase:()=>s._MatTabGroupBase,_MatLegacyTabHeaderBase:()=>s._MatTabHeaderBase,_MatLegacyTabLinkBase:()=>s._MatTabLinkBase,_MatLegacyTabNavBase:()=>s._MatTabNavBase,matLegacyTabsAnimations:()=>s.matTabsAnimations});var d=o(908),u=o(75321),h=o(18142),c=o(94055),e=o(56718),y=o(6606),v=o(33401),M=o(65598),s=o(31099),b=o(43068),_=o(93168),g=o(23675);function C(n,x){1&n&&e.\u0275\u0275projection(0)}const f=["*"];function T(n,x){}const B=function(n){return{animationDuration:n}},I=function(n,x){return{value:n,params:x}},D=["tabListContainer"],w=["tabList"],F=["tabListInner"],L=["nextPaginator"],l=["previousPaginator"],E=["tabBodyWrapper"],A=["tabHeader"];function S(n,x){}function R(n,x){if(1&n&&e.\u0275\u0275template(0,S,0,0,"ng-template",10),2&n){const r=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275property("cdkPortalOutlet",r.templateLabel)}}function G(n,x){if(1&n&&e.\u0275\u0275text(0),2&n){const r=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275textInterpolate(r.textLabel)}}function V(n,x){if(1&n){const r=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",6),e.\u0275\u0275listener("click",function(){const t=e.\u0275\u0275restoreView(r),i=t.$implicit,p=t.index,O=e.\u0275\u0275nextContext(),k=e.\u0275\u0275reference(1);return e.\u0275\u0275resetView(O._handleClick(i,k,p))})("cdkFocusChange",function(t){const p=e.\u0275\u0275restoreView(r).index,O=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(O._tabFocusChanged(t,p))}),e.\u0275\u0275elementStart(1,"div",7),e.\u0275\u0275template(2,R,1,1,"ng-template",8),e.\u0275\u0275template(3,G,1,1,"ng-template",null,9,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd()()}if(2&n){const r=x.$implicit,a=x.index,t=e.\u0275\u0275reference(4),i=e.\u0275\u0275nextContext();e.\u0275\u0275classProp("mat-tab-label-active",i.selectedIndex===a),e.\u0275\u0275property("id",i._getTabLabelId(a))("ngClass",r.labelClass)("disabled",r.disabled)("matRippleDisabled",r.disabled||i.disableRipple),e.\u0275\u0275attribute("tabIndex",i._getTabIndex(a))("aria-posinset",a+1)("aria-setsize",i._tabs.length)("aria-controls",i._getTabContentId(a))("aria-selected",i.selectedIndex===a)("aria-label",r.ariaLabel||null)("aria-labelledby",!r.ariaLabel&&r.ariaLabelledby?r.ariaLabelledby:null),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",r.templateLabel)("ngIfElse",t)}}function Y(n,x){if(1&n){const r=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"mat-tab-body",11),e.\u0275\u0275listener("_onCentered",function(){e.\u0275\u0275restoreView(r);const t=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(t._removeTabBodyWrapperHeight())})("_onCentering",function(t){e.\u0275\u0275restoreView(r);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i._setTabBodyWrapperHeight(t))}),e.\u0275\u0275elementEnd()}if(2&n){const r=x.$implicit,a=x.index,t=e.\u0275\u0275nextContext();e.\u0275\u0275classProp("mat-tab-body-active",t.selectedIndex===a),e.\u0275\u0275property("id",t._getTabContentId(a))("ngClass",r.bodyClass)("content",r.content)("position",r.position)("origin",r.origin)("animationDuration",t.animationDuration)("preserveContent",t.preserveContent),e.\u0275\u0275attribute("tabindex",null!=t.contentTabIndex&&t.selectedIndex===a?t.contentTabIndex:null)("aria-labelledby",t._getTabLabelId(a))}}const Z=["mat-tab-nav-bar",""];let N=(()=>{class n{constructor(r,a,t,i){this._elementRef=r,this._ngZone=a,this._inkBarPositioner=t,this._animationMode=i}alignToElement(r){this.show(),this._ngZone.run(()=>{this._ngZone.onStable.pipe((0,M.q)(1)).subscribe(()=>{const a=this._inkBarPositioner(r),t=this._elementRef.nativeElement;t.style.left=a.left,t.style.width=a.width})})}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}static#e=this.\u0275fac=function(a){return new(a||n)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.NgZone),e.\u0275\u0275directiveInject(s._MAT_INK_BAR_POSITIONER),e.\u0275\u0275directiveInject(v.ANIMATION_MODULE_TYPE,8))};static#t=this.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(a,t){2&a&&e.\u0275\u0275classProp("_mat-animation-noopable","NoopAnimations"===t._animationMode)}})}return n})(),U=(()=>{class n extends s._MatTabBase{constructor(){super(...arguments),this._explicitContent=void 0}get templateLabel(){return this._templateLabel}set templateLabel(r){this._setTemplateLabelInput(r)}static#e=this.\u0275fac=function(){let r;return function(t){return(r||(r=e.\u0275\u0275getInheritedFactory(n)))(t||n)}}();static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["mat-tab"]],contentQueries:function(a,t,i){if(1&a&&(e.\u0275\u0275contentQuery(i,s.MAT_TAB_LABEL,5),e.\u0275\u0275contentQuery(i,s.MAT_TAB_CONTENT,7,e.TemplateRef)),2&a){let p;e.\u0275\u0275queryRefresh(p=e.\u0275\u0275loadQuery())&&(t.templateLabel=p.first),e.\u0275\u0275queryRefresh(p=e.\u0275\u0275loadQuery())&&(t._explicitContent=p.first)}},inputs:{disabled:"disabled"},exportAs:["matTab"],features:[e.\u0275\u0275ProvidersFeature([{provide:s.MAT_TAB,useExisting:n}]),e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:f,decls:1,vars:0,template:function(a,t){1&a&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275template(0,C,1,0,"ng-template"))},encapsulation:2})}return n})(),H=(()=>{class n extends s.MatTabBodyPortal{constructor(r,a,t,i){super(r,a,t,i)}static#e=this.\u0275fac=function(a){return new(a||n)(e.\u0275\u0275directiveInject(e.ComponentFactoryResolver),e.\u0275\u0275directiveInject(e.ViewContainerRef),e.\u0275\u0275directiveInject((0,e.forwardRef)(()=>j)),e.\u0275\u0275directiveInject(c.DOCUMENT))};static#t=this.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["","matTabBodyHost",""]],features:[e.\u0275\u0275InheritDefinitionFeature]})}return n})(),j=(()=>{class n extends s._MatTabBodyBase{constructor(r,a,t){super(r,a,t)}static#e=this.\u0275fac=function(a){return new(a||n)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(b.Directionality,8),e.\u0275\u0275directiveInject(e.ChangeDetectorRef))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["mat-tab-body"]],viewQuery:function(a,t){if(1&a&&e.\u0275\u0275viewQuery(h.CdkPortalOutlet,5),2&a){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._portalHost=i.first)}},hostAttrs:[1,"mat-tab-body"],features:[e.\u0275\u0275InheritDefinitionFeature],decls:3,vars:6,consts:[["cdkScrollable","",1,"mat-tab-body-content"],["content",""],["matTabBodyHost",""]],template:function(a,t){1&a&&(e.\u0275\u0275elementStart(0,"div",0,1),e.\u0275\u0275listener("@translateTab.start",function(p){return t._onTranslateTabStarted(p)})("@translateTab.done",function(p){return t._translateTabComplete.next(p)}),e.\u0275\u0275template(2,T,0,0,"ng-template",2),e.\u0275\u0275elementEnd()),2&a&&e.\u0275\u0275property("@translateTab",e.\u0275\u0275pureFunction2(3,I,t._position,e.\u0275\u0275pureFunction1(1,B,t.animationDuration)))},dependencies:[H],styles:['.mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}.mat-tab-body-content[style*="visibility: hidden"]{display:none}'],encapsulation:2,data:{animation:[s.matTabsAnimations.translateTab]}})}return n})(),Q=(()=>{class n extends s._MatTabLabelWrapperBase{static#e=this.\u0275fac=function(){let r;return function(t){return(r||(r=e.\u0275\u0275getInheritedFactory(n)))(t||n)}}();static#t=this.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(a,t){2&a&&(e.\u0275\u0275attribute("aria-disabled",!!t.disabled),e.\u0275\u0275classProp("mat-tab-disabled",t.disabled))},inputs:{disabled:"disabled"},features:[e.\u0275\u0275InheritDefinitionFeature]})}return n})(),W=(()=>{class n extends s._MatTabHeaderBase{constructor(r,a,t,i,p,O,k){super(r,a,t,i,p,O,k)}static#e=this.\u0275fac=function(a){return new(a||n)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(_.ViewportRuler),e.\u0275\u0275directiveInject(b.Directionality,8),e.\u0275\u0275directiveInject(e.NgZone),e.\u0275\u0275directiveInject(g.Platform),e.\u0275\u0275directiveInject(v.ANIMATION_MODULE_TYPE,8))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["mat-tab-header"]],contentQueries:function(a,t,i){if(1&a&&e.\u0275\u0275contentQuery(i,Q,4),2&a){let p;e.\u0275\u0275queryRefresh(p=e.\u0275\u0275loadQuery())&&(t._items=p)}},viewQuery:function(a,t){if(1&a&&(e.\u0275\u0275viewQuery(N,7),e.\u0275\u0275viewQuery(D,7),e.\u0275\u0275viewQuery(w,7),e.\u0275\u0275viewQuery(F,7),e.\u0275\u0275viewQuery(L,5),e.\u0275\u0275viewQuery(l,5)),2&a){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._inkBar=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._tabListContainer=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._tabList=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._tabListInner=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._nextPaginator=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._previousPaginator=i.first)}},hostAttrs:[1,"mat-tab-header"],hostVars:4,hostBindings:function(a,t){2&a&&e.\u0275\u0275classProp("mat-tab-header-pagination-controls-enabled",t._showPaginationControls)("mat-tab-header-rtl","rtl"==t._getLayoutDirection())},inputs:{selectedIndex:"selectedIndex"},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:f,decls:14,vars:10,consts:[["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","disabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-label-container",3,"keydown"],["tabListContainer",""],["role","tablist",1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-labels"],["tabListInner",""],["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","disabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(a,t){1&a&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"button",0,1),e.\u0275\u0275listener("click",function(){return t._handlePaginatorClick("before")})("mousedown",function(p){return t._handlePaginatorPress("before",p)})("touchend",function(){return t._stopInterval()}),e.\u0275\u0275element(2,"div",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",3,4),e.\u0275\u0275listener("keydown",function(p){return t._handleKeydown(p)}),e.\u0275\u0275elementStart(5,"div",5,6),e.\u0275\u0275listener("cdkObserveContent",function(){return t._onContentChanges()}),e.\u0275\u0275elementStart(7,"div",7,8),e.\u0275\u0275projection(9),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(10,"mat-ink-bar"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(11,"button",9,10),e.\u0275\u0275listener("mousedown",function(p){return t._handlePaginatorPress("after",p)})("click",function(){return t._handlePaginatorClick("after")})("touchend",function(){return t._stopInterval()}),e.\u0275\u0275element(13,"div",2),e.\u0275\u0275elementEnd()),2&a&&(e.\u0275\u0275classProp("mat-tab-header-pagination-disabled",t._disableScrollBefore),e.\u0275\u0275property("matRippleDisabled",t._disableScrollBefore||t.disableRipple)("disabled",t._disableScrollBefore||null),e.\u0275\u0275advance(5),e.\u0275\u0275classProp("_mat-animation-noopable","NoopAnimations"===t._animationMode),e.\u0275\u0275advance(6),e.\u0275\u0275classProp("mat-tab-header-pagination-disabled",t._disableScrollAfter),e.\u0275\u0275property("matRippleDisabled",t._disableScrollAfter||t.disableRipple)("disabled",t._disableScrollAfter||null))},dependencies:[y.MatRipple,u.CdkObserveContent,N],styles:[".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-tab-header-pagination::-moz-focus-inner{border:0}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-list._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}.mat-tab-label::before{margin:5px}@media(max-width: 599px){.mat-tab-label{min-width:72px}}"],encapsulation:2})}return n})(),$=(()=>{class n extends s._MatTabGroupBase{constructor(r,a,t,i){super(r,a,t,i)}static#e=this.\u0275fac=function(a){return new(a||n)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(s.MAT_TABS_CONFIG,8),e.\u0275\u0275directiveInject(v.ANIMATION_MODULE_TYPE,8))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["mat-tab-group"]],contentQueries:function(a,t,i){if(1&a&&e.\u0275\u0275contentQuery(i,U,5),2&a){let p;e.\u0275\u0275queryRefresh(p=e.\u0275\u0275loadQuery())&&(t._allTabs=p)}},viewQuery:function(a,t){if(1&a&&(e.\u0275\u0275viewQuery(E,5),e.\u0275\u0275viewQuery(A,5)),2&a){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._tabBodyWrapper=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._tabHeader=i.first)}},hostAttrs:["ngSkipHydration","",1,"mat-tab-group"],hostVars:4,hostBindings:function(a,t){2&a&&e.\u0275\u0275classProp("mat-tab-group-dynamic-height",t.dynamicHeight)("mat-tab-group-inverted-header","below"===t.headerPosition)},inputs:{color:"color",disableRipple:"disableRipple"},exportAs:["matTabGroup"],features:[e.\u0275\u0275ProvidersFeature([{provide:s.MAT_TAB_GROUP,useExisting:n}]),e.\u0275\u0275InheritDefinitionFeature],decls:6,vars:7,consts:[[3,"selectedIndex","disableRipple","disablePagination","indexFocused","selectFocusedIndex"],["tabHeader",""],["class","mat-tab-label mat-focus-indicator","role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",3,"id","mat-tab-label-active","ngClass","disabled","matRippleDisabled","click","cdkFocusChange",4,"ngFor","ngForOf"],[1,"mat-tab-body-wrapper"],["tabBodyWrapper",""],["role","tabpanel",3,"id","mat-tab-body-active","ngClass","content","position","origin","animationDuration","preserveContent","_onCentered","_onCentering",4,"ngFor","ngForOf"],["role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",1,"mat-tab-label","mat-focus-indicator",3,"id","ngClass","disabled","matRippleDisabled","click","cdkFocusChange"],[1,"mat-tab-label-content"],[3,"ngIf","ngIfElse"],["tabTextLabel",""],[3,"cdkPortalOutlet"],["role","tabpanel",3,"id","ngClass","content","position","origin","animationDuration","preserveContent","_onCentered","_onCentering"]],template:function(a,t){1&a&&(e.\u0275\u0275elementStart(0,"mat-tab-header",0,1),e.\u0275\u0275listener("indexFocused",function(p){return t._focusChanged(p)})("selectFocusedIndex",function(p){return t.selectedIndex=p}),e.\u0275\u0275template(2,V,5,15,"div",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",3,4),e.\u0275\u0275template(5,Y,1,11,"mat-tab-body",5),e.\u0275\u0275elementEnd()),2&a&&(e.\u0275\u0275property("selectedIndex",t.selectedIndex||0)("disableRipple",t.disableRipple)("disablePagination",t.disablePagination),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",t._tabs),e.\u0275\u0275advance(1),e.\u0275\u0275classProp("_mat-animation-noopable","NoopAnimations"===t._animationMode),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",t._tabs))},dependencies:[c.NgClass,c.NgForOf,c.NgIf,h.CdkPortalOutlet,y.MatRipple,d.CdkMonitorFocus,Q,j,W],styles:[".mat-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}"],encapsulation:2})}return n})(),J=0,K=(()=>{class n extends s._MatTabNavBase{constructor(r,a,t,i,p,O,k){super(r,a,t,i,p,O,k)}static#e=this.\u0275fac=function(a){return new(a||n)(e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(b.Directionality,8),e.\u0275\u0275directiveInject(e.NgZone),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(_.ViewportRuler),e.\u0275\u0275directiveInject(g.Platform),e.\u0275\u0275directiveInject(v.ANIMATION_MODULE_TYPE,8))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(a,t,i){if(1&a&&e.\u0275\u0275contentQuery(i,z,5),2&a){let p;e.\u0275\u0275queryRefresh(p=e.\u0275\u0275loadQuery())&&(t._items=p)}},viewQuery:function(a,t){if(1&a&&(e.\u0275\u0275viewQuery(N,7),e.\u0275\u0275viewQuery(D,7),e.\u0275\u0275viewQuery(w,7),e.\u0275\u0275viewQuery(F,7),e.\u0275\u0275viewQuery(L,5),e.\u0275\u0275viewQuery(l,5)),2&a){let i;e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._inkBar=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._tabListContainer=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._tabList=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._tabListInner=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._nextPaginator=i.first),e.\u0275\u0275queryRefresh(i=e.\u0275\u0275loadQuery())&&(t._previousPaginator=i.first)}},hostAttrs:[1,"mat-tab-nav-bar","mat-tab-header"],hostVars:11,hostBindings:function(a,t){2&a&&(e.\u0275\u0275attribute("role",t._getRole()),e.\u0275\u0275classProp("mat-tab-header-pagination-controls-enabled",t._showPaginationControls)("mat-tab-header-rtl","rtl"==t._getLayoutDirection())("mat-primary","warn"!==t.color&&"accent"!==t.color)("mat-accent","accent"===t.color)("mat-warn","warn"===t.color))},inputs:{color:"color"},exportAs:["matTabNavBar","matTabNav"],features:[e.\u0275\u0275InheritDefinitionFeature],attrs:Z,ngContentSelectors:f,decls:14,vars:10,consts:[["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","disabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-link-container",3,"keydown"],["tabListContainer",""],[1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-links"],["tabListInner",""],["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","disabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(a,t){1&a&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275elementStart(0,"button",0,1),e.\u0275\u0275listener("click",function(){return t._handlePaginatorClick("before")})("mousedown",function(p){return t._handlePaginatorPress("before",p)})("touchend",function(){return t._stopInterval()}),e.\u0275\u0275element(2,"div",2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",3,4),e.\u0275\u0275listener("keydown",function(p){return t._handleKeydown(p)}),e.\u0275\u0275elementStart(5,"div",5,6),e.\u0275\u0275listener("cdkObserveContent",function(){return t._onContentChanges()}),e.\u0275\u0275elementStart(7,"div",7,8),e.\u0275\u0275projection(9),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(10,"mat-ink-bar"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(11,"button",9,10),e.\u0275\u0275listener("mousedown",function(p){return t._handlePaginatorPress("after",p)})("click",function(){return t._handlePaginatorClick("after")})("touchend",function(){return t._stopInterval()}),e.\u0275\u0275element(13,"div",2),e.\u0275\u0275elementEnd()),2&a&&(e.\u0275\u0275classProp("mat-tab-header-pagination-disabled",t._disableScrollBefore),e.\u0275\u0275property("matRippleDisabled",t._disableScrollBefore||t.disableRipple)("disabled",t._disableScrollBefore||null),e.\u0275\u0275advance(5),e.\u0275\u0275classProp("_mat-animation-noopable","NoopAnimations"===t._animationMode),e.\u0275\u0275advance(6),e.\u0275\u0275classProp("mat-tab-header-pagination-disabled",t._disableScrollAfter),e.\u0275\u0275property("matRippleDisabled",t._disableScrollAfter||t.disableRipple)("disabled",t._disableScrollAfter||null))},dependencies:[y.MatRipple,u.CdkObserveContent,N],styles:[".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-tab-header-pagination::-moz-focus-inner{border:0}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar._mat-animation-noopable{transition:none !important;animation:none !important}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}.mat-tab-link::before{margin:5px}@media(max-width: 599px){.mat-tab-link{min-width:72px}}"],encapsulation:2})}return n})(),z=(()=>{class n extends s._MatTabLinkBase{constructor(r,a,t,i,p,O,k,ae){super(r,a,p,O,k,ae),this._tabLinkRipple=new y.RippleRenderer(this,t,a,i),this._tabLinkRipple.setupTriggerEvents(a.nativeElement)}ngOnDestroy(){super.ngOnDestroy(),this._tabLinkRipple._removeTriggerEvents()}static#e=this.\u0275fac=function(a){return new(a||n)(e.\u0275\u0275directiveInject(K),e.\u0275\u0275directiveInject(e.ElementRef),e.\u0275\u0275directiveInject(e.NgZone),e.\u0275\u0275directiveInject(g.Platform),e.\u0275\u0275directiveInject(y.MAT_RIPPLE_GLOBAL_OPTIONS,8),e.\u0275\u0275injectAttribute("tabindex"),e.\u0275\u0275directiveInject(d.FocusMonitor),e.\u0275\u0275directiveInject(v.ANIMATION_MODULE_TYPE,8))};static#t=this.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mat-tab-link","mat-focus-indicator"],hostVars:11,hostBindings:function(a,t){1&a&&e.\u0275\u0275listener("focus",function(){return t._handleFocus()})("keydown",function(p){return t._handleKeydown(p)}),2&a&&(e.\u0275\u0275attribute("aria-controls",t._getAriaControls())("aria-current",t._getAriaCurrent())("aria-disabled",t.disabled)("aria-selected",t._getAriaSelected())("id",t.id)("tabIndex",t._getTabIndex())("role",t._getRole()),e.\u0275\u0275classProp("mat-tab-disabled",t.disabled)("mat-tab-label-active",t.active))},inputs:{disabled:"disabled",disableRipple:"disableRipple",tabIndex:"tabIndex"},exportAs:["matTabLink"],features:[e.\u0275\u0275InheritDefinitionFeature]})}return n})(),X=(()=>{class n{constructor(){this.id="mat-tab-nav-panel-"+J++}static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["mat-tab-nav-panel"]],hostAttrs:["role","tabpanel",1,"mat-tab-nav-panel"],hostVars:2,hostBindings:function(a,t){2&a&&e.\u0275\u0275attribute("aria-labelledby",t._activeTabId)("id",t.id)},inputs:{id:"id"},exportAs:["matTabNavPanel"],ngContentSelectors:f,decls:1,vars:0,template:function(a,t){1&a&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275projection(0))},encapsulation:2,changeDetection:0})}return n})(),q=(()=>{class n extends s.MatTabLabel{static#e=this.\u0275fac=function(){let r;return function(t){return(r||(r=e.\u0275\u0275getInheritedFactory(n)))(t||n)}}();static#t=this.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[e.\u0275\u0275ProvidersFeature([{provide:s.MAT_TAB_LABEL,useExisting:n}]),e.\u0275\u0275InheritDefinitionFeature]})}return n})(),ee=(()=>{class n extends s.MatTabContent{static#e=this.\u0275fac=function(){let r;return function(t){return(r||(r=e.\u0275\u0275getInheritedFactory(n)))(t||n)}}();static#t=this.\u0275dir=e.\u0275\u0275defineDirective({type:n,selectors:[["","matTabContent",""]],features:[e.\u0275\u0275ProvidersFeature([{provide:s.MAT_TAB_CONTENT,useExisting:n}]),e.\u0275\u0275InheritDefinitionFeature]})}return n})(),te=(()=>{class n{static#e=this.\u0275fac=function(a){return new(a||n)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:n});static#a=this.\u0275inj=e.\u0275\u0275defineInjector({imports:[c.CommonModule,y.MatCommonModule,h.PortalModule,y.MatRippleModule,u.ObserversModule,d.A11yModule,y.MatCommonModule]})}return n})()}}]);
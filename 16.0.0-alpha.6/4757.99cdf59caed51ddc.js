(self.webpackChunkplugin_amcharts5=self.webpackChunkplugin_amcharts5||[]).push([[4757],{5557:(F,O,o)=>{o.d(O,{t:()=>g});var R=o(38023),i=o(32069);class g extends R.x{constructor(a=1/0,c=1/0,_=i.l){super(),this._bufferSize=a,this._windowTime=c,this._timestampProvider=_,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=c===1/0,this._bufferSize=Math.max(1,a),this._windowTime=Math.max(1,c)}next(a){const{isStopped:c,_buffer:_,_infiniteTimeWindow:S,_timestampProvider:p,_windowTime:l}=this;c||(_.push(a),!S&&_.push(p.now()+l)),this._trimBuffer(),super.next(a)}_subscribe(a){this._throwIfClosed(),this._trimBuffer();const c=this._innerSubscribe(a),{_infiniteTimeWindow:_,_buffer:S}=this,p=S.slice();for(let l=0;l<p.length&&!a.closed;l+=_?1:2)a.next(p[l]);return this._checkFinalizedStatuses(a),c}_trimBuffer(){const{_bufferSize:a,_timestampProvider:c,_buffer:_,_infiniteTimeWindow:S}=this,p=(S?1:2)*a;if(a<1/0&&p<_.length&&_.splice(0,_.length-p),!S){const l=c.now();let d=0;for(let h=1;h<_.length&&_[h]<=l;h+=2)d=h;d&&_.splice(0,d+1)}}}},14581:(F,O,o)=>{o.d(O,{R:()=>l});var R=o(75955),i=o(87241),g=o(54882),y=o(56602),a=o(35975),c=o(52692);const _=["addListener","removeListener"],S=["addEventListener","removeEventListener"],p=["on","off"];function l(m,b,E,T){if((0,a.m)(E)&&(T=E,E=void 0),T)return l(m,b,E).pipe((0,c.Z)(T));const[P,A]=function C(m){return(0,a.m)(m.addEventListener)&&(0,a.m)(m.removeEventListener)}(m)?S.map(L=>M=>m[L](b,M,E)):function h(m){return(0,a.m)(m.addListener)&&(0,a.m)(m.removeListener)}(m)?_.map(d(m,b)):function f(m){return(0,a.m)(m.on)&&(0,a.m)(m.off)}(m)?p.map(d(m,b)):[];if(!P&&(0,y.z)(m))return(0,g.z)(L=>l(L,b,E))((0,R.Xf)(m));if(!P)throw new TypeError("Invalid event target");return new i.y(L=>{const M=(...I)=>L.next(1<I.length?I:I[0]);return P(M),()=>A(M)})}function d(m,b){return E=>T=>m[E](b,T)}},19232:(F,O,o)=>{o.d(O,{e:()=>_});var R=o(46523),i=o(32085),g=o(75955),y=o(28499),c=o(1995);function _(S,p=R.z){return function a(S){return(0,i.e)((p,l)=>{let d=!1,h=null,f=null,C=!1;const m=()=>{if(f?.unsubscribe(),f=null,d){d=!1;const E=h;h=null,l.next(E)}C&&l.complete()},b=()=>{f=null,C&&l.complete()};p.subscribe((0,y.x)(l,E=>{d=!0,h=E,f||(0,g.Xf)(S(E)).subscribe(f=(0,y.x)(l,m,b))},()=>{C=!0,(!d||!f||f.closed)&&l.complete()}))})}(()=>(0,c.H)(S,p))}},42147:(F,O,o)=>{o.d(O,{x:()=>y});var R=o(68330),i=o(32085),g=o(28499);function y(c,_=R.y){return c=c??a,(0,i.e)((S,p)=>{let l,d=!0;S.subscribe((0,g.x)(p,h=>{const f=_(h);(d||!c(l,f))&&(d=!1,l=f,p.next(h))}))})}function a(c,_){return c===_}},26903:(F,O,o)=>{o.d(O,{B:()=>a});var R=o(75955),i=o(38023),g=o(94021),y=o(32085);function a(_={}){const{connector:S=(()=>new i.x),resetOnError:p=!0,resetOnComplete:l=!0,resetOnRefCountZero:d=!0}=_;return h=>{let f,C,m,b=0,E=!1,T=!1;const P=()=>{C?.unsubscribe(),C=void 0},A=()=>{P(),f=m=void 0,E=T=!1},L=()=>{const M=f;A(),M?.unsubscribe()};return(0,y.e)((M,I)=>{b++,!T&&!E&&P();const V=m=m??S();I.add(()=>{b--,0===b&&!T&&!E&&(C=c(L,d))}),V.subscribe(I),!f&&b>0&&(f=new g.Hp({next:z=>V.next(z),error:z=>{T=!0,P(),C=c(A,p,z),V.error(z)},complete:()=>{E=!0,P(),C=c(A,l),V.complete()}}),(0,R.Xf)(M).subscribe(f))})(h)}}function c(_,S,...p){if(!0===S)return void _();if(!1===S)return;const l=new g.Hp({next:()=>{l.unsubscribe(),_()}});return S(...p).subscribe(l)}},79239:(F,O,o)=>{o.d(O,{Z:()=>_});var R=o(43466),i=o(14813);const g={schedule(p){let l=requestAnimationFrame,d=cancelAnimationFrame;const{delegate:h}=g;h&&(l=h.requestAnimationFrame,d=h.cancelAnimationFrame);const f=l(C=>{d=void 0,p(C)});return new i.w0(()=>d?.(f))},requestAnimationFrame(...p){const{delegate:l}=g;return(l?.requestAnimationFrame||requestAnimationFrame)(...p)},cancelAnimationFrame(...p){const{delegate:l}=g;return(l?.cancelAnimationFrame||cancelAnimationFrame)(...p)},delegate:void 0};var a=o(40474);const _=new class c extends a.v{flush(l){this._active=!0;const d=this._scheduled;this._scheduled=void 0;const{actions:h}=this;let f;l=l||h.shift();do{if(f=l.execute(l.state,l.delay))break}while((l=h[0])&&l.id===d&&h.shift());if(this._active=!1,f){for(;(l=h[0])&&l.id===d&&h.shift();)l.unsubscribe();throw f}}}(class y extends R.o{constructor(l,d){super(l,d),this.scheduler=l,this.work=d}requestAsyncId(l,d,h=0){return null!==h&&h>0?super.requestAsyncId(l,d,h):(l.actions.push(this),l._scheduled||(l._scheduled=g.requestAnimationFrame(()=>l.flush(void 0))))}recycleAsyncId(l,d,h=0){var f;if(null!=h?h>0:this.delay>0)return super.recycleAsyncId(l,d,h);const{actions:C}=l;null!=d&&(null===(f=C[C.length-1])||void 0===f?void 0:f.id)!==d&&(g.cancelAnimationFrame(d),l._scheduled=void 0)}})},97:(F,O,o)=>{o.d(O,{b:()=>g});var R=o(87241),i=o(35975);function g(y){return!!y&&(y instanceof R.y||(0,i.m)(y.lift)&&(0,i.m)(y.subscribe))}},52692:(F,O,o)=>{o.d(O,{Z:()=>y});var R=o(27969);const{isArray:i}=Array;function y(a){return(0,R.U)(c=>function g(a,c){return i(c)?a(...c):a(c)}(a,c))}},14757:(F,O,o)=>{o.r(O),o.d(O,{CdkFixedSizeVirtualScroll:()=>ee,CdkScrollable:()=>N,CdkScrollableModule:()=>Z,CdkVirtualForOf:()=>ne,CdkVirtualScrollViewport:()=>Q,CdkVirtualScrollable:()=>W,CdkVirtualScrollableElement:()=>re,CdkVirtualScrollableWindow:()=>se,DEFAULT_RESIZE_TIME:()=>Y,DEFAULT_SCROLL_TIME:()=>G,FixedSizeVirtualScrollStrategy:()=>K,ScrollDispatcher:()=>B,ScrollingModule:()=>oe,VIRTUAL_SCROLLABLE:()=>j,VIRTUAL_SCROLL_STRATEGY:()=>U,ViewportRuler:()=>$,_fixedSizeVirtualScrollStrategyFactory:()=>H});var R=o(35333),i=o(56718),g=o(38023),y=o(84945),a=o(87241),c=o(14581),_=o(79239),S=o(36401),p=o(14813),l=o(97),d=o(42147),h=o(19232),f=o(74970),C=o(13528),m=o(51927),b=o(32085),E=o(28499),P=o(61528),A=o(5557),L=o(26903),I=o(23675),V=o(94055),z=o(43068),k=o(81382);const J=["contentWrapper"],q=["*"],U=new i.InjectionToken("VIRTUAL_SCROLL_STRATEGY");class K{constructor(w,e,t){this._scrolledIndexChange=new g.x,this.scrolledIndexChange=this._scrolledIndexChange.pipe((0,d.x)()),this._viewport=null,this._itemSize=w,this._minBufferPx=e,this._maxBufferPx=t}attach(w){this._viewport=w,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(w,e,t){this._itemSize=w,this._minBufferPx=e,this._maxBufferPx=t,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(w,e){this._viewport&&this._viewport.scrollToOffset(w*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const w=this._viewport.getRenderedRange(),e={start:w.start,end:w.end},t=this._viewport.getViewportSize(),n=this._viewport.getDataLength();let s=this._viewport.measureScrollOffset(),u=this._itemSize>0?s/this._itemSize:0;if(e.end>n){const v=Math.ceil(t/this._itemSize),x=Math.max(0,Math.min(u,n-v));u!=x&&(u=x,s=x*this._itemSize,e.start=Math.floor(u)),e.end=Math.max(0,Math.min(n,e.start+v))}const D=s-e.start*this._itemSize;if(D<this._minBufferPx&&0!=e.start){const v=Math.ceil((this._maxBufferPx-D)/this._itemSize);e.start=Math.max(0,e.start-v),e.end=Math.min(n,Math.ceil(u+(t+this._minBufferPx)/this._itemSize))}else{const v=e.end*this._itemSize-(s+t);if(v<this._minBufferPx&&e.end!=n){const x=Math.ceil((this._maxBufferPx-v)/this._itemSize);x>0&&(e.end=Math.min(n,e.end+x),e.start=Math.max(0,Math.floor(u-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(this._itemSize*e.start),this._scrolledIndexChange.next(Math.floor(u))}}function H(r){return r._scrollStrategy}let ee=(()=>{class r{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new K(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=(0,R.coerceNumberProperty)(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=(0,R.coerceNumberProperty)(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=(0,R.coerceNumberProperty)(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:r,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:U,useFactory:H,deps:[(0,i.forwardRef)(()=>r)]}]),i.\u0275\u0275NgOnChangesFeature]})}return r})();const G=20;let B=(()=>{class r{constructor(e,t,n){this._ngZone=e,this._platform=t,this._scrolled=new g.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=n}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=G){return this._platform.isBrowser?new a.y(t=>{this._globalSubscription||this._addGlobalListener();const n=e>0?this._scrolled.pipe((0,h.e)(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,y.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe((0,f.h)(s=>!s||n.indexOf(s)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((n,s)=>{this._scrollableContainsElement(s,e)&&t.push(s)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let n=(0,R.coerceElement)(t),s=e.getElementRef().nativeElement;do{if(n==s)return!0}while(n=n.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,c.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static#e=this.\u0275fac=function(t){return new(t||r)(i.\u0275\u0275inject(i.NgZone),i.\u0275\u0275inject(I.Platform),i.\u0275\u0275inject(V.DOCUMENT,8))};static#t=this.\u0275prov=i.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})(),N=(()=>{class r{constructor(e,t,n,s){this.elementRef=e,this.scrollDispatcher=t,this.ngZone=n,this.dir=s,this._destroyed=new g.x,this._elementScrolled=new a.y(u=>this.ngZone.runOutsideAngular(()=>(0,c.R)(this.elementRef.nativeElement,"scroll").pipe((0,C.R)(this._destroyed)).subscribe(u)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const t=this.elementRef.nativeElement,n=this.dir&&"rtl"==this.dir.value;null==e.left&&(e.left=n?e.end:e.start),null==e.right&&(e.right=n?e.start:e.end),null!=e.bottom&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),n&&0!=(0,I.getRtlScrollAxisType)()?(null!=e.left&&(e.right=t.scrollWidth-t.clientWidth-e.left),2==(0,I.getRtlScrollAxisType)()?e.left=e.right:1==(0,I.getRtlScrollAxisType)()&&(e.left=e.right?-e.right:e.right)):null!=e.right&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const t=this.elementRef.nativeElement;(0,I.supportsScrollBehavior)()?t.scrollTo(e):(null!=e.top&&(t.scrollTop=e.top),null!=e.left&&(t.scrollLeft=e.left))}measureScrollOffset(e){const t="left",n="right",s=this.elementRef.nativeElement;if("top"==e)return s.scrollTop;if("bottom"==e)return s.scrollHeight-s.clientHeight-s.scrollTop;const u=this.dir&&"rtl"==this.dir.value;return"start"==e?e=u?n:t:"end"==e&&(e=u?t:n),u&&2==(0,I.getRtlScrollAxisType)()?e==t?s.scrollWidth-s.clientWidth-s.scrollLeft:s.scrollLeft:u&&1==(0,I.getRtlScrollAxisType)()?e==t?s.scrollLeft+s.scrollWidth-s.clientWidth:-s.scrollLeft:e==t?s.scrollLeft:s.scrollWidth-s.clientWidth-s.scrollLeft}static#e=this.\u0275fac=function(t){return new(t||r)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(B),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(z.Directionality,8))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:r,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0})}return r})();const Y=20;let $=(()=>{class r{constructor(e,t,n){this._platform=e,this._change=new g.x,this._changeListener=s=>{this._change.next(s)},this._document=n,t.runOutsideAngular(()=>{if(e.isBrowser){const s=this._getWindow();s.addEventListener("resize",this._changeListener),s.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),n=e.documentElement,s=n.getBoundingClientRect();return{top:-s.top||e.body.scrollTop||t.scrollY||n.scrollTop||0,left:-s.left||e.body.scrollLeft||t.scrollX||n.scrollLeft||0}}change(e=Y){return e>0?this._change.pipe((0,h.e)(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static#e=this.\u0275fac=function(t){return new(t||r)(i.\u0275\u0275inject(I.Platform),i.\u0275\u0275inject(i.NgZone),i.\u0275\u0275inject(V.DOCUMENT,8))};static#t=this.\u0275prov=i.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();const j=new i.InjectionToken("VIRTUAL_SCROLLABLE");let W=(()=>{class r extends N{constructor(e,t,n,s){super(e,t,n,s)}measureViewportSize(e){const t=this.elementRef.nativeElement;return"horizontal"===e?t.clientWidth:t.clientHeight}static#e=this.\u0275fac=function(t){return new(t||r)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(B),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(z.Directionality,8))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:r,features:[i.\u0275\u0275InheritDefinitionFeature]})}return r})();const ie=typeof requestAnimationFrame<"u"?_.Z:S.E;let Q=(()=>{class r extends W{get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=(0,R.coerceBooleanProperty)(e)}constructor(e,t,n,s,u,D,v,x){super(e,D,n,u),this.elementRef=e,this._changeDetectorRef=t,this._scrollStrategy=s,this.scrollable=x,this._platform=(0,i.inject)(I.Platform),this._detachedSubject=new g.x,this._renderedRangeSubject=new g.x,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new a.y(le=>this._scrollStrategy.scrolledIndexChange.subscribe(ae=>Promise.resolve().then(()=>this.ngZone.run(()=>le.next(ae))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=p.w0.EMPTY,this._viewportChanges=v.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this)}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe((0,m.O)(null),(0,h.e)(0,ie)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,C.R)(this._detachedSubject)).subscribe(t=>{const n=t.length;n!==this._dataLength&&(this._dataLength=n,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){(function te(r,w){return r.start==w.start&&r.end==w.end})(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,t="to-start"){e=this.appendOnly&&"to-start"===t?0:e;const s="horizontal"==this.orientation,u=s?"X":"Y";let v=`translate${u}(${Number((s&&this.dir&&"rtl"==this.dir.value?-1:1)*e)}px)`;this._renderedContentOffset=e,"to-end"===t&&(v+=` translate${u}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=v&&(this._renderedContentTransform=v,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,t="auto"){const n={behavior:t};"horizontal"===this.orientation?n.start=e:n.top=e,this.scrollable.scrollTo(n)}scrollToIndex(e,t="auto"){this._scrollStrategy.scrollToIndex(e,t)}measureScrollOffset(e){let t;return t=this.scrollable==this?n=>super.measureScrollOffset(n):n=>this.scrollable.measureScrollOffset(n),Math.max(0,t(e??("horizontal"===this.orientation?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let t;const n="left",s="right",u="rtl"==this.dir?.value;t="start"==e?u?s:n:"end"==e?u?n:s:e||("horizontal"===this.orientation?"left":"top");const D=this.scrollable.measureBoundingClientRectWithScrollOffset(t);return this.elementRef.nativeElement.getBoundingClientRect()[t]-D}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return"horizontal"===this.orientation?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const t of e)t()}_calculateSpacerSize(){this._totalContentHeight="horizontal"===this.orientation?"":`${this._totalContentSize}px`,this._totalContentWidth="horizontal"===this.orientation?`${this._totalContentSize}px`:""}static#e=this.\u0275fac=function(t){return new(t||r)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(i.ChangeDetectorRef),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(U,8),i.\u0275\u0275directiveInject(z.Directionality,8),i.\u0275\u0275directiveInject(B),i.\u0275\u0275directiveInject($),i.\u0275\u0275directiveInject(j,8))};static#t=this.\u0275cmp=i.\u0275\u0275defineComponent({type:r,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(t,n){if(1&t&&i.\u0275\u0275viewQuery(J,7),2&t){let s;i.\u0275\u0275queryRefresh(s=i.\u0275\u0275loadQuery())&&(n._contentWrapper=s.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(t,n){2&t&&i.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal","horizontal"===n.orientation)("cdk-virtual-scroll-orientation-vertical","horizontal"!==n.orientation)},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:N,useFactory:(e,t)=>e||t,deps:[[new i.Optional,new i.Inject(j)],r]}]),i.\u0275\u0275InheritDefinitionFeature,i.\u0275\u0275StandaloneFeature],ngContentSelectors:q,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(t,n){1&t&&(i.\u0275\u0275projectionDef(),i.\u0275\u0275elementStart(0,"div",0,1),i.\u0275\u0275projection(2),i.\u0275\u0275elementEnd(),i.\u0275\u0275element(3,"div",2)),2&t&&(i.\u0275\u0275advance(3),i.\u0275\u0275styleProp("width",n._totalContentWidth)("height",n._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0})}return r})();function X(r,w,e){if(!e.getBoundingClientRect)return 0;const n=e.getBoundingClientRect();return"horizontal"===r?"start"===w?n.left:n.right:"start"===w?n.top:n.bottom}let ne=(()=>{class r{get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,(0,k.isDataSource)(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new k.ArrayDataSource((0,l.b)(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(t,n)=>e(t+(this._renderedRange?this._renderedRange.start:0),n):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=(0,R.coerceNumberProperty)(e)}constructor(e,t,n,s,u,D){this._viewContainerRef=e,this._template=t,this._differs=n,this._viewRepeater=s,this._viewport=u,this.viewChange=new g.x,this._dataSourceChanges=new g.x,this.dataStream=this._dataSourceChanges.pipe((0,m.O)(null),function T(){return(0,b.e)((r,w)=>{let e,t=!1;r.subscribe((0,E.x)(w,n=>{const s=e;e=n,t&&w.next([s,n]),t=!0}))})}(),(0,P.w)(([v,x])=>this._changeDataSource(v,x)),function M(r,w,e){let t,n=!1;return r&&"object"==typeof r?({bufferSize:t=1/0,windowTime:w=1/0,refCount:n=!1,scheduler:e}=r):t=r??1/0,(0,L.B)({connector:()=>new A.t(t,w,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:n})}(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new g.x,this.dataStream.subscribe(v=>{this._data=v,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,C.R)(this._destroyed)).subscribe(v=>{this._renderedRange=v,this.viewChange.observers.length&&D.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}measureRangeSize(e,t){if(e.start>=e.end)return 0;const n=e.start-this._renderedRange.start,s=e.end-e.start;let u,D;for(let v=0;v<s;v++){const x=this._viewContainerRef.get(v+n);if(x&&x.rootNodes.length){u=D=x.rootNodes[0];break}}for(let v=s-1;v>-1;v--){const x=this._viewContainerRef.get(v+n);if(x&&x.rootNodes.length){D=x.rootNodes[x.rootNodes.length-1];break}}return u&&D?X(t,"end",D)-X(t,"start",u):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,t)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,t):t)),this._needsUpdate=!0)}_changeDataSource(e,t){return e&&e.disconnect(this),this._needsUpdate=!0,t?t.connect(this):(0,y.of)()}_updateContext(){const e=this._data.length;let t=this._viewContainerRef.length;for(;t--;){const n=this._viewContainerRef.get(t);n.context.index=this._renderedRange.start+t,n.context.count=e,this._updateComputedContextProperties(n.context),n.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(s,u,D)=>this._getEmbeddedViewArgs(s,D),s=>s.item),e.forEachIdentityChange(s=>{this._viewContainerRef.get(s.currentIndex).context.$implicit=s.item});const t=this._data.length;let n=this._viewContainerRef.length;for(;n--;){const s=this._viewContainerRef.get(n);s.context.index=this._renderedRange.start+n,s.context.count=t,this._updateComputedContextProperties(s.context)}}_updateComputedContextProperties(e){e.first=0===e.index,e.last=e.index===e.count-1,e.even=e.index%2==0,e.odd=!e.even}_getEmbeddedViewArgs(e,t){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:t}}static#e=this.\u0275fac=function(t){return new(t||r)(i.\u0275\u0275directiveInject(i.ViewContainerRef),i.\u0275\u0275directiveInject(i.TemplateRef),i.\u0275\u0275directiveInject(i.IterableDiffers),i.\u0275\u0275directiveInject(k._VIEW_REPEATER_STRATEGY),i.\u0275\u0275directiveInject(Q,4),i.\u0275\u0275directiveInject(i.NgZone))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:r,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:k._VIEW_REPEATER_STRATEGY,useClass:k._RecycleViewRepeaterStrategy}])]})}return r})(),re=(()=>{class r extends W{constructor(e,t,n,s){super(e,t,n,s)}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]-this.measureScrollOffset(e)}static#e=this.\u0275fac=function(t){return new(t||r)(i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(B),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(z.Directionality,8))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:r,selectors:[["","cdkVirtualScrollingElement",""]],hostAttrs:[1,"cdk-virtual-scrollable"],standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:j,useExisting:r}]),i.\u0275\u0275InheritDefinitionFeature]})}return r})(),se=(()=>{class r extends W{constructor(e,t,n){super(new i.ElementRef(document.documentElement),e,t,n),this._elementScrolled=new a.y(s=>this.ngZone.runOutsideAngular(()=>(0,c.R)(document,"scroll").pipe((0,C.R)(this._destroyed)).subscribe(s)))}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}static#e=this.\u0275fac=function(t){return new(t||r)(i.\u0275\u0275directiveInject(B),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(z.Directionality,8))};static#t=this.\u0275dir=i.\u0275\u0275defineDirective({type:r,selectors:[["cdk-virtual-scroll-viewport","scrollWindow",""]],standalone:!0,features:[i.\u0275\u0275ProvidersFeature([{provide:j,useExisting:r}]),i.\u0275\u0275InheritDefinitionFeature]})}return r})(),Z=(()=>{class r{static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275mod=i.\u0275\u0275defineNgModule({type:r});static#i=this.\u0275inj=i.\u0275\u0275defineInjector({})}return r})(),oe=(()=>{class r{static#e=this.\u0275fac=function(t){return new(t||r)};static#t=this.\u0275mod=i.\u0275\u0275defineNgModule({type:r});static#i=this.\u0275inj=i.\u0275\u0275defineInjector({imports:[z.BidiModule,Z,z.BidiModule,Z]})}return r})()}}]);
(self.webpackChunkplugin_amcharts5=self.webpackChunkplugin_amcharts5||[]).push([[1943],{1943:(Me,C,s)=>{s.r(C),s.d(C,{MAT_STEPPER_PROXY_FACTORY:()=>R,MaterialModule:()=>ve,ResponsiveStepperComponent:()=>_});var f=s(94055),n=s(56718),I=s(908),j=s(51372),O=s(18142),D=s(93168),v=s(70561),T=s(33730),B=s(67726),L=s(52090),A=s(15455),V=s(1621),F=s(72049),E=s(75101),w=s(53598),N=s(53726),Y=s(80584),c=s(7054),Q=s(40810),W=s(5311),H=s(97040),X=s(38369),G=s(12219),K=s(28972),U=s(26073),J=s(9263),Z=s(75376),x=s(6606),$=s(41858),b=s(56388),k=s(36070),q=s(44039),ee=s(80565),te=s(55198),ne=s(92081),se=s(4856),oe=s(8312),re=s(43516),ae=s(21669),ie=s(28413),le=s(3620),de=s(67223),ce=s(89402),he=s(43068);s(35333);let me=(()=>{class a{static#e=this.\u0275fac=function(e){return new(e||a)};static#t=this.\u0275mod=n.\u0275\u0275defineNgModule({type:a});static#n=this.\u0275inj=n.\u0275\u0275defineInjector({})}return a})();function ue(a,o){if(1&a){const t=n.\u0275\u0275getCurrentView();n.\u0275\u0275elementStart(0,"mat-horizontal-stepper",3),n.\u0275\u0275listener("animationDone",function(r){n.\u0275\u0275restoreView(t);const i=n.\u0275\u0275nextContext();return n.\u0275\u0275resetView(i.animationDone.emit(r))})("selectionChange",function(r){n.\u0275\u0275restoreView(t);const i=n.\u0275\u0275nextContext();return n.\u0275\u0275resetView(i.selectionChange.emit(r))}),n.\u0275\u0275elementEnd()}if(2&a){const t=n.\u0275\u0275nextContext();n.\u0275\u0275property("labelPosition",t.labelPosition)("linear",t.linear)("selected",t.selected)("selectedIndex",t.selectedIndex)}}function pe(a,o){if(1&a){const t=n.\u0275\u0275getCurrentView();n.\u0275\u0275elementStart(0,"mat-vertical-stepper",4),n.\u0275\u0275listener("animationDone",function(r){n.\u0275\u0275restoreView(t);const i=n.\u0275\u0275nextContext();return n.\u0275\u0275resetView(i.animationDone.emit(r))})("selectionChange",function(r){n.\u0275\u0275restoreView(t);const i=n.\u0275\u0275nextContext();return n.\u0275\u0275resetView(i.selectionChange.emit(r))}),n.\u0275\u0275elementEnd()}if(2&a){const t=n.\u0275\u0275nextContext();n.\u0275\u0275property("linear",t.linear)("selected",t.selected)("selectedIndex",t.selectedIndex)}}const y={provide:c.MatStepper,deps:[(0,n.forwardRef)(()=>_),[new n.Optional,he.Directionality],n.ChangeDetectorRef,[new n.Inject(f.DOCUMENT)]],useFactory:R},ge={...y,provide:v.CdkStepper};function R(a,o,t,e){const r=new n.ElementRef(e.createElement("mat-horizontal-stepper")),i=new c.MatStepper(o,t,r);return new Proxy(i,{get:(l,h)=>Reflect.get(a.stepper||l,h),set:(l,h,g)=>Reflect.set(a.stepper||l,h,g)})}let _=(()=>{class a{constructor(){this.animationDone=new n.EventEmitter,this.selectionChange=new n.EventEmitter,this.orientationChange=new n.EventEmitter,this.needsFocus=!1,this.htmlSteps=[]}get stepper(){return this.stepperList&&this.stepperList.first}ngAfterViewInit(){this.reset(),this.stepperList.changes.subscribe(()=>this.reset()),this.selectionChange.subscribe(t=>this.lastSelectedIndex=t.selectedIndex),this.syncHTMLSteps(),setTimeout(()=>this.stepper.selectedIndex=this.selectedIndex,400)}ngAfterViewChecked(){if(this.needsFocus){this.needsFocus=!1;const{_elementRef:t,_keyManager:e,selectedIndex:r}=this.stepper;t.nativeElement.focus(),e.setActiveItem(r)}}get isHorizontal(){return"horizontal"===this.orientation}get isVertical(){return"vertical"===this.orientation}next(){this.stepper.next()}previous(){this.stepper.previous()}updateStepState(t,e){this.htmlSteps.length>0&&(this.htmlSteps[t-1].style.pointerEvents=e?"":"none")}syncHTMLSteps(){this.htmlSteps=[];let t=1,e=document.querySelector(".mat-stepper-vertical");e||(t=2,e=document.querySelector(".mat-horizontal-stepper-header-container"));for(let r=0;r<e.children.length;r+=t)this.htmlSteps.push(e.children[r])}reset(){setTimeout(()=>this.syncHTMLSteps(),100);const{stepper:t,steps:e,lastSelectedIndex:r}=this;t.steps.reset(e.toArray()),t.steps.notifyOnChanges(),r&&(t.selectedIndex=r,setTimeout(()=>this.orientationChange.emit(this.orientation),101))}static#e=this.\u0275fac=function(e){return new(e||a)};static#t=this.\u0275cmp=n.\u0275\u0275defineComponent({type:a,selectors:[["responsive-stepper"]],contentQueries:function(e,r,i){if(1&e&&n.\u0275\u0275contentQuery(i,c.MatStep,4),2&e){let l;n.\u0275\u0275queryRefresh(l=n.\u0275\u0275loadQuery())&&(r.steps=l)}},viewQuery:function(e,r){if(1&e&&n.\u0275\u0275viewQuery(c.MatStepper,5),2&e){let i;n.\u0275\u0275queryRefresh(i=n.\u0275\u0275loadQuery())&&(r.stepperList=i)}},inputs:{labelPosition:"labelPosition",linear:"linear",orientation:"orientation",selected:"selected",selectedIndex:"selectedIndex"},outputs:{animationDone:"animationDone",selectionChange:"selectionChange",orientationChange:"orientationChange"},features:[n.\u0275\u0275ProvidersFeature([y,ge])],decls:3,vars:2,consts:[[3,"ngSwitch"],[3,"labelPosition","linear","selected","selectedIndex","animationDone","selectionChange",4,"ngSwitchDefault"],[3,"linear","selected","selectedIndex","animationDone","selectionChange",4,"ngSwitchCase"],[3,"labelPosition","linear","selected","selectedIndex","animationDone","selectionChange"],[3,"linear","selected","selectedIndex","animationDone","selectionChange"]],template:function(e,r){1&e&&(n.\u0275\u0275elementContainerStart(0,0),n.\u0275\u0275template(1,ue,1,4,"mat-horizontal-stepper",1),n.\u0275\u0275template(2,pe,1,3,"mat-vertical-stepper",2),n.\u0275\u0275elementContainerEnd()),2&e&&(n.\u0275\u0275property("ngSwitch",r.orientation),n.\u0275\u0275advance(2),n.\u0275\u0275property("ngSwitchCase","vertical"))},dependencies:[f.NgSwitch,f.NgSwitchCase,f.NgSwitchDefault,c.MatStepper],encapsulation:2,changeDetection:0})}return a})(),ve=(()=>{class a{static#e=this.\u0275fac=function(e){return new(e||a)};static#t=this.\u0275mod=n.\u0275\u0275defineNgModule({type:a});static#n=this.\u0275inj=n.\u0275\u0275defineInjector({imports:[f.CommonModule,v.CdkStepperModule,c.MatStepperModule,I.A11yModule,v.CdkStepperModule,T.CdkTableModule,B.CdkTreeModule,j.DragDropModule,L.MatLegacyAutocompleteModule,A.MatBadgeModule,V.MatBottomSheetModule,F.MatLegacyButtonModule,E.MatButtonToggleModule,w.MatLegacyCardModule,N.MatLegacyCheckboxModule,Y.MatLegacyChipsModule,c.MatStepperModule,Q.MatDatepickerModule,W.MatLegacyDialogModule,H.MatDividerModule,X.MatExpansionModule,G.MatGridListModule,K.MatIconModule,U.MatLegacyInputModule,J.MatLegacyListModule,Z.MatLegacyMenuModule,x.MatNativeDateModule,$.MatLegacyPaginatorModule,b.MatLegacyProgressBarModule,k.MatLegacyProgressSpinnerModule,q.MatLegacyRadioModule,x.MatRippleModule,ee.MatLegacySelectModule,te.MatSidenavModule,ne.MatLegacySliderModule,se.MatLegacySlideToggleModule,oe.MatLegacySnackBarModule,re.MatSortModule,ae.MatLegacyTableModule,ie.MatLegacyTabsModule,le.MatToolbarModule,de.MatLegacyTooltipModule,ce.MatTreeModule,O.PortalModule,D.ScrollingModule,me]})}return a})()}}]);
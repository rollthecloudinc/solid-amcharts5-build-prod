(self.webpackChunkplugin_amcharts5=self.webpackChunkplugin_amcharts5||[]).push([[9983],{83570:(J,V,b)=>{b.d(V,{k:()=>o});var S=b(38489),T=b(49648);class o extends S.W{constructor(){super(...arguments),Object.defineProperty(this,"chartContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(S.W.new(this._root,{width:T.AQ,height:T.AQ,interactiveChildren:!1}))}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:S.W.new(this._root,{interactiveChildren:!1,isMeasured:!1,position:"absolute",width:T.AQ,height:T.AQ})})}}Object.defineProperty(o,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Chart"}),Object.defineProperty(o,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:S.W.classNames.concat([o.className])})},37129:(J,V,b)=>{b.d(V,{x:()=>P});var S=b(54416);function T(d,c){for(let v=0,m=c.length;v<m;v++){const C=c[v];if(C.length>0){let L=C[0];if(L.length>0){let _=L[0];d.moveTo(_.x,_.y);for(let A=0,w=C.length;A<w;A++)o(d,C[A])}}}}function o(d,c){for(let v=0,m=c.length;v<m;v++){const C=c[v];d.lineTo(C.x,C.y)}}class P extends S.T{_beforeChanged(){super._beforeChanged(),(this.isDirty("points")||this.isDirty("segments")||this._sizeDirty||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){const c=this.get("points"),v=this.get("segments");if(c&&c.length>0){let m=c[0];this._display.moveTo(m.x,m.y),T(this._display,[[c]])}else if(v)T(this._display,v);else if(!this.get("draw")){let m=this.width(),C=this.height();this._display.moveTo(0,0),this._display.lineTo(m,C)}}}}Object.defineProperty(P,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Line"}),Object.defineProperty(P,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:S.T.classNames.concat([P.className])})},71742:(J,V,b)=>{b.d(V,{j:()=>F});var S=b(83570),T=b(38489),o=b(25905),G=b(49648),q=b(15784);class F extends S.k{constructor(){super(...arguments),Object.defineProperty(this,"seriesContainer",{enumerable:!0,configurable:!0,writable:!0,value:T.W.new(this._root,{width:G.AQ,height:G.AQ,isMeasured:!1})}),Object.defineProperty(this,"series",{enumerable:!0,configurable:!0,writable:!0,value:new o.dn})}_afterNew(){super._afterNew(),this._disposers.push(this.series);const P=this.seriesContainer.children;this._disposers.push(this.series.events.onAll(d=>{if("clear"===d.type){q.S6(d.oldValues,v=>{this._removeSeries(v)});const c=this.get("colors");c&&c.reset()}else if("push"===d.type)P.moveValue(d.newValue),this._processSeries(d.newValue);else if("setIndex"===d.type)P.setIndex(d.index,d.newValue),this._processSeries(d.newValue);else if("insertIndex"===d.type)P.insertIndex(d.index,d.newValue),this._processSeries(d.newValue);else if("removeIndex"===d.type)this._removeSeries(d.oldValue);else{if("moveIndex"!==d.type)throw new Error("Unknown IListEvent type");P.moveValue(d.value,d.newIndex),this._processSeries(d.value)}}))}_processSeries(P){P.chart=this,P._placeBulletsContainer(this)}_removeSeries(P){P.isDisposed()||(this.seriesContainer.children.removeValue(P),P._removeBulletsContainer())}}Object.defineProperty(F,"className",{enumerable:!0,configurable:!0,writable:!0,value:"SerialChart"}),Object.defineProperty(F,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:S.k.classNames.concat([F.className])})},40397:(J,V,b)=>{b.d(V,{d:()=>T});var S=b(37129);class T extends S.x{}Object.defineProperty(T,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Tick"}),Object.defineProperty(T,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:S.x.classNames.concat([T.className])})},29730:(J,V,b)=>{b.d(V,{FunnelSeries:()=>X,FunnelSlice:()=>E,PercentChart:()=>j,PercentSeries:()=>L,PictorialStackedSeries:()=>ee,PieChart:()=>w,PieSeries:()=>Q,PyramidSeries:()=>K,SlicedChart:()=>te});var S=b(71742),T=b(57333),o=b(49648),G=b(11754),q=b(98357);class F extends T.Q{setupDefaultRules(){super.setupDefaultRules();const t=this._root.interfaceColors,e=this.rule.bind(this);e("PercentSeries").setAll({legendLabelText:"{category}",legendValueText:"{valuePercentTotal.formatNumber('0.00p')}",colors:G.U.new(this._root,{}),width:o.AQ,height:o.AQ}),e("PieChart").setAll({radius:(0,o.aQ)(80),startAngle:-90,endAngle:270}),e("PieSeries").setAll({alignLabels:!0,startAngle:-90,endAngle:270}),e("PieSeries").states.create("hidden",{endAngle:-90,opacity:0}),e("Slice",["pie"]).setAll({position:"absolute",isMeasured:!1,x:0,y:0,toggleKey:"active",tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}",strokeWidth:1,strokeOpacity:1,role:"figure",lineJoin:"round"}),e("Slice",["pie"]).states.create("active",{shiftRadius:20,scale:1}),e("Slice",["pie"]).states.create("hoverActive",{scale:1.04}),e("Slice",["pie"]).states.create("hover",{scale:1.04}),e("RadialLabel",["pie"]).setAll({textType:"aligned",radius:10,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",paddingTop:5,paddingBottom:5,populateText:!0}),e("Tick",["pie"]).setAll({location:1}),e("SlicedChart").setAll({paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10}),e("FunnelSeries").setAll({startLocation:0,endLocation:1,orientation:"vertical",alignLabels:!0,sequencedInterpolation:!0}),e("FunnelSlice").setAll({interactive:!0,expandDistance:0}),e("FunnelSlice").states.create("hover",{expandDistance:.15}),e("Label",["funnel"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:o.CI}),e("Label",["funnel","horizontal"]).setAll({centerX:0,centerY:o.CI,rotation:-90}),e("Label",["funnel","vertical"]).setAll({centerY:o.CI,centerX:0}),e("Tick",["funnel"]).setAll({location:1}),e("FunnelSlice",["funnel","link"]).setAll({fillOpacity:.5,strokeOpacity:0,expandDistance:-.1}),e("FunnelSlice",["funnel","link","vertical"]).setAll({height:10}),e("FunnelSlice",["funnel","link","horizontal"]).setAll({width:10}),e("PyramidSeries").setAll({valueIs:"area"}),e("FunnelSlice",["pyramid","link"]).setAll({fillOpacity:.5}),e("FunnelSlice",["pyramid","link","vertical"]).setAll({height:0}),e("FunnelSlice",["pyramid","link","horizontal"]).setAll({width:0}),e("FunnelSlice",["pyramid"]).setAll({interactive:!0,expandDistance:0}),e("FunnelSlice",["pyramid"]).states.create("hover",{expandDistance:.15}),e("Label",["pyramid"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:o.CI}),e("Label",["pyramid","horizontal"]).setAll({centerX:0,centerY:o.CI,rotation:-90}),e("Label",["pyramid","vertical"]).setAll({centerY:o.CI,centerX:0}),e("Tick",["pyramid"]).setAll({location:1}),e("FunnelSlice",["pictorial"]).setAll({interactive:!0,tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}"}),e("Label",["pictorial"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:o.CI}),e("Label",["pictorial","horizontal"]).setAll({centerX:0,centerY:o.CI,rotation:-90}),e("Label",["pictorial","vertical"]).setAll({centerY:o.CI,centerX:0}),e("FunnelSlice",["pictorial","link"]).setAll({fillOpacity:.5,width:0,height:0}),e("Tick",["pictorial"]).setAll({location:.5});{const i=e("Graphics",["pictorial","background"]);i.setAll({fillOpacity:.2}),(0,q.v)(i,"fill",t,"alternativeBackground")}}}class j extends S.j{_afterNew(){this._defaultThemes.push(F.new(this._root)),super._afterNew(),this.chartContainer.children.push(this.seriesContainer),this.seriesContainer.children.push(this.bulletsContainer)}_processSeries(t){super._processSeries(t),this.seriesContainer.children.moveValue(this.bulletsContainer,this.seriesContainer.children.length-1)}}Object.defineProperty(j,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentChart"}),Object.defineProperty(j,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:S.j.classNames.concat([j.className])});var P=b(84911),d=b(19037),c=b(38489),v=b(54416),m=b(15784),C=b(50886);class L extends d.F{constructor(){super(...arguments),Object.defineProperty(this,"slicesContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(c.W.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"labelsContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(c.W.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"ticksContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(c.W.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"_lLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_rLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_hLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slices",{enumerable:!0,configurable:!0,writable:!0,value:this._makeSlices()}),Object.defineProperty(this,"labels",{enumerable:!0,configurable:!0,writable:!0,value:this._makeLabels()}),Object.defineProperty(this,"ticks",{enumerable:!0,configurable:!0,writable:!0,value:this._makeTicks()})}makeSlice(t){const e=this.slicesContainer.children.push(this.slices.make());return e.on("fill",()=>{this.updateLegendMarker(t)}),e.on("stroke",()=>{this.updateLegendMarker(t)}),e._setDataItem(t),t.set("slice",e),this.slices.push(e),e}makeLabel(t){const e=this.labelsContainer.children.push(this.labels.make());return e._setDataItem(t),t.set("label",e),this.labels.push(e),e}_shouldMakeBullet(t){return null!=t.get("value")}makeTick(t){const e=this.ticksContainer.children.push(this.ticks.make());return e._setDataItem(t),t.set("tick",e),this.ticks.push(e),e}_afterNew(){this.fields.push("category","fill"),super._afterNew()}_onDataClear(){const t=this.get("colors");t&&t.reset()}_prepareChildren(){if(super._prepareChildren(),this._lLabels=[],this._rLabels=[],this._hLabels=[],this._valuesDirty){let t=0,e=0,i=0,s=1/0,r=0;m.S6(this._dataItems,l=>{let a=l.get("valueWorking",0);t+=a,e+=Math.abs(a)}),m.S6(this._dataItems,l=>{let a=l.get("valueWorking",0);a>i&&(i=a),a<s&&(s=a),r++;let n=a/e;0==e&&(n=0),l.setRaw("valuePercentTotal",100*n)}),this.setPrivateRaw("valueLow",s),this.setPrivateRaw("valueHigh",i),this.setPrivateRaw("valueSum",t),this.setPrivateRaw("valueAverage",t/r),this.setPrivateRaw("valueAbsoluteSum",e)}}show(t){const e=Object.create(null,{show:{get:()=>super.show}});return(0,P.mG)(this,void 0,void 0,function*(){let i=[];i.push(e.show.call(this,t)),i.push(this._sequencedShowHide(!0,t)),yield Promise.all(i)})}hide(t){const e=Object.create(null,{hide:{get:()=>super.hide}});return(0,P.mG)(this,void 0,void 0,function*(){let i=[];i.push(e.hide.call(this,t)),i.push(this._sequencedShowHide(!1,t)),yield Promise.all(i)})}_updateChildren(){super._updateChildren(),this._valuesDirty&&m.S6(this._dataItems,t=>{t.get("label").text.markDirtyText()}),(this.isDirty("legendLabelText")||this.isDirty("legendValueText"))&&m.S6(this._dataItems,t=>{this.updateLegendValue(t)}),this._arrange()}_arrange(){this._arrangeDown(this._lLabels),this._arrangeUp(this._lLabels),this._arrangeDown(this._rLabels),this._arrangeUp(this._rLabels),this._arrangeLeft(this._hLabels),this._arrangeRight(this._hLabels),m.S6(this.dataItems,t=>{this._updateTick(t)})}_afterChanged(){super._afterChanged(),this._arrange()}processDataItem(t){if(super.processDataItem(t),null==t.get("fill")){let e=this.get("colors");e&&t.setRaw("fill",e.next())}}showDataItem(t,e){const i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return(0,P.mG)(this,void 0,void 0,function*(){const s=[i.showDataItem.call(this,t,e)];C.hj(e)||(e=this.get("stateAnimationDuration",0));const r=this.get("stateAnimationEasing");let l=t.get("value");const a=t.animate({key:"valueWorking",to:l,duration:e,easing:r});a&&s.push(a.waitForStop());const n=t.get("tick");n&&s.push(n.show(e));const g=t.get("label");g&&s.push(g.show(e));const h=t.get("slice");h&&s.push(h.show(e)),h.get("active")&&h.states.applyAnimate("active"),yield Promise.all(s)})}hideDataItem(t,e){const i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return(0,P.mG)(this,void 0,void 0,function*(){const s=[i.hideDataItem.call(this,t,e)],r=this.states.create("hidden",{});C.hj(e)||(e=r.get("stateAnimationDuration",this.get("stateAnimationDuration",0)));const l=r.get("stateAnimationEasing",this.get("stateAnimationEasing")),a=t.animate({key:"valueWorking",to:0,duration:e,easing:l});a&&s.push(a.waitForStop());const n=t.get("tick");n&&s.push(n.hide(e));const g=t.get("label");g&&s.push(g.hide(e));const h=t.get("slice");h.hideTooltip(),h&&s.push(h.hide(e)),yield Promise.all(s)})}disposeDataItem(t){super.disposeDataItem(t);let e=t.get("label");e&&(this.labels.removeValue(e),e.dispose());let i=t.get("tick");i&&(this.ticks.removeValue(i),i.dispose());let s=t.get("slice");s&&(this.slices.removeValue(s),s.dispose())}hoverDataItem(t){const e=t.get("slice");e&&!e.isHidden()&&e.hover()}unhoverDataItem(t){const e=t.get("slice");e&&e.unhover()}updateLegendMarker(t){if(t){const e=t.get("slice");if(e){const i=t.get("legendDataItem");if(i){const s=i.get("markerRectangle");m.S6(v.u,r=>{null!=e.get(r)&&s.set(r,e.get(r))})}}}}_arrangeDown(t){if(t){let e=this._getNextDown();t.sort((i,s)=>i.y>s.y?1:i.y<s.y?-1:0),m.S6(t,i=>{const s=i.label.adjustedLocalBounds();let r=s.top;i.y+r<e&&(i.y=e-r),i.label.set("y",i.y),e=i.y+s.bottom})}}_getNextUp(){return this.labelsContainer.maxHeight()}_getNextDown(){return 0}_arrangeUp(t){if(t){let e=this._getNextUp();t.sort((i,s)=>i.y<s.y?1:i.y>s.y?-1:0),m.S6(t,i=>{const s=i.label.adjustedLocalBounds();let r=s.bottom;i.y+r>e&&(i.y=e-r),i.label.set("y",i.y),e=i.y+s.top})}}_arrangeRight(t){if(t){let e=0;t.sort((i,s)=>i.y>s.y?1:i.y<s.y?-1:0),m.S6(t,i=>{const s=i.label.adjustedLocalBounds();let r=s.left;i.y+r<e&&(i.y=e-r),i.label.set("x",i.y),e=i.y+s.right})}}_arrangeLeft(t){if(t){let e=this.labelsContainer.maxWidth();t.sort((i,s)=>i.y<s.y?1:i.y>s.y?-1:0),m.S6(t,i=>{const s=i.label.adjustedLocalBounds();let r=s.right;i.y+r>e&&(i.y=e-r),i.label.set("x",i.y),e=i.y+s.left})}}_updateSize(){super._updateSize(),this.markDirty()}_updateTick(t){}_dispose(){super._dispose();const t=this.chart;t&&t.series.removeValue(this)}}Object.defineProperty(L,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentSeries"}),Object.defineProperty(L,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:d.F.classNames.concat([L.className])});var _=b(43933),A=b(71765);class w extends j{constructor(){super(...arguments),Object.defineProperty(this,"_maxRadius",{enumerable:!0,configurable:!0,writable:!0,value:1})}_afterNew(){super._afterNew(),this.seriesContainer.setAll({x:o.CI,y:o.CI})}_prepareChildren(){super._prepareChildren();const t=this.chartContainer,e=t.innerWidth(),i=t.innerHeight(),s=this.get("startAngle",0),r=this.get("endAngle",0),l=this.get("innerRadius");let a=A.E4(0,0,s,r,1);const n=e/(a.right-a.left),g=i/(a.bottom-a.top);let h={left:0,right:0,top:0,bottom:0};if(l instanceof o.gG){let y=l.value,x=Math.min(n,g);y=Math.max(x*y,x-Math.min(i,e))/x,h=A.E4(0,0,s,r,y),this.setPrivateRaw("irModifyer",y/l.value)}a=A.cc([a,h]);const p=this._maxRadius;this._maxRadius=Math.min(n,g);const u=_.Iy(this.get("radius",0),this._maxRadius);this.seriesContainer.setAll({dy:-u*(a.bottom+a.top)/2,dx:-u*(a.right+a.left)/2}),(this.isDirty("startAngle")||this.isDirty("endAngle")||p!=this._maxRadius)&&this.series.each(y=>{y._markDirtyKey("startAngle")}),(this.isDirty("innerRadius")||this.isDirty("radius"))&&this.series.each(y=>{y._markDirtyKey("innerRadius")})}radius(t){let e=_.Iy(this.get("radius",0),this._maxRadius),i=_.Iy(this.get("innerRadius",0),e);if(t){let s=this.series.indexOf(t),r=this.series.length,l=t.get("radius");return null!=l?i+_.Iy(l,e-i):i+(e-i)/r*(s+1)}return e}innerRadius(t){const e=this.radius();let i=_.Iy(this.get("innerRadius",0),e);if(i<0&&(i=e+i),t){let s=this.series.indexOf(t),r=this.series.length,l=t.get("innerRadius");return null!=l?i+_.Iy(l,e-i):i+(e-i)/r*s}return i}}Object.defineProperty(w,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieChart"}),Object.defineProperty(w,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:j.classNames.concat([w.className])});var D=b(24837),M=b(55696),W=b(40397),z=b(79862),R=b(25905);class Q extends L{_makeSlices(){return new R.o(D.YS.new({}),()=>M.p._new(this._root,{themeTags:_.Fy(this.slices.template.get("themeTags",[]),["pie","series"])},[this.slices.template]))}_makeLabels(){return new R.o(D.YS.new({}),()=>z.x._new(this._root,{themeTags:_.Fy(this.labels.template.get("themeTags",[]),["pie","series"])},[this.labels.template]))}_makeTicks(){return new R.o(D.YS.new({}),()=>W.d._new(this._root,{themeTags:_.Fy(this.ticks.template.get("themeTags",[]),["pie","series"])},[this.ticks.template]))}processDataItem(t){super.processDataItem(t);const e=this.makeSlice(t);e.on("scale",()=>{this._updateTick(t)}),e.on("shiftRadius",()=>{this._updateTick(t)}),e.events.on("positionchanged",()=>{this._updateTick(t)});const i=this.makeLabel(t);i.events.on("positionchanged",()=>{this._updateTick(t)}),this.makeTick(t),e.events.on("positionchanged",()=>{i.markDirty()})}_getNextUp(){const t=this.chart;return t?t._maxRadius:this.labelsContainer.maxHeight()/2}_getNextDown(){const t=this.chart;return t?-t._maxRadius:-this.labelsContainer.maxHeight()/2}_prepareChildren(){super._prepareChildren();const t=this.chart;if(t){if(this.isDirty("alignLabels")){let e=this.labels.template;if(this.get("alignLabels"))e.set("textType","aligned");else{let i=e.get("textType");(null==i||"aligned"==i)&&e.set("textType","adjusted")}}if(this._valuesDirty||this.isDirty("radius")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("endAngle")||this.isDirty("alignLabels")){this.markDirtyBounds();const e=this.get("startAngle",t.get("startAngle",-90)),s=this.get("endAngle",t.get("endAngle",270))-e;let r=e;const l=t.radius(this);this.setPrivateRaw("radius",l);let a=t.innerRadius(this)*t.getPrivate("irModifyer",1);a<0&&(a=l+a),m.S6(this._dataItems,n=>{this.updateLegendValue(n);let g=s*n.get("valuePercentTotal")/100;const h=n.get("slice");if(h){h.set("radius",l),h.set("innerRadius",a),h.set("startAngle",r),h.set("arc",g);const y=n.get("fill");h._setDefault("fill",y),h._setDefault("stroke",y)}let p=A.LW(r+g/2);const u=n.get("label");if(u&&(u.setPrivate("radius",l),u.setPrivate("innerRadius",a),u.set("labelAngle",p),"aligned"==u.get("textType"))){let y=l+u.get("radius",0),x=l*A.O$(p);p>90&&p<=270?(!u.isHidden()&&!u.isHiding()&&this._lLabels.push({label:u,y:x}),y*=-1,y-=this.labelsContainer.get("paddingLeft",0),u.set("centerX",o.AQ),u.setPrivateRaw("left",!0)):(!u.isHidden()&&!u.isHiding()&&this._rLabels.push({label:u,y:x}),y+=this.labelsContainer.get("paddingRight",0),u.set("centerX",0),u.setPrivateRaw("left",!1)),u.set("x",y),u.set("y",l*A.O$(p))}r+=g,this._updateTick(n)})}}}_updateTick(t){const e=t.get("tick"),i=t.get("label"),s=t.get("slice"),r=e.get("location",1);if(e&&i&&s){const l=(s.get("shiftRadius",0)+s.get("radius",0))*s.get("scale",1)*r,a=i.get("labelAngle",0),n=A.mC(a),g=A.O$(a),h=this.labelsContainer,p=h.get("paddingLeft",0),u=h.get("paddingRight",0);let y=0,x=0;if(y=i.x(),x=i.y(),"circular"==i.get("textType")){const k=i.radius()-i.get("paddingBottom",0),N=i.get("labelAngle",0);y=k*A.mC(N),x=k*A.O$(N)}let f=-u;i.getPrivate("left")&&(f=p),e.set("points",[{x:s.x()+l*n,y:s.y()+l*g},{x:y+f,y:x},{x:y,y:x}])}}_positionBullet(t){const e=t.get("sprite");if(e){const s=e.dataItem.get("slice");if(s){const r=s.get("innerRadius",0),l=s.get("radius",0),p=s.get("startAngle",0)+s.get("arc",0)*t.get("locationX",.5),u=r+(l-r)*t.get("locationY",.5);e.setAll({x:A.mC(p)*u,y:A.O$(p)*u})}}}}Object.defineProperty(Q,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieSeries"}),Object.defineProperty(Q,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:L.classNames.concat([Q.className])});class E extends v.T{constructor(){super(...arguments),Object.defineProperty(this,"_projectionDirty",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_tlx",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_tly",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_trx",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_try",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_blx",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_bly",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_brx",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_bry",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_cprx",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_cplx",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_cpry",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_cply",{enumerable:!0,configurable:!0,writable:!0,value:0})}_afterNew(){super._afterNew(),this.set("draw",t=>{t.moveTo(this._tlx,this._tly),t.lineTo(this._trx,this._try),t.quadraticCurveTo(this._cprx,this._cpry,this._brx,this._bry),t.lineTo(this._blx,this._bly),t.quadraticCurveTo(this._cplx,this._cply,this._tlx,this._tly)})}getPoint(t,e){let i=this.width(),s=this.height();const r=this.get("topWidth",0),l=this.get("bottomWidth",0);if("vertical"==this.get("orientation")){let a=-r/2,n=r/2,p=a+(-l/2-a)*e;return{x:p+(n+(l/2-n)*e-p)*t,y:s*e}}{let a=-r/2,n=r/2,p=a+(-l/2-a)*t;return{x:i*t,y:p+(n+(l/2-n)*t-p)*e}}}_changed(){if(this.isDirty("topWidth")||this.isDirty("bottomWidth")||this.isDirty("expandDistance")||this.isDirty("orientation")||this.isDirty("width")||this.isDirty("height")){const t=this.width(),e=this.height(),i=this.get("topWidth",0),s=this.get("bottomWidth",0);this._clear=!0;let r=this.get("expandDistance",0);"vertical"==this.get("orientation")?(this._tlx=-i/2,this._tly=0,this._trx=i/2,this._try=0,this._brx=s/2,this._bry=e,this._blx=-s/2,this._bly=e,this._cprx=this._trx+(this._brx-this._trx)/2+r*e,this._cpry=this._try+.5*e,this._cplx=this._tlx+(this._blx-this._tlx)/2-r*e,this._cply=this._tly+.5*e):(this._tly=-i/2,this._tlx=0,this._try=i/2,this._trx=0,this._bry=s/2,this._brx=t,this._bly=-s/2,this._blx=t,this._cpry=this._try+(this._bry-this._try)/2+r*t,this._cprx=this._trx+.5*t,this._cply=this._tly+(this._bly-this._tly)/2-r*t,this._cplx=this._tlx+.5*t)}super._changed()}}Object.defineProperty(E,"className",{enumerable:!0,configurable:!0,writable:!0,value:"FunnelSlice"}),Object.defineProperty(E,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:v.T.classNames.concat([E.className])});var he=b(88303);class X extends L{constructor(){super(...arguments),Object.defineProperty(this,"_tag",{enumerable:!0,configurable:!0,writable:!0,value:"funnel"}),Object.defineProperty(this,"links",{enumerable:!0,configurable:!0,writable:!0,value:this._makeLinks()}),Object.defineProperty(this,"_total",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_count",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_nextCoord",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_opposite",{enumerable:!0,configurable:!0,writable:!0,value:!1})}_makeSlices(){return new R.o(D.YS.new({}),()=>E._new(this._root,{themeTags:_.Fy(this.slices.template.get("themeTags",[]),[this._tag,"series","slice",this.get("orientation")])},[this.slices.template]))}_makeLabels(){return new R.o(D.YS.new({}),()=>he._._new(this._root,{themeTags:_.Fy(this.labels.template.get("themeTags",[]),[this._tag,"series","label",this.get("orientation")])},[this.labels.template]))}_makeTicks(){return new R.o(D.YS.new({}),()=>W.d._new(this._root,{themeTags:_.Fy(this.ticks.template.get("themeTags",[]),[this._tag,"series","tick",this.get("orientation")])},[this.ticks.template]))}_makeLinks(){return new R.o(D.YS.new({}),()=>E._new(this._root,{themeTags:_.Fy(this.links.template.get("themeTags",[]),[this._tag,"series","link",this.get("orientation")])},[this.links.template]))}makeLink(t){const e=this.slicesContainer.children.push(this.links.make());return e._setDataItem(t),t.set("link",e),this.links.push(e),e}_afterNew(){super._afterNew();const t=this.slicesContainer;t.setAll({isMeasured:!0,position:"relative",width:(0,o.aQ)(100),height:(0,o.aQ)(100)}),t.onPrivate("width",()=>{this.markDirtySize()}),t.onPrivate("height",()=>{this.markDirtySize()}),"vertical"==this.get("orientation")?this.set("layout",this._root.horizontalLayout):this.set("layout",this._root.verticalLayout)}processDataItem(t){super.processDataItem(t);const e=this.makeSlice(t);e._setDataItem(t),t.set("slice",e),this.makeLink(t);const i=this.makeLabel(t);i.on("x",()=>{this._updateTick(t)}),i.on("y",()=>{this._updateTick(t)}),this.makeTick(t),e.events.on("positionchanged",()=>{i.markDirty()}),e.events.on("boundschanged",()=>{const s=e.dataItem;s&&this._updateTick(s)})}_updateChildren(){this._opposite=!1,0==this.children.indexOf(this.labelsContainer)&&(this._opposite=!0);let t=0,e=0;if(m.S6(this.dataItems,i=>{const s=i.get("value");C.hj(s)&&(e++,s>0?t+=Math.abs(i.get("valueWorking",s)/s):this.get("ignoreZeroValues",!1)||i.isHidden()?e--:t+=1)}),this._total=1/e*t,this._count=e,this.isDirty("alignLabels")&&this._fixLayout(),this._total>0&&(this._valuesDirty||this._sizeDirty)){const i=this.slicesContainer;let s;s="vertical"==this.get("orientation")?i.innerHeight():i.innerWidth(),this._nextCoord=this.get("startLocation",0)*s,this.markDirtyBounds();let r=0;m.S6(this._dataItems,l=>{this.updateLegendValue(l),l.set("index",r),r++;const a=l.get("slice"),n=l.get("tick"),g=l.get("label"),h=l.get("link"),p=l.get("fill");a._setDefault("fill",p),a._setDefault("stroke",p),h._setDefault("fill",p),h._setDefault("stroke",p);const u=l.get("value");C.hj(u)&&(0==u&&this.get("ignoreZeroValues")?(a.setPrivate("visible",!1),n.setPrivate("visible",!1),g.setPrivate("visible",!1)):(a.setPrivate("visible",!0),n.setPrivate("visible",!0),g.setPrivate("visible",!0),this.decorateSlice(l),this.isLast(l)?h.setPrivate("visible",!1):l.isHidden()||h.setPrivate("visible",!0)))})}super._updateChildren()}_fixLayout(){const t=this.get("orientation"),e=this.labelsContainer,i=this.labels.template;this.get("alignLabels")?(e.set("position","relative"),e.setAll({isMeasured:!0}),"vertical"==t?(this.set("layout",this._root.horizontalLayout),i.setAll({centerX:o.AQ,x:o.AQ})):(this.set("layout",this._root.verticalLayout),i.setAll({centerX:0,x:0}))):(e.setAll({isMeasured:!1,position:"absolute"}),"vertical"==t?(e.setAll({x:o.CI}),i.setAll({centerX:o.CI,x:0})):(e.setAll({y:o.CI}),i.setAll({centerX:o.CI,y:0}))),this.markDirtySize()}getNextValue(t){let e=t.get("index"),i=t.get("valueWorking",0);if(e<this.dataItems.length-1){let s=this.dataItems[e+1];if(i=s.get("valueWorking",0),s.isHidden()||0==s.get("value")&&this.get("ignoreZeroValues"))return this.getNextValue(s)}return i}isLast(t){let e=t.get("index");if(e==this.dataItems.length-1)return!0;for(let i=e+1;i<this.dataItems.length;i++)if(!this.dataItems[i].isHidden())return!1;return!0}decorateSlice(t){const e=this.get("orientation"),i=t.get("slice"),s=t.get("label"),r=t.get("link"),l=this.slicesContainer;let a=l.innerWidth(),n=l.innerHeight(),g=a;"horizontal"==e&&(g=n);const h=this.getNextValue(t),p=t.get("value",0),u=Math.abs(t.get("valueWorking",p)),y=this.get("bottomRatio",0),x=this.getPrivate("valueHigh",0);let f=1;0!=p?f=u/Math.abs(p):t.isHidden()&&(f=1e-6),this._nextCoord==1/0&&(this._nextCoord=0);let N=(u-(u-h)*y)/x*g;i.setAll({topWidth:u/x*g,bottomWidth:N,orientation:e}),r.setAll({topWidth:N,bottomWidth:(u-(u-h))/x*g,orientation:e});const B=this.get("startLocation",0),$=this.get("endLocation",1);if("vertical"==e){let O=r.height()*f;n=n*($-B)+O,i.set("y",this._nextCoord);let I=Math.min(1e5,Math.max(0,n/this._count*f/this._total-O));i.setAll({height:I,x:a/2}),s.set("y",this._nextCoord+I/2),this._nextCoord+=I+O,r.setAll({y:this._nextCoord-O,x:a/2})}else{let O=r.width()*f;a=a*($-B)+O,i.set("x",this._nextCoord);let I=Math.min(1e5,Math.max(0,a/this._count*f/this._total-O));i.setAll({width:I,y:n/2}),s.set("x",this._nextCoord+I/2),this._nextCoord+=I+O,r.setAll({x:this._nextCoord-O,y:n/2})}}hideDataItem(t,e){const i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return(0,P.mG)(this,void 0,void 0,function*(){return t.get("link").hide(e),i.hideDataItem.call(this,t,e)})}showDataItem(t,e){const i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return(0,P.mG)(this,void 0,void 0,function*(){return t.get("link").show(e),i.showDataItem.call(this,t,e)})}_updateTick(t){if(this.get("alignLabels")){const e=t.get("tick"),i=t.get("label"),s=t.get("slice");if(e&&s&&i){const r=this.labelsContainer,l=this.slicesContainer;let a=e.get("location",.5);const n=r.width(),g=r.height(),h=r.get("paddingLeft",0),p=r.get("paddingRight",0),u=r.get("paddingTop",0),y=r.get("paddingBottom",0);let x={x:0,y:0},f={x:0,y:0},k={x:0,y:0};this._opposite&&(a=1-a),"vertical"==this.get("orientation")?(x=s.getPoint(a,.5),x.x+=s.x()+l.x(),x.y+=s.y()+l.y(),this._opposite?(f.x=n,f.y=i.y(),k.x=n-h,k.y=f.y):(f.x=l.x()+l.width(),f.y=i.y(),k.x=f.x+n-i.width()-p,k.y=f.y)):(x=s.getPoint(.5,a),x.x+=s.x()+l.x(),x.y+=s.y()+l.y(),this._opposite?(f.y=g,f.x=i.x(),k.y=g-u,k.x=f.x):(f.y=l.y()+l.height(),f.x=i.x(),k.y=f.y+g-i.height()-y,k.x=f.x)),e.set("points",[x,f,k])}}}disposeDataItem(t){super.disposeDataItem(t);let e=t.get("link");e&&(this.links.removeValue(e),e.dispose())}_positionBullet(t){const e=t.get("sprite");if(e){const s=e.dataItem.get("slice");if(s){const r=s.width(),l=s.height(),a=t.get("locationX",.5),n=t.get("locationY",.5);let g=0,h=0;"horizontal"==this.get("orientation")?h=l/2:g=r/2,e.setAll({x:s.x()+r*a-g,y:s.y()-h+l*n})}}}}Object.defineProperty(X,"className",{enumerable:!0,configurable:!0,writable:!0,value:"FunnelSeries"}),Object.defineProperty(X,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:L.classNames.concat([X.className])});class K extends X{constructor(){super(...arguments),Object.defineProperty(this,"_tag",{enumerable:!0,configurable:!0,writable:!0,value:"pyramid"}),Object.defineProperty(this,"_nextSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}_prepareChildren(){super._prepareChildren(),this._nextSize=void 0}decorateSlice(t){const e=this.get("orientation"),i=this.slicesContainer,s=t.get("slice"),r=t.get("label"),l=t.get("link"),a=this.get("valueIs","area"),n=this.getPrivate("valueAbsoluteSum",0);if(0==n)return;const g=this.get("startLocation",0),h=this.get("endLocation",1),p=this.get("topWidth",0),u=this.get("bottomWidth",o.AQ),y=Math.abs(t.get("valueWorking",0)),x=t.get("value",0);let f,k,N=i.innerHeight(),B=i.innerWidth(),$=l.width(),O=l.height();"horizontal"==e&&([B,N]=[N,B],[$,O]=[O,$]);const I=B/2;let Y=1;0!=x?Y=y/Math.abs(x):t.isHidden()&&(Y=1e-6),O*=Y,N=N*(h-g)-O*(this._count*this._total-1);let re=_.Iy(p,B);C.hj(this._nextSize)||(this._nextSize=re);let oe=_.Iy(u,B),U=this._nextSize,ce=Math.atan2(N,re-oe),Z=Math.tan(Math.PI/2-ce);if(0==Z&&(Z=1e-8),"area"==a){let ue=(re+oe)/2*N*y/n,de=Math.abs(U*U-2*ue*Z);f=(U-Math.sqrt(de))/Z,k=f>0?(2*ue-f*U)/f:U}else f=N*y/n,k=U-f*Z;let ie=this._nextCoord+f/2,le=I,se=this._nextCoord,ae=I,ne=se+f;"vertical"==e?(r.set("y",ie),r.get("opacity")>0&&this._rLabels.push({label:r,y:ie}),s.set("height",f)):(r.set("x",ie),r.get("opacity")>0&&this._hLabels.push({label:r,y:ie}),[le,se]=[se,le],[ae,ne]=[ne,ae],s.set("width",f)),s.setAll({orientation:e,bottomWidth:k,topWidth:U,x:le,y:se}),l.setAll({orientation:e,x:ae,y:ne,topWidth:k,bottomWidth:k}),this._nextSize=k,this._nextCoord+=f+O}}Object.defineProperty(K,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PyramidSeries"}),Object.defineProperty(K,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:X.classNames.concat([K.className])});class ee extends K{constructor(){super(...arguments),Object.defineProperty(this,"_tag",{enumerable:!0,configurable:!0,writable:!0,value:"pictorial"}),Object.defineProperty(this,"seriesMask",{enumerable:!0,configurable:!0,writable:!0,value:v.T.new(this._root,{position:"absolute",x:o.CI,y:o.CI,centerX:o.CI,centerY:o.CI})}),Object.defineProperty(this,"seriesGraphics",{enumerable:!0,configurable:!0,writable:!0,value:this.slicesContainer.children.push(v.T.new(this._root,{themeTags:["pictorial","background"],position:"absolute",x:o.CI,y:o.CI,centerX:o.CI,centerY:o.CI}))})}_afterNew(){super._afterNew(),this.set("topWidth",o.AQ),this.set("bottomWidth",o.AQ),this.set("valueIs","height"),this.slicesContainer.set("mask",this.seriesMask)}_updateScale(){let t=this.slicesContainer,e=t.innerWidth(),i=t.innerHeight(),s=this.seriesMask,r=this.seriesGraphics,l=s.get("scale",1);const a=s.localBounds();let n=a.right-a.left,g=a.bottom-a.top;l="horizontal"==this.get("orientation")?e/n:i/g,l!=1/0&&NaN!=l&&(s.set("scale",l),s.set("x",e/2),s.set("y",i/2),r.set("scale",l),r.set("x",e/2),r.set("y",i/2))}_prepareChildren(){if(super._prepareChildren(),this.isDirty("svgPath")){const t=this.get("svgPath");this.seriesMask.set("svgPath",t),this.seriesGraphics.set("svgPath",t)}this._updateScale()}}Object.defineProperty(ee,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PictorialStackedSeries"}),Object.defineProperty(ee,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:K.classNames.concat([ee.className])});class te extends j{_afterNew(){super._afterNew(),this.seriesContainer.setAll({isMeasured:!0,layout:this._root.horizontalLayout})}}Object.defineProperty(te,"className",{enumerable:!0,configurable:!0,writable:!0,value:"SlicedChart"}),Object.defineProperty(te,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:j.classNames.concat([te.className])})}}]);
(self.webpackChunkplugin_amcharts5=self.webpackChunkplugin_amcharts5||[]).push([[3866],{65235:(f,o,r)=>{r.d(o,{w:()=>d,z:()=>a});var u=r(84911),h=r(79522),_=r(38489),m=r(39011),s=r(15784),n=r(17679);class a extends h.Zr{constructor(e,t,i){super(i),Object.defineProperty(this,"component",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dataContext",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"open",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"close",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.dataContext=t,this.component=e,this._settings.visible=!0,this._checkDirty()}markDirty(){this.component.markDirtyValues(this)}_startAnimation(){this.component._root._addAnimation(this)}_animationTime(){return this.component._root.animationTime}_dispose(){this.component&&this.component.disposeDataItem(this),super._dispose()}show(e){this.setRaw("visible",!0),this.component&&this.component.showDataItem(this,e)}hide(e){this.setRaw("visible",!1),this.component&&this.component.hideDataItem(this,e)}isHidden(){return!this.get("visible")}}class d extends _.W{constructor(){super(...arguments),Object.defineProperty(this,"_data",{enumerable:!0,configurable:!0,writable:!0,value:new m.k}),Object.defineProperty(this,"_dataItems",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_mainDataItems",{enumerable:!0,configurable:!0,writable:!0,value:this._dataItems}),Object.defineProperty(this,"valueFields",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"fields",{enumerable:!0,configurable:!0,writable:!0,value:["id"]}),Object.defineProperty(this,"_valueFields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valueFieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valuesDirty",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataChanged",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataGrouped",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"inited",{enumerable:!0,configurable:!0,writable:!0,value:!1})}set data(e){e.incrementRef(),this._data.decrementRef(),this._data=e}get data(){return this._data}_dispose(){super._dispose(),this._data.decrementRef()}_onDataClear(){}_afterNew(){super._afterNew(),this._data.incrementRef(),this._updateFields(),this._disposers.push(this.data.events.onAll(e=>{const t=this._mainDataItems;if(this.markDirtyValues(),this._markDirtyGroup(),this._dataChanged=!0,"clear"===e.type)s.S6(t,i=>{i.dispose()}),t.length=0,this._onDataClear();else if("push"===e.type){const i=new a(this,e.newValue,this._makeDataItem(e.newValue));t.push(i),this.processDataItem(i)}else if("setIndex"===e.type){const i=t[e.index],l=this._makeDataItem(e.newValue);i.bullets&&0==i.bullets.length&&(i.bullets=void 0),n.XP(l).forEach(c=>{i.animate({key:c,to:l[c],duration:this.get("interpolationDuration",0),easing:this.get("interpolationEasing")})}),i.dataContext=e.newValue}else if("insertIndex"===e.type){const i=new a(this,e.newValue,this._makeDataItem(e.newValue));t.splice(e.index,0,i),this.processDataItem(i)}else if("removeIndex"===e.type)t[e.index].dispose(),t.splice(e.index,1);else{if("moveIndex"!==e.type)throw new Error("Unknown IStreamEvent type");{const i=t[e.oldIndex];t.splice(e.oldIndex,1),t.splice(e.newIndex,0,i)}}this._afterDataChange()}))}_updateFields(){this.valueFields&&(this._valueFields=[],this._valueFieldsF={},s.S6(this.valueFields,e=>{this.get(e+"Field")&&(this._valueFields.push(e),this._valueFieldsF[e]={fieldKey:e+"Field",workingKey:e+"Working"})})),this.fields&&(this._fields=[],this._fieldsF={},s.S6(this.fields,e=>{this.get(e+"Field")&&(this._fields.push(e),this._fieldsF[e]=e+"Field")}))}get dataItems(){return this._dataItems}processDataItem(e){}_makeDataItem(e){const t={};return this._valueFields&&s.S6(this._valueFields,i=>{const l=this.get(this._valueFieldsF[i].fieldKey);t[i]=e[l],t[this._valueFieldsF[i].workingKey]=t[i]}),this._fields&&s.S6(this._fields,i=>{const l=this.get(this._fieldsF[i]);t[i]=e[l]}),t}makeDataItem(e){let t=new a(this,void 0,e);return this.processDataItem(t),t}pushDataItem(e){const t=this.makeDataItem(e);return this._mainDataItems.push(t),t}disposeDataItem(e){}showDataItem(e,t){return(0,u.mG)(this,void 0,void 0,function*(){e.set("visible",!0)})}hideDataItem(e,t){return(0,u.mG)(this,void 0,void 0,function*(){e.set("visible",!1)})}_clearDirty(){super._clearDirty(),this._valuesDirty=!1}_afterDataChange(){}_afterChanged(){if(super._afterChanged(),this._dataChanged){const e="datavalidated";this.events.isEnabled(e)&&this.events.dispatch(e,{type:e,target:this}),this._dataChanged=!1}this.inited=!0}markDirtyValues(e){this.markDirty(),this._valuesDirty=!0}_markDirtyGroup(){this._dataGrouped=!1}markDirtySize(){this._sizeDirty=!0,this.markDirty()}}Object.defineProperty(d,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Component"}),Object.defineProperty(d,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:_.W.classNames.concat([d.className])})},39011:(f,o,r)=>{r.d(o,{k:()=>h});var u=r(25905);class h extends u.aV{constructor(){super(...arguments),Object.defineProperty(this,"processor",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}incrementRef(){}decrementRef(){}_onPush(s){this.processor&&this.processor.processRow(s),super._onPush(s)}_onInsertIndex(s,n){this.processor&&this.processor.processRow(n),super._onInsertIndex(s,n)}_onSetIndex(s,n,a){this.processor&&this.processor.processRow(a),super._onSetIndex(s,n,a)}}},15512:(f,o,r)=>{r.d(o,{Serializer:()=>u.e});var u=r(5811)}}]);
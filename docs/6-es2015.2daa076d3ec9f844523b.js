(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{lxFx:function(t,e,n){"use strict";n.r(e),n.d(e,"TodoDetailModule",function(){return bt});var i=n("ofXK"),s=n("tyNb"),r=n("fXoL"),o=n("tadm"),a=n("Cfvw"),l=n("HDdC"),h=n("DH7j"),u=n("lJxs"),d=n("XoHu");function c(t,e){return new l.a(n=>{const i=t.length;if(0===i)return void n.complete();const s=new Array(i);let r=0,o=0;for(let l=0;l<i;l++){const h=Object(a.a)(t[l]);let u=!1;n.add(h.subscribe({next:t=>{u||(u=!0,o++),s[l]=t},error:t=>n.error(t),complete:()=>{r++,r!==i&&u||(o===i&&n.next(e?e.reduce((t,e,n)=>(t[e]=s[n],t),{}):s),n.complete())}}))}})}const p=new r.r("NgValueAccessor"),g={provide:p,useExisting:Object(r.T)(()=>_),multi:!0},b=new r.r("CompositionEventMode");let _=(()=>{class t{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=Object(i.o)()?Object(i.o)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(r.E),r.Jb(r.l),r.Jb(b,8))},t.\u0275dir=r.Eb({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&r.Tb("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[r.yb([g])]}),t})();function m(t){return null==t||0===t.length}const f=new r.r("NgValidators"),y=new r.r("NgAsyncValidators");function C(t){return null}function V(t){return null!=t}function v(t){const e=Object(r.qb)(t)?Object(a.a)(t):t;return Object(r.pb)(e),e}function A(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function E(t,e){return e.map(e=>e(t))}function w(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function O(t){return null!=t?function(t){if(!t)return null;const e=t.filter(V);return 0==e.length?null:function(t){return A(E(t,e))}}(w(t)):null}function M(t){return null!=t?function(t){if(!t)return null;const e=t.filter(V);return 0==e.length?null:function(t){return function(...t){if(1===t.length){const e=t[0];if(Object(h.a)(e))return c(e,null);if(Object(d.a)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return c(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return c(t=1===t.length&&Object(h.a)(t[0])?t[0]:t,null).pipe(Object(u.a)(t=>e(...t)))}return c(t,null)}(E(t,e).map(v)).pipe(Object(u.a)(A))}}(w(t)):null}function D(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}let S=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=O(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=M(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Eb({type:t}),t})(),k=(()=>{class t extends S{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(e){return T(e||t)},t.\u0275dir=r.Eb({type:t,features:[r.wb]}),t})();const T=r.Ob(k);class N extends S{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class L{constructor(t){this._cd=t}is(t){var e,n;return!!(null===(n=null===(e=this._cd)||void 0===e?void 0:e.control)||void 0===n?void 0:n[t])}}let P=(()=>{class t extends L{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(N,2))},t.\u0275dir=r.Eb({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&r.Bb("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[r.wb]}),t})(),I=(()=>{class t extends L{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(k,10))},t.\u0275dir=r.Eb({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:14,hostBindings:function(t,e){2&t&&r.Bb("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[r.wb]}),t})();function x(t,e){F(t,e,!0),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&q(t,e)})}(t,e),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&q(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e)}function j(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function F(t,e,n){const i=function(t){return t._rawValidators}(t);null!==e.validator?t.setValidators(D(i,e.validator)):"function"==typeof i&&t.setValidators([i]);const s=function(t){return t._rawAsyncValidators}(t);if(null!==e.asyncValidator?t.setAsyncValidators(D(s,e.asyncValidator)):"function"==typeof s&&t.setAsyncValidators([s]),n){const n=()=>t.updateValueAndValidity();j(e._rawValidators,n),j(e._rawAsyncValidators,n)}}function q(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function U(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}function B(t){return(R(t)?t.validators:t)||null}function G(t){return Array.isArray(t)?O(t):t||null}function J(t,e){return(R(e)?e.asyncValidators:t)||null}function z(t){return Array.isArray(t)?M(t):t||null}function R(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class W{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=G(this._rawValidators),this._composedAsyncValidatorFn=z(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return"VALID"===this.status}get invalid(){return"INVALID"===this.status}get pending(){return"PENDING"==this.status}get disabled(){return"DISABLED"===this.status}get enabled(){return"DISABLED"!==this.status}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=G(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=z(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status="PENDING",!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="DISABLED",this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status="VALID",this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),"VALID"!==this.status&&"PENDING"!==this.status||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?"DISABLED":"VALID"}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status="PENDING",this._hasOwnPendingAsyncValidator=!0;const e=v(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let i=t;return e.forEach(t=>{i=i instanceof Z?i.controls.hasOwnProperty(t)?i.controls[t]:null:i instanceof $&&i.at(t)||null}),i}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.n,this.statusChanges=new r.n}_calculateStatus(){return this._allControlsDisabled()?"DISABLED":this.errors?"INVALID":this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus("PENDING")?"PENDING":this._anyControlsHaveStatus("INVALID")?"INVALID":"VALID"}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){R(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class H extends W{constructor(t=null,e,n){super(B(e),J(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){U(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){U(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class Z extends W{constructor(t,e,n){super(B(e),J(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,i)=>{n.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof H?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,i)=>{n=e(n,t,i)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class $ extends W{constructor(t,e,n){super(B(e),J(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,i)=>{n.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof H?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const X={provide:k,useExisting:Object(r.T)(()=>Q)},K=(()=>Promise.resolve(null))();let Q=(()=>{class t extends k{constructor(t,e){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new r.n,this.form=new Z({},O(t),M(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){K.then(()=>{const e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),x(t.control,t),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){K.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name),U(this._directives,t)})}addFormGroup(t){K.then(()=>{const e=this._findContainer(t.path),n=new Z({});(function(t,e){F(t,e,!1)})(n,t),e.registerControl(t.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){K.then(()=>{const e=this._findContainer(t.path);e&&e.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){K.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,e=this._directives,this.form._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)}),this.ngSubmit.emit(t),!1;var e}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(f,10),r.Jb(y,10))},t.\u0275dir=r.Eb({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,e){1&t&&r.Tb("submit",function(t){return e.onSubmit(t)})("reset",function(){return e.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r.yb([X]),r.wb]}),t})();const Y={provide:N,useExisting:Object(r.T)(()=>et)},tt=(()=>Promise.resolve(null))();let et=(()=>{class t extends N{constructor(t,e,n,i){super(),this.control=new H,this._registered=!1,this.update=new r.n,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=function(t,e){if(!e)return null;let n,i,s;return Array.isArray(e),e.forEach(t=>{t.constructor===_?n=t:Object.getPrototypeOf(t.constructor)===class{}?i=t:s=t}),s||i||n||null}(0,i)}ngOnChanges(t){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in t&&this._updateDisabled(t),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?[...this._parent.path,this.name]:[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){x(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){tt.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1})})}_updateDisabled(t){const e=t.isDisabled.currentValue,n=""===e||e&&"false"!==e;tt.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable()})}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(k,9),r.Jb(f,10),r.Jb(y,10),r.Jb(p,10))},t.\u0275dir=r.Eb({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[r.yb([Y]),r.wb,r.xb]}),t})(),nt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Eb({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})(),it=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({}),t})();const st={provide:f,useExisting:Object(r.T)(()=>rt),multi:!0};let rt=(()=>{class t{constructor(){this._required=!1}get required(){return this._required}set required(t){this._required=null!=t&&!1!==t&&"false"!=`${t}`,this._onChange&&this._onChange()}validate(t){return this.required?function(t){return m(t.value)?{required:!0}:null}(t):null}registerOnValidatorChange(t){this._onChange=t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Eb({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(t,e){2&t&&r.Ab("required",e.required?"":null)},inputs:{required:"required"},features:[r.yb([st])]}),t})();const ot={provide:f,useExisting:Object(r.T)(()=>at),multi:!0};let at=(()=>{class t{constructor(){this._validator=C}ngOnChanges(t){"pattern"in t&&(this._createValidator(),this._onChange&&this._onChange())}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}_createValidator(){this._validator=function(t){if(!t)return C;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(m(t.value))return null;const i=t.value;return e.test(i)?null:{pattern:{requiredPattern:n,actualValue:i}}}}(this.pattern)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Eb({type:t,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(t,e){2&t&&r.Ab("pattern",e.pattern?e.pattern:null)},inputs:{pattern:"pattern"},features:[r.yb([ot]),r.xb]}),t})(),lt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[[it]]}),t})(),ht=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[lt]}),t})();function ut(t,e){1&t&&(r.Mb(0,"div"),r.ec(1," Email is required. "),r.Lb())}function dt(t,e){1&t&&(r.Mb(0,"div"),r.ec(1," The email address you have entered is invalid. please try again."),r.Lb())}function ct(t,e){if(1&t&&(r.Mb(0,"div",27),r.dc(1,ut,2,0,"div",28),r.dc(2,dt,2,0,"div",28),r.Lb()),2&t){r.Vb();const t=r.Zb(36);r.zb(1),r.Wb("ngIf",null==t.errors?null:t.errors.required),r.zb(1),r.Wb("ngIf",null==t.errors?null:t.errors.pattern)}}const pt=[{path:"",component:(()=>{class t{constructor(t,e,n){this.activatedRoute=t,this.router=e,this.todoService=n,this.todoDetail={}}ngOnInit(){this.activatedRoute.queryParams.subscribe(t=>{this.todoId=t.id,void 0!==this.todoId?(console.log(this.todoId),this.getTodoDetailById(this.todoId),this.mode="Edit"):(console.log(this.todoId),this.todoDetail.id=0,this.mode="Add")})}getTodoDetailById(t){this.todoDetail=this.todoService.getTodoById(parseInt(t)),console.log(this.todoDetail)}onTodoSubmitForm(t){console.log(t),t.valid&&(this.todoService.updateTodoById(this.todoDetail),this.router.navigate(["/todo-list"]))}onClickCancel(){this.router.navigate(["/todo-list"])}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(s.a),r.Jb(s.b),r.Jb(o.a))},t.\u0275cmp=r.Db({type:t,selectors:[["app-todo-detail"]],decls:52,vars:11,consts:[[1,"col-sm-12","pt-5"],[1,"col-md-12"],["id","todoForm","novalidat","",3,"ngSubmit"],["todoForm","ngForm"],[1,"scheduler-border"],[1,"form-group","row"],["for","firstName",1,"col-md-2","col-form-label"],[1,"col-md-5"],["type","text","name","firstName","placeholder","First Name","required","",1,"form-control",3,"ngModel","ngModelChange"],["firstName","ngModel"],[1,"text-danger",3,"hidden"],["for","middleName",1,"col-md-2","col-form-label"],["type","text","name","middleName","placeholder","Middel Name","required","",1,"form-control",3,"ngModel","ngModelChange"],["middleName","ngModel"],["for","lastName",1,"col-md-2","col-form-label"],["type","text","name","lastName","placeholder","Last Name","required","",1,"form-control",3,"ngModel","ngModelChange"],["lastName","ngModel"],["for","email",1,"col-md-2","col-form-label"],["type","email","name","email","placeholder","Email","pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$","required","",1,"form-control",3,"ngModel","ngModelChange"],["email","ngModel"],["class","text-danger",4,"ngIf"],["for","phone",1,"col-md-2","col-form-label"],["type","text","name","phone","placeholder","Phone","required","",1,"form-control",3,"ngModel","ngModelChange"],["phone","ngModel"],[1,"col-md-7","text-right"],["type","submit",1,"btn","btn-primary","mr-2"],["type","button",1,"btn","btn-primary",3,"click"],[1,"text-danger"],[4,"ngIf"]],template:function(t,e){if(1&t){const t=r.Nb();r.Mb(0,"div",0),r.Mb(1,"div",1),r.Mb(2,"form",2,3),r.Tb("ngSubmit",function(){r.ac(t);const n=r.Zb(3);return e.onTodoSubmitForm(n)}),r.Mb(4,"fieldset",4),r.Mb(5,"legend",4),r.ec(6),r.Lb(),r.Mb(7,"div",5),r.Mb(8,"label",6),r.ec(9,"First Name"),r.Lb(),r.Mb(10,"div",7),r.Mb(11,"input",8,9),r.Tb("ngModelChange",function(t){return e.todoDetail.firstName=t}),r.Lb(),r.Mb(13,"div",10),r.ec(14," First name is required. "),r.Lb(),r.Lb(),r.Lb(),r.Mb(15,"div",5),r.Mb(16,"label",11),r.ec(17,"Middel Name"),r.Lb(),r.Mb(18,"div",7),r.Mb(19,"input",12,13),r.Tb("ngModelChange",function(t){return e.todoDetail.middleName=t}),r.Lb(),r.Mb(21,"div",10),r.ec(22," Middle name is required. "),r.Lb(),r.Lb(),r.Lb(),r.Mb(23,"div",5),r.Mb(24,"label",14),r.ec(25,"Last Name"),r.Lb(),r.Mb(26,"div",7),r.Mb(27,"input",15,16),r.Tb("ngModelChange",function(t){return e.todoDetail.lastName=t}),r.Lb(),r.Mb(29,"div",10),r.ec(30," Last name is required. "),r.Lb(),r.Lb(),r.Lb(),r.Mb(31,"div",5),r.Mb(32,"label",17),r.ec(33,"Email"),r.Lb(),r.Mb(34,"div",7),r.Mb(35,"input",18,19),r.Tb("ngModelChange",function(t){return e.todoDetail.email=t}),r.Lb(),r.dc(37,ct,3,2,"div",20),r.Lb(),r.Lb(),r.Mb(38,"div",5),r.Mb(39,"label",21),r.ec(40,"Phone"),r.Lb(),r.Mb(41,"div",7),r.Mb(42,"input",22,23),r.Tb("ngModelChange",function(t){return e.todoDetail.phone=t}),r.Lb(),r.Mb(44,"div",10),r.ec(45," Phone is required. "),r.Lb(),r.Lb(),r.Lb(),r.Mb(46,"div",5),r.Mb(47,"div",24),r.Mb(48,"button",25),r.ec(49,"Save"),r.Lb(),r.Mb(50,"button",26),r.Tb("click",function(){return e.onClickCancel()}),r.ec(51,"Cancel"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()}if(2&t){const t=r.Zb(3),n=r.Zb(12),i=r.Zb(20),s=r.Zb(28),o=r.Zb(36),a=r.Zb(43);r.zb(6),r.gc("",e.mode," Todo"),r.zb(5),r.Wb("ngModel",e.todoDetail.firstName),r.zb(2),r.Wb("hidden",n.valid||n.pristine&&!t.submitted),r.zb(6),r.Wb("ngModel",e.todoDetail.middleName),r.zb(2),r.Wb("hidden",i.valid||i.pristine&&!t.submitted),r.zb(6),r.Wb("ngModel",e.todoDetail.lastName),r.zb(2),r.Wb("hidden",s.valid||s.pristine&&!t.submitted),r.zb(6),r.Wb("ngModel",e.todoDetail.email),r.zb(2),r.Wb("ngIf",o.invalid&&(o.dirty||o.touched||t.submitted)),r.zb(5),r.Wb("ngModel",e.todoDetail.phone),r.zb(2),r.Wb("hidden",a.valid||a.pristine&&!t.submitted)}},directives:[nt,I,Q,_,rt,P,et,at,i.i],styles:[""]}),t})()}];let gt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[[s.e.forChild(pt)],s.e]}),t})(),bt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({providers:[o.a],imports:[[i.b,ht,gt]]}),t})()}}]);
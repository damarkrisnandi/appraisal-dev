import{a as ne}from"./chunk-AIVTLASU.js";import{a as ee,c as ie}from"./chunk-AUJU2NY4.js";import{ua as Y,va as y,wa as Z}from"./chunk-22342MAH.js";import{$b as q,Bb as h,Cb as g,Db as O,Eb as x,Fb as I,Hb as f,Ib as d,Jb as r,Kb as R,Lb as B,Mb as T,Ob as w,Oc as U,Pb as k,Rc as G,Sb as N,Tb as Q,Tc as W,Ub as K,Va as D,Xc as X,Ya as p,Z as $,_ as M,_b as L,da as E,ha as V,ia as S,jb as F,lb as j,nc as J,ob as m,qa as P,qb as _,ra as s,rb as c,sa as l,sb as z,ua as C,ub as A,vb as u,xc as H,za as b}from"./chunk-QSF35MWG.js";var oe=({dt:e})=>`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${e("chip.background")};
    color: ${e("chip.color")};
    border-radius: ${e("chip.border.radius")};
    padding: ${e("chip.padding.y")} ${e("chip.padding.x")};
    gap: ${e("chip.gap")};
}

.p-chip-icon {
    color: ${e("chip.icon.color")};
    font-size: ${e("chip.icon.font.size")};
    width: ${e("chip.icon.size")};
    height: ${e("chip.icon.size")};
}

.p-chip-image {
    border-radius: 50%;
    width: ${e("chip.image.width")};
    height: ${e("chip.image.height")};
    margin-left: calc(-1 * ${e("chip.padding.y")});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: ${e("chip.padding.y")};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${e("chip.padding.y")} / 2);
    padding-bottom: calc(${e("chip.padding.y")} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: ${e("chip.remove.icon.font.size")};
    width: ${e("chip.remove.icon.size")};
    height: ${e("chip.remove.icon.size")};
    color: ${e("chip.remove.icon.color")};
    border-radius: 50%;
    transition: outline-color ${e("chip.transition.duration")}, box-shadow ${e("chip.transition.duration")};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${e("chip.remove.icon.focus.ring.shadow")};
    outline: ${e("chip.remove.icon.focus.ring.width")} ${e("chip.remove.icon.focus.ring.style")} ${e("chip.remove.icon.focus.ring.color")};
    outline-offset: ${e("chip.remove.icon.focus.ring.offset")};
}
`,re={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},te=(()=>{class e extends ee{name="chip";theme=oe;classes=re;static \u0275fac=(()=>{let i;return function(t){return(i||(i=C(e)))(t||e)}})();static \u0275prov=$({token:e,factory:e.\u0275fac})}return e})();var ce=["removeicon"],ae=["*"];function pe(e,a){if(e&1){let i=f();h(0,"img",4),d("error",function(t){s(i);let o=r();return l(o.imageError(t))}),g()}if(e&2){let i=r();c("src",i.image,D)("alt",i.alt)}}function se(e,a){if(e&1&&O(0,"span",6),e&2){let i=r(2);u(i.icon),c("ngClass","p-chip-icon"),_("data-pc-section","icon")}}function le(e,a){if(e&1&&m(0,se,1,4,"span",5),e&2){let i=r();c("ngIf",i.icon)}}function me(e,a){if(e&1&&(h(0,"div",7),Q(1),g()),e&2){let i=r();_("data-pc-section","label"),p(),K(i.label)}}function _e(e,a){if(e&1){let i=f();h(0,"span",11),d("click",function(t){s(i);let o=r(3);return l(o.close(t))})("keydown",function(t){s(i);let o=r(3);return l(o.onKeydown(t))}),g()}if(e&2){let i=r(3);u(i.removeIcon),c("ngClass","p-chip-remove-icon"),_("data-pc-section","removeicon")("aria-label",i.removeAriaLabel)}}function he(e,a){if(e&1){let i=f();h(0,"TimesCircleIcon",12),d("click",function(t){s(i);let o=r(3);return l(o.close(t))})("keydown",function(t){s(i);let o=r(3);return l(o.onKeydown(t))}),g()}if(e&2){let i=r(3);u("p-chip-remove-icon"),_("data-pc-section","removeicon")("aria-label",i.removeAriaLabel)}}function ge(e,a){if(e&1&&(x(0),m(1,_e,1,5,"span",9)(2,he,1,4,"TimesCircleIcon",10),I()),e&2){let i=r(2);p(),c("ngIf",i.removeIcon),p(),c("ngIf",!i.removeIcon)}}function ue(e,a){}function fe(e,a){e&1&&m(0,ue,0,0,"ng-template")}function de(e,a){if(e&1){let i=f();h(0,"span",13),d("click",function(t){s(i);let o=r(2);return l(o.close(t))})("keydown",function(t){s(i);let o=r(2);return l(o.onKeydown(t))}),m(1,fe,1,0,null,14),g()}if(e&2){let i=r(2);_("data-pc-section","removeicon")("aria-label",i.removeAriaLabel),p(),c("ngTemplateOutlet",i.removeIconTemplate||i._removeIconTemplate)}}function ve(e,a){if(e&1&&(x(0),m(1,ge,3,2,"ng-container",3)(2,de,2,3,"span",8),I()),e&2){let i=r();p(),c("ngIf",!i.removeIconTemplate&&!i._removeIconTemplate),p(),c("ngIf",i.removeIconTemplate||i._removeIconTemplate)}}var ye=(()=>{class e extends ie{label;icon;image;alt;style;styleClass;removable=!1;removeIcon;onRemove=new b;onImageError=new b;visible=!0;get removeAriaLabel(){return this.config.getTranslation(Z.ARIA).removeLabel}get chipProps(){return this._chipProps}set chipProps(i){this._chipProps=i,i&&typeof i=="object"&&Object.entries(i).forEach(([n,t])=>this[`_${n}`]!==t&&(this[`_${n}`]=t))}_chipProps;_componentStyle=E(te);removeIconTemplate;templates;_removeIconTemplate;ngAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"removeicon":this._removeIconTemplate=i.template;break;default:this._removeIconTemplate=i.template;break}})}ngOnChanges(i){if(super.ngOnChanges(i),i.chipProps&&i.chipProps.currentValue){let{currentValue:n}=i.chipProps;n.label!==void 0&&(this.label=n.label),n.icon!==void 0&&(this.icon=n.icon),n.image!==void 0&&(this.image=n.image),n.alt!==void 0&&(this.alt=n.alt),n.style!==void 0&&(this.style=n.style),n.styleClass!==void 0&&(this.styleClass=n.styleClass),n.removable!==void 0&&(this.removable=n.removable),n.removeIcon!==void 0&&(this.removeIcon=n.removeIcon)}}containerClass(){let i="p-chip p-component";return this.styleClass&&(i+=` ${this.styleClass}`),i}close(i){this.visible=!1,this.onRemove.emit(i)}onKeydown(i){(i.key==="Enter"||i.key==="Backspace")&&this.close(i)}imageError(i){this.onImageError.emit(i)}static \u0275fac=(()=>{let i;return function(t){return(i||(i=C(e)))(t||e)}})();static \u0275cmp=V({type:e,selectors:[["p-chip"]],contentQueries:function(n,t,o){if(n&1&&(T(o,ce,4),T(o,Y,4)),n&2){let v;w(v=k())&&(t.removeIconTemplate=v.first),w(v=k())&&(t.templates=v)}},hostVars:9,hostBindings:function(n,t){n&2&&(_("data-pc-name","chip")("aria-label",t.label)("data-pc-section","root"),A(t.style),u(t.containerClass()),z("display",!t.visible&&"none"))},inputs:{label:"label",icon:"icon",image:"image",alt:"alt",style:"style",styleClass:"styleClass",removable:[2,"removable","removable",H],removeIcon:"removeIcon",chipProps:"chipProps"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},standalone:!0,features:[L([te]),j,F,P,q],ngContentSelectors:ae,decls:6,vars:4,consts:[["iconTemplate",""],["class","p-chip-image",3,"src","alt","error",4,"ngIf","ngIfElse"],["class","p-chip-label",4,"ngIf"],[4,"ngIf"],[1,"p-chip-image",3,"error","src","alt"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-label"],["tabindex","0","class","p-chip-remove-icon","role","button",3,"click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","ngClass","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"class","click","keydown",4,"ngIf"],["tabindex","0","role","button",3,"click","keydown","ngClass"],["tabindex","0","role","button",3,"click","keydown"],["tabindex","0","role","button",1,"p-chip-remove-icon",3,"click","keydown"],[4,"ngTemplateOutlet"]],template:function(n,t){if(n&1&&(R(),B(0),m(1,pe,1,2,"img",1)(2,le,1,1,"ng-template",null,0,J)(4,me,2,2,"div",2)(5,ve,3,2,"ng-container",3)),n&2){let o=N(3);p(),c("ngIf",t.image)("ngIfElse",o),p(3),c("ngIf",t.label),p(),c("ngIf",t.removable)}},dependencies:[X,U,G,W,ne,y],encapsulation:2,changeDetection:0})}return e})(),Oe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=S({type:e});static \u0275inj=M({imports:[ye,y,y]})}return e})();export{ye as a,Oe as b};

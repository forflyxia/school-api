WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'soy/pagetree.soy' */
// This file was automatically generated from pagetree.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Pagetree.Macro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Pagetree == 'undefined') { Confluence.Templates.Pagetree = {}; }
if (typeof Confluence.Templates.Pagetree.Macro == 'undefined') { Confluence.Templates.Pagetree.Macro = {}; }


Confluence.Templates.Pagetree.Macro.loadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="plugin_pagetree_children_loading_wrapper"><div class="spinner"/><span class="plugin_pagetree_children_loading">' + soy.$$escapeHtml("Loading...") + '</span></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Pagetree.Macro.loadingIndicator.soyTemplateName = 'Confluence.Templates.Pagetree.Macro.loadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree.js' */
(function(){var a=function(m){this.$=m;var h=this.$;var B=999;var C=true;var k=false;var w={};var d={};var n=function(K,J,F,I,E){if(J==undefined||J==null){J=!b(K)}if(F==undefined||F==null){F=0}if(!l(K,J)){var H=h("#children"+K);if(z(H)){var G=h("#plusminus"+K);if(J==C){G.removeClass("icon-section-closed").addClass("icon-section-opened")}else{G.removeClass("icon-section-opened").addClass("icon-section-closed")}if(J==C){if(E==false){H.slideDown(300)}else{H.removeClass("plugin-pagetree-hide-children");H.animate({opacity:1})}}else{if(E==false){H.slideUp(300)}else{H.animate({opacity:0},{complete:function(){H.addClass("plugin-pagetree-hide-children")}})}}if(I){r(K)}}else{j(K,new Array(),F,"",I,E)}}if(I){r(K)}};var z=function(E){return E.children("ul[id]").length>0};var b=function(F){var E=h("#plusminus"+F);return(E.length>0)?(E.hasClass("icon-minus")||E.hasClass("icon-section-opened")):k};var l=function(F,E){return b(F)==E};var i=function(G,F,E){A(G,C,F,E)};var x=function(G,F,E){A(G,k,F,E)};var A=function(J,H,G,F){g(J);var I=h("#"+J);var E=I.find("div.plugin_pagetree_children_container");E.each(function(K){var L=v(this.id);n(L,H,B,K==E.length-1,F)});G.preventDefault();G.stopPropagation()};var v=function(E){if(!E||E==undefined){return null}if(E.indexOf("plusminus")!=-1){return E.substring("plusminus".length)}if(E.indexOf("children")!=-1){return E.substring("children".length)}return null};var c=function(E){if(!E||E==undefined){return null}return s(E)[1]};var s=function(E){if(!E||E==undefined){return null}return E.split("-")};var g=function(F){var E=c(F);h("div.plugin_pagetree").each(function(G){if(G==E){h(this).find("span.plugin_pagetree_status").removeClass("hidden");h(this).find("div.plugin_pagetree_expandcollapse").addClass("hidden")}})};var r=function(F){var E=c(F);h("div.plugin_pagetree").each(function(G){if(G==E){h(this).find("span.plugin_pagetree_status").addClass("hidden");h(this).find("div.plugin_pagetree_expandcollapse").removeClass("hidden")}})};var f=function(L,F,I,H,K,E,G){var J=w[L];if(F=="Orphan"){J+="&hasRoot=false&spaceKey="+K}else{J+="&hasRoot=true&pageId="+F}J+="&treeId="+L+"&startDepth="+H+"&mobile="+G;h.each(I,function(){J+="&ancestors="+this});J+="&treePageId="+E;if(G==false){J=(AJS.params.serverUrl||"")+J}return J};var q=function(G){var F=G;var E=null;h("div.plugin_pagetree").each(function(H){if(H==F){E=h(this)}});return E};var p=function(E){var F=E.children("fieldset");var G=new Object();if(F.length>0){F.children("input").each(function(){G[this.name]=this.value})}return G};var o=function(E){var G=E.children("fieldset");var H=new Array();if(G.length>0){var F=G.children("fieldset");if(F.length>0){F.children("input").each(function(){H.push(this.value)})}}return H};var e=function(G,F){var E=h("a.plugin_pagetree_childtoggle",G);E.each(function(){var H=h(this);H.attr("href","#").bind("click",function(K){var I=H.parent().parent().children("div.plugin_pagetree_children_container");var J=I.attr("id");var L=J.substring(8);n(L,null,null,null,F);K.preventDefault();K.stopPropagation()})})};var u=function(E){var F=h(document.createElement("div"));F.html(E);return F.find("ul[id^='child_ul']").length};var j=function(N,G,S,Q,J,F,H){var R=N;var K=J;var E=s(N);var I=E[0];var M=E[1];var L=h("#children"+N);var P=p(q(M));var T=false;function O(){L.find(".plugin_pagetree_children_loading_wrapper .spinner").spin("small")}L.append(Confluence.Templates.Pagetree.Macro.loadingIndicator());if(H){setTimeout(function(){if(!T){O()}},250)}else{O()}h.ajax({type:"GET",url:f(M,I,G,S,Q,P.treePageId,F),dataType:"text",success:function(U){if(u(U)){L.html(U);T=true;if(L.children().length&&L.hasClass("hidden")){L.removeClass("hidden")}e(L,F);h("#plusminus"+R).addClass("icon-section-opened").removeClass("icon-section-closed");h("#childrenspan"+d[parseInt(M)]+"-"+M).addClass("plugin_pagetree_current");if(K){r(R)}t(L);if(AJS.PageGadget&&AJS.PageGadget.contentsUpdated){AJS.PageGadget.contentsUpdated()}}else{window.location=P.loginUrl}AJS.trigger("pagetree-children-loaded")},error:function(U){if(U.status=="403"){L.text(P["i18n-pagetree.error.permission"])}else{L.text(P["i18n-pagetree.error.general"])}}})};var t=function(E){h("div.plugin_pagetree_children_container:empty",E).addClass("hidden")};var y=function(E,J){var H=p(E);var K=H.noRoot=="true";var G=K?"Orphan-"+J:H.rootPageId+"-"+J;var F=H.mobile=="true";w[J]=H.treeRequestId;if(F==false){d[J]=AJS.params.pageId}else{d[J]=h("div.content-container").parent().attr("data-content-id")}E.children("fieldset").each(function(){var L=h(this);L.children("input[treeId]").attr("value",J);L.children("input[rootPage]").attr("value",G)});if(K){E.find("div.plugin_pagetree_children").attr("id","childrenOrphan-"+J);E.find("a.plugin_pagetree_expandall").click(function(L){i("childrenOrphan-"+J,L,F);return false});E.find("a.plugin_pagetree_collapseall").click(function(L){x("childrenOrphan-"+J,L,F);return false})}else{E.find("div.plugin_pagetree_children").attr("id","children"+G);E.find("a.plugin_pagetree_expandall").click(function(L){i("children"+G,L,F);return false});E.find("a.plugin_pagetree_collapseall").click(function(L){x("children"+G,L,F);return false})}var I=o(E);j(G,I,H.startDepth,H.spaceKey,"",F,true)};this.initPageTrees=function(){h("div.plugin_pagetree").each(function(E){y(h(this),E)});D()};var D=function(){var E=self.placeFocus;if(E){self.placeFocus=function(){var F=h("form[name='pagetreesearchform']");F.attr("name","inlinecommentform");E();F.attr("name","pagetreesearchform")}}};h(".open-flyout-to-search").bind("click",function(E){if(h(".fly-out-open").length){setTimeout(function(){ConfluenceMobile.flyout.hide()},400)}else{setTimeout(function(){ConfluenceMobile.flyout.show()},400)}E.stopPropagation();E.preventDefault()})};Confluence=Confluence||{};Confluence.Plugins=Confluence.Plugins||{};Confluence.Plugins.PagetreeMacro={bind:function(b){var c=new a(b);c.initPageTrees()}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree-desktop.js' */
AJS.toInit(function(a){Confluence.Plugins.PagetreeMacro.bind(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:help-dialog-extension', location = '/jira/help-dialog.js' */
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"Insert JIRA Issue/Filter"+":",keys:[["Ctrl+Shift+J"]]})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:help-dialog-extension', location = 'js/help-dialog.js' */
AJS.toInit(function(a){Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.Autoformat.push({action:"@",context:"autoformat.autocomplete",description:"Mention"})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:footer-analytics', location = '/js/confluence-dashboard/utils/footer-analytics.js' */
define("confluence-dashboard/utils/footer-analytics",["exports","jquery","ajs"],function(a,c,b){b.toInit(function(){var e="confluence.footer.item.click";var d=b.Meta.get("page-id");var f=(0,c)("body").hasClass("dashboard");(0,c)("#footer").on("click","a",function(){b.trigger("analytics",{name:e,data:{pageId:d,isDashboard:f}})})})});require(["confluence-dashboard/utils/footer-analytics"]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-dialog2', location = 'node_modules/@atlassian/aui/src/js/aui/dialog2.js' */
("undefined"===typeof window?global:window).__66741aa250e6a2e683f9b0a60bdbbfd2=function(){function f(a){return a&&a.__esModule?a:{"default":a}}function e(a){var c=this.$el=a?(0,g.default)(a):(0,g.default)(aui.dialog.dialog2({}));g.default.each(i,function(a,b){var d="data-"+a;c[0].hasAttribute(d)||c.attr(d,b)})}var h={};"use strict";Object.defineProperty(h,"__esModule",{value:!0});var g=f(__2fd777cca7fe187ff4048afabed6a6b5),j=f(__7e0423727525720eec50a0fbce0cace2),k=f(__dd0dee18d8910035abf3563b0855343d),
b=f(__32c9c638c13fb3cc78ab29b878f9b179),l=f(__c0c7dd6b9ca4bd1d92ff026738d8a472),i={"aui-focus":"false","aui-blanketed":"true"};e.prototype.on=function(a,c){(0,b.default)(this.$el).on(a,c);return this};e.prototype.off=function(a,c){(0,b.default)(this.$el).off(a,c);return this};e.prototype.show=function(){(0,b.default)(this.$el).show();return this};e.prototype.hide=function(){(0,b.default)(this.$el).hide();return this};e.prototype.remove=function(){(0,b.default)(this.$el).remove();return this};e.prototype.isVisible=
function(){return(0,b.default)(this.$el).isVisible()};var d=(0,l.default)("dialog2",e);d.on=function(a,c){b.default.on(a,".aui-dialog2",c);return this};d.off=function(a,c){b.default.off(a,".aui-dialog2",c);return this};(0,g.default)(document).on("click",".aui-dialog2-header-close",function(a){a.preventDefault();d((0,g.default)(this).closest(".aui-dialog2")).hide()});d.on("show",function(a,c){var b;[".aui-dialog2-content",".aui-dialog2-footer",".aui-dialog2-header"].some(function(a){b=c.find(a+" :aui-tabbable");
return b.length});b&&b.first().focus()});d.on("hide",function(a,c){var d=(0,b.default)(c);c.data("aui-remove-on-hide")&&d.remove()});(0,j.default)("aui/dialog2",d);(0,k.default)("dialog2",d);h.default=d;return h=h["default"]}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:dialog2', location = 'src/soy/dialog2.soy' */
// This file was automatically generated from dialog2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace aui.dialog.
 */

if (typeof aui == 'undefined') { var aui = {}; }
if (typeof aui.dialog == 'undefined') { aui.dialog = {}; }


aui.dialog.dialog2 = function(opt_data, opt_ignored) {
  return '' + aui.dialog.dialog2Chrome({id: opt_data.id, titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, modal: opt_data.modal, tagName: opt_data.tagName, removeOnHide: opt_data.removeOnHide, visible: opt_data.visible, size: opt_data.size, extraClasses: opt_data.extraClasses, extraAttributes: opt_data.extraAttributes, content: '' + aui.dialog.dialog2Content({id: null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, headerActionContent: opt_data.headerActionContent, headerSecondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal, content: opt_data.content, footerHintText: opt_data.footerHintText, footerHintContent: opt_data.footerHintContent, footerActionContent: opt_data.footerActionContent})});
};
if (goog.DEBUG) {
  aui.dialog.dialog2.soyTemplateName = 'aui.dialog.dialog2';
}


aui.dialog.dialog2Chrome = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data.titleId) ? ' aria-labelledby="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' role="dialog" class=" aui-layer aui-dialog2 aui-dialog2-' + soy.$$escapeHtml(opt_data.size ? opt_data.size : 'medium') + aui.renderExtraClasses(opt_data) + '"' + ((opt_data.modal) ? 'data-aui-modal="true"' : '') + ((opt_data.removeOnHide) ? 'data-aui-remove-on-hide="true"' : '') + ((opt_data.visible != true) ? 'aria-hidden="true"' : '') + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</' + soy.$$escapeHtml(opt_data.tagName ? opt_data.tagName : 'section') + '>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Chrome.soyTemplateName = 'aui.dialog.dialog2Chrome';
}


aui.dialog.dialog2Content = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + aui.dialog.dialog2Header({titleId: opt_data.id ? opt_data.id + '-dialog-title' : null, titleText: opt_data.titleText, titleContent: opt_data.titleContent, actionContent: opt_data.headerActionContent, secondaryContent: opt_data.headerSecondaryContent, modal: opt_data.modal}) + aui.dialog.dialog2Panel(opt_data) + aui.dialog.dialog2Footer({hintText: opt_data.footerHintText, hintContent: opt_data.footerHintContent, actionContent: opt_data.footerActionContent});
};
if (goog.DEBUG) {
  aui.dialog.dialog2Content.soyTemplateName = 'aui.dialog.dialog2Content';
}


aui.dialog.dialog2Header = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<header' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-header' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '><h2 ' + ((opt_data.titleId) ? ' id="' + soy.$$escapeHtml(opt_data.titleId) + '"' : '') + ' class="aui-dialog2-header-main">' + ((opt_data.titleText) ? soy.$$escapeHtml(opt_data.titleText) : '') + ((opt_data.titleContent) ? soy.$$filterNoAutoescape(opt_data.titleContent) : '') + '</h2>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-header-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.secondaryContent) ? '<div class="aui-dialog2-header-secondary">' + soy.$$filterNoAutoescape(opt_data.secondaryContent) + '</div>' : '') + ((opt_data.modal != true) ? '<a class="aui-dialog2-header-close"><span class="aui-icon aui-icon-small aui-iconfont-close-dialog">' + soy.$$escapeHtml("Close") + '</span></a>' : '') + '</header>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Header.soyTemplateName = 'aui.dialog.dialog2Header';
}


aui.dialog.dialog2Footer = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<footer' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-footer' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.actionContent) ? '<div class="aui-dialog2-footer-actions">' + soy.$$filterNoAutoescape(opt_data.actionContent) + '</div>' : '') + ((opt_data.hintText || opt_data.hintContent) ? '<div class="aui-dialog2-footer-hint">' + ((opt_data.hintText) ? soy.$$escapeHtml(opt_data.hintText) : '') + ((opt_data.hintContent) ? soy.$$filterNoAutoescape(opt_data.hintContent) : '') + '</div>' : '') + '</footer>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Footer.soyTemplateName = 'aui.dialog.dialog2Footer';
}


aui.dialog.dialog2Panel = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ' class="aui-dialog2-content' + aui.renderExtraClasses(opt_data) + '"' + aui.renderExtraAttributes(opt_data) + '>' + ((opt_data.content) ? soy.$$filterNoAutoescape(opt_data.content) : '') + '</div>';
};
if (goog.DEBUG) {
  aui.dialog.dialog2Panel.soyTemplateName = 'aui.dialog.dialog2Panel';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/js/page-loading-indicator.js' */
define("confluence/page-loading-indicator",["jquery","underscore","ajs","confluence/templates"],function(c,g,a,h){return function(b){function d(){return c(".confluence-page-loading-blanket",b)}function e(){return c(".confluence-loading-indicator",b)}return{show:function(){0===d().length&&c(b).append(h.pageLoadingIndicator());d().show();e().spin({lines:12,length:8,width:4,radius:10,trail:60,speed:1.5,color:"#F0F0F0"})},hide:function(){e().stop();d().hide()},showUntilResolved:function(c,b){this.show();
c.always(g.bind(this.hide,this));b&&c.fail(function(){a.messages.error(".confluence-page-loading-errors",{body:b})})},showUntilDialogVisible:function(b,d){var f=this,e=d||"An error has occurred connecting to the server. Please try again.",g=c(".aui-dialog:visible"),h=c(".aui-dialog2:visible");!g.length&&!h.length&&f.show();b.always(f.hide).fail(function(){a.messages.error(".confluence-page-loading-errors",{body:e})});a.bind("show.dialog",function i(){a.unbind("show.dialog",i);f.hide()});if(null!=a.dialog2&&void 0!=a.dialog2)a.dialog2.on("show",
function j(){a.dialog2.off("show",j);f.hide()})},destroy:function(){b.remove(".confluence-page-loading-blanket")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/page-loading-indicator","Confluence.PageLoadingIndicator");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/soy/page-loading-indicator.soy' */
// This file was automatically generated from page-loading-indicator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }


Confluence.Templates.pageLoadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="confluence-page-loading-errors"></div><div class="confluence-page-loading-blanket aui-blanket" aria-hidden="false"><div class="confluence-loading-indicator"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.pageLoadingIndicator.soyTemplateName = 'Confluence.Templates.pageLoadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:event', location = '/includes/js/api/event.js' */
define("confluence/api/event",["ajs"],function(a){return{bind:function(){a.bind.apply(this,arguments)},unbind:function(){a.unbind.apply(this,arguments)},trigger:function(){a.trigger.apply(this,arguments)},stopEvent:function(){a.stopEvent.apply(this,arguments)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/deferred-dialog-loader.js' */
define("confluence/deferred-dialog-loader",["underscore","jquery","ajs","confluence/page-loading-indicator","confluence/api/event"],function(a,d,e,g,f){return function(){var h=g(d("body"));a.each({userStatus:{resource:"confluence.userstatus:userstatus-resources",selector:"#create-user-status-link",event:"deferred.userstatus.click"},movePageDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-page-dialog-link",event:"deferred.page-move.tools-menu"},movePageDialogEditor:{resource:"confluence.web.resources:page-move-resources",
selector:"#rte-button-location",event:"deferred.page-move.editor"},moveBlogDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-blogpost-dialog-link",event:"deferred.blog-move.tools-menu"},availableGadgetsHelp:{resource:"com.atlassian.confluence.plugins.gadgets:gadget-directory-resources",selector:"#gadget-directory-link",event:"deferred.available-gadgets.help-menu"},aboutConfluenceHelp:{resource:"confluence.web.resources:about",selector:"#confluence-about-link",
event:"deferred.about-confluence.help-menu"}},function(b){d("body").on("click",b.selector,function(a){var c=WRM.require("wr!"+b.resource,function(){f.trigger(b.event)});h.showUntilDialogVisible(c);c=b.resource+".requested";e.Analytics?e.Analytics.triggerPrivacyPolicySafeEvent(c):f.trigger("analyticsEvent",{name:c});a.preventDefault()})})}});require("confluence/module-exporter").safeRequire("confluence/deferred-dialog-loader",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/page-permissions-deferred-loader.js' */
define("confluence/page-permissions-deferred-loader","confluence/dark-features confluence/legacy ajs confluence/page-loading-indicator jquery wrm".split(" "),function(a,b,c,d,e,f){var g=d(e("body"));return function(a){var b=f.require("wr!com.atlassian.confluence.plugins.confluence-page-restrictions-dialog:dialog-resources",function(){c.trigger("deferred.page.permissions")});g.showUntilDialogVisible(b,"There was an error loading the page restrictions. Please try again later.");a.preventDefault()}});
require("confluence/module-exporter").safeRequire("confluence/page-permissions-deferred-loader",function(a){var b=require("ajs");b.toInit(function(c){c("body").on("click","#rte-button-restrictions,#action-page-permissions-link",a);b.bind("system-content-metadata.open-restrictions-dialog",a)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:navigator-context', location = '/includes/js/api/navigator-context.js' */
define("confluence/api/navigator-context",["confluence/meta","document"],function(g,b){var h=function(a){a=d(a);return"undefined"!==typeof a&&0!==a},d=function(a){a=g.get(a);return isNaN(a)?void 0:Number(a)},i=function(){return!!b.querySelector(".page.view")||!!b.querySelector(".blogpost.view")},e=function(){return!!b.querySelector(".page.edit")||!!b.querySelector(".blogpost.edit")},f=function(){return g.get("content-type")},c=function(){return d("page-id")};return{getCurrent:function(){return e()&&
0===c()&&h("draft-id")?{target:"contentcreate",context:{contentId:d("draft-id"),contentType:f()}}:e()&&!i()&&0!==c()?{target:"contentedit",context:{contentId:c(),contentType:f()}}:!e()&&i()&&h("page-id")?{target:"contentview",context:{contentId:c(),contentType:f()}}:{target:"unknown",context:{}}}}});
}catch(e){WRMCB(e)};
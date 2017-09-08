WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'confluence.extra.jira:jirachart-resources', location = '/jirachart/jirachart.js' */
AJS.toInit(function(){AJS.$(".jira-chart-macro-img").load(function(a){AJS.log("Jira Chart Macro - chart image loaded");AJS.$(".insert-jira-chart-macro-button",window.parent.document).enable()}).error(function(d){AJS.log("Jira Chart Macro - chart image loaded error");AJS.$(".insert-jira-chart-macro-button",window.parent.document).disable();var e=AJS.$(d.target);var c=e.parent();var b=c.parent();c.remove();var a="Unable to render JIRA chart macro due to an execution error.";AJS.messages.error(b,{body:a})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-resources', location = '/jirachart/twodimensionalchart-showlink.js' */
var TwoDimensionalShowLink=(function(e){var d=function(i){var h=e("#two-dimensional-chart-"+i);var g=h.position();e("<div />",{id:"twodimensional-dark-layout-"+i,"class":"jim-sortable-dark-layout",css:{top:g.top+"px",left:g.left+"px",width:h.width()+"px",height:h.height()+"px"}}).appendTo(h.parent())};var a=function(g){e("#twodimensional-dark-layout-"+g).remove()};var b=function(){var h=e(this).attr("data-chart-id");d(h);var g={pageId:e("#chart-page-id-"+h).val(),wikiMarkup:e("#chart-wiki-"+h).val(),isShowMore:e(this).attr("data-is-show-more")};AJS.$.ajax({type:"POST",dataType:"html",url:Confluence.getContextPath()+"/plugins/servlet/twoDimensionalShowMoreRenderer",data:g,success:function(i){if(e(i).find(".aui-message.error").length){var j=e(i).find(".message").text();e("#two-dimensional-chart-"+h).find(".show-error").html(j)}else{var k=e(i).find(".show-link-container a").attr("data-chart-id");e("#two-dimensional-chart-"+h).replaceWith(i);c(k)}a(h)},error:function(){e("#two-dimensional-chart-"+h).find(".show-error").html("Unable to render JIRA chart macro. Execution has timed out.");a(h)}})};var c=function(g){e("#show-link-"+g).on("click",b)};var f=function(){e(".show-link-container a").each(function(){c(e(this).attr("data-chart-id"))})};return{init:f}})(AJS.$);AJS.$(function(){TwoDimensionalShowLink.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-model.js' */
define("confluence-watch-button/watch-model",["ajs","backbone"],function(a,b){return b.Model.extend({saveSettings:function(d,e){this.trigger("request");var c=this;return a.safe.ajax({url:d,type:"POST",dataType:"json",data:e}).done(function(){c.trigger("sync",c)}).fail(function(){c.trigger("error")})},saveWatchPage:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"pagenotificationajax.action";this.set("watchingPage",d);return this.saveSettings(c,{pageId:this.get("pageId")})},saveWatchBlogs:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingBlogs",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey"),contentType:"blogpost"})},saveWatchSpace:function(d){var c=a.contextPath()+"/users/"+(d?"add":"remove")+"spacenotificationajax.action";this.set("watchingSpace",d);return this.saveSettings(c,{spaceKey:this.get("spaceKey")})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-view.js' */
define("confluence-watch-button/watch-view",["jquery","ajs","backbone"],function(b,a,c){return c.View.extend({events:{"change #cw-watch-page":"changeWatchPage","change #cw-watch-blogs":"changeWatchBlogs","change #cw-watch-space":"changeWatchSpace"},initialize:function(){_.bindAll(this,"render","initTooltips","changeWatchPage","changeWatchBlogs","changeWatchSpace","togglePageEnabledState","toggleBlogsEnabledState","startLoading","stopLoading","setTitle");this.model.on("sync change:watchingSpace",this.togglePageEnabledState,this);this.model.on("change:watchingSpace",this.toggleBlogsEnabledState,this);this.model.on("request",this.startLoading,this);this.model.on("sync",this.setTitle,this);this.model.on("sync",this.stopLoading,this)},render:function(){this.$el.html(Confluence.Watch.Templates.dialogBody(this.model.toJSON()));this.initTooltips();this.setTitle(this.model);return this},initTooltips:function(){this.$(".cw-tooltip").tooltip({gravity:"e",offset:5,delayIn:0});this.togglePageEnabledState(this.model);this.toggleBlogsEnabledState(this.model)},changeWatchPage:function(f){var d=b(f.target).is(":checked");this.model.saveWatchPage(d)},changeWatchBlogs:function(f){var d=b(f.target).is(":checked");this.model.saveWatchBlogs(d)},changeWatchSpace:function(f){var d=b(f.target).is(":checked");this.model.saveWatchSpace(d)},togglePageEnabledState:function(d){var e=d.get("watchingPage");var g=d.get("watchingSpace");this.$("#cw-watch-page").prop("disabled",g);this.$("#cw-watch-page").prop("checked",e||g);var f=g?"You will receive updates for this page because you are watching this space.":"";this.$(".cw-tooltip-watch-page").attr("original-title",f)},toggleBlogsEnabledState:function(d){var g=d.get("watchingBlogs");var f=d.get("watchingSpace");this.$("#cw-watch-blogs").prop("disabled",f);this.$("#cw-watch-blogs").prop("checked",g||f);var e=f?"You are subscribed to all blog posts because you are watching this space.":"";this.$(".cw-tooltip-watch-blogs").attr("original-title",e)},startLoading:function(){this.$(".cw-status").addClass("loading")},stopLoading:function(){this.$(".cw-status").removeClass("loading")},setTitle:function(){var e=this.model.get("watchingPage");var i=this.model.get("watchingBlogs");var g=this.model.get("watchingSpace");var d=this.model.get("isBlogPost");function h(){if(g){return{title:"You are watching this space",description:"Receiving email updates for all content in this space.",}}if(e&&d&&i){return{title:"You are watching this blog post",description:"Receiving email updates about changes to this blog post and all new blog posts in this space.",}}if(e&&d){return{title:"You are watching this blog post",description:"Receiving email updates about changes to this blog post.",}}if(e){return{title:"You are watching this page",description:"Receiving email updates about changes to this page.",}}if(d&&i){return{title:"You are watching for new blog posts",description:"Receiving email updates for new blog posts in this space.",}}if(d){return{title:"You are not watching this blog",description:"Start watching to receive email updates about changes to this blog.",}}return{title:"You are not watching this page",description:"Start watching to receive email updates about changes to this page.",}}var f=h();this.$(".cw-title").text(f.title);this.$(".cw-title-description").text(f.description)}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch.js' */
require(["jquery","underscore","ajs","confluence-watch-button/watch-model","confluence-watch-button/watch-view","confluence-watch-button/watch-notification"],function(b,i,h,f,d,g){h.toInit(function(){var j=b("#watch-content-button");if(!j.length){return}j.click(function(l){l.preventDefault()});var k=h.Meta.get("page-id");b.getJSON(h.contextPath()+"/rest/watch-button/1.0/watchState/"+k,function(l){i.extend(l,{pageId:k,spaceKey:h.Meta.get("space-key"),spaceName:h.Meta.get("space-name")});a(j,l);j.addClass("watch-state-initialised")})});function a(j,n){e(j,n);var m=new f(n);var l=new d({model:m});h.InlineDialog(j,"confluence-watch",function(p,o,q){l.setElement(p);l.render();q()},{width:325,offsetX:-180,cacheContent:false,hideDelay:null,hideCallback:function(){b(".tipsy").hide()}});m.on("change:watchingPage change:watchingBlogs change:watchingSpace",function(o){e(j,o.toJSON())});m.on("change:watchingPage",function(o,q){var p=q?"watch-page":"unwatch-page";h.trigger("analytics",{name:p})});m.on("change:watchingBlogs",function(o,q){var p=q?"watch-blogs":"unwatch-blogs";h.trigger("analytics",{name:p})});m.on("change:watchingSpace",function(o,q){var p=q?"watch-space":"unwatch-space";h.trigger("analytics",{name:p})});c(m);var k=false;b(document).on("keyup",function(){k=false});window.CW_watchPage=function(){if(k){return}k=true;var q=m.get("watchingSpace");var p=m.get("watchingPage");if(q){b("body, #splitter-content").animate({scrollTop:0},300,function(){j.click();setTimeout(function(){b(".cw-tooltip-watch-page").tipsy("show")},50)})}else{var r=!p;m.saveWatchPage(r);var o=r?"You started watching this page.":"You stopped watching this page.";g(o)}}}function e(k,q){var m=q.watchingPage;var j=q.isBlogPost&&q.watchingBlogs;var o=q.watchingSpace;if(m||j||o){var l=k.find(".aui-icon").removeClass("aui-iconfont-unwatch").addClass("aui-iconfont-watch");var n=h.format("{0}W{1}atching","<u>","</u>");k.prop("title","Stop watching (w)").children("span").empty().append(l).append(" "+n)}else{var l=k.find(".aui-icon").removeClass("aui-iconfont-watch").addClass("aui-iconfont-unwatch");var p=h.format("{0}W{1}atch","<u>","</u>");k.prop("title","Watch (w)").children("span").empty().append(l).append(" "+p)}}function c(j){j.on("change:watchingPage",function(k,m){var l=m?"watchpage.pageoperation":"unwatchpage.pageoperation";h.trigger(l)})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/notification.js' */
define("confluence-watch-button/watch-notification",["jquery","aui/flag"],function(b,a){return function(e){var c=document.getElementById("watch-notification");if(c!=null){c.close()}var d=a({type:"success",body:e,close:"auto"});d.setAttribute("id","watch-notification")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'templates/watch.soy' */
// This file was automatically generated from watch.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Watch.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Watch == 'undefined') { Confluence.Watch = {}; }
if (typeof Confluence.Watch.Templates == 'undefined') { Confluence.Watch.Templates = {}; }


Confluence.Watch.Templates.dialogBody = function(opt_data, opt_ignored) {
  return '<div class="cw-status"><h2 class="cw-title"></h2><p class="cw-title-description"></p></div><form class="aui cw-dialog"><div class="cw-tooltip cw-tooltip-watch-page"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-page" ' + ((opt_data.watchingPage) ? 'checked' : '') + '><label for="cw-watch-page">' + ((opt_data.isBlogPost) ? soy.$$escapeHtml("Watch blog post") : soy.$$escapeHtml("Watch page")) + '</label></div></div>' + ((opt_data.isBlogPost) ? '<div class="cw-tooltip cw-tooltip-watch-blogs"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-blogs" ' + ((opt_data.watchingBlogs) ? 'checked' : '') + '><label for="cw-watch-blogs">' + soy.$$escapeHtml("Watch for new blog posts in this space") + '</label></div></div>' : '') + '<div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-space" ' + ((opt_data.watchingSpace) ? 'checked' : '') + '><label for="cw-watch-space">' + soy.$$escapeHtml("Watch all content in this space") + '</label></div></form>' + ((opt_data.isAdmin) ? '<div class="cw-manage-watchers-wrapper"><button class="aui-button aui-button-link cw-manage-watchers">' + soy.$$escapeHtml("Manage Watchers") + '</button></div>' : '');
};
if (goog.DEBUG) {
  Confluence.Watch.Templates.dialogBody.soyTemplateName = 'Confluence.Watch.Templates.dialogBody';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'templates/sharepage/share-dialog.soy' */
// This file was automatically generated from share-dialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Share.Dialog.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Share == 'undefined') { Confluence.Templates.Share = {}; }
if (typeof Confluence.Templates.Share.Dialog == 'undefined') { Confluence.Templates.Share.Dialog = {}; }


Confluence.Templates.Share.Dialog.shareContentPopup = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui share-content-popup"><div class="field-group"><div class="autocomplete-user-target"><input class="text autocomplete-sharepage" id="users" data-max="10" data-dropdown-target=".autocomplete-user-target" data-none-message="' + soy.$$escapeHtml("No matches") + '" placeholder="' + soy.$$escapeHtml("User name, group or email") + '"/></div><ol class="recipients"></ol></div><div class="field-group"><textarea class="textarea" id="note" placeholder="' + soy.$$escapeHtml("Add an optional note") + '"/></div><div class="field-group button-panel"><div class="progress-messages-icon"></div><div class="progress-messages"></div><input class="button submit" type="submit" value="' + soy.$$escapeHtml("Share") + '" disabled/><a class="close-dialog" href="#">' + soy.$$escapeHtml("Cancel") + '</a></div></form>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.shareContentPopup.soyTemplateName = 'Confluence.Templates.Share.Dialog.shareContentPopup';
}


Confluence.Templates.Share.Dialog.recipientUser = function(opt_data, opt_ignored) {
  return '<li data-userkey="' + soy.$$escapeHtml(opt_data.userKey) + '" style="display: none" class="recipient-user"><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.title) + '">' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientUser.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientUser';
}


Confluence.Templates.Share.Dialog.recipientEmail = function(opt_data, opt_ignored) {
  return '<li data-email="' + soy.$$escapeHtml(opt_data.email) + '" style="display: none" class="recipient-email"><img src="' + soy.$$escapeHtml(opt_data.icon) + '" title="' + soy.$$escapeHtml(opt_data.email) + '"/><span class="title" title="' + soy.$$escapeHtml(opt_data.email) + '">' + soy.$$escapeHtml(opt_data.email) + '</span><span class="remove-recipient"/></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientEmail.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientEmail';
}


Confluence.Templates.Share.Dialog.recipientGroup = function(opt_data, opt_ignored) {
  return '<li data-group="' + soy.$$escapeHtml(opt_data.title) + '" style="display: none" class="recipient-group"><span><img src="' + soy.$$escapeHtml(opt_data.thumbnailLink.href) + '" title="' + soy.$$escapeHtml(opt_data.title) + '"/><span>' + soy.$$escapeHtml(opt_data.title) + '</span><span class="remove-recipient"/></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Share.Dialog.recipientGroup.soyTemplateName = 'Confluence.Templates.Share.Dialog.recipientGroup';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:mail-page-resources', location = 'js/mailpage.js' */
AJS.Confluence.SharePage={};AJS.Confluence.SharePage.autocompleteUser=function(d){d=d||document.body;var e=AJS.$,a=/^([a-zA-Z0-9_\.\-\+\!#\$%&'\*/=\?\^_`{|}~])+\@.*/;var c=function(j){if(!j||!j.result){throw new Error("Invalid JSON format")}var f=[];for(var g=0;g<j.result.length;g++){var h=j.result[g];if(h.type=="group"){h=b(h)}}f.push(j.result);return f};function b(f){if(f.name=="confluence-users"||f.name=="confluence-administrators"){return f}f.title=f.name;f.group=f.name;f.thumbnailLink={href:Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/group.png",type:"image/png",rel:"thumbnail"};f.link=[{href:Confluence.getContextPath(),rel:"self"}];return f}e("input.autocomplete-sharepage[data-autocomplete-user-bound!=true]",d).each(function(){var h=e(this).attr("data-autocomplete-sharepage-bound","true").attr("autocomplete","off");var g=h.attr("data-max")||10,j=h.attr("data-alignment")||"left",i=h.attr("data-dropdown-target"),f=null;if(i){f=e(i)}else{f=e("<div></div>");h.after(f)}f.addClass("aui-dd-parent autocomplete");h.quicksearch(AJS.REST.getBaseUrl()+"search/user-or-group.json",function(){h.trigger("open.autocomplete-sharepage")},{makeParams:function(k){return{"max-results":g,query:k.replace("{|}","")}},dropdownPlacement:function(k){f.append(k)},makeRestMatrixFromData:c,addDropdownData:function(l){var k=e.trim(h.val());if(a.test(k)){l.push([{name:k,email:k,href:"#",icon:Confluence.getContextPath()+"/download/resources/com.atlassian.confluence.plugins.share-page:mail-page-resources/images/envelope.png"}])}if(!l.length){var m=h.attr("data-none-message");if(m){l.push([{name:m,className:"no-results",href:"#"}])}}return l},ajsDropDownOptions:{alignment:j,displayHandler:function(k){if(k.restObj&&k.restObj.username){return k.name+" ("+k.restObj.username+")"}return k.name},selectionHandler:function(m,l){if(l.find(".search-for").length){h.trigger("selected.autocomplete-sharepage",{searchFor:h.val()});return}if(l.find(".no-results").length){this.hide();m.preventDefault();return}var k=e("span:eq(0)",l).data("properties");if(!k.email){k=k.restObj}h.trigger("selected.autocomplete-sharepage",{content:k});this.hide();m.preventDefault()}}})})};(function(a){jQuery.fn.extend({elastic:function(){var b=["paddingTop","paddingRight","paddingBottom","paddingLeft","fontSize","lineHeight","fontFamily","width","fontWeight","border-top-width","border-right-width","border-bottom-width","border-left-width","borderTopStyle","borderTopColor","borderRightStyle","borderRightColor","borderBottomStyle","borderBottomColor","borderLeftStyle","borderLeftColor"];return this.each(function(){if(this.type!=="textarea"){return false}var g=jQuery(this),c=jQuery("<div />").css({position:"absolute",display:"none","word-wrap":"break-word","white-space":"pre-wrap"}),j=parseInt(g.css("line-height"),10)||parseInt(g.css("font-size"),"10"),l=parseInt(g.css("height"),10)||j*3,k=parseInt(g.css("max-height"),10)||Number.MAX_VALUE,d=0;if(k<0){k=Number.MAX_VALUE}c.appendTo(g.parent());var f=b.length;while(f--){c.css(b[f].toString(),g.css(b[f].toString()))}function h(){var i=Math.floor(parseInt(g.width(),10));if(c.width()!==i){c.css({width:i+"px"});e(true)}}function m(i,o){var n=Math.floor(parseInt(i,10));if(g.height()!==n){g.css({height:n+"px",overflow:o})}}function e(p){var o=g.val().replace(/&/g,"&amp;").replace(/ {2}/g,"&nbsp;").replace(/<|>/g,"&gt;").replace(/\n/g,"<br />");var i=c.html().replace(/<br>/ig,"<br />");if(p||o+"&nbsp;"!==i){c.html(o+"&nbsp;");if(Math.abs(c.height()+j-g.height())>3){var n=c.height()+j;if(n>=k){m(k,"auto")}else{if(n<=l){m(l,"hidden")}else{m(n,"hidden")}}}}}g.css({overflow:"hidden"});g.bind("keyup change cut paste",function(){e()});a(window).bind("resize",h);g.bind("resize",h);g.bind("update",e);g.bind("input paste",function(i){setTimeout(e,250)});e()})}})})(AJS.$);(function(f){var e,c={hideCallback:a,width:250,hideDelay:3600000,calculatePositions:function(h,o,w,s){var p;var y;var u;var l=-7;var m;var q;var x=o.target.offset();var g=o.target.outerWidth();var j=x.left+g/2;var t=(window.pageYOffset||document.documentElement.scrollTop)+f(window).height();var k=10;u=x.top+o.target.outerHeight()+s.offsetY;p=x.left+s.offsetX;var n=x.top>h.height();var i=(u+h.height())<t;q=(!i&&n)||(s.onTop&&n);var r=f(window).width()-(p+s.width+k);if(q){u=x.top-h.height()-8;var v=s.displayShadow?(AJS.$.browser.msie?10:9):0;l=h.height()-v}m=j-p+s.arrowOffsetX;if(s.isRelativeToMouse){if(r<0){y=k;p="auto";m=w.x-(f(window).width()-s.width)}else{p=w.x-20;y="auto";m=w.x-p}}else{if(r<0){y=k;p="auto";m=j-(f(window).width()-h.outerWidth())}else{if(s.width<=g/2){m=s.width/2;p=j-s.width/2}}}return{displayAbove:q,popupCss:{left:p,right:y,top:u},arrowCss:{position:"absolute",left:m,right:"auto",top:l}}}};var a=function(){f(".dashboard-actions .explanation").hide()};var d=function(j,h,i){if(j.find("input").length){i();return}j.append(Confluence.Templates.Share.Dialog.shareContentPopup());AJS.Confluence.SharePage.autocompleteUser();var k=function(m){AJS.Confluence.SharePage.current.hide();if(m){setTimeout(function(){j.empty()},300)}return false};f(document).keyup(function(m){if(m.keyCode==27){k(true);f(document).unbind("keyup",arguments.callee);return false}return true});j.find(".close-dialog").click(function(){k(true)});j.find("#note").elastic();j.find("form").submit(function(){var r=[];j.find(".recipients li").each(function(s,t){r.push(f(t).attr("data-userKey"))});if(r.length<=0){return false}f("button,input,textarea",this).attr("disabled","disabled");j.find(".progress-messages-icon").removeClass("error");j.find(".progress-messages").text("Sending");j.find(".progress-messages").attr("title","Sending");var o=Raphael.spinner(j.find(".progress-messages-icon")[0],7,"#666");j.find(".progress-messages-icon").css("position","absolute").css("left","0").css("margin-top","3px");j.find(".progress-messages").css("padding-left",j.find(".progress-messages-icon").innerWidth()+20);var r=[];j.find(".recipients li[data-userKey]").each(function(s,t){r.push(f(t).attr("data-userKey"))});var q=[];j.find(".recipients li[data-email]").each(function(s,t){q.push(f(t).attr("data-email"))});var m=[];j.find(".recipients li[data-group]").each(function(s,t){m.push(f(t).attr("data-group"))});var n=j.find("#note");var p={users:r,emails:q,groups:m,note:n.hasClass("placeholded")?"":n.val(),entityId:AJS.params.pageId};f.ajax({type:"POST",contentType:"application/json; charset=utf-8",url:Confluence.getContextPath()+"/rest/share-page/latest/share",data:JSON.stringify(p),dataType:"text",success:function(){setTimeout(function(){o();j.find(".progress-messages-icon").addClass("done");j.find(".progress-messages").text("Sent");j.find(".progress-messages").attr("title","Sent");setTimeout(function(){j.find(".progress-messages").text("");j.find(".progress-messages-icon").removeClass("done");j.find("#note").val("");f("button,input,textarea",j).removeAttr("disabled");k(false)},1000)},500)},error:function(t,s){o();j.find(".progress-messages-icon").addClass("error");j.find(".progress-messages").text("Error sending");j.find(".progress-messages").attr("title","Error sending"+": "+s);f("button,input,textarea",j).removeAttr("disabled")}});return false});var l=j.find("#users");var g=j.find("input.submit");l.bind("selected.autocomplete-sharepage",function(n,m){var o=function(r,q,s){var u=j.find(".recipients"),t,p;t="li[data-"+r+'="'+s.content[r]+'"]';if(u.find(t).length>0){u.find(t).hide()}else{u.append(q(s.content))}p=u.find(t);p.find(".remove-recipient").click(function(){p.remove();if(u.find("li").length==0){g.attr("disabled","true")}AJS.Confluence.SharePage.current.refresh();l.focus();return false});p.fadeIn(200)};if(m.content.email){o("email",Confluence.Templates.Share.Dialog.recipientEmail,m)}else{if(m.content.type=="group"){o("group",Confluence.Templates.Share.Dialog.recipientGroup,m)}else{o("userKey",Confluence.Templates.Share.Dialog.recipientUser,m)}}AJS.Confluence.SharePage.current.refresh();g.removeAttr("disabled");l.val("");l.focus();return false});l.bind("open.autocomplete-sharepage",function(n,m){if(f("a:not(.no-results)",AJS.dropDown.current.links).length>0){AJS.dropDown.current.moveDown()}});l.keypress(function(m){return m.keyCode!=13});f(document).bind("showLayer",function(o,n,m){if(n=="inlineDialog"&&m.popup==AJS.Confluence.SharePage.current){m.popup.find("#users").focus()}});f(h).parents().filter(function(){return this.scrollTop>0}).scrollTop(0);i()};var b=function(g){var h=f("#splitter-content");if(h.length!==0){g.container=h;g.offsetY=AJS.InlineDialog.opts.offsetY-h.offset().top}return g};AJS.Confluence.SharePage.initDialog=function(g,i,h){if(g.length){var j=f.extend(false,b(c),h);AJS.Confluence.SharePage.current=AJS.InlineDialog(g,i,d,j)}};AJS.toInit(function(g){AJS.Confluence.SharePage.initDialog(g("#shareContentLink"),"shareContentPopup")})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics.js' */
(function(){var a=window.BrowserMetrics||{};a.isFunction=function(b){return !!(b&&b.constructor&&b.call&&b.apply)};a.isEnabled=function(){if(a.enabled===undefined){a.enabled=true}return a.enabled};window.BrowserMetrics=a}());(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var f=5;var e=12000;var c=function(g){return Math.round(g)};var a=function(g){return Math.round(g*100)/100};var d=function(k){var h=(function(){var n=/^(\w+):\/\/([^\/]*)(.*)$/;return function(p){var o=p.match(n);if(!o){return{path:p}}return{scheme:o[1],host:o[2],path:o[3]}}}());var i=(function(){var n=["secureConnectionStart","requestStart","responseStart","responseEnd","domContentLoadedEventStart","domContentLoadedEventEnd","loadEventEnd"];return function(o){if(k.performance){var s=k.performance.timing;var p=s.navigationStart;if(p){for(var r=0;r<n.length;++r){var q=n[r];var t=s[q];if(t){o(q,t-p)}}}}}}());var g=(function(){var o=[{key:"LOGIN",pattern:/^\/login.*/i},{key:"J-DASH",pattern:/^\/secure\/dashboard\.jspa.*/i},{key:"J-ISSUE",pattern:/^\/browse\/\w+\-\w+.*/i},{key:"J-NAV",pattern:/^\/issues.*/i},{key:"J-RAPID",pattern:/secure\/rapidboard\.jspa/i},{key:"SD-AGENT",pattern:/^(\/\w+)?\/servicedesk\/agent\/.*/i},{key:"SD-CUSTOMER",pattern:/^(\/\w+)?\/servicedesk\/customer\/.*/i},{key:"C-DASH",pattern:/^\/wiki(\/)?(\?.*|#.*)?$/i},{key:"C-DASH",pattern:/^\/wiki\/dashboard\.action.*$/i},{key:"C-SPACE",pattern:/^\/wiki\/display\/\w+(\?.*|#.*)?$/i},{key:"C-PAGE",pattern:/^\/wiki\/display\/\w+\/.*/i},{key:"C-PAGE",pattern:/^\/wiki\/pages\/viewpage\.action.*/i},{key:"C-BLOG",pattern:/^\/wiki\/display\/~\w+\/\d+\/\d+\/\d+\/.*/i},{key:"C-EDITOR",pattern:/^\/wiki\/pages\/editpage\.action.*/i},{key:"C-CREATE",pattern:/^\/wiki\/pages\/createpage\.action.*/i}];return function n(){var r=h(k.location.href).path;for(var p=0;p<o.length;++p){var q=o[p];if(r.match(q.pattern)){return q.key}}return null}}());function j(){var n=g();if(n){i(function(p,r){var o="browser.metrics."+p,q={version:f,page:n,value:r>e?"x":Math.ceil((r)/100),rawValue:c(r)};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent(o,q):AJS.trigger("analyticsEvent",{name:o,data:q})})}}function m(){try{j()}catch(n){if(window.console){window.console.log("Error reporting browser metrics: "+n)}}}function l(){if(k.performance.timing.loadEventEnd){m()}else{setTimeout(l,1000)}}if(k.performance&&k.performance.timing){l()}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initPageLoad=d}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-events.js' */
(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var e=5;var d=12000;var a=function(f){return Math.round(f*100)/100};var c=function(g){var l={};function h(){return g.performance&&g.performance.now?g.performance.now():new Date().getTime()}function n(o){return o===Object(o)}function k(o){if(n(o)){return o.eventName+"."+o.eventType}else{return o}}function m(o){if(n(o)){return o.eventName}else{return o}}function j(o){if(n(o)){return o.eventType}else{return""}}function f(o){var p=k(o);l[p]=h()}function i(r,u){var v=k(r);if(!l[v]){throw ("Error logging browser metrics event end: no start event for key '"+v+"'")}var t=h()-l[v];l[v]=null;var o=m(r),q=j(r);var p="browser.metrics.e."+o+(u?"."+u:""),s={version:e,value:t>d?"x":Math.ceil((t)/100),rawValue:a(t),eventType:q};g.AJS.Analytics?g.AJS.Analytics.triggerPrivacyPolicySafeEvent(p,s):g.AJS.trigger("analyticsEvent",{name:p,data:s})}return{start:f,end:i}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initEvents=c}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-init.js' */
(function(){var a=window.BrowserMetrics||{};if(a.isEnabled()){if(Math.random()<0.1){window.ATL_PERF&&window.ATL_PERF.initPageLoad&&window.ATL_PERF.initPageLoad(window)}window.ATL_PERF&&window.ATL_PERF.initEvents&&(function(){window.BrowserMetrics=window.ATL_PERF.initEvents(window)}())}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:querystring', location = '/includes/js/api/querystring.js' */
define("confluence/api/querystring",[],function(){return{stringify:function(a){var b="",c;for(c in a)for(var d=0;d<a[c].length;d++)b+="&"+c,a[c][d]&&(b+="="+a[c][d]);return b.substring(1)},parse:function(a){var b={};if(a){"?"===a.substr(0,1)&&(a=a.substr(1));for(var a=a.split("&"),c=0;c<a.length;c++){var d=a[c].split("=");b[d[0]]||(b[d[0]]=[]);b[d[0]].push(a[c].substring(d[0].length+1))}}return b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:url', location = '/includes/js/api/url.js' */
define("confluence/api/url",["confluence/api/querystring","jquery"],function(d,e){var g=/([^\?|#]+)[\?]?([^#]*)[#]?(.*)/,f=["source","urlPath","queryParams","anchor"];return{parse:function(a){var b={};if(a=g.exec(a)){for(var c=0;c<f.length;c++)b[f[c]]=a[c];b.queryParams=d.parse(b.queryParams)}return b},format:function(a){return e.isEmptyObject(a)?"":(!a.urlPath?"":a.urlPath)+(e.isEmptyObject(a.queryParams)?"":"?"+d.stringify(a.queryParams))+(!a.anchor?"":"#"+a.anchor)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:analytics-support', location = '/includes/js/analytics-support.js' */
define("confluence/analytics-support","jquery ajs confluence/meta window document confluence/api/url".split(" "),function(j,o,n,k,l,h){var b={},m;b.setAnalyticsSource=function(a,d){if(typeof m==="undefined"){var c=j._data(k,"events");m=c&&c.analytics&&c.analytics.length>0}m&&a.attr("href",function(a,c){var b=encodeURIComponent(d),g=h.parse(c);if(!j.isEmptyObject(g))g.queryParams.src=[b];return h.format(g)})};b.srcRemovedUrl=function(a){a=h.parse(a);delete a.queryParams.src;for(var d=Object.keys(a.queryParams),
c=0;c<d.length;c++){var b=d[c],f=b.split(".");f.length===3&&f[0]==="src"&&delete a.queryParams[b];b==="jwt"&&delete a.queryParams[b]}return h.format(a)};b.srcParamValues=function(a){return(a=h.parse(a).queryParams)&&a.src?a.src:[]};b.srcAttrParamValues=function(a){for(var a=h.parse(a).queryParams,b={},c=Object.keys(a),e=0;e<c.length;e++){var f=c[e],i=f.split(".");if(i.length===3&&i[0]==="src"){var g=i[1],i=i[2];b[g]=b[g]||{};b[g][i]=decodeURIComponent(a[f][0])}}return b};b.extractAnalyticsData=function(a){for(var d=
[],c=b.srcParamValues(a),a=b.srcAttrParamValues(a),e=0;e<c.length;e++){var f=c[e];d.push({src:f,attr:a[f]||{}})}return d};b.publish=function(a,b){o.trigger("analytics",{name:a,data:b||{}})};b.init=function(){var a=b.extractAnalyticsData(l.URL),d={userKey:n.get("remote-user-key"),pageID:n.get("page-id")};if(a.length>0){for(var c=0;c<a.length;c++){var e=a[c],f=j.extend({},d,e.attr);b.publish("confluence.viewpage.src."+e.src,f)}if(k.history&&k.history.replaceState){a=b.srcRemovedUrl(l.URL);l.URL!==a&&
k.history.replaceState(null,"",a)}}else b.publish("confluence.viewpage.src.empty",d)};return b});require("confluence/module-exporter").exportModuleAsGlobal("confluence/analytics-support","AJS.Confluence.Analytics",function(j){require("ajs").toInit(j.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-analytics', location = '/includes/js/page.js' */
define("confluence/page",["ajs","jquery","confluence/analytics-support","window","document"],function(a,b,e,f,g){var i=a.Meta.get("page-id"),d=function(c,a){e.publish("confluence.page."+c,b.extend({pageID:i},a||{}))},j=(new Date).getTime();return function(){var c=b("#main-content");d("view");c.on("click","a",function(a){a=-1<a.currentTarget.href.indexOf(f.location.host)?"internal":"external";d("link.click",{linkType:a})});var h=b(f),e=(new Date).getTime();h.on("scroll.content",a.debounce(function(){var a=
g.body.scrollTop+g.body.offsetHeight,b=c.offset().top+c.height();a>b&&(d("scroll-to-bottom",{secondsSinceReadyEvent:((new Date).getTime()-e)/1E3,secondsSincePageLoad:((new Date).getTime()-j)/1E3}),h.off("scroll.content"))},200));setTimeout(function(){d("reading")},3E5)}});require("confluence/module-exporter").safeRequire("confluence/page",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:blog-post-resources', location = 'com/atlassian/confluence/plugins/macros/advanced/blog-posts.js' */
jQuery(function(a){a(".macro-blank-experience .create-post").bind("click",function(){var b=AJS.Meta.get("base-url")+"/pages/createblogpost.action?spaceKey="+AJS.Meta.get("space-key");window.location=b})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.multimedia:flash-autosize', location = 'javascript/flash-autosize.js' */
AJS.toInit(function(b){function a(e,d){var c;if(d>=20){AJS.log("unable to auto size flash - took too long to load");return}c=b([]);e.each(function(){var g=b(this);var i;var f;if(this.GetVariable){if(!g.attr("height")){i=this.GetVariable("height");if(i){g.height(i)}else{c=c.add(g);return}}if(!g.attr("width")){f=this.GetVariable("width");if(f){g.width(f)}else{c=c.add(g);return}}}});if(c.length){setTimeout(function(){a(c,d+1)},100)}}a(b('embed[type="application/x-shockwave-flash"]'),0);b(window).bind("render-content-loaded",function(d,c){a(b('embed[type="application/x-shockwave-flash"]',c),0)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.view-source:view-source-menu-resources', location = 'com/atlassian/confluence/plugins/viewsource/js/viewsource.js' */
define("confluence-view-source/viewsource",["jquery","window"],function(a,b){return function(){a("#action-view-source-link").click(function(a){b.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=800, height=600, scrollbars, resizable");a.preventDefault();return!1})}});require("confluence/module-exporter").safeRequire("confluence-view-source/viewsource",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.view-storage-format:view-storage-menu-resources', location = 'com/atlassian/confluence/plugins/viewstorage/js/viewstorage.js' */
AJS.toInit(function(a){a(".view-storage-link, .view-storage-link a").click(function(b){window.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=800, height=600, scrollbars, resizable");b.preventDefault();return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-amd-resources', location = '/js/amd/confluence-amd.js' */
define("confluence",function(){return Confluence});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-amd-resources', location = '/js/amd/tinymce-amd.js' */
define("tinymce",function(){return tinymce});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/view-file-macro-utils.js' */
define("vfm/view-file-macro-utils",[],function(){var a={DEFAULT_HEIGHT:"250",DEFAULT_HEIGHT_IN_COMMENT:"150",THUMBNAIL_STATUS_IN_PROGRESS:202,THUMBNAIL_STATUS_CONVERTED:200,THUMBNAIL_STATUS_ERROR:415,THUMBNAIL_STATUS_BUSY:429,THUMBNAIL_POLLING_PERIOD:1000,THUMBNAIL_POLLING_BACKOFF_RATIO:1.25,MAP_NICE_TYPE_TO_TEXT:{"pdf document":"PDF","word document":"Document","excel spreadsheet":"Spreadsheet","powerpoint presentation":"Presentation","generic file":"File"},getFileNameFromUrl:function(b){if(!b){return""}var c=b.indexOf("#");c=(c>=0)?c:b.length;b=b.substring(0,c);c=b.indexOf("?");c=(c>=0)?c:b.length;b=b.substring(0,c);c=b.lastIndexOf("/");b=b.substring(c+1,b.length);return decodeURIComponent(b)},isSupportPointerEvents:function(){var b=document.createElement("x");b.style.cssText="pointer-events:auto";return b.style.pointerEvents==="auto"},getParameterByName:function(d,c){var e=d.indexOf("#");if(e>=0){d=d.substring(0,e)}var b=new RegExp(c+"=([^&]*)","i").exec(d);return b?decodeURIComponent(b[1]):null},addParamsToUrl:function(b,h){var f="";if(b.indexOf("?")===-1){f="?"}else{f="&"}var e=Object.keys(h);for(var d=0;d<e.length;d++){var c=e[d];var g=h[c];if(d>0){f+="&"}f+=c+"="+g}return b+f},getFileTypeTextFromNiceType:function(b){b=b?b.toLowerCase():"";return this.MAP_NICE_TYPE_TO_TEXT[b]?this.MAP_NICE_TYPE_TO_TEXT[b]:b}};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/services/conversion-service.js' */
define("vfm/services/conversion-service",["ajs","jquery"],function(a,b){return{postThumbnailConversionResults:function(c){var d=a.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/results";var e=Object.keys(c);var f=_.map(e,function(g){return{id:g,v:c[g].version}});return b.ajax({type:"POST",url:d,contentType:"application/json",data:JSON.stringify(f)})},getThumbnailUrl:function(d,c){return a.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/"+d+"/"+c}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:file-types-utils-resources', location = 'utils/file-types-utils.js' */
define("confluence-editor/utils/file-types-utils",[],function(){var e={"aui-iconfont-file-image":"image/gif image/jpeg image/pjpeg image/png image/tiff image/bmp".split(" "),"aui-iconfont-file-pdf":["application/pdf"],"aui-iconfont-file-video":"audio/mpeg audio/x-wav audio/mp3 audio/mp4 video/mpeg video/quicktime video/mp4 video/x-m4v video/x-flv video/x-ms-wmv video/avi video/webm video/vnd.rn-realvideo".split(" "),"aui-iconfont-file-code":"text/html text/xml text/javascript application/javascript application/x-javascript text/css text/x-java-source".split(" "),
"aui-iconfont-file-doc":["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"aui-iconfont-file-xls":["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],"aui-iconfont-file-ppt":["application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation"],"aui-iconfont-file-txt":["text/plain"],"aui-iconfont-file-zip":["application/zip","application/java-archive"]},b={},c;for(c in e)for(var f=
e[c],d=0,g=f.length;d<g;d++)b[f[d]]=c;return{getAUIIconFromMime:function(a){return b[a]||"aui-iconfont-file-generic"},isImage:function(a){return b[a]&&0===a.indexOf("image/")}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/utils/file-types-utils","AJS.Confluence.FileTypesUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-soy-resources', location = '/templates/embedded-file-view.soy' */
// This file was automatically generated from embedded-file-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.ViewFileMacro.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.ViewFileMacro == 'undefined') { Confluence.ViewFileMacro = {}; }
if (typeof Confluence.ViewFileMacro.Templates == 'undefined') { Confluence.ViewFileMacro.Templates = {}; }


Confluence.ViewFileMacro.Templates.embeddedFile = function(opt_data, opt_ignored) {
  return '<span class="confluence-embedded-file-wrapper"><a class="confluence-embedded-file" href="' + soy.$$escapeHtml(opt_data.fileSrc) + '" data-nice-type="' + soy.$$escapeHtml(opt_data.niceType) + '" data-file-src="' + soy.$$escapeHtml(opt_data.fileSrc) + '" data-linked-resource-id="' + soy.$$escapeHtml(opt_data.attachmentId) + '" data-linked-resource-type="attachment" data-linked-resource-container-id="' + soy.$$escapeHtml(opt_data.containerId) + '" data-linked-resource-default-alias="' + soy.$$escapeHtml(opt_data.fileName) + '" data-mime-type="' + soy.$$escapeHtml(opt_data.mimeType) + '" data-has-thumbnail="' + ((opt_data.hasThumbnail) ? 'true' : 'false') + '" data-linked-resource-version="' + soy.$$escapeHtml(opt_data.attachmentVersion) + '"' + ((opt_data.unresolvedCommentCount && opt_data.unresolvedCommentCount >= 0) ? 'data-unresolved-comment-count=' + soy.$$escapeHtml(opt_data.unresolvedCommentCount) : '') + '><img src="' + soy.$$escapeHtml(opt_data.placeholderSrc) + '" height="' + soy.$$escapeHtml(opt_data.height) + '" />' + ((! opt_data.hasThumbnail) ? '<span class="title">' + soy.$$escapeHtml(opt_data.fileName) + '</span>' : '') + '</a></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.embeddedFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.embeddedFile';
}


Confluence.ViewFileMacro.Templates.embeddedUnknownFile = function(opt_data, opt_ignored) {
  return '<span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-file unknown-attachment" src="' + soy.$$escapeHtml(opt_data.placeholderSrc) + '" /></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.embeddedUnknownFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.embeddedUnknownFile';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFile = function(opt_data, opt_ignored) {
  return '<span class="overlay"></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFile';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount = function(opt_data, opt_ignored) {
  return '<span class="comment-count-overlay"><span class="content">' + soy.$$escapeHtml(opt_data.commentCountRep) + '</span></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc = function(opt_data, opt_ignored) {
  return '<span class="file-type-desc-overlay"><i class="aui-icon aui-icon-small ' + soy.$$escapeHtml(opt_data.iconClass) + '"></i><span class="content"> ' + soy.$$escapeHtml(opt_data.fileType) + '</span></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/services/file-service.js' */
define("vfm/services/file-service",["ajs","jquery"],function(a,b){return{getCommentCount:function(c,e){var d="/rest/files/1.0/files/content/{0}/commentCount?attachmentId={1}";d=a.contextPath()+a.format(d,c,e);return b.get(d)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/components/embedded-file-view.js' */
define("vfm/components/embedded-file-view",["jquery","backbone","ajs","confluence","vfm/view-file-macro-utils"],function(c,g,f,h,i){function b(s){var r=c(s.el);var q=r.find(".confluence-embedded-image, .confluence-embedded-file");if(q.hasClass("unknown-attachment")||(q.attr("src")&&q.attr("src").indexOf("/confluence/plugins/servlet/confluence/placeholder/unknown-attachment")>=0)){return this}var j={mimeType:"",niceType:""};var k=q.hasClass("confluence-embedded-image");var o=r.parent().is("a");var m=q.attr("data-has-thumbnail")==="true";if(k){j.mimeType="image/png"}else{j.mimeType=q.attr("data-mime-type");j.niceType=q.attr("data-nice-type")!=="null"?q.attr("data-nice-type"):"generic file"}var p=!o?e(q):"";var l=(!k&&m)?a(j):"";if(p||l){var n=h.ViewFileMacro.Templates.overlayEmbeddedFile();r.append(c(n).append(p).append(l));if(l){r.addClass("has-comment-overlay")}}}var d=function(j){j=parseInt(j,10);j=c.isNumeric(j)?j:0;return j>9?"9+":j+""};var e=function(o){var j="",k=o.attr("data-linked-resource-container-id"),m=o.attr("data-linked-resource-id");if(k&&m){var n=o.attr("data-unresolved-comment-count");var l=d(n);if(l!=="0"){j=h.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount({commentCountRep:l})}}return j};var a=function(j){return h.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc({fileType:i.getFileTypeTextFromNiceType(j.niceType),iconClass:f.Confluence.FileTypesUtils.getAUIIconFromMime(j.mimeType)})};return{render:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources', location = '/js/vfm.js' */
require(["jquery","ajs","vfm/components/embedded-file-view"],function(c,a,b){c(document).on("click",".confluence-embedded-file.unknown-attachment",function(d){d.preventDefault()});a.toInit(function(){c(".confluence-embedded-file-wrapper").each(function(){b.render({el:this})})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/store-1.3.1.js' */
(function(){var l={},h=window,k=h.document,c="localStorage",n="globalStorage",d="__storejs__",g;l.disabled=false;l.set=function(e,o){};l.get=function(e){};l.remove=function(e){};l.clear=function(){};l.transact=function(e,o){var p=l.get(e);if(typeof p=="undefined"){p={}}o(p);l.set(e,p)};l.serialize=function(e){return JSON.stringify(e)};l.deserialize=function(e){if(typeof e!="string"){return undefined}return JSON.parse(e)};function b(){try{return(c in h&&h[c])}catch(e){return false}}function m(){try{return(n in h&&h[n]&&h[n][h.location.hostname])}catch(e){return false}}if(b()){g=h[c];l.set=function(e,o){if(o===undefined){return l.remove(e)}g.setItem(e,l.serialize(o))};l.get=function(e){return l.deserialize(g.getItem(e))};l.remove=function(e){g.removeItem(e)};l.clear=function(){g.clear()}}else{if(m()){g=h[n][h.location.hostname];l.set=function(e,o){if(o===undefined){return l.remove(e)}g[e]=l.serialize(o)};l.get=function(e){return l.deserialize(g[e]&&g[e].value)};l.remove=function(e){delete g[e]};l.clear=function(){for(var e in g){delete g[e]}}}else{if(k.documentElement.addBehavior){var j,f;try{f=new ActiveXObject("htmlfile");f.open();f.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></frame>');f.close();j=f.w.frames[0].document;g=j.createElement("div")}catch(i){g=k.createElement("div");j=k.body}function a(e){return function(){var p=Array.prototype.slice.call(arguments,0);p.unshift(g);j.appendChild(g);g.addBehavior("#default#userData");g.load(c);var o=e.apply(l,p);j.removeChild(g);return o}}l.set=a(function(p,e,o){if(o===undefined){return l.remove(e)}p.setAttribute(e,l.serialize(o));p.save(c)});l.get=a(function(o,e){return l.deserialize(o.getAttribute(e))});l.remove=a(function(o,e){o.removeAttribute(e);o.save(c)});l.clear=a(function(q){var o=q.XMLDocument.documentElement.attributes;q.load(c);for(var p=0,e;e=o[p];p++){q.removeAttribute(e.name)}q.save(c)})}}}try{l.set(d,d);if(l.get(d)!=d){l.disabled=true}l.remove(d)}catch(i){l.disabled=true}if(typeof module!="undefined"){module.exports=l}else{if(typeof define==="function"&&define.amd){define(l)}else{this.store=l}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/page-visibility.js' */
define("atlassian/analytics/page-visibility",function(){var a=(document.hidden!==undefined);var b={supported:a,isHidden:function(){return a?document.hidden:false}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/user-activity-xhr-header.js' */
define("atlassian/analytics/user-activity-xhr-header",["atlassian/analytics/page-visibility"],function(c){var e="x-atlassian-mau-ignore";var d=XMLHttpRequest.prototype.send;var a=window.fetch;var b=false;return{install:function(){if(!b&&c.supported){XMLHttpRequest.prototype.send=function(){if(c.isHidden()){this.setRequestHeader(e,c.isHidden())}d.apply(this,arguments)};if(a){window.fetch=function(f,i){var g=i||{};var h=g.headers;if(c.isHidden()){g.headers=(h)?new Headers(h):new Headers();g.headers.append(e,c.isHidden())}return a.call(this,f,g)}}b=true}},uninstall:function(){if(b){XMLHttpRequest.prototype.send=d;if(a){window.fetch=a}}b=false}}});require("atlassian/analytics/user-activity-xhr-header").install();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/atlassian-analytics.js' */
(function(d){var p=AJS.$.ajax;var k="atlassian-analytics";var i=typeof AJS.contextPath=="function"?AJS.contextPath():typeof AJS.Confluence!="undefined"?AJS.Confluence.getContextPath():window.contextPath!=null?window.contextPath:"";var o=null;var l=null;var f=null;var q="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(y){var x=Math.random()*16|0,w=y=="x"?x:(x&3|8);return w.toString(16)});var s=function(){var w="unknown";if(document.body.id=="jira"){w="jira"}else{if(document.body.id=="com-atlassian-confluence"){w="confluence"}}l=k+"."+w;f=l+".lock"};var e=function(){if(store.get(f)){return false}store.set(f,q);return(store.get(f)===q)};var t=function(){store.set(f,null)};var h=function(){var x=[],z,A,w,y;if(AJS.EventQueue.length==0){return}x=store.get(l)||x;for(w=0,y=AJS.EventQueue.length;w<y;++w){A=AJS.EventQueue[w];if(A.name){z={name:A.name,properties:A.properties,time:A.time||0};x.push(z)}}AJS.EventQueue.length=0;store.set(l,x)};var u=0;var a=function(w){return Math.min(5000*Math.pow(2,w),5*60*1000)};var g=function(){var z;function x(){setTimeout(g,a(u=0))}function w(){setTimeout(g,a(++u))}if(!e()){return x()}h();z=store.get(l);if(!z||!z.length){t();return x()}store.remove(l);t();if(!n(z)){return x()}var A=new Date().getTime();for(var y=0;y<z.length;y++){if(z[y].time>0){z[y].timeDelta=z[y].time-A}else{z[y].timeDelta=y-z.length}delete z[y].time}o=p({type:"POST",url:i+"/rest/analytics/1.0/publish/bulk",data:JSON.stringify(z),contentType:"application/json",dataType:"json"});o.fail(function(){AJS.EventQueue.concat(z);h();w()});o.done(function(){x()})};var n=function(y){for(var x=y.length-1;x>=0;x--){var A="";var z=y[x];var w=z.properties;if(typeof z.name==="undefined"){A="you must provide a name for the event."}else{if(typeof w!=="undefined"&&w!==null){if(w.constructor!==Object){A="properties must be an object with key value pairs."}else{b(w)}}}if(A!==""){AJS.log("WARN: Invalid analytics event detected and ignored, "+A+"\nEvent: "+JSON.stringify(z));y.splice(x,1)}}return y.length};var b=function(y){for(var x in y){if(y.hasOwnProperty(x)){var w=y[x];if(c(w)&&j(w)){}else{if(c(w)&&w.toString){y[x]=w.toString()}else{y[x]=""}}}}};function c(w){return typeof w!=="undefined"&&w!==null}function j(w){return typeof w==="number"||typeof w==="string"||typeof w==="boolean"}var m=function(){if(o&&!(o.state()==="resolved"||o.state()==="rejected")){o.abort()}};AJS.EventQueue=AJS.EventQueue||[];var r=Array.prototype.push;AJS.EventQueue.push=function(w){w.time=new Date().getTime();r.call(AJS.EventQueue,w)};AJS.toInit(function(){s();setTimeout(g,500);v()});d(window).unload(function(){m();h()});AJS.Analytics={triggerPrivacyPolicySafeEvent:function(w,x){AJS.log("WARN: 'triggerPrivacyPolicySafeEvent' has been deprecated");AJS.EventQueue.push({name:w,properties:x})}};AJS.bind("analytics",function(w,x){AJS.EventQueue.push({name:x.name,properties:x.data})});AJS.bind("analyticsEvent",function(w,x){AJS.EventQueue.push({name:x.name,properties:x.data})});var v=function(){if(window.location.pathname.indexOf("/secure/admin/ViewApplicationProperties")>-1){AJS.$("[data-property-id='analytics-enabled']").remove()}else{if(window.location.pathname.indexOf("/secure/admin/EditApplicationProperties")>-1){var x=AJS.$(":contains(Enable Atlassian analytics)");if(x.size()>0){var w=x[x.size()-2];if(w){w.remove()}}}}}}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:application-header-administration-cog-resource', location = 'header/cog.js' */
var NavLinks=(function(a){a.ApplicationHeader=function(b){b.Cog=(function(){var c=function(){var d=AJS.$("#system-admin-menu-content");if(d.length>0){return d}var e=AJS.$("#admin-menu-link-content");if(e.length>0){return e}return AJS.$("#bamboo\\.global\\.header-admin\\.menu")};return{getDropdown:c}}());return b}(a.ApplicationHeader||{});return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminshortcuts.soy' */
// This file was automatically generated from adminshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.adminshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.adminshortcuts == 'undefined') { navlinks.templates.adminshortcuts = {}; }


navlinks.templates.adminshortcuts.section = function(opt_data, opt_ignored) {
  var param5 = '<ul class="aui-list-truncate">';
  var linkList7 = opt_data.links;
  var linkListLen7 = linkList7.length;
  for (var linkIndex7 = 0; linkIndex7 < linkListLen7; linkIndex7++) {
    var linkData7 = linkList7[linkIndex7];
    param5 += '<li><a href="' + soy.$$escapeHtml(linkData7.link) + '">' + soy.$$escapeHtml(linkData7.label) + '</a></li>';
  }
  param5 += '</ul>';
  var output = '' + aui.dropdown2.section({id: 'nl-remote-admin-section', label: "Other applications", content: param5});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.adminshortcuts.section.soyTemplateName = 'navlinks.templates.adminshortcuts.section';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminnavlinks.js' */
var NavLinks=(function(a){a.AdminShortcuts=(function(){var c=function(){return AJS.$.ajax({url:AJS.contextPath()+"/rest/menu/latest/admin",cache:false,dataType:"json"})};var b=function(){AJS.$("#nl-remote-admin-section").on("click","a",function(){NL.trackEvent("remoteAdminItemSelected",NL.getCurrentApplication(),$(this).attr("href"))})};return{render:function(){c().done(function(e){e=_.reject(e,function(f){return f.local===true});if(e.length){var d=navlinks.templates.adminshortcuts.section({links:e});a.ApplicationHeader.Cog.getDropdown().append(d);b()}})}}}());return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts', location = 'adminshortcuts/adminshortcuts-cdn.js' */
AJS.toInit(function(){if(AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled("rotp.admin.shortcuts")){NavLinks.AdminShortcuts.render()}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.soy' */
// This file was automatically generated from projectshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.projectshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.projectshortcuts == 'undefined') { navlinks.templates.projectshortcuts = {}; }


navlinks.templates.projectshortcuts.dialogContent = function(opt_data, opt_ignored) {
  return '' + ((opt_data.localShortcuts && opt_data.localShortcuts.length > 0) ? navlinks.templates.projectshortcuts.dialogContentShortcuts({shortcuts: opt_data.localShortcuts, listClass: 'projectshortcut-links'}) : '') + ((opt_data.remoteShortcuts != null) ? (opt_data.remoteShortcuts.length > 0) ? '<h2 class="projectshortcuts-heading">Related Links</h2>' + navlinks.templates.projectshortcuts.dialogContentShortcuts(soy.$$augmentMap(opt_data.remoteShortcuts, {shortcuts: opt_data.remoteShortcuts, listClass: 'projectshortcut-links'})) : '' : navlinks.templates.projectshortcuts.dialogLoading(null));
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContent.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContent';
}


navlinks.templates.projectshortcuts.headingWrapper = function(opt_data, opt_ignored) {
  return '<div class="project-dialog-header-wrapper"><div class="project-header"><img class="project-img" src="' + soy.$$escapeHtml(opt_data.logoUrl) + '"><h2 class="dialog-title">' + soy.$$escapeHtml(opt_data.title) + '</h2></div><div class="project-content-wrapper">' + soy.$$filterNoAutoescape(opt_data.contentHtml) + '</div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.headingWrapper.soyTemplateName = 'navlinks.templates.projectshortcuts.headingWrapper';
}


navlinks.templates.projectshortcuts.dialogContentShortcuts = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
  var shortcutList35 = opt_data.shortcuts;
  var shortcutListLen35 = shortcutList35.length;
  for (var shortcutIndex35 = 0; shortcutIndex35 < shortcutListLen35; shortcutIndex35++) {
    var shortcutData35 = shortcutList35[shortcutIndex35];
    output += '<li' + ((shortcutIndex35 == shortcutListLen35 - 1) ? ' class="last"' : '') + '>' + navlinks.templates.projectshortcuts.dialogContentShortcut(shortcutData35) + '</li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcuts.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcuts';
}


navlinks.templates.projectshortcuts.dialogContentShortcut = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.link) + '"' + ((opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.label) + '</a>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcut.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcut';
}


navlinks.templates.projectshortcuts.dialogLoading = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="projectshortcuts-loading">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogLoading.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogLoading';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.js' */
(function(e,g){var i,k={},m="key",b="name",j="entity-type";function f(s){var n=e(this),o=n.data(m),q=n.data(b),p=n.data(j);if(typeof o==="undefined"){return}s.preventDefault();i=new AJS.Dialog({width:600,keypressListener:function(u){if(u.which==jQuery.ui.keyCode.ESCAPE){i.remove()}},id:"project-shortcuts-dialog"}).addCancel("Close",function(){i.remove()}).addPanel("",navlinks.templates.projectshortcuts.headingWrapper({title:q,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogLoading({text:"Retrieving links…"})})).show();c(i);if(!k[o]){k[o]={entity:{title:q},localShortcuts:null,remoteShortcuts:null};d(AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+o,{entityType:p}).done(t);d(AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+o,{entityType:p}).done(r).fail(function(){var u=i.getCurrentPanel().body.find(".project-content-wrapper");u.find(".projectshortcuts-loading").remove();AJS.messages.error(u,{body:"Could not retrieve remote project shortcuts",closeable:false});c(i)})}else{l(k[o])}function t(u){k[o].localShortcuts=u.shortcuts;l(k[o])}function r(u){k[o].remoteShortcuts=u.shortcuts;l(k[o])}}function h(){return e(".project-shortcut-dialog-trigger img").attr("src")}function l(n){if(n.localShortcuts){i.getCurrentPanel().html(navlinks.templates.projectshortcuts.headingWrapper({title:n.entity.title,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogContent(n)}));c(i)}}function a(p){var o=210;if(!p||p.length<=o){return p}var n=o;while(n>0&&p.charAt(n)!=" "){n--}if(n==0){n=o}p=p.substring(0,n);if(p.length>=n){p=p+"..."}return p}function c(n){var q=n.popup.element,p=q.find(".dialog-panel-body"),o=q.find(".dialog-components");p.height("auto");q.height(o.outerHeight()-1);e(".aui-shadow").remove()}function d(n,o){return e.ajax({url:n,cache:false,data:o,dataType:"json"})}e(document).on("click",".project-shortcut-dialog-trigger",f)}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:atlassian-ui-popup-display-controller', location = 'popups/DisplayController.js' */
AJS.Popups=AJS.Popups||{};AJS.Popups.DisplayController=function(){var c=[];var a=false;var b=false;AJS.toInit(function(){setTimeout(function(){AJS.Popups.DisplayController.render()},0)});return{request:function(d){c.push(d);if(a&&b===false){this.render()}},render:function(){c.sort(function(e,d){return e.weight-d.weight});a=true;if(c.length!==0){b=true;c[0].show()}}}}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jira-issues-view-mode-resources', location = 'jira/jira-issues-view-mode/main.js' */
require(["ajs","jquery"],function(b,d){var a="wr!confluence.extra.jira:jira-issues-view-mode-async-resource";var c=function(){var e=d(".wiki-content [data-jira-key][data-client-id]");if(e.length==0){return false}WRM.require(a,function(){require(["confluence/jim/jira/jira-issues-view-mode/lazy-loading","confluence/jim/jira/jira-issues-view-mode/fix-ui"],function(g,f){g.init(e).done(function(){f.fixBreakIconInOldConf()})})})};b.toInit(c);b.bind("ic-jim-async-supported",c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:amd-support', location = 'amd/confluence-shim.js' */
define("confluence/jim/confluence-shim",function(){return window.Confluence});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:amd-support', location = 'amd/amd-exporter.js' */
define("confluence/jim/amd/module-exporter",[],function(){var a={};a.namespace=function(e,f,d){var g=e.split(".");d=d||window;for(var c=0,h=g.length-1;c<h;c++){var b=d[g[c]];d=(b!=null)?b:d[g[c]]={}}if(d[g[c]]){if(window.console&&window.console.warn){window.console.warn('Value of "'+e+'" was overridden')}}d[g[c]]=f||d[g[c]]||{};return d[g[c]]};a.safeRequire=function(c,b){if(define&&define.amd===undefined){var d=require(c);if(b){b(d)}}};a.exportModuleAsGlobal=function(c,d,b){a.safeRequire(c,function(e){a.namespace(d,e);if(b){b(e)}})};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:lodash-amd', location = 'applinks/internal/lib/lodash-amd-global.js' */
define("applinks/lib/lodash",function(){if(!window._){throw"lodash not found"}return window._});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/lib-version.js' */
define("applinks/lib/version",["applinks/lib/lodash"],function(c){function d(f,g){if(c.isUndefined(f)){return 0}else{if(typeof f!=="number"||isNaN(f)){throw new Error(g+": expected a number, was: <"+f+">")}else{return Math.floor(f)}}}function a(f,g){if(!f||!(f instanceof e)){throw new Error(g+": expected a Version object, was: <"+f+">")}return f}function b(f,g){return f>g?1:f==g?0:-1}function e(g,h,f){this.major=d(g,"major");this.minor=d(h,"minor");this.bugfix=d(f,"bugfix")}e.parse=function(g,h){h=h||"versionString";if(!g){throw new Error(h+": expected a non-empty string")}var f=g.split(".");if(f.length!==3){throw new Error(h+": expected <major>.<minor>.<bugfix> string, was: <"+g+">")}return new e(parseInt(f[0]),parseInt(f[1]),parseInt(f[2]))};e.comparator=function(g,f){return a(g,"versionOne").compareTo(a(f,"versionTwo"))};e.prototype.compareTo=function(h){a(h,"that");var f=b(this.major,h.major);if(f!=0){return f}var g=b(this.minor,h.minor);if(g!=0){return g}return b(this.bugfix,h.bugfix)};e.prototype.greaterThan=function(f){return this.compareTo(f)>0};e.prototype.greaterThanOrEqual=function(f){return this.compareTo(f)>=0};e.prototype.lessThan=function(f){return this.compareTo(f)<0};e.prototype.lessThanOrEqual=function(f){return this.compareTo(f)<=0};e.prototype.equals=function(f){return this.compareTo(f)==0};e.prototype.toMinor=function(){return new e(this.major,this.minor)};e.prototype.toMajor=function(){return new e(this.major)};e.prototype.toString=function(){return this.major+"."+this.minor+"."+this.bugfix};return e});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-version-details.js' */
define("applinks/lib/aui-version-details",["applinks/lib/version"],function(g){var d=new g(5,8,15);var f=new g(5,9,13);var e=new g(5,8);var c=new g(5,9);function a(h){if(h.lessThan(d)){throw new Error("AUI version "+h+" is too low, you need to upgrade AUI to "+d+" or "+f+" for Applinks to work")}if(h.greaterThanOrEqual(c)&&h.lessThan(f)){throw new Error("AUI version "+h+" is too low, you need to upgrade AUI to "+f+" for Applinks to work")}}function b(h){var i=g.parse(h.version,"AUI version");a(i);h.versionDetails=i;h.versionDetails.is58=i.toMinor().equals(e);h.versionDetails.is59=i.toMinor().equals(c);return h}return{addVersionDetails:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/console-amd.js' */
define("applinks/lib/console",function(){return window.console});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/jquery-amd.js' */
define("applinks/lib/jquery",function(){return window.jQuery});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-amd.js' */
define("applinks/lib/aui",["applinks/lib/window","applinks/lib/aui-version-details"],function(b,c){var a=b.AJS;if(!a){throw new Error("window.AJS not defined, cannot load AUI")}return c.addVersionDetails(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/wrm-amd.js' */
define("applinks/lib/wrm",function(){return window.WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/skate-amd.js' */
define("applinks/lib/skate",function(){return window.skate});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/window-amd.js' */
define("applinks/lib/window",function(){return window});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/docs.js' */
define("applinks/common/docs",["applinks/lib/jquery","applinks/lib/aui","applinks/common/help-paths"],function(c,b,a){return{createDocLink:function(d,f,e){if(!e){e=""}else{e=" "+e}return c("<a/>",{"class":"ual-help-link help-link"+e,href:this.getDocHref(d,f),target:"_blank","data-help-link-key":d,text:"Help",title:"Help"})},getDocHref:function(e,f){var d=a.getFullPath(e);if(f){d+="#"+a.getPath(f)}return d}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/help-paths.js' */
define("applinks/common/help-paths",["applinks/lib/console","applinks/lib/wrm","applinks/lib/lodash","applinks/common/modules","applinks/common/preconditions"],function(b,a,g,e,d){var f=g.memoize(function(){var j=a.data.claim(e.dataFqn(e.COMMON_EXPORTED,"applinks-help-paths"));if(!j.entries){b.warn("Help paths not found, all help links are likely to be broken.")}return j.entries||{}});var i=function(j,m){d.nonEmptyString(j,"key");var l=f()[j]||j;if(m){d.nonEmptyString(m,"sectionKey");var k=l.replace(/\+/g,"");l+="#"+k+"-"+m}return l};function c(j,k){return j.indexOf(k,j.length-k.length)!==-1}function h(j,k){return c(j,k)?j:j+k}return{getPath:i,getFullPath:function(j,l){var k=this.baseUrl();return h(k,"/")+this.getPath(j,l)},baseUrl:g.partial(i,"applinks.docs.root")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/events.js' */
define("applinks/common/events",["applinks/lib/jquery","applinks/lib/lodash","applinks/lib/window","applinks/common/preconditions"],function(e,b,d,f){var c="applinks.event.";function a(g){return c+f.nonEmptyString(g,"eventId")}return{PREREADY:a("preready"),READY:a("ready"),APPLINKS_LOADED:a("loaded"),APPLINKS_UPDATED:a("updated"),NEW_APPLINK_CREATED:a("created"),ORPHANED_UPGRADE:a("orphaned.upgrade"),V3_ONBOARDING_FINISHED:a("v3-onboarding-finished"),Legacy:{MESSAGE_BOX_DISPLAYED:a("message-box-displayed")},applinksEvent:a,on:function(h,i,g){var j=g?b.bind(i,g):i;e(d.document).on(h,j)},off:function(g,h){e(d.document).off(g,h)},trigger:function(g,h){e(d.document).trigger(g,h)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/i18n.js' */
define("applinks/common/i18n",["applinks/lib/lodash","applinks/lib/jquery","applinks/lib/wrm","applinks/common/modules","applinks/common/preconditions","applinks/common/products"],function(e,g,c,f,h,b){var a=e.memoize(function(){var i=c.data.claim(f.dataFqn(f.COMMON_EXPORTED,"entity-types"));return h.hasValue(i,"entity-types","Entity Types data not found")});var d=e.memoize(function(){var i=c.data.claim(f.dataFqn(f.COMMON_EXPORTED,"authentication-types"));return h.hasValue(i,"authentication-types","Authentication Types data not found")});return{getApplicationTypeName:function(i){return b.getTypeName(i)},getEntityTypeName:function(i){return a().singular[i]||i},getPluralizedEntityTypeName:function(i){return a().plural[i]||i},getAuthenticationTypeName:function(i){return d()[i]||i}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/modules.js' */
define("applinks/common/modules",function(){return{PLUGIN_KEY:"com.atlassian.applinks.applinks-plugin",COMMON_EXPORTED:"applinks-common-exported",COMMON:"applinks-common",fqn:function(a){return this.PLUGIN_KEY+":"+a},dataFqn:function(a,b){return this.fqn(a)+"."+b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/preconditions.js' */
define("applinks/common/preconditions",["applinks/lib/lodash"],function(c){function f(i,j,h){return d(c.isString(i)&&!c.isEmpty(i),h,b(j,": expected a non-empty string, was: <"+i+">"),i)}function g(i,j,h){return d(c.isFunction(i),h,b(j,": expected a function, was: "+i),i)}function a(i,j,h){return d(c.isArray(i),h,b(j,": expected an array, was: "+i),i)}function e(i,j,h){return d(i,h,b(j,": expected a value"),i)}function d(l,i,h,k){var j=i?i:h;if(!l){throw new Error(j)}return k||l}function b(i,h){return(i||"[unspecified]")+h}return{checkArgument:c.partial(d,c,c,"",c),nonEmptyString:f,isArray:a,isFunction:g,hasValue:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/products.js' */
define("applinks/common/products",["applinks/lib/lodash","applinks/lib/wrm","applinks/common/modules","applinks/common/preconditions"],function(c,b,d,f){var a=c.memoize(function(){var g=b.data.claim(d.dataFqn(d.COMMON_EXPORTED,"applinks-types"));return f.hasValue(g,"types","Application Types data not found")});function e(g){return a()[g]||g}return{BAMBOO:"bamboo",BITBUCKET:"stash",CONFLUENCE:"confluence",FECRU:"fecru",JIRA:"jira",REFAPP:"refapp",STASH:"stash",getTypeName:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/non-amd/rest-service.js' */
(function(a,c,b){AppLinks=AJS.$.extend(window.AppLinks||{},{Event:{NAMESPACE:"applinks"},I18n:a,Docs:c});AppLinks.Event=AJS.$.extend(window.AppLinks.Event,b);if(AJS.AppLinksInitialisationBinder){AppLinks.initialisationBinder=AJS.AppLinksInitialisationBinder}else{AppLinks.initialisationBinder=function(d){AJS.toInit(d)}}AppLinks.initialisationBinder(function(){var d=AJS.$;AppLinks=d.extend(window.AppLinks||{},{failure:function(g){if(g.status==401){window.location.reload()}else{var e=AppLinks.parseError(g);var f=d(".page-error");if(f.length>0){f.html(e).fadeIn("slow")}else{alert("REST request failed: "+e)}}},jsonRequest:function(f,g,h,i,e){if(h){h=JSON.stringify(h)}d(".page-error").fadeOut("fast");if(!e){e=AppLinks.failure}return jQuery.ajax({url:f,type:g,data:h,dataType:"json",contentType:"application/json; charset=utf-8",cache:false,success:i,error:e})},xmlRequest:function(f,g,h,i,e){if(h){h=JSON.stringify(h)}d(".page-error").fadeOut("fast");if(!e){e=AppLinks.failure}return jQuery.ajax({url:f,type:g,data:h,dataType:"xml",contentType:"application/xml; charset=utf-8",cache:false,success:i,error:e})},parseError:function(h){var f;try{f=JSON.parse(h.responseText)}catch(g){if(h.statusText){return f=h.statusText}else{return h}}if(f.message){if(d.isArray(f.message)){return f.message.join(" ")}return f.message}else{return h.statusText}},put:function(f,g,h,e){return AppLinks.jsonRequest(f,"PUT",g,h,e)},post:function(f,g,h,e){return AppLinks.jsonRequest(f,"POST",g,h,e)},update:function(f,g,e){AppLinks.put(AppLinks.self_link(f),f,g,e)},get:function(f,g,e){return AppLinks.jsonRequest(f,"GET",null,g,e)},getXml:function(f,g,e){return AppLinks.xmlRequest(f,"GET",null,g,e)},self_link:function(g){for(var e=0,h=g.link.length;e<h;e++){var f=g.link[e];if(f.rel=="self"){return f.href}}throw"No self-link found"},del:function(h,g,f){var e;if(typeof(h)=="string"){e=h}else{e=AppLinks.self_link(h)}return AppLinks.jsonRequest(e,"DELETE",null,g,f)},SPI:d.extend({},{API_VERSION:"1.0",REST_RESOURCE_URL:AJS.contextPath()+"/rest/applinks/",BASE_URL:AJS.contextPath()+"/rest/applinks/1.0",OAUTH_REST_RESOURCE_URL:AJS.contextPath()+"/rest/applinks-oauth/",OAUTH_BASE_URL:AJS.contextPath()+"/rest/applinks-oauth/1.0",setApiVersion:function(e){AppLinks.SPI.API_VERSION=e;AppLinks.SPI.setBaseUrl(AppLinks.SPI.REST_RESOURCE_URL+AppLinks.SPI.API_VERSION)},setBaseUrl:function(e){AppLinks.SPI.BASE_URL=e},setOAuthBaseUrl:function(e){AppLinks.SPI.OAUTH_BASE_URL=e},getRemoteRestBaseUrl:function(e){return e+"/rest/applinks/"+AppLinks.SPI.API_VERSION},getRemotePluginServletBaseUrl:function(e){return e+"/plugins/servlet"},getAllLinks:function(g,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink";return AppLinks.get(e,g,f)},getAllLinksWithAuthInfo:function(g,f){var e=AppLinks.SPI.BASE_URL+"/listApplicationlinks";return AppLinks.get(e,g,f)},getApplicationLinkState:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/listApplicationlinkstates/id/"+h;return AppLinks.get(e,g,f)},getLinksOfType:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink/type/"+g;return AppLinks.get(e,h,f)},tryToFetchManifest:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/applicationlinkForm/manifest.json?url="+encodeURIComponent(g);return AppLinks.get(e,h,f)},getManifestFor:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/manifest/"+h+".json";return AppLinks.get(e,g,f)},getLocalManifest:function(g,f){var e=AppLinks.SPI.BASE_URL+"/manifest.json";return AppLinks.get(e,g,f)},getRemoteManifest:function(g,h,f){var e=AppLinks.SPI.getRemoteRestBaseUrl(g)+"/manifest.json";return AppLinks.get(e,h,f)},getRemoteOAuthConsumerInfo:function(g,h,f){var e=AppLinks.SPI.getRemotePluginServletBaseUrl(g)+"/oauth/consumer-info";return AppLinks.getXml(e,h,f)},getApplinkStatus:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/status/"+h;return AppLinks.get(e,g,f)},createStaticUrlAppLink:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createStaticUrlAppLink?typeId="+h;return AppLinks.post(e,null,g,f)},createLink:function(l,j,n,f,k,m,h,o,g){var e=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var i={applicationLink:l,username:j,password:n,createTwoWayLink:f,customRpcURL:k,rpcUrl:m,configFormValues:h};return AppLinks.post(e,i,o,g)},createLinkWithOrphanedTrust:function(l,j,o,f,k,m,h,n,p,g){var e=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var i={applicationLink:l,username:j,password:o,createTwoWayLink:f,customRpcURL:k,rpcUrl:m,configFormValues:h,orphanedTrust:n};return AppLinks.post(e,i,p,g)},verifyTwoWayLinkDetails:function(e,k,l,h,j,g){var f=AppLinks.SPI.BASE_URL+"/applicationlinkForm/details";var i={username:l,password:h,remoteUrl:e,rpcUrl:k};return AppLinks.post(f,i,j,g)},getApplicationLinkInfo:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/applicationlinkInfo/id/"+g;return AppLinks.get(e,h,f)},deleteLink:function(i,e,h,g){var f=AppLinks.SPI.BASE_URL+"/applicationlink/"+i.id;if(e){f+="?reciprocate=true"}return AppLinks.del(f,h,g)},makePrimary:function(g,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink/primary/"+g.id;return AppLinks.post(e,null,f)},relocate:function(j,h,e,i,g){var f=AppLinks.SPI.BASE_URL+"/relocateApplicationlink/"+j.id+"?newUrl="+encodeURIComponent(h)+"&nowarning="+(e?"true":"false");return AppLinks.post(f,null,i,g)},legacyUpgrade:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/upgrade/legacy/"+h.id;return AppLinks.post(e,null,g,f)},ualUpgrade:function(i,e,h,g){var f=AppLinks.SPI.BASE_URL+"/upgrade/ual/"+i.id;return AppLinks.post(f,e,h,g)},getEntityTypesForApplicationType:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/type/entity/"+h;return AppLinks.get(e,g,f)},getLocalEntitiesWithLinksToApplication:function(e,h,g){var f=AppLinks.SPI.BASE_URL+"/entitylink/localEntitiesWithLinksTo/"+e+".json";return AppLinks.get(f,h,g)},getEntityLinksForApplication:function(e,h,g){var f=AppLinks.SPI.BASE_URL+"/entities/"+e+".json";AppLinks.get(f,h,g)},getEntityLinksForApplicationUsingAnonymousAccess:function(e,h,g){var f=AppLinks.SPI.BASE_URL+"/entities/anonymous/"+e+".json";return AppLinks.get(f,h,g)},createNonUalEntityLink:function(n,i,f,h,l,g,m,k){var e=AppLinks.SPI.BASE_URL+"/entitylink/"+n+"/"+i+"?reciprocate=false";var j={applicationId:f,typeId:h,key:l,name:g,isPrimary:false};return AppLinks.put(e,j,m,k)},createEntityLink:function(j,i,f,e,k,h){var g=AppLinks.SPI.BASE_URL+"/entitylink/"+j+"/"+i+"?reciprocate=";g+=(e?"true":"false");return AppLinks.put(g,f,k,h)},getConfiguredEntityLinks:function(h,g,i,f){var e=AppLinks.SPI.BASE_URL+"/entitylink/primaryLinks/"+h+"/"+g+".json";return AppLinks.get(e,i,f)},deleteEntityLink:function(j,i,f,e,k,h){var g=AppLinks.SPI.BASE_URL+"/entitylink/"+j+"/"+i+"?typeId="+f.typeId+"&key="+f.key+"&applicationId="+f.applicationId+"&reciprocate="+e;return AppLinks.del(g,k,h)},makePrimaryEntityLink:function(i,h,e,j,g){var f=AppLinks.SPI.BASE_URL+"/entitylink/primary/"+i+"/"+h+"?typeId="+e.typeId+"&key="+e.key+"&applicationId="+e.applicationId;return AppLinks.post(f,null,j,g)},canDeleteAppLink:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/permission/reciprocate-application-delete/"+h;return AppLinks.get(e,g,f)},canDeleteEntityLink:function(i,h,e,j,g){var f=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-delete/"+e.applicationId+"/"+i+"/"+h+"/"+e.typeId+"/"+e.key;return AppLinks.get(f,j,g)},canCreateReciprocateEntityLink:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-create/"+h;return AppLinks.get(e,g,f)},processPermissionCode:function(f){var e={noPermission:function(){},missing:function(){},credentialsRequired:function(g){},authenticationFailed:function(g){},noAuthentication:function(g){},noAuthenticationConfigured:function(){},noConnection:function(){},allowed:function(){},unrecognisedCode:function(g){},updateView:function(i,h,g){}};if(!f){f={}}f=d.extend(e,f);return function(h){var g=h.code;if(g=="NO_PERMISSION"){f.noPermission()}else{if(g=="MISSING"){f.missing()}else{if(g=="CREDENTIALS_REQUIRED"){f.credentialsRequired(h.url)}else{if(g=="AUTHENTICATION_FAILED"){f.authenticationFailed(h.url)}else{if(g=="NO_AUTHENTICATION"){f.noAuthentication(h.url)}else{if(g=="NO_AUTHENTICATION_CONFIGURED"){f.noAuthenticationConfigured()}else{if(g=="NO_CONNECTION"){f.noConnection()}else{if(g=="ALLOWED"){f.allowed()}else{f.unrecognisedCode(h.code)}}}}}}}}}},addAuthenticationTrigger:function(g,e,f){if(!f){f={}}if(typeof f.onSuccess=="undefined"){f.onSuccess=function(){location.reload()}}if(typeof f.onFailure=="undefined"){f.onFailure=function(){return true}}d(g).unbind("click");d(g).click(function(){if(f.before){f.before()}AppLinks.authenticateRemoteCredentials(e,f.onSuccess,f.onFailure)})},deleteOrphanedTrust:function(i,g,h,f){var e=AppLinks.SPI.BASE_URL+"/orphaned-trust/"+g+"/"+i;return AppLinks.del(e,h,f)},getOrphanedTrust:function(g,f){var e=AppLinks.SPI.BASE_URL+"/orphaned-trust/";return AppLinks.get(e,g,f)},showCreateEntityLinkSuggestion:function(){return true},getApplicationLink:function(h,g,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink/"+h;return AppLinks.get(e,g,f)},createApplicationLink:function(h,f,k,l,e,m,i){var g=AppLinks.SPI.BASE_URL+"/applicationlink";var j={id:h,name:f,rpcUrl:k,displayUrl:l,typeId:e};return AppLinks.put(g,j,m,i)},createConsumer:function(g,p,f,o,k,n,i,r,j,m,q,h){var e=AppLinks.SPI.OAUTH_BASE_URL+"/applicationlink/"+g+"/authentication/consumer";var l={key:p,name:f,description:o,sharedSecret:k,publicKey:n,outgoing:m,twoLOAllowed:i,executingTwoLOUser:r,twoLOImpersonationAllowed:j};return AppLinks.put(e,l,q,h)},createConsumerAutoConfigure:function(l,k,h,e,j,g){var f=AppLinks.SPI.OAUTH_BASE_URL+"/applicationlink/"+l+"/authentication/consumer?autoConfigure=true";var i={twoLOAllowed:k,executingTwoLOUser:h,twoLOImpersonationAllowed:e};return AppLinks.put(f,i,j,g)},registerProvider:function(k,j,g,i,f){var e=AppLinks.SPI.BASE_URL+"/applicationlink/"+k+"/authentication/provider";var h={config:g,provider:j};return AppLinks.put(e,h,i,f)},enableFeature:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/features/"+g;return AppLinks.put(e,{},h,f)},disableFeature:function(g,h,f){var e=AppLinks.SPI.BASE_URL+"/features/"+g;return AppLinks.del(e,h,f)}},(window.AppLinks&&window.AppLinks.SPI)||{})});AppLinks.UI={showInfoBox:function(e){d(".aui-message.success").remove();AppLinks.UI.createMessage("success",e,"page-info")},hideInfoBox:function(){d(".aui-message.success").remove()},showErrorBox:function(e){AppLinks.UI.createMessage("error",e,"page-error")},hideErrorBox:function(){d(".aui-message.error").remove()},showWarningBox:function(f){if(d.isArray(f)&&f.length>0){var e=d("<ul></ul>");d(f).each(function(h){e.append(d("<li/>",{text:f[h]}))});var g=d('<div class="page-warning"></div>').append(e);AppLinks.UI.createMessage("warning",g.html(),"page-warning")}else{AppLinks.UI.createMessage("warning",f,"page-warning")}},hideWarningBox:function(){d(".aui-message.warning").remove()},shortenString:function(f,e){if(f.length>e){f=f.substring(0,e)+"..."}return f},createMessage:function(f,g,e){var h=d('<div class="'+e+'">');h.html(g);AJS.messages[f](".applinks-message-bar",{title:"",body:h.wrap("<div></div>").parent().html(),closeable:true});d(document).trigger(AppLinks.Event.Legacy.MESSAGE_BOX_DISPLAYED)},displayValidationErrorMessages:function(e,g,f){if(d.isArray(f)){d(f).each(function(k,j){var l=d('<div class="error applinks-error">');l.text(j);d(g).find("."+e).append(l)})}else{if(typeof f!="undefined"){var h=d('<div class="error applinks-error">');h.text(f.toString());d(g).find("."+e).append(h)}}},displayValidationError:function(e,f,g){return function(l){if(l.status==401){window.location.reload();return}d(".applinks-error").remove();d(".loading").remove();var j=l.responseText;var k=d.parseJSON(j);var i=k.message;if(typeof k.fields=="undefined"){AppLinks.UI.displayValidationErrorMessages(e,f,i)}else{var h=k.fields;d(h).each(function(m){var n=d('<div class="error applinks-error" id="'+h[m]+'-error">');n.text(i[m]);if(d(f).find("."+h[m]).length>0){n.insertAfter(d(f).find("."+h[m]))}else{n.insertAfter(d(f).find("."+e).append(n))}})}d(f).find("."+e).addClass("fully-populated-errors");if(g){g()}}},addProtocolToURL:function(e){var h=d.trim(e);var g=h.toLowerCase();var f=false;if(g.length>=7){if(g.substring(0,7).indexOf("http")!=-1){f=true}}if(!f){h="http://"+h}return h},prettyJoin:function(f,i,h){if(!h){h="and"}var e=f.length;var g="";d.each(f,function(j,k){if(j==(e-1)&&e>1){g+=" "+h+"  "+i(k)}else{g+=i(k);if(j+2<e){g+=", "}}});return g},showLoadingIcon:function(e){d('<span class="loading">&nbsp;</span>').insertAfter(e)},hideLoadingIcon:function(e){d(e).next(".loading").remove()},findUrl:function(h){var g=undefined;var i=h.toLowerCase();var f=i.indexOf("http:");if(f==-1){f=i.indexOf("https:")}if(f>-1){var e=i.indexOf(" ",f);if(e==-1){e=i.length}g=h.substring(f,e)}return g},findApplicationType:function(e){e=e.toLowerCase();if(e.indexOf("jira")!=-1){return"jira"}else{if(e.indexOf("fisheye")!=-1){return"fecru"}else{if(e.indexOf("confluence")!=-1){return"confluence"}else{if(e.indexOf("refapp")!=-1){return"refapp"}else{return undefined}}}}},escapeSelector:function(e){return e.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g,"\\$1")},sanitiseHTML:function(e){var f={"<":"&lt;",'"':"&quot;","&":"&amp;"};return e.replace(/[<"&]/g,function(g){return f[g]})},refreshOrphanedTrust:function(){var e=function(f){d("tr.orphaned-trust-row").each(function(){var l=d(this);var m=l.attr("data-id");var j=l.attr("data-type");var h=false;for(var g=0;g<f.orphanedTrust.length;g++){var k=f.orphanedTrust[g];if(m==k.id&&j==k.type){h=true;break}}if(!h){l.remove();if(f.orphanedTrust.length==0){d(".orphaned-trust-warning").hide()}}})};AppLinks.SPI.getOrphanedTrust(e)},removeCssClass:function(e,f){d(e).removeClass(function(h,j){var i=j.split(" ");var g="";d.each(i,function(k,l){if(l.indexOf(f)!=-1){g=l}});return g})}};(function(){var e=d({});d.each(["bind","unbind","trigger"],function(f,g){AppLinks.UI[g]=function(){return e[g].apply(e,arguments)}})})();d(document).trigger(AppLinks.Event.PREREADY);d(document).trigger(AppLinks.Event.READY)})})(require("applinks/common/i18n"),require("applinks/common/docs"),require("applinks/common/events"));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/non-amd/autocomplete.js' */
AJS.$(document).bind(AppLinks.Event.READY,function(){AppLinks.autoComplete={cacheManager:function(c){var a={},b=[],c=c||30;return{get:function(d){return a[d]},put:function(d,e){a[d]=e;b.push(d);if(b.length>c){delete a[b.shift()]}},clear:function(){a={};b=[]}}}};(function(d){var c=function(f){AJS.log("InputDrivenDropDown: truncating text");var h=f.$.closest(".aui-dropdown").width(),g=20;d("a span:not(.icon)",f.$).each(function(){var j=d(this),i=AJS("var","&#8230;"),l=i.width(),k=false;j.wrapInner(d("<em>"));d("em",j).each(function(){var m=d(this);m.show();if(this.offsetLeft+this.offsetWidth>h){var t=this.childNodes,s=false;for(var o=t.length-1;o>=0;o--){var p=t[o],n=1,r=(p.nodeType==3)?"nodeValue":"innerHTML",q=p[r];do{if(n<=q.length){p[r]=q.substr(0,q.length-n++)}else{break}}while(this.offsetLeft+this.offsetWidth+l>h-g);if(n<=q.length){s=true;break}}if(s){k=true}else{m.hide()}}});if(k){j.append(i);this.elpss=i}})};var b=function(f,l){if(!l.length||!l[0]){return}AJS.log("InputDrivenDropDown: highlighting tokens");for(var h=0,j=l.length;h<j;h++){var g=l[h];l[h]=g?g.replace(/[\.\*\+\?\|\(\)\[\]{}\\]/g,"\\$"):""}var k=new RegExp("("+l.join("|")+")","gi");d("li a:not(.dropdown-prevent-highlight) span",f.$).each(function(){var m=d(this),i=m.html().replace(k,"<strong>$1</strong>");m.html(i)})};var e=function(j,g){var i=j.options,h=j.dd;if(h){h.hide();h.$.remove()}i.ajsDropDownOptions=i.ajsDropDownOptions||{};if(i.ajsDropDownOptions&&!i.ajsDropDownOptions.alignment){i.ajsDropDownOptions.alignment="left"}i.ajsDropDownOptions.selectionHandler=i.ajsDropDownOptions.selectionHandler||function(l,k){if(l.type!="click"){l.preventDefault();d("a",k).click();document.location=d("a",k).attr("href")}};i.ajsDropDownOptions.displayHandler=function(k){return AJS.escapeHtml(k.name)};var f=j.dd=new AJS.dropDown(g.matrix,i.ajsDropDownOptions)[0];if(i.ajsDropDownOptions&&i.ajsDropDownOptions.className){f.$.addClass(i.ajsDropDownOptions.className)}if(i.dropdownPlacement){i.dropdownPlacement(f.$)}else{AJS.log("No dropdownPlacement function specified. Appending dropdown to the body.");d("body").append(f.$)}b(f,g.queryTokens||[g.query]);c(f);if(i.dropdownPostprocess){i.dropdownPostprocess(f.$)}f.show(j._effect);if(typeof i.onShow=="function"){i.onShow.call(f,f.$)}return f};function a(g,f){this._effect="appear";this._timer=null;this.id=g;this.options=f;this.inactive=false;this.busy=false;this.cacheManager=AppLinks.autoComplete.cacheManager()}a.prototype.clearCache=function(){this.cacheManager.clear()};a.prototype.change=function(h,g){var f=this;if(h!=f._value||g){f._value=h;f.busy=false;clearTimeout(f._timer);if(g||(/\S{0,}/).test(h)){var i=f.cacheManager.get(h);if(i){e(f,i)}else{f.busy=true;f._timer=setTimeout(function(){f.options.getDataAndRunCallback.call(f,h,f.show)},200)}}else{f.dd&&f.dd.hide()}}};a.prototype.dropDownLength=function(){return this.dd.links?this.dd.links.length:0};a.prototype.dropDownItem=function(f){return this.dropDownLength()>f?this.dd.links[f]:null};a.prototype.hide=function(){this.dd&&this.dd.hide()};a.prototype.remove=function(){var f=this.dd;if(f){this.hide();f.$.remove()}this.inactive=true;this.options.onDeath&&this.options.onDeath()};a.prototype.show=function(g,i,h){if(this.inactive){AJS.log("Quick search abandoned before server response received, ignoring. "+this);return}var f={matrix:g,query:i,queryTokens:h};this.cacheManager.put(i,f);e(this,f);this.busy=false};AppLinks.inputDrivenDropdown=function(f){return new a("inputdriven-dropdown",f)}})(jQuery)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/fecru-compatibility.js' */
if(jQuery!=undefined&&AJS!=undefined){jQuery=AJS.$};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-callback.js' */
define("applinks/feature/oauth-callback",["applinks/lib/window","applinks/lib/lodash","applinks/common/preconditions"],function(c,a,d){function b(e){d.nonEmptyString(e,"url");this._url=e}b.prototype.source=function(e){d.hasValue(e,"source");this._source=e;return this};b.prototype.onSuccess=function(e){d.isFunction(e,"onSuccess");this._onSuccess=e;return this};b.prototype.onFailure=function(e){d.isFunction(e,"onFailure");this._onFailure=e;return this};b.prototype.success=function(){this.oauthWindow.close();if(this._onSuccess){this._onSuccess(this._source)}delete c.oauthCallback};b.prototype.failure=function(){this.oauthWindow.close();if(this._onFailure){this._onFailure(this._source)}delete c.oauthCallback};b.prototype.open=function(){c.oauthCallback=this;this.oauthWindow=c.open(this._url,"com_atlassian_applinks_authentication")};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-dance.js' */
define("applinks/feature/oauth-dance",["applinks/lib/console","applinks/lib/jquery","applinks/lib/lodash","applinks/lib/window","applinks/common/events","applinks/common/preconditions","applinks/feature/oauth-callback"],function(a,f,c,e,b,h,d){function g(j,i){this._scope=j||e.document;this._selector=i}g.prototype.onSuccess=function(i){h.isFunction(i,"onSuccess");this._onSuccess=i;return this};g.prototype.onFailure=function(i){h.isFunction(i,"onFailure");this._onFailure=i;return this};g.prototype.defaultSuccess=function(){return this.onSuccess(function(){e.location.reload()})};g.prototype.defaultFailure=function(){return this.onFailure(function(){return true})};g.prototype.initialize=function(){var i=this;if(this._selector){f(this._scope).on("click",this._selector,function(j){j.preventDefault();i._open(f(this))})}else{f(this._scope).on("click",function(j){j.preventDefault();i._open(f(this))})}};g.prototype.start=function(){var j=f(this._scope);var i=this._selector?j.find(this._selector):j;this._open(i)};g.prototype._open=function(i){if(i.length!==1){a.warn("Could not trigger OAuth dance, the source is not a single HTML element: "+i);return}var j=i.attr("data-authorisation-uri");if(j){this._onSuccess||this.defaultSuccess();this._onFailure||this.defaultFailure();new d(j).source(i).onSuccess(this._onSuccess).onFailure(this._onFailure).open()}else{a.warn("Could not trigger OAuth dance, data-authorisation-uri missing for: "+i)}};return g});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-oauth-ui', location = 'js/oauth-dialog.js' */
(function(c,a,b){AppLinks.authenticateRemoteCredentials=function(d,f,e){c(".applinks-error").remove();new b(d).onSuccess(f).onFailure(e).open()}})(require("applinks/lib/jquery"),require("applinks/common/events"),require("applinks/feature/oauth-callback"));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:common', location = 'util/retry-caller.js' */
define("confluence/jim/util/retry-caller",["ajs","jquery","underscore"],function(b,d,c){var a=function(g,p){p=p||{};var h=p.args;var j=(typeof p.tester==="function")?p.tester:function(){return true};var i=p.delays||[0.1,0.3,0.5,0.7,1];var l=i.length;var e=p.name||"";var k=d.Deferred(),o=k.promise();var f=p.context||k;var n=0;var m=function(){if(n===l){return k.rejectWith(f,[f,"exceed-maximum-called-times",""])}var r=i[n++];var q=function(){d.when(g.apply(f,h)).then(function(){k.notify.apply(f,arguments);if(j.apply(f,arguments)){m()}else{k.resolveWith(f,arguments)}},function(){k.rejectWith(f,arguments)})};c.delay(q,r)};m();return o};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:common', location = 'util/common.js' */
AJS.JiraIssues={Remote:{}};var appLinksI18n={entries:{}};jQuery(document).ready(function(){AJS.JiraIssues=jQuery.extend(AJS.JiraIssues||{},{bindOAuthLink:function(c,f){var e={onSuccess:function(){f()},onFailure:function(){}};var d=c.attr("href");c.click(function(g){AppLinks.authenticateRemoteCredentials(d,e.onSuccess,e.onFailure);g.preventDefault()})},getOAuthRealm:function(f){var d=f.getResponseHeader("WWW-Authenticate")||"";var c=/OAuth realm\=\"([^\"]+)\"/;var e=c.exec(d);if(e){return e[1]}else{return null}}});jQuery("a.static-oauth-init").each(function(){AJS.JiraIssues.bindOAuthLink(jQuery(this),function(){window.location.reload()})});jQuery("a.anonymous-init").each(function(f,e){var c=encodeURIComponent(window.location.pathname.replace(Confluence.getContextPath(),""));var d=Confluence.getContextPath()+"/login.action?os_destination="+c;AJS.$(e).attr("href",d)});var a=function(j){var e=AJS.JiraIssues.Remote[j];var h="";for(var g=0;g<e.length;g++){h=h+(e[g].key+(g<e.length-1?",":""))}var d=function(l){var i="issuekey in ("+l+")";var m="/sr/jira.issueviews:searchrequest-xml/temp/SearchRequest.xml?jqlQuery="+encodeURIComponent(i)+"&returnMax=true";var k=contextPath+"/plugins/servlet/issue-retriever?appId="+j+"&url="+encodeURIComponent(m)+"&columns=summary&columns=type&columns=resolution&columns=status";return k};var f=function(k){var i=AJS.$("item",k);i.each(function(){var u=AJS.$("link",this).text();var v=AJS.$("key",this).text();var r=AJS.$("summary",this).text();var s=AJS.$("type",this);var m=AJS.$("resolution",this);var w=m.attr("id")!="-1";var o=AJS.$("status",this);var n=AJS.$(".unknown-jira-issue."+v);for(var p=0;p<n.length;p++){var t=AJS.$("<a style=\"background-image: url('"+s.attr("iconUrl")+'\')" href="'+u+'"></a>');t.text(v);var l=AJS.$('<span class="jira-status"></span>');l.text(o.text().toUpperCase());var q=AJS.$('<span class="jira-issue'+(w?" resolved":"")+'" ></span>');q.append(t);q.append(document.createTextNode(" - "+r+" - "));q.append(l);AJS.$(n[p]).replaceWith(q)}})};var c=d(h);AJS.$.ajax({url:c,success:f,error:function(l){if(l.status==401){var k=AJS.JiraIssues.getOAuthRealm(l);if(k){var i={};AJS.$(e).each(function(){if(!i[this.key]){i[this.key]=true;var m=AJS.$('<span class="oauth-msg"> - <a class="oauth-init" href="'+k+'">'+"Authenticate"+"</a> "+"to see issue details"+"</span>");AJS.$(".unknown-jira-issue."+this.key).addClass("single-issue-oauth").append(m)}});AJS.JiraIssues.bindOAuthLink(AJS.$(".single-issue-oauth a.oauth-init"),function(){window.location.reload()})}}else{if(l.status==400&&e.length>1){AJS.$(e).each(function(){var m=this.key;var n=d(m);AJS.$.ajax({url:n,success:f,error:function(p){var o=AJS.$(".unknown-jira-issue."+m);o.removeClass("single-issue-oauth");AJS.$(".oauth-msg",o).remove();o.addClass("jira-error")}})})}}}})};AJS.$(".unknown-jira-issue").each(function(e,f){var d=AJS.$(f);var g=d.attr("data-app-link");var c=d.attr("data-key");AJS.JiraIssues.Remote[g]=AJS.JiraIssues.Remote[g]||[];AJS.JiraIssues.Remote[g].push({key:c})});for(var b in AJS.JiraIssues.Remote){a(b)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:web-resources', location = 'templates/extra/jira/jiraIssues.js' */
jQuery(document).ready(function(){var a=jQuery.extend(window.JiraIssues||{},{ADG_ENABLED:AJS.Meta.getNumber("build-number")>=4000,ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO:14/11,fixMenusShowingUnderWidgetInIE:function(){if(jQuery.browser.msie){jQuery("ul.ajs-menu-bar li.ajs-menu-item").each(function(){jQuery(this).hover(function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().each(function(){var c=jQuery(this);var b=c.css("position");if(b&&b!="auto"){c.addClass("ajs-menu-bar-z-index-fix-for-ie")}})},function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().removeClass("ajs-menu-bar-z-index-fix-for-ie")})})}},onSuccessFunction:function(d){if(!jQuery("fieldset input[name='height']",d).length){var b=jQuery(".bDiv table[id^='jiraissues_table']",d)[0];var e=b.grid;var c=b.clientHeight+jQuery(".hDiv",d)[0].clientHeight;jQuery(".bDiv",d).css("height",c+"px");e.options.height=c;e.fixHeight(c)}},onErrorFunction:function(h,c,b,n,f){var o=jQuery("#"+c);var g=b+": ";if(n.status=="200"){g+=f}else{g+=n.responseText}var i=n.getResponseHeader("WWW-Authenticate")||"";if(n.status=="401"&&i.indexOf("OAuth")!=-1){var m=/OAuth realm\=\"([^\"]+)\"/;var e=m.exec(i);if(e){o.empty();a.bigMessageFunction(c,'<a class="oauth-init" href="'+e[1]+'">'+"Authenticate"+"</a> "+"to retrieve your issues"+"</span>");jQuery(".bmDiv",h).css({"z-index":2});var j={onSuccess:function(){window.location.reload()},onFailure:function(){}};var l=jQuery(".oauth-init",o.parent());var d=l.attr("href");l.click(function(p){AppLinks.authenticateRemoteCredentials(d,j.onSuccess,j.onFailure);p.preventDefault()});AJS.$(".gBlock").remove()}}else{if(n.status=="400"){a.bigMessageFunction(c,"The JIRA server was not able to process the search. This may indicate a problem with the syntax of this macro. Alternatively, if this table is requesting specific issue keys, you may not have permission to view one of these issues. ")}else{var k=jQuery("iframe.jiraissues_errorMsgSandbox",h);k.load(function(){var r=this.contentWindow||this.contentDocument;var q=jQuery((r.document?r.document:r).body);jQuery("a",q).each(function(){this.target="_top"});jQuery(".pPageStat",h).empty().text(q.text());var p=jQuery("div.bmDiv",h)[0];k.removeClass("hidden");k.css({height:p.clientHeight+"px",width:p.clientWidth+"px"})});k[0].src=jQuery("fieldset input[name='retrieverUrlHtml']",h).val();a.bigMessageFunction(c,k)}}jQuery(h).find(".pReload").removeClass("loading");o[0].grid.loading=false;jQuery(h).find(".pButton").each(function(){jQuery(this).removeClass("pBtnOver");jQuery(this).css({cursor:"default",opacity:"0.3"})});jQuery(h).find("span.pcontrol input").attr("readonly","true")},onReloadFunction:function(b,d,c){jQuery(".bmDiv",d).remove();jQuery(".bmDistance",d).remove();c.onSubmit=function(){a.reloadOnSubmitFunction(b,c);return true}},reloadOnSubmitFunction:function(b,c){c.params=[{name:"useCache",value:false}];c.onSubmit=function(){a.onSubmitFunction(b,c);return true}},onSubmitFunction:function(b,c){c.params=[{name:"useCache",value:b}]},showTrustWarningsFunction:function(d,c){var b=jQuery(d).children(".trusted_warnings");if(c.trustedMessage){b.find("td:last").html(c.trustedMessage);b.css("display","block")}else{b.css("display","none")}},preProcessFunction:function(e,b,d,c,f){if(d){a.showTrustWarningsFunction(e,c)}if(c.total==0){jQuery(".pPageStat",e).html(f);a.bigMessageFunction(b,f);jQuery(".pReload",e).removeClass("loading");return}},bigMessageFunction:function(e,f){var d=jQuery("<div></div>");var b=jQuery("<div></div>");d.addClass("bmDistance");b.addClass("bmDiv");if(typeof f=="string"){b.html("<p><strong>"+f+"</strong></p>")}else{f.appendTo(b)}var c=jQuery("#"+e);c.after(b).after(d)},getParamsFrom:function(c){var b={};c.children("input").each(function(){b[jQuery(this).attr("name")]=jQuery(this).attr("value")});return b},initializeColumnWidth:function(f,p){var d={},m=function(i){return a.ADG_ENABLED?Math.round(i*a.ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO):i};if(!(p&&p.length)){return d}var h=37,n=11,k=f.width()-(h+(p.length*n)),j=false,q=false,o=0,c=m(140);for(var l=0,e=p.length;l<e;l++){var g=p[l].name;switch(g){case"summary":j=true;o++;break;case"description":q=true;o++;break;case"type":o++;d[g]=30;k-=30;break;case"priority":o++;d[g]=50;k-=50;break;case"status":o++;d[g]=m(100);k-=m(100);break;case"key":o++;d[g]=m(90);k-=m(90);break;case"comments":case"attachments":case"version":case"component":case"resolution":o++;d[g]=m(80);k-=m(80);break;default:d[g]=c}}if(j||q){k-=(c*(p.length-o));var b=250;if(j&&q){d.summary=Math.max(k/2,b);d.description=Math.max(k/2,b)}else{if(j){d.summary=Math.max(k,b)}else{d.description=Math.max(k,b)}}}else{if(!j&&!q&&(p.length>o)){c=k/(p.length-o);for(l=0;l<e;l++){if(!{resolution:true,key:true,type:true,priority:true,status:true}[p[l]]){d[p[l]]=c}}}}return d}});a.fixMenusShowingUnderWidgetInIE();jQuery(".jiraissues_table").each(function(f,j){var k=jQuery(j),h=k.children("fieldset"),e=a.getParamsFrom(h),c="jiraissues_table_"+f;k.append('<table id="'+c+'" style="display:none"></table>');k.css("width",e.width);var d=[];h.children(".columns").each(function(l){var m=jQuery(this).hasClass("nowrap");d[l]={display:this.name,name:this.value,nowrap:m,sortable:true,align:"left"}});var b=a.initializeColumnWidth(k,d);jQuery.each(d,function(l,m){m.width=b[m.name]});var g=jQuery("<div></div>");jQuery("<a></a>").attr({rel:"nofollow",href:e.clickableUrl}).text(e.title).appendTo(g);jQuery("#"+c).flexigrid({url:e.retrieverUrlHtml,method:"GET",dataType:"json",colModel:d,sortname:e.sortField,sortorder:e.sortOrder,usepager:true,title:g.html(),page:parseInt(e.requestedPage,10),useRp:false,rp:parseInt(e.resultsPerPage,10),showTableToggleBtn:true,height:(function(){return e.height?parseInt(e.height,10):480})(),onSuccess:function(){a.onSuccessFunction(j)},onSubmit:function(){a.onSubmitFunction(e.useCache,this);return true},preProcess:function(i){a.preProcessFunction(j,c,e.showTrustWarnings,i,e.nomsg);return i},onError:function(m,l,i){a.onErrorFunction(j,c,e.jiraissuesError,m,l,i)},onReload:function(){a.onReloadFunction(e.useCache,j,this);return true},errormsg:e.errormsg,pagestat:e.pagestat,procmsg:e.procmsg,nomsg:e.nomsg})});jQuery(".jiraissues_count").each(function(b,d){var c=jQuery(d);jQuery.ajax({cache:false,type:"GET",url:c.find(".url").text(),data:{useCache:c.find(".use-cache").text(),rp:c.find(".rp").text(),showCount:"true"},success:function(f){var e=c.find(".result");if(f==1){e.text(AJS.format("{0} issue",f))}else{e.text(AJS.format("{0} issues",f))}e.removeClass("hidden");jQuery(".calculating, .error, .data",c).remove()},error:function(h){var f=jQuery(".error",c).removeClass("hidden"),g=h.getResponseHeader("WWW-Authenticate")||"",j=false;if(h.status===401&&g.indexOf("OAuth")!=-1){var e=/OAuth realm\=\"([^\"]+)\"/,i=e.exec(g);if(i){f.empty().append(AJS.$("<a/>",{href:i[1],"class":"oauth-init"}).text("Authenticate").click(function(){AppLinks.authenticateRemoteCredentials(i[1],function(){window.location.reload()},function(){});return false})).append(AJS.$("<span/>",{text:" "+"to retrieve your issues"}));j=true}}if(!j){f.text(AJS.format(f.text(),h.status))}jQuery(".calculating, .result, .data",c).remove()}})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'templates/recently.soy' */
// This file was automatically generated from recently.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RY.Templates.
 */

if (typeof RY == 'undefined') { var RY = {}; }
if (typeof RY.Templates == 'undefined') { RY.Templates = {}; }


RY.Templates.body = function(opt_data, opt_ignored) {
  return '<div id="recently-viewed" class="aui-group"><div class="aui-item"><div class="top"><div class="filter"><form class="aui"><input class="filter-input text" type="text" placeholder="' + soy.$$escapeHtmlAttribute("Filter") + '"></form></div></div><div class="pages"></div></div></div>';
};
if (goog.DEBUG) {
  RY.Templates.body.soyTemplateName = 'RY.Templates.body';
}


RY.Templates.pageCollection = function(opt_data, opt_ignored) {
  return '<div class="groups"></div><div class="empty"></div>';
};
if (goog.DEBUG) {
  RY.Templates.pageCollection.soyTemplateName = 'RY.Templates.pageCollection';
}


RY.Templates.pageGroup = function(opt_data, opt_ignored) {
  return '<h3>' + soy.$$escapeHtml(opt_data.title) + '</h3><ul/>';
};
if (goog.DEBUG) {
  RY.Templates.pageGroup.soyTemplateName = 'RY.Templates.pageGroup';
}


RY.Templates.pageItem = function(opt_data, opt_ignored) {
  return '<div class="page-icon"><a href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + ' class="icon icon-' + soy.$$escapeHtmlAttribute(opt_data.type) + '"></a></div><div class="page-title"><a class="ellipsis" href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + '>' + soy.$$escapeHtml(opt_data.title) + ' - ' + soy.$$escapeHtml(opt_data.space) + '</a></div>';
};
if (goog.DEBUG) {
  RY.Templates.pageItem.soyTemplateName = 'RY.Templates.pageItem';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/util.js' */
var RY=RY||{};(function(){var b=new Date();var c=new Date(b).getTime();var a=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime();var d=new Date(b.getFullYear(),b.getMonth(),b.getDate()-1).getTime();RY.util=RY.Util={analytics:{trackDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-dialog-open"})},trackPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-page-open"})}},quote:function(e){return(e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},diffInDays:function(g,f){var e=1000*60*60*24;return Math.floor((g-f)/e)},daysSince:function(e){if(e>=a){return 0}else{if(e>=d){return 1}else{return RY.util.diffInDays(c,e)}}},wait:function(h,j,f){var i,k,e;var g=function(){k=setTimeout(function(){h.apply(f,e)},j)};return function(){e=arguments;var l=new Date();if(i&&l-i<j){clearTimeout(k)}g();i=l}}}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-storage.js' */
var RY=RY||{};RY.RecentPageStorage=function(h){var f="com.atlassian.confluence.plugins.recently.viewed.pages.v1";var d=100;var c={};var b=function(){var i=function(k,l){if(k==="lastSeen"&&_.isString(l)){if(AJS.$.browser.msie){l=l.replace(/\-/g,"/");l=l.replace(/T.*$/,"")}return new Date(l).getTime()}else{return l}};try{c=JSON.parse(h.getItem(f),i)||{}}catch(j){c={}}return c};var g=function(){var i=_.values(c);var k=i.length-d;if(k>0){var j=_.sortBy(i,function(l){return l.lastSeen});_.times(k,function(){var l=j.shift();delete c[l.id]})}};var e=function(){g();try{h.setItem(f,JSON.stringify(c))}catch(i){}};this.addCurrentPage=function(i){if(!(i.id&&i.title)){return}b();a(i);e()};var a=function(i){var j=c[i.id];if(!j){c[i.id]=j={}}j=_.extend(j,i);j.lastSeen=new Date().getTime();j.count=j.count+1||1};this.getPages=function(){return _.values(b())}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/filter.js' */
var RY=RY||{};RY.FilterView=Backbone.View.extend({className:"filter",events:{"input .filter-input":"onInput","keyup .filter-input":"onInput","keydown .filter-input":"onKeydown"},initialize:function(){_.bindAll(this,"render","onInput","onKeydown","search");this.navigationEvents=this.options.navigationEvents;this.onInput=RY.util.wait(this.onInput,100,this)},render:function(){this.$input=this.$(".filter-input");return this},onInput:function(a){if(a&&_.contains([37,38,39,40],a.which)){return}this.search()},onKeydown:function(a){switch(a.which){case 13:this.navigationEvents.trigger("select");a.preventDefault();a.stopPropagation();break;case 38:this.navigationEvents.trigger("previous");a.preventDefault();break;case 40:this.navigationEvents.trigger("next");a.preventDefault();break}},search:function(){var a=this.$input.val();this.collection.search(a)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-model.js' */
var RY=RY||{};(function(){var a;if(typeof ConfluenceMobile!="undefined"){a=ConfluenceMobile.AppData.get("confluence-context-path")}else{a=AJS.contextPath()}RY.Page=Backbone.Model.extend({href:function(){return a+this.get("url")},daysSinceLastSeen:function(){return RY.util.daysSince(this.get("lastSeen"))}});RY.PageCollection=Backbone.Collection.extend({model:RY.Page,url:a+"/rest/recentlyviewed/1.0/recent",search:function(c){var b;if(this._queryLength(c)===0){b=this.models}else{var d=c.match(/[^\s-]+/g);b=this.filter(function(g){var h=g.get("title");var f=g.get("space");var e=(h+f).toLowerCase();return _.all(d,function(i){return e.indexOf(i.toLowerCase())!==-1})})}this.trigger("filter",b,c);return b},_queryLength:function(b){if(!String.prototype.trim){return AJS.$.trim(b).length}return b.trim().length},comparator:function(b){return -(b.get("lastSeen"))}})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page.js' */
var RY=RY||{};RY.PageView=Backbone.View.extend({tagName:"li",className:"ry-page",template:RY.Templates.pageItem,initialize:function(){_.bindAll(this,"hide","show","render")},hide:function(){this.$el.hide().removeClass("shown")},show:function(){this.$el.show().addClass("shown")},render:function(){var a=this.model.toJSON();a.href=this.model.href();this.$el.html(this.template(a));return this}});RY.PageGroupView=Backbone.View.extend({className:"group",template:RY.Templates.pageGroup,initialize:function(){_.bindAll(this,"hide","hideAll","show","showBorder","showPages","add","render");this.title=this.options.title;this.modelViews={}},hide:function(){this.$el.hide()},hideAll:function(){this.$el.removeClass("border").hide();_.invoke(_.values(this.modelViews),"hide")},show:function(){this.$el.show()},showBorder:function(){this.$el.addClass("border")},showPages:function(a){var c=this;var b=false;_.each(a,function(e){var d=c.modelViews[e.cid];if(d){b=true;d.show()}});if(b){this.show()}return b},add:function(b){var a=new RY.PageView({model:b});this.modelViews[b.cid]=a;this.$list.append(a.render().el)},render:function(){this.$el.html(this.template({title:this.title}));this.$list=this.$("ul");return this}});RY.PageNavigator=function(a,e,c){var g=null;function f(){return a.find("li.shown")}function b(i){pageItems=f();var h=pageItems.index(pageItems.filter(".highlight"));if(g){g.removeClass("highlight")}i+=h;if(i<0){i=pageItems.length-1}if(i>=pageItems.length){i=0}g=pageItems.eq(i);g.addClass("highlight")}function d(){if(!g.length){return}var k=e;var l=k.children();var j=k.height();var i=g.outerHeight(true);var h=g.position().top;if(h<0){if(f().index(g)===0){k.scrollTop(0);return}k.scrollTop(g.offset().top-l.offset().top)}else{if(h>j){k.scrollTop(g.offset().top-l.offset().top-j+i)}}}c.on("select",function(){if(g&&g.is(":visible")){RY.util.analytics.trackPageOpen();var h=g.find(".page-title a").attr("href");window.location=h}},this);c.on("previous",function(){b(-1);d()},this);c.on("next",function(){b(1);d()},this)};RY.PageCollectionView=Backbone.View.extend({template:RY.Templates.pageCollection,events:{"click .page-title a":RY.util.analytics.trackPageOpen},initialize:function(){_.bindAll(this,"checkEmpty","filter","_groupForPage","addOne","showEmptyMessage","clearEmptyMessage","addAll","render");this.modelViews={};this.collection.on("reset",this.addAll,this);this.collection.on("add",this.addOne,this);this.collection.on("filter",this.filter,this)},checkEmpty:function(a,e){var f=this.collection.isEmpty();var b=a.length===0;if(f||b){var c;if(f){c="Sorry mate, looks like you haven\u0027t visited any pages yet."}else{var d=AJS.contextPath()+"/dosearchsite.action?queryString="+encodeURIComponent(e);c="We didn\u0027t find any matching pages in your history."+" "+AJS.format("\u003ca href=\u0022{0}\u0022\u003eClick here\u003c/a\u003e to search for this term instead.",d)}this.showEmptyMessage(c)}else{this.clearEmptyMessage()}},filter:function(b,d){d=d||"";this.checkEmpty(b,d);var a=[this.$today,this.$yesterday,this.$older];_.invoke(a,"hideAll");var c=[];_.each(a,function(f){var e=f.showPages(b);if(e){c.push(f)}});if(c.length>1){c.pop();_.invoke(c,"showBorder")}},_groupForPage:function(a){var b=a.daysSinceLastSeen();if(b===0){return this.$today}else{if(b===1){return this.$yesterday}else{return this.$older}}},addOne:function(a){var b=this._groupForPage(a);b.add(a)},showEmptyMessage:function(a){this.$(".empty").html(AJS.$("<p>").html(a))},clearEmptyMessage:function(){this.$(".empty").html("")},addAll:function(){this.collection.each(this.addOne)},render:function(){this.$el.html(this.template());this.$today=new RY.PageGroupView({title:"Today"});this.$yesterday=new RY.PageGroupView({title:"Yesterday"});this.$older=new RY.PageGroupView({title:"Older"});var a=this.$(".groups");a.append(this.$today.render().el);a.append(this.$yesterday.render().el);a.append(this.$older.render().el);_.invoke([this.$today,this.$yesterday,this.$older],"hideAll");return this}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/util.js' */
var RYQ=RYQ||{};(function(){RYQ.util={analytics:{trackQuickNavOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-open"})},trackQuickNavPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-page"})},trackQuickNavRecentlyDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-quicknav-click-more-recent"})}}}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/quicknav/quicknav.js' */
var RYQ=RYQ||{};RYQ.QuickNavEntry=Backbone.Model.extend({classNameByType:{blogpost:"content-type-blogpost",page:"content-type-page"},parse:function(a){return{className:this.classNameByType[a.type],name:a.title,href:AJS.contextPath()+a.url,id:a.id,spaceName:a.space,lastSeen:a.lastSeen}}},{escape:function(b){var a=_.map(b,_.clone);_.each(a,function(c){c.name=_.escape(c.name);c.spaceName=_.escape(c.spaceName)});return a}});RYQ.QuickNavEntryCollection=Backbone.Collection.extend({model:RYQ.QuickNavEntry,url:AJS.contextPath()+"/rest/recentlyviewed/1.0/recent?limit=8",search:function(b){var a;if(AJS.$.trim(b).length===0){a=this.models}else{var c=b.match(/[^\s-]+/g);a=this.filter(function(e){var f=e.get("name");var d=f.toLowerCase();return _.all(c,function(g){return d.indexOf(g.toLowerCase())!==-1})})}this.trigger("filter",a);return a},comparator:function(a){return -(a.get("lastSeen"))}});(function(a){RYQ.QuickNav=Backbone.View.extend({initialize:function(){this.moreLink={className:"recently-viewed",href:"#",name:"More recently viewed pages..."};this.$input=a("#quick-search-query");this.makeDropdown();this.addShowHideHandlers();this.getHistory=_.once(this._getHistory);_.bindAll(this,"makeDropdown","addSearchResultBoostingHandler","_getHistory","render","addShowHideHandlers","_getItemsToShow","showQuickResults","onQuickSearch")},makeDropdown:function(){var c=function(d){a("a",d).each(function(){var h=a(this);var e=h.find("span");var g=e.data("properties");var f=g?g.spaceName:null;if(f&&!h.is(".content-type-spacedesc")){h.after(h.clone().attr("class","space-name").html(f));h.parent().addClass("with-space-name")}})};var b=this;this.$dropdown=AJS.inputDrivenDropdown({dropdownPlacement:function(d){b.$input.closest("form").find(".quick-nav-drop-down").append(d)},dropdownPostprocess:function(d){c(d)},ajsDropDownOptions:{className:"recently-viewed-dropdown"}})},addSearchResultBoostingHandler:function(){var b=this;a(window).on("quicksearch.ajax-success",function(g,f){var d=f.url.match("/json/contentnamesearch.action");var c=f.url.match(/rest\/quicknav\/\d\/search/);if(d||c){b.onQuickSearch(g,f)}})},_getHistory:function(){return this.collection.fetch().done(this.addSearchResultBoostingHandler)},render:function(){if(!AJS.Meta.get("remote-user")){return}var b=this.getHistory();b.done(_.bind(function(){if(AJS.dropDown.current==null&&this.collection.length!==0&&this.$input.val().length===0){this.showQuickResults()}},this));var c=this.$input;c.trigger("quick-search-loading-start");b.always(function(){c.trigger("quick-search-loading-stop")})},addShowHideHandlers:function(){var b=this;this.$input.on("focus",function(){b.render()}).on("click",function(c){c.stopPropagation();b.render()}).on("keyup",function(f){var c=f.which===27;var g=f.which===13;var d=a(this).val().length!==0;if(d||c){if(b.$dropdown.dd&&b.$dropdown.dd.$.is(":visible")){b.$dropdown.hide()}}else{if(!g){b.render()}}})},_getItemsToShow:function(){var c=this.collection.toJSON();var b=c.length>0&&c[0].id==AJS.Meta.get("page-id");if(b){c.shift()}return c},showQuickResults:function(){var b=RYQ.QuickNavEntry.escape(this._getItemsToShow());this.$dropdown.show([b,[this.moreLink]],"","");a(".recently-viewed-dropdown").on("click",".recently-viewed",function(c){c.preventDefault();a("#view-user-history-link").click();RYQ.util.analytics.trackQuickNavRecentlyDialogOpen()});a(".recently-viewed-dropdown").on("click",".with-space-name",function(c){RYQ.util.analytics.trackQuickNavPageOpen()});RYQ.util.analytics.trackQuickNavOpen()},onQuickSearch:function(l,f){var o=f.json.query;var c=_.map(this.collection.search(o),function(e){return e.attributes});c=RYQ.QuickNavEntry.escape(c);if(c.length==0){return}var m=f.json.contentNameMatches;var p=-1;for(var g=0;g<m.length;g++){var n=m[g][0].className;if(n=="content-type-blogpost"||n=="content-type-page"){p=g;break}}if(p!=-1){var h=m[p];var b=Math.min(h.length>4?2:6-h.length,c.length);h.unshift.apply(h,_(c).first(b));m[p]=_.uniq(h,function(e){return +e.id});if(h.length>6){var k=6-b;for(var d=k;d>0;d--){h.pop()}}}else{m.unshift(_(c).first(6))}}})}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/main.js' */
var RY=RY||{};AJS.toInit(function(a){a("#view-user-history-link").unbind("click");a("#view-user-history-link").click(function(g){g.preventDefault();var c=new AJS.Dialog({width:600,height:500,id:"recently-viewed-dialog",closeOnOutsideClick:true});var f=a(RY.Templates.body());c.addHeader("Recently viewed pages");c.addPanel("SinglePanel",f);c.addLink("Close",function(e){e.hide()});var d=a("<div>",{"class":"dialog-tip"}).text("Hint: type \u0022g\u0022 and then \u0022r\u0022 anywhere to quickly open this menu");c.popup.element.find(".dialog-button-panel").append(d);var i=new RY.PageCollection();var b=new RY.PageCollectionView({collection:i});f.find(".pages").html(b.render().el);c.gotoPanel(0);c.show();var h=a("#recently-viewed-dialog").spin("large");i.fetch({success:function(){h.spinStop();var j=_.extend({},Backbone.Events);var k=new RY.PageNavigator(b.$el,f.parent(),j);var e=new RY.FilterView({collection:i,el:f.find(".filter"),navigationEvents:j}).render();e.search()}});RY.util.analytics.trackDialogOpen()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/quicknav/main.js' */
var RYQ=RYQ||{};AJS.toInit(function(){var b=new RYQ.QuickNavEntryCollection();var a=new RYQ.QuickNav({collection:b})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'js/space-menu.js' */
AJS.toInit(function(a){var c=a(Confluence.Templates.BrowseSpaces.spacesLink());a("#space-directory-link").replaceWith(a(c));var b=function(d){var e=a("#space-menu-link-content");e.html(d.template);if(AJS&&AJS.Confluence&&AJS.Confluence.Analytics&&AJS.Confluence.Analytics.setAnalyticsSource){AJS.Confluence.Analytics.setAnalyticsSource(e.find("a"),"spacemenu")}a("#create-space-header").click(function(){AJS.trigger("analytics",{name:"create-space-from-header"});Confluence.SpaceBlueprint.Dialog.launch();return false})};a("#space-menu-link-content").on("aui-dropdown2-show",function(){AJS.trigger("analytics",{name:"open-space-menu"});if(!a("#space-menu-link-content .aui-dropdown2-section")||!a("#space-menu-link-content .aui-dropdown2-section").length){a.ajax({url:Confluence.getContextPath()+"/rest/ia/1.0/spacesmenu",type:"GET",dataType:"json",cache:false,success:b})}return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'soy/space-menu.soy' */
// This file was automatically generated from space-menu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.BrowseSpaces.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.BrowseSpaces == 'undefined') { Confluence.Templates.BrowseSpaces = {}; }


Confluence.Templates.BrowseSpaces.spacesLink = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.trigger({menu: {id: 'space-menu-link-content'}, id: 'space-menu-link', tagName: 'a', extraClasses: 'aui-nav-link', title: "Spaces", showIcon: true, text: "Spaces"}) + aui.dropdown2.contents({id: 'space-menu-link-content', extraClasses: 'aui-style-default aui-dropdown2-in-header'});
};
if (goog.DEBUG) {
  Confluence.Templates.BrowseSpaces.spacesLink.soyTemplateName = 'Confluence.Templates.BrowseSpaces.spacesLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:space-ia-analytics', location = 'js/space-ia-analytics.js' */
(function(b){var c=AJS.Confluence.Analytics.setAnalyticsSource;function d(){var g=b(".acs-side-bar");var f=g.find("a:not(.external_link a, #acs-configure-link)");c(f,"sidebar");var e=g.find(".quick-links-section li:not(.external_link) a");c(e,"spaceshortcut");var h=g.find(".ia-secondary-container a:not(.more-children-link)");if(g.find(".ia-secondary-container").data("tree-type")=="pages"){c(h,"contextnavchildmode")}else{if(g.find(".ia-secondary-container").data("tree-type")=="page-tree"){c(h,"contextnavpagetreemode")}else{c(h,"contextnav")}}}function a(e){return function(){AJS.trigger("analytics",{name:"space-ia-nav",data:{linkType:e}})}}AJS.toInit(function(e){e(".acs-side-bar").find(".ia-secondary-container .more-children-link").click(a("context-nav.more-children"));AJS.bind("sidebar.exit-configure-mode",d);AJS.bind("sidebar.flyout-triggered",function(g,f){a("flyout-triggered."+f.flyout)()});AJS.bind("pagetree-children-loaded",d);d()})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugin.jslibs:skate-0.12.6', location = 'libs/skate/0.12.6/skate-0.12.6.js' */
(function e(g,c,j){function h(a,k){if(!c[a]){if(!g[a]){var d="function"==typeof require&&require;if(!k&&d)return d(a,!0);if(f)return f(a,!0);d=Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d;}d=c[a]={exports:{}};g[a][0].call(d.exports,function(c){var f=g[a][1][c];return h(f?f:c)},d,d.exports,e,g,c,j)}return c[a].exports}for(var f="function"==typeof require&&require,d=0;d<j.length;d++)h(j[d]);return h})({1:[function(b,g,c){Object.defineProperty(c,"__esModule",{value:!0});"use strict";
c.ATTR_IGNORE="data-skate-ignore";c.types={ANY:"act",ATTR:"a",CLASS:"c",NOATTR:"ct",NOCLASS:"at",NOTAG:"ac",TAG:"t"}},{}],2:[function(b,g){g.exports={get:function(c,b){if(c.__SKATE_DATA)return c.__SKATE_DATA[b]},set:function(c,b,h){c.__SKATE_DATA||(c.__SKATE_DATA={});c.__SKATE_DATA[b]=h;return c}}},{}],3:[function(b,g){function c(c){for(var f=c.length,b=0;b<f;b++){var i=c[b],o=i.addedNodes,i=i.removedNodes;o&&(o.length&&!p(o[0].parentNode))&&d(o);i&&i.length&&a(i)}}var j=function(c){return c&&c.__esModule?
c["default"]:c},h=j(b("./globals")),f=b("./lifecycle"),d=f.initElements,a=f.removeElements,k=j(b("./mutation-observer")),p=b("./utils").getClosestIgnoredElement;g.exports={register:function(a){a&&(k.fixIe(),this.unregister());h.observer||(a=new k(c),a.observe(document,{childList:!0,subtree:!0}),h.observer=a);return this},unregister:function(){h.observer&&(h.observer.disconnect(),h.observer=void 0);return this}}},{"./globals":4,"./lifecycle":5,"./mutation-observer":6,"./utils":9}],4:[function(b,g){window.__skate||
(window.__skate={observer:void 0,registry:{}});g.exports=window.__skate},{}],5:[function(b,g,c){function j(o,c,a){if(k.get(o,c.id+":lifecycle:"+a))return!0;k.set(o,c.id+":lifecycle:"+a,!0);return!1}function h(c,a){if(!j(c,a,"created")){m(c,a.prototype,!0);a.template&&a.template(c);var b=function(a,b){return function(f){if(!b)return a(c,f,c);for(var d=f.target;d&&d!==document&&d!==c.parentNode;){if(i.call(d,b))return a(c,f,d);d=d.parentNode}}};"object"===typeof a.events&&l(a.events,function(a,d){var f,
i;i=d.split(" ");f=i.shift();i=i.join(" ");c.addEventListener(f,b(a,i),!!i&&("blur"===f||"focus"===f))});var f=function(i,f,d,b){var k;a.attributes&&a.attributes[f]&&"function"===typeof a.attributes[f][i]?k=a.attributes[f][i]:a.attributes&&"function"===typeof a.attributes[f]?k=a.attributes[f]:"function"===typeof a.attributes&&(k=a.attributes);k&&k(c,{type:i,name:f,newValue:d,oldValue:b})},d,k=c.attributes,h=[],g=k.length;(new p(function(a){a.forEach(function(a){var c,i=a.attributeName,d=k[i];d&&null===
a.oldValue?c="created":d&&null!==a.oldValue?c="updated":d||(c="removed");f(c,i,d?d.value||d.nodeValue:void 0,a.oldValue)})})).observe(c,{attributes:!0,attributeOldValue:!0});for(d=0;d<g;d++)h.push(k[d]);for(d=0;d<g;d++){var n=h[d];f("created",n.nodeName,n.value||n.nodeValue)}a.created&&a.created(c)}}function f(c){for(var i=c.length,d=0;d<i;d++){var b=c[d];if(!(1!==b.nodeType||b.attributes[a])){for(var k=n.getForElement(b),g=k.length,m=0;m<g;m++){var l=b,p=k[m];h(l,p);j(l,p,"attached")||(l.removeAttribute(p.unresolvedAttribute),
l.setAttribute(p.resolvedAttribute,""),p.attached&&p.attached(l))}b=b.childNodes;b.length&&f(b)}}}function d(a){for(var c=a.length,i=0;i<c;i++){var f=a[i];if(1===f.nodeType){d(f.childNodes);for(var b=n.getForElement(f),g=b.length,j=0;j<g;j++){var h=f,m=b[j];m.detached&&m.detached(h);k.set(h,m.id+":lifecycle:attached",!1)}}}}g=function(a){return a&&a.__esModule?a["default"]:a};Object.defineProperty(c,"__esModule",{value:!0});"use strict";var a=b("./constants").ATTR_IGNORE,k=g(b("./data")),p=g(b("./mutation-observer")),
n=g(b("./registry")),b=b("./utils"),m=b.inherit,l=b.objEach,b=window.HTMLElement.prototype,i=b.matches||b.msMatchesSelector||b.webkitMatchesSelector||b.mozMatchesSelector||b.oMatchesSelector;c.triggerCreated=h;c.initElements=f;c.removeElements=d},{"./constants":1,"./data":2,"./mutation-observer":6,"./registry":7,"./utils":9}],6:[function(b,g){function c(a,c){return{addedNodes:null,attributeName:null,attributeNamespace:null,nextSibling:null,oldValue:null,previousSibling:null,removedNodes:null,target:a,
type:c||"childList"}}function j(a,c){var f=a.childNodes;if(f)for(var d=f.length,b=0;b<d;b++){var k=f[b];c(k);j(k,c)}}function h(a){if(n&&!m)return new n(a);this.callback=a;this.elements=[]}var f=b("./utils"),d=f.debounce,a=f.objEach,k=window.HTMLElement.prototype,p=window.HTMLElement.prototype.contains,n=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver,m=!1,l=-1<window.navigator.userAgent.indexOf("Trident");h.fixIe=function(){if(l&&!m){var a=Object.getOwnPropertyDescriptor(k,
"innerHTML");Object.defineProperty(k,"innerHTML",{get:function(){return a.get.call(this)},set:function(c){j(this,function(a){var c=document.createEvent("MutationEvent");c.initMutationEvent("DOMNodeRemoved",!0,!1,null,null,null,null,null);a.dispatchEvent(c)});a.set.call(this,c)}});m=!0}};Object.defineProperty(h,"isFixingIe",{get:function(){return m}});h.prototype={observe:function(a,f){function b(a){h.push(a);n()}var k=this,j,g,h=[],l=[],n=d(function(){for(var b=h.length,d=0;d<b;d++){var n=h[d],r=
n.target;if(r){var n=n.type,q=r.parentNode;if(f.childList&&(f.subtree||q===a)){var s=m&&"DOMNodeRemoved"===n,t=j&&(1!==j.nodeType?!1:j.contains?j.contains(r):p.call(j,r));if(s||!t){if(!g||g.target!==q)l.push(g=c(q));"DOMNodeInserted"===n?(g.addedNodes||(g.addedNodes=[]),g.addedNodes.push(r)):(g.removedNodes||(g.removedNodes=[]),g.removedNodes.push(r));j=r}}}}k.callback(l);h=[];l=[];g=j=void 0}),t={},q=[],u=d(function(){var a=q.length;k.callback(q);q.splice(0,a)}),s={target:a,options:f,insertHandler:b,
removeHandler:b,attributeHandler:function(d){var b=d.target;if(f.attributes&&(f.subtree||b===a)){var k=d.attrName,g=d.prevValue,d=d.newValue,b=c(b,"attributes");b.attributeName=k;f.attributeOldValue&&(b.oldValue=t[k]||g||null);q.push(b);f.attributeOldValue&&(t[k]=d);u()}}};this.elements.push(s);f.childList&&(a.addEventListener("DOMNodeInserted",s.insertHandler),a.addEventListener("DOMNodeRemoved",s.removeHandler));f.attributes&&a.addEventListener("DOMAttrModified",s.attributeHandler);return this},
disconnect:function(){a(this.elements,function(a){a.target.removeEventListener("DOMNodeInserted",a.insertHandler);a.target.removeEventListener("DOMNodeRemoved",a.removeHandler);a.target.removeEventListener("DOMAttrModified",a.attributeHandler)});this.elements=[];return this}};g.exports=h},{"./utils":9}],7:[function(b,g){function c(a,c){return d(j.registry,a)&&-1<j.registry[a].type.indexOf(c)}var j,h=b("./globals");j=h&&h.__esModule?h["default"]:h;var f=b("./constants.js").types,d=b("./utils").hasOwn;
g.exports={clear:function(){j.registry={};return this},getForElement:function(a){var d=a.attributes,b=d.length,g=[],h=d.is,l=h&&(h.value||h.nodeValue),h=a.tagName.toLowerCase(),i=l||h,o;c(i,f.TAG)&&(i=j.registry[i],o=i["extends"],l?h===o&&g.push(i):o||g.push(i));for(l=0;l<b;l++)i=d[l].nodeName,c(i,f.ATTR)&&(i=j.registry[i],o=i["extends"],(!o||h===o)&&g.push(i));(d=a.classList)?a=d:(a=a.attributes,a=a["class"]&&a["class"].nodeValue.split(/\s+/)||[]);d=a.length;for(b=0;b<d;b++)i=a[b],c(i,f.CLASS)&&
(i=j.registry[i],o=i["extends"],(!o||h===o)&&g.push(i));return g},has:function(a){return d(j.registry,a)},set:function(a,c){if(this.has(a))throw Error('A definition of type "'+c.type+'" with the ID of "'+a+'" already exists.');j.registry[a]=c;return this},remove:function(a){this.has(a)&&delete j.registry[a];return this}}},{"./constants.js":1,"./globals":4,"./utils":9}],8:[function(b,g){function c(a,b){b=n(b||{},c.defaults);b.id=a;if(k.has(b.id))throw Error('A definition of type "'+b.type+'" with the ID of "'+
a+'" already exists.');k.set(b.id,b);i();h.register(b.remove);if(-1<b.type.indexOf(m.TAG)){var f=b,g=function(){var a;a=f["extends"];var b=f.id;a?(a=document.createElement(a),a.setAttribute("is",b)):a=document.createElement(b);f.prototype=g.prototype;d(a,f);return a};g.prototype=f.prototype;return g}}var j=function(a){return a&&a.__esModule?a["default"]:a},h=j(b("./document-observer")),f=b("./lifecycle"),d=f.triggerCreated,a=f.initElements,k=j(b("./registry")),p=b("./utils"),f=p.debounce,n=p.inherit,
j=j(b("./version")),m=b("./constants").types,l=!!document.attachEvent,i=f(function(){var b=function(){a(document.getElementsByTagName("html"))},c;c=l?"complete"===document.readyState:"interactive"===document.readyState||"complete"===document.readyState;c?b():l?window.addEventListener("load",b):document.addEventListener("DOMContentLoaded",b)});c.init=function(b){if(b)return"string"===typeof b&&(b=document.querySelectorAll(b)),a("undefined"===typeof b.length?[b]:b),b};c.types=m;c.version=j;c.defaults=
{attributes:void 0,events:void 0,"extends":"",id:"",prototype:{},resolvedAttribute:"resolved",template:void 0,type:m.ANY,unresolvedAttribute:"unresolved"};var o=window.skate;c.noConflict=function(){window.skate=o;return this};window.skate=c;g.exports=c},{"./constants":1,"./document-observer":3,"./lifecycle":5,"./registry":7,"./utils":9,"./version":10}],9:[function(b,g,c){function j(b,c){return Object.prototype.hasOwnProperty.call(b,c)}c.hasOwn=j;c.debounce=function(b){var c=!1;return function(){c||
(c=!0,setTimeout(function(){c=!1;b()},1))}};c.getClosestIgnoredElement=function(b){for(;b&&b!==document&&!(b instanceof DocumentFragment);){if(b.hasAttribute(h))return b;b=b.parentNode}};c.inherit=function(b,c,a){for(var g=Object.getOwnPropertyNames(c),h=g.length,j=0;j<h;j++){var m=g[j];if(a||void 0===b[m]){var l=Object.getOwnPropertyDescriptor(c,m);l.get||l.set||!l.writable||!l.enumerable||!l.configurable?Object.defineProperty(b,m,l):b[m]=c[m]}}return b};c.objEach=function(b,c){for(var a in b)j(b,
a)&&c(b[a],a)};Object.defineProperty(c,"__esModule",{value:!0});"use strict";var h=b("./constants").ATTR_IGNORE},{"./constants":1}],10:[function(b,g){g.exports="0.12.6"},{}]},{},[8]);(function(b){var g=b.skate.noConflict();define("atlassian/libs/skate-0.12.6",[],function(){return g})})(window);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:skate', location = '/includes/js/amd/shim/skate-amd.js' */
define("skate",["atlassian/libs/skate-0.12.6"],function(a){return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:persistable', location = 'js/persistable.js' */
define("confluence/persistable",["skate","confluence/storage-manager"],function(f,g){var d=g("confluence","userSettings");return f("data-persist",{type:f.types.ATTRIBUTE,created:function(b){if(!b.name)throw'Missing attribute "name"';var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,a=d.getItem(a),e=b.getAttribute("data-default-value");if(/value|checked/.test(c))a=a||e||null,null!==a&&("checked"===c&&(a="true"===a),b[c]=a);else throw"Persistable only works with 'value' or 'checked' attributes!";
},events:{change:function(b){var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,e=b.getAttribute("data-default-value");String(b[c])===e?d.removeItem(a):d.setItem(a,b[c],2592E3)}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag.js' */
define("confluence/flag",["ajs","jquery"],function(f,d){function h(a){var b=d('<span class="aui-icon icon-close" role="button" tabindex="0"></span>');b.click(function(){g(a)});b.keypress(function(b){if(b.which===f.keyCode.ENTER||b.which===f.keyCode.SPACE)g(a),b.preventDefault()});return a.find(".aui-message").append(b)[0]}function g(a){var b=a.get(0);b.setAttribute("aria-hidden","true");a=a.parent();i(a);b.dispatchEvent(new CustomEvent("aui-flag-close",{bubbles:!0}));return b}function i(a){a.hasClass("aui-flag-stack")&&
a.children('.aui-flag:not([aria-hidden="true"])').length&&(a.children(".aui-flag-stack-top-item").removeClass("aui-flag-stack-top-item"),a.children('.aui-flag:not([aria-hidden="true"])').last().addClass("aui-flag-stack-top-item"))}var j={body:"",close:"manual",title:"",type:"info",fifo:!1};return function(a){var a=d.extend({},j,a),b,c=a,c=f.template('<div class="aui-flag {extraClasses}"><div class="aui-message aui-message-{type} {type} {closeable} shadowed"><p class="title"><strong>{title}</strong></p>{body}<\!-- .aui-message --\></div></div>').fill({"body:html":c.body||
"",closeable:"never"===c.close?"":"closeable",title:c.title||"",type:c.type,extraClasses:c.extraClasses||""}).toString();b=d(c);b[0].close=function(){g(b)};"auto"===a.close?(h(b),b.find(".aui-message").addClass("aui-will-close"),setTimeout(function(){b[0].close()},5E3)):"manual"===a.close&&h(b);d("#aui-flag-container").find(".aui-flag").get().forEach(function(a){a.getAttribute("aria-hidden")==="true"&&d(a).remove()});c=d("#aui-flag-container");c.length||(c=d('<div id="aui-flag-container"></div>'),
d("body").prepend(c));if(a.stack){var e=d('[data-aui-flag-stack="'+a.stack+'"]');e.length||(e=d('<div data-aui-flag-stack="'+a.stack+'" class="aui-flag-stack"></div>'),e.appendTo(c));e.find('[aria-hidden="false"]').length||e.detach().appendTo(c);a.fifo?b.appendTo(e):b.prependTo(e);i(e)}else b.appendTo(c);a=b;a=a.length?a[0]:a;window.getComputedStyle(a,null).getPropertyValue("left");a=b.attr("aria-hidden","false")[0];a.dispatchEvent(new CustomEvent("aui-flag-show",{bubbles:!0}));return a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:confluence-flags', location = 'flag/confluence-flag-scroll.js' */
define("confluence/flag-scroll",["jquery","ajs","confluence/meta","document"],function(c,j,k,l){function f(){var a=c("#"+g);if(a.find('.aui-flag[aria-hidden="false"]').length){var b;b=0;h?b=c("#header").height()+d:(b=e.scrollTop(),b=b<=i-d?i-Math.max(b,0):d);a.css("top",b)}}var d=20,i=71,g="aui-flag-container",h=!1,e;return function(a){e=(h=a("body").hasClass("theme-documentation"))?a("#splitter-content"):a(window);e.on("scroll",f);l.addEventListener("aui-flag-show",f);j.bind("rte-ready",function(){"page"===
k.get("content-type")&&a("#"+g).find('.aui-flag[aria-hidden="false"]').each(function(){this.close()})})}});require("confluence/module-exporter").safeRequire("confluence/flag-scroll",function(c){require("ajs").toInit(c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(f){Confluence.FeatureDiscovery={};var c,e=false,i=3;var d="com.atlassian.confluence.plugins.confluence-feature-discovery-plugin";var g=d+":confluence-feature-discovery-plugin-resources.test-mode";var a=WRM.data.claim(g);function j(k){if(c===undefined){c=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}")}if(k){return c[k]||[]}return c}function b(m,o){var n=j(m);for(var l=0,k=n.length;l<k;l++){if(n[l]==o){return true}}return false}function h(n,p){var l="com.atlassian.webdriver.discovery="+n+":"+p;var k=document.cookie.split(";");for(var m=0;m<k.length;m++){var o=k[m];while(o.charAt(0)==" "){o=o.substring(1)}if(o.indexOf(l)!=-1){return true}}return false}Confluence.FeatureDiscovery.forPlugin=function(m,l){var p=Confluence.storageManager("feature-discovery."+m);l=l||i;function o(r){var q=parseInt(p.getItem(r),10);return isNaN(q)?0:q}function n(r,q){return p.setItem(r,q)}function k(q){return p.removeItem(q)}return{addDiscoveryView:function(q){n(q,o(q)+1)},shouldShow:function(r,q){if(q===true&&a&&!h(m,r)){return false}if(e||b(m,r)){return false}if(o(r)>=l){this.markDiscovered(r);return false}e=true;return true},markDiscovered:function(r,q){if(b(m,r)){return}AJS.safeAjax({url:AJS.contextPath()+"/rest/feature-discovery/1.0/discovered/"+m+"/"+r,type:"POST",data:{},success:function(){j(m).unshift(r);k(r);AJS.trigger("feature-discovered",{pluginKey:m,featureKey:r});if(q&&f.isFunction(q)){q()}}})},listDiscovered:function(){return j(m).slice(0)}}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = '/js/confluence-license-banner.js' */
require(["ajs","jquery"],function(a,b){a.toInit(function(){var d=WRM.data.claim("com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources.license-details");if(!d){a.warn("Unable to claim my required data");return}var c={destroyBanner:function(){b("#license-banner").slideUp(function(){b("#license-banner").remove()})},remindMeLater:function(){b.ajax({type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",data:JSON.stringify({atl_token:a.Meta.get("atl-token")}),url:a.contextPath()+"/rest/licensebanner/1.0/reminder/later"});c.destroyBanner()},remindMeNever:function(){b.ajax({type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",data:JSON.stringify({atl_token:a.Meta.get("atl-token")}),url:a.contextPath()+"/rest/licensebanner/1.0/reminder/never"});c.destroyBanner()},createBanner:function(g){var e;if(g.showLicenseExpiryBanner){e=Confluence.Templates.LicenseBanner.expiryBanner({days:g.daysBeforeLicenseExpiry,mac:g.renewUrl,sales:g.salesEmail})}else{if(g.showMaintenanceExpiryBanner){e=Confluence.Templates.LicenseBanner.maintenanceBanner({days:g.daysBeforeMaintenanceExpiry,mac:g.renewUrl,sales:g.salesEmail})}}if(e){var f=b(e);b("#full-height-container").prepend(f);b("#license-banner-later").click(function(h){h.preventDefault();c.remindMeLater()});b("#license-banner-never").click(function(h){h.preventDefault();c.remindMeNever()});f.find(".icon-close").click(function(h){h.preventDefault();c.remindMeLater()})}}};c.createBanner(d)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = 'soy/confluence-license-banner.soy' */
// This file was automatically generated from confluence-license-banner.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LicenseBanner.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LicenseBanner == 'undefined') { Confluence.Templates.LicenseBanner = {}; }


Confluence.Templates.LicenseBanner.wrapper = function(opt_data, opt_ignored) {
  return '<div>' + soy.$$filterNoAutoescape(opt_data.contentHTML) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.wrapper.soyTemplateName = 'Confluence.Templates.LicenseBanner.wrapper';
}


Confluence.Templates.LicenseBanner.expiryBanner = function(opt_data, opt_ignored) {
  var output = '';
  var renewTag__soy8 = '<a id="license-banner-my-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.mac) + '">';
  var end__soy12 = '</a>';
  var mailTag__soy14 = '<a id="license-banner-sales-link" href="mailto:' + soy.$$escapeHtml(opt_data.sales) + '">';
  output += Confluence.Templates.LicenseBanner.wrapper({contentHTML: '' + aui.message.warning({content: '<div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="true">' + ((opt_data.days < 0) ? soy.$$filterNoAutoescape(AJS.format("Your license subscription has expired. This instance is now read-only. Please renew {0}online{1} or contact {2}sales{3}.",renewTag__soy8,end__soy12,mailTag__soy14,end__soy12)) : (opt_data.days == 0) ? soy.$$filterNoAutoescape(AJS.format("Your license subscription will expire today and Confluence will become read-only. Please renew {0}online{1} or contact {2}sales{3}.",renewTag__soy8,end__soy12,mailTag__soy14,end__soy12)) : soy.$$filterNoAutoescape(AJS.format("Your license subscription will expire in {0,choice,1#{0} day|1\x3c{0} days}. Confluence will become read-only after the expiry. Please renew {1}online{2} or contact {3}sales{4}.",opt_data.days,renewTag__soy8,end__soy12,mailTag__soy14,end__soy12))) + '</div>', isCloseable: opt_data.days > 7, id: 'license-banner'})});
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.expiryBanner.soyTemplateName = 'Confluence.Templates.LicenseBanner.expiryBanner';
}


Confluence.Templates.LicenseBanner.maintenanceBanner = function(opt_data, opt_ignored) {
  var output = '';
  var renewTag__soy39 = '<a id="license-banner-my-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.mac) + '">';
  var end__soy43 = '</a>';
  var later__soy45 = '<a href="#" id="license-banner-later">';
  var never__soy47 = '<a href="#" id="license-banner-never">';
  output += Confluence.Templates.LicenseBanner.wrapper({contentHTML: '' + aui.message.warning({content: '<div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="false">' + ((opt_data.days < 0) ? soy.$$filterNoAutoescape(AJS.format("You no longer have access Support and Updates. {0}Renew online{1}, {2}remind me later{3} or {4}never remind me again{5}.",renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43)) : (opt_data.days == 0) ? soy.$$filterNoAutoescape(AJS.format("You will lose access to Support and Updates today. {0}Renew online{1}, {2}remind me later{3} or {4}never remind me again{5}.",renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43)) : soy.$$filterNoAutoescape(AJS.format("You will lose access to Support and Updates in {0,choice,1#{0} day|1\x3c{0} days}. {1}Renew online{2}, {3}remind me later{4} or {5}never remind me again{6}.",opt_data.days,renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43))) + '</div>', id: 'license-banner'})});
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.maintenanceBanner.soyTemplateName = 'Confluence.Templates.LicenseBanner.maintenanceBanner';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:clickable-resources', location = 'js/clickable.js' */
jQuery(function(a){a(".clickable").live("click",function(c){if(a(c.target).closest("a[href]").length===0&&a(c.target).closest(".clickable").length===1){var b=a(this).attr("href")||a("a[href]:first",this).attr("href");if(b){location.href=b}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.soy' */
// This file was automatically generated from appswitcher.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.appswitcher.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher == 'undefined') { navlinks.templates.appswitcher = {}; }


navlinks.templates.appswitcher.linkSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.list.length > 0) {
    output += '<div class="aui-nav-heading sidebar-section-header">' + soy.$$escapeHtml(opt_data.title) + '</div><ul class="aui-nav nav-links">';
    var linkList8 = opt_data.list;
    var linkListLen8 = linkList8.length;
    for (var linkIndex8 = 0; linkIndex8 < linkListLen8; linkIndex8++) {
      var linkData8 = linkList8[linkIndex8];
      output += navlinks.templates.appswitcher.applicationsItem(linkData8);
    }
    output += '</ul>';
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.linkSection.soyTemplateName = 'navlinks.templates.appswitcher.linkSection';
}


navlinks.templates.appswitcher.applicationsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link"><a href="' + soy.$$escapeHtml(opt_data.link) + '" ' + ((opt_data.self) ? 'class="checked"' : '') + ' title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span></a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.applicationsItem.soyTemplateName = 'navlinks.templates.appswitcher.applicationsItem';
}


navlinks.templates.appswitcher.shortcutsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link"><a href="' + soy.$$escapeHtml(opt_data.link) + '" ' + ((opt_data.self) ? 'class="checked"' : '') + ' title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span>' + ((opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '') + '</a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.shortcutsItem.soyTemplateName = 'navlinks.templates.appswitcher.shortcutsItem';
}


navlinks.templates.appswitcher.error = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-error">' + soy.$$filterNoAutoescape("Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.") + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.error.soyTemplateName = 'navlinks.templates.appswitcher.error';
}


navlinks.templates.appswitcher.sidebarContents = function(opt_data, opt_ignored) {
  return '<div class="aui-page-panel-nav"><nav class="aui-navgroup aui-navgroup-vertical"><div class="app-switcher-section app-switcher-applications"><div class="aui-nav-heading">' + soy.$$escapeHtml("Application Links") + '</div><div class="app-switcher-loading">' + soy.$$filterNoAutoescape("Loading\x26hellip;") + '</div></div><div class="app-switcher-section app-switcher-shortcuts"><div class="aui-nav-heading">' + soy.$$escapeHtml("Shortcuts") + '</div><div class="app-switcher-loading">' + soy.$$filterNoAutoescape("Loading\x26hellip;") + '</div></div></nav></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.sidebarContents.soyTemplateName = 'navlinks.templates.appswitcher.sidebarContents';
}


navlinks.templates.appswitcher.trigger = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">' + soy.$$escapeHtml("Linked Applications") + '</span>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.trigger.soyTemplateName = 'navlinks.templates.appswitcher.trigger';
}


navlinks.templates.appswitcher.projectHeaderSection = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-title">' + aui.avatar.avatar({size: 'large', avatarImageUrl: opt_data.avatarUrl, isProject: true, title: opt_data.name}) + '<div class="sidebar-project-name">' + soy.$$escapeHtml(opt_data.name) + '</div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.projectHeaderSection.soyTemplateName = 'navlinks.templates.appswitcher.projectHeaderSection';
}


navlinks.templates.appswitcher.cogDropdown = function(opt_data, opt_ignored) {
  var output = '';
  var dropdownList__soy74 = '' + navlinks.templates.appswitcher.dropdownList({list: opt_data.links});
  output += aui.dropdown2.dropdown2({menu: {id: opt_data.id, content: dropdownList__soy74, extraClasses: 'aui-style-default sidebar-customize-section'}, trigger: {showIcon: false, content: '<span class="aui-icon aui-icon-small aui-iconfont-configure"></span>', container: '#app-switcher'}});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.cogDropdown.soyTemplateName = 'navlinks.templates.appswitcher.cogDropdown';
}


navlinks.templates.appswitcher.dropdownList = function(opt_data, opt_ignored) {
  var output = '<ul class="sidebar-admin-links">';
  var linkList82 = opt_data.list;
  var linkListLen82 = linkList82.length;
  for (var linkIndex82 = 0; linkIndex82 < linkListLen82; linkIndex82++) {
    var linkData82 = linkList82[linkIndex82];
    output += '<li class="nav-link"><a href="' + soy.$$escapeHtml(linkData82.href) + '" title="' + soy.$$escapeHtml(linkData82.title) + '"><span class="nav-link-label">' + soy.$$escapeHtml(linkData82.label) + '</span></a></li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.dropdownList.soyTemplateName = 'navlinks.templates.appswitcher.dropdownList';
}


navlinks.templates.appswitcher.switcher = function(opt_data, opt_ignored) {
  var output = '';
  if (true) {
    if (AJS.DarkFeatures.isEnabled('rotp.sidebar')) {
      var sidebarContents__soy97 = '' + navlinks.templates.appswitcher.sidebarContents(null);
      var triggerContent__soy99 = '' + navlinks.templates.appswitcher.trigger(null);
      output += navlinks.templates.appswitcher.sidebar({sidebar: {id: 'app-switcher', content: sidebarContents__soy97}, trigger: {showIcon: false, content: triggerContent__soy99}});
    } else {
      output += navlinks.templates.appswitcher_old.switcher(null);
    }
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.switcher.soyTemplateName = 'navlinks.templates.appswitcher.switcher';
}


navlinks.templates.appswitcher.sidebar = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.sidebar.id) + '" class="sidebar-trigger app-switcher-trigger" aria-owns="' + soy.$$escapeHtml(opt_data.sidebar.id) + '" aria-haspopup="true" data-is-user-admin="' + soy.$$escapeHtml(false) + '" data-is-sidebar="true" >' + soy.$$filterNoAutoescape(opt_data.trigger.content) + '</a><div id=' + soy.$$escapeHtml(opt_data.sidebar.id) + ' class="app-switcher-sidebar aui-style-default sidebar-offscreen">' + soy.$$filterNoAutoescape(opt_data.sidebar.content) + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.sidebar.soyTemplateName = 'navlinks.templates.appswitcher.sidebar';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.js' */
(function(e,a){var d="is-user-admin";var c="#app-switcher";a.SideBar=function(f){var g=this;this.$sidebar=null;f=e.extend({sidebarContents:null},f);this.getLinks=function(){return e.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateAppLinks).fail(this.showAppSwitcherError)};this.populateProjectHeader=function(i,h){g.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").after(navlinks.templates.appswitcher.projectHeaderSection({avatarUrl:h,name:i}))};this.getProjectData=function(){var h=e(".project-shortcut-dialog-trigger"),i=h.data("key"),j=h.data("entity-type");if(h.size()==0||!i||!j){e(".app-switcher-shortcuts").remove();return}var l,k;k=e.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+i,cache:false,data:{entityType:j},dataType:"json"});l=e.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+i,cache:false,data:{entityType:j},dataType:"json"});e.when(k,l).then(function(n,m){g.updateProjectShortcuts(n,m,{key:i,entityType:j,name:h.data("name"),avatarUrl:h.find("img").prop("src")})},g.showProjectShortcutsError)};this.getSidebar=function(){if(!this.$sidebar){this.$sidebar=e(f.sidebarContents)}return this.$sidebar};this.addApplicationsCog=function(){e(".app-switcher-applications .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-applications-admin-dropdown",links:[{href:AJS.contextPath()+"/plugins/servlet/customize-application-navigator",label:"Customize navigator",title:"Add new entries, hide existing or restrict who sees what"},{href:AJS.contextPath()+"/plugins/servlet/applinks/listApplicationLinks",label:"Manage application links",title:"Link to more Atlassian applications"}]}))};this.addProjectShortcutsCog=function(h,j){var i=[{href:AJS.contextPath()+"/plugins/servlet/custom-content-links-admin?entityKey="+h,label:"Customize shortcuts",title:""}];if(g.entityMappings[j]){i.push({href:g.generateEntityLinksUrl(h,g.entityMappings[j]),label:"Manage product links",title:""})}g.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-project-shortcuts-admin-dropdown",links:i}))};this.updateAppLinks=function(h){e(function(){g.getSidebar().find(".app-switcher-applications").html(navlinks.templates.appswitcher.linkSection({title:"Application Links",list:h}));if(g.getSidebar().data(d)){g.addApplicationsCog()}g.bindAnalyticsHandlers(g.getSidebar(),h)})};this.updateProjectShortcuts=function(k,i,j){var l=k[0].shortcuts,h=i[0].shortcuts;g.getSidebar().find(".app-switcher-shortcuts").html(navlinks.templates.appswitcher.linkSection({title:"Shortcuts",list:l.concat(h)}));if(g.getSidebar().data(d)){g.addProjectShortcutsCog(j.key,j.entityType)}g.populateProjectHeader(j.name,j.avatarUrl);g.bindAnalyticsHandlers(g.getSidebar(),data)};this.entityMappings={"confluence.space":"com.atlassian.applinks.api.application.confluence.ConfluenceSpaceEntityType","jira.project":"com.atlassian.applinks.api.application.jira.JiraProjectEntityType","bamboo.project":"com.atlassian.applinks.api.application.bamboo.BambooProjectEntityType","stash.project":"com.atlassian.applinks.api.application.stash.StashProjectEntityType"};this.generateEntityLinksUrl=function(h,i){if(i===g.entityMappings["confluence.space"]){return AJS.contextPath()+"/spaces/listentitylinks.action?typeId="+i+"&key="+h}else{return AJS.contextPath()+"/plugins/servlet/applinks/listEntityLinks/"+i+"/"+h}};this.showAppSwitcherError=function(){e(function(){var h=g.getSidebar();h.find(".app-switcher-applications .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());h.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",e.proxy(g.retryLoading,g))})};this.showProjectShortcutsError=function(){e(function(){var h=g.getSidebar();h.find(".app-switcher-shortcuts .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());h.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",e.proxy(g.retryLoading,g))})};this.retryLoading=function(h){this.getSidebar().html(navlinks.templates.appswitcher.sidebarContents());this.getLinks();this.getProjectData();h&&h.stopPropagation()};this.bindAnalyticsHandlers=function(h,i){};this.getLinks();e(this.getProjectData);this.toggleSidebar=function(j){var k=g.getSidebar(),i=e("body"),h=e(window.document);if(!i.hasClass("app-switcher-open")){var m=e("#header");k.css("left",-k.width());k.parent("body").length||k.appendTo("body");b({data:k});k.animate({left:0},300);function l(n){var p=n.target&&e(n.target),o=n.keyCode;if(n.originalEvent===j.originalEvent){return}if(p&&!o&&!(p.closest(k).length||p.closest(m).length)&&j.which==1&&!(n.shiftKey||n.ctrlKey||n.metaKey)){g.toggleSidebar()}else{if(o===27){g.toggleSidebar()}}}h.on("click.appSwitcher",l);h.on("keydown.appSwitcher",l);h.on("scroll.appSwitcher",k,b)}else{h.off(".appSwitcher")}i.toggleClass("app-switcher-open")};e("#header").on("click",".app-switcher-trigger",this.toggleSidebar)};function b(h){var f=e(document).scrollTop(),i=e("#header"),g=(i.height()+i.offset().top)-f;if(g>=0){h.data.css({top:g,position:"fixed"})}else{h.data.css({top:0,left:0,position:"fixed"})}}e(function(){if(e(c).data("is-sidebar")===true){new a.SideBar({sidebarContents:c})}})}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.js' */
var APPSWITCHER_TRIGGER_CLICK="appswitcher.trigger.click";var APPSWITCHER_DROPDOWN_SHOW="appswitcher.dropdown.show";var APPSWITCHER_DROPDOWN_DISPLAY_ERROR="appswitcher.dropdown.display.error";var APPSWITCHER_APP_LINK_CLICK="appswitcher.app.link.click";var APPSWITCHER_CONFIGURE_LINK_CLICK="appswitcher.configure.link.click";(function(c,f){var b="isAppSuggestionAvailable";var d="isSiteAdminUser";var e="isUserAdmin";var a="#app-switcher";f.AppSwitcher=function(j){var l=AJS.contextPath()+"/plugins/servlet/customize-application-navigator";var k="unified.usermanagement";var m=this;this.$dropdown=null;j=c.extend({dropdownContents:null},j);this.getLinks=function(){return c.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateDropdown).fail(this.showError)};this.getDropdown=function(){if(!this.$dropdown){this.$dropdown=c(j.dropdownContents);this.envData=this.$dropdown.data("environment")}return this.$dropdown};this.updateDropdown=function(n){c(function(){m.getDropdown().html(navlinks.templates.appswitcher_old.applications({apps:n,showAdminLink:m.envData[e],adminLink:l}));m.bindAnalyticsHandlers();if(m.envData[b]===true){m.handleSuggestionApps(n)}})};this.bindAnalyticsHandlers=function(){c(".app-switcher-trigger").on("click",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_TRIGGER_CLICK})});c("#app-switcher").on("aui-dropdown2-show",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_DROPDOWN_SHOW})});c("#app-switcher .nav-link").on("click",function(){var p="custom";var q=c(this).find("a");var o=q.attr("href");var n=window.location.hostname;if(o&&o.indexOf("bitbucket.org")>-1){p="bitbucket-cloud"}else{if(o.indexOf(n+"/wiki")>-1){p="confluence"}else{if(o.indexOf(n+"/build")>-1){p="bamboo"}else{if(o.indexOf(n)>-1){p="jira"}}}}AJS.trigger("analyticsEvent",{name:APPSWITCHER_APP_LINK_CLICK,data:{product:p}})});c(".nav-link-edit-wrapper").on("click",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_CONFIGURE_LINK_CLICK})})};this.isBillingSystemEnabled=function(){return(this.envData[d]===true)&&AJS.DarkFeatures.isEnabled(k)};this.handleSuggestionApps=function(q){var r=_.map(q,function(s){return s.applicationType.toLowerCase()});var o=c("<div id='app-switcher-suggestion-apps' class='aui-dropdown2-section'/>");o.html(navlinks.templates.appswitcher_old.suggestionApps);var p=o.find(".suggestion-apps");var n=false;_.each(g,function(s){if(!_.contains(r,s.appName)){n=true;p.append(navlinks.templates.appswitcher_old.suggestionApp({suggestionApp:s,isBillingSystemEnabled:m.isBillingSystemEnabled()}))}});if(!n){return}c("#app-switcher").append(o);c(".app-discovery-suggestion-app").click(function(){var t=c(this).find("a");var s;if(m.envData[d]===true){s="appswitcher.discovery.siteadmin.select.inproduct."}else{s="appswitcher.discovery.user.select."}s=s+t.attr("id").toLowerCase();AJS.trigger("analytics",{name:s})});c(".app-discovery-suggestion-app").hover(function(){c(this).find("a").removeClass("active").removeClass("aui-dropdown2-active")});c(".app-discovery-cancel-button").click(function(){AJS.trigger("analytics",{name:"appswitcher.discovery.nothanks.button.click"});i(h,"true");o.remove()})};this.showError=function(){c(function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_DROPDOWN_DISPLAY_ERROR});m.getDropdown().html(navlinks.templates.appswitcher_old.error()).off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(m.retryLoading,m))})};this.retryLoading=function(n){this.getDropdown().html(navlinks.templates.appswitcher_old.loading());this.getLinks();n&&n.stopPropagation()};this.getLinks()};var h="key-no-thanks";var g=[{appName:"jira",appDesc:"Issue & Project Tracking Software",discoveryUrl:"https://www.atlassian.com/software/jira",billingSystemDiscoveryUrl:"/admin/billing/addapplication"},{appName:"confluence",appDesc:"Collaboration and content sharing",discoveryUrl:"https://www.atlassian.com/software/confluence",billingSystemDiscoveryUrl:"/admin/billing/addapplication?product=confluence.ondemand"},{appName:"bamboo",appDesc:"Continuous integration",discoveryUrl:"https://www.atlassian.com/software/bamboo",billingSystemDiscoveryUrl:"/admin/billing/addapplication?product=bamboo.ondemand"}];var i=function(j,k){c.ajax({url:AJS.contextPath()+"/rest/menu/latest/userdata/",type:"PUT",contentType:"application/json",data:JSON.stringify({key:j,value:k})})};c(function(){if(c(a).data("is-switcher")===true){new f.AppSwitcher({dropdownContents:a})}})}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.soy' */
// This file was automatically generated from appswitcher_old.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.appswitcher_old.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher_old == 'undefined') { navlinks.templates.appswitcher_old = {}; }


navlinks.templates.appswitcher_old.applications = function(opt_data, opt_ignored) {
  return '' + navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.apps, listClass: 'nav-links', showDescription: opt_data.showDescription}) + ((opt_data.custom) ? navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.custom, showDescription: opt_data.showDescription}) : '') + ((opt_data.showAdminLink) ? navlinks.templates.appswitcher_old.adminSection(opt_data) : '');
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applications.soyTemplateName = 'navlinks.templates.appswitcher_old.applications';
}


navlinks.templates.appswitcher_old.applicationsSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.list.length > 0) {
    var param19 = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
    var linkList27 = opt_data.list;
    var linkListLen27 = linkList27.length;
    for (var linkIndex27 = 0; linkIndex27 < linkListLen27; linkIndex27++) {
      var linkData27 = linkList27[linkIndex27];
      param19 += navlinks.templates.appswitcher_old.applicationsItem(soy.$$augmentMap(linkData27, {showDescription: opt_data.showDescription}));
    }
    param19 += '</ul>';
    output += aui.dropdown2.section({content: param19});
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applicationsSection.soyTemplateName = 'navlinks.templates.appswitcher_old.applicationsSection';
}


navlinks.templates.appswitcher_old.applicationsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link' + ((opt_data.self) ? ' nav-link-local' : '') + '"><a href="' + soy.$$escapeHtml(opt_data.link) + '" class="aui-dropdown2-radio ' + ((opt_data.self) ? 'aui-dropdown2-checked' : '') + '" title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span>' + ((opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '') + '</a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applicationsItem.soyTemplateName = 'navlinks.templates.appswitcher_old.applicationsItem';
}


navlinks.templates.appswitcher_old.adminSection = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.section({content: '<ul class="nav-links"><li><a class="nav-link-edit-wrapper" href="' + soy.$$escapeHtml(opt_data.adminLink) + '"><span class="nav-link-edit">' + soy.$$filterNoAutoescape("Configure\x26hellip;") + '</span></a></li></ul>'});
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.adminSection.soyTemplateName = 'navlinks.templates.appswitcher_old.adminSection';
}


navlinks.templates.appswitcher_old.error = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-error">' + soy.$$filterNoAutoescape("Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.") + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.error.soyTemplateName = 'navlinks.templates.appswitcher_old.error';
}


navlinks.templates.appswitcher_old.loading = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-loading">' + soy.$$filterNoAutoescape("Loading\x26hellip;") + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.loading.soyTemplateName = 'navlinks.templates.appswitcher_old.loading';
}


navlinks.templates.appswitcher_old.trigger = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">' + soy.$$escapeHtml("Linked Applications") + '</span>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.trigger.soyTemplateName = 'navlinks.templates.appswitcher_old.trigger';
}


navlinks.templates.appswitcher_old.switcher = function(opt_data, opt_ignored) {
  var output = '';
  if (true) {
    var loadingContent__soy81 = '' + navlinks.templates.appswitcher_old.loading(null);
    var triggerContent__soy83 = '' + navlinks.templates.appswitcher_old.trigger(null);
    output += aui.dropdown2.dropdown2({menu: {id: 'app-switcher', content: loadingContent__soy81, extraClasses: 'aui-style-default', extraAttributes: {'data-environment': {}, 'data-is-switcher': 'true'}}, trigger: {showIcon: false, content: triggerContent__soy83, extraClasses: 'app-switcher-trigger', extraAttributes: {href: '#app-switcher'}}});
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.switcher.soyTemplateName = 'navlinks.templates.appswitcher_old.switcher';
}


navlinks.templates.appswitcher_old.suggestionApp = function(opt_data, opt_ignored) {
  var output = '';
  var href__soy89 = opt_data.isBillingSystemEnabled == true ? opt_data.suggestionApp.billingSystemDiscoveryUrl : opt_data.suggestionApp.discoveryUrl;
  output += '<li class="app-discovery-suggestion-app"><a id="' + soy.$$escapeHtml(opt_data.suggestionApp.appName) + '" href="' + soy.$$escapeHtml(href__soy89) + '" class="app-discovery-link aui-icon-container app-discovery-' + soy.$$escapeHtml(opt_data.suggestionApp.appName) + '-product-icon" title="' + soy.$$escapeHtml(href__soy89) + '" target="_blank"/><div class="app-discovery-small">' + soy.$$escapeHtml(opt_data.suggestionApp.appDesc) + '</div></li>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.suggestionApp.soyTemplateName = 'navlinks.templates.appswitcher_old.suggestionApp';
}


navlinks.templates.appswitcher_old.suggestionApps = function(opt_data, opt_ignored) {
  return '<ul class=\'nav-links suggestion-apps\'><li><span class=\'app-discovery-suggest-title nav-link-label\'><h6>' + soy.$$escapeHtml("Try other Atlassian apps") + '</h6></span></li></ul><div class=\'buttons-container app-discovery-suggest-apps-buttons\'><div class=\'buttons\'><button class=\'aui-button aui-button-link app-discovery-cancel-button\' name=\'cancel\' accesskey=\'c\' href=\'#\'>' + soy.$$escapeHtml("Don\x27t show this again") + '</button></div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.suggestionApps.soyTemplateName = 'navlinks.templates.appswitcher_old.suggestionApps';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'de.griffel.confluence.plugins.plant-uml:plantuml-resources', location = 'soy/wizard-templates.soy' */
// This file was automatically generated from wizard-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace plantuml.wizard.
 */

if (typeof plantuml == 'undefined') { var plantuml = {}; }
if (typeof plantuml.wizard == 'undefined') { plantuml.wizard = {}; }


plantuml.wizard.page1FormUml = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml("Type") + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_activity_diagram_simple">' + soy.$$escapeHtml("Activity Diagram") + '</option><option value="plantuml_template_class_diagram_simple">' + soy.$$escapeHtml("Class Diagram") + '</option><option value="plantuml_template_component_diagram_simple">' + soy.$$escapeHtml("Component Diagram") + '</option><option value="plantuml_template_state_diagram_simple">' + soy.$$escapeHtml("State Diagram") + '</option><option value="plantuml_template_sequence_diagram_simple">' + soy.$$escapeHtml("Sequence Diagram") + '</option><option value="plantuml_template_usecase_diagram_simple">' + soy.$$escapeHtml("Use Case Diagram") + '</option></select><p><a href="' + soy.$$escapeHtml("http://plantuml.sourceforge.net/classes.html") + '" class="external-link">' + soy.$$escapeHtml("UML Documentation") + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormUml.soyTemplateName = 'plantuml.wizard.page1FormUml';
}


plantuml.wizard.page1FormGraphviz = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml("Type") + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_graphviz_diagram_simple">' + soy.$$escapeHtml("Graphviz") + '</option><option value="plantuml_template_flowchart_diagram_simple">' + soy.$$escapeHtml("Flowchart") + '</option></select><p><a href="' + soy.$$escapeHtml("http://www.graphviz.org/Documentation.php") + '" class="external-link">' + soy.$$escapeHtml("Graphviz Documentation") + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormGraphviz.soyTemplateName = 'plantuml.wizard.page1FormGraphviz';
}


plantuml.wizard.page1FormDitaa = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml("Type") + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_ditaa_diagram_simple">' + soy.$$escapeHtml("DITAA") + '</option></select><p><a href="' + soy.$$escapeHtml("http://ditaa.sourceforge.net/") + '" class="external-link">' + soy.$$escapeHtml("DITAA Documentation") + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormDitaa.soyTemplateName = 'plantuml.wizard.page1FormDitaa';
}


plantuml.wizard.page1FormJcckit = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml("Type") + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_jcckit_diagram_simple">' + soy.$$escapeHtml("JCCKit") + '</option></select><p><a href="' + soy.$$escapeHtml("http://plantuml.sourceforge.net/jcckit.html") + '" class="external-link">' + soy.$$escapeHtml("JCCKit Documentation") + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormJcckit.soyTemplateName = 'plantuml.wizard.page1FormJcckit';
}


plantuml.wizard.page1FormPlantuml = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml("Function") + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_plantuml_spacegraph">' + soy.$$escapeHtml("Spacegraph") + '</option><option value="plantuml_template_plantuml_version">' + soy.$$escapeHtml("PlantUML Version Info") + '</option><option value="plantuml_template_plantuml_xearth">' + soy.$$escapeHtml("XEarth") + '</option></select><p><a href="' + soy.$$escapeHtml("plantuml.blueprint.wizard.plantumlxearth.documentation_url") + '" class="external-link">' + soy.$$escapeHtml("plantuml.blueprint.wizard.plantumlxearth.documentation") + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormPlantuml.soyTemplateName = 'plantuml.wizard.page1FormPlantuml';
}


plantuml.wizard.page1FormSalt = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml("Type") + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_salt_diagram_simple">' + soy.$$escapeHtml("Salt") + '</option></select><p><a href="' + soy.$$escapeHtml("http://plantuml.sourceforge.net/salt.html") + '" class="external-link">' + soy.$$escapeHtml("Salt Documentation") + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormSalt.soyTemplateName = 'plantuml.wizard.page1FormSalt';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:common-header-resources', location = '/includes/js/header-user-menu.js' */
define("confluence/header-user-menu",["jquery","confluence/meta","underscore"],function(a,c,b){function d(){var b=c.get("current-user-avatar-uri-reference");a("#user-menu-link").find(".aui-avatar-inner img").attr("src",b)}return function(){b.defer(d)}});require("confluence/module-exporter").safeRequire("confluence/header-user-menu",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:general-analytics-bindings', location = '/includes/js/analytics-bindings.js' */
define("confluence/analytics-bindings",["jquery","confluence/analytics-support"],function(b,d){return function(){function e(a,c){b(a).on("click",".view-historical-version-trigger",function(){d.publish("confluence.page.view-historical.from-"+(c||"unknown"))})}function f(a,c){b(a).on("click",".restore-historical-version-trigger",function(){d.publish("confluence.page.restore-historical.from-"+(c||"unknown"))})}function g(a,c){b("#header .aui-header-secondary "+a).on("click",function(){var a=b(this).hasClass("aui-dropdown2-active")?
"expanded":"collapsed";d.publish("confluence.header.dropdown."+c,{state:a})})}e("#page-history-warning","navigation");e("#page-history-container","history");e(".diff-menu","diff");f("#page-history-warning","navigation");f("#page-history-container","history");g("#admin-menu-link","administration");g("#user-menu-link","profile")}});require("confluence/module-exporter").safeRequire("confluence/analytics-bindings",function(b){require("ajs").toInit(b)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'templates/anchor.soy' */
// This file was automatically generated from anchor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace MyWork.Templates.Anchor.
 */

if (typeof MyWork == 'undefined') { var MyWork = {}; }
if (typeof MyWork.Templates == 'undefined') { MyWork.Templates = {}; }
if (typeof MyWork.Templates.Anchor == 'undefined') { MyWork.Templates.Anchor = {}; }


MyWork.Templates.Anchor.tasksFeatureDiscovery = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$escapeHtml("See the tasks assigned to you, or created by you, in the Tasks tab of your profile.") + '</p><ul class="mw-tasks-discovery-controls"><li><a id="mw-tasks-discovery-view" href="' + soy.$$escapeHtml(opt_data.tasksUrl) + '" class="aui-button aui-style"><p>' + soy.$$escapeHtml("View Tasks") + '</p></a></li><li><a id="mw-tasks-discovery-dismiss" href="#">' + soy.$$escapeHtml("Dismiss") + '</a></li></ul>';
};
if (goog.DEBUG) {
  MyWork.Templates.Anchor.tasksFeatureDiscovery.soyTemplateName = 'MyWork.Templates.Anchor.tasksFeatureDiscovery';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/miniview-anchor.js' */
var MW=MW||{$:AJS.$||Zepto};MW.MV={};AJS.toInit(function(){if(AJS.Meta&&!AJS.Meta.get("remote-user")){return}MW.MV.AnchorManager=function(){var l=contextPath,h=l+"/plugins/servlet/notifications-miniview",p=0,e=/[?&]show-miniview/.test(window.location.search);function r(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var s="[\\?\\#&]"+t+"=([^&#]*)";var v=new RegExp(s);var u=v.exec(window.location.search);if(u!==null){return decodeURIComponent(u[1].replace(/\+/g," "))}}var o=r("show-miniview");if(o){h+="#notification/"+o}function q(){var s="badge-i aui-icon aui-icon-small aui-iconfont-workbox-empty";MW.$("#notifications-anchor").html('<div class="'+s+'"></div><span class="badge-w"><span class="badge"></span></span>').attr("title","Open Notifications")}function f(u){var t=false,s;return function(){if(t){return s}t=true;s=u.apply(this,arguments);return s}}var n=f(function(){MW.Dialog.getOptions().closeOthers=false;MW.Dialog.preload=true;MW.Dialog.show();MW.Dialog.hide();MW.Dialog.getOptions().closeOthers=true});function k(s){return s<=9?s:"9+"}function j(s){var t=MW.$("#notifications-anchor"),u=t.find(".badge"),v=t.find(".aui-icon");u.html(k(s));p=s;if(s>0){t.addClass("unread").removeClass("read");v.addClass("aui-iconfont-workbox").removeClass("aui-iconfont-workbox-empty");if(t.is(":visible")&&!e){n()}}else{t.addClass("read").removeClass("unread");v.addClass("aui-iconfont-workbox-empty").removeClass("aui-iconfont-workbox")}}function m(){c("notifications",h);d()}function d(){MW.$(document).keydown(function(s){if(AJS.InlineDialog.current&&s.which==27&&!MW.$(s.target).is(":input")){AJS.InlineDialog.current.hide()}})}function i(){MW.$("#header-menu-bar").find(".ajs-drop-down").each(function(){this.hide()})}function c(x,v){var w;var u=function(){w=this};var s=function(){if(this.preload!==true){var y=JSON.stringify({markAllRead:true});MW.$("#"+x+"-miniview-iframe")[0].contentWindow.postMessage(y,"*")}};if(!window.addEventListener){window.attachEvent("onmessage",t)}else{window.addEventListener("message",t,false)}function t(A){function B(C){return C===location.protocol+"//"+location.host}if("escKey"===A.data){w.hide();MW.$("#notifications-anchor").focus();document.activeElement.blur()}else{if("getParentConfig"===A.data&&B(A.origin)){var z=JSON.stringify({parentConfig:{parentUrl:location.href,preload:MW.Dialog.preload,unread:p}}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(z,"*");if(MW.Dialog.preload){MW.Dialog.preload=false}else{y.focus()}}}}MW.Dialog=AJS.InlineDialog(MW.$("#"+x+"-anchor"),x+"-miniview",function(B,z,C){if(MW.$(B).children().length===0){MW.$(B).append(MW.$('<iframe id="'+x+'-miniview-iframe" src="'+v+'" frameborder="0"></iframe>'))}else{var A=JSON.stringify({unread:p}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(A,"*");setTimeout(function(){y.focus()},100)}i();C()},{width:500,height:520,hideDelay:null,initCallback:u,hideCallback:s,noBind:true});MW.Tasks=(function(){var A=300;var z=20;var B=16;var G;var D=AJS.$("#user-menu-link");var C=AJS.$("#user-menu-link-content");var y=C.find("#view-mytasks-link");var E=function(J,H,K){var I=MyWork.Templates.Anchor.tasksFeatureDiscovery({tasksUrl:AJS.contextPath()+"/plugins/inlinetasks/mytasks.action"});J.html(I);J.find("#mw-tasks-discovery-dismiss").click(function(){G.hide()});K()};var F=function(){MW.Dialog.hide();var J=function(){return C.is(":visible")};if(!J()){D.trigger("aui-button-invoke")}var H=function(){G.hide()};C.one("aui-dropdown2-hide",H);G=AJS.InlineDialog(y,"my-tasks-discovery",E,{hideCallback:function(){G.unbind("click focusin mousedown",I);C.unbind("aui-dropdown2-hide",H);if(J()){D.trigger("aui-button-invoke")}MW.$("#inline-dialog-my-tasks-discovery").remove()},gravity:"w",useLiveEvents:true,width:A,noBind:true});C.find(".user-item.active").removeClass("active");y.addClass("active");y.focus();var I=function(K){K.stopPropagation()};G.on("click focusin mousedown",I);G.show()};return{closeAndDiscoverMyTasks:F}})();MW.$("#"+x+"-anchor").click(function(y){y.preventDefault();if(MW.$("#"+x+"-miniview-iframe").is(":visible")){MW.Dialog.hide()}else{MW.Dialog.show()}});if(e){MW.$("#"+x+"-anchor").click()}}function g(){q();m()}return{setupAnchors:g,updateNotificationCount:j}}();MW.MV.AnchorManager.setupAnchors();var b=new MW.AnchorUtil(MW.$,contextPath,MW.MV.AnchorManager.updateNotificationCount);b.setupAnchors();MW.$("#notifications-anchor").click(function(){AJS.trigger("analytics",{name:"mywork.host.button.clicked.notifications",data:{}});MW.MV.AnchorManager.updateNotificationCount(0)});var a=function(){if(document.hidden){b.stopRequests(true)}else{b.startRequests()}};document.addEventListener("visibilitychange",a,false);if(typeof document.hidden==="undefined"){MW.$(window).focus(function(){b.startRequests()})}MW.$("body").click(function(){b.startRequests()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/util/anchor-util.js' */
MW.AnchorUtil=function(d,k,e){var f=30000,i=f,s,p=k+"/rest/mywork/latest/status/notification/count";var r=new Date().getTime();var b=5*60*1000;var t=1000*60*5;var h=1.25;var c=0;function q(u){window.clearInterval(s);s=undefined;if(u===true){i=f}}function o(){return(new Date().getTime()-r)<t}function m(){if(!o()||!s){l()}r=new Date().getTime()}function l(){if(s){clearTimeout(s)}s=setTimeout(function(){g()},c=n(c))}function a(w,u){var v=w*1000;b=u*1000||b;if(v&&v!=i){i=v;m()}}function n(u){return Math.min(o()?i:u*h,b)}function g(u){MW.$.getJSON(p+((u)?"?pageid="+u:""),function(w){a(w.timeout,w.maxTimeout);var v=w.count;e(v)});l()}function j(){var u=AJS&&AJS.Meta&&AJS.Meta.get&&(AJS.Meta.get("content-type")==="page"||AJS.Meta.get("content-type")==="blogpost");if(u){g(AJS.Meta.get("page-id"))}else{g()}m()}return{setupAnchors:j,startRequests:m,stopRequests:q,updateAnchors:g}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/soy/dialog-wizard.soy' */
// This file was automatically generated from dialog-wizard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DialogWizard.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DialogWizard == 'undefined') { Confluence.Templates.DialogWizard = {}; }


Confluence.Templates.DialogWizard.pageContainer = function(opt_data, opt_ignored) {
  return '<div class="dialog-wizard-page-wrapper"><div class="dialog-wizard-page-main"></div><div class="dialog-wizard-page-description">' + ((opt_data.descriptionHeaderLink && opt_data.descriptionHeader) ? '<h3><a href=\'' + soy.$$escapeHtml(opt_data.descriptionHeaderLink) + '\' target=\'_blank\'>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</a></h3>' : (opt_data.descriptionHeader) ? '<h3>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</h3>' : '') + '<p>' + soy.$$escapeHtml(opt_data.descriptionContent) + '</p></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.pageContainer.soyTemplateName = 'Confluence.Templates.DialogWizard.pageContainer';
}


Confluence.Templates.DialogWizard.waitIcon = function(opt_data, opt_ignored) {
  return '<img class="wait-icon" src="' + soy.$$escapeHtml("") + '/images/icons/wait.gif">';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.waitIcon.soyTemplateName = 'Confluence.Templates.DialogWizard.waitIcon';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/js/dialog-wizard.js' */
(function($){function findNextPageId(pageId,pages){var thisPageIdIndex=-1;_.each(pages,function(element,index){if(element.id==pageId){thisPageIdIndex=index;return}});return pages[thisPageIdIndex+1].id}Confluence.DialogWizard=function(dialog,finalAction){function newPage(config,pageId,soyRenderContext,wizardData,wizard){var wizardPage=_.find(config.wizard.pages,function(page){return page.id==pageId});wizard.trigger("pre-render."+pageId,{soyRenderContext:soyRenderContext,wizardData:wizardData});try{var soyTemplateFunction=eval(wizardPage.templateKey);var $soyRender=$(soyTemplateFunction(soyRenderContext))}catch(e){throw Error("wizard points to a non-existent Soy template '"+wizardPage.templateKey+"'. Check your web-resources or server logs.")}$soyRender.find("a, area, button, input, object, select, textarea").attr("tabindex","10");var $panelContent;if(wizardPage.descriptionContent){$panelContent=$(Confluence.Templates.DialogWizard.pageContainer({descriptionHeaderLink:wizardPage.descriptionHeaderLink,descriptionHeader:wizardPage.descriptionHeader,descriptionContent:wizardPage.descriptionContent}));$panelContent.addClass("with-description").find(".dialog-wizard-page-main").append($soyRender)}else{$panelContent=$soyRender}var dialogPageId=pageId;if(dialog.id=="create-dialog"){dialogPageId="create-dialog-"+pageId}var page=dialog.addPage(dialogPageId).page[dialog.curpage];page.addHeader(wizardPage.title).addPanel("SinglePanel",$panelContent,"singlePanel");page.element.find("form").submit(function(){return false});if(wizardPage.descriptionContent){page.element.find(".dialog-panel-body").css({padding:0})}Confluence.Binder.autocompleteMultiUser($soyRender);Confluence.Binder.placeholder($soyRender);function nextCallback(ev){$soyRender.find(".placeholded").val("");var pageData={};var formArray=$soyRender.parent().find("form").serializeArray();_.each(formArray,function(item){pageData[item.name]=item.value});var e=$.Event("submit."+pageId);var state={$container:$soyRender,wizardData:wizardData,pageData:pageData};var validationDeferred=$.Deferred();validationDeferred.done(function(){wizardData.pages[pageId]=pageData;var nextPageId;if(state.nextPageId){nextPageId=state.nextPageId}else{nextPageId=!wizardPage.last&&findNextPageId(pageId,config.wizard.pages)}if(!state.nextPageId&&wizardPage.last){doFinalAction(ev,state,wizardData,finalAction,wizard);dialog.popup.element.find(":input,a").filter(":visible").disable().addClass("disabled");buttons.prepend(Confluence.Templates.DialogWizard.waitIcon())}else{newPage(config,nextPageId,soyRenderContext,wizardData,wizard)}});validationDeferred.fail(function(){AJS.log("dialog aborted by on-submit callback on page: "+pageId)});state.validationDeferred=validationDeferred;wizard.trigger(e,state);if(state.async){return}if(e.isDefaultPrevented()){validationDeferred.reject();return}validationDeferred.resolve()}var buttons=dialog.addFullButtonPanel(page,nextCallback,null,wizardPage.last);buttons.find(".button-panel-back").click(function(){delete wizardData.pages[pageId]});buttons.find(".aui-button-primary").attr("tabindex","10");$soyRender.find("input, select, textarea").eq(0).focus();wizard.trigger("post-render."+pageId,{$container:$soyRender,wizardData:wizardData})}function doFinalAction(ev,state,wizardData,finalAction,wizard){if(state.finalUrl){window.location=state.finalUrl}else{_.each(wizardData.pages,function(pageData){_.extend(wizardData,pageData)});delete wizardData.pages;finalAction(ev,wizardData,null,wizard)}}return{newPage:newPage,doFinalAction:doFinalAction}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:common-template-resources', location = 'com/atlassian/confluence/plugins/blueprint/common/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Common.Index.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Common == 'undefined') { Confluence.Blueprints.Common = {}; }
if (typeof Confluence.Blueprints.Common.Index == 'undefined') { Confluence.Blueprints.Common.Index = {}; }


Confluence.Blueprints.Common.Index.detailsSummaryMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="detailssummary"><ac:parameter ac:name="label">' + soy.$$escapeHtml(opt_data.label) + '</ac:parameter><ac:parameter ac:name="spaces">' + soy.$$escapeHtml(opt_data.spaces) + '</ac:parameter><ac:parameter ac:name="firstcolumn">' + soy.$$escapeHtml(opt_data.firstcolumn) + '</ac:parameter><ac:parameter ac:name="headings">' + soy.$$escapeHtml(opt_data.headings) + '</ac:parameter><ac:parameter ac:name="blankTitle">' + soy.$$escapeHtml(opt_data.blankTitle) + '</ac:parameter><ac:parameter ac:name="blankDescription">' + soy.$$escapeHtml(opt_data.blankDescription) + '</ac:parameter><ac:parameter ac:name="contentBlueprintId">' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey) + '</ac:parameter><ac:parameter ac:name="createButtonLabel">' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.detailsSummaryMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.detailsSummaryMacro';
}


Confluence.Blueprints.Common.Index.createFromTemplateMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.moduleKey) + '</ac:parameter><ac:parameter ac:name="buttonLabel">' + soy.$$escapeHtml(opt_data.buttonLabel) + '</ac:parameter><ac:parameter ac:name="spaceKey">' + soy.$$escapeHtml(opt_data.spaceKey) + '</ac:parameter><ac:parameter ac:name="templateName">' + soy.$$escapeHtml(opt_data.templateName) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.createFromTemplateMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.createFromTemplateMacro';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/how-to.soy' */
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Meeting == 'undefined') { Confluence.Blueprints.Meeting = {}; }
if (typeof Confluence.Blueprints.Meeting.Notes == 'undefined') { Confluence.Blueprints.Meeting.Notes = {}; }


Confluence.Blueprints.Meeting.Notes.howTo = function(opt_data, opt_ignored) {
  return '<h1>' + soy.$$escapeHtml("With meeting notes you can...") + '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>' + soy.$$escapeHtml("Crowd-source your agenda") + '</h3><p>' + soy.$$escapeHtml("Distribute an agenda and keep meetings focused.") + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml("Capture meeting minutes") + '</h3><p>' + soy.$$escapeHtml("Take notes and make them available to everyone.") + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml("Create and assign tasks") + '</h3><p>' + soy.$$escapeHtml("Assign action items for attendees to work on afterward.") + '</p></div></li></ol>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Meeting.Notes.howTo.soyTemplateName = 'Confluence.Blueprints.Meeting.Notes.howTo';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/user-mention.soy' */
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Meeting == 'undefined') { Confluence.Templates.Meeting = {}; }
if (typeof Confluence.Templates.Meeting.Notes == 'undefined') { Confluence.Templates.Meeting.Notes = {}; }


Confluence.Templates.Meeting.Notes.userMention = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.username) ? '<li><p><ac:link><ri:user ri:username="' + soy.$$escapeHtml(opt_data.username) + '" /></ac:link></p></li><li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>' : '<li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml("@mention a person to add them as an attendee and they will be notified.") + '</ac:placeholder></p></li>');
};
if (goog.DEBUG) {
  Confluence.Templates.Meeting.Notes.userMention.soyTemplateName = 'Confluence.Templates.Meeting.Notes.userMention';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access.js' */
AJS.toInit(function(e){var b=AJS.Meta.get("page-id"),c=e("#page-restricted-container"),a=AJS.Meta.get("remote-user"),d=e("#page-restricted-container button");if(c.length){e("#breadcrumbs").hide();e("#title-text.with-breadcrumbs").hide();if(d.length){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page.view",data:{pageId:b,requestAccessUser:a}})}}d.click(function(){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{pageId:b,requestAccessUser:a}});d.attr("aria-disabled","true");var f,g=e(Confluence.Request.Access.loading({}));d.replaceWith(g);e.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+b,success:function(h){f=e(Confluence.Request.Access.result({success:true,recipient:h}));c.removeClass("page-restricted");c.addClass("access-requested")},error:function(h,i){f=e(Confluence.Request.Access.result({success:false}))},complete:function(){g.replaceWith(f);Confluence.Binder.userHover()}})})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/grant-access.js' */
AJS.toInit(function(d){var a=AJS.Meta.get("page-id"),f=AJS.Meta.get("remote-user"),h=j("username"),e=j("userFullName");var c=e.split("+");e=c.join(" ");var g=d("#system-content-items");var k=d("#content-metadata-page-restrictions.restricted").length!==0;if(!g.length||!k||!j("grantAccess")){return}var b=d(Confluence.Request.Access.loading());var i=AJS.InlineDialog(g,"grantAccessDialog",function(m,l,n){m.css({padding:"20px"}).html(Confluence.Grant.Access.dialog({requestAccessUsername:h,requestAccessUserFullName:e}));m.on("click",".aui-button.grant-access",function(q){q.stopPropagation();var p=m.find(".actions-result");p.replaceWith(b);AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.grant.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});var o="",r=true;d.ajax({url:Confluence.getContextPath()+"/rest/request-access/latest/page/restriction/"+a,type:"POST",contentType:"application/json; charset=utf-8",data:h,success:function(t,u,s){if(s.status==202){o="Access was already granted to the user."}else{o="Access was granted, a notification to the user will be sent."}},error:function(s){r=false;if(s.status==412){o="Access was granted, but there is not a mail server configured so the notification could not be sent."}else{if(s.status==502){o="Access was granted, but an unexpected error happened while sending the notification."}else{o="Sorry, there was an unexpected error while granting access."}}},complete:function(s){b.replaceWith(d(Confluence.Grant.Access.result({success:r,message:o})));setTimeout(function(){i.hide()},6000)}})});m.on("click",".aui-button.deny-access",function(o){AJS.trigger("analyticsEvent",{name:"confluence.request.access.plugin.deny.access.to.page",data:{pageId:a,grantAccessUser:f,requestAccessUser:h}});i.hide()});n();return false},{offsetY:2,offsetX:0,width:350,hideDelay:null,noBind:true,hideCallback:function(){setTimeout(i.hide(),5000)}});i.show();function j(l){l=l.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+l+"=([^&#]*)"),m=n.exec(location.search);return m==null?"":decodeURIComponent(m[1].replace(/\+/g," "))}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/request-access.soy' */
// This file was automatically generated from request-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Request.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Request == 'undefined') { Confluence.Request = {}; }
if (typeof Confluence.Request.Access == 'undefined') { Confluence.Request.Access = {}; }


Confluence.Request.Access.result = function(opt_data, opt_ignored) {
  var output = '<div id="request-access">';
  if (opt_data.success) {
    var usernameLink__soy6 = '' + Confluence.Request.Access.usernameLink({user: opt_data.recipient});
    output += '<span class="aui-icon aui-icon-small aui-iconfont-approve" data-unicode="UTF+E005" original-title=""></span><p class="title">' + soy.$$filterNoAutoescape(AJS.format("Your request has been sent to {0}. If approved you will receive an email shortly.",usernameLink__soy6)) + '</p>';
  } else {
    output += '<span class="aui-icon aui-icon-small aui-iconfont-error" data-unicode="UTF+E011" original-title=""></span><p class="title">' + soy.$$escapeHtml("Your request for access has not been sent. Contact your space admin.") + '</p>';
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Request.Access.result.soyTemplateName = 'Confluence.Request.Access.result';
}


Confluence.Request.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("") + '/display/~' + soy.$$escapeUri(opt_data.user.name) + '" class="url fn confluence-userlink" title data-username="' + soy.$$escapeHtml(opt_data.user.name) + '">' + soy.$$escapeHtml(opt_data.user.fullName) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Request.Access.usernameLink.soyTemplateName = 'Confluence.Request.Access.usernameLink';
}


Confluence.Request.Access.loading = function(opt_data, opt_ignored) {
  return '<span class=\'aui-icon aui-icon-wait\'>' + soy.$$escapeHtml("Loading, please wait") + '</span>"';
};
if (goog.DEBUG) {
  Confluence.Request.Access.loading.soyTemplateName = 'Confluence.Request.Access.loading';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/grant-access.soy' */
// This file was automatically generated from grant-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Grant.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Grant == 'undefined') { Confluence.Grant = {}; }
if (typeof Confluence.Grant.Access == 'undefined') { Confluence.Grant.Access = {}; }


Confluence.Grant.Access.dialog = function(opt_data, opt_ignored) {
  var output = '<div class="grant-access-dialog">';
  var usernameLink__soy4 = '' + Confluence.Grant.Access.usernameLink({username: opt_data.requestAccessUsername, userFullName: opt_data.requestAccessUserFullName});
  output += '<h2 class="grant-access-title">' + soy.$$escapeHtml("Access request") + '</h2><p class="grant-access-message">' + soy.$$filterNoAutoescape(AJS.format("{0} wants to view this page.",usernameLink__soy4)) + '</p><div class="actions-result"><button class="aui-button grant-access">' + soy.$$escapeHtml("Grant access") + '</button><button class="aui-button aui-button-link deny-access">' + soy.$$escapeHtml("Deny") + '</button><div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Grant.Access.dialog.soyTemplateName = 'Confluence.Grant.Access.dialog';
}


Confluence.Grant.Access.result = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-' + ((opt_data.success) ? 'approve' : 'error') + '" data-unicode="UTF+E011" original-title=""></span><p class="title">' + soy.$$escapeHtml(opt_data.message) + '</p>';
};
if (goog.DEBUG) {
  Confluence.Grant.Access.result.soyTemplateName = 'Confluence.Grant.Access.result';
}


Confluence.Grant.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("") + '/display/~' + soy.$$escapeHtml(opt_data.username) + '" class="url fn" title data-username="' + soy.$$escapeHtml(opt_data.username) + '"><strong>' + soy.$$escapeHtml(opt_data.userFullName) + '</strong> (' + soy.$$escapeHtml(opt_data.username) + ')</a>';
};
if (goog.DEBUG) {
  Confluence.Grant.Access.usernameLink.soyTemplateName = 'Confluence.Grant.Access.usernameLink';
}

}catch(e){WRMCB(e)};
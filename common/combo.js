var wapoSites=new Array();var $wpjQ=typeof $wpjQ&&$wpjQ||jQuery;eval($wpjQ('script[src$="wapolabs.nojq.full.js"]').html());var wapoUtilities,WapoUtil=function(){};WapoUtil.prototype.Get_Cookie=function(b){var h,c,f,g,e,d,a;h=document.cookie.split(";");e=false;d=/^(.*?)(=)(.*?)$/;a=h.length;while(a--){c=h[a].match(d);if(typeof(c)!=="undefined"&&c!==null){f=c[1].replace(/^\s+|\s+$/g,"");if(f===b){e=true;if(c[2]==="="){g=unescape(c[3].replace(/^\s+|\s+$/g,""));}return g;}}c=null;f="";}if(!e){return null;}};WapoUtil.prototype.Delete_Cookie=function(a,c,b){if(this.Get_Cookie(a)){document.cookie=a+"="+((c)?";path="+c:"")+((b)?";domain="+b:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT";}};WapoUtil.prototype.Set_Cookie=function(c,e,a,h,d,g){var b,f;b=new Date();b.setTime(b.getTime());if(a){a=a*1000*60*60*24;}f=new Date(b.getTime()+(a));document.cookie=c+"="+escape(e)+((a)?";expires="+f.toGMTString():"")+((h)?";path="+h:"")+((d)?";domain="+d:"")+((g)?";secure":"");};WapoUtil.prototype.Get_Request_Parameter=function(d,b){var c,a;b=b+"=";if(d.length>0){c=d.indexOf(b);if(c!==-1){c+=b.length;a=d.indexOf("&",c);if(a===-1){a=d.length;}return unescape(d.substring(c,a));}return"null";}};WapoUtil.prototype.getParameter=function(b){var d,c,a;d=window.top.location.search.substring(1);b=b+"=";if(d.length>0){c=d.indexOf(b);if(c!==-1){c+=b.length;a=d.indexOf("&",c);if(a===-1){a=d.length;}return unescape(d.substring(c,a));}return"null";}};WapoUtil.prototype.getBaseDomainName=function(d){var c,a,b;c=d;a=d.lastIndexOf(".");if(a>-1){b=d.lastIndexOf(".",a-1);if(b>-1){c=d.substring(b+1);}}return c;};WapoUtil.prototype.checkVisitorId=function(b){var c,a;c=wapoUtilities.Get_Cookie("s_vi");if(c===null){a=document.createElement("iframe");a.height=1;a.width=1;a.style.display="none";a.src="http://www.washingtonpost.com/wp-srv/wapolabs/dw/readomniturecookie.html?"+b;document.getElementById("wapo_338542").appendChild(a);}};wapoUtilities=new WapoUtil();var JSON;if(!JSON){JSON={};}(function(){function f(n){return n<10?"0"+n:n;}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key);}if(typeof rep==="function"){value=rep.call(holder,key,value);}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null";}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null";}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v;}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v);}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v;}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" ";}}else{if(typeof space==="string"){indent=space;}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify");}return str("",{"":value});};}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4);});}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j;}throw new SyntaxError("JSON.parse");};}}());var wapoEvent;WapoEvent=function(){var a=document.domain.split(".");if(a.length>=2){this.eventHost="event."+a[a.length-2]+"."+a[a.length-1];}else{this.eventHost="event."+document.domain;}};WapoEvent.prototype.logEvent=function(e,c,a){var d={};d.event=e;d.app=c;d.referer=document.referer;d.url=window.location.href;this.addValue(d,"appdata",a);var b={type:"GET",dataType:"jsonp",url:"http://"+wapoEvent.eventHost+"/log.php",cache:false,data:d};return $wpjQ.ajax(b);};WapoEvent.prototype.addValue=function(c,a,b){if(typeof(b)!=="undefined"&&b!==null){c[a]=b;}};wapoEvent=new WapoEvent();function WapoSite(c,b,a){this.name=c;this.url=b;this.visId=a;}function WapoEnv(){this.wapolabs_js="/rw/sites/twpweb/js/wapo/wapolabs.nojq.full.js";this.waposites_js="/rw/sites/twpweb/js/wapo/wapo_sites.js";this.cdn_identity="//d2pe20ur0h0p8p.cloudfront.net/identity/1.5.2/";this.cdn_images_identity="//d2pe20ur0h0p8p.cloudfront.net/identity/1.5.2/";this.fb_key="41245586762";this.publicationName="Washington Post";this.site_base_domain="washingtonpost.com";this.site_path="/";this.jskit_div="js-kit-comments";this.jskit_class="js-kit-comments";this.jskit_consumer_key="prod.washpost.com";this.wapo_secure_protocol="https:";this.wapo_site_url="//id.washingtonpost.com/identity/";this.site_url="//www.washingtonpost.com/";this.wapo_public_protocol="http:";this.visitor_session_length="30";this.customLoginTrigger=false;this.init_xfbml=false;this.jskit_commenting_group="commenting";this.wapo_reg_url="https://ssl.washingtonpost.com/actmgmt/registration/login/commenting?destination=";this.commenting_edit_profile_url="https://ssl.washingtonpost.com/actmgmt/registration/group/commenting?destination=";this.param_name_jsonp_callback="jsonp_callback";this.param_name_nonce="wp_id_n";this.param_name_email_nonce="wp_em_n";this.meta_tag_groups="wapoGroups";this.meta_tag_optional_groups="wapoOptionalGroups";this.param_name_redirect="next_url";this.param_name_previous_url="previous_url";this.param_name_no_cancel="wp_no_cancel";this.param_name_regis_group_name="reg_group";this.param_name_login_id="loginId";this.param_name_show_registration="show_registration";this.param_name_registration_redirect="wp_regis_redirect";this.param_name_login_redirect="wp_login_redirect";this.place_holder="ph";this.cookie_display="wapo_display";this.cookie_avatar="washingtonpost_avatar";this.cookie_groups="wapo_groups";this.cookie_vis_id="wapo_vis_id";this.cookie_login_id="wapo_login_id";this.cookie_previous_ip="wapo_saved_ip";this.cookie_last_ip="wapo_last_ip";this.cookie_omniture="s_vi";this.cookie_previous_omniture="wapo_saved_omnitureid";this.cookie_previous_ip="wapo_saved_ip";
this.cookie_session_id="wapo_sess_id";this.cookie_wpni_id="wpniuser";this.event_name_login="wapoLogin";this.event_name_new_registration="wapoRegister";this.event_name_logout="wapoLogout";this.event_name_fb_async_init="wapoFbAsyncInit";}WapoEnv.prototype.Set_Unescaped_Cookie=function(c,e,a,h,d,g){var b,f;b=new Date();b.setTime(b.getTime());if(a){a=a*1000*60*60*24;}f=new Date(b.getTime()+(a));document.cookie=c+"="+e+((a)?";expires="+f.toGMTString():"")+((h)?";path="+h:"")+((d)?";domain="+d:"")+((g)?";secure":"");};var wapoEnv=new WapoEnv();window.$wpjQ=typeof window.$wpjQ!=="undefined"&&window.$wpjQ||jQuery;$wpjQ(document).trigger("wapo_env_init");if(typeof wapoEvent!=="undefined"&&typeof wapoEvent.eventHost!=="undefined"){wapoEvent.eventHost="event.washingtonpost.com";
/*!!!!!!!!!!!!!!!!! edit below this line at your own risk !!!!!!!!!!!!!!!!!!!!!!!*/
}var wapoVisitor;function WapoVisitor(){this.initProperties();for(var b=0;b<wapoSites.length;b++){var a=wapoSites[b];if(a.name==wapoEnv.publicationName){a.visId="-1";}}}WapoVisitor.prototype.initProperties=function(){this.wapoVisId="";this.wapoLoginId="";this.tbInit=false;this.baseDomainName=null;this.displayName="";this.picUrl=null;this.completedGroups=null;this.unconfirmedGroups=null;this.windowLocation=window.location.href;this.providerUrl=null;};WapoVisitor.prototype.updateVisitorLogin=function(){var a=wapoEnv.wapo_public_protocol+wapoEnv.wapo_site_url+"public/login/visitor.json?";$wpjQ.ajax({dataType:"jsonp",jsonp:"jsonp_callback",url:a,success:function(b){}});};WapoVisitor.prototype.checkNonce=function(){var c,e,a;c=window.location.search;c=c.substring(1);e=c.split("&");a="";for(var b=0;b<e.length;b++){var d=e[b].split("=");if(d[0]==wapoEnv.param_name_nonce){if(d.length>1){a=wapoEnv.wapo_secure_protocol+wapoEnv.wapo_site_url+"siteRegistration/resetPassword?"+wapoEnv.param_name_nonce+"="+d[1]+"&"+wapoEnv.param_name_redirect+"="+escape(window.location.href)+"&"+wapoEnv.param_name_previous_url+"="+escape(window.location.href);}}else{if(d[0]==wapoEnv.param_name_email_nonce){if(d.length>1){a=wapoEnv.wapo_secure_protocol+wapoEnv.wapo_site_url+"siteRegistration/confirmEmail?"+wapoEnv.param_name_email_nonce+"="+d[1]+"&"+wapoEnv.param_name_redirect+"="+escape(window.location.href)+"&"+wapoEnv.param_name_previous_url+"="+escape(window.location.href);}}else{if(d[0]==wapoEnv.param_name_login_redirect){this.updateVisitorLogin();}}}}return a;};WapoVisitor.prototype.checkRegistration=function(){var c,a,b,d,e;c="";metaElements=document.getElementsByName(wapoEnv.meta_tag_groups);if(metaElements&&metaElements.length>0){if(this.wapoLoginId===null||this.wapoLoginId===""){c=wapoEnv.wapo_public_protocol+wapoEnv.wapo_site_url+"public/login/options?"+wapoEnv.param_name_redirect+"="+escape(window.location.href)+"&"+wapoEnv.param_name_previous_url+"="+escape(window.location.href)+"&"+wapoEnv.param_name_no_cancel+"=true";}else{b=metaElements[0].content;d=b.split("-");e=true;for(i=0;i<d.length;i++){if(!this.completedGroups||this.completedGroups===null||this.completedGroups.indexOf(d[i])===-1){e=false;}}if(!e){c=wapoEnv.wapo_secure_protocol+wapoEnv.wapo_site_url+"siteRegistration/editProfile?"+wapoEnv.param_name_regis_group_name+"="+b+"&"+wapoEnv.param_name_no_cancel+"=true";}}}return c;};WapoVisitor.prototype.checkPopUp=function(){var a="";a=this.checkNonce();if(a===""){a=this.checkRegistration();}if(a!=""){$wpjQ('<a id="wapoReset" href="'+a+"&KeepThis=true&TB_iframe=true&height=464&width="+wapoEnv.lightbox_width+'&modal=true" class="thickbox">'+"</a>").appendTo("#wapolabs_wrapperLoginStatus");wapoVisitor.tbInit=true;}};WapoVisitor.prototype.loginFacebook=function(b){if(wapoVisitor.wapoLoginId===null){var a=wapoEnv.wapo_public_protocol+wapoEnv.wapo_site_url+"public/login/get_for_facebook"+"?format=json&jsonp=&"+wapoEnv.param_name_jsonp_callback+"=?&facebookUid="+b;$wpjQ.getJSON(a,new Function("data","if (data !== null && typeof(data."+wapoEnv.param_name_login_id+") !== 'undefined' && data."+wapoEnv.param_name_login_id+" !== null && typeof(data."+wapoEnv.param_name_show_registration+") !== 'undefined' && data."+wapoEnv.param_name_show_registration+" !== null) {"+"wapoVisitor.wapoLoginId = data."+wapoEnv.param_name_login_id+";"+"wapoVisitor.updateWaPoLogin(data."+wapoEnv.param_name_show_registration+", data."+wapoEnv.param_name_login_id+", 'false', 'false');"+"}"));}};WapoVisitor.prototype.getDependentLoginValues=function(){var d,a,c,b;if(this.wapoLoginId!=null){a=wapoUtilities.Get_Cookie(wapoEnv.cookie_display);if(a&&a!=null){c=a.split("|");if(c.length>0){this.displayName=c[0];if(this.displayName.substr(0,1)==='"'){this.displayName=this.displayName.substring(1);}this.displayName=this.displayName;}if(c.length>1){b=c[1];if(b.substr((b.length-1),1)==='"'){b=b.substring(0,b.length-1);}if(b!=wapoEnv.place_holder){this.picUrl=decodeURIComponent(b);}}if(c.length>2){b=c[2];if(b.substr((b.length-1),1)==='"'){b=b.substring(0,b.length-1);}this.providerUrl=decodeURIComponent(b);}}d=wapoUtilities.Get_Cookie(wapoEnv.cookie_groups);if(d&&d!=null){c=d.split("|");if(c.length>0){this.completedGroups=c[0];}if(c.length>1){this.unconfirmedGroups=c[1];}}}};WapoVisitor.prototype.init=function(){this.wapoLoginId=wapoUtilities.Get_Cookie(wapoEnv.cookie_login_id);if(this.wapoLoginId!==null&&this.wapoLoginId.length>0){this.getDependentLoginValues();}this.baseDomainName=wapoEnv.site_base_domain;this.wapoVisId=wapoUtilities.Get_Cookie(wapoEnv.cookie_vis_id);if(this.wapoVisId!==null){this.reconcileVisId();this.updateWaPoVisId(this.wapoVisId);}else{this.initVisId();}this.wapoLoginId=wapoUtilities.Get_Cookie(wapoEnv.cookie_login_id);if(this.wapoLoginId!==null&&this.wapoLoginId.length>0){this.getDependentLoginValues();}document.domain=this.baseDomainName;$wpjQ(document).trigger("wapoInit");this.checkPopUp();this.resetThickbox();};WapoVisitor.prototype.resetThickbox=function(){var a=function(){var b=$wpjQ("#wapoReset");if(b.length){b.trigger("click");}};if(this.tbInit===true){this.tbInit=false;}};WapoVisitor.prototype.setWapoVisId=function(){var e="-1";var a=true;for(var d=0;d<wapoSites.length;d++){var c=wapoSites[d];if(c.visId==null){a=false;}else{if(c.visId!=="-1"){if(e==null||e<c.visId){e=c.visId;}}}}if(a){if(e!=="-1"){this.wapoVisId=e;wapoUtilities.Set_Cookie(wapoEnv.cookie_vis_id,wapoVisitor.wapoVisId,(50*365),wapoEnv.site_path,this.baseDomainName,false);$wpjQ(document).trigger("wapo_visitor_create");this.updateWaPoVisId(this.wapoVisId);}else{var b=wapoEnv.wapo_public_protocol+wapoEnv.wapo_site_url+"public/visitor/create?format=json&jsonp=&"+wapoEnv.param_name_jsonp_callback+"=?";}}};WapoVisitor.prototype.updateWaPoVisId=function(a){return false;var b,d,e,f,c;this.wapoVisId=a;f=wapoUtilities.Get_Cookie(wapoEnv.cookie_last_ip);c=wapoUtilities.Get_Cookie(wapoEnv.cookie_previous_ip);if(f===null||c===null||f!==c){b=wapoEnv.wapo_public_protocol+wapoEnv.wapo_site_url+"public/visitor/ip_address.json";e={};e[wapoEnv.cookie_previous_ip]=wapoUtilities.Get_Cookie(wapoEnv.cookie_previous_ip);$wpjQ.ajax({dataType:"jsonp",jsonp:wapoEnv.param_name_jsonp_callback,url:b,data:e,success:function(g){wapoUtilities.Set_Cookie(wapoEnv.cookie_previous_ip,g.retVal,(50*365),wapoEnv.site_path,wapoEnv.site_base_domain,false);}});}d=wapoUtilities.Get_Cookie(wapoEnv.cookie_omniture);previousOmnitureId=wapoUtilities.Get_Cookie(wapoEnv.cookie_previous_omniture);if(d!==null&&d.length>0&&(previousOmnitureId==null||previousOmnitureId!=d)){b=wapoEnv.wapo_public_protocol+wapoEnv.wapo_site_url+"public/visitor/instance_datum.json?attributeName=omniture_vis_id&attributeValue="+escape(d);$wpjQ.ajax({dataType:"jsonp",jsonp:wapoEnv.param_name_jsonp_callback,url:b,success:function(g){wapoUtilities.Set_Cookie(wapoEnv.cookie_previous_omniture,g.retVal,(50*365),wapoEnv.site_path,wapoEnv.site_base_domain,false);}});}this.updateSessionId();};WapoVisitor.prototype.reconcileVisId=function(){currentVisId=wapoUtilities.Get_Cookie(wapoEnv.cookie_vis_id);if(currentVisId&&wapoSites.length>1){for(var b=0;b<wapoSites.length;
b++){var a=wapoSites[b];if(a.name!==wapoEnv.publicationName){$wpjQ.ajax({url:a.url+"public/visitor.json",data:{"lang":"en-us","tags":"sunset"},dataType:"jsonp",callbackParameter:wapoEnv.param_name_jsonp_callback,jsonp:wapoEnv.param_name_jsonp_callback,timeout:(5*1000),success:new Function("data","status","if(data != null && data.visitors != null && data.visitors.wapoVisitor != null && data.visitors.wapoVisitor.id != null)"+"{"+"wapoSites["+b+"].visId = data.visitors.wapoVisitor.id+'';"+"}"+"else"+"{"+"wapoSites["+b+"].visId = '-1';"+"} "+"wapoVisitor.processReconcileVisId();"),error:new Function("XHR","textStatus","errorThrown","wapoSites["+b+"].visId = '-1'; wapoVisitor.processReconcileVisId();")});}}}};WapoVisitor.prototype.processReconcileVisId=function(){var e="-1";var a=true;for(var d=0;d<wapoSites.length;d++){var c=wapoSites[d];if(c.visId==null){a=false;}else{if(c.visId!=="-1"){if(e==null||e<c.visId){e=c.visId;}}}}if(a){if(e!=="-1"){this.wapoVisId=e;currentVisIdCookieVal=wapoUtilities.Get_Cookie(wapoEnv.cookie_vis_id);if(currentVisIdCookieVal!==null&&currentVisIdCookieVal!==e){wapoUtilities.Set_Cookie(wapoEnv.cookie_vis_id,wapoVisitor.wapoVisId,(50*365),wapoEnv.site_path,this.baseDomainName,false);$wpjQ(document).trigger("wapo_visitor_create");}}else{var b=wapoEnv.wapo_public_protocol+wapoEnv.wapo_site_url+"public/visitor/create?format=json&jsonp=&"+wapoEnv.param_name_jsonp_callback+"=?";}}};WapoVisitor.prototype.updateSessionId=function(){var a;a=wapoUtilities.Get_Cookie(wapoEnv.cookie_session_id);if(typeof(a)==="undefined"||a===null){a=this.createUUID();}wapoUtilities.Set_Cookie(wapoEnv.cookie_session_id,a,wapoEnv.visitor_session_length/(60*24),wapoEnv.site_path,wapoEnv.site_base_domain,false);};WapoVisitor.prototype.createUUID=function(){var d=[];var a="0123456789ABCDEF";for(var b=0;b<32;b++){d[b]=a.substr(Math.floor(Math.random()*16),1);}d[12]="4";d[16]=a.substr((d[16]&3)|8,1);var c=d.join("");return c;};WapoVisitor.prototype.initVisId=function(){if(wapoSites.length>1){for(var b=0;b<wapoSites.length;b++){var a=wapoSites[b];if(a.name!==wapoEnv.publicationName){$wpjQ.ajax({url:a.url+"public/visitor.json",data:{"lang":"en-us","tags":"sunset"},dataType:"jsonp",callbackParameter:wapoEnv.param_name_jsonp_callback,jsonp:wapoEnv.param_name_jsonp_callback,timeout:(5*1000),success:new Function("data","status","if(data != null && data.visitors != null && data.visitors.wapoVisitor != null && data.visitors.wapoVisitor.id != null)"+"{"+"wapoSites["+b+"].visId = data.visitors.wapoVisitor.id+'';"+"}"+"else"+"{"+"wapoSites["+b+"].visId = '-1';"+"} "+"wapoVisitor.setWapoVisId();"),error:new Function("XHR","textStatus","errorThrown","wapoSites["+b+"].visId = '-1'; wapoVisitor.setWapoVisId();")});}}}else{this.setWapoVisId();}};WapoVisitor.prototype.incrementalRegistration=function(c,a){var b;if(this.completedGroups!=null&&this.completedGroups.indexOf(c)===-1){b=wapoEnv.wapo_secure_protocol+wapoEnv.wapo_site_url+"siteRegistration/editProfile?"+"reg_group="+c+"&"+wapoEnv.param_name_previous_url+"="+escape(window.location.href)+"&"+wapoEnv.param_name_redirect+"="+escape(a.href);a.href=b;}};WapoVisitor.prototype.identityUser=function(){return{urls:{login:wapoEnv.wapo_public_protocol+wapoEnv.wapo_site_url+"public/login/options?"+wapoEnv.param_name_redirect+"="+this.windowLocation+"&"+wapoEnv.param_name_previous_url+"="+this.windowLocation,logout:wapoEnv.wapo_secure_protocol+wapoEnv.wapo_site_url+"public/login/logout?redirect="+wapoVisitor.windowLocation,profilePic:wapoVisitor.picUrl||"",editProfile:wapoEnv.wapo_secure_protocol+wapoEnv.wapo_site_url+"siteRegistration/editProfile?"+wapoEnv.param_name_redirect+"="+this.windowLocation+"&"+wapoEnv.param_name_previous_url+"="+this.windowLocation},user:{loggedin:!(this.wapoLoginId===null||this.wapoLoginId==="")}};};WapoVisitor.prototype.includeSignInRegistration=function(){var a;var b=getOptionalRegistrationGroups();if(this.wapoLoginId===null||this.wapoLoginId===""){$wpjQ("#wapoLogout").remove();$wpjQ("#wapoEditProfile").remove();$wpjQ("#helloPic").remove();$wpjQ("#helloLogin").remove();$wpjQ("#wapolabs_wrapperLoginStatus").html('<a id="wapoLogin" class="thickbox" href="'+wapoEnv.wapo_public_protocol+wapoEnv.wapo_site_url+"public/login/options?"+wapoEnv.param_name_redirect+"="+this.windowLocation+"&"+wapoEnv.param_name_previous_url+"="+this.windowLocation+b+"&KeepThis=true&TB_iframe=true&height=464&width="+wapoEnv.lightbox_width+'&modal=true" rel="nofollow" title="Login or Register">'+'<span class="lnk_login">Log in</span><span class="lnk_div">/</span><span class="lnk_reg">Register</span></a>');}else{if(this.displayName===null||this.displayName===""){this.getDependentLoginValues();}$wpjQ("#wapoLogout").remove();$wpjQ("#wapoEditProfile").remove();$wpjQ("#helloLogin").remove();$wpjQ("#helloPic").remove();$wpjQ("#wapoRegistration").remove();$wpjQ("#wapoLogin").remove();$wpjQ("#wapolabs_wrapperLoginStatus").html('<span id="helloLogin"><span class="txt_greeting">Hello </span>'+'<span class="txt_username">'+this.displayName+"</span>"+"</span>");if(!this.picUrl||this.picUrl===""){$wpjQ('<img id="helloPic" style="display:none;" alt="User Profile Picture" />').appendTo("#wapolabs_wrapperLoginStatus");}else{$wpjQ('<img id="helloPic" width="40" height="40" src="'+wapoVisitor.picUrl+'" style="display:inline;" alt="User Profile Picture" />').appendTo("#wapolabs_wrapperLoginStatus");}if(!this.providerUrl||this.providerUrl===""){$wpjQ('<img id="providerPic" style="display:none;" alt="Provider Brand" />').appendTo("#wapolabs_wrapperLoginStatus");}else{$wpjQ('<img id="providerPic" src="'+wapoVisitor.providerUrl+'" style="display:inline;" alt="Provider Brand" />').appendTo("#wapolabs_wrapperLoginStatus");}if(this.completedGroups!=null||this.unconfirmedGroups!=null){$wpjQ('<span class="lnk_div"> | </span>'+'<a id="wapoEditProfile" href="'+wapoEnv.wapo_secure_protocol+wapoEnv.wapo_site_url+"siteRegistration/editProfile?"+wapoEnv.param_name_redirect+"="+this.windowLocation+"&"+wapoEnv.param_name_previous_url+"="+this.windowLocation+b+"&KeepThis=true&TB_iframe=true&height=464&width="+wapoEnv.lightbox_width+'&modal=true" class="thickbox" rel="nofollow" title="Edit Profile">'+'<span class="lnk_edit">Edit Profile</span>'+"</a>").appendTo("#wapolabs_wrapperLoginStatus");}$wpjQ('<span class="lnk_div"> | </span>'+'<a id="wapoLogout" href="'+wapoEnv.wapo_secure_protocol+wapoEnv.wapo_site_url+"public/login/logout?redirect="+wapoVisitor.windowLocation+'" rel="nofollow" title="Logout" onclick="wapoVisitor.wapoLogout(); wapoVisitor.resetThickbox(); return false;">'+'<span class="lnk_logout">Log out</span>'+"</a>").appendTo("#wapolabs_wrapperLoginStatus");a=wapoEnv.wapo_public_protocol+wapoEnv.wapo_site_url+"public/login/get/"+this.wapoLoginId+"?format=json&jsonp=&"+wapoEnv.param_name_jsonp_callback+"=?";}wapoVisitor.tbInit=true;return true;};WapoVisitor.prototype.updateWaPoLogin=function(e,c,a,d,f){this.wapoLoginId=c;this.getDependentLoginValues();if(typeof(a)==="undefined"){a="false";}if(typeof(d)==="undefined"){d="true";}if(typeof(f)!=="undefined"){$wpjq(document).trigger(f);}if(e==="true"){var b=getOptionalRegistrationGroups();document.getElementById("TB_iframeContent").src=wapoEnv.wapo_secure_protocol+wapoEnv.wapo_site_url+"siteRegistration?"+wapoEnv.param_name_no_cancel+"="+a+b;}else{$wpjQ(document).trigger("wapoRefreshDisplay");this.updateVisitorLogin();this.resetThickbox();if(typeof(wapoThickBoxCloseCallback)!=="undefined"&&d==="true"){wapoThickBoxCloseCallback();}}};WapoVisitor.prototype.wapoLogout=function(){var a=wapoEnv.wapo_secure_protocol+wapoEnv.wapo_site_url+"public/login/logout"+"?format=json&"+wapoEnv.param_name_login_id+"="+escape(this.wapoLoginId)+"&jsonp=&"+wapoEnv.param_name_jsonp_callback+"=?";$wpjQ.ajax({dataType:"jsonp",jsonp:wapoEnv.param_name_jsonp_callback,url:a,timeout:(2*1000),success:function(b){if(b!==null&&b.providerName!==null){if(b.providerName==="Facebook"&&typeof(FB)!=="undefined"){wapoVisitor.endLogout();FB.logout();
}else{wapoVisitor.endLogout();}}},error:function(b,d,c){wapoVisitor.endLogout();}});};WapoVisitor.prototype.endLogout=function(){wapoUtilities.Delete_Cookie(wapoEnv.cookie_login_id,wapoEnv.site_path,wapoEnv.site_base_domain);wapoUtilities.Delete_Cookie(wapoEnv.cookie_groups,wapoEnv.site_path,wapoEnv.site_base_domain);wapoUtilities.Delete_Cookie(wapoEnv.cookie_display,wapoEnv.site_path,wapoEnv.site_base_domain);this.initProperties();$wpjQ(document).trigger(wapoEnv.event_name_logout);this.resetThickbox();if(typeof(wapoLogoutCallback)!=="undefined"){wapoLogoutCallback();}};function wapoInit(a){wapoVisitor=new WapoVisitor();wapoVisitor.windowLocation=a;if(!wapoEnv.customLoginTrigger){$wpjQ(document).bind("wapoLogin.default",function(){});}$wpjQ(document).bind("wapoInit.default",function(){$wpjQ(document).trigger("wapoRefreshDisplay");});$wpjQ(document).bind("wapoLogout.default",function(){$wpjQ(document).trigger("wapoRefreshDisplay");});$wpjQ(document).bind("wapoRegister.default",function(){});$wpjQ(document).bind("wapoRefreshDisplay.default",function(){});wapoVisitor.init();return wapoVisitor;}function getOptionalRegistrationGroups(){var b=$wpjQ("[name="+wapoEnv.meta_tag_optional_groups+"]");var a="";if(b&&b.length>0){a="&"+wapoEnv.param_name_regis_group_name+"="+b[0].content;}return a;}var wapoVisitor=wapoInit(window.location.href);WapoEnv.prototype.Get_Unescaped_Cookie=function(b){var h,c,f,g,e,d,a;h=document.cookie.split(";");e=false;d=/^(.*?)(=)(.*?)$/;a=h.length;while(a--){c=h[a].match(d);if(typeof(c)!=="undefined"&&c!==null){f=c[1].replace(/^\s+|\s+$/g,"");if(f===b){e=true;if(c[2]==="="){g=c[3].replace(/^\s+|\s+$/g,"");}return g;}}c=null;f="";}if(!e){return null;}};
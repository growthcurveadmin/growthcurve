function com_borstvoeding_growthcurve_UserManager(){
  var $intern_0 = '', $intern_27 = '" for "gwt:onLoadErrorFn"', $intern_25 = '" for "gwt:onPropertyErrorFn"', $intern_10 = '"><\/script>', $intern_12 = '#', $intern_33 = '&', $intern_14 = '/', $intern_63 = '0DD2EA005F2949E9BBCDEC182FED4242.cache.html', $intern_50 = '106D7C2BB4AF705938AAC576938D36C4.cache.html', $intern_52 = '135FC92256277959E25FD8AE11F5D750.cache.html', $intern_54 = '20B4971CB45DEE8206657212FE65AA5C.cache.html', $intern_56 = '299D9C054F6B4CFB1F81E552056BC3BC.cache.html', $intern_55 = '3670647A260AB4DA93ADAD4E257E59A0.cache.html', $intern_57 = '49E9322EA5D42540B2296524AA9C0697.cache.html', $intern_53 = '49EEB2FAC521667AC8DB96AAC40540E2.cache.html', $intern_64 = '4F9811403285510E4825FE53973B71F4.cache.html', $intern_60 = '9ED15DEDDC5B4FF10968D0DC28578075.cache.html', $intern_74 = '<script defer="defer">com_borstvoeding_growthcurve_UserManager.onInjectionDone(\'com.borstvoeding.growthcurve.UserManager\')<\/script>', $intern_9 = '<script id="', $intern_22 = '=', $intern_13 = '?', $intern_58 = 'A7A49AF447E2B79F941A94FCF7EF07D3.cache.html', $intern_24 = 'Bad handler "', $intern_61 = 'D17B3CCC99527D8B5816807BC9C35A11.cache.html', $intern_62 = 'D1CAD8AC5FB78D955796F63F5101E8EE.cache.html', $intern_65 = 'D470B2A5F6361E9B284A82B140C8F8B9.cache.html', $intern_73 = 'DOMContentLoaded', $intern_59 = 'FBF44B6AC18940BEAFD35E9517383A2C.cache.html', $intern_11 = 'SCRIPT', $intern_36 = 'Unexpected exception in locale detection, using default: ', $intern_72 = 'UserManager.css', $intern_35 = '_', $intern_8 = '__gwt_marker_com.borstvoeding.growthcurve.UserManager', $intern_15 = 'base', $intern_4 = 'begin', $intern_3 = 'bootstrap', $intern_17 = 'clear.cache.gif', $intern_1 = 'com.borstvoeding.growthcurve.UserManager', $intern_21 = 'content', $intern_49 = 'de', $intern_34 = 'default', $intern_7 = 'end', $intern_43 = 'gecko', $intern_44 = 'gecko1_8', $intern_5 = 'gwt.hybrid', $intern_66 = 'gwt/standard/standard.css', $intern_26 = 'gwt:onLoadErrorFn', $intern_23 = 'gwt:onPropertyErrorFn', $intern_20 = 'gwt:property', $intern_71 = 'head', $intern_48 = 'hosted.html?com_borstvoeding_growthcurve_UserManager', $intern_70 = 'href', $intern_42 = 'ie6', $intern_28 = 'iframe', $intern_16 = 'img', $intern_29 = "javascript:''", $intern_67 = 'link', $intern_46 = 'loadExternalRefs', $intern_32 = 'locale', $intern_18 = 'meta', $intern_31 = 'moduleRequested', $intern_6 = 'moduleStartup', $intern_41 = 'msie', $intern_19 = 'name', $intern_51 = 'nl', $intern_38 = 'opera', $intern_30 = 'position:absolute;width:0;height:0;border:none', $intern_68 = 'rel', $intern_40 = 'safari', $intern_47 = 'selectingPermutation', $intern_2 = 'startup', $intern_69 = 'stylesheet', $intern_45 = 'unknown', $intern_37 = 'user.agent', $intern_39 = 'webkit';
  var $wnd = window, $doc = document, $stats = $wnd.__gwtStatsEvent?function(a){
    return $wnd.__gwtStatsEvent(a);
  }
  :null, scriptsDone, loadDone, bodyDone, base = $intern_0, metaProps = {}, values = [], providers = [], answers = [], onLoadErrorFunc, propertyErrorFunc;
  $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date()).getTime(), type:$intern_4});
  if (!$wnd.__gwt_stylesLoaded) {
    $wnd.__gwt_stylesLoaded = {};
  }
  if (!$wnd.__gwt_scriptsLoaded) {
    $wnd.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    try {
      return $wnd.external && ($wnd.external.gwtOnLoad && $wnd.location.search.indexOf($intern_5) == -1);
    }
     catch (e) {
      return false;
    }
  }

  function maybeStartModule(){
    if (scriptsDone && loadDone) {
      var iframe = $doc.getElementById($intern_1);
      var frameWnd = iframe.contentWindow;
      frameWnd.__gwt_initHandlers = com_borstvoeding_growthcurve_UserManager.__gwt_initHandlers;
      if (isHostedMode()) {
        frameWnd.__gwt_getProperty = function(name){
          return computePropValue(name);
        }
        ;
      }
      com_borstvoeding_growthcurve_UserManager = null;
      frameWnd.gwtOnLoad(onLoadErrorFunc, $intern_1, base);
      $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_6, millis:(new Date()).getTime(), type:$intern_7});
    }
  }

  function computeScriptBase(){
    var thisScript, markerId = $intern_8, markerScript;
    $doc.write($intern_9 + markerId + $intern_10);
    markerScript = $doc.getElementById(markerId);
    thisScript = markerScript && markerScript.previousSibling;
    while (thisScript && thisScript.tagName != $intern_11) {
      thisScript = thisScript.previousSibling;
    }
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_12);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_13);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_14, Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):$intern_0;
    }

    ;
    if (thisScript && thisScript.src) {
      base = getDirectoryOfFile(thisScript.src);
    }
    if (base == $intern_0) {
      var baseElements = $doc.getElementsByTagName($intern_15);
      if (baseElements.length > 0) {
        base = baseElements[baseElements.length - 1].href;
      }
       else {
        base = getDirectoryOfFile($doc.location.href);
      }
    }
     else if (base.match(/^\w+:\/\//)) {
    }
     else {
      var img = $doc.createElement($intern_16);
      img.src = base + $intern_17;
      base = getDirectoryOfFile(img.src);
    }
    if (markerScript) {
      markerScript.parentNode.removeChild(markerScript);
    }
  }

  function processMetas(){
    var metas = document.getElementsByTagName($intern_18);
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name = meta.getAttribute($intern_19), content;
      if (name) {
        if (name == $intern_20) {
          content = meta.getAttribute($intern_21);
          if (content) {
            var value, eq = content.indexOf($intern_22);
            if (eq >= 0) {
              name = content.substring(0, eq);
              value = content.substring(eq + 1);
            }
             else {
              name = content;
              value = $intern_0;
            }
            metaProps[name] = value;
          }
        }
         else if (name == $intern_23) {
          content = meta.getAttribute($intern_21);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_24 + content + $intern_25);
            }
          }
        }
         else if (name == $intern_26) {
          content = meta.getAttribute($intern_21);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_24 + content + $intern_27);
            }
          }
        }
      }
    }
  }

  function __gwt_isKnownPropertyValue(propName, propValue){
    return propValue in values[propName];
  }

  function __gwt_getMetaProperty(name){
    var value = metaProps[name];
    return value == null?null:value;
  }

  function unflattenKeylistIntoAnswers(propValArray, value){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value;
  }

  function computePropValue(propName){
    var value = providers[propName](), allowedValuesMap = values[propName];
    if (value in allowedValuesMap) {
      return value;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value);
    }
    throw null;
  }

  var frameInjected;
  function maybeInjectFrame(){
    if (!frameInjected) {
      frameInjected = true;
      var iframe = $doc.createElement($intern_28);
      iframe.src = $intern_29;
      iframe.id = $intern_1;
      iframe.style.cssText = $intern_30;
      iframe.tabIndex = -1;
      $doc.body.appendChild(iframe);
      $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_6, millis:(new Date()).getTime(), type:$intern_31});
      iframe.contentWindow.location.replace(base + strongName);
    }
  }

  providers[$intern_32] = function(){
    try {
      var locale;
      if (locale == null) {
        var args = location.search;
        var startLang = args.indexOf($intern_32);
        if (startLang >= 0) {
          var language = args.substring(startLang);
          var begin = language.indexOf($intern_22) + 1;
          var end = language.indexOf($intern_33);
          if (end == -1) {
            end = language.length;
          }
          locale = language.substring(begin, end);
        }
      }
      if (locale == null) {
        locale = __gwt_getMetaProperty($intern_32);
      }
      if (locale == null) {
        return $intern_34;
      }
      while (!__gwt_isKnownPropertyValue($intern_32, locale)) {
        var lastIndex = locale.lastIndexOf($intern_35);
        if (lastIndex == -1) {
          locale = $intern_34;
          break;
        }
         else {
          locale = locale.substring(0, lastIndex);
        }
      }
      return locale;
    }
     catch (e) {
      alert($intern_36 + e);
      return $intern_34;
    }
  }
  ;
  values[$intern_32] = {de:0, 'default':1, nl:2};
  providers[$intern_37] = function(){
    var ua = navigator.userAgent.toLowerCase();
    var makeVersion = function(result){
      return parseInt(result[1]) * 1000 + parseInt(result[2]);
    }
    ;
    if (ua.indexOf($intern_38) != -1) {
      return $intern_38;
    }
     else if (ua.indexOf($intern_39) != -1) {
      return $intern_40;
    }
     else if (ua.indexOf($intern_41) != -1) {
      var result = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
      if (result && result.length == 3) {
        if (makeVersion(result) >= 6000) {
          return $intern_42;
        }
      }
    }
     else if (ua.indexOf($intern_43) != -1) {
      var result = /rv:([0-9]+)\.([0-9]+)/.exec(ua);
      if (result && result.length == 3) {
        if (makeVersion(result) >= 1008)
          return $intern_44;
      }
      return $intern_43;
    }
    return $intern_45;
  }
  ;
  values[$intern_37] = {gecko:0, gecko1_8:1, ie6:2, opera:3, safari:4};
  com_borstvoeding_growthcurve_UserManager.onScriptLoad = function(){
    if (frameInjected) {
      loadDone = true;
      maybeStartModule();
    }
  }
  ;
  com_borstvoeding_growthcurve_UserManager.onInjectionDone = function(){
    scriptsDone = true;
    $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_46, millis:(new Date()).getTime(), type:$intern_7});
    maybeStartModule();
  }
  ;
  computeScriptBase();
  processMetas();
  $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date()).getTime(), type:$intern_47});
  var strongName;
  if (isHostedMode()) {
    strongName = $intern_48;
  }
   else {
    try {
      unflattenKeylistIntoAnswers([$intern_49, $intern_42], $intern_50);
      unflattenKeylistIntoAnswers([$intern_51, $intern_42], $intern_52);
      unflattenKeylistIntoAnswers([$intern_49, $intern_38], $intern_53);
      unflattenKeylistIntoAnswers([$intern_49, $intern_40], $intern_54);
      unflattenKeylistIntoAnswers([$intern_49, $intern_44], $intern_55);
      unflattenKeylistIntoAnswers([$intern_49, $intern_43], $intern_56);
      unflattenKeylistIntoAnswers([$intern_51, $intern_38], $intern_57);
      unflattenKeylistIntoAnswers([$intern_51, $intern_40], $intern_58);
      unflattenKeylistIntoAnswers([$intern_51, $intern_44], $intern_59);
      unflattenKeylistIntoAnswers([$intern_51, $intern_43], $intern_60);
      unflattenKeylistIntoAnswers([$intern_34, $intern_38], $intern_61);
      unflattenKeylistIntoAnswers([$intern_34, $intern_40], $intern_62);
      unflattenKeylistIntoAnswers([$intern_34, $intern_44], $intern_63);
      unflattenKeylistIntoAnswers([$intern_34, $intern_43], $intern_64);
      unflattenKeylistIntoAnswers([$intern_34, $intern_42], $intern_65);
      strongName = answers[computePropValue($intern_32)][computePropValue($intern_37)];
    }
     catch (e) {
      return;
    }
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      if (!__gwt_stylesLoaded[$intern_66]) {
        var l = $doc.createElement($intern_67);
        __gwt_stylesLoaded[$intern_66] = l;
        l.setAttribute($intern_68, $intern_69);
        l.setAttribute($intern_70, base + $intern_66);
        $doc.getElementsByTagName($intern_71)[0].appendChild(l);
      }
      if (!__gwt_stylesLoaded[$intern_72]) {
        var l = $doc.createElement($intern_67);
        __gwt_stylesLoaded[$intern_72] = l;
        l.setAttribute($intern_68, $intern_69);
        l.setAttribute($intern_70, base + $intern_72);
        $doc.getElementsByTagName($intern_71)[0].appendChild(l);
      }
      maybeStartModule();
      if ($doc.removeEventListener) {
        $doc.removeEventListener($intern_73, onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc.addEventListener) {
    $doc.addEventListener($intern_73, function(){
      maybeInjectFrame();
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc.readyState)) {
      maybeInjectFrame();
      onBodyDone();
    }
  }
  , 50);
  $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_3, millis:(new Date()).getTime(), type:$intern_7});
  $stats && $stats({moduleName:$intern_1, subSystem:$intern_2, evtGroup:$intern_46, millis:(new Date()).getTime(), type:$intern_4});
  $doc.write($intern_74);
}

com_borstvoeding_growthcurve_UserManager.__gwt_initHandlers = function(resize, beforeunload, unload){
  var $wnd = window, oldOnResize = $wnd.onresize, oldOnBeforeUnload = $wnd.onbeforeunload, oldOnUnload = $wnd.onunload;
  $wnd.onresize = function(evt){
    try {
      resize();
    }
     finally {
      oldOnResize && oldOnResize(evt);
    }
  }
  ;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = beforeunload();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = function(evt){
    try {
      unload();
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  ;
}
;
com_borstvoeding_growthcurve_UserManager();

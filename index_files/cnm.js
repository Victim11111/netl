(()=>{
  if (!window.__cnmjsInvoked){
    try{
      var cnmSettings = JSON.parse('{"signal":"1:5f9562c1-be9c-4898-bc6a-5b40de4e1450:639b59b05b0a3b0008830ae1:1671125483254","cnmSettingsLocation":"/netlify-cnm/cnm-settings.json","cnmMainClientLocation":"https://client-network-manager.netlify.app/cnm-main-client.js","cnmSWLocation":"/cnm-sw.js","cnmSnippetScriptLocation":"/netlify-cnm/cnm.js","clientCaching":"static-only"}');
      window.netlify = window.netlify || {};
      window.netlify.cnm = window.netlify.cnm || {};
      window.netlify.cnm.settings = cnmSettings;
      var cnmScript = document.createElement('script');
      cnmScript.src = cnmSettings.cnmMainClientLocation;
      cnmScript.async = true;
      document.body.appendChild(cnmScript);
    }catch(e){
      console.error(e);
    }
  }
})();
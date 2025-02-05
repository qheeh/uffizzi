export default {
    async fetch(request, env) {
      let url = new URL(request.url);
      if (url.pathname.startsWith('/')) {
        // 修改下方的example.com为自己的节点ip/域名
        url.hostname="deployment-14028-uffizzi-1c4j.app.uffizzi.com";
        let new_request=new Request(url,request);
        return fetch(new_request);
      }
      return env.ASSETS.fetch(request);
    }
  };

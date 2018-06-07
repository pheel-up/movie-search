var AsyncJs = (() => {
  const get = function (url) {
    return new Promise((resolve, reject) => {
      PlwJs.dimOn();
      let req = new XMLHttpRequest();
      req.open("GET", url);
      
      req.onload = () => {
        if (req.status == 200) {
          resolve(req.response);
          PlwJs.dimOff();
        } else {
          reject(Error(req.statusText));
          PlwJs.dimOff();
        }
      };
      
      req.onerror = () => {
        reject(Error("Network Error"));
        PlwJs.dimOff();
      };
      
      req.send();
    });
  };
  
  return {
    get,
  }
})();
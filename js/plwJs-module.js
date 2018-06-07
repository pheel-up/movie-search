// PlwJs() -  general function JS library
var PlwJs = (() => {
  // createLink()
  var createLink = function (string, classNm, associatedVal) {
    var link,
        linkText;
    
    link = document.createElement("a");
    linkText = document.createTextNode(string);
    link.appendChild(linkText);
    link.setAttribute("name", associatedVal);
    link.setAttribute("value", string);
    link.setAttribute("id", string);
    link.setAttribute("class", classNm);
    
    return link;
  }; 
  // END createLink()
  
  // BEGIN createDiv() 
  var createDiv = function (id, classNm) {
    var div;
    
    div = document.createElement("div");
    div.setAttribute("id", id);
    div.setAttribute("class", classNm);
    
    return div;
  };
  // END createDiv() 
  
  // BEGIN createSpan() 
  var createSpan = function (id, classNm, content) {
    console.log(content);
    var span;
    
    span = document.createElement("span");
    span.setAttribute("id", id);
    span.setAttribute("class", classNm);
    console.log(span);
    span.insertAdjacentHTML("beforeend", content);
    
    return span;
  };
  // END createSpan() 
  
  // createTextEl()
  var createTextEl = function (string, id, classNm) {
    var textEl,
        text;
    
    textEl = document.createElement("span");
    text = document.createTextNode(string);
    textEl.appendChild(text);
    textEl.setAttribute("value", string);
    textEl.setAttribute("id", id);
    textEl.setAttribute("class", classNm);
    
    return textEl;
  };
  // END creatTextEl()
  
   // createInput()
  var createInput = function (id, classNm) {
    var input;
    
    input = document.createElement("input");
    input.setAttribute("id", id);
    input.setAttribute("class", classNm);
        
    return input;
  };
  // END createInput()
  
  // createBttn()
  var createBttn = function (string, classNm, name) {
    var bttn;
    
    bttn = document.createElement("input");
    bttn.setAttribute("type", "button");
    bttn.setAttribute("class", classNm);
    bttn.setAttribute("id", string);
    bttn.setAttribute("name", name);
    bttn.setAttribute("value", classNm);
    
    return bttn;
  }; // END createBttn()
  
  // createChkBx()
  var createChkBx = function (boolean, id,classNm) {
    var chkBx;
    
    chkBx = document.createElement("input");
    chkBx.setAttribute("type", "checkbox");
    chkBx.setAttribute("class", classNm);
    chkBx.setAttribute("id", id);
    chkBx.checked = boolean;

    return chkBx;
  };
  // END createChkBx()
  
  // createSelect()
  var createSelect = function (id, classNm) {
    var select;
    
    select = document.createElement("select");
    select.setAttribute("id", id);
    select.setAttribute("class", classNm);
    
    console.log(select);
    return select;    
  }; 
  // END createSelect()
  
  // setOptValsInSelect()
  var setOptValsInSelect = function (selId, arr) {
    var sel,
        arrLen,					
        opt;
    
    console.log(selId);
    sel = document.getElementById(selId);
    console.log(sel);
    sel.options.length = 0;
    arrLen = arr.length;		
    
    for (var i = 0; i < arrLen; i++) {
      opt = document.createElement("option");
      opt.value = arr[i];
      opt.text = arr[i];
      sel.appendChild(opt);
    }			
  }; 
  // END setOptValsInSelect()

  // setOptValInSelect()
  var setOptValInSelect = function (selEl, optVal, optText) {
    var opt;
    
    opt = document.createElement("option");
    opt.value = optVal;
    opt.text = optText;
    selEl.add(opt);
  };
  // END setOptValInSelect()   
  
  // dimOff()
  var dimOff = function () {
    document.getElementById("darkLayer").style.display = "none";    
  };
  // END dimOff()
  
  // dimOn()
  var dimOn = function () {
    document.getElementById("darkLayer").style.display = "";   
  };
  // END dimOn()
  
  // BEGIN dimOnRun()
  function dimOnRun (caller) {
    window.scrollTo(0, 0);
    document.getElementById("darkLayer").style.display = "";
    
    var total = 2235794,
        rate = 2264,
        processed = 0,
        count = 0;
          
    document.getElementById("total").textContent = " / " + total;
    document.getElementById("processed").textContent = processed;
        
    function counter () {          
      function increment () {
        processed = processed + rate;
        
        console.log(processed);
        document.getElementById("processed").textContent = processed
        return processed;        
      }

      return increment;
    }
    
    var curIncrement = counter();
    
    dimOnRun.interval = window.setInterval(function () {
      count++;
      curIncrement();
      console.log(count);
      if (count === 987) {
        clearInterval(dimOnRun.interval);
      }
    }, 100);    
  }
  // END dimOnRun() 
  
  return {
    createLink: createLink,
    createDiv: createDiv,
    createSpan: createSpan,
    createTextEl: createTextEl,
    createInput: createInput,
    createBttn: createBttn,
    createChkBx: createChkBx,
    createSelect: createSelect,
    setOptValsInSelect: setOptValsInSelect,
    setOptValInSelect: setOptValInSelect,
    dimOff: dimOff,
    dimOn: dimOn,
    dimOnRun: dimOnRun    
  }
})();
var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];
  
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)===true)resultSet.push(startEl)
  for(var i=0;i<startEl.children.length;i++){
    resultSet=resultSet.concat(traverseDomAndCollectElements(matchFunc, startEl.children[i]));
  }

  return resultSet 
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]===".")return "class"
  if(selector[0]==="#")return "id"
  for(let i=0;i<selector.length;i++){
    if(selector[i]===".") return "tag.class"
  }
  return "tag"
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  // una matchFunction para un selector "tag" podría verse asi:
//var matchFunction = function (el) {
 // return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
//};
  if (selectorType === "id") { 
    matchFunction=function(html){
      if("#"+html.id===selector)return true
      return false
    }
  } else if (selectorType === "class") {
            matchFunction=function(html){
              //selector=selector.slice(1,selector.length)
              for(let i=0;i<html.classList.length;i++){
                if("."+html.classList[i]===selector) return true
              }
              return false
            }
            /*matchFunction = function(el){
              for (let i = 0; i < el.classList.length; i++) {
                if('.' + el.classList[i] === selector) return true;
              }
            }
            */
  } else if (selectorType === "tag.class") {
            matchFunction=function(html){
              var arr2=selector.split(".")
              if(html.tagName.toLowerCase()===arr2[0].toLowerCase()){
                var arr=html.className.split(" ");
                for(let i=0;i<arr.length;i++){
                  if(arr[i]===arr2[1]){ 
                    return true
                  }
                }
              }
              return false
            }
  } else if (selectorType === "tag") {
            matchFunction=function(html){
              if(html.tagName.toLowerCase()===selector.toLowerCase())return true
              return false
            }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

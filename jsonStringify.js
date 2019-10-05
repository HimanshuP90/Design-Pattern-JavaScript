var stringifyJSON = function(obj) {
  var objElem = [];

  if (!(obj instanceof Object))
    return typeof obj === "string" ? '"' + obj + '"' : "" + obj;
  else if (Array.isArray(obj)) {
    return (
      "[" +
      obj.map(function(el) {
        return stringifyJSON(el);
      }) +
      "]"
    );
  } else if (obj instanceof Object) {
    for (var key in obj) {
      if (obj[key] instanceof Function) return "{}";
      else objElem.push('"' + key + '":' + stringifyJSON(obj[key]));
    }
    return "{" + objElem + "}";
  }
};

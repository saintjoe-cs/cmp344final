var calc = (function () {
  // We don't really have any state here, so this is easy to do

  var add = function (a,b) {
    return a + b;
    }

  var subtract =  function (a,b) {
    return a - b;
    }

  var multiply = function (a,b) {
    return a * b;
    }

  var divide = function (a,b) {
    return a / b;
    }

  return {
    add:add,
    subtract:subtract,
    multiply:multiply,
    divide:divide
  };

})();

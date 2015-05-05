// Problem #4
function fixPrint(inputNames) {
  var output = [];
  var separator;

  // Iterate over names
  inputNames.forEach(function(name) {
    // Long way around the barn here - there are way easier ways to do it!
    for (var i = 0; i < name.length; i++) {
      if (name[i] == ',') {
	separator = i;
	break;
	}
    } // for
    // We assume all strings are valid!!!
    // the "+2" accounts for separating space after the comma
    var first = name.substr(separator+2, name.length);
    var last = name.substr(0, separator);
    output.push(first + ' ' + last);
  }); // forEach
  return output;
}

var inNames = ["Capouch, Brian", "Chapstick, Brown"];
print(fixPrint(inNames));

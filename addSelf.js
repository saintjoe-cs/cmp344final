// Problem #2
function addself(value, times) {
  if (times == 1)
    // Base case
    return value;
  else
    return value + addself(value, times-1)
}

// Prove it
print(addself(6,4));

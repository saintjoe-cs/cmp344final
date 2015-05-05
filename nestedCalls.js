// Problem #1 
// Simple increment
function inc(a) {
  return a + 1;
  }

// Inc before mult
function multiply(a,b) {
  return inc(a) * inc(b);
  }

// Prove that it works per the problem statement
print(multiply(6,6));
print(multiply(4,5));

function addition() {
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  let sum = Number(a) + Number(b);
  document.getElementById("resultat").innerText = "Result (Addition): " + sum;
}

function concatener() {
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  document.getElementById("resultat").innerText = "Result (Concatenation): " + a + b;
}

function comparer() {
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  let isEqual = (a == b);
  document.getElementById("resultat").innerText = "Are they equal? " + isEqual;
}

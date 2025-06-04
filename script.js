function addition() {
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  let somme = Number(a) + Number(b);
  document.getElementById("resultat").innerText = "Résultat (addition) : " + somme;
}

function concatener() {
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  document.getElementById("resultat").innerText = "Résultat (concaténation) : " + a + b;
}

function comparer() {
  let a = document.getElementById("input1").value;
  let b = document.getElementById("input2").value;
  let estEgal = (a == b);
  document.getElementById("resultat").innerText = "Est-ce égal ? " + estEgal;
}

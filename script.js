const display = document.getElementById('display');

function append(value) {
  // Empêche d’ajouter deux opérateurs consécutifs
  const lastChar = display.value.slice(-1);
  const operators = ['+', '-', '*', '/', '.'];

  if (operators.includes(value)) {
    if (display.value === '' || operators.includes(lastChar)) {
      // Ne rien faire si on commence par un opérateur ou double opérateur
      return;
    }
  }

  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    // Évalue uniquement si la chaîne ne finit pas par un opérateur
    const lastChar = display.value.slice(-1);
    const operators = ['+', '-', '*', '/', '.'];
    if (operators.includes(lastChar)) {
      display.value = 'Error';
      return;
    }
    // Utilisation de Function pour plus de sécurité que eval
    display.value = Function('"use strict";return (' + display.value + ')')();
  } catch (e) {
    display.value = 'Error';
  }
}

// Gestion clics boutons
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;

    if (val === 'C') clearDisplay();
    else if (val === '←') backspace();
    else if (val === '=') calculate();
    else append(val);
  });
});

// Gestion clavier
document.addEventListener('keydown', (e) => {
  const key = e.key;
  const allowedKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];

  if (allowedKeys.includes(key)) {
    append(key);
  } else if (key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});

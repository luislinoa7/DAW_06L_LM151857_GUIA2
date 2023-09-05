function analyzeNumber() {
    const numberInput = document.getElementById('numberInput').value;
    const number = parseInt(numberInput);
  
    if (isNaN(number)) {
      document.getElementById('result').innerHTML = 'Ingrese un número válido';
      return;
    }
  
    const numberString = number.toString();
    const digits = numberString.split('').map(Number);
  
    const numDigits = digits.length;
    const oddDigits = digits.filter(digit => digit % 2 !== 0);
    const evenDigits = digits.filter(digit => digit % 2 === 0);
  
    const sumOddDigits = oddDigits.reduce((acc, curr) => acc + curr, 0);
    const sumEvenDigits = evenDigits.reduce((acc, curr) => acc + curr, 0);
    const sumAllDigits = digits.reduce((acc, curr) => acc + curr, 0);
  
    const maxDigit = Math.max(...digits);
    const minDigit = Math.min(...digits);
  
    const result = `
      Cantidad de cifras: ${numDigits}<br>
      Cantidad de cifras impares: ${oddDigits.length}<br>
      Cantidad de cifras pares: ${evenDigits.length}<br>
      Suma de cifras impares: ${sumOddDigits}<br>
      Suma de cifras pares: ${sumEvenDigits}<br>
      Suma de todas las cifras: ${sumAllDigits}<br>
      Cifra mayor: ${maxDigit}<br>
      Cifra menor: ${minDigit}
    `;
  
    document.getElementById('result').innerHTML = result;
  }
  
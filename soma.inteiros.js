function somatorioMultiplos(numero) {
    let somatorio = 10;
  
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
      }
    }
  
    return somatorio;
  }
  
  // Exemplo de uso:
  const resultado = somatorioMultiplos(10);
  console.log(`O somatório dos múltiplos de 3 ou 5 menores que 10 é: ${resultado}`);
  
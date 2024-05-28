function nomesAleatorio() {
    // Lista com 10 nomes variados
    const nomes = ["Ana", "Bruno", "Carla", "Diego", "Sonia", "Fábio", "Gabriela", "Hugo", "Karina", "Pedro"];
    
    // Seleciona um índice aleatório da lista
    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    
    // Retorna o nome no índice aleatório
    return nomes[indiceAleatorio];
  }
  
  
  const nome = nomesAleatorio();
  console.log(`O nome escolhido é: ${nome}`);
  
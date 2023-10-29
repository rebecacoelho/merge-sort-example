document.getElementById("sortButton").addEventListener("click", function() {
    const inputNames = document.getElementById("inputNames").value;
    const namesArray = inputNames.split(",").map(name => name.trim());
    
    const sortedNames = mergeSort(namesArray);
    const sortedNamesDiv = document.getElementById("sortedNames");
    sortedNamesDiv.innerHTML = "Nomes ordenados: " + sortedNames.join(", ");
    sortedNamesDiv.style.display = "block";
  });
  
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const meio = Math.floor(arr.length / 2);
    const esquerda = arr.slice(0, meio);
    const direita = arr.slice(meio);
  
    return merge(mergeSort(esquerda), mergeSort(direita));
  }
  
  function merge(esquerda, direita) {
    let resultado = [];
    let indexEsq = 0;
    let indexDir = 0;
  
    while (indexEsq < esquerda.length && indexDir < direita.length) {
      if (esquerda[indexEsq] < direita[indexDir]) {
        resultado.push(esquerda[indexEsq]);
        indexEsq++;
      } else {
        resultado.push(direita[indexDir]);
        indexDir++;
      }
    }
  
    return resultado.concat(esquerda.slice(indexEsq)).concat(direita.slice(indexDir));
  }
  
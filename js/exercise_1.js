/*****************************

    Scrummers Excercise 1

    Javier Estévez

******************************/

function anagramsFinder( list ) {
  
    // console.log(`Original list: ${ list }`);

    // Create the output array
    let result = [];

    // To validate if the list is empty I return an empty array.
    if (list.length == 0) {
        return result;
    }
    
    // Erase white spaces and keep the original indexes, use a regular expression
    let sinBlancos = list.map(function(x) {
        return x.replace(/ /g, "");
    });    
    // console.log(`sin blancos: ${sinBlancos}`);

    
    //I create a new array sorting alphabetically every string in the original position.    
    let sortedList = sinBlancos.map(function(x) { 
        return x.split('').sort().join('');
    });


    // I create a object array to store the word and the original index in the list recived as an argument.
    let ordenadoMinMay = [];
    let objeto = {};
    for (let i = 0; i < sortedList.length; i++) {
        objeto = {
            "word": sortedList[i],
            "index": i
        };
        
        ordenadoMinMay.push(objeto);
    }


    // Sort the strings in the array by length ASC
    ordenadoMinMay.sort(function(a, b){
        
        return a.word.length - b.word.length;
    });


    // console.log(`Objects array sorted alphabetically and from lower to higher`);
    // ordenadoMinMay.forEach(element => {
    //     console.log(element);
    // });    

 
    // Loop over objects array and store in result array
    let found = false;
    let word = ordenadoMinMay[0].word;
    
    let j = 0;
    result[j] = new Array();
    result[j].push(list[ordenadoMinMay[0].index]);

    // Auxiliary array to store the keys (aux)
    let aux = []; 
    aux[j] = word;    
    
    for (let i = 1; i < ordenadoMinMay.length; i++) {
        
        if (ordenadoMinMay[i].word == word) {
            result[j].push(list[ordenadoMinMay[i].index]);
        } else {
            // Search in the auxiliary array to see if the key exists
            found = false;
            j = 0;        
            while ( !found && j < aux.length) {
            
                if (ordenadoMinMay[i].word == aux[j]){
                    found = true;
                    result[j].push(list[ordenadoMinMay[i].index]);
                    word = '';
                } else {
                    j++;
                }
            }
            if(!found) {
                word = ordenadoMinMay[i].word;
                aux[j] = word;
                result[j] = new Array();
                result[j].push(list[ordenadoMinMay[i].index]);
            }   
        }       

    }
   
    return result;
}



// I use 5 different inputs to see if my function works as expected.

let input1 = ['rope', 'pore', 'repo', 'red rum', 'murder', 'listen', 'silent', 'endeavour'];

let input2 = ['endeavour', 'pore', 'silent', 'red rum', 'listen', 'murder', 'repo', 'rope'];

let input3 = ['endeavour', 'pore', 'l e r','silent', 'red rum', 'listen', 'murder', 'repo', 'rope', 'rel'];

let input4 = ['hello'];

let input5 = [];

const result = anagramsFinder(input1);
console.log(result);
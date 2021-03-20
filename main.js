// Crie uma função que receba uma string em celsius ou
// fahrenheit e faça a transformação de uma unidade 
// para outra

function transformDegree(degree){
    const celsius = degree.toUpperCase().includes('C')
    const fahrenheit = degree.toUpperCase().includes('F')

    if(!celsius && !fahrenheit){
        throw new Error('Grau não identificado')
    }
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    if (celsius){
        updatedDegree = Number(degree.toUpperCase().replace("C",""));
        formula = celsius => (celsius * 9/5) + 32
        degreeSign = 'F'

    }

    return formula(updatedDegree) + degreeSign
    
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('78C'))
   
} catch(error){
    console.log(error.message)
}
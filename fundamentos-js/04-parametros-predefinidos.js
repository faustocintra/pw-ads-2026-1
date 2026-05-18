// calArea() é uma função que calcula a área de uma figura geometrica plana, dados a base, a alatura e o tipo da forma 
function calcArea (base, altura, tipo){
    swith (tipo){
        case 'R'; //retangulo
        return base * altura
        case 'T';
        return base * altura/2
        case 'E';
        return (base/2) * (altura/2) * Math.PI
        default: //formas inválidas/desconhecidas
        return undefined    
    }
    console.log(`A área do triangulo 10x30: ${calcArea(10, 30, 'T')}`)
    console.log(`A área elipse (círculo) 7,5x7,5: ${calcArea(7.5, 7.5, 'E')} `)
    console.log(`Area retângulo 12,8x15,5: ${calcArea(12.8, 15.5, 'R')}`)
    console.log(`Area forma inválida 8x17: ${calcArea(8, 17, 'H')}`)
}


function calcArea (base, altura, tipo = 'R'){
case 'R'; //retangulo
        return base * altura
        case 'T';
        return base * altura | 2
        case 'E';
        return (base/2) * (altura/2) * Math.PI
        default: //formas inválidas/desconhecidas
        return undefined    
}


// chamando a fundção com apenas 2 parametros
console.log(`A área do retângulo 10x30: ${calcArea(20, 40)}`)

/* regras para o uso de parametros predefinidos
1. O parametro predefinido deve vir sempre por último na lista de parametros de uma função
2. Pode haver mais de um parametro predefinido. Nesse caso, devem ser sempre os ÚLTIMOS. 
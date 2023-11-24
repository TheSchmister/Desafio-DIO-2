let ranking = winBalance(11, 0)

let message = "O Herói tem saldo de " + ranking + " e está no nível de "

function winBalance(wins, losses){
    let result = wins - losses
    return result
}

switch(true){
    case ranking <= 10:
    message += "Ferro"
    break

    case ranking > 10 && ranking <= 20:
    message += "Bronze"
    break
    
    case ranking > 20 && ranking <= 50:
    message += "Prata"
    break

    case ranking > 50 && ranking <= 80:
    message += "Ouro"
    break

    case ranking > 80 && ranking <= 90:
    message += "Diamante"
    break

    case wranking > 90 && ranking <= 100:
    message += "Lendário"
    break

    case ranking > 100:
    message += "Imortal"
    break
}

console.log(message)
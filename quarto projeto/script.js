let nomes = ["Miguel", "Arthur", "Gael", "Heitor", "Helena", "Alice", "Theo",
        "Laura", "Davi", "Gabriel"]

function load(){

    let itenslista = ''
    for(indice in nomes){
        //alert(names[indice])
        let nome = nomes[indice]
        itenslista += `<li class="list-style" id="name-list">${nome}</li>`
        document.getElementById('name-list').innerHTML=itenslista
    }
}

function search(){
    let procurar = document.getElementById('nome-procura').value
    for(indice in nomes){
        let nome = nomes[indice]
        if(procurar == nome){
            document.getElementById('name-list').innerHTML = procurar
        }
    }
}      

let nome_card = document.getElementById('cartao').value
let venc_card = document.getElementById('vencimento').value
let anui_card = document.getElementById('anuidade').value
let an_card_s = document.getElementById('anuidade_s')    
let an_card_n = document.getElementById('anuidade_n')

function add_card(){
    let nome_card = document.getElementById('cartao').value
    let venc_card = document.getElementById('vencimento').value
    let anui_card = document.getElementById('anuidade').value
    let tabela = document.createElement('table')
    tabela.setAttribute ('id', 'main')
    document.getElementById('container').appendChild(tabela)
    tabela.style.position = 'absolute'
    let coluna = document.createElement('tr')
    coluna.setAttribute('id', 'mes/ano')
    document.getElementById('main').appendChild(coluna)
    let celula = document.createElement('td')
    let teste2 = document.createElement('p')
    teste2.innerHTML = `${nome_card}`
    coluna.appendChild(teste2)
    document.getElementById('mes/ano').appendChild(celula)
    // let name = nome_card.value
    // let venc = venc_card.value
    // let anui = anui_card.value
    console.log(`Testando ${nome_card}, ${venc_card}, ${anui_card}`)
    }
  
const infos = [
    {
      "id": 1,
      "name": "Rei",
      "url": "./assets/images/king.png",
      "description": "O 'rei' é a peça mais importante no xadrez. Sua movimentação é limitada a uma casa em qualquer direção. Apesar de sua mobilidade restrita, a proteção do rei é crucial. Se o rei estiver ameaçado de captura, isso é chamado de 'xeque'. Se não houver nenhuma maneira de escapar do xeque, a situação é conhecida como 'xeque-mate', e o jogo termina. Portanto, é fundamental proteger o rei e, ao mesmo tempo, buscar enfraquecer a posição do rei adversário. A habilidade de antecipar e evitar ameaças ao rei é uma marca distintiva de jogadores de xadrez experientes."
    },
    {
      "id": 2,
      "name": "Dama",
      "url": "./assets/images/queen.png",
      "description": "A 'dama' é a peça mais poderosa do xadrez, movendo-se em linhas retas ou diagonais por qualquer número de casas. Sua versatilidade a torna uma ferramenta valiosa tanto na defesa quanto no ataque. Um bom jogador utiliza a dama de maneira estratégica, controlando o tabuleiro e pressionando o oponente."
    },
    {
      "id": 3,
      "name": "Torre",
      "url": "./assets/images/rook.png",
      "description": "A 'torre' movimenta-se em linhas retas, horizontal ou verticalmente, por quantas casas desejar. É uma peça sólida, crucial para controlar colunas e fileiras. As torres geralmente se conectam no início do jogo, fortalecendo a defesa e preparando-se para movimentos estratégicos."
    },
    {
      "id": 4,
      "name": "Bispo",
      "url": "./assets/images/bishop.png",
      "description": "O 'bispo' move-se ao longo de diagonais, cobrindo casas de uma única cor. Sua mobilidade é eficaz para controlar áreas específicas do tabuleiro. Em conjunto com outros bispos ou peças, pode criar linhas de ataque formidáveis. A posição dos bispos é frequentemente considerada nas aberturas e meio-jogo."
    },
    {
      "id": 5,
      "name": "Cavalo",
      "url": "./assets/images/knight.png",
      "description": "O 'cavalo' tem um movimento único em forma de 'L', pulando sobre outras peças. Essa habilidade única confere ao cavalo a capacidade de contornar obstáculos. Jogadores habilidosos exploram a mobilidade do cavalo para criar ameaças inesperadas e alcançar posições estratégicas."
    },
    {
      "id": 6,
      "name": "Peão",
      "url": "./assets/images/pawn.png",
      "description": "Os 'peões' movem-se para frente, mas capturam em diagonal. Seu movimento inicial permite uma escolha entre avançar um ou dois quadrados. Os peões são fundamentais na ocupação do centro do tabuleiro e na criação de estruturas defensivas. Além disso, a promoção de um peão pode levar a mudanças drásticas na dinâmica da partida."
    }
  ]

// const progressBar = document.querySelector('.bar2')
// const progressValue = document.querySelector('.progressValue')

document.getElementById('mv').addEventListener('load', e => {
  // document.querySelector('body').style.overflowY = "scroll"
  // document.querySelector('#splash').style.opacity = "0%"

  console.log(document.getElementById('mv').toDataURL())
})

// document.getElementById('mv').addEventListener('progress', e => {
//   progressBar.style.width = `${((e.detail.totalProgress).toFixed(2) * 100)}%`
//   progressValue.innerText = `${((e.detail.totalProgress).toFixed(2) * 100)}%`
// })
  
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('6').style.backgroundColor = '#0061A6'
    document.getElementById('6').querySelector('img').style.filter = "brightness(100%)"
})

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  document.querySelector('nav').style.opacity = `${(250 - scroll) / 2}%`

  if(scroll > 300){
    document.querySelector('nav').style.display = 'none'
  }else{
    document.querySelector('nav').style.display = 'block'
  }
});

document.querySelectorAll('.option').forEach(element => {
    element.addEventListener('click', (e) => {

        document.querySelectorAll('.option').forEach(element => {            
            element.style.backgroundColor = '#ececec'
            element.querySelector('img').style.filter = "brightness(10%)"
        })

        e.target.style.backgroundColor = '#0061A6'

        e.target.querySelector('img').style.filter = "brightness(100%)"

        const id = e.target.id

        const currentInfos = infos.find((item) => {
            return item.id == id
        })

        document.querySelector('.galeryImage').setAttribute('src', currentInfos.url)
        document.querySelector('.galeryText').innerText = currentInfos.description
        document.querySelector('.galeryTitle').innerText = currentInfos.name
    })
});
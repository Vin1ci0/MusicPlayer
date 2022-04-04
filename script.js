let musicas = [
    {titulo: 'Thunder', artista: 'Telecasted', src:'musicas/Thunder - Telecasted - Rock.mp3',
    img: 'imagens/rock.jpg'},
    {titulo: 'Just Breathing', artista: 'NEFFEX', src:'musicas/Just Breathing - NEFFEX - Pop.mp3',
    img: 'imagens/pop.jpg'},
    {titulo: 'Thats What it Takes', artista: 'NEFFEX', src:'musicas/Thats What It Takes - NEFFEX - HipHop.mp3',
    img: 'imagens/hiphop.jpg'}
]

let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim')
let nomeMusica = document.querySelector('.descricao h2')
let imagem = document.querySelector('.img')
let nomeArtista = document.querySelector('.descricao i')

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration))

//Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra)

//Funções
function tocarMusica() {
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none'
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none'
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = Math.floor(musica.currentTime)
} 

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    
    if (camposSegundos < 10) {
        campoSegundos = '0' + campoSegundos
    }

    return campoMinutos + ':' + campoSegundos
}
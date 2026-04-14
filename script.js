// PROJETOS DINÂMICOS

const projetos = [

{
nome:"Portfólio Pessoal",
descricao:"Site de portfólio criado com HTML, CSS e JavaScript.",
link:"https://seusite.com/portfolio"
},

{
nome:"Projeto Itegrador 1",
descricao:"A parte do escopo de um Aplicativo (Está em Desenvolvimento).",
link:""
},

{
nome:"AvisaÁgua",
descricao:"Futuramente irei criar um aplicativo (Está em Andamento).",
link:""
},

{nome:"Calculadora",
descricao:"Calculadora simples feita com HTML, CSS e JavaScript.",
link:"https://raylanmenesesdev.github.io/Calculadora-Simples/"
},

{nome:"Gerador de Senhas",
descricao:"Gerador de senhas aleatórias criado com HTML, CSS e JavaScript.",
link:"https://raylanmenesesdev.github.io/Gerador-de-Senhas-/"
}

]

const texts = ["Raylan Meneses Ferreira"];
let index = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < texts[index].length) {
    document.getElementById("typing").textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      document.getElementById("typing").textContent = "";
      charIndex = 0;
      index = (index + 1) % texts.length;
      typeEffect();
    }, 2000);
  }
}

typeEffect();
const container = document.getElementById("listaProjetos")


projetos.forEach(projeto => {

const card = document.createElement("div")

card.classList.add("card")

card.innerHTML = `
<h3>${projeto.nome}</h3>
<p>${projeto.descricao}</p>

<a href="${projeto.link}" target="_blank" class="btn-projeto">
Ver Projeto
</a>
`

// 🔗 tornar card clicável
if(projeto.link){
card.style.cursor = "pointer"

card.addEventListener("click", ()=>{
window.open(projeto.link, "_blank")
})
}

container.appendChild(card)

})

const btn = document.getElementById("toggleTheme");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.addEventListener("DOMContentLoaded", () => {
  const sobreCard = document.querySelector(".sobre-card");

  function reveal() {
    const top = sobreCard.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      sobreCard.classList.add("show");
    }
  }

  window.addEventListener("scroll", reveal);
  reveal();
});

document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value.trim();
  let email = document.getElementById("email").value.trim();
  let mensagem = document.getElementById("mensagem").value.trim();
  let status = document.getElementById("statusMsg");

  if (nome === "" || email === "" || mensagem === "") {
    status.textContent = "⚠️ Preencha todos os campos!";
    status.style.color = "orange";
    return;
  }

  if (!email.includes("@")) {
    status.textContent = "⚠️ Email inválido!";
    status.style.color = "orange";
    return;
  }

  status.textContent = "✅ Mensagem enviada com sucesso!";
  status.style.color = "#00ff88";

  // limpa o formulário
  document.getElementById("formContato").reset();
});

// ANIMAÇÃO AO ROLAR

const sobre = document.querySelector(".sobre")

window.addEventListener("scroll",()=>{

const posicao = sobre.getBoundingClientRect().top
const tela = window.innerHeight

if(posicao < tela - 100){

sobre.classList.add("show")

}
  
})
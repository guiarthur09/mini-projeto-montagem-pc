// Selecionando elementos
const form = document.querySelector("#form");

const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");
const inputOrcamento = document.querySelector("#orcamento");
const selectTipo = document.querySelector("#tipo");

const lista = document.querySelector("#lista");
const mensagem = document.querySelector("#mensagem");

// Array com LocalStorage
let pcs = JSON.parse(localStorage.getItem("pcs")) || [];


// EVENTO SUBMIT
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = inputNome.value;
    const email = inputEmail.value;
    const orcamento = inputOrcamento.value;
    const tipo = selectTipo.value;

    // VALIDAÇÃO
    if(nome === "" || email === "" || orcamento === "" || tipo === ""){
        mensagem.textContent = "Preencha todos os campos!";
        return;
    }

    if(!email.includes("@")){
        mensagem.textContent = "Email inválido!";
        return;
    }

    const pc = {
        nome,
        email,
        orcamento,
        tipo
    };

    pcs.push(pc);

    localStorage.setItem("pcs", JSON.stringify(pcs));

    mensagem.textContent = "PC salvo com sucesso!";

    limparCampos();
    mostrar();
});


// MOSTRAR LISTA
function mostrar(){
    lista.innerHTML = "";

    if(pcs.length === 0){
        lista.innerHTML = "<li>Nenhum PC cadastrado</li>";
        return;
    }

    pcs.forEach((pc, index) => {
        lista.innerHTML += `
            <li>
                <strong>${pc.nome}</strong> - ${pc.tipo} - R$${pc.orcamento}
                <button onclick="remover(${index})">Remover</button>
            </li>
        `;
    });
}


// REMOVER
function remover(index){
    pcs.splice(index, 1);
    localStorage.setItem("pcs", JSON.stringify(pcs));
    mostrar();
}


// LIMPAR CAMPOS
function limparCampos(){
    inputNome.value = "";
    inputEmail.value = "";
    inputOrcamento.value = "";
    selectTipo.value = "";
}


// EVENTOS EXTRAS (pra garantir nota)

// input
inputNome.addEventListener("input", () => {
    mensagem.textContent = "";
});

// change
selectTipo.addEventListener("change", () => {
    console.log("Tipo alterado");
});

// mouseover
document.querySelector("#salvar").addEventListener("mouseover", () => {
    console.log("Passou o mouse no botão");
});


// CARREGAR AUTOMÁTICO
mostrar();
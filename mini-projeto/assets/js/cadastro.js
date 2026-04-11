// =============================
// LOCAL STORAGE
// =============================
let pcs = JSON.parse(localStorage.getItem("pcs")) || [];

// =============================
// FUNÇÃO PREENCHER SELECT
// =============================
function preencherSelect(selectId, lista, textoPadrao) {
    const select = document.getElementById(selectId);
    if (!select) return;

    select.innerHTML = `<option value="">${textoPadrao}</option>`;

    lista.forEach(item => {
        const option = document.createElement("option");
        option.value = item.id;
        option.textContent = `${item.nome} - R$ ${item.preco}`;
        select.appendChild(option);
    });
}

// =============================
// BUSCAR DADOS
// =============================
function buscarItem(id, lista) {
    return lista.find(p => p.id === id);
}

function buscarPreco(id, lista) {
    const item = buscarItem(id, lista);
    return item ? item.preco : 0;
}

// =============================
// CALCULAR TOTAL
// =============================
function calcularTotal() {
    const cpu = document.getElementById("cpu").value;
    const mb = document.getElementById("mb").value;
    const ram = document.getElementById("ram").value;
    const gpu = document.getElementById("gpu").value;
    const sto = document.getElementById("sto").value;
    const psu = document.getElementById("psu").value;
    const gabinete = document.getElementById("gabinete").value;
    const cooler = document.getElementById("cooler").value;

    let total = 0;

    total += buscarPreco(cpu, processadores);
    total += buscarPreco(mb, placasMae);
    total += buscarPreco(ram, memorias);
    total += buscarPreco(gpu, gpus);
    total += buscarPreco(sto, armazenamentos);
    total += buscarPreco(psu, fontes);
    total += buscarPreco(gabinete, gabinetes);
    total += buscarPreco(cooler, coolers);

    document.getElementById("total").textContent =
        `Total: R$ ${total.toLocaleString("pt-BR")}`;
}

// =============================
// INICIAR TUDO
// =============================
document.addEventListener("DOMContentLoaded", () => {
    
    // 🔥 Carregar selects iniciais
    preencherSelect("cpu", processadores, "Processador");
    preencherSelect("mb", placasMae, "Placa-mãe");
    preencherSelect("ram", memorias, "Memória RAM");
    preencherSelect("gpu", gpus, "Placa de vídeo");
    preencherSelect("sto", armazenamentos, "Armazenamento");
    preencherSelect("psu", fontes, "Fonte");
    preencherSelect("gabinete", gabinetes, "Gabinete");
    preencherSelect("cooler", coolers, "Cooler");

    // =============================
    // FILTRO POR TIPO
    // =============================
    document.getElementById("tipo").addEventListener("change", function () {
        const tipo = this.value;

        const limparTotal = () => {
            document.getElementById("total").textContent = "Total: R$ 0";
        };

        const filtrar = (lista) =>
            lista.filter(item => item.perfil && item.perfil.includes(tipo));

        if (!tipo) {
            preencherSelect("cpu", processadores, "Processador");
            preencherSelect("mb", placasMae, "Placa-mãe");
            preencherSelect("ram", memorias, "Memória RAM");
            preencherSelect("gpu", gpus, "Placa de vídeo");
            preencherSelect("sto", armazenamentos, "Armazenamento");
            preencherSelect("psu", fontes, "Fonte");
            preencherSelect("gabinete", gabinetes, "Gabinete");
            preencherSelect("cooler", coolers, "Cooler");
        } else {
            preencherSelect("cpu", filtrar(processadores), "Processador");
            preencherSelect("mb", filtrar(placasMae), "Placa-mãe");
            preencherSelect("ram", filtrar(memorias), "Memória RAM");
            preencherSelect("gpu", filtrar(gpus), "Placa de vídeo");
            preencherSelect("sto", filtrar(armazenamentos), "Armazenamento");
            preencherSelect("psu", filtrar(fontes), "Fonte");
            preencherSelect("gabinete", filtrar(gabinetes), "Gabinete");
            preencherSelect("cooler", filtrar(coolers), "Cooler");
        }
        limparTotal();
    });

    // =============================
    // EVENTOS DE MUDANÇA (DENTRO DO DOMContentLoaded)
    // =============================
    const selects = ["cpu", "mb", "ram", "gpu", "sto", "psu", "gabinete", "cooler"];
    selects.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener("change", calcularTotal);
    });

    // =============================
    // SUBMIT (DENTRO DO DOMContentLoaded)
    // =============================
    document.getElementById("form").addEventListener("submit", function (e) {
        e.preventDefault();

        const pc = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            orcamento: document.getElementById("orcamento").value,
            tipo: document.getElementById("tipo").value,
            cpu: document.getElementById("cpu").value,
            mb: document.getElementById("mb").value,
            ram: document.getElementById("ram").value,
            gpu: document.getElementById("gpu").value,
            sto: document.getElementById("sto").value,
            psu: document.getElementById("psu").value,
            gabinete: document.getElementById("gabinete").value,
            cooler: document.getElementById("cooler").value
        };

        pcs.push(pc);
        localStorage.setItem("pcs", JSON.stringify(pcs));

        window.location.href = "lista.html";
    });
});
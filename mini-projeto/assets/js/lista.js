// =============================
// FUNÇÕES DE BUSCA (Auxiliares)
// =============================
function buscarItemPorId(id, lista) {
    return lista.find(item => item.id === id);
}

// =============================
// RENDERIZAR LISTA
// =============================
// Substitua a função carregarLista no seu lista.js
function carregarLista() {
    const listaUl = document.getElementById("lista");
    const pcsSalvos = JSON.parse(localStorage.getItem("pcs")) || [];

    listaUl.innerHTML = "";

    if (pcsSalvos.length === 0) {
        listaUl.innerHTML = "<p style='color: #666; text-align: center; margin-top: 20px;'>Nenhum PC montado ainda.</p>";
        return;
    }

    pcsSalvos.forEach((pc, index) => {
        // Busca os objetos completos
        const pCpu = buscarItemPorId(pc.cpu, processadores);
        const pMb = buscarItemPorId(pc.mb, placasMae);
        const pGpu = buscarItemPorId(pc.gpu, gpus);
        const pRam = buscarItemPorId(pc.ram, memorias);
        const pSto = buscarItemPorId(pc.sto, armazenamentos);
        const pPsu = buscarItemPorId(pc.psu, fontes);
        const pCase = buscarItemPorId(pc.case, gabinetes);

        // Soma total
        const total = (pCpu?.preco || 0) + (pMb?.preco || 0) + (pGpu?.preco || 0) + 
                      (pRam?.preco || 0) + (pSto?.preco || 0) + (pPsu?.preco || 0) + (pCase?.preco || 0);

        const li = document.createElement("li");
        
        li.innerHTML = `
            <div class="pc-card-content">
                <div class="pc-foto">
                    <img src="${pCase?.img ? '../assets' + pCase.img.substring(2) : '../assets/img/placeholder.png'}" alt="Gabinete" onerror="this.src='https://placehold.co/100x100?text=Erro+no+Nome'">    
                </div>
                
                <div class="pc-info-main">
                    <div class="pc-header">
                        <span class="pc-nome">💻 PC de ${pc.nome || 'Usuário'}</span>
                        <span class="pc-badge">${pc.tipo || 'Personalizado'}</span>
                    </div>
                    
                    <div class="pc-detalhes">
                        <p><span>Processador:</span> ${pCpu ? pCpu.nome : '---'}</p>
                        <p><span>Placa de Vídeo:</span> ${pGpu ? pGpu.nome : 'Integrada'}</p>
                        <p><span>Memória:</span> ${pRam ? pRam.nome : '---'}</p>
                    </div>

                    <div class="pc-footer">
                        <div class="pc-preco-box">
                            <span class="label">Total Estimado</span>
                            <span class="valor">R$ ${total.toLocaleString('pt-BR')}</span>
                        </div>
                        <button class="btn-excluir" onclick="removerPc(${index})">🗑️ Excluir</button>
                    </div>
                </div>
            </div>
        `;
        listaUl.appendChild(li);
    });
}

// =============================
// FUNÇÃO PARA REMOVER
// =============================
window.removerPc = function(index) {
    let pcsSalvos = JSON.parse(localStorage.getItem("pcs")) || [];
    
    // Remove o item do array pelo index
    pcsSalvos.splice(index, 1);
    
    // Salva de volta no LocalStorage
    localStorage.setItem("pcs", JSON.stringify(pcsSalvos));
    
    // Atualiza a tela
    carregarLista();
}

// Inicia ao carregar a página
document.addEventListener("DOMContentLoaded", carregarLista);
// =============================
// FUNÇÕES DE BUSCA (Auxiliares)
// =============================
function buscarItemPorId(id, lista) {
    if (!id || !lista) return null;
    return lista.find(item => item.id === id);
}

// =============================
// RENDERIZAR LISTA
// =============================
function carregarLista() {
    const listaUl = document.getElementById("lista");
    const pcsSalvos = JSON.parse(localStorage.getItem("pcs")) || [];

    listaUl.innerHTML = "";

    if (pcsSalvos.length === 0) {
        listaUl.innerHTML = "<p style='color: #666; text-align: center; margin-top: 20px;'>Nenhum PC montado ainda.</p>";
        return;
    }

    pcsSalvos.forEach((pc, index) => {
        const pCpu = buscarItemPorId(pc.cpu, processadores);
        const pGpu = buscarItemPorId(pc.gpu, gpus);
        const pRam = buscarItemPorId(pc.ram, memorias);
        const pCase = buscarItemPorId(pc.case, gabinetes);

        const total = (pCpu?.preco || 0) + (pGpu?.preco || 0) + (pRam?.preco || 0) + (pCase?.preco || 0);

        // --- LÓGICA DE IMAGEM POR PERFIL ---
        let imgFinal = "";
        const tipoPc = pc.tipo ? pc.tipo.toLowerCase() : "personalizado";

        if (tipoPc.includes("escritorio")) {
            imgFinal = "https://cdn.awsli.com.br/2547/2547358/produto/248692747/gabinete-slim-k-mex-gm-02ck-preto-com-fonte--1--45h6eo3k9p.png";
        } 
        else if (tipoPc.includes("gamer")) {
            imgFinal = "https://images.kabum.com.br/produtos/fotos/sync_mirakl/715914/xlarge/PC-Gamer-Ryzen-7-5700x-32gb-Ddr4-3200mhz-RTX-4060-8GB-SSD-1TB-Nvme-Branco-Full-White-Premium-Water-Cooler-RGB-E-Cabos-Sleeved_1739825434.png";
        } 
        else if (tipoPc.includes("edicao")) {
            imgFinal = "https://images.kabum.com.br/produtos/fotos/sync_mirakl/998933/xlarge/PC-Gamer-Asus-Tuf-Amd-Ryzen-7-9800x3d-RTX-5070-Ti-Asus-Tuf-B650m-e-Wifi7-32gb-Ddr5-1TB-Nvme-Fonte-850w-Water-Cooler-360mm-RGB_1770930114.jpg";
        } 
        else {
            // Caso seja "Personalizado" ou qualquer outro
            imgFinal = "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/a/-/a-pc-narok-preto-gpu-m-002_91.jpg";
        }

        const li = document.createElement("li");
        li.innerHTML = `
            <div class="pc-card-content">
                <div class="pc-foto">
                    <img src="${imgFinal}" 
                         alt="PC ${pc.tipo}" 
                         onerror="this.src='https://placehold.co/100x100?text=Erro+Imagem'">    
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
    if (confirm("Deseja realmente excluir este PC?")) {
        let pcsSalvos = JSON.parse(localStorage.getItem("pcs")) || [];
        pcsSalvos.splice(index, 1);
        localStorage.setItem("pcs", JSON.stringify(pcsSalvos));
        carregarLista();
    }
}

document.addEventListener("DOMContentLoaded", carregarLista);
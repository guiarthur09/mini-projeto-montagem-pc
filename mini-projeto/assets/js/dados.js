const processadores = [
  { id: "cpu01", nome: "Intel Core i3-12100F", socket: "LGA1700", tdp: 58, ddr: "DDR4", perfil: ["escritorio"], preco: 659, img: "../assets/img/processadores/Intel Core i3-12100F.png" },
  { id: "cpu02", nome: "AMD Ryzen 3 5300G", socket: "AM4", tdp: 65, ddr: "DDR4", perfil: ["escritorio"], preco: 800, img: "../assets/img/processadores/AMD Ryzen 3 5300G.png" },
  { id: "cpu03", nome: "AMD Ryzen 5 5500", socket: "AM4", tdp: 65, ddr: "DDR4", perfil: ["escritorio", "gamer"], preco: 650, img: "../assets/img/processadores/AMD Ryzen 5 5500.png" },
  { id: "cpu04", nome: "Intel Core i5-13400F", socket: "LGA1700", tdp: 65, ddr: "DDR4", perfil: ["gamer"], preco: 950, img: "../assets/img/processadores/Intel Core i5-13400F.png" },
  { id: "cpu05", nome: "AMD Ryzen 5 5600X", socket: "AM4", tdp: 65, ddr: "DDR4", perfil: ["gamer"], preco: 1100, img: "../assets/img/processadores/AMD Ryzen 5 5600X.png" },
  { id: "cpu06", nome: "AMD Ryzen 5 7600", socket: "AM5", tdp: 65, ddr: "DDR5", perfil: ["gamer"], preco: 1400, img: "../assets/img/processadores/AMD Ryzen 5 7600.png" },
  { id: "cpu07", nome: "Intel Core i5-14600K", socket: "LGA1700", tdp: 125, ddr: "DDR5", perfil: ["gamer"], preco: 1700, img: "../assets/img/processadores/Intel Core i5-14600K.png" },
  { id: "cpu08", nome: "AMD Ryzen 7 5700X", socket: "AM4", tdp: 65, ddr: "DDR4", perfil: ["gamer", "edicao"], preco: 1400, img: "../assets/img/processadores/AMD Ryzen 7 5700X.png" },
  { id: "cpu09", nome: "Intel Core i7-14700K", socket: "LGA1700", tdp: 125, ddr: "DDR5", perfil: ["edicao"], preco: 2200, img: "../assets/img/processadores/Intel Core i7-14700K.png" },
  { id: "cpu10", nome: "AMD Ryzen 7 9700X", socket: "AM5", tdp: 65, ddr: "DDR5", perfil: ["edicao"], preco: 2400, img: "../assets/img/processadores/AMD Ryzen 7 9700X.png" },
  { id: "cpu11", nome: "AMD Ryzen 9 7900X", socket: "AM5", tdp: 170, ddr: "DDR5", perfil: ["edicao"], preco: 2800, img: "../assets/img/processadores/AMD Ryzen 9 7900X.png" },
  { id: "cpu12", nome: "Intel Core i9-14900K", socket: "LGA1700", tdp: 125, ddr: "DDR5", perfil: ["edicao"], preco: 3500, img: "../assets/img/processadores/Intel Core i9-14900K.png" },
  { id: "cpu13", nome: "AMD Ryzen 9 9950X", socket: "AM5", tdp: 170, ddr: "DDR5", perfil: ["edicao"], preco: 4800, img: "../assets/img/processadores/AMD Ryzen 9 9950X.png" },
];

const placasMae = [
  { id: "mb01", nome: "ASRock B450M Steel Legend", socket: "AM4", ddr: "DDR4", perfil: ["escritorio"], preco: 480, img: "../assets/img/placas-maes/ASRock B450M Steel Legend.png" },
  { id: "mb02", nome: "ASUS Prime B660M-K", socket: "LGA1700", ddr: "DDR4", perfil: ["escritorio"], preco: 550, img: "../assets/img/placas-maes/ASUS Prime B660M-K.png" },
  { id: "mb03", nome: "MSI PRO B550M-VC", socket: "AM4", ddr: "DDR4", perfil: ["escritorio", "gamer"], preco: 600, img: "../assets/img/placas-maes/MSI PRO B550M-VC.png" },
  { id: "mb04", nome: "Gigabyte B760M DS3H", socket: "LGA1700", ddr: "DDR5", perfil: ["gamer"], preco: 750, img: "../assets/img/placas-maes/Gigabyte B760M DS3H.png" },
  { id: "mb05", nome: "ASUS TUF B650M-Plus", socket: "AM5", ddr: "DDR5", perfil: ["gamer"], preco: 950, img: "../assets/img/placas-maes/ASUS TUF B650M-Plus.png" },
  { id: "mb06", nome: "MSI MAG B650 Tomahawk", socket: "AM5", ddr: "DDR5", perfil: ["gamer", "edicao"], preco: 1200, img: "../assets/img/placas-maes/MSI MAG B650 Tomahawk.png" },
  { id: "mb07", nome: "ASUS ROG Strix B760-F", socket: "LGA1700", ddr: "DDR5", perfil: ["edicao"], preco: 1500, img: "../assets/img/placas-maes/ASUS ROG Strix B760-F.png" },
  { id: "mb08", nome: "ASUS ROG Strix X670E", socket: "AM5", ddr: "DDR5", perfil: ["edicao"], preco: 2200, img: "../assets/img/placas-maes/ASUS ROG Strix X670E.png" },
  { id: "mb09", nome: "MSI MEG Z790 ACE", socket: "LGA1700", ddr: "DDR5", perfil: ["edicao"], preco: 3000, img: "../assets/img/placas-maes/MSI MEG Z790 ACE.png" },
];

const memorias = [
  { id: "ram01", nome: "8GB DDR4 2666MHz", tipo: "DDR4", capacidade: 8, perfil: ["escritorio"], preco: 120, img: "../assets/img/memorias/8GB DDR4 2666MHz.png" },
  { id: "ram02", nome: "16GB DDR4 3200MHz", tipo: "DDR4", capacidade: 16, perfil: ["escritorio", "gamer"], preco: 200, img: "../assets/img/memorias/16GB DDR4 3200MHz.png" },
  { id: "ram03", nome: "32GB DDR4 3600MHz", tipo: "DDR4", capacidade: 32, perfil: ["gamer", "edicao"], preco: 350, img: "../assets/img/memorias/32GB DDR4 3600MHz.png" },
  { id: "ram04", nome: "16GB DDR5 4800MHz", tipo: "DDR5", capacidade: 16, perfil: ["gamer"], preco: 320, img: "../assets/img/memorias/16GB DDR5 4800MHz.png" },
  { id: "ram05", nome: "32GB DDR5 5600MHz", tipo: "DDR5", capacidade: 32, perfil: ["edicao"], preco: 580, img: "../assets/img/memorias/32GB DDR5 5600MHz.png" },
  { id: "ram06", nome: "64GB DDR5 5600MHz", tipo: "DDR5", capacidade: 64, perfil: ["edicao"], preco: 1100, img: "../assets/img/memorias/64GB DDR5 5600MHz.png" },
];

const gpus = [
  { id: "gpu01", nome: "NVIDIA GTX 1650", vram: 4, tdp: 75, perfil: ["escritorio"], preco: 800, img: "../assets/img/gpus/NVIDIA GTX 1650.png" },
  { id: "gpu02", nome: "AMD RX 6600", vram: 8, tdp: 132, perfil: ["gamer"], preco: 1200, img: "../assets/img/gpus/AMD RX 6600.png" },
  { id: "gpu03", nome: "NVIDIA RTX 3060", vram: 12, tdp: 170, perfil: ["gamer"], preco: 1600, img: "../assets/img/gpus/NVIDIA RTX 3060.png" },
  { id: "gpu04", nome: "AMD RX 6700 XT", vram: 12, tdp: 230, perfil: ["gamer"], preco: 1900, img: "../assets/img/gpus/AMD RX 6700 XT.png" },
  { id: "gpu05", nome: "NVIDIA RTX 3070", vram: 8, tdp: 220, perfil: ["gamer"], preco: 2200, img: "../assets/img/gpus/NVIDIA RTX 3070.png" },
  { id: "gpu06", nome: "NVIDIA RTX 4060 Ti", vram: 16, tdp: 165, perfil: ["gamer", "edicao"], preco: 2800, img: "../assets/img/gpus/NVIDIA RTX 4060 Ti.png" },
  { id: "gpu07", nome: "NVIDIA RTX 4070", vram: 12, tdp: 285, perfil: ["edicao"], preco: 3500, img: "../assets/img/gpus/NVIDIA RTX 4070.png" },
  { id: "gpu08", nome: "AMD RX 7900 XT", vram: 20, tdp: 315, perfil: ["edicao"], preco: 3800, img: "../assets/img/gpus/AMD RX 7900 XT.png" },
  { id: "gpu09", nome: "NVIDIA RTX 4080", vram: 16, tdp: 320, perfil: ["edicao"], preco: 5500, img: "../assets/img/gpus/NVIDIA RTX 4080.png" },
];

const armazenamentos = [
  { id: "sto01", nome: "SSD 240GB SATA", interface: "SATA", capacidade: 240, perfil: ["escritorio"], preco: 120, img: "../assets/img/armazenamento/ssd sata.png" },
  { id: "sto02", nome: "SSD 480GB SATA", interface: "SATA", capacidade: 480, perfil: ["escritorio"], preco: 180, img: "../assets/img/armazenamento/ssd sata.png" },
  { id: "sto03", nome: "SSD 1TB SATA", interface: "SATA", capacidade: 1000, perfil: ["escritorio", "gamer"], preco: 280, img: "../assets/img/armazenamento/ssd sata.png" },
  { id: "sto04", nome: "SSD NVMe 500GB M.2", interface: "NVMe", capacidade: 500, perfil: ["gamer"], preco: 220, img: "../assets/img/armazenamento/nvme 500gb.png" },
  { id: "sto05", nome: "SSD NVMe 1TB M.2", interface: "NVMe", capacidade: 1000, perfil: ["gamer"], preco: 380, img: "../assets/img/armazenamento/nvme 1tb.png" },
  { id: "sto06", nome: "SSD NVMe 2TB M.2", interface: "NVMe", capacidade: 2000, perfil: ["edicao"], preco: 700, img: "../assets/img/armazenamento/nvme 2tb.png" },
  { id: "sto07", nome: "HD 1TB 7200RPM", interface: "SATA", capacidade: 1000, perfil: ["escritorio"], preco: 220, img: "../assets/img/armazenamento/hd 1tb.png" },
  { id: "sto08", nome: "HD 2TB 7200RPM", interface: "SATA", capacidade: 2000, perfil: ["edicao"], preco: 320, img: "../assets/img/armazenamento/hd 2tb.png" },
  { id: "sto09", nome: "HD 4TB 7200RPM", interface: "SATA", capacidade: 4000, perfil: ["edicao"], preco: 550, img: "../assets/img/armazenamento/hd 4tb.png" },
];

const fontes = [
  { id: "psu01", nome: "Corsair CV450", watts: 400, certificacao: "80 Plus White", perfil: ["escritorio"], preco: 280, img: "../assets/img/fontes/Corsair CV450.png" },
  { id: "psu02", nome: "EVGA 500W", watts: 500, certificacao: "80 Plus Bronze", perfil: ["escritorio"], preco: 350, img: "../assets/img/fontes/EVGA 500W.png" },
  { id: "psu03", nome: "Corsair TX550M", watts: 550, certificacao: "80 Plus Gold", perfil: ["gamer"], preco: 480, img: "../assets/img/fontes/Corsair TX550M.png" },
  { id: "psu04", nome: "Corsair RM650x", watts: 650, certificacao: "80 Plus Gold", perfil: ["gamer"], preco: 580, img: "../assets/img/fontes/Corsair RM650x.png" },
  { id: "psu05", nome: "EVGA SuperNOVA 750", watts: 750, certificacao: "80 Plus Gold", perfil: ["gamer", "edicao"], preco: 680, img: "../assets/img/fontes/EVGA SuperNOVA 750.png" },
  { id: "psu06", nome: "Corsair RM850x", watts: 850, certificacao: "80 Plus Gold", perfil: ["edicao"], preco: 780, img: "../assets/img/fontes/Corsair RM850x.png" },
  { id: "psu07", nome: "be quiet! Dark Power 1000W", watts: 1000, certificacao: "80 Plus Platinum", perfil: ["edicao"], preco: 1200, img: "../assets/img/fontes/be quiet! Dark Power 1000W.png" },
];

const gabinetes = [
  { id: "case01", nome: "teste", formato: "mATX", torre: "Mini", perfil: ["escritorio"], preco: 280, img: "/assets/img/gabinetes/teste.png" },
  { id: "case02", nome: "Cougar MX330", formato: "ATX", torre: "Mid", perfil: ["escritorio", "gamer"], preco: 320, img: "../assets/img/gabinetes/Cougar MX330.png" },
  { id: "case03", nome: "NZXT H510", formato: "ATX", torre: "Mid", perfil: ["gamer"], preco: 550, img: "../assets/img/gabinetes/NZXT H510.png" },
  { id: "case04", nome: "Lian Li Lancool 215", formato: "ATX", torre: "Mid", perfil: ["gamer"], preco: 650, img: "../assets/img/gabinetes/Lian Li Lancool 215.png" },
  { id: "case05", nome: "Lian Li O11 Dynamic", formato: "ATX", torre: "Full", perfil: ["edicao"], preco: 900, img: "../assets/img/gabinetes/Lian Li O11 Dynamic.png" },
  { id: "case06", nome: "Fractal Design Meshify 2", formato: "ATX", torre: "Full", perfil: ["edicao"], preco: 950, img: "../assets/img/gabinetes/Fractal Design Meshify 2.png" },
];

const coolers = [
  { id: "cool01", nome: "Cooler Box (incluso)", tipo: "Air", tdpMax: 65, perfil: ["escritorio"], preco: 0, img: "../assets/img/coolers/placeholder.png" },
  { id: "cool02", nome: "DeepCool AK400", tipo: "Air", tdpMax: 220, perfil: ["gamer"], preco: 180, img: "../assets/img/coolers/deep cool ak400.png" },
  { id: "cool03", nome: "Noctua NH-D15", tipo: "Air", tdpMax: 250, perfil: ["gamer", "edicao"], preco: 550, img: "../assets/img/coolers/Noctua NH-D15.png" },
  { id: "cool04", nome: "Water Cooler 240mm", tipo: "Liquido", tdpMax: 250, perfil: ["gamer"], preco: 380, img: "../assets/img/coolers/water cooler 240mm.png" },
  { id: "cool05", nome: "Water Cooler 360mm", tipo: "Liquido", tdpMax: 350, perfil: ["edicao"], preco: 580, img: "../assets/img/coolers/water cooler 360mm.png" },
];
  
  const presets = {
  
    // ─── ESCRITÓRIO ───────────────────────────────────────────────
    escritorio_basico: {
      label: "Escritório Básico",
      categoria: "escritorio",
      descricao: "Navegar, editar documentos, planilhas e videochamadas sem travar.",
      precoEstimado: 2200,
      cpu: "cpu01",   // Intel Core i3-12100F
      mb: "mb02",    // ASUS Prime B660M-K DDR4
      ram: "ram01",  // 8GB DDR4 2666MHz
      gpu: "gpu01",  // GTX 1650
      sto: "sto02",  // SSD 480GB SATA
      psu: "psu01",  // Corsair CV450
      case: "case01", // Cooler Master Q300L
      cooler: "cool01", // Box
    },
  
    escritorio_intermediario: {
      label: "Escritório Intermediário",
      categoria: "escritorio",
      descricao: "Multitarefas pesadas, várias abas abertas, reuniões e ERP.",
      precoEstimado: 3500,
      cpu: "cpu03",   // AMD Ryzen 5 5500
      mb: "mb03",    // MSI PRO B550M-VC DDR4
      ram: "ram02",  // 16GB DDR4 3200MHz
      gpu: "gpu01",  // GTX 1650
      sto: "sto03",  // SSD 1TB SATA
      psu: "psu02",  // EVGA 500W
      case: "case02", // Cougar MX330
      cooler: "cool01", // Box
    },
  
    escritorio_top: {
      label: "Escritório Top",
      categoria: "escritorio",
      descricao: "Workstation corporativa. Roda qualquer software de gestão ou contabilidade.",
      precoEstimado: 5500,
      cpu: "cpu04",   // Intel Core i5-13400F
      mb: "mb04",    // Gigabyte B760M DS3H DDR5
      ram: "ram04",  // 16GB DDR5 4800MHz
      gpu: "gpu01",  // GTX 1650
      sto: "sto05",  // SSD NVMe 1TB M.2
      psu: "psu03",  // Corsair TX550M
      case: "case02", // Cougar MX330
      cooler: "cool02", // DeepCool AK400
    },
  
    // ─── GAMER ───────────────────────────────────────────────────
    gamer_basico: {
      label: "Gamer Básico",
      categoria: "gamer",
      descricao: "1080p em jogos modernos com configurações médias. Excelente custo-benefício.",
      precoEstimado: 4500,
      cpu: "cpu05",   // AMD Ryzen 5 5600X
      mb: "mb03",    // MSI PRO B550M-VC DDR4
      ram: "ram02",  // 16GB DDR4 3200MHz
      gpu: "gpu02",  // AMD RX 6600
      sto: "sto05",  // SSD NVMe 1TB M.2
      psu: "psu03",  // Corsair TX550M
      case: "case02", // Cougar MX330
      cooler: "cool02", // DeepCool AK400
    },
  
    gamer_intermediario: {
      label: "Gamer Intermediário",
      categoria: "gamer",
      descricao: "1080p ultra ou 1440p alto. Roda qualquer jogo atual sem engasgos.",
      precoEstimado: 7500,
      cpu: "cpu06",   // AMD Ryzen 5 7600
      mb: "mb05",    // ASUS TUF B650M-Plus DDR5
      ram: "ram04",  // 16GB DDR5 4800MHz
      gpu: "gpu03",  // NVIDIA RTX 3060
      sto: "sto05",  // SSD NVMe 1TB M.2
      psu: "psu04",  // Corsair RM650x
      case: "case03", // NZXT H510
      cooler: "cool04", // Water Cooler 240mm
    },
  
    gamer_top: {
      label: "Gamer Top",
      categoria: "gamer",
      descricao: "1440p ultra ou 4K. Setup de streamer. Nenhum jogo vai te segurar.",
      precoEstimado: 12000,
      cpu: "cpu07",   // Intel Core i5-14600K
      mb: "mb07",    // ASUS ROG Strix B760-F DDR5
      ram: "ram05",  // 32GB DDR5 5600MHz
      gpu: "gpu05",  // NVIDIA RTX 3070
      sto: "sto05",  // SSD NVMe 1TB M.2
      psu: "psu05",  // EVGA SuperNOVA 750
      case: "case04", // Lian Li Lancool 215
      cooler: "cool04", // Water Cooler 240mm
    },
  
    // ─── EDIÇÃO ──────────────────────────────────────────────────
    edicao_basico: {
      label: "Edição Básico",
      categoria: "edicao",
      descricao: "Edição de vídeo 1080p no Premiere ou DaVinci. Fotografia no Lightroom.",
      precoEstimado: 8000,
      cpu: "cpu08",   // AMD Ryzen 7 5700X
      mb: "mb03",    // MSI PRO B550M-VC DDR4
      ram: "ram03",  // 32GB DDR4 3600MHz
      gpu: "gpu06",  // NVIDIA RTX 4060 Ti
      sto: "sto05",  // SSD NVMe 1TB M.2
      psu: "psu05",  // EVGA SuperNOVA 750
      case: "case04", // Lian Li Lancool 215
      cooler: "cool03", // Noctua NH-D15
    },
  
    edicao_intermediario: {
      label: "Edição Intermediário",
      categoria: "edicao",
      descricao: "Edição 4K fluida, motion graphics, renderização 3D e color grading.",
      precoEstimado: 13000,
      cpu: "cpu09",   // Intel Core i7-14700K
      mb: "mb07",    // ASUS ROG Strix B760-F DDR5
      ram: "ram05",  // 32GB DDR5 5600MHz
      gpu: "gpu07",  // NVIDIA RTX 4070
      sto: "sto06",  // SSD NVMe 2TB M.2
      psu: "psu06",  // Corsair RM850x
      case: "case05", // Lian Li O11 Dynamic
      cooler: "cool05", // Water Cooler 360mm
    },
  
    edicao_top: {
      label: "Edição Top",
      categoria: "edicao",
      descricao: "Estúdio profissional. VFX, renderização pesada, modelagem 3D e streaming simultâneo.",
      precoEstimado: 22000,
      cpu: "cpu11",   // AMD Ryzen 9 7900X
      mb: "mb08",    // ASUS ROG Strix X670E DDR5
      ram: "ram06",  // 64GB DDR5 5600MHz
      gpu: "gpu08",  // AMD RX 7900 XT
      sto: "sto06",  // SSD NVMe 2TB M.2
      psu: "psu07",  // be quiet! Dark Power 1000W
      case: "case06", // Fractal Design Meshify 2
      cooler: "cool05", // Water Cooler 360mm
    },
  };
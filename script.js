const elementsData = [
    {
        number: 31,
        symbol: "Ga",
        name: "Gal·li",
        group: 13,
        period: 4,
        bloc: "p",
        chemicalSeries: "Metall post-transició",
        electronConfig: "[Ar] 3d¹⁰ 4s² 4p¹",
        atomicMass: "69.723 u",
        state: "Sòlid",
        meltingPoint: "29.76 °C",
        boilingPoint: "2203 °C",
        density: "5.91 g/cm³ / 6.095 g/cm³ (líquid)",
        color: "Platejat amb tonalitat blavosa",
        hardness: "1.5",
        electronegativity: "1.6-1.81",
        oxidationStates: "+3",
        atomicRadius: "135 pm",
        electricalConductivity: "7,1 × 10⁶ S/m",
        discovery: "1875 - Paul Émile Lecoq de Boisbaudran (França)",
        originName: "Del llatí Gallia, que significa França",
        applications: [
            "Semiconductors (LEDs, làsers, circuits integrats)",
            "Pantalles (Blu-ray, telèfons mòbils, pantalles tàctils)",
            "Aliatges (galinstan per a termòmetres)"
        ],
        curiosities: [
            "Es fon a la mà (29.76 °C)",
            "S'expandeix quan es solidifica",
            "Pot romandre líquid per sota del seu punt de fusió"
        ],
        categories: ["tecnologia", "industrial"]
    },
    {
        number: 21,
        symbol: "Sc",
        name: "Escandi",
        group: 3,
        period: 4,
        bloc: "d",
        chemicalSeries: "Metall de transició",
        electronConfig: "[Ar] 3d¹ 4s²",
        atomicMass: "44.9559 u",
        state: "Sòlid",
        meltingPoint: "1541 °C",
        boilingPoint: "2830 °C",
        density: "2.99 g/cm³",
        color: "Argentat, groguenc en oxidar-se",
        hardness: "No trobat",
        electronegativity: "≈1.36",
        oxidationStates: "+3",
        atomicRadius: "162 pm",
        electricalConductivity: "1.5–1.8×10⁶ S/m",
        discovery: "1879 - Lars F. Nilson (Suècia)",
        originName: "Del llatí Scandia, en referència a Escandinàvia",
        applications: [
            "Aliatges amb alumini (avions, bicicletes)",
            "Llums de sals metàl·liques",
            "Cèl·lules de combustible sòlides",
            "Traçadors radioactius"
        ],
        curiosities: [
            "Paramagnètic des de 0 K fins al punt de fusió",
            "Superconductor sota pressió (rècord en elements purs)",
            "Apareix en més de 800 espècies minerals diferents"
        ],
        categories: ["tecnologia", "industrial"]
    },
    {
        number: 43,
        symbol: "Tc",
        name: "Tecneci",
        group: 7,
        period: 5,
        bloc: "d",
        chemicalSeries: "Metall de transició",
        electronConfig: "[Kr] 4d⁵ 5s²",
        atomicMass: "97–98.9 u",
        state: "Sòlid",
        meltingPoint: "2157 °C",
        boilingPoint: "4262 °C",
        density: "11,0–11.5 g/cm³",
        color: "Platejat/gris metal·litzat",
        hardness: "No trobat",
        electronegativity: "1.9",
        oxidationStates: "+4, +7",
        atomicRadius: "135 pm",
        electricalConductivity: "~5×10⁶ S/m",
        discovery: "1937 - Carlo Perrier i Emilio Segrè (Itàlia)",
        originName: "Del grec technêtos, 'artificial'",
        applications: [
            "Medicina nuclear (diagnòstic per imatge)",
            "Catalitzador anticorrosiu per a l'acer",
            "Investigació en superconductivitat"
        ],
        curiosities: [
            "Primer element artificial amb Z < 83",
            "No es troba a la naturalesa",
            "Superconductor sota 7.46 K"
        ],
        categories: ["medicina", "sintetic", "tecnologia"]
    },
    {
        number: 67,
        symbol: "Ho",
        name: "Holmi",
        group: 3,
        period: 6,
        bloc: "f",
        chemicalSeries: "Lantànid",
        electronConfig: "[Xe] 4f¹¹ 6s²",
        atomicMass: "164.9303 u",
        state: "Sòlid",
        meltingPoint: "1474 °C",
        boilingPoint: "2695 °C",
        density: "8,80 g/cm³",
        color: "Blanc platejat",
        hardness: "~1.2",
        electronegativity: "1.23",
        oxidationStates: "+3",
        atomicRadius: "176 pm",
        electricalConductivity: "1.24 × 10⁶ S/m",
        discovery: "1878 - Marc Delafontaine, Jacques-Louis Soret i Per Teodor Cleve",
        originName: "Del llatí Holmia (Estocolm)",
        applications: [
            "Làsers mèdics (cirurgia ocular, càlculs renals)",
            "Imants superconductors (ressonàncies magnètiques)",
            "Reactors nuclears (absorbidor de neutrons)",
            "Colorants de vidre"
        ],
        curiosities: [
            "És l'element més paramagnètic conegut",
            "Més abundant que l'argent o l'or a l'escorça",
            "S'usa per calibrar espectròmetres"
        ],
        categories: ["medicina", "tecnologia", "industrial"]
    },
    {
        number: 39,
        symbol: "Y",
        name: "Itri",
        group: 3,
        period: 5,
        bloc: "d",
        chemicalSeries: "Metall de transició",
        electronConfig: "[Kr] 4d¹ 5s²",
        atomicMass: "88.9058 u",
        state: "Sòlid",
        meltingPoint: "1526 °C",
        boilingPoint: "3345 °C",
        density: "4.47 g/cm³",
        color: "Blanc platejat",
        hardness: "~2.5",
        electronegativity: "1.22",
        oxidationStates: "+3",
        atomicRadius: "180 pm",
        electricalConductivity: "1.66 × 10⁶ S/m",
        discovery: "1794 - Johan Gadolin",
        originName: "De Ytterby (Suècia)",
        applications: [
            "Superconductors d'alta temperatura (trens maglev)",
            "LEDs i pantalles (fòsfors vermells)",
            "Vidres i ceràmiques resistents",
            "Radioteràpia (Y-90 per a càncer)"
        ],
        curiosities: [
            "Descobert a Ytterby (Suècia), com l'erb, terbi i iterbi",
            "Present en els euro bitllets (banda UV)",
            "Usat en motors d'avió per a revestiments"
        ],
        categories: ["tecnologia", "medicina", "industrial"]
    },
    {
        number: 47,
        symbol: "Ag",
        name: "Plata",
        group: 11,
        period: 5,
        bloc: "d",
        chemicalSeries: "Metall de transició",
        electronConfig: "[Kr] 4d¹⁰ 5s¹",
        atomicMass: "107.868 u",
        state: "Sòlid",
        meltingPoint: "961.78 °C",
        boilingPoint: "2162 °C",
        density: "10.49 g/cm³",
        color: "Blanc metàl·lic",
        hardness: "2.5",
        electronegativity: "1.23",
        oxidationStates: "+1",
        atomicRadius: "211 pm",
        electricalConductivity: "6.30 × 10⁷ S/m",
        discovery: "Antiguitat (3000 a.C.)",
        originName: "Del llatí argentum",
        applications: [
            "Electrònica (contactes elèctrics)",
            "Medicina (nanopartícules antibacterianes)",
            "Energia solar (panells solars)",
            "Fotografia (halur de plata)"
        ],
        curiosities: [
            "Millor conductivitat elèctrica de tots els elements",
            "Usada com a antibiòtic des de l'època romana",
            "13.540 tones usades en el Projecte Manhattan"
        ],
        categories: ["tecnologia", "medicina", "industrial"]
    },
    {
        number: 58,
        symbol: "Ce",
        name: "Ceri",
        group: 3,
        period: 6,
        bloc: "f",
        chemicalSeries: "Lantànid",
        electronConfig: "[Xe] 4f¹ 5d¹ 6s²",
        atomicMass: "140.116 u",
        state: "Sòlid",
        meltingPoint: "795 °C",
        boilingPoint: "3443 °C",
        density: "6.77 g/cm³",
        color: "Gris platejat",
        hardness: "2.5",
        electronegativity: "1.12",
        oxidationStates: "+3, +4",
        atomicRadius: "182 pm",
        electricalConductivity: "1.4×10⁶ S/m",
        discovery: "1803 - Jöns Jacob Berzelius i Wilhelm Hisinger",
        originName: "Del planeta nan Ceres",
        applications: [
            "Convertidors catalítics (reducció d'emissions)",
            "Puliment de vidres (lentilles òptiques)",
            "Aliatges per a motors",
            "Pigments ceràmics"
        ],
        curiosities: [
            "Lantànid més abundant",
            "Present a les pedres d'encenedor",
            "Usat en màscares antigàs a la WWII"
        ],
        categories: ["industrial", "tecnologia"]
    },
    {
        number: 45,
        symbol: "Rh",
        name: "Rodi",
        group: 9,
        period: 5,
        bloc: "d",
        chemicalSeries: "Metall de transició",
        electronConfig: "[Kr] 4d⁸ 5s¹",
        atomicMass: "102.905 u",
        state: "Sòlid",
        meltingPoint: "1964 °C",
        boilingPoint: "3695 °C",
        density: "12.41 g/cm³",
        color: "Blanc platejat",
        hardness: "6.0",
        electronegativity: "2.28",
        oxidationStates: "+3",
        atomicRadius: "134 pm",
        electricalConductivity: "2.3×10⁷ S/m",
        discovery: "1803 - William Hyde Wollaston",
        originName: "Del grec 'rhodon' (rosa)",
        applications: [
            "Catalitzadors automotius",
            "Joieria de luxe (revestiment)",
            "Termoparells (temperatures extremes)",
            "Producció d'àcid nítric"
        ],
        curiosities: [
            "Un dels metalls més cars (més que l'or)",
            "Usat en detectors de cocaïna",
            "Altament reflectiu en miralls especials"
        ],
        categories: ["industrial", "tecnologia"]
    },
    {
        number: 76,
        symbol: "Os",
        name: "Osmi",
        group: 8,
        period: 6,
        bloc: "d",
        chemicalSeries: "Metall de transició",
        electronConfig: "[Xe] 4f¹⁴ 5d⁶ 6s²",
        atomicMass: "190.23 u",
        state: "Sòlid",
        meltingPoint: "3033 °C",
        boilingPoint: "5012 °C",
        density: "22.59 g/cm³",
        color: "Blau grisenc",
        hardness: "7.0",
        electronegativity: "2.2",
        oxidationStates: "+4, +8",
        atomicRadius: "130 pm",
        electricalConductivity: "1.2×10⁷ S/m",
        discovery: "1803 - Smithson Tennant",
        originName: "Del grec 'osme' (olor)",
        applications: [
            "Plomes estilogràfiques (puntes d'osmiridi)",
            "Catalitzadors d'hidrogenació",
            "Implants mèdics",
            "Microscòpia electrònica"
        ],
        curiosities: [
            "Metall natural més dens",
            "L'OsO₄ té una olor penetrant característica",
            "Usat per fixar mostres biològiques"
        ],
        categories: ["industrial", "medicina", "tecnologia"]
    },
    {
        number: 75,
        symbol: "Re",
        name: "Reni",
        group: 7,
        period: 6,
        bloc: "d",
        chemicalSeries: "Metall de transició",
        electronConfig: "[Xe] 4f¹⁴ 5d⁵ 6s²",
        atomicMass: "186.207 u",
        state: "Sòlid",
        meltingPoint: "3185 °C",
        boilingPoint: "5590 °C",
        density: "20.8 g/cm³",
        color: "Blanc-plata",
        hardness: "7.0",
        electronegativity: "1.9",
        oxidationStates: "+4, +7",
        atomicRadius: "137 pm",
        electricalConductivity: "5.6×10⁶ S/m",
        discovery: "1925 - Walter Noddack, Ida Noddack i Otto Berg",
        originName: "Del llatí 'rhenus' (Rin)",
        applications: [
            "Turbines d'avions i motors de coets",
            "Catalitzadors en refinació de petroli",
            "Contactes elèctrics d'alta durabilitat"
        ],
        curiosities: [
            "Tercer punt de fusió més alt (després del tungstè i carboni)",
            "Punt d'ebullició més alt de tots els elements",
            "Molt dúctil i mal·leable"
        ],
        categories: ["industrial", "tecnologia"]
    },
    {
        number: 73,
        symbol: "Ta",
        name: "Tàntal",
        group: 5,
        period: 6,
        bloc: "d",
        chemicalSeries: "Metall de transició",
        electronConfig: "[Xe] 4f¹⁴ 5d³ 6s²",
        atomicMass: "180.948 u",
        state: "Sòlid",
        meltingPoint: "3017 °C",
        boilingPoint: "5455 °C",
        density: "16.4 g/cm³",
        color: "Blau grisenc",
        hardness: "6.5",
        electronegativity: "1.5",
        oxidationStates: "+5",
        atomicRadius: "145 pm",
        electricalConductivity: "8.0×10⁶ S/m",
        discovery: "1802 - Anders Ekeberg",
        originName: "De la mitologia grega: Rei Tàntal",
        applications: [
            "Condensadors electrònics (telèfons, ordinadors)",
            "Implants mèdics i dentals",
            "Superaliatges per a turbines"
        ],
        curiosities: [
            "Molt resistent als àcids (com Tàntal de la mitologia)",
            "Un dels punts de fusió més alts",
            "Biocompatible (segur per a implants)"
        ],
        categories: ["tecnologia", "medicina", "industrial"]
    },
    {
        number: 118,
        symbol: "Og",
        name: "Oganessó",
        group: 18,
        period: 7,
        bloc: "p",
        chemicalSeries: "Gas noble",
        electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
        atomicMass: "294 u",
        state: "Sòlid*",
        meltingPoint: "Desconegut",
        boilingPoint: "Desconegut",
        density: "13,65 g/cm³*",
        color: "Desconeguda",
        hardness: "N/A",
        electronegativity: "Desconeguda",
        oxidationStates: "-1, 0, +2, +4, +6*",
        atomicRadius: "152 pm*",
        electricalConductivity: "Desconeguda",
        discovery: "2002 - Yuri Oganesián i Vladimir Utyonkov",
        originName: "Homenatge al seu descobridor, Yuri Oganesián",
        applications: [
            "Cap aplicació tecnològica actual",
            "Investigació científica bàsica"
        ],
        curiosities: [
            "Últim element confirmat de la taula periòdica",
            "Nomenat en honor a una persona viva",
            "Podria ser el primer gas noble sòlid"
        ],
        categories: ["sintetic"]
    }
];

// Inicialització
document.addEventListener('DOMContentLoaded', function() {
    createPeriodicTable();
    setupFilterButtons();
    setupModal();
});

function createPeriodicTable() {
    const tableContainer = document.querySelector('.periodic-table');
    
    tableContainer.innerHTML = '';
    
    // Números de grup (1-18)
    for (let group = 1; group <= 18; group++) {
        const groupLabel = document.createElement('div');
        groupLabel.className = 'group-label';
        groupLabel.textContent = group;
        groupLabel.style.gridColumn = group + 1;
        groupLabel.style.gridRow = 1;
        tableContainer.appendChild(groupLabel);
    }
    
    // Números de període (1-7)
    for (let period = 1; period <= 7; period++) {
        const periodLabel = document.createElement('div');
        periodLabel.className = 'period-label';
        periodLabel.textContent = period;
        periodLabel.style.gridColumn = 1;
        periodLabel.style.gridRow = period + 1;
        tableContainer.appendChild(periodLabel);
    }
    
    // Col·locar els elements
    elementsData.forEach(element => {
        const elementCell = document.createElement('div');
        elementCell.className = 'element bloc-' + element.bloc;
        elementCell.dataset.number = element.number;
        elementCell.innerHTML =
            '<div class="element-symbol">' + element.symbol + '</div>' +
            '<div class="element-number">' + element.number + '</div>';
        
        let gridColumn = element.group + 1;
        let gridRow = element.period + 1;
        
        // Lantànids en fila separada
        if (element.number === 58) { // Ceri
            gridColumn = 5;
            gridRow = 9;
        }
        if (element.number === 67) { // Holmi
            gridColumn = 14;
            gridRow = 9;
        }
        
        elementCell.style.gridColumn = gridColumn;
        elementCell.style.gridRow = gridRow;
        
        elementCell.addEventListener('click', function() {
            showElementDetails(element);
        });
        tableContainer.appendChild(elementCell);
    });
}

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Treure "active" de tots
            filterButtons.forEach(function(btn) {
                btn.classList.remove('active');
            });
            
            // Posar "active" al clicat
            this.classList.add('active');
            
            var filter = this.dataset.filter;
            
            document.querySelectorAll('.element').forEach(function(el) {
                var number = el.dataset.number;
                var elementData = elementsData.find(function(e) {
                    return e.number == number;
                });
                
                if (filter === 'all') {
                    el.classList.remove('hidden');
                } else {
                    if (elementData.categories.includes(filter)) {
                        el.classList.remove('hidden');
                    } else {
                        el.classList.add('hidden');
                    }
                }
            });
        });
    });
}

function setupModal() {
    var modal = document.getElementById('elementModal');
    var closeBtn = document.querySelector('.close-btn');
    
    // Tancar amb la X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Tancar clicant fora del contingut
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Tancar amb Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

function showElementDetails(element) {
    var modal = document.getElementById('elementModal');
    var blocClass = 'bloc-' + element.bloc;
    
    // Omplir la informació
    document.getElementById('elementName').textContent = element.name;
    document.getElementById('elementSymbol').textContent = element.symbol;
    document.getElementById('elementSymbol').className = 'element-symbol ' + blocClass;
    document.getElementById('atomicNumber').textContent = element.number;
    document.getElementById('atomicMass').textContent = element.atomicMass;
    document.getElementById('groupPeriod').textContent = 'Grup ' + element.group + ', Període ' + element.period;
    document.getElementById('block').textContent = 'Bloc ' + element.bloc.toUpperCase();
    document.getElementById('chemicalSeries').textContent = element.chemicalSeries;
    document.getElementById('electronConfig').textContent = element.electronConfig;
    document.getElementById('state').textContent = element.state;
    document.getElementById('meltingPoint').textContent = element.meltingPoint;
    document.getElementById('boilingPoint').textContent = element.boilingPoint;
    document.getElementById('density').textContent = element.density;
    document.getElementById('color').textContent = element.color;
    document.getElementById('hardness').textContent = element.hardness;
    document.getElementById('electronegativity').textContent = element.electronegativity;
    document.getElementById('oxidationStates').textContent = element.oxidationStates;
    document.getElementById('atomicRadius').textContent = element.atomicRadius;
    document.getElementById('electricalConductivity').textContent = element.electricalConductivity;
    document.getElementById('discoveryInfo').textContent = element.discovery;
    document.getElementById('originName').textContent = element.originName;
    
    // Aplicacions
    var applicationsList = document.getElementById('applicationsList');
    applicationsList.innerHTML = '';
    element.applications.forEach(function(app) {
        var li = document.createElement('li');
        li.textContent = app;
        applicationsList.appendChild(li);
    });
    
    // Curiositats
    var curiositiesList = document.getElementById('curiositiesList');
    curiositiesList.innerHTML = '';
    element.curiosities.forEach(function(curio) {
        var li = document.createElement('li');
        li.textContent = curio;
        curiositiesList.appendChild(li);
    });
    
    // Mostrar modal
    modal.style.display = 'block';
}

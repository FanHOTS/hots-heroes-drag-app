const heroes = [
    { name: 'Abathur', jsonFile: 'abathur', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/abathur_hero_portrait.png' },
    { name: 'Alarak', jsonFile: 'alarak', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/alarak_hero_portrait.png' },
    { name: 'Alexstrasza', jsonFile: 'alexstrasza', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/alexstrasza_hero_portrait.png' },
    { name: 'Ana', jsonFile: 'ana', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/ana_hero_portrait.png' },
    { name: 'Anduin', jsonFile: 'anduin', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/anduin_hero_portrait.png' },
    { name: 'Anub\'arak', jsonFile: 'anubarak', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/anubarak_hero_portrait.png' },
    { name: 'Artanis', jsonFile: 'artanis', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/artanis_hero_portrait.png' },
    { name: 'Arthas', jsonFile: 'arthas', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/arthas_hero_portrait.png' },
    { name: 'Auriel', jsonFile: 'auriel', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/auriel_hero_portrait.png' },
    { name: 'Azmodan', jsonFile: 'azmodan', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/azmodan_hero_portrait.png' },
    { name: 'Blaze', jsonFile: 'blaze', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/blaze_hero_portrait.png' },
    { name: 'Brightwing', jsonFile: 'brightwing', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/brightwing_hero_portrait.png' },
    { name: 'The Butcher', jsonFile: 'butcher', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/butcher_hero_portrait.png' },
    { name: 'Cassia', jsonFile: 'cassia', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/cassia_hero_portrait.png' },
    { name: 'Chen', jsonFile: 'chen', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/chen_hero_portrait.png' },
    { name: 'Cho', jsonFile: 'cho', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/cho_hero_portrait.png' },
    { name: 'Chromie', jsonFile: 'chromie', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/chromie_hero_portrait.png' },
    { name: 'Deathwing', jsonFile: 'deathwing', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/deathwing_hero_portrait.png' },
    { name: 'Deckard', jsonFile: 'deckard', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/deckard_hero_portrait.png' },
    { name: 'Dehaka', jsonFile: 'dehaka', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/dehaka_hero_portrait.png' },
    { name: 'Diablo', jsonFile: 'diablo', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/diablo_hero_portrait.png' },
    { name: 'D.Va', jsonFile: 'dva', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/dva_hero_portrait.png' },
    { name: 'E.T.C.', jsonFile: 'etc', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/etc_hero_portrait.png' },
    { name: 'Falstad', jsonFile: 'falstad', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/falstad_hero_portrait.png' },
    { name: 'Fenix', jsonFile: 'fenix', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/fenix_hero_portrait.png' },
    { name: 'Gall', jsonFile: 'gall', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/gall_hero_portrait.png' },
    { name: 'Garrosh', jsonFile: 'garrosh', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/garrosh_hero_portrait.png' },
    { name: 'Gazlowe', jsonFile: 'gazlowe', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/gazlowe_hero_portrait.png' },
    { name: 'Genji', jsonFile: 'genji', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/genji_hero_portrait.png' },
    { name: 'Greymane', jsonFile: 'greymane', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/greymane_hero_portrait.png' },
    { name: 'Gul\'dan', jsonFile: 'guldan', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/guldan_hero_portrait.png' },
    { name: 'Hanzo', jsonFile: 'hanzo', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/hanzo_hero_portrait.png' },
    { name: 'Hogger', jsonFile: 'hogger', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/hogger_hero_portrait.png' },
    { name: 'Illidan', jsonFile: 'illidan', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/illidan_hero_portrait.png' },
    { name: 'Imperius', jsonFile: 'imperius', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/imperius_hero_portrait.png' },
    { name: 'Jaina', jsonFile: 'jaina', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/jaina_hero_portrait.png' },
    { name: 'Johanna', jsonFile: 'johanna', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/johanna_hero_portrait.png' },
    { name: 'Junkrat', jsonFile: 'junkrat', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/junkrat_hero_portrait.png' },
    { name: 'Kael\'thas', jsonFile: 'kaelthas', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/kaelthas_hero_portrait.png' },
    { name: 'Kel\'Thuzad', jsonFile: 'kelthuzad', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/kelthuzad_hero_portrait.png' },
    { name: 'Kerrigan', jsonFile: 'kerrigan', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/kerrigan_hero_portrait.png' },
    { name: 'Kharazim', jsonFile: 'kharazim', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/kharazim_hero_portrait.png' },
    { name: 'Leoric', jsonFile: 'leoric', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/leoric_hero_portrait.png' },
    { name: 'Li Li', jsonFile: 'lili', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/lili_hero_portrait.png' },
    { name: 'Li-Ming', jsonFile: 'liming', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/liming_hero_portrait.png' },
    { name: 'The Lost Vikings', jsonFile: 'lostvikings', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/lostvikings_hero_portrait.png' },
    { name: 'Lt. Morales', jsonFile: 'morales', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/morales_hero_portrait.png' },
    { name: 'Lúcio', jsonFile: 'lucio', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/lucio_hero_portrait.png' },
    { name: 'Lunara', jsonFile: 'lunara', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/lunara_hero_portrait.png' },
    { name: 'Maiev', jsonFile: 'maiev', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/maiev_hero_portrait.png' },
    { name: 'Malfurion', jsonFile: 'malfurion', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/malfurion_hero_portrait.png' },
    { name: 'Mal\'Ganis', jsonFile: 'malganis', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/malganis_hero_portrait.png' },
    { name: 'Malthael', jsonFile: 'malthael', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/malthael_hero_portrait.png' },
    { name: 'Medivh', jsonFile: 'medivh', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/medivh_hero_portrait.png' },
    { name: 'Mei', jsonFile: 'mei', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/mei_hero_portrait.png' },
    { name: 'Mephisto', jsonFile: 'mephisto', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/mephisto_hero_portrait.png' },
    { name: 'Muradin', jsonFile: 'muradin', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/muradin_hero_portrait.png' },
    { name: 'Murky', jsonFile: 'murky', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/murky_hero_portrait.png' },
    { name: 'Nazeebo', jsonFile: 'nazeebo', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/nazeebo_hero_portrait.png' },
    { name: 'Nova', jsonFile: 'nova', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/nova_hero_portrait.png' },
    { name: 'Orphea', jsonFile: 'orphea', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/orphea_hero_portrait.png' },
    { name: 'Probius', jsonFile: 'probius', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/probius_hero_portrait.png' },
    { name: 'Qhira', jsonFile: 'qhira', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/qhira_hero_portrait.png' },
    { name: 'Ragnaros', jsonFile: 'ragnaros', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/ragnaros_hero_portrait.png' },
    { name: 'Raynor', jsonFile: 'raynor', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/raynor_hero_portrait.png' },
    { name: 'Rehgar', jsonFile: 'rehgar', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/rehgar_hero_portrait.png' },
    { name: 'Rexxar', jsonFile: 'rexxar', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/rexxar_hero_portrait.png' },
    { name: 'Samuro', jsonFile: 'samuro', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/samuro_hero_portrait.png' },
    { name: 'Sgt. Hammer', jsonFile: 'sgthammer', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/sgthammer_hero_portrait.png' },
    { name: 'Sonya', jsonFile: 'sonya', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/sonya_hero_portrait.png' },
    { name: 'Stitches', jsonFile: 'stitches', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/stitches_hero_portrait.png' },
    { name: 'Stukov', jsonFile: 'stukov', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/stukov_hero_portrait.png' },
    { name: 'Sylvanas', jsonFile: 'sylvanas', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/sylvanas_hero_portrait.png' },
    { name: 'Tassadar', jsonFile: 'tassadar', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/tassadar_hero_portrait.png' },
    { name: 'Thrall', jsonFile: 'thrall', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/thrall_hero_portrait.png' },
    { name: 'Tracer', jsonFile: 'tracer', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/tracer_hero_portrait.png' },
    { name: 'Tychus', jsonFile: 'tychus', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/tychus_hero_portrait.png' },
    { name: 'Tyrael', jsonFile: 'tyrael', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/tyrael_hero_portrait.png' },
    { name: 'Tyrande', jsonFile: 'tyrande', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/tyrande_hero_portrait.png' },
    { name: 'Uther', jsonFile: 'uther', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/uther_hero_portrait.png' },
    { name: 'Valeera', jsonFile: 'valeera', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/valeera_hero_portrait.png' },
    { name: 'Valla', jsonFile: 'valla', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/valla_hero_portrait.png' },
    { name: 'Varian', jsonFile: 'varian', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/varian_hero_portrait.png' },
    { name: 'Whitemane', jsonFile: 'whitemane', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/whitemane_hero_portrait.png' },
    { name: 'Xul', jsonFile: 'xul', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/xul_hero_portrait.png' },
    { name: 'Yrel', jsonFile: 'yrel', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/yrel_hero_portrait.png' },
    { name: 'Zagara', jsonFile: 'zagara', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/zagara_hero_portrait.png' },
    { name: 'Zarya', jsonFile: 'zarya', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/zarya_hero_portrait.png' },
    { name: 'Zeratul', jsonFile: 'zeratul', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/zeratul_hero_portrait.png' },
    { name: 'Zul\'jin', jsonFile: 'zuljin', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroportraits/zuljin_hero_portrait.png' }
];

// Load heroes into the list with error handling for images
const heroList = document.getElementById('heroList');
heroes.forEach(hero => {
    const img = document.createElement('img');
    img.src = hero.portrait;
    img.alt = hero.name;
    img.classList.add('hero-icon');
    img.draggable = true;
    img.ondragstart = drag;
    img.dataset.name = hero.name;
    img.dataset.jsonFile = hero.jsonFile;
    img.onerror = () => { img.src = 'https://via.placeholder.com/80'; console.log(`Image failed to load for ${hero.name}`); }; // Fallback to placeholder if image fails
    heroList.appendChild(img);
});

// Drag and drop functions
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.outerHTML + '|' + ev.target.dataset.name + '|' + ev.target.dataset.jsonFile);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text").split('|');
    const html = data[0];
    const name = data[1];
    const jsonFile = data[2];
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const img = tempDiv.firstChild;
    img.onclick = () => showDetails(name, jsonFile);
    ev.target.appendChild(img);
}

// Show details modal (updated to handle object structure for abilities and talents)
function showDetails(name, jsonFile) {
    const modal = document.getElementById('detailsModal');
    const heroNameEl = document.getElementById('heroName');
    const detailsEl = document.getElementById('heroDetails');
    heroNameEl.textContent = name;
    detailsEl.innerHTML = '<p>Loading...</p>';

    modal.style.display = "block";

    const jsonUrl = `https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/hero/${jsonFile}.json`;
    fetch(jsonUrl)
        .then(response => response.json())
        .then(data => {
            let html = '<div class="ability-section"><h3>Abilities</h3>';

            // Abilities are an object with category keys (e.g., 'basic', 'heroic', 'trait')
            Object.keys(data.abilities).forEach(category => {
                html += `<h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4>`;
                data.abilities[category].forEach(ability => {
                    html += `<p><strong>${ability.name}</strong>: ${ability.description} (Hotkey: ${ability.hotkey || 'N/A'}, Cooldown: ${ability.cooldown || 'N/A'}, Mana: ${ability.manaCost || 'N/A'})</p>`;
                });
            });

            html += '</div><div class="talent-section"><h3>Talents</h3>';

            // Talents are an object with level keys (e.g., '1', '4'); sort numerically
            Object.keys(data.talents).sort((a, b) => Number(a) - Number(b)).forEach(level => {
                html += `<h4>Level ${level}</h4>`;
                data.talents[level].forEach(talent => {
                    html += `<p><strong>${talent.name}</strong>: ${talent.description}</p>`;
                });
            });

            html += '</div>';
            detailsEl.innerHTML = html;
        })
        .catch(error => {
            detailsEl.innerHTML = '<p>Error loading data: ' + error + '</p>';
        });
}

function closeModal() {
    document.getElementById('detailsModal').style.display = "none";
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target == modal) {
        closeModal();
    }
}

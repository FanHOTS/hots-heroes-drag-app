// List of all heroes with JSON URLs (lowercase for file names) and portrait URLs.
// Portraits now use the correct path: /images/heroes/{jsonFile}.png
const heroes = [
    { name: 'Abathur', jsonFile: 'abathur', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/abathur.png' },
    { name: 'Alarak', jsonFile: 'alarak', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/alarak.png' },
    { name: 'Alexstrasza', jsonFile: 'alexstrasza', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/alexstrasza.png' },
    { name: 'Ana', jsonFile: 'ana', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/ana.png' },
    { name: 'Anduin', jsonFile: 'anduin', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/anduin.png' },
    { name: 'Anub\'arak', jsonFile: 'anubarak', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/anubarak.png' },
    { name: 'Artanis', jsonFile: 'artanis', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/artanis.png' },
    { name: 'Arthas', jsonFile: 'arthas', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/arthas.png' },
    { name: 'Auriel', jsonFile: 'auriel', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/auriel.png' },
    { name: 'Azmodan', jsonFile: 'azmodan', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/azmodan.png' },
    { name: 'Blaze', jsonFile: 'blaze', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/blaze.png' },
    { name: 'Brightwing', jsonFile: 'brightwing', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/brightwing.png' },
    { name: 'The Butcher', jsonFile: 'butcher', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/butcher.png' },
    { name: 'Cassia', jsonFile: 'cassia', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/cassia.png' },
    { name: 'Chen', jsonFile: 'chen', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/chen.png' },
    { name: 'Cho', jsonFile: 'cho', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/cho.png' },
    { name: 'Chromie', jsonFile: 'chromie', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/chromie.png' },
    { name: 'Deathwing', jsonFile: 'deathwing', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/deathwing.png' },
    { name: 'Deckard', jsonFile: 'deckard', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/deckard.png' },
    { name: 'Dehaka', jsonFile: 'dehaka', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/dehaka.png' },
    { name: 'Diablo', jsonFile: 'diablo', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/diablo.png' },
    { name: 'D.Va', jsonFile: 'dva', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/dva.png' },
    { name: 'E.T.C.', jsonFile: 'etc', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/etc.png' },
    { name: 'Falstad', jsonFile: 'falstad', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/falstad.png' },
    { name: 'Fenix', jsonFile: 'fenix', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/fenix.png' },
    { name: 'Gall', jsonFile: 'gall', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/gall.png' },
    { name: 'Garrosh', jsonFile: 'garrosh', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/garrosh.png' },
    { name: 'Gazlowe', jsonFile: 'gazlowe', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/gazlowe.png' },
    { name: 'Genji', jsonFile: 'genji', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/genji.png' },
    { name: 'Greymane', jsonFile: 'greymane', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/greymane.png' },
    { name: 'Gul\'dan', jsonFile: 'guldan', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/guldan.png' },
    { name: 'Hanzo', jsonFile: 'hanzo', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/hanzo.png' },
    { name: 'Hogger', jsonFile: 'hogger', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/hogger.png' },
    { name: 'Illidan', jsonFile: 'illidan', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/illidan.png' },
    { name: 'Imperius', jsonFile: 'imperius', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/imperius.png' },
    { name: 'Jaina', jsonFile: 'jaina', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/jaina.png' },
    { name: 'Johanna', jsonFile: 'johanna', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/johanna.png' },
    { name: 'Junkrat', jsonFile: 'junkrat', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/junkrat.png' },
    { name: 'Kael\'thas', jsonFile: 'kaelthas', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/kaelthas.png' },
    { name: 'Kel\'Thuzad', jsonFile: 'kelthuzad', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/kelthuzad.png' },
    { name: 'Kerrigan', jsonFile: 'kerrigan', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/kerrigan.png' },
    { name: 'Kharazim', jsonFile: 'kharazim', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/kharazim.png' },
    { name: 'Leoric', jsonFile: 'leoric', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/leoric.png' },
    { name: 'Li Li', jsonFile: 'lili', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/lili.png' },
    { name: 'Li-Ming', jsonFile: 'liming', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/liming.png' },
    { name: 'The Lost Vikings', jsonFile: 'lostvikings', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/lostvikings.png' },
    { name: 'Lt. Morales', jsonFile: 'morales', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/morales.png' },
    { name: 'Lúcio', jsonFile: 'lucio', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/lucio.png' },
    { name: 'Lunara', jsonFile: 'lunara', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/lunara.png' },
    { name: 'Maiev', jsonFile: 'maiev', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/maiev.png' },
    { name: 'Malfurion', jsonFile: 'malfurion', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/malfurion.png' },
    { name: 'Mal\'Ganis', jsonFile: 'malganis', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/malganis.png' },
    { name: 'Malthael', jsonFile: 'malthael', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/malthael.png' },
    { name: 'Medivh', jsonFile: 'medivh', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/medivh.png' },
    { name: 'Mei', jsonFile: 'mei', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/mei.png' },
    { name: 'Mephisto', jsonFile: 'mephisto', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/mephisto.png' },
    { name: 'Muradin', jsonFile: 'muradin', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/muradin.png' },
    { name: 'Murky', jsonFile: 'murky', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/murky.png' },
    { name: 'Nazeebo', jsonFile: 'nazeebo', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/nazeebo.png' },
    { name: 'Nova', jsonFile: 'nova', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/nova.png' },
    { name: 'Orphea', jsonFile: 'orphea', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/orphea.png' },
    { name: 'Probius', jsonFile: 'probius', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/probius.png' },
    { name: 'Qhira', jsonFile: 'qhira', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/qhira.png' },
    { name: 'Ragnaros', jsonFile: 'ragnaros', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/ragnaros.png' },
    { name: 'Raynor', jsonFile: 'raynor', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/raynor.png' },
    { name: 'Rehgar', jsonFile: 'rehgar', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/rehgar.png' },
    { name: 'Rexxar', jsonFile: 'rexxar', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/rexxar.png' },
    { name: 'Samuro', jsonFile: 'samuro', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/samuro.png' },
    { name: 'Sgt. Hammer', jsonFile: 'sgthammer', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/sgthammer.png' },
    { name: 'Sonya', jsonFile: 'sonya', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/sonya.png' },
    { name: 'Stitches', jsonFile: 'stitches', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/stitches.png' },
    { name: 'Stukov', jsonFile: 'stukov', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/stukov.png' },
    { name: 'Sylvanas', jsonFile: 'sylvanas', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/sylvanas.png' },
    { name: 'Tassadar', jsonFile: 'tassadar', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/tassadar.png' },
    { name: 'Thrall', jsonFile: 'thrall', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/thrall.png' },
    { name: 'Tracer', jsonFile: 'tracer', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/tracer.png' },
    { name: 'Tychus', jsonFile: 'tychus', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/tychus.png' },
    { name: 'Tyrael', jsonFile: 'tyrael', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/tyrael.png' },
    { name: 'Tyrande', jsonFile: 'tyrande', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/tyrande.png' },
    { name: 'Uther', jsonFile: 'uther', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/uther.png' },
    { name: 'Valeera', jsonFile: 'valeera', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/valeera.png' },
    { name: 'Valla', jsonFile: 'valla', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/valla.png' },
    { name: 'Varian', jsonFile: 'varian', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/varian.png' },
    { name: 'Whitemane', jsonFile: 'whitemane', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/whitemane.png' },
    { name: 'Xul', jsonFile: 'xul', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/xul.png' },
    { name: 'Yrel', jsonFile: 'yrel', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/yrel.png' },
    { name: 'Zagara', jsonFile: 'zagara', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/zagara.png' },
    { name: 'Zarya', jsonFile: 'zarya', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/zarya.png' },
    { name: 'Zeratul', jsonFile: 'zeratul', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/zeratul.png' },
    { name: 'Zul\'jin', jsonFile: 'zuljin', portrait: 'https://raw.githubusercontent.com/heroespatchnotes/heroes-talents/master/images/heroes/zuljin.png' }
];

// Load heroes into the list
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

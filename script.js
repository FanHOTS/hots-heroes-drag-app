// List of all heroes with JSON URLs (lowercase for file names) and portrait URLs.
const heroes = [
    { name: 'Abathur', jsonFile: 'abathur', portrait: 'https://static.wikia.nocookie.net/allstars_gamepedia/images/2/2b/Abathur_Hero_Portrait.png/revision/latest' },
    { name: 'Alarak', jsonFile: 'alarak', portrait: 'https://static.wikia.nocookie.net/allstars_gamepedia/images/8/84/Alarak_Hero_Portrait.png/revision/latest' },
    { name: 'Alexstrasza', jsonFile: 'alexstrasza', portrait: 'https://static.wikia.nocookie.net/allstars_gamepedia/images/2/2f/Alexstrasza_Hero_Portrait.png/revision/latest' },
    { name: 'Ana', jsonFile: 'ana', portrait: 'https://static.wikia.nocookie.net/allstars_gamepedia/images/6/66/Ana_Hero_Portrait.png/revision/latest' },
    { name: 'Anduin', jsonFile: 'anduin', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Anub\'arak', jsonFile: 'anubarak', portrait: 'https://static.wikia.nocookie.net/allstars_gamepedia/images/3/3e/Anub%27arak_Hero_Portrait.png/revision/latest' },
    { name: 'Artanis', jsonFile: 'artanis', portrait: 'https://static.wikia.nocookie.net/allstars_gamepedia/images/9/92/Artanis_Hero_Portrait.png/revision/latest' },
    { name: 'Arthas', jsonFile: 'arthas', portrait: 'https://static.wikia.nocookie.net/allstars_gamepedia/images/2/24/Arthas_Hero_Portrait.png/revision/latest' },
    { name: 'Auriel', jsonFile: 'auriel', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Azmodan', jsonFile: 'azmodan', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Blaze', jsonFile: 'blaze', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Brightwing', jsonFile: 'brightwing', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'The Butcher', jsonFile: 'butcher', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Cassia', jsonFile: 'cassia', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Chen', jsonFile: 'chen', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Cho', jsonFile: 'cho', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Chromie', jsonFile: 'chromie', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Deathwing', jsonFile: 'deathwing', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Deckard', jsonFile: 'deckard', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Dehaka', jsonFile: 'dehaka', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Diablo', jsonFile: 'diablo', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'D.Va', jsonFile: 'dva', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'E.T.C.', jsonFile: 'etc', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Falstad', jsonFile: 'falstad', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Fenix', jsonFile: 'fenix', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Gall', jsonFile: 'gall', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Garrosh', jsonFile: 'garrosh', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Gazlowe', jsonFile: 'gazlowe', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Genji', jsonFile: 'genji', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Greymane', jsonFile: 'greymane', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Gul\'dan', jsonFile: 'guldan', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Hanzo', jsonFile: 'hanzo', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Hogger', jsonFile: 'hogger', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Illidan', jsonFile: 'illidan', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Imperius', jsonFile: 'imperius', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Jaina', jsonFile: 'jaina', portrait: 'https://static.wikia.nocookie.net/allstars_gamepedia/images/d/d2/Jaina_Hero_Portrait.png/revision/latest' },
    { name: 'Johanna', jsonFile: 'johanna', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Junkrat', jsonFile: 'junkrat', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Kael\'thas', jsonFile: 'kaelthas', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Kel\'Thuzad', jsonFile: 'kelthuzad', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Kerrigan', jsonFile: 'kerrigan', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Kharazim', jsonFile: 'kharazim', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Leoric', jsonFile: 'leoric', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Li Li', jsonFile: 'lili', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Li-Ming', jsonFile: 'liming', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'The Lost Vikings', jsonFile: 'lostvikings', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Lt. Morales', jsonFile: 'morales', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Lúcio', jsonFile: 'lucio', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Lunara', jsonFile: 'lunara', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Maiev', jsonFile: 'maiev', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Malfurion', jsonFile: 'malfurion', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Mal\'Ganis', jsonFile: 'malganis', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Malthael', jsonFile: 'malthael', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Medivh', jsonFile: 'medivh', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Mei', jsonFile: 'mei', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Mephisto', jsonFile: 'mephisto', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Muradin', jsonFile: 'muradin', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Murky', jsonFile: 'murky', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Nazeebo', jsonFile: 'nazeebo', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Nova', jsonFile: 'nova', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Orphea', jsonFile: 'orphea', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Probius', jsonFile: 'probius', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Qhira', jsonFile: 'qhira', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Ragnaros', jsonFile: 'ragnaros', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Raynor', jsonFile: 'raynor', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Rehgar', jsonFile: 'rehgar', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Rexxar', jsonFile: 'rexxar', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Samuro', jsonFile: 'samuro', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Sgt. Hammer', jsonFile: 'sgthammer', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Sonya', jsonFile: 'sonya', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Stitches', jsonFile: 'stitches', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Stukov', jsonFile: 'stukov', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Sylvanas', jsonFile: 'sylvanas', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Tassadar', jsonFile: 'tassadar', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Thrall', jsonFile: 'thrall', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Tracer', jsonFile: 'tracer', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Tychus', jsonFile: 'tychus', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Tyrael', jsonFile: 'tyrael', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Tyrande', jsonFile: 'tyrande', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Uther', jsonFile: 'uther', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Valeera', jsonFile: 'valeera', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Valla', jsonFile: 'valla', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Varian', jsonFile: 'varian', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Whitemane', jsonFile: 'whitemane', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Xul', jsonFile: 'xul', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Yrel', jsonFile: 'yrel', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Zagara', jsonFile: 'zagara', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Zarya', jsonFile: 'zarya', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Zeratul', jsonFile: 'zeratul', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' },
    { name: 'Zul\'jin', jsonFile: 'zuljin', portrait: '[REPLACE WITH DIRECT URL FROM WIKI]' }
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

// Show details modal
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
            data.abilities.forEach(ability => {
                html += `<p><strong>${ability.name}</strong>: ${ability.description} (Hotkey: ${ability.hotkey || 'N/A'}, Cooldown: ${ability.cooldown || 'N/A'}, Mana: ${ability.manaCost || 'N/A'})</p>`;
            });
            html += '</div><div class="talent-section"><h3>Talents</h3>';
            data.talents.forEach(talent => {
                html += `<p><strong>${talent.name}</strong>: ${talent.description} (Level: ${talent.sort || 'N/A'})</p>`;
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

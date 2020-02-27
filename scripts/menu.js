const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu-button");

const search = document.getElementById("search");
const searchButton = document.getElementById("search-button");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");

const mainContent = document.getElementById("main");

const toggleElems = (elems) => {
  for (elem of elems) {
    elem.classList.toggle("opened");
    elem.classList.toggle("closed");
  };
  return 0;
}

const closeElems = (elems) => {
  for (elem of elems) {
    if (elem.classList.contains("opened")) {
      elem.classList.remove("opened");
      elem.classList.add("closed");
    }
  };
  return 0;
}

menuButton.addEventListener("click", () => {
  if (search.classList.contains("opened")) closeElems([search, searchButton, mainContent]);
  toggleElems([menu, menuButton, mainContent]);
});

searchButton.addEventListener("click", () => {
  if (menu.classList.contains("opened")) closeElems([menu, menuButton, mainContent]);
  toggleElems([search, searchButton, mainContent]);
  searchBox.focus();
});

mainContent.addEventListener("click", () => {
  closeElems([menu, menuButton, search, searchButton, mainContent]);
});

const civs = [
  {name: 'Aztecs', link: '/civs/aztecs.html'},
  {name: 'Berbers', link: '/civs/berbers.html'},
  {name: 'Britons', link: '/civs/britons.html'},
  {name: 'Bulgarians', link: '/civs/bulgarians.html'},
  {name: 'Burmese', link: '/civs/burmese.html'},
  {name: 'Byzantines', link: '/civs/byzantines.html'},
  {name: 'Celts', link: '/civs/celts.html'},
  {name: 'Chinese', link: '/civs/chinese.html'},
  {name: 'Cumans', link: '/civs/cumans.html'},
  {name: 'Ethiopians', link: '/civs/ethiopians.html'},
  {name: 'Franks', link: '/civs/franks.html'},
  {name: 'Goths', link: '/civs/goths.html'},
  {name: 'Huns', link: '/civs/huns.html'},
  {name: 'Incas', link: '/civs/incas.html'},
  {name: 'Indians', link: '/civs/indians.html'},
  {name: 'Italians', link: '/civs/italians.html'},
  {name: 'Japanese', link: '/civs/japanese.html'},
  {name: 'Khmer', link: '/civs/khmer.html'},
  {name: 'Koreans', link: '/civs/koreans.html'},
  {name: 'Lithuanians', link: '/civs/lithuanians.html'},
  {name: 'Magyars', link: '/civs/magyars.html'},
  {name: 'Malay', link: '/civs/malay.html'},
  {name: 'Malians', link: '/civs/malians.html'},
  {name: 'Mayans', link: '/civs/mayans.html'},
  {name: 'Mongols', link: '/civs/mongols.html'},
  {name: 'Persians', link: '/civs/persians.html'},
  {name: 'Portuguese', link: '/civs/portuguese.html'},
  {name: 'Saracens', link: '/civs/saracens.html'},
  {name: 'Slavs', link: '/civs/slavs.html'},
  {name: 'Spanish', link: '/civs/spanish.html'},
  {name: 'Tatars', link: '/civs/tatars.html'},
  {name: 'Teutons', link: '/civs/teutons.html'},
  {name: 'Turks', link: '/civs/turks.html'},
  {name: 'Vietnamese', link: '/civs/vietnamese.html'},
  {name: 'Vikings', link: '/civs/vikings.html'}
];
const units = [
  {name: 'Arambai', link: '/units/arambai.html'},
  {name: 'Arbalester', link: '/units/arbalester.html'},
  {name: 'Archer', link: '/units/archer.html'},
  {name: 'Ballista Elephant', link: '/units/ballista_elephant.html'},
  {name: 'Battering Ram', link: '/units/battering_ram.html'},
  {name: 'Battle Elephant', link: '/units/battle_elephant.html'},
  {name: 'Berserk', link: '/units/berserk.html'},
  {name: 'Bombard Cannon', link: '/units/bombard_cannon.html'},
  {name: 'Boyar', link: '/units/boyar.html'},
  {name: 'Camel Archer', link: '/units/camel_archer.html'},
  {name: 'Camel Rider', link: '/units/camel_rider.html'},
  {name: 'Cannon Galleon', link: '/units/cannon_galleon.html'},
  {name: 'Capped Ram', link: '/units/capped_ram.html'},
  {name: 'Caravel', link: '/units/caravel.html'},
  {name: 'Cataphract', link: '/units/cataphract.html'},
  {name: 'Cavalier', link: '/units/cavalier.html'},
  {name: 'Cavalry Archer', link: '/units/cavalry_archer.html'},
  {name: 'Champion', link: '/units/champion.html'},
  {name: 'Chu Ko Nu', link: '/units/chu_ko_nu.html'},
  {name: 'Condottiero', link: '/units/condottiero.html'},
  {name: 'Conquisdator', link: '/units/conquisdator.html'},
  {name: 'Crossbowman', link: '/units/crossbowman.html'},
  {name: 'Demolition Raft', link: '/units/demolition_raft.html'},
  {name: 'Demolition Ship', link: '/units/demolition_ship.html'},
  {name: 'Eagle Scout', link: '/units/eagle_scout.html'},
  {name: 'Eagle Warrior', link: '/units/eagle_warrior.html'},
  {name: 'Elephant Archer', link: '/units/elephant_archer.html'},
  {name: 'Elite Arambai', link: '/units/elite_arambai.html'},
  {name: 'Elite Ballista Elephant', link: '/units/elite_ballista_elephant.html'},
  {name: 'Elite Battle Elephant', link: '/units/elite_battle_elephant.html'},
  {name: 'Elite Berserk', link: '/units/elite_berserk.html'},
  {name: 'Elite Boyar', link: '/units/elite_boyar.html'},
  {name: 'Elite Camel Archer', link: '/units/elite_camel_archer.html'},
  {name: 'Elite Cannon Galleon', link: '/units/elite_cannon_galleon.html'},
  {name: 'Elite Caravel', link: '/units/elite_caravel.html'},
  {name: 'Elite Cataphract', link: '/units/elite_cataphract.html'},
  {name: 'Elite Chu Ko Nu', link: '/units/elite_chu_ko_nu.html'},
  {name: 'Elite Conquisdator', link: '/units/elite_conquisdator.html'},
  {name: 'Elite Eagle Warrior', link: '/units/elite_eagle_warrior.html'},
  {name: 'Elite Elephant Archer', link: '/units/elite_elephant_archer.html'},
  {name: 'Elite Gbeto', link: '/units/elite_gbeto.html'},
  {name: 'Elite Genitour', link: '/units/elite_genitour.html'},
  {name: 'Elite Genoese Crossbowman', link: '/units/elite_genoese_crossbowman.html'},
  {name: 'Elite Huskarl', link: '/units/elite_huskarl.html'},
  {name: 'Elite Jaguar Warrior', link: '/units/elite_jaguar_warrior.html'},
  {name: 'Elite Janissary', link: '/units/elite_janissary.html'},
  {name: 'Elite Kamayuk', link: '/units/elite_kamayuk.html'},
  {name: 'Elite Karambit Warrior', link: '/units/elite_karambit_warrior.html'},
  {name: 'Elite Keshik', link: '/units/elite_keshik.html'},
  {name: 'Elite Kipchak', link: '/units/elite_kipchak.html'},
  {name: 'Elite Konnik', link: '/units/elite_konnik.html'},
  {name: 'Elite Konnik (dismounted)', link: '/units/elite_konnik_dismounted.html'},
  {name: 'Elite Leitis', link: '/units/elite_leitis.html'},
  {name: 'Elite Longboat', link: '/units/elite_longboat.html'},
  {name: 'Elite Longbowman', link: '/units/elite_longbowman.html'},
  {name: 'Elite Magyar Huszar', link: '/units/elite_magyar_huszar.html'},
  {name: 'Elite Mameluke', link: '/units/elite_mameluke.html'},
  {name: 'Elite Mangudai', link: '/units/elite_mangudai.html'},
  {name: 'Elite Organ Gun', link: '/units/elite_organ_gun.html'},
  {name: 'Elite Plumed Archer', link: '/units/elite_plumed_archer.html'},
  {name: 'Elite Rattan Archer', link: '/units/elite_rattan_archer.html'},
  {name: 'Elite Samurai', link: '/units/elite_samurai.html'},
  {name: 'Elite Shotel Warrior', link: '/units/elite_shotel_warrior.html'},
  {name: 'Elite Skirmisher', link: '/units/elite_skirmisher.html'},
  {name: 'Elite Steppe Lancer', link: '/units/elite_steppe_lancer.html'},
  {name: 'Elite Tarkan', link: '/units/elite_tarkan.html'},
  {name: 'Elite Teutonic Knight', link: '/units/elite_teutonic_knight.html'},
  {name: 'Elite Throwing Axeman', link: '/units/elite_throwing_axeman.html'},
  {name: 'Elite Turtle Ship', link: '/units/elite_turtle_ship.html'},
  {name: 'Elite War Elephant', link: '/units/elite_war_elephant.html'},
  {name: 'Elite War Wagon', link: '/units/elite_war_wagon.html'},
  {name: 'Elite Woad Raider', link: '/units/elite_woad_raider.html'},
  {name: 'Fast Fire Ship', link: '/units/fast_fire_ship.html'},
  {name: 'Fire Galley', link: '/units/fire_galley.html'},
  {name: 'Fire Ship', link: '/units/fire_ship.html'},
  {name: 'Galleon', link: '/units/galleon.html'},
  {name: 'Galley', link: '/units/galley.html'},
  {name: 'Gbeto', link: '/units/gbeto.html'},
  {name: 'Genitour', link: '/units/genitour.html'},
  {name: 'Genoese Crossbowman', link: '/units/genoese_crossbowman.html'},
  {name: 'Halberdier', link: '/units/halberdier.html'},
  {name: 'Hand Cannoneer', link: '/units/hand_cannoneer.html'},
  {name: 'Heavy Camel Rider', link: '/units/heavy_camel_rider.html'},
  {name: 'Heavy Cavalry Archer', link: '/units/heavy_cav_archer.html'},
  {name: 'Heavy Demolition Ship', link: '/units/heavy_demo_ship.html'},
  {name: 'Heavy Scorpion', link: '/units/heavy_scorpion.html'},
  {name: 'Huskarl', link: '/units/huskarl.html'},
  {name: 'Hussar', link: '/units/hussar.html'},
  {name: 'Imperial Camel Rider', link: '/units/imperial_camel_rider.html'},
  {name: 'Imperial Skirmisher', link: '/units/imperial_skirmisher.html'},
  {name: 'Jaguar Warrior', link: '/units/jaguar_warrior.html'},
  {name: 'Janissary', link: '/units/janissary.html'},
  {name: 'Kamayuk', link: '/units/kamayuk.html'},
  {name: 'Karambit Warrior', link: '/units/karambit_warrior.html'},
  {name: 'Keshik', link: '/units/keshik.html'},
  {name: 'Kipchak', link: '/units/kipchak.html'},
  {name: 'Knight', link: '/units/knight.html'},
  {name: 'Konnik', link: '/units/konnik.html'},
  {name: 'Konnik (dismounted)', link: '/units/konnik_dismounted.html'},
  {name: 'Leitis', link: '/units/leitis.html'},
  {name: 'Light Cavalry', link: '/units/light_cavalry.html'},
  {name: 'Longboat', link: '/units/longboat.html'},
  {name: 'Longbowman', link: '/units/longbowman.html'},
  {name: 'Long Swordsman', link: '/units/long_swordsman.html'},
  {name: 'Magyar Huszar', link: '/units/magyar_huszar.html'},
  {name: 'Mameluke', link: '/units/mameluke.html'},
  {name: 'Mangonel', link: '/units/mangonel.html'},
  {name: 'Mangudai', link: '/units/mangudai.html'},
  {name: 'Man-at-Arms', link: '/units/man_at_arms.html'},
  {name: 'Militia', link: '/units/militia.html'},
  {name: 'Missionary', link: '/units/missionary.html'},
  {name: 'Monk', link: '/units/monk.html'},
  {name: 'Onager', link: '/units/onager.html'},
  {name: 'Organ Gun', link: '/units/organ_gun.html'},
  {name: 'Paladin', link: '/units/paladin.html'},
  {name: 'Petard', link: '/units/petard.html'},
  {name: 'Pikeman', link: '/units/pikeman.html'},
  {name: 'Plumed Archer', link: '/units/plumed_archer.html'},
  {name: 'Rattan Archer', link: '/units/rattan_archer.html'},
  {name: 'Samurai', link: '/units/samurai.html'},
  {name: 'Scorpion', link: '/units/scorpion.html'},
  {name: 'Scout Cavalry', link: '/units/scout_cavalry.html'},
  {name: 'Shotel Warrior', link: '/units/shotel_warrior.html'},
  {name: 'Siege Onager', link: '/units/siege_onager.html'},
  {name: 'Siege Ram', link: '/units/siege_ram.html'},
  {name: 'Siege Tower', link: '/units/siege_tower.html'},
  {name: 'Skirmisher', link: '/units/skirmisher.html'},
  {name: 'Slinger', link: '/units/slinger.html'},
  {name: 'Spearman', link: '/units/spearman.html'},
  {name: 'Steppe Lancer', link: '/units/steppe_lancer.html'},
  {name: 'Tarkan', link: '/units/tarkan.html'},
  {name: 'Teutonic Knight', link: '/units/teutonic_knight.html'},
  {name: 'Throwing Axeman', link: '/units/throwing_axeman.html'},
  {name: 'Trebuchet', link: '/units/trebuchet.html'},
  {name: 'Turtle Ship', link: '/units/turtle_ship.html'},
  {name: 'Two-Handed Swordsman', link: '/units/two_handed_swordsman.html'},
  {name: 'Villager', link: '/units/villager.html'},
  {name: 'War Elephant', link: '/units/war_elephant.html'},
  {name: 'War Galley', link: '/units/war_galley.html'},
  {name: 'War Wagon', link: '/units/war_wagon.html'},
  {name: 'Woad Raider', link: '/units/woad_raider.html'},
  {name: 'Xolotl Warrior', link: '/units/xolotl_warrior.html'}  
];
const strats = [
  {name: 'Archer Rush', link: '/archer_rush.html'},
  {name: 'Fast Castle', link: '/fast_castle.html'},
  {name: 'Man-at-Arms Rush', link: '/man_at_arms_rush.html'},
  {name: 'Scout Rush', link: '/scout_rush.html'}  
];

searchBox.addEventListener("input", () => {
  const str = searchBox.value.toLowerCase();
  let inner = '';
  if (str.length >= 3) {
    let foundCivs = [];
    let foundUnits = [];
    let foundStrats = [];
    let count = 0;
    for (obj of civs) {
      if (obj.name.toLowerCase().startsWith(str)) {
        if (count < 5) foundCivs.push(obj);
        count++;
      }
    }
    for (obj of units) {
      if (obj.name.toLowerCase().startsWith(str)) {
        if (count < 5) foundUnits.push(obj);
        count++;
      }
    }
    for (obj of strats) {
      if (obj.name.toLowerCase().startsWith(str)) {
        if (count < 5) foundStrats.push(obj);
        count++;
      }
    }
    if (foundCivs.length > 0) {
      inner += '<div class="menu-item">Civs</div>\n';
      for (obj of foundCivs) {
        inner += `<a href="${obj.link}" class="sub-menu-item"><span style="font-weight: bold;">${obj.name.substr(0, str.length)}</span>${obj.name.substr(str.length)}</a>\n`;
      }
    }
    if (foundUnits.length > 0) {
      inner += '<div class="menu-item">Units</div>\n';
      for (obj of foundUnits) {
        inner += `<a href="${obj.link}" class="sub-menu-item"><span style="font-weight: bold;">${obj.name.substr(0, str.length)}</span>${obj.name.substr(str.length)}</a>\n`;
      }
    }
    if (foundStrats.length > 0) {
      inner += '<div class="menu-item">Strategies</div>\n';
      for (obj of foundStrats) {
        inner += `<a href="${obj.link}" class="sub-menu-item"><span style="font-weight: bold;">${obj.name.substr(0, str.length)}</span>${obj.name.substr(str.length)}</a>\n`;
      }
    }
    if (count > 5) {
      inner += `<div class="menu-item" style="font-weight: normal;">and ${count - 5} other results</div>\n`;
    }
    searchResult.innerHTML = inner;
  } else {
    searchResult.innerHTML = '';
  }
});
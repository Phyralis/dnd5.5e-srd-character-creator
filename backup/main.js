const profCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    // Event listener for checkboxes
    profCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener("change", setSkills);
});

const classes = [
    { name: "Artificer", hitDie: 8 },
    { name: "Barbarian", hitDie: 12 },
    { name: "Bard", hitDie: 8 },
    { name: "Cleric", hitDie: 8 },
    { name: "Druid", hitDie: 8 },
    { name: "Fighter", hitDie: 10 },
    { name: "Monk", hitDie: 8 },
    { name: "Paladin", hitDie: 10 },
    { name: "Ranger", hitDie: 10 },
    { name: "Rogue", hitDie: 8 },
    { name: "Sorcerer", hitDie: 6 },
    { name: "Warlock", hitDie: 8 },
    { name: "Wizard", hitDie: 6 },
];

const abilities = [
    { name: "str"},
    { name: "dex"},
    { name: "con"}, 
    { name: "int"},
    { name: "wis"},
    { name: "cha"}
];

const skills = [
    { name: "acro", mod: "dex" },
    { name: "anim", mod: "wis" },
    { name: "arca", mod: "int" },
    { name: "athl", mod: "str" },
    { name: "dece", mod: "cha" },
    { name: "hist", mod: "int" },
    { name: "insi", mod: "wis" },
    { name: "inti", mod: "cha" },
    { name: "inve", mod: "int" },
    { name: "medi", mod: "wis" },
    { name: "natu", mod: "int" },
    { name: "perc", mod: "wis" },
    { name: "perf", mod: "cha" },
    { name: "pers", mod: "cha" },
    { name: "reli", mod: "int" },
    { name: "slei", mod: "dex" },
    { name: "stea", mod: "dex" },
    { name: "surv", mod: "wis" }
];

const armor = [
    { name: "unarmored", armorType: "unarmored", baseAC: 10},
    { name: "padded", armorType: "light", baseAC: 11},
    { name: "leather", armorType: "light", baseAC: 11},
    { name: "studded", armorType: "light", baseAC: 12},
    { name: "hide", armorType: "medium", baseAC: 12},
    { name: "chain", armorType: "medium", baseAC: 13},
    { name: "scale", armorType: "medium", baseAC: 14},
    { name: "breastPlate", armorType: "medium", baseAC: 14},
    { name: "halfPlate", armorType: "medium", baseAC: 15},
    { name: "ringMail", armorType: "heavy", baseAC: 14},
    { name: "chainMail", armorType: "heavy", baseAC: 16},
    { name: "splint", armorType: "heavy", baseAC: 17},
    { name: "plate", armorType: "heavy", baseAC: 18}
];

let isLoading=false;

document.getElementById("equippedArmor").addEventListener("change", calculateAC);
document.getElementById("equippedShield").addEventListener("change", calculateAC);

document.getElementById("maxHP").addEventListener("change", saveData);
document.getElementById("currentHP").addEventListener("change", saveData);
document.getElementById("maxHD").addEventListener("change", saveData);
document.getElementById("currentHD").addEventListener("change", saveData);

function loadData() {

    // Check if saved data exists
    if (!localStorage.getItem("playerLevel")) {
    return;
    }
    
    isLoading = true;

    // Set player level
    document.getElementById("playerLevel").value = localStorage.getItem("playerLevel");
    updateProfBonus();

    // Set class
    document.getElementById("selectedClass").value = localStorage.getItem("selectedClass");

    // Set ability scores
    abilities.forEach(function(ability) {
        document.getElementById(ability.name + "Score").value = localStorage.getItem(ability.name + "Score");
    });
    updateModifiers();

    // Set armor, shield, AC
    document.getElementById("equippedArmor").value = localStorage.getItem("equippedArmor");
    document.getElementById("equippedShield").value = localStorage.getItem("equippedShield");
    calculateAC();

    // Set HP/HD
    document.getElementById("currentHP").value = localStorage.getItem("currentHP");
    document.getElementById("maxHP").value = localStorage.getItem("maxHP");
    document.getElementById("currentHD").value = localStorage.getItem("currentHD");
    document.getElementById("maxHD").value = localStorage.getItem("maxHD");

    // Set skills
    skills.forEach(function(skill) {
        document.getElementById(skill.name + "Prof").checked = JSON.parse(localStorage.getItem(skill.name + "Prof"));
    });
    setSkills();

    isLoading = false;

}

function saveData() {

    if (isLoading) {
        return;
    }

    // Save player level
    localStorage.setItem("playerLevel", document.getElementById("playerLevel").value);

    // Save class
    localStorage.setItem("selectedClass", document.getElementById("selectedClass").value);

    // Save ability scores
    abilities.forEach(function(ability) {
        localStorage.setItem(ability.name + "Score", document.getElementById(ability.name + "Score").value);
    })

    // Save armor, shield
    localStorage.setItem("equippedArmor", document.getElementById("equippedArmor").value);
    localStorage.setItem("equippedShield", document.getElementById("equippedShield").value);

    // Save HP/HD
    localStorage.setItem("currentHP", document.getElementById("currentHP").value);
    localStorage.setItem("maxHP", document.getElementById("maxHP").value);
    localStorage.setItem("currentHD", document.getElementById("currentHD").value);
    localStorage.setItem("maxHD", document.getElementById("maxHD").value);

    // Save skills
    skills.forEach(function(skill) {
        localStorage.setItem(skill.name + "Prof", document.getElementById(skill.name + "Prof").checked);
    })

}

function updateModifiers() {
    // Convert ability scores into modifiers

    abilities.forEach(function(ability) {
        const score = document.getElementById(ability.name + "Score").value;
        document.getElementById(ability.name + "Mod").value = Math.floor((score - 10) / 2);
    });

    setSkills();
    enableArmor();
    calculateAC();
    saveData();
}

function updateProfBonus() {
    // Update proficiency bonus based on player level

    const playerLevel = parseInt(document.getElementById("playerLevel").value);

    let profBonus;
    if (playerLevel >= 17) profBonus = 6;
    else if (playerLevel >= 13) profBonus = 5;
    else if (playerLevel >= 9) profBonus = 4;
    else if (playerLevel >= 5) profBonus = 3;
    else profBonus = 2;

    document.getElementById("profBonus").value = profBonus;
}

function setSkills() {
    // Update skill modifiers based on ability scores and proficiencies

    const profBonus = parseInt(document.getElementById("profBonus").value);

    const mods = {};

    abilities.forEach(function(ability) {
        mods[ability.name] = parseInt(document.getElementById(ability.name + "Mod").value);
    });

    skills.forEach(function(skill) {
        const isProf = document.getElementById(skill.name + "Prof").checked;
        const baseMod = mods[skill.mod];
        if (isProf) {
        document.getElementById(skill.name + "Score").value = baseMod + profBonus;
        } else {
        document.getElementById(skill.name + "Score").value = baseMod;
        }
    });

    saveData();

}

function enableArmor() {
    const strScore = parseInt(document.getElementById("strScore").value);
    if (strScore >= 13) {
        document.getElementById("heavyArmor").disabled = false;
    } else {
        document.getElementById("heavyArmor").disabled = true;
    }
}

function calculateAC() {
    const dexMod = parseInt(document.getElementById("dexMod").value);
    const equippedArmor = document.getElementById("equippedArmor").value;
    const equippedShield = document.getElementById("equippedShield").value;
    
    if (!equippedArmor) {
        return;
    }
    
    const selectedArmor = armor.find(function(a) {
        return a.name === equippedArmor;
    });
    
    let armorAC;
    
    // Calculate armor AC
    if (selectedArmor.armorType === "unarmored" || selectedArmor.armorType === "light") {
        armorAC = selectedArmor.baseAC + dexMod;
    } else if (selectedArmor.armorType === "medium") {
        if (dexMod > 2) {
            armorAC = selectedArmor.baseAC + 2;
        } else {
            armorAC = selectedArmor.baseAC + dexMod;
        }
    } else {
        armorAC = selectedArmor.baseAC;
    }
    
    // Calculate shield AC
    let shieldAC = 0;
    if (equippedShield === "shield") {
        shieldAC = 2;
    }
    
    // Calculate final AC
    const finalAC = armorAC + shieldAC;
    
    document.getElementById("armorClass").value = finalAC;

    saveData();

}

function playerLevelChange() {

    const maxHP = parseInt(document.getElementById("maxHP").value);
    const maxHD = parseInt(document.getElementById("maxHD").value);

    updateProfBonus();
    setSkills();
    document.getElementById("currentHP").value = maxHP;
    document.getElementById("currentHD").value = maxHD;

    saveData();

}

function changeHP(type) {

    const currentHP = parseInt(document.getElementById("currentHP").value);
    const maxHP = parseInt(document.getElementById("maxHP").value);
    const modHP = parseInt(document.getElementById("modHP").value);
    
    if (type === "damage") {
        if ((currentHP - modHP) >= 0) {
            document.getElementById("currentHP").value = currentHP - modHP;
        } else {
            document.getElementById("currentHP").value = 0;
        }
    } else if (type === "heal") {
        if ((currentHP + modHP) <= maxHP) {
            document.getElementById("currentHP").value = currentHP + modHP;
        } else {
            document.getElementById("currentHP").value = maxHP;
        }
    }

    saveData();

}

function rest(type) {

    const currentHD = parseInt(document.getElementById("currentHD").value);
    const maxHD = parseInt(document.getElementById("maxHD").value);
    const currentHP = parseInt(document.getElementById("currentHP").value);
    const maxHP = parseInt(document.getElementById("maxHP").value);
    const selectedClass = document.getElementById("selectedClass").value;
    
    const referenceClass = classes.find(function(a) {
        return a.name === selectedClass;
    });
    
    if (type === "shortRest") {
    const hdToUse = parseInt(prompt("How many hit dice do you want to use?"));
    
    if (hdToUse > 0 && hdToUse <= currentHD && currentHP < maxHP) {
        let totalHeal = 0;
        const conMod = parseInt(document.getElementById("conMod").value)
        
        for (let i = 0; i < hdToUse; i++) {
            const roll = Math.floor(Math.random() * referenceClass.hitDie) + 1;
            totalHeal = totalHeal + roll;
        }
        
        if ((currentHP + totalHeal) <= maxHP) {
            document.getElementById("currentHP").value = currentHP + totalHeal;
        } else {
            document.getElementById("currentHP").value = maxHP;
        }
        
        document.getElementById("currentHD").value = currentHD - hdToUse;
    }
    } else if (type === "longRest") {
        if ((currentHD) < maxHD) {
            document.getElementById("currentHD").value = maxHD;
        }
        document.getElementById("currentHP").value = maxHP;
    }

    saveData();

}

enableArmor();
loadData();
const species = [
    {
        name: "Dragonborn",
        srd: true,
        image: "images/species/dragonborn.png",
        simpleDesc: "Tall and scaled with draconic features, Dragonborn can unleash powerful breath weapons.",
        size: "Medium",
        speed: 30,
        darkvision: 0,
        traits: [
            { name: "Draconic Ancestry", detail: "Choose your draconic ancestry from the table below.  This choice affects your Breath Weapon and Damage Resistance traits, in addition to your appearance." },
            { name: "Breath Weapon", detail: "When you take the Attack action on your turn, you can replace one of your attacks with an exhalation of magical energy in either a 15-foot Cone or a 30-foot Line that is 5 feet wide (choose the shape each time). Each creature in that area must make a Dexterity saving throw (DC 8 plus your Constitution modifier and Proficiency Bonus). On a failed save, a creature takes 1d10 damage of the type determined by your Draconic Ancestry trait. On a successful save, a creature takes half as much damage. This damage increases by 1d10 when you reach character levels 5 (2d10), 11 (3d10), and 17 (4d10)." },
            { name: "Damage Resistance", detail: "You have Resistance to the damage type determined by your Draconic Ancestry." }
        ],
        ancestryOptions: [
            { ancestry: "Black Dragon", detail: "Acid" },
            { ancestry: "Blue Dragon", detail: "Lightning" },
            { ancestry: "Brass Dragon", detail: "Fire" },
            { ancestry: "Bronze Dragon", detail: "Lightning" },
            { ancestry: "Copper Dragon", detail: "Acid" },
            { ancestry: "Gold Dragon", detail: "Fire" },
            { ancestry: "Green Dragon", detail: "Poison" },
            { ancestry: "Red Dragon", detail: "Fire" },
            { ancestry: "Silver Dragon", detail: "Cold" },
            { ancestry: "White Dragon", detail: "Cold" }
        ]
    },
    
    {
        name: "Dwarf",
        srd: true,
        image: "images/species/dwarf.png",
        simpleDesc: "Short and stocky, Dwarves are resistant to poison and remarkably tough.",
        size: "Medium",
        speed: 25,
        darkvision: 120,
        traits: [
            { name: "Dwarven Resilience", detail: "You have Resistance to Poison damage. You also have Advantage on saving throws you make to avoid or end the Poisoned condition." },
            { name: "Dwarven Toughness", detail: "Your Hit Point maximum increases by 1, and it increases by 1 again whenever you gain a level." },
            { name: "Stonecunning", detail: "As a Bonus Action, you gain Tremorsense with a range of 60 feet for 10 minutes. You must be on a stone surface or touching a stone surface to use this Tremorsense. You can use this Bonus Action a number of times equal to your Proficiency Bonus, and you regain all expended uses when you finish a Long Rest." }
        ]
    },

    {
        name: "Elf",
        srd: true,
        image: "images/species/elf.png",
        simpleDesc: "Slender and graceful with pointed ears, Elves have keen senses and resist charm.",
        size: "Medium",
        speed: 30,
        darkvision: 60,
        traits: [
            { name: "Elven Lineage", detail: "You are part of a lineage that grants you supernatural abilities. Choose one of the following options: Drow, High Elf, or Wood Elf." },
            { name: "Fey Ancestry", detail: "You have Advantage on saving throws you make to avoid or end the Charmed condition." },
            { name: "Keen Senses", detail: "You have proficiency in the Perception skill." },
            { name: "Trance", detail: "You don't need to sleep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness." }
        ],
        lineageOptions: [
            { lineage: "Drow", detail: "The range of your Darkvision increases to 120 feet. You know the Dancing Lights cantrip. At 3rd level, you can cast Faerie Fire once per Long Rest. At 5th level, you can cast Darkness once per Long Rest. Intelligence, Wisdom, or Charisma is your spellcasting ability." },
            { lineage: "High Elf", detail: "You know the Prestidigitation cantrip. Whenever you finish a Long Rest, you can replace that cantrip with a different cantrip from the Wizard spell list. Intelligence, Wisdom, or Charisma is your spellcasting ability." },
            { lineage: "Wood Elf", detail: "Your Speed increases to 35 feet. You know the Druidcraft cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability." }
        ]
    },

    {
        name: "Gnome",
        srd: true,
        image: "images/species/gnome.png",
        simpleDesc: "Small with large eyes, Gnomes have innate cunning that protects against mental magic.",
        size: "Small",
        speed: 30,
        darkvision: 60,
        traits: [
            { name: "Gnomish Cunning", detail: "You have Advantage on Intelligence, Wisdom, and Charisma saving throws." },
            { name: "Gnomish Lineage", detail: "You are part of a lineage that grants you supernatural abilities. Choose one of the following options: Forest Gnome or Rock Gnome." }
        ],
        lineageOptions: [
            { lineage: "Forest Gnome", detail: "You know the Minor Illusion cantrip. You can also cast Speak with Animals a number of times equal to your Proficiency Bonus, regaining uses on a Long Rest. Intelligence, Wisdom, or Charisma is your spellcasting ability." },
            { lineage: "Rock Gnome", detail: "You know the Mending and Prestidigitation cantrips. You can also create Tiny clockwork devices. Intelligence, Wisdom, or Charisma is your spellcasting ability." }
        ]
    },

    {
        name: "Goliath",
        srd: true,
        image: "images/species/goliath.png",
        simpleDesc: "Towering with stone-gray skin, Goliaths shrug off damage and can grow even larger.",
        size: "Medium",
        speed: 35,
        darkvision: 0,
        traits: [
            { name: "Giant Ancestry", detail: "You are descended from Giants. Choose one of the following benefits: Cloud's Jaunt, Fire's Burn, Frost's Chill, Hill's Tumble, Stone's Endurance, or Storm's Thunder." },
            { name: "Large Form", detail: "Starting at 5th level, you can change your size to Large as a Bonus Action if you're in a big enough space. This lasts for 10 minutes or until you end it as a Bonus Action. Once per Long Rest." },
            { name: "Powerful Build", detail: "You have Advantage on any saving throw you make to end the Grappled condition. You also count as one size larger when determining your carrying capacity." }
        ],
        ancestryOptions: [
            { ancestry: "Cloud's Jaunt", detail: "As a Bonus Action, you teleport up to 30 feet to an unoccupied space you can see. Usable a number of times equal to your Proficiency Bonus, regaining uses on a Long Rest." },
            { ancestry: "Fire's Burn", detail: "When you hit with an attack or deal damage with a spell, you can deal extra Fire damage equal to your Proficiency Bonus. Usable a number of times equal to your Proficiency Bonus, regaining uses on a Long Rest." },
            { ancestry: "Frost's Chill", detail: "When you hit with an attack or deal damage with a spell, you can deal extra Cold damage equal to your Proficiency Bonus and reduce the target's Speed by 10 feet until the start of your next turn. Usable a number of times equal to your Proficiency Bonus, regaining uses on a Long Rest." },
            { ancestry: "Hill's Tumble", detail: "When you hit a Large or smaller creature, you can knock it Prone. Usable a number of times equal to your Proficiency Bonus, regaining uses on a Long Rest." },
            { ancestry: "Stone's Endurance", detail: "When you take damage, you can use your Reaction to roll 1d12 + your Constitution modifier and reduce the damage by that amount. Usable a number of times equal to your Proficiency Bonus, regaining uses on a Long Rest." },
            { ancestry: "Storm's Thunder", detail: "When you hit with an attack or deal damage with a spell, you can deal extra Thunder damage equal to your Proficiency Bonus and emit a thunderous boom audible within 300 feet. Usable a number of times equal to your Proficiency Bonus, regaining uses on a Long Rest." }
        ]
    },

    {
        name: "Halfling",
        srd: true,
        image: "images/species/halfling.png",
        simpleDesc: "Standing three feet tall, Halflings are lucky, nimble, and naturally stealthy.",
        size: "Small",
        speed: 30,
        darkvision: 0,
        traits: [
            { name: "Brave", detail: "You have Advantage on saving throws you make to avoid or end the Frightened condition." },
            { name: "Halfling Nimbleness", detail: "You can move through the space of any creature that is a size larger than you, but you can't stop in the same space." },
            { name: "Luck", detail: "When you roll a 1 on the d20 of a D20 Test, you can reroll the die, and you must use the new roll." },
            { name: "Naturally Stealthy", detail: "You can take the Hide action even when you are obscured only by a creature that is at least one size larger than you." }
        ]
    },

    {
        name: "Human",
        srd: true,
        image: "images/species/human.png",
        simpleDesc: "Diverse in appearance, Humans are versatile and gain additional skills.",
        size: "Medium",
        speed: 30,
        darkvision: 0,
        traits: [
            { name: "Resourceful", detail: "You gain Heroic Inspiration whenever you finish a Long Rest." },
            { name: "Skillful", detail: "You gain proficiency in one skill of your choice." },
            { name: "Versatile", detail: "You gain an Origin feat of your choice." }
        ]
    },

    {
        name: "Orc",
        srd: true,
        image: "images/species/orc.png",
        simpleDesc: "Broad and tusked, Orcs push past their limits and endure deadly blows.",
        size: "Medium",
        speed: 30,
        darkvision: 120,
        traits: [
            { name: "Adrenaline Rush", detail: "You can take the Dash action as a Bonus Action. When you do so, you gain a number of Temporary Hit Points equal to your Proficiency Bonus. You can use this a number of times equal to your Proficiency Bonus, regaining all uses on a Long Rest." },
            { name: "Relentless Endurance", detail: "When you are reduced to 0 Hit Points but not killed outright, you can drop to 1 Hit Point instead. Once you use this trait, you can't do so again until you finish a Long Rest." }
        ]
    },

    {
        name: "Tiefling",
        srd: true,
        image: "images/species/tiefling.png",
        simpleDesc: "Marked by horns and tails, Tieflings wield innate magic and resist elemental damage.",
        size: "Medium",
        speed: 30,
        darkvision: 60,
        traits: [
            { name: "Fiendish Legacy", detail: "You are the recipient of a fiendish legacy that grants you supernatural abilities. Choose one of the following options: Abyssal, Chthonic, or Infernal." },
            { name: "Otherworldly Presence", detail: "You know the Thaumaturgy cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability." }
        ],
        legacyOptions: [
            { legacy: "Abyssal", detail: "You have Resistance to Poison damage. At 3rd level, you can cast Ray of Sickness once per Long Rest. At 5th level, you can cast Hold Person once per Long Rest. Intelligence, Wisdom, or Charisma is your spellcasting ability." },
            { legacy: "Chthonic", detail: "You have Resistance to Necrotic damage. At 3rd level, you can cast False Life once per Long Rest. At 5th level, you can cast Ray of Enfeeblement once per Long Rest. Intelligence, Wisdom, or Charisma is your spellcasting ability." },
            { legacy: "Infernal", detail: "You have Resistance to Fire damage. At 3rd level, you can cast Hellish Rebuke once per Long Rest. At 5th level, you can cast Darkness once per Long Rest. Intelligence, Wisdom, or Charisma is your spellcasting ability." }
        ]
    },
];
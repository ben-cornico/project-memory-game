

const dotaHeroes = [
    {
        name: 'Abaddon',
        loc: require('./abaddon.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Alchemist',
        loc: require('./alchemist.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Ancient Apparition',
        loc: require('./ancient_apparition.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Antimage',
        loc: require('./antimage.png'),
        primaryAttr: 'agi',
    },
    {
        name: 'Arc Warden',
        loc: require('./arc_warden.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Axe',
        loc: require('./axe.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Bane',
        loc: require('./bane.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Batrider',
        loc: require('./batrider.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Beastmaster',
        loc: require('./beastmaster.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Bloodseeker',
        loc: require('./bloodseeker.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Bounty Hunter',
        loc: require('./bounty_hunter.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Brewmaster',
        loc: require('./brewmaster.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Bristleback',
        loc: require('./bristleback.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Broodmother',
        loc: require('./broodmother.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Centaur Warrunner',
        loc: require('./centaur.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Chaos Knight',
        loc: require('./chaos_knight.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Chen',
        loc: require('./chen.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Clinkz',
        loc: require('./clinkz.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Clockwerk',
        loc: require('./clockwerk.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Crystal Maiden',
        loc: require('./crystal_maiden.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Dark Seer',
        loc: require('./dark_seer.png'),
        primaryAttr: 'int'
    },
    ,
    {
        name: 'Dark Willow',
        loc: require('./dark_willow.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Dawnbreaker',
        loc: require('./dawnbreaker.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Dazzle',
        loc: require('./dazzle.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Death Prophet',
        loc: require('./death_prophet.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Disruptor',
        loc: require('./disruptor.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Doom Bringer',
        loc: require('./doom_bringer.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Dragon Knight',
        loc: require('./dragon_knight.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Drow Ranger',
        loc: require('./drow_ranger.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Earth Spirit',
        loc: require('./earth_spirit.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Earthshaker',
        loc: require('./earthshaker.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Elder Titan',
        loc: require('./elder_titan.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Ember Spirit',
        loc: require('./ember_spirit.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Enchantress',
        loc: require('./enchantress.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Enigma',
        loc: require('./enigma.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Faceless Void',
        loc: require('./faceless_void.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Grimstroke',
        loc: require('./grimstroke.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Gyrocopter',
        loc: require('./gyrocopter.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Hoodwink',
        loc: require('./hoodwink.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Husker',
        loc: require('./huskar.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Invoker',
        loc: require('./invoker.png'),
        primaryAttr: 'int'
    },
    {
        name: 'IO',
        loc: require('./io.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Jakiro',
        loc: require('./jakiro.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Juggernaut',
        loc: require('./juggernaut.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Keepter Of The Light',
        loc: require('./keeper_of_the_light.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Kunkka',
        loc: require('./kunkka.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Legion Commander',
        loc: require('./legion_commander.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Leshrac',
        loc: require('./leshrac.png'),
        primaryAttr: 'int'
    },
    {
        name: 'lich',
        loc: require('./lich.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Life Stealer',
        loc: require('./life_stealer.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Lina',
        loc: require('./lina.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Lion',
        loc: require('./lion.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Lone Druid',
        loc: require('./lone_druid.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Luna',
        loc: require('./luna.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Lycan',
        loc: require('./lycan.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Magnus',
        loc: require('./magnus.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Marci',
        loc: require('./marci.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Mars',
        loc: require('./mars.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Medusa',
        loc: require('./medusa.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Meepo',
        loc: require('./meepo.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Mirana',
        loc: require('./mirana.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Monkey King',
        loc: require('./monkey_king.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Morphling',
        loc: require('./morphling.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Naga Siren',
        loc: require('./naga_siren.png'),
        primaryAttr: 'agi'
    },
    {
        name: "Nature's Prophet",
        loc: require(`./nature's_prophet.png`),
        primaryAttr: 'agi'
    },
    {
        name: 'Necrolyte',
        loc: require('./necrolyte.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Night Stalker',
        loc: require('./night_stalker.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Nyx Assassin',
        loc: require('./nyx_assassin.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Ogre Magi',
        loc: require('./ogre_magi.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Omniknight',
        loc: require('./omniknight.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Oracle',
        loc: require('./oracle.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Outworld Destroyer',
        loc: require('./outworld_destroyer.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Pangolier',
        loc: require('./pangolier.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Phantom Assassin',
        loc: require('./phantom_assassin.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Phantom Lancer',
        loc: require('./phantom_lancer.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Phoenix',
        loc: require('./phoenix.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Primal Beast',
        loc: require('./primal_beast.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Puck',
        loc: require('./puck.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Pudge',
        loc: require('./pudge.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Pugna',
        loc: require('./pugna.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Queen Of Pain',
        loc: require('./queen_of_pain.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Razor',
        loc: require('./razor.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Riki',
        loc: require('./riki.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Rubick',
        loc: require('./rubick.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Sand King',
        loc: require('./sand_king.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Shadow Demon',
        loc: require('./shadow_demon.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Shadow Fiend',
        loc: require('./shadow_fiend.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Shadow Shaman',
        loc: require('./shadow_shaman.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Silencer',
        loc: require('./silencer.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Skywrath Mage',
        loc: require('./skywrath_mage.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Slardar',
        loc: require('./slardar.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Slark',
        loc: require('./slark.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Snapfire',
        loc: require('./snapfire.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Sniper',
        loc: require('./sniper.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Spectre',
        loc: require('./spectre.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Spirit Breaker',
        loc: require('./spirit_breaker.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Storm Spirit',
        loc: require('./storm_spirit.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Sven',
        loc: require('./sven.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Techies',
        loc: require('./techies.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Templar Assassin',
        loc: require('./templar_assassin.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Terrorblade',
        loc: require('./terrorblade.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Tidehuner',
        loc: require('./tidehunter.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Timbersaw',
        loc: require('./timbersaw.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Tinker',
        loc: require('./tinker.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Tiny',
        loc: require('./tiny.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Treant Protector',
        loc: require('./treant_protector.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Troll Warlord',
        loc: require('./troll_warlord.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Tusk',
        loc: require('./tusk.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Underlord',
        loc: require('./underlord.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Undying',
        loc: require('./undying.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Ursa',
        loc: require('./ursa.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Vengeful Spirit',
        loc: require('./vengeful_spirit.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Venomancer',
        loc: require('./venomancer.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Viper',
        loc: require('./viper.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Visage',
        loc: require('./visage.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Void Spirit',
        loc: require('./void_spirit.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Warlock',
        loc: require('./warlock.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Weaver',
        loc: require('./weaver.png'),
        primaryAttr: 'agi'
    },
    {
        name: 'Windranger',
        loc: require('./windranger.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Winter Wyvern',
        loc: require('./winter_wyvern.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Witch Doctor',
        loc: require('./witch_doctor.png'),
        primaryAttr: 'int'
    },
    {
        name: 'Wraith King',
        loc: require('./wraith_king.png'),
        primaryAttr: 'str'
    },
    {
        name: 'Zeus',
        loc: require('./zeus.png'),
        primaryAttr: 'int'
    }
]

export default dotaHeroes
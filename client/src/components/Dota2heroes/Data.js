const dotaHeroes = [
    {
        name: 'Abaddon',
        loc: require('./abaddon.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Alchemist',
        loc: require('./alchemist.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Ancient Apparition',
        loc: require('./ancient_apparition.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Antimage',
        loc: require('./antimage.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Arc Warden',
        loc: require('./arc_warden.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Axe',
        loc: require('./axe.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Bane',
        loc: require('./bane.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Batrider',
        loc: require('./batrider.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Beastmaster',
        loc: require('./beastmaster.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Bloodseeker',
        loc: require('./bloodseeker.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Bounty Hunter',
        loc: require('./bounty_hunter.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Brewmaster',
        loc: require('./brewmaster.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Bristleback',
        loc: require('./bristleback.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Broodmother',
        loc: require('./broodmother.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Centaur Warrunner',
        loc: require('./centaur.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Chaos Knight',
        loc: require('./chaos_knight.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Chen',
        loc: require('./chen.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Clinkz',
        loc: require('./clinkz.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Clockwerk',
        loc: require('./clockwerk.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Crystal Maiden',
        loc: require('./crystal_maiden.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Dark Seer',
        loc: require('./dark_seer.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Dark Willow',
        loc: require('./dark_willow.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Dawnbreaker',
        loc: require('./dawnbreaker.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Dazzle',
        loc: require('./dazzle.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Death Prophet',
        loc: require('./death_prophet.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Disruptor',
        loc: require('./disruptor.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Doom Bringer',
        loc: require('./doom_bringer.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Dragon Knight',
        loc: require('./dragon_knight.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Drow Ranger',
        loc: require('./drow_ranger.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Earth Spirit',
        loc: require('./earth_spirit.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Earthshaker',
        loc: require('./earthshaker.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Elder Titan',
        loc: require('./elder_titan.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Ember Spirit',
        loc: require('./ember_spirit.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Enchantress',
        loc: require('./enchantress.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Enigma',
        loc: require('./enigma.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Faceless Void',
        loc: require('./faceless_void.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Grimstroke',
        loc: require('./grimstroke.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Gyrocopter',
        loc: require('./gyrocopter.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Hoodwink',
        loc: require('./hoodwink.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Huskar',
        loc: require('./huskar.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Invoker',
        loc: require('./invoker.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'IO',
        loc: require('./io.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Jakiro',
        loc: require('./jakiro.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Juggernaut',
        loc: require('./juggernaut.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Keepter Of The Light',
        loc: require('./keeper_of_the_light.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Kunkka',
        loc: require('./kunkka.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Legion Commander',
        loc: require('./legion_commander.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Leshrac',
        loc: require('./leshrac.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'lich',
        loc: require('./lich.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Life Stealer',
        loc: require('./life_stealer.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Lina',
        loc: require('./lina.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Lion',
        loc: require('./lion.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Lone Druid',
        loc: require('./lone_druid.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Luna',
        loc: require('./luna.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Lycan',
        loc: require('./lycan.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Magnus',
        loc: require('./magnus.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Marci',
        loc: require('./marci.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Mars',
        loc: require('./mars.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Medusa',
        loc: require('./medusa.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Meepo',
        loc: require('./meepo.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Mirana',
        loc: require('./mirana.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Monkey King',
        loc: require('./monkey_king.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Morphling',
        loc: require('./morphling.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Naga Siren',
        loc: require('./naga_siren.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: "Nature's Prophet",
        loc: require(`./natures_prophet.png`),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Necrolyte',
        loc: require('./necrolyte.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Night Stalker',
        loc: require('./night_stalker.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Nyx Assassin',
        loc: require('./nyx_assassin.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Ogre Magi',
        loc: require('./ogre_magi.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Omniknight',
        loc: require('./omniknight.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Oracle',
        loc: require('./oracle.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Outworld Destroyer',
        loc: require('./outworld_destroyer.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Pangolier',
        loc: require('./pangolier.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Phantom Assassin',
        loc: require('./phantom_assassin.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Phantom Lancer',
        loc: require('./phantom_lancer.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Phoenix',
        loc: require('./phoenix.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Primal Beast',
        loc: require('./primal_beast.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Puck',
        loc: require('./puck.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Pudge',
        loc: require('./pudge.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Pugna',
        loc: require('./pugna.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Queen Of Pain',
        loc: require('./queen_of_pain.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Razor',
        loc: require('./razor.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Riki',
        loc: require('./riki.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Rubick',
        loc: require('./rubick.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Sand King',
        loc: require('./sand_king.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Shadow Demon',
        loc: require('./shadow_demon.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Shadow Fiend',
        loc: require('./shadow_fiend.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Shadow Shaman',
        loc: require('./shadow_shaman.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Silencer',
        loc: require('./silencer.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Skywrath Mage',
        loc: require('./skywrath_mage.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Slardar',
        loc: require('./slardar.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Slark',
        loc: require('./slark.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Snapfire',
        loc: require('./snapfire.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Sniper',
        loc: require('./sniper.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Spectre',
        loc: require('./spectre.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Spirit Breaker',
        loc: require('./spirit_breaker.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Storm Spirit',
        loc: require('./storm_spirit.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Sven',
        loc: require('./sven.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Techies',
        loc: require('./techies.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Templar Assassin',
        loc: require('./templar_assassin.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Terrorblade',
        loc: require('./terrorblade.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Tidehuner',
        loc: require('./tidehunter.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Timbersaw',
        loc: require('./timbersaw.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Tinker',
        loc: require('./tinker.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Tiny',
        loc: require('./tiny.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Treant Protector',
        loc: require('./treant_protector.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Troll Warlord',
        loc: require('./troll_warlord.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Tusk',
        loc: require('./tusk.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Underlord',
        loc: require('./underlord.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Undying',
        loc: require('./undying.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Ursa',
        loc: require('./ursa.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Vengeful Spirit',
        loc: require('./vengeful_spirit.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Venomancer',
        loc: require('./venomancer.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Viper',
        loc: require('./viper.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Visage',
        loc: require('./visage.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Void Spirit',
        loc: require('./void_spirit.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Warlock',
        loc: require('./warlock.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Weaver',
        loc: require('./weaver.png'),
        primaryAttr: require('../HeroTypeImg/agi.png')
    },
    {
        name: 'Windranger',
        loc: require('./windranger.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Winter Wyvern',
        loc: require('./winter_wyvern.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Witch Doctor',
        loc: require('./witch_doctor.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    },
    {
        name: 'Wraith King',
        loc: require('./wraith_king.png'),
        primaryAttr: require('../HeroTypeImg/str.png')
    },
    {
        name: 'Zeus',
        loc: require('./zeus.png'),
        primaryAttr: require('../HeroTypeImg/int.png')
    }
]

export default dotaHeroes
const productsData = [
  {
    id: 1,
    name: 'Universal oil CLP 3 in 1',
    description:
      'Clean: safely cleans external and internal metal surfaces, neutralizes residue after shooting.\nLubricant: lubricates external and internal parts of the weapon, reduces friction of moving parts of mechanisms.\nProtect: protects metal from corrosion, displaces moisture, creates a protective film.\nDoes not lose its properties at extreme temperatures from -40°C to +200°C.',
    useTo:
      'Unload the weapon. Run 3-4 patches soaked in CLP through the barrel. Make 10-15 passes with a brush\nsoaked in CLP. Run 3-4 patches soaked in CLP through the barrel until they come out clean.\nAfter that, run 1-2 dry patches. Clean all exposed surfaces with CLP patches. Remove the lubricant\nfrom wooden surfaces. In case of persistent dirt, use special cleaning agents from the DayPatron line.\nFor long-term storage or under unfavorable conditions, use Rust Protection from the DayPatron line.',
    image: ['nso_100.png', 'nso_250.png', 'nso_500.png'],
    volume: ['100ml', '250ml', '500ml'],
    benefits: ['all_in_one.png', 'all_types.png', 'User_friendly.png'],
    composition:
      'C10-C13 hydrocarbons, n-alkanes, isoalkanes, aromatic fatty acids, corrosion inhibitors.',
    shelfLife: '5 years',
    category: 'CLP',
  },
  {
    id: 2,
    name: 'Neutral synthetic oil',
    description:
      'has a neutral acid-alkaline environment. Due to its penetrating properties,\nit cleans and neutralizes residues of combustion products after firing and provides\nprotection against corrosion and atmospheric influence. It ensures necessary lubrication\non all metal surfaces, including various types of small and large caliber weapons.\nThe oil is effective at extreme temperatures ranging from -40°C to +200°C.',
    useTo:
      'Unload the firearm.\nCleaning: Apply the oil to the surface that needs cleaning and leave it for some time.\nThen clean it using regular cleaning tools and remove any dirt residues. If stubborn dirt\nis present, use specialized products from the DayPatron line for cleaning.\n\nLubrication: Apply the oil to the treated surfaces, leave it for some time,\nand then remove the excess oil using patches.',
    image: ['nso_100.png', 'nso_250.png', 'nso_500.png'],
    volume: ['100ml', '250ml', '500ml'],
    benefits: ['step_3.png', 'neutral.png', 'temperature.png'],
    composition:
      'Synthetic oil, cleaning and anticorrosive additives. Neutral pH level.',
    shelfLife: '5 years',
    category: 'Oil',
  },
  {
    id: 3,
    name: 'Rust Protection',
    description:
      'A unique product designed for long-term storage and use in conditions of high\nhumidity and salty air on all types of small and large caliber firearm metal surfaces. It displaces\nmoisture, neutralizes acid action, and prevents corrosion. It creates a dry wax film and maintains\na neutral environment. It does not harm plastic or rubber materials. Odorless. Provides outdoor\nprotection for 6-8 months and indoor protection for 12-15 months.',
    useTo:
      'Unload the firearm.\nPrior to application, clean the surfaces with DayPatron cleaning agents. Apply the\nlubricant in a thin layer to the surface and allow it to penetrate for a few minutes.\nRemove any excess with dry patches, cloths, or brushes.',
    image: ['rpo_100.png', 'rpo_250.png', 'rpo_500.png'],
    volume: ['100ml', '250ml', '500ml'],
    benefits: ['step_3.png', 'all_seasons.png', 'longer.png'],
    composition:
      'C10-C13 hydrocarbons, n-alkanes, isoalkanes, aromatic fatty acids, corrosion inhibitors.',
    shelfLife: '5 years',
    category: 'Oil',
  },
  {
    id: 4,
    name: 'Carbon Killer',
    description:
      'is a new high-performance cleaner that instantly removes carbon deposits, plastic,\nlead, grease, and lubricants from barrels, chambers, gas pistons, interchangeable chokes,\nand other parts of firearms of all types and calibers. It is safe to use on all types of steel and is odorless.',
    useTo:
      'Unload the firearm.\nRun 3-4 patches soaked in carbon remover through the barrel. Make 10-15 passes with a cleaning\nrod soaked in the solution and let it sit for 3-5 minutes. Repeat the first step until the patches\ncome out clean, then run 3 dry patches through and apply Neutral Synthetic Oil DayPatron.\nFor long-term storage, use Rust Protection DayPatron.',
    image: [
      { url: 'carbon100.png' },
      { url: 'carbon250.png' },
      { url: 'carbon500.png' },
    ],
    volume: ['100ml', '250ml', '500ml'],
    benefits: ['step_1.png', 'high_penetration.png', 'easy.png'],
    composition:
      'Mixture of aromatic organic acids, anionic surfactants <5%, amino alcohols, organic compounds of lactams class, C10-C13 hydrocarbons, n-alkanes, isoalkanes, aromatic fatty acids, corrosion inhibitors.',
    shelfLife: '5 years',
    category: 'Cleaner',
  },
  {
    id: 5,
    name: 'Copper Killer',
    description:
      'instantly removes copper deposits from all types of firearms, small and large caliber.\nNeutralizes all corrosive residues. Safe for use in barrels of all steel types. Non-flammable, free of\nammonia and odor, non-toxic and biodegradable.',
    useTo:
      'Unload the firearm.\nRun 3-4 patches soaked in the solution through the barrel. Make 10-15 passes with a nylon brush soaked\nin the solution, and leave it for 3-5 minutes. Run soaked patches through again until they become clean.\nThen run 2-3 dry patches and apply Neutral Synthetic Oil DayPatron.\nFor long-term storage, use Rust Protection DayPatron.',
    image: ['cooper_k_100.png', 'cooper_k_250.png', 'cooper_k_500.png'],
    volume: ['100ml', '250ml', '500ml'],
    benefits: ['step_1-2.png', 'ammonia_free.png', 'safety.png'],
    composition:
      'Mixture of aromatic organic acids, anionic surfactants <5%, organic compounds of lactam class.',
    shelfLife: '5 years',
    category: 'Cleaner',
  },
  {
    id: 6,
    name: 'Liquidator',
    description:
      'instantly reacts and removes all types of fouling and deposits after shooting: carbon, powder,\ncopper, and others, in all types of firearms of any caliber. Neutralizes all corrosive residues.\nSafe for all types of steel. Non-flammable, ammonia-free, and odorless.',
    useTo:
      'Unload the firearm. Run 3-4 patches soaked in Bore Cleaner through the barrel. Make 10-15 passes\nwith a nylon brush soaked in Bore Cleaner and leave it for 3-5 minutes. Run patches soaked in the solution\nuntil they come out clean. Run 2-3 dry patches and apply Neutral Synthetic Oil DayPatron.\nFor long-term storage, use Rust Protection DayPatron.',
    image: ['liquidator_100.png', 'liquidator_250.png', 'liquidator_500.png'],
    volume: ['100ml', '250ml', '500ml'],
    benefits: ['step_1-2.png', 'ammonia_free.png', 'user_friendly.png'],
    composition:
      'Mixture of aromatic organic acids, anionic surfactants <5%, organic compounds of lactam class.',
    shelfLife: '5 years',
    category: 'Cleaner',
  },
];

export default productsData;
const webData = {
  // RANKING (Source: /www.worldtabletennis.com / Rankings last updated on 16/02/2026) ---

  // --- PART 1: MEN'S SINGLES ---
  menPlayers: {
    title: "WTT World Rankings",
    lastUpdated: "February 16, 2026",
    items: [
      {
        id: "wang-chuqin",
        name: "WANG Chuqin",
        rank: 1,
        country: "China",
        flag: "cn.svg",
        points: 9750,
        equipment: {
          blade: "DHS Hurricane Wang Chuqin",
          forehand: "DHS Hurricane 3 Neo National",
          backhand: "DHS Hurricane 37",
        },
        profileUrl: "https://www.worldtabletennis.com/playerDescription?playerId=121558",
      },
      {
        id: "hugo-calderano",
        name: "Hugo CALDERANO",
        rank: 2,
        country: "Brazil",
        flag: "br.svg",
        points: 6050,
        equipment: {
          blade: "Cornilleau Hugo Calderano SAL",
          forehand: "Cornilleau Target Pro GT-X51",
          backhand: "Cornilleau Target Pro GT-X51",
        },
        profileUrl: "https://www.worldtabletennis.com/playerDescription?playerId=115641",
      },
      {
        id: "lin-shidong",
        name: "LIN Shidong",
        rank: 3,
        country: "China",
        flag: "cn.svg",
        points: 5875,
        equipment: {
          blade: "Stiga Carbonado 45",
          forehand: "DHS Hurricane 3 Neo National",
          backhand: "Butterfly Dignics 05",
        },
        profileUrl: "https://www.worldtabletennis.com/playerDescription?playerId=137237",
      },
      {
        id: "tomokazu-harimoto",
        name: "Tomokazu HARIMOTO",
        rank: 4,
        country: "Japan",
        flag: "jp.svg",
        points: 5870,
        equipment: {
          blade: "Butterfly Harimoto Tomokazu Innerforce ALC",
          forehand: "Butterfly Dignics 05",
          backhand: "Butterfly Dignics 05",
        },
        profileUrl: "https://www.worldtabletennis.com/playerDescription?playerId=123980",
      },
      {
        id: "truls-moregard",
        name: "Truls MOREGARD",
        rank: 5,
        country: "Sweden",
        flag: "se.svg",
        points: 5840,
        equipment: {
          blade: "Stiga Cybershape Carbon",
          forehand: "Stiga DNA Platinum XH",
          backhand: "Stiga DNA Platinum XH",
        },
        profileUrl: "https://www.worldtabletennis.com/playerDescription?playerId=122044",
      },
    ],
  },

  // --- PART 2: WOMEN'S SINGLES ---
  womenPlayers: {
    title: "WTT Women's Singles World Rankings",
    lastUpdated: "February 16, 2026",
    items: [
      {
        id: "sun-yingsha",
        name: "SUN Yingsha",
        rank: 1,
        country: "China",
        flag: "cn.svg",
        points: 10125,
        equipment: {
          blade: "DHS Hurricane Sun Yingsha",
          forehand: "DHS Hurricane 3 Neo National",
          backhand: "DHS Hurricane 37",
        },
        profileUrl: "https://www.worldtabletennis.com/playerDescription?playerId=131163",
      },
      {
        id: "wang-manyu",
        name: "WANG Manyu",
        rank: 2,
        country: "China",
        flag: "cn.svg",
        points: 8248,
        equipment: {
          blade: "Butterfly Fan Zhendong Super ALC",
          forehand: "DHS Hurricane 3 Neo National",
          backhand: "Butterfly Tenergy 05",
        },
        profileUrl: "https://www.worldtabletennis.com/playerDescription?playerId=121411",
      },
      {
        id: "chen-xingtong",
        name: "CHEN Xingtong",
        rank: 3,
        country: "China",
        flag: "cn.svg",
        points: 5375,
        equipment: {
          blade: "Stiga Carbonado 45",
          forehand: "DHS Hurricane 3 Neo National",
          backhand: "Butterfly Tenergy 05",
        },
        profileUrl: "https://www.worldtabletennis.com/playerDescription?playerId=121403",
      },
      {
        id: "zhu-yuling",
        name: "ZHU Yuling",
        rank: 4,
        country: "Macao",
        flag: "mo.svg",
        points: 4790,
        equipment: {
          blade: "Butterfly Innerforce Layer ZLC",
          forehand: "DHS Hurricane 3 Neo National",
          backhand: "Butterfly Tenergy 05",
        },
        profileUrl: "https://www.worldtabletennis.com/playerDescription?playerId=117332",
      },
      {
        id: "kuai-man",
        name: "KUAI Man",
        rank: 5,
        country: "China",
        flag: "cn.svg",
        points: 4125,
        equipment: {
          blade: "Stiga Carbonado 45",
          forehand: "DHS Hurricane 3 Neo National",
          backhand: "Butterfly Dignics 05",
        },
        profileUrl: "https://www.worldtabletennis.com/playerDescription?playerId=135049",
      },
    ],
  },

  // --- PART 3: EQUIPMENT (Reference: ttex.se Picture and Approximate Prices) ---
  equipment: {
    title: "Equipment Showcase",
    priceDisclaimer: "All prices are approximate and based on ttex.se listings.",
    brands: [
      {
        name: "Butterfly",
        blades: [
          {
            id: "butterfly_mizutani_super_zlcweb",
            name: "Butterfly Jun Mizutani Super ZLC",
            Price: "4199 SEK",
            Speed: "Offensive+",
            Control: "Low",
            Material: "Wood + Carbon Fiber",
            Buy: "https://www.ttex.se/butterfly-jun-mizutani-super-zlc.html",
            Description:
              "The Butterfly Jun Mizutani Super ZLC is an offensive table tennis blade developed for players looking for high speed, a large sweet spot and maximum spin potential. Through advanced processing technology, this table tennis blade has a perfect balance between ZL fiber and carbon fiber, which reduces energy loss and provides explosive response in every stroke. The Butterfly Jun Mizutani Super ZLC is characterized not only by its fantastic feel but also by its elegant design and skillful craftsmanship. Perfect for players who want to combine precision, power and playing feel at the highest level.",
          },
          {
            id: "butterfly_harimoto",
            name: "Butterfly Harimoto Tomokazu Innerforce Super ZLC",
            Price: "4199 SEK",
            Speed: "Offensive+",
            Control: "Medium",
            Material: "Wood + Carbon Fiber",
            Buy: "https://www.ttex.se/butterfly-harimoto-tomokazu-innerforce-super-zlc.html",
            Description:
              "The Butterfly Harimoto Tomokazu Innerforce Super ZLC is the first Innerforce blade to use Super ZLC fibers, making it the fastest in Butterfly's Innerforce series. Developed with Japanese star Tomokazu Harimoto, this table tennis blade features a unique construction where the hard Super-ZLC fibers are placed closer to the core instead of the surface, providing a softer ball strike and improved control. The result is a table tennis blade that allows for precise and powerful attacks regardless of distance from the table, while providing a nice feel in the soft strokes. An excellent choice for offensive players who want a combination of speed, spin and precision.",
          },
          {
            id: "butterfly-lin",
            name: "Butterfly Lin Yun Ju Super ZLC",
            Price: "4199 SEK",
            Speed: "Offensive+",
            Control: "Medium",
            Material: "Wood + Carbon Fiber",
            Buy: "https://www.ttex.se/butterfly-lin-yun-ju-super-zlc.html",
            Description:
              "The Butterfly Lin Yun-Ju Super ALC is an advanced offensive table tennis blade designed for players who want high speed, stability and a distinct ball feel. It is constructed with a combination of woven carbon fiber and high-density ZL fiber, which provides an explosive ball strike while dampening unwanted vibrations. The wide wooden surface provides extra stability and improves the game's precision during fast attacks and counterattacks.",
          },
        ],
        rubbers: [
          {
            id: "zyre03",
            name: "Butterfly Zyre 03",
            Price: "1009 SEK",
            Hardness: "Hard",
            Speed: "High",
            Spin: "High",
            Buy: "https://www.ttex.se/butterfly-zyre-03.html",
            Description:
              "The Butterfly Zyre 03 draws power and spin, allowing for deep-penetrating shots on the opponent's court with a dramatic arced trajectory. The unique rubber compound, which increases flexibility without losing elasticity, keeps the ball on the surface rubber better and provides improved ball contact. You get both a higher and longer trajectory, which suits today's game with strong topspin from both backhand and forehand.",
          },
          {
            id: "dignics64",
            name: "Butterfly Dignics 64",
            Price: "999 SEK",
            Hardness: "Medium",
            Speed: "High",
            Spin: "High",
            Buy: "https://www.ttex.se/butterfly-dignics-64.html",
            Description:
              "Butterfly Dignics 64 is an offensive, medium-hard table tennis rubber that combines high speed and spin with precision. Butterfly's Spring Sponge X technology provides longer ball contact and better grip for powerful topspin close to the table and at medium distances.",
          },
          {
            id: "dignics80",
            name: "Butterfly Dignics 80",
            Price: "999 SEK",
            Hardness: "Hard",
            Speed: "High",
            Spin: "High",
            Buy: "https://www.ttex.se/butterfly-dignics-80.html",
            Description:
              "Butterfly Dignics 80 is a top-class hard table tennis rubber, optimized for the modern offensive game. With Butterfly's Spring Sponge X technology, this table tennis rubber delivers high speed and impressive precision. Dignics 80 uses the same nub structure as Tenergy 80 but delivers even more grip and control. With a slightly flatter ball trajectory compared to Dignics 64, it is ideal for powerful topspin close to the table and at medium distances.",
          },
        ],
      },
      {
        name: "Stiga",
        blades: [
          {
            id: "stiga_cybershape_carbon_cwt_trulsweb",
            name: "Stiga Cybershape Carbon CWT Truls Edition",
            Price: "2799 SEK",
            Speed: "Offensive+",
            Control: "Medium",
            Material: "Wood + Carbon Fiber",
            Buy: "https://www.ttex.se/stiga-cybershape-carbon-cwt-truls-edition.html",
            Description:
              " Truls Möregårdh's choice of table tennis blade for a fast attacking game. The Stiga Cybershape Carbon CWT Truls Edition is a very fast offensive blade with the unique Cybershape shape that provides a 5% larger hitting surface and an increased perceived sweet spot. The shape also brings you closer to the table compared to a round table tennis blade. The lightweight and technically advanced carbon fiber made in Germany compensates for the larger shape, so that the table tennis blade does not become heavier despite the larger total surface area. ",
          },

          {
            id: "stiga_cybershape_carbon_cwtweb",
            name: "Stiga Cybershape Carbon CWT",
            Price: "2499 SEK",
            Speed: "Offensive+",
            Control: "Medium",
            Material: "Wood + Carbon Fiber",
            Buy: "https://www.ttex.se/stiga-cybershape-carbon-cwt.html",
            Description:
              "Stiga Cybershape Carbon CWT - Fast offensive blade with customizable weight. The Stiga Cybershape Carbon CWT is a fast offensive blade, built on the popular Cybershape Carbon but with the added ability to adjust the weight. The unique Cybershape shape that star Truls Möregårdh plays with provides a larger, optimal hitting surface, while the center of gravity is moved up on the blade for a more stable hit and more powerful strokes without losing control.",
          },
          {
            id: "aura_cs_master_webb",
            name: "Stiga Aura Hybrid Carbon Cybershape",
            Price: "2199 SEK",
            Speed: "Offensive+",
            Control: "Medium",
            Material: "Wood + Carbon Fiber",
            Buy: "https://www.ttex.se/stiga-aura-hybrid-carbon-cybershape.html",
            Description:
              "Stiga Aura Hybrid Carbon Cybershape - offensive blade with a unique combination of speed and control. The Stiga Aura Hybrid Carbon Cybershape has a unique combination of speed and control and a blade for offensive players who want to control the game with explosiveness in every stroke. With an innovative hybrid construction of carbon fiber and a green-colored, vibration-damping material, you get a fast table tennis blade with magical ball feel and stability without having to compromise on speed. ",
          },
        ],
        rubbers: [
          {
            id: "helix-m",
            name: "Stiga Helix Platinum M",
            Price: "799 SEK",
            Hardness: "Medium",
            Speed: "High",
            Spin: "High",
            Buy: "https://www.ttex.se/stiga-helix-platinum-m.html",
            Description:
              "Stiga Helix Platinum M is a premium table tennis rubber for the offensive player who seeks the best. The unique sponge technology Optimized Energy Sponge with small pores gives you up to 11% higher energy return = more power in your strokes without having to take more. In combination with the elastic surface rubber, you also get a higher and more reliable arc in the game with topspin.",
          },
          {
            id: "dragon_power_525",
            name: "Stiga DNA Dragon Power 52.5",
            Price: "699 SEK",
            Hardness: "Medium",
            Speed: "High",
            Spin: "Extra high",
            Buy: "https://www.ttex.se/stiga-dna-dragon-power-52-5.html",
            Description:
              "Stiga DNA Dragon Power 52.5 is a fast table tennis rubber designed for today's modern and offensive playing style. With a medium-hard sponge of 52.5°, this table tennis rubber offers an excellent combination of speed, spin and control. Developed together with top players, DNA Dragon Power delivers both precision and power to dominate at the table.",
          },
          {
            id: "dna_hybrid_m",
            name: "Stiga DNA Hybrid M",
            Price: "679 SEK",
            Hardness: "Medium",
            Speed: "Medium",
            Spin: "High",
            Buy: "https://www.ttex.se/stiga-dna-hybrid-m.html",
            Description:
              "The Stiga DNA Hybrid M is designed for players who want a modern table tennis rubber that delivers both power and spin. With a slightly stickier surface rubber and a medium-hard sponge of 47.5°, this rubber offers very good speed and precision for aggressive topspin strokes and effective attacks.",
          },
        ],
      },
    ],
  },

  // --- PART 4: About ---
  aboutData: {
    personalInfo: {
      name: "Arash",
      startAge: 15,
      currentClub: "Hammarby IF Boardtennis",
      location: "Stockholm, Sweden",
      email: "safari.arash@gmail.com",
      bio: "Web developer and table tennis player & coach. I started my sports career at the age of 13 (1995) and have played for various clubs in Iran and Sweden since 2015. I combine my passion for technology with table tennis experience.",
    },
    experience: [
      { year: "2015 - 2016", club: "Asad Club", city: "Mashhad", country: "Iran" },
      { year: "2016 - 2018", club: "Parham Club", city: "Mashhad", country: "Iran" },
      { year: "2018 - 2023", club: "Paknejad Sport", city: "Tehran", country: "Iran" },
      { year: "2023 - 2025", club: "Hammarby IF Boardtennis", city: "Stockholm", country: "Sweden" },
      {
        year: "2025 - Now ",
        club: "Injury Hiatus (Shoulder Injury)",
        city: "Stockholm",
        country: "Sweden",
      },
    ],
    certifications: [
      {
        title: "Certified National Level 3 Coach",
        organization: "Iran Table Tennis Federation",
        year: "2017",
        type: "Coaching",
      },
      {
        title: "National Table Tennis Umpire (Grade 3)",
        organization: "Iran Table Tennis Federation",
        year: "2017",
        type: "Referee",
      },
    ],
    myGallery: [
      { id: "waldner-arash", caption: "With the Legend, Jan-Ove Waldner - A true inspiration." },
      { id: "falk-arash", caption: "Meeting Mattias Falck at the club. Inspiring talk with a world-class champion." },
      { id: "stockholmliga1", caption: "Stockholm Liga - Series 6 - Sweden (2024)" },
      { id: "stockholmliga2", caption: "Stockholm Liga - Series 7 - Sweden (2023) " },
      { id: "stockholmliga3", caption: "Stockholm Liga - Series 7 - Sweden (2023)" },
      {
        id: "qazvin-2019",
        caption: "Participating in the 3rd National Companies Tournament - Iran (2019).",
      },
      {
        id: "mashhad-singles",
        caption: "Silver Medalist - Singles Competition - Companies Tournament - Iran (2019).",
      },
      { id: "mashhad-team", caption: "3rd Place Achievement - Team Companies Tournament - Iran (2018)" },
    ],
  },
};

export default webData;

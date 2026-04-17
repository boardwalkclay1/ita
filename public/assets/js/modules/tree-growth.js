// assets/js/modules/tree-growth.js

window.STUDY_MODULES = window.STUDY_MODULES || {};

window.STUDY_MODULES["tree-growth"] = {
  title: "🌿 Growth & Physiology",
  overview: `
    Tree growth is driven by two major processes: primary growth (height/length)
    and secondary growth (diameter). These processes are controlled by hormones,
    environmental cues, and the tree’s internal transport systems.
  `,
  sections: [
    {
      heading: "Primary Growth (Height & Length)",
      body: `
        Primary growth occurs at the apical meristems — the growing tips of shoots and roots.
        This is how trees extend upward toward light and downward into soil.
      `,
      bullets: [
        "Occurs at shoot tips and root tips (apical meristems).",
        "Responsible for height increase and new leaf/branch formation.",
        "Influenced by light availability, hormones, and species genetics.",
        "Produces new leaves, buds, and fine roots."
      ]
    },
    {
      heading: "Secondary Growth (Diameter)",
      body: `
        Secondary growth increases trunk and branch thickness.
        This is controlled by the vascular cambium, which produces new xylem and phloem annually.
      `,
      bullets: [
        "Vascular cambium produces new xylem (inside) and phloem (outside).",
        "Annual rings form from seasonal growth differences.",
        "Heartwood forms as older xylem becomes non-living structural tissue.",
        "Bark thickens as phloem and cork cambium develop."
      ]
    },
    {
      heading: "Photosynthesis",
      body: `
        Photosynthesis is the foundation of all tree energy.
        Leaves convert sunlight, CO₂, and water into sugars that fuel growth.
      `,
      bullets: [
        "Occurs in chloroplasts within leaf cells.",
        "Produces glucose used for growth, defense, and storage.",
        "Requires adequate sunlight, water, and nutrient availability.",
        "Shade-tolerant species can photosynthesize at lower light levels."
      ]
    },
    {
      heading: "Respiration",
      body: `
        Respiration breaks down sugars to release energy.
        Trees respire day and night, even when photosynthesis stops.
      `,
      bullets: [
        "Occurs in all living cells.",
        "Consumes oxygen and releases CO₂.",
        "Rate increases with temperature and stress.",
        "Essential for root growth and wound response."
      ]
    },
    {
      heading: "Transpiration",
      body: `
        Transpiration is the evaporation of water from leaf surfaces.
        This creates a suction force that pulls water upward from the roots.
      `,
      bullets: [
        "Drives the upward movement of water through xylem.",
        "Cools the tree during hot weather.",
        "Regulated by stomata opening and closing.",
        "Affected by humidity, wind, and temperature."
      ]
    },
    {
      heading: "Tree Hormones",
      body: `
        Hormones regulate growth, dormancy, wound response, and directional growth.
        They act as chemical messengers throughout the tree.
      `,
      bullets: [
        "Auxins: control apical dominance and root initiation.",
        "Gibberellins: stimulate shoot elongation.",
        "Cytokinins: promote cell division and bud activation.",
        "Ethylene: regulates stress response and fruit ripening.",
        "Abscisic Acid (ABA): controls dormancy and drought response."
      ]
    },
    {
      heading: "Environmental Influences",
      body: `
        Trees constantly respond to environmental cues.
        Light, gravity, temperature, and water availability shape growth patterns.
      `,
      bullets: [
        "Phototropism: shoots grow toward light.",
        "Gravitropism: roots grow downward, shoots upward.",
        "Drought reduces leaf size and increases root growth.",
        "Cold temperatures trigger dormancy and hardening."
      ]
    }
  ],
  glossary: [
    {
      term: "Apical Meristem",
      definition: "Growth tissue at shoot and root tips responsible for primary growth."
    },
    {
      term: "Vascular Cambium",
      definition: "A ring of meristematic tissue that produces new xylem and phloem."
    },
    {
      term: "Stomata",
      definition: "Leaf pores that regulate gas exchange and transpiration."
    },
    {
      term: "Auxin",
      definition: "A hormone that controls apical dominance and root initiation."
    },
    {
      term: "Phototropism",
      definition: "Growth response toward light."
    }
  ],
  quiz: [
    {
      question: "Which tissue is responsible for secondary growth?",
      options: [
        "Apical meristem",
        "Vascular cambium",
        "Phloem",
        "Root hairs"
      ],
      answer: 1,
      explanation: "The vascular cambium produces new xylem and phloem, increasing diameter."
    },
    {
      question: "What drives the upward movement of water in trees?",
      options: [
        "Respiration",
        "Gravity",
        "Transpiration pull",
        "Phloem pressure"
      ],
      answer: 2,
      explanation: "Transpiration creates a suction force that pulls water upward through xylem."
    },
    {
      question: "Which hormone maintains apical dominance?",
      options: [
        "Auxin",
        "Ethylene",
        "Cytokinin",
        "ABA"
      ],
      answer: 0,
      explanation: "Auxin produced at shoot tips suppresses lateral bud growth."
    }
  ]
};

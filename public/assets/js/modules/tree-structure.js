// assets/js/modules/tree-structure.js

window.STUDY_MODULES = window.STUDY_MODULES || {};

window.STUDY_MODULES["tree-structure"] = {
  title: "🌱 Tree Structure",
  overview: `
    Trees are organized into three main structural zones: roots, trunk, and crown.
    Each zone has specialized tissues that support stability, transport, and energy production.
  `,
  sections: [
    {
      heading: "Root System",
      body: `
        The root system anchors the tree and absorbs water and nutrients.
        Most fine absorbing roots live in the upper 18–24 inches of soil, spreading far beyond the dripline.
        Healthy roots depend on oxygen, good soil structure, and avoiding compaction.
      `,
      bullets: [
        "Fine feeder roots absorb water and nutrients near the soil surface.",
        "Structural roots provide anchorage and resist wind forces.",
        "Mycorrhizal fungi form symbiotic relationships that increase nutrient uptake.",
        "Roots avoid compacted, waterlogged, or poorly aerated soil."
      ]
    },
    {
      heading: "Trunk & Vascular System",
      body: `
        The trunk is the main support column and houses the vascular system that moves water and sugars.
        Different layers of wood and bark have distinct roles in transport, protection, and strength.
      `,
      bullets: [
        "Xylem (sapwood) moves water and dissolved minerals upward from the roots.",
        "Phloem transports sugars and hormones from the leaves to the rest of the tree.",
        "Cambium is a thin growth layer that produces new xylem and phloem.",
        "Heartwood is older, non-living wood that provides structural strength."
      ]
    },
    {
      heading: "Crown (Branches, Twigs, Leaves)",
      body: `
        The crown is the energy factory of the tree.
        Leaves capture light for photosynthesis, while branches distribute weight and shape the tree’s form.
      `,
      bullets: [
        "Leaves perform photosynthesis, converting light, CO₂, and water into sugars.",
        "Branch structure affects wind loading and risk of failure.",
        "Bud arrangement (opposite, alternate, whorled) helps identify species.",
        "Crown density influences light penetration and interior branch survival."
      ]
    }
  ],
  glossary: [
    {
      term: "Xylem",
      definition: "Wood tissue that conducts water and dissolved minerals upward from the roots."
    },
    {
      term: "Phloem",
      definition: "Living tissue that transports sugars and hormones throughout the tree."
    },
    {
      term: "Cambium",
      definition: "Thin layer of meristematic cells that produces new xylem and phloem."
    },
    {
      term: "Heartwood",
      definition: "Inner, non-living wood that provides structural strength and often darkens with age."
    },
    {
      term: "Mycorrhizae",
      definition: "Beneficial fungi that associate with roots and increase nutrient and water uptake."
    }
  ],
  quiz: [
    {
      question: "Which tree zone is primarily responsible for anchorage and water uptake?",
      options: [
        "Crown",
        "Trunk",
        "Root system",
        "Cambium"
      ],
      answer: 2,
      explanation: "The root system anchors the tree and absorbs water and nutrients from the soil."
    },
    {
      question: "Which tissue moves water upward from roots to leaves?",
      options: [
        "Phloem",
        "Xylem",
        "Cambium",
        "Heartwood"
      ],
      answer: 1,
      explanation: "Xylem (sapwood) conducts water and dissolved minerals upward."
    },
    {
      question: "What is the main function of the cambium?",
      options: [
        "Store sugars",
        "Protect the tree from insects",
        "Produce new xylem and phloem",
        "Anchor the tree"
      ],
      answer: 2,
      explanation: "The cambium is a growth layer that produces new xylem and phloem cells."
    }
  ]
};

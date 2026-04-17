window.STUDY_MODULES["soil-water"] = {
  title: "💧 Water Movement",
  overview: `
    Water movement in soil determines root health, nutrient uptake, and overall tree vigor.
    Arborists must understand infiltration, percolation, drainage, and soil-water balance.
  `,
  sections: [
    {
      heading: "Infiltration",
      body: `
        Infiltration is the process of water entering the soil surface.
        Soil texture, compaction, and organic matter strongly influence infiltration rates.
      `,
      bullets: [
        "Fastest in sandy soils.",
        "Slowest in compacted clay.",
        "Improved by mulch and organic matter.",
        "Reduced by surface crusting and compaction."
      ]
    },
    {
      heading: "Percolation",
      body: `
        Percolation is the downward movement of water through soil layers.
        It determines how long water remains available to roots.
      `,
      bullets: [
        "High percolation = fast drainage.",
        "Low percolation = waterlogging risk.",
        "Affected by soil structure and pore size.",
        "Roots require oxygen; poor percolation reduces aeration."
      ]
    },
    {
      heading: "Drainage",
      body: `
        Drainage describes how quickly water exits the root zone.
        Poor drainage leads to anaerobic conditions and root rot.
      `,
      bullets: [
        "Clay soils drain slowly.",
        "Sandy soils drain rapidly.",
        "Slope affects surface runoff.",
        "Organic matter improves drainage balance."
      ]
    }
  ],
  glossary: [
    { term: "Infiltration", definition: "Water entering the soil surface." },
    { term: "Percolation", definition: "Downward movement of water through soil layers." },
    { term: "Anaerobic", definition: "Low-oxygen conditions harmful to roots." }
  ],
  quiz: [
    {
      question: "Which soil type has the slowest drainage?",
      options: ["Sand", "Silt", "Clay", "Loam"],
      answer: 2,
      explanation: "Clay holds water tightly and drains slowly."
    }
  ]
};

window.STUDY_MODULES["risk-targets"] = {
  title: "🎯 Targets",
  overview: `
    Targets are people, property, or infrastructure that could be struck if a tree or branch fails.
    Identifying targets is essential for assessing overall tree risk.
  `,
  sections: [
    {
      heading: "People",
      body: `
        Human presence dramatically increases risk ratings. Arborists must consider frequency,
        duration, and predictability of occupancy.
      `,
      bullets: [
        "Playgrounds and parks have high occupancy.",
        "Sidewalks and entrances have predictable foot traffic.",
        "Workers on job sites are temporary but high‑risk targets.",
        "Events increase temporary occupancy levels."
      ]
    },
    {
      heading: "Property",
      body: `
        Property damage includes vehicles, homes, fences, and outdoor structures.
      `,
      bullets: [
        "Vehicles parked under trees are common targets.",
        "Roofs and gutters are vulnerable to branch drop.",
        "Sheds and patios often fall within the drop zone.",
        "Insurance claims often involve tree‑related damage."
      ]
    },
    {
      heading: "Infrastructure",
      body: `
        Infrastructure includes utilities, roads, and public facilities.
      `,
      bullets: [
        "Power lines increase hazard severity.",
        "Roadways require traffic control during work.",
        "Sidewalks and paths increase pedestrian exposure.",
        "Sewer lines can be damaged by root intrusion."
      ]
    }
  ],
  glossary: [
    { term: "Occupancy", definition: "Frequency and duration of people present in a target zone." },
    { term: "Target Zone", definition: "Area where a falling tree or branch is likely to land." }
  ],
  quiz: [
    {
      question: "Which factor increases risk the most?",
      options: ["Tree height", "Occupancy", "Species", "Soil type"],
      answer: 1,
      explanation: "High occupancy dramatically increases risk rating."
    }
  ]
};

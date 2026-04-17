window.STUDY_MODULES["risk-mitigation"] = {
  title: "🛠 Mitigation",
  overview: `
    Mitigation reduces the likelihood of tree failure or the consequences of failure.
    Arborists choose mitigation strategies based on defect severity, target value, and tree condition.
  `,
  sections: [
    {
      heading: "Pruning",
      body: `
        Pruning reduces weight, removes hazards, and improves structure.
      `,
      bullets: [
        "Reduction pruning decreases lever arm forces.",
        "Cleaning removes dead or weak branches.",
        "Structural pruning improves long‑term stability.",
        "Avoid topping, which increases decay and weak regrowth."
      ]
    },
    {
      heading: "Cabling & Bracing",
      body: `
        Support systems reinforce weak unions and reduce movement.
      `,
      bullets: [
        "Cables installed in upper canopy reduce dynamic movement.",
        "Braces installed through stems prevent splitting.",
        "Used for co‑dominant stems with included bark.",
        "Must follow ANSI A300 Part 3 standards."
      ]
    },
    {
      heading: "Target Management",
      body: `
        Reducing exposure to targets lowers overall risk.
      `,
      bullets: [
        "Move seating, vehicles, or pathways.",
        "Install barriers or fencing.",
        "Redirect foot traffic.",
        "Schedule work during low‑occupancy periods."
      ]
    },
    {
      heading: "Tree Removal",
      body: `
        Removal is the last resort when defects are severe and cannot be mitigated.
      `,
      bullets: [
        "Used when failure is imminent.",
        "Required when decay compromises structural integrity.",
        "Necessary when targets cannot be moved.",
        "Must follow safe rigging and felling procedures."
      ]
    }
  ],
  glossary: [
    { term: "Mitigation", definition: "Actions taken to reduce risk associated with tree failure." },
    { term: "Lever Arm", definition: "Distance from defect to load, affecting bending force." }
  ],
  quiz: [
    {
      question: "Which mitigation method reduces dynamic movement in the canopy?",
      options: ["Pruning", "Cabling", "Removal", "Target relocation"],
      answer: 1,
      explanation: "Cabling reduces movement between stems and branches."
    }
  ]
};

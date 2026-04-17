window.STUDY_MODULES["ppe"] = {
  title: "🪖 Personal Protective Equipment (PPE)",
  overview: `
    PPE protects arborists from common hazards such as falling debris, chainsaw kickback,
    loud equipment, and eye injuries. Proper PPE is mandatory under ANSI Z133.
  `,
  sections: [
    {
      heading: "Head Protection",
      body: `
        Helmets protect against falling limbs, impact, and electrical hazards.
      `,
      bullets: [
        "Must meet ANSI Z89.1 standards.",
        "Chin straps required for climbing.",
        "Replace after impact or visible damage."
      ]
    },
    {
      heading: "Eye & Face Protection",
      body: `
        Shields eyes from sawdust, debris, and chemical sprays.
      `,
      bullets: [
        "Safety glasses required at all times.",
        "Mesh visors protect from chips but not fine dust.",
        "Full face shields for grinding operations."
      ]
    },
    {
      heading: "Hearing Protection",
      body: `
        Chainsaws and chippers exceed safe decibel levels.
      `,
      bullets: [
        "Ear muffs or plugs required above 85 dB.",
        "Double protection recommended for chippers.",
        "Prolonged exposure causes permanent hearing loss."
      ]
    },
    {
      heading: "Leg Protection",
      body: `
        Chainsaw chaps and pants reduce injury severity during kickback.
      `,
      bullets: [
        "Made of cut‑resistant fibers.",
        "Must cover full length of leg.",
        "Replace if damaged or contaminated with oil."
      ]
    }
  ],
  glossary: [
    { term: "ANSI Z133", definition: "Safety standard governing arboricultural operations." },
    { term: "Decibel (dB)", definition: "Unit measuring sound intensity." }
  ],
  quiz: [
    {
      question: "What PPE is required when operating a chipper?",
      options: ["Helmet only", "Ear plugs only", "Eye and hearing protection", "No PPE needed"],
      answer: 2,
      explanation: "Chippers exceed safe noise levels and eject debris."
    }
  ]
};

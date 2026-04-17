window.STUDY_MODULES["jobsite-safety"] = {
  title: "🚧 Jobsite Safety",
  overview: `
    Jobsite safety ensures all workers, pedestrians, and property remain protected.
    Clear communication, hazard zones, and proper setup prevent accidents.
  `,
  sections: [
    {
      heading: "Communication",
      body: `
        Crews must coordinate movements, signals, and equipment operation.
      `,
      bullets: [
        "Use standardized hand signals.",
        "Maintain radio or verbal communication.",
        "Stop work immediately if communication is lost."
      ]
    },
    {
      heading: "Drop Zones",
      body: `
        Areas where limbs or logs may fall must be clearly marked and enforced.
      `,
      bullets: [
        "No one enters drop zone during cutting.",
        "Use cones, tape, or spotters.",
        "Adjust drop zone based on wind and slope."
      ]
    },
    {
      heading: "Traffic Control",
      body: `
        Urban jobs require managing vehicles and pedestrians.
      `,
      bullets: [
        "Use cones, barricades, and signage.",
        "Assign a dedicated flagger.",
        "Follow local regulations for lane closures."
      ]
    }
  ],
  glossary: [
    { term: "Drop Zone", definition: "Area where material is expected to fall during cutting." },
    { term: "Flagger", definition: "Worker assigned to direct traffic around the jobsite." }
  ],
  quiz: [
    {
      question: "What should happen if communication is lost on a jobsite?",
      options: ["Continue working", "Only climber stops", "Stop all work", "Switch to hand signals only"],
      answer: 2,
      explanation: "All work must stop until communication is restored."
    }
  ]
};

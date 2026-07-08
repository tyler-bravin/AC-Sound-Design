export const projects = [
  {
    id: 1,
    title: "Game Audio Showreel",
    category: "Showreel",
    description: "Created a game audio showreel showcasing sound design work across multiple projects and genres. Demonstrated expertise in designing and implementing immersive sound effects, dialogue, Foley, and ambient soundscapes. Focused on audio editing, mixing, and adaptive sound design to enhance player immersion. This project refined my ability to craft dynamic and engaging audio experiences that elevate gameplay.",
    videoUrl: "https://www.youtube.com/embed/AvfwqyOIyqg",
    image: "https://img.youtube.com/vi/AvfwqyOIyqg/maxresdefault.jpg",
    tech: ["Reaper", "Pro Tools", "Premiere Pro", "iZotope RX"],
    role: "Sound Designer, Audio Editor",
    purpose: "Portfolio Development",
    duration: "Showreel"
  },
  {
    id: 2,
    title: "Red Dead Redemption 2 - Sound Redesign",
    category: "Game Clips",
    description: "3-minute sequence of the Valentine bank robbery in Red Dead Redemption 2, focusing on enhancing the scene's audio realism and immersion to ensure a dynamic and authentic experience. Developed a strong ability to match sound with on-screen action, balance intensity, and create engaging audio narratives.",
    videoUrl: "https://www.youtube.com/embed/AZ27jD41aqw",
    image: "https://img.youtube.com/vi/AZ27jD41aqw/maxresdefault.jpg",
    tech: ["Pro Tools", "Premiere Pro", "Reaper"],
    role: "Sound Design, Sound Editing, Layering, Spatial Audio Design, Character Dialogue",
    purpose: "Skill Improvement",
    duration: "3:00"
  },
  {
    id: 3,
    title: "Wildfire – 'A Game for Change'",
    category: "Game Jam",
    description: "Created a wildfire awareness game during a 48-hour game jam hosted by Scottish Widows at the V&A. Led the sound design team, producing key audio assets within hours to give developers flexibility. Integrated real game jam background noise into the dialogue for a 999 responder to enhance immersion. Focused solely on audio to maximize team efficiency despite having coding experience. Successfully pitched the game as the sole presenter in front of game industry leaders, demonstrating strong communication and public speaking skills.",
    gameUrl: "/Wildfire/index.html",
    image: null,
    tech: ["Reaper", "Pro Tools", "Unity", "iZotope RX"],
    role: "Lead Sound Designer, Pitch Presenter",
    purpose: "Scottish Widows Game Jam Entry, Awareness Campaign",
    duration: "Game Jam (48hr)"
  },
  {
    id: 4,
    title: "48-Hour Film Festival – Glasgow",
    category: "Film Festival",
    description: "Took on a hands-on role as Boom Operator, ensuring clear and detailed dialogue capture throughout the shoot. Managed on-set sound recording in a fast-paced environment, prioritizing vocal clarity and technical precision. Faced unexpected filming delays, resulting in a sleep-deprived 4 AM editing session to meet the deadline. This experience reinforced my ability to adapt under pressure, work efficiently on set, and contribute to high-quality audio production in tight timeframes.",
    videoUrl: "https://www.youtube.com/embed/G0ASJ4tBPxY",
    image: "https://img.youtube.com/vi/G0ASJ4tBPxY/maxresdefault.jpg",
    tech: ["Pro Tools", "Reaper", "Premiere Pro", "iZotope RX"],
    role: "Boom Operator, Foley Artist, Sound Editor",
    purpose: "Experience in a production setting",
    duration: "Film Festival (48hr)"
  },
  {
    id: 5,
    title: "Photography Portfolio",
    category: "Photography",
    description: "A collection of film photographs captured using a Fujica STX-1n camera and edited in Adobe Lightroom. This project showcases my eye for composition, lighting, and storytelling through analog photography. The images range from landscapes to portraits, demonstrating versatility and attention to visual detail.",
    isGallery: true,
    galleryImages: [
      "/images/1.webp",
      "/images/2.webp",
      "/images/3.webp",
      "/images/4.webp",
      "/images/5.webp",
      "/images/6.webp",
      "/images/7.webp"
    ],
    image: "/images/1.webp",
    tech: ["Fujica STX-1n", "Adobe Lightroom", "Film Photography"],
    role: "Photographer",
    purpose: "Personal Creative Expression",
    duration: "Gallery"
  },
  {
    id: 6,
    title: "Emotive Dialogue Systems in RPGs",
    category: "Research / Honours",
    description: "Honours research project exploring how audio processing affects emotional perception in game dialogue. Developed an interactive tool that allows users to manipulate dialogue through audio effects (sliders and toggles), demonstrating how different DSP treatments can convey various emotional states such as happiness, sadness, anger, and fear. The collected data contributes to training AI models for emotional dialogue recognition in video games. This project showcases the intersection of sound design, game development, and research methodology.",
    hasDownloads: true,
    downloads: [
      {
        label: "Windows Build",
        url: "/HonsWinBuild.zip",
        icon: "windows"
      },
      {
        label: "Mac Build", 
        url: "/HonsMacBuild.zip",
        icon: "apple"
      }
    ],
    image: null,
    tech: ["Unity", "WebGL", "C#", "Audio DSP", "Research Methodology"],
    role: "Lead Researcher, Developer, Sound Designer",
    purpose: "Honours Research Project - Edinburgh Napier University",
    duration: "Academic Year",
    additionalInfo: "Supervised by Callum Goddard. Research focuses on enhancing NPC interactions through emotion-driven audio processing."
  }
];

export const skillGroups = [
  {
    label: "DAWs & Tools",
    items: ["Pro Tools", "Reaper", "Adobe Audition", "iZotope RX", "Unity Audio"]
  },
  {
    label: "Disciplines",
    items: ["Dialogue Editing", "Sound Design", "Audio Implementation", "Mixing & Mastering", "Foley & Field Recording"]
  }
];

export const contactInfo = {
    name: "Andrew Clelland",
    email: "andrew.clelland123@gmail.com",
    phone: "07922033394",
    location: "Based in Falkirk, but available for projects worldwide",
    availability: "Monday - Friday: 9 AM - 6 PM",
    linkedin: "https://www.linkedin.com/in/andrew-clelland-837230219/",
    cvUrl: "Andrew_Clelland_CV.pdf"
};

export const aboutText = {
  intro: "Welcome! I'm Andrew Clelland, a passionate sound designer specializing in dialogue editing and audio production for short, engaging content.",
  experience: "With years of experience in post-production, I've worked on everything from independent films to game jams and social media content, always focusing on creating clean, engaging audio that enhances the story.",
  approach: "My approach combines technical precision with creative problem-solving, ensuring every project sounds professional and polished. Whether it's dialogue cleanup, sound design, game audio implementation, or final mixing, I'm committed to delivering exceptional results."
};

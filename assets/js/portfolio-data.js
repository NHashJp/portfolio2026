window.portfolioProjects = [
  {
    "slug": "matusri-barcelona",
    "title": "Matsuri Website & Event Operations",
    "subtitle": "Official website and volunteer operations for the annual Japanese festival in Barcelona, Spain",
    "summary": "Official website and volunteer operations for the annual Japanese festival in Barcelona.",
    "description": "Full-stack developer of the official Matsuri website for the 2024 and 2025 editions (5,000+ visitors to the site), and member of the organizing team for four years. In parallel with the web work, I coordinated volunteers for an event attracting 30,000+ visitors.",
    "tags": [
      "javascript",
      "web"
    ],
    "thumbImage": "images/fulls/matsuri-barcelona.png",
    "fullImage": "images/fulls/matsuri-barcelona.png",
    "links": [],
    "sections": [
      {
        "heading": "2024 Website",
        "items": [
          "First project designed in collaboration with a professional designer, translating their work into code using the Figma MCP for the first time.",
          "First deployment to a wide, public audience."
        ]
      },
      {
        "heading": "2025 Website",
        "items": [
          "Extended the site with richer, more dynamic functionality."
        ]
      },
      {
        "heading": "Event Organization",
        "items": [
          "Coordinated 150 volunteers across sub-teams and time slots, using Google Apps Script automation to sort and allocate volunteers.",
          "Handled event planning and on-the-day troubleshooting.",
          "Received highly positive feedback: 4.85 / 5.00."
        ]
      }
    ]
  },
  {
    "slug": "team-nap",
    "title": "Team Nap",
    "subtitle": "Mobile app that suggests the best time for team members to rest",
    "summary": "A React Native app that recommends optimal rest times, with AI-generated encouragement.",
    "description": "My first React Native mobile app. Team Nap uses team members' rest, sleep, and schedule information to recommend optimal rest times, with AI-generated comments to encourage healthy breaks.",
    "tags": [
      "typescript",
      "mobile",
      "ai-ml"
    ],
    "thumbImage": "images/thumbs/02.jpg",
    "fullImage": "images/fulls/02.jpg",
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/YAMI-SOTE/team-nap-app"
      },
      {
        "label": "Live demo",
        "url": "https://team-nap.vercel.app"
      }
    ],
    "sections": [
      {
        "heading": "Mobile",
        "items": [
          "React Native with Expo and expo-router.",
          "Real-time team presence over WebSockets, plus push notifications."
        ]
      },
      {
        "heading": "Backend",
        "items": [
          "Node.js / Express 5 with TypeScript, validated with zod, using a layered route / controller / service design.",
          "Prisma and PostgreSQL, with 11 data models including users, sessions, teams, nap records, calendar events, and notifications.",
          "AI comment generation using Gemma on Ollama, with rule-based fallbacks so the API keeps working if the model is unavailable."
        ]
      },
      {
        "heading": "Deployment & Documentation",
        "items": [
          "Docker Compose setup (backend, database, Ollama); frontend on Vercel with the API on a VPS.",
          "Extensive docs covering architecture, database design, authentication, testing, and setup."
        ]
      }
    ]
  },
  {
    "slug": "harurobo",
    "title": "Harurobo: ROBOSTEP",
    "subtitle": "Robot competing at Kanto Harurobocon 2026",
    "summary": "Perception, software stack, and operator interface for a competition robot.",
    "description": "Member of the ROBOSTEP team at the Kanto Harurobocon 2026, working on the robot's perception, software stack, and operator interface.",
    "tags": [
      "python",
      "robotics",
      "ai-ml"
    ],
    "thumbImage": "images/thumbs/03.jpg",
    "fullImage": "images/fulls/03.jpg",
    "links": [],
    "sections": [
      {
        "heading": "ROS 2 (Jazzy)",
        "items": [
          "Foundations of ROS 2 packages and nodes.",
          "Built a GUI over rosbridge, synchronized with the hardware and presented on a local machine."
        ]
      },
      {
        "heading": "Object Detection (YOLOv5)",
        "items": [
          "Trained a model on 1,000+ labelled images and learned the fundamentals of object detection.",
          "Added anomaly-exclusion features to the ROS package."
        ],
        "links": [
          {
            "label": "prerobo-obj-detect (box-detection-develop)",
            "url": "https://github.com/ROBOSTEP-13th/prerobo-obj-detect/tree/box-detection-develop"
          }
        ]
      },
      {
        "heading": "Sensors",
        "items": [
          "Intel RealSense D455 depth camera.",
          "Livox Mid-360 LiDAR."
        ]
      },
      {
        "heading": "Tooling",
        "items": [
          "Docker (volumes, containers) to run ROS 2 on a MacBook.",
          "Basic Linux command line.",
          "Collaborative coding with Git and GitHub."
        ]
      }
    ]
  },
  {
    "slug": "thunderkites",
    "title": "Thunderkites",
    "subtitle": "FIRST Tech Challenge robotics team: Chief Engineer and Electronics & Coding Lead",
    "summary": "Led a 20-student FTC robotics team to first place in Lyon (2023) and second in 2024.",
    "description": "Led a 20-student robotics team in the FIRST Tech Challenge, bridging hardware and software. The team placed first at the Lyon, France tournament (2023) and second in 2024.",
    "tags": [
      "java",
      "robotics"
    ],
    "thumbImage": "images/thumbs/04.jpg",
    "fullImage": "images/fulls/04.jpg",
    "links": [],
    "sections": [
      {
        "heading": "Leadership & Project Management",
        "items": [
          "Chief Engineer: led the team of 20 and acted as the key liaison between hardware and software.",
          "Learned that engineering takes real commitment and time, and that project management is what prevents a build from being finished at 1 a.m. on competition day.",
          "Built the team's website for community outreach and team introductions."
        ]
      },
      {
        "heading": "Software & Electronics",
        "items": [
          "Wrote the robot's Java program supporting both teleoperated and autonomous modes, with TensorFlow object detection.",
          "Designed the robot's electronics for the FTC season.",
          "Deepened my understanding of object-oriented programming in Java."
        ]
      },
      {
        "heading": "Community Outreach",
        "items": [
          "Ran hands-on sessions where younger students drove our robot, including robot football demonstrations, showing how engineering inspires the next generation.",
          "Took part in an international food fair, where we engaged with parents interested in our merchandise and learned how hard sponsorship is to secure."
        ]
      }
    ]
  },
  {
    "slug": "hola",
    "title": "HOLA",
    "subtitle": "A generative AI chatbot as a full-stack web application",
    "summary": "A full-stack generative AI chatbot with a custom API, built on Node.js.",
    "description": "HOLA is a full-stack chatbot built on Node.js, where users hold conversations with a generative AI through a web interface. It was my first project building and integrating an API end to end, from the interface sketches through to the server and database.",
    "tags": [
      "javascript",
      "web",
      "ai-ml"
    ],
    "thumbImage": "images/thumbs/05.jpg",
    "fullImage": "images/fulls/05.jpg",
    "links": [
      {
        "label": "GitHub repository",
        "url": "https://github.com/NHashJp/hola"
      }
    ],
    "sections": [
      {
        "heading": "Design",
        "items": [
          "I planned the interface through hand-drawn sketches, mock-ups, and a Figma prototype before writing code. Settling the layout and conversation flow first gave me a clear target for the front end and shaped the API behind it."
        ]
      },
      {
        "heading": "Backend & API",
        "items": [
          "Custom API: endpoints connect the chat interface to the server, the AI, and the data layer.",
          "Middleware & authentication: shared logic such as request handling and user authentication lives in middleware, keeping route handlers short.",
          "SQLite database for persistent data.",
          "HTTP status codes used consistently, so the front end handles success and failure clearly."
        ]
      },
      {
        "heading": "Code Quality",
        "items": [
          "Object-oriented JavaScript, with logic separated into modules.",
          "async/await for database and AI requests, so the server stays responsive.",
          "Clean structure with separate data, public, and documentation folders."
        ]
      },
      {
        "heading": "What I Learned",
        "items": [
          "How a request travels from the browser through middleware and routes to the database and AI and back, and why planning the design and data first saves time later."
        ]
      },
      {
        "heading": "Tech",
        "items": [
          "Node.js · JavaScript (OOP, async/await) · REST API · SQLite · Generative AI · Figma"
        ]
      }
    ]
  },
  {
    "slug": "agt-burgular-detection",
    "title": "AGT Burglar Detection System",
    "subtitle": "Allele Green Tech internship, Summer 2023: robotic searchlight with intruder detection",
    "summary": "An internship project: a robotic searchlight that deters intruders from approaching a residence.",
    "description": "An internship project building a robotic searchlight system with integrated intruder detection. When an intruder is detected, the system deters them from approaching a residence by sweeping a powerful searchlight just ahead of their path.",
    "tags": [
      "javascript",
      "hardware"
    ],
    "thumbImage": "images/thumbs/06.jpg",
    "fullImage": "images/fulls/06.jpg",
    "links": [],
    "sections": [
      {
        "heading": "Hardware & Communication",
        "items": [
          "Learned HTTP and MQTT for wireless communication with IoT devices (Shelly).",
          "Soldering and hardware assembly."
        ]
      },
      {
        "heading": "Software & Architecture",
        "items": [
          "Built with Node.js; designed the database schema and system architecture.",
          "Wrote engineering documentation."
        ]
      },
      {
        "heading": "Side Project: Water-Wheel GUI",
        "items": [
          "A Tkinter GUI for a water wheel that generates electricity."
        ]
      }
    ]
  },
  {
    "slug": "cs-ia-nlp",
    "title": "Computer Science IA: Custom AI NLP Exploration",
    "subtitle": "Training a conversational model on the Cornell movie-dialogs dataset",
    "summary": "A preliminary exploration of training a custom NLP conversational model.",
    "description": "A preliminary exploration of training a custom NLP conversational model on the Cornell movie-dialogs conversation dataset, as the basis of my Computer Science Internal Assessment.",
    "tags": [
      "python",
      "ai-ml"
    ],
    "thumbImage": "images/thumbs/01.jpg",
    "fullImage": "images/fulls/01.jpg",
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/NHashJp/cs-ia-ml-train"
      }
    ],
    "sections": [
      {
        "heading": "Machine Learning",
        "items": [
          "NLP fundamentals, including tokenization.",
          "Learned that training is time-intensive and that evaluation metrics for conversation are imprecise."
        ]
      },
      {
        "heading": "Project Documentation (main focus)",
        "items": [
          "Followed the full development cycle: analysis, design, development, evaluation.",
          "Produced UML diagrams and learned how to draw them."
        ]
      }
    ]
  },
  {
    "slug": "gas-automation",
    "title": "Google Apps Script Automation",
    "subtitle": "Google Workspace automations for studying and tutoring",
    "summary": "Google Workspace automations that make studying and tutoring easier to organize.",
    "description": "A set of Google Workspace automations that make studying and tutoring easier to organize.",
    "tags": [
      "javascript",
      "automation"
    ],
    "thumbImage": "images/thumbs/02.jpg",
    "fullImage": "images/fulls/02.jpg",
    "links": [],
    "sections": [
      {
        "heading": "Final Exam Study Tracker",
        "items": [
          "Spreadsheet-based GUI with calendar integration for planning study sessions and tracking tasks, which helped keep me motivated."
        ],
        "links": [
          {
            "label": "GitHub",
            "url": "https://github.com/NH-HASHI/gas-studyTimeOrganizer"
          }
        ]
      },
      {
        "heading": "Google Classroom Automation",
        "items": [
          "Used the Classroom API to automatically create assignments and topics, keeping summer study on track."
        ],
        "links": [
          {
            "label": "GitHub",
            "url": "https://github.com/NH-HASHI/GAS_Classroom_Automization"
          }
        ]
      },
      {
        "heading": "Tutoring Management System",
        "items": [
          "Combined mail, spreadsheets, and an auto-generated running agenda document to plan sessions systematically."
        ],
        "links": [
          {
            "label": "GitHub",
            "url": "https://github.com/NHashJp/GAS_TUTORING"
          }
        ]
      }
    ]
  },
  {
    "slug": "web-fundamentals",
    "title": "Web Development Fundamentals",
    "subtitle": "Small projects built to learn the core web stack",
    "summary": "Small projects built to learn the core web stack.",
    "description": "Small projects built to learn the core web stack.",
    "tags": [
      "javascript",
      "web"
    ],
    "thumbImage": "images/thumbs/03.jpg",
    "fullImage": "images/fulls/03.jpg",
    "links": [],
    "sections": [
      {
        "heading": "Chrome Timer Extension",
        "items": [
          "A simple timer browser extension."
        ],
        "links": [
          {
            "label": "GitHub",
            "url": "https://github.com/NH-HASHI/timerChromeExtension"
          }
        ]
      },
      {
        "heading": "Pong & WebSockets",
        "items": [
          "Learned WebSocket basics by building a Pong game."
        ]
      },
      {
        "heading": "MERN Stack Tutorial",
        "items": [
          "Full-stack project integrating MongoDB, with Postman used to test the API."
        ]
      }
    ]
  },
  {
    "slug": "hardware-intro",
    "title": "Hardware Introductory Projects",
    "subtitle": "Early physical-computing projects",
    "summary": "Early physical-computing projects that taught me fabrication and microcontroller basics.",
    "description": "Early physical-computing projects that taught me fabrication and microcontroller basics.",
    "tags": [
      "hardware"
    ],
    "thumbImage": "images/thumbs/04.jpg",
    "fullImage": "images/fulls/04.jpg",
    "links": [],
    "sections": [
      {
        "heading": "Rotating Clock",
        "items": [
          "Learned laser cutting and Adobe Illustrator.",
          "Learned why motors need dedicated motor drivers after first trying to power them directly from the microcontroller."
        ],
        "links": [
          {
            "label": "GitHub",
            "url": "https://github.com/NHashJp/rotating-clock"
          }
        ]
      },
      {
        "heading": "Snake on ESP32",
        "items": [
          "Snake game on a Cheap Yellow Display with joystick input; my introduction to the ESP32."
        ]
      }
    ]
  },
  {
    "slug": "karta-space",
    "title": "Karta Space",
    "subtitle": "Coming soon",
    "summary": "Coming soon.",
    "description": "Coming soon.",
    "tags": [
      "web"
    ],
    "thumbImage": "images/thumbs/05.jpg",
    "fullImage": "images/fulls/05.jpg",
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/NHashJp/karta_space_demo"
      }
    ],
    "sections": []
  }
];

window.portfolioHelpers = {
  // Prefix for site-root-relative URLs, depending on whether we are in /projects/.
  basePath: window.location.pathname.indexOf("/projects/") !== -1 ? "../" : "",

  tagLabel: function (tag) {
    if (tag === "javascript") return "JavaScript";
    if (tag === "typescript") return "TypeScript";
    if (tag === "ai-ml") return "AI / ML";
    return tag.charAt(0).toUpperCase() + tag.slice(1);
  },
};

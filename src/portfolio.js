/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "JigyanshaRout",
  title: "Hello all, I'm Jigyansha Rout",
  subTitle: emoji(
    "A passionate Full Stack Java Developer 🚀 having an experience of building Web and design applications ,software with JavaScript / Reactjs / Nodejs / Next.js and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1xmvnhkPMRq866UoX7pU9PiMZHUtnzI3_", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/routjig09",
  linkedin: " https://www.linkedin.com/in/jigyansha-rout-0b1a2b1b4/",
  gmail: "routjig09@gmail.com",
  medium: "https://medium.com/@routjig09",
  instagram: "https://www.instagram.com/jiggs_xd/",
  x:"https://x.com/JigyanshaRout",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ I build full-stack web applications using Java, Spring Boot, and React.js with clean, scalable backend logic."
    ),
    emoji("⚡ I design sleek, responsive frontends that blend creativity with usability for a seamless user experience."),
    emoji(
      "⚡ Passionate about turning ideas into powerful digital solutions that solve real-world problems."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "SpringBoot",
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fab fa-MySql"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "GITA Autonomous college,Bhubaneswar",
      logo: require("./assets/images/1717479631phpWNzymI.jpeg"),
      subHeader: "Bachelor of Technology in Computer Science and Engineering",
      duration: "Auguest 2021 - May 2025",
      desc: "Participated in Smart India Hackathon 2023.",
      descBullets: [
        "Pursuing B.Tech in Computer Science with a strong foundation in Data Structures, Algorithms, OOPs, DBMS, OS, and Computer Networks. Built academic projects in Java, web development, and AI-based systems. Actively engaged in coding contests, tech fests, and team-based projects, enhancing my problem-solving and collaboration skills"
      ]
    },
    {
      schoolName: "SSVM Tulasipur,Cuttack",
      logo: require("./assets/images/download.jpg"),
      subHeader: "Higher Secondary Education in Science",
      duration: "June 2019 - June 2021",
      desc: " Completed Higher Secondary Education with a focus on Science, achieving a score of 72% in the board examinations",
      descBullets: ["Completed 12th grade with a focus on Science PCMB, building a strong analytical foundation and discipline. Participated in academic and extracurricular activities that developed teamwork and leadership skills."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Java Developer Intern",
      company: "AICTE Internship",
      companylogo: require("./assets/images/unnamed.jpg"),
      date: "Aug 2024 – oct 2024",
      desc: " completed a certified Java Development internship under the AICTE-approved Plasmid Academy program, where I built real-world Java applications using core and advanced concepts. During the internship, I developed a Bank Management System with MySQL integration and multi-role login functionality. This hands-on experience deepened my backend skills and strengthened my understanding of database-driven Java projects.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Software Enginnering",
      company: "Forage Virtual Experience Program",
      companylogo: require("./assets/images/images.jpg"),
      date: "june 2025 –  present",
      desc: "I developed a Finance Track App to help users manage income, expenses, and savings efficiently through a clean, user-friendly interface. The app features transaction tracking, monthly summaries, and visual analytics to promote smarter financial decisions. Built using Java and MySQL, it demonstrates my backend development skills and real-world problem-solving ability in personal finance management."
    },
    {
      role: "Advance Software Engineering Intern",
      company: "Walmart GlobalTech",
      companylogo: require("./assets/images/channels4_profile.jpg"),
      date: "May 2025 – May 2025",
      desc: "Completed the Walmart Global Tech Virtual Experience Program on Forage, where I tackled real-world software engineering tasks including debugging, feature optimization, and code review. Gained hands-on experience with agile methodologies, version control, and scalable backend systems. This internship enhanced my technical problem-solving and exposed me to Walmart’s global engineering practices."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/vector-abstract-line-art-book-600nw-2472789681.webp"),
      projectName: "Finance Track App",
      projectDesc: "A Finance Track App to help users manage income, expenses, and savings efficiently through a clean, user-friendly interface.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/original-ad8c694bb61035244572693e8ff928f6.webp"),
      projectName: "Virtual Library ",
      projectDesc: "Co-developed a Virtual Library app to buy and sell new or second-hand books affordably, featuring user login etc..",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: " ICT Academy & Ministry of Education",
      subtitle:
        "Completed a skill development program organized by ICT Academy and the Ministry of Education, focusing on industry-based training to enhance technical and employability skills..",
      image: require("./assets/images/images.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1peECi6Kswk0m4wiRqO4jTdX3UVko3KyA/view?usp=sharing"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Developer Student Clubs",
      subtitle:
        "Completed a hands-on technical training program by Devtown of developer student club, focused on practical skills and real-world project implementation.",
      image: require("./assets/images/54115493.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13zNj2q3ApbaNKe15geGNwGd7HY05lgg_/view?usp=sharing"
        }
      ]
    },

    {
      title: "Microsoft Learn Student Ambassador",
      subtitle: "Completed a Microsoft Learn training program through Devtown, gaining hands-on experience in Microsoft technologies and practical development skills.",
      image: require("./assets/images/microsoft.jpg"),
      // imageAlt: "PWA Logo",
      footerLink: [
        
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/13zv4FU0i58zZPRHHs-MSNO5pxNYmybv0/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: false // Set false to hide this section, defaults to true
// };

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7684972630",
  email_address: "routjig@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

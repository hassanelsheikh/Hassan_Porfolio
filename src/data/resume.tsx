import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hassan Elsheikh",
  initials: "DV",
  url: "https://dillion.io",
  location: "Sheikhzayed, Egypt",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description: "Medical Sofware Engineer and AI Enthusiast",
  summary:
    "Senior Healthcare engineering and management student at Cairo University. My passion for technology and healthcare has led me to pursue a career in the intersection of both fields. I have experience in software development and Artificial Intelligence, These skills helped me build lots of projects.",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "tensorflow",
    "PyTorch",
    "C++",
    "Figma",
    "Flask",
    "TailwindCSS",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "Git",
    "Jira",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "htarek1011@gmail.com",
    tel: "+201001006266",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hassanelsheikh",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hassan-elsheikh-b90aa1225/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "ISchool",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Coding Instructor",
      logoUrl: "/ischool.jpg",
      start: "June 2024",
      end: "Sept 2024",
      description:
        "Taught 60+ Students the basics of Python, AI and game development using Godot Engine. Above 4.5/5 rating from students.",
    },
    {
      company: "Lytic Lab Digital transformation",
      badges: [],
      href: "https://www.amer.studio/",
      location: "Hybrid",
      title: "Software Engineering Intern",
      logoUrl: "",
      start: "Dec 2023",
      end: "June 2024",
      description:
        "Built full-stack applications using Next JS, Typescript, and PostgreSQL. Worked on a team of 5 to build a custom CMS for a client.",
    },
    {
      company: "Siemens Healthineers",
      href: "https://www.siemens-healthineers.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Innovation Think Tank Fellow",
      logoUrl: "/siemens-healthineers3989.jpg",
      start: "August 2023",
      end: "November 2023",
      description:
        "Collaborated in international teams on workflow analysis, app development, and research for medical technology projects at Siemens Healthineers Innovation Think Tank.",
    },
    {
      company: "Vellore Institute of Technology",
      href: "https://splunk.com",
      badges: [],
      location: "Vellore, India",
      title: "Research Intern",
      logoUrl: "/VIT.png",
      start: "June 2023",
      end: "August 2023",
      description:
        "Contributed to research tasks in the field of Medical Imaging and Machine Learning. Developed a deep learning model to detect breast cancer in mammograms.",
    },
    {
      company: "Siemens Healthineers",
      href: "https://www.siemens-healthineers.com/",
      badges: [],
      location: "San Francisco, CA",
      title: "Customer Service Engineering Intern",
      logoUrl: "/siemens-healthineers3989.jpg",
      start: "August 2022",
      end: "October 2022",
      description:
        "Customer Service Engineering Intern at Siemens Healthineers. Learned basics of Medical Imaging modalities and gained hands-on experience with MRI and CT",
    },
  ],
  education: [
    {
      school: "Faculty of Engineering, Cairo University",
      href: "https://cu.edu.eg/Home",
      degree: "BsC in Healthcare Engineering and Management",
      logoUrl: "/img1.png",
      start: "2020",
      end: "expected 2025",
    },
  ],
  projects: [
    {
      title: "Assisted Teleradiography Platform for Brain Hemorrhage Detection",
      href: "",
      dates: "Oct 2024 - Present",
      active: false,
      description:
        "Graduation project, Developed a platform that assists radiologists in detecting brain hemorrhages in CT scans and Generates reports automatically.",
      technologies: [
        // "Next.js",
        // "Typescript",
        // "PostgreSQL",
        // "Prisma",
        // "TailwindCSS",
        // "Stripe",
        // "Shadcn UI",
        // "Magic UI",
      ],
      links: [
        {
          type: "Currently under development",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/CT-scans-brain-hemorrhage.jpg",
      video: "",
    },
    {
      title: "TAM integrated solutions",
      href: "https://tam-integrated-solutions.com/en",
      dates: "July 2024 - Sept 2024",
      active: true,
      description:
        "Contributed to development of a custom online presence for a client using Next.js",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Figma",
      ],
      links: [
        {
          type: "Website",
          href: "https://tam-integrated-solutions.com/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/logo.webp",
      video: "",
    },
    {
      title: "Curio (Reddit Clone)",
      href: "https://github.com/hassanelsheikh/curio-backend",
      dates: "Feb 2024 - Jun 2024",
      active: true,
      description:
        "Developed a Reddit Clone full-stack application as a backend developer. Implemented 90% of Reddit's core features.",
      technologies: ["Javascript", "Node.js", "Express", "MongoDB"],
      links: [
        {
          type: "Github",
          href: "https://github.com/hassanelsheikh/curio-backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/curio.png",
    },
    {
      title: "Smile Dental Clinic",
      href: "https://github.com/hassanelsheikh/smile-frontend",
      dates: "Mar 2024 - Jun 2024",
      active: true,
      description:
        "Developed a full-stack application for a dental clinic. Implemented a booking system, patient management, and billing system.",
      technologies: ["React", "Javascript", "Node.js", "Express", "MongoDB"],
      links: [
        {
          type: "Github",
          href: "https://github.com/hassanelsheikh/smile-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Smile.png",
    },
    {
      title: "Advanced Image Processing Techniques for Feature Detection",
      href: "https://github.com/hassanelsheikh/Image-wizard-canny-edge-detector-harris-corner-detector-hough-transform",
      dates: "Mar 2024 - Jun 2024",
      active: true,
      description:
        "Developed an image processing tool that integrates Canny edge detection, Harris corner detection, and Hough transform from scratch to identify and extract key features in images",
      technologies: ["Python", "PyQT", "Opencv", "Numpy"],
      links: [
        {
          type: "Github",
          href: "https://github.com/hassanelsheikh/Image-wizard-canny-edge-detector-harris-corner-detector-hough-transform",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cv.jpg",
    },
    {
      title: "Digital Filter Design",
      href: "https://github.com/hassanelsheikh/Digital-Filter-Designer?tab=readme-ov-file",
      dates: "Mar 2023 - Jun 2023",
      active: true,
      description:
        "Implemented a web application for designing custom digital filters by placing zeros and poles on the z-plane. It provides a user-friendly interface with interactive features for modifying filter elements and visualizing frequency responses.",
      technologies: ["Flask", "Javascript", "Css", "Python", "Plotly.js"],
      links: [
        {
          type: "Github",
          href: "https://github.com/hassanelsheikh/Digital-Filter-Designer?tab=readme-ov-file",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/filter_designer.png",
    },
  ],
} as const;

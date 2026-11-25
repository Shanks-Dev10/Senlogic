import Team1 from "@/assets/team1.webp";
import Team2 from "@/assets/team2.webp";
import Team3 from "@/assets/team3.webp";
import Team4 from "@/assets/team4.webp";

export interface TeamMember {
  id: string;
  img: string;
  name: string;
  role: string;
  intro: string;
  intro2: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "r-ravichandran",
    img: Team1,
    name: "Mr. R. Ravichandran",
    role: "Technical cum Managing Director",

    intro:
      "Mr.R.Ravichandran serves as the Technical cum Managing Director of Senlogic Automation Private Limited, Chennai provider of precision industrial weighing and automation solutions. With over 30+ years of leadership experience in industrial instrumentation and manufacturing, Mr.Ravichandran directs the company’s strategic vision, global operations, and product innovation. He also oversees end-to-end project execution, quality assurance, and technological development for mission-critical weighing environments.",
    intro2:
      "Under Mr.Ravichandran’s leadership, Senlogic Automation Private Limited, Chennai has expanded its portfolio to include high-accuracy load cells, automated batching systems, weighbridges, and Industry ready weighing software. He holds a Diploma in Electronics and Communication Engineering and is recognized for driving operational excellence, strict adherence to international metrology standards and customer-centric engineering. Mr.Ravichandran remains committed to delivering reliable, compliant, and scalable weighing technologies that optimize productivity across heavy industries, logistics, and manufacturing.",
  },

  {
    id: "sreedevi-ravichandran",
    img: Team2,
    name: "Ms. Sreedevi Ravichandran",
    role: "Director - Finance",

    intro:
      "Ms.Sreedevi Ravichandran serves as the Director – Finance of Senlogic        Automation Private Limited, Chennai. Ms.Sreedevi has a Bachelor’s degree in Economics and over 25+ years of progressive financial leadership within the industrial weighing, process automation and precision instrumentation sectors. ",
    intro2:
      "Proven expertise in optimizing multi-site manufacturing costs and transitioning traditional hardware revenue models into recurring service and calibration streams. Adept at partnering with Engineering, Supply Chain, and Sales leadership to drive EBITDA expansion, manage complex global compliance, and execute strategic M&A integrations.",
  },

  {
    id: "adityaa-ravichandran",
    img: Team3,
    name: "Mr. Adityaa Ravichandran",
    role: "Director – Marketing",

    intro:
      "Mr.Adityaa Ravichandran leads global marketing strategy and brand positioning for Senlogic Automation Private Limited, Chennai, driving growth across our precision weighing systems product lines. Mr.Adityaa holds a Bachelor of Engineering Degree in Electronics & Communication Engineering from College of Engineering, Guindy. With over 6+ years of experience in B2B industrial technology, Mr.Adityaa specializes in translating complex engineering solutions into measurable business value for clients in logistics, manufacturing, and bulk material handling.",
    intro2:
      "By aligning product management with field sales, he ensures our messaging directly addresses the critical compliance, calibration, and throughput challenges faced by plant managers and systems integrators worldwide.",
  },

  {
    id: "a-sornakumar",
    img: Team4,
    name: "Mr. A. Sornakumar",
    role: "Chief Operating Officer (COO)",

    intro:
      "As Chief Operating Officer, Mr.A.Sornakumar leads global manufacturing, supply chain management, and field service operations for Senlogic Automation Private Limited, Chennai. With over 18 years of experience in industrial automation and precision instrumentation, he ensures that every weighing system meets the highest standards of accuracy and durability.",
    intro2:
      "Since joining Senlogic Automation Private Limited, Chennai in 2008, Mr.Sornakumar has spearheaded the modernization of our production facilities and streamlined our ISO-certified quality assurance protocols. His focus on operational excellence guarantees on-time delivery and seamless integration with the clients. Mr.Sornakumar holds a Diploma in Electrical Engineering.",
  },
];

import { ArrowUpRight } from "lucide-react";
import {SiGithub} from '@icons-pack/react-simple-icons';
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Batatinha Frita 1, 2, 3",
    description:
      "A browser-based game inspired by the Red Light, Green Light challenge from the Netflix series Squid Game. Built with JavaScript as a practical project to develop my programming skills.",
    image: "/projects/batatinhafrita123.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://batatinha-frita-1-2-3.netlify.app/",
    github: "https://github.com/PedroHQCoelho/batatinha-frita-1-2-3",
  },
  {
    title: "BMI Calculator",
    description:
      "A web-based calculator that allows users to enter their weight and height to find their Body Mass Index (BMI). Built with JavaScript to practise calculations and working with user input.",
    image: "/projects/calculadoraimc.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://calculadoradeimc-pedro.netlify.app/",
    github: "https://github.com/PedroHQCoelho/Treinamento_squad-gatitos/tree/main/desafio%2303%20-%20Calculadora%20de%20IMC",
  },
  {
    title: "Starbucks Landing Page",
    description:
      "A landing page inspired by the Starbucks website, created as a front-end practice project. It focuses on page layout, visual design and interactive elements.",
    image: "/projects/starbuckslandingpage.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://landingpagestarbucks.netlify.app/",
    github: "https://github.com/PedroHQCoelho/treinamento-se-joga/tree/main/desafio%2301%20-%20Starbucks%20Landing%20Page",
  },
  {
    title: "Time of Day",
    description:
      "An interactive web page that displays a greeting based on the current time of day. The content and appearance change automatically using JavaScript.",
    image: "/projects/horadodia.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://hora-do-dia-pedro.netlify.app/",
    github: "https://github.com/PedroHQCoelho/curso-js-guanabara/tree/main/ex01/ex14",
  },
  {
    title: "Age and Gender Checker",
    description:
      "An interactive application that uses a person's age and gender to display a result. Built with JavaScript to practise conditions and update page content.",
    image: "/projects/verificadordeidade.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://verificador-db.netlify.app/",
    github: "https://github.com/PedroHQCoelho/curso-js-guanabara/tree/main/ex01/ex15",
  },
  {
    title: "Number Counter",
    description:
      "An interactive number counter that allows users to choose a starting number, an ending number and a step value. Built with JavaScript to practise loops and user input.",
    image: "/projects/contador.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://contador-de-numeros.netlify.app/",
    github: "https://github.com/PedroHQCoelho/curso-js-guanabara/tree/main/ex02/ex16",
  },
  {
    title: "Multiplication Table Generator",
    description:
      "A web application that creates a multiplication table based on a number entered by the user. Built with JavaScript to practise loops and working with user input.",
    image: "/projects/tabuada.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://geradordetabuada.netlify.app/",
    github: "https://github.com/PedroHQCoelho/curso-js-guanabara/tree/main/ex02/ex17",
  },
  {
    title: "Number Analyzer",
    description:
      "An interactive tool that analyses a list of numbers entered by the user and displays information about them. Built with JavaScript to practise working with data and page content.",
    image: "/projects/analisadordenumeros.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://analisadordenumeros-pedro.netlify.app/",
    github: "https://github.com/PedroHQCoelho/curso-js-guanabara/tree/main/ex03",
  },
  {
    title: "React Calculator",
    description:
      "A simple calculator inspired by the iPhone calculator, built with React and CSS. This project helped me practise using React components and creating interactive user interfaces.",
    image: "/projects/calculadorareact.png",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://calculadora-react-pedro.netlify.app/",
    github: "https://github.com/PedroHQCoelho/calculadora-react",
  },
  {
    title: "Math Master",
    description:
      "An educational browser-based game developed as my Computer Engineering graduation project at UERJ. It features five mini-games covering basic operations, fractions, powers, percentages and equations, combining mathematics with game-based learning.",
    image: "/projects/mathmaster.png",
    tags: ["HTML", "CSS", "JavaScript", "Game Development"],
    link: "https://mathmaster-game.netlify.app/",
    github: "https://github.com/PedroHQCoelho/mathmaster",
  },
];

export const Projects = () => {
    return <section id="projects" className="py-32 relative overflow-hidden">
            
      {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        {" "}
                    <span className="font-serif italic font-normal text-white"> 
                        make an impact.
                    </span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    A selection of projects that showcase my approach to front-end
                    development, combining thoughtful design, practical functionality
                    and engaging user experiences.
                </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <div 
                        key={idx} 
                        className="group glass rounded-2xl overflow-hidden fade-in md:row-span-1"
                        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden aspect-video">
                            <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                            className="absolute inset-0 
                            bg-gradient-to-t from-card via-card/50
                            to-transparent opacity-60"
                        />
                        {/* Overlay Links*/}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a 
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="View Project" 
                                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                            <a 
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                            >
                                <SiGithub className="w-5 h-5" />
                            </a>
                        </div>
                        </div>

                        {/*Content*/}
                        <div className="p-6 space-y-4">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <ArrowUpRight
                                className="w-5 h-5 
                                text-muted-foreground group-hover:text-primary
                                group-hover:translate-x-1 
                                group-hover:-translate-y-1 transition-all" 
                                />
                            </div>
                            <p className="text-muted-foreground text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                <span 
                                    key={tagIdx}
                                    className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                                    {tag}
                                </span>
                            ))}
                            </div>
                        </div>
                    </div>
                ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <a href="https://github.com/PedroHQCoelho" target="_blank" title="GitHub Repository"  rel="noopener noreferrer">
                    <AnimatedBorderButton>
                        View All Projects
                        <ArrowUpRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                    </a>
                </div>
            </div>
            </section>
};
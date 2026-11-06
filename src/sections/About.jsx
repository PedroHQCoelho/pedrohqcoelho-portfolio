import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clean, organised and maintainable code to build reliable web applications.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Creating responsive and efficient applications for smooth user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working with others, sharing ideas and contributing to successful projects.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Continuously exploring new technologies and improving my development skills.",
  },
];

export const About = () => {
    return (
     <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                    Creating modern web,
                    <span className="font-serif italic font-normal text-white">
                    {" "}
                    one component at a time.
                    </span>
                </h2>

                
                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                <p>
                    I'm a Computer Engineer graduated from the State University of Rio de Janeiro (UERJ) and a Front-End Developer passionate about technology and web development. I enjoy creating digital experiences and finding practical solutions to everyday problems.
                </p>
                <p>
                    My work focuses on building responsive web applications, developing user-friendly interfaces and creating reusable components. I value clean code, good design and a positive user experience in every project.
                </p>
                <p>
                    I'm always looking to improve my skills, explore new technologies and learn better ways to develop web applications. I'm also interested in game design and interactive experiences, which inspire me to think creatively and try new ideas.
                </p>
                </div>

                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                    "My goal is to build useful and enjoyable digital experiences, combining technology, creativity and attention to detail."
                </p>
                </div>
                </div>

                {/* Right Column - Highlights */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="glass p-6 rounded-2xl animate-fade-in"
                            style={{animationDelay: `${(idx + 1) * 100}ms`}}
                            >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {item.description}
                            </p>
                        </div>   
                    ))}    
                </div>  
            </div>
        </div>
     </section>
    );
};
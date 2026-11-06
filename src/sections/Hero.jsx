import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import {
  SiGithub,
  SiInstagram,
  SiX,
  SiFacebook,
} from '@icons-pack/react-simple-icons';
import { FaLinkedin, FaItchIo } from 'react-icons/fa6'

const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "MySQL",
    "Lua",
    "Unity",
    "Unreal Engine",
    "ZeroBrane Studio",
    "Git",
    "Game Design",
];

export const Hero = () => {
    return( 
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0">
                <img
                 src="/hero-bg.png"
                 alt="Hero Image"
                 className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"/>
            </div>

            {/* Blue Dots */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div 
                    className="absolute w-1.5 h-1.5  rounded-full opacity-60" 
                    style={{
                        backgroundColor: "#3B82F6",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${
                            15 + Math.random() * 20
                        }s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 15}s`,
                    }}  
                    />
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8 min-w-0">
                        <div className="animate-fade-in">
                          <span className="inline-flex items-center gap-2 px-4 py-2 w-fit max-w-full rounded-2xl sm:rounded-full glass text-sm text-primary">  
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                                    <span className="min-w-0 whitespace-normal break-words">
                                    Computer Engineer • Front-End Developer • Game Designer
                                    </span>
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight break-words animate-fade-in animation-delay-100">
                                Building <span className="text-primary glow-text">intuitive</span> 
                                <br />
                                web experiences with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                purpose.
                                </span> 
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                Hi, I'm Pedro Coelho — a Computer Engineer and Front-End Developer passionate about building 
                                modern web experiences. I create responsive applications and intuitive interfaces focused on usability, 
                                functionality, and clean design.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button href="#contact" size="lg">
                                Contact Me <ArrowRight className="w-5 h-5" />
                            </Button>
                            <a href="/Currículo-Pedro.pdf" download title="CV" >
                                <AnimatedBorderButton>
                                    <Download className="w-5 h-5" />
                                    Download CV
                                </AnimatedBorderButton>
                            </a>
                        </div>

                        {/* Social Links */}
<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 animate-fade-in animation-delay-400 min-w-0">

    <span className="text-muted-foreground">
        Follow me:
    </span>

    <div className="flex flex-wrap items-center gap-3 sm:gap-4">

        {[
            { icon: SiGithub, href: "https://github.com/PedroHQCoelho", title: "GitHub" },
            { icon: FaLinkedin, href: "https://linkedin.com/in/pedrohqcoelho", title: "LinkedIn" },
            { icon: SiInstagram, href: "https://instagram.com/pedro.hq.coelho", title: "Instagram" },
            { icon: SiX, href: "https://x.com/pedrohqcoelho", title: "X" },
            { icon: FaItchIo, href: "https://pedrocoelho.itch.io", title: "itch.io" },
            { icon: SiFacebook, href: "https://facebook.com/pedrohqcoelho", title: "Facebook" },
        ].map((social) => (
            <a
                key={social.title}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.title}
                aria-label={`Visit my ${social.title} profile`}
                className="p-2 rounded-full glass hover:bg-primary transition-all duration-300 shrink-0"
            >
                <social.icon className="w-5 h-5" />
            </a>
        ))}

    </div>
</div>
                    </div>
                    {/* Right Column - Profile Image */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile Image */}
                        <div className="relative max-w-md mx-auto">
                            <div
                                className="absolute inset-0 
                                rounded-3xl bg-gradient-to-br 
                                from-primary/30 via-transparent 
                                to-primary/10 blur-2xl animate-pulse"
                            />
                            <div className="relative glass rounded-3xl p-2 glow-border">
                                <img 
                                    src="/profile-photo.png" 
                                    alt="Pedro Coelho" 
                                    className="w-full aspect-[4/5] object-cover rounded-2xl" 
                                />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-sm font-medium">
                                        Available for work
                                    </span>
                                </div>
                            </div>
                            {/* Stats Badge */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                  <p className="text-sm text-muted-foreground mb-6 text-center">
                    Technologies I work with:
                  </p>
                  <div className="relative overflow-hidden"> 
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                        <div key={idx} className="flex-shrink-0 px-8 py-4">
                            <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                                {skill}
                            </span>
                        </div>
                      ))}
                  </div>
                </div>
            </div>
          </div>

          <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
          >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>  
        </section>
    );
};
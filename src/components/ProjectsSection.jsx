import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Maze Game",
    description:
      "A character-based maze game developed in Assembly language, where players navigate through a maze using low-level programming concepts like loops, conditionals, and memory management",
    image: "/projects/Maze.png",
    tags: ["Assembly Language"],
    githubURL: "#",
  },
  {
    id: 2,
    title: "Airport Management System",
    description:
      "A minimal Airport management system in C++, built using basic control structures and memory handling.",
    image: "/projects/Airport.png",
    tags: ["C++"],
    githubURL: "#",
  },
  {
    id: 3,
    title: "Grocery Management System",
    description:
      "A minimal Grocery management system in C++, built using basic control structures and memory handling.",
    image: "/projects/grocery.png",
    tags: ["C++"],
    githubURL: "#",
  },
  {
    id: 4,
    title: "Russian Roulette",
    description:
      "A Russian Roulette game in C, simulating a chance-based gun game using loops, conditionals, and random number generation.",
    image: "/projects/russian.png",
    tags: ["C"],
    githubURL: "#",
  },
  {
    id: 5,
    title: "Random Dice",
    description:
      "A hardware-based project using a breadboard, wires, and electronic components to simulate dice rolls. Logic circuits control the randomness, displaying results through LEDs.",
    image: "/projects/Radnom.png",
    tags: ["Assembly Language"],
    githubURL: "#",
  },
  {
    id: 6,
    title: "Virtual Classroom",
    description:
      "A web-based application built with HTML, CSS, and JavaScript, enabling interactive learning with features like attendance, announcements, and class materials.",
    image: "/projects/Virtual.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubURL: "https://github.com/Mutahir-Ahmed-Khan/All-Projects/tree/main/Projects/Semester%2001/ICT",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects, Each project was carefully crafted with
          attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow:hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    href={project.githubURL}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    target="_blank"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 cursor-pointer"
            href="https://www.github.com/Mutahir-Ahmed-Khan"
            target="_blank"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

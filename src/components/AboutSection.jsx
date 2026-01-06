import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative ">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary "> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Computer Science Major</h3>

            <p className="text-muted-foreground ">
              I am a Computer Science student at FAST NUCES Karachi with a
              strong interest in technology and problem solving. I enjoy
              learning new concepts, building projects, and improving my skills
              through hands-on experience
            </p>

            <p className="text-muted-foreground ">
              My focus is on continuous growth, exploring modern tools, and
              applying theoretical knowledge to real-world applications. I aim
              to work on meaningful projects that create impact and help me grow
              as a developer.
            </p>

            <div className=" flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="#CV"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <div>
                    <User className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Studying</h4>
                  <p className="text-muted-foreground">
                    Studying to build skills, grow knowledge, and achieve
                    meaningful goals in life.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <div>
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Learning</h4>
                  <p className="text-muted-foreground">
                    Learning everything possible to grow, adapt, and unlock new
                    opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

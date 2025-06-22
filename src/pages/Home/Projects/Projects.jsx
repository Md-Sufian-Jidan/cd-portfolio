import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "LuxeMatches",
        description: "Premium matchmaking platform with role-based auth, Stripe payments, dynamic filtering, and admin control.",
        features: [
            `Role-based Access & Authentication: Users can log in using Firebase Auth, and routes are protected with JWT 
for security.`,
            `Stripe Payment Integration: Users can securely pay to request contact details, which are later approved by 
admins`,
            `Dynamic Filtering & Pagination: Users can filter Biodata by age, division, and gender with seamless client-server sync.`
        ],
        tech: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind", "Stripe", "Firebase Auth", "Stripe", "React Router", "React Query", "Framer Motion", "SwiperJS", "JWT", "Axios"],
        live: "https://luxe-matches-client.vercel.app/",
        github: "https://github.com/Md-Sufian-Jidan/luxe-matches-client",
    },
    {
        title: "WorkNest",
        description: "Job management app with employee salary tracking, dashboards, and JWT-secured role-based access.",
        features: [
            `Role-based dashboards: Three role based dashboards. Admin, Hr, Employee(JWT protected)`,
            `Stripe integration for employee salary payments`,
            `Work submission forms and monthly progress tracking`
        ],
        tech: ["React", "Express", "MongoDB", "Node.js", "Tailwind", "Stripe", "Firebase Auth", "Stripe", "React Router", "React Query", "Framer Motion", "SwiperJS", "JWT", "Axios"],
        live: "https://work-nest-client.web.app/",
        github: "https://github.com/Md-Sufian-Jidan/work-nest-client",
    },
    {
        title: "StudySync",
        description: "Online assessment system with role-based feedback, leaderboards, PDF previews, and light/dark mode.",
        features: [
            `Role-based access: Admins can review, give marks, and feedback.Users create and see the assignments.`,
            `Preview: Submit assignments with PDF preview and notes.`,
            `Features: Pagination, Difficulty Filter, Dark/Light Mode, Leaderboard.`
        ],
        tech: ["React", "MongoDB", "Node.js", "Express", "JWT", "Firebase Authentication", "Tailwind CSS", "Axios", "SweetAlert2", "React Toastify", "Swiper.js", "React Awesome Reveal"],
        live: "https://online-assessment-client.web.app/",
        github: "https://github.com/Md-Sufian-Jidan/online-assessment-client",
    },
];

const Projects = () => {
    return (
        <section className="bg-accent py-10 px-6">
            <div className="text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-primary mb-4"
                >
                    Projects I've Built
                </motion.h2>
                <p className="text-secondary mb-12 max-w-2xl mx-auto">
                    Here are a few full-stack apps I’ve developed using React, Node, and modern frontend technologies.
                </p>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                                <p className="text-secondary text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-accent text-primary px-2 py-1 text-xs rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-4 mt-4">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline flex items-center gap-1"
                                >
                                    Live <FaExternalLinkAlt />
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline flex items-center gap-1"
                                >
                                    Code <FaGithub />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
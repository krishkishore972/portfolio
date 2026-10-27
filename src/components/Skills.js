import { skillCategories } from "@/config/portfolio";

const ICON_SLUGS = {
  "C++": "cplusplus",
  Python: "python",
  JavaScript: "javascript",
  TypeScript: "typescript",
  Go: "go",
  Java: "openjdk",
  "Node.js": "nodedotjs",
  "Express.js": "express",
  React: "react",
  "React.js": "react",
  "Next.js": "nextdotjs",
  Vite: "vite",
  Prisma: "prisma",
  Redis: "redis",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  Docker: "docker",
  "AWS (S3, ECS, EC2)": "amazonaws",
  Kafka: "apachekafka",
  ClickHouse: "clickhouse",
  Git: "git",
  GitHub: "github",
  Postman: "postman",
  Vercel: "vercel",
  Vitest: "vitest",
};

export default function Skills() {
  return (
    <section id="skills" className="section reveal">
      <h2 className="sectionTitle">Skills</h2>
      <div className="skillsList">
        {skillCategories.map((cat, i) => (
          <div key={i} className="skillRow">
            <div className="skillRowTitle">{cat.title}</div>
            <div className="skillTags">
              {cat.skills.map((skill, j) => {
                const slug = ICON_SLUGS[skill];
                return (
                  <span key={j}>
                    {slug && (
                      <img
                        className="skillIcon"
                        src={`https://cdn.simpleicons.org/${slug}/ffffff`}
                        alt=""
                        aria-hidden="true"
                      />
                    )}
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { education } from "@/config/portfolio";

export default function About() {
  return (
    <section id="about" className="section reveal">
      <h2 className="sectionTitle">About</h2>
      <div className="sectionLead">
        <p>
          A backend developer specializing in <strong>scalable APIs</strong>,{" "}
          <strong>distributed systems</strong>, and{" "}
          <strong>AI-powered developer tools</strong>.
        </p>
      </div>

      <div className="eduCard">
        <div className="eduIcon" aria-hidden="true">
          <i className="fas fa-graduation-cap"></i>
        </div>
        <div className="eduBody">
          <div className="eduInstitution">{education.institution}</div>
          <div className="eduDegree">{education.degree}</div>
          <div className="eduMeta">
            {education.duration} • {education.location}
          </div>
        </div>
      </div>
    </section>
  );
}

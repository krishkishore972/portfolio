import { contactInfo, siteConfig } from "@/config/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section reveal">
      <h2 className="sectionTitle">Contact</h2>
      <div className="sectionLead bookCallLead">
        <p>Have a role, project, or idea in mind? Let&apos;s connect.</p>
      </div>

      <div className="contactList">
        <a href={`mailto:${contactInfo.email}`} className="contactRow">
          <i className="fas fa-envelope contactIcon"></i>
          <span>{contactInfo.email}</span>
        </a>
        <a href={`tel:${contactInfo.phone}`} className="contactRow">
          <i className="fas fa-phone contactIcon"></i>
          <span>{contactInfo.phone}</span>
        </a>
        <a
          href={siteConfig.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contactRow"
        >
          <i className="fas fa-file-alt contactIcon"></i>
          <span>Resume</span>
        </a>
      </div>
    </section>
  );
}

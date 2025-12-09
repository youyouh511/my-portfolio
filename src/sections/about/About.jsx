import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Lottie from "lottie-react";
import { Icon } from "@iconify/react";

import { portfolioData } from "../../data/portfolioData";
import "./About.scss";
import PillsCollection from "../../components/pills/PillsCollection";

const About = () => {

  // Check existence of data
  const aboutData = portfolioData?.about;

  if (!aboutData) {
    return (
      <section id="about" className="about">
        <h1>Missing Intro</h1>
        <p>Sorry...I am still rehearsing my opening speech.</p>
        <p>Please come back another time.</p>
        <p>Thank you very much for your interest and patience.</p>
      </section>
    );
  }

  // Extract data
  const { title, subtitle, paragraphs, contact, lottie, skills } = aboutData;
  const [animationData, setAnimationData] = useState(null);

  // Generic loader for lottie animation
  useEffect(() => {
    if (!lottie) return;

    fetch(lottie)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Lottie error:", err));
  }, [lottie]);

  // Content display
  return (
    <section id="about" className="about">
      {/* ----- FIRST ROW: INTRO + LOTTIE AVATAR ----- */}
      <div className="about_content">
        {/* LEFT: INTRO TEXT */}
        <div className="about_intro">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>

          {paragraphs?.map((p, idx) => (
            <ReactMarkdown key={idx}>{p}</ReactMarkdown>
          ))}

          <div className="contact_icons">
            <a href={`mailto:${contact.email}`} aria-label="email">
              <Icon icon="mdi:email" />
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <Icon icon="mdi:linkedin" />
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              <Icon icon="mdi:github" />
            </a>
          </div>
        </div>

        {/* RIGHT: LOTTIE ANIMATION */}
        <div className="about_animation">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="about_lottie"
            />
          )}
        </div>
      </div>

      {/* ----- SECOND ROW: SKILLS SECTION -----*/}
      {skills && (
        <div className="skills">
          {/* LEFT: ICON GRID */}
          <div className="skills_pills">
            <PillsCollection
                title='Tech Stack'
                items={skills.techStack}
                layout='grid'
            />
          </div>

          {/* RIGHT: BULLETS */}
          <div className="skills_bullets">
            <h1 className="skills_title">{skills.summaryTitle}</h1>

            <ul>
              {skills.summaryBullets.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <hr className='divider' />
    </section>
  );
};

export default About;
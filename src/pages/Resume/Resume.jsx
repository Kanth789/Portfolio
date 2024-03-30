import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  {
    id: 1,
    name: "Java",
    image: "/images/Java.svg",
  },
  {
    id: 2,
    name: "HTML",
    image: "/images/html.svg",
  },
  {
    id: 3,
    name: "CSS",
    image: "/images/css.svg",
  },
  {
    id: 4,
    name: "Javascript",
    image: "/images/javascript.png",
  },
  {
    id: 5,
    name: "ReactJS",
    image: "/images/react.png",
  },
  {
    id: 6,
    name: "React Native",
    image: "/images/react.png",
  },
  {
    id: 7,
    name: "Typescript",
    image: "/images/TypeScript.svg",
  },
  {
    id: 8,
    name: "Redux",
    image: "/images/Redux.svg",
  },
  {
    id: 9,
    name: "NextJs",
    image: "/images/Next.svg",
  },
];

const Resume = () => {
  return (
    <section style={{ overflowY: "scroll", height: window.innerHeight - 80 }}>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Lovely Professional Univeristy"
            date="2019 — 2023"
            description="Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
          />
          <TimelineItem
            title="Sri Educational Instition"
            date="2017 — 2019"
            description="Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis."
          />
          <TimelineItem
            title="Bhashyam Educational Instituion"
            date="2016 — 2017"
            description="Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos."
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Full Stack Developer"
            date="01 July 2023  — Present"
            description="Writing maintainable code by following Clean code
            guidelines,
            Troubleshooting and debugging on issues reported,
            Collaborating and working with project managers,
            designers, and peer developers.
            Aligning to Agile principles, and adhering to Sprint
            methodology"
          />
          <TimelineItem
            title="Frontend Developer"
            date="12 Sept 2022 — 05 May 2023"
            description="Translating designs and wireframes into high-quality code
            Developing responsive UI components using React with
            Unit and integrating testing
            Understanding existing architecture and building features
            on top of it.
            Building reusable components for future use
            Working with open-source libraries"
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>

        <div style={{display:'flex',flexWrap:'wrap',gap:15}}>
          {skills.map((eachItem) => (
            <div>
              <div style={{ width: 100, height: 100, position: "relative" }}>
                <CircularProgressbar value={66} />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <img
                    src={eachItem.image}
                    alt={`${eachItem.name} icon`}
                    width="40"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;

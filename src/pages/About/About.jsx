/* eslint-disable react/no-unescaped-entities */

import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level.",
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description:
      "Professional development of applications for iOS and Android.",
  },
];

const About = () => {
  return (
    <section className="about  active" data-page="about" style={{height:window.innerHeight - 80}}>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          A versatile full-stack developer with a proven mastery of crafting
          dynamic web applications. Proficient in front-end tech including HTML,
          CSS, JavaScript, and ReactJS. Equally skilled in back-end frameworks,
          especially Node.js.<br/> <br/>Adept at designing responsive interfaces and
          constructing sturdy APIs. Committed to continuous learning and
          harnessing emerging tech for efficient, scalable web solutions.
        </p>

        
      </section>

      {/* <!--
      - service
    --> */}

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>
    </section>
  );
};

export default About;

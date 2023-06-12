import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Pr1 from "./Projectimages/Project1.jfif";
import Pr2 from "./Projectimages/Project2.jfif";
import Pr3 from "./Projectimages/pj3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "DSA PRACTICE TRACKER",
      description:
        "This is a simple DSA-TRACKER web page. At any given time,a user can add or delete any question which would allow him/her to keep a track and manage his/her progress.",
      imgUrl: projImg1,
      links: "https://github.com/sumit2002agarwal/DSA-TRACKER",
    },
    {
      title: "What's the Weather?",
      description:
        "This is a simple Weather Forecasting web page. It helps you know the whether conditions of any city you wish.",
      imgUrl: projImg2,
      links: "https://github.com/sumit2002agarwal/weather-plan",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This is a simple Portfolio web page. It has a basic navbar to navigate through contents.",
      imgUrl: projImg3,
      links: "https://github.com/sumit2002agarwal/DSA-TRACKER",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Here are a few projects that I made in the process of
                    learning development.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

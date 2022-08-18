import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'; 
import Project from '../components/project/Project';
import {myProjects} from '../constants/index';

const Projects = () =>{

    return(
        <section className="projects">
            <Container>
                <Row>
                    <Col>
                    {myProjects.map((project, i) => (
                        <Project key={`project-${i}`} 
                        subtitle={project.subtitle}
                        title={project.title}
                        p1={project.paragraph1}
                        p2={project.paragraph2}
                        images={project.images}
                        github={project.github}
                        url={project.url}
                        />
                    ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;
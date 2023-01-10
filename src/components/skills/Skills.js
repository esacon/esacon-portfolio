import { Table, Row, Col } from 'react-bootstrap';
import { Linkedin } from 'react-bootstrap-icons';

const Skills = () => {

    const skills = [
        { name: 'HTML', image: <Linkedin /> },
        { name: 'CSS', image: <Linkedin /> },
        { name: 'JavaScript', image: <Linkedin /> },
        { name: 'React', image: <Linkedin /> },
        { name: 'Node.js', image: <Linkedin /> },
        { name: 'HTML', image: <Linkedin /> },
        { name: 'CSS', image: <Linkedin /> },
        { name: 'JavaScript', image: <Linkedin /> },
        { name: 'React', image: <Linkedin /> },
        { name: 'Node.js', image: <Linkedin /> },
    ];

    //<td><img src={skill.image} alt={skill.name} /></td>

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <Table striped bordered hover>
                                <tbody>
                                    {skills.map((skill, index) => {
                                        return console.log(index, skill.name);
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;

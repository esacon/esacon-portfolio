import skills from './list';

const Skills = () => {
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="skill-bx wow zoomIn">
                    <h2>Languages and Technologies</h2>
                    <div className="center-container row">
                        <div className='grid-no'>
                            {skills.map((skill) => {
                                return (
                                    <div className="skill-container" key={skill.name}>
                                        <img src={skill.img} alt={skill.name} className={skill.name === 'Flask' ? 'white-bg' : ''} />
                                        <p>{skill.name}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
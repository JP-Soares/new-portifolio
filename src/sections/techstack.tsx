import SkillsData from "../assets/techstack.json"

type Skill = {
    name: string,
    level: string,
    icon: string
}

type SkillType = {
    frontend: Skill[],
    backend: Skill[],
    tools: Skill[]
}

export default function TechStack(){
    const data = SkillsData as SkillType;

    return(
        <div className="flex justify-center">
            <div className="flex p-10 gap-40">
                {Object.entries(data).map(([category,skills]) => 
                    <div key={category}>
                        <h2>{category.toUpperCase()}</h2>
                        {skills.map(skill=>(
                            <>
                                <div className="flex">
                                    <i className={skill.icon}></i>
                                    <p>{skill.name} - {skill.level}</p>
                                </div>
                            </>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
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
                    <div key={category} className="w-2xl h-dvw bg-woodsmoke-100 p-5 rounded-md">
                        <h2 className="text-woodsmoke-900">{category.toUpperCase()}</h2>
                        <div className="grid grid-cols-3">
                            {skills.map(skill=>(
                                <>
                                    <div className="text-woodsmoke-800 items-center">
                                        <i className={`${skill.icon} text-3xl`}></i>
                                        <p>{skill.name} <span className="text-woodsmoke-700">{skill.level}</span></p>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
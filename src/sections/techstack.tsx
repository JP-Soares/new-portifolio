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
        <div className="flex justify-center bg-woodsmoke-900">
            <div className="flex p-10 gap-40">
                {Object.entries(data).map(([category,skills]) => 
                    <div key={category} className="w-3xl h-dvw bg-woodsmoke-100 p-5 rounded-md">
                        <h2 className="text-woodsmoke-900 font-bold">{category.toUpperCase()}</h2>
                        <div className="grid grid-cols-3 gap-5">
                            {skills.map(skill=>(
                                <>
                                    <div className="text-woodsmoke-900 flex flex-col items-center text-center">
                                        <i className={`${skill.icon} text-3xl`}></i>
                                        <div className="items-center">
                                            <p className="font-bold">{skill.name}</p>
                                            <p className="text-woodsmoke-900">{skill.level}</p>
                                        </div>
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
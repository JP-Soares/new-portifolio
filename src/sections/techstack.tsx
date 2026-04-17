import SkillsData from "../assets/techstack.json"
import Title from "../components/title"

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

export default function TechStack() {
    const data = SkillsData as SkillType;

    return (
        <section className="bg-woodsmoke-900 py-20 flex flex-col items-center">
            <Title text="Tech Stack"></Title>
            {/* CONTEÚDO */}
            <div className="flex gap-40">
                {Object.entries(data).map(([category, skills]) => (
                    <div
                        key={category}
                        className="w-3xl bg-woodsmoke-100 p-5 rounded-md flex flex-col items-center"
                    >
                        <h2 className="text-woodsmoke-900 font-bold mb-4">
                            {category.toUpperCase()}
                        </h2>

                        <div className="grid grid-cols-3 gap-5">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="text-woodsmoke-900 flex flex-col items-center text-center"
                                >
                                    <i className={`${skill.icon} text-3xl`}></i>
                                    <p className="font-bold">{skill.name}</p>
                                    <p>{skill.level}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
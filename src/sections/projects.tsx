import ProjectsData from "../assets/projects.json"
import Title from "../components/title"

type Tecnologies = {
    name: string,
    icon: string
}

type Project = {
    name: string,
    description: string,
    link: string,
    tecnologies: Tecnologies[]
}

export default function Projects() {
    const data: Project[] = ProjectsData;

    return (
        <section id="projects" className="p-10 bg-woodsmoke-100">
            <div className="pt-10">
                <Title text="Projects" textColor="text-woodsmoke-900" lineColor="bg-woodsmoke-900"></Title>
            </div>
            <div className="grid grid-cols-2 gap-20">
                {data.map((projects) =>
                    <div
                        key={projects.name}
                        className="bg-woodsmoke-900 rounded-md p-5 min-h-96 flex flex-col justify-between"
                    >
                        {/* Conteúdo */}
                        <div>
                            <h2 className="text-xl text-woodsmoke-100 font-bold">
                                {projects.name}
                            </h2>

                            <p className="mt-2 text-woodsmoke-100">
                                {projects.description}
                            </p>

                            <div className="mt-10">
                                <h2 className="text-lg text-woodsmoke-100 font-bold">
                                    Technologies used:
                                </h2>

                                <ul className="flex flex-wrap gap-6 mt-5 text-woodsmoke-100 justify-center">
                                    {projects.tecnologies.map((tec) =>
                                        <li
                                            key={tec.name}
                                            className="flex items-center gap-2"
                                        >
                                            <i className={`${tec.icon} text-2xl`}></i>
                                            <span>{tec.name}</span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>

                        {/* Botão */}
                        <div className="flex justify-center mt-10">
                            <a className="w-80 bg-woodsmoke-100 rounded py-2 align-center text-center"
                            href={projects.link}
                            target="_blank"
                            >
                                View on GitHub
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
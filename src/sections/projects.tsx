import ProjectsData from "../assets/projects.json"


type Tecnologies = {
    name:string,
    icon:string
}

type Project = {
    name:string,
    description:string,
    link:string,
    tecnologies:Tecnologies[]
}


export default function Projects(){
    const data: Project[] = ProjectsData;

    return(
        <div>
            <div className="flex">
                {data.map((projects)=>
                    <div key={projects.name}>
                        <h2>{projects.name}</h2>
                        <p>{projects.description}</p>
                        <div>
                            <ul>
                                {projects.tecnologies.map((tec)=>
                                    <li><i className={tec.icon}></i> - {tec.name}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
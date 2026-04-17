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
        <section className="p-10 bg-woodsmoke-100">
            <div className="flex p-10 grid grid-cols-2 justify-center gap-20">
                {data.map((projects)=>
                    <div key={projects.name} className="w-lg h-96 bg-woodsmoke-900 rounded-md p-5">
                        <h2 className="text-xl text-woodsmoke-100 font-bold">{projects.name}</h2>
                        <p className="relative top-2 text-woodsmoke-100">{projects.description}</p>
                        <div className="relative top-10">
                            <h2 className="text-lg text-woodsmoke-100 font-bold">Technologies used:</h2>
                            <ul className="flex relative top-5 gap-10 items-center 
                            justify-center text-woodsmoke-100">
                                {projects.tecnologies.map((tec)=>
                                    <>
                                        <li className="flex items-center">
                                            <i className={`${tec.icon} text-2xl`}></i>
                                            <span> - {tec.name}</span>
                                        </li>
                                    </>
                                )}
                            </ul>
                            <div className="flex justify-center mt-10">
                                <button className="w-80 bg-woodsmoke-100 rounded"
                                >View on GitHub</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
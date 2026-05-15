import Title from "../components/title";

export default function Contact(){
    return(
        <section className="bg-woodsmoke-900">
            <div className="">
                <Title text="Contact" textColor="text-woodsmoke-100" lineColor="bg-woodsmoke-100"></Title>
            </div>
            <div className="flex justify-around align-center gap-40 text-woodsmoke-100">
                <div className="flex justify-center align-center items-center gap-2 text-2xl">
                    <a className="flex justify-center align-center items-center gap-2 text-2xl"
                        href="https://linkedin.com/in/joão-pedro-da-costa"
                        target="_blank">
                        <i className="devicon-linkedin-plain"></i>
                        <p>Linkedin</p>
                    </a>
                </div>
                <div className="flex justify-center align-center items-center gap-2 text-2xl">
                    <a className="flex justify-center align-center items-center gap-2 text-2xl" 
                        href="https://github.com/JP-Soares"
                        target="_blank">
                        <i className="devicon-github-original"></i>
                        <p>GitHub</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
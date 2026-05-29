import Title from "../components/title";

export default function Contact(){
    return(
        <section id="contact" className="bg-woodsmoke-900 h-60">
            <div className="pt-10">
                <Title text="Contact" textColor="text-woodsmoke-100" lineColor="bg-woodsmoke-100"></Title>
            </div>

            <div className="flex items-center justify-center gap-4 lg:justify-around">
                <div className="flex items-center justify-center w-full px-4">
                    <div className="flex justify-evenly items-center w-full max-w-md text-woodsmoke-100">
                        <a
                            className="flex items-center gap-2 text-xl md:text-2xl"
                            href="https://linkedin.com/in/joão-pedro-da-costa"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="devicon-linkedin-plain"></i>
                            <p>LinkedIn</p>
                        </a>

                        <a
                            className="flex items-center gap-2 text-xl md:text-2xl"
                            href="https://github.com/JP-Soares"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="devicon-github-original"></i>
                            <p>GitHub</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
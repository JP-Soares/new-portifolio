import { Link } from "react-scroll";

export default function MenuBar() {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-woodsmoke-50 z-10 flex justify-center items-center">

            <ul className="flex w-full justify-between px-4 text-sm sm:text-lg lg:justify-around">

                <li>
                    <Link
                        to="about"
                        smooth={true}
                        duration={1600}
                        offset={-80}
                        className="cursor-pointer hover:underline"
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link
                        to="techstack"
                        smooth={true}
                        duration={1600}
                        offset={-80}
                        className="cursor-pointer hover:underline"
                    >
                        Tech Stack
                    </Link>
                </li>

                <li>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={1600}
                        offset={-80}
                        className="cursor-pointer hover:underline"
                    >
                        Projects
                    </Link>
                </li>

                <li>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={1600}
                        offset={-80}
                        className="cursor-pointer hover:underline"
                    >
                        Contact
                    </Link>
                </li>

            </ul>

        </nav>
    );
}
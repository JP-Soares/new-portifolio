export default function MenuBar(){
    return(
        <nav className="flex justify-center items-center h-16 w-full bg-woodsmoke-50 fixed z-10 sm:text-xl lg:text-lg">
            <ul className="flex space-x-10 text-jacksons-woodsmoke-800">
                <li className="hover:underline"><a href="#about">About</a></li>
                <li className="hover:underline"><a href="#projects">Projects</a></li>
                <li className="hover:underline"><a href="#techstack">Tech Stack</a></li>
                <li className="hover:underline"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}
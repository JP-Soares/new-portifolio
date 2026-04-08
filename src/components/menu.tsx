export default function MenuBar(){
    return(
        <nav className="flex justify-center items-center h-16 bg-gray-100">
            <ul className="flex space-x-10">
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
import React from "react";

export default function Header() {
    return (
        <section id="header" className="h-96">
            <div className="pt-20 px-5 sm:px-20 lg:px-40 lg:pt-40">

                <p className="sm:text-xl lg:text-2xl text-jacksons-purple-800">
                    João Pedro
                </p>

                <p className="sm:text-lg lg:text-xl text-jacksons-purple-800">
                    Full-Stack Developer focused on backend systems and real-world solutions.
                </p>

                <p className="sm:text-lg lg:text-xl pt-5 text-jacksons-purple-800">
                    I build scalable APIs, work with databases, and create systems that solve business problems efficiently.
                </p>

            </div>
        </section>
    );
}
import React from "react";

type TitleProps = {
    text: string
}

export default function Title({text}: TitleProps){
    return(
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-woodsmoke-100">
                {text}
            </h2>
            <div className="w-16 h-1 bg-woodsmoke-100 mx-auto mt-2 rounded"></div>
        </div>
    );
}
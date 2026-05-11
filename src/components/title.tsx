import React from "react";

type TitleProps = {
    text: string,
    textColor: string,
    lineColor: string
}

export default function Title({ text, textColor, lineColor }: TitleProps) {
    return (
        <div className="text-center mb-12">
            <h2 className={`text-3xl font-bold ${textColor}`}>
                {text}
            </h2>

            <div className={`w-16 h-1 ${lineColor} mx-auto mt-2 rounded`}></div>
        </div>
    );
}
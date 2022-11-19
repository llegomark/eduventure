import { useState, useEffect } from "react";
import Copyright from "../footer/copyright";
import Heading from "../headings/heading";

export default function StoriesGenerator(props: any) {
    const [text, setText] = useState("");

    function handleTextChange(e: any) {
        setText(e.target.value);
    }

    useEffect(() => {
        const data = localStorage.getItem(window.location.pathname);
        if (data) {
            setText(data);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(window.location.pathname, text);
    }, [text]);

    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col px-2 sm:px-40 py-16 sm:py-28">
            <Heading title={props.title} description={props.description} />
            <div className="w-full h-full bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-2 sm:p-4 mt-2">
                <form className="flex flex-col h-full gap-4">
                    <textarea className="w-full h-full bg-transparent dark:bg-neutral-700 rounded-lg shadow-lg p-2 sm:p-4"
                        placeholder={props.placeholder}
                        onChange={handleTextChange}
                        value={text}
                    />
                </form>
            </div>
            <Copyright />
        </div>
    )
}
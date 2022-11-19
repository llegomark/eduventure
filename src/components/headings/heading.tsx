export default function Heading(props: any) {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
                {props.title}
            </h1>
            <p className="text-sm sm:text-base md:text-base text-neutral-600 dark:text-neutral-400 mt-2 text-center">
                {props.description}
            </p>
        </div>
    );
}
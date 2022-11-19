export default function Genre(props: any) {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <select
                className="w-full sm:w-96 mt-2 bg-white-200 border-2 border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100"
                value={props.genre}
                onChange={props.handleGenreChange}
            >
                <option value="" disabled>Select a Genre</option>
                <option value="Adventure goes on an epic journey">Adventure</option>
                <option value="Comedy humorous or amusing by inducing laughter">Comedy</option>
                <option value="Drama fictional representation through dialogue and performance">Drama</option>
                <option value="Fable Animals as Characters">Fable</option>
                <option value="Fantasy involving Magical Elements">Fantasy</option>
                <option value="Fairy Tale for Children's">Fairy Tale</option>
                <option value="Fiction imaginary or inconsistent with history">Fiction</option>
                <option value="Folklore includes oral traditions such as tales, legends, proverbs and jokes">Folklore</option>
                <option value="Historical Fiction in the Early-19th-Century">Historical Fiction</option>
                <option value="Horror in psychological and supernatural horror">Horror</option>
                <option value="Mystery puzzling crime, situation, or circumstance that needs to be solved">Mystery</option>
                <option value="Mythology on a particular hero or event">Mythology</option>
                <option value="Poetry contain words that follow a rhythm or structure">Poetry</option>
                <option value="Realistic Fiction that depicts our World and Society">Realistic Fiction</option>
                <option value="Romance on the relationship and romantic love">Romance</option>
                <option value="Science Fiction imaginative and futuristic concepts such as advanced science and technology">Science Fiction</option>
                <option value="Short Story brief fictional prose narrative">Short Story</option>
                <option value="Suspense sense of worry or anticipation a reader feels when reading">Suspense</option>
                <option value="Thriller dark, engrossing, and suspenseful plot-driven">Thriller</option>
                <option value="Young Adult targeted at adolescents">Young Adult</option>
            </select>
        </div>
    )
}
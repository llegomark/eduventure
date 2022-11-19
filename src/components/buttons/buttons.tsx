import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BsClipboard } from "react-icons/bs";
import { BsSave } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

export default function Buttonsme(props: any) {
    return (
        <div className="flex gap-4 place-self-end self-center">
            <CopyToClipboard text={props.text}>
                <button type="button" disabled={props.disableButtons} className="flex items-center justify-center w-7 h-7 rounded-full bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    <BsClipboard className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                </button>
            </CopyToClipboard>
            <button type="button" onClick={props.saveTextAsFile} disabled={props.disableButtons} className="flex items-center justify-center w-7 h-7 rounded-full bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                <BsSave className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
            </button>
            <button type="button" onClick={props.handleDelete} disabled={props.disableButtons} className="flex items-center justify-center w-7 h-7 rounded-full bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                <BsTrash className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
            </button>
        </div>
    )
}
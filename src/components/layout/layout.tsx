interface Props {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <div className="bg-gray-200 dark:bg-neutral-900 text-black dark:text-white">
            {children}
        </div>
    )
}
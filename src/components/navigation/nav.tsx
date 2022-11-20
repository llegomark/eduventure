import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

interface Navs {
    title: string;
}

export default function Navigation(props: Navs) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) { return null }

    return (
        <div className="w-screen z-50 fixed top-0 bg-white dark:bg-neutral-800 shadow-sm">
            <div className="grid grid-cols-3 justify-between px-4 sm:px-8 py-1.5 sm:py-3 border-b border-b-neutral-300 dark:border-b-neutral-600">
                <div>
                    <Link
                        href={"/"}
                        passHref={true}
                        className='flex items-center'>
                        <span role="img" aria-label="robot" className="text-1xl sm:text-2xl">🤖</span>
                        <h1 className='self-center hidden sm:block sm:text-xl font-black whitespace-nowrap text-teal-800 dark:text-teal-400'>EDUVENTURE</h1>
                    </Link>
                </div>
                <div className='flex items-center place-self-center'>
                    <h1 className='font-bold text-base sm:text-lg whitespace-nowrap text-neutral-800 dark:text-neutral-300' aria-label="Page Title">{props.title}</h1>
                </div>
                <div className='place-self-end'>
                    <label className='group'>
                        <input className='hidden' type="checkbox" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
                        <div className='flex items-center justify-end'>
                            <div className='flex items-center'>
                                <BsFillSunFill className={`${resolvedTheme === 'light' ? 'hidden' : 'visible'} fill-current w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-900 text-neutral-100 p-1 group-hover:text-teal-800 cursor-pointer dark:group-hover:text-teal-400`} aria-label="light" />
                                <BsFillMoonStarsFill className={`${resolvedTheme === 'dark' ? 'hidden' : 'visible'} fill-current w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100 text-gray-600 p-1 group-hover:text-teal-800 group-hover:bg-gray-200 cursor-pointer`} aria-label="dark" />
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div >
    );
}
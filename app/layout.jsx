

import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Background from '@/components/Background'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Next.js + Three.js',
    description: 'A minimal starter for Nextjs + React-three-fiber and Threejs.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex min-h-screen flex-col items-center justify-between">

                    <Background />

                    {/*Title*/}
                    <div className="border border-pink-600 rounded-md z-10 w-full max-w-5xl items-center justify-center flex">
                        <div className="flex border border-green-600 rounded-md items-center justify-center bg-gradient-to-b from-white via-white dark:from-black dark:via-black static h-auto w-auto lg:bg-none">
                            <Link
                                className="flex place-items-center gap-2 p-8 pointer-events-auto lg:p-0"
                                href="/"
                            >
                                <h1 className='text-5xl lg:text-9xl'>R3F + Next.js</h1>
                            </Link>
                        </div>
                    </div>
                    

                    
                    {/*Navigation*/}
                    <div className="border border-orange-600 rounded-md z-10 mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                        <Link href={'/about'} className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30">
                            <h2 className={`mb-3 text-2xl font-semibold`}>
                                About{' '}
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                </span>
                            </h2>
                            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                Find in-depth information about Next.js features and API.
                            </p>
                        </Link>

                        <a
                            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2 className={`mb-3 text-2xl font-semibold`}>
                                Learn{' '}
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                </span>
                            </h2>
                            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                Learn about Next.js in an interactive course with&nbsp;quizzes!
                            </p>
                        </a>

                        <a
                            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2 className={`mb-3 text-2xl font-semibold`}>
                                Templates{' '}
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                </span>
                            </h2>
                            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                Explore the Next.js 13 playground.
                            </p>
                        </a>

                        <a
                            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h2 className={`mb-3 text-2xl font-semibold`}>
                                Deploy{' '}
                                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                    -&gt;
                                </span>
                            </h2>
                            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                Instantly deploy your Next.js site to a shareable URL with Vercel.
                            </p>
                        </a>
                    </div>

                    {/*content*/}
                    <div className='z-10 border border-blue-600 rounded-md'>
                        {children}
                    </div>
                </main>
            </body>
        </html>
    )
}

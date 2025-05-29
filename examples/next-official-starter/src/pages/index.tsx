import { Inter } from 'next/font/google';
import Image from 'next/image';

import { Link } from '@/components/link';
import { A, Code, Div, Main, P } from '@ehubbell/html';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<Main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
			<Div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
				<P className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
					Get started by editing&nbsp;
					<Code className='font-mono font-bold'>src/pages/index.tsx</Code>
				</P>
				<Div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
					<A
						className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
						href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'>
						By <Image src='/vercel.svg' alt='Vercel Logo' className='dark:invert' width={100} height={24} priority />
					</A>
				</Div>
			</Div>

			<Div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
				<Image
					className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
					src='/next.svg'
					alt='Next.js Logo'
					width={180}
					height={37}
					priority
				/>
			</Div>

			<Div className='mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left'>
				<Link
					title='Docs'
					text='Find in-depth information about Next.js features and API.'
					href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app'
					target='_blank'
					tailwind={{ a: { borderRadius: 'rounded-md' } }}
				/>
				<Link
					title='Learn'
					text='Learn about Next.js in an interactive course with&nbsp;quizzes!'
					href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app'
					target='_blank'
					tailwind={{ a: { borderRadius: 'rounded-md' } }}
				/>
				<Link
					title='Templates'
					text='Discover and deploy boilerplate example Next.js&nbsp;projects.'
					href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app'
					target='_blank'
					tailwind={{ a: { borderRadius: 'rounded-md' } }}
				/>
				<Link
					title='Deploy'
					text='Instantly deploy your Next.js site to a shareable URL with Vercel.'
					href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app'
					target='_blank'
					tailwind={{ a: { borderRadius: 'rounded-md' } }}
				/>
			</Div>
		</Main>
	);
}

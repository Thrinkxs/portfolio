import React from 'react';
import Link from 'next/link';

import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Image from 'next/image';
import next from '../../public/nextjs.svg';

const Footer = () => {
	return (
		<footer className='flex-center flex-col w-full gap-5 bg-zinc-800/30 py-14 bg-opacity-20 border-y border-white border-opacity-10 px-8'>
			<h2 className='text-3xl md:text-4xl text-center uppercase mb-5 md:mb-1'>
				Send me a message.
			</h2>
			<p className='opacity-80 max-w-md text-center'>
				I am currently looking to join a team of creative developers and
				designers to build amazing products. If you have any proposals, ideas or
				just want to say hello, hit any of these icons and let&apos;s connect.
			</p>
			<div className='flex-center gap-3'>
				<Link
					href='mailto:emmanuelozigue@gmail.com'
					target='_blank'
					className='p-2 group'
				>
					<AiOutlineMail
						size={25}
						fill='#ffffff'
						className='opacity-50 transition scale-100 group-hover:scale-105 duration-300 group-hover:opacity-80'
					/>
				</Link>
				<Link
					href='https://twitter.com/codeThrinkxs'
					className='p-2 group'
					target='_blank'
				>
					<BsTwitter
						className='opacity-50 transition scale-100 group-hover:scale-105 duration-300 group-hover:opacity-80'
						size={25}
					/>
				</Link>
				<Link
					href='https://www.linkedin.com/in/emmanuel-omokhegbe-b45338155/'
					className='p-2 group'
					target='_blank'
				>
					<BsLinkedin
						size={25}
						className='opacity-50 transition scale-100 group-hover:scale-105 duration-200 group-hover:opacity-80'
					/>
				</Link>
				<Link
					href='https://www.instagram.com/codeThrinkxs'
					className='p-2 group'
					target='_blank'
				>
					<BsInstagram
						size={25}
						className='opacity-50 transition scale-100 group-hover:scale-105 duration-300 group-hover:opacity-80'
					/>
				</Link>
				<Link
					href='https://www.github.com/Thrinkxs'
					className='p-2 group'
					target='_blank'
				>
					<BsGithub
						size={25}
						className='opacity-50 transition scale-100 group-hover:scale-105 duration-300 group-hover:opacity-80'
					/>
				</Link>
			</div>
			<div className="">
        <div className="text-center py-2">Made With</div>
        <Link href={"https://nextjs.org/"}>
          <Image
            width={100}
            className="bg-white mx-auto p-4 rounded-sm my-4"
            alt="next image"
            src={next}
          />
        </Link>

        <h5 className="text-xs text-center">
          <Link href="https://github.com/Thrinkxs/" target="_blank">
            Designed & Developed by Thrinkxs
          </Link>
        </h5>
        <p className="text-center text-xs">© 2023</p>
      </div>
		</footer>
	);
};

export default Footer;

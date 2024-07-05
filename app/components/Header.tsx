import React from 'react';

const Header = () => {
	return (
		<header className='flex-between px-6 md:px-12 py-5'>
			<code>codeThrinkxs</code>
			<button className='bg-teal-400/90 hover:bg-[#BF40BF]/100 transition px-2 py-2 text-sm rounded-lg'>
				<a
					href='https://drive.google.com/file/d/1SjO7oTOamW24HJmr6FSwl-uGkVhFS_xJ/view?usp=sharing'
					download='Emmanuel_Software_Enginer_Resume.pdf'
					target='_blank'
				>
					My Resume
				</a>
			</button>
		</header>
	);
};

export default Header;

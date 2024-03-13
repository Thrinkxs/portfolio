import './globals.css';
import Header from '@/app/components/Header';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

export const metadata = {
	title: 'Thrinkxs',
	description:
		"Welcome to Emmanuel  Omokhegbe's portfolio. Full Stack Software Enigneer from South Africa.",
	verification: {
		google: 'zSQw_SrYKkUNHr6G84F4JoqUa81ZtmyaFy_44uBOJG8',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html lang='en'>
				{/* <!-- Google tag (gtag.js) --> */}
				<Script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-W0FZ1YZX0J'
					strategy='afterInteractive'
				/>
				<Script
					id='google-analytics'
					strategy='afterInteractive'
				>{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
			
				gtag('config', 'G-W0FZ1YZX0J');
				`}</Script>
				<body>
					<Header />
					{children}
					<Analytics />
				</body>
			</html>
		</>
	);
}

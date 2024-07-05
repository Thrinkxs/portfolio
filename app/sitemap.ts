import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://codethrinkxs.vercel.app/',
			lastModified: new Date(),
		},
	];
}

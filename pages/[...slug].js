import Head from "next/head";

import {
	useStoryblokState,
	getStoryblokApi,
	StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story }) {
	story = useStoryblokState(story);

	return (
		<div>
			<Head>
				<title>{story ? story.name : "Alpen deck "}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<StoryblokComponent blok={story.content} />
		</div>
	);
}

export async function getStaticProps({ params }) {
	const mainSlug = "home";
	let slug = params.slug ? params.slug.join("/") : mainSlug;

	let sbParams = {
		version: "draft", // or 'published'
	};

	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
		},
		revalidate: 3600,
	};
}

export async function getStaticPaths() {
	const mainSlug = "home";
	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get("cdn/links/", {
		version: "draft",
	});

	let paths = [];
	Object.keys(data.links).forEach((linkKey) => {
		if (
			data.links[linkKey].is_folder ||
			data.links[linkKey].slug === mainSlug
		) {
			return;
		}

		const slug = data.links[linkKey].slug;
		let splittedSlug = slug.split("/");

		paths.push({ params: { slug: splittedSlug } });
		// // USE this for internationalization
		// for (const locale of locales) {
		// 	paths.push({ params: { slug: splittedSlug }, locale });
		// }
	});

	return {
		paths: paths,
		fallback: false,
	};
}

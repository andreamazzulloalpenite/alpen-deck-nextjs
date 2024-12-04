import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Swiper, SwiperSlide } from "swiper/react";

const Contact = ({ blok }) => {
	console.log("-------contact eccolo cazzzooooooooo", blok);
	return <div>AAAAAAAA</div>;
	// return (
	// 	<div>
	// 		<h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
	// 			{blok.title}
	// 		</h2>
	// 		{blok.email && (
	// 			<h4 className="text-xl mb-10" {...storyblokEditable(blok)}>
	// 				{blok.email}
	// 			</h4>
	// 		)}
	// 		{blok.phone && (
	// 			<h4 className="text-xl mb-10" {...storyblokEditable(blok)}>
	// 				{blok.phone}
	// 			</h4>
	// 		)}
	// 	</div>
	// );
};

export default Contact;

import { storyblokEditable } from "@storyblok/react";

const Copertina = ({ blok }) => (
	<div
		className="copertina bg-cover bg-center bg-no-repeat w-full h-screen"
		style={{
			backgroundImage: `url(${blok.background.filename})`, // Tailwind non supporta direttamente i valori dinamici per bg-image
		}}
		{...storyblokEditable(blok)}
	>
		<div className="flex justify-center items-center h-full text-white text-center">
			<h1 className="text-4xl font-bold">{blok.title}</h1>
		</div>
	</div>
);

export default Copertina;

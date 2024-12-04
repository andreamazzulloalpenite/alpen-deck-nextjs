import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Contacts = ({ blok }) => {
	return (
		<div
			className="Contatcs bg-cover bg-center bg-no-repeat w-full h-screen p-4"
			style={{
				backgroundImage: `url(${blok.background.filename})`, // Tailwind non supporta direttamente i valori dinamici per bg-image
			}}
			{...storyblokEditable(blok)}
		>
			<div className="flex justify-center items-center text-white text-center">
				<h1 className="text-4xl font-bold">{blok.title}</h1>
			</div>
			{blok.contacts.map((nestedBlok) => {
				// console.log("Contacts", nestedBlok);
				return <StoryblokComponent blok={nestedBlok} />;
			})}
			<div className="alpenite-info-wrapper absolute bottom-[60px] border-t border-white pt-4 w-[calc(100%-2rem)]">
				{blok.info.map((info) => {
					return <StoryblokComponent blok={info} />;
				})}
			</div>
		</div>
	);
};

export default Contacts;

import { storyblokEditable } from "@storyblok/react";

const RenderText = ({ textTop, textBottom }) => (
	<div className="flex flex-col justify-between p-4">
		<div className="h-1/2 flex items-center justify-center p-4">
			<h4 className="text-xl">{textTop}</h4>
		</div>
		<div className="h-1/2 flex items-center justify-center p-4">
			<h4 className="text-xl">{textBottom}</h4>
		</div>
	</div>
);

const RenderImg = ({ imageSrc, alt }) => (
	<div className="p-4 flex items-center justify-center">
		<img
			src={imageSrc}
			alt={alt}
			className="w-auto h-full max-w-full max-h-full object-contain"
		/>
	</div>
);

const TextImage = ({ blok }) => (
	<div
		className="copertina bg-cover bg-center bg-no-repeat w-full h-screen"
		style={{
			backgroundImage: blok.background?.filename
				? `url(${blok.background.filename})`
				: "none",
		}}
		{...storyblokEditable(blok)}
	>
		<div className="flex justify-center items-center text-center pt-4">
			<h1 className="text-4xl font-bold">{blok.title || "Default Title"}</h1>
		</div>
		<div className="h-3/4 grid grid-cols-2 items-center">
			{/* Colonna sinistra */}
			{blok.imagePosition === "right" ? (
				<>
					<RenderText
						textTop={blok.textTop}
						textBottom={blok.textBottom}
					></RenderText>
					<RenderImg imageSrc={blok.image.filename} alt={"immagine"} />
				</>
			) : (
				<>
					<RenderImg imageSrc={blok.image.filename} alt={"immagine"} />
					<RenderText
						textTop={blok.textTop}
						textBottom={blok.textBottom}
					></RenderText>
				</>
			)}
		</div>
	</div>
);

export default TextImage;

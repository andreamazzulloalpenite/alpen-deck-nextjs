import { storyblokEditable } from "@storyblok/react";

const Agenda = ({ blok }) => {
	return (
		<div
			className="agenda bg-cover bg-center bg-no-repeat w-full h-screen"
			style={{
				backgroundImage: `url(${blok.background.filename})`, // Sfondo dinamico
			}}
			{...storyblokEditable(blok)}
		>
			{/* Wrapper per contenere il titolo e gli step */}
			<div className="flex flex-col justify-center items-start w-full h-full p-20">
				{/* Titolo (a sinistra, 30% dell'altezza della pagina) */}
				<div className="w-full">
					<h1
						className="text-4xl font-bold text-white"
						style={{ marginTop: "5%" }}
					>
						{blok.title}
					</h1>
				</div>

				{/* Pannello per gli step (a destra) */}
				<div className="flex justify-end w-full p-10 mt-10">
					<div className="w-1/2 max-w-md p-4 rounded-md text-white">
						<ul className="list-none">
							{blok.steps.map((step, index) => (
								<li
									key={index}
									className="text-lg font-medium mb-2 text-left border-b border-white pb-2"
								>
									{step.step}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Agenda;

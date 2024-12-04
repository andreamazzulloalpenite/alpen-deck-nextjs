import { storyblokEditable } from "@storyblok/react";

const renderMultiline = (txt) =>
	txt.split("\n").map((i, key) => {
		return <div key={key}>{i}</div>;
	});

const AlpeniteInfo = ({ blok }) => {
	console.log("AlpeniteInfo", blok);
	return (
		<div className="AlpeniteInfo grid grid-cols-3 text-white">
			<div className="">{renderMultiline(blok.lightInfo)}</div>
			<div className="">{renderMultiline(blok.InfoIt)}</div>
			<div className="">{renderMultiline(blok.InfoEng)}</div>
		</div>
	);
};

export default AlpeniteInfo;

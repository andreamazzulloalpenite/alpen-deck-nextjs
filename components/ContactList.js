import { storyblokEditable } from "@storyblok/react";

const ContactList = ({ blok }) => {
	return (
		<div className="Contact-list grid grid-cols-3 pt-[40px]">
			{blok.Contact.map((nestedBlok) => {
				console.log("Contact list single name", nestedBlok.name);
				return (
					<div>
						<h2
							className="text-2xl mb-0 text-white"
							{...storyblokEditable(nestedBlok)}
						>
							{nestedBlok.name}
						</h2>
						<h2
							className="text-2xl mb-0 text-white"
							{...storyblokEditable(nestedBlok)}
						>
							{nestedBlok.rule}
						</h2>
						<div className="space my-4 h-[20px]"></div>
						{nestedBlok.email && (
							<h4
								className="text-xl mb-0 text-white"
								{...storyblokEditable(nestedBlok)}
							>
								{nestedBlok.email}
							</h4>
						)}
						{nestedBlok.phone && (
							<h4
								className="text-xl mb-0 text-white"
								{...storyblokEditable(nestedBlok)}
							>
								{nestedBlok.phone}
							</h4>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default ContactList;

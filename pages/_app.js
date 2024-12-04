import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Copertina from "../components/Copertina";
import Agenda from "../components/Agenda";
import TextImage from "../components/TextImage";
import AlpeniteInfo from "../components/AlpeniteInfo";
import Contact from "../components/Contact";
import Contacts from "../components/Contacts";
import ContactList from "../components/ContactList";

const components = {
	feature: Feature,
	grid: Grid,
	teaser: Teaser,
	page: Page,
	copertina: Copertina,
	Agenda: Agenda,
	textImage: TextImage,
	AlpeniteInfo: AlpeniteInfo,
	contact: Contact,
	ContactList: ContactList,
	contactPage: Contacts,
};

storyblokInit({
	accessToken: "jQH3IbIonyTQVPjgD8c8Ewtt",
	use: [apiPlugin],
	components,
	apiOptions: {
		region: "",
	},
});

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;

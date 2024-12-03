import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow"; // Se vuoi aggiungere effetti
import "swiper/css/navigation"; // Per pulsanti opzionali
import "swiper/css/pagination"; // Per il controllo visivo

const Page = ({ blok }) => {
	return (
		<main className="h-screen overflow-hidden">
			<Swiper
				direction="vertical" // Slider verticale
				slidesPerView={1} // Una slide per volta
				spaceBetween={0} // Nessun margine tra le slide
				mousewheel={{
					releaseOnEdges: true, // Rilascia la scrollata sui bordi
				}} // Abilita la navigazione tramite mousewheel (trackpad)
				cssMode={true} // Attiva snap-to-view
				centeredSlides={true} // Centra le slides durante lo scroll
				snapOnRelease={true} // Lo snap si attiva quando la gesture di scroll è completata
				className="mySwiper h-full" // Impostato per occupare tutta l'altezza disponibile
			>
				{blok.body.map((nestedBlok) => (
					<SwiperSlide key={nestedBlok._uid} className="h-screen">
						<StoryblokComponent blok={nestedBlok} />
					</SwiperSlide>
				))}
			</Swiper>
		</main>
	);
};

export default Page;

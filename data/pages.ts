import { IconDiscount, IconLicense, IconUsersGroup } from "@tabler/icons-react";

import help1 from "@/assets/images/help/help-1.jpg";
import help2 from "@/assets/images/help/help-2.jpeg";
import help3 from "@/assets/images/help/help-3.webp";

import location1 from "@/assets/images/locations/location-1.webp";
import location2 from "@/assets/images/locations/location-2.webp";
import location3 from "@/assets/images/locations/location-3.webp";
import location4 from "@/assets/images/locations/location-4.webp";
import location5 from "@/assets/images/locations/location-5.webp";
import location6 from "@/assets/images/locations/location-6.webp";
import location7 from "@/assets/images/locations/location-7.webp";

const pages = {
	home: {
		why: [
			{
				icon: IconLicense,
				title: "Kenyan Permit Expertise",
				description: "Let us handle the paperwork for you",
			},
			{
				icon: IconUsersGroup,
				title: "Finding the Right Crew & Resources",
				description: "Connecting with reliable crew, equipment rentals, and location scouting",
			},
			{
				icon: IconDiscount,
				title: "Unexpected Costs & Delays",
				description: "Hidden costs and logistical hiccups",
			},
		],
		help: [
			{
				image: help1,
				title: "Compliance Mastery",
				description: "We simplify Kenyan regulations, saving you time and avoiding costly mistakes",
			},
			{
				image: help2,
				title: "Itinerary Design",
				description: "Customized itineraries, expert scouting, maximizing your time and budget",
			},
			{
				image: help3,
				title: "Ground Support",
				description:
					"Reliable transport, crew-friendly logistics, getting you where you need to be on schedule",
			},
		],
		whyKenya: [
			{
				image: location1,
				title: "Nairobi",
				description:
					"The vibrant capital city offers a mix of modern and historic architecture, bustling markets, and diverse cultural experiences.",
			},
			{
				image: location7,
				title: "Masai Mara National Reserve",
				description:
					'This iconic savanna is teeming with wildlife, offering stunning vistas, exceptional opportunities to capture the "Big Five", and the dramatic annual Great Migration.',
			},
			{
				image: location2,
				title: "Amboseli National Park",
				description:
					"Renowned for its breathtaking views of Mount Kilimanjaro, diverse wildlife, and unique Maasai culture, this park offers unforgettable scenery and cultural immersion.",
			},
			{
				image: location4,
				title: "Great Rift Valley",
				description:
					"A geological marvel boasting stunning lakes, volcanoes, and diverse ecosystems. This location provides a unique backdrop for documentaries and dramatic scenes.",
			},
			{
				image: location6,
				title: "Lamu Island",
				description:
					"A UNESCO World Heritage Site, Lamu Island offers a glimpse into Swahili history with its charming architecture, vibrant culture, and beautiful beaches.",
			},
			{
				image: location5,
				title: "Diani Beach",
				description:
					"With its picturesque white sand beaches and clear turquoise waters, Diani Beach offers a serene and idyllic setting for filming.",
			},
			{
				image: location3,
				title: "Tsavo National Park",
				description:
					"Kenya's largest national park, Tsavo boasts diverse wildlife, including the famous red elephants, making it a prime location for nature documentaries.",
			},
		],
	},
};

export default pages;

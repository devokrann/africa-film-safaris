import { IconDiscount, IconLicense, IconUsersGroup } from "@tabler/icons-react";

import help1 from "@/assets/images/services/service-1.webp";
import help2 from "@/assets/images/services/service-8.webp";
import help3 from "@/assets/images/services/service-3.webp";

import kenya1 from "@/assets/images/kenya/kenya-1.webp";
import kenya2 from "@/assets/images/kenya/kenya-2.webp";
import kenya3 from "@/assets/images/kenya/kenya-3.webp";

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
				title: "Finding the Right Crew & Resources",
				description: "Customized itineraries, expert scouting, maximizing your time and budget",
			},
			{
				image: help3,
				title: "Unexpected Costs & Delays",
				description:
					"Reliable transport, crew-friendly logistics, getting you where you need to be on schedule",
			},
		],
		kenya: [
			{
				image: kenya1,
				title: "Why Kenya 1",
			},
			{
				image: kenya2,
				title: "Why Kenya 2",
			},
			{
				image: kenya3,
				title: "Why Kenya 3",
			},
		],
	},
};

export default pages;

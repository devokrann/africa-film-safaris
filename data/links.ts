import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

const links = {
	navbar: [
		{ link: "/", label: "Home" },
		{ link: "/about", label: "About" },
		{ link: "/services", label: "Services" },
		{
			link: "/blog",
			label: "Blog",
			subLinks: undefined,
			// subLinks: [
			// 	{ link: "/blog/1", label: "Blog 1" },
			// 	{ link: "/blog/2", label: "Blog 2" },
			// 	{ link: "/blog/3", label: "Blog 3" },
			// ],
		},
		{
			link: "/contact",
			label: "Contact",
		},
	],
	contact: [
		{
			icon: IconPhone,
			link: "tel:+123-456-789",
			label: "+123-456-789",
		},
		{
			icon: IconMapPin,
			link: "#",
			label: "99 Sample Street, Nairobi, KE 00100",
			target: "_blank",
		},
		{
			icon: IconMail,
			link: "mailto:info@africafilmsafaris.com",
			label: "info@africafilmsafaris.com",
		},
	],
};

export default links;

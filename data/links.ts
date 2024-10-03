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
			link: "tel:+254716046074",
			label: "+254 716 046074",
		},
		{
			icon: IconMapPin,
			link: "https://www.google.com/maps/place/Nairobi/@-1.3032076,36.7648243,12z/data=!3m1!4b1!4m6!3m5!1s0x182f1172d84d49a7:0xf7cf0254b297924c!8m2!3d-1.2920659!4d36.8219462!16zL20vMDVkNDk?entry=ttu",
			label: "Nairobi, Kenya 00100-8571",
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

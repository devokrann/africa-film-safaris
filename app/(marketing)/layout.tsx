import React from "react";

import Body from "@/layouts/Body";
import NavbarMain from "@/partials/navbars/Main";
import FooterMain from "@/partials/footer/Main";
import HeroMain from "@/layouts/heros/Main";

export default function Marketing({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<Body nav={<NavbarMain />} hero={<HeroMain />} footer={<FooterMain />}>
			<main>{children}</main>
		</Body>
	);
}

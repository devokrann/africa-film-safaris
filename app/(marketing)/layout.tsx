import React from "react";

import Body from "@/layouts/Body";
import NavbarMain from "@/partials/navbars/Main";
import FooterMain from "@/partials/footer/Main";
import HeroMain from "@/layouts/heros/Main";
import AffixNavbar from "@/components/affixi/Navbar";
import AffixScrollTop from "@/components/affixi/ScrollTop";

import { ClerkProvider } from "@clerk/nextjs";

export default function Marketing({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	const navbar = <NavbarMain />;

	return (
		<Body nav={navbar} hero={<HeroMain />} footer={<FooterMain />}>
			<ClerkProvider>
				<AffixNavbar>{navbar}</AffixNavbar>
				<AffixScrollTop />

				<main>{children}</main>
			</ClerkProvider>
		</Body>
	);
}

import React from "react";

import Link from "next/link";
import NextImage from "next/image";

import { Group, Box, Container, Image } from "@mantine/core";

import Section from "@/layouts/Section";

import NavigationMain from "@/components/navigation/Main";
import DrawerNavMain from "@/components/drawers/nav/Main";

import links from "@/data/links";
import brandLight from "@/assets/icons/brand/logo-slogan-light.webp";

import classes from "./Main.module.scss";

export default async function Main() {
	return (
		<Section className={classes.navbar} shadowed>
			<Container size={"responsive"}>
				<Group justify="space-between">
					<Box>
						<Link href={"/"}>
							<Group py={"xs"}>
								<Image
									src={brandLight}
									alt="next icon"
									className={classes.logo}
									component={NextImage}
									priority
								/>
							</Group>
						</Link>
					</Box>
					<DrawerNavMain data={links.navbar} hiddenFrom="sm" aria-label="Toggle Navigation" />

					<Group gap={"xs"} component={"nav"} visibleFrom="sm">
						<NavigationMain />
					</Group>
				</Group>
			</Container>
		</Section>
	);
}

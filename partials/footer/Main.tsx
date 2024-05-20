import React from "react";

import Image from "next/image";
import Link from "next/link";

import {
	Flex,
	Grid,
	Image as MantineImage,
	Text,
	Title,
	List,
	Anchor,
	Group,
	GridCol,
	ListItem,
	Box,
} from "@mantine/core";

import Section from "@/layouts/Section";

import brandLight from "@/assets/icons/brand/logo-light.svg";
import brandDark from "@/assets/icons/brand/logo-dark.svg";
import facebook from "@/assets/icons/social/icons8-facebook.svg";
import twitter from "@/assets/icons/social/icons8-twitter.svg";
import instagram from "@/assets/icons/social/icons8-instagram.svg";

import classes from "./Main.module.scss";

const linkSets = [
	{
		title: "Links",
		links: [
			{ label: "About AFS", link: "/about" },
			{ label: "AFS Services", link: "/services" },
			{ label: "Latest AFS News", link: "/blog" },
			{ label: "Consult with AFS", link: "/contact" },
		],
	},
	{
		title: "Projects",
		links: [
			{ label: "Film Project I", link: "#project1" },
			{ label: "Film Project II", link: "#project2" },
			{ label: "Film Project III", link: "#project3" },
			{ label: "Film Project IV", link: "#project4" },
		],
	},
	{
		title: "Community",
		links: [
			{ label: "Follow on Twitter", link: "#afs@twitter" },
			{ label: "Follow on Facebook", link: "#afs@facebook" },
			{ label: "Follow on Instagram", link: "#afs@instagram" },
		],
	},
];

const socials = [
	{
		link: "#facebook",
		alt: "AFS @ Facebook",
		icon: facebook,
	},
	{
		link: "#twitter",
		alt: "AFS @ Twitter",
		icon: twitter,
	},
	{
		link: "#instagram",
		alt: "AFS @ Instagram",
		icon: instagram,
	},
];

export default function Main() {
	return (
		<Box className={classes.footer}>
			<Section containerized={"responsive"} shadowed padded={"md"}>
				<Grid py={{ xs: "xl" }}>
					<GridCol span={{ base: 12, md: 4 }}>
						<Flex direction={"column"} align={{ base: "center", md: "start" }} gap={"md"}>
							<MantineImage
								src={brandLight}
								alt="next logo"
								w={{ base: 80, sm: 120 }}
								component={Image}
								priority
							/>
							<Title order={1} fz={"xl"}>
								Africa Film Safaris
							</Title>
							<Title className="textResponsive" ta={{ base: "center", md: "start" }}>
								Nulla facilisi. Praesent non mauris ac ligula ullamcorper vehicula. Praesent mollis,
								nibh in venenatis iaculis, mauris eros iaculis quam, ut aliquam nisi nunc vitae quam.
								Fusce faucibus, felis at fermentum convallis, nunc neque aliquam turpis, ut varius ipsum
								nisi eu magna.
							</Title>
						</Flex>
					</GridCol>
					<GridCol span={{ base: 12, md: 8 }} visibleFrom="sm">
						<Grid mt={{ sm: "xl", md: 0 }}>
							{linkSets.map(linkSet => (
								<GridCol key={linkSet.title} span={"auto"}>
									<Flex direction={"column"} align={{ base: "center", md: "end" }} gap={"xs"}>
										<Title order={4}>{linkSet.title}</Title>
										<List listStyleType="none">
											{linkSet.links.map(link => (
												<ListItem key={link.link} className={classes.listItem}>
													<Anchor
														component={Link}
														href={link.link}
														title={link.label}
														className={classes.link}
													>
														{link.label}
													</Anchor>
												</ListItem>
											))}
										</List>
									</Flex>
								</GridCol>
							))}
						</Grid>
					</GridCol>
				</Grid>
			</Section>

			<Section containerized={"responsive"} padded={"md"}>
				<Flex
					direction={{ base: "column", xs: "row" }}
					align={"center"}
					justify={{ xs: "space-between" }}
					gap={{ base: "xs", xs: "md" }}
				>
					<Text c={"light-dark(var(--mantine-color-dimmed),inherit)"} fz={{ base: "xs", xs: "sm" }}>
						Copyright 2024 © Africa Film Safaris.
					</Text>
					<Group>
						{socials.map(social => (
							<a key={social.link} href={social.link}>
								<MantineImage
									src={social.icon}
									alt={social.alt}
									title={social.alt}
									w={{ base: 24, md: 28 }}
									h={{ base: 24, md: 28 }}
									component={Image}
									priority
								/>
							</a>
						))}
					</Group>
				</Flex>
			</Section>
		</Box>
	);
}

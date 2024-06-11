import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Flex, Image as MantineImage, Text, Title, Group, Box, Button, Stack, Center } from "@mantine/core";

import { Icon } from "@tabler/icons-react";

import Section from "@/layouts/Section";

import brandLight from "@/assets/icons/brand/logo-slogan-light.webp";
import facebook from "@/assets/icons/social/icons8-facebook.svg";
import twitter from "@/assets/icons/social/icons8-twitter.svg";
import instagram from "@/assets/icons/social/icons8-instagram.svg";
import whatsapp from "@/assets/icons/social/icons8-whatsapp.svg";

import classes from "./Main.module.scss";

import { typeLink } from "@/types/link";

interface typeSocial extends typeLink {
	icon: Icon;
	color: string;
	textColor: string;
}

const socials: typeSocial[] = [
	{
		link: "https://www.instagram.com/africa_film_safaris?igsh=MWlpZGN3NmxwcTVtaQ==",
		label: "Instagram",
		target: "_blank",
		icon: instagram,
		color: "red",
		textColor: "red.9",
	},
	{
		link: "https://www.facebook.com/share/6Wgguqf9vHzZomjc/?mibextid=qi2Omg",
		label: "Facebook",
		target: "_blank",
		icon: facebook,
		color: "blue",
		textColor: "blue.9",
	},
	{
		link: "https://x.com/FilmSafaris?t=7_UGt53wKlo_xRj_sEBRqg&s=09",
		label: "Twitter",
		target: "_blank",
		icon: twitter,
		color: "black",
		textColor: "black.9",
	},
	{
		link: "https://wa.link/16pzlw",
		label: "WhatsApp",
		target: "_blank",
		icon: whatsapp,
		color: "green",
		textColor: "green.9",
	},
];

export default function Main() {
	const year = new Date().getFullYear();

	return (
		<Box className={classes.footer}>
			<Section containerized={"responsive"} shadowed padded={"xl"}>
				<Flex direction={"column"} align={"center"} gap={"md"}>
					<MantineImage
						src={brandLight}
						alt="Africa Film Safaris"
						w={{ base: 120, sm: 160 }}
						component={Image}
						priority
					/>
					<Title className="textResponsive" ta={"center"}>
						At Africa Film Safaris, we're passionate about simplifying filmmaking in Kenya. Our team of
						experienced filmmakers and local experts understands the challenges of on-location production
						firsthand. We've navigated the permits, scouted diverse locations, and built a network of
						reliable partners. Whether you're an independent filmmaker, a documentary team, or a mid-sized
						production, we offer comprehensive, stress-free support tailored to your unique needs. From
						securing permits and scouting locations to arranging logistics, equipment, and local talent,
						we'll handle every detail so you can focus on bringing your creative vision to life in the heart
						of East Africa.
					</Title>
				</Flex>
			</Section>

			<Section containerized={"md"} padded={"xl"}>
				<Stack gap={"lg"}>
					<Group grow mx={"auto"} w={{ base: "100%", md: "80%" }}>
						{socials.map(social => (
							<Button
								key={social.link}
								leftSection={
									<MantineImage
										src={social.icon}
										alt="next logo"
										h={{ base: 20, sm: 20 }}
										visibleFrom="xs"
										component={Image}
										priority
									/>
								}
								color={social.color}
								c={social.textColor}
								variant="light"
								component={Link}
								href={social.link}
								target={social.target ? social.target : undefined}
							>
								<Center hiddenFrom="xs">
									<MantineImage
										src={social.icon}
										alt="next logo"
										h={{ base: 20, sm: 24 }}
										component={Image}
										priority
									/>
								</Center>

								<Text component="span" inherit visibleFrom="xs">
									{social.label}
								</Text>
							</Button>
						))}
					</Group>

					<Text
						c={"light-dark(var(--mantine-color-dimmed),inherit)"}
						fz={{ base: "xs", xs: "sm" }}
						ta={"center"}
					>
						Copyright {year} © Africa Film Safaris.
					</Text>
				</Stack>
			</Section>
		</Box>
	);
}

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
}

const socials: typeSocial[] = [
	{
		link: "https://www.instagram.com/africa_film_safaris?igsh=MWlpZGN3NmxwcTVtaQ==",
		label: "Instagram",
		target: "_blank",
		icon: instagram,
		color: "red",
	},
	{
		link: "https://www.facebook.com/share/6Wgguqf9vHzZomjc/?mibextid=qi2Omg",
		label: "Facebook",
		target: "_blank",
		icon: facebook,
		color: "blue",
	},
	{
		link: "https://x.com/FilmSafaris?t=7_UGt53wKlo_xRj_sEBRqg&s=09",
		label: "Twitter",
		target: "_blank",
		icon: twitter,
		color: "black",
	},
	{
		link: "#https://wa.link", // generate new link with AFS phone number
		label: "WhatsApp",
		target: "_blank",
		icon: whatsapp,
		color: "green",
	},
];

export default function Main() {
	return (
		<Box className={classes.footer}>
			<Section containerized={"md"} shadowed padded={"xl"}>
				<Flex direction={"column"} align={"center"} gap={"md"}>
					<MantineImage
						src={brandLight}
						alt="next logo"
						w={{ base: 120, sm: 160 }}
						component={Image}
						priority
					/>
					<Title className="textResponsive" ta={"center"}>
						Nulla facilisi. Praesent non mauris ac ligula ullamcorper vehicula. Praesent mollis, nibh in
						venenatis iaculis, mauris eros iaculis quam, ut aliquam nisi nunc vitae quam. Fusce faucibus,
						felis at fermentum convallis, nunc neque aliquam turpis, ut varius ipsum nisi eu magna.
					</Title>
				</Flex>
			</Section>

			<Section containerized={"md"} padded={"xl"}>
				<Stack>
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
						Copyright 2024 © Africa Film Safaris.
					</Text>
				</Stack>
			</Section>
		</Box>
	);
}

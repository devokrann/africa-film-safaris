import React from "react";

import NextImage, { StaticImageData } from "next/image";
import Link from "next/link";

import { Anchor, AspectRatio, Button, Card, Image, Stack, Text, Title } from "@mantine/core";

import link from "@/handlers/parsers/string/link";

import classes from "./Help.module.scss";

interface typeHelp {
	title: string;
	image: StaticImageData;
	description: string;
}

export default function Help({ data }: { data: typeHelp }) {
	return (
		<Anchor underline="never" component={Link} href={"/services"}>
			<Card className={classes.card} p={"md"}>
				<Stack gap={"xl"}>
					<AspectRatio ratio={3 / 2} className={classes.imageContainer}>
						<Image
							src={data.image}
							alt={data.title}
							w={"100%"}
							loading="lazy"
							component={NextImage}
							className={classes.image}
						/>
					</AspectRatio>

					<Stack gap={"xs"}>
						<Title order={3} lineClamp={2} className={classes.title}>
							{data.title}
						</Title>
						<Text fw={"bold"}>{data.description}</Text>
					</Stack>
				</Stack>
			</Card>
		</Anchor>
	);
}

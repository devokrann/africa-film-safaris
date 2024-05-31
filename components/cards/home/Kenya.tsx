import React from "react";

import NextImage, { StaticImageData } from "next/image";

import { AspectRatio, Card, CardSection, Image, Stack, Text, Title } from "@mantine/core";

import classes from "./Kenya.module.scss";

interface typeKenya {
	image: StaticImageData;
	title: string;
	description: string;
}

export default function Kenya({ data }: { data: typeKenya }) {
	return (
		<Card className={classes.card}>
			<Stack>
				<CardSection>
					<AspectRatio ratio={1920 / 1080} className={classes.imgCont}>
						<Image
							src={data.image}
							alt={data.title}
							w={"100%"}
							loading="lazy"
							component={NextImage}
							className={classes.image}
						/>
					</AspectRatio>
				</CardSection>

				<Title order={3} fz={"lg"} className={classes.title}>
					{data.title}
				</Title>
				<Text>{data.description}</Text>
			</Stack>
		</Card>
	);
}

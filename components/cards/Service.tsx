import React from "react";

import NextImage from "next/image";
import Link from "next/link";

import { AspectRatio, Button, Card, CardSection, Divider, Group, Image, Stack, Text, Title } from "@mantine/core";

import ModalService from "../modal/Service";
import link from "@/handlers/parsers/string/link";

import classes from "./Service.module.scss";

import { typeService } from "@/types/service";

export default function Service({ data }: { data: typeService }) {
	return (
		<Card className={classes.card}>
			<Stack h={"100%"}>
				<CardSection>
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
				</CardSection>

				<Title order={3} fz={"xl"} className={classes.title} w={{ md: "90%" }}>
					{data.title}
				</Title>

				<Text component="span" inherit fw={"bold"} w={{ lg: "80%" }} className={classes.statement}>
					{data.statement}
				</Text>

				<Divider color="light-dark(var(--mantine-color-secDark-4),var(--mantine-color-secDark-4))" />

				<Stack justify="space-between" gap={"xl"} h={"100%"}>
					<Text lineClamp={2}>{data.description}</Text>
					<Group justify="end">
						<ModalService data={data}>
							<Button color="secDark.4" variant="light">
								Learn More
							</Button>
						</ModalService>
					</Group>
				</Stack>
			</Stack>
		</Card>
	);
}

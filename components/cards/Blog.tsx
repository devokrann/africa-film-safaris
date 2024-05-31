import React from "react";

import NextImage from "next/image";
import Link from "next/link";

import { AspectRatio, Button, Card, CardSection, Divider, Group, Image, Stack, Text, Title } from "@mantine/core";

import link from "@/handlers/parsers/string/link";

import classes from "./Blog.module.scss";

import { typeBlog } from "@/types/blog";

import MediaImage from "../media/Image";
import { IconCalendar } from "@tabler/icons-react";

export default function Blog({ data }: { data: typeBlog }) {
	return (
		<Card className={classes.card}>
			<Stack h={"100%"}>
				<CardSection>
					<AspectRatio ratio={3 / 2} className={classes.imageContainer}>
						{data.image ? (
							<Image
								src={data.image}
								alt={data.title}
								w={"100%"}
								loading="lazy"
								component={NextImage}
								className={classes.image}
							/>
						) : (
							<MediaImage alt={"placeholder"} width={900} height={600} />
						)}
					</AspectRatio>
				</CardSection>

				<Title order={3} className={classes.title}>
					{data.title}
				</Title>

				<Stack justify="space-between" gap={"xl"} h={"100%"}>
					<Text lineClamp={2}>{data.description}</Text>
					<Group justify="space-between">
						<Group gap={"xs"}>
							<IconCalendar size={16} stroke={1.5} />
							<Text fw={"bold"} fz={"sm"}>
								{data.date}
							</Text>
						</Group>

						<Button
							color="secDark.4"
							variant="light"
							component={Link}
							href={`/blog/${link.linkify(data.titleLink)}`}
						>
							Read More
						</Button>
					</Group>
				</Stack>
			</Stack>
		</Card>
	);
}

import React from "react";

import NextImage from "next/image";
import Link from "next/link";

import {
	Anchor,
	AspectRatio,
	Button,
	Card,
	CardSection,
	Divider,
	Group,
	Image,
	Stack,
	Text,
	Title,
} from "@mantine/core";

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
					<Anchor inherit component={Link} href={`/blog/${link.linkify(data.titleLink)}`}>
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
					</Anchor>
				</CardSection>

				<Title order={3} fz={"lg"}>
					<Anchor
						inherit
						component={Link}
						underline="never"
						href={`/blog/${link.linkify(data.titleLink)}`}
						className={classes.link}
					>
						{data.title}
					</Anchor>
				</Title>

				<Stack justify="space-between" gap={"xl"} h={"100%"}>
					<Text lineClamp={2}>{data.description}</Text>

					<Group gap={"xs"}>
						<IconCalendar size={16} stroke={1.5} />
						<Text fw={"bold"} fz={"sm"}>
							{data.date}
						</Text>
					</Group>
				</Stack>
			</Stack>
		</Card>
	);
}

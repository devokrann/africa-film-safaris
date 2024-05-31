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
	Grid,
	GridCol,
	Group,
	Image,
	Stack,
	Text,
	Title,
} from "@mantine/core";

import link from "@/handlers/parsers/string/link";

import classes from "./Blog.module.scss";

import { typeBlog } from "@/types/blog";

import MediaImage from "../../media/Image";
import { IconCalendar } from "@tabler/icons-react";

export default function Blog({ data }: { data: typeBlog }) {
	return (
		<Grid className={classes.card} gutter={"xs"}>
			<GridCol span={{ md: 4 }}>
				<Anchor component={Link} href={`/blog/${link.linkify(data.title)}`} fz={"xs"}>
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
							<MediaImage alt={"placeholder"} width={100} height={100} />
						)}
					</AspectRatio>
				</Anchor>
			</GridCol>

			<GridCol span={{ md: 8 }}>
				<Stack gap={"xs"}>
					<Stack gap={"xs"}>
						<Anchor component={Link} underline="never" href={`/blog/${link.linkify(data.title)}`} fz={"xs"}>
							<Title order={3} lineClamp={2} fz={"sm"} className={classes.title}>
								{data.title}
							</Title>
						</Anchor>

						<Text fw={"bold"} fz={10}>
							{data.date}
						</Text>
					</Stack>
				</Stack>
			</GridCol>
		</Grid>
	);
}

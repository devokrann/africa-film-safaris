import React from "react";

import { Card, Grid, GridCol, Group, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import { Icon } from "@tabler/icons-react";

import classes from "./Why.module.scss";

interface typeWhy {
	title: string;
	icon: Icon;
	description: string;
}

export default function Why({ data }: { data: typeWhy }) {
	return (
		<Card className={classes.card}>
			<Stack h={"100%"}>
				<Grid>
					<GridCol span={9}>
						<Title order={3} fz={"xl"} className={classes.title}>
							{data.title}
						</Title>
					</GridCol>
					<GridCol span={3}>
						<Group justify="end">
							<ThemeIcon size={48} className={classes.icon}>
								<data.icon size={36} stroke={1.5} />
							</ThemeIcon>
						</Group>
					</GridCol>
				</Grid>

				<Text className={classes.desc}>{data.description}</Text>
			</Stack>
		</Card>
	);
}

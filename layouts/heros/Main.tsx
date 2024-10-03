"use client";

import React from "react";

import { usePathname } from "next/navigation";

import { Container, Stack, Title } from "@mantine/core";

import BreadcrumbMain from "@/components/breadcrumbs/Main";
import CarouselHome from "@/components/carousel/Home";

import crumbify from "@/handlers/parsers/string/crumbify";

import classes from "./Main.module.scss";
import Section from "../Section";

export default function Route({ title }: { title?: string }) {
	const pathname = usePathname();
	const segments = crumbify(pathname);

	return pathname == "/" ? (
		<CarouselHome />
	) : (
		<Section className={classes.hero} padded shadowed>
			<Container size="responsive">
				<Stack>
					<Title order={1} fz={24}>
						{title ? title : segments[segments.length - 1].label}
					</Title>
					<BreadcrumbMain data={segments} />
				</Stack>
			</Container>
		</Section>
	);
}

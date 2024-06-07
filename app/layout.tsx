import React from "react";

import type { Metadata } from "next";
import { Noto_Serif_Display } from "next/font/google";

import "@mantine/core/styles/global.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/nprogress/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/tiptap/styles.css";

import "@/global.scss";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";

import { SpeedInsights } from "@vercel/speed-insights/next";

import africafilmsafaris from "@/theme";

const noto = Noto_Serif_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: { default: "Africa Film Safaris", template: "%s - Africa Film Safaris" },
	description:
		"At Africa Film Safaris, we are passionate about simplifying filmmaking in Kenya. Our team of experienced filmmakers and local experts understands the challenges of on-location production firsthand. We have navigated the permits, scouted diverse locations, and built a network of reliable partners. Whether you are an independent filmmaker, a documentary team, or a mid-sized production, we offer comprehensive, stress-free support tailored to your unique needs. From securing permits and scouting locations to arranging logistics, equipment, and local talent, we will handle every detail so you can focus on bringing your creative vision to life in the heart of East Africa.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-mantine-color-scheme="light">
			<head>
				<ColorSchemeScript defaultColorScheme="light" />
			</head>
			<body className={noto.className}>
				<SpeedInsights />

				<MantineProvider
					theme={africafilmsafaris}
					defaultColorScheme="light"
					classNamesPrefix="africa-film-safaris"
					withStaticClasses={false}
					withGlobalClasses={true}
				>
					<Notifications limit={3} />

					<ModalsProvider>{children}</ModalsProvider>
				</MantineProvider>
			</body>
		</html>
	);
}

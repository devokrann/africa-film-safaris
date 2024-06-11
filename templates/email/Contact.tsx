import * as React from "react";

import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text } from "@react-email/components";

import constants from "./constants";

import { typeContact } from "@/types/form";

export const Contact = ({
	data = {
		fname: "Jane",
		lname: "Smith",
		email: "jane@example.com",
		phone: null,
		subject: "Test Subject",
		message: "This is some text.",
	},
}: {
	data: typeContact;
}) => (
	<Html>
		<Head />

		<Preview>{data.message}</Preview>

		<Body>
			<Container style={content}>
				{/* <Section style={header}>
					<Container style={container}>
						<Heading style={{ ...h1, textAlign: "center" }}>{constants.brand.name}</Heading>
						<Img
							src={
								"https://africa-film-safaris.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-light.e97db029.svg&w=1920&q=75"
							}
							width={120}
							height={'auto'}
							alt={constants.brand.name}
						/>
					</Container>
				</Section> */}

				<Section style={main}>
					<Container style={container}>
						<Section style={section}>
							{/* <Heading style={h2}>{constants.brand.name}</Heading> */}
							<Text style={text}>
								Africa Film Safaris, <br />
								{data.message} <br />
								<br />
								Regards, <br />
								{data.fname} {data.lname}
							</Text>
						</Section>

						{/* <Section style={section}>
							<Heading style={h2}>Didn't request this?</Heading>
							<Text style={text}>
								If you did not make this change, please reach out to an administrator for support.
							</Text>
						</Section> */}
					</Container>
				</Section>

				{/* <Section style={footer}>
					<Container style={container}>
						<Text style={{ ...text, textAlign: "center" }}>
							© {constants.year}, {constants.brand.name}. All rights reserved. Read our{" "}
							<Link href="#" style={link}>
								Privacy Notice
							</Link>
							.
						</Text>
						<Text style={{ ...text, textAlign: "center" }}>
							This message was produced and distributed by {constants.brand.name}, or its affiliates.
						</Text>
						<Text style={{ ...text, textAlign: "center" }}>
							{constants.addresses.find(a => a.place == "Main Office")?.label}.
						</Text>
					</Container>
				</Section> */}
			</Container>
		</Body>
	</Html>
);

export default Contact;

const content = {
	maxWidth: "640px",
	margin: "0 auto",
	overflow: "hidden",
};

const headerFooter = {
	backgroundColor: "#273518",
	color: "#ffffff",
	padding: "20px 0",
};

const header = {
	...headerFooter,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const footer = {
	...headerFooter,
};

const main = {
	// backgroundColor: "gray",
};

const section = {
	margin: "20px 0px",
};

const container = {
	minWidth: "100%",
	padding: "20px 0px",
};

const h1 = {
	fontSize: "24px",
	fontWeight: "bolder",
	color: "#be6d25",
};

const h2 = {
	fontSize: "20px",
	fontWeight: "bold",
};

const text = {
	margin: 0,
	fontSize: "12px",
};

const link = {
	margin: 0,
	fontWeight: "bold",
	color: "red",
};

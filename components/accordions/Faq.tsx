import React from "react";

import { Accordion, AccordionControl, AccordionItem, AccordionPanel } from "@mantine/core";

import { typeFaq } from "@/types/faq";

import classes from "./Faq.module.scss";

export default function Faq({ data }: { data: typeFaq[] }) {
	const items = data.map(item => (
		<AccordionItem key={item.question} value={item.question}>
			<AccordionControl icon={undefined}>{item.question}</AccordionControl>
			<AccordionPanel ml={{ md: "md" }}>{item.answer}</AccordionPanel>
		</AccordionItem>
	));

	return (
		<Accordion classNames={{ control: classes.control,label:classes.label }} defaultValue={data[0].question}>
			{items}
		</Accordion>
	);
}

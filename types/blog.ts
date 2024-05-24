import { StaticImageData } from "next/image";

export interface typeBlog {
	title: string;
	titleLink: string;
	image?: StaticImageData;
	date: string;
	description: string;
}

import capitalize from "./capitalize";

const link = {
	linkify: (string: string) => string.toLowerCase().replaceAll(" ", "-").replaceAll("'", "%27"),
	unlinkify: (string: string) => capitalize.words(string.toLowerCase().replaceAll("-", " ")).replaceAll("%27", "'"),
};

export default link;

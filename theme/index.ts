"use client";

import {
	Checkbox,
	Container,
	Notification,
	PasswordInput,
	Select,
	TextInput,
	Textarea,
	Title,
	createTheme,
	rem,
} from "@mantine/core";
import password from "./components/inputs/password";
import select from "./components/inputs/select";
import text from "./components/inputs/text";
import textarea from "./components/inputs/textarea";
import checkbox from "./components/inputs/checkbox";
import container from "./components/container";
import notification from "./components/notification";

const africafilmsafaris = createTheme({
	/** Controls focus ring styles. Supports the following options:
	 *  - `auto` – focus ring is displayed only when the user navigates with keyboard (default value)
	 *  - `always` – focus ring is displayed when the user navigates with keyboard and mouse
	 *  - `never` – focus ring is always hidden (not recommended)
	 */
	focusRing: "auto",

	/** Class added to the elements that have focus styles, for example, `Button` or `ActionIcon`.
	 *  Overrides `theme.focusRing` property.
	 */
	focusClassName: "focus",

	/** Class added to the elements that have active styles, for example, `Button` and `ActionIcon` */
	activeClassName: "active",

	// color
	colors: {
		priLight: [
			"#f2f8e8",
			"#dae7ca",
			"#c2d8a9",
			"#a9c786",
			"#91b765",
			"#789e4c",
			"#5e7c3a",
			"#425829",
			"#273518", // src 8
			"#0b1303",
		],
		priDark: [
			"#f3f7e5",
			"#dee5c9",
			"#cad3aa",
			"#b5c289",
			"#a0b169",
			"#86974f",
			"#68763d", // src 6
			"#4b542b",
			"#2c3217",
			"#0d1200",
		],
		secLight: [
			"#fff3e6",
			"#f9e6d4",
			"#efcbac",
			"#e5af7f",
			"#dd9759",
			"#d88841",
			"#d67f33",
			"#be6d25", //src 7
			"#a9601e",
			"#945114",
		],
		secDark: [
			"#fff4e3",
			"#fae7d3",
			"#efcfaa",
			"#e5b57e",
			"#dc9e59", // src 4
			"#d79040",
			"#d58932",
			"#bc7625",
			"#a8671d",
			"#935811",
		],
		bgLight: [
			"#fefceb", //src 0
			"#fdf8d6",
			"#fbefa7",
			"#f9e774",
			"#f8e04c",
			"#f7db36",
			"#f7d92c",
			"#dcbf22",
			"#c3aa18",
			"#a89205",
		],
	},

	/** Key of `theme.colors`, hex/rgb/hsl values are not supported.
	 *  Determines which color will be used in all components by default.
	 *  Default value – `blue`.
	 * */
	primaryColor: "secDark",

	/** Index of theme.colors[color].
	 *  Primary shade is used in all components to determine which color from theme.colors[color] should be used.
	 *  Can be either a number (0–9) or an object to specify different color shades for light and dark color schemes.
	 *  Default value `{ light: 6, dark: 8 }`
	 *
	 *  For example,
	 *  { primaryShade: 6 } // shade 6 is used both for dark and light color schemes
	 *  { primaryShade: { light: 6, dark: 7 } } // different shades for dark and light color schemes
	 * */
	primaryShade: { light: 6, dark: 6 },

	defaultGradient: {
		from: "pri",
		to: "sec",
		deg: 45,
	},

	/** Key of `theme.radius` or any valid CSS value. Default `border-radius` used by most components */
	defaultRadius: "md",

	/** Determines whether text color must be changed based on the given `color` prop in filled variant
	 *  For example, if you pass `color="blue.1"` to Button component, text color will be changed to `var(--mantine-color-black)`
	 *  Default value – `false`
	 * */
	autoContrast: true,

	/** Determines which luminance value is used to determine if text color should be light or dark.
	 *  Used only if `theme.autoContrast` is set to `true`.
	 *  Default value is `0.3`
	 * */
	luminanceThreshold: 0.3,

	//font
	// fontFamily: "Arial, sans-serif",

	fontFamilyMonospace: "Courier New, monospace",

	fontSmoothing: true,

	fontSizes: {
		xs: rem(12),
		sm: rem(14),
		md: rem(16),
		lg: rem(18),
		xl: rem(20),
		xxl: "2rem",
	},

	lineHeights: {
		xs: "1.4",
		sm: "1.45",
		md: "1.55",
		lg: "1.6",
		xl: "1.65",
	},

	headings: {
		// properties for all headings
		fontWeight: "400",
		fontFamily: "Roboto",

		// properties for individual headings, all of them are optional
		// sizes: {
		// 	h1: {
		// 		fontSize: "2rem",
		// 		lineHeight: "1.5",
		// 		fontWeight: "500",
		// 	},
		// 	h2: {
		// 		fontSize: "1.5rem",
		// 		lineHeight: "1.6",
		// 		fontWeight: "500",
		// 	},
		// },
	},

	spacing: {
		xs: rem(10),
		sm: rem(12),
		md: rem(16),
		lg: rem(20),
		xl: rem(32),
	},

	/** Determines which cursor type will be used for interactive elements
	 * - `default` – cursor that is used by native HTML elements, for example, `input[type="checkbox"]` has `cursor: default` styles
	 * - `pointer` – sets `cursor: pointer` on interactive elements that do not have these styles by default
	 */
	cursorType: "pointer",

	components: {
		PasswordInput: PasswordInput.extend(password),
		Select: Select.extend(select),
		TextInput: TextInput.extend(text),
		Textarea: Textarea.extend(textarea),
		Checkbox: Checkbox.extend(checkbox),

		Container: Container.extend(container),
		Notification: Notification.extend(notification),
		Title: Title.extend({
			defaultProps: {
				ff: "inherit",
				fw: "bold",
			},
		}),
	},
});

export default africafilmsafaris;

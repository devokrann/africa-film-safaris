import TemplateEmailContact from "@/templates/email/Contact";

import resend from "@/services/resend";

import { typeContact } from "@/types/form";

const email = "info@africafilmsafaris.com";

export const send = async (formData: typeContact) => {
	const { data, error } = await resend.general.emails.send({
		// include & verify domain in dashboard before replacing it with "onboarding@resend.dev"
		from: `${formData.fname} ${formData.lname} <${email}>`,
		to: email,
		subject: formData.subject,
		react: TemplateEmailContact({ data: formData }),
		reply_to: formData.email,
		// cc:[]
	});

	if (!error) {
		return data;
	} else {
		console.error("x-> Error sending email:", (error as Error).message);
		throw error;
	}
};

export const contacts = {
	async create(formData: typeContact) {
		const { data, error } = await resend.onboarding.contacts.create({
			// include & verify domain in dashboard before replacing it with "onboarding@resend.dev"
			email: formData.email,
			firstName: formData.fname,
			lastName: formData.lname,
			unsubscribed: false,
			audienceId: process.env.NEXT_RESEND_AUDIENCE_GENERAL_ID!,
		});

		if (!error) {
			return data;
		} else {
			console.error("x-> Error adding contact:", (error as Error).message);
			throw error;
		}
	},
};

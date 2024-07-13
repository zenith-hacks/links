import { FormSchema } from '$lib/schemas';
import { superValidate, message, type Infer } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { expirationOptions } from '$lib/constants.js';
import { generateRandomString, alphabet } from 'oslo/crypto';

interface Message {
	url: string;
}

export const load = async () => {
	const form = await superValidate<Infer<typeof FormSchema>, Message>(zod(FormSchema));
	return { form };
};

export const actions = {
	default: async ({ request, platform, url }) => {
		const form = await superValidate(request, zod(FormSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const slug = generateRandomString(6, alphabet('a-z', 'A-Z', '0-9'));

		platform?.env.KV.put(slug, form.data.url, {
			// @ts-expect-error - Keys are guaranteed to be present
			expirationTtl: expirationOptions[form.data.expiration].value
		});

		return message(form, {
			url: url.origin + '/' + slug
		} as Message);
	}
};

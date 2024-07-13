import { FormSchema } from '$lib/schemas';
import { superValidate, message, type Infer } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';

interface Message {
	url: string;
}

export const load = async () => {
	const form = await superValidate<Infer<typeof FormSchema>, Message>(zod(FormSchema));
	return { form };
};

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(FormSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		// TODO: Do something with the validated form.data

		return message(form, {
			url: 'https://s.podter.me/something'
		} as Message);
	}
};

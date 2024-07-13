import { z } from 'zod';
import { expirationOptions } from './constants';

export const FormSchema = z.object({
	url: z.string().url(),
	// @ts-expect-error - TS doesn't know about Object keys
	expiration: z.enum(Object.keys(expirationOptions)).default('30m')
});

<script lang="ts">
	import type { PageData } from './$types';
	import ChevronRight from '$lib/components/icons/chevron-right.svelte';
	import { Copy, QrCode } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import { expirationOptions } from '$lib/constants';
	import { FormSchema } from '$lib/schemas';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	export let data: PageData;

	const { form, message } = superForm(data.form, {
		validators: zodClient(FormSchema)
	});

	$: selectedExpiration = $form.expiration
		? {
				// @ts-expect-error - Keys are guaranteed to be present
				label: expirationOptions[$form.expiration].label,
				value: $form.expiration
			}
		: undefined;
</script>

<main class="flex w-full flex-col items-center space-y-6 px-6 pt-20 md:pt-28 lg:pt-36">
	<h1 class="text-center text-5xl font-bold">The simplest URL shortener</h1>
	<p class="max-w-lg text-center text-muted-foreground">
		Shorten your long URLs into a shorter one with ease. Just paste your long URL below to shorten
		it.
	</p>

	<form class="flex w-full flex-col items-center justify-center sm:flex-row" method="POST">
		<Input
			class="max-w-lg"
			placeholder="Enter your URL"
			name="url"
			type="url"
			required
			bind:value={$form.url}
		/>
		<div class="mt-2 flex h-full space-x-2 sm:ml-2 sm:mt-0">
			<Select.Root
				selected={selectedExpiration}
				onSelectedChange={(v) => {
					v && ($form.expiration = v.value);
				}}
				required
			>
				<Select.Trigger class="w-32">
					<Select.Value placeholder="Expiration" />
				</Select.Trigger>
				<Select.Content>
					<Select.Label>Expiration</Select.Label>
					{#each Object.entries(expirationOptions) as [value, { label }]}
						<Select.Item {value}>{label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
			<Button class="group w-32 sm:w-auto" type="submit">
				<span class="mr-1">Shorten</span>
				<ChevronRight width={16} height={16} />
			</Button>
		</div>
	</form>

	{#if $message}
		<div class="flex justify-center space-x-2">
			<div
				class="flex h-9 items-center justify-center rounded-full border border-input bg-accent px-3 py-1 shadow-sm"
			>
				<span class="text-sm text-accent-foreground">{$message.url}</span>
			</div>
			<Button size="icon" variant="secondary">
				<QrCode size={18} />
				<span class="sr-only">Show QR code</span>
			</Button>
			<Button size="icon" variant="secondary">
				<Copy size={18} />
				<span class="sr-only">Copy</span>
			</Button>
		</div>
	{/if}
</main>

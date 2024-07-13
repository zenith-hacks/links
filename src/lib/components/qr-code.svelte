<script lang="ts">
	import { QrCode } from 'lucide-svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';

	export let url: string;
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ size: 'icon', variant: 'secondary' })}>
		<QrCode size={18} />
		<span class="sr-only">Show QR code</span>
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-md">
		<Dialog.Header>
			<Dialog.Title>QR code</Dialog.Title>
			<Dialog.Description>
				This is the QR code for the shortened URL. You can scan it with your phone to visit the URL.
			</Dialog.Description>
		</Dialog.Header>
	</Dialog.Content>
</Dialog.Root>

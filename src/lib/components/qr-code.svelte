<script lang="ts">
	import QRCode from 'qrcode';
	import { QrCodeIcon } from 'lucide-svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';

	export let url: string;

	let qrCodeData = '';
	$: QRCode.toDataURL(url, { margin: 2, width: 512 }).then((data) => (qrCodeData = data));
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ size: 'icon', variant: 'secondary' })}>
		<QrCodeIcon size={18} />
		<span class="sr-only">Show QR code</span>
	</Dialog.Trigger>
	<Dialog.Content class="sm:max-w-md">
		<Dialog.Header>
			<Dialog.Title>QR code</Dialog.Title>
			<Dialog.Description>
				This is the QR code for the shortened URL. You can scan it with your phone to visit the URL.
			</Dialog.Description>
		</Dialog.Header>
		<div class="my-2 flex w-full justify-center">
			<img src={qrCodeData} alt="QR code" class="aspect-square w-80" />
		</div>
		<Dialog.Footer>
			<Button href={qrCodeData} download>Download</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>

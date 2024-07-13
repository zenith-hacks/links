<script lang="ts">
	import { Copy } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index';
	import QrCode from './qr-code.svelte';
	import UrlDisplay from './url-display.svelte';

	export let url: string;

	function copy() {
		navigator.clipboard.writeText(url);
	}
</script>

<div class="flex justify-center space-x-2">
	<UrlDisplay {url} />
	<QrCode {url} />
	<Tooltip.Root>
		<Tooltip.Trigger asChild let:builder>
			<Button builders={[builder]} size="icon" variant="secondary" on:click={copy}>
				<Copy size={18} />
				<span class="sr-only">Copy URL</span>
			</Button>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>Copy URL</p>
		</Tooltip.Content>
	</Tooltip.Root>
</div>

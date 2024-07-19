<script lang="ts">
	import Heart from 'lucide-svelte/icons/heart';
</script>

<footer class="fixed bottom-0 z-50 flex w-full border-t bg-background lg:px-4">
	<div
		class="container flex w-full flex-col items-center justify-between space-y-1 py-[14px] sm:flex-row"
	>
		<a
			class="flex items-center space-x-1.5 text-sm text-muted-foreground transition-opacity hover:opacity-80"
			href="https://podter.me"
		>
			<Heart size={12} />
			<span class="font-medium">Made by Podter</span>
		</a>
		<p class="flex items-center text-sm font-medium text-muted-foreground">
			Powered by SvelteKit and Cloudflare KV
		</p>
	</div>
</footer>

<script lang="ts">
	import Link from 'lucide-svelte/icons/link';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import Github from '$lib/components/icons/github.svelte';
</script>

<header class="sticky top-0 z-50 flex h-14 w-full border-b bg-background lg:px-4">
	<div class="container flex w-full items-center justify-between">
		<a class="flex items-center space-x-1.5 transition-opacity hover:opacity-80" href="/">
			<Link size={16} />
			<span class="font-medium">Zenith Hacks Links</span>
		</a>
		<div class="flex items-center space-x-1">
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<Button
						builders={[builder]}
						size="icon"
						variant="ghost"
						href="https://github.com/Podter/s.podter.me"
					>
						<Github width={18} height={18} />
						<span class="sr-only">GitHub</span>
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="bottom">
					<p>GitHub</p>
				</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<Button builders={[builder]} size="icon" variant="ghost" on:click={toggleMode}>
						<Sun size={18} class="dark:hidden" />
						<Moon size={18} class="hidden dark:block" />
						<span class="sr-only">Toggle theme</span>
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="bottom">
					<p>Toggle theme</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</div>
	</div>
</header>

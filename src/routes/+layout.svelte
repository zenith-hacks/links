<script>
	import '@fontsource-variable/inter';
	import '../app.css';

	import { Link, Sun, Moon, Heart } from 'lucide-svelte';
	import { ModeWatcher, toggleMode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';
	import Github from '$lib/components/icons/github.svelte';
</script>

<header class="sticky top-0 z-50 flex h-14 w-full border-b bg-background lg:px-4">
	<div class="container flex w-full items-center justify-between">
		<a class="flex items-center space-x-1.5 transition-opacity hover:opacity-80" href="/">
			<Link size={16} />
			<span class="font-medium">s.podter.me</span>
		</a>
		<div class="flex items-center space-x-1">
			<Button size="icon" variant="ghost" href="https://github.com/Podter/s.podter.me">
				<Github width={18} height={18} />
				<span class="sr-only">GitHub</span>
			</Button>
			<Button size="icon" variant="ghost" on:click={toggleMode}>
				<Sun size={18} class="dark:hidden" />
				<Moon size={18} class="hidden dark:block" />
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>
	</div>
</header>

<slot></slot>

<div
	class="bg-dot-[#E5E5E5] dark:bg-dot-[#262626] pointer-events-none fixed bottom-0 left-0 right-0 top-0 -z-10 flex h-screen w-full"
	aria-hidden="true"
></div>

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

<ModeWatcher />

<script>
	import '@fontsource-variable/inter';
	import '../app.css';

	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/ui/sonner';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Header />

<slot></slot>

<div
	class="pointer-events-none fixed bottom-0 left-0 right-0 top-0 -z-10 flex h-screen w-full bg-dot-[#E5E5E5] dark:bg-dot-[#262626]"
	aria-hidden="true"
></div>

<Footer />

<Toaster />
<ModeWatcher />

<svelte:head>
	<title>s.podter.me</title>
	<meta name="description" content="Zenith Hacks URL shortener" />
</svelte:head>

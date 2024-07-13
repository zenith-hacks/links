<script>
	import ChevronRight from '$lib/components/icons/chevron-right.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
</script>

<main class="flex w-full flex-col items-center space-y-6 px-6 pt-20 md:pt-28 lg:pt-36">
	<h1 class="text-center text-5xl font-bold">The simplest URL shortener</h1>
	<p class="max-w-lg text-center text-muted-foreground">
		Shorten your long URLs into a shorter one with ease. Just paste your long URL below to shorten
		it.
	</p>
	<form class="flex w-full justify-center space-x-2">
		<Input class="max-w-lg" placeholder="Enter your URL" type="url" />
		<Button class="group">
			<span class="mr-1">Shorten</span>
			<ChevronRight width={16} height={16} />
		</Button>
	</form>
</main>

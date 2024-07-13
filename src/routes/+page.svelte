<script>
	import ChevronRight from '$lib/components/icons/chevron-right.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
</script>

<main class="flex w-full flex-col items-center space-y-6 px-6 pt-20 md:pt-28 lg:pt-36">
	<h1 class="text-center text-5xl font-bold">The simplest URL shortener</h1>
	<p class="max-w-lg text-center text-muted-foreground">
		Shorten your long URLs into a shorter one with ease. Just paste your long URL below to shorten
		it.
	</p>
	<form
		class="flex w-full flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0"
	>
		<Input class="max-w-lg" placeholder="Enter your URL" type="url" />
		<div class="flex h-full space-x-2">
			<Select.Root>
				<Select.Trigger class="w-32">
					<Select.Value placeholder="Expiration" />
				</Select.Trigger>
				<Select.Content>
					<Select.Label>Expiration</Select.Label>
					<Select.Item value="5m">5 minutes</Select.Item>
					<Select.Item value="30m">30 minutes</Select.Item>
					<Select.Item value="1hr">1 hour</Select.Item>
					<Select.Item value="24hr">24 hours</Select.Item>
					<Select.Item value="1w">1 week</Select.Item>
					<Select.Item value="1m">1 month</Select.Item>
				</Select.Content>
			</Select.Root>
			<Button class="group w-32 sm:w-auto">
				<span class="mr-1">Shorten</span>
				<ChevronRight width={16} height={16} />
			</Button>
		</div>
	</form>
</main>

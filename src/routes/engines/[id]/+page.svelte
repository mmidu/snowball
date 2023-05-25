<script lang="ts">
	import { page } from '$app/stores';
	import Button from '@smui/button';
	import SubHeader from 'src/lib/components/ui/SubHeader.svelte';
	import type { Engine } from 'src/types/Engine';
	import { onMount } from 'svelte';

	export let engine: Engine = {
		id: '',
		name: ''
	};

	const getEngine = async (id: string) => {
		const response = await fetch(`/engines/${id}`);
		engine = await response.json();
	};

	onMount(() => getEngine($page.params.id));
</script>

<h1>{engine.name}</h1>

<SubHeader title="Edit Engine">
	<Button variant="raised" href="/">
		<i class="material-icons" aria-hidden="true">arrow_back</i>
	</Button>
</SubHeader>

<a href="/">Done!</a>

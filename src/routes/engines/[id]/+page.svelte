<script lang="ts">
	import { page } from '$app/stores';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import Button from '@smui/button';
	import { onMount } from 'svelte';
	import SubHeader from 'src/components/ui/SubHeader.svelte';
	import type { Engine } from 'src/lib/domain/Engine';

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

<SubHeader title="New Engine">
	<Button variant="raised" href="/">
		<i class="material-icons" aria-hidden="true">arrow_back</i>
	</Button>
</SubHeader>

<Button on:click={() => alert('done')}>Done!</Button>

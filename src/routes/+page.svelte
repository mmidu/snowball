<script lang="ts">
	import Button from '@smui/button';
	import Engines from 'src/components/Engines.svelte';
	import SubHeader from 'src/components/ui/SubHeader.svelte';
	import type { Engine } from 'src/lib/domain/Engine';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	//let engines: Record<string, Engine> = {};

	let engines = writable<Record<string, Engine>>({});

	const getEngines = async () => {
		const response = await fetch('/engines', {
			method: 'GET',
			headers: {
				'content-type': 'applycation/json'
			}
		});
		engines.set(await response.json());
	};

	const removeEngine = async (id: string) => {
		await fetch(`/engines/${id}`, { method: 'DELETE' });
		engines.update((_engines) => {
			delete _engines[id];
			return _engines;
		});
	};

	onMount(() => getEngines());
</script>

<SubHeader title="My Engines">
	<Button variant="raised" href="/engines">
		<i class="material-icons" aria-hidden="true">add</i>
	</Button>
</SubHeader>
<section>
	<Engines engines={$engines} {removeEngine} />
</section>

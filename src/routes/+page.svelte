<script lang="ts">
	import Button from '@smui/button';
	import Engines from 'src/lib/components/Engines.svelte';
	import SubHeader from 'src/lib/components/ui/SubHeader.svelte';
	import type { Engine } from 'src/types/Engine';
	import { onMount } from 'svelte';

	let engines: Engine[] = [];

	const getEngines = async () => {
		const response = await fetch('/engines', {
			method: 'GET',
			headers: {
				'content-type': 'applycation/json'
			}
		});
		engines = await response.json();
	};

	onMount(() => getEngines());
</script>

<SubHeader title="My Engines">
	<Button variant="raised" href="/engines">
		<i class="material-icons" aria-hidden="true">add</i>
	</Button>
</SubHeader>
<section>
	<Engines {engines} />
</section>

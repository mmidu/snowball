<script lang="ts">
	import Headline5 from './typography/Headline5.svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import EngineCard from './EngineCard.svelte';
	import Button from '@smui/button/src/Button.svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { Engine, EnginesStore } from 'src/types/Engine';

	const title: string = 'Snowball engines';
	const engines: Writable<EnginesStore> = writable({
		'0': {
			id: '0',
			name: 'engine-0'
		} as Engine
	});

	const addEngine = () => {
		const engineID = crypto.randomUUID();
		const engineName = `engine-${engineID}`;
		engines.update((engines) => ({
			...engines,
			[engineID]: {
				id: engineID,
				name: engineName
			} as Engine
		}));
	};

	const removeEngine = (event: { detail: { engineID: string } }) => {
		engines.update((engines) => {
			delete engines[event.detail.engineID];
			return engines;
		});
	};
</script>

<section class="snowball-services">
	<div class="container">
		<Headline5>{title}</Headline5>
		<Button variant="raised" on:click={addEngine}>+</Button>
	</div>
	<LayoutGrid>
		{#each Object.values($engines) as engine}
			<Cell span={3}>
				<EngineCard {engine} on:removeEngine={removeEngine} />
			</Cell>
		{/each}
	</LayoutGrid>
</section>

<style lang="scss">
	.snowball-services {
		padding: 1em 2em;
	}
	.container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: left;
		gap: 3em;
	}
</style>

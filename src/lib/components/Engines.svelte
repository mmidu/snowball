<script lang="ts">
	import { Cell } from '@smui/layout-grid';
	import EngineCard from './EngineCard.svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { Engine, EnginesStore } from 'src/types/Engine';
	import InnerGrid from '@smui/layout-grid/src/InnerGrid.svelte';

	export let engines: Engine[];
</script>

<InnerGrid>
	{#each engines as engine}
		<Cell span={3}>
			<EngineCard {engine} />
		</Cell>
	{/each}
</InnerGrid>

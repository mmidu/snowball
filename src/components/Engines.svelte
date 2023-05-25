<script lang="ts">
	import { Cell } from '@smui/layout-grid';
	import EngineCard from './EngineCard.svelte';
	import type { Engine } from 'src/lib/domain/Engine';
	import InnerGrid from '@smui/layout-grid/src/InnerGrid.svelte';

	export let engines: Record<string, Engine>;
	export let removeEngine: (id: string) => void;
</script>

<InnerGrid>
	{#each Object.entries(engines) as [_, engine]}
		<Cell span={3}>
			<EngineCard {engine} {removeEngine} />
		</Cell>
	{/each}
</InnerGrid>

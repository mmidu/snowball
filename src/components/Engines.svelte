<script lang="ts">
	import type { Engine } from 'src/types/Engine';
	import Headline5 from './typography/Headline5.svelte';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
	import EngineCard from './EngineCard.svelte';
	import Button from '@smui/button/src/Button.svelte';

	const title: string = 'Snowball engines';

	export let enginesCount = 0;
</script>

<section class="snowball-services">
	<div class="container">
		<Headline5>{title}</Headline5>
		<Button variant="raised" on:click={() => enginesCount++}>+</Button>
	</div>
	<LayoutGrid>
		{#each { length: enginesCount } as _, i}
			<Cell>
				<EngineCard
					engine={{
						name: `engine-${i}`
					}}
				/>
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

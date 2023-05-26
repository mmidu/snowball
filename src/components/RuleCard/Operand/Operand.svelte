<script lang="ts">
	import Select, { Option } from '@smui/select';
	import type { OperandKind } from 'src/lib/domain/Rule';
	import { writable } from 'svelte/store';
	import OperandInput from './OperandInput.svelte';
	import Card from '@smui/card';

	let operandKind = writable<OperandKind>();

	const options: Record<OperandKind, string> = {
		variable: 'Variable',
		constant: 'Constant',
		list: 'List'
	};
</script>

<div class="operand-card">
	<Card variant="outlined" padded>
		<Select class="operand-kind-selector" bind:value={$operandKind} label="Operand Kind">
			{#each Object.entries(options) as [key, displayName]}
				<Option value={key} class="operand-kind-option">{displayName}</Option>
			{/each}
		</Select>
		{#if $operandKind}
			<OperandInput operandKind={$operandKind} />
		{/if}
	</Card>
</div>

<style lang="scss">
	.operand-card {
		margin: 1.5em;
	}
</style>

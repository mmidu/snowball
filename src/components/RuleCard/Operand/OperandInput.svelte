<script lang="ts">
	import type { OperandKind } from 'src/lib/domain/Rule';
	import VariableInput from './VariableInput.svelte';
	import ConstantInput from './ConstantInput.svelte';
	import ListInput from './ListInput.svelte';

	export let operandKind: OperandKind = 'variable';
</script>

<div>
	{#if operandKind === 'variable'}
		<VariableInput />
	{:else if operandKind === 'constant'}
		<ConstantInput />
	{:else}
		<ListInput />
	{/if}
</div>

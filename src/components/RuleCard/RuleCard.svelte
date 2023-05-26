<script lang="ts">
	import Card from '@smui/card/src/Card.svelte';
	import type { Rule } from 'src/lib/domain/Rule';
	import Textfield from '@smui/textfield';
	import Button from '@smui/button';
	//import Select, { Option } from '@smui/select';
	import HelperText from '@smui/textfield/helper-text';
	import { writable } from 'svelte/store';
	import Operand from './Operand/Operand.svelte';

	/*export let rule: Rule = { firstOperand: '', secondOperand: '', operator: 'AND' };
	export let index: number = 0;
	export let updateEngine: (index: number, rule: Rule) => void = () => {};

	let _rule = writable<Rule>(rule);

	_rule.subscribe((rule) => updateEngine(index, rule));

	const operators: string[] = ['AND', 'OR'];*/
	const operands = writable<string[]>([]);
</script>

<div class="rule" data-testid="rule">
	<Card padded>
		<div>
			{#each $operands as operand}
				<Operand />
			{/each}
		</div>
		<Button
			disabled={$operands.length >= 2}
			on:click={() => operands.update((_operands) => [..._operands, ''])}>Add Operand</Button
		>
	</Card>
	<!-- <Card padded>
		<Textfield bind:value={$_rule.firstOperand} label="First Operand">
			<HelperText slot="helper">First Operand name</HelperText>
		</Textfield>
		<select bind:value={$_rule.operator}>
			{#each operators as operatorOption}
				<option value={operatorOption}>{operatorOption}</option>
			{/each}
		</select>
		<Textfield bind:value={$_rule.secondOperand} label="Second Operand">
			<HelperText slot="helper">Second Operand name</HelperText>
		</Textfield>
	</Card> -->
</div>

<style lang="scss">
	.rule {
		margin: 1em 0;
	}
</style>

<script lang="ts">
	import Card from '@smui/card/src/Card.svelte';
	import type { Rule } from 'src/lib/domain/Rule';
	import Textfield from '@smui/textfield';
	import Select, { Option } from '@smui/select';

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
	const firstOperand = writable<string>();
	const secondOperand = writable<string>();
	const comparators = {
		gt: 'GREATER THAN',
		gte: 'GREATER THAN OR EQUAL TO',
		lt: 'LESS THAN',
		lte: 'LESS THAN OR EQUAL TO',
		contains: 'CONTAINS',
		in: 'IN'
	};

	const comparator = writable<string>();
</script>

<div class="rule" data-testid="rule">
	<Card padded>
		<div>
			{#if $firstOperand != undefined}
				<Operand />
			{/if}
		</div>
		{#if $firstOperand == undefined}
			<Button on:click={() => firstOperand.set('')}>Configure</Button>
		{/if}
		{#if $firstOperand != undefined}
			<Select
				variant="outlined"
				class="comparator-selector"
				label="Comparator"
				bind:value={$comparator}
			>
				{#each Object.entries(comparators) as [key, displayName]}
					<Option value={key} class="operand-kind-option">{displayName}</Option>
				{/each}
			</Select>
			{#if $comparator && $secondOperand == undefined}
				<Button on:click={() => secondOperand.set('')}>Add Operand</Button>
			{/if}
		{/if}
		<div>
			{#if $secondOperand != undefined}
				<Operand />
			{/if}
		</div>
	</Card>
</div>

<style lang="scss">
	.rule {
		margin: 1em;
		display: inline-block;
	}
</style>

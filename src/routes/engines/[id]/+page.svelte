<script lang="ts">
	import { page } from '$app/stores';
	import Button from '@smui/button';
	import { onMount } from 'svelte';
	import SubHeader from 'src/components/ui/SubHeader.svelte';
	import type { Engine } from 'src/lib/domain/Engine';
	import { writable } from 'svelte/store';
	import RuleCard from 'src/components/RuleCard/RuleCard.svelte';
	import type { Rule } from 'src/lib/domain/Rule';

	let engine: Engine = {
		id: '',
		name: '',
		rules: []
	};

	let rules = writable<Rule[]>(engine.rules);

	const getEngine = async (id: string) => {
		const response = await fetch(`/engines/${id}`);
		engine = await response.json();
		rules.set(engine.rules);
	};

	const updateEngine = (id: string) => async (index: number, rule: Rule) => {
		engine.rules[index] = rule;
		rules.update((_rules) => {
			_rules[index] = rule;
			return _rules;
		});
		await fetch(`/engines/${id}`, {
			method: 'PUT',
			body: JSON.stringify(engine),
			headers: {
				'content-type': 'applycation/json'
			}
		});
	};

	onMount(() => getEngine($page.params.id));
</script>

<SubHeader title="Edit engine: {engine.name}">
	<Button variant="raised" href="/">
		<i class="material-icons" aria-hidden="true">arrow_back</i>
	</Button>
</SubHeader>

<section>
	<div>
		{#each $rules as rule, index}
			<RuleCard {rule} {index} updateEngine={updateEngine($page.params.id)} />
		{/each}
	</div>
	<Button
		variant="raised"
		on:click={() =>
			rules.update((rules) => {
				rules.push({ firstOperand: '', secondOperand: '', operator: 'AND' });
				return rules;
			})}
	>
		Add Rule
		<i class="material-icons" aria-hidden="true">add</i>
	</Button>
</section>

<Button on:click={() => alert('done')}>Done!</Button>

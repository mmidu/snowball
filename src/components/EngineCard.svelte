<script lang="ts">
	import Card, { Actions, Content } from '@smui/card';
	import { Icon } from '@smui/button';
	import type { Engine } from 'src/types/Engine';
	import IconButton from '@smui/icon-button';
	import { createEventDispatcher } from 'svelte';

	export let engine: Engine;

	const dispatch = createEventDispatcher();

	const removeEngine = () => {
		dispatch('removeEngine', {
			engineID: engine.id
		});
	};
</script>

<Card padded>
	<Actions fullBleed>
		<IconButton class="material-icons" on:click={() => alert(engine.id)}>build</IconButton>
		<IconButton class="material-icons" on:click={removeEngine}>remove</IconButton>
	</Actions>
	<Content>{engine.name}</Content>
	<Icon>Icon of the engine</Icon>
</Card>

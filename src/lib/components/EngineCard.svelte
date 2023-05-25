<script lang="ts">
	import Card, { Actions, Content } from '@smui/card';
	import type { Engine } from 'src/types/Engine';
	import IconButton from '@smui/icon-button';

	export let engine: Engine;

	const removeEngine = async (id: string) => await fetch(`/engines/${id}`, { method: 'DELETE' });
</script>

<Card padded>
	<Actions fullBleed>
		<IconButton class="material-icons" on:click={() => alert(engine.id)}>polyline</IconButton>
		<IconButton class="material-icons" on:click={() => removeEngine(engine.id)}>remove</IconButton>
	</Actions>
	<Content>{engine.name}</Content>
</Card>

<script lang="ts">
	import Card, { Actions, Content } from '@smui/card';
	import type { Engine } from 'src/lib/domain/Engine';
	import IconButton from '@smui/icon-button';

	export let engine: Engine;
	export let removeEngine: (id: string) => void;
</script>

<Card padded>
	<Actions fullBleed>
		<a href={`/engines/${engine.id}`}><i class="material-icons">polyline</i></a>
		<IconButton class="material-icons" on:click={() => removeEngine(engine.id)}>remove</IconButton>
	</Actions>
	<Content>{engine.name}</Content>
</Card>

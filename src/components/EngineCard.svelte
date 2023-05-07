<script lang="ts">
	import Card, { Actions, Content } from '@smui/card';
	import Button, { Icon, Label } from '@smui/button';
	import type { Engine } from 'src/types/Engine';

	export let engine: Engine;
</script>

<Card padded>
	<Content>{engine.name}</Content>
	<Icon>Icon of the engine</Icon>
	<Actions fullBleed>
		<Button on:click={() => console.log('click')}>
			<Label>View</Label>
			<i class="material-icons" aria-hidden="true">arrow_forward</i>
		</Button>
	</Actions>
</Card>

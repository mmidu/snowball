<script lang="ts">
	import List from '@smui/list';
	import Textfield from '@smui/textfield';
	import IconButton from '@smui/icon-button';
	import { writable } from 'svelte/store';

	const listItems = writable<string[]>(['']);
</script>

<List>
	{#each $listItems as item, index}
		<div>
			<Textfield label="Item #{index + 1}" bind:value={item} />
			{#if index + 1 === $listItems.length}
				<IconButton
					class="material-icons"
					on:click={() => listItems.update((_listItems) => [..._listItems, ''])}>add</IconButton
				>
			{/if}
		</div>
	{/each}
</List>

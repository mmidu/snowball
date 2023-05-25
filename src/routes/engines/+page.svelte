<script lang="ts">
	import Button from '@smui/button';
	import SubHeader from 'src/lib/components/ui/SubHeader.svelte';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';
	import { goto } from '$app/navigation';

	let name: string = '';

	const addEngine = async () => {
		const response = await fetch('/engines', {
			method: 'POST',
			body: JSON.stringify({
				name
			}),
			headers: {
				'content-type': 'applycation/json'
			}
		});
		if (!response.ok) {
			alert('Engine name already exists');
		} else {
			goto('/');
		}
	};
</script>

<SubHeader title="New Engine">
	<Button variant="raised" href="/">
		<i class="material-icons" aria-hidden="true">arrow_back</i>
	</Button>
</SubHeader>

<section>
	<Textfield bind:value={name} label="Name">
		<HelperText slot="helper">Pick a cool engine name</HelperText>
	</Textfield>
</section>

{#if name !== ''}
	<Button on:click={addEngine}>Done!</Button>
{/if}

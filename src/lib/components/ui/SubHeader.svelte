<script lang="ts">
	import Headline5 from '../typography/Headline5.svelte';

	export let title: string;
</script>

<div class="container">
	<Headline5>{title}</Headline5>
	<slot />
</div>

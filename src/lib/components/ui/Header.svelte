<script lang="ts">
	import Logo from './Logo.svelte';
</script>

<header class="snowball-header">
	<Logo />
</header>

<style lang="scss">
	$height: 4em;

	.snowball-header {
		background-color: $snowball-charcoal;
		color: $snowball-white;
		padding: 0;
		height: $height;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	}
</style>

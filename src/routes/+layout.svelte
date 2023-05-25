<script>
	import Header from 'src/lib/components/ui/Header.svelte';
	import Page from 'src/lib/components/ui/Page.svelte';
</script>

<div class="snowball-layout">
	<Header />
	<Page>
		<slot />
	</Page>
</div>

<style lang="scss">
	.snowball-layout {
		background-color: $snowball-white;
		color: $snowball-black;
		width: 100vw;
		min-height: 100vh;
		display: inline-block;
	}
</style>

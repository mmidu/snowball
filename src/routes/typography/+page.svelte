<script lang="ts">
	import Headline1 from 'components/typography/Headline1.svelte';
	import Body1 from 'components/typography/Body1.svelte';
	import Body2 from 'components/typography/Body2.svelte';
	import Headline2 from 'components/typography/Headline2.svelte';
	import Headline3 from 'components/typography/Headline3.svelte';
	import Headline4 from 'components/typography/Headline4.svelte';
	import Headline5 from 'components/typography/Headline5.svelte';
	import Headline6 from 'components/typography/Headline6.svelte';
	import Overline from 'components/typography/Overline.svelte';
	import Button from 'components/typography/Button.svelte';
	import Caption from 'components/typography/Caption.svelte';
	import Subtitle1 from 'components/typography/Subtitle1.svelte';
	import Subtitle2 from 'components/typography/Subtitle2.svelte';
</script>

<Headline1>SvelteKit MUI Typography</Headline1>

<Headline1>Headline1</Headline1>
<Headline2>Headline2</Headline2>
<Headline3>Headline3</Headline3>
<Headline4>Headline4</Headline4>
<Headline5>Headline5</Headline5>
<Headline6>Headline6</Headline6>

<Subtitle1>Subtitle1</Subtitle1>
<Subtitle2>Subtitle2</Subtitle2>

<Overline>Overline</Overline>

<Body1>Body 1:<br />Lorem ipsum dolor <Overline>sit</Overline></Body1>

<Body2>Body 2:<br />Lorem ipsum dolor</Body2>

<Button>Button</Button>

<Caption>Caption</Caption>

<script lang="ts">
	import Headline1 from 'src/lib/components/typography/Headline1.svelte';
	import Body1 from 'src/lib/components/typography/Body1.svelte';
	import Body2 from 'src/lib/components/typography/Body2.svelte';
	import Headline2 from 'src/lib/components/typography/Headline2.svelte';
	import Headline3 from 'src/lib/components/typography/Headline3.svelte';
	import Headline4 from 'src/lib/components/typography/Headline4.svelte';
	import Headline5 from 'src/lib/components/typography/Headline5.svelte';
	import Headline6 from 'src/lib/components/typography/Headline6.svelte';
	import Overline from 'src/lib/components/typography/Overline.svelte';
	import Button from 'src/lib/components/typography/Button.svelte';
	import Caption from 'src/lib/components/typography/Caption.svelte';
	import Subtitle1 from 'src/lib/components/typography/Subtitle1.svelte';
	import Subtitle2 from 'src/lib/components/typography/Subtitle2.svelte';
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

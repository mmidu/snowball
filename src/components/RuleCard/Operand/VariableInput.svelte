<script lang="ts">
	import Textfield from '@smui/textfield';
	let variableName: string = '';

	const camelCasePattern = /^[a-z]+((\d)|([A-Z0-9][a-z0-9]+))*([A-Z])?$/;
</script>

<Textfield
	invalid={variableName.length > 0 && !camelCasePattern.test(variableName)}
	label="Variable Name"
	bind:value={variableName}
/>

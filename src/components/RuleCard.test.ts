import { render, screen } from '@testing-library/svelte';
import RuleCard from './RuleCard.svelte';

describe('RuleCard', () => {
	it('Initial counter should be 0', async () => {
		render(RuleCard, {
			rule: { firstOperand: '', secondOperand: '', operator: 'AND' },
			index: 1,
			updateEngine: () => {}
		});
		expect(screen.getByTestId('rule')).toBeInTheDocument();
	});
});

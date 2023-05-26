import { render, screen, act } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import RuleCard from './RuleCard.svelte';

describe('RuleCard', () => {
	it('Should render RuleCard with default props and no operands', () => {
		render(RuleCard);
		expect(screen.getByTestId('rule')).toBeInTheDocument();
	});
	it('Should have the Add Operand button', () => {
		render(RuleCard);
		expect(screen.getByText('Add Operand')).toBeInTheDocument();
	});
	it('Should be initially rendered with no Operands', () => {
		const { container } = render(RuleCard);
		expect(container.querySelectorAll('.operand-kind-selector')).toHaveLength(0);
	});
	it('Should add an operand on Add Operand button click', async () => {
		const { container } = render(RuleCard);
		const addOperandButton = screen.getByText('Add Operand');
		await act(() => userEvent.click(addOperandButton));
		expect(container.querySelectorAll('.operand-kind-selector')).toHaveLength(1);
	});
});

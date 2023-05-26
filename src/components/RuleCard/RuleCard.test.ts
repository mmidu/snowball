import { render, screen, act, within } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import RuleCard from './RuleCard.svelte';

describe('RuleCard', () => {
	it('Should render RuleCard with default props and no operands', () => {
		render(RuleCard);
		expect(screen.getByTestId('rule')).toBeInTheDocument();
	});
	it('Should be initially rendered with no Operands', () => {
		const { container } = render(RuleCard);
		expect(container.querySelectorAll('.operand-kind-selector')).toHaveLength(0);
	});
	it('Should have the Configure button', () => {
		render(RuleCard);
		expect(screen.getByText('Configure')).toBeInTheDocument();
	});
	it('Should add Operand on Configure button click', async () => {
		const { container } = render(RuleCard);
		const configureButton = screen.getByText('Configure');
		await act(() => userEvent.click(configureButton));
		expect(container.querySelectorAll('.operand-kind-selector')).toHaveLength(1);
	});
	it('Should not render Configure button when there are Operands', async () => {
		render(RuleCard);
		const configureButton = screen.getByText('Configure');
		await act(() => userEvent.click(configureButton));
		expect(screen.queryByText('Configure')).not.toBeInTheDocument();
	});
	it('Should render Comparator field when at least one Operand is present', async () => {
		const { container } = render(RuleCard);
		const configureButton = screen.getByText('Configure');
		await act(() => userEvent.click(configureButton));
		expect(screen.queryByText('Configure')).not.toBeInTheDocument();
		const comparatorSelector = container.querySelector('.comparator-selector') as HTMLElement;
		expect(comparatorSelector).toBeInTheDocument();
		expect(within(comparatorSelector).queryAllByRole('option')).toHaveLength(6);
	});

	it.skip('Should render Add Operand button when comparator is selected', async () => {
		const { container } = render(RuleCard);
		const configureButton = screen.getByText('Configure');
		await act(() => userEvent.click(configureButton));
		expect(screen.queryByText('Configure')).not.toBeInTheDocument();
		const comparatorSelector = container.querySelector('.comparator-selector div') as HTMLElement;
		await act(() => {
			userEvent.click(comparatorSelector);
			const optionsList = within(
				container.querySelector('.comparator-selector') as HTMLElement
			).getByRole('listbox');
			userEvent.click(optionsList.children[0]);
		});
		expect(screen.getByText('Add Operand')).toBeInTheDocument();
	});
});

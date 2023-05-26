import { render, act, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';

import Operand from './Operand.svelte';

describe('Operand', () => {
	it('Should render operand kind selector', () => {
		const { container } = render(Operand);
		expect(container.querySelector('.operand-kind-selector')).toBeInTheDocument();
	});
	it('Should provide [variable, constant, list] operand kind options', async () => {
		const { container } = render(Operand);
		await act(() =>
			userEvent.click(container.querySelector('.operand-kind-selector div') as HTMLDivElement)
		);
		const optionsList = screen.getByRole('listbox');
		expect(optionsList).toBeInTheDocument();
		expect(optionsList.children).toHaveLength(3);
		expect(optionsList.children[0]).toHaveTextContent('Variable');
		expect(optionsList.children[1]).toHaveTextContent('Constant');
		expect(optionsList.children[2]).toHaveTextContent('List');
	});
});

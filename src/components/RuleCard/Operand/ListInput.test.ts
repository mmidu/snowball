import { render, screen, act } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import ListInput from './ListInput.svelte';

describe('ListInput', () => {
	it('Should initialize with only one list item input', () => {
		const { container } = render(ListInput);
		expect(container.querySelectorAll('input')).toHaveLength(1);
	});
	it('Should render a new input element on plus button click', async () => {
		const { container } = render(ListInput);
		const addOperandButton = screen.getByRole('button');
		await act(() => userEvent.click(addOperandButton));
		expect(container.querySelectorAll('input')).toHaveLength(2);
	});
});

import { render, screen } from '@testing-library/svelte';
import OperandInput from './OperandInput.svelte';

describe('OperandInput', () => {
	it('should render [variable] operand input', () => {
		render(OperandInput, { operandKind: 'variable' });
		expect(screen.getByLabelText('Variable Name')).toBeInTheDocument();
	});
	it('should render [constant] operand input', () => {
		render(OperandInput, { operandKind: 'constant' });
		expect(screen.getByLabelText('Constant Input')).toBeInTheDocument();
	});
});

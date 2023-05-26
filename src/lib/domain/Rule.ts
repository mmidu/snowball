export type Rule = {
	firstOperand: string;
	secondOperand: string;
	operator: Operator;
};

type Operator = 'AND' | 'OR';

export type OperandKind = 'variable' | 'constant' | 'list';

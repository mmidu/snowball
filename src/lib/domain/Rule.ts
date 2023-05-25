export type Rule = {
	firstOperand: string;
	secondOperand: string;
	operator: Operator;
};

type Operator = 'AND' | 'OR';

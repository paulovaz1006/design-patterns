import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budgets';

export class CEOBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    console.log('O CEO trata qualquer orçamento');
    budget.approved = true;
    return budget;

    return super.handle(budget);
  }
}

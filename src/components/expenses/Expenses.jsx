import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesList from "./expenses_list/ExpensesList";

const Expenses = (props) => {
  const { expenses = [] } = props;

  return (
    <Card className="expenses">
      <ExpensesList items={expenses} />
    </Card>
  );
};

export default Expenses;

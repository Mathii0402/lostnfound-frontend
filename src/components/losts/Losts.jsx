import "./Losts.css";
import Card from "../ui/Card";
import Lostlist from "./lost_list/LostList";

const Losts = (props) => {
  const { expenses = [] } = props;

  return (
    <Card className="expenses">
      <Lostlist items={expenses} />
    </Card>
  );
};

export default Losts;

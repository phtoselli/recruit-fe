import { Button } from "antd";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Link to="/admin">
        <Button>Ir para Admin</Button>
      </Link>
      <Link to="/client">
        <Button>Ir para Client</Button>
      </Link>
    </div>
  );
}

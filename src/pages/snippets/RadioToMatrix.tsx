
import MatrixComponent from "./RadioGroup";
import { Button } from "../../components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const questions = [
  { text: "How often do you eat?" },
  { text: "How often do you drink?" },
  // Add more questions as needed
];

const answers = [
  { value: "never", label: "Never" },
  { value: "rarely", label: "Rarely" },
  { value: "sometimes", label: "Sometimes" },
  { value: "often", label: "Often" },
  { value: "always", label: "Always" },
];

const App = () => (
  <div>
          <Link to="/snippets">
        <Button variant={"link"} className="flex gap-2">
          <FaArrowLeft />
          Snippets
        </Button>
      </Link>
    <p className="mb-8 p-4">There are times where maxtrix inputs are useful but mobile is not that time.<br/>Resize browswer to see its reactivity</p>
    <MatrixComponent questions={questions} answers={answers} />
  </div>
);

export default App;

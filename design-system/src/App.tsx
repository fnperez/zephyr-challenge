import ReactDOM from "react-dom/client";

import { Button, Input } from "./ui";

import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl flex flex-col gap-3">
    <div>Name: design-system</div>
    <div>Framework: react-19</div>
    <Button label="Button" size="giant" variant="primary" />
    <Button label="Button" size="giant" variant="outline" />
    <Button label="Button" size="giant" variant="text" />

    <Input id="name" label="Name" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
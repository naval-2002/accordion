import Bottom from "./components/Bottom";

import Data from "./components/data";
import { useState } from "react";
function App() {
  const [data, setData] = useState(Data);

  const bottomData = data.map((value) => {
    return <Bottom data={value} />;
  });
  console.log(bottomData);
  return (
    <div className="App">
      <div className="app-cont">
        <div>
          <h3 className="heading">Question and answer</h3>
        </div>

        {bottomData}
      </div>
    </div>
  );
}

export default App;

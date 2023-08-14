// import RootLayout from './layout/RootLayout';
// import FilterableList from './pages/Practice/FilterableList';
import PureToggleSwitch from "./components/toggle/toggle-switcher";

import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };

  return (
    // <div className="App">
    //   <RootLayout>
    //     <FilterableList />
    //   </RootLayout>
    // </div>
    <div>
      <h1>순수 함수로 구현된 React 스위치 토글 버튼</h1>
      <PureToggleSwitch
        checked={checked}
        onToggle={() => setChecked(!checked)}
      />
    </div>
  );
}

export default App;

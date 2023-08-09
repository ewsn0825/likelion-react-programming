import Heading from "./Heading";
import Description from "./Description";
import RenderingProcessList from "./RenderProcessList";

// App 함수 컴포넌트를 작성합니다.
function App() {
  // JSX 값 반환
  return (
    <div className="App">
      <Heading />
      <Description />
      <RenderingProcessList />
    </div>
  );
}

export default App;

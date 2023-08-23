import debounce from '@/utils/debounce';
import { useState } from 'react';

function LiftingStateUp() {
  return (
    <div className="LiftingStateUp">
      <Parent />
    </div>
  );
}

export default LiftingStateUp;

/* -------------------------------------------------------------------------- */

export function Parent() {
  // 상태
  const [color, setColor] = useState('#999');

  // 상태 업데이트 이벤트 핸들러
  const handleChangeBgColor = (newColor) => setColor(newColor);

  return (
    <div className="Parent">
      <Child color={color} onChangeColor={handleChangeBgColor} />
    </div>
  );
}

export function Child({ color, onChangeColor }) {
  return (
    <div className="Child flex items-center justify-center gap-8">
      <p className="text-4xl font-extralight uppercase" style={{ color }}>
        Child
      </p>
      <input
        type="color"
        aria-label="글자 색상 변경"
        defaultValue={color}
        onChange={debounce((e) => onChangeColor(e.target.value), 500)}
      />
    </div>
  );
}

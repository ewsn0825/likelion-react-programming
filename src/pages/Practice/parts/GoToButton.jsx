<<<<<<< HEAD
function GoToButton({
  direction /* 'down' | 'up' */,
  label /* string */,
=======
function GoToButton({ 
  direction/* 'down' | 'up' */, 
  label /* string */,
  // 나머지 전달된 속성(prop)을 모은 객체
  // rest props
>>>>>>> 99329f3bbc9177a496b3e732c8bbd4c74d5c1944
  ...restProps
}) {
  // 문 또는 식
  // let className = '';
  // if (direction === 'down') {
  //   className = 'scrollDown';
  // } else {
  //   className = 'scrollUp';
  // }

  return (
    <button
      type="button"
      // className={className}
      /* 식만 사용 가능 */
<<<<<<< HEAD
      className={direction === "down" ? "scrollDown" : "scrollUp"}
=======
      className={direction === 'down' ? 'scrollDown' : 'scrollUp'}
>>>>>>> 99329f3bbc9177a496b3e732c8bbd4c74d5c1944
      aria-label={label}
      title={label}
      {...restProps}
    >
      <svg
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
      >
        <path
          d="m112 268 144 144 144-144M256 392V100"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit={10}
          strokeWidth="48px"
        />
      </svg>
    </button>
  );
}

<<<<<<< HEAD
export default GoToButton;
=======
export default GoToButton
>>>>>>> 99329f3bbc9177a496b3e732c8bbd4c74d5c1944

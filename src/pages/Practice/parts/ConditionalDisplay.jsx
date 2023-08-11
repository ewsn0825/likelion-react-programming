<<<<<<< HEAD
function ConditionalDisplay({ isShowReactImage }) {
  return (
    <>
      <dt>조건부 표시(conditional display)</dt>
      <dd>
        <p>
          표시(display) 여부에 따라 이미지가 화면에서 감춰지거나 표시됩니다.
        </p>
        {/* isShowReactImage 상태 값에 따라 이미지가 화면에 표시되거나 표시되지 않도록 설정합니다. */}
=======
function ConditionalDisplay({ hidden, isShowReactImage }) {
  return (
    <>
      <dt hidden={hidden}>조건부 표시(conditional display)</dt>
      <dd hidden={hidden}>
        <p>
          표시(display) 여부에 따라 이미지가 화면에서 감춰지거나 표시됩니다.
        </p>
>>>>>>> 99329f3bbc9177a496b3e732c8bbd4c74d5c1944
        <picture hidden={!isShowReactImage}>
          <source type="image/avif" srcSet="/react.avif" />
          <source type="image/webp" srcSet="/react.webp" />
          <img src="/react.png" alt="React" height={42} />
        </picture>
      </dd>
    </>
  );
}

<<<<<<< HEAD
export default ConditionalDisplay;
=======
export default ConditionalDisplay;
>>>>>>> 99329f3bbc9177a496b3e732c8bbd4c74d5c1944

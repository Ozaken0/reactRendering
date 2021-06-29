import { memo } from "react";
const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  return (
    <>
      {open ? (
        <div style={style}>
          <p>小コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

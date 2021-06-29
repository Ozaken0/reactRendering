import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onClickCountup = () => {
    setCount(count + 1);
  };
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={onClickCountup}>カウントあっぷ</button>
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>

      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

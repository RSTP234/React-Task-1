import React from "react";
import "./styles.css";

function ParagraphCounter() {
  let WordCount = (e) => {
    let val = e.target.value;
    if (val.length == 0) {
      document.getElementById("WordCount").innerHTML = "Word Count: " + 0;
    } else {
      val = val.replace(/(^\s*)|(\s*$)/gi, "");
      val = val.replace(/ +/g, " ");
      val = val.replace(/\n+/g, " ");
      document.getElementById("WordCount").innerHTML =
        "Word Count: " + val.split(" ").length;
    }
  };
  return (
    <div>
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea id="para" rows={10} cols={60} onChange={WordCount}></textarea>
      <p id="WordCount">Word Count: 0</p>
    </div>
  );
}

export default ParagraphCounter;

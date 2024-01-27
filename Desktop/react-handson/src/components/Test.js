import React from "react";

function Test(props) {
  return (
    <div>
      <p>This is the test component made by {props.person}</p>
    </div>
  );
}
Test.defaultProps = { person: "Stranger" };
export default Test;

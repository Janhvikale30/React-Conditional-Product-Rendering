import React, { useState } from "react";

function CondRendering() {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <div className="w-50 m-auto text-center">
        <button
          className="btn btn-warning"
          onClick={() => {
            if (flag == true) {
              setFlag(false);
            } else {
              setFlag(true);
            }
          }}
        >
          Show Message
        </button>
        {flag == true ? <p>Good morning!</p> : null}
      </div>
    </>
  );
}

export default CondRendering;

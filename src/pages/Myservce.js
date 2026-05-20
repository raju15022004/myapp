import React, { Fragment, useState } from "react";

function Myservce() {

  const [a, b] = useState(false);

  const [x, y] = useState({
    name: "kumar",
    age: 40,
    gender: "male"
  });

  return (
    <Fragment>
      <div>
        Myservcepppppppppppppp {a ? "ok" : "not ok"}
      </div>

      <h1>user name: {x.name}</h1>
      <h1>user age: {x.age}</h1>
      <h1>user gender: {x.gender}</h1>
      <h1>fees: {100 * 200 * 400}</h1>

      <button
        type="button"
        onClick={() => b(!a)}
      >
        click to update state variable
      </button>
    </Fragment>
  );
}

export default Myservce;


import React, { useEffect, useState } from "react";

const HeroPage = () => {
  // const [state, setState] = useState(initialState);

  // state > current
  // setState > function to update the value
  // initialState > the starting value of the state

  const [count, setCount] = useState(6);

  // TOGGLE BUTTON
  const [isOn, setIson] = useState(false);

  const [text, setText] = useState("Hello World");

  const changeText = () => {
    setText("Welcome to React");
  };

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const [color, setColor] = useState("red");
  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  const [name, setName] = useState("");

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   alert("Counter has been updated to: " + counter);
  // }, [counter]);

  // TIMER EXAMPLE WITH USEEFFECT
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 7);
    }, 5000);

    return () => {
      clearInterval(interval);
      console.log("Cleanup!");
    };
  }, []);

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((data) => setUser(data)),
    );
  });

  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "black" : "white";
    document.body.style.color = dark ? "white" : "black";
  }, [dark]);
  return (
    <>
      <button onClick={() => setDark(!dark)}>Theme</button>
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h2>Seconds :{seconds}</h2>
      {/* <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Increase Useeffect
      </button> */}

      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <h2>{isOn ? "ON" : "OFF"}</h2>
      <button onClick={() => setIson(!isOn)}>Toggle</button>

      <h1>This is the {text}</h1>
      <button onClick={changeText}>Change Text</button>

      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button
          onClick={toggleLike}
          style={{
            fontSize: "40px",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          {isLiked ? "❤️" : "🤍"}
        </button>
        <p>{isLiked ? " You Liked this post" : "Click to Like"}</p>
      </div>

      <div
        onClick={changeColor}
        style={{
          backgroundColor: color,
          width: "700px",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          cursor: "pointer",
        }}
      >
        <h1>Random Color Changer</h1>
      </div>

      <br />
      <br />
      <br />
      <br />
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>hello {name}</p>
      </div>
    </>
  );
};

export default HeroPage;

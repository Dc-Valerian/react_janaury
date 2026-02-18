import React from "react";
import "./App.css";
import { IoPersonOutline } from "react-icons/io5";
import CardProps from "./Components/CardProps/CardProps";

const App = () => {
  return (
    <div className="card">
      <CardProps
        h3="First Card"
        p="ljebureeruueheruerueru"
        cardImage="https://images.unsplash.com/photo-1770752609290-264c53dc54a3?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
      />
      <CardProps
        h3="Second Card"
        p="ljebureeruueheruerueru"
        cardImage="https://images.unsplash.com/photo-1771272338329-1ab5145559a5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
      />
      <CardProps
        h3="Third Card"
        p="ljebureeruueheruerueru"
        cardImage="https://images.unsplash.com/photo-1771272338329-1ab5145559a5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
      />
      <CardProps
        h3="Fourth Card"
        p="ljebureeruueheruerueru"
        cardImage="https://images.unsplash.com/photo-1771272338329-1ab5145559a5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
      />

      {/* <CardProps
        h3="Second card"
        cardImages="https://images.unsplash.com/photo-1771272338329-1ab5145559a5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
        p="uefwuieruhruerueruiwr"
      />
      <CardProps
        h3="Third card"
        cardImages="https://images.unsplash.com/photo-1771272338329-1ab5145559a5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
        p="uefwuieruhruerueruiwr"
      />
      <CardProps
        h3="Fourth card"
        cardImages="https://images.unsplash.com/photo-1771272338329-1ab5145559a5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
        p="uefwuieruhruerueruiwr"
      /> */}
    </div>
  );
};

export default App;

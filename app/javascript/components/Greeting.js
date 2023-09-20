import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreeting } from "../features/greeting/greetingSlice";

const Greeting = () => {
  const { greeting } = useSelector((store) => store.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, []);

  if (greeting.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Random Message</h1>
      <p>{greeting.body}</p>
    </div>
  );
};

export default Greeting;

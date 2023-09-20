import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGreeting } from "../features/greeting/greetingSlice";

const Greeting = () => {
  const { greeting, isLoading, error } = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Random Message</h1>
      <p>{greeting.body}</p>
    </div>
  );
};

export default Greeting;

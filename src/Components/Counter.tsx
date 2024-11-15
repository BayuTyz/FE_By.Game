import React from "react";

type Props = {
  count: number;
  onCounterChange: React.Dispatch<React.SetStateAction<number>>;
};
const Counter = (props: Props) => {
  return (
    <div>
      Counter: {props.count}{" "}
      <button
        className="bg-red-500 p-2 w-fit text-white rounded-xl"
        onClick={() => {
          props.onCounterChange(0);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default Counter;

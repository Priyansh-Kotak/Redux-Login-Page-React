// import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/Index";

import Button from "./Button/Button";

export default function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.toggle);

  const dispatch = useDispatch();

  const toogleCounterHandler = () => {
    console.log("Clicking the toogleCounterHandler ");
    dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <main className="bg-violet-400 md:h-[3 0rem] rounded-xl md:w-[50%] border-2 my-4">
        <h1 className="  md:text-3xl my-4 font-bold text-center ">
          REDUX COUNTER
        </h1>
        {console.log("showing the toggle status " + show)}
        {show && (
          <section className="text-center text-6xl md:my-10 ">
            {counter}
          </section>
        )}
        <section className="  ">
          <Button
            incrementHandler={incrementHandler}
            decrementHandler={decrementHandler}
            increaseHandler={increaseHandler}
            toogleCounterHandler={toogleCounterHandler}
          />
        </section>
      </main>
    </>
  );
}

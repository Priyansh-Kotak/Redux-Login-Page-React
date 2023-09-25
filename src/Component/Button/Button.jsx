"use client";

import { Button } from "flowbite-react";

export default function GradientDuoTone(props) {
  return (
    <section className=" w-[30rem] m-auto h-52 md:p-4">
      <section className="flex justify-between ">
        <Button
          gradientDuoTone="purpleToBlue"
          className="font-bold w-48"
          onClick={props.incrementHandler}  
        >
          Increment
        </Button>

        <Button
          gradientDuoTone="purpleToBlue"
          className="font-bold w-48 "
          onClick={props.decrementHandler}
        >
          decrement
        </Button>
      </section>

      <section className=" py-3  flex justify-between">
        <Button
          gradientDuoTone="purpleToBlue"
          className="font-bold w-48 "
          onClick={props.toogleCounterHandler}
        >
          TOGGLE COUNTER
        </Button>

        <Button
          gradientDuoTone="purpleToBlue"
          className="font-bold w-48 "
          onClick={props.increaseHandler}
        >
          Increase by 5
        </Button>
      </section>
    </section>
  );
}

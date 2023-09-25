"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/Index";
import { underAuthActions } from "../store/Index";

export default function DefaultForm() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const underAutbh = useSelector(
    (state) => state.underAuth.underAuthentication
  );

  const dispatch = useDispatch();
  const formHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
    dispatch(underAuthActions.underAuthActions());

    console.log("Clicked the subm,it button");
  };
  return (
    <>
      {underAutbh && (
        <form
          className="flex w-[50%] max-w-xl flex-col justify-center gap-5 my-5 bg-violet-500 rounded-lg"
          onSubmit={formHandler}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              placeholder="name@flowbite.com"
              required
              type="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" required type="password" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      )}
    </>
  );
}

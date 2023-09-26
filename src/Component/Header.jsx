"use client";
import { authActions } from "../store/Index";
import { underAuthActions } from "../store/Index";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "flowbite-react";
import { HiOutlineArrowRight, HiShoppingCart } from "react-icons/hi";

export default function NavbarWithDropdown() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  const UnderAuth = useSelector((state) => state.underAuth.underAuthentication);
  const dispatch = useDispatch();
  const LoginHandler = () => {
    dispatch(underAuthActions.underAuthActions());
    // dispatch(authActions.login());
  };

  const LogoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="#">
        <img
          //   alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          //   src="/favicon.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      {console.log("Auth value " + auth)}
      {auth ? (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <ul>
              <li>Dashboard</li>
              <li>Settings</li>
              <li>Earnings</li>
              <Dropdown.Divider />
              <button onClick={LogoutHandler}>Sign out</button>
            </ul>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      ) : (
        <div className="flex md:order-2">
          <Button onClick={LoginHandler}>
            <p>Sign in</p>
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

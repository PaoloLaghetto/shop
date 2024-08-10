import { PropsWithChildren } from "react";
import { selectAuthIsLogged, useAuth } from "../../../services/auth";

interface IfLoggedProps {
  else?: React.ReactNode;
}
// propsWithChildred is a type that allows us to have children in the component (just like ng-content in Angular)
// <> is called fragment, it's a way to return multiple elements without adding a div to wrap them
export function IfLogged(props: PropsWithChildren<IfLoggedProps>) {
  const isLogged = useAuth(selectAuthIsLogged);

  return <>{isLogged ? props.children : props.else}</>;
}

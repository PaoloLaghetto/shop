import { useEffect, useState } from "react";

export function Spinner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const debounce = setTimeout(() => {
      setShow(true);
    }, 1000);

    // CLEANUP: Clear timeout if the component is unmounted
    return () => clearTimeout(debounce);
  }, []);
  return show ? (
    <div className="flex w-full justify-center items-center">
      <i className="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    </div>
  ) : null;
}

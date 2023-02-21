import { useEffect } from "react";
import { useState } from "react";
import { get } from "../../ultis/request";

export default function Data() {
  const [data, setData] = useState();
  useEffect(() => {
    get("film/findByName", {
      params: {
        name: "abc",
      },
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return <>123</>;
}

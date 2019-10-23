import React, { useState, useCallback } from "react";
import QueryItem from './QueryItem'

export default function CommonQueries(props) {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const handleToggle = useCallback(status => {
    switch (status) {
      case 1:
        setActive1(active1 => !active1);
        break;
      case 2:
        setActive2(active2 => !active2);
        break;
      case 3:
        setActive3(active3 => !active3);
        break;
      default:
        break;
    }
  }, []);
  return (
      <React.Fragment>
            <QueryItem open={active1} id={1} handleToggle={handleToggle}/>
            <QueryItem open={active2} id={2} handleToggle={handleToggle}/>
            <QueryItem open={active3} id={3} handleToggle={handleToggle}/>
      </React.Fragment>
  );
}

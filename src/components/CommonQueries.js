import React, { useState, useCallback } from "react";
import { Card, Heading} from "@shopify/polaris";
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
    <div
      style={{
        borderTop: "1px solid #DFE3E8",
        paddingTop: 38,
        position: "relative"
      }}
      >
      <Heading element="h1">Common Queries</Heading>
      <div className="queries" style={{ marginTop: 21 }}>
        <Card>
          <QueryItem open={active1} id={1} handleToggle={handleToggle}/>
          <QueryItem open={active2} id={2} handleToggle={handleToggle}/>
          <QueryItem open={active3} id={3} handleToggle={handleToggle}/>
        </Card>
      </div>
    </div>
  );
}

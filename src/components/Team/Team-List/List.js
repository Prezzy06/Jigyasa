import ListNames from "./ListNames";
import "./panel.css";
import React, { useState, useEffect } from "react";

const listnamess = {
  pos_1: null,
  pos_2: null,
  pos_3: null,
  pos_4: null,
  pos_5: null,
  pos_6: null,
  pos_7: null,
  pos_8: null,
  pos_9: null,
};

const listnamesNames = {
  pos_1: "Convener",
  pos_2: "Tech",
  pos_3: "Design",
  pos_4: "Marketing",
  pos_5: "Events",
  pos_6: "Publicity",
  pos_7: "Public Relation",
  pos_8: "Operations",
  pos_9: "Executives",
};

function List() {
  const [Curr, setCurr] = useState("pos_1");

  const Scroll = () => {
    const curPos = window.scrollY;
    for (const section in listnamess) {
      if (listnamess[section] < curPos + 40) {
        setCurr(section);
      } else if (listnamess[section] >= curPos) {
        break;
      }
    }
  };

  useEffect(() => {
    const getitem = () => {
      const curScroll = window.scrollY - 80;
      for (const key in listnamess) {
        try {
          listnamess[key] =
            document.getElementById(key).getBoundingClientRect().top + curScroll;
        } catch (e) {
          return;
        }
      }
      Scroll();
    };

    setTimeout(getitem, 1000);
    const observer = new MutationObserver(getitem);
    observer.observe(document.getElementById("root"), {
      childList: true,
      subtree: true,
    });
    window.addEventListener("scroll", Scroll);
    return () => {
      window.removeEventListener("scroll", Scroll);
      observer.disconnect();
    };
  }, []);

  const Liste = Object.keys(listnamess).map((e, i) => (
    <ListNames
      itemName={listnamesNames[e]}
      anchorId={e}
      key={`listnamess_${i}`}
      active={e === Curr}
      id="menu-item"
    />
  ));
  return (
    <section className="item">
      <ul style={{ listStyle: "none", padding: "0" }}>{Liste}</ul>
    </section>
  );
}

export default List;

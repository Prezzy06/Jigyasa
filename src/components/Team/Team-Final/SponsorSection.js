import Card from "./Card.js";
import classes from "./SponsorSection.module.css";
import data from "../TeamData.js";

function PosSection(props) {
  return (
    <div className={`${classes.container}`}>
      <div className={classes.pos_title} id="pos_1">
        <h1>Conveners</h1>

        <div className={classes.cards} id="pos_1">
          {data.convener.map((item, index) => (
            <Card
              img={item.img}
              position={item.position}
              name={item.name}
              key={index}
              insta={item.insta}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <div className={classes.pos_title} id="pos_2">
        <h1>Tech Team</h1>
        <div className={classes.cards}>
          {data.tech.map((item, index) => (
            <Card
              img={item.img}
              position={item.position}
              name={item.name}
              key={index}
              insta={item.insta}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <div className={classes.pos_title} id="pos_3">
        <h1>Design Team</h1>
        <div className={classes.cards}>
          {data.design.map((item, index) => (
            <Card
              img={item.img}
              position={item.position}
              name={item.name}
              key={index}
              insta={item.insta}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <div className={classes.pos_title} id="pos_4">
        <h1>Marketing Team</h1>

        <div className={classes.cards}>
          {data.marketing.map((item, index) => (
            <Card
              img={item.img}
              position={item.position}
              name={item.name}
              key={index}
              insta={item.insta}
              link={item.link}
            />
          ))}
        </div>
      </div>

      <div className={classes.pos_title} id="pos_5">
        <h1>Events Team</h1>
        <div className={classes.cards}>
          {data.events.map((item, index) => (
            <Card
              img={item.img}
              position={item.position}
              name={item.name}
              key={index}
              insta={item.insta}
              link={item.link}
            />
          ))}
        </div>
      </div>
      <div className={classes.pos_title} id="pos_6">
        <h1 id="pos_2">Publicity Team</h1>
        <div className={classes.cards}>
          {data.publicity.map((item, index) => (
            <Card
              img={item.img}
              position={item.position}
              name={item.name}
              key={index}
              insta={item.insta}
              link={item.link}
            />
          ))}
        </div>
      </div>

      <div className={classes.pos_title} id="pos_7">
        <h1 id="pos_3">Public Relation Team</h1>
        <div className={classes.cards}>
          {data.pr.map((item, index) => (
            <Card
              img={item.img}
              position={item.position}
              name={item.name}
              key={index}
              insta={item.insta}
              link={item.link}
            />
          ))}
        </div>
      </div>

      <div className={classes.pos_title} id="pos_8">
        <h1>Content Team</h1>
        <div className={classes.cards}>
          {data.content.map((item, index) => (
            <Card
              img={item.img}
              position={item.position}
              name={item.name}
              key={index}
              insta={item.insta}
              link={item.link}
            />
          ))}
        </div>
      </div>

      <div className={classes.pos_title} id="pos_9">
        <h1>Marketing Executives</h1>
        <div className={classes.cards}>
          {data.executives.map((item, index) => (
            <Card
              img={item.img}
              position={item.position}
              name={item.name}
              key={index}
              insta={item.insta}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PosSection;

import List from './Team-List/List';
import classes from './Sponsors.module.css';
import SponsorSection from './Team-Final/SponsorSection';

function JigyasaTeam() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.sidebar}>
        <List />
      </div>
      <div className={classes.main}>
        <SponsorSection sponsorId="sponsor_1" href="#sponsor_1" />
      </div>
    </div>
  );
}

export default JigyasaTeam;

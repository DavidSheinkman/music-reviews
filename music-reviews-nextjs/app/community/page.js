import Image from 'next/image';

import turntableIcon from '@/assets/icons/turntable.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Music</span>
        </h1>
        <p>Join our community and share your favorite music!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={turntableIcon} alt="A turntable" />
            <p>Share & discover music</p>
          </li>
          <li>
            <Image src={communityIcon} alt="2 people b2b DJing" />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people dancing"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
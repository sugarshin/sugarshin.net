'use client';

import {
  LinkIcon,
  LocationIcon,
  NoteIcon,
  PencilIcon,
  TerminalIcon,
} from '@primer/octicons-react';
import { clsx } from 'clsx';
import Bio from '~/components/bio';
import ListItem from '~/components/list-item';
import styles from './page.module.css';

type ExternalLinks = { url: string; text: string }[];

const externalLinks: ExternalLinks = [
  { text: 'GitHub', url: 'https://github.com/sugarshin/' },
  { text: 'LinkedIn', url: 'https://www.linkedin.com/in/shingosato/' },
  { text: 'Keybase', url: 'https://keybase.io/sugarshin' },
  { text: 'X', url: 'https://x.com/sugarshin/' },
  { text: 'Instagram', url: 'https://instagram.com/sugarshin' },
  { text: 'Facebook', url: 'https://www.facebook.com/sngsato' },
  { text: 'Strava', url: 'https://www.strava.com/athletes/sugarshin' },
  { text: 'サウナイキタイ', url: 'https://sauna-ikitai.com/saunners/66527' },
];

export default function IndexPage() {
  return (
    <div className={styles.toppage}>
      <div className={styles.toppage_container}>
        <div className={styles.toppage_image}>
          <div className={styles.toppage_image_container}>
            <img
              src="/images/portrait.png"
              className={styles.toppage_image_container_img}
              alt="Shingo Sato's Portrait"
            />
          </div>
        </div>
        <div className={styles.toppage_text}>
          <Bio className={styles.toppage_text_bio} />
          <ul
            className={clsx(
              styles.toppage_text_list,
              styles.toppage_text_profile,
            )}
          >
            <ListItem>
              <span
                className={styles.toppage_text_profile_listitem_iconcontainer}
              >
                <TerminalIcon />
              </span>
              <span>Software Developer</span>
            </ListItem>
            <ListItem>
              <span
                className={styles.toppage_text_profile_listitem_iconcontainer}
              >
                <LocationIcon />
              </span>
              <span>Tokyo, Japan</span>
            </ListItem>
          </ul>
          <ul
            className={clsx(
              styles.toppage_text_list,
              styles.toppage_text_linkslog,
            )}
          >
            <ListItem href="https://blog.sugarshin.net/">
              <span
                className={styles.toppage_text_profile_listitem_iconcontainer}
              >
                <PencilIcon />
              </span>
              <span>Blog</span>
            </ListItem>
            <ListItem href="https://slides.sugarshin.net/">
              <span
                className={styles.toppage_text_profile_listitem_iconcontainer}
              >
                <NoteIcon />
              </span>
              <span>Slides</span>
            </ListItem>
          </ul>
          <ul className={styles.toppage_text_list}>
            {externalLinks.map((link, i) => (
              <ListItem key={`link-${i}`} href={link.url} target="_blank">
                <span
                  className={styles.toppage_text_profile_listitem_iconcontainer}
                >
                  <LinkIcon />
                </span>
                <span>{link.text}</span>
              </ListItem>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

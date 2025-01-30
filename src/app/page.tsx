'use client';

import { clsx } from "clsx";
import { PencilIcon, NoteIcon, TerminalIcon, LocationIcon, LinkExternalIcon } from '@primer/octicons-react'
import Bio from "@/components/bio";
import ListItem from "@/components/list-item";
import styles from "./page.module.css";

type Data = {
  informations: { icon: string; text: string }[];
  links: { url: string; text: string }[];
}

const data: Data = {
  informations: [
    { icon: 'terminal', text: 'Software Developer' },
    { icon: 'location', text: 'Tokyo, Japan' },
  ],
  links: [
    { url: 'https://github.com/sugarshin/', text: 'GitHub' },
    { url: 'https://www.linkedin.com/in/shingosato/', text: 'LinkedIn' },
    { url: 'https://keybase.io/sugarshin', text: 'Keybase' },
    { url: 'https://x.com/sugarshin/', text: 'X' },
    { url: 'https://instagram.com/sugarshin', text: 'Instagram' },
    { url: 'https://www.facebook.com/sngsato', text: 'Facebook' },
    { url: 'https://www.strava.com/athletes/sugarshin', text: 'Strava' },
    { url: 'https://sauna-ikitai.com/saunners/66527', text: 'サウナイキタイ' },
  ],  
}

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
          <ul className={clsx(styles.toppage_text_list, styles.toppage_text_profile)}>
            {data.informations.map((info, i) => (
              <ListItem key={`info-${i}`}>
                <span className={styles.toppage_text_profile_listitem_iconcontainer}>
                  {info.icon === 'terminal' && <TerminalIcon />}
                  {info.icon === 'location' && <LocationIcon />}
                </span>
                <span>{info.text}</span>
              </ListItem>
            ))}
          </ul>
          <ul className={clsx(styles.toppage_text_list, styles.toppage_text_linkslog)}>
            <ListItem href="https://blog.sugarshin.net/">
              <span className={styles.toppage_text_profile_listitem_iconcontainer}>
                <PencilIcon />
              </span>
              <span>Blog</span>
            </ListItem>
            <ListItem href="https://slides.sugarshin.net/">
              <span className={styles.toppage_text_profile_listitem_iconcontainer}>
                <NoteIcon />
              </span>
              <span>Slides</span>
            </ListItem>
          </ul>
          <ul className={styles.toppage_text_list}>
            {data.links.map((link, i) => (
              <ListItem key={`link-${i}`} href={link.url}>
                <span className={styles.toppage_text_profile_listitem_iconcontainer}>
                  <LinkExternalIcon />
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

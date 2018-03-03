import React from 'react'
import List from 'components/List'
import ListItem from 'components/ListItem'
import Octicon from 'components/Octicon'
import s from './index.sss'

const Top = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <img src={require('images/portrait.png')} />
      </div>
      <div className={s.text}>
        <List className={s.profile}>
          {[
            { icon: 'terminal', text: 'Engineer' },
            { icon: 'organization', text: 'Oneteam Inc.', url: '//one-team.com/' },
            { icon: 'location', text: 'Tokyo, Japan' },
          ].map(d => <ListItem key={d.icon} href={d.url || null}>
            <span className={s['icon-container']}>
              <Octicon name={d.icon} />
            </span>
            <span>{d.text}</span>
          </ListItem>)}
        </List>
        <List className={s['links-log']}>
          <ListItem href='//blog.sugarshin.net/'>
            <span className={s['icon-container']}>
              <Octicon name='pencil' />
            </span>
            <span>Blog</span>
          </ListItem>
        </List>
        <List>
          {[
            { url: '//github.com/sugarshin/', text: 'GitHub' },
            { url: '//www.npmjs.com/~sugarshin', text: 'npm' },
            { url: '//keybase.io/sugarshin', text: 'Keybase' },
            { url: '//twitter.com/sugarshin/', text: 'Twitter' },
            { url: '//instagram.com/sugarshin', text: 'Instagram'},
          ].map(d => <ListItem key={d.text} href={d.url}>
            <span className={s['icon-container']}>
              <Octicon name='link' />
            </span>
            <span>{d.text}</span>
          </ListItem>)}
        </List>
      </div>
    </div>
  )
}

export default Top

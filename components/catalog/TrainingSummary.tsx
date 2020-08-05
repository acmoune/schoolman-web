import * as React from 'react'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { useRouter } from 'next/router'
import ITrainingSummary from '../../server/src/models/catalog/TrainingSummary'
import { apiServer } from '../../app.config'
import s3 from '../../lib/s3'

type Props = { training: ITrainingSummary, displayLink: boolean, href: any }

export default function TrainingSummary({ training, displayLink, href }: Props) {
  const classes = makeStyles((theme: Theme) => createStyles({
    root: {
      marginBottom: 15,
      
      '&:hover': {
        opacity: 0.8,
        cursor: 'pointer'
      }
    },
    imgBox: {
    },
    contentBox: {
      padding: 0,
    },
    title: {
      fontSize: '12pt',
      textDecoration: 'none',
      color: '#000000',
      fontWeight: 'bold'
    },
    link: {
      textDecoration: 'none',
      fontSize: '8pt',
      display: 'inline-block',
      color: '#FABD03',
      marginTop: 5
    }
  }))()

  const router = useRouter()
  const banner = training.banner ? s3.getFileUrl(training.banner) : `${apiServer}/assets/images/trainings/no-banner.jpg`

  return (
    <div className={classes.root} onClick={() => href && router.push(href)}>
      <div className={classes.imgBox}>
        <img src={banner} alt="" style={{width: '100%'}} />
      </div>

      <div className={classes.contentBox}>
        <div className={classes.title}>
          <Typography variant="body1">{training.title}</Typography>
        </div>

        <div>
          <Typography variant="caption" style={{color: '#808080'}}>{training.description}</Typography>
        </div>

        {displayLink && training.link ? <div><a className={classes.link} href={training.link}>Official  vendor link</a></div> : null}
      </div>
    </div>
  )
}

TrainingSummary.defaultProps = {
  displayLink: false,
  href: null
} as Props

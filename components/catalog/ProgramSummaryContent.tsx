import * as React from 'react'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import IProgram from '../../server/src/models/catalog/Program'
import { apiServer } from '../../app.config'
import s3 from '../../lib/s3'

type Props = { program: IProgram, displayLink: boolean }

export default function ProgramSummaryContent({ program, displayLink }: Props) {
  const classes = makeStyles((theme: Theme) => createStyles({
    root: {
      display: 'flex'
    },
    imgBox: {
    },
    contentBox: {
      flexGrow: 1,
      padding: '0px 15px',
    },
    title: {
      fontSize: '14pt',
      textDecoration: 'none',
      color: '#000000'
    },
    link: {
      textDecoration: 'none',
      fontSize: '8pt',
      color: '#FABD03',
      display: 'inline-block',
      marginTop: 5
    }
  }))()

  const logo = program.logo ? s3.getFileUrl(program.logo) : `${apiServer}/assets/images/programs/no-logo.jpg`

  return (
    <div className={classes.root}>
      <div className={classes.imgBox}>
        <img src={logo} alt="" style={{width: 150, height: 150, border: '1px solid #DFDFDF'}} />
      </div>

      <div className={classes.contentBox}>
        <div className={classes.title}>{program.title}</div>

        <div>
          <Typography variant="caption" style={{color: '#808080'}}>{program.description}</Typography>
        </div>

        {displayLink && program.link ? <div><a className={classes.link} href={program.link}>Official  vendor link</a></div> : null}
      </div>
    </div>
  )
}

ProgramSummaryContent.defaultProps = {
  displayLink: false
} as Props

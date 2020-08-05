import * as React from 'react'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import IDepartment from '../../server/src/models/catalog/Department'
import IProgram from '../../server/src/models/catalog/Program'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { apiServer } from '../../app.config'
import s3 from '../../lib/s3'

export function ProgramMini(props: { program: IProgram, href?: any, style?: any, selected: boolean }) {
  const router = useRouter()
  const logo = props.program.logo ? s3.getFileUrl(props.program.logo) : `${apiServer}/assets/images/programs/no-logo.jpg`

  return (
    <div 
      style={{
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        marginBottom: 5,
        ...props.style
      }}
    >
      <img src={logo} alt="" style={{width: 24, height: 24}} />

      <div style={{
        flexGrow: 1, 
        padding: '0px 5px', 
        fontSize: '9pt', 
        color: props.selected ? '#FABD03' : '#000000',
        fontWeight: props.selected ? 'bold' : 'normal'
      }}>
        <Typography variant="caption">{props.program.title}</Typography>
      </div>
    </div>
  )
}

ProgramMini.defaultProps = {
  style: {},
  selected: false
}

type Props = { deps: Array<IDepartment>, selectedProgramId: number }

export default function DepList({ deps, selectedProgramId }: Props) {
  const classes = makeStyles((theme: Theme) => createStyles({
    root: {
      marginTop: 15
    }
  }))()

  return (
    <div className={classes.root}>
      <div><Typography variant="subtitle2" style={{ color: '#FABD03', marginBottom: 10 }}>All Programs</Typography></div>
      {deps.map(d => 
        <div style={{marginBottom: 20}}>
          <div style={{fontSize: '9pt', fontWeight: 'bold', color: '#808080', marginBottom: 10}}>
            <Typography variant="caption">{d.title}</Typography>
          </div>

          {d.programs.map(p => 
            <Link href={{ pathname: '/program', query: { programId: p.id} }}>
              <a style={{ textDecoration: 'none' }}>
                <ProgramMini program={p} selected={p.id == selectedProgramId} />
              </a>
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

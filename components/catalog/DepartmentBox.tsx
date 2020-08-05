import * as React from 'react'
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles'
import { Typography, Grid, Paper } from '@material-ui/core'
import IDepartment from '../../server/src/models/catalog/Department'
import Link from 'next/link'
import ProgramSummaryContent from './ProgramSummaryContent'

type Props = { department: IDepartment }

function compare( a: any, b: any ) {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}

export default function DepartmentBox({ department }: Props) {
  const classes = makeStyles((theme: Theme) => createStyles({
    root: {
      marginTop: 40
    },
    title: {
      color: '#FABD03',
      fontSize: '10pt',
      padding: 5,
      fontWeight: 'bold',
      marginBottom: 15,
      borderBottom: '1px solid #DFDFDF'
    },

    programRoot: {
      marginBottom: 20,
      display: 'block',
      textDecoration: 'none',
      
      '&:hover': {
        opacity: 0.8,
        cursor: 'pointer'
      }
    }
  }))()

  const { title, programs } = department

  return (
    <div className={classes.root}>
      <div className={classes.title}><Typography variant="subtitle2">{title}</Typography></div>

      <Grid container>
        {programs.map(p => 
          <Grid item xs={12} md={6}>
            <Link key={p.id} href={{ pathname: '/program', query: { programId: p.id} }}>
              <a className={classes.programRoot}>
                <ProgramSummaryContent program={p} />
              </a>
            </Link>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

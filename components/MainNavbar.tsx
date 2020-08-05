import React from 'react'
import {
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Button, 
  Menu, 
  MenuItem, 
  Divider, 
  Drawer, 
  ListItem, 
  ListItemText, 
  List, 
  ListSubheader,
  Hidden
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Router, { useRouter } from 'next/router'
import IAccountFields from '../server/src/models/accounts/Account'
import { removeCookie } from '../lib/cookie'
import { useAuth } from './AuthContext'
import { useApolloClient } from '@apollo/react-hooks'
import { authCookieName } from '../app.config'
import Link from 'next/link'

function ProfileMenu({ currentUser, onSignout }: { currentUser: IAccountFields, onSignout: Function }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <div style={{ marginLeft: 15 }}>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ color: 'white' }}>
        <AccountCircleIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Typography style={{ padding: '5px 15px', color: '#808080' }}>{currentUser.fullName}</Typography>

        <Divider />

        <MenuItem onClick={() => { handleClose(); Router.push('/myProfile') }}>
          My profile
        </MenuItem>

        <MenuItem onClick={() => { handleClose(); Router.push('/resetPassword') }}>
          Reset my password
        </MenuItem>

        <Divider />

        <MenuItem onClick={() => { handleClose(); onSignout() }}>
          Sign Out
        </MenuItem>
      </Menu>
    </div>
  )
}

function MobileMenu(props: { drawerOpen: boolean, closeDrawer: Function, currentUser?: IAccountFields, onSignout: Function }) {
  const classes = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    menuItem: {
      display: 'block',
      padding: 10,
      marginBottom: 5,
    }
  })()

  const router = useRouter()

  return (
    <Drawer anchor="right" open={props.drawerOpen} onClose={props.closeDrawer()}>
      <div
        className={classes.list}
        role="presentation"
        onClick={props.closeDrawer()}
        onKeyDown={props.closeDrawer()}
      >
        <div>
          <Link href="/"><a className={classes.menuItem}>Home</a></Link>
        
          {props.currentUser &&
            <Link href="/myTrainings"><a className={classes.menuItem}>My Training courses</a></Link>
          }
        </div>

        <Divider />
      
        {props.currentUser ?
          <div>
            <Typography style={{ padding: 10, color: '#808080' }}>{props.currentUser.fullName}</Typography>

            <Link href="/myProfile"><a className={classes.menuItem}>My Profile</a></Link>
            <Link href="/resetPassword"><a className={classes.menuItem}>Reset password</a></Link>
            <a href="#" onClick={() => props.onSignout()} className={classes.menuItem}>Sign Out</a>
          </div> :

          <div>
            <Link href="/signIn"><a className={classes.menuItem}>Sign In</a></Link>
          </div>
        }
      </div>
    </Drawer>
  )
}

function MainNavbar() {
  const classes = makeStyles((theme: Theme) => createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      height: 54,
      display: 'flex',
      alignItems: 'center',
    },
    appBar: {
      display: 'flex', 
      justifyContent: 'center', 
      flexDirection: 'row'
    },
    toolBar: {
      width: '100%',
      maxWidth: 1024
    },
    menuItem: {
      display: 'inline-block',
      marginLeft: 15,
      color: 'white',
      fontWeight: 'bold'
    }
  }))()

  const router = useRouter()
  const client = useApolloClient()
  const { currentUser } = useAuth()

  const [state, setState] = React.useState({ drawerOpen: false })
  const closeDrawer = () => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) 
      return
    
    return setState({ ...state, drawerOpen: false })
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolBar}>
          <div className={classes.title}>
            <Link href="/"><a><img src="/images/logo.png" alt="" /></a></Link>
          </div>

          <Hidden xsDown>
            <Link href="/"><a className={classes.menuItem}>Home</a></Link>
          </Hidden>
          
          {currentUser ? 
            <Hidden xsDown>
              <Link href="/myTrainings"><a className={classes.menuItem}>My Training courses</a></Link>
              <ProfileMenu
                currentUser={currentUser}
                onSignout={() => {
                  client.resetStore()
                  router.push('/')
                  removeCookie(authCookieName)
                }}
              />
            </Hidden> :
          
            <Hidden xsDown>
              <Link href="/signIn"><a className={classes.menuItem}>Sign In</a></Link>
            </Hidden>
          }

          <Hidden smUp>
            <IconButton 
              edge="start" 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="menu"
              onClick={() => setState({ drawerOpen: !state.drawerOpen })}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Hidden smUp>
        <MobileMenu 
          drawerOpen={state.drawerOpen} 
          closeDrawer={closeDrawer} 
          currentUser={currentUser} 
          onSignout={() => {
            client.resetStore()
            router.push('/')
            removeCookie(authCookieName)
          }}
        />
      </Hidden>
    </div>
  )
}

export default MainNavbar

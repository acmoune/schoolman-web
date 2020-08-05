import * as React from 'react'

type Props = { children: React.ReactNode, maxWidth: number }

function Container(props: Props) {
  return (
    <div style={{textAlign: 'center'}}>
      <div style={{maxWidth: props.maxWidth, marginLeft: 'auto', marginRight: 'auto'}}>
        <div style={{margin: '0px 15px', textAlign: 'left'}}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

Container.defaultProps = {
  maxWidth: 1024
} as Props

export default Container

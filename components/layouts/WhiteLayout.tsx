import { FC, PropsWithChildren } from 'react'

export const WhiteLayout: FC<PropsWithChildren>= ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '5px',
        padding: '5px',
    }}>
      <h3>White Layout</h3>
      <div>
        {children}
      </div>

    </div>
  )
}

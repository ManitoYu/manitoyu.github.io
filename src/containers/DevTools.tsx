import * as React from 'react'
import { createDevTools, IDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor toggleVisibilityKey="alt-1" changePositionKey="alt-2" defaultIsVisible={false}>
    <LogMonitor />
  </DockMonitor>
)
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarNav,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import navigation from './_nav'
const TheSidebar = () => {
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
    >
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDropdown,
            CSidebarNavItem,
          }}
        />
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)

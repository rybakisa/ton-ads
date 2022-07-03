import React from 'react'
import './toggle.css'

const Toggle = () => {
    const [switcher, setSwitcher] = React.useState(false);
  return (
    <div onClick={() => setSwitcher(s => !s)} className={'toggle--wrap ' + (switcher ? 'toggle--disabled': null)}><div className='toggle--circle'></div></div>
  )
}

export default Toggle
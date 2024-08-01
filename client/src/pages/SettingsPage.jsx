import { useState } from 'react'
import '../styles/pages/settings-page.scss'
function SettingsPage() {
  const displayNotification = localStorage.getItem('showNotification')
    ? JSON.parse(localStorage.getItem('showNotification'))
    : localStorage.setItem('showNotification', true)
  console.log(JSON.parse(localStorage.getItem('showNotification')))
  const [notify, setNotify] = useState(displayNotification)

  function handleChange(){
    setNotify(!notify)
    localStorage.setItem('showNotification', !notify)
  }
  
  return (
    <div id='settings'>
      <h3>Settings</h3>
      <div>
        <label className='switch'>
          <input
            type='checkbox'
            defaultChecked={notify}
            onChange={handleChange}
          />
          <span className='slider round'></span>
        </label>
        <div>Display Notification</div>
      </div>
    </div>
  )
}
export default SettingsPage

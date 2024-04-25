import '../styles/components/notification.scss'
function Notification(props) {
  return (
    <div
      id='notification'
      className={props.type}
    >
      {props.content}
    </div>
  )
}

export default Notification
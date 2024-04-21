import '../styles/components/white-btn.scss'

function WhiteButton(props) {
  return (
    <button
      className='white-btn'
      style={{ display: props.hide ? 'none' : '' }}
    >
      {props.text}
    </button>
  )
}
export default WhiteButton

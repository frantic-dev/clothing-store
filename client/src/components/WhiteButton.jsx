import '../styles/components/white-btn.scss'

function WhiteButton(props) {
  return (
    <button
      className='white-btn'
      onClick={()=> {props.handleClick && props.handleClick()}}
    >
      {props.text}
    </button>
  )
}
export default WhiteButton

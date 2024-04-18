import '../styles/pages/form-page.scss'
import '../styles/components/form.scss'
function FormPage(props){
  return(
    <div className="form-page">
      <img
        src={props.bg}
        alt='a fashion model'
      />
      {props.form}
    </div>
  )
}
export default FormPage
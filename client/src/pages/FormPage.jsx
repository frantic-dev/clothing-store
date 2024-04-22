import '../styles/pages/form-page.scss'
import '../styles/components/form.scss'

// reusable component for pages with login, signup, forgot password forms
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
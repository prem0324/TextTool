

function Alert(props) {
    const setTextType=(word)=>{
       const lower = word.toLowerCase();
       return lower.charAt(0).toUpperCase()+lower.slice(1); 
    }


  return (
    props.alert &&
    <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          {setTextType(props.alert.type)} : <strong>{props.alert.msg}</strong>

      </div>
    </div>
  );
}

export default Alert;

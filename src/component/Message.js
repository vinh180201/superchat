import { useFirebase } from "./FirebaseProvider";
import Avatar from '@mui/material/Avatar';

const Message = (props) => {
  const { createdAt, fullname, icon, text } = props.message;

  const messageClass = true ? 'sent' : 'received';
  const displayName = "a".toUpperCase()

  return (
  <>
    <div className={`message ${messageClass}`}>
      <Avatar
        style={{backgroundColor:"#9eaecc"}}
        children={<p style={{color: "#04060b", fontSize: "18px"}}>A</p>}
      >
        
      </Avatar>  
      &nbsp; 

      <p className="message_text"> {text}</p>
    </div>
  </>
  )
}

export default Message
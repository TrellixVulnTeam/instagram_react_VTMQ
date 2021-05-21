import {useState} from 'react';
import DefaultInput from '../../../global_components/DefaultInput';

const EmailForm = ({setFirstFormIsOpen}) => {

  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={(e) => {validateDataSend(e, setFirstFormIsOpen)}}>
      <DefaultInput
        value={emailOrNumber}
        onChange={setEmailOrNumber}
        classOfContainer="smaller-margin-bottom"
        placeholder="Mobile Number or Email"
      />
      <DefaultInput
        value={fullname}
        onChange={setFullname}
        classOfContainer="smaller-margin-bottom"
        placeholder="Full name"
      />
      <DefaultInput
        value={username}
        onChange={setUsername}
        classOfContainer="smaller-margin-bottom"
        placeholder="Username"
      />
      <DefaultInput
        value={password}
        onChange={setPassword}
        classOfContainer="small-margin-bottom"
        type="password"
        placeholder="Password"
      />
      <input
        type="submit"
        value="Sing up"
        className="main-button"
      />
    </form>
  )
}


function validateDataSend(e, setFirstFormIsOpen) {
  e.preventDefault();
  setFirstFormIsOpen(false);
}


export default EmailForm;
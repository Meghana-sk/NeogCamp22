import './App.css';
import {TwitterCharCount} from "./twitterCharCountComponent";
import {PasswordMatchChecker} from "./passwordMatchChecker";

function App() {
  return (
    <>
    <p>Q1. See the Twitter post component. It gives you an indicator of the character count. Replicate that behavior.</p>
  <TwitterCharCount/>
  <p>Q2. Any signup form, password reset form has this functionality. Take two passwords from user. Show error only if both passwords don't match.</p>
  <PasswordMatchChecker/>
  </>
  );
}

export default App;

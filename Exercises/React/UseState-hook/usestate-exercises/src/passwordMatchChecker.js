//Q: password match
// Any signup form, password reset form has this functionality. Take two passwords from user. Show error only if both passwords don't match.

import { useState } from "react";

function PasswordMatchChecker() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pwStatus, setPwStatus] = useState(false);

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
        // pwMatchChecker();
        console.log("pw",event.target.value, typeof event.target.value)
    }

    const confirmPasswordChangeHandler = (event) => {
        setConfirmPassword(event.target.value);
        console.log("confirm pw",event.target.value, typeof event.target.value)
        pwMatchChecker();
    }

    function pwMatchChecker() {
        console.log("checking match", password, confirmPassword)
        setPwStatus(password === confirmPassword);
    }
    return (<>
        <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" onChange={passwordChangeHandler} value={password}/>
        </div>
        <div>
            <label htmlFor="confirm-password">Confirm password</label>
            <input type="text" id="confirm-password" onChange={confirmPasswordChangeHandler} value={confirmPassword}/>
            <p>{pwStatus && (pwStatus ? null : "Please enter password to match")}</p>
        </div>
    </>);
}

export {PasswordMatchChecker};
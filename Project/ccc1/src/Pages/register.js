import '../Assets/Css/register.css'
import { Link } from 'react-router-dom';
const Signup=()=>
{
    const signup = () => {
        let a = document.getElementById("name").value;
        alert(a + " Successfully Registered");
      };
    return(
        <>
        <section>
        <div class="form-box">
            <div class="form-value">
                <form onSubmit={signup}>
                    <h2>Register</h2>
                    <div class="inputbox">
                        <ion-icon name="person-outline"></ion-icon>
                        <input type="text" id="name" required autoComplete="off"/>
                        <label for="name">UserName</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="password" required autoComplete="off"/>
                        <label for="password">Passcode</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="confirmPassword" required autoComplete="off"/>
                        <label for="confirmPassword">Confirm Passcode</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="location-outline"></ion-icon>
                        <input type="text" id="city" required autoComplete="off"/>
                        <label for="city">City</label>
                    </div>
                    
                    <button>Sign Up</button>
                    <div class="register">
                        <p>Do you have an existing account? <Link to="/">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    </>
    )
}

export default Signup;
import '../Styles/Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../Pages/Footer';
import {Toaster,toast} from 'react-hot-toast';
const Login=()=>
{
    const navigate = useNavigate();
    const Signin = () => {
        let a = document.getElementById("name").value;
        let b = document.getElementById("password").value;
        if (a !== "shri" && b !== "shri123") {
            // alert("UserName and Password Invalid");
        } else if (a !== "shri") {
            alert("UserName Invalid!!");
            toast.success('Successfully toasted!')
        } else if (b !== "shri123") {
            alert("Password Invalid");
        }
        else if(a==="shri" && b==="shri123")
        {
            navigate('/home');
        }
    };
    return(
        <>
              <section>
           
        <div class="form-box">
            <div class="form-value">
                <form onSubmit={Signin}>
                    <h2>Login</h2>
                    <div class="inputbox">
                        <ion-icon name="person-outline"></ion-icon>
                        <input type="text " id="name" required autoComplete="off"/>
                        <label for="">UserName</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="password" required autoComplete="off"/>
                        <label for="">Password</label>
                    </div>
                    <a href="#">
                        <button type="submit">Log in</button>
                      </a>
                    <div class="register">
                        <p>Don't have a account <Link to="/signup">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    <section>
        <div class="form-box">
            <div class="form-value">
                <form onSubmit={Signin}>
                    <h2>Login</h2>
                    <div class="inputbox">
                        <ion-icon name="person-outline"></ion-icon>
                        <input type="text " id="name" required autoComplete="off"/>
                        <label for="">UserName</label>
                    </div>
                    <div class="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="password" required autoComplete="off"/>
                        <label for="">Password</label>
                    </div>
                    <a href="#">
                        <button type="submit">Log in</button>
                      </a>
                    <div class="register">
                        <p>Don't have a account <Link to="/signup">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

        <section>
            <div>
            </div>

        </section>
        <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
        </>
        
    )
}



export default Login;
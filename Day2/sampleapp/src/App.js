import './Assets/Css/style.css'


function App(){
    return(
        <div>
            <form class="container shadow" >
                <h3 >Log In</h3>
                <input type="text" name="username" id="name" placeholder="Username" required class="name-int"/>
                
                <input type="password" name="password" id="pass1" placeholder="Passcode"required  class="name-int"/>

                <input type="email" name="email" id="em" placeholder="Email"required class="name-int"/>

                <input type="number" name="number" id="no" placeholder="Mobile Number"required class="name-int"/>
                
                <input type="date" name="date" id="dt" placeholder="Mobile Number"required  class="name-int"/>
                
                <button type="submit"  class="button">Register</button>
        </form>

       

        
             </div>

    )
}
export default App 
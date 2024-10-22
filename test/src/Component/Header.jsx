import "./Header.css"

function Header() {
    return(
        <div className="Navbar">
          
          <div className="cool">
          <img className="ima" src="public/logo.svg"  alt="" />
          <img className="ima" src="public/logo chat.svg"  alt="" />
            <p>Chatbolt.ai  Create your own ChatGPT catbot trained <br />with your data from any file or website.  <a href="#">Try for Free</a></p>
          </div>

          <div className="Tools">
            <h3>Tools </h3>
            <p>Go Pro</p>
            <button className="Signin">Sign in</button>
            <button className="Signup">Sign up</button>
          </div>

        </div>
    )
}
export default Header
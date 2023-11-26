// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './assets/icon/css/all.css'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
     <nav>
        <div className="logo"><img src="image/logo.jpeg" alt="kataklimit"/></div>
        <div className="list">
            <div className="li">ABOUT</div>
            <div className="li">SERVICES</div>
            <div className="li">FOLLO</div>
            <div className="li">BLOG</div>
            <div className="li">CONTACT</div>
        </div>
    </nav>
    <div className="picture"><img className="img4" src="image/pic1.jpg" alt="image"/></div>
    <div className="box">
        <div className="word1"><h1>Welcome!</h1></div><hr/>
        <div className="word2">
            <p><span>vignesh</span> for more info about free website template created by TemplateMonster.com This is a Boostrap that goes with several
                layout options (for desktop, tablet, smartphone landscape and portrait) to fit all popular screen resolutions. the PSD
                source files of this template are available for free the registered members of TemplateMonster.com Feel free to get them!
            </p>
        </div>
    </div>
    <div className="box1">
        <div className="section1">
            <div className="sec1">
                <h3>Fashion</h3>
                <div className="photo"></div>
                <h4>At vero et accusamus et iusto</h4>
                <p>odio dignissimos ducimus qui blanditils</p>
                <p>praesentium voluptatum.</p>
                <button>Read More</button>
            </div>
            <div className="sec2">
                <h3>Nature</h3>
                <div className="photo1"></div>
                <h4>Deleniti atque corrupi quos</h4>
                <p>Dolores et ques molestias excepturi sint</p>
                <p>occaecati cupiditate non provident</p>
                <button>Read More</button>
            </div>
          </div>
          <div className="section2">
             <div className="sec3">
                <h3>Love story</h3>
                <div className="photo2"></div>
                <h4>similique sunt in culpa qui officia</h4>
                <p>Deserunt mollitia animi, id est laborum</p>
                <p>et dolorum fuga.</p>
                <button>Read more</button>
              </div>
            <div className="sec4">
                <h3>Fine art</h3>
                <div className="photo3"></div>
                <h4>similique sunt in culpa qui officia</h4>
                <p>Deserunt mollitia animi,id est laborum</p>
                <p>et dolorum fuga.</p>
                <button>Read More</button>
            </div>
        </div>
    </div>
    <div className="box-side">
        <div className="left-side">
            <div className="h2"><h2>Shortly about me</h2></div>
            <div className="side">
                <div className="pic"></div>
                <div className="pra">
                    <p id="pra">Sed ut perspictis unde omnis natus error volupatem accus antium doloue laudantium, totam rem.</p>
                    <p>Aperiam, eaque ipsa quae ab illoveritatis et beatae vitae dicta suntexplicabo nemo enim ipsamvoluptatem quia voluptas sitaspernatur aut odit aut fugit, sed</p><hr/>
                        <div className="name">
                            <div className="f1">
                                <div>Campaigns</div>
                                <div>Portraits</div>
                                <div>Fashion</div>
                                <div>Fine Art</div>
                            </div>
                            <div className="f2">
                                <div>Advertising</div>
                                <div>Lifestyle</div>
                                <div>Love story</div>
                                <div>Landscapes</div>
                            </div>        
                        </div>
                </div>
            </div>
        </div>
        <div className="right-side">
            <div className="main"><h2>Lastest photoshoots</h2></div>
            <div className="main2">
                <img src="image/download (1).jpg" alt=""/>
                <img src="image/download (1).jpg" alt=""/>
                <img src="image/download (1).jpg" alt=""/>
                <img src="image/download (1).jpg" alt=""/>
                <img src="image/download (1).jpg" alt=""/>
                <img src="image/download (1).jpg" alt=""/>
                <img src="image/download (1).jpg" alt=""/>
                <img src="image/download (1).jpg" alt=""/>
                <img src="image/download (1).jpg" alt=""/>
                <img src="image/download (1).jpg" alt=""/>
                <img src="image/download (1).jpg" alt=""/>
                <img src="image/download (1).jpg" alt=""/>
            </div>
        </div>
    </div>
    <footer>
        <div className="foot1"><p>&copy;Copyright</p></div>
        <div className="foot2">
            <i class="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-google"></i>
            <i className="fa-brands fa-twitter"></i>
        </div>
    </footer>
       </>
  )
}

export default App

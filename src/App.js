// importing React and destructuring Component from react
import React, { Component } from 'react';
// importing the CSS file
import './App.css';
//BrowserRouter as its alias Router
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch
} from 'react-router-dom';


let Home = () =>{return(
  <div>Wot
  <Footer />
  </div>
)}

let four0four = () => {return <div>404! Page not found</div> }
// let RecipeDetail = ({match}) => {return <div>Recipe Details {match.params.food}</div>}
let AboutAllOfUs = () => { return (<div className='parent-container'><div id ='dash'><h1>Dashiell Lumas</h1>
  <p>Energetic, detail-oriented, solutions-driven web developer.
    As a web developer, I look for ways to improve the efficiency of applications.
    I identify problems, and more importantly, dedicate myself to finding the best, most timely solution.
    When I build out the features of any application, I go step by step and implement details that are both replicable and easy to troubleshoot.</p>
    <img src='http://www.writeups.org/wp-content/uploads/Dash-The-Incredibles-Dashiell-Parr-a.jpg' />
  </div>
    <div id='ed'><h1> Edmond O'Connell </h1>
  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laborum, assumenda at recusandae, odio placeat, explicabo labore, vel quod facilis incidunt alias ea optio rem hic aliquid soluta sequi repellendus.</p>
  <img src='https://slack-imgs.com/?c=1&url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F2825299887%2F4e94383ba88034fc1e6212569a0cbf9d.jpeg' />
  </div>
  <div id='kyle'>
    <h1>Kyle Frable</h1>
    <p>Now, this is a story all about how
  My life got flipped-turned upside down
  And I'd like to take a minute
  To sit right there
  I'll tell you how I became the prince of a town called Bel Air

  In west Philadelphia born and raised
  On the playground was where I spent most of my days
  Chillin' out maxin' relaxin' all cool
  And all shootin some b-ball outside of the school
  When a couple of guys who were up to no good
  Started making trouble in my neighborhood
  I got in one little fight and my mom got scared
  She said 'You're movin' with your auntie and uncle in Bel Air'

  I begged and pleaded with her day after day
  But she packed my suit case and sent me on my way
  She gave me a kiss and then she gave me my ticket.
  I put my Walkman on and said, 'I might as well kick it'.

  First class, yo this is bad
  Drinking orange juice out of a champagne glass.
  Is this what the people of Bel-Air living like?
  Hmmmmm this might be alright.

  But wait I hear they're prissy, bourgeois, all that
  Is this the type of place that they just send this cool cat?
  I don't think so
  I'll see when I get there
  I hope they're prepared for the prince of Bel-Air

  Well, the plane landed and when I came out
  There was a dude who looked like a cop standing there with my name out
  I ain't trying to get arrested yet
  I just got here
  I sprang with the quickness like lightning, disappeared

  I whistled for a cab and when it came near
  The license plate said fresh and it had dice in the mirror
  If anything I could say that this cab was rare
  But I thought 'Nah, forget it' - 'Yo, holmes to Bel Air'

  I pulled up to the house about 7 or 8
  And I yelled to the cabbie 'Yo holmes smell ya later'
  I looked at my kingdom
  I was finally there
  To sit on my throne as the Prince of Bel Air</p>
  <img src='http://images6.fanpop.com/image/photos/32500000/Young-Will-Smith-will-smith-32538084-359-500.jpg' />
</div>
<Footer />
</div>)}

let Projects = () => {return <div> <h1>Projects</h1>
  <div>
  <a href= "https://eoconnell44.github.io/Matching-game/">Matching-Game</a>
  </div>
  <div>
  <a href= "https://kfrable.github.io/Kfrable.picturePuzzle.github.io/">Picture Puzzle</a>
  </div>
  <div>
  <a href= "https://git.generalassemb.ly/pages/Dashy10/Lumas_project1/">dog Chaser</a>
  </div>
  <Footer />
 </div>}

 let Footer = () => <div className='footer'> Contact Us </div>


class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <div id="wrapper">
      <NavLink to="/home">Home</NavLink>&nbsp;&nbsp;
      <NavLink to="/about">About Us</NavLink>&nbsp;&nbsp;
      <NavLink to="/projects" activeClassName="iamlit">Projects</NavLink>&nbsp;&nbsp;
      {/*Route takes two properties; path && component  */}
      {/*give it home it will give you Matrix  */}
      <Switch>
      <Route path='/about' component={AboutAllOfUs}></Route>
      <Route path="/home" exact component={Home}></Route>
      {/*this is you making a four0four page  */}
      <Route path="/projects" exact component={Projects}></Route>
      <Route path="/*" exact component={four0four}></Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}
}

export default App;


import './App.css';
import image from './plants.jpg';
function App() {
  return (
    
    <div className="App">
      <div style={{border:'solid 1 black', maxWidth:'100vw'}}>

<h1 className="title">Mother Nature</h1>

<br />
<form>
 <h2>Be a member</h2>
 <label for="name">your name please</label>
 <input type="text" placeholder="user name"></input><br/>
 <label for="email">your email adress </label>
 <input type="email" placeholder="member@gmail.com"></input><br/>
 <button type="submit">Submit</button>
 </form>
  <section className="firstp">
  <p className="par"><h1>Planting is important</h1>Trees help to combat global warming by absorbing carbon dioxide, removing and storing carbon while releasing oxygen back into the air. They also reduce wind speeds and cool the air as they lose moisture and reflect heat upwards from their leaves.</p>
<img src={image} alt='quote' />
</section>
<br />
<section className="firstp">
<p className="par"> <h1>Save animals</h1>Plants and animals maintain the health of an ecosystem. And, when species become endangered, it's a sign that an ecosystem is out of balance. But the balance within an ecosystem isn't always easy to maintain: the loss of one species often triggers the loss of others. ... </p>
<img src="/image/dog_margueritte.jpg" />
</section>
</div>
<section className="par2">
<img src="/image/juliaRoberts.jpg" className="julia" />
<p >“I have fed species greater than you, and I have starved species greater than you … I am prepared to evolve. Are you?” Julia Roberts
   </p>
   
   </section>
<video width="500" height="400" controls>

<source src="natureIsSpeaking.mp4" type="video/mp4" />

</video>

    </div>
  );
}

export default App;
var valeur = prompt("you are already a member of an organization that defends nature .. thanks for mention it!" );
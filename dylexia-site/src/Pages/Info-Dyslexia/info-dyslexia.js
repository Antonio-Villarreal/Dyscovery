import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import "./info-dyslexia.css";
import img1 from "./Images/Albert Einstein.jpg";
import img2 from "./Images/Dyslexia_image.jpg";

const Information = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="App"></div>
      <h1>Learn More:</h1>
      <h3>What is Dyslexia?</h3>
      <div>
        <p>
          Reading is a complex process! It requires our brains to connect
          letters to sounds, put those sounds in the right order, and pull the
          words together into sentences and paragraphs we can read and
          comprehend. People with dyslexia have trouble matching the letters
          they see on the page with the sounds those letters and combinations of
          letters make. And when they have trouble with that step, all the other
          steps just become instantly harder. Dyslexic children and adults
          struggle to read fluently, spell words correctly and learn a second
          language, among other challenges. But these difficulties have no
          connection to their overall intelligence. In fact, dyslexia is an
          unexpected difficulty in reading in an individual who has the
          intelligence to be a much better reader. While people with dyslexia
          are slow readers, they often, paradoxically, are very fast and
          creative thinkers with strong reasoning abilities.
        </p>
        <img className="Images" src={img2} alt=""></img>
        <p>
          Furthermore, dyslexia is one of the most common learning disabilities
          and is characterized by specific difficulties in learning to read and
          write despite normal intelligence, schooling and socio-economic
          opportunities and in absence of other impairments (e.g. sensory or
          neurological impairments). These difficulties in the acquisition of
          literacy skills are typically associated with problems in related
          abilities including phonological awareness, lexical retrieval, and
          verbal short-term memory. Also, deficits in individuals with dyslexia
          may include other domains of language (e.g. inflectional morphology
          and syntax; and non-linguistic cognitive skills such as visual and
          auditory processing, attention and motor functioning.
        </p>
      </div>
      <div>
        <h3>Statistics Concered With Dyslexia:</h3>
      </div>
      <p>
        To speak in terms of statistics, dyslexia affects approximately every
        one in five students, which is around 20% of the general population, or
        more than 40 million people in the United States. However, only two
        million people have been diagnosed. In addition, dyslexia affects men
        and women from all ethnic and socioeconomic areas in the world at about
        the same rate.
      </p>
      <div>
        <h3>FUN FACT!</h3>
        <p>
          Albert Einstein, Tim Tebow, Steven Spielberg, and Whoopi Goldberg were
          all diagnosed with dyslexia!
        </p>
      </div>
      <div>
        <img className="Images" src={img1} alt=""></img>
      </div>
      <div>
        <h3>More Information!</h3>
      </div>
      <p>
        For more information, here is a video that delves deeper into dyslexia
        in a very interesting and descriptive way!
      </p>
      <p><a href="https://youtu.be/zafiGBrFkRM">Click here</a></p>
      
      
    </div>
  )
}

export default Information

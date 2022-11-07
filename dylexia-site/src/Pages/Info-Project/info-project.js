import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './info-project.css'

const Info_Project = () => {
  return (
    <div>
        <Navbar/>
        <div>
        <div className="App">
          <h1>Project Information</h1>
        </div>
        <div className="App1">
          <h3>Introduction:</h3>
          <p>
            Dyslexia is one of the most common learning disabilities and is
            characterized by specific difficulties in learning to read and write
            despite normal intelligence, schooling and socio-economic
            opportunities and in absence of other impairments (e.g. sensory or
            neurological impairments). Affecting more than 10% of the population,
            dyslexia is a specific learning disability with neurobiological
            origin. It is an unexpected difficulty in reading in an individual who
            has the intelligence to be a much better reader.
          </p>
          <p>
            Due to dyslexia being a common learning disorder in people, it
            unfortunately often goes undiagnosed. In addition, dyslexia starts to
            appear during childhood, so, with the aim to educate and diagnose, we
            have come up with a redesigned gamified test that detects dyslexia in
            children with an accuracy range of 80%-85%.
          </p>
          <p>
            To do that, we have incorporated machine learning technology to detect
            dyslexia in children that picks up its conclusion from a dataset
            pulled from a large-scale research in Spain by a group that has
            developed a similar test for their Spanish demographic.
          </p>
          <div>
            
              <h3>Method:</h3>
              <p>
                We have designed four interactive game excersizes made by our team
                that work to detect dyslexia. Previous data pulled from the
                dataset along with our machine learning model work hand in hand to
                predict whether a child has dyslexia or not.
              </p>
          
            <div>
              <h3>Content Design:</h3>
              <p>
                We designed the test using two methods. One method was to track
                quick detection of a certain letter over a pool of similar lookng
                letters that aims to test if people have dyslexia because they
                have a harder time to process letters compared to people that do
                not have dyslexia. The second method exists to test whether a
                person is able to form a word correctly or is able to realize that
                a word is spelled incorrectly, these excersizes target lexical
                knowledge, word identification, reading comprehension, and other
                linguistics skills such as phonological, syntactic and semantic
                awareness.
              </p>
            </div>
            <div>
              <h4>Game 1</h4>
              <p>
                Game 1 focuses on clicking a certain letter from a pool of similar
                looking letters. In our game, we used the letters b, d, q, and p
                on a 5x5 grid due to their similarity, which would ideally work
                against someone that has dyslexia. With a time limit and an
                objective to get as many correct questions possible in the alotted
                time, someone that deals with dyslexia can find this excersize to
                be especially difficult, which causes them to either get the
                questions incorrectly or take more time to figure out which letter
                to correctly choose.
              </p>
              <h4>Game 2</h4>
              <p>
                Game 2 works very similarly to Game 1, with a little twist. Game 2
                also incorporates the use of similar letters on a 5x5 grid to
                challenge the individual over a period of time. However, this
                time, there are only two letters, F and E. The game asks the
                individual to pick the only one letter 'E' out of a full pool of
                the letter 'F'. This progressively challenges the individual due
                to the fact that the elements are harder to distinguish, because
                they are phonetically and orthographically more similar.
              </p>
            
              <h4>Game 3</h4>
              <p>
                Game 3 shifts on to our next method of detecting dyslexia, where
                we have designed a scramble of five letters and the individual
                has to re-order them in a way that builds a real word. This
                tests their word identification, lexical knowledge, and other
                linguistic skills to figure out whether they are able to
                accurately form words over a certain period of time.
              </p>
                <h4>Game 4</h4>
                <p>
                  Like Game 2, Game 4 ties closely to Game 3 but in a
                  progressively more challenging way. Game 4 consists of having
                  the individual build the correct word by eliminating one added
                  letter in the word. This determines whether the individual is
                  able to correctly identify words using their lexical knowledge.
                </p>
              
              <div>
                <h3> Dependent Measures: </h3>
                <p>
                  To quantify task performance, we collected the following
                  dependent measures for each question: (i) number of Clicks; (ii)
                  number of correct answers (Hits); (iii) number of incorrect
                  answers (Misses); (iv) Score defined as sum of Hits per set of
                  exercises; (v) Accuracy, defined as the number of Hits divided
                  by the number of Clicks; (vi) Missrate, defined as the number of
                  Misses divided by the number of Clicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info_Project

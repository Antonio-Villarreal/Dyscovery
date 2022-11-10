# Dyscovery

![Homepage](https://github.com/Antonio-Villarreal/Dyscovery/blob/main/Images/Home.png)

# Table of Contents
- [Inspiration](#inspiration)
- [What is Dyscovery?](#What-is-Dyscovery?)

## Inspiration
We were tasked with creating a project that improves patient or healthcare education. When we first started collaborating as a team one of the ideas that came up was Dyslexia, which is one of the most common learning disabilities in children. We were able to find research and a dataset that we felt could improve patient education surrounding the most common learning disability in children, Dyslexia. Within the United States, about 14.5 to 43.5 million children and adults have dyslexia and we knew we could help raise awareness about it through our project.

## What is Dyscovery?
Our website provides information about the condition and predicts if a user is Dyslexic by replicating four distinct word games from a prominent dyslexia medical study. We use indicators from the user playing the games (including clicks, hits, misses, overall accuracy, and time taken) and their demographics. Using a Machine Learning Decision Tree to perform the prediction, the model can predict dyslexia with 85.19% accuracy and sends that result to the user using a REST API.

**Game 1**: Focuses on clicking a certain letter from a pool of similar-looking letters. In our game, we used the letters b, d, q, and p on a 5x5 grid due to their similarity, which would ideally work against someone that has dyslexia. With a time limit and an objective to get as many correct questions as possible in the allotted time, someone who deals with dyslexia can find this exercise to be especially difficult, which causes them to either get the questions incorrectly or take more time to figure out which letter to correctly choose.  

<p align="center">
  <img width="460" height="300" src="https://github.com/Antonio-Villarreal/Dyscovery/blob/main/Images/Game1.png">
</p>

**Game 2**: Incorporates the use of similar letters on a 5x5 grid to challenge the individual over a period of time. However, this time, there are only two letters, F and E. The game asks the individual to pick only one letter 'E' out of a full pool of the letter 'F'. This progressively challenges the individual due to the fact that the elements are harder to distinguish because they are phonetically and orthographically more similar.  

<p align="center">
  <img width="460" height="300" src="https://github.com/Antonio-Villarreal/Dyscovery/blob/main/Images/Game2.png">
</p>

**Game 3**: Shifts on to our next method of detecting dyslexia, where we have designed a scramble of five letters and the individual has to re-order them in a way that builds a real word. This tests their word identification, lexical knowledge, and other linguistic skills to figure out whether they are able to accurately form words over a certain period of time.  

<p align="center">
  <img width="460" height="300" src="https://github.com/Antonio-Villarreal/Dyscovery/blob/main/Images/Game3.png">
</p>

**Game 4**: Consists of having the individual build the correct word by eliminating one added letter in the word. This determines whether the individual is able to correctly identify words using their lexical knowledge.  

<p align="center">
  <img width="460" height="300" src="https://github.com/Antonio-Villarreal/Dyscovery/blob/main/Images/Game4.png">
</p>

## How we built it
This React Website was built using JavaScript, HTML, and CSS and associated libraries such as Bootstrap and Fluent UI. We set up a Python REST API Server using Fast API and Uvicorn to deploy our Decision Tree Machine Learning Model (created initially in Jupyter Notebook). We used Pickle, another Python library, to train and reload our model.

## Challenges we ran into
The biggest challenge we had was setting up the backend. The core part of our project is to take game data from the Frontend, send it to be processed by the Machine Learning Model, and communicate it back to the user through the Frontend. We began attempting to use Flask, a python based web framework, but after much difficulty, we decided to use FastAPI which enabled us to easily build a REST API server to perform POST requests.

## Accomplishments that we're proud of
Since this is our first hackathon experience being able to develop our own project from the whiteboard to the code was an amazing experience. Each of us brought unique ideas to the table, especially since we are a multidisciplinary team, and learned a lot of new skills which was the most important part. Seeing people's reaction's to our work and knowing we developed something that has positive intentions was the thing we were the proudest of.

## Team
Antonio Villarreal - https://www.linkedin.com/in/antoniovillarreal2024/  
Sanjay Taylor - https://www.linkedin.com/in/sanjaytaylor/  
Vincent Lin - https://www.linkedin.com/in/vincent-lin-uf/  
Michael Logsdon - https://www.linkedin.com/in/michaellogsdon1/  
Walid Barazenji - https://www.linkedin.com/in/walid-barazenji/  

<p align="center">
  <img width="460" height="300" src="https://github.com/Antonio-Villarreal/Dyscovery/blob/main/Images/Team.jpg">
</p>

## Dataset
Dataset on Kaggle: https://www.kaggle.com/datasets/luzrello/dyslexia

## Medical Study
L. Rello, R. Baeza-Yates, A. Ali, J. P. Bigham, and M. Serra, “Predicting risk of dyslexia with an online gamified test,” PLOS ONE, vol. 15, no. 12, 2020. 

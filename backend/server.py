import uvicorn
import pickle
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import pickle

app = FastAPI()


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

with open("model_pickle", 'rb') as f:
    mod = pickle.load(f)

@app.get("/")
def read_root():
    return {"data": "Welcome to the Dyslexia Predictor API"}

# Setting up prediction route
x = [1,7,2,2,0,2,1,0,3,3,0,3,1,8,5,3,2,3,0,6,0,4,9,1,0.1,0.1]

@app.post("/predict")
def predict(array: list):
    print(array)
    array = np.asarray(x).astype('float32')
    loaded_results = mod.predict([x])
    loaded_results = np.asarray(loaded_results).astype('int32')
    print(loaded_results)
    return loaded_results.tolist()

# Configuring the server host and port

with open("model_pickle", 'rb') as f:
    mod = pickle.load(f)
    result = mod.predict([x])

  
      
# Running app
if __name__ == '__main__':
    uvicorn.run(app, port=8080, host='0.0.0.0')

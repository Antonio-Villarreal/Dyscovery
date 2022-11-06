import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

x = [1,7,2,2,0,2,1,0,3,3,0,3,1,8,5,3,2,3,0,6,0,4,9,1,0.1,0.1]

def predict(prediction_data):
    dyslexia_data = pd.read_csv("Dys_Cleanedtest.csv")
    X = dyslexia_data.drop(columns=['Dyslexia'])
    y = dyslexia_data['Dyslexia']
    model = DecisionTreeClassifier() #create instance of DecisionTree
    model.fit(X, y)
    predict = model.predict([prediction_data]) #this is where inputs can be put to predict
    return predict

print(predict(x))





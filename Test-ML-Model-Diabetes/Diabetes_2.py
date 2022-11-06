#!/usr/bin/env python
# coding: utf-8

# In[91]:


import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

diabetes_data = pd.read_csv("diabetes.csv")
X = diabetes_data.drop(columns=['Outcome'])
y = diabetes_data['Outcome']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2) #test size splits data (20% of data will be used for testing model accuracy)


model = DecisionTreeClassifier() #create instance of DecisionTree
model.fit(X_train, y_train)


predict = model.predict([[6, 148, 72, 35, 0, 33.6, 0.627, 50]]) #this is where inputs can be put to predict
predict
predictions = model.predict(X_test)

score = accuracy_score(y_test, predictions) #score is the accuracy of the model
score


# In[82]:


diabetes_data.head()


# In[ ]:





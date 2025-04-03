import streamlit as st
import pandas as pd
import requests  # To make API requests

# Function to get data from the API
def get_prediction_data():
    url = "http://127.0.0.1:5000/linreg/predict?comodity=cabai&num_days=30"  # API URL
    response = requests.get(url)  # Making the GET request
    return response.json()  # Returning the response as JSON

# Get the data from the API
data = get_prediction_data()

# Extract the prediction data
dates = list(data["predictions"].keys())
all_provinces = [data["predictions"][date]["All Provinces"] for date in dates]
jakarta = [data["predictions"][date]["Jakarta"] for date in dates]
west_java = [data["predictions"][date]["West Java"] for date in dates]

# Create a DataFrame for easy plotting
df = pd.DataFrame({
    "Date": dates,
    "All Provinces": all_provinces,
    "Jakarta": jakarta,
    "West Java": west_java
})

# Set the Date column as the index
df.set_index("Date", inplace=True)

# Display the Streamlit page
st.title("Prediction for Cabai")
st.subheader("Visualization of predictions for the next 10 days.")

# Display the line chart using Streamlit's built-in function
st.line_chart(df)

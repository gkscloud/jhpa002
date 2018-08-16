import os
import json

def preprocess():
    
    data = []
    with open('C:\Temp\portauto\details_20180815-055329.json') as f:    
        data = json.load(f)

    for item in data:
        image_main = item["image_main"][0]
        item["image_main"] = image_main

    with open("details_20180815-055329_processed.json", 'w') as f:
        json.dump(data, f)
    
    #read through json files and change properties or add properties as needed.
    pass

if __name__ == '__main__':
    preprocess()
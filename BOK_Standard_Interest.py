from audioop import add
from types import NoneType
import requests
import datetime
from dateutil.relativedelta import *
import time
import os
import pandas as pd
import json
from urllib import parse
from fredapi import Fred

path = os.path.dirname( os.path.abspath(__file__) )
temp_path = path.split('\\')

fred_key = "a7d5a17c8b520a7802d3c905fca10131"
bok_key = "570IL3KK1XG2THUF38RC"

#기준시점 선정
now = datetime.datetime.now()
date_7days_ago = now - datetime.timedelta(days=7)
date_3years_ago = now -relativedelta(years=3)

str_now = now.strftime("%Y%m%d")
str_date_7days_ago = date_7days_ago.strftime("%Y%m%d")

str_now_m = now.strftime("%Y%m")
str_date_3years_ago = date_3years_ago.strftime("%Y%m")

def save_BOK_interest_info():
    print("Start to get BOK interest")
    url = 'https://ecos.bok.or.kr/api/StatisticSearch/' + bok_key + '/json/kr/1/30/722Y001/D/' + str_date_7days_ago + '/' + str_now + '/0101000'
    #url = 'https://ecos.bok.or.kr/api/StatisticSearch/' + bok_key + '/json/kr/1/100/722Y001/M/' + str_date_3years_ago + '/' + str_now_m + '/0101000'
    response = requests.get(url)
    #pars = xmltodict.parse(response.text)
    #jsonDump = json.dumps(pars)
    result = json.loads(response.text)
    standard_interest_7day = result['StatisticSearch']['row']    

    df = pd.DataFrame(standard_interest_7day)
    df['GENERATE'] = str(now)
    df.drop(['STAT_CODE', 'STAT_NAME', 'ITEM_CODE1', 'ITEM_NAME1', 'ITEM_CODE2', 'ITEM_NAME2', 'ITEM_CODE3', 'ITEM_NAME3', 'ITEM_CODE4', 'ITEM_NAME4', 'UNIT_NAME'], axis=1, inplace=True)
    df['TIME'] = df['TIME'].str[0:4] + "-" + df['TIME'].str[4:6] + "-" + df['TIME'].str[6:8]
    df.to_json(path + "/BOK_standatd_interest.json", force_ascii=False, indent=4)
    print("BOK interest saved at " + str(now))

def save_FED_interest_info():
    print("Start to get FED interest")

    #https://api.stlouisfed.org/fred/series/observations?series_id=DFEDTARU&api_key=a7d5a17c8b520a7802d3c905fca10131&file_type=json&frequency=bw&observation_start=2019-10-14&observation_end=2022-10-01
    data_result = pd.DataFrame()
    fred = Fred(api_key=fred_key)
    data = fred.get_series('DFEDTARU')

    data = data[data.index > date_7days_ago]
    data_result['DATE'] = data.index.strftime('%Y-%m-%d').tolist()
    data_result['INTEREST'] = data.values.tolist()
    data_result['GENERATE'] = str(now)

    #data_result.to_csv(path + "/FED_standatd_interest.csv", encoding='cp949')
    data_result.to_json(path + "/FED_standatd_interest.json", force_ascii=False, indent=4)
    print("FED interest saved at " + str(now))

save_BOK_interest_info()
save_FED_interest_info()


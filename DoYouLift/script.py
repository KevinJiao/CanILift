import serial
import urllib2
import requests

ser = serial.Serial('/dev/ttyACM0', 9600)
isfree=True

while True:
    if (isfree):
        result = ser.readline().split()[0]
        while(result=='free'):
            result=ser.readline().split()[0]
        print("Equipment now unavailable")
        requests.get("http://doyoulift.meteor.com/update?id=0&status=true")
        print("done")
        isfree=False
    else:
        result = ser.readline().split()[0]
        while(result=='used'):
            result=ser.readline().split()[0]
        print("Equipment now available")
        requests.get("http://doyoulift.meteor.com/update?id=0&status=false")
        print('done')
        isfree=True


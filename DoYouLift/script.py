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
        urllib2.urlopen("http://localhost:3000/update?id=0&status=true")
        requests.get("http://localhost:3000/update?id=0&status=true")
        isfree=False
    else:
        result = ser.readline().split()[0]
        while(result=='used'):
            result=ser.readline().split()[0]
        print("Equipment now available")
        urllib2.urlopen("http://localhost:3000/update?id=0&status=false")
        isfree=True


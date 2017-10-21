from bs4 import BeautifulSoup
from geopy.geocoders import Nominatim
import requests
import re

'''def scrape(longt, lat, animal, breed):'''
longt = 52.509669
lat = 13.376294
animal="cat"
zipcode = 75080
breed = "retriever"

geolocator = Nominatim()
locationZip = geolocator.reverse("%f, %f"%(longt,lat))
theZip = ([int(s) for s in re.findall(r'\d+',locationZip.address)])[0]
print(theZip)

urlt= 'https://www.searchtempest.com/search?location=%d&maxDist=75&region_us=1&search_string=lost+%s&keytype=adv&Region=na&cityselect=zip&page=0&category=1&hasPic=1&subcat=pet&q=lost+%s'%(zipcode,animal,animal) + '+%22image%22++inurl%3A%28pet%29'
print(urlt)

tempest = requests.get(urlt)
if(tempest.status_code == 404):
	print("error: page not found")
elif (tempest.status_code >= 400):
	print("error: bad")
else:
	print("tempest webpage is valid")

soup_t= BeautifulSoup(tempest.content, 'html.parser')
craigLinks_dataoriginhref = soup_t.find('div', class_ = 'directResult')



title = "blue"
body = "very very long string of text"
email = "easy string"
location = "within _ miles of <zip code>"
'''	return (title, body, email, location)'''


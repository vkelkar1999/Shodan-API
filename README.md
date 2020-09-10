# README

Breakdown: Used Shodan API to take advantage of many query functions. Built on REST API which allows for collection of information


 - Started August 28, 2020

Different webcam technologies have different default usernames and passwords

List of many different accessible shodan cameras: default username / default password

ACTi: admin/123456 or Admin/123456

Axis (traditional): root/pass,

Axis (new): requires password creation during first login

Cisco: No default password, requires creation during first login

Grandstream: admin/admin

IQinVision: root/system

Mobotix: admin/meinsm

Panasonic: admin/12345

Samsung Electronics: root/root or admin/4321

Samsung Techwin (old): admin/1111111

Samsung Techwin (new): admin/4321

Sony: admin/admin

TRENDnet: admin/admin

Toshiba: root/ikwd

Vivotek: root/<blank>

WebcamXP: admin/ <blank>
  
Searching for countries with the layoung country:"2 letter country code"

Iran = "IR"
China = "CN"
Russia = "RU"

- August 31, 2020

Familiarized myself with Node.js syntax and structure, have never programmed in Node.js before

Links for practice:

https://www.w3schools.com/nodejs/

https://www.tutorialsteacher.com/nodejs/nodejs-tutorials


- September 1, 2020

Cloned the Shodan API and began understanding what was going on

With the generation of the API key for an account, started with tests folder and different async tasks
Focusing on webcamx webcameras that have open port
Filtering on countries and retaining the IP address

async search function was very crucial in early development 
query -> string that normally would type into the search bar of shodan.io

returns host results which allowed for async host to be used 

async hosts returns the services 

- September 2, 2020

Began writing tests in the test directory to search for webcamxp
Results were not what was expected as output was returned to Terminal but in an unconventional format
Tried to find a way to parse the information so it is readable to the user

Essentially was trying to output a file that would contain:

Country of Origin
IP Address
Available ports
Webcam technologies used at each port

This would then allow whoever is lookin for webcams to get a list of all valid potential cameras with all the information required to look up in the URL search bar

Type in the IP address followed by the port number, to the lead to potential camera. With the type of webcam listed user would just have to input default username and password 
in hopes of logging in if credentials required

- September 3, 2020

Ran into 2 issues
 1. All tries for trying to make the information readable lead to crashes in code, I myself wasn't sure if my tests were working properly because of it. I was going to try to 
    continue debugging the code until a file with all the information was readable but realized Shodan-API is not applicable to CTHULU machine. Script requires a large 
    repositiry of files to run. From what I remembered from the CTHULU machine, all scripts were a single file capable of performing the task.
 2. Had to restart the process using Shodan CLI but now have to relearn the features and functionalities; 
    New Repository created for this.









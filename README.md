# Lopez Landscaping
Contributors: Victor Perez Contreras

## Purpose
The website was orignally made for a small local business in my area. The website offers a platform for them to highlight their services and work. 

Currently working with the company they haven't had any pictures of their work. For now I have cited pictures that represent what we would advertise. I mocked the website so it is easy to substitute our real images.

For now I am using this github repository to highlight the work and improvement I do on the side for the website. 

## Features
- **Contact Form**: 
  - Meant to offer users a quick any easy way to offer a request for our services. 
  - Implements an encryption method that hides the data when it is sent to my google sheet. 
  - The reason behind the encryption is for the google sheet to work I need to send a json request to a third party website. There the information is publicly available. This poses a security risk as sensitive information can be seen. An alternative would be a simple email but we want to reserve their emails for current clients as the business is small and still getting off.  
- **Credit Card Validation**:
  - I have created a function to validate someones credit card information. 
  - The function is not safe and shouldn't be used other than testing the PayPal test credit card 

## Usage
1) The website it up on https://lopezlandscape.app/

2) Cloning the repository and opening from the terminal or your systems files

Preferred is cloning because the website is hosted on firebase, requiring additional software updates for usage. The most up to date is github because the changes will be commited first before getting fully released to the real website. 

# NOR1-test-

Design the UI/UX and build a single page web application using only front end technologies:
1.	The web application takes a GET request URL with the following data:
•	The guest first name
•	The guest last name
•	The guest email
•	The booked room code (QUEEN, KING, SUITE)
•	The booked room price (can do just the number without the currency)
2.	Display the booked room information in the web application for the guest booking including:
•	Guest first name
•	Guest last name
•	Booked room short description
•	Price for the room
3.	Display the offers based on the rules listed here:
•	If the booked room code is QUEEN, the offers displayed should include:
1.	Offer to upgrade to the KING room, item_id: 101
2.	Offer to upgrade to the SUITE room, item_id: 102
•	If the booked room code is KING, the offer(s) displayed should include:
1.	Offer to upgrade to the SUITE room, item_id: 102
•	If the booked room price is 199 or more, the offer(s) should include:
1.	Offer to add Champagne and Strawberries for $100
4.	Provide a way for the guest to select one or more offers
5.	Provide a way for the guest to submit their selections to an API (no need to build the actual API, you can just submit the data to a fake/stub API)
6.	Display a confirmation page for the selected offer(s)
Please consider the following. You can either show it in code, or just explain how you would do this if it will take a significant amount of time.
•	How would you handle branding and theming for different hotels?
•	How should 10+ different languages be supported?
•	How should 10+ different currencies be supported?
•	How would you handle no offers available if there are no matching rules?
Offers dataset:
[
  {
      "image_url": "https://www.norone.com/nor1images/h-008/000153/small/00001717.jpg",
      "short_desc": "Queen Bed with Lanai Access",
      "long_desc": "Enjoy floor to ceiling windows with sliding glass door opening
directly to a Sun Deck furnished with patio furniture and located on the 5th floor for your comfort and convenience during your stay.",
      "item_id": 100,
      "room_code": "QUEEN",
      "price": "$20 extra per night"
  },
  {
      "image_url": "https://www.norone.com/nor1images/h-008/000153/small/00001701.jpg",
      "short_desc": "King Bed with Lanai Access",
      "long_desc": "King Bed with Lanai Access. Enjoy floor to ceiling windows
with sliding glass door opening directly to a Sun Deck furnished with patio furniture for relaxing on the 5th floor during your stay.",
      "item_id": 101,
      "room_code": "KING",
      "price": "$25 extra per night"
  },
  {
      "image_url": "https://www.norone.com/nor1images/h-008/000153/small/00001728.jpg",
      "short_desc": "Premier Suite with Lanai Access",
      "long_desc": "Enjoy this large open floor plan with dining area, living area
including pullout sleeper sofa with attached King bedroom, wet bar, and refrigerator, featuring floor to ceiling windows with sliding glass door opening directly to a Sun Deck, ideal for meeting planners, executives or families looking for extra space.",
      "item_id": 102,
      "room_code": "SUITE",
      "price": "$30 extra per night"
  },
  {
      "image_url": "https://www.norone.com/nor1images/h-026/000892/small/00011999.jpg",
      "short_desc": "Champagne and Strawberries",
      "long_desc": "Upon arrival, enjoy a combination of fresh strawberries and
a bottle of chilled champagne from the comfort of your own guestroom.",
      "item_id": 103,
      "price": "$50 extra"
  }
]


README- 
Note: 
The compilation and deployment sections are provided with instructions for Linux/MAC command line. For windows, please use respective windows command line options. 


Deployment Steps: 
Execute the following in command line. 
1. Extract Archive 

2. Change to “Fusion” directory 
cd NOR

Prerequisites: 
Install Node.js 

To Build the project: 
1. Install Node packages: 
npm install
2. Install Bower: 
npm install bower


3. Install Bower packages: 
bower install

To Run the project: 
grunt serve --force



Copy and paste in the URL:

http://localhost:9000/#/main?firstName=Rohit&lastName=Borade&price=200&bookedRoomCode=QUEEN


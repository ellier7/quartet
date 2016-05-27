#quartet

Depression Assessment app

Instructions:
- Clone this repo
- run `npm install`
- `cd quartet`
- run `npm run start` 
- open localhost:3000 in your browser **OR** *your ip address*:3000 in your mobile browser


This app allows a user to take the PHQ-9 depression screener on their phone (or on desktop if desired)
They will answer 9 questions, individually. There is an option to go back to change an answer at any time. 
Each answer has a corresponding score, which is added up to determine the severity of the user's depression. 
If it is at least moderately severe, the app will present the user with 3 choices of therapist, with thier name, number and photo. There is also a contact link, which will display a confirmation message that the therapist will contact them shortly.


###How I approached this exercise

I decided not to use radio buttons, check boxes or dropdowns for answer selection, because in my opinion it's a better user experience to hit a big button.  Same for not having a 'next' button. If a user wants to change thier answer, they can always go back. I put a slight delay on the answer submission so the user can see that thier answer was selected.
When the test is complete, the results (and suggested therapists if they scored at least moderately severe) are shown with an option to start the assessment again.
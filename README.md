# ReachInBox

Guidelines:

1. Implementation of the Login Page:
   Created and build a login page using the template that has been supplied. Users' initial point of contact will be the login page.

2. Navigation of the Onebox Screen:
   The onebox screen should be instantly displayed to users upon successful login. This screen can be reached using the URL /google-login.

3. Onebox Fetching of Data:
   -Utilise an API to retrieve data from the Onebox screen.
   -Make use of these API endpoints:
   -GET /onebox/list: Retrieve the onebox's contents list.
   -GET /onebox/:thread_id: Retrieve information about a particular thread.
   -Delete a particular thread with DELETE /onebox/:thread_id.

4. Utilising Keyboard Shortcuts:
   -To improve user experience, add keyboard shortcuts to the onebox screen:
   -The selected item should be deleted by pressing "D".
   -The Reply box should appear after pressing "R".

5. Personal Text Editor:
   -Create a personalised text editor with extra features.
   -Customise the editor with buttons like "Variables" and "SAVE."
   
7. Functionality of Reply:
   -Enable users to reply to a discussion by implementing the Reply functionality.
   -Utilise the POST /reply/:thread_id API endpoint with the following configuration:
   -"Subject": "", "body": "<html></html>", "from: "email", "to: "email"}
   -Make sure that the reply appears once you hit the "Send" button.
   
8. Using the Light and Dark Modes:
   -Offer choices for both bright and dim modes to improve accessibility and user experience.

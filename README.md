# ReachInBox

Guidelines:

1. **Implementation of the Login Page**:
   
   Created and build a login page using the template that has been supplied. Users' initial point of contact will be the login page.

2. **Navigation of the Onebox Screen**:
   
   The onebox screen should be instantly displayed to users upon successful login. This screen can be reached using the URL /google-login.

3. **Onebox Fetching of Data**:
   
   -Utilise an API to retrieve data from the Onebox screen.
   
   -Make use of these API endpoints:
   
      --GET /onebox/list: Retrieve the onebox's contents list.
   
      --GET /onebox/:thread_id: Retrieve information about a particular thread.
   
      --Delete a particular thread with DELETE /onebox/:thread_id.
   

4. **Utilising Keyboard Shortcuts**:
   
   -To improve user experience, add keyboard shortcuts to the onebox screen:
   
   -The selected item should be deleted by pressing "D".
   
   -The Reply box should appear after pressing "R".

   
5. **Functionality of Reply**:
   
   -Enable users to reply to a discussion by implementing the Reply functionality.
   
   -Utilise the POST /reply/:thread_id API endpoint with the following configuration:
   
      --"Subject": "", "body": "<html></html>", "from: "email", "to: "email"}
   
      --Make sure that the reply appears once you hit the "Send" button.
   
6. **Using the Light and Dark Modes**:
    
    -Offer choices for both bright and dim modes to improve accessibility and user experience.


**LOGIN PAGE -**
![Screenshot 2024-08-14 172840](https://github.com/user-attachments/assets/26fc4976-b19d-4831-a245-8161c9e9ebbb)

**ONEBOX PAGE -**
![Screenshot 2024-08-14 172903](https://github.com/user-attachments/assets/e3c839e8-f527-4621-a160-939a63c486cd)

**AFTER TOGGLING -**
![Screenshot 2024-08-14 172916](https://github.com/user-attachments/assets/7eeb499d-a42c-4e91-9c32-51fad3088836)

**CLICKING ON THE SENT -**
![Screenshot 2024-08-14 173425](https://github.com/user-attachments/assets/98583247-7be3-4216-8bea-2186cc5000bd)





document.addEventListener('DOMContentLoaded', function() {
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    const emailList = document.getElementById('emailList');
    const emailDetail = document.getElementById('emailDetail');
    const replyBox = document.getElementById('replyBox');

    let selectedEmailId = null;

    // Sample email data
    const emails = [
        { id: 1, subject: 'Sent', body: '' },
        { id: 2, subject: 'Inbox', body: '' },
        { id: 3, subject: 'Outbox', body: '' }
    ];

    // Populate email list
    function loadEmails() {
        emails.forEach(email => {
            const emailItem = document.createElement('div');
            emailItem.textContent = email.subject;
            emailItem.classList.add('email-item');
            emailItem.onclick = () => viewEmail(email.id);
            emailList.appendChild(emailItem);
        });
    }

    // View selected email
    function viewEmail(id) {
        const email = emails.find(email => email.id === id);
        if (email) {
            selectedEmailId = email.id;
            emailDetail.innerHTML = `
                <h2>${email.subject}</h2>
                <p>${email.body}</p>
                <button onclick="openReplyBox()">Reply</button>
            `;
        }
    }

    // Open reply box
    window.openReplyBox = function() {
        replyBox.style.display = 'block';
    };

    // Send reply
    window.sendReply = function() {
        const replyText = document.getElementById('replyText').value;
        console.log('Reply sent:', replyText);
        replyBox.style.display = 'none';
    };

    // Toggle dark mode
    toggleDarkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    loadEmails();
});

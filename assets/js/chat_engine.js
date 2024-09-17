class ChatEngine{
    constructor(chatBoxId, userEmail){
        this.chatBox = $(`#${chatBoxId}`);
        this.userEmail = userEmail;

        this.socket = io.connect('http://100.20.92.101:5000');

        if (this.userEmail){
            this.connectionHandler();
        }

    }


    connectionHandler(){
        let self = this;

        this.socket.on('connect', function(){
            console.log('connection established using sockets...!');


            self.socket.emit('join_room', {
                user_email: self.userEmail,
                chatroom: 'codeial'
            });

            self.socket.on('user_joined', function(data){
                console.log('a user joined!', data);
            })


        });

        // CHANGE :: send a message on clicking the send message button
        $('#send-message').click(function(){
            let msg = $('#chat-message-input').val();

            if (msg != ''){
                self.socket.emit('send_message', {
                    message: msg,
                    user_email: self.userEmail,
                    chatroom: 'codeial'
                });
            }
        });

        // self.socket.on('receive_message', function(data){


        //     console.log('message received', data.message);


        //     let newMessage = $('<li>');


        //     let messageType = 'other-message';

        //     if (data.user_email == self.userEmail){
        //         messageType = 'self-message';
        //     }

        //     newMessage.append($('<span>', {
        //         'html': data.message
        //     }));

        //     newMessage.append($('<sub>', {
        //         'html': data.user_email
        //     }));

        //     newMessage.addClass(messageType);

        //     $('#chat-messages-list').append(newMessage);
        // })
        self.socket.on('receive_message', function(data){
            console.log('message received', data.message);
            console.log('message sender', data.user_email);
        
            // Create a new message container
            let newMessageContainer = $('<div class="message-container">');
        
            // Determine message type based on sender
            let messageType = (data.user_email == self.userEmail) ? 'self-message' : 'other-message';
        
            // Create message content element
            let messageContent = $('<div>', {
                'class': 'message-content',
                'text': data.message
            });

            console.log("message type:::::", messageType);
            console.log("data.user_email", data);
            console.log("self.userEmail", self.userEmail);

        
            // Append message content to the message container
            newMessageContainer.append(messageContent);
        
            // If it's an other-message, add sender's name
            if (messageType === 'other-message') {
                let messageSender = $('<div>', {
                    'class': 'message-sender',
                    'text': data.user_email
                });
                newMessageContainer.prepend(messageSender);
            }
        
            // Add appropriate message type class to the message container
            newMessageContainer.addClass(messageType);
        
            // Append the new message container to the chat-messages-list
            $('#chat-messages-list').append(newMessageContainer);
        });
    
        // self.socket.on('receive_message', function(data){
        //     console.log('message received', data.message);
        
        //     // Create a new message container
        //     let newMessageContainer = $('<div class="message-container">');
        
        //     // Determine message type based on sender
        //     let messageType = (data.user_email == self.userEmail) ? 'self-message' : 'other-message';
        
        //     // Create message content element
        //     let messageContent = $('<div>', {
        //         'class': 'message-content',
        //         'text': data.message
        //     });
        
        //     // If it's an other-message, add sender's name
        //     if (messageType === 'other-message') {
        //         let messageSender = $('<div>', {
        //             'class': 'message-sender',
        //             'text': data.user_email
        //         });
        //         newMessageContainer.append(messageSender);
        //     }
        
        //     // Append message content to the message container
        //     newMessageContainer.append(messageContent);
        
        //     // Add appropriate message type class to the message container
        //     newMessageContainer.addClass(messageType);
        
        //     // Append the new message container to the group-messages container
        //     $('#group-messages').append(newMessageContainer);
        // });
        


    }
}
//Exercise #2

class Notification {
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }

    send() {
        console.log(`Notification has been sent to ${this.receiver}`)
    }
};

class EmailNotification extends Notification{
    constructor(notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver);
        this.email = email;
    }
};

class SMSNotification extends Notification{
    constructor(notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver);
        this.phone = phone;
    }
};

const emailNotification = new EmailNotification(
    "01",
    new Date(),
    "This is email noti message",
    "abc@email.com"
);

const smsNotification = new SMSNotification(
    "01",
    new Date(),
    "This is sms noti message.",
    "0123456789"
);

emailNotification.send();
smsNotification.send();

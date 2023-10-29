//Exercise #1

class EmailNotification {
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this,content = content;
        this.receiver = receiver;
    }

    send() {
        console.log(`Notification has been sent to ${this.receiver}`);
    }
};

class SMSNotification {
    constructor(notificationId, createdTime, content, phoneNumber) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.console = content;
        this.phoneNumber = phoneNumber;
    }

    send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`);
    }
};

const emailNotification = new EmailNotification(
    "01",
    new Date(),
    "This is email noti message",
    "abcd@email.com"
);

const smsNotification = new SMSNotification(
    "01",
    new Date(),
    "This is sms noti message",
    "0123456789"
);

emailNotification.send();
smsNotification.send();

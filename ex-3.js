//Exercise #3

//  Start coding here
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
};

class postList {
    constructor(post) {
        this.post = [];
    }

    addPost(post) {
        this.posts.push(post);
    }

    sharePost() {
        console.log(`You've shared post ${this.post} to your friend.`);
    }
};

class Post {
    constructor(id, title, content, comment) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.comment = [];
    }

    addComment(comment) {
        this.comments.push(comment);
    }
};

class Comment {
    constructor(id, content, createdBy, like) {
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }

    addlike() {
        this.like++;
    }
};

class Facebook {
    constructor() {
        this.groupList = [];
        this.pageList = [];
    }

    addGroup(group) {
        this.groupList.push(group);
    }

    addPage(page) {
        this.pageList.push(page);
    }
};

class FacebookPage {
    constructor(name) {
        this.name = name;
    }
};

class FacebookGroup {
    constructor(name) {
        this.name = name;
    }
};

class Notification {
    constructor(id) {
        this.id = id;
    }

    send() {
        console.log(`Notification: ${createdBy} has just commented on this post—${title}`);
    }
};

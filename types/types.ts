enum ReactionType {
  Like = "LIKE",
  Love = "LOVE",
  Laugh = "LAUGH",
  Angry = "ANGRY",
  Sad = "SAD",
  Fire = "FIRE",
}

interface User {
  firstName: string;
  lastName: string;
  imageURL: string;
  profileURL: string;
  posts: string[]; // array of post urls
}

interface Message {
  author: User;
  text: string;
  image?: string; // imageURL
}

interface Comment extends Message {
  author: User;
  comment: Message;
  replies?: Comment[];
}

interface Reaction {
  author: User;
  reactionType: ReactionType;
}

interface Post {
  author: User;
  id: string;
  imageURL?: string | null | undefined;
  reactions?: Reaction[];
  comments?: [[User, Comment]];
}

interface Chat {
  users: User[];
  messages?: Message[];
}

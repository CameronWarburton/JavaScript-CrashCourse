let users = [
  {
    username: "Cameron",
    password: "test123",
    email: "cameron@gmail.com",
    subscriptionStatus: "VIP",
    discordId: "CamW#0001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Mitri",
    email: "mitri@frontendsimplified.com",
    password: "Mitri123",
    subscriptionStatus: "VIP",
    discordId: "Mitri#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "Zen",
    email: "mitri@frontendsimplified.com",
    password: "Mitri123",
    subscriptionStatus: "VIP",
    discordId: "Mitri#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

function register(user) {
    users.push(user)
}

register({
    username: "Zen",
    email: "zen@frontendsimplified.com",
    password: "Zen123",
    subscriptionStatus: "VIP",
    discordId: "Zen#0001",
    lessonsCompleted: [0, 1]
});

console.log(users)

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
      if (users[i].email === email) {
        console.log(users[i]);
        if (users[i].password === password) {
          console.log("log the user in - the details are correct");
        } else {
          console.log("password is incorrect - try again");
        }
        return;
      }
    }
    console.log("could not find an email that matches");
  }
  
  login("zen@frontendsimplified.com", "Zen123");
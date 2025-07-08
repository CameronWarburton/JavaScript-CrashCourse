let users = [
  {
    username: "Cameron",
    email: "Cameron@frontendsimplified.com",
    password: 'test123',
    subscribtionStatus: "VIP",
    discordId: "CamboWarbo",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Mitri",
    email: "Mitri@frontendsimplified.com",
    password: 'mitri123',
    subscribtionStatus: "VIP",
    discordId: "Mitri#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "Zen",
    email: "Zen@frontendsimplified.com",
    password: 'Zen123',
    subscribtionStatus: "VIP",
    discordId: "Zen#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
    console.log(users[i]);
    }
  }
}

login('Cameron@frontendsimplified.com', 'test123');

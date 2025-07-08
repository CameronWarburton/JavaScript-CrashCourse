let users = [
  {
    username: "Cameron",
    email: "Cameron@frontendsimplified.com",
    subscribtionStatus: "VIP",
    discordId: "CamboWarbo",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Mitri",
    email: "Mitri@frontendsimplified.com",
    subscribtionStatus: "VIP",
    discordId: "Mitri#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

console.log(users[0].lessonsCompleted.map(elem => elem * 2))

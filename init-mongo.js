db = db.getSiblingDB('node-express-boilerplate');

db.createCollection('users');

db.users.insertOne({
  name: 'Admin',
  email: 'admin@email.com',
  password: '$2a$08$3BH3Saiier7d3M1KCayDyOrzskQolpPKKqOL0mZyPSWv1Vd02txXO',
  role: 'admin',
});

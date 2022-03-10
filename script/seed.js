"use strict";

const {
  db,
  models: { User, Trail, Park },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */

const userData = [
  {
    username: "Ying",
    password: "123",
  },
  {
    username: "Julia",
    password: "123",
  },
];
const trailData = [
  {
    name: "Bear Mountian Loop Trail",
    description:
      "Enjoy this 3.80 mile, loop trail near Bear Mountain, New York. Generally considered a moderately challenging route, it takes an average of 2 h 19 min to complete. This is a very popular area for hiking and trail running, so you'll likely encounter other people while exploring. The trail is open year-round, but the best times to visit are April through November. Dogs are welcome, but must be on a leash.",
    difficulty: "Moderate",
    miles: 3.8,
    elevation: 1154,
    routeType: "Loop",
  },
  {
    name: "Popolopen Torne Loop",
    description:
      "Popolopen Torne Loop is a 4.6 mile heavily trafficked loop trail located near Fort Montgomery, New York that features a river and is rated as moderate. The trail is primarily used for hiking and walking. Dogs are also able to use this trail but must be kept on leash.",
    difficulty: "Moderate",
    miles: 4.6,
    elevation: 1122,
    routeType: "Loop",
  },
  {
    name: "Doodletown Bridle Path Loop",
    description:
      "Experience this 5.70 mile, loop trail near Bear Mountain, New York. Generally considered a moderately challenging route, it takes an average of 3 h 16 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
    difficulty: "Moderate",
    miles: 5.7,
    elevation: 1446,
    routeType: "Loop",
  },
  {
    name: "Dunderberg, Bald Mountain, and The Timp Loop",
    description:
      "Head out on this 7.40 mile, loop trail near Tomkins Cove, New York. Generally considered a challenging route, it takes an average of 4 h 13 min to complete. This is a very popular area for hiking, trail running, and other nature trips, so you'll likely encounter other people while exploring. The trail is open year-round, but the best times to visit are April through November. Dogs are welcome, but must be on a leash.",
    difficulty: "Hard",
    miles: 7.4,
    elevation: 1820,
    routeType: "Loop",
  },
  {
    name: "Hessain Lake Loop",
    description:
      "Try this 1.40 mile, loop trail near Bear Mountain, New York. Generally considered an easy route, it takes an average of 36 min to complete. This trail is great for hiking, trail running, and walking, and it's unlikely you'll encounter many other people while exploring. Dogs are welcome, but must be on a leash.",
    difficulty: "Easy",
    miles: 1.4,
    elevation: 52,
    routeType: "Loop",
  },
  {
    name: "Brooks Pond Trail Loop",
    description:
      "Discover this 1.00 mile, loop trail near Fort Montgomery, New York. Generally considered an easy route, it takes an average of 27 min to complete. This is a popular trail for hiking, trail running, and walking, but you can still enjoy some solitude during quieter times of day. You'll need to leave pups at home — dogs aren't allowed on this trail.",
    difficulty: "Easy",
    miles: 1.0,
    elevation: 62,
    routeType: "Loop",
  },
  {
    name: "Bear Mountain Major Welch",
    description:
      "Get to know this 4.10 mile, out and back trail near Bear Mountain, New York. Generally considered a challenging route, it takes an average of 2 h 27 min to complete. This is a popular trail for hiking and other nature trips, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome and may be off-leash in some areas.",
    difficulty: "Hard",
    miles: 4.1,
    elevation: 1177,
    routeType: "Out and back",
  },
  {
    name: "Bald Mountain via Cornell Mine Trail",
    description:
      "Head out on this 3.30 mile, out and back trail near Tomkins Cove, New York. Generally considered a challenging route, it takes an average of 2 h 5 min to complete. This is a popular trail for hiking and trail running, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome and may be off-leash in some areas.",
    difficulty: "Hard",
    miles: 3.3,
    elevation: 1122,
    routeType: "Out and back",
  },
  {
    name: "Split Rock Falls Short Loop",
    description:
      "Check out this 1.00 mile, loop trail near Tomkins Cove, New York. Generally considered a moderately challenging route, it takes an average of 33 min to complete. This is a popular trail for hiking, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome and may be off-leash in some areas.",
    difficulty: "Moderate",
    miles: 1.0,
    elevation: 226,
    routeType: "Loop",
  },
  {
    name: "Perkins Memorial Observatory Loop",
    description:
      "Experience this 3.80 mile, loop trail near Bear Mountain, New York. Generally considered a moderately challenging route, it takes an average of 2 h 11 min to complete. This is a popular trail for hiking, trail running, and walking, but you can still enjoy some solitude during quieter times of day. Dogs are welcome, but must be on a leash.",
    difficulty: "Moderate",
    miles: 3.8,
    elevation: 971,
    routeType: "Loop",
  },
  {
    name: "Gertrude's Nose Trail",
    description:
      "Explore this 6.70 mile, loop trail near High Falls, New York. Generally considered a moderately challenging route, it takes an average of 3 h 28 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The trail is open year-round, but the best times to visit are April through October. Dogs are welcome, but must be on a leash.",
    difficulty: "Moderate",
    miles: 6.7,
    elevation: 1141,
    routeType: "Loop",
  },
  {
    name: "Lake Minnewaska Loop Trail",
    description: "Experience this 1.90 mile, loop trail near Kerhonkson, New York. Generally considered an easy route, it takes an average of 56 min to complete. This is a very popular area for cross-country skiing, hiking, and mountain biking, so you'll likely encounter other people while exploring. The trail is open year-round, but the best times to visit are April through October. Dogs are welcome, but must be on a leash.",
    difficulty: "Easy",
    miles: 1.9,
    elevation: 259,
    routeType: "Loop",
  },
  {
    name: "Awosting Falls Connection Trail",
    description: "Get to know this 1.10 mile, loop trail near Accord, New York. Generally considered an easy route, it takes an average of 31 min to complete. This is a very popular area for hiking, mountain biking, and walking, so you'll likely encounter other people while exploring. The trail is open year-round, but the best times to visit are April through September. Dogs are welcome, but must be on a leash.",
    difficulty: "Easy",
    miles: 1.1,
    elevation: 118,
    routeType: "Loop",
  },
  {
    name: "Rainbow Falls Trail",
    description: "Get to know this 6.50 mile, loop trail near Accord, New York. Generally considered a moderately challenging route, it takes an average of 3 h 5 min to complete. This is a very popular area for hiking, trail running, and other nature trips, so you'll likely encounter other people while exploring. The trail is open year-round, but the best times to visit are April through September. Dogs are welcome and may be off-leash in some areas.",
    difficulty: "Moderate",
    miles: 6.5,
    elevation: 688,
    routeType: "Loop",
  },
  {
    name: "Millbrook Mountain Trail",
    description: "Check out this 5.00 mile, loop trail near Kerhonkson, New York. Generally considered a moderately challenging route, it takes an average of 2 h 28 min to complete. This trail is great for cross-country skiing, hiking, and mountain biking. The trail is open year-round, but the best times to visit are April through November. Dogs are welcome, but must be on a leash.",
    difficulty: "Moderate",
    miles: 5.0,
    elevation: 666,
    routeType: "Loop",
  },
  {
    name: "Bull Wheel to High Peter's Kill Trail",
    description: "Get to know this 5.10 mile, loop trail near Kerhonkson, New York. Generally considered a moderately challenging route, it takes an average of 2 h 35 min to complete. This is a popular trail for hiking, trail running, and walking, but you can still enjoy some solitude during quieter times of day. Dogs are welcome, but must be on a leash.",
    difficulty: "Moderate",
    miles: 5.1,
    elevation: 787,
    routeType: "Loop",
  },
  {
    name: "Upper Awosting, Lake Awosting and Castle Point Loop",
    description: "Get to know this 10.90 mile, loop trail near Kerhonkson, New York. Generally considered a moderately challenging route, it takes an average of 4 h 58 min to complete. This is a very popular area for cross-country skiing, hiking, and mountain biking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
    difficulty: "Moderate",
    miles: 10.9,
    elevation: 869,
    routeType: "Loop",
  },
  {
    name: "High Peters Kill Trail",
    description: "Explore this 6.50 mile, out and back trail near Gardiner, New York. Generally considered a challenging route, it takes an average of 3 h 45 min to complete. This is a popular trail for hiking, rock climbing, and other nature trips, but you can still enjoy some solitude during quieter times of day. The trail is open year-round, but the best times to visit are April through November. Dogs are welcome, but must be on a leash.",
    difficulty: "Hard",
    miles: 6.5,
    elevation: 1643,
    routeType: "Out and back",
  },
  {
    name: "Lake Minnewaska, Gertude's Nose, and Millbrook Mountain Loop",
    description: "Check out this 11.50 mile, loop trail near High Falls, New York. Generally considered a challenging route, it takes an average of 5 h 50 min to complete. This is a popular trail for hiking and other nature trips, but you can still enjoy some solitude during quieter times of day. The trail is open year-round, but the best times to visit are April through October. Dogs are welcome, but must be on a leash.",
    difficulty: "Hard",
    miles: 11.5,
    elevation: 1771,
    routeType: "Loop",
  },
  {
    name: "Compass Rock",
    description: "Try this 1.90 mile, loop trail near High Falls, New York. Generally considered an easy route, it takes an average of 1 h 5 min to complete. This is a popular trail for hiking, trail running, and walking, but you can still enjoy some solitude during quieter times of day. The trail is open year-round, but the best times to visit are March through November. Dogs are welcome, but must be on a leash.",
    difficulty: "Easy",
    miles: 1.9,
    elevation: 469,
    routeType: "Loop",
  },
  {
    name: "Breakneck Ridge, Breakneck Bypass, Wilkinson Trail Loop",
    description: "Experience this 3.20 mile, loop trail near Cornwall-on-Hudson, New York. Generally considered a challenging route, it takes an average of 2 h 8 min to complete. This is a very popular area for hiking, rock climbing, and other nature trips, so you'll likely encounter other people while exploring. The trail is open year-round, but the best times to visit are April through November. Dogs are welcome, but must be on a leash.",
    difficulty: "Hard",
    miles: 3.2,
    elevation: 1250,
    routeType: "Loop",
  },
  {
    name: "Bull Hill Full Loop",
    description: "Explore this 5.40 mile, loop trail near Cold Spring, New York. Generally considered a moderately challenging route, it takes an average of 3 h 7 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The trail is open year-round, but the best times to visit are April through October. Dogs are welcome, but must be on a leash.",
    difficulty: "Moderate",
    miles: 5.4,
    elevation: 1391,
    routeType: "Loop",
  },
  {
    name: "South Beacon Mountain via Breakneck Ridge and Wilkinson Memorial Trail",
    description: "Discover this 9.00 mile, loop trail near Beacon, New York. Generally considered a challenging route, it takes an average of 5 h 32 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The trail is open year-round, but the best times to visit are May through October. Dogs are welcome and may be off-leash in some areas.",
    difficulty: "Hard",
    miles: 9.0,
    elevation: 2831,
    routeType: "Loop",
  },
  {
    name: "Bull Hill Short Loop",
    description: "Explore this 4.30 mile, loop trail near Cold Spring, New York. Generally considered a moderately challenging route, it takes an average of 2 h 30 min to complete. This is a very popular area for hiking, snowshoeing, and trail running, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
    difficulty: "Moderate",
    miles: 4.3,
    elevation: 1131,
    routeType: "Loop",
  },
  {
    name: "Anthony's Nose, Appalachian Trail, and Camp Smith",
    description: "Explore this 7.60 mile, out and back trail near Fort Montgomery, New York. Generally considered a challenging route, it takes an average of 4 h 42 min to complete. This is a very popular area for hiking and trail running, so you'll likely encounter other people while exploring. The trail is open year-round, but the best times to visit are March through November. Dogs are welcome, but must be on a leash.",
    difficulty: "Hard",
    miles: 7.6,
    elevation: 2421,
    routeType: "Out and back",
  },
  {
    name: "Cornish Estate Trail",
    description: "Head out on this 1.80 mile, out and back trail near Cold Spring, New York. Generally considered an easy route, it takes an average of 51 min to complete. This is a very popular area for hiking and walking, so you'll likely encounter other people while exploring. The trail is open year-round, but the best times to visit are April through November. Dogs are welcome, but must be on a leash.",
    difficulty: "Easy",
    miles: 1.8,
    elevation: 190,
    routeType: "Out and back",
  },
  {
    name: "Anothony's Nose via Camp Smith Trail",
    description: "Enjoy this 2.20 mile, out and back trail near Garrison, New York. Generally considered a moderately challenging route, it takes an average of 1 h 21 min to complete. This is a very popular area for hiking, trail running, and walking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
    difficulty: "Moderate",
    miles: 2.2,
    elevation: 685,
    routeType: "Out and back",
  },
  {
    name: "Anothony's Nose via Camp Smith Trail",
    description: "Enjoy this 6.40 mile, out and back trail near Peekskill, New York. Generally considered a challenging route, it takes an average of 3 h 48 min to complete. This is a very popular area for hiking and other nature trips, so you'll likely encounter other people while exploring. The trail is open year-round, but the best times to visit are March through November. Dogs are welcome and may be off-leash in some areas.",
    difficulty: "Hard",
    miles: 6.4,
    elevation: 1807,
    routeType: "Out and back",
  },
  {
    name: "Breakneck Ridge, Notch Trail and Wilkinson Trail",
    description: "Get to know this 6.50 mile, loop trail near Beacon, New York. Generally considered a challenging route, it takes an average of 3 h 49 min to complete. This is a popular trail for hiking, but you can still enjoy some solitude during quieter times of day. Dogs are welcome, but must be on a leash.",
    difficulty: "Hard",
    miles: 6.5,
    elevation: 1765,
    routeType: "Loop",
  },
  {
    name: "Arden Point and Glenclyffe",
    description: "Experience this 3.80 mile, loop trail near Garrison, New York. Generally considered an easy route, it takes an average of 1 h 43 min to complete. This is a very popular area for hiking, trail running, and walking, so you'll likely encounter other people while exploring. The trail is open year-round, but the best times to visit are April through October. Dogs are welcome and may be off-leash in some areas.",
    difficulty: "Easy",
    miles: 3.8,
    elevation: 278,
    routeType: "Loop",
  },
];

const parkData = [
  {
    name: "Bear Mountain State Park",
  },
  {
    name: "Minnewaska State Park",
  },
  {
    name: "Hudson Highlands State Park Preserve",
  },
];

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  const users = await Promise.all(
    userData.map((user) => {
      return User.create(user);
    })
  );

  const trails = await Promise.all(
    trailData.map((trail) => {
      return Trail.create(trail);
    })
  );

  const parks = await Promise.all(
    parkData.map((park) => {
      return Park.create(park);
    })
  );

  await parks[0].setTrails([
    trails[0],
    trails[1],
    trails[2],
    trails[3],
    trails[4],
    trails[5],
    trails[6],
    trails[7],
    trails[8],
    trails[9],
  ]);

  await parks[1].setTrails([
    trails[10],
    trails[11],
    trails[12],
    trails[13],
    trails[14],
    trails[15],
    trails[16],
    trails[17],
    trails[18],
    trails[19],
  ]);

  await parks[2].setTrails([
    trails[20],
    trails[21],
    trails[22],
    trails[23],
    trails[24],
    trails[25],
    trails[26],
    trails[27],
    trails[28],
    trails[29],
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

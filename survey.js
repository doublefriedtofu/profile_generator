const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Hi, ${answer}`);

  rl.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`That's cool that you like, ${answer}`);
  
    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Amazing, I love listening to, ${answer}`);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        console.log(`Everyone loves eating, ${answer}`);

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Yum! I could totally go for, ${answer}`);

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`I watch alot of, ${answer}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Wild! That is so cool that you can, ${answer}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
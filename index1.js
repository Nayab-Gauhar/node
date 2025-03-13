// const fs = require('fs');
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('counter')
//   .description('CLI to do file based tasks')
//   .version('0.8.0');

// program.command('count')
//   .description('Count the number of lines in a file')
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const lines = data.split('\n').length;
//         console.log(`There are ${lines} lines in ${file}`);
//       }
//     });
//   });

// program.parse();
const fs = require('fs');
function main(filename) {
    fs.readFile(filename, "utf-8", function (err, data) {
        if (err) {
            console.error("Error reading file:", err);
            return; // Exit if there's an error
        }
        let total = 0; // Declare 'total' with 'let'
        for (let i = 0; i < data.length; i++) { // Correct loop increment
            if (data[i] === "\n") {
                total++;
            }
        }
        console.log(total); // Log 'total' inside the callback
    });
}
main(process.argv[2]); // Pass the first argument to main()
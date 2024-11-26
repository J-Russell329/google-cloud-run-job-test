async function taskA(args) {
  console.log(`Running Task A with args: ${args}`);
  // Simulate work
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(`Task A completed!`);
}

async function taskB(args) {
  console.log(`Running Task B with args: ${args}`);
  // Simulate work
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(`Task B completed! `);
}

async function taskC(args) {
  console.log(`Running Task C with args: ${args}`);
  // Simulate work
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log(`Task C completed!`);
}

// Dispatcher to route to the correct function
async function main() {
  const [task, ...args] = process.argv.slice(2); // Get the task name and arguments

  console.log(`Starting task: ${task}`);
  
  switch (task) {
    case 'taskA':
      await taskA(args);
      break;
    case 'taskB':
      await taskB(args);
      break;
    case 'taskC':
      await taskC(args);
      break;
    default:
      console.error(`Unknown task: ${task}`);
      process.exit(1);
  }
}

main().catch((err) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});

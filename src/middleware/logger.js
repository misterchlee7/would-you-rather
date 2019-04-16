const logger = store => next => action => {
  console.group(action.type);
  new Promise(resolve => resolve(console.log("The action: ", action)))
    .then(() => console.log('The new state: ', store.getState()))
  console.groupEnd();
  return next(action);
}

export default logger;
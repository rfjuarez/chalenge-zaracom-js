const log = (message)=>{
  if (process.env.NODE_ENV !== 'production'){
    // eslint-disable-next-line no-console
    console.log(message);
  }
};
export default log;
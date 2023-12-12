// import express, { Express } from 'express';
// import session from 'express-session';
// import MemoryStore from 'memorystore';

// interface ExtendedMemoryStoreOptions extends session.MemoryStoreOptions {
//   checkPeriod?: number;
// }

// const extendedOptions: ExtendedMemoryStoreOptions = {
//   resave: false,
//   saveUninitialized: false,
//   checkPeriod: 86400000,
// };

// const memoryStore = new MemoryStore(extendedOptions);

// const sessionMiddleware = session({
//   secret: extendedOptions.secret,
//   resave: extendedOptions.resave,
//   saveUninitialized: extendedOptions.saveUninitialized,
//   store: memoryStore as any, // Use type assertion here
//   cookie: {
//     // Add any cookie options if needed
//   },
// });

// const app: Express = express();
// app.use(sessionMiddleware);

// export default app;

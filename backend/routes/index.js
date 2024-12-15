import userRoutes from "./userRoutes.js";
import eventRoutes from "./eventRoutes.js";

export default (app) => {
  app.use("/user", userRoutes);
  app.use("/event", eventRoutes);
};
import { Application, Router, RouterContext } from "https://deno.land/x/oak@v5.0.0/mod.ts";

import { home , quiz , postquizresult} from "./routes.ts";

const app = new Application();

const router = new Router();

router
  .get("/", home)
  .get("/quiz",quiz)
  .post("/quiz",postquizresult)

app.addEventListener('error', evt => {
    console.log(evt.error);
  });

  app.use(router.routes());
  app.use(router.allowedMethods());
  
  app.listen({ port: 8080 });
  console.log("Started listening on port: 8080");
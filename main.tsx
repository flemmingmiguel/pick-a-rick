import { hydrate } from "solid-js/web";
import App from "./routes/index.tsx";

if (window.location.pathname) {
  const pathhere = window.location.pathname;
  let rut = pathhere;

  if (pathhere === "/") {
    rut = "/index";
  }

  const { default: App } = __aleph.getRouteModule(
    `./routes${rut}.tsx`,
  );
}

hydrate(() => <App />, document.getElementById("root")!);

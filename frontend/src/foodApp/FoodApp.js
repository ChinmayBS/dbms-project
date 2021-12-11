import { Redirect } from "react-router";
import "../config";
export default function foodApp() {
  // console.log(global.config);
  if (!global.config.authorize.customer) {
    return <Redirect to="/"></Redirect>;
  }
  return <div> This is food App</div>;
}

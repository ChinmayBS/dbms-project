import "../config";
import { Redirect } from "react-router";

export default function ShopPage() {
  if (!global.config.authorize.shopKeeper) {
    return <Redirect to="/"></Redirect>;
  }
  return <div>This is Shop Page</div>;
}

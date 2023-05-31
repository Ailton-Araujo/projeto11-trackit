import { useLoginContext } from "../components/ContextProvider";

export default function Hoje() {
  const user = useLoginContext();
  console.log(user);
  return "oi";
}

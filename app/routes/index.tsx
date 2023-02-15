import { LoaderFunction } from "remix"

export let loader: LoaderFunction = async () => {
  throw new Error("Sentry error test");

  return null;
}

export default function Home() {
  return (
    <div>
      TEST
    </div>
  )
}

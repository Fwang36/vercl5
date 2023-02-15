import { LoaderFunction } from "remix"

export const loader = async () => {
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

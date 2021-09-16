import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push("/");
    }, 2000);
  }, []);

  return (
    <div className="not-found">
      <h1>OMG!</h1>
      <h2>Looks like you got lost</h2>
      <p>
        Here is the{" "}
        <Link href="/">
          <a>EXIT DOOR</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;

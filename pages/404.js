import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { useEffect } from "react";

function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <div className="not_found">
      <h1>Oops....</h1>
      <h2>The page you requested is not found</h2> <br />
      <Link href="/">
        <a className="btn">Back to Home</a>
      </Link>
    </div>
  );
}

export default NotFound;

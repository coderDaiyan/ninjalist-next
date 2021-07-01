import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List || Home</title>
        <meta name="description" content="This is a list of ninjas" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>
      <div className={styles.container}>
        <h1>Homepage</h1> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
          corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat quas consequatur facere porro quae officia possimus tempora
          repellat totam reprehenderit?
        </p>{" "}
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
          corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat quas consequatur facere porro quae officia possimus tempora
          repellat totam reprehenderit?
        </p>{" "}
        <br />
        <Link href="/ninjas">
          <a className="btn">See Ninja Listings</a>
        </Link>
      </div>{" "}
    </>
  );
}

import Link from "next/link";
import React from "react";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

function index({ ninjas }) {
  return (
    <div>
      <h1>All Ninjas</h1>
      <div>
        {ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninjas.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default index;

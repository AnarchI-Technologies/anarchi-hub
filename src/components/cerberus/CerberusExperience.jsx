import Link from "next/link";
import { cerberusContent } from "@/content/cerberus";
import styles from "./cerberus-experience.module.css";

export default function CerberusExperience({ immersive = false }) {
  return (
    <main className={`${styles.shell} ${immersive ? styles.immersive : ""}`}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>{cerberusContent.eyebrow}</p>
        <h1>{cerberusContent.name}</h1>
        <p className={styles.summary}>{cerberusContent.summary}</p>
        <div className={styles.status} aria-label="Public product status">
          <span><strong>Status</strong>{cerberusContent.status}</span>
          <span><strong>Operating mode</strong>{cerberusContent.operatingMode}</span>
          <span><strong>Decision authority</strong>{cerberusContent.decisionAuthority}</span>
        </div>
        <div className={styles.actions}>
          <Link className={styles.primary} href={immersive ? "/products/cerberus" : "/cerberus"}>{immersive ? "View the hub profile" : "Enter standalone experience"}</Link>
          <Link className={styles.secondary} href="/products">Back to products</Link>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="cerberus-principles">
        <p className={styles.eyebrow}>System principles</p>
        <h2 id="cerberus-principles">Autonomy with an explicit control boundary</h2>
        <div className={styles.grid}>
          {cerberusContent.principles.map((principle, index) => (
            <article className={styles.card} key={principle.title}>
              <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3><p>{principle.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.section} aria-labelledby="cerberus-progress">
        <p className={styles.eyebrow}>Development path</p>
        <h2 id="cerberus-progress">Built as an operational system, not an AI persona</h2>
        <ol className={styles.milestones}>{cerberusContent.milestones.map((milestone) => <li key={milestone}>{milestone}</li>)}</ol>
        <p className={styles.boundary}>Public status will come from a separate, allowlisted projection. This experience never connects browsers to the private CERBERUS runtime.</p>
      </section>
    </main>
  );
}

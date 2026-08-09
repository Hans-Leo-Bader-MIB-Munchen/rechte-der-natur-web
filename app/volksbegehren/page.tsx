import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import styles from "./page.module.css";

export default function Volksbegehren() {
  return (
    <main className={styles.page}>
      <SiteHeader section="Volksbegehren" claimLead="Gib der Natur Recht." claimTrail="Hier wird gesammelt." />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Laufende Volksbegehren</p>
          <h1>Wo aus Vorarbeit eine Kampagne wird.</h1>
          <p className={styles.heroText}>Hier zeigen wir die Landesinitiativen, die den Schritt in die konkrete Kampagne und Unterschriftensammlung gegangen sind. Weitere Landeswege entwickeln wir gemeinsam auf der Deutschland-Seite weiter.</p>
          <div className={styles.actions}>
            <Link className={styles.button} href="/volksbegehren/bayern">Bayern unterstützen</Link>
            <Link className={styles.textLink} href="/deutschland">Vorarbeit in den 16 Bundesländern →</Link>
          </div>
        </div>
      </section>

      <section className={styles.principle}>
        <div>
          <p className={styles.label}>Von der Vorarbeit zur Sammlung</p>
          <h2>Jeder Landesweg wächst in seinem eigenen Tempo.</h2>
        </div>
        <div>
          <p>Auf der Deutschland-Seite bündeln wir Textentwürfe, rechtliche Ausgangspunkte und Menschen, die einen Landesweg aufbauen. Sobald daraus eine konkrete Kampagne mit aktiver Sammlung entsteht, bekommt sie hier ihren Platz.</p>
          <p>Die Kampagnenzentrale koordiniert die gemeinsamen Grundlagen, verbindet Erfahrungen und unterstützt die Initiativen bei Aufbau, Kommunikation und Weiterentwicklung.</p>
        </div>
      </section>

      <section className={styles.bayern}>
        <div className={styles.bayernInner}>
          <div className={styles.bayernMark}>BY</div>
          <div>
            <p className={styles.label}>Bayern · aktive Sammlung</p>
            <h2>Bayern sammelt weiter.</h2>
            <p>Das Volksbegehren in Bayern ist der erste laufende Landesweg der gemeinsamen Kampagne. Für den Zulassungsantrag werden Unterstützungsunterschriften gesammelt. Unser politisches Sammelziel liegt bei mindestens 250.000 Unterschriften und schafft eine breite gesellschaftliche Basis für die nächsten Schritte.</p>
            <Link href="/volksbegehren/bayern">Bayern und die Sammelstrategie ansehen →</Link>
          </div>
        </div>
      </section>

      <section className={styles.call}>
        <p className={styles.label}>Der nächste Landesweg</p>
        <h2>Vorarbeit ist in mehreren Bundesländern vorhanden.</h2>
        <span>Textentwürfe und Ausgangspunkte stehen bereit. Wir koordinieren die weitere Entwicklung und unterstützen Menschen, die daraus vor Ort eine tragfähige Initiative aufbauen wollen.</span>
        <div className={styles.actions}>
          <a className={styles.button} href="mailto:info@dubistdieer.de?subject=Landesweg%20mit%20aufbauen">Landesweg mit aufbauen →</a>
          <Link className={styles.textLink} href="/deutschland">Zu den 16 Bundesländern →</Link>
        </div>
      </section>
    </main>
  );
}

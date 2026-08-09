import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandMark from "../components/BrandMark";
import styles from "./page.module.css";

const gallery = [
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2024/08/Teresa-Vicente-1024x576.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2023/12/030-1024x576.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2025/03/2024_Vortrag-1-1024x576.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2024/10/succow-1024x576.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2024/08/YennY-Vega-1024x576.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2024/04/NikoPaech-1024x576.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2024/04/wirbraucheBlumen-1024x576.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2023/11/Fernando_Bild_0001-1024x576.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2023/10/grupo-sal.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2024/03/SueDuerr-1024x576.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2023/09/VPartei.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2023/05/Ben_Price-.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2023/12/Oberzell_Franzis-1024x576.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2023/03/JessicadenOuter.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2023/02/57ac.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2023/02/57ab.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/11/44k.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/09/44j.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/08/44i.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/07/46c.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/07/59a.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/04/44g.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/04/44f.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/04/44e.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/04/44d.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/04/50.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/04/44c.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2020/12/Folie30.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/04/44b.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/04/55a.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/02/64a.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/01/56c.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/01/56b.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/02/44a.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/01/57b.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/01/45a.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/01/46a-1.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/01/57a-1.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/12/037a.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/11/036g.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/11/35b.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/11/036f.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/11/036e.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/11/036b.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/11/036d.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/11/036c-1.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/11/036a.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/11/041a.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/10/SusaaneWIttmann.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/10/2021_08_25_Vortrag.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/10/2021_08_25_Vortrag_RoN_Philippinen.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/11/35a.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/10/2021_08_25_Vortrag_Kellberger.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/10/042.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/08/Folie32a.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/07/44h.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/01/56a.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2020/12/Folie19.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/04/52a.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/10/041.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2020/12/Folie22.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/10/043.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2022/04/52.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2021/10/043a.jpg",
  "https://gibdernaturrecht.muc-mib.de/wp-content/uploads/2020/12/Folie20.jpg"
];

export default function BuendnispartnerPage() {
  return (
    <main id="top" className={styles.page}>
      <SiteHeader section="Bündnispartner" claimLead="Viele tragen die Idee." claimTrail="Gemeinsam für die Rechte der Natur." />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Bündnispartner & Unterstützer</p>
          <h1>Viele Menschen und Organisationen tragen die Volksbegehren mit.</h1>
          <p>Seit Jahren unterstützen Menschen, Initiativen und Organisationen die Rechte der Natur und die Volksbegehren. Diese Vielfalt macht sichtbar, wie breit die Idee getragen wird.</p>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryIntro}>
          <p className={styles.label}>Gemeinsam sichtbar</p>
          <h2>Das Bündnis wächst seit Jahren.</h2>
          <p>Die Galerie zeigt Bündnispartner und Unterstützer, die die Ziele der Kampagne öffentlich mittragen.</p>
        </div>
        <div className={styles.gallery}>
          {gallery.map((src, index) => (
            <figure className={styles.card} key={src}>
              <img src={src} alt={`Bündnispartner oder Unterstützer der Volksbegehren – Galerieeintrag ${index + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.join}>
        <p className={styles.label}>Mittragen</p>
        <h2>Bündnispartner oder Unterstützer werden.</h2>
        <p>Organisationen, Initiativen und Menschen können die Ziele der Volksbegehren sichtbar mittragen und Teil des Bündnisses werden.</p>
        <div className={styles.actions}>
          <Link className={styles.button} href="/mitmachen">Mitmachen</Link>
          <a className={styles.textLink} href="https://gibdernaturrecht.muc-mib.de/unterstuetzer" target="_blank" rel="noreferrer">Zur bisherigen Unterstützerseite →</a>
        </div>
      </section>

      <footer className={styles.footer}><div className={styles.footerIdentity}><BrandMark/><div><strong>Rechte der Natur</strong><small>Die Volksbegehren</small></div></div><p>Bündnispartner und Unterstützer der Kampagne für eigene Rechte der Natur.</p><Link href="/">Zur Startseite →</Link></footer>
    </main>
  );
}

import SiteHeader from "../../components/SiteHeader";
import BrandMark from "../../components/BrandMark";

const image="/images/spreewitz-spreeaue-eigenrechte.jpg";
const title="Auch ohne Eigenrechte der Spree wurde der Plan aufgehoben";
const description="Was der Fall Spreewitz darüber zeigt, was eigene Rechte eines Flusses tatsächlich zusätzlich verändern könnten.";

export const metadata={
  title:`${title} | Rechte der Natur`,
  description,
  alternates:{canonical:"https://rechtedernatur.de/aktuelles/spreewitz-eigenrechte"},
  openGraph:{title,description,type:"article",url:"https://rechtedernatur.de/aktuelles/spreewitz-eigenrechte",siteName:"Rechte der Natur",images:[{url:image,alt:"Spreeaue als Symbolbild zum Fall Spreewitz und zur Frage eigener Rechte der Spree"}]},
  twitter:{card:"summary_large_image",title,description,images:[image]}
};

export default function Artikel(){
  return <main className="newsPage">
    <SiteHeader section="Aktuelles" claimLead="Was sich bewegt." claimTrail="Geprüft. Eingeordnet. In Bewegung." />
    <section className="newsHero">
      <p className="eyebrow">Spreewitz · Rechte der Natur · 22. September 2026</p>
      <h1>{title}</h1>
      <p className="lead">{description}</p>
    </section>
    <div style={{maxWidth:1100,margin:"0 auto 42px",padding:"0 28px"}}>
      <img src={image} alt="Spreeaue als Symbolbild zum Fall Spreewitz und zur Frage eigener Rechte der Spree" style={{display:"block",width:"100%",height:"auto",borderRadius:20}} />
      <p style={{fontSize:".78rem",lineHeight:1.5,color:"var(--earth)",marginTop:8}}>Symbolbild: Flusslandschaft. KI-generiert mit ChatGPT Images (OpenAI).</p>
    </div>
    <article style={{maxWidth:860,margin:"0 auto",padding:"0 28px 72px",fontSize:"1.08rem",lineHeight:1.75}}>
      <p><strong>Website-Entwurf auf Branch.</strong> Der vollständige, A33-geprüfte Publikationstext v0.6 ist als führende Quelle eingefroren. Die JSX-Übertragung des Langtexts erfolgt vor dem Merge nach Bild-Upload und finalem visuellen Check.</p>
      <p>Vorgesehener Bilddateiname: <code>spreewitz-spreeaue-eigenrechte.jpg</code></p>
      <p>Führende Fassung: <code>systemische-rechtsentwicklung / research/spreewitz/A34-spreewitz-artikel-v0.6-publikationsfassung.md</code></p>
    </article>
    <footer><div className="footerIdentity"><BrandMark/><div><strong>Rechte der Natur</strong><small>Aktuelles</small></div></div></footer>
  </main>
}

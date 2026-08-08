const stories = [
  {
    place: "Spanien",
    title: "Mar Menor",
    text: "Eine Lagune bekommt eigene Rechte. Seit 2022 ist das Mar Menor in Spanien Rechtssubjekt – ein außergewöhnlicher Versuch, ein bedrohtes Ökosystem anders zu schützen.",
    mark: "Wasser",
  },
  {
    place: "Aotearoa / Neuseeland",
    title: "Whanganui",
    text: "Der Fluss ist mehr als Wasser zwischen zwei Ufern. Seine rechtliche Anerkennung verbindet staatliches Recht mit der Beziehung der Māori zu einem lebendigen Ganzen.",
    mark: "Fluss",
  },
  {
    place: "Ecuador",
    title: "Natur in der Verfassung",
    text: "Seit 2008 erkennt die Verfassung Rechte der Natur an. Was daraus folgt, entscheidet sich nicht nur im Gesetzestext, sondern in Gerichten, Behörden und konkreten Konflikten.",
    mark: "Land",
  },
];

const states = [
  "Baden-Württemberg", "Bayern", "Berlin", "Brandenburg",
  "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern",
  "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland",
  "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen",
];

export default function Home() {
  return (
    <main id="top">
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Rechte der Natur – Startseite">
          <span className="brandLeaf" aria-hidden="true">✦</span>
          <span>Rechte der Natur</span>
        </a>
        <nav aria-label="Hauptnavigation">
          <a href="#idee">Die Idee</a>
          <a href="#weltweit">Weltweit</a>
          <a href="#deutschland">Deutschland</a>
          <a className="navAction" href="#mitmachen">Mitmachen</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Rechte der Natur</p>
          <h1>Was wäre, wenn ein Fluss eigene Rechte hätte?</h1>
          <p className="lead">
            Wir schützen Natur – und behandeln sie im Recht trotzdem meist als Sache,
            Eigentum oder Ressource. Weltweit wächst eine andere Idee: Natur kann
            eigene Rechte haben.
          </p>
          <div className="heroActions">
            <a className="buttonPrimary" href="#idee">Verstehen, worum es geht</a>
            <a className="textLink" href="#deutschland">Was heißt das für Deutschland? ↓</a>
          </div>
        </div>
        <div className="heroNature" aria-hidden="true">
          <div className="sun" />
          <div className="river riverOne" />
          <div className="river riverTwo" />
          <div className="land landOne" />
          <div className="land landTwo" />
          <span>Fluss</span>
          <span>Wald</span>
          <span>Meer</span>
        </div>
      </section>

      <section className="plainIdea" id="idee">
        <p className="sectionLabel">Die Idee in einem Satz</p>
        <h2>Natur soll nicht nur geschützt werden, weil sie uns nützt.</h2>
        <p className="bigText">
          Ein Wald, ein Fluss oder ein Ökosystem kann einen eigenen Wert haben – und
          dieser Wert kann im Recht eine eigene Stimme bekommen.
        </p>
      </section>

      <section className="explainGrid" aria-label="Was Rechte der Natur bedeuten">
        <article>
          <span className="symbol">01</span>
          <h3>Eigene Rechte</h3>
          <p>Natur wird nicht nur zum Objekt menschlicher Interessen. Ihre Existenz, Regeneration und ökologischen Funktionen können selbst rechtlich zählen.</p>
        </article>
        <article>
          <span className="symbol">02</span>
          <h3>Jemand spricht für sie</h3>
          <p>Ein Fluss geht natürlich nicht ins Rathaus. Menschen oder Institutionen können seine Rechte vertreten – ähnlich wie wir auch andere nicht selbst handlungsfähige Rechtsträger vertreten.</p>
        </article>
        <article>
          <span className="symbol">03</span>
          <h3>Kein Zauberstab</h3>
          <p>Ein Recht allein rettet noch keinen Wald. Entscheidend ist, ob es ernst genommen, vertreten und bei realen Entscheidungen tatsächlich berücksichtigt wird.</p>
        </article>
      </section>

      <section className="questionBand">
        <p>Der eigentliche Perspektivwechsel</p>
        <h2>Nicht nur: „Was dürfen wir mit der Natur tun?“</h2>
        <strong>Sondern: „Was braucht sie, um zu leben?“</strong>
      </section>

      <section className="world" id="weltweit">
        <div className="sectionIntro">
          <p className="sectionLabel">Weltweit</p>
          <h2>Die Idee ist längst Wirklichkeit.</h2>
          <p>Aber nicht überall auf dieselbe Weise. Genau deshalb lohnt sich der Blick auf die Erfahrungen.</p>
        </div>
        <div className="storyGrid">
          {stories.map((story) => (
            <article className="story" key={story.title}>
              <div className={`storyVisual visual${story.mark}`}>
                <span>{story.mark}</span>
              </div>
              <div className="storyCopy">
                <span className="place">{story.place}</span>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
                <span className="coming">Mehr dazu entsteht hier →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="germanyLead" id="deutschland">
        <div className="germanyLeadCopy">
          <p className="sectionLabel">Deutschland</p>
          <h2>16 Länder. Eine große Frage.</h2>
          <p>
            Wie können Rechte der Natur dort verankert werden, wo Menschen unmittelbar
            über ihre Landesverfassungen und Gesetze mitentscheiden können?
          </p>
        </div>
        <div className="sixteen" aria-hidden="true">16</div>
      </section>

      <section className="campaignIdea">
        <div className="campaignHeadline">
          <span>Unsere Perspektive</span>
          <h2>Nicht ein Volksbegehren. Ein lernendes Netz aus vielen möglichen Wegen.</h2>
        </div>
        <div className="campaignCopy">
          <p>
            Bayern war der Ausgangspunkt. Daraus kann mehr werden: Für jedes Bundesland
            muss neu geprüft werden, was rechtlich möglich, politisch sinnvoll und
            gesellschaftlich tragfähig ist.
          </p>
          <p>
            Die gemeinsame Plattform kann Wissen, Gestaltung, Materialien und Erfahrungen
            teilen. Die konkrete Kampagne muss trotzdem zum jeweiligen Land passen.
          </p>
        </div>
      </section>

      <section className="stateSection" aria-label="Die 16 Bundesländer">
        <div className="stateHeader">
          <p className="sectionLabel">16 Länder</p>
          <h2>Eine gemeinsame Plattform. Sechzehn eigenständige Wege.</h2>
          <p>Noch ist das eine Landkarte der Möglichkeiten – keine Behauptung über bereits laufende Kampagnen.</p>
        </div>
        <div className="stateGrid">
          {states.map((state, index) => (
            <article className={`stateCard ${state === "Bayern" ? "stateActive" : ""}`} key={state}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{state}</h3>
              <p>{state === "Bayern" ? "Ausgangspunkt · Volksbegehren und Verfassungsbeschwerde" : "Perspektive · rechtlicher und politischer Weg noch zu entwickeln"}</p>
              <strong>{state === "Bayern" ? "Bayern ansehen →" : "Noch offen"}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="bavariaFeature">
        <div className="bavariaNumber">01</div>
        <div className="bavariaCopy">
          <p className="sectionLabel">Der erste Weg</p>
          <h2>Bayern: Hier hat unsere Geschichte begonnen.</h2>
          <p>
            Das Volksbegehren „Rechte der Natur“ war mehr als eine Kampagne. Es wurde
            zum Ausgangspunkt für Verfassungsbeschwerde, rechtliche Vertiefung und die
            Frage, wie neue Rechte tatsächlich wirksam werden können.
          </p>
          <div className="bavariaLinks">
            <a href="https://gibdernaturrecht.muc-mib.de" target="_blank" rel="noreferrer">Die bisherige Kampagne und Dokumentation →</a>
            <span>Neue Bayern-Kampagnenseite entsteht innerhalb dieser Plattform.</span>
          </div>
        </div>
      </section>

      <section className="campaignCall">
        <span className="tiny">Vielleicht ein bisschen größenwahnsinnig.</span>
        <h2>Aber warum eigentlich nicht alle 16?</h2>
        <p>
          Nicht gleichzeitig. Nicht identisch. Und nicht um jeden Preis. Aber mit einer
          gemeinsamen Idee, einer lernenden Struktur und dem Mut, Recht neu zu denken.
        </p>
      </section>

      <section className="join" id="mitmachen">
        <p className="sectionLabel">Mitdenken. Mitreden. Mitmachen.</p>
        <h2>Recht verändert sich, wenn Menschen anfangen, anders zu fragen.</h2>
        <div className="joinLinks">
          <a href="#deutschland">Die 16-Länder-Idee erkunden <span>→</span></a>
          <a href="https://systemische-rechtsentwicklung.de" target="_blank" rel="noreferrer">Fachlich tiefer einsteigen <span>→</span></a>
          <a href="https://gibdernaturrecht.muc-mib.de" target="_blank" rel="noreferrer">Unsere bisherige Arbeit <span>→</span></a>
        </div>
      </section>

      <footer>
        <div className="footerBrand">Rechte der Natur</div>
        <p>Eine neue Perspektive auf Recht, Verantwortung und unsere Mitwelt.</p>
        <span>Entwurf · Preview</span>
      </footer>
    </main>
  );
}

const states = [
  ["Baden-Württemberg","Noch offen"],["Bayern","Referenzfall"],["Berlin","Historische Spur"],["Brandenburg","Noch offen"],
  ["Bremen","Noch offen"],["Hamburg","Historische Spur"],["Hessen","Noch offen"],["Mecklenburg-Vorpommern","Noch offen"],
  ["Niedersachsen","Historische Spur"],["Nordrhein-Westfalen","Noch offen"],["Rheinland-Pfalz","Noch offen"],["Saarland","Noch offen"],
  ["Sachsen","Historische Spur"],["Sachsen-Anhalt","Noch offen"],["Schleswig-Holstein","Noch offen"],["Thüringen","Historische Spur"]
];

const template = [
  ["01","Ausgangslage","Welche rechtliche und politische Situation besteht im Land?"],
  ["02","Rechtlicher Weg","Welche Form von Volksgesetzgebung ist möglich und welche Hürden gelten?"],
  ["03","Zieltext","Was soll konkret geändert werden – und warum genau so?"],
  ["04","Netzwerk","Wer trägt die Initiative gesellschaftlich, fachlich und organisatorisch?"],
  ["05","Kampagne","Wie werden Menschen verständlich erreicht, ohne juristisch zu überversprechen?"],
  ["06","Lernen","Welche Erfahrungen aus anderen Ländern und Verfahren sind übertragbar – und welche nicht?"]
];

export default function Volksbegehren() {
  return <main className="hubPage">
    <header className="hubHeader"><a href="/">← Rechte der Natur</a><span>Volksbegehren</span></header>

    <section className="hubHero">
      <p className="hubEyebrow">16 Länder · 16 unterschiedliche Wege</p>
      <h1>Ein Volksbegehren lässt sich nicht kopieren.</h1>
      <p>Aber Wissen, Gestaltung, rechtliche Prüfung und Erfahrungen lassen sich teilen. Genau dafür entsteht diese Plattform.</p>
    </section>

    <section className="hubPrinciple">
      <div><span>Die gemeinsame Idee</span><h2>Rechte der Natur dort verankern, wo Menschen unmittelbar über Landesrecht mitentscheiden können.</h2></div>
      <div><p>Jedes Bundesland hat eigene verfassungsrechtliche Voraussetzungen, Verfahrensregeln und politische Bedingungen. Deshalb braucht jedes Land einen eigenen Weg.</p><p>Die Plattform soll nicht sechzehn Kampagnen simulieren. Sie soll zeigen, wo etwas geprüft, vorbereitet oder tatsächlich getragen wird – und welche Erfahrungen daraus entstehen.</p></div>
    </section>

    <section className="hubMap">
      <div className="hubSectionHead"><p>Deutschland</p><h2>Wo stehen die Länder?</h2><span>Arbeitsdarstellung · keine Behauptung über laufende Kampagnen.</span></div>
      <div className="hubStates">{states.map(([name,status],i)=><article className={name==="Bayern"?"hubState hubStateActive":"hubState"} key={name}><span>{String(i+1).padStart(2,"0")}</span><h3>{name}</h3><strong>{status}</strong>{name==="Bayern"?<a href="/volksbegehren/bayern">Zum Referenzfall →</a>:<em>Prüfung und Aufbau folgen</em>}</article>)}</div>
    </section>

    <section className="hubTemplate">
      <div className="hubSectionHead"><p>Das Länder-Template</p><h2>Sechs Fragen, bevor eine Kampagne überhaupt beginnt.</h2></div>
      <div className="templateGrid">{template.map(([n,title,text])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="hubBayern">
      <div className="hubBayernMark">BY</div>
      <div><p>Referenzfall 01</p><h2>Bayern ist kein Muster zum Kopieren. Bayern ist der erste Lernfall.</h2><p>Hier begann die Initiative, hier liegen historische Materialien und hier lässt sich besonders gut nachvollziehen, wie aus einer politischen Forderung eine weitergehende rechtliche und methodische Arbeit wurde.</p><a href="/volksbegehren/bayern">Bayern ansehen →</a></div>
    </section>

    <section className="hubCall"><p>Ein Land starten?</p><h2>Erst prüfen. Dann vernetzen. Dann entscheiden.</h2><span>Die spätere Mitmachen-Ebene wird genau hier ansetzen.</span></section>

    <footer className="hubFooter"><a href="/">Startseite</a><a href="/volksbegehren/bayern">Bayern</a><span>Preview · noch keine Außenfreigabe</span></footer>
  </main>
}

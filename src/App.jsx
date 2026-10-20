import { useEffect, useState } from 'react';
import { CONCEPTS, STAGES } from './data.js';
import logo from './assets/last-github-action-hero.svg';
import { formatTimecode, heroRank, pipelineProgress } from './lib.js';

const TAPE = (import.meta.env.VITE_COMMIT || 'local').slice(0, 7);

/**
 * Composant principal de l'application
 */
export default function App() {

  const [seconds, setSeconds] = useState(0);

  // Indicateur du nombre d'étapes de la simulation de pipeline terminées
  const [done, setDone] = useState(0);

  // Indique si la simulation de pipeline est en cours de fonctionnement ou non
  const [running, setRunning] = useState(false);

  // const spyingVariable = "Hans Gruber"

  /**
   * Gère le changement d'état "running"
   */
  useEffect(() => {

    // cas du premier montage du composant : rien n'est fait si "running" n'est pas vrai
    if (!running) {
      return undefined;
    }
    const stages = setInterval(() => {
      setDone((d) => {
        // si toutes les étapes sont terminées
        if (d + 1 >= STAGES.length) {
          setRunning(false);
        }

        return Math.min(d + 1, STAGES.length);
      });
    }, 900);

    // réglage du timer pour progression des étapes
    const clock = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => {
      clearInterval(stages);
      clearInterval(clock);
    };
  }, [running]);

  /**
   * Démarre la simulation du pipeline
   */
  const start = () => {
    setDone(0);
    setSeconds(0);
    setRunning(true);
  };

  const progress = pipelineProgress(done, STAGES.length);
  const finished = done === STAGES.length;

  return (
    <div className="screen">
      <header className="hero">
        <p className="presents">Universal CI/CD Prod. presents</p>
        <h1 className="logo">
          <img src={logo} alt="Last GitHub Action Hero" />
        </h1>
        <p className="tagline">Il est automatique, il est rapide, il déploie sans demander la permission.</p>
      </header>

      <main className="columns">
        <section aria-labelledby="concepts" className="card left">
          <h2 id="concepts">Le récapitulatif GitHub Actions</h2>
          <p className="lead">Tout ce qu’il faut savoir avant que ça explose :</p>
          <dl className="concepts">
            {CONCEPTS.map((c) => (
              <div key={c.term}>
                <dt>
                  {c.term} <small>« {c.film} »</small>
                </dt>
                <dd>{c.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="pipeline" className="card right">
          <h2 id="pipeline">Le descriptif du pipeline</h2>
          <button type="button" onClick={start} disabled={running}>
            {running ? 'Yippee kiyay!' : 'Run, run, run!'}
          </button>
          <div className="rank" aria-live="polite">
            Grade : <strong>{heroRank(done, STAGES.length)}</strong> ({progress} %) · REC · {formatTimecode(seconds)}
          </div>
          <div className="bar" aria-hidden="true">
            <div style={{ width: `${progress}%` }} />
          </div>
          {finished && <p className="boom">BOOM! Mission terminée.</p>}
          <ol className="stages">
            {STAGES.map((stage, i) => (
              <li key={stage.id} className={i < done ? 'ok' : i === done && running ? 'run' : ''}>
                <h3>
                  {stage.codename} <small>{stage.label}</small>
                </h3>
                <p>{stage.text}</p>
                <span className="status">{i < done ? '✔ Validé' : i === done && running ? '▶ En cours' : '… En attente'}</span>
              </li>
            ))}
          </ol>
        </section>
      </main>

        <p className="quote">
          ★★★★ &quot;Un pipeline à couper le souffle.&quot;
          <cite>- Les cahiers du commit</cite>
        </p>
        <p className="quote">
          ★★★★★ &quot;Workflow culte !&quot;
          <cite>- MadmovOps</cite>
        </p>
        <p className="quote">
          ★★★★ &quot;Jamais vu un cycle rouge/vert/refactor aussi intense !&quot;
          <cite>- Christopher Gitpush</cite>
        </p>
        <p className="quote">
          ★★★ &quot;Les builds sont un peu longuets sur la fin.&quot;
          <cite>- Première</cite>
        </p>
      <footer>Cassette n° {TAPE} · construite et déployée par GitHub Actions</footer>
    </div>
  );
}

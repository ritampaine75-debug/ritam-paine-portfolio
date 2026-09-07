import Reveal from '../components/Reveal';
import { Icon } from '../components/Icons';
import { Eyebrow } from '../components/ui';
import { SOCIAL } from '../data/site';

export default function Contact() {
  const email = (SOCIAL.contactEmail || '').trim();
  return (
    <section className="section tight" id="contact">
      <div className="container">
        <Reveal>
          <div className="contact-card">
            <div className="contact-head">
              <Eyebrow>Contact</Eyebrow>
              <h2>Have an idea worth building?</h2>
              <p>
                I&rsquo;m interested in building useful digital products, experimenting with new
                technologies and turning interesting ideas into working applications.
              </p>
              {!email && (
                <p style={{ marginTop: 14, color: 'var(--text-3)', fontSize: 13.5 }}>
                  No public email is listed right now &mdash; the fastest ways to reach me are
                  Instagram and GitHub below.
                </p>
              )}
            </div>

            <div className="contact-actions">
              <a
                href={SOCIAL.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ justifyContent: 'flex-start' }}
              >
                <Icon name="instagram" />
                Message on Instagram
                <span style={{ marginLeft: 'auto', opacity: 0.75 }}>
                  <Icon name="arrowUpRight" />
                </span>
              </a>

              {email ? (
                <a href={`mailto:${email}`} className="btn btn-ghost" style={{ justifyContent: 'flex-start' }}>
                  <Icon name="mail" />
                  Email Me
                  <span style={{ marginLeft: 'auto', opacity: 0.75 }}>
                    <Icon name="arrowRight" />
                  </span>
                </a>
              ) : null}

              <a
                href={SOCIAL.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ justifyContent: 'flex-start' }}
              >
                <Icon name="github" />
                View GitHub
                <span style={{ marginLeft: 'auto', opacity: 0.75 }}>
                  <Icon name="arrowUpRight" />
                </span>
              </a>

              <p className="contact-note" style={{ marginTop: 2 }}>
                {SOCIAL.instagramHandle} &middot; github.com/{SOCIAL.githubUsername}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

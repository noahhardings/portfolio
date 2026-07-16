import './style.css'

const data = {
  name: 'Noah Hardings',
  tagline: 'Software and Infrastructure engineer',
  intro:
    'I build Discord bots and backend tools in Kotlin and Java, and I run the servers they live on.',
  links: [
    { label: 'github', href: 'https://github.com/noahhardings' },
    { label: 'bio', href: 'https://e-z.bio/kotlin' },
    { label: 'discord', copy: 'noah.kt', title: 'noah.kt — click to copy' },
  ],

  skills: [
    {
      title: 'Discord bot development',
      body: 'Designing and shipping Discord bots end to end — command frameworks, event handling, sharding, and persistence with the JVM Discord libraries (JDA / Kord).',
    },
    {
      title: 'Kotlin & Java',
      body: 'My core stack. Idiomatic Kotlin and Java for bots, backend services, and tooling — coroutines, clean architecture, and maintainable codebases.',
    },
    {
      title: 'System administration',
      body: 'Hands-on Linux server management, deployments, and uptime. I handle system administration for Reece at Cloudexa Hosting.',
    },
  ],

  projects: [
    {
      name: 'Alchemist',
      href: 'https://github.com/noahhardings/Alchemist',
      role: 'Maintainer',
      body: 'An open-source project I maintain on GitHub — feature development, reviewing contributions, and keeping the codebase healthy.',
    },
  ],

  experience: [
    {
      role: 'Software Engineer',
      org: 'Matrix Studios, Inc.',
      href: 'https://matrix-studios-software.github.io/',
      detail:
        'Software engineering at Matrix Studios, Inc. — building and shipping software.',
    },
    {
      role: 'COO',
      org: 'Signpost, LLC',
      href: 'https://signpost.cv',
      detail:
        'Chief Operating Officer at Signpost, LLC, a subsidiary of Matrix Studios, Inc.',
    },
    {
      role: 'System Administrator',
      org: 'Cloudexa Hosting',
      href: 'https://cloudexa-hosting.com',
      detail:
        'System administration for Reece at Cloudexa Hosting — managing servers, deployments, and keeping infrastructure reliable and online.',
    },
  ],

  vouches: [
    {
      name: 'itztylxr',
      role: 'Reputable community member',
      quote:
        'Noah is reliable and knows his stuff — solid developer and someone you can trust to get things done.',
    },
    {
      name: 'Reece',
      role: 'Cloudexa Hosting',
      quote:
        'Noah keeps our infrastructure running without a hitch. Dependable, sharp, and easy to work with.',
    },
  ],
}

function navLink(link) {
  if (link.href) {
    return `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`
  }
  if (link.copy) {
    return `<button type="button" class="linklike" data-copy="${link.copy}" title="${link.title || 'click to copy'}">${link.label}</button>`
  }
  return `<span>${link.label}</span>`
}

function render() {
  document.querySelector('#app').innerHTML = `
    <main class="wrap">
      <nav class="topnav">
        ${data.links.map(navLink).join('<span class="sep">·</span>')}
      </nav>

      <header class="header">
        <h1>${data.name}</h1>
        <p class="subtitle">${data.tagline}</p>
      </header>

      <div class="avatar">
        <img src="./avatar.jpg" alt="${data.name}"
          onerror="this.closest('.avatar').classList.add('is-empty'); this.replaceWith(Object.assign(document.createElement('span'),{className:'avatar-initials',textContent:'NH'}))" />
      </div>

      <p class="intro">${data.intro}</p>

      <section class="section">
        <h2>What I do</h2>
        ${data.skills
          .map(
            (s) => `
          <div class="row">
            <div class="row-title">${s.title}</div>
            <p class="row-body">${s.body}</p>
          </div>`
          )
          .join('')}
      </section>

      <section class="section">
        <h2>Open source</h2>
        ${data.projects
          .map(
            (p) => `
          <div class="row">
            <div class="row-title">
              <a href="${p.href}" target="_blank" rel="noopener noreferrer">${p.name}</a>
              <span class="tag">${p.role}</span>
            </div>
            <p class="row-body">${p.body}</p>
          </div>`
          )
          .join('')}
      </section>

      <section class="section">
        <h2>Experience</h2>
        ${data.experience
          .map(
            (e) => `
          <div class="row">
            <div class="row-title">
              ${e.role} ·
              <a href="${e.href}" target="_blank" rel="noopener noreferrer">${e.org}</a>
            </div>
            <p class="row-body">${e.detail}</p>
          </div>`
          )
          .join('')}
      </section>

      <section class="section">
        <h2>Vouches</h2>
        ${data.vouches
          .map(
            (v) => `
          <figure class="vouch">
            <blockquote>${v.quote}</blockquote>
            <figcaption>— ${v.name}, <span class="muted">${v.role}</span></figcaption>
          </figure>`
          )
          .join('')}
      </section>

      <footer class="footer">
        © ${new Date().getFullYear()} ${data.name}
      </footer>
    </main>
  `
}

render()

// Copy Discord username to clipboard on click
document.querySelectorAll('[data-copy]').forEach((el) => {
  el.addEventListener('click', async () => {
    const original = el.textContent
    try {
      await navigator.clipboard.writeText(el.dataset.copy)
      el.textContent = 'copied!'
    } catch {
      el.textContent = el.dataset.copy
    }
    setTimeout(() => (el.textContent = original), 1200)
  })
})

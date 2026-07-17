import './style.css'

const data = {
  name: 'Noah Hardings',
  tagline: 'Software and Infrastructure engineer',
  intro:
    'Hello, I\'m Noah, a software engineer and system administrator. I have experience with building AIO minecraft cores, Discord bots, and I also like doing system administration. I\'m currently working on a few open-source projects, and I\'m always looking for new opportunities to learn and grow.',
  links: [
    { label: 'github', href: 'https://github.com/noahhardings' },
    { label: 'bio', href: 'https://e-z.bio/kotlin' },
    { label: 'discord', copy: 'noah.kt', title: 'noah.kt — click to copy' },
    { label: 'namemc', href: 'https://namemc.com/profile/noahcodes'},
    { label: 'paypal', href: 'https://paypal.me/redisport' },
    { label: 'telegram', href: 'https://t.me/noahdotkt'} 
  ],

  skills: [
    {
      title: 'Discord bot development',
      body: 'I like to utilize JDA when It comes to bot development, I believe that I\'m very qualified and experienced when it comes to the JDA ecosystem, and I can do pretty much anything with it.',
    },
    {
      title: 'Kotlin & Java',
      body: 'I use both, Kotlin and Java daily. Whether it\'s me maintaing a project, such as Alchemist, fixing bugs for a client, or just doing some personal projects, I\'m very comfortable with both languages.',
    },
    {
      title: 'System administration',
      body: 'I\'ve been maintaing Linux servers for a while now, and I\'ve learned a lot about how to keep servers running smoothly. I\'m able to do essentially anything, whether that\'s pterodactyl installs, server monitoring tools, automated backups, etc.',
    },
  ],

  projects: [
    {
      name: 'Alchemist',
      href: 'https://github.com/noahhardings/Alchemist',
      role: 'Maintainer',
      body: 'Alchemist is a fast, cross-version Minecraft server rank/permissions core (ranks, punishments, friends, parties, staff utils, and webhooks); Built with Kotlin on the Paper API, using MongoDB / MySQL and Redis to sync data across multiple servers. It is designed to be easy to use, while also being powerful and flexible.',
    },
    {
      name: 'Staff Core',
      role: 'Owner',
      body: 'A Minecraft staff moderation plugin built with Kotlin on the Paper API, using MySQL and Redis to sync bans, mutes, chat controls, and vanish across multiple servers.',
    },
    {
      name: 'Honey',
      role: 'Developer',
      body: 'Honey is a small Kotlin library that saves and loads your data from MongoDB, Redis, or files using the same simple code, so you can swap databases without rewriting anything, and it can sync data live across servers.'
    },
    // {
    //   name: 'Clerk',
    //   role: 'Developer',
    //   body: 'Clerk is a minecraft pluigin that spoofs players and acts as a player simulator, it\'s a very cool project that we\'ve managed to make quite useful for server owners'
    // },
    // {
    //   name: 'Casket',
    //   role: 'Developer',
    //   body: 'Casket is an AIO crate plugin created by me and my team at Matrix Studios, it\'s a very cool plugin that allows you to create customizable crates, with cool openings, and a lot of other features.'
    // },
    // {
    //   name: 'Wave',
    //   role: 'Developer',
    //   body: 'Wave is an AIO hub core plugin that I created that allows for ease of use for server owners, it has a lot of features that make it easy to create and manage a hub server, it includes a server selector, jump pads, and a lot of other features.'
    // },
    {
      name: 'Skeleton',
      role: 'Developer',
      href: 'https://github.com/Matrix-Studios-Software/skeleton',
      body: 'Skeleton is an extensive easy-to-use framework that supports creating, destroying, and managing containers using the Docker framework. It is designed to be simple and easy to use, while also being powerful and flexible.'
    },
    {
      name: 'Portfolio',
      href: 'https://github.com/noahhardings/portfolio',
      role: 'Developer',
      body: 'Nothing much to say here, built on NodeJS, simple site that allows me to showcase my projects, reviews, and general information.'
    },
    {
      name: 'Towny Bot',
      role: 'Developer',
      body: 'Towny Bot is a minecraft paper plugin that hooks into the Towny API, and allows you to pull information about nations, towns, and residents to discord, it also hooks into the Towny Resources API to view the resources of a town.'
    },
    {
      name: 'FRC Team Website',
      role: 'Developer',
      body: 'I created a website for my high school\'s FRC team, it\'s a simple and easy to use website that allows you to view the team\'s information, and it also has a blog that allows you to view the team\'s updates.'
    }
  ],

  experience: [
    {
      role: 'Software Engineer',
      org: 'Matrix Studios, Inc.',
      href: 'https://matrix-studios-software.github.io/',
      detail:
        'Software engineering at Matrix Studios, Inc. — working on various private software projects.',
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
        'System administration for Reece at Cloudexa Hosting. I assist with Pterodactyl installs, server monitoring tools, automated backups, and more.',
    },
  ],

  vouches: [
    {
      name: 'itztylxr',
      role: 'Reputable community member',
      quote:
        'I\'ve worked with Noah on several projects and he consistently delivers high-quality work. He\'s a great team member and a pleasure to collaborate with.',
    },
    {
      name: 'Reece',
      role: 'Cloudexa Hosting',
      quote:
        'I really like Noah because he\'s knowledgeable, reliable, and always willing to help me out when I need it something done.',
    },
    {
      name: '98ping',
      role: 'Owner of Matrix Studios, Inc.',
      quote:
        'Noah is a very talented software engineer. He\'s been a great asset to my team and I highly recommend him for any project you may have.',
    },
    {
      name: 'BMoneyBoy',
      role: 'Owner of MoneySMP',
      quote:
        'Noah has been a great help to me and my team. He\'s always willing to lend a hand and is very knowledgeable in his field.',
    }
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
        <span class="clock" id="clock"></span>
      </nav>

      <header class="header">
        <h1>${data.name}</h1>
        <p class="subtitle">${data.tagline}</p>
      </header>

      <div class="avatar">
        <img src="./avatar.png" alt="${data.name}"
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

// Live local clock in Central Time (auto-shows CST/CDT with DST)
function updateClock() {
  const el = document.querySelector('#clock')
  if (!el) return
  el.textContent = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZoneName: 'short',
  }).format(new Date())
}
updateClock()
setInterval(updateClock, 1000)

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

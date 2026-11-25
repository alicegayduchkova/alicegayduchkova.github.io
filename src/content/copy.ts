// Verbatim from content/copy.md. Add chapters' copy here as they are built.
export const hero = {
  wordmark: 'ag.',
  name: 'Alisa Gayduchkova',
  introFirst: 'Business student at UMass Lowell.',
  introRest:
    "Since 2024 I've supported a solar sales team, built ticketing systems for a laser manufacturer, helped grow a startup's social media, and now I help financial advisors and investors at Franklin Templeton.",
  jobsGlance: [
    ['2024', 'Sunrun', 'Sales support'],
    ['2025', 'IPG Photonics', 'Business analytics'],
    ['2026', '52 Launch', 'Marketing'],
    ['Now', 'Franklin Templeton', 'Client service'],
  ],
  links: { resume: '/resume.pdf', linkedin: 'https://www.linkedin.com/in/alice-gayduchkova', email: 'mailto:alicegayduchkova@gmail.com' },
}
export const about = { headline: "New countries, new jobs, new systems. I've learned to figure things out fast." }

// Chapter 1. Listed alphabetically, then Massachusetts, so no place leads the list (CLAUDE.md).
export const places = {
  headline: about.headline,
  lived: ['Canada', 'Kazakhstan', 'Russia'],
  livedNote: 'lived there',
  home: { name: 'Massachusetts', note: 'home since 2018', sub: 'Shrewsbury, MA' },
  paragraph:
    'I grew up across a few different countries and cultures before my family settled in Massachusetts in 2018. Living in different places taught me to adapt fast, get comfortable with new people, and see things from more than one point of view.',
}

// Chapter 2. Chronological (copy.md lists newest first).
export const jobs = {
  title: "Where I've worked",
  intro: 'Four roles so far, from solar sales to mutual funds. Each one brought me closer to working with clients in finance.',
  story:
    'Since 2024 I’ve held four jobs in four different industries: solar, manufacturing, marketing, and now mutual funds. Each time I started out knowing very little, figured it out, and then made it clear for the next person. That last part is why I like working with clients.',
  steps: ['Started out knowing little', 'Figured it out', 'Made it clear for the next person'],
  list: [
    { industry: 'Solar', role: 'Solar Panel Sales Assistant', org: 'Sunrun', when: 'Jun – Aug 2024', where: 'Worcester, MA', bullets: [
      'Walked customers through solar products, pricing, and installation so they understood their options.',
      'Prepared proposals and quotes, and helped the sales team generate leads and follow up.'] },
    { industry: 'Manufacturing', role: 'Business Analytics Intern', org: 'IPG Photonics', when: 'Jun – Dec 2025', where: 'Marlborough, MA', bullets: [
      'Interviewed staff to write standard operating procedures and built them into the production database.',
      'Created ticketing systems in Ivanti for facilities and in Jira for diode assembly.',
      'Validated production-time data on human and manufacturing errors for a company audit.'] },
    { industry: 'Marketing', role: 'Marketing Intern', org: '52 Launch', when: 'Feb – May 2026', where: 'Framingham, MA', bullets: [
      'Supported lead-generation campaigns, working closely with sales to improve outreach.',
      'Increased social media engagement with short-form video and interactive polls.',
      'Analyzed competitor brands to find gaps and sharpen messaging.'] },
    { industry: 'Mutual funds', role: 'Client Representative Intern', org: 'Franklin Templeton / Putnam Investments', when: 'Jun 2026 – present', where: '', bullets: [
      'Handle inbound calls from financial advisors, shareholders, and beneficiaries about mutual fund accounts.',
      'Explain purchases, redemptions, exchanges, and account transfers, along with share classes, fees, and minimum investments.',
      'Guide beneficiaries through trust and inheritance paperwork with patience and clear next steps.'],
      learning: 'how to stay calm and precise when an advisor or client needs an answer right now.' },
  ],
}

// Chapter 3
export const certs = {
  title: "What I've learned",
  intro: "Courses I took on my own, outside class, from markets to quantum computing. Here's what each one covers.",
  list: [
    { title: 'Bloomberg Market Concepts', issuer: 'Bloomberg', date: '', text: 'A self-paced course built on the Bloomberg Terminal covering economic indicators, currencies, fixed income, and equities, and how each one moves markets.' },
    { title: 'The Business Intelligence Analyst Course', issuer: 'Udemy', date: 'Dec 2025', text: 'How analysts turn raw company data into reports and dashboards: preparing and cleaning data, working in Excel, querying databases, and building visualizations.' },
    { title: 'How to Tell a Story with Data', issuer: 'Udemy', date: 'Dec 2025', text: 'Choosing the right chart, cutting the clutter, and building a clear message so the people making decisions see what matters.' },
    { title: 'Quantum Computing Risk and Security', issuer: 'Udemy', date: 'Dec 2025', text: "What quantum computers are, why they could break today's encryption, and how organizations like banks are preparing for it." },
  ],
}

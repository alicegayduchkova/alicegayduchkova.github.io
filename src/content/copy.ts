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
  list: [
    { industry: 'Solar', role: 'Solar Panel Sales Assistant', org: 'Sunrun', logo: { src: '/logos/sunrun.webp', alt: 'Sunrun logo', w: 320, h: 320 }, when: 'Jun – Aug 2024', where: 'Worcester, MA', bullets: [
      'Walked customers through solar products, pricing, and installation so they understood their options.',
      'Prepared proposals and quotes, and helped the sales team generate leads and follow up.'] },
    { industry: 'Manufacturing', role: 'Business Analytics Intern', org: 'IPG Photonics', logo: { src: '/logos/ipg-photonics.webp', alt: 'IPG Photonics logo', w: 960, h: 240 }, when: 'Jun – Dec 2025', where: 'Marlborough, MA', bullets: [
      'Interviewed staff to write standard operating procedures and built them into the production database.',
      'Created ticketing systems in Ivanti for facilities and in Jira for diode assembly.',
      'Validated production-time data on human and manufacturing errors for a company audit.'] },
    { industry: 'Marketing', role: 'Marketing Intern', org: '52 Launch', logo: { src: '/logos/52-launch.webp', alt: '52 Launch logo', w: 320, h: 297 }, when: 'Feb – May 2026', where: 'Framingham, MA', bullets: [
      'Supported lead-generation campaigns, working closely with sales to improve outreach.',
      'Increased social media engagement with short-form video and interactive polls.',
      'Analyzed competitor brands to find gaps and sharpen messaging.'] },
    { industry: 'Mutual funds', role: 'Client Representative Intern', org: 'Franklin Templeton / Putnam Investments', logo: { src: '/logos/franklin-templeton.webp', alt: 'Franklin Templeton Investments logo', w: 720, h: 395 }, when: 'Jun 2026 – present', where: '', bullets: [
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

// Chapter 4 (verbatim). Figures are coursework, not investment advice.
export const projects = {
  title: 'Projects I worked on',
  intro: 'Coursework where I researched companies, ran the numbers, and explained what they mean for an investor.',
  erie: {
    kind: 'Finance coursework, 2026',
    title: 'Return and risk analysis of Erie Indemnity (ERIE)',
    summary: 'I calculated six months of total returns for one Class A share, splitting each month into price change and dividend income, then measured how much the returns varied.',
    avg: 0.03, sd: 11.07,
    months: [['Mar', -7.41], ['Apr', -12.38], ['May', -1.56], ['Jun', 17.8], ['Jul', -4.39], ['Aug', 8.12]] as [string, number][],
    source: 'Source: Prices and dividends from Yahoo Finance.',
    takeaway: 'The average was close to zero, but single months swung from −12% to +18%. A flat average can hide a lot of risk, and a client needs that explained, not just reported.',
  },
  ft: {
    kind: 'Company research, 2026',
    title: 'Franklin Templeton vs. JPMorgan Chase',
    summary: 'I compared an asset manager that earns most of its revenue from fees on the assets it manages with a diversified bank that also lends and offers wealth management. I looked at products, competitors, revenue and profit trends, and risks.',
    takeaway: 'Fee revenue moves with markets and fund flows, so keeping advisors and their clients invested matters a great deal.',
  },
  horizon: {
    kind: 'Financial planning coursework, 2026',
    title: 'Matching investments to time horizon',
    summary: 'I sorted financial goals into short, medium, and long term, set savings targets, then revised them after looking at affordability, financing, and retirement needs.',
    takeaway: 'Money you need soon calls for stability. Money you need in twenty years can take on more risk for growth.',
  },
}

// Chapter 5 (verbatim)
export const school = {
  title: 'My time at UMass Lowell',
  intro: "Business administration with concentrations in finance and business analytics, graduating May 2028. Here's where I spend my time outside class.",
  story:
    "I spent my first year of college as a Division II swimmer at Assumption University, then transferred to UMass Lowell, where I study business administration with concentrations in finance and business analytics. On my own I've taken courses on markets through Bloomberg, on telling stories with data, and on quantum computing and security. Outside of work and class, I love to sew, work out, and hang out with my friends.",
  list: [
    { name: 'A.I.M.', full: 'Artificial Intelligence Multidisciplinary Society', role: 'Director of Operations',
      text: "UMass Lowell's AI club, where students from every major work together on real AI projects. I help run the club's operations.", link: { href: 'https://aimsociety.org', label: 'aimsociety.org' } },
    { name: 'Manning School of Business', full: 'UMass Lowell', role: 'B.S. Business Administration',
      courses: 'Financial Portfolio and Analysis, Financial Markets and Institutions, Marketing, Business Analytics, Business Information Systems, Statistics, Microeconomics' },
    { name: 'Assumption University', full: '', role: 'NCAA Division II Swimming, 2024 – 2025',
      courses: 'Principles of Accounting I, Principles of Accounting II' },
  ],
}

export const timeline = {
  title: 'Working while I study',
  intro: 'Four roles since 2024, from solar sales support to mutual fund servicing, alongside school.',
  tracks: { life: 'Life and school', career: 'Career' },
  // Chronological. Track assignment is mine (copy.md lists them in one flat list).
  items: [
    { when: '2018', track: 'life', text: 'Moved to Massachusetts. After growing up across three other countries.' },
    { when: 'Summer 2024', track: 'career', text: 'Solar Panel Sales Assistant, Sunrun' },
    { when: 'Fall 2024', track: 'life', text: 'Division II swimmer, Assumption University, first year of college' },
    { when: 'Jun – Dec 2025', track: 'career', text: 'Business Analytics Intern, IPG Photonics' },
    { when: 'Fall 2025', track: 'life', text: 'Transferred to UMass Lowell (Manning School of Business, as a sophomore)' },
    { when: 'Dec 2025', track: 'life', text: 'Three Udemy certificates (business intelligence, data storytelling, quantum risk)' },
    { when: 'Feb – May 2026', track: 'career', text: 'Marketing Intern, 52 Launch' },
    { when: '2026', track: 'career', text: "Director of Operations, A.I.M., UMass Lowell's AI club" },
    { when: 'Jun 2026 – present', track: 'career', text: 'Client Representative Intern, Franklin Templeton / Putnam Investments' },
    { when: '2026', track: 'life', text: 'Bloomberg Market Concepts (Bloomberg certificate)' },
    { when: 'May 2028', track: 'life', text: 'Graduating. B.S. Business Administration, finance and business analytics' },
  ] as { when: string; track: 'life' | 'career'; text: string }[],
}

// Chapter 6 (verbatim)
export const skills = {
  title: 'What I use at work and in class.',
  groups: [
    { name: 'Finance and clients', items: ['Mutual fund servicing', 'Share classes and fees', 'Advisor communication', 'Trust and beneficiary paperwork', 'Company research', 'Sales support'] },
    { name: 'Data and analytics', items: ['Excel', 'Data validation', 'KPIs', 'Data visualization', 'Return and risk calculations'] },
    { name: 'Tools and process', items: ['Microsoft Office', 'Jira', 'Ivanti', 'SOP writing', 'ISO 9001'] },
  ],
}
export const contact = {
  title: 'Get in touch',
  text: 'Want to talk about my work or anything on this page? Email is the fastest way to reach me.',
  email: 'alicegayduchkova@gmail.com',
  links: { talk: "Let's talk", resume: 'View my résumé', linkedin: 'LinkedIn' },
}
export const footer = 'Alisa (Alice) Gayduchkova, Shrewsbury, Massachusetts. Project figures come from coursework and are not investment advice.'

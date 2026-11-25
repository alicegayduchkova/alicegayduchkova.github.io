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

// Chapter 2. Chronological (copy.md lists newest first). Bullets, dates and places follow resume.pdf, which is more detailed than copy.md.
const logo = (src: string, alt: string) => ({ src, alt, w: 640, h: 400 })
export const resume = {
  summary:
    'Business Administration student concentrating in Finance and Business Analytics, with experience across client service, sales support, marketing, and business analytics. Currently support financial advisors, shareholders, and beneficiaries with mutual fund accounts at Franklin Templeton / Putnam Investments.',
}
export const jobs = {
  title: "Where I've worked",
  intro: 'Four roles so far, from solar sales to mutual funds. Each one brought me closer to working with clients in finance.',
  story:
    'Since 2024 I\u2019ve held four jobs in four different industries: solar, manufacturing, marketing, and now mutual funds. Each time I started out knowing very little, figured it out, and then made it clear for the next person. That last part is why I like working with clients.',
  list: [
    { industry: 'Solar', role: 'Solar Panel Sales Assistant', org: 'Sunrun', logo: logo('/logos/sunrun.webp', 'Sunrun logo'), when: 'Jun 2024 \u2013 Aug 2024', where: 'Worcester, MA',
      bullets: [
        'Explained solar products, pricing, and installation processes so customers understood their options.',
        'Prepared sales documents, proposals, and quotes for new and current clients.',
        'Supported the sales team in generating leads and following up on customer inquiries.'],
      tags: ['Solar products', 'Pricing', 'Installation processes', 'Proposals and quotes', 'Lead generation', 'Customer follow-up'] },
    { industry: 'Manufacturing', role: 'Business Analytics Intern', org: 'IPG Photonics Corporation', logo: logo('/logos/ipg-photonics.webp', 'IPG Photonics logo'), when: 'Jun 2025 \u2013 Dec 2025', where: 'Marlborough, MA',
      bullets: [
        'Interviewed staff to write standard operating procedures and built them into the in-house production database.',
        'Created ticketing systems in Ivanti for Facilities and in Jira for the Diode Assembly department.',
        'Stacked and validated production-time data on human and manufacturing errors to support a company audit.'],
      tags: ['Standard operating procedures', 'Production database', 'Ivanti', 'Jira', 'Data validation', 'Company audit'] },
    { industry: 'Marketing', role: 'Marketing Intern', org: '52 Launch', logo: logo('/logos/52-launch.webp', '52 Launch logo'), when: 'Feb 2026 \u2013 May 2026', where: 'Framingham, MA',
      bullets: [
        'Supported cross-functional lead-generation campaigns, working closely with sales to improve outreach.',
        'Increased social media engagement by introducing short-form video content and interactive polls.',
        'Analyzed competitor brands to identify trends and gaps, informing content strategy and brand messaging.'],
      tags: ['Lead generation', 'Sales outreach', 'Short-form video', 'Interactive polls', 'Competitor analysis', 'Brand messaging'] },
    { industry: 'Mutual funds', role: 'Client Representative Intern', org: 'Franklin Templeton / Putnam Investments', logo: logo('/logos/franklin-templeton.webp', 'Franklin Templeton Investments logo'), when: 'Jun 2026 \u2013 Present', where: 'Andover, MA',
      bullets: [
        'Serve as a first point of contact for financial advisors, shareholders, and beneficiaries on inbound calls, building rapport and resolving mutual fund account questions in real time.',
        'Explain purchases, redemptions, exchanges, transfers, share classes, and fees in plain language, within a non-advisory role.',
        'Guide beneficiaries through trust and inheritance paperwork after the loss of a loved one, keeping sensitive conversations calm, patient, and focused on next steps.',
        'Manage back-to-back calls and time-sensitive advisor requests while staying accurate, compliant, and professional.'],
      tags: ['Inbound calls', 'Mutual fund accounts', 'Purchases and redemptions', 'Exchanges and transfers', 'Share classes and fees', 'Trust and inheritance paperwork'],
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
    { title: 'The Quantum Computing Risk and Security Masterclass', issuer: 'Udemy', date: 'Dec 2025', text: "What quantum computers are, why they could break today's encryption, and how organizations like banks are preparing for it." },
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
      courses: 'Financial Portfolio and Analysis, Financial Markets and Institutions, Marketing, Intro to Business Analytics, Business Information Systems, Microeconomics, Statistics' },
    { name: 'Assumption University', full: 'Worcester, MA', role: 'NCAA Division II Swimming, 2024 – 2025. Transferred to UMass Lowell as a sophomore.',
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
    { name: 'Finance and clients', items: ['Mutual fund servicing', 'Share classes and fees', 'Advisor communication', 'Trust and beneficiary documentation', 'Company research', 'Sales support'] },
    { name: 'Data and analytics', items: ['Data analysis', 'Excel', 'Data validation', 'KPIs', 'Data visualization', 'Return and risk calculations'] },
    { name: 'Tools and process', items: ['Microsoft Office', 'Jira', 'Ivanti', 'SOP writing', 'ISO 9001'] },
  ],
}
export const contact = {
  title: 'Get in touch',
  text: 'Want to talk about my work or anything on this page? Email is the fastest way to reach me.',
  email: 'alicegayduchkova@gmail.com',
  links: { talk: "Let's talk", resume: 'View my résumé', linkedin: 'LinkedIn' },
}
export const footer = '© 2026 Alisa Gayduchkova'

// Alice's coursework write-ups, transcribed from her own documents. Wording and figures follow her text; nothing is added.
// Figures are coursework, not investment advice.

// ---------- ERIE: detailed return data (Term Project Part III.A) ----------
export type ErieRow = { m: string; label: string; begin: string; end: string; bp: number; ep: number; div: number; rcg: number; rci: number; r: number }
export const erieData = {
  method:
    'One Class A share, no reinvestment, splits, or other quantity changes. Prices are the unadjusted Close on the first trading day of each month, from Yahoo Finance. Yahoo Finance shows $1.463 dividend entries dated April 7 and July 7, 2026.',
  rows: [
    { m: 'Mar', label: 'March 2026', begin: '03/02/26', end: '04/01/26', bp: 266.75, ep: 246.99, div: 0, rcg: -7.4077, rci: 0, r: -7.4077 },
    { m: 'Apr', label: 'April 2026', begin: '04/01/26', end: '05/01/26', bp: 246.99, ep: 214.96, div: 1.463, rcg: -12.9681, rci: 0.5923, r: -12.3758 },
    { m: 'May', label: 'May 2026', begin: '05/01/26', end: '06/01/26', bp: 214.96, ep: 211.61, div: 0, rcg: -1.5584, rci: 0, r: -1.5584 },
    { m: 'Jun', label: 'June 2026', begin: '06/01/26', end: '07/01/26', bp: 211.61, ep: 249.27, div: 0, rcg: 17.7969, rci: 0, r: 17.7969 },
    { m: 'Jul', label: 'July 2026', begin: '07/01/26', end: '08/03/26', bp: 249.27, ep: 236.86, div: 1.463, rcg: -4.9785, rci: 0.5869, r: -4.3916 },
    { m: 'Aug', label: 'August 2026', begin: '08/03/26', end: '09/01/26', bp: 236.86, ep: 256.09, div: 0, rcg: 8.1187, rci: 0, r: 8.1187 },
  ] as ErieRow[],
  cv: 364.71,
  cvNote:
    'The coefficient of variation is 364.71. It is extremely high because the average return is almost zero, so I would be cautious about using that number alone to judge the stock.',
  extremes: 'June was the strongest month and April was the weakest.',
}

// ---------- ERIE: the company (Term Project Activity, Random Stock) ----------
export const erieCompany = {
  kind: 'Company research, 2026',
  title: 'Erie Indemnity (ERIE): the company behind the stock',
  summary:
    'My random stock was Erie Indemnity Company, which trades on the NASDAQ under ERIE. It mostly provides management and administrative services for Erie Insurance Exchange, and the Erie Insurance group offers auto, homeowners, renters, business, and life insurance through its affiliated companies.',
  facts: [
    ['Board', 'Jonathan Hirt Hagen (Chairman of the Board), Thomas B. Hagen (Chairman Emeritus), Elizabeth Hirt Vorsheck'],
    ['Competitors', 'State Farm, Progressive, Allstate, GEICO'],
  ] as [string, string][],
  charts: [
    { id: 'rev', title: 'Revenue', prefix: '$', suffix: 'B', dec: 2, points: [['2023', 3.31], ['2024', 3.86], ['2025', 4.15]] as [string, number][] },
    { id: 'ni', title: 'Net income', prefix: '$', suffix: 'M', dec: 1, points: [['2023', 446.1], ['2024', 600.3], ['2025', 559.3]] as [string, number][] },
    { id: 'h1', title: 'Net income, first six months', prefix: '$', suffix: 'M', dec: 1, points: [['2025', 313.1], ['2026', 330.8]] as [string, number][] },
  ],
  chartNote: 'Revenue grew each year, but net income fell in 2025. Revenue growth does not always mean profit growth.',
  control: {
    title: 'Who holds the voting (Class B) shares',
    parts: [['H.O. Hirt Trusts', 92.05], ['Hagen Family Limited Partnership', 6.81]] as [string, number][],
    note: 'From the 2026 information statement. It gives the company stability, but regular investors have very limited influence over company decisions.',
  },
  pros: [
    'Insurance is a necessary industry, so demand keeps coming',
    'Revenue grew each year from 2023 to 2025',
    'Still profitable, and net income for the first six months of 2026 is up',
    'Experienced board and long-term shareholders add stability',
    'Focus on independent agents and customer service helps it stand out',
  ],
  cons: [
    'Depends heavily on its relationship with Erie Insurance Exchange',
    'Concentrated voting control gives outside investors little say',
    'Earnings fell in 2025 even as revenue rose',
    'Larger competitors have more resources and name recognition',
    'Severe weather, rising claim costs, and competition',
  ],
  takeaway:
    'I think Erie could be a reasonable long-term investment to consider, but I would rather diversify my money than depend on one individual stock.',
  sources: 'Sources: Yahoo Finance, Erie Investor Relations, SEC filings, the 2026 Information Statement, the 2025 Annual Report, and Second Quarter 2026 Results.',
}

// ---------- Two smart investors (Term Project Part II) ----------
export const investors = {
  kind: 'Investing coursework, 2026',
  title: 'Two smart investors: Jensen Huang and Amancio Ortega',
  summary:
    'I researched one billionaire who built his wealth in technology and one who built it in fashion retail. Then I compared how each made his money, how he keeps it growing, and what I would copy and avoid.',
  rankNote: "Net worth from Forbes' September 2026 billionaire rankings.",
  people: [
    { id: 'huang', name: 'Jensen Huang', role: 'Co-founder and CEO, NVIDIA', rank: '8th richest', worth: 191,
      chain: ['Co-founded NVIDIA in 1993', 'Wealth mostly in NVIDIA stock', 'Graphics chips grew into AI and data centers'],
      win: 'NVIDIA expanded from gaming graphics into artificial intelligence, data centers, and advanced computing.',
      loss: "U.S. export restrictions made it harder to sell advanced AI chips in China. According to Reuters, NVIDIA's share of China's data-center AI chip market fell to 34% in the first half of 2026.",
      avoid: 'I would avoid tech companies just because they are popular or connected to AI, and avoid putting most of my savings in one stock.',
      sources: ['Forbes: Jensen Huang', 'NVIDIA Investor Relations', "Reuters: NVIDIA's China AI-chip market share", 'Reuters: NVIDIA investments in French AI startups'] },
    { id: 'ortega', name: 'Amancio Ortega', role: 'Founder of Zara, co-founder of Inditex', rank: '10th richest', worth: 148,
      chain: ['Opened the first Zara in Spain in 1975', 'Owns about 60% of Inditex', 'Dividends go into real estate through Pontegadea'],
      win: 'In 2025, Inditex reported approximately 39.9 billion in revenue and 6.2 billion in net profit, while his real estate portfolio kept growing.',
      loss: 'His investment group agreed to sell a New York office building for approximately $50 million after buying it for $115.5 million in 2006.',
      avoid: 'I would avoid real estate without understanding the expenses and risks, and avoid leaning too hard on trend-driven fashion.',
      sources: ['Forbes: Amancio Ortega', 'Inditex 2025 Annual Report', 'Inditex 2025 Financial Performance', "Cinco Días: Pontegadea's investments", 'Commercial Observer: New York real estate investment loss'] },
  ],
  compare:
    "Huang's fortune is still heavily connected to NVIDIA. Ortega uses money generated from Inditex to invest in real estate and other industries, which I think gives him more diversification. Huang's strategy has let him benefit tremendously from NVIDIA's rapid growth. Both approaches have risks.",
  takeaway:
    'Both billionaires showed me that building wealth takes patience, research, and being willing to take calculated risks without putting your entire financial future at risk.',
}

// ---------- Investment goals (Term Project Part IV) ----------
export const goals = {
  also: 'Also on my list: graduating from college, building a successful career in finance, becoming financially independent, building an emergency fund, traveling, and supporting my family when needed.',
  items: [
    { lane: 'Short term', note: 'Stability', title: 'A reliable used car', when: 'By December 2026',
      steps: [18000, 20000], text: 'Reliable transportation for school, work, and daily responsibilities. The deadline is close, so the money should stay in a relatively stable savings vehicle rather than be exposed to major stock-market losses.' },
    { lane: 'Medium term', note: '', title: 'My first home', when: 'In about seven to ten years',
      steps: [60000, 70000, 90000], text: 'A down payment and related expenses. Massachusetts housing can be expensive, so I look at down payments and closing costs together. This goal is flexible and I could wait.' },
    { lane: 'Long term', note: 'Growth', title: 'Retirement', when: 'By about age 65',
      steps: [1000000, 1500000], text: "Starting early gives me more time to benefit from compounding. The right number depends on my lifestyle, earnings, and savings habits, so I would revisit it regularly." },
  ],
  stepNotes: ['Started at', 'Revised to'],
  caveat: 'These are my planning estimates after reading the articles below, not prices or predictions from those articles.',
  articles: [
    ['WSJ: What Happened to the Affordable Car? (The Journal podcast)', 'https://www.wsj.com/podcasts/the-journal/what-happened-to-the-affordable-car/026d542b-8af0-4433-8534-bf90473f886b'],
    ['WSJ: Commercial real estate and interest rates', 'https://www.wsj.com/real-estate/commercial-real-estate-interest-rates-22d04b1b'],
    ["WSJ Buy Side: What's Your Retirement Number?", 'https://www.wsj.com/buyside/personal-finance/financial-advisors/whats-your-retirement-number'],
    ['MSN: Used car prices are doing something unusual in 2026', 'https://www.msn.com/en-us/news/other/used-car-prices-are-doing-something-unusual-in-2026-here-s-what-it-means-if-you-re-shopping/ar-AA2dWWPi'],
    ['Clever Real Estate: How much does it cost to buy a house in Massachusetts?', 'https://listwithclever.com/real-estate-blog/cost-to-buy-house-massachusetts/'],
    ['Fidelity: How much do I need to retire?', 'https://www.fidelity.com/viewpoints/retirement/how-much-do-i-need'],
  ] as [string, string][],
}

// ---------- A.I.M. (from aimsociety.org, About page). Wording is the club's own. ----------
export const aim = {
  eyebrow: 'Leadership',
  name: 'A.I.M.',
  full: 'Artificial Intelligence Multidisciplinary Society',
  role: 'Director of Operations',
  since: '2026 to present',
  founded: 'Founded April 2026 at UMass Lowell',
  mine: "I help run operations for UMass Lowell's AI club, where students from every major build AI projects together.",
  who: [
    'AIM connects students from all majors with AI. We believe everyone should have the chance to understand and shape its future, regardless of major.',
    'We aim to bridge the gap between the future of AI and the UMass Lowell academic community. Through workshops, speaker events, and collaborative projects, students learn and debate responsible use of AI, build industry connections, and develop AI skills relevant to their careers.',
  ],
  pillars: [
    ['01', 'Explore', 'Understand AI from your vantage point', "You don't need a technical background to understand AI and how it works, who it affects, or when it should be used. AIM gives you a space to explore it on your own terms."],
    ['02', 'Build', 'Work on real, cross-disciplinary projects', 'Our projects are collaborative efforts that require domain expertise from multiple fields, expertise that lives outside CS departments.'],
    ['03', 'Engage', 'Connect and communicate across the university', "AI's most pressing questions are social, political, ethical, and environmental, not just technical. AIM is the place where that conversation can happen at UMass Lowell."],
    ['04', 'Connect', 'Access opportunities beyond campus', 'As a part of the Massachusetts AI Coalition, AIM connects students with industry leaders, researchers, and organizations across Massachusetts, creating opportunities to network and get involved in real-world AI work.'],
  ] as [string, string, string, string][],
  link: { href: 'https://aimsociety.org', label: 'aimsociety.org' },
}

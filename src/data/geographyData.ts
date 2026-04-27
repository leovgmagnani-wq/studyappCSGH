import { GeoTheme } from '../types';

export const GEOGRAPHY_DATA: GeoTheme[] = [
  {
    id: 'theme-1',
    title: 'Population & Settlement',
    color: 'blue',
    units: [
      {
        id: 'unit-1.1',
        number: '1.1',
        title: 'Population Dynamics',
        keywords: [
          { term: 'Population', definition: 'The number of people in a particular place.' },
          { term: 'Birth Rate', definition: 'The number of babies born per 1,000 population per year.' },
          { term: 'Death Rate', definition: 'The number of people who die per 1,000 population per year.' },
          { term: 'Fertility Rate', definition: 'The average number of babies a woman will have in her lifetime.' },
          { term: 'Natural Increase', definition: 'Birth Rate minus Death Rate — the change in population per 1,000 people per year, excluding migration.' },
          { term: 'Population Growth Rate', definition: 'The percentage change in population each year due to natural increase AND net migration.' },
          { term: 'Infant Mortality Rate', definition: 'The number of children per 1,000 live births who die before reaching one year of age.' },
          { term: 'Life Expectancy', definition: 'The average number of years a person is expected to live.' },
          { term: 'Demographic Transition Model (DTM)', definition: 'A model showing how birth and death rates change as a country develops economically through 5 stages.' },
          { term: 'Over-population', definition: 'When there are too many people to be supported to a good standard of living by the available resources.' },
          { term: 'Under-population', definition: 'When a country has too few people to exploit its resources efficiently or support the population.' },
          { term: 'Optimum Population', definition: 'The ideal population size at which resources support inhabitants to the highest possible standard of living.' },
          { term: 'Dependency Ratio', definition: '(Young 0–14 + Elderly 65+) divided by Working population (15–64) × 100.' },
          { term: 'Population Policy', definition: 'Government measures to influence the size, growth rate or structure of the population.' },
          { term: 'Anti-natalist Policy', definition: 'Government policy discouraging large families to slow population growth (e.g. China One Child Policy).' },
          { term: 'Pro-natalist Policy', definition: 'Government policy encouraging more births to increase population (e.g. Singapore).' },
          { term: 'Standard of Living', definition: 'The level of wealth, comfort, material goods and necessities available to a person or group.' },
        ],
        caseStudies: [
          {
            id: 'cs-nigeria',
            title: 'Nigeria – Overpopulation | LEDC',
            flag: '🇳🇬',
            color: 'emerald',
            sections: [
              { 
                subtitle: 'Overview', 
                body: "Nigeria is Africa's most populous country — 231 million people (2023). It is considered overpopulated: resources cannot support the population to a high standard of living.",
                questions: [
                  { id: 'geo-nig-q1', type: 'mcq', question: 'What was Nigeria\'s population in 2023?', options: ['120 million', '231 million', '312 million', '180 million'], correctAnswer: 1 },
                  { id: 'geo-nig-q2', type: 'mcq', question: 'Why is Nigeria considered overpopulated?', options: ['Too many immigrants', 'Resources cannot support the population to a high standard of living', 'Not enough land area', 'High death rates'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Causes of High Birth Rate', 
                body: 'Low use of birth control — men reluctant due to religion and misinformation. Unmet need for contraception over 20%. Islamic religion promotes large families through early marriage and polygamy. Christian religion prohibits effective contraception. Male-child preference — families keep having children until a son is born. High rural birth rates due to poverty and lack of rural employment.',
                questions: [
                  { id: 'geo-nig-q3', type: 'mcq', question: 'What is a major religious reason for high birth rates in Nigeria?', options: ['Religion encourages small families', 'Islamic religion promotes large families through polygamy', 'Christian religion encourages birth control', 'Everyone follows secular laws'], correctAnswer: 1 },
                  { id: 'geo-nig-q4', type: 'mcq', question: 'What social preference contributes to families having more children?', options: ['Female-child preference', 'Male-child preference', 'Preference for only children', 'Preference for twins'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'DTM Stage', 
                body: 'Nigeria is in Stage 2–3 of the DTM. Declining death rate with still-high birth rate means rapid natural increase.',
                questions: [
                  { id: 'geo-nig-q5', type: 'mcq', question: 'Which stage of the DTM is Nigeria currently in?', options: ['Stage 1', 'Stage 2-3', 'Stage 5', 'Stage 4'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Key Statistics', 
                body: 'Population (2023): 231 million. 0–14 age group: ~43% of population. Youth unemployment: ~30%. 67% live below poverty line of $1/day. Double-digit inflation since 2017.',
                questions: [
                  { id: 'geo-nig-q6', type: 'mcq', question: 'What percentage of Nigeria\'s population is aged 0-14?', options: ['10%', '25%', '43%', '60%'], correctAnswer: 2 },
                  { id: 'geo-nig-q7', type: 'mcq', question: 'What is the youth unemployment rate in Nigeria?', options: ['5%', '15%', '30%', '50%'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Social Problems', 
                body: "Overcrowding in Lagos leads to squatter settlements such as Makoko, built on stilts over a lagoon. Traffic congestion: 40% of Nigeria's cars registered in Lagos; 3+ hour daily commutes. Fatal accident rate: 28 per 100,000 — 3x European average. Air pollution 5x WHO limit.",
                questions: [
                  { id: 'geo-nig-q8', type: 'mcq', question: 'Which squatter settlement in Lagos is built on stilts?', options: ['Dharavi', 'Makoko', 'Rocinha', 'Kibera'], correctAnswer: 1 },
                  { id: 'geo-nig-q9', type: 'mcq', question: 'What percentage of Nigeria\'s cars are registered in Lagos?', options: ['10%', '25%', '40%', '60%'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Economic Problems', 
                body: 'Youth unemployment ~30%. Double-digit inflation since 2017. 67% live on under $1/day.',
                questions: [
                  { id: 'geo-nig-econ-1', type: 'mcq', question: 'What is the youth unemployment rate in Nigeria?', options: ['10%', '20%', '30%', '50%'], correctAnswer: 2 },
                  { id: 'geo-nig-econ-2', type: 'mcq', question: 'What percentage of Nigerians live on under $1 per day?', options: ['25%', '45%', '67%', '80%'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Environmental Problems', 
                body: "Nigeria loses 350,000–400,000 hectares of forest per year (among world's highest rates). Overgrazing accelerating desertification in northern states (Kano, Borno, Katsina). Soil erosion and water source pollution.",
                questions: [
                  { id: 'geo-nig-env-1', type: 'mcq', question: 'How much forest does Nigeria lose annually?', options: ['50,000 hectares', '150,000 hectares', '350,000–400,000 hectares', '1 million hectares'], correctAnswer: 2 },
                  { id: 'geo-nig-env-2', type: 'mcq', question: 'What process is being accelerated by overgrazing in northern Nigeria?', options: ['Reforestation', 'Urbanisation', 'Desertification', 'Industrialisation'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Population Policy', 
                body: 'Anti-natalist: promotes family planning and contraception. Challenges: religious opposition, gender inequality, poor rural healthcare. USA invested ~$900 million in malaria, HIV/AIDS and TB programmes which helped reduce the death rate.',
                questions: [
                  { id: 'geo-nig-pol-1', type: 'mcq', question: 'What type of population policy does Nigeria promoted?', options: ['Pro-natalist', 'Anti-natalist', 'No policy', 'Migration-only policy'], correctAnswer: 1 },
                  { id: 'geo-nig-pol-2', type: 'mcq', question: 'How much did the USA invest in Nigeria\'s health programmes to help reduce the death rate?', options: ['~$100 million', '~$500 million', '~$900 million', '~$2 billion'], correctAnswer: 2 }
                ]
              },
            ]
          },
          {
            id: 'cs-australia',
            title: 'Australia – Underpopulation | MEDC',
            flag: '🇦🇺',
            color: 'blue',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'Australia is underpopulated — 7.7 million km² with only ~26 million people. Enormous resources remain underexploited.',
                questions: [
                  { id: 'geo-aus-q1', type: 'mcq', question: 'Why is Australia considered underpopulated?', options: ['Too much desert', 'Resources remain underexploited', 'Too many people for the land', 'Lack of water'], correctAnswer: 1 },
                  { id: 'geo-aus-q2', type: 'mcq', question: 'What is Australia\'s approximate land area?', options: ['1 million km²', '7.7 million km²', '15 million km²', '3 million km²'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Evidence', 
                body: 'Population density: ~3 people/km² — among world\'s lowest. Chronic labour shortages in mining, agriculture, healthcare.',
                questions: [
                  { id: 'geo-aus-q3', type: 'mcq', question: 'What is Australia\'s population density?', options: ['30 people/km²', '3 people/km²', '300 people/km²', '0.3 people/km²'], correctAnswer: 1 },
                  { id: 'geo-aus-q4', type: 'mcq', question: 'Which sectors in Australia experience chronic labour shortages?', options: ['Tourism only', 'Mining, agriculture, and healthcare', 'Finance and technology only', 'Manufacturing only'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Causes', 
                body: 'Hostile arid interior (the Outback) covering 70%+ of land. Historically restrictive immigration policies (White Australia Policy until 1973). Remote location.',
                questions: [
                  { id: 'geo-aus-q5', type: 'mcq', question: 'What percentage of Australia\'s land is covered by the Outback?', options: ['10%', '30%', '50%', '70%+'], correctAnswer: 3 },
                  { id: 'geo-aus-q6', type: 'mcq', question: 'When did the White Australia Policy end?', options: ['1945', '1950', '1973', '2001'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Consequences', 
                body: 'Labour shortages in skilled and unskilled sectors. Large areas of productive agricultural land underutilised.',
                questions: [
                  { id: 'geo-aus-con-1', type: 'mcq', question: 'What is a major economic consequence of underpopulation in Australia?', options: ['High unemployment', 'Labour shortages in skilled and unskilled sectors', 'Overcrowding in cities', 'Too much food production'], correctAnswer: 1 },
                  { id: 'geo-aus-con-2', type: 'mcq', question: 'What happens to productive agricultural land in an underpopulated country like Australia?', options: ['It is all used for housing', 'It becomes over-farmed', 'Large areas remain underutilised', 'It is turned into desert'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Government Response', 
                body: 'Points-based immigration system to attract skilled workers. Citizenship pathways for skilled migrants. Financial incentives for settling in regional/rural areas.',
                questions: [
                  { id: 'geo-aus-gov-1', type: 'mcq', question: 'How does Australia\'s immigration system select workers?', options: ['At random', 'Based on age only', 'Using a points-based system for skills', 'First come first served'], correctAnswer: 2 },
                  { id: 'geo-aus-gov-2', type: 'mcq', question: 'What does the government offer to encourage settling in regional areas?', options: ['Free houses for everyone', 'Financial incentives', 'Higher taxes', 'Strict laws'], correctAnswer: 1 },
                  { id: 'geo-aus-gov-3', type: 'mcq', question: 'Why does Australia offer citizenship pathways for skilled migrants?', options: ['To reduce its population', 'To fill chronic labour shortages and grow the economy', 'To decrease diversity', 'To lower the retirement age'], correctAnswer: 1 }
                ]
              },
            ]
          },
          {
            id: 'cs-china',
            title: 'China – One Child Policy | Anti-natalist',
            flag: '🇨🇳',
            color: 'red',
            sections: [
              { 
                subtitle: 'Overview', 
                body: "China's One Child Policy (1980–2015) was the world's most famous anti-natalist policy, introduced to slow explosive population growth.",
                questions: [
                  { id: 'geo-chi-q1', type: 'mcq', question: 'When was China\'s One Child Policy active?', options: ['1950–1980', '1980–2015', '2000–2020', '1930–1960'], correctAnswer: 1 },
                  { id: 'geo-chi-q2', type: 'mcq', question: 'What was the primary goal of the policy?', options: ['To increase population', 'To slow explosive population growth', 'To encourage migration', 'To increase the birth rate'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Why Introduced', 
                body: "Rapid population growth straining food production and resources. Mao's encouragement of large families led to ~1 billion people by 1980. Government wanted faster economic development.",
                questions: [
                  { id: 'geo-chi-q3', type: 'mcq', question: 'Whose encouragement led to China reaching ~1 billion people by 1980?', options: ['Confucius', 'Mao Zedong', 'Deng Xiaoping', 'Sun Yat-sen'], correctAnswer: 1 },
                  { id: 'geo-chi-q4', type: 'mcq', question: 'What was a consequence of rapid population growth in China before the policy?', options: ['Surplus of food', 'Strained food production and resources', 'Lack of people for the military', 'Decreased urban population'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'How It Worked', 
                body: "Most urban families limited to one child. Exemptions: rural families whose first child was a girl; ethnic minorities. Incentives: free healthcare, priority schooling, financial bonuses. Penalties: fines, loss of employment. Some provinces: forced sterilisation and abortions.",
                questions: [
                  { id: 'geo-chi-q5', type: 'mcq', question: 'Who was generally limited to one child under the policy?', options: ['Only ethnic minorities', 'Only rural families', 'Most urban families', 'Only government officials'], correctAnswer: 2 },
                  { id: 'geo-chi-q6', type: 'mcq', question: 'What was an incentive given to families who followed the policy?', options: ['Free international travel', 'Free healthcare and priority schooling', 'Land ownership', 'Reduced taxes for life'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Successes', 
                body: "Prevented an estimated 400 million births. GDP per capita increased significantly. Women's workforce participation increased.",
                questions: [
                  { id: 'geo-chi-q7', type: 'mcq', question: 'How many births is the One Child Policy estimated to have prevented?', options: ['100 million', '200 million', '400 million', '1 billion'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Problems', 
                body: 'Rapidly ageing population — rising dependency ratio. Gender imbalance: 117 males born per 100 females. "4-2-1 Problem" — one child supporting 2 parents and 4 grandparents. Shrinking workforce. Human rights abuses documented.',
                questions: [
                  { id: 'geo-chi-q8', type: 'mcq', question: 'What is the "4-2-1 Problem"?', options: ['4 children, 2 parents, 1 house', '1 child supporting 2 parents and 4 grandparents', '4 jobs for 2 parents and 1 child', '4 grandparents, 2 children, 1 parent'], correctAnswer: 1 },
                  { id: 'geo-chi-q9', type: 'mcq', question: 'What gender imbalance resulted from the policy?', options: ['117 females per 100 males', '117 males per 100 females', 'Equal numbers of males and females', '150 males per 100 females'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'What Happened Next', 
                body: "Two-child policy 2016. Three-child policy 2021. Birth rate remains low — cost of living deters couples.",
                questions: [
                  { id: 'geo-chi-next-1', type: 'mcq', question: 'When was the "Three-child policy" introduced in China?', options: ['2010', '2016', '2021', '2024'], correctAnswer: 2 },
                  { id: 'geo-chi-next-2', type: 'mcq', question: 'Why does China\'s birth rate remain low despite the policy changes?', options: ['Strict government enforcement', 'High cost of living deters couples', 'Lack of schools', 'Everyone moved abroad'], correctAnswer: 1 }
                ]
              },
            ]
          },
          {
            id: 'cs-singapore',
            title: 'Singapore – Pro-natalist Policy | MEDC',
            flag: '🇸🇬',
            color: 'red',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'Singapore shifted from anti-natalist to pro-natalist in the 1980s after causing an ageing population crisis.',
                questions: [
                  { id: 'geo-sin-q1', type: 'mcq', question: 'When did Singapore shift to a pro-natalist policy?', options: ['1950s', '1980s', '2010s', '1920s'], correctAnswer: 1 },
                  { id: 'geo-sin-q1-ext', type: 'mcq', question: 'What crisis did Singapore\'s previous anti-natalist policy accidentally cause?', options: ['Overpopulation', 'Ageing population crisis', 'Epidemic', 'Housing shortage'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Why Pro-natalist', 
                body: 'Fertility rate fell to ~1.34 — far below replacement level of 2.1. Shrinking workforce. Ageing population increasing pressure on healthcare and pensions.',
                questions: [
                  { id: 'geo-sin-q2', type: 'mcq', question: 'What is the "replacement level" fertility rate usually cited as?', options: ['1.0', '1.5', '2.1', '3.0'], correctAnswer: 2 },
                  { id: 'geo-sin-q3', type: 'mcq', question: 'What was Singapore\'s fertility rate approximately at the time of the shift?', options: ['3.5', '2.5', '1.34', '0.8'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Policy Measures', 
                body: '"Have Three or More If You Can Afford It" campaign. Baby Bonus: S$8,000 per child. 16 weeks paid maternity leave. Paternity leave. Childcare subsidies. Tax relief for families. Priority school admission for 3+ child families.',
                questions: [
                  { id: 'geo-sin-q4', type: 'mcq', question: 'What was the slogan for Singapore\'s pro-natalist campaign?', options: ['One is Enough', 'Have Three or More If You Can Afford It', 'Stop at Two', 'Large Families are Best'], correctAnswer: 1 },
                  { id: 'geo-sin-q5', type: 'mcq', question: 'How much was the "Baby Bonus" mentioned in the text?', options: ['S$1,000', 'S$5,000', 'S$8,000', 'S$10,000'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Effectiveness', 
                body: 'Some improvement but still below replacement. Singapore relies heavily on immigration. High cost of living remains a barrier.',
                questions: [
                  { id: 'geo-sin-eff-1', type: 'mcq', question: 'True or False: Singapore\'s fertility rate is now above the replacement level.', options: ['True', 'False'], correctAnswer: 1 },
                  { id: 'geo-sin-eff-2', type: 'mcq', question: 'What does Singapore rely on to compensate for its low fertility rate?', options: ['Closing its borders', 'Heavy reliance on immigration', 'Reducing its population', 'Building more factories'], correctAnswer: 1 },
                  { id: 'geo-sin-eff-3', type: 'mcq', question: 'What remains a major barrier to higher birth rates in Singapore despite government incentives?', options: ['Lack of jobs', 'High cost of living', 'Severe pollution', 'Extremely cold weather'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-1.2',
        number: '1.2',
        title: 'Migration',
        keywords: [
          { term: 'Migration', definition: 'The movement of people from one place to another, permanently or temporarily.' },
          { term: 'Emigration', definition: 'Leaving one country to settle in another.' },
          { term: 'Immigration', definition: 'Coming to live in a foreign country.' },
          { term: 'Net Migration', definition: 'Immigrants minus emigrants. Positive = more arriving; Negative = more leaving.' },
          { term: 'Internal Migration', definition: 'Migration within the same country (e.g. rural to urban).' },
          { term: 'International Migration', definition: 'Migration across national borders.' },
          { term: 'Voluntary Migration', definition: 'When a person freely chooses to move.' },
          { term: 'Forced Migration', definition: 'When a person is compelled to move by circumstances (war, famine, disaster).' },
          { term: 'Economic Migration', definition: 'Migration driven by desire for better economic opportunities and higher wages.' },
          { term: 'Refugee', definition: 'A person forced to flee their country due to war, persecution or natural disaster.' },
          { term: 'Push Factor', definition: 'A negative condition in the origin area driving people to leave (e.g. poverty, conflict, drought).' },
          { term: 'Pull Factor', definition: 'A positive condition at the destination attracting people to move (e.g. jobs, safety, services).' },
          { term: 'Source Country', definition: 'The country people are leaving (emigrating from).' },
          { term: 'Host Country', definition: 'The country people are moving to (immigrating into).' },
          { term: 'Rural-Urban Migration', definition: 'Movement from countryside to cities — the main driver of urbanisation in LEDCs.' },
          { term: 'Remittances', definition: 'Money sent by migrants working abroad to their families at home.' },
          { term: 'Brain Drain', definition: 'Emigration of highly skilled workers leaving a country short of professionals.' },
          { term: 'Chain Migration', definition: 'When migrants follow others who have already established communities at the destination.' },
        ],
        caseStudies: [
          {
            id: 'cs-mexico-usa',
            title: 'Mexico to USA Migration | International Economic Migration',
            flag: '🇲🇽',
            color: 'amber',
            sections: [
              { 
                subtitle: 'Overview', 
                body: "One of the world's largest and most politically contentious migration flows.",
                questions: [
                  { id: 'geo-mig-mx-1', type: 'mcq', question: 'What type of migration is Mexico to USA primarily?', options: ['Forced migration', 'International economic migration', 'Internal migration', 'Seasonal migration'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Push Factors (Mexico)', 
                body: 'Poverty and very low wages. High unemployment. Crime: gang violence and drug cartel activity. Lack of quality healthcare and education in rural areas. Natural disasters displacing communities.',
                questions: [
                  { id: 'geo-mig-mx-2', type: 'mcq', question: 'Which of these is a push factor for Mexicans leaving for the USA?', options: ['Establishment Mexican communities', 'High wages in Mexico', 'Gang violence and drug cartel activity', 'Better education in Mexico'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Pull Factors (USA)', 
                body: 'Much higher wages. Employment in agriculture, construction, hospitality and domestic service. Better healthcare, education and social infrastructure. Established Mexican-American communities (chain migration). Political stability.',
                questions: [
                  { id: 'geo-mig-mx-3', type: 'mcq', question: 'What is "chain migration" in this context?', options: ['Migrants following others who established communities', 'Migration in groups for safety', 'Migration using trains', 'Forced migration in chains'], correctAnswer: 0 },
                  { id: 'geo-mig-mx-4', type: 'mcq', question: 'Which sectors in the USA commonly employ Mexican migrants?', options: ['Aerospace and defense', 'Agriculture, construction, and hospitality', 'Only high-tech research', 'Only government administration'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Effects on Mexico (Source)', 
                body: 'Positive — Remittances: migrants send billions of dollars annually back to Mexico. Positive — Reduced unemployment pressure. Negative — Brain drain: loss of skilled and educated workers. Negative — Family breakdown; feminisation of villages.',
                questions: [
                  { id: 'geo-mig-mx-5', type: 'mcq', question: 'What are "remittances"?', options: ['Rules for migration', 'Money sent back to families at home', 'The process of deporting migrants', 'Taxes paid by immigrants'], correctAnswer: 1 },
                  { id: 'geo-mig-mx-6', type: 'mcq', question: 'What is a negative social effect of migration for Mexico?', options: ['Lower GDP', 'Family breakdown and feminisation of villages', 'Overpopulation in rural areas', 'Excessive housing demand'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Effects on USA (Host)', 
                body: 'Positive — Fills chronic labour shortages. Positive — Cultural enrichment. Negative — Perceived pressure on public services. Negative — Political controversy over illegal immigration.',
                questions: [
                  { id: 'geo-mig-usa-1', type: 'mcq', question: 'What is a positive economic effect of Mexican migration on the USA?', options: ['Reduced diversity', 'Fills chronic labour shortages', 'Increases taxes for citizens', 'Decreases housing demand'], correctAnswer: 1 },
                  { id: 'geo-mig-usa-2', type: 'mcq', question: 'What is a perceived negative social pressure in the USA?', options: ['Too much culture', 'Pressure on public services', 'Lack of workers', 'Too many high-paying jobs'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Border Management', 
                body: 'Extensive sections of border wall along the 3,000km border. Border Patrol uses drones and physical barriers. Deportation remains a major political issue. DACA (Dreamers) — young people brought illegally as children face uncertain status.',
                questions: [
                  { id: 'geo-mig-bord-1', type: 'mcq', question: 'How long is the Mexico-USA border?', options: ['500km', '1,500km', '3,000km', '5,000km'], correctAnswer: 2 },
                  { id: 'geo-mig-bord-2', type: 'mcq', question: 'What is the "DACA" program associated with?', options: ['Border wall construction', 'Agricultural subsidies', '"Dreamers" — young people brought illegally as children', 'Export taxes'], correctAnswer: 2 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-1.3',
        number: '1.3',
        title: 'Population Structure',
        keywords: [
          { term: 'Population Pyramid', definition: 'A bar chart showing the age and sex structure of a population. Males left, females right.' },
          { term: 'Age-Sex Structure', definition: 'The composition of a population by age group and gender.' },
          { term: 'Dependent Population', definition: 'People not of working age: young (0–14) and elderly (65+).' },
          { term: 'Working Population', definition: 'People aged 15–64 who are economically active.' },
          { term: 'Dependency Ratio', definition: 'Ratio of dependants to working population. High = fewer workers supporting more dependants.' },
          { term: 'Youthful Population', definition: 'High proportion aged 0–14. Typical of LEDCs with high birth rates. Wide-based pyramid.' },
          { term: 'Ageing Population', definition: 'Growing proportion aged 65+. Typical of MEDCs with low birth rates and high life expectancy.' },
          { term: 'Aged Dependency', definition: 'A high proportion of elderly (65+) dependants relative to the working population.' },
          { term: 'LEDC', definition: 'Less Economically Developed Country — lower income, lower HDI, lower standard of living.' },
          { term: 'MEDC', definition: 'More Economically Developed Country — higher income, higher HDI, better infrastructure and services.' },
          { term: 'Replacement Level', definition: 'The fertility rate needed to keep a population stable — approximately 2.1 children per woman.' },
        ],
        caseStudies: [
          {
            id: 'cs-japan-ageing',
            title: 'Japan – Ageing Population | MEDC',
            flag: '🇯🇵',
            color: 'red',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'Japan has one of the world\'s oldest populations and faces a severe ageing population crisis.',
                questions: [
                  { id: 'geo-jap-age-1', type: 'mcq', question: 'What is the current demographic crisis facing Japan?', options: ['Overpopulation', 'Rapidly ageing population', 'High infant mortality', 'Excessive youth population'], correctAnswer: 1 },
                  { id: 'geo-jap-age-1-ext', type: 'mcq', question: 'Approximately what is the total population of Japan mentioned?', options: ['50 million', '80 million', '129 million', '200 million'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Key Statistics', 
                body: 'Total population: ~129 million. Life expectancy: 84.8 years (one of world\'s highest). Fertility rate: 1.34 (well below replacement of 2.1). Median age: ~49 years. 60+ year-olds: 44% of all voters. Working-age population (15–64): only 59% of total. Social security spending: ~33% of government budget. 15% of 65+ live alone.',
                questions: [
                  { id: 'geo-jap-age-2', type: 'mcq', question: 'What is Japan\'s fertility rate approximately?', options: ['2.1', '1.34', '3.5', '0.8'], correctAnswer: 1 },
                  { id: 'geo-jap-age-3', type: 'mcq', question: 'What percentage of Japan\'s government budget is spent on social security?', options: ['10%', '20%', '33%', '50%'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Causes of Ageing', 
                body: 'Very low fertility rate — high cost of living, career-focused culture, late marriages. Very high life expectancy — excellent healthcare, healthy diet (fish and vegetables), low obesity. Very low immigration — Japan historically resisted immigration.',
                questions: [
                  { id: 'geo-jap-age-4', type: 'mcq', question: 'Why does Japan have such high life expectancy?', options: ['High obesity rates', 'Excellent healthcare and healthy diet', 'Lack of doctors', 'High pollution levels'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Social Consequences', 
                body: '15% of 65+ live alone — social isolation and "kodokushi" (lonely deaths). Japan will face a shortage of 400,000 caregivers by 2025. Healthcare for elderly: 50%+ of total healthcare budget. Rural population shrank 50%+ between 1960–2020. Politics skewed towards elderly (44% of voters are 60+).',
                questions: [
                  { id: 'geo-jap-age-5', type: 'mcq', question: 'What is "kodokushi"?', options: ['A Japanese festival', 'Lonely deaths among the elderly', 'A type of healthy food', 'A government policy'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Economic Consequences', 
                body: 'GDP growth stagnated at 0.5–1% per year (vs 4% in post-war boom). Social security ~33% of government budget. Shrinking workforce reduces productivity. Labour shortages in healthcare, construction, technology.',
                questions: [
                  { id: 'geo-jap-age-6', type: 'mcq', question: 'How has the ageing population affected Japan\'s GDP growth?', options: ['It has accelerated it', 'It has stagnated at 0.5–1%', 'It has no effect', 'It caused a massive boom'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Government Responses', 
                body: '2021 law encourages companies to employ staff until age 70. Pension deferral until 75 with 0.7% monthly increase. "Ikumen Project" encourages paternity leave — target 30% uptake by 2025 (up from 14%). Lump-sum childbirth allowance of ¥420,000 (~$2,800) per child. Free daycare for primary school children. Increasing automation to compensate.',
                questions: [
                  { id: 'geo-jap-age-7', type: 'mcq', question: 'What is the "Ikumen Project"?', options: ['A plan to increase taxes', 'A project to encourage paternity leave', 'A new type of robot', 'A rural development plan'], correctAnswer: 1 },
                  { id: 'geo-jap-age-8', type: 'mcq', question: 'How is Japan trying to compensate for a shrinking workforce?', options: ['By banning technology', 'By increasing automation', 'By reducing the retirement age', 'By closing schools'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-1.4',
        number: '1.4',
        title: 'Population Density and Distribution',
        keywords: [
          { term: 'Population Density', definition: 'Number of people per km². Formula: Total Population ÷ Area (km²).' },
          { term: 'Population Distribution', definition: 'The pattern of where people live across an area.' },
          { term: 'Sparsely Populated', definition: 'Very few people per km² — low population density.' },
          { term: 'Densely Populated', definition: 'Many people per km² — high population density.' },
          { term: 'Physical Factors', definition: 'Natural factors affecting where people live: climate, relief, soil quality, resources, water supply.' },
          { term: 'Human Factors', definition: 'Man-made factors: economic opportunities, transport, political stability, historical settlement.' },
          { term: 'Relief', definition: 'Shape and height of the land. Steep mountainous terrain is generally sparsely populated.' },
          { term: 'Resources', definition: 'Natural materials people can exploit. Resource-rich areas tend to attract higher populations.' },
          { term: 'Permafrost', definition: 'Ground that remains frozen year-round, making building and farming extremely difficult.' },
          { term: 'Arable Land', definition: 'Land suitable for growing crops. Fertile arable areas support higher population densities.' },
        ],
        caseStudies: [
          {
            id: 'cs-japan-density',
            title: 'Japan – Densely Populated Coastal Plains | MEDC',
            flag: '🇯🇵',
            color: 'red',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'Japan has a high average density (~336/km²) but most people live on a few coastal lowland plains.',
                questions: [
                  { id: 'geo-jap-den-1', type: 'mcq', question: 'What is Japan\'s average population density?', options: ['10/km²', '100/km²', '336/km²', '1000/km²'], correctAnswer: 2 },
                  { id: 'geo-jap-den-1-ext', type: 'mcq', question: 'How is population density calculated?', options: ['Total Area ÷ Population', 'Total Population ÷ Area', 'Births - Deaths', 'Urban ÷ Rural'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Why Coastal Plains Are Dense', 
                body: 'Flat land suitable for building, industry and farming. Fertile alluvial soils support intensive rice cultivation. Access to sea for trade, fishing and transport. Mild, humid climate. Industrial centres developed near coasts and ports.',
                questions: [
                  { id: 'geo-jap-den-2', type: 'mcq', question: 'Which soil type in Japan\'s coastal plains supports intensive rice cultivation?', options: ['Sandy soil', 'Alluvial soil', 'Peat soil', 'Clay soil'], correctAnswer: 1 },
                  { id: 'geo-jap-den-3', type: 'mcq', question: 'Why is the sea access important for coastal population centers?', options: ['For swimming only', 'For trade, fishing, and transport', 'To keep the air cool', 'To prevent earthquakes'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Why Interior Is Sparse', 
                body: '~70% of Japan is mountainous — steep slopes unsuitable for farming or construction. Harsher climate at altitude. Poor historical transport access. Earthquake and landslide risk in mountain areas.',
                questions: [
                  { id: 'geo-jap-den-4', type: 'mcq', question: 'What percentage of Japan is mountainous?', options: ['20%', '50%', '70%', '90%'], correctAnswer: 2 },
                  { id: 'geo-jap-den-5', type: 'mcq', question: 'What is a major natural hazard in Japan\'s mountain areas?', options: ['Tornadoes', 'Volcanic ash only', 'Earthquake and landslide risk', 'Icebergs'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Tokyo Megalopolis', 
                body: 'Greater Tokyo: ~37 million people — world\'s largest urban agglomeration. Economic, political and cultural capital of Japan.',
                questions: [
                  { id: 'geo-jap-den-6', type: 'mcq', question: 'Approximately how many people live in Greater Tokyo?', options: ['10 million', '22 million', '37 million', '50 million'], correctAnswer: 2 }
                ]
              },
            ]
          },
          {
            id: 'cs-russia-sparse',
            title: 'Russia – Sparsely Populated Siberia | MEDC',
            flag: '🇷🇺',
            color: 'blue',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'Russia: world\'s largest country (17 million km²) with only ~144 million people. Average density: 8.4/km². Population unevenly distributed and has been declining.',
                questions: [
                  { id: 'geo-rus-spa-1', type: 'mcq', question: 'What is the average population density of Russia?', options: ['84/km²', '8.4/km²', '0.84/km²', '100/km²'], correctAnswer: 1 },
                  { id: 'geo-rus-spa-1-ext', type: 'mcq', question: 'Is Russia\'s population currently increasing or declining?', options: ['Increasing rapidly', 'Staying exactly the same', 'Declining', 'Growing through migration only'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Why Siberia and North Are Sparse', 
                body: 'Extreme cold — temperatures below -50°C in parts of Siberia. Permafrost makes construction, farming and infrastructure very difficult and expensive. Vast taiga and tundra with few agricultural opportunities. Short growing seasons (often 2–3 months). Very remote from economic centres. Poor and expensive transport infrastructure.',
                questions: [
                  { id: 'geo-rus-spa-2', type: 'mcq', question: 'What is "permafrost"?', options: ['A type of Russian tree', 'Ground that remains frozen year-round', 'A frozen lake', 'A winter festival'], correctAnswer: 1 },
                  { id: 'geo-rus-spa-3', type: 'mcq', question: 'How long are typical growing seasons in Siberia?', options: ['2-3 months', '6 months', '9 months', 'Year-round'], correctAnswer: 0 }
                ]
              },
              { 
                subtitle: 'Where People Do Live', 
                body: 'Most Russians live west of the Ural Mountains. Moscow (~12 million) and St. Petersburg (~5 million) dominate. Urban population ~75% of total.',
                questions: [
                  { id: 'geo-rus-spa-4', type: 'mcq', question: 'Which mountain range separates the more populated west from the rest of Russia?', options: ['Alps', 'Himalayas', 'Ural Mountains', 'Andes'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Population Decline', 
                body: 'Low birth rate combined with high death rate. Male life expectancy ~68 years vs female ~78 years — huge gender gap. Causes: alcoholism, smoking, poor diet and cardiovascular disease. Brain drain of skilled workers. War in Ukraine accelerated population loss.',
                questions: [
                  { id: 'geo-rus-spa-5', type: 'mcq', question: 'What is a major cause of the low male life expectancy in Russia?', options: ['Exercise habits', 'Alcoholism, smoking, and poor diet', 'Infectious diseases', 'Excessive work hours'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Government Responses', 
                body: '"Maternity Capital" programme — large financial payment for second or subsequent child. Encouraging return of ethnic Russians from former Soviet states. Anti-alcohol campaigns and rural healthcare improvements.',
                questions: [
                  { id: 'geo-rus-spa-6', type: 'mcq', question: 'What is the "Maternity Capital" programme?', options: ['A tax on births', 'A financial payment for having children', 'A new hospital chain', 'A school upgrade plan'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-1.5',
        number: '1.5',
        title: 'Settlements and Service Provision',
        keywords: [
          { term: 'Settlement', definition: 'A place where people live, from a single house to a vast city.' },
          { term: 'Settlement Hierarchy', definition: 'Settlements ranked by size and importance: Hamlet → Village → Town → City → Conurbation → Megalopolis.' },
          { term: 'Hamlet', definition: 'Smallest settlement — a few houses, no services.' },
          { term: 'Village', definition: 'Small settlement with basic services (shop, pub, primary school).' },
          { term: 'Town', definition: 'Larger settlement with a wide range of services and functions.' },
          { term: 'City', definition: 'Large settlement with many high-order services, often with a cathedral.' },
          { term: 'Conurbation', definition: 'A large urban area formed when cities and towns expand and merge.' },
          { term: 'Sphere of Influence', definition: 'The area served by a settlement or service — how far people travel to use it.' },
          { term: 'Threshold Population', definition: 'Minimum number of people needed to make a service economically viable.' },
          { term: 'Range of a Service', definition: 'Maximum distance people are willing to travel to use a service.' },
          { term: 'High-order Services', definition: 'Specialist services (hospitals, universities) requiring large threshold populations and wide spheres.' },
          { term: 'Low-order Services', definition: 'Basic everyday services (newsagent, post box) with small thresholds and narrow spheres.' },
          { term: 'Function', definition: 'The main purpose or activity of a settlement (market town, port, industrial, dormitory, tourist).' },
          { term: 'CBD (Central Business District)', definition: 'Commercial core of a town/city with highest land values, most shops and offices.' },
        ],
        caseStudies: [
          {
            id: 'cs-settlement-hierarchy',
            title: 'Settlement Hierarchy and Service Provision | Core Concept',
            flag: '🏘️',
            color: 'slate',
            sections: [
              { 
                subtitle: 'The Hierarchy', 
                body: 'Hamlet → Village → Town → City → Conurbation → Megalopolis. As you move up: population increases, services increase, sphere of influence widens.',
                questions: [
                  { id: 'geo-set-hie-1', type: 'mcq', question: 'Which of these is the smallest settlement type in the hierarchy?', options: ['Village', 'Hamlet', 'Town', 'City'], correctAnswer: 1 },
                  { id: 'geo-set-hie-1-ext', type: 'mcq', question: 'What term describes a large urban area formed by merging cities and towns?', options: ['Megalopolis', 'Conurbation', 'Hamlet', 'Dormitory town'], correctAnswer: 1 },
                  { id: 'geo-set-hie-2', type: 'mcq', question: 'What happens to the number of services as you move up the hierarchy?', options: ['It decreases', 'It stays the same', 'It increases', 'It becomes zero'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Key Principles', 
                body: 'High-order services need large threshold populations and have wide spheres of influence. Low-order services need small thresholds and have narrow spheres. Settlements at higher levels contain all lower-level services plus specialist ones.',
                questions: [
                  { id: 'geo-set-hie-3', type: 'mcq', question: 'What is "threshold population"?', options: ['The total population of a country', 'Minimum number of people needed to make a service viable', 'Maximum number of people a city can hold', 'The number of people who move away'], correctAnswer: 1 },
                  { id: 'geo-set-hie-4', type: 'mcq', question: 'Which is an example of a high-order service?', options: ['Post box', 'Village shop', 'Specialist hospital', 'Newsagent'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Sphere of Influence', 
                body: 'A small village attracts people from only a few km for basic services. A large city attracts people from tens or hundreds of km for specialist services. Supermarkets and retail parks need large catchment areas to be profitable.',
                questions: [
                  { id: 'geo-set-hie-5', type: 'mcq', question: 'What is the "sphere of influence"?', options: ['The area a settlement serves', 'The political power of a mayor', 'The atmospheric pressure over a city', 'The distance to the nearest capital'], correctAnswer: 0 }
                ]
              },
              { 
                subtitle: 'Settlement Location Factors', 
                body: 'Water supply — early settlements near rivers, springs or wells. Flat land — for building, farming and movement. Defensive sites — hills, meanders, islands. Transport routes — river crossings, ports, road and rail junctions. Resources — coal, iron, timber, fertile soil attracted workers and industry.',
                questions: [
                  { id: 'geo-set-hie-6', type: 'mcq', question: 'Why were early settlements often located near rivers?', options: ['For entertainment', 'For water supply and transport', 'To avoid flat land', 'To be far from resources'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Changing Services', 
                body: 'Rural areas are losing services due to population decline and increased car ownership. Internet shopping is reducing the need for physical shops in small settlements. Consolidation of schools, post offices and pubs in villages. "Food deserts" — areas without access to affordable fresh food.',
                questions: [
                  { id: 'geo-set-hie-7', type: 'mcq', question: 'What are "food deserts"?', options: ['Deserts where only cacti grow', 'Areas without access to affordable fresh food', 'Places with too many restaurants', 'Desert areas used for farming'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-1.6',
        number: '1.6',
        title: 'Urban Settlements',
        keywords: [
          { term: 'Urban Land Use', definition: 'How land is used within a city: residential, industrial, commercial, green space.' },
          { term: 'Burgess Model', definition: 'Concentric ring model with CBD at centre, surrounded by rings outward to suburbs.' },
          { term: 'CBD (Central Business District)', definition: 'Commercial core with highest land values, most shops, offices and banks.' },
          { term: 'Squatter Settlement', definition: 'Illegal self-built housing lacking basic services, common on outskirts of LEDC cities.' },
          { term: 'Favela', definition: 'Brazilian term for squatter settlements/slums, typically on steep hillsides around cities.' },
          { term: 'Gentrification', definition: 'Wealthier people renovating previously run-down areas, often displacing poorer residents.' },
          { term: 'Urban Regeneration', definition: 'Improving derelict parts of a city through investment in housing, services and infrastructure.' },
          { term: 'Suburbanisation', definition: 'Outward movement of people and businesses from city centre to suburbs.' },
          { term: 'Counter-urbanisation', definition: 'Movement of people from cities to rural areas, enabled by better transport and communications.' },
          { term: 'Urban Sprawl', definition: 'Uncontrolled outward spread of urban areas into surrounding countryside.' },
          { term: 'Green Belt', definition: 'Protected land around a city where development is restricted to prevent urban sprawl.' },
          { term: 'Brownfield Site', definition: 'Previously built-on land within a city that can be redeveloped. More sustainable option.' },
          { term: 'Greenfield Site', definition: 'Undeveloped land on city edge. Less sustainable — builds on natural land.' },
          { term: 'Social Deprivation', definition: 'Lack of basic necessities: adequate housing, healthcare, education and employment.' },
          { term: 'Site and Service Scheme', definition: 'Government provides land and basic infrastructure; residents build their own homes.' },
        ],
        caseStudies: [
          {
            id: 'cs-glasgow-regeneration',
            title: 'Glasgow – Urban Problems and Regeneration | MEDC',
            flag: '🏴',
            color: 'indigo',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'Glasgow is Scotland\'s largest city. Once a world-leading industrial powerhouse (shipbuilding, steel, textiles), deindustrialisation since the 1960s–80s created severe and lasting social problems.',
                questions: [
                  { id: 'geo-gla-reg-1', type: 'mcq', question: 'Which industry was Glasgow a world leader in before deindustrialisation?', options: ['Automobile', 'Shipbuilding', 'Software', 'Aerospace'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Problem — Poverty and Inequality', 
                body: 'Nearly 30% of Glasgow\'s working-age population unemployed — 50% higher than rest of Scotland/UK. Highest proportion of Income Benefit claimants in the UK. 18% of 16–19 year-olds are NEET (not in education, employment or training). Most deprived areas: Drumchapel, Easterhouse, Castlemilk.',
                questions: [
                  { id: 'geo-gla-reg-2', type: 'mcq', question: 'What percentage of Glasgow\'s working-age population was unemployed as mentioned?', options: ['10%', '20%', '30%', '40%'], correctAnswer: 2 },
                  { id: 'geo-gla-reg-3', type: 'mcq', question: 'What does the acronym NEET stand for?', options: ['New Economic Energy Technology', 'Not in Education, Employment or Training', 'National Essential Education Team', 'Near Every Economic Town'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Problem — Crime and Drugs', 
                body: 'Highest crime rate in Scotland. Drug-related mortality increased 95% since 1997. Over 6,000 children live in households with drug-using family members. Highest incidence of alcohol-related liver disease in Scotland. 170 teenage gangs — same number as London (6x Glasgow\'s size).',
                questions: [
                  { id: 'geo-gla-reg-4', type: 'mcq', question: 'How much has drug-related mortality increased in Glasgow since 1997?', options: ['20%', '50%', '95%', '150%'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Problem — Housing', 
                body: 'Glasgow declared a "housing emergency" (2024). Over 5,200 open homelessness cases; 44% rise since 2019. A 2-bedroom flat in west Glasgow receives 300+ bids. Chronic shortage of social housing; rising private rents price out lower-income households.',
                questions: [
                  { id: 'geo-gla-reg-5', type: 'mcq', question: 'What happened to the number of homelessness cases in Glasgow since 2019?', options: ['Decreased by 20%', 'Stayed the same', 'Rose by 44%', 'Doubled'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Regeneration — East End', 
                body: 'Previously derelict industrial land regenerated. 2014 Commonwealth Games triggered massive infrastructure investment. New housing, sports facilities, roads and green spaces built. Merchant City transformed into a fashionable cultural and restaurant quarter.',
                questions: [
                  { id: 'geo-gla-reg-6', type: 'mcq', question: 'Which event triggered massive infrastructure investment in Glasgow\'s East End?', options: ['The Olympics', '2014 Commonwealth Games', 'The World Cup', 'COP26'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Regeneration — Clyde Waterfront', 
                body: 'Former shipyards redeveloped into residential, commercial and cultural spaces. Science Centre, SECC and Armadillo concert hall attract visitors and investment.',
                questions: [
                  { id: 'geo-gla-reg-7', type: 'mcq', question: 'What was the Clyde Waterfront previously used for?', options: ['Farming', 'Shipyards', 'Office buildings', 'Forestry'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Solutions — Employment', 
                body: 'Enterprise zones attract new businesses with tax incentives. Skills training programmes. Diversification into creative industries, financial services and tourism.',
                questions: [
                  { id: 'geo-gla-reg-8', type: 'mcq', question: 'How do Enterprise zones attract businesses?', options: ['By banning competitors', 'With tax incentives', 'With free labour', 'By ignoring laws'], correctAnswer: 1 }
                ]
              },
            ]
          },
          {
            id: 'cs-brazil-favelas',
            title: 'Brazil – Favelas in Sao Paulo | LEDC',
            flag: '🇧🇷',
            color: 'green',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'Rapid rural-urban migration led to explosive favela growth around cities like Sao Paulo and Rio. Sao Paulo metro: ~22 million people.',
                questions: [
                  { id: 'geo-bra-fav-1', type: 'mcq', question: 'What led to explosive favela growth in Brazil?', options: ['Government planning', 'Rapid rural-urban migration', 'Lack of immigration', 'Coastal erosion'], correctAnswer: 1 },
                  { id: 'geo-bra-fav-1-ext', type: 'mcq', question: 'Approximately how many people live in the Sao Paulo metro area?', options: ['5 million', '10 million', '22 million', '50 million'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Causes', 
                body: 'Rapid rural-urban migration — millions arriving faster than formal housing can be built. Very low wages make formal housing unaffordable. Land illegally occupied on steep hillsides, floodplains and near railways. Government cannot build housing fast enough. Brazil has one of the world\'s highest inequality levels.',
                questions: [
                  { id: 'geo-bra-fav-2', type: 'mcq', question: 'Where are favelas typically built?', options: ['On prime city real estate', 'On steep hillsides, floodplains, and near railways', 'In city parks', 'Only in rural areas'], correctAnswer: 1 },
                  { id: 'geo-bra-fav-3', type: 'mcq', question: 'Why is formal housing unaffordable for many in Brazil?', options: ['Too much availability', 'Very low wages', 'Government subsidies', 'Excessive migration out of cities'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Conditions in Favelas', 
                body: 'Housing built from scrap materials — no planning permission. Lack of clean water and sewage systems → disease. No reliable electricity. Vulnerable to fire, floods and landslides. High crime rates and gang control. Limited access to healthcare and education.',
                questions: [
                  { id: 'geo-bra-fav-4', type: 'mcq', question: 'What is a major health risk in favelas?', options: ['Lack of sunshine', 'Lack of clean water and sewage systems', 'Too much exercise', 'Excessive healthcare availability'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Solutions', 
                body: 'Favela Bairro Programme — government upgrades favelas by providing legal land title, improved roads, water and electricity, schools and health clinics. Site and Service Schemes — government provides plots with basic infrastructure; residents build own homes. Self-help housing — communities given materials, tools and technical guidance. Urban regeneration — clearing dangerous areas and relocating residents.',
                questions: [
                  { id: 'geo-bra-fav-5', type: 'mcq', question: 'What is the "Favela Bairro Programme"?', options: ['A plan to demolish all favelas', 'A government programme to upgrade favelas with infrastructure', 'A new favela construction company', 'A tax on favela residents'], correctAnswer: 1 },
                  { id: 'geo-bra-fav-6', type: 'mcq', question: 'What are "Site and Service Schemes"?', options: ['Building websites for residents', 'Providing plots with infrastructure for residents to build homes', 'Directly building every house for residents', 'Providing free internet'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Successes and Challenges', 
                body: 'Favela upgrading improves conditions without displacing communities. Legal land title gives residents security to invest. Challenge: millions still in inadequate housing. In-migration continues creating new settlements faster than they can be upgraded.',
                questions: [
                  { id: 'geo-bra-fav-7', type: 'mcq', question: 'What is a major challenge for favela upgrading?', options: ['Too much funding', 'In-migration creates new settlements faster than upgrades', 'Residents don\'t want titles', 'Lack of land area'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-1.7',
        number: '1.7',
        title: 'Urbanisation',
        keywords: [
          { term: 'Urbanisation', definition: 'The process by which an increasing proportion of a population lives in urban areas.' },
          { term: 'Rural-Urban Migration', definition: 'Movement from rural areas to cities — the key driver of urbanisation in LEDCs.' },
          { term: 'Megacity', definition: 'A city with a population of over 10 million people.' },
          { term: 'Urban Growth', definition: 'Increase in the physical size and population of urban areas.' },
          { term: 'Informal Sector', definition: 'Unregulated, unofficial economic activity (street trading, waste picking, domestic work).' },
          { term: 'Formal Sector', definition: 'Official, regulated employment with contracts, minimum wages and legal rights.' },
          { term: 'Natural Increase', definition: 'Births exceeding deaths within the urban population, contributing to city growth.' },
          { term: 'Push Factor', definition: 'Negative rural conditions driving people to leave (drought, poverty, conflict, lack of services).' },
          { term: 'Pull Factor', definition: 'Positive urban conditions attracting people to move (jobs, higher wages, better services).' },
          { term: 'Primate City', definition: 'A city disproportionately larger than all others, dominating economic and cultural life.' },
        ],
        caseStudies: [
          {
            id: 'cs-lagos-urbanisation',
            title: 'Lagos, Nigeria – Rapid Urbanisation | LEDC',
            flag: '🇳🇬',
            color: 'emerald',
            sections: [
              { 
                subtitle: 'Overview', 
                body: "Lagos is Africa's largest city (~21 million metro area) and one of Earth's fastest-growing cities. Contributes 10% of Nigeria's population but 30% of its GDP.",
                questions: [
                  { id: 'geo-lag-urb-1', type: 'mcq', question: 'How much of Nigeria\'s GDP does Lagos contribute?', options: ['10%', '20%', '30%', '50%'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Why Lagos Has Grown', 
                body: "Major deepwater seaport. 60% of Nigeria's economic activity and 80% of its industry are in Lagos State. Main financial centre of West Africa. Offshore oil industry is a major employer. 96% of migrants come from within Nigeria itself.",
                questions: [
                  { id: 'geo-lag-urb-2', type: 'mcq', question: 'What percentage of Nigeria\'s industry is in Lagos State?', options: ['40%', '60%', '80%', '95%'], correctAnswer: 2 },
                  { id: 'geo-lag-urb-3', type: 'mcq', question: 'Where do most migrants to Lagos come from?', options: ['Europe', 'Other African countries', 'Within Nigeria itself', 'China'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Two Groups of Migrants', 
                body: "Voluntary Itinerant Migrants — workers from Nigeria, Benin and Togo who work in Lagos but keep families at home. Include seasonal agricultural workers, construction artisans and underpaid civil servants. Sleep at work sites or mosques and send all earnings as remittances. Forced/Displaced Migrants — people driven from northern Nigeria by Boko Haram insurgency and Fulani herdsmen attacks.",
                questions: [
                  { id: 'geo-lag-urb-4', type: 'mcq', question: 'Who are "Voluntary Itinerant Migrants" in Lagos?', options: ['Forced refugees', 'Workers who work in Lagos but keep families at home', 'Rich tourists', 'Government officials'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Push Factors from Rural North', 
                body: "Conflict from Boko Haram and Fulani herdsmen. Agricultural poverty and declining crop yields. Lack of services (hospitals, schools, roads). Desertification reducing farmland. Very few formal employment opportunities.",
                questions: [
                  { id: 'geo-lag-urb-5', type: 'mcq', question: 'Which conflict is a push factor from northern Nigeria?', options: ['World War II', 'Boko Haram insurgency', 'Conflict with neighbors', 'Coastal storms'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Pull Factors to Lagos', 
                body: "Employment in oil, manufacturing and financial services. Higher wages — far above rural incomes. Better healthcare and education. Commercial opportunities in the vibrant informal sector.",
                questions: [
                  { id: 'geo-lag-urb-6', type: 'mcq', question: 'Which sector provides many pull opportunities in Lagos?', options: ['Space travel', 'Oil, manufacturing, and finance', 'Luxury fashion only', 'Agriculture only'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Urban Problems', 
                body: "Housing — Makoko: 300,000 people on stilts over a lagoon with no clean water, electricity or sanitation. Transport — 40% of Nigeria's cars registered in Lagos; 3+ hour daily commutes. Sanitation — inadequate sewage treatment and waste collection. Pollution — air, water and noise at extreme levels. Crime — poverty-driven gang activity.",
                questions: [
                  { id: 'geo-lag-urb-7', type: 'mcq', question: 'What is a major transport problem in Lagos?', options: ['Too many bicycles', '40% of Nigeria\'s cars are there; 3+ hour commutes', 'Lack of any roads', 'Too many trains'], correctAnswer: 1 },
                  { id: 'geo-lag-urb-7-ext', type: 'mcq', question: 'Which famous Lagos settlement lives on stilts with no basic sanitation?', options: ['Ikeja', 'Victoria Island', 'Makoko', 'Eko Atlantic'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Solutions', 
                body: "BRT (Bus Rapid Transit) — dedicated bus lanes introduced. Eko Atlantic City — new planned city being built on reclaimed land from the ocean. Investment in road and rail infrastructure. Formalisation of some settlements — improved water and electricity access.",
                questions: [
                  { id: 'geo-lag-urb-8', type: 'mcq', question: 'What is "Eko Atlantic City"?', options: ['A new underwater park', 'A planned city built on reclaimed land', 'The old city center', 'A new port facility'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'theme-2',
    title: 'Natural Environment',
    color: 'emerald',
    units: [
      {
        id: 'unit-2.1',
        number: '2.1',
        title: 'Earthquakes and Volcanoes',
        keywords: [
          { term: 'Tectonic Plates', definition: 'Large sections of the Earth\'s crust that move slowly, driven by convection currents in the mantle.' },
          { term: 'Convergent Boundary', definition: 'Two plates moving towards each other. Oceanic crust subducts under continental crust — creates trenches, volcanoes.' },
          { term: 'Divergent Boundary', definition: 'Two plates moving apart, allowing magma to rise and form new crust at mid-ocean ridges.' },
          { term: 'Transform Boundary', definition: 'Two plates sliding past each other horizontally, causing earthquakes.' },
          { term: 'Subduction Zone', definition: 'Where denser oceanic crust is forced down beneath lighter continental crust into the mantle.' },
          { term: 'Focus', definition: 'The exact point within the Earth where an earthquake originates.' },
          { term: 'Epicentre', definition: 'The point on the Earth\'s surface directly above the focus — where shaking is usually strongest.' },
          { term: 'Fault', definition: 'A fracture in the Earth\'s crust along which movement has occurred.' },
          { term: 'Richter Scale', definition: 'Logarithmic scale measuring earthquake magnitude. Each point = 10x greater energy released.' },
          { term: 'Mercalli Scale', definition: 'Scale measuring earthquake intensity based on observed effects on people and structures (I–XII).' },
          { term: 'Seismograph', definition: 'Instrument that detects, records and measures seismic waves produced by earthquakes.' },
          { term: 'Tsunami', definition: 'Powerful ocean waves generated by sudden seabed displacement during an earthquake or eruption.' },
          { term: 'Shield Volcano', definition: 'Broad, gently sloping volcano from low-viscosity basaltic lava. Effusive, not explosive.' },
          { term: 'Composite Volcano (Stratovolcano)', definition: 'Steep-sided volcano built from alternating lava and ash layers. Found at convergent boundaries. Very explosive.' },
          { term: 'Pyroclastic Flow', definition: 'Fast-moving current of extremely hot gas, ash and volcanic debris flowing down a volcano.' },
          { term: 'Lahar', definition: 'Volcanic mudflow formed when ash and rock mix with water from rain or melting snow.' },
          { term: 'Primary Effects', definition: 'Immediate direct impacts — buildings collapse, deaths, roads destroyed.' },
          { term: 'Secondary Effects', definition: 'Longer-term indirect consequences — disease, homelessness, economic disruption.' },
          { term: 'Immediate Responses', definition: 'Actions in hours/days to save lives — search and rescue, emergency food and water.' },
          { term: 'Long-term Responses', definition: 'Actions over months/years to rebuild and improve resilience.' },
          { term: 'Ring of Fire', definition: 'Zone around the Pacific Ocean with high earthquake and volcanic activity due to plate boundaries.' },
          { term: 'Liquefaction', definition: 'Saturated soil temporarily losing strength during an earthquake, behaving like a liquid.' },
        ],
        caseStudies: [
          {
            id: 'cs-sulawesi',
            title: 'Sulawesi Earthquake, Indonesia (2018) | LEDC — Earthquake + Tsunami',
            flag: '🇮🇩',
            color: 'emerald',
            sections: [
              { 
                subtitle: 'Key Facts', 
                body: 'Date: 28 September 2018. Location: near Palu city, Central Sulawesi, Indonesia. Magnitude: 7.5 on the Richter Scale. Depth: ~10km — shallow earthquake causes severe surface shaking. Time: 6:02pm local — many people were outdoors. Triggered a tsunami with waves up to 6 metres. Also caused catastrophic liquefaction. 4,340+ confirmed dead; 4,600+ missing; 170,000+ displaced.',
                questions: [
                   { id: 'geo-sul-1', type: 'mcq', question: 'What was the magnitude of the Sulawesi earthquake?', options: ['5.5', '7.5', '9.0', '6.5'], correctAnswer: 1 },
                   { id: 'geo-sul-2', type: 'mcq', question: 'Which secondary hazard caused by the earthquake led to entire neighborhoods sinking?', options: ['Volcanic ash', 'Liquefaction', 'Acid rain', 'Tornadoes'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Tectonic Context', 
                body: 'Indonesia sits where three major plates meet — Eurasian, Australian and Pacific. Located on the Ring of Fire — one of the most seismically active regions on Earth. Occurred along the Palu-Koro Fault — a transform (strike-slip) fault. Rapid lateral movement caused massive seabed displacement and triggered the tsunami.',
                questions: [
                   { id: 'geo-sul-3', type: 'mcq', question: 'What type of fault is the Palu-Koro Fault?', options: ['Convergent', 'Divergent', 'Transform (strike-slip)', 'Normal'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Primary Effects', 
                body: 'Widespread collapse of buildings, roads and bridges. Tsunami waves up to 6m devastated coastal areas of Palu Bay. Liquefaction: entire residential neighbourhoods sank into the ground.',
                questions: [
                   { id: 'geo-sul-4', type: 'mcq', question: 'How high were the tsunami waves in Palu Bay?', options: ['1m', '3m', '6m', '10m'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Secondary Effects', 
                body: 'Disease outbreaks — cholera and waterborne diseases from contaminated water. Food and clean water shortages lasting weeks. Economic devastation: fishing, agriculture and businesses destroyed. Widespread psychological trauma. International emergency assistance required for months.',
                questions: [
                   { id: 'geo-sul-5', type: 'mcq', question: 'Which disease outbreak was a concern following the disaster?', options: ['Smallpox', 'Cholera', 'Malaria only', 'Influenza only'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Immediate Responses', 
                body: 'Indonesian army deployed for search and rescue. International teams offered assistance. Emergency food, water and medical supplies distributed. Evacuation centres established.',
                questions: [
                  { id: 'geo-sul-imm-1', type: 'mcq', question: 'Which organization was primarily responsible for initial search and rescue in Sulawesi?', options: ['The Red Cross', 'Indonesian army', 'United Nations', 'Google'], correctAnswer: 1 },
                  { id: 'geo-sul-imm-2', type: 'mcq', question: 'What was established to provide shelter for survivors?', options: ['Floating hotels', 'New skyscrapers', 'Evacuation centres', 'Underground bunkers'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Long-term Responses', 
                body: 'Rebuilding of homes, schools, hospitals and infrastructure. Improved tsunami early warning systems. Liquefaction risk mapping to guide future land use. International aid: $50M+ pledged. Relocation of communities from highest-risk coastal zones.',
                questions: [
                  { id: 'geo-sul-long-1', type: 'mcq', question: 'How much international aid was pledged for long-term recovery?', options: ['$10 million', '$25 million', '$50M+', '$1 billion'], correctAnswer: 2 },
                  { id: 'geo-sul-long-2', type: 'mcq', question: 'What was mapped to help guide future land use and reduce risk?', options: ['Tourist sites', 'Liquefaction risk zones', 'Gold deposits', 'Road traffic'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Why Effects Were Severe (LEDC)', 
                body: 'Most buildings not earthquake-resistant. Inadequate tsunami early warning systems. Poor infrastructure hampered rescue. Limited government resources. Corruption slowed reconstruction. Combination of earthquake + tsunami + liquefaction was exceptionally destructive.',
                questions: [
                   { id: 'geo-sul-6', type: 'mcq', question: 'Why were the effects particularly severe in this case?', options: ['Everyone was prepared', 'Combination of earthquake, tsunami, and liquefaction in an LEDC', 'The earthquake was very deep', 'It happened in a desert'], correctAnswer: 1 }
                ]
              },
            ]
          },
          {
            id: 'cs-iceland-volcano',
            title: 'Fagradalsfjall Volcano, Iceland (2021) | MEDC — Volcanic Eruption',
            flag: '🇮🇸',
            color: 'blue',
            sections: [
              { 
                subtitle: 'Key Facts', 
                body: 'Eruption began: 19 March 2021. Location: Reykjanes Peninsula, SW Iceland. First eruption in the area for ~800 years. Type: effusive fissure eruption — slow-moving basaltic lava flows. No casualties — remote location and advance warning. Attracted 300,000+ tourists.',
                questions: [
                  { id: 'geo-ice-1', type: 'mcq', question: 'What type of eruption was the 2021 Fagradalsfjall eruption?', options: ['Explosive Plinian', 'Effusive fissure eruption', 'Underwater steam eruption', 'Sudden gas release'], correctAnswer: 1 },
                  { id: 'geo-ice-1-ext', type: 'mcq', question: 'On which Icelandic peninsula did the 2021 eruption occur?', options: ['Snæfellsnes', 'Reykjanes', 'Tröllaskagi', 'Westfjords'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Tectonic Context', 
                body: 'Iceland sits astride the Mid-Atlantic Ridge — a divergent plate boundary. North American and Eurasian plates move apart at ~2.5cm per year. Iceland also above a hotspot — a mantle plume of extra-hot material. The combination makes Iceland extremely volcanically active.',
                questions: [
                  { id: 'geo-ice-2', type: 'mcq', question: 'Which two plates are moving apart at the Mid-Atlantic Ridge in Iceland?', options: ['Pacific and Nazca', 'North American and Eurasian', 'African and South American', 'Indian and Australian'], correctAnswer: 1 },
                  { id: 'geo-ice-3', type: 'mcq', question: 'What is a "hotspot" in a volcanic context?', options: ['A popular tourist site', 'A mantle plume of extra-hot material', 'The center of a city', 'A high pressure weather system'], correctAnswer: 1 },
                  { id: 'geo-ice-3-ext', type: 'mcq', question: 'At what approximate rate are the plates in Iceland moving apart?', options: ['2.5mm per year', '2.5cm per year', '25cm per year', '2.5m per year'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Effects', 
                body: 'Lava flows over remote, unpopulated area — no deaths or structural damage. Some air quality concerns from sulphur dioxide (SO₂) emissions. Minor air traffic disruption. Tourism boom — safe viewing platforms built. New land created as lava solidified.',
                questions: [
                  { id: 'geo-ice-4', type: 'mcq', question: 'What was a positive economic effect of the eruption?', options: ['Increased farming', 'Tourism boom', 'Lowered taxes', 'Free heating for everyone'], correctAnswer: 1 },
                  { id: 'geo-ice-4-ext', type: 'mcq', question: 'Which gas emission from the 2021 eruption caused local air quality concerns?', options: ['Carbon dioxide', 'Oxygen', 'Sulphur dioxide (SO₂)', 'Nitrous oxide'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Why Effects Were Limited (MEDC)', 
                body: 'World-class volcanic monitoring detected eruption days before it began. Iceland has centuries of experience managing volcanic hazards. High income country with resources to monitor and respond. Effusive (lava only) eruption — slower and more predictable. Remote location — no buildings or infrastructure at risk.',
                questions: [
                  { id: 'geo-ice-5', type: 'mcq', question: 'Why were there no casualties in this eruption?', options: ['The volcano was small', 'Advanced monitoring and remote location', 'The lava was cold', 'No one lives in Iceland'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-2.2',
        number: '2.2',
        title: 'Rivers',
        keywords: [
          { term: 'Drainage Basin', definition: 'Area of land drained by a river and its tributaries. Boundary = the watershed.' },
          { term: 'Watershed', definition: 'Ridge of high land separating one drainage basin from the next.' },
          { term: 'Tributary', definition: 'Smaller river or stream flowing into a larger river.' },
          { term: 'Confluence', definition: 'Point where two rivers meet and join.' },
          { term: 'Source', definition: 'Starting point of a river, often in highland areas.' },
          { term: 'Mouth', definition: 'Where a river reaches the sea, a lake or another body of water.' },
          { term: 'Hydraulic Action', definition: 'Erosion by the sheer force of water compressing air into cracks and weakening rock.' },
          { term: 'Abrasion', definition: 'Erosion where rocks carried by the river scrape and wear away the bed and banks.' },
          { term: 'Attrition', definition: 'Erosion where transported rocks collide with each other, becoming smaller and rounder.' },
          { term: 'Solution', definition: 'Chemical erosion dissolving soluble minerals in the river bed such as limestone.' },
          { term: 'Traction', definition: 'Large boulders rolled along the river bed in high energy conditions.' },
          { term: 'Saltation', definition: 'Small pebbles bounced along the river bed.' },
          { term: 'Suspension', definition: 'Fine silt and clay particles carried within the flowing water.' },
          { term: 'Deposition', definition: 'When a river loses energy and drops the sediment it is carrying.' },
          { term: 'V-shaped Valley', definition: 'Narrow valley with steep sides in the upper course, formed by intense vertical erosion.' },
          { term: 'Interlocking Spurs', definition: 'Ridges of hard rock alternating on either side of a river in the upper course.' },
          { term: 'Waterfall', definition: 'Vertical drop where river flows over hard rock above softer rock which is undercut and collapses.' },
          { term: 'Gorge', definition: 'Steep-sided narrow valley formed as a waterfall retreats upstream.' },
          { term: 'Meander', definition: 'Sweeping bend in a river in the middle or lower course.' },
          { term: 'Ox-bow Lake', definition: 'Curved lake cut off from the river when a meander neck is eroded through.' },
          { term: 'Floodplain', definition: 'Flat land either side of a river, regularly flooded and built up of fertile alluvium.' },
          { term: 'Levee', definition: 'Natural raised embankment along a river bank built up by repeated flooding.' },
          { term: 'Delta', definition: 'Flat area of sediment at a river\'s mouth, formed as the river loses velocity and drops its load.' },
          { term: 'Hydrograph', definition: 'Graph showing river discharge changes over time in response to a rainfall event.' },
          { term: 'Lag Time', definition: 'Delay between peak rainfall and peak discharge on a storm hydrograph.' },
          { term: 'Discharge', definition: 'Volume of water flowing past a point per second, measured in cumecs (m³/s).' },
          { term: 'Hard Engineering', definition: 'Artificial structures to control rivers — dams, embankments, channelisation, flood walls.' },
          { term: 'Soft Engineering', definition: 'Nature-based flood management — afforestation, floodplain restoration, zoning. More sustainable.' },
          { term: 'Infiltration', definition: 'Water soaking into the soil from the surface.' },
          { term: 'Overland Flow', definition: 'Water flowing over the land surface when ground is saturated or impermeable.' },
        ],
        caseStudies: [
          {
            id: 'cs-pakistan-floods',
            title: 'Pakistan Floods (2022) | LEDC — River Flooding',
            flag: '🇵🇰',
            color: 'emerald',
            sections: [
              { 
                subtitle: 'The Indus River System', 
                body: 'Basin area: 1,120,000 km² — crossing Pakistan, Afghanistan, China and India. 47% of the basin lies in Pakistan, running the full length of the country. River length: 3,200 km — one of the world\'s longest. 237 million people depend on the basin. 90%+ of Pakistan\'s crops irrigated from the Indus; farming = 38.5% of the workforce and 18.5% of GDP. The basin generates a $380 billion regional economy. Home to the critically endangered Indus River Dolphin (~1,000 remaining). Ancient Harappa and Mohenjo-daro civilisations were located along the river.',
                questions: [
                  { id: 'geo-pak-flo-1', type: 'mcq', question: 'Approximately how many people depend on the Indus River basin?', options: ['50 million', '100 million', '237 million', '500 million'], correctAnswer: 2 },
                  { id: 'geo-pak-flo-2', type: 'mcq', question: 'What percentage of Pakistan\'s crops are irrigated from the Indus?', options: ['50%', '75%', '90%+', '100%'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Overview', 
                body: 'Worst monsoon flooding in decades — a national catastrophe affecting all of Pakistan. 190%+ of normal rainfall in July–August 2022. Pakistan\'s corrupt and inefficient government made effective disaster management extremely difficult.',
                questions: [
                  { id: 'geo-pak-flo-3', type: 'mcq', question: 'How much higher than normal was the rainfall in July-August 2022?', options: ['10%', '50%', '100%', '190%+'], correctAnswer: 3 }
                ]
              },
              { 
                subtitle: 'Physical Causes', 
                body: 'Record monsoon rainfall of 190%+ of normal levels. Climate change increasing rainfall variability and intensity; glacial melt adding to river flows. Mountainous topography channels runoff rapidly into rivers.',
                questions: [
                  { id: 'geo-pak-flo-4', type: 'mcq', question: 'What physical factor channels runoff rapidly into Pakistan\'s rivers?', options: ['Flat plains', 'Dense forests', 'Mountainous topography', 'Large deserts'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Human Causes', 
                body: 'Deforestation — Pakistan has the highest rate of deforestation in Asia; only 2.2% of land forested (2010). Poverty — population lacks means to evacuate or prepare. Urbanisation — increased impermeable surfaces creating more overland flow. Outdated and poorly maintained river management infrastructure. More intensive agriculture causing soil erosion and compaction. Political instability limiting preventive investment. River crosses multiple countries making joint management politically complex.',
                questions: [
                  { id: 'geo-pak-flo-5', type: 'mcq', question: 'What percentage of Pakistan\'s land was forested in 2010?', options: ['2.2%', '10%', '25%', '50%'], correctAnswer: 0 }
                ]
              },
              { 
                subtitle: 'Social Impacts', 
                body: '40% of young children experienced stunted growth due to food and healthcare shortages. Malaria cases quadrupled from 400,000 (2021) to 1.6 million (2022). Cholera and dengue fever thriving in residual stagnant water. Millions displaced from destroyed homes. Schools, hospitals and community facilities destroyed.',
                questions: [
                  { id: 'geo-pak-flo-6', type: 'mcq', question: 'Which disease cases quadrupled following the 2022 floods?', options: ['Flu', 'COVID-19', 'Malaria', 'Polio'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Economic Impacts', 
                body: 'Catastrophic destruction of crops and livestock. Roads, bridges, dams severely damaged. Agricultural livelihoods destroyed for millions. Pakistan\'s already fragile economy severely set back. International financial aid and debt relief required.',
                questions: [
                  { id: 'geo-pak-flo-7', type: 'mcq', question: 'What was a major economic consequence of the floods?', options: ['Increased exports', 'Destruction of agricultural livelihoods', 'Currency value increase', 'Lower inflation'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Responses', 
                body: 'Emergency UN and international aid mobilised. National emergency declared. Large-scale evacuation carried out. Long-term: investment in improved flood defences, reforestation and early warning systems needed. Climate justice debate: Pakistan contributes less than 1% of global greenhouse gas emissions but suffers disproportionate climate impacts.',
                questions: [
                  { id: 'geo-pak-res-1', type: 'mcq', question: 'What portion of global greenhouse gas emissions does Pakistan contribute?', options: ['Less than 1%', '5%', '10%', '25%'], correctAnswer: 0 },
                  { id: 'geo-pak-res-2', type: 'mcq', question: 'What is a long-term strategy mentioned for flood prevention?', options: ['Building more roads', 'Reforestation and improved flood defences', 'Moving the entire population', 'Closing all dams'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-2.3',
        number: '2.3',
        title: 'Coasts',
        keywords: [
          { term: 'Swash', definition: 'Water rushing up a beach after a wave breaks.' },
          { term: 'Backwash', definition: 'Water running back down a beach towards the sea.' },
          { term: 'Constructive Wave', definition: 'Low, gentle wave with strong swash that deposits material and builds beaches.' },
          { term: 'Destructive Wave', definition: 'Tall, powerful wave with strong backwash that erodes cliffs and removes beach material.' },
          { term: 'Fetch', definition: 'Distance of open water over which wind blows to create waves. Greater fetch = more powerful waves.' },
          { term: 'Hydraulic Action', definition: 'Waves compressing air into cliff cracks, weakening and breaking them apart.' },
          { term: 'Abrasion', definition: 'Sediment hurled by waves grinding and wearing away cliff faces.' },
          { term: 'Attrition', definition: 'Rocks in the sea knock against each other, becoming smaller and more rounded.' },
          { term: 'Solution', definition: 'Chemical erosion of rocks such as limestone by slightly acidic seawater.' },
          { term: 'Longshore Drift', definition: 'Zigzag movement of sediment along a coast. Swash goes diagonally; backwash returns straight.' },
          { term: 'Wave-cut Platform', definition: 'Flat rocky shelf at cliff base exposed at low tide, formed by wave erosion.' },
          { term: 'Headland', definition: 'Promontory of more resistant rock jutting into the sea, eroded on both sides.' },
          { term: 'Bay', definition: 'Curved inlet of less resistant rock between two headlands, formed by faster erosion.' },
          { term: 'Cave', definition: 'Hollow in a cliff where waves exploit weaknesses through hydraulic action and abrasion.' },
          { term: 'Arch', definition: 'Formed when erosion cuts through a headland, creating a hole through the rock.' },
          { term: 'Stack', definition: 'Isolated pillar of rock formed when an arch roof collapses.' },
          { term: 'Stump', definition: 'Remains of a stack after erosion reduces it below the waterline.' },
          { term: 'Spit', definition: 'Narrow ridge of sand extending from the coast into the sea, formed by longshore drift.' },
          { term: 'Bar', definition: 'A spit that has grown to connect two headlands across a bay.' },
          { term: 'Tombolo', definition: 'A spit or sandbar connecting an island to the mainland.' },
          { term: 'Sea Wall', definition: 'Hard engineering — concrete wall built to reflect wave energy.' },
          { term: 'Groynes', definition: 'Hard engineering — barriers built at right angles to the beach to prevent longshore drift.' },
          { term: 'Rock Armour', definition: 'Hard engineering — large boulders placed at cliff base to absorb wave energy.' },
          { term: 'Beach Nourishment', definition: 'Soft engineering — artificially adding sand to widen a beach and absorb more wave energy.' },
          { term: 'Managed Retreat', definition: 'Allowing low-value land to flood naturally, creating intertidal habitats.' },
          { term: 'Coral Reef', definition: 'Biodiverse ecosystem built by coral polyps in warm, shallow, clear tropical waters.' },
          { term: 'Mangrove Swamp', definition: 'Coastal ecosystem of salt-tolerant trees in tropical areas, protecting coastlines and providing habitat.' },
        ],
        caseStudies: [
          {
            id: 'cs-hong-kong-coast',
            title: 'Hong Kong – Coastal Opportunities, Hazards and Management | MEDC',
            flag: '🇭🇰',
            color: 'red',
            sections: [
              { 
                subtitle: 'Location', 
                body: 'Hong Kong SAR is in southern China, bordering the South China Sea. Consists of Hong Kong Island, Kowloon, New Territories and ~260 islands. Population: ~7.5 million in a very small area — extremely high density.',
                questions: [
                  { id: 'geo-hk-loc-1', type: 'mcq', question: 'Where is Hong Kong located?', options: ['Northern China', 'Southern China, bordering the South China Sea', 'Western China near the Himalayas', 'Central China'], correctAnswer: 1 },
                  { id: 'geo-hk-loc-2', type: 'mcq', question: 'What is the approximate population of Hong Kong?', options: ['1 million', '3.5 million', '7.5 million', '15 million'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Opportunity — Fishing', 
                body: '~5,080 fishing vessels and 10,320 local fishermen. 2022: produced ~77,000 tonnes of fisheries produce valued at ~HK$2.2 billion.',
                questions: [
                  { id: 'geo-hk-fish-1', type: 'mcq', question: 'How much fisheries produce did Hong Kong produce in 2022?', options: ['10,000 tonnes', '45,000 tonnes', '77,000 tonnes', '100,000 tonnes'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Opportunity — Tourism', 
                body: 'Popular international tourist destination. Hotels, restaurants and attractions along Victoria Harbour. Traditional junk boat trips. Iconic Tsim Sha Tsui promenade.',
                questions: [
                  { id: 'geo-hk-tour-1', type: 'mcq', question: 'Which harbor is central to Hong Kong\'s tourist attractions?', options: ['Sydney Harbour', 'Victoria Harbour', 'Pearl River', 'Kowloon Bay'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Opportunity — Trade and Transport', 
                body: 'Star Ferry — iconic passenger route between Kowloon and Hong Kong Island. Kwai Chung container port — one of the busiest in the world. HK International Airport on Lantau Island — one of Asia\'s busiest airports.',
                questions: [
                  { id: 'geo-hk-trade-1', type: 'mcq', question: 'Which ferry route is an iconic passenger link in Hong Kong?', options: ['The Atlantic Ferry', 'Star Ferry', 'Discovery Bay Ferry', 'The Peak Tram'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Land Reclamation', 
                body: 'HK\'s high population density makes land intensely scarce. Extensive land reclamation: areas of Kowloon, Central and the airport are built on reclaimed land. Negative consequences: damage to marine ecosystems, coral reefs and fisheries.',
                questions: [
                  { id: 'geo-hk-recl-1', type: 'mcq', question: 'Why has Hong Kong used extensive land reclamation?', options: ['To create more farmland', 'Intense land scarcity due to high population density', 'To build high-speed railways', 'To increase biodiversity'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Conservation', 
                body: '40% of HK\'s land area designated as Country Park — protected from development. Mai Po wetlands support tens of millions of migratory birds. Deep Bay Marine Reserve protects the endangered Chinese White Dolphin. Mangrove forests provide coastal protection and crucial bird habitat.',
                questions: [
                  { id: 'geo-hk-cons-1', type: 'mcq', question: 'What percentage of Hong Kong\'s land is designated as Country Park?', options: ['10%', '25%', '40%', '60%'], correctAnswer: 2 },
                  { id: 'geo-hk-cons-2', type: 'mcq', question: 'Which endangered animal is protected by the Deep Bay Marine Reserve?', options: ['Giant Panda', 'Chinese White Dolphin', 'South China Tiger', 'Snow Leopard'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Coastal Hazard — Typhoons', 
                body: 'Hong Kong regularly struck by typhoons from the South China Sea. Typhoon Mangkhut (2018): one of the most powerful ever — storm surges, massive waves, widespread flooding. Projected sea level rise of 0.6m+ by 2100 will dramatically increase flood risk. SCMP: "Central Hong Kong could be under water in 80 years."',
                questions: [
                  { id: 'geo-hk-haz-1', type: 'mcq', question: 'Which powerful typhoon struck Hong Kong in 2018?', options: ['Typhoon Haiyan', 'Typhoon Mangkhut', 'Typhoon Tip', 'Typhoon Yagi'], correctAnswer: 1 },
                  { id: 'geo-hk-haz-2', type: 'mcq', question: 'What is the projected sea level rise for Hong Kong by 2100?', options: ['0.1m', '0.3m', '0.6m+', '1.2m'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Coastal Management', 
                body: 'Extensive sea walls along all major developed coastlines. Typhoon shelters — specially constructed harbours protecting fishing fleets. Flood barriers, underground storage tanks and upgraded drainage systems. Sophisticated typhoon early warning system: T1 to T10 signals. Strict building regulations requiring typhoon-resistant construction.',
                questions: [
                  { id: 'geo-hk-mgmt-1', type: 'mcq', question: 'What is the range of signals in Hong Kong\'s typhoon warning system?', options: ['Level 1 to 5', 'T1 to T10', 'Green to Red', 'A to D'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-2.4',
        number: '2.4',
        title: 'Weather and Climate',
        keywords: [
          { term: 'Weather', definition: 'The day-to-day conditions of the atmosphere at a specific place and time.' },
          { term: 'Climate', definition: 'The average atmospheric conditions over 30 or more years for a specific area.' },
          { term: 'Temperature', definition: 'Measure of heat energy in the air in degrees Celsius. Measured with a thermometer.' },
          { term: 'Precipitation', definition: 'All water falling from the atmosphere: rain, snow, sleet, hail. Measured in mm.' },
          { term: 'Air Pressure', definition: 'Weight of the atmosphere pressing down at a point. Measured in millibars with a barometer.' },
          { term: 'Wind Direction', definition: 'The compass direction FROM which the wind blows.' },
          { term: 'Wind Speed', definition: 'How fast air moves over the Earth\'s surface. Measured with an anemometer.' },
          { term: 'Humidity', definition: 'Amount of water vapour in the air. Measured as relative humidity (%) with a hygrometer.' },
          { term: 'Stevenson Screen', definition: 'White louvred box housing weather instruments at 1.2m above ground for standardised readings.' },
          { term: 'Rain Gauge', definition: 'Instrument measuring precipitation in mm over a given period.' },
          { term: 'Hygrometer', definition: 'Instrument measuring air humidity using wet-bulb and dry-bulb thermometers.' },
          { term: 'Anemometer', definition: 'Instrument with rotating cups measuring wind speed.' },
          { term: 'Barometer', definition: 'Instrument measuring atmospheric pressure in millibars.' },
          { term: 'Depression (Low Pressure)', definition: 'Area of low atmospheric pressure with rising air — brings clouds, rain and strong winds.' },
          { term: 'Anticyclone (High Pressure)', definition: 'Area of high pressure with descending air — brings clear, settled weather.' },
          { term: 'Warm Front', definition: 'Warm air advancing over cold air — brings steady, prolonged rain and rising cloud.' },
          { term: 'Cold Front', definition: 'Cold air undercutting warm air — brings heavy rain, thunderstorms, then a rapid clear-up.' },
          { term: 'Relief Rainfall', definition: 'Moist air forced over hills, cools and condenses on windward side. Leeward side is dry (rain shadow).' },
          { term: 'Convectional Rainfall', definition: 'Ground heats air rapidly, it rises, cools and condenses. Heavy short thunderstorms. Common near equator.' },
          { term: 'Frontal Rainfall', definition: 'Warm and cold air masses meet at a front — warm air rises, cools and condenses.' },
        ],
        caseStudies: [
          {
            id: 'cs-typhoon-haiyan',
            title: 'Typhoon Haiyan, Philippines (2013) | LEDC — Tropical Storm',
            flag: '🇵🇭',
            color: 'red',
            sections: [
              { 
                subtitle: 'Key Facts', 
                body: 'Date: November 2013. One of the strongest tropical storms ever recorded. Category 5 on the Saffir-Simpson scale. Wind speeds reached 315 km/h (195 mph). Tacloban city was the worst affected.',
                questions: [
                  { id: 'geo-hai-1', type: 'mcq', question: 'What category was Typhoon Haiyan on the Saffir-Simpson scale?', options: ['Category 1', 'Category 3', 'Category 5', 'Category 10'], correctAnswer: 2 },
                  { id: 'geo-hai-2', type: 'mcq', question: 'Which city in the Philippines was worst affected?', options: ['Manila', 'Cebu', 'Tacloban', 'Davao'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Primary Effects', 
                body: 'Over 6,000 people killed. 5-metre storm surge devastated coastal areas. Widespread destruction of homes, schools, and hospitals. Tacloban airport terminal destroyed.',
                questions: [
                  { id: 'geo-hai-3', type: 'mcq', question: 'Approximately how many people were killed by Typhoon Haiyan?', options: ['600', '1,000', '6,000', '60,000'], correctAnswer: 2 },
                  { id: 'geo-hai-4', type: 'mcq', question: 'How high was the storm surge in some locations?', options: ['1 metre', '3 metres', '5 metres', '10 metres'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Secondary Effects', 
                body: '14 million people affected, many left homeless. Outbreaks of disease from contaminated water. Loiting and violence reported in Tacloban. Power and water systems cut off for weeks.',
                questions: [
                  { id: 'geo-hai-5', type: 'mcq', question: 'How many people were estimated to be affected in total?', options: ['1 million', '5 million', '14 million', '50 million'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Responses', 
                body: 'Immediate: International aid from UK, USA, and elsewhere. NGOs provided food, water, and shelter. Long-term: Rebuilding of infrastructure. "Build Back Better" scheme focused on storm-resistant housing. Improved early warning systems.',
                questions: [
                  { id: 'geo-hai-6', type: 'mcq', question: 'What was the name of the long-term rebuilding scheme?', options: ['Safe Homes Plan', 'Build Back Better', 'Storm Guard', 'Tacloban Renew'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-2.5',
        number: '2.5',
        title: 'Climate and Ecosystems',
        keywords: [
          { term: 'Ecosystem', definition: 'Community of living organisms interacting with each other and their non-living environment.' },
          { term: 'Biome', definition: 'Large-scale ecosystem defined by climate and vegetation (e.g. tropical rainforest, hot desert, tundra).' },
          { term: 'Food Chain', definition: 'Linear sequence showing what eats what — Producer → Primary Consumer → Secondary Consumer.' },
          { term: 'Food Web', definition: 'Network of interconnected food chains showing all feeding relationships in an ecosystem.' },
          { term: 'Producer', definition: 'Organism (usually a plant) making its own food through photosynthesis.' },
          { term: 'Consumer', definition: 'Organism that feeds on other organisms.' },
          { term: 'Decomposer', definition: 'Organism (bacteria, fungi) breaking down dead matter and returning nutrients to the soil.' },
          { term: 'Nutrient Cycle', definition: 'Continuous movement of nutrients through an ecosystem — soil to plants to animals and back.' },
          { term: 'Biodiversity', definition: 'Variety of all living species — plants, animals, microorganisms — in a habitat.' },
          { term: 'Deforestation', definition: 'Large-scale permanent removal of trees for agriculture, logging, mining or development.' },
          { term: 'Desertification', definition: 'Process by which fertile land becomes arid and desert-like through climate and human activity.' },
          { term: 'Equatorial Climate', definition: 'Near equator (0–10°N/S) — ~27°C year-round, 2,000mm+ rainfall, no dry season.' },
          { term: 'Tropical Rainforest', definition: 'Dense biodiverse forest in the equatorial zone with layered structure and year-round heat and rain.' },
          { term: 'Emergent Layer', definition: 'Highest rainforest layer (40–60m+) where tallest trees rise above the canopy.' },
          { term: 'Canopy', definition: 'Main umbrella-like rainforest layer (~25–40m) blocking most sunlight from below.' },
          { term: 'Buttress Roots', definition: 'Wide flanged roots at base of tall rainforest trees providing support in thin tropical soils.' },
          { term: 'Hot Desert Climate', definition: 'Between 15–30°N/S — up to 50°C days, very cold nights, under 250mm rainfall per year.' },
          { term: 'Xerophyte', definition: 'Plant adapted to survive in very dry conditions (e.g. cactus with waxy skin and deep roots).' },
          { term: 'Aridity', definition: 'Extreme dryness with very little precipitation, typically under 250mm per year.' },
          { term: 'Sahel', definition: 'Semi-arid African transition zone south of the Sahara, vulnerable to desertification.' },
        ],
        caseStudies: [
          {
            id: 'cs-borneo-rainforest',
            title: 'Borneo – Tropical Rainforest | Equatorial Ecosystem',
            flag: '🌴',
            color: 'green',
            sections: [
              { 
                subtitle: 'Location', 
                body: 'Borneo is the world\'s third-largest island in Southeast Asia, near the equator. Divided between Indonesia (Kalimantan), Malaysia (Sabah and Sarawak) and Brunei. Contains one of the world\'s oldest rainforests — 130 million years old.',
                questions: [
                  { id: 'geo-bor-loc-1', type: 'mcq', question: 'What is Borneo\'s ranking in terms of island size worldwide?', options: ['First', 'Second', 'Third', 'Fourth'], correctAnswer: 2 },
                  { id: 'geo-bor-loc-2', type: 'mcq', question: 'Which three countries share the island of Borneo?', options: ['Thailand, Vietnam, Cambodia', 'Indonesia, Malaysia, Brunei', 'Philippines, Indonesia, Australia', 'Malaysia, Singapore, Thailand'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Climate', 
                body: 'Classic equatorial climate — hot and wet year-round. Average temperature: ~27–28°C. Annual rainfall: 2,000–4,000mm+ with no distinct dry season. Very high humidity.',
                questions: [
                  { id: 'geo-bor-cli-1', type: 'mcq', question: 'What is the typical average temperature in Borneo?', options: ['15–18°C', '20–22°C', '27–28°C', '35–40°C'], correctAnswer: 2 },
                  { id: 'geo-bor-cli-2', type: 'mcq', question: 'What is the characteristic of rainfall in an equatorial climate like Borneo\'s?', options: ['Single short wet season', 'Hot and wet year-round with no distinct dry season', 'Winter rainfall only', 'Low rainfall under 250mm'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Biodiversity', 
                body: 'Over 15,000 plant species and 3,000 tree species. Endangered species: Bornean Pygmy Elephant, Bornean Clouded Leopard, Rhinoceros Hornbill, Proboscis Monkey. Bornean Orangutan: fewer than 1,000 remaining in the wild. Complex food webs with multiple feeding levels.',
                questions: [
                  { id: 'geo-bor-bio-1', type: 'mcq', question: 'Approximately how many Orangutans are estimated to remain in the wild in Borneo?', options: ['Fewer than 1,000', '5,000', '10,000', '50,000'], correctAnswer: 0 }
                ]
              },
              { 
                subtitle: 'Deforestation — Causes', 
                body: 'Oil palm plantations — Indonesia and Malaysia produce 85%+ of world\'s palm oil. Commercial logging (legal and illegal). Subsistence and commercial agriculture clearing. Mining activities (coal, gold). Government corruption allowing illegal logging to continue.',
                questions: [
                  { id: 'geo-bor-def-1', type: 'mcq', question: 'What is a major driver of deforestation in Borneo?', options: ['Building ski resorts', 'Oil palm plantations', 'Urban sprawl of megacities', 'Coastal erosion'], correctAnswer: 1 },
                  { id: 'geo-bor-def-2', type: 'mcq', question: 'What percentage of the world\'s palm oil is produced by Indonesia and Malaysia?', options: ['25%', '50%', '85%+', '100%'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Consequences of Deforestation', 
                body: 'Loss of biodiversity — habitat destruction is the main cause of extinction in Borneo; orangutan population fell 50% in 16 years. Carbon release — burning peat swamp forests releases massive CO₂. Water cycle disruption — less interception and transpiration → increased runoff and flooding. Soil erosion — loss of root systems → topsoil washed away. Indigenous Dayak communities displaced. Air pollution from forest fires causes severe health problems across Southeast Asia.',
                questions: [
                  { id: 'geo-bor-con-1', type: 'mcq', question: 'How much did the orangutan population fall in a 16-year period due to habitat destruction?', options: ['10%', '25%', '50%', '75%'], correctAnswer: 2 },
                  { id: 'geo-bor-con-2', type: 'mcq', question: 'What is the effect of deforestation on the water cycle?', options: ['Increased transpiration', 'Reduced runoff', 'Increased runoff and flooding', 'More groundwater storage'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Why Rainforests Matter Globally', 
                body: 'Carbon sinks — store 25%+ of all land-based carbon. Regulate global water and weather cycles through massive evapotranspiration. Biodiversity hotspots — 50%+ of Earth\'s species despite covering only 6% of land area. Source of medicines — 25% of modern drugs originally derived from rainforest plants. Home to tens of millions of indigenous people.',
                questions: [
                  { id: 'geo-bor-glob-1', type: 'mcq', question: 'What percentage of Earth\'s species are found in rainforests?', options: ['10%+', '25%+', '50%+', '90%+'], correctAnswer: 2 },
                  { id: 'geo-bor-glob-2', type: 'mcq', question: 'How much of all land-based carbon is stored in rainforests?', options: ['5%', '15%', '25%+', '50%'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Conservation Efforts', 
                body: 'Protected areas and national parks (e.g. Kinabalu National Park in Sabah). RSPO (Roundtable on Sustainable Palm Oil) certification. International pressure and consumer campaigns. Reforestation projects. Orang-utan rescue and rehabilitation centres (e.g. Sepilok in Sabah).',
                questions: [
                  { id: 'geo-bor-cons-1', type: 'mcq', question: 'What does the RSPO certification stand for?', options: ['Rainforest Support and Protection Organization', 'Roundtable on Sustainable Palm Oil', 'Regenerative Soil and Plant Operations', 'Regional Species Preservation Office'], correctAnswer: 1 }
                ]
              },
            ]
          },
          {
            id: 'cs-sahara-desertification',
            title: 'The Sahara and Senegal – Desertification in the Sahel | Hot Desert',
            flag: '🏜️',
            color: 'amber',
            sections: [
              { 
                subtitle: 'The Sahara Desert', 
                body: 'World\'s largest hot desert — ~9 million km² across North Africa. Extremely arid — under 25mm annual rainfall. Temperatures up to 50°C day, below 0°C at night. Landscape types: erg (sand dunes), hamada (rocky plateaus), reg (gravel plains).',
                questions: [
                  { id: 'geo-sah-1', type: 'mcq', question: 'Approximately how large is the Sahara Desert?', options: ['1 million km²', '5 million km²', '9 million km²', '15 million km²'], correctAnswer: 2 },
                  { id: 'geo-sah-2', type: 'mcq', question: 'What is the term for a rocky plateau landscape in the Sahara?', options: ['Erg', 'Reg', 'Hamada', 'Wadi'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'The Sahel', 
                body: 'Semi-arid transition zone running east-west across Africa just south of the Sahara. Annual rainfall: 200–400mm in a single short, unreliable wet season. Highly vulnerable to drought and desertification. Home to tens of millions of subsistence farmers and pastoralists.',
                questions: [
                  { id: 'geo-sahel-1', type: 'mcq', question: 'Where is the Sahel located?', options: ['North of the Sahara', 'Directly south of the Sahara', 'In the center of the Congo Basin', 'On the southern tip of Africa'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Senegal in Context', 
                body: 'Located in West Africa — northern Senegal lies in the Sahel zone. Population heavily reliant on subsistence farming, livestock herding and fishing. Among the most vulnerable countries to desertification, drought and climate variability.',
                questions: [
                  { id: 'geo-sen-1', type: 'mcq', question: 'Which part of Senegal lies within the Sahel zone?', options: ['Southern Senegal', 'Northern Senegal', 'Eastern Senegal only', 'The capital city only'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Causes — Physical', 
                body: 'Declining and increasingly unreliable rainfall — climate change extending dry seasons. Consecutive years of drought deplete soil moisture and kill vegetation. High temperatures accelerate evaporation. Wind erosion removes exposed topsoil during droughts.',
                questions: [
                  { id: 'geo-sah-phys-1', type: 'mcq', question: 'How does climate change contribute to desertification in the Sahel?', options: ['Increased rainfall', 'Extending dry seasons and decreasing reliability of rain', 'Lowering temperatures', 'Increasing cloud cover'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Causes — Human', 
                body: 'Deforestation — trees cut for fuelwood (main cooking energy source). Overgrazing — too many livestock strip vegetation, compact soil and accelerate erosion. Overfarming — continuous cropping without fallow periods depletes soil nutrients. Population growth — more pressure on land and water resources. Inappropriate irrigation causing waterlogging and salinisation.',
                questions: [
                  { id: 'geo-sah-hum-1', type: 'mcq', question: 'Why is deforestation a major human cause of desertification in the region?', options: ['For commercial paper production', 'Trees are cut for fuelwood used in cooking', 'To make room for cities', 'To build ships'], correctAnswer: 1 },
                  { id: 'geo-sah-hum-2', type: 'mcq', question: 'What is a consequence of "overfarming"?', options: ['Increased crop yields', 'Depletion of soil nutrients', 'More available groundwater', 'Increased biodiversity'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Consequences', 
                body: 'Loss of fertile topsoil through wind and rain erosion. Reduced crop yields → food insecurity and malnutrition. Decreased biodiversity as vegetation disappears. Water scarcity as rivers dry up and wells fail. Forced migration of farming communities. Deepening poverty as livelihoods are destroyed.',
                questions: [
                  { id: 'geo-sah-con-1', type: 'mcq', question: 'What is a common social consequence of desertification for farming communities?', options: ['Increased wealth', 'Urbanization', 'Forced migration', 'Better health outcomes'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'The Great Green Wall Project', 
                body: 'Pan-African initiative to grow an 8,000km corridor of trees across the Sahel from Dakar, Senegal to Djibouti. Target: restore 100 million hectares of degraded land by 2030. In Senegal: communities have planted millions of trees and restored degraded farmland — crop yields have improved significantly. Benefits: prevents desertification, sequesters carbon, creates 10 million jobs, improves food security for 20 million people. Additional components: water catchment points, community vegetable gardens and seed banks. Challenges: funding shortfalls, climate variability and conflict in some regions (Mali, Niger).',
                questions: [
                  { id: 'geo-sah-ggw-1', type: 'mcq', question: 'What is the primary goal of the Great Green Wall?', options: ['To build a physical wall for security', 'To grow an 8,000km corridor of trees to combat desertification', 'To create a giant highway', 'To build new cities across Africa'], correctAnswer: 1 },
                  { id: 'geo-sah-ggw-2', type: 'mcq', question: 'What is the target for land restoration by 2030?', options: ['1 million hectares', '10 million hectares', '100 million hectares', '1 billion hectares'], correctAnswer: 2 }
                ]
              },
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'theme-3',
    title: 'Economic Development',
    color: 'amber',
    units: [
      {
        id: 'unit-3.1',
        number: '3.1',
        title: 'Development',
        keywords: [
          { term: 'Development', definition: 'A process of change and growth that improves the quality of life for people — not just about money or material goods.' },
          { term: 'Development Indicators', definition: 'Measures used to show how developed different countries are, e.g. life expectancy, literacy rate, GDP per capita.' },
          { term: 'GDP (Gross Domestic Product)', definition: 'The total income a country generates only from its internal goods and services.' },
          { term: 'GDP per capita', definition: 'GDP divided by population — the average income per person. Allows comparison between countries of different sizes.' },
          { term: 'GNI (Gross National Income)', definition: 'Wealth generated by a country both internally and externally (including foreign investments).' },
          { term: 'Life Expectancy', definition: 'The number of years a person is expected to live.' },
          { term: 'Infant Mortality Rate', definition: 'The number of children that die before reaching the age of one per 1,000 live births.' },
          { term: 'Literacy Rate', definition: 'The percentage of people who can read and write.' },
          { term: 'HDI (Human Development Index)', definition: 'A composite measure of development devised by the UN that averages GNI per capita, life expectancy and education. Given as a value of 0–1, where 1 is the highest. Not affected by population size.' },
          { term: 'HIC (High Income Country)', definition: 'Same as MEDC — a country with higher income and standard of living.' },
          { term: 'LIC (Low Income Country)', definition: 'Same as LEDC — a country with lower income and standard of living.' },
          { term: 'NIC (Newly Industrialised Country)', definition: 'A nation that has undergone rapid and successful industrialisation since the 1960s, moving up the development ladder (e.g. South Korea, Brazil, China).' },
          { term: 'LDC (Least Developed Country)', definition: 'The poorest developing countries — recognised by the UN since 1971.' },
          { term: 'Development Gap', definition: 'The difference in levels of development between HICs and LICs.' },
          { term: 'Core and Periphery Model', definition: 'The idea that some areas (core — usually cities or HICs) attract investment, migration and growth, while others (periphery — rural or less developed areas) lose people and investment.' },
          { term: 'Globalisation', definition: 'The process by which the world is becoming increasingly interconnected — people, cultures, money, goods and information transfer more freely between countries.' },
          { term: 'Interdependence', definition: 'Globalisation has increased the reliance of countries on one another for goods, services and money.' },
          { term: 'TNC (Transnational Corporation)', definition: 'A company that operates in more than one country. Usually very large with global supply chains.' },
          { term: 'Employment Structure', definition: 'How the workforce of a country is divided into different categories or sectors of employment.' },
          { term: 'Primary Sector', definition: 'Extraction of raw materials from the natural environment — mining, farming, fishing, forestry.' },
          { term: 'Secondary Sector', definition: 'Manufacturing — using raw materials from primary sector to produce finished goods.' },
          { term: 'Tertiary Sector', definition: 'Service industry — healthcare, education, retail, hospitality, financial services.' },
          { term: 'Quaternary Sector', definition: 'Research and development, information services, consultancy, IT — the knowledge economy.' },
        ],
        caseStudies: [
          {
            id: 'cs-apple-tnc',
            title: 'Apple Inc. – TNC Case Study | Globalisation and Development',
            flag: '🍎',
            color: 'slate',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'Apple is one of Silicon Valley\'s biggest companies — the world\'s first to hit a market cap of $1 trillion. It is a tech company most famous for the iPhone, iPad and AirPods. It sells products worldwide and its supply chains are global. Operates in all four economic sectors. 154,000 direct employees worldwide.',
                questions: [
                  { id: 'geo-apl-ov-1', type: 'mcq', question: 'What was a major financial milestone for Apple mentioned?', options: ['First company to hit $1 billion market cap', 'First company to hit $1 trillion market cap', 'First company to go public', 'Largest bank in the world'], correctAnswer: 1 },
                  { id: 'geo-apl-ov-2', type: 'mcq', question: 'How many direct employees does Apple have worldwide approximately?', options: ['50,000', '100,000', '154,000', '500,000'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Headquarters', 
                body: 'Silicon Valley, California, USA (R&D and design — quaternary sector).',
                questions: [
                  { id: 'geo-apl-hq-1', type: 'mcq', question: 'Which economic sector describes Apple\'s activities at its Silicon Valley headquarters?', options: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'], correctAnswer: 3 }
                ]
              },
              { 
                subtitle: 'Main Manufacturing (Secondary)', 
                body: 'Most of Apple\'s production takes place in Zhengzhou, Henan Province, China. Apple outsources manufacturing to Foxconn — a Taiwanese company with a huge factory in Zhengzhou. Around 200,000 people live in the Foxconn factory dorms — many have moved from rural areas. Henan was once one of China\'s poorest provinces but has benefited from overseas investment. During COVID, there were riots over working conditions at the plant.',
                questions: [
                  { id: 'geo-apl-mfg-1', type: 'mcq', question: 'Who is Apple\'s main manufacturing partner in China?', options: ['Samsung', 'Sony', 'Foxconn', 'Intel'], correctAnswer: 2 },
                  { id: 'geo-apl-mfg-2', type: 'mcq', question: 'How many people live in the Foxconn factory dorms in Zhengzhou?', options: ['10,000', '50,000', '100,000', '200,000'], correctAnswer: 3 }
                ]
              },
              { 
                subtitle: 'Apple\'s Impact on MEDCs — Ireland', 
                body: 'Apple has its European headquarters in Ireland. Employs over 5,000 people in Ireland. Pays very little corporation tax. In 2016, the European Commission argued Ireland\'s favourable tax treatment of Apple was illegal state aid and ordered Ireland to recover €13 billion. Ireland was worried being forced to tax Apple more would undermine its position as a tech hub. Ireland\'s position as a corporate tax haven has led to huge asset inflation and relatively poor public services.',
                questions: [
                  { id: 'geo-apl-ire-1', type: 'mcq', question: 'How much in taxes did the European Commission order Ireland to recover from Apple in 2016?', options: ['€1 billion', '€5 billion', '€13 billion', '€50 billion'], correctAnswer: 2 },
                  { id: 'geo-apl-ire-2', type: 'mcq', question: 'What has been a negative consequence for Ireland of being a corporate tax haven?', options: ['Massive unemployment', 'Asset inflation and relatively poor public services', 'Lack of technology', 'Population decline'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Apple in China — Foxconn and TSMC', 
                body: 'Foxconn is moving some manufacturing to India and Vietnam — wages are cheaper and political risk is lower than China. Apple also relies on TSMC (Taiwan Semiconductor Manufacturing Company) for its semiconductors — TSMC is the world\'s largest and most advanced semiconductor manufacturer. Apple is concerned about over-reliance on China for its supply chain following COVID disruptions.',
                questions: [
                  { id: 'geo-apl-chi-1', type: 'mcq', question: 'What does TSMC stand for?', options: ['Taiwanese Surface Manufacturing Company', 'Taiwan Semiconductor Manufacturing Company', 'Total System Management Corp', 'Third Sector Manufacturing Company'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Impact on LEDCs — DRC', 
                body: 'Smartphones require many raw materials including REEs (rare earth elements) and cobalt. In the DRC, cobalt comes from poorly regulated mines. They are often dangerous and involve child labour. The DRC has sued Apple over alleged illegal mineral exploitation (2024).',
                questions: [
                  { id: 'geo-apl-drc-1', type: 'mcq', question: 'Which mineral from the DRC is essential for smartphone production but often mined under dangerous conditions?', options: ['Iron', 'Gold', 'Cobalt', 'Copper'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Multiplier Effect in Henan, China', 
                body: 'Foxconn attracted additional businesses, workers and services to Zhengzhou. Economic growth spread beyond the factory — housing, food, transport, retail all grew. Positive impacts: jobs, income, infrastructure development. Negative impacts: worker exploitation concerns, poor working conditions, low wages relative to Apple\'s profits.',
                questions: [
                  { id: 'geo-apl-mult-1', type: 'mcq', question: 'What is a positive "multiplier effect" seen in Zhengzhou?', options: ['Closing down of local shops', 'Infrastructure development and growth of local services', 'Decrease in population', 'Reduction in technology use'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Advantages of TNCs for LEDCs', 
                body: 'Bring jobs and income to local workers. Develop infrastructure (roads, electricity, water). Technology transfer — local workers learn new skills. Tax revenues for government (though often minimised by TNCs).',
                questions: [
                  { id: 'geo-apl-adv-1', type: 'mcq', question: 'Which of these is an advantage of TNCs for developing countries?', options: ['Environmental damage', 'Technology transfer and worker skill development', 'Profit repatriation', 'Resource depletion'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Disadvantages of TNCs for LEDCs', 
                body: 'Profits repatriated to parent country, not reinvested locally. Low wages and poor working conditions. Environmental damage from manufacturing. Dependency — if TNC leaves, local economy collapses. Resource extraction benefits TNC more than local community.',
                questions: [
                  { id: 'geo-apl-dis-1', type: 'mcq', question: 'What does "profits repatriated" mean?', options: ['Profits shared with workers', 'Profits sent back to the TNC\'s home country', 'Profits invested in local schools', 'Profits given to the local government'], correctAnswer: 1 }
                ]
              },
            ]
          },
          {
            id: 'cs-italy-inequality',
            title: 'Italy – Regional Inequality Within a Country | Development Inequality',
            flag: '🇮🇹',
            color: 'green',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'Italy is an example of stark regional development inequality within a single MEDC country — the north is far more developed than the south.',
                questions: [
                  { id: 'geo-ita-ov-1', type: 'mcq', question: 'Which part of Italy is generally more economically developed?', options: ['The North', 'The South', 'The Islands', 'They are equally developed'], correctAnswer: 0 }
                ]
              },
              { 
                subtitle: 'Evidence — North vs South', 
                body: 'GDP per capita: North has far higher GDP per capita than the south. Industry: Manufacturing and high-value industries concentrated in the north (e.g. Milan — fashion and finance; Turin — car manufacturing). Life expectancy: Higher in the north than in the south. Unemployment: Much higher in the south (the Mezzogiorno). Infrastructure: Better road and rail networks in the north.',
                questions: [
                  { id: 'geo-ita-ev-1', type: 'mcq', question: 'What is the term for the less developed southern region of Italy?', options: ['Il Nord', 'Lazio', 'Mezzogiorno', 'Tuscany'], correctAnswer: 2 },
                  { id: 'geo-ita-ev-2', type: 'mcq', question: 'Which industry is Turin famous for?', options: ['Fashion', 'Car manufacturing (FIAT)', 'Agriculture', 'Tourism'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Causes of North-South Divide', 
                body: 'Historical: The south (Mezzogiorno) was historically agricultural and less industrialised. Economic: Industry and investment concentrated in the north — the core. Physical: Southern climate is hotter and drier, making farming harder. Migration: Young, skilled people migrate from south to north (internal brain drain), leaving the south with an older, less skilled population. Core-Periphery: The north acts as the core — attracting investment, migration and growth. The south is the periphery.',
                questions: [
                  { id: 'geo-ita-cau-1', type: 'mcq', question: 'How does the Core-Periphery model apply to Italy?', options: ['South is the core, North is periphery', 'North is the core, South is periphery', 'Both are core areas', 'Both are periphery areas'], correctAnswer: 1 },
                  { id: 'geo-ita-cau-2', type: 'mcq', question: 'What is "internal brain drain" in this context?', options: ['Migration to other countries', 'Young, skilled people moving from the south to the north', 'A decrease in education funding', 'Loss of memory due to heat'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Implications', 
                body: 'Explains why development is uneven within countries, not just between countries. The core-periphery model can be applied at local, national and global scales.',
                questions: [
                  { id: 'geo-ita-imp-1', type: 'mcq', question: 'True or False: Development inequality only exists between DIFFERENT countries.', options: ['True', 'False'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-3.2',
        number: '3.2',
        title: 'Food Production',
        keywords: [
          { term: 'Agriculture', definition: 'The practice of farming, including cultivation of the soil for the growing of crops and the rearing of animals to provide food, wool, and other products.' },
          { term: 'Arable Farming', definition: 'Farming that involves growing crops (e.g. wheat, rice).' },
          { term: 'Pastoral Farming', definition: 'Farming that involves rearing animals (e.g. cattle, sheep).' },
          { term: 'Mixed Farming', definition: 'Farming that involves both growing crops and rearing animals.' },
          { term: 'Subsistence Farming', definition: 'Farming where the produce is consumed by the farmer and their family, with little or no surplus for sale.' },
          { term: 'Commercial Farming', definition: 'Farming for profit, where the produce is sold to markets.' },
          { term: 'Intensive Farming', definition: 'Farming with high inputs (labour, capital, fertilisers) relative to the land area used.' },
          { term: 'Extensive Farming', definition: 'Farming with low inputs relative to the large land area used.' },
          { term: 'Irrigation', definition: 'The artificial application of water to land to assist in the production of crops.' },
          { term: 'Green Revolution', definition: 'A set of research and technology transfer initiatives occurred between 1950 and the late 1960s that increased agricultural production worldwide.' },
        ],
        caseStudies: [
          {
            id: 'cs-ganges-rice',
            title: 'Rice Farming in the Lower Ganges Valley | LEDC Intensive Subsistence',
            flag: '🇮🇳',
            color: 'emerald',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'Intensive subsistence rice farming is practiced in the fertile Lower Ganges Valley of India and Bangladesh. It supports millions of people in a very densely populated area.',
                questions: [
                  { id: 'geo-ric-1', type: 'mcq', question: 'What type of farming is common in the Lower Ganges Valley?', options: ['Extensive pastoral', 'Intensive subsistence rice farming', 'Commercial wheat farming', 'Ranching'], correctAnswer: 1 },
                  { id: 'geo-ric-1-ext', type: 'mcq', question: 'Why is rice farming in this region described as "intensive"?', options: ['It uses very little water', 'It has high inputs of labour/resources relative to land area', 'It is only done once every ten years', 'It requires no human effort'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Physical Factors', 
                body: 'Climate: Hot and wet (Monsoon) with temperatures ~20–30°C and 2,000mm+ rainfall. Soil: Fertile alluvial soil deposited by the Ganges and Brahmaputra rivers. Relief: Flat floodplains allowing for easy irrigation and flooding of fields (paddies).',
                questions: [
                  { id: 'geo-ric-2', type: 'mcq', question: 'What type of soil is found in the Ganges valley, ideal for farming?', options: ['Sandy soil', 'Lava soil', 'Alluvial soil', 'Peat'], correctAnswer: 2 },
                  { id: 'geo-ric-3', type: 'mcq', question: 'Which weather system provides the heavy rain needed for rice?', options: ['Cyclones', 'Monsoon', 'Anticyclones', 'Tornadoes'], correctAnswer: 1 },
                  { id: 'geo-ric-3-ext', type: 'mcq', question: 'How does the flat relief of the Ganges floodplains benefit rice farmers?', options: ['It makes it easier to use planes for seeds', 'It allows for easy irrigation and flooding of paddies', 'It prevents all rain from falling', 'It makes the soil sandy'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Human Factors', 
                body: 'Labour: High inputs of manual labour for planting and harvesting. Technology: Traditional methods with some modern inputs like high-yielding varieties (HYV) and fertilisers. Small farm sizes due to inheritance laws.',
                questions: [
                  { id: 'geo-ric-4', type: 'mcq', question: 'What does "HYV" stand for in agriculture?', options: ['High-Yielding Varieties', 'High-Yearly Volume', 'Heavy Young Vegetables', 'Hot Yellow Vines'], correctAnswer: 0 },
                  { id: 'geo-ric-4-ext', type: 'mcq', question: 'What is a major human factor leading to small farm sizes in the Ganges Valley?', options: ['Large machines being too big', 'Government bans on large farms', 'Inheritance laws', 'Lack of interest in farming'], correctAnswer: 2 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-3.3',
        number: '3.3',
        title: 'Industry',
        keywords: [
          { term: 'Industrial System', definition: 'Industry viewed as a system with inputs, processes and outputs (including waste).' },
          { term: 'Inputs', definition: 'Elements required for industrial processes — raw materials, labour, energy, capital, land.' },
          { term: 'Processes', definition: 'The industrial activities that take place to make a finished product.' },
          { term: 'Outputs', definition: 'Finished products sold to customers, plus any by-products or waste.' },
          { term: 'Manufacturing Industry', definition: 'The general term for the secondary sector — making goods from raw materials.' },
          { term: 'Heavy Industry', definition: 'Uses large amounts of bulky raw materials, processes them and produces heavy outputs. E.g. iron and steel, shipbuilding.' },
          { term: 'Light Industry', definition: 'Assembly of smaller components into finished goods. E.g. electronics, food processing.' },
          { term: 'High-Technology Industry', definition: 'The fastest-growing manufacturing sector — uses or makes silicon chips, computers, software, robots, aerospace components. Clusters together in science parks.' },
          { term: 'Science Park', definition: 'A cluster of high-tech companies, often near a university, collaborating on R&D. E.g. Cambridge Science Park.' },
          { term: 'Industrial Location Factors', definition: 'The physical and human factors that influence where a factory or industrial zone is located.' },
          { term: 'Physical Location Factors', definition: 'Site (size, relief), natural routes (rivers, coasts), proximity to raw materials.' },
          { term: 'Human Location Factors', definition: 'Access to market, proximity to skilled labour, transport links, government policies, capital investment.' },
        ],
        caseStudies: [
          {
            id: 'cs-seat-factory',
            title: 'SEAT Car Assembly Plant, Martorell, Barcelona | Factory Location Case Study',
            flag: '🚗',
            color: 'red',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'The SEAT Martorell plant is a major car assembly factory near Barcelona, Spain. It is a case study of an industrial zone and the factors that influenced its location.',
                questions: [
                  { id: 'geo-seat-ov-1', type: 'mcq', question: 'Which car brand is the Martorell factory associated with?', options: ['Renault', 'SEAT', 'Ford', 'BMW'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Why Located at Martorell', 
                body: 'Land — Martorell offered ample space; the factory now covers over 2.8 million m². Located ~40km from Barcelona — benefits from the city\'s infrastructure and resources. Raw Materials — efficient integration with suppliers; a steady supply of raw materials. Proximity to the Port of Barcelona — facilitates import of raw materials and export of finished vehicles. Energy — equivalent to a city of 100,000 people in electricity consumption.',
                questions: [
                  { id: 'geo-seat-loc-1', type: 'mcq', question: 'How far is the Martorell plant from Barcelona?', options: ['5km', '40km', '150km', '400km'], correctAnswer: 1 },
                  { id: 'geo-seat-loc-2', type: 'mcq', question: 'Which nearby facility is crucial for importing materials and exporting vehicles?', options: ['Barcelona Airport', 'Port of Barcelona', 'Central Station', 'Stadium'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Inputs', 
                body: 'Raw Materials — steel, aluminium, plastics, electronics, interior components. Components — engines, transmissions, electronics, pre-manufactured parts. Labour — skilled workforce of ~12,000 employees. Land — 2.8 million m² of flat land. Technology — advanced machinery, 2,000+ robots. Energy — electricity and other power sources.',
                questions: [
                  { id: 'geo-seat-inp-1', type: 'mcq', question: 'How many employees work at the Martorell plant?', options: ['1,000', '5,000', '12,000', '50,000'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Processes', 
                body: 'Assembly of over 400,000 cars per year. Press operations: presses perform over 6.4 million strokes annually. Robotic welding: over 2,000 robots conducting ~1.3 billion spot welds per year. Painting, quality control, water-tightness testing.',
                questions: [
                  { id: 'geo-seat-pro-1', type: 'mcq', question: 'Approximately how many cars are assembled per year at the plant?', options: ['10,000', '100,000', '400,000', '1,000,000'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Environmental Impacts and Management — Air Quality', 
                body: 'Risk: vehicle testing, factory operations, transport movement produce air pollution. Management: 4,000 m² of photocatalytic pavement neutralises pollutants. SEAT al Sol Project: 53,000 solar panels — one of the largest solar plants in the European automotive industry. LED lighting — 80% reduction in energy consumption for lighting. Energy Recovery Systems — recover energy from hot air emitted by industrial processes. Autometro: two 40km train lines link the plant to port infrastructure and Barcelona.',
                questions: [
                  { id: 'geo-seat-air-1', type: 'mcq', question: 'What is the "SEAT al Sol" project?', options: ['A car racing team', 'A solar energy plant with 53,000 panels', 'A mountain park', 'A beach cleaning project'], correctAnswer: 1 },
                  { id: 'geo-seat-air-2', type: 'mcq', question: 'What connects the plant to port infrastructure to reduce road transport emissions?', options: ['Dedicated highway', 'Two 40km train lines (Autometro)', 'Bicycle path', 'Underground tunnel'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Environmental Impacts and Management — Water Quality', 
                body: 'Risk: water used in paint workshops, vehicle testing and cleaning could contaminate local water sources. Management: Closed-circuit water system in paint workshops — water is recycled rather than discharged. Rain test water recycling — water used in waterproofing tests is collected and reused. Water consumption per car fell 31% from 3.54 m³ (2010) to 2.46 m³ (2018).',
                questions: [
                  { id: 'geo-seat-wat-1', type: 'mcq', question: 'How much did water consumption per car fall between 2010 and 2018?', options: ['10%', '31%', '50%', '75%'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Environmental Impacts and Management — Land/Visual', 
                body: 'Risk: 2.8 million m² of farmland replaced with factory — deforestation, habitat destruction, destroyed food chains. Management: SEAT contributed to creating a botanical garden in Martorell\'s Can Casas park — planted 80 native trees.',
                questions: [
                  { id: 'geo-seat-lan-1', type: 'mcq', question: 'What was the Martorell site before the factory was built?', options: ['A desert', 'Farmland', 'A city center', 'A mountain'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Environmental Impacts and Management — Noise', 
                body: 'Risk: presses, robotic welding, vehicle testing, and transport generate high noise levels affecting nearby communities. Management: Ongoing research into noise reduction — no complete solution listed.',
                questions: [
                  { id: 'geo-seat-noi-1', type: 'mcq', question: 'Which industrial activity contributes to high noise levels at the factory?', options: ['Office work', 'Presses and robotic welding', 'Gardening', 'Solar power generation'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Social/Community', 
                body: 'The Healthcare and Rehabilitation Centre at Martorell is a pioneering facility for employee health and well-being. During COVID (early 2020), SEAT adapted its production line to manufacture ventilators.',
                questions: [
                  { id: 'geo-seat-soc-1', type: 'mcq', question: 'How did SEAT help during the early COVID pandemic?', options: ['Made more luxury cars', 'Manufactured ventilators', 'Built more solar panels', 'Opened a new park'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-3.4',
        number: '3.4',
        title: 'Tourism',
        keywords: [
          { term: 'Tourism', definition: 'Travel to destinations outside one\'s usual environment for leisure, business or other purposes.' },
          { term: 'Types of Tourism', definition: 'City breaks, sports-based (e.g. skiing), cruises, backpacking, eco-tourism, medical tourism, family holidays.' },
          { term: 'Eco-tourism (Sustainable Tourism)', definition: 'Travel that meets the needs of present tourists and host communities while protecting and enhancing opportunities for the future — minimal impact on local people and the environment.' },
          { term: 'Physical Attractions', definition: 'Natural features that attract tourists — beaches, mountains, rivers, wildlife, natural beauty, outdoor activities.' },
          { term: 'Human Attractions', definition: 'Man-made attractions — entertainment, restaurants, nightlife, festivals, museums, cultural heritage, castles, theme parks.' },
          { term: 'Factors Affecting Tourism Numbers', definition: 'Transport improvements, technology (online booking), political stability, economic prosperity, marketing, climate.' },
          { term: 'Multiplier Effect', definition: 'Tourist spending stimulates the wider economy — money spent in hotels circulates through local businesses, creating jobs and income.' },
          { term: 'Leakage', definition: 'When tourist income flows out of a destination country — e.g. money spent on foreign-owned hotel chains leaves the local economy.' },
          { term: 'Seasonal Variation', definition: 'Tourism numbers vary throughout the year — peak season (summer for beach resorts, winter for ski resorts) and off-season.' },
          { term: 'Over-tourism', definition: 'When the number of tourists exceeds what a destination can sustainably handle, causing damage to the environment and reducing quality of life for locals.' },
        ],
        caseStudies: [
          {
            id: 'cs-tourism-impacts',
            title: 'Impacts of Tourism — Positive and Negative | Global',
            flag: '🌍',
            color: 'blue',
            sections: [
              { 
                subtitle: 'Positive Impacts — Economic', 
                body: 'Tourists spend lots of money, bringing extra cash into poor countries. Creates jobs in hotels, restaurants, transport, entertainment and retail. Foreign exchange earnings help LEDCs develop their infrastructure and service industries. Tax revenues for government.',
                questions: [
                  { id: 'geo-tour-po-eco-1', type: 'mcq', question: 'What is a major economic benefit of tourism for LEDCs?', options: ['Spending by tourists brings foreign exchange and creates jobs', 'It causes prices to drop', 'It reduces tax revenue', 'It eliminates the need for infrastructure'], correctAnswer: 0 }
                ]
              },
              { 
                subtitle: 'Positive Impacts — Social', 
                body: 'Investment in infrastructure (roads, airports, water) benefits local people. Preservation of cultural heritage and traditional crafts. Community development through employment.',
                questions: [
                  { id: 'geo-tour-po-soc-1', type: 'mcq', question: 'How can tourism investment improve the lives of local residents?', options: ['By destroying cultural sites', 'Improvements in infrastructure like roads and water systems', 'By making airports private only', 'Reducing community employment'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Negative Impacts — Economic', 
                body: 'Leakage — profits from foreign-owned hotels and airlines leave the destination country. Seasonal unemployment — few tourists in off-season. Dependence on tourism makes economies vulnerable to external shocks (e.g. COVID).',
                questions: [
                  { id: 'geo-tour-ne-eco-1', type: 'mcq', question: 'What does "leakage" refer to in tourism economics?', options: ['Water pipe leaks in hotels', 'Profits leaving the destination country to foreign-owned companies', 'Loss of tourists during rainy season', 'Illegal currency exchange'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Negative Impacts — Social', 
                body: 'Increase in crime — thieves targeting tourists with expensive goods. Cultural erosion — local traditions undermined by tourist culture. Anti-tourism sentiment — graffiti appeared in Barcelona, Majorca and Venice in 2017 protesting over-tourism. Rising property prices push local people out of popular destinations.',
                questions: [
                  { id: 'geo-tour-ne-soc-1', type: 'mcq', question: 'Which cities saw anti-tourism protests in 2017?', options: ['London and Paris', 'Barcelona, Majorca and Venice', 'New York and Tokyo', 'Cairo and Dubai'], correctAnswer: 1 },
                  { id: 'geo-tour-ne-soc-2', type: 'mcq', question: 'What is a social consequence of rising property prices caused by tourism?', options: ['Locals are pushed out of popular areas', 'More schools are built', 'Property taxes vanish', 'Everyone becomes a homeowner'], correctAnswer: 0 }
                ]
              },
              { 
                subtitle: 'Negative Impacts — Environmental', 
                body: 'Tourists drop litter, making beautiful places messy. Hotel construction causes noise, visual pollution and habitat destruction. Water overuse and pollution. Damage to coral reefs, forests and wildlife habitats.',
                questions: [
                  { id: 'geo-tour-ne-env-1', type: 'mcq', question: 'Which of these is a negative environmental impact of mass tourism?', options: ['Improved air quality', 'Habitat destruction and water overuse', 'Growth of native forests', 'Decrease in litter'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Over-tourism Examples', 
                body: 'Barcelona — graffiti vandalism in 2017 protesting tourist saturation; locals driven out by rising rents. Majorca — similar protests against mass tourism impact on local culture and environment. Venice — sinking city flooded with tourists; locals leaving due to high prices.',
                questions: [
                  { id: 'geo-tour-over-1', type: 'mcq', question: 'Why are locals leaving Venice?', options: ['Too many job opportunities', 'High prices and flood of tourists', 'Lack of water', 'The city is too quiet'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Sustainable Tourism Solutions', 
                body: 'Eco-friendly accommodations using renewable energy, reducing water waste and minimising plastic. Sustainable transport — biking, walking, public transport, electric vehicles. Wildlife and nature conservation — protecting habitats, avoiding fragile ecosystems. Waste reduction — recycling, banning single-use plastics. Respecting local cultures — learning about traditions and customs. Supporting local businesses — locally owned restaurants, shops and accommodations.',
                questions: [
                  { id: 'geo-tour-sus-1', type: 'mcq', question: 'Which is a strategy for sustainable tourism?', options: ['Building more large-scale resorts', 'Supporting locally owned businesses and shops', 'Encouraging private jet travel', 'Removing all recycling bins'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-3.5',
        number: '3.5',
        title: 'Energy',
        keywords: [
          { term: 'Renewable Energy', definition: 'Energy from natural sources that can be replenished over time and do not run out — e.g. solar, wind, HEP, tidal, geothermal.' },
          { term: 'Non-renewable Energy', definition: 'Energy from finite resources that will eventually run out — fossil fuels (coal, oil, natural gas) and nuclear fuel (uranium).' },
          { term: 'Fossil Fuels', definition: 'Coal, oil and natural gas — formed from organic matter over millions of years. Release CO₂ when burned.' },
          { term: 'Nuclear Power', definition: 'Energy produced by splitting uranium atoms (fission). Low carbon but produces radioactive waste.' },
          { term: 'Energy Mix', definition: 'The combination of different energy sources used by a country to meet its energy demands.' },
          { term: 'Geothermal Energy', definition: 'Heat energy from within the Earth. Used where there is tectonic activity (e.g. Iceland). Can heat buildings and generate electricity.' },
          { term: 'Wind Energy', definition: 'Kinage energy from moving air converted into electricity by wind turbines.' },
          { term: 'Solar Energy', definition: 'Energy from sunlight converted into electricity by photovoltaic (PV) panels or concentrated solar power.' },
          { term: 'HEP (Hydroelectric Power)', definition: 'Electricity generated from the kinetic energy of moving water, typically from dams and reservoirs.' },
          { term: 'Biomass', definition: 'Organic materials (wood, agricultural waste, dedicated energy crops) burned to produce energy.' },
          { term: 'Tidal Energy', definition: 'Electricity generated from the rise and fall of ocean tides — very predictable but expensive.' },
          { term: 'Enhanced Greenhouse Effect', definition: 'The warming of the Earth beyond normal greenhouse conditions due to additional greenhouse gases (CO₂, methane, water vapour) released by human activities such as burning fossil fuels.' },
          { term: 'Energy Security', definition: 'A country\'s ability to ensure reliable, affordable access to sufficient energy to meet its needs without excessive dependence on imports.' },
          { term: 'Energy Consumption per capita', definition: 'The amount of energy used per person. Much higher in MEDCs than LEDCs.' },
        ],
        caseStudies: [
          {
            id: 'cs-iceland-energy',
            title: 'Iceland – Geothermal Energy | Energy Supply Case Study',
            flag: '🇮🇸',
            color: 'blue',
            sections: [
              { 
                subtitle: 'Location', 
                body: 'Iceland is located in the North Atlantic, straddling the Mid-Atlantic Ridge — a divergent plate boundary. North American and Eurasian plates are moving apart. Iceland also sits above a hotspot — a mantle plume of extra-hot material. This makes Iceland one of the most volcanically and geothermally active places on Earth.',
                questions: [
                  { id: 'geo-ice-loc-1', type: 'mcq', question: 'Which plate boundary does Iceland straddle?', options: ['Convergent', 'Divergent (Mid-Atlantic Ridge)', 'Transform', 'Conservative'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Geothermal Energy in Iceland', 
                body: 'Geothermal energy is heat from within the Earth, accessed where magma is close to the surface. Iceland uses geothermal energy to heat homes and businesses — Reykjavik\'s entire district heating system runs on geothermal. Geothermal energy is used to light and heat greenhouses for farming, allowing crops to be grown year-round despite Iceland\'s cold climate. Icelandic fish farms use geothermal water — the industry has grown significantly since the 1980s.',
                questions: [
                  { id: 'geo-ice-geo-1', type: 'mcq', question: 'What is a common use for geothermal energy in Reykjavik?', options: ['Powering air conditioning', 'Heating homes via a district heating system', 'Cooling server farms only', 'Generating wind power'], correctAnswer: 1 },
                  { id: 'geo-ice-geo-2', type: 'mcq', question: 'How do Icelandic farmers use geothermal energy?', options: ['To create artificial wind', 'To light and heat greenhouses for year-round crops', 'To freeze soil', 'To produce coal'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Advantages of Geothermal Energy', 
                body: 'Cheap — if Reykjavik was heated by oil instead of geothermal, costs would be much higher. In the USA, $8.2 billion was saved between 1970 and 2000 by switching to geothermal heating. Reliable — geothermal power stations last ~30 years; they are long-term projects. Self-sufficient — Iceland less reliant on importing energy from other countries. Clean — lower CO₂ output; soluble pollutants can be pumped back underground.',
                questions: [
                  { id: 'geo-ice-adv-1', type: 'mcq', question: 'Approximately how long do geothermal power stations typically last?', options: ['5 years', '10 years', '30 years', '100 years'], correctAnswer: 2 },
                  { id: 'geo-ice-adv-2', type: 'mcq', question: 'What is an environmental advantage of geothermal energy mentioned?', options: ['Higher CO2 output than coal', 'Lower CO2 output and ability to pump pollutants back underground', 'Produces radioactive waste', 'Uses no water'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Other Benefits for Iceland', 
                body: 'This small country (317,900 people) attracts 1.7 million tourists per year — geothermal features like geysers and hot pools are major attractions (7% of GDP). Microsoft and Google have explored Iceland as a R&D location — enormous power availability and cool climate for servers. Iceland\'s 100% renewable electricity makes it attractive for energy-intensive industries.',
                questions: [
                  { id: 'geo-ice-ben-1', type: 'mcq', question: 'How much does tourism contribute to Iceland\'s GDP?', options: ['1%', '7%', '25%', '50%'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Importance of Energy Mix', 
                body: 'Iceland generates ~100% of its electricity from renewables — ~70% HEP, ~30% geothermal. This makes Iceland a global leader in renewable energy and energy security.',
                questions: [
                  { id: 'geo-ice-mix-1', type: 'mcq', question: 'What is the approximate split of Iceland\'s electricity generation?', options: ['50% wind, 50% solar', '70% HEP, 30% geothermal', '90% coal, 10% gas', 'All nuclear'], correctAnswer: 1 }
                ]
              },
            ]
          },
          {
            id: 'cs-uk-energy',
            title: 'UK – Energy Supply and Transition | Energy Case Study',
            flag: '🇬🇧',
            color: 'blue',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'The UK has historically relied on fossil fuels (coal, oil, gas) but has been rapidly transitioning to renewables. Renewables now provide 40% of the UK\'s energy requirements.',
                questions: [
                  { id: 'geo-uk-ov-1', type: 'mcq', question: 'Approximately what percentage of the UK\'s energy was provided by renewables according to the text?', options: ['10%', '25%', '40%', '80%'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'UK Energy Mix', 
                body: 'Coal: use has dramatically declined — from the dominant fuel of the Industrial Revolution to near-zero. Natural Gas: still the largest source of electricity generation, but declining. Oil: major use for transport. Nuclear: contributes a significant share of electricity generation. Renewables: wind (offshore and onshore), solar, biomass have grown rapidly.',
                questions: [
                  { id: 'geo-uk-mix-1', type: 'mcq', question: 'Which fossil fuel was the dominant fuel during the Industrial Revolution but has since declined to near-zero in the UK?', options: ['Gas', 'Oil', 'Coal', 'Uranium'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Hornsea 1 Offshore Wind Farm — World\'s Largest', 
                body: 'Began construction 2018 in the North Sea off Yorkshire. 174 wind turbines, each 190m high (same as the BT Tower in London). Each blade is 75m long — blade diameter of 154m exceeds the London Eye (120m). Each blade made from balsawood, resin and fibreglass — 522 blades total. Generates enough electricity to power over 1 million UK homes. Created 1,000 jobs in East Yorkshire — an area with historically high unemployment.',
                questions: [
                  { id: 'geo-uk-hor-1', type: 'mcq', question: 'How many homes can Hornsea 1 power?', options: ['100,000', '500,000', 'Over 1 million', '10 million'], correctAnswer: 2 },
                  { id: 'geo-uk-hor-2', type: 'mcq', question: 'Where is Hornsea 1 located?', options: ['The English Channel', 'The North Sea off Yorkshire', 'The Atlantic Ocean', 'The Irish Sea'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Problems with Hornsea 1', 
                body: 'The world\'s largest ever seabed investigation was carried out in 2015. Cables laid under miles of farmland to deliver electricity to markets. Wind turbines require wind speeds of just over 30mph (48km/h) — they turn off in storms (too fast) or calm days (too slow). Kittiwakes (seabirds) are struggling — turning blades can kill them; Ørsted has proposed nesting towers and painting one blade black to help birds avoid them.',
                questions: [
                  { id: 'geo-uk-prob-1', type: 'mcq', question: 'Why might wind turbines be turned off?', options: ['They get too hot', 'In storms when wind is too fast or on calm days when too slow', 'To let birds fly past every hour', 'During the night'], correctAnswer: 1 },
                  { id: 'geo-uk-prob-2', type: 'mcq', question: 'Which bird species is specifically mentioned as being at risk from the turbines?', options: ['Pigeons', 'Kittiwakes', 'Golden Eagles', 'Swans'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'UK\'s Path to Net Zero', 
                body: 'Key projects include Hornsea wind farm, new nuclear power stations (e.g. Hinkley Point C) and investment in solar energy. Government commitments to decarbonise electricity grid and phase out new petrol/diesel cars.',
                questions: [
                  { id: 'geo-uk-net-1', type: 'mcq', question: 'Which nuclear power station is mentioned as part of the UK\'s path to Net Zero?', options: ['Chernobyl', 'Hinkley Point C', 'Fukushima', 'Three Mile Island'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-3.6',
        number: '3.6',
        title: 'Water',
        keywords: [
          { term: 'Water Deficit', definition: 'Where water demand is greater than supply.' },
          { term: 'Water Surplus', definition: 'Where water supply is greater than demand.' },
          { term: 'Water Insecurity', definition: 'When water availability is not enough to ensure the population enjoys good health, livelihood and earnings.' },
          { term: 'Water Scarcity', definition: 'A lack of sufficient water to meet the needs of people in an area.' },
          { term: 'Freshwater', definition: 'Water that is not salty — only 2.5% of Earth\'s water is freshwater. Of this, the majority is frozen (69%) or underground (30%) — only 0.01% of Earth\'s water is easily accessible!' },
          { term: 'Groundwater', definition: 'Water stored underground in aquifers, accessed by boreholes and wells.' },
          { term: 'Aquifer', definition: 'An underground layer of permeable rock that stores groundwater. E.g. the Ogallala Aquifer (USA — 7 states).' },
          { term: 'Surface Water', definition: 'Water in rivers, lakes and reservoirs — must be treated before use.' },
          { term: 'Desalination', definition: 'The process of removing salt from seawater to make it suitable for drinking. Very expensive but increasingly important. Largest plant: Saudi Arabia (1,036,000 m³/day).' },
          { term: 'Rainwater Harvesting', definition: 'Collecting and storing rainwater from roofs and surfaces for later use.' },
          { term: 'Irrigation', definition: 'Supplying water to agricultural land artificially to grow crops. 70% of global water use is for agriculture.' },
          { term: 'Salinisation', definition: 'When irrigated soil in hot climates accumulates salt due to high evaporation rates — making soil infertile.' },
          { term: 'Water Transfer', definition: 'Moving water from areas of surplus to areas of deficit through pipes, canals or aqueducts.' },
          { term: 'Potable Water', definition: 'Water that is safe to drink — treated to remove contaminants and bacteria.' },
          { term: 'Water Demand Drivers', definition: 'Population growth, industrialisation, urbanisation, climate change impacts, energy demand (cooling), agriculture intensification.' },
          { term: 'Virtual Water', definition: 'The water embedded in the production of food and goods — e.g. 1kg of beef production requires 15,000 litres of water.' },
        ],
        caseStudies: [
          {
            id: 'cs-singapore-water',
            title: 'Singapore – Water Supply Management | MEDC Water Management',
            flag: '🇸🇬',
            color: 'red',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'Singapore\'s water demand is approximately 430 million gallons per day. 55% is for non-domestic use; 45% for household use. Singapore faces water stress due to its small size (no large rivers or lakes), dense population, and dependence on rainfall and Malaysia for water supply.',
                questions: [
                  { id: 'geo-sin-ov-1', type: 'mcq', question: 'What is the approximate daily water demand in Singapore?', options: ['100 million gallons', '250 million gallons', '430 million gallons', '1 billion gallons'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Why Singapore Experiences Water Stress', 
                body: 'Very small land area — limited space to collect and store water. Dense population — high demand relative to available resources. Historical dependence on importing water from Malaysia (under a 1962 Water Agreement expiring 2061). Climate change creating more variable rainfall. Rapid economic development increasing industrial water demand.',
                questions: [
                  { id: 'geo-sin-stress-1', type: 'mcq', question: 'When does the current water import agreement with Malaysia expire?', options: ['2025', '2030', '2050', '2061'], correctAnswer: 3 }
                ]
              },
              { 
                subtitle: 'The Four National Taps', 
                body: '(1) Water from local catchment areas — rainwater collected from 2/3 of Singapore\'s land area (reservoirs and drains). (2) Imported water from Johor, Malaysia — via pipeline; Singapore is working to reduce dependence on this. (3) NEWater — highly purified reclaimed water using advanced membrane technology (microfiltration, reverse osmosis, UV disinfection). Currently supplies 40%+ of demand. (4) Desalinated water — seawater treated by reverse osmosis to produce fresh water. Two desalination plants operational.',
                questions: [
                  { id: 'geo-sin-taps-1', type: 'mcq', question: 'How much of Singapore\'s land area is used as catchment for rainwater?', options: ['1/3', '1/2', '2/3', 'A small park'], correctAnswer: 2 },
                  { id: 'geo-sin-taps-2', type: 'mcq', question: 'What technologies are used to produce NEWater?', options: ['Boiling only', 'Microfiltration, reverse osmosis, and UV disinfection', 'Adding salt', 'Filtering through sand only'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Sustainability of Singapore\'s Water Management', 
                body: 'NEWater is considered very sustainable — recycling wastewater that would otherwise be discharged. Desalination is energy-intensive but provides water security independent of rainfall. Singapore has reduced per capita household water consumption through public education campaigns, tiered pricing (higher users pay more) and water-efficient appliance standards. Singapore aims to meet 85% of water needs from NEWater and desalination by 2061 when the Malaysian import agreement expires.',
                questions: [
                  { id: 'geo-sin-sus-1', type: 'mcq', question: 'What is a drawback of desalination mentioned?', options: ['Depends on rain', 'Highly energy-intensive', 'Produces too much steam', 'Pollutes the air'], correctAnswer: 1 },
                  { id: 'geo-sin-sus-2', type: 'mcq', question: 'How does Singapore encourage household water conservation?', options: ['Banning water use', 'Free water for everyone', 'Tiered pricing and public education', 'Closing reservoirs at night'], correctAnswer: 2 }
                ]
              },
            ]
          },
          {
            id: 'cs-global-water',
            title: 'Global Water Supply Methods and Issues | Water Management',
            flag: '🌍',
            color: 'blue',
            sections: [
              { 
                subtitle: 'Surface Water Collection', 
                body: 'Pumping water from lakes, rivers and reservoirs — requires treatment. Luxembourg gets 50% of its water from the Upper Sauer River.',
                questions: [
                  { id: 'geo-glob-surf-1', type: 'mcq', question: 'Which country gets 50% of its water from the Upper Sauer River?', options: ['France', 'Luxembourg', 'Belgium', 'Germany'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Groundwater', 
                body: 'Water pumped from aquifers deep in the ground by boreholes and wells. The Ogallala Aquifer (USA) supplies 7 states. Risk: over-extraction is depleting aquifers faster than they recharge.',
                questions: [
                  { id: 'geo-glob-ground-1', type: 'mcq', question: 'What is a major risk associated with using groundwater?', options: ['The water is too salty', 'Over-extraction depleting aquifers faster than they recharge', 'The water is always too hot', 'It causes frequent earthquakes'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Rainwater Harvesting', 
                body: 'Collecting rainwater from roofs of buildings. Common in areas without piped supply.',
                questions: [
                  { id: 'geo-glob-rain-1', type: 'mcq', question: 'Where is rainwater harvesting typically collected from?', options: ['The ground', 'Roofs of buildings', 'Deep wells', 'From trees'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Desalination', 
                body: 'Removing salt from seawater using reverse osmosis membranes. The largest plant is in Saudi Arabia (1,036,000 m³/day). Very expensive — high energy costs. First subsea desalination facility planned for 2026.',
                questions: [
                  { id: 'geo-glob-des-1', type: 'mcq', question: 'Which country has the largest desalination plant according to the text?', options: ['USA', 'Australia', 'Saudi Arabia', 'Israel'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Water Transfer', 
                body: 'Moving water from areas of surplus to areas of deficit by pipes, canals or aqueducts. Political challenges when water crosses national borders.',
                questions: [
                  { id: 'geo-glob-trans-1', type: 'mcq', question: 'What is a challenge of water transfer projects?', options: ['They are too easy to build', 'Political challenges when crossing national borders', 'They only work for short distances', 'Water becomes saltier'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Problems of Poor Water Supply', 
                body: 'Approximately 783 million people in the world don\'t have access to potable (drinkable) water — sub-Saharan Africa accounts for the majority. Disease — contaminated water causes cholera, typhoid and dysentery. Stunted development — children who drink unsafe water experience worse health and educational outcomes. Salinisation — over-irrigation in hot, dry areas destroys agricultural land. Desertification — land degradation reduces water infiltration and increases drought risk.',
                questions: [
                  { id: 'geo-glob-prob-1', type: 'mcq', question: 'Approximately how many people worldwide lack access to potable water?', options: ['100 million', '350 million', '783 million', '2 billion'], correctAnswer: 2 },
                  { id: 'geo-glob-prob-2', type: 'mcq', question: 'Which region accounts for the majority of people without safe water?', options: ['North America', 'Sub-Saharan Africa', 'Europe', 'East Asia'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Why Water Demand is Rising', 
                body: 'Population growth. Industrialisation — factories require enormous amounts of water for cooling, processing, cleaning. Urbanisation — cities have high per-capita water use. Climate change — higher temperatures increase evaporation and reduce rainfall in some areas. Energy demand — AI data centres and power station cooling require large amounts of water. Agriculture intensification — more irrigation of more crops to feed growing population.',
                questions: [
                  { id: 'geo-glob-dem-1', type: 'mcq', question: 'Which sector uses the most water due to intensification to feed the population?', options: ['Industry', 'Domestic', 'Agriculture', 'Tourism'], correctAnswer: 2 }
                ]
              },
              { 
                subtitle: 'Solutions to the Water Crisis', 
                body: 'Build dams to store water and regulate supply. Rainwater harvesting from rooftops and surfaces. Desalination — expensive but increasingly viable. Water transfer from surplus to deficit regions. Conservation — reducing water use per person and per product. Improved irrigation technology (drip irrigation reduces waste). Water recycling — treating wastewater for reuse (as in Singapore\'s NEWater). Education campaigns and tiered pricing to reduce demand.',
                questions: [
                  { id: 'geo-glob-sol-1', type: 'mcq', question: 'Which irrigation technology helps reduce water waste?', options: ['Flood irrigation', 'Drip irrigation', 'Sprinkler systems', 'Bucket irrigation'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
      {
        id: 'unit-3.7',
        number: '3.7',
        title: 'Environmental Risks',
        keywords: [
          { term: 'Environmental Risk', definition: 'Potential for a negative impact on the environment or human health from pollutants, emissions, or other human activities.' },
          { term: 'Global Warming', definition: 'The long-term heating of Earth\'s climate system observed since the pre-industrial period due to human activities.' },
          { term: 'Greenhouse Effect', definition: 'Process where gases in Earth\'s atmosphere trap the Sun\'s heat, keeping the planet warm enough for life.' },
          { term: 'Climate Change', definition: 'Significant, long-term change in the global climate.' },
          { term: 'Acid Rain', definition: 'Rainfall made acidic by atmospheric pollution (sulphur dioxide and nitrogen oxides) causing environmental harm.' },
          { term: 'Soil Erosion', definition: 'The wearing away of topsoil by natural forces like water and wind, often accelerated by human activities like deforestation.' },
        ],
        caseStudies: [
          {
            id: 'cs-maldives-climate',
            title: 'The Maldives – Environmental Risks of Climate Change | Global Issue',
            flag: '🇲🇻',
            color: 'blue',
            sections: [
              { 
                subtitle: 'Overview', 
                body: 'The Maldives is the lowest-lying country on Earth (average 1.5m above sea level). It faces existential risks from rising sea levels caused by global warming.',
                questions: [
                  { id: 'geo-mal-1', type: 'mcq', question: 'What is the average height above sea level in the Maldives?', options: ['1.5m', '5m', '10m', '50m'], correctAnswer: 0 },
                  { id: 'geo-mal-1-ext', type: 'mcq', question: 'True or False: The Maldives is the lowest-lying country on Earth.', options: ['True', 'False'], correctAnswer: 0 }
                ]
              },
              { 
                subtitle: 'Hazards', 
                body: 'Sea level rise leading to permanent submergence of islands. Increased frequency and severity of storm surges. Coral bleaching due to warmer ocean temperatures damaging tourism and fishing.',
                questions: [
                  { id: 'geo-mal-2', type: 'mcq', question: 'What is a major climate-related hazard for the Maldives?', options: ['Earthquakes', 'Sea level rise', 'Snowstorms', 'Desertification'], correctAnswer: 1 },
                  { id: 'geo-mal-2-ext', type: 'mcq', question: 'What secondary hazard damages Maldivian tourism and fishing?', options: ['Overfishing only', 'Coral bleaching due to warmer oceans', 'Heavy snow', 'Excessive forest fires'], correctAnswer: 1 }
                ]
              },
              { 
                subtitle: 'Responses', 
                body: 'Building sea walls around the capital, Malé. Creation of "Hulhumalé" — an artificial island built 2m higher than others. Considering purchasing land elsewhere (e.g. Australia) for future relocation. International advocacy for climate action.',
                questions: [
                  { id: 'geo-mal-3', type: 'mcq', question: 'What is the name of the artificial island built as a response to rising sea levels?', options: ['Malé Plus', 'Hulhumalé', 'New Atoll', 'Blue City'], correctAnswer: 1 },
                  { id: 'geo-mal-3-ext1', type: 'mcq', question: 'Where is the sea wall protection primarily located in the Maldives?', options: ['On every single island', 'Around the capital, Malé', 'Only in the south', 'Only near hotels'], correctAnswer: 1 },
                  { id: 'geo-mal-3-ext2', type: 'mcq', question: 'Where has the Maldivian government considered purchasing land for future relocation?', options: ['Antarctica', 'Australia', 'Brazil', 'Canada'], correctAnswer: 1 }
                ]
              },
            ]
          }
        ]
      },
    ]
  }
];

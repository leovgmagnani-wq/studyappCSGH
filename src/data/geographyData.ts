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
              { subtitle: 'Overview', body: "Nigeria is Africa's most populous country — 231 million people (2023). It is considered overpopulated: resources cannot support the population to a high standard of living." },
              { subtitle: 'Causes of High Birth Rate', body: 'Low use of birth control — men reluctant due to religion and misinformation. Unmet need for contraception over 20%. Islamic religion promotes large families through early marriage and polygamy. Christian religion prohibits effective contraception. Male-child preference — families keep having children until a son is born. High rural birth rates due to poverty and lack of rural employment.' },
              { subtitle: 'DTM Stage', body: 'Nigeria is in Stage 2–3 of the DTM. Declining death rate with still-high birth rate means rapid natural increase.' },
              { subtitle: 'Key Statistics', body: 'Population (2023): 231 million. 0–14 age group: ~43% of population. Youth unemployment: ~30%. 67% live below poverty line of $1/day. Double-digit inflation since 2017.' },
              { subtitle: 'Social Problems', body: "Overcrowding in Lagos leads to squatter settlements such as Makoko, built on stilts over a lagoon. Traffic congestion: 40% of Nigeria's cars registered in Lagos; 3+ hour daily commutes. Fatal accident rate: 28 per 100,000 — 3x European average. Air pollution 5x WHO limit." },
              { subtitle: 'Economic Problems', body: 'Youth unemployment ~30%. Double-digit inflation since 2017. 67% live on under $1/day.' },
              { subtitle: 'Environmental Problems', body: "Nigeria loses 350,000–400,000 hectares of forest per year (among world's highest rates). Overgrazing accelerating desertification in northern states (Kano, Borno, Katsina). Soil erosion and water source pollution." },
              { subtitle: 'Population Policy', body: 'Anti-natalist: promotes family planning and contraception. Challenges: religious opposition, gender inequality, poor rural healthcare. USA invested ~$900 million in malaria, HIV/AIDS and TB programmes which helped reduce the death rate.' },
            ]
          },
          {
            id: 'cs-australia',
            title: 'Australia – Underpopulation | MEDC',
            flag: '🇦🇺',
            color: 'blue',
            sections: [
              { subtitle: 'Overview', body: 'Australia is underpopulated — 7.7 million km² with only ~26 million people. Enormous resources remain underexploited.' },
              { subtitle: 'Evidence', body: 'Population density: ~3 people/km² — among world\'s lowest. Chronic labour shortages in mining, agriculture, healthcare.' },
              { subtitle: 'Causes', body: 'Hostile arid interior (the Outback) covering 70%+ of land. Historically restrictive immigration policies (White Australia Policy until 1973). Remote location.' },
              { subtitle: 'Consequences', body: 'Labour shortages in skilled and unskilled sectors. Large areas of productive agricultural land underutilised.' },
              { subtitle: 'Government Response', body: 'Points-based immigration system to attract skilled workers. Citizenship pathways for skilled migrants. Financial incentives for settling in regional/rural areas.' },
            ]
          },
          {
            id: 'cs-china',
            title: 'China – One Child Policy | Anti-natalist',
            flag: '🇨🇳',
            color: 'red',
            sections: [
              { subtitle: 'Overview', body: "China's One Child Policy (1980–2015) was the world's most famous anti-natalist policy, introduced to slow explosive population growth." },
              { subtitle: 'Why Introduced', body: "Rapid population growth straining food production and resources. Mao's encouragement of large families led to ~1 billion people by 1980. Government wanted faster economic development." },
              { subtitle: 'How It Worked', body: "Most urban families limited to one child. Exemptions: rural families whose first child was a girl; ethnic minorities. Incentives: free healthcare, priority schooling, financial bonuses. Penalties: fines, loss of employment. Some provinces: forced sterilisation and abortions." },
              { subtitle: 'Successes', body: "Prevented an estimated 400 million births. GDP per capita increased significantly. Women's workforce participation increased." },
              { subtitle: 'Problems', body: 'Rapidly ageing population — rising dependency ratio. Gender imbalance: 117 males born per 100 females. "4-2-1 Problem" — one child supporting 2 parents and 4 grandparents. Shrinking workforce. Human rights abuses documented.' },
              { subtitle: 'What Happened Next', body: "Two-child policy 2016. Three-child policy 2021. Birth rate remains low — cost of living deters couples." },
            ]
          },
          {
            id: 'cs-singapore',
            title: 'Singapore – Pro-natalist Policy | MEDC',
            flag: '🇸🇬',
            color: 'red',
            sections: [
              { subtitle: 'Overview', body: 'Singapore shifted from anti-natalist to pro-natalist in the 1980s after causing an ageing population crisis.' },
              { subtitle: 'Why Pro-natalist', body: 'Fertility rate fell to ~1.34 — far below replacement level of 2.1. Shrinking workforce. Ageing population increasing pressure on healthcare and pensions.' },
              { subtitle: 'Policy Measures', body: '"Have Three or More If You Can Afford It" campaign. Baby Bonus: S$8,000 per child. 16 weeks paid maternity leave. Paternity leave. Childcare subsidies. Tax relief for families. Priority school admission for 3+ child families.' },
              { subtitle: 'Effectiveness', body: 'Some improvement but still below replacement. Singapore relies heavily on immigration. High cost of living remains a barrier.' },
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
              { subtitle: 'Overview', body: "One of the world's largest and most politically contentious migration flows." },
              { subtitle: 'Push Factors (Mexico)', body: 'Poverty and very low wages. High unemployment. Crime: gang violence and drug cartel activity. Lack of quality healthcare and education in rural areas. Natural disasters displacing communities.' },
              { subtitle: 'Pull Factors (USA)', body: 'Much higher wages. Employment in agriculture, construction, hospitality and domestic service. Better healthcare, education and social infrastructure. Established Mexican-American communities (chain migration). Political stability.' },
              { subtitle: 'Effects on Mexico (Source)', body: 'Positive — Remittances: migrants send billions of dollars annually back to Mexico. Positive — Reduced unemployment pressure. Negative — Brain drain: loss of skilled and educated workers. Negative — Family breakdown; feminisation of villages.' },
              { subtitle: 'Effects on USA (Host)', body: 'Positive — Fills chronic labour shortages. Positive — Cultural enrichment. Negative — Perceived pressure on public services. Negative — Political controversy over illegal immigration.' },
              { subtitle: 'Border Management', body: 'Extensive sections of border wall along the 3,000km border. Border Patrol uses drones and physical barriers. Deportation remains a major political issue. DACA (Dreamers) — young people brought illegally as children face uncertain status.' },
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
              { subtitle: 'Overview', body: 'Japan has one of the world\'s oldest populations and faces a severe ageing population crisis.' },
              { subtitle: 'Key Statistics', body: 'Total population: ~129 million. Life expectancy: 84.8 years (one of world\'s highest). Fertility rate: 1.34 (well below replacement of 2.1). Median age: ~49 years. 60+ year-olds: 44% of all voters. Working-age population (15–64): only 59% of total. Social security spending: ~33% of government budget. 15% of 65+ live alone.' },
              { subtitle: 'Causes of Ageing', body: 'Very low fertility rate — high cost of living, career-focused culture, late marriages. Very high life expectancy — excellent healthcare, healthy diet (fish and vegetables), low obesity. Very low immigration — Japan historically resisted immigration.' },
              { subtitle: 'Social Consequences', body: '15% of 65+ live alone — social isolation and "kodokushi" (lonely deaths). Japan will face a shortage of 400,000 caregivers by 2025. Healthcare for elderly: 50%+ of total healthcare budget. Rural population shrank 50%+ between 1960–2020. Politics skewed towards elderly (44% of voters are 60+).' },
              { subtitle: 'Economic Consequences', body: 'GDP growth stagnated at 0.5–1% per year (vs 4% in post-war boom). Social security ~33% of government budget. Shrinking workforce reduces productivity. Labour shortages in healthcare, construction, technology.' },
              { subtitle: 'Government Responses', body: '2021 law encourages companies to employ staff until age 70. Pension deferral until 75 with 0.7% monthly increase. "Ikumen Project" encourages paternity leave — target 30% uptake by 2025 (up from 14%). Lump-sum childbirth allowance of ¥420,000 (~$2,800) per child. Free daycare for primary school children. Increasing automation to compensate.' },
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
              { subtitle: 'Overview', body: 'Japan has a high average density (~336/km²) but most people live on a few coastal lowland plains.' },
              { subtitle: 'Why Coastal Plains Are Dense', body: 'Flat land suitable for building, industry and farming. Fertile alluvial soils support intensive rice cultivation. Access to sea for trade, fishing and transport. Mild, humid climate. Industrial centres developed near coasts and ports.' },
              { subtitle: 'Why Interior Is Sparse', body: '~70% of Japan is mountainous — steep slopes unsuitable for farming or construction. Harsher climate at altitude. Poor historical transport access. Earthquake and landslide risk in mountain areas.' },
              { subtitle: 'Tokyo Megalopolis', body: 'Greater Tokyo: ~37 million people — world\'s largest urban agglomeration. Economic, political and cultural capital of Japan.' },
            ]
          },
          {
            id: 'cs-russia-sparse',
            title: 'Russia – Sparsely Populated Siberia | MEDC',
            flag: '🇷🇺',
            color: 'blue',
            sections: [
              { subtitle: 'Overview', body: 'Russia: world\'s largest country (17 million km²) with only ~144 million people. Average density: 8.4/km². Population unevenly distributed and has been declining.' },
              { subtitle: 'Why Siberia and North Are Sparse', body: 'Extreme cold — temperatures below -50°C in parts of Siberia. Permafrost makes construction, farming and infrastructure very difficult and expensive. Vast taiga and tundra with few agricultural opportunities. Short growing seasons (often 2–3 months). Very remote from economic centres. Poor and expensive transport infrastructure.' },
              { subtitle: 'Where People Do Live', body: 'Most Russians live west of the Ural Mountains. Moscow (~12 million) and St. Petersburg (~5 million) dominate. Urban population ~75% of total.' },
              { subtitle: 'Population Decline', body: 'Low birth rate combined with high death rate. Male life expectancy ~68 years vs female ~78 years — huge gender gap. Causes: alcoholism, smoking, poor diet and cardiovascular disease. Brain drain of skilled workers. War in Ukraine accelerated population loss.' },
              { subtitle: 'Government Responses', body: '"Maternity Capital" programme — large financial payment for second or subsequent child. Encouraging return of ethnic Russians from former Soviet states. Anti-alcohol campaigns and rural healthcare improvements.' },
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
              { subtitle: 'The Hierarchy', body: 'Hamlet → Village → Town → City → Conurbation → Megalopolis. As you move up: population increases, services increase, sphere of influence widens.' },
              { subtitle: 'Key Principles', body: 'High-order services need large threshold populations and have wide spheres of influence. Low-order services need small thresholds and have narrow spheres. Settlements at higher levels contain all lower-level services plus specialist ones.' },
              { subtitle: 'Sphere of Influence', body: 'A small village attracts people from only a few km for basic services. A large city attracts people from tens or hundreds of km for specialist services. Supermarkets and retail parks need large catchment areas to be profitable.' },
              { subtitle: 'Settlement Location Factors', body: 'Water supply — early settlements near rivers, springs or wells. Flat land — for building, farming and movement. Defensive sites — hills, meanders, islands. Transport routes — river crossings, ports, road and rail junctions. Resources — coal, iron, timber, fertile soil attracted workers and industry.' },
              { subtitle: 'Changing Services', body: 'Rural areas are losing services due to population decline and increased car ownership. Internet shopping is reducing the need for physical shops in small settlements. Consolidation of schools, post offices and pubs in villages. "Food deserts" — areas without access to affordable fresh food.' },
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
              { subtitle: 'Overview', body: 'Glasgow is Scotland\'s largest city. Once a world-leading industrial powerhouse (shipbuilding, steel, textiles), deindustrialisation since the 1960s–80s created severe and lasting social problems.' },
              { subtitle: 'Problem — Poverty and Inequality', body: 'Nearly 30% of Glasgow\'s working-age population unemployed — 50% higher than rest of Scotland/UK. Highest proportion of Income Benefit claimants in the UK. 18% of 16–19 year-olds are NEET (not in education, employment or training). Most deprived areas: Drumchapel, Easterhouse, Castlemilk.' },
              { subtitle: 'Problem — Crime and Drugs', body: 'Highest crime rate in Scotland. Drug-related mortality increased 95% since 1997. Over 6,000 children live in households with drug-using family members. Highest incidence of alcohol-related liver disease in Scotland. 170 teenage gangs — same number as London (6x Glasgow\'s size).' },
              { subtitle: 'Problem — Housing', body: 'Glasgow declared a "housing emergency" (2024). Over 5,200 open homelessness cases; 44% rise since 2019. A 2-bedroom flat in west Glasgow receives 300+ bids. Chronic shortage of social housing; rising private rents price out lower-income households.' },
              { subtitle: 'Regeneration — East End', body: 'Previously derelict industrial land regenerated. 2014 Commonwealth Games triggered massive infrastructure investment. New housing, sports facilities, roads and green spaces built. Merchant City transformed into a fashionable cultural and restaurant quarter.' },
              { subtitle: 'Regeneration — Clyde Waterfront', body: 'Former shipyards redeveloped into residential, commercial and cultural spaces. Science Centre, SECC and Armadillo concert hall attract visitors and investment.' },
              { subtitle: 'Solutions — Employment', body: 'Enterprise zones attract new businesses with tax incentives. Skills training programmes. Diversification into creative industries, financial services and tourism.' },
            ]
          },
          {
            id: 'cs-brazil-favelas',
            title: 'Brazil – Favelas in Sao Paulo | LEDC',
            flag: '🇧🇷',
            color: 'green',
            sections: [
              { subtitle: 'Overview', body: 'Rapid rural-urban migration led to explosive favela growth around cities like Sao Paulo and Rio. Sao Paulo metro: ~22 million people.' },
              { subtitle: 'Causes', body: 'Rapid rural-urban migration — millions arriving faster than formal housing can be built. Very low wages make formal housing unaffordable. Land illegally occupied on steep hillsides, floodplains and near railways. Government cannot build housing fast enough. Brazil has one of the world\'s highest inequality levels.' },
              { subtitle: 'Conditions in Favelas', body: 'Housing built from scrap materials — no planning permission. Lack of clean water and sewage systems → disease. No reliable electricity. Vulnerable to fire, floods and landslides. High crime rates and gang control. Limited access to healthcare and education.' },
              { subtitle: 'Solutions', body: 'Favela Bairro Programme — government upgrades favelas by providing legal land title, improved roads, water and electricity, schools and health clinics. Site and Service Schemes — government provides plots with basic infrastructure; residents build own homes. Self-help housing — communities given materials, tools and technical guidance. Urban regeneration — clearing dangerous areas and relocating residents.' },
              { subtitle: 'Successes and Challenges', body: 'Favela upgrading improves conditions without displacing communities. Legal land title gives residents security to invest. Challenge: millions still in inadequate housing. In-migration continues creating new settlements faster than they can be upgraded.' },
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
              { subtitle: 'Overview', body: "Lagos is Africa's largest city (~21 million metro area) and one of Earth's fastest-growing cities. Contributes 10% of Nigeria's population but 30% of its GDP." },
              { subtitle: 'Why Lagos Has Grown', body: "Major deepwater seaport. 60% of Nigeria's economic activity and 80% of its industry are in Lagos State. Main financial centre of West Africa. Offshore oil industry is a major employer. 96% of migrants come from within Nigeria itself." },
              { subtitle: 'Two Groups of Migrants', body: "Voluntary Itinerant Migrants — workers from Nigeria, Benin and Togo who work in Lagos but keep families at home. Include seasonal agricultural workers, construction artisans and underpaid civil servants. Sleep at work sites or mosques and send all earnings as remittances. Forced/Displaced Migrants — people driven from northern Nigeria by Boko Haram insurgency and Fulani herdsmen attacks." },
              { subtitle: 'Push Factors from Rural North', body: "Conflict from Boko Haram and Fulani herdsmen. Agricultural poverty and declining crop yields. Lack of services (hospitals, schools, roads). Desertification reducing farmland. Very few formal employment opportunities." },
              { subtitle: 'Pull Factors to Lagos', body: "Employment in oil, manufacturing and financial services. Higher wages — far above rural incomes. Better healthcare and education. Commercial opportunities in the vibrant informal sector." },
              { subtitle: 'Urban Problems', body: "Housing — Makoko: 300,000 people on stilts over a lagoon with no clean water, electricity or sanitation. Transport — 40% of Nigeria's cars registered in Lagos; 3+ hour daily commutes. Sanitation — inadequate sewage treatment and waste collection. Pollution — air, water and noise at extreme levels. Crime — poverty-driven gang activity." },
              { subtitle: 'Solutions', body: "BRT (Bus Rapid Transit) — dedicated bus lanes introduced. Eko Atlantic City — new planned city being built on reclaimed land from the ocean. Investment in road and rail infrastructure. Formalisation of some settlements — improved water and electricity access." },
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
              { subtitle: 'Key Facts', body: 'Date: 28 September 2018. Location: near Palu city, Central Sulawesi, Indonesia. Magnitude: 7.5 on the Richter Scale. Depth: ~10km — shallow earthquake causes severe surface shaking. Time: 6:02pm local — many people were outdoors. Triggered a tsunami with waves up to 6 metres. Also caused catastrophic liquefaction. 4,340+ confirmed dead; 4,600+ missing; 170,000+ displaced.' },
              { subtitle: 'Tectonic Context', body: 'Indonesia sits where three major plates meet — Eurasian, Australian and Pacific. Located on the Ring of Fire — one of the most seismically active regions on Earth. Occurred along the Palu-Koro Fault — a transform (strike-slip) fault. Rapid lateral movement caused massive seabed displacement and triggered the tsunami.' },
              { subtitle: 'Primary Effects', body: 'Widespread collapse of buildings, roads and bridges. Tsunami waves up to 6m devastated coastal areas of Palu Bay. Liquefaction: entire residential neighbourhoods sank into the ground.' },
              { subtitle: 'Secondary Effects', body: 'Disease outbreaks — cholera and waterborne diseases from contaminated water. Food and clean water shortages lasting weeks. Economic devastation: fishing, agriculture and businesses destroyed. Widespread psychological trauma. International emergency assistance required for months.' },
              { subtitle: 'Immediate Responses', body: 'Indonesian army deployed for search and rescue. International teams offered assistance. Emergency food, water and medical supplies distributed. Evacuation centres established.' },
              { subtitle: 'Long-term Responses', body: 'Rebuilding of homes, schools, hospitals and infrastructure. Improved tsunami early warning systems. Liquefaction risk mapping to guide future land use. International aid: $50M+ pledged. Relocation of communities from highest-risk coastal zones.' },
              { subtitle: 'Why Effects Were Severe (LEDC)', body: 'Most buildings not earthquake-resistant. Inadequate tsunami early warning systems. Poor infrastructure hampered rescue. Limited government resources. Corruption slowed reconstruction. Combination of earthquake + tsunami + liquefaction was exceptionally destructive.' },
            ]
          },
          {
            id: 'cs-iceland-volcano',
            title: 'Fagradalsfjall Volcano, Iceland (2021) | MEDC — Volcanic Eruption',
            flag: '🇮🇸',
            color: 'blue',
            sections: [
              { subtitle: 'Key Facts', body: 'Eruption began: 19 March 2021. Location: Reykjanes Peninsula, SW Iceland. First eruption in the area for ~800 years. Type: effusive fissure eruption — slow-moving basaltic lava flows. No casualties — remote location and advance warning. Attracted 300,000+ tourists.' },
              { subtitle: 'Tectonic Context', body: 'Iceland sits astride the Mid-Atlantic Ridge — a divergent plate boundary. North American and Eurasian plates move apart at ~2.5cm per year. Iceland also above a hotspot — a mantle plume of extra-hot material. The combination makes Iceland extremely volcanically active.' },
              { subtitle: 'Effects', body: 'Lava flows over remote, unpopulated area — no deaths or structural damage. Some air quality concerns from sulphur dioxide (SO₂) emissions. Minor air traffic disruption. Tourism boom — safe viewing platforms built. New land created as lava solidified.' },
              { subtitle: 'Why Effects Were Limited (MEDC)', body: 'World-class volcanic monitoring detected eruption days before it began. Iceland has centuries of experience managing volcanic hazards. High income country with resources to monitor and respond. Effusive (lava only) eruption — slower and more predictable. Remote location — no buildings or infrastructure at risk.' },
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
              { subtitle: 'The Indus River System', body: 'Basin area: 1,120,000 km² — crossing Pakistan, Afghanistan, China and India. 47% of the basin lies in Pakistan, running the full length of the country. River length: 3,200 km — one of the world\'s longest. 237 million people depend on the basin. 90%+ of Pakistan\'s crops irrigated from the Indus; farming = 38.5% of the workforce and 18.5% of GDP. The basin generates a $380 billion regional economy. Home to the critically endangered Indus River Dolphin (~1,000 remaining). Ancient Harappa and Mohenjo-daro civilisations were located along the river.' },
              { subtitle: 'Overview', body: 'Worst monsoon flooding in decades — a national catastrophe affecting all of Pakistan. 190%+ of normal rainfall in July–August 2022. Pakistan\'s corrupt and inefficient government made effective disaster management extremely difficult.' },
              { subtitle: 'Physical Causes', body: 'Record monsoon rainfall of 190%+ of normal levels. Climate change increasing rainfall variability and intensity; glacial melt adding to river flows. Mountainous topography channels runoff rapidly into rivers.' },
              { subtitle: 'Human Causes', body: 'Deforestation — Pakistan has the highest rate of deforestation in Asia; only 2.2% of land forested (2010). Poverty — population lacks means to evacuate or prepare. Urbanisation — increased impermeable surfaces creating more overland flow. Outdated and poorly maintained river management infrastructure. More intensive agriculture causing soil erosion and compaction. Political instability limiting preventive investment. River crosses multiple countries making joint management politically complex.' },
              { subtitle: 'Social Impacts', body: '40% of young children experienced stunted growth due to food and healthcare shortages. Malaria cases quadrupled from 400,000 (2021) to 1.6 million (2022). Cholera and dengue fever thriving in residual stagnant water. Millions displaced from destroyed homes. Schools, hospitals and community facilities destroyed.' },
              { subtitle: 'Economic Impacts', body: 'Catastrophic destruction of crops and livestock. Roads, bridges, dams severely damaged. Agricultural livelihoods destroyed for millions. Pakistan\'s already fragile economy severely set back. International financial aid and debt relief required.' },
              { subtitle: 'Responses', body: 'Emergency UN and international aid mobilised. National emergency declared. Large-scale evacuation carried out. Long-term: investment in improved flood defences, reforestation and early warning systems needed. Climate justice debate: Pakistan contributes less than 1% of global greenhouse gas emissions but suffers disproportionate climate impacts.' },
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
              { subtitle: 'Location', body: 'Hong Kong SAR is in southern China, bordering the South China Sea. Consists of Hong Kong Island, Kowloon, New Territories and ~260 islands. Population: ~7.5 million in a very small area — extremely high density.' },
              { subtitle: 'Opportunity — Fishing', body: '~5,080 fishing vessels and 10,320 local fishermen. 2022: produced ~77,000 tonnes of fisheries produce valued at ~HK$2.2 billion.' },
              { subtitle: 'Opportunity — Tourism', body: 'Popular international tourist destination. Hotels, restaurants and attractions along Victoria Harbour. Traditional junk boat trips. Iconic Tsim Sha Tsui promenade.' },
              { subtitle: 'Opportunity — Trade and Transport', body: 'Star Ferry — iconic passenger route between Kowloon and Hong Kong Island. Kwai Chung container port — one of the busiest in the world. HK International Airport on Lantau Island — one of Asia\'s busiest airports.' },
              { subtitle: 'Land Reclamation', body: 'HK\'s high population density makes land intensely scarce. Extensive land reclamation: areas of Kowloon, Central and the airport are built on reclaimed land. Negative consequences: damage to marine ecosystems, coral reefs and fisheries.' },
              { subtitle: 'Conservation', body: '40% of HK\'s land area designated as Country Park — protected from development. Mai Po wetlands support tens of millions of migratory birds. Deep Bay Marine Reserve protects the endangered Chinese White Dolphin. Mangrove forests provide coastal protection and crucial bird habitat.' },
              { subtitle: 'Coastal Hazard — Typhoons', body: 'Hong Kong regularly struck by typhoons from the South China Sea. Typhoon Mangkhut (2018): one of the most powerful ever — storm surges, massive waves, widespread flooding. Projected sea level rise of 0.6m+ by 2100 will dramatically increase flood risk. SCMP: "Central Hong Kong could be under water in 80 years."' },
              { subtitle: 'Coastal Management', body: 'Extensive sea walls along all major developed coastlines. Typhoon shelters — specially constructed harbours protecting fishing fleets. Flood barriers, underground storage tanks and upgraded drainage systems. Sophisticated typhoon early warning system: T1 to T10 signals. Strict building regulations requiring typhoon-resistant construction.' },
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
        caseStudies: []
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
              { subtitle: 'Location', body: 'Borneo is the world\'s third-largest island in Southeast Asia, near the equator. Divided between Indonesia (Kalimantan), Malaysia (Sabah and Sarawak) and Brunei. Contains one of the world\'s oldest rainforests — 130 million years old.' },
              { subtitle: 'Climate', body: 'Classic equatorial climate — hot and wet year-round. Average temperature: ~27–28°C. Annual rainfall: 2,000–4,000mm+ with no distinct dry season. Very high humidity.' },
              { subtitle: 'Biodiversity', body: 'Over 15,000 plant species and 3,000 tree species. Endangered species: Bornean Pygmy Elephant, Bornean Clouded Leopard, Rhinoceros Hornbill, Proboscis Monkey. Bornean Orangutan: fewer than 1,000 remaining in the wild. Complex food webs with multiple feeding levels.' },
              { subtitle: 'Deforestation — Causes', body: 'Oil palm plantations — Indonesia and Malaysia produce 85%+ of world\'s palm oil. Commercial logging (legal and illegal). Subsistence and commercial agriculture clearing. Mining activities (coal, gold). Government corruption allowing illegal logging to continue.' },
              { subtitle: 'Consequences of Deforestation', body: 'Loss of biodiversity — habitat destruction is the main cause of extinction in Borneo; orangutan population fell 50% in 16 years. Carbon release — burning peat swamp forests releases massive CO₂. Water cycle disruption — less interception and transpiration → increased runoff and flooding. Soil erosion — loss of root systems → topsoil washed away. Indigenous Dayak communities displaced. Air pollution from forest fires causes severe health problems across Southeast Asia.' },
              { subtitle: 'Why Rainforests Matter Globally', body: 'Carbon sinks — store 25%+ of all land-based carbon. Regulate global water and weather cycles through massive evapotranspiration. Biodiversity hotspots — 50%+ of Earth\'s species despite covering only 6% of land area. Source of medicines — 25% of modern drugs originally derived from rainforest plants. Home to tens of millions of indigenous people.' },
              { subtitle: 'Conservation Efforts', body: 'Protected areas and national parks (e.g. Kinabalu National Park in Sabah). RSPO (Roundtable on Sustainable Palm Oil) certification. International pressure and consumer campaigns. Reforestation projects. Orang-utan rescue and rehabilitation centres (e.g. Sepilok in Sabah).' },
            ]
          },
          {
            id: 'cs-sahara-desertification',
            title: 'The Sahara and Senegal – Desertification in the Sahel | Hot Desert',
            flag: '🏜️',
            color: 'amber',
            sections: [
              { subtitle: 'The Sahara Desert', body: 'World\'s largest hot desert — ~9 million km² across North Africa. Extremely arid — under 25mm annual rainfall. Temperatures up to 50°C day, below 0°C at night. Landscape types: erg (sand dunes), hamada (rocky plateaus), reg (gravel plains).' },
              { subtitle: 'The Sahel', body: 'Semi-arid transition zone running east-west across Africa just south of the Sahara. Annual rainfall: 200–400mm in a single short, unreliable wet season. Highly vulnerable to drought and desertification. Home to tens of millions of subsistence farmers and pastoralists.' },
              { subtitle: 'Senegal in Context', body: 'Located in West Africa — northern Senegal lies in the Sahel zone. Population heavily reliant on subsistence farming, livestock herding and fishing. Among the most vulnerable countries to desertification, drought and climate variability.' },
              { subtitle: 'Causes — Physical', body: 'Declining and increasingly unreliable rainfall — climate change extending dry seasons. Consecutive years of drought deplete soil moisture and kill vegetation. High temperatures accelerate evaporation. Wind erosion removes exposed topsoil during droughts.' },
              { subtitle: 'Causes — Human', body: 'Deforestation — trees cut for fuelwood (main cooking energy source). Overgrazing — too many livestock strip vegetation, compact soil and accelerate erosion. Overfarming — continuous cropping without fallow periods depletes soil nutrients. Population growth — more pressure on land and water resources. Inappropriate irrigation causing waterlogging and salinisation.' },
              { subtitle: 'Consequences', body: 'Loss of fertile topsoil through wind and rain erosion. Reduced crop yields → food insecurity and malnutrition. Decreased biodiversity as vegetation disappears. Water scarcity as rivers dry up and wells fail. Forced migration of farming communities. Deepening poverty as livelihoods are destroyed.' },
              { subtitle: 'The Great Green Wall Project', body: 'Pan-African initiative to grow an 8,000km corridor of trees across the Sahel from Dakar, Senegal to Djibouti. Target: restore 100 million hectares of degraded land by 2030. In Senegal: communities have planted millions of trees and restored degraded farmland — crop yields have improved significantly. Benefits: prevents desertification, sequesters carbon, creates 10 million jobs, improves food security for 20 million people. Additional components: water catchment points, community vegetable gardens and seed banks. Challenges: funding shortfalls, climate variability and conflict in some regions (Mali, Niger).' },
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
              { subtitle: 'Overview', body: 'Apple is one of Silicon Valley\'s biggest companies — the world\'s first to hit a market cap of $1 trillion. It is a tech company most famous for the iPhone, iPad and AirPods. It sells products worldwide and its supply chains are global. Operates in all four economic sectors. 154,000 direct employees worldwide.' },
              { subtitle: 'Headquarters', body: 'Silicon Valley, California, USA (R&D and design — quaternary sector).' },
              { subtitle: 'Main Manufacturing (Secondary)', body: 'Most of Apple\'s production takes place in Zhengzhou, Henan Province, China. Apple outsources manufacturing to Foxconn — a Taiwanese company with a huge factory in Zhengzhou. Around 200,000 people live in the Foxconn factory dorms — many have moved from rural areas. Henan was once one of China\'s poorest provinces but has benefited from overseas investment. During COVID, there were riots over working conditions at the plant.' },
              { subtitle: 'Apple\'s Impact on MEDCs — Ireland', body: 'Apple has its European headquarters in Ireland. Employs over 5,000 people in Ireland. Pays very little corporation tax. In 2016, the European Commission argued Ireland\'s favourable tax treatment of Apple was illegal state aid and ordered Ireland to recover €13 billion. Ireland was worried being forced to tax Apple more would undermine its position as a tech hub. Ireland\'s position as a corporate tax haven has led to huge asset inflation and relatively poor public services.' },
              { subtitle: 'Apple in China — Foxconn and TSMC', body: 'Foxconn is moving some manufacturing to India and Vietnam — wages are cheaper and political risk is lower than China. Apple also relies on TSMC (Taiwan Semiconductor Manufacturing Company) for its semiconductors — TSMC is the world\'s largest and most advanced semiconductor manufacturer. Apple is concerned about over-reliance on China for its supply chain following COVID disruptions.' },
              { subtitle: 'Impact on LEDCs — DRC', body: 'Smartphones require many raw materials including REEs (rare earth elements) and cobalt. In the DRC, cobalt comes from poorly regulated mines. They are often dangerous and involve child labour. The DRC has sued Apple over alleged illegal mineral exploitation (2024).' },
              { subtitle: 'Multiplier Effect in Henan, China', body: 'Foxconn attracted additional businesses, workers and services to Zhengzhou. Economic growth spread beyond the factory — housing, food, transport, retail all grew. Positive impacts: jobs, income, infrastructure development. Negative impacts: worker exploitation concerns, poor working conditions, low wages relative to Apple\'s profits.' },
              { subtitle: 'Advantages of TNCs for LEDCs', body: 'Bring jobs and income to local workers. Develop infrastructure (roads, electricity, water). Technology transfer — local workers learn new skills. Tax revenues for government (though often minimised by TNCs).' },
              { subtitle: 'Disadvantages of TNCs for LEDCs', body: 'Profits repatriated to parent country, not reinvested locally. Low wages and poor working conditions. Environmental damage from manufacturing. Dependency — if TNC leaves, local economy collapses. Resource extraction benefits TNC more than local community.' },
            ]
          },
          {
            id: 'cs-italy-inequality',
            title: 'Italy – Regional Inequality Within a Country | Development Inequality',
            flag: '🇮🇹',
            color: 'green',
            sections: [
              { subtitle: 'Overview', body: 'Italy is an example of stark regional development inequality within a single MEDC country — the north is far more developed than the south.' },
              { subtitle: 'Evidence — North vs South', body: 'GDP per capita: North has far higher GDP per capita than the south. Industry: Manufacturing and high-value industries concentrated in the north (e.g. Milan — fashion and finance; Turin — car manufacturing). Life expectancy: Higher in the north than in the south. Unemployment: Much higher in the south (the Mezzogiorno). Infrastructure: Better road and rail networks in the north.' },
              { subtitle: 'Causes of North-South Divide', body: 'Historical: The south (Mezzogiorno) was historically agricultural and less industrialised. Economic: Industry and investment concentrated in the north — the core. Physical: Southern climate is hotter and drier, making farming harder. Migration: Young, skilled people migrate from south to north (internal brain drain), leaving the south with an older, less skilled population. Core-Periphery: The north acts as the core — attracting investment, migration and growth. The south is the periphery.' },
              { subtitle: 'Implications', body: 'Explains why development is uneven within countries, not just between countries. The core-periphery model can be applied at local, national and global scales.' },
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
              { subtitle: 'Overview', body: 'The SEAT Martorell plant is a major car assembly factory near Barcelona, Spain. It is a case study of an industrial zone and the factors that influenced its location.' },
              { subtitle: 'Why Located at Martorell', body: 'Land — Martorell offered ample space; the factory now covers over 2.8 million m². Located ~40km from Barcelona — benefits from the city\'s infrastructure and resources. Raw Materials — efficient integration with suppliers; a steady supply of raw materials. Proximity to the Port of Barcelona — facilitates import of raw materials and export of finished vehicles. Energy — equivalent to a city of 100,000 people in electricity consumption.' },
              { subtitle: 'Inputs', body: 'Raw Materials — steel, aluminium, plastics, electronics, interior components. Components — engines, transmissions, electronics, pre-manufactured parts. Labour — skilled workforce of ~12,000 employees. Land — 2.8 million m² of flat land. Technology — advanced machinery, 2,000+ robots. Energy — electricity and other power sources.' },
              { subtitle: 'Processes', body: 'Assembly of over 400,000 cars per year. Press operations: presses perform over 6.4 million strokes annually. Robotic welding: over 2,000 robots conducting ~1.3 billion spot welds per year. Painting, quality control, water-tightness testing.' },
              { subtitle: 'Environmental Impacts and Management — Air Quality', body: 'Risk: vehicle testing, factory operations, transport movement produce air pollution. Management: 4,000 m² of photocatalytic pavement neutralises pollutants. SEAT al Sol Project: 53,000 solar panels — one of the largest solar plants in the European automotive industry. LED lighting — 80% reduction in energy consumption for lighting. Energy Recovery Systems — recover energy from hot air emitted by industrial processes. Autometro: two 40km train lines link the plant to port infrastructure and Barcelona.' },
              { subtitle: 'Environmental Impacts and Management — Water Quality', body: 'Risk: water used in paint workshops, vehicle testing and cleaning could contaminate local water sources. Management: Closed-circuit water system in paint workshops — water is recycled rather than discharged. Rain test water recycling — water used in waterproofing tests is collected and reused. Water consumption per car fell 31% from 3.54 m³ (2010) to 2.46 m³ (2018).' },
              { subtitle: 'Environmental Impacts and Management — Land/Visual', body: 'Risk: 2.8 million m² of farmland replaced with factory — deforestation, habitat destruction, destroyed food chains. Management: SEAT contributed to creating a botanical garden in Martorell\'s Can Casas park — planted 80 native trees.' },
              { subtitle: 'Environmental Impacts and Management — Noise', body: 'Risk: presses, robotic welding, vehicle testing, and transport generate high noise levels affecting nearby communities. Management: Ongoing research into noise reduction — no complete solution listed.' },
              { subtitle: 'Social/Community', body: 'The Healthcare and Rehabilitation Centre at Martorell is a pioneering facility for employee health and well-being. During COVID (early 2020), SEAT adapted its production line to manufacture ventilators.' },
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
              { subtitle: 'Positive Impacts — Economic', body: 'Tourists spend lots of money, bringing extra cash into poor countries. Creates jobs in hotels, restaurants, transport, entertainment and retail. Foreign exchange earnings help LEDCs develop their infrastructure and service industries. Tax revenues for government.' },
              { subtitle: 'Positive Impacts — Social', body: 'Investment in infrastructure (roads, airports, water) benefits local people. Preservation of cultural heritage and traditional crafts. Community development through employment.' },
              { subtitle: 'Negative Impacts — Economic', body: 'Leakage — profits from foreign-owned hotels and airlines leave the destination country. Seasonal unemployment — few tourists in off-season. Dependence on tourism makes economies vulnerable to external shocks (e.g. COVID).' },
              { subtitle: 'Negative Impacts — Social', body: 'Increase in crime — thieves targeting tourists with expensive goods. Cultural erosion — local traditions undermined by tourist culture. Anti-tourism sentiment — graffiti appeared in Barcelona, Majorca and Venice in 2017 protesting over-tourism. Rising property prices push local people out of popular destinations.' },
              { subtitle: 'Negative Impacts — Environmental', body: 'Tourists drop litter, making beautiful places messy. Hotel construction causes noise, visual pollution and habitat destruction. Water overuse and pollution. Damage to coral reefs, forests and wildlife habitats.' },
              { subtitle: 'Over-tourism Examples', body: 'Barcelona — graffiti vandalism in 2017 protesting tourist saturation; locals driven out by rising rents. Majorca — similar protests against mass tourism impact on local culture and environment. Venice — sinking city flooded with tourists; locals leaving due to high prices.' },
              { subtitle: 'Sustainable Tourism Solutions', body: 'Eco-friendly accommodations using renewable energy, reducing water waste and minimising plastic. Sustainable transport — biking, walking, public transport, electric vehicles. Wildlife and nature conservation — protecting habitats, avoiding fragile ecosystems. Waste reduction — recycling, banning single-use plastics. Respecting local cultures — learning about traditions and customs. Supporting local businesses — locally owned restaurants, shops and accommodations.' },
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
              { subtitle: 'Location', body: 'Iceland is located in the North Atlantic, straddling the Mid-Atlantic Ridge — a divergent plate boundary. North American and Eurasian plates are moving apart. Iceland also sits above a hotspot — a mantle plume of extra-hot material. This makes Iceland one of the most volcanically and geothermally active places on Earth.' },
              { subtitle: 'Geothermal Energy in Iceland', body: 'Geothermal energy is heat from within the Earth, accessed where magma is close to the surface. Iceland uses geothermal energy to heat homes and businesses — Reykjavik\'s entire district heating system runs on geothermal. Geothermal energy is used to light and heat greenhouses for farming, allowing crops to be grown year-round despite Iceland\'s cold climate. Icelandic fish farms use geothermal water — the industry has grown significantly since the 1980s.' },
              { subtitle: 'Advantages of Geothermal Energy', body: 'Cheap — if Reykjavik was heated by oil instead of geothermal, costs would be much higher. In the USA, $8.2 billion was saved between 1970 and 2000 by switching to geothermal heating. Reliable — geothermal power stations last ~30 years; they are long-term projects. Self-sufficient — Iceland less reliant on importing energy from other countries. Clean — lower CO₂ output; soluble pollutants can be pumped back underground.' },
              { subtitle: 'Other Benefits for Iceland', body: 'This small country (317,900 people) attracts 1.7 million tourists per year — geothermal features like geysers and hot pools are major attractions (7% of GDP). Microsoft and Google have explored Iceland as a R&D location — enormous power availability and cool climate for servers. Iceland\'s 100% renewable electricity makes it attractive for energy-intensive industries.' },
              { subtitle: 'Importance of Energy Mix', body: 'Iceland generates ~100% of its electricity from renewables — ~70% HEP, ~30% geothermal. This makes Iceland a global leader in renewable energy and energy security.' },
            ]
          },
          {
            id: 'cs-uk-energy',
            title: 'UK – Energy Supply and Transition | Energy Case Study',
            flag: '🇬🇧',
            color: 'blue',
            sections: [
              { subtitle: 'Overview', body: 'The UK has historically relied on fossil fuels (coal, oil, gas) but has been rapidly transitioning to renewables. Renewables now provide 40% of the UK\'s energy requirements.' },
              { subtitle: 'UK Energy Mix', body: 'Coal: use has dramatically declined — from the dominant fuel of the Industrial Revolution to near-zero. Natural Gas: still the largest source of electricity generation, but declining. Oil: major use for transport. Nuclear: contributes a significant share of electricity generation. Renewables: wind (offshore and onshore), solar, biomass have grown rapidly.' },
              { subtitle: 'Hornsea 1 Offshore Wind Farm — World\'s Largest', body: 'Began construction 2018 in the North Sea off Yorkshire. 174 wind turbines, each 190m high (same as the BT Tower in London). Each blade is 75m long — blade diameter of 154m exceeds the London Eye (120m). Each blade made from balsawood, resin and fibreglass — 522 blades total. Generates enough electricity to power over 1 million UK homes. Created 1,000 jobs in East Yorkshire — an area with historically high unemployment.' },
              { subtitle: 'Problems with Hornsea 1', body: 'The world\'s largest ever seabed investigation was carried out in 2015. Cables laid under miles of farmland to deliver electricity to markets. Wind turbines require wind speeds of just over 30mph (48km/h) — they turn off in storms (too fast) or calm days (too slow). Kittiwakes (seabirds) are struggling — turning blades can kill them; Ørsted has proposed nesting towers and painting one blade black to help birds avoid them.' },
              { subtitle: 'UK\'s Path to Net Zero', body: 'Key projects include Hornsea wind farm, new nuclear power stations (e.g. Hinkley Point C) and investment in solar energy. Government commitments to decarbonise electricity grid and phase out new petrol/diesel cars.' },
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
              { subtitle: 'Overview', body: 'Singapore\'s water demand is approximately 430 million gallons per day. 55% is for non-domestic use; 45% for household use. Singapore faces water stress due to its small size (no large rivers or lakes), dense population, and dependence on rainfall and Malaysia for water supply.' },
              { subtitle: 'Why Singapore Experiences Water Stress', body: 'Very small land area — limited space to collect and store water. Dense population — high demand relative to available resources. Historical dependence on importing water from Malaysia (under a 1962 Water Agreement expiring 2061). Climate change creating more variable rainfall. Rapid economic development increasing industrial water demand.' },
              { subtitle: 'The Four National Taps', body: '(1) Water from local catchment areas — rainwater collected from 2/3 of Singapore\'s land area (reservoirs and drains). (2) Imported water from Johor, Malaysia — via pipeline; Singapore is working to reduce dependence on this. (3) NEWater — highly purified reclaimed water using advanced membrane technology (microfiltration, reverse osmosis, UV disinfection). Currently supplies 40%+ of demand. (4) Desalinated water — seawater treated by reverse osmosis to produce fresh water. Two desalination plants operational.' },
              { subtitle: 'Sustainability of Singapore\'s Water Management', body: 'NEWater is considered very sustainable — recycling wastewater that would otherwise be discharged. Desalination is energy-intensive but provides water security independent of rainfall. Singapore has reduced per capita household water consumption through public education campaigns, tiered pricing (higher users pay more) and water-efficient appliance standards. Singapore aims to meet 85% of water needs from NEWater and desalination by 2061 when the Malaysian import agreement expires.' },
            ]
          },
          {
            id: 'cs-global-water',
            title: 'Global Water Supply Methods and Issues | Water Management',
            flag: '🌍',
            color: 'blue',
            sections: [
              { subtitle: 'Surface Water Collection', body: 'Pumping water from lakes, rivers and reservoirs — requires treatment. Luxembourg gets 50% of its water from the Upper Sauer River.' },
              { subtitle: 'Groundwater', body: 'Water pumped from aquifers deep in the ground by boreholes and wells. The Ogallala Aquifer (USA) supplies 7 states. Risk: over-extraction is depleting aquifers faster than they recharge.' },
              { subtitle: 'Rainwater Harvesting', body: 'Collecting rainwater from roofs of buildings. Common in areas without piped supply.' },
              { subtitle: 'Desalination', body: 'Removing salt from seawater using reverse osmosis membranes. The largest plant is in Saudi Arabia (1,036,000 m³/day). Very expensive — high energy costs. First subsea desalination facility planned for 2026.' },
              { subtitle: 'Water Transfer', body: 'Moving water from areas of surplus to areas of deficit by pipes, canals or aqueducts. Political challenges when water crosses national borders.' },
              { subtitle: 'Problems of Poor Water Supply', body: 'Approximately 783 million people in the world don\'t have access to potable (drinkable) water — sub-Saharan Africa accounts for the majority. Disease — contaminated water causes cholera, typhoid and dysentery. Stunted development — children who drink unsafe water experience worse health and educational outcomes. Salinisation — over-irrigation in hot, dry areas destroys agricultural land. Desertification — land degradation reduces water infiltration and increases drought risk.' },
              { subtitle: 'Why Water Demand is Rising', body: 'Population growth. Industrialisation — factories require enormous amounts of water for cooling, processing, cleaning. Urbanisation — cities have high per-capita water use. Climate change — higher temperatures increase evaporation and reduce rainfall in some areas. Energy demand — AI data centres and power station cooling require large amounts of water. Agriculture intensification — more irrigation of more crops to feed growing population.' },
              { subtitle: 'Solutions to the Water Crisis', body: 'Build dams to store water and regulate supply. Rainwater harvesting from rooftops and surfaces. Desalination — expensive but increasingly viable. Water transfer from surplus to deficit regions. Conservation — reducing water use per person and per product. Improved irrigation technology (drip irrigation reduces waste). Water recycling — treating wastewater for reuse (as in Singapore\'s NEWater). Education campaigns and tiered pricing to reduce demand.' },
            ]
          }
        ]
      }
    ]
  }
];

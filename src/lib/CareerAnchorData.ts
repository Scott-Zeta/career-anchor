interface Question {
  id: number;
  text: string;
  anchor: string;
  anchorLabel: string;
}

export const questions: Question[] = [
  {
    id: 1,
    text: 'I want to be really good at my job, one of the best, an expert.',
    anchor: 'TF',
    anchorLabel: 'Technical/Functional (TF)',
  },
  {
    id: 2,
    text: 'I really feel most satisfied when I am able to manage the work of others to achieve a common goal.',
    anchor: 'GMC',
    anchorLabel: 'General Managerial Competence (GMC)',
  },
  {
    id: 3,
    text: 'Ideally I want to do things my way and to my own timetable.',
    anchor: 'AI',
    anchorLabel: 'Autonomy/Independence (AI)',
  },
  {
    id: 4,
    text: "I would much rather build my own business than be the boss in someone else's.",
    anchor: 'EC',
    anchorLabel: 'Entrepreneurial Creativity (EC)',
  },
  {
    id: 5,
    text: 'I believe that security and stability are much more important than having the freedom to choose how I work.',
    anchor: 'SS',
    anchorLabel: 'Security/Stability (SS)',
  },
  {
    id: 6,
    text: 'My ideal career will enable me to integrate all of my needs – whether work, personal or family.',
    anchor: 'LS',
    anchorLabel: 'Lifestyle (LS)',
  },
  {
    id: 7,
    text: 'It is important to me that I use my talents to further the greater good.',
    anchor: 'S',
    anchorLabel: 'Service/Dedication to a Cause (S)',
  },
  {
    id: 8,
    text: 'I get a kick out of solving the unsolvable or winning against the odds.',
    anchor: 'PC',
    anchorLabel: 'Pure Challenge (PC)',
  },
  {
    id: 9,
    text: 'I will only feel really successful when I have the freedom to define my work.',
    anchor: 'AI',
    anchorLabel: 'Autonomy/Independence (AI)',
  },
  {
    id: 10,
    text: 'I feel most satisfied and fulfilled when I am able to use my expertise, talents and skills.',
    anchor: 'TF',
    anchorLabel: 'Technical/Functional (TF)',
  },
  {
    id: 11,
    text: 'I would really like to start my own business one day.',
    anchor: 'EC',
    anchorLabel: 'Entrepreneurial Creativity (EC)',
  },
  {
    id: 12,
    text: 'I would be very uncomfortable working in an organisation that took a lot of risks. I prefer to work for an organisation that offers stability and security.',
    anchor: 'SS',
    anchorLabel: 'Security/Stability (SS)',
  },
  {
    id: 13,
    text: 'I would rather seek employment elsewhere than move to a role that seriously undermined my ability to serve the greater good/others.',
    anchor: 'S',
    anchorLabel: 'Service/Dedication to a Cause (S)',
  },
  {
    id: 14,
    text: 'I prefer to work on projects that really challenge my problem-solving skills and have a competitive element.',
    anchor: 'PC',
    anchorLabel: 'Pure Challenge (PC)',
  },
  {
    id: 15,
    text: 'I would rather find a new job than accept a role that puts constraints on how I do my work.',
    anchor: 'AI',
    anchorLabel: 'Autonomy/Independence (AI)',
  },
  {
    id: 16,
    text: 'Balancing my work with my family and personal commitments is more important to me than a senior position.',
    anchor: 'LS',
    anchorLabel: 'Lifestyle (LS)',
  },
  {
    id: 17,
    text: 'One day I would like to be the boss, in charge of a whole organisation.',
    anchor: 'GMC',
    anchorLabel: 'General Managerial Competence (GMC)',
  },
  {
    id: 18,
    text: 'Reaching a position of seniority in my area of expertise is far more important to me than becoming a more senior general manager.',
    anchor: 'TF',
    anchorLabel: 'Technical/Functional (TF)',
  },
  {
    id: 19,
    text: 'I want to make a difference in my career. I will only be truly satisfied if I feel I have made a real contribution to society.',
    anchor: 'S',
    anchorLabel: 'Service/Dedication to a Cause (S)',
  },
  {
    id: 20,
    text: 'Working on difficult problems is more important to me than achieving a high-level position.',
    anchor: 'PC',
    anchorLabel: 'Pure Challenge (PC)',
  },
  {
    id: 21,
    text: 'My preference in choosing a role would be to seek out opportunities that minimise any interference with my personal life (family, friends etc).',
    anchor: 'LS',
    anchorLabel: 'Lifestyle (LS)',
  },
  {
    id: 22,
    text: 'I would feel really fulfilled if I was able to create an enterprise that was primarily the result of my ingenuity, skills and efforts.',
    anchor: 'EC',
    anchorLabel: 'Entrepreneurial Creativity (EC)',
  },
  {
    id: 23,
    text: 'Job security and financial independence are really important to me.',
    anchor: 'SS',
    anchorLabel: 'Security/Stability (SS)',
  },
  {
    id: 24,
    text: 'I would rather become a general manager with broader responsibilities than become a senior functional manager in my area of expertise.',
    anchor: 'GMC',
    anchorLabel: 'General Managerial Competence (GMC)',
  },
];

export const anchorDescriptions = {
  TF: {
    title: 'Technical/Functional',
    subtitle: 'Developing expertise in a specific area',
    personality:
      "You value being good at something specific and enjoy developing expertise in your field. You're motivated by challenges that test your skills and abilities.",
    description:
      "This kind of person likes being good at something and will work to become a guru or expert. They will commit themselves to specializing in their field. They like to be challenged and then use their skill to meet the challenge, doing the job properly and better than almost anyone else. They may be willing to be 'functional managers' but will not value the concerns of general management. If the work does not test their abilities and skills, they will very quickly become bored.",
    implications: [
      'Seeks specialized roles where expertise can be developed and applied',
      'Values opportunities for continuous professional development',
      'Prefers recognition based on technical competence rather than managerial skills',
      'May resist moving into general management roles that take them away from their area of expertise',
    ],
    icon: 'wrench',
    themecolor: 'violet',
  },
  GMC: {
    title: 'General Managerial',
    subtitle: 'Leading and coordinating diverse functions',
    personality:
      'You’re energized by leadership roles and enjoy bringing people together to solve problems. You thrive in complex, fast-moving environments and are motivated by the opportunity to take charge and drive success at a strategic level.',
    description:
      'Unlike technical/functional people, these individuals want to be managers; and not just to climb the ladder, or earn more money. They find that it is management per se that interests them. They like problem-solving and dealing with other people. They thrive on responsibility and ideally will look to rise up through the organizational levels so they can be in a position to make major policy decisions. To be successful, they will need analytical, emotional, interpersonal and intergroup competence.',
    implications: [
      'Seeks positions with increasing managerial responsibility',
      'Values breadth of experience across different organizational functions',
      'Motivated by opportunities to lead teams and make strategic decisions',
      'Measures success by promotion to higher levels of responsibility',
    ],
    icon: 'users',
    themecolor: 'blue',
  },
  AI: {
    title: 'Autonomy/Independence',
    subtitle: 'Freedom from organizational constraints',
    personality:
      'You value freedom and independence in your work. You prefer environments that allow you to work on your own terms and at your own pace.',
    description:
      "Some people come to recognize that they find it really hard to be bound by other people's rules, procedures, working hours, or dress codes. In short, all of the things that come with working in any kind of organization. Primarily, these people have a need to work under their own rules and steam. Regardless of the type of work, they want to do things in their own way and at their own pace. They like clearly delineated, time-bound work within their area of expertise. As such, they will often gravitate towards careers that afford them as much autonomy as possible.",
    implications: [
      'Seeks roles with minimal supervision and maximum autonomy',
      'May prefer freelance, consulting, or independent contractor roles',
      'Values flexible work arrangements and the ability to set own schedule',
      'May resist organizational policies that limit personal freedom',
    ],
    icon: 'check',
    themecolor: 'green',
  },
  SS: {
    title: 'Security/Stability',
    subtitle: 'Certainty and predictability in work and life',
    personality:
      "You prioritize stability and long-term security in your career. You're motivated by predictability and consistency, and you find comfort in knowing what to expect from your work and workplace.",
    description:
      "Security-focused people seek stability and continuity as a primary factor of their lives. We all need varying degrees of security at different points in our lives, however for some this is the predominant orientation throughout their lives and will certainly guide their career decisions. They will often seek out stable organisations that provide the greatest opportunity for job security. They also tend to prefer stable, predictable work tasks. They also need to believe that loyalty makes a real contribution to an organisation's performance.",
    implications: [
      'Seeks employment with established, stable organizations',
      'Values predictable, well-defined work responsibilities',
      'Prioritizes benefits, retirement plans, and long-term financial security',
      'May sacrifice higher pay or advancement for increased stability',
    ],
    icon: 'shield-alt',
    themecolor: 'amber',
  },
  EC: {
    title: 'Entrepreneurial Creativity',
    subtitle: 'Creating new products, services, or organizations',
    personality:
      "You are driven by the desire to build, innovate, and create. You're constantly looking for the next big idea and are most fulfilled when turning visions into reality through new ventures or initiatives.",
    description:
      'People who have this anchor, have an overriding need to create new products or services. Whilst creativity exists in one form or another in all the groups, for the entrepreneur creating a new venture, product or service of some sort is essential to their sense of success and fulfilment. They are obsessed with their need to create, are restless and continually require new creative challenges. They like to run their own businesses, but differ from those who seek autonomy in that they will share the workload. Ownership is more important than making money, although this is viewed as a key measure of success.',
    implications: [
      'Driven to create and build something new and uniquely their own',
      'May seek opportunities to launch startups or bring entrepreneurial thinking to existing organizations',
      'Values ownership and personal recognition for creation',
      "May be restless in conventional roles that don't allow expression of creativity",
    ],
    icon: 'lightbulb',
    themecolor: 'red',
  },
  S: {
    title: 'Service/Dedication to a Cause',
    subtitle: 'Making the world a better place',
    personality:
      "You're deeply motivated by your values and a desire to make a positive difference. You seek work that aligns with your sense of purpose and allows you to contribute meaningfully to others or society.",
    description:
      'Some people will pursue a career because they want to embody their core values in their work and careers. As such, they have a keener orientation towards their values than any talents or competencies. Their choices will be based on a desire to improve the world in some way. They will want work that allows them to influence their employing organisations in the direction of their values. Service-oriented people are driven by how they can help other people more than using their talents (which may fall in other areas).',
    implications: [
      'Seeks roles that align with personal values and make a positive social impact',
      'Prioritizes organizational mission and purpose above financial rewards',
      'May be drawn to nonprofit, healthcare, education, or public service sectors',
      'Values recognition for contributions to meaningful causes',
    ],
    icon: 'hands-helping',
    themecolor: 'purple',
  },
  PC: {
    title: 'Pure Challenge',
    subtitle: 'Overcoming difficult obstacles and solving problems',
    personality:
      "You're motivated by overcoming difficult obstacles and solving unsolvable problems. You thrive on constant challenge and competition.",
    description:
      'Some people are driven by challenge. They will define success as overcoming tremendous obstacles, solving the unsolvable or winning out against impossible odds. They will seek constant stimulation and difficult problems that they can tackle. Most people will want a degree of challenge in their work, but for this type the challenge is the only thing that matters. Such people will change jobs when the current one gets boring and their career histories can be very varied.',
    implications: [
      'Seeks progressively more difficult challenges',
      'Values opportunities to solve complex problems and overcome obstacles',
      'May be drawn to highly competitive environments or cutting-edge fields',
      'May change positions frequently in search of new challenges',
    ],
    icon: 'trophy',
    themecolor: 'pink',
  },
  LS: {
    title: 'Lifestyle',
    subtitle: 'Balancing and integrating life needs',
    personality:
      "You value flexibility and integration between your personal and professional life. You're motivated by the ability to design a career that supports your broader life goals and personal wellbeing.",
    description:
      "Initially it appears that the notion that one's career anchor is organized around lifestyle is a contradiction in terms. However, many people who are highly motivated towards a meaningful career, find themselves in situations that mean their careers must be integrated into their total lifestyle. This is an evolving process, ergo people who find themselves in this situation want flexibility above all else. When seeking employment they are more likely to be interested in an organisation's attitude towards personal/family concerns, than the sector or area of expertise. They may even take long periods off work in which to indulge in their passions.",
    implications: [
      'Prioritizes work-life balance and integration of career with personal life',
      'Values flexibility in work arrangements (location, hours, etc.)',
      'May seek employers with family-friendly policies and culture',
      'Willing to sacrifice advancement for quality of life',
    ],
    icon: 'balance-scale',
    themecolor: 'yellow',
  },
};

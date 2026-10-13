/**
 * siteConfig.ts
 * Единый конфигурационный файл лендинга и разделов Василия Алешина.
 * Здесь централизованно настраиваются все тексты, цены, ссылки, контакты и статусы проектов.
 */

export interface RequestItem {
  id: string;
  title: string;
  description: string;
  links: {
    label: string;
    href: string; // URL или путь (/individual, /groups, /programs, или внешняя ссылка)
    isExternal?: boolean;
  }[];
  subtext?: string;
}

export interface GroupItem {
  id: string;
  name: string;
  typeLabel?: string;
  description: string;
  url?: string; // Внешний сайт проекта (например, https://norma.sintauto.ru)
  waitlistUrl?: string; // Прямая ссылка на форму или бот листа ожидания
  questionUrl?: string; // Прямая ссылка для вопроса
  statusNote?: string;
  isConducted?: boolean; // Для завершённых форматов (например, «СОСТОЯНИЕ»)
  isOpenEnrollment?: boolean; // Без подтверждения не показывать открытый набор
}

export interface ProgramItem {
  id: string;
  name: string;
  description: string;
  landingUrl?: string; // «Подробнее о приложении» / «Подробнее о программе»
  telegramUrl?: string; // «Открыть в Telegram» (для ботов/приложений)
  subtext?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LegalLink {
  label: string;
  url?: string;
}

export interface SiteConfig {
  specialist: {
    fullName: string;
    shortName: string;
    profession: string;
    heroSubtitle: string;
    photoUrl?: string;
    photoAlt: string;
  };
  navigation: {
    label: string;
    path: string; // '/', '/individual', '/groups', '/programs', или с хэшем '/#requests'
  }[];
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCtaText: string;
    ctaSubtext: string;
    ctaDisclaimer?: string;
    quote?: string;
    secondaryCtaText: string;
    secondaryCtaTarget: string;
  };
  processTimeline?: {
    id: string;
    label: string;
    active: boolean;
  }[];
  requestsBlock: {
    title: string;
    lead: string;
    featuredSituations?: {
      id: string;
      text: string;
      href: string;
    }[];
    items: RequestItem[];
  };
  formatsBlock: {
    title: string;
    individual: {
      title: string;
      shortDescription: string;
      fullDescription: string;
      prices: {
        single: string;
        package6: string;
      };
      ctaText: string;
      path: string;
      longTermTeaser: {
        title: string;
        text: string;
        caption: string;
        linkText: string;
        path: string;
      };
    };
    longTermTherapy: {
      path: string;
      badge: string;
      title: string;
      description: string;
      highlightLine: string;
      ctaText: string;
      ctaSubtext: string;
      whenSuitable: {
        title: string;
        situations: string[];
        caption: string;
      };
      topics: {
        title: string;
        items: {
          text: string;
          subtext?: string;
        }[];
      };
      whyLongTerm: {
        title: string;
        text: string;
        benefits: {
          title: string;
          text: string;
        }[];
      };
      periods: {
        duration: string;
        subtitle: string;
        description: string;
        price?: string;
        frequency?: string;
        sessionCountAndDuration?: string;
      }[];
      generalPeriodClarification: string;
      steps: {
        number: string;
        title: string;
        description: string;
      }[];
      terms: {
        paymentTerms?: string;
        rescheduleAndCancellationPolicy?: string;
        contactBetweenSessions?: string;
      };
      faqs: FaqItem[];
    };
    groups: {
      title: string;
      shortDescription: string;
      fullDescription: string;
      points: string[];
      items: GroupItem[];
      path: string;
    };
    programs: {
      title: string;
      shortDescription: string;
      fullDescription: string;
      items: ProgramItem[];
      path: string;
    };
  };
  approachBlock: {
    title: string;
    mainText: string;
    steps: {
      number: string;
      title: string;
      description?: string;
    }[];
    methodsText: string;
  };
  aboutBlock: {
    title: string;
    profession: string;
    bioParagraphs: string[];
    approachesIntro?: string;
    approaches?: string[];
    education?: string[];
    additionalTraining?: string[];
    experienceYears?: number | string;
    documents?: { title: string; url?: string }[];
  };
  introCallBlock: {
    title: string;
    highlightBadge: string;
    description: string;
    disclaimer: string;
    ctaText: string;
    bookingUrl?: string; // Ссылка на онлайн-запись (календарь, YClients или Telegram)
  };
  faqBlock: {
    title: string;
    items: FaqItem[];
  };
  contacts: {
    telegram?: string;
    email?: string;
    otherSocials?: { label: string; url: string }[];
    navigationBotUrl?: string; // Необязательное поле для будущего навигационного бота (пока скрыто)
  };
  legal: {
    privacyPolicyUrl?: string;
    termsOfServiceUrl?: string;
    additionalDocuments?: LegalLink[];
  };
  caseStudiesConfig: {
    enabled: boolean;
    items: {
      title: string;
      context: string;
      process: string;
      outcome: string;
    }[];
  };
}

export const siteConfig: SiteConfig = {
  specialist: {
    fullName: 'Василий Алешин',
    shortName: 'Василий Алешин',
    profession: 'Клинический психолог · Гипнотерапевт',
    heroSubtitle: 'Василий Алешин · Клинический психолог и гипнотерапевт',
    photoUrl: '', // Оставьте пустым для плейсхолдера или укажите /images/vasily-aleshin.jpg
    photoAlt: 'Портрет клинического психолога и гипнотерапевта Василия Алешина',
  },

  navigation: [
    { label: 'Запросы', path: '/#requests' },
    { label: 'Терапия', path: '/individual' },
    { label: 'Группы', path: '/groups' },
    { label: 'Программы', path: '/programs' },
  ],

  hero: {
    badge: 'Индивидуальная практика и терапевтические группы',
    title: 'Клиническая точность и живой контакт в терапии',
    description:
      'Помогаю справиться с тревогой, паническими состояниями, выгоранием и кризисными периодами. Работаем бережно, научно обоснованно и на понятном человеческом языке.',
    primaryCtaText: 'Ознакомительный созвон',
    ctaSubtext: 'Бесплатно · 10–15 минут · Видео или аудио',
    secondaryCtaText: 'С какими запросами я работаю',
    secondaryCtaTarget: '#requests',
  },

  requestsBlock: {
    title: 'С чем можно обратиться',
    lead: 'Не обязательно заранее знать точную причину переживаний или формулировать запрос. Начать можно с того, что беспокоит вас сейчас.',
    items: [
      {
        id: 'anxiety',
        title: 'Тревога и панические состояния',
        description:
          'Трудно расслабиться. Мысли возвращаются к худшему сценарию. Пугают приступы тревоги и телесные ощущения.',
        links: [
          { label: 'Индивидуальная терапия', href: '/individual' },
          { label: 'Panic Attack Club', href: '/programs' },
        ],
      },
      {
        id: 'exhaustion',
        title: 'Истощение и постоянное напряжение',
        description:
          'Вроде справляетесь, но сил всё меньше. Всё держится на контроле, а отдых не восстанавливает.',
        links: [
          { label: 'Индивидуальная терапия', href: '/individual' },
          { label: 'Терапевтическая группа «НОРМА»', href: 'https://norma.sintauto.ru', isExternal: true },
        ],
      },
      {
        id: 'relationships',
        title: 'Отношения и личные границы',
        description:
          'Сложно отказать, говорить о своих потребностях и выдерживать чужое недовольство. В отношениях повторяются похожие ситуации.',
        links: [
          { label: 'Индивидуальная терапия', href: '/individual' },
          { label: 'Терапевтические группы', href: '/groups' },
        ],
      },
      {
        id: 'trauma',
        title: 'Последствия тяжёлого опыта',
        description:
          'Событие осталось в прошлом, но воспоминания, напряжение или избегание продолжают влиять на повседневную жизнь.',
        links: [
          { label: 'Индивидуальная терапия', href: '/individual' },
        ],
      },
      {
        id: 'psychosomatics',
        title: 'Психосоматика, аллергия и кожные проявления',
        description:
          'Хотите разобраться в роли стресса и эмоциональных реакций в переживании симптомов и повседневной жизни с ними.',
        links: [
          { label: 'Индивидуальная терапия', href: '/individual' },
          { label: 'Программа «Стоп-аллергия»', href: 'https://allergy.allergynet.ru', isExternal: true },
        ],
        subtext: 'Психологическая работа — с учётом медицинской диагностики и лечения.',
      },
    ],
  },

  formatsBlock: {
    title: 'Как можно работать со мной',
    individual: {
      title: 'Индивидуальная терапия',
      shortDescription:
        'Персональная работа с вашим запросом в согласованном темпе и формате (разовые встречи или долгосрочно).',
      fullDescription:
        'Персональная работа с вашим запросом, историей и повторяющимися реакциями. Вместе определяем, над чем будем работать, и обсуждаем дальнейший процесс.',
      prices: {
        single: '15 000 ₽',
        package6: '90 000 ₽',
      },
      ctaText: 'Записаться на ознакомительный созвон',
      path: '/individual',
      longTermTeaser: {
        title: 'Долгосрочная терапия',
        text: 'Регулярная индивидуальная работа, когда важно последовательно разбираться в повторяющихся трудностях, пробовать изменения в повседневной жизни и возвращаться к их обсуждению на встречах.',
        caption: 'Форматы на 3, 6 и 12 месяцев',
        linkText: 'Подробнее о долгосрочной терапии',
        path: '/long-term',
      },
    },
    longTermTherapy: {
      path: '/long-term',
      badge: 'Индивидуальная работа с Василием Алешиным',
      title: 'Долгосрочная терапия',
      description:
        'Для работы с трудностями, которые повторяются и затрагивают разные стороны жизни: состояние, отношения, самооценку и привычные способы реагирования. Мы согласуем цели, регулярно встречаемся и обсуждаем, что меняется в вашей повседневной жизни.',
      highlightLine: '3, 6 или 12 месяцев',
      ctaText: 'Обсудить формат на ознакомительном созвоне',
      ctaSubtext: 'Бесплатно · 10–15 минут',
      whenSuitable: {
        title: 'Когда стоит рассмотреть этот формат',
        situations: [
          '«Я понимаю, что со мной происходит, но продолжаю реагировать привычным образом».',
          '«В разных отношениях повторяются похожие трудности».',
          '«Тревога, напряжение или самокритика возвращаются».',
          '«Мне трудно отказывать, говорить о своих потребностях и выдерживать чужое недовольство».',
          '«Пережитый опыт продолжает влиять на мою жизнь».',
          '«Хочу последовательно работать над несколькими связанными запросами».',
        ],
        caption: 'Подходящий формат и продолжительность обсуждаются с учётом вашей ситуации.',
      },
      topics: {
        title: 'С чем работаем',
        items: [
          { text: 'Тревога и привычные способы справляться с напряжением.' },
          { text: 'Самооценка, самокритика и зависимость от чужой оценки.' },
          { text: 'Отношения, близость, конфликты и личные границы.' },
          { text: 'Последствия тяжёлого опыта.' },
          { text: 'Эмоциональное истощение и повторяющаяся перегрузка.' },
          {
            text: 'Психосоматические запросы и переживания, связанные с телесными симптомами.',
            subtext: 'С учётом медицинской диагностики и лечения.',
          },
        ],
      },
      whyLongTerm: {
        title: 'Время для изменений в реальной жизни',
        text: 'Между встречами вы сталкиваетесь с обычными ситуациями: разговорами, решениями, конфликтами и нагрузкой. В терапии можно возвращаться к этому опыту, замечать, что получилось, разбирать трудности и корректировать дальнейшую работу.',
        benefits: [
          {
            title: 'Последовательность',
            text: 'Можно возвращаться к связанным темам и сохранять общий контекст работы.',
          },
          {
            title: 'Внимание к повторяющимся реакциям',
            text: 'Есть возможность наблюдать, как похожие трудности проявляются в разных обстоятельствах.',
          },
          {
            title: 'Практика между встречами',
            text: 'Можно пробовать новые способы действий и обсуждать полученный опыт.',
          },
          {
            title: 'Отслеживание динамики',
            text: 'Мы периодически возвращаемся к целям и обсуждаем, какие изменения вы замечаете и что требует другого подхода.',
          },
        ],
      },
      periods: [
        {
          duration: '3 месяца',
          subtitle: 'Согласованный период регулярной работы',
          description:
            'Определяем приоритеты, работаем с выбранными запросами и обсуждаем первые изменения и дальнейшие задачи.',
          price: undefined,
          frequency: undefined,
          sessionCountAndDuration: undefined,
        },
        {
          duration: '6 месяцев',
          subtitle: 'Последовательная работа со связанными темами',
          description:
            'Предусматриваем больше времени для исследования повторяющихся трудностей, практики между встречами и обсуждения того, как изменения проявляются в разных ситуациях.',
          price: undefined,
          frequency: undefined,
          sessionCountAndDuration: undefined,
        },
        {
          duration: '12 месяцев',
          subtitle: 'Продолжительный горизонт индивидуальной работы',
          description:
            'Согласуем длительный период для работы со связанными запросами, наблюдения за динамикой и пересмотра целей по мере изменений в жизни.',
          price: undefined,
          frequency: undefined,
          sessionCountAndDuration: undefined,
        },
      ],
      generalPeriodClarification:
        'Длительность обсуждается индивидуально. Цели и ход работы пересматриваются в процессе терапии.',
      steps: [
        {
          number: '01',
          title: 'Ознакомительный созвон',
          description: 'Обсуждаем запрос и знакомимся.',
        },
        {
          number: '02',
          title: 'Начало терапевтической работы',
          description: 'Уточняем ситуацию, цели и условия.',
        },
        {
          number: '03',
          title: 'Регулярные встречи',
          description: 'Работаем с согласованными темами и обсуждаем опыт между встречами.',
        },
        {
          number: '04',
          title: 'Обсуждение динамики',
          description: 'Возвращаемся к целям и при необходимости корректируем работу.',
        },
        {
          number: '05',
          title: 'Подведение итогов',
          description: 'Обсуждаем результаты и решение о завершении или продолжении.',
        },
      ],
      terms: {
        paymentTerms: undefined,
        rescheduleAndCancellationPolicy: undefined,
        contactBetweenSessions: undefined,
      },
      faqs: [
        {
          question: 'Как выбрать длительность?',
          answer:
            'На ознакомительном созвоне можно обсудить вашу ситуацию и возможный формат. Цели и условия уточняются в начале терапевтической работы.',
        },
        {
          question: 'Это фиксированная программа занятий?',
          answer:
            'Нет. Содержание индивидуальной терапии определяется вашими запросами и ходом работы.',
        },
        {
          question: 'Гарантирует ли длительность результат?',
          answer:
            'Продолжительность даёт время для последовательной работы, но сама по себе не гарантирует результат. В процессе мы обсуждаем динамику и при необходимости пересматриваем подход.',
        },
      ],
    },
    groups: {
      title: 'Терапевтические группы',
      shortDescription:
        'В группе можно исследовать свои реакции в общении, получать обратную связь и пробовать новые модели поведения в безопасной среде.',
      fullDescription:
        'В группе можно исследовать свои реакции в общении, получать обратную связь и пробовать новые способы строить отношения.',
      points: [
        'Участник может замечать свои привычные способы взаимодействия в безопасной обстановке.',
        'Работа включает живой контакт с ведущим и другими участниками группы.',
        'Конкретные условия и формат зависят от выбранной группы.',
      ],
      path: '/groups',
      items: [
        {
          id: 'norma',
          name: '«НОРМА»',
          typeLabel: 'Терапевтическая группа',
          description:
            'Терапевтическая группа для работы с тревогой, напряжением, истощением и привычными способами реагирования.',
          url: 'https://norma.sintauto.ru',
          waitlistUrl: '',
          questionUrl: '',
        },
        {
          id: 'sostoyanie',
          name: '«СОСТОЯНИЕ»',
          typeLabel: 'Групповой формат',
          description:
            'Проведённый групповой формат, посвящённый работе с состоянием и личными запросами участников.',
          url: '',
          waitlistUrl: '',
          questionUrl: '',
          isConducted: true,
          statusNote: 'Проведённый формат',
        },
      ],
    },
    programs: {
      title: 'Программы и приложения',
      shortDescription:
        'Самостоятельные практики, курсы и инструменты поддержки между сессиями или для автономной работы.',
      fullDescription:
        'Самостоятельные практики, курсы и инструменты в Telegram для поддержки психоэмоционального состояния.',
      path: '/programs',
      items: [
        {
          id: 'panic-attack-club',
          name: 'Panic Attack Club',
          description:
            'Приложение в Telegram: SOS-практики, 14-дневный курс и отслеживание динамики состояния.',
          landingUrl: '', // Адрес отдельного лендинга (показывать только при наличии)
          telegramUrl: '', // Ссылка на бот / приложение в Telegram (показывать только при наличии)
        },
        {
          id: 'stop-allergy',
          name: '«Стоп-аллергия»',
          description:
            'Программа по психологическим аспектам аллергии, связанным переживаниям и работе со стрессом.',
          landingUrl: 'https://allergy.allergynet.ru',
          subtext: 'Психологическая работа — с учётом медицинской диагностики и лечения.',
        },
      ],
    },
  },

  approachBlock: {
    title: 'Как проходит работа',
    mainText:
      'Мы исследуем, что запускает трудную реакцию, что её поддерживает и как она проявляется в мыслях, эмоциях, теле и поведении. Затем пробуем изменения и наблюдаем, как они переносятся в повседневную жизнь.',
    steps: [
      {
        number: '01',
        title: 'Разбираемся в вашем запросе.',
        description: 'Исследуем, что именно происходит сейчас, как проявляются трудности и чего хотелось бы достичь.',
      },
      {
        number: '02',
        title: 'Определяем, над чем будем работать.',
        description: 'Выбираем фокус внимания, формулируем реалистичные ориентиры и подбираем подходящие методы.',
      },
      {
        number: '03',
        title: 'Отслеживаем изменения и обсуждаем дальнейшие шаги.',
        description: 'Смотрим, как новые реакции проявляются в реальной жизни, закрепляем результат и корректируем процесс.',
      },
    ],
    methodsText:
      'В зависимости от запроса я использую гипнотерапию, когнитивно-поведенческие подходы, телесные и дыхательные техники. Выбор методов обсуждается в процессе работы.',
  },

  aboutBlock: {
    title: 'Василий Алешин',
    profession: 'Клинический психолог и гипнотерапевт',
    bioParagraphs: [
      'Веду индивидуальную терапию и терапевтические группы. Работаю с состоянием человека, его переживаниями и повторяющимися реакциями.',
      'В групповой работе уделяю внимание тому, как привычные способы общения проявляются в контакте с другими участниками.',
    ],
    approachesIntro:
      'В работе опираюсь на синтез клинических и психофизиологических подходов, учитывающий взаимосвязь нервной системы, соматических реакций и эмоционального опыта:',
    approaches: [
      'Клиническая психология',
      'Психосоматика и психофизиология',
      'Физиология стресса и вегетативной регуляции',
      'Провокативная терапия',
      'Эмоционально-образная терапия',
      'Медицинская гипнотерапия',
    ],
    education: undefined,
    additionalTraining: undefined,
    experienceYears: undefined,
    documents: undefined,
  },

  introCallBlock: {
    title: 'Познакомимся перед началом терапии',
    highlightBadge: 'Бесплатный ознакомительный созвон · 10–15 минут',
    description:
      'Расскажите о своём запросе, задайте вопросы и познакомьтесь со мной. Я задам уточняющие вопросы и обозначу, как предлагаю работать с вашей ситуацией. Вы сможете составить первое впечатление о моём подходе и понять, насколько вам комфортно со мной в диалоге.',
    disclaimer:
      'Это знакомство и обсуждение возможной работы, а не пробная терапевтическая сессия.',
    ctaText: 'Записаться на ознакомительный созвон',
    bookingUrl: '',
  },

  faqBlock: {
    title: 'Частые вопросы',
    items: [
      {
        question: 'Ознакомительный созвон действительно бесплатный?',
        answer:
          'Да. Он длится 10–15 минут и посвящён знакомству, вопросам и обсуждению возможной работы. Это не терапевтическая сессия.',
      },
      {
        question: 'Нужно ли заранее точно сформулировать запрос?',
        answer:
          'Нет. Достаточно рассказать, что вас беспокоит и что хотелось бы изменить.',
      },
      {
        question: 'Обязательно ли использовать гипноз?',
        answer:
          'Методы работы обсуждаются с учётом вашего запроса. Использование гипнотерапии можно отдельно обсудить на ознакомительном созвоне.',
      },
      {
        question: 'Сколько стоит индивидуальная терапия?',
        answer: 'Одна сессия — 15 000 ₽. Пакет из 6 сессий — 90 000 ₽.',
      },
      {
        question: 'Можно ли обсудить, какой формат мне подойдёт?',
        answer:
          'Да. На ознакомительном созвоне можно обсудить индивидуальную работу, группу или подходящую программу.',
      },
    ],
  },

  contacts: {
    telegram: '',
    email: '',
    otherSocials: [],
    navigationBotUrl: '', // До заполнения кнопка общего бота не отображается
  },

  legal: {
    privacyPolicyUrl: '',
    termsOfServiceUrl: '',
    additionalDocuments: [],
  },

  caseStudiesConfig: {
    enabled: false,
    items: [],
  },
};

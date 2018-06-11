export default {
  ERROR_TITLE      : 'Erreur',
  MAINTENANCE_TITLE: 'Maintenance',
  NOT_FOUND_TITLE  : '404 Non trouvé',

  reference    : 'référence',
  current_day  : 'jour',
  day_reference: 'jour @:reference',

  loading_txt: 'CHARGEMENT',

  'date-picker' : 'Date / Période',
  sites         : 'Sites',
  themes        : 'Thèmes',
  notifications : 'Notifications',
  filter        : 'Filtrer',
  'no-site'     : 'Aucun site sélectionné',
  date          : 'Date',
  period        : 'Période',
  weeks         : 'Semaines',
  'day-vs-day'  : 'Jour à Jour (J-364)',
  'year-vs-year': 'Année à année (N-1)',
  'custom-date' : 'Date libre',
  by            : 'Par',
  ean           : 'EAN',
  label         : 'Libellé',
  market        : 'Marché',
  need          : 'Besoin',

  notifs: {
    receive_at_time: "reçu aujourd'hui à {dtstring}",
    receive_at_date: 'reçu le {dtstring}',
    to_read        : '<strong>{toread}</strong> notification(s) à lire sur {read}',
    nothing_to_read: 'Aucune notification à lire sur {read}'
  },

  datepicker: {
    currentDate  : 'Date sélectionnée',
    referenceDate: 'Date de comparaison'
  },

  context: {
    context      : 'Contexte',
    'date-picker': 'Choisir une date ou une période',
    sites        : 'Sites',
    themes       : 'Choisir un thème',
    summary      : '',
    notifications: 'Notifications'
  },

  app_headers: {
    summary: 'Synthèse',
    context: ''
  },

  summary: {
    title_mainStats     : 'Chiffres clés',
    title_results       : 'Résultats',
    title_fluidity      : 'Fluidité - Attente',
    title_loyalty       : 'Fidélisation',
    title_efficiency    : 'Efficacité',
    title_unreadables   : 'Illisibles',
    title_unknowns      : 'Inconnus',
    title_services      : 'Services',
    title_events        : 'Événements',
    subtitle_results    : {
      sales    : 'CA € Brut (hors essence)',
      customers: 'Clients',
      articles : 'Articles'
    },
    subtitle_loyalty    : {
      card_holders: 'Porteurs de cartes'
    },
    subtitle_unreadables: {
      sales      : 'CA €',
      unreadables: 'Nb d\'illisibles',
      customers  : 'Nb de Clients concernés',
      wastedTime : 'Temps perdu (h)'
    },
    subtitle_unknowns   : {
      sales    : 'CA €',
      unknowns : 'Nb d\'inconnus',
      customers: 'Nb de Clients concernés'
    },
    labels              : {
      totalGrossSales              : 'CA € Brut (hors essence)',
      lineFluidity                 : 'Fluidité ligne',
      planningEfficiency           : 'Efficacité Planif',
      reliability                  : 'Fiabilité CA',
      loyalty                      : 'Fidélisation',
      cashback                     : 'Cagnotage (Nb clients)',
      voucher                      : 'Bon de réduction',
      planning                     : 'Planification',
      hostesses                    : 'Hôtesses de caisse',
      articles                     : 'Articles',
      payment                      : 'Réglements',
      openingHours                 : 'Heures ouvrées KSL',
      customersPerHour             : 'Clients / H. ouvrées',
      articlesPerHour              : 'Articles / H. ouvrées',
      articlesPerHourCompanyAverage: 'Articles / H. ouvrées moyenne société',
      snacking                     : 'Sandwicherie',
      stamp                        : 'La Poste',
      giftCard                     : 'Carte cadeaux',
      spectacle                    : 'Billetterie Spectacles',
      eventsNumber                 : 'Nombre d\'événements',
      meeting                      : 'Meeting',
      culture                      : 'Billetterie Culture',
      leisure                      : 'Billetterie Loisir'
    }
  }
}

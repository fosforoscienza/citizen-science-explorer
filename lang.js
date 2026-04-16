// =============================================
// i18n — Citizen Science Explorer
// 4 languages: it, en, fr, es
// =============================================

const LANGS = {
  it: { flag: '🇮🇹', label: 'Italiano' },
  en: { flag: '🇬🇧', label: 'English' },
  fr: { flag: '🇫🇷', label: 'Français' },
  es: { flag: '🇪🇸', label: 'Español' },
};

const T = {
  // ---- ONBOARDING ----
  'onb.badge': {
    it: 'Lab-Grade Discovery', en: 'Lab-Grade Discovery',
    fr: 'Découverte Scientifique', es: 'Descubrimiento Científico'
  },
  'onb.edition': {
    it: 'Field Journal Edition', en: 'Field Journal Edition',
    fr: 'Édition Journal de Terrain', es: 'Edición Diario de Campo'
  },
  'onb.welcome': {
    it: 'Benvenuto su', en: 'Welcome to',
    fr: 'Bienvenue sur', es: 'Bienvenido a'
  },
  'onb.brand': {
    it: 'Scienza Attiva.', en: 'Active Science.',
    fr: 'Science Active.', es: 'Ciencia Activa.'
  },
  'onb.desc': {
    it: 'Trasforma la tua curiosità in ricerca scientifica. Partecipa al progetto <strong>ECO</strong> per mappare la biodiversità del Parco della Cesanella e del Colle Cimatico.',
    en: 'Turn your curiosity into scientific research. Join the <strong>ECO</strong> project to map the biodiversity of Parco della Cesanella and Colle Cimatico.',
    fr: 'Transformez votre curiosité en recherche scientifique. Participez au projet <strong>ECO</strong> pour cartographier la biodiversité du Parco della Cesanella et du Colle Cimatico.',
    es: 'Transforma tu curiosidad en investigación científica. Participa en el proyecto <strong>ECO</strong> para mapear la biodiversidad del Parco della Cesanella y del Colle Cimatico.'
  },
  'onb.cta': {
    it: 'Inizia la Scoperta', en: 'Start Exploring',
    fr: 'Commencer l\'Exploration', es: 'Empezar a Explorar'
  },
  'onb.explore_title': {
    it: 'Esplora il Territorio', en: 'Explore the Territory',
    fr: 'Explorez le Territoire', es: 'Explora el Territorio'
  },
  'onb.explore_desc': {
    it: 'Trova missioni di Citizen Science attive vicino a te.',
    en: 'Find active Citizen Science missions near you.',
    fr: 'Trouvez des missions de Science Citoyenne actives près de chez vous.',
    es: 'Encuentra misiones de Ciencia Ciudadana activas cerca de ti.'
  },
  'onb.community_title': {
    it: 'Comunità Attiva', en: 'Active Community',
    fr: 'Communauté Active', es: 'Comunidad Activa'
  },
  'onb.community_desc': {
    it: 'Condividi scoperte con la Comunità di Pratica ECO.',
    en: 'Share discoveries with the ECO Community of Practice.',
    fr: 'Partagez vos découvertes avec la Communauté de Pratique ECO.',
    es: 'Comparte descubrimientos con la Comunidad de Práctica ECO.'
  },
  'onb.project_title': {
    it: 'Il Progetto ECO', en: 'The ECO Project',
    fr: 'Le Projet ECO', es: 'El Proyecto ECO'
  },
  'onb.project_subtitle': {
    it: 'Ecosistema di Comunità = Opportunità',
    en: 'Community Ecosystem = Opportunity',
    fr: 'Écosystème Communautaire = Opportunité',
    es: 'Ecosistema Comunitario = Oportunidad'
  },
  'onb.project_desc': {
    it: 'Un progetto partecipativo tra Senigallia e Chiampo per contrastare la perdita di biodiversità, valorizzare territori marginali e creare comunità consapevoli.',
    en: 'A participatory project between Senigallia and Chiampo to counter biodiversity loss, enhance marginal territories and build aware communities.',
    fr: 'Un projet participatif entre Senigallia et Chiampo pour contrer la perte de biodiversité, valoriser les territoires marginaux et créer des communautés conscientes.',
    es: 'Un proyecto participativo entre Senigallia y Chiampo para contrarrestar la pérdida de biodiversidad, valorizar territorios marginales y crear comunidades conscientes.'
  },
  'onb.cesanella': {
    it: 'Senigallia — 12 ettari', en: 'Senigallia — 12 hectares',
    fr: 'Senigallia — 12 hectares', es: 'Senigallia — 12 hectáreas'
  },
  'onb.cimatico': {
    it: 'Chiampo — 10.580 m²', en: 'Chiampo — 10,580 m²',
    fr: 'Chiampo — 10 580 m²', es: 'Chiampo — 10.580 m²'
  },
  'onb.cs_label': {
    it: 'Cos\'è la Citizen Science', en: 'What is Citizen Science',
    fr: 'Qu\'est-ce que la Science Citoyenne', es: '¿Qué es la Ciencia Ciudadana?'
  },
  'onb.cs_title': {
    it: 'Scienza dei Cittadini', en: 'Citizen Science',
    fr: 'Science Citoyenne', es: 'Ciencia Ciudadana'
  },
  'onb.cs_desc': {
    it: 'La Citizen Science coinvolge la comunità nella raccolta, analisi e categorizzazione di dati scientifici. Con le tue osservazioni contribuisci a mappare la biodiversità locale e a proteggere gli ecosistemi.',
    en: 'Citizen Science engages the community in collecting, analyzing and categorizing scientific data. Your observations help map local biodiversity and protect ecosystems.',
    fr: 'La Science Citoyenne implique la communauté dans la collecte, l\'analyse et la catégorisation de données scientifiques. Vos observations contribuent à cartographier la biodiversité locale et à protéger les écosystèmes.',
    es: 'La Ciencia Ciudadana involucra a la comunidad en la recolección, análisis y categorización de datos científicos. Tus observaciones contribuyen a mapear la biodiversidad local y proteger los ecosistemas.'
  },

  // ---- DISCOVERY ----
  'disc.explore': {
    it: 'Esplora', en: 'Explore', fr: 'Explorer', es: 'Explorar'
  },
  'disc.missions': {
    it: 'Missioni Attive', en: 'Active Missions',
    fr: 'Missions Actives', es: 'Misiones Activas'
  },
  'disc.missions_desc': {
    it: 'Partecipa alle attività di Citizen Science del progetto ECO nei territori di Senigallia e Chiampo.',
    en: 'Join the Citizen Science activities of the ECO project in the territories of Senigallia and Chiampo.',
    fr: 'Participez aux activités de Science Citoyenne du projet ECO dans les territoires de Senigallia et Chiampo.',
    es: 'Participa en las actividades de Ciencia Ciudadana del proyecto ECO en los territorios de Senigallia y Chiampo.'
  },
  'disc.m1_tag': {
    it: 'BioBlitz', en: 'BioBlitz', fr: 'BioBlitz', es: 'BioBlitz'
  },
  'disc.m1_deadline': {
    it: 'Scad. 30 Giu', en: 'Due Jun 30', fr: 'Éch. 30 Juin', es: 'Vence 30 Jun'
  },
  'disc.m1_title': {
    it: 'Censimento Flora Primaverile', en: 'Spring Flora Census',
    fr: 'Recensement de la Flore Printanière', es: 'Censo de Flora Primaveral'
  },
  'disc.m1_desc': {
    it: 'Documenta le specie vegetali che trovi nel Parco della Cesanella. Fotografa, localizza e descrivi ogni osservazione.',
    en: 'Document the plant species you find in Parco della Cesanella. Photograph, locate and describe each observation.',
    fr: 'Documentez les espèces végétales que vous trouvez dans le Parco della Cesanella. Photographiez, localisez et décrivez chaque observation.',
    es: 'Documenta las especies vegetales que encuentres en el Parco della Cesanella. Fotografía, localiza y describe cada observación.'
  },
  'disc.m2_tag': {
    it: 'Impollinatori', en: 'Pollinators', fr: 'Pollinisateurs', es: 'Polinizadores'
  },
  'disc.m2_status': {
    it: 'In corso', en: 'Ongoing', fr: 'En cours', es: 'En curso'
  },
  'disc.m2_title': {
    it: 'Monitoraggio Impollinatori', en: 'Pollinator Monitoring',
    fr: 'Surveillance des Pollinisateurs', es: 'Monitoreo de Polinizadores'
  },
  'disc.m2_desc': {
    it: 'Osserva e registra la presenza di api, farfalle e altri impollinatori. Il progetto ECO prevede laboratori sull\'apicoltura urbana.',
    en: 'Observe and record the presence of bees, butterflies and other pollinators. The ECO project includes urban beekeeping workshops.',
    fr: 'Observez et enregistrez la présence d\'abeilles, papillons et autres pollinisateurs. Le projet ECO comprend des ateliers d\'apiculture urbaine.',
    es: 'Observa y registra la presencia de abejas, mariposas y otros polinizadores. El proyecto ECO incluye talleres de apicultura urbana.'
  },
  'disc.m3_tag': {
    it: 'Risorse Idriche', en: 'Water Resources',
    fr: 'Ressources Hydriques', es: 'Recursos Hídricos'
  },
  'disc.m3_status': {
    it: 'Stagionale', en: 'Seasonal', fr: 'Saisonnier', es: 'Estacional'
  },
  'disc.m3_title': {
    it: 'Torrente Chiampo: Stato di Salute', en: 'Chiampo Stream: Health Status',
    fr: 'Torrent Chiampo : État de Santé', es: 'Torrente Chiampo: Estado de Salud'
  },
  'disc.m3_desc': {
    it: 'Documenta lo stato del torrente Chiampo: presenza di fauna acquatica, qualità dell\'acqua e vegetazione riparia.',
    en: 'Document the status of the Chiampo stream: aquatic fauna, water quality and riparian vegetation.',
    fr: 'Documentez l\'état du torrent Chiampo : faune aquatique, qualité de l\'eau et végétation riveraine.',
    es: 'Documenta el estado del torrente Chiampo: fauna acuática, calidad del agua y vegetación ribereña.'
  },
  'disc.m4_tag': {
    it: 'Micologia', en: 'Mycology', fr: 'Mycologie', es: 'Micología'
  },
  'disc.m4_status': {
    it: 'Autunno', en: 'Autumn', fr: 'Automne', es: 'Otoño'
  },
  'disc.m4_title': {
    it: 'Censimento Funghi del Bosco', en: 'Forest Mushroom Census',
    fr: 'Recensement des Champignons', es: 'Censo de Hongos del Bosque'
  },
  'disc.m4_desc': {
    it: 'Identifica e cataloga le specie fungine presenti nelle aree boschive. Contribuisci alla mappa della biodiversità locale.',
    en: 'Identify and catalog fungal species in woodland areas. Contribute to the local biodiversity map.',
    fr: 'Identifiez et cataloguez les espèces fongiques dans les zones boisées. Contribuez à la carte de la biodiversité locale.',
    es: 'Identifica y cataloga las especies fúngicas en áreas boscosas. Contribuye al mapa de la biodiversidad local.'
  },
  'disc.m4_loc': {
    it: 'Entrambi i territori', en: 'Both territories',
    fr: 'Les deux territoires', es: 'Ambos territorios'
  },
  'disc.guide_label': {
    it: 'Risorsa ECO', en: 'ECO Resource', fr: 'Ressource ECO', es: 'Recurso ECO'
  },
  'disc.guide_title': {
    it: 'Guida Galattica alla Biodiversità', en: 'Galactic Guide to Biodiversity',
    fr: 'Guide Galactique de la Biodiversité', es: 'Guía Galáctica de la Biodiversidad'
  },
  'disc.guide_desc': {
    it: 'Percorsi e strategie per comprendere e salvaguardare la biodiversità. Con font ad alta leggibilità e illustrazioni uniche.',
    en: 'Pathways and strategies to understand and protect biodiversity. With high-readability fonts and unique illustrations.',
    fr: 'Parcours et stratégies pour comprendre et sauvegarder la biodiversité. Avec des polices haute lisibilité et des illustrations uniques.',
    es: 'Rutas y estrategias para comprender y salvaguardar la biodiversidad. Con fuentes de alta legibilidad e ilustraciones únicas.'
  },
  'disc.guide_cta': {
    it: 'Scopri di Più', en: 'Learn More', fr: 'En Savoir Plus', es: 'Descubre Más'
  },

  // ---- RECORD ----
  'rec.new': {
    it: 'Nuova Osservazione', en: 'New Observation',
    fr: 'Nouvelle Observation', es: 'Nueva Observación'
  },
  'rec.label': {
    it: 'Raccolta Dati', en: 'Data Collection',
    fr: 'Collecte de Données', es: 'Recolección de Datos'
  },
  'rec.title': {
    it: 'Registra Osservazione', en: 'Log Observation',
    fr: 'Enregistrer Observation', es: 'Registrar Observación'
  },
  'rec.desc': {
    it: 'Documenta la tua scoperta per contribuire alla mappatura della biodiversità locale del progetto ECO.',
    en: 'Document your finding to help map the local biodiversity of the ECO project.',
    fr: 'Documentez votre découverte pour contribuer à la cartographie de la biodiversité locale du projet ECO.',
    es: 'Documenta tu descubrimiento para contribuir al mapeo de la biodiversidad local del proyecto ECO.'
  },
  'rec.type_label': {
    it: 'Tipo di Osservazione', en: 'Observation Type',
    fr: 'Type d\'Observation', es: 'Tipo de Observación'
  },
  'rec.flora': { it: 'Flora', en: 'Flora', fr: 'Flore', es: 'Flora' },
  'rec.fauna': { it: 'Fauna', en: 'Fauna', fr: 'Faune', es: 'Fauna' },
  'rec.habitat': { it: 'Habitat', en: 'Habitat', fr: 'Habitat', es: 'Hábitat' },
  'rec.evidence': {
    it: 'Evidenza Visiva', en: 'Visual Evidence',
    fr: 'Preuve Visuelle', es: 'Evidencia Visual'
  },
  'rec.capture': {
    it: 'Scatta Foto', en: 'Capture Photo',
    fr: 'Prendre Photo', es: 'Tomar Foto'
  },
  'rec.upload': {
    it: 'Carica File', en: 'Upload File',
    fr: 'Charger Fichier', es: 'Subir Archivo'
  },
  'rec.species': {
    it: 'Nome Specie', en: 'Species Name',
    fr: 'Nom de l\'Espèce', es: 'Nombre de Especie'
  },
  'rec.species_hint': {
    it: '(se conosciuta)', en: '(if known)', fr: '(si connu)', es: '(si se conoce)'
  },
  'rec.species_placeholder': {
    it: 'Es. Quercus pubescens, Papilio machaon...',
    en: 'E.g. Quercus pubescens, Papilio machaon...',
    fr: 'Ex. Quercus pubescens, Papilio machaon...',
    es: 'Ej. Quercus pubescens, Papilio machaon...'
  },
  'rec.location': {
    it: 'Località', en: 'Location', fr: 'Localité', es: 'Ubicación'
  },
  'rec.autodetect': {
    it: 'Auto-rileva', en: 'Auto-detect', fr: 'Auto-détecter', es: 'Auto-detectar'
  },
  'rec.location_hint': {
    it: 'Tocca "Auto-rileva" per la posizione',
    en: 'Tap "Auto-detect" for your position',
    fr: 'Appuyez sur "Auto-détecter" pour la position',
    es: 'Toca "Auto-detectar" para tu posición'
  },
  'rec.notes': {
    it: 'Note di Campo', en: 'Field Notes',
    fr: 'Notes de Terrain', es: 'Notas de Campo'
  },
  'rec.notes_placeholder': {
    it: 'Descrivi l\'esemplare, il comportamento osservato o l\'ambiente circostante...',
    en: 'Describe the specimen, observed behavior or surrounding environment...',
    fr: 'Décrivez le spécimen, le comportement observé ou l\'environnement...',
    es: 'Describe el ejemplar, el comportamiento observado o el entorno...'
  },
  'rec.submit': {
    it: 'Invia Osservazione', en: 'Submit Observation',
    fr: 'Envoyer Observation', es: 'Enviar Observación'
  },

  // ---- IMPACT ----
  'imp.explorer': {
    it: 'Esploratore Naturalista', en: 'Naturalist Explorer',
    fr: 'Explorateur Naturaliste', es: 'Explorador Naturalista'
  },
  'imp.level': {
    it: 'Livello', en: 'Level', fr: 'Niveau', es: 'Nivel'
  },
  'imp.member': {
    it: 'Membro dal 2024', en: 'Member since 2024',
    fr: 'Membre depuis 2024', es: 'Miembro desde 2024'
  },
  'imp.observations': {
    it: 'Osservazioni', en: 'Observations', fr: 'Observations', es: 'Observaciones'
  },
  'imp.species': {
    it: 'Specie Trovate', en: 'Species Found',
    fr: 'Espèces Trouvées', es: 'Especies Encontradas'
  },
  'imp.impact': {
    it: 'Il Tuo Impatto', en: 'Your Impact',
    fr: 'Votre Impact', es: 'Tu Impacto'
  },
  'imp.monthly': {
    it: 'Contributo Mensile', en: 'Monthly Contribution',
    fr: 'Contribution Mensuelle', es: 'Contribución Mensual'
  },
  'imp.start': {
    it: 'Inizia ad esplorare!', en: 'Start exploring!',
    fr: 'Commencez à explorer !', es: '¡Empieza a explorar!'
  },
  'imp.badges': {
    it: 'Badge Ottenuti', en: 'Badges Earned',
    fr: 'Badges Obtenus', es: 'Insignias Obtenidas'
  },
  'imp.pioneer': { it: 'Pioniere', en: 'Pioneer', fr: 'Pionnier', es: 'Pionero' },
  'imp.water': {
    it: 'Custode Idrico', en: 'Water Guardian',
    fr: 'Gardien des Eaux', es: 'Guardián del Agua'
  },
  'imp.mycologist': {
    it: 'Micologo', en: 'Mycologist', fr: 'Mycologue', es: 'Micólogo'
  },
  'imp.obs_singular': {
    it: 'osservazione', en: 'observation', fr: 'observation', es: 'observación'
  },
  'imp.obs_plural': {
    it: 'osservazioni', en: 'observations', fr: 'observations', es: 'observaciones'
  },
  'imp.next_challenge': {
    it: 'Prossima Sfida', en: 'Next Challenge',
    fr: 'Prochain Défi', es: 'Próximo Desafío'
  },
  'imp.start_now': {
    it: 'Inizia Ora', en: 'Start Now', fr: 'Commencer', es: 'Empezar'
  },
  'imp.recent': {
    it: 'Osservazioni Recenti', en: 'Recent Observations',
    fr: 'Observations Récentes', es: 'Observaciones Recientes'
  },
  'imp.challenge_0': {
    it: 'Registra la tua prima osservazione per sbloccare il badge "Pioniere" e iniziare il tuo viaggio nella Citizen Science!',
    en: 'Log your first observation to unlock the "Pioneer" badge and start your Citizen Science journey!',
    fr: 'Enregistrez votre première observation pour débloquer le badge "Pionnier" et commencer votre aventure en Science Citoyenne !',
    es: '¡Registra tu primera observación para desbloquear la insignia "Pionero" y comenzar tu viaje en la Ciencia Ciudadana!'
  },
  'imp.challenge_5': {
    it: 'per sbloccare il badge "Custode Idrico". Esplora le risorse idriche del territorio!',
    en: 'to unlock the "Water Guardian" badge. Explore the territory\'s water resources!',
    fr: 'pour débloquer le badge "Gardien des Eaux". Explorez les ressources hydriques du territoire !',
    es: 'para desbloquear la insignia "Guardián del Agua". ¡Explora los recursos hídricos del territorio!'
  },
  'imp.challenge_10': {
    it: 'per sbloccare il badge "Micologo". Identifica specie di funghi nel bosco locale!',
    en: 'to unlock the "Mycologist" badge. Identify mushroom species in the local woods!',
    fr: 'pour débloquer le badge "Mycologue". Identifiez les espèces de champignons dans les bois locaux !',
    es: 'para desbloquear la insignia "Micólogo". ¡Identifica especies de hongos en el bosque local!'
  },
  'imp.challenge_done': {
    it: 'Sei un vero esploratore naturalista! Continua a contribuire alla mappatura della biodiversità del progetto ECO.',
    en: 'You\'re a true naturalist explorer! Keep contributing to the ECO project\'s biodiversity mapping.',
    fr: 'Vous êtes un véritable explorateur naturaliste ! Continuez à contribuer à la cartographie de la biodiversité du projet ECO.',
    es: '¡Eres un verdadero explorador naturalista! Sigue contribuyendo al mapeo de la biodiversidad del proyecto ECO.'
  },
  'imp.no_notes': {
    it: 'Nessuna nota', en: 'No notes', fr: 'Aucune note', es: 'Sin notas'
  },
  'imp.registered': {
    it: 'registrata', en: 'recorded', fr: 'enregistrée', es: 'registrada'
  },
  'imp.registered_plural': {
    it: 'registrate', en: 'recorded', fr: 'enregistrées', es: 'registradas'
  },
  'imp.total': {
    it: 'contributi totali', en: 'total contributions',
    fr: 'contributions totales', es: 'contribuciones totales'
  },

  // ---- GUIDE ----
  'guide.title': {
    it: 'Guida alla Biodiversità', en: 'Biodiversity Guide',
    fr: 'Guide de la Biodiversité', es: 'Guía de la Biodiversidad'
  },
  'guide.label': {
    it: 'Progetto ECO', en: 'ECO Project', fr: 'Projet ECO', es: 'Proyecto ECO'
  },
  'guide.main_title': {
    it: 'Guida Galattica alla Biodiversità', en: 'Galactic Guide to Biodiversity',
    fr: 'Guide Galactique de la Biodiversité', es: 'Guía Galáctica de la Biodiversidad'
  },
  'guide.main_desc': {
    it: 'Percorsi e strategie per comprendere e salvaguardare la biodiversità. Ispirata ai principi della Carta per l\'educazione alla Biodiversità.',
    en: 'Pathways and strategies to understand and protect biodiversity. Inspired by the principles of the Biodiversity Education Charter.',
    fr: 'Parcours et stratégies pour comprendre et sauvegarder la biodiversité. Inspiré par les principes de la Charte pour l\'éducation à la Biodiversité.',
    es: 'Rutas y estrategias para comprender y salvaguardar la biodiversidad. Inspirada en los principios de la Carta para la Educación en Biodiversidad.'
  },
  'guide.sheets': {
    it: 'Schede Didattiche', en: 'Educational Sheets',
    fr: 'Fiches Pédagogiques', es: 'Fichas Didácticas'
  },
  'guide.eco_title': {
    it: 'Ecosistema del Parco', en: 'Park Ecosystem',
    fr: 'Écosystème du Parc', es: 'Ecosistema del Parque'
  },
  'guide.eco_text': {
    it: '<p>Il <strong>Parco della Cesanella</strong> a Senigallia si estende su 12 ettari e ospita oltre 4.000 piante arboree e arbustive. Originariamente piantate in filari per mitigare l\'impatto della terza corsia dell\'A14, oggi formano un ecosistema in evoluzione.</p><p>Il <strong>Colle Cimatico</strong> a Chiampo ospita un\'associazione vegetale di alberi ad alto fusto, arbusti ed erbe con un elevato grado di naturalità.</p>',
    en: '<p><strong>Parco della Cesanella</strong> in Senigallia spans 12 hectares and hosts over 4,000 trees and shrubs. Originally planted in rows to mitigate the impact of the A14 motorway\'s third lane, they now form an evolving ecosystem.</p><p><strong>Colle Cimatico</strong> in Chiampo hosts a plant association of tall trees, shrubs and herbs with a high degree of naturalness.</p>',
    fr: '<p>Le <strong>Parco della Cesanella</strong> à Senigallia s\'étend sur 12 hectares et abrite plus de 4 000 arbres et arbustes. Plantés en rangées pour atténuer l\'impact de la troisième voie de l\'A14, ils forment aujourd\'hui un écosystème en évolution.</p><p>Le <strong>Colle Cimatico</strong> à Chiampo abrite une association végétale d\'arbres de haute futaie, d\'arbustes et d\'herbes avec un degré élevé de naturalité.</p>',
    es: '<p>El <strong>Parco della Cesanella</strong> en Senigallia se extiende sobre 12 hectáreas y alberga más de 4.000 árboles y arbustos. Plantados en hileras para mitigar el impacto del tercer carril de la A14, hoy forman un ecosistema en evolución.</p><p>El <strong>Colle Cimatico</strong> en Chiampo alberga una asociación vegetal de árboles de gran porte, arbustos y hierbas con un alto grado de naturalidad.</p>'
  },
  'guide.poll_title': {
    it: 'Impollinatori e Apicoltura', en: 'Pollinators and Beekeeping',
    fr: 'Pollinisateurs et Apiculture', es: 'Polinizadores y Apicultura'
  },
  'guide.poll_text': {
    it: '<p>Il progetto ECO prevede laboratori dedicati al <strong>mondo delle api</strong>, realizzati con il supporto dell\'Associazione Provinciale Apicoltori di Vicenza.</p><p><strong>Perché sono importanti?</strong> Le api e gli altri impollinatori sono responsabili della riproduzione di oltre l\'80% delle piante da fiore selvatiche e del 75% delle colture alimentari globali.</p>',
    en: '<p>The ECO project includes workshops dedicated to the <strong>world of bees</strong>, carried out with the support of the Provincial Beekeepers Association of Vicenza.</p><p><strong>Why are they important?</strong> Bees and other pollinators are responsible for the reproduction of over 80% of wild flowering plants and 75% of global food crops.</p>',
    fr: '<p>Le projet ECO comprend des ateliers dédiés au <strong>monde des abeilles</strong>, réalisés avec le soutien de l\'Association Provinciale des Apiculteurs de Vicence.</p><p><strong>Pourquoi sont-ils importants ?</strong> Les abeilles et autres pollinisateurs sont responsables de la reproduction de plus de 80 % des plantes à fleurs sauvages et de 75 % des cultures alimentaires mondiales.</p>',
    es: '<p>El proyecto ECO incluye talleres dedicados al <strong>mundo de las abejas</strong>, realizados con el apoyo de la Asociación Provincial de Apicultores de Vicenza.</p><p><strong>¿Por qué son importantes?</strong> Las abejas y otros polinizadores son responsables de la reproducción de más del 80% de las plantas con flores silvestres y del 75% de los cultivos alimentarios globales.</p>'
  },
  'guide.water_title': {
    it: 'Risorse Idriche', en: 'Water Resources',
    fr: 'Ressources Hydriques', es: 'Recursos Hídricos'
  },
  'guide.water_text': {
    it: '<p>Il torrente Chiampo nasce dal Monte Gramolon e attraversa una valle densamente industrializzata. Grazie a impianti di depurazione consortili, la qualità dell\'acqua è migliorata notevolmente.</p><p>La "Giornata del torrente pulito" coinvolge ogni anno la cittadinanza nella pulizia degli argini.</p>',
    en: '<p>The Chiampo stream originates from Monte Gramolon and crosses a densely industrialized valley. Thanks to consortium treatment plants, water quality has improved significantly.</p><p>The "Clean Stream Day" involves citizens every year in cleaning the riverbanks.</p>',
    fr: '<p>Le torrent Chiampo naît du Monte Gramolon et traverse une vallée densément industrialisée. Grâce aux stations d\'épuration consortiales, la qualité de l\'eau s\'est considérablement améliorée.</p><p>La "Journée du torrent propre" implique chaque année les citoyens dans le nettoyage des berges.</p>',
    es: '<p>El torrente Chiampo nace del Monte Gramolon y atraviesa un valle densamente industrializado. Gracias a plantas depuradoras consorciadas, la calidad del agua ha mejorado notablemente.</p><p>La "Jornada del torrente limpio" involucra cada año a la ciudadanía en la limpieza de las riberas.</p>'
  },
  'guide.reforest_title': {
    it: 'Riforestazione Urbana', en: 'Urban Reforestation',
    fr: 'Reforestation Urbaine', es: 'Reforestación Urbana'
  },
  'guide.reforest_text': {
    it: '<p>Il progetto <strong>"beLeafing"</strong> ha messo a disposizione 5.000 alberi a costo zero per la riforestazione della Valle del Chiampo, con un beneficio stimato di circa 100.000 kg di CO₂ assorbita all\'anno.</p>',
    en: '<p>The <strong>"beLeafing"</strong> project provided 5,000 trees at no cost for the reforestation of the Chiampo Valley, with an estimated benefit of about 100,000 kg of CO₂ absorbed per year.</p>',
    fr: '<p>Le projet <strong>« beLeafing »</strong> a mis à disposition 5 000 arbres gratuitement pour la reforestation de la Vallée du Chiampo, avec un bénéfice estimé d\'environ 100 000 kg de CO₂ absorbés par an.</p>',
    es: '<p>El proyecto <strong>"beLeafing"</strong> puso a disposición 5.000 árboles sin costo para la reforestación del Valle del Chiampo, con un beneficio estimado de unos 100.000 kg de CO₂ absorbidos al año.</p>'
  },
  'guide.cop_title': {
    it: 'Comunità di Pratica', en: 'Community of Practice',
    fr: 'Communauté de Pratique', es: 'Comunidad de Práctica'
  },
  'guide.cop_text': {
    it: '<p>La <strong>Comunità di Pratica</strong> è un gruppo di persone che condividono un interesse comune e imparano a fare meglio interagendo regolarmente (Wenger, 1998).</p><p>Partecipano famiglie, scuole, associazioni, categorie economiche, parrocchie e istituzioni locali.</p>',
    en: '<p>A <strong>Community of Practice</strong> is a group of people who share a common interest and learn to do better by interacting regularly (Wenger, 1998).</p><p>Participants include families, schools, associations, business groups, parishes and local institutions.</p>',
    fr: '<p>Une <strong>Communauté de Pratique</strong> est un groupe de personnes partageant un intérêt commun et apprenant à mieux faire en interagissant régulièrement (Wenger, 1998).</p><p>Y participent familles, écoles, associations, catégories économiques, paroisses et institutions locales.</p>',
    es: '<p>Una <strong>Comunidad de Práctica</strong> es un grupo de personas que comparten un interés común y aprenden a mejorar interactuando regularmente (Wenger, 1998).</p><p>Participan familias, escuelas, asociaciones, categorías económicas, parroquias e instituciones locales.</p>'
  },
  'guide.howto_title': {
    it: 'Come Fare Citizen Science', en: 'How to Do Citizen Science',
    fr: 'Comment Faire de la Science Citoyenne', es: 'Cómo Hacer Ciencia Ciudadana'
  },
  'guide.howto_text': {
    it: '<p><strong>1. Osserva</strong> — Esci sul campo e osserva la natura. Porta con te un taccuino e il telefono.</p><p><strong>2. Documenta</strong> — Fotografa l\'esemplare da più angolazioni. Annota data, ora e luogo.</p><p><strong>3. Registra</strong> — Usa questa app per inviare la tua osservazione con foto, posizione GPS e note.</p><p><strong>4. Contribuisci</strong> — I tuoi dati vengono raccolti e analizzati per costruire una mappa della biodiversità locale.</p>',
    en: '<p><strong>1. Observe</strong> — Go out into the field and observe nature. Bring a notebook and your phone.</p><p><strong>2. Document</strong> — Photograph the specimen from multiple angles. Note date, time and location.</p><p><strong>3. Record</strong> — Use this app to submit your observation with photos, GPS position and notes.</p><p><strong>4. Contribute</strong> — Your data is collected and analyzed to build a local biodiversity map.</p>',
    fr: '<p><strong>1. Observez</strong> — Sortez sur le terrain et observez la nature. Emportez un carnet et votre téléphone.</p><p><strong>2. Documentez</strong> — Photographiez le spécimen sous plusieurs angles. Notez date, heure et lieu.</p><p><strong>3. Enregistrez</strong> — Utilisez cette appli pour envoyer votre observation avec photos, position GPS et notes.</p><p><strong>4. Contribuez</strong> — Vos données sont collectées et analysées pour construire une carte de la biodiversité locale.</p>',
    es: '<p><strong>1. Observa</strong> — Sal al campo y observa la naturaleza. Lleva un cuaderno y tu teléfono.</p><p><strong>2. Documenta</strong> — Fotografía el ejemplar desde varios ángulos. Anota fecha, hora y lugar.</p><p><strong>3. Registra</strong> — Usa esta app para enviar tu observación con fotos, posición GPS y notas.</p><p><strong>4. Contribuye</strong> — Tus datos se recopilan y analizan para construir un mapa de la biodiversidad local.</p>'
  },
  'guide.partners': {
    it: 'Partner del Progetto', en: 'Project Partners',
    fr: 'Partenaires du Projet', es: 'Socios del Proyecto'
  },
  'guide.municipalities': {
    it: 'Comuni', en: 'Municipalities', fr: 'Communes', es: 'Municipios'
  },
  'guide.education': {
    it: 'Educazione Ambientale', en: 'Environmental Education',
    fr: 'Éducation Environnementale', es: 'Educación Ambiental'
  },
  'guide.community': {
    it: 'Comunità', en: 'Community', fr: 'Communauté', es: 'Comunidad'
  },

  // ---- NAV ----
  'nav.discovery': {
    it: 'Discovery', en: 'Discovery', fr: 'Découverte', es: 'Descubrimiento'
  },
  'nav.impact': {
    it: 'Impact', en: 'Impact', fr: 'Impact', es: 'Impacto'
  },
  'nav.record': {
    it: 'Record', en: 'Record', fr: 'Enregistrer', es: 'Registrar'
  },

  // ---- TOASTS ----
  'toast.photo_added': {
    it: 'Foto aggiunta', en: 'Photo added', fr: 'Photo ajoutée', es: 'Foto añadida'
  },
  'toast.detecting': {
    it: 'Rilevamento posizione...', en: 'Detecting position...',
    fr: 'Détection de la position...', es: 'Detectando posición...'
  },
  'toast.located': {
    it: 'Posizione rilevata', en: 'Position detected',
    fr: 'Position détectée', es: 'Posición detectada'
  },
  'toast.no_geo': {
    it: 'Geolocalizzazione non supportata', en: 'Geolocation not supported',
    fr: 'Géolocalisation non supportée', es: 'Geolocalización no compatible'
  },
  'toast.no_location': {
    it: 'Posizione non disponibile', en: 'Position unavailable',
    fr: 'Position non disponible', es: 'Posición no disponible'
  },
  'toast.add_data': {
    it: 'Aggiungi una foto o una nota', en: 'Add a photo or a note',
    fr: 'Ajoutez une photo ou une note', es: 'Añade una foto o una nota'
  },
  'toast.submitted': {
    it: 'Osservazione registrata!', en: 'Observation recorded!',
    fr: 'Observation enregistrée !', es: '¡Observación registrada!'
  },
  'toast.gps_detected': {
    it: 'Posizione rilevata via GPS', en: 'Position detected via GPS',
    fr: 'Position détectée par GPS', es: 'Posición detectada por GPS'
  },
  'toast.lang_changed': {
    it: 'Lingua cambiata', en: 'Language changed',
    fr: 'Langue changée', es: 'Idioma cambiado'
  },
};

// ---- i18n ENGINE ----
let currentLang = localStorage.getItem('cse-lang') || 'it';

function t(key) {
  const entry = T[key];
  if (!entry) return key;
  return entry[currentLang] || entry['it'] || key;
}

function setLang(lang) {
  if (!LANGS[lang]) return;
  currentLang = lang;
  localStorage.setItem('cse-lang', lang);
  document.documentElement.lang = lang;
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.dataset.t;
    const val = t(key);
    if (el.dataset.tAttr) {
      el.setAttribute(el.dataset.tAttr, val);
    } else if (val.includes('<')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
  // Update lang switcher active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('ring-2', btn.dataset.lang === currentLang);
    btn.classList.toggle('ring-primary', btn.dataset.lang === currentLang);
    btn.classList.toggle('opacity-50', btn.dataset.lang !== currentLang);
  });
}

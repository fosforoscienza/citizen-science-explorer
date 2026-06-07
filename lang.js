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
  // ---- SPLASH ----
  'splash.tap': {
    it: 'Tocca per iniziare', en: 'Tap to start',
    fr: 'Appuyez pour commencer', es: 'Toca para empezar'
  },

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
  'disc.research_section': {
    it: 'Ricerca del Progetto', en: 'Project Research', fr: 'Recherche du Projet', es: 'Investigación del Proyecto'
  },
  'disc.paper_tag': {
    it: 'Articolo Scientifico', en: 'Research Paper', fr: 'Article Scientifique', es: 'Artículo Científico'
  },
  'disc.paper_title': {
    it: 'Citizen Science e Pecore: Sensibilizzare i Giovani alla Biodiversità',
    en: 'Citizen Science & Sheep: Sensitizing Young Citizens to Biodiversity',
    fr: 'Science Citoyenne et Moutons : Sensibiliser les Jeunes à la Biodiversité',
    es: 'Ciencia Ciudadana y Ovejas: Sensibilizar a los Jóvenes sobre la Biodiversidad'
  },
  'disc.paper_desc': {
    it: 'Studio su 252 studenti (9–11 anni) che utilizza le pecore come modello animale per esplorare biodiversità, benessere animale e utilità sociale della ricerca attraverso attività di Citizen Science.',
    en: 'Study involving 252 students (aged 9–11) using sheep as an animal model to explore biodiversity, animal welfare and the social utility of research through Citizen Science activities.',
    fr: 'Étude impliquant 252 élèves (9–11 ans) utilisant les moutons comme modèle animal pour explorer la biodiversité, le bien-être animal et l\'utilité sociale de la recherche à travers des activités de Science Citoyenne.',
    es: 'Estudio con 252 estudiantes (9–11 años) que utiliza las ovejas como modelo animal para explorar biodiversidad, bienestar animal y la utilidad social de la investigación a través de actividades de Ciencia Ciudadana.'
  },
  'disc.paper_kw3': {
    it: 'Benessere Animale', en: 'Animal Welfare', fr: 'Bien-être Animal', es: 'Bienestar Animal'
  },
  'disc.paper_cta': {
    it: 'Leggi', en: 'Read', fr: 'Lire', es: 'Leer'
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
  'disc.guide_download': {
    it: 'Scarica PDF', en: 'Download PDF', fr: 'Télécharger PDF', es: 'Descargar PDF'
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

  // ---- AI IDENTIFICATION (Pl@ntNet) ----
  'rec.ai_section': {
    it: 'Identificazione AI', en: 'AI Identification',
    fr: 'Identification IA', es: 'Identificación IA'
  },
  'rec.ai_organ_label': {
    it: 'Cosa hai fotografato?', en: 'What did you photograph?',
    fr: 'Qu\'avez-vous photographié ?', es: '¿Qué fotografiaste?'
  },
  'rec.ai_organ_auto': {
    it: 'Auto', en: 'Auto', fr: 'Auto', es: 'Auto'
  },
  'rec.ai_organ_leaf': {
    it: 'Foglia', en: 'Leaf', fr: 'Feuille', es: 'Hoja'
  },
  'rec.ai_organ_flower': {
    it: 'Fiore', en: 'Flower', fr: 'Fleur', es: 'Flor'
  },
  'rec.ai_organ_fruit': {
    it: 'Frutto', en: 'Fruit', fr: 'Fruit', es: 'Fruto'
  },
  'rec.ai_organ_bark': {
    it: 'Corteccia', en: 'Bark', fr: 'Écorce', es: 'Corteza'
  },
  'rec.ai_identify': {
    it: 'Identifica con Pl@ntNet', en: 'Identify with Pl@ntNet',
    fr: 'Identifier avec Pl@ntNet', es: 'Identificar con Pl@ntNet'
  },
  'rec.ai_identifying': {
    it: 'Analisi in corso…', en: 'Analyzing…',
    fr: 'Analyse en cours…', es: 'Analizando…'
  },
  'rec.ai_results_title': {
    it: 'Possibili corrispondenze', en: 'Possible matches',
    fr: 'Correspondances possibles', es: 'Posibles coincidencias'
  },
  'rec.ai_no_common': {
    it: 'Nome comune non disponibile', en: 'Common name not available',
    fr: 'Nom commun non disponible', es: 'Nombre común no disponible'
  },
  'rec.ai_disabled_hint': {
    it: 'Scatta o carica una foto per attivare l\'identificazione', en: 'Take or upload a photo to enable identification',
    fr: 'Prenez ou téléchargez une photo pour activer l\'identification', es: 'Toma o sube una foto para activar la identificación'
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
  'guide.download': {
    it: 'Scarica la Guida Completa (PDF)', en: 'Download Full Guide (PDF)',
    fr: 'Télécharger le Guide Complet (PDF)', es: 'Descargar la Guía Completa (PDF)'
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
  'toast.ai_accepted': {
    it: 'Specie selezionata', en: 'Species selected',
    fr: 'Espèce sélectionnée', es: 'Especie seleccionada'
  },
  'toast.ai_no_match': {
    it: 'Nessuna corrispondenza trovata', en: 'No matches found',
    fr: 'Aucune correspondance trouvée', es: 'No se encontraron coincidencias'
  },
  'toast.ai_error': {
    it: 'Errore di connessione al servizio AI', en: 'AI service connection error',
    fr: 'Erreur de connexion au service IA', es: 'Error de conexión al servicio IA'
  },
  'toast.ai_limit': {
    it: 'Limite giornaliero AI raggiunto', en: 'Daily AI limit reached',
    fr: 'Limite quotidienne IA atteinte', es: 'Límite diario de IA alcanzado'
  },
  'toast.ai_no_key': {
    it: 'Configura PLANTNET_PROXY_URL in index.html (vedi worker.js)', en: 'Configure PLANTNET_PROXY_URL in index.html (see worker.js)',
    fr: 'Configurez PLANTNET_PROXY_URL dans index.html (voir worker.js)', es: 'Configura PLANTNET_PROXY_URL en index.html (ver worker.js)'
  },

  // ---- LEAF KEY (Quiz dicotomico) ----
  // Discovery card
  'disc.leafkey_section': { it: 'Identifica Off-line', en: 'Identify Off-line', fr: 'Identifier Hors-ligne', es: 'Identifica Sin Conexión' },
  'disc.leafkey_tag': { it: 'Quiz Didattico', en: 'Educational Quiz', fr: 'Quiz Éducatif', es: 'Quiz Didáctico' },
  'disc.leafkey_title': { it: 'Quiz delle Foglie', en: 'Leaf Quiz', fr: 'Quiz des Feuilles', es: 'Quiz de las Hojas' },
  'disc.leafkey_desc': {
    it: 'Identifica la foglia con un percorso guidato di domande. Funziona anche senza connessione.',
    en: 'Identify the leaf through a guided sequence of questions. Works offline too.',
    fr: 'Identifiez la feuille avec une séquence guidée de questions. Fonctionne aussi hors-ligne.',
    es: 'Identifica la hoja con una secuencia guiada de preguntas. Funciona también sin conexión.'
  },

  // UI strutturale
  'lk.title':       { it: 'Quiz delle Foglie', en: 'Leaf Quiz', fr: 'Quiz des Feuilles', es: 'Quiz de las Hojas' },
  'lk.step':        { it: 'Domanda', en: 'Question', fr: 'Question', es: 'Pregunta' },
  'lk.back':        { it: 'Domanda precedente', en: 'Previous question', fr: 'Question précédente', es: 'Pregunta anterior' },
  'lk.restart':     { it: 'Ricomincia il quiz', en: 'Restart quiz', fr: 'Recommencer le quiz', es: 'Reiniciar el quiz' },
  'lk.review_last': { it: 'Rivedi ultima risposta', en: 'Review last answer', fr: 'Revoir la dernière réponse', es: 'Revisar última respuesta' },
  'lk.use_result':  { it: 'Usa per Nuova Osservazione', en: 'Use for New Observation', fr: 'Utiliser pour Nouvelle Observation', es: 'Usar para Nueva Observación' },
  'lk.identified':  { it: 'Identificata', en: 'Identified', fr: 'Identifiée', es: 'Identificada' },
  'lk.toast.used':  { it: 'Specie pre-compilata', en: 'Species pre-filled', fr: 'Espèce pré-remplie', es: 'Especie pre-rellenada' },

  // Domande
  'lk.q.form':            { it: 'Com\'è la foglia in generale?', en: 'What does the leaf look like overall?', fr: 'À quoi ressemble la feuille en général ?', es: '¿Cómo es la hoja en general?' },
  'lk.q.conifer_type':    { it: 'Aghi sottili o squame addossate al ramo?', en: 'Thin needles or scales pressed to the branch?', fr: 'Aiguilles fines ou écailles plaquées sur la branche ?', es: '¿Agujas finas o escamas adheridas a la rama?' },
  'lk.q.needles_arr':     { it: 'Come sono disposti gli aghi?', en: 'How are the needles arranged?', fr: 'Comment sont disposées les aiguilles ?', es: '¿Cómo están dispuestas las agujas?' },
  'lk.q.fascicle_len':    { it: 'Quanto sono lunghi gli aghi del fascetto?', en: 'How long are the needles in the bundle?', fr: 'Quelle est la longueur des aiguilles du faisceau ?', es: '¿Cuánto miden las agujas del fascículo?' },
  'lk.q.needle_decid':    { it: 'L\'albero perde gli aghi in autunno?', en: 'Does the tree lose its needles in autumn?', fr: 'L\'arbre perd-il ses aiguilles en automne ?', es: '¿El árbol pierde las agujas en otoño?' },
  'lk.q.taxus_abies':     { it: 'Bacche rosse velenose o coni eretti?', en: 'Red poisonous berries or upright cones?', fr: 'Baies rouges toxiques ou cônes dressés ?', es: '¿Bayas rojas venenosas o conos erguidos?' },
  'lk.q.scales_shape':    { it: 'Che forma ha la pianta?', en: 'What shape is the plant?', fr: 'Quelle est la forme de la plante ?', es: '¿Qué forma tiene la planta?' },
  'lk.q.evergreen':       { it: 'La foglia cade in autunno?', en: 'Does the leaf fall in autumn?', fr: 'La feuille tombe-t-elle en automne ?', es: '¿La hoja cae en otoño?' },
  'lk.q.ev_margin':       { it: 'Com\'è il margine della foglia?', en: 'What is the leaf margin like?', fr: 'Comment est le bord de la feuille ?', es: '¿Cómo es el margen de la hoja?' },
  'lk.q.ev_spiny_or_lobed':{ it: 'Spine vere o lobi senza spine?', en: 'True spines or lobes without spines?', fr: 'Vraies épines ou lobes sans épines ?', es: '¿Espinas verdaderas o lóbulos sin espinas?' },
  'lk.q.ev_spiny_type':   { it: 'Foglia spessa lucida o pelosa sotto?', en: 'Thick glossy leaf or hairy underneath?', fr: 'Feuille épaisse brillante ou poilue dessous ?', es: '¿Hoja gruesa brillante o pelosa por debajo?' },
  'lk.q.ev_shape':        { it: 'Foglia stretta-allungata o larga-ovata?', en: 'Narrow-elongated or wide-ovate leaf?', fr: 'Feuille étroite-allongée ou large-ovée ?', es: '¿Hoja estrecha-alargada o ancha-ovada?' },
  'lk.q.ev_narrow':       { it: 'Argentea sotto o lunga e lineare?', en: 'Silver underneath or long and linear?', fr: 'Argentée dessous ou longue et linéaire ?', es: '¿Plateada por debajo o larga y lineal?' },
  'lk.q.ev_wide':         { it: 'Aromatica al tocco o grande e lucida?', en: 'Aromatic when touched or large and glossy?', fr: 'Aromatique au toucher ou grande et brillante ?', es: '¿Aromática al tacto o grande y brillante?' },
  'lk.q.composition':     { it: 'La foglia è semplice o composta?', en: 'Is the leaf simple or compound?', fr: 'La feuille est-elle simple ou composée ?', es: '¿La hoja es simple o compuesta?' },
  'lk.q.dec_margin':      { it: 'Margine intero/dentato o lobato profondo?', en: 'Entire/dented margin or deeply lobed?', fr: 'Bord entier/denté ou profondément lobé ?', es: '¿Margen entero/dentado o profundamente lobulado?' },
  'lk.q.entire_or_dented':{ it: 'Margine intero o dentato?', en: 'Entire or dented margin?', fr: 'Bord entier ou denté ?', es: '¿Margen entero o dentado?' },
  'lk.q.dented_base':     { it: 'La base della foglia è simmetrica?', en: 'Is the leaf base symmetric?', fr: 'La base de la feuille est-elle symétrique ?', es: '¿La base de la hoja es simétrica?' },
  'lk.q.dented_shape':    { it: 'Foglia stretta-allungata o larga-ovata?', en: 'Narrow or wide leaf?', fr: 'Feuille étroite ou large ?', es: '¿Hoja estrecha o ancha?' },
  'lk.q.dented_narrow':   { it: 'Lanceolata lunga o triangolare/romboidale?', en: 'Long lanceolate or triangular/rhomboid?', fr: 'Longue lancéolée ou triangulaire/rhomboïde ?', es: '¿Lanceolada larga o triangular/romboidal?' },
  'lk.q.dented_tri':      { it: 'Triangolare a base larga o piccola romboidale?', en: 'Wide triangular or small rhomboid?', fr: 'Triangulaire large ou petite rhomboïde ?', es: '¿Triangular ancha o pequeña romboidal?' },
  'lk.q.dented_wide':     { it: 'Base cuoriforme o foglia ovata con punta?', en: 'Heart-shaped base or pointed ovate?', fr: 'Base en cœur ou ovée pointue ?', es: '¿Base acorazonada u ovada con punta?' },
  'lk.q.cordate_type':    { it: 'Piccola regolare o grande tondeggiante?', en: 'Small and regular or big and roundish?', fr: 'Petite régulière ou grande arrondie ?', es: '¿Pequeña regular o grande redondeada?' },
  'lk.q.ovate_type':      { it: 'Lunga con denti acuti o piccola con denti dolci?', en: 'Long with sharp teeth or small with soft teeth?', fr: 'Longue à dents aiguës ou petite à dents douces ?', es: '¿Larga con dientes agudos o pequeña con dientes suaves?' },
  'lk.q.lobe_type':       { it: 'Lobi a piuma (pennati) o a stella (palmati)?', en: 'Pinnate (feather) or palmate (star) lobes?', fr: 'Lobes pennés (plume) ou palmés (étoile) ?', es: '¿Lóbulos pinnados (pluma) o palmados (estrella)?' },
  'lk.q.pinnate_lobed':   { it: 'Lobi arrotondati o appuntiti?', en: 'Rounded or pointed lobes?', fr: 'Lobes arrondis ou pointus ?', es: '¿Lóbulos redondeados o puntiagudos?' },
  'lk.q.oak_round':       { it: 'Foglia piccola e pelosa o grande e glabra?', en: 'Small hairy or large glabrous leaf?', fr: 'Petite poilue ou grande glabre ?', es: '¿Pequeña pelosa o grande glabra?' },
  'lk.q.oak_pointed_or_fig':{ it: 'Lobi profondi e appuntiti o 3-5 lobi grandi?', en: 'Deep pointed lobes or 3-5 big lobes?', fr: 'Lobes profonds pointus ou 3-5 grands lobes ?', es: '¿Lóbulos profundos puntiagudos o 3-5 lóbulos grandes?' },
  'lk.q.palmate_lobed':   { it: 'Foglia grande (>15 cm) o media?', en: 'Large leaf (>15 cm) or medium?', fr: 'Grande feuille (>15 cm) ou moyenne ?', es: '¿Hoja grande (>15 cm) o mediana?' },
  'lk.q.large_palmate':   { it: 'Lobi arrotondati o appuntiti?', en: 'Rounded or pointed lobes?', fr: 'Lobes arrondis ou pointus ?', es: '¿Lóbulos redondeados o puntiagudos?' },
  'lk.q.medium_palmate':  { it: 'Lobi piccoli arrotondati o foglia cuoriforme?', en: 'Small rounded lobes or heart-palmate?', fr: 'Petits lobes arrondis ou cordée palmée ?', es: '¿Lóbulos pequeños redondeados o acorazonada palmada?' },
  'lk.q.compound_type':   { it: 'Foglioline a stella (palmate) o a piuma (pennate)?', en: 'Star-arranged (palmate) or feather (pinnate) leaflets?', fr: 'Folioles en étoile (palmées) ou en plume (pennées) ?', es: '¿Folíolos en estrella (palmados) o en pluma (pinnados)?' },
  'lk.q.pinnate_size':    { it: 'Le foglioline sono grandi (>5 cm) o piccole?', en: 'Are leaflets big (>5 cm) or small?', fr: 'Folioles grandes (>5 cm) ou petites ?', es: '¿Los folíolos son grandes (>5 cm) o pequeños?' },
  'lk.q.big_leaflets':    { it: 'Aromatiche (noce) o con ghiandola alla base?', en: 'Aromatic (walnut) or gland at base?', fr: 'Aromatiques (noyer) ou glande à la base ?', es: '¿Aromáticas (nogal) o con glándula en la base?' },
  'lk.q.small_leaflets_margin': { it: 'Foglioline a margine intero o dentate?', en: 'Leaflets entire or dented?', fr: 'Folioles entières ou dentées ?', es: '¿Folíolos enteros o dentados?' },
  'lk.q.pinnate_entire':  { it: 'Molte foglioline ellittiche o foglioline ovate appaiate?', en: 'Many elliptic leaflets or paired ovate leaflets?', fr: 'Beaucoup de folioles elliptiques ou folioles ovées appariées ?', es: '¿Muchos folíolos elípticos o folíolos ovados emparejados?' },
  'lk.q.pinnate_dented':  { it: 'Foglioline strette lanceolate o ovate?', en: 'Narrow lanceolate leaflets or ovate ones?', fr: 'Folioles étroites lancéolées ou ovées ?', es: '¿Folíolos estrechos lanceolados u ovados?' },

  // Opzioni
  'lk.opt.needle_scale':    { it: 'Aghi o squame', en: 'Needles or scales', fr: 'Aiguilles ou écailles', es: 'Agujas o escamas' },
  'lk.opt.broad':           { it: 'Foglia larga (latifoglia)', en: 'Broad leaf', fr: 'Feuille large', es: 'Hoja ancha' },
  'lk.opt.needles':         { it: 'Aghi sottili', en: 'Thin needles', fr: 'Aiguilles fines', es: 'Agujas finas' },
  'lk.opt.scales':          { it: 'Squame addossate', en: 'Pressed scales', fr: 'Écailles plaquées', es: 'Escamas adheridas' },
  'lk.opt.fascicle':        { it: 'In fascetti (2-5 insieme)', en: 'In bundles (2-5)', fr: 'En faisceaux (2-5)', es: 'En fascículos (2-5)' },
  'lk.opt.single':          { it: 'Singoli sui rametti', en: 'Single on twigs', fr: 'Isolées sur les rameaux', es: 'Solas en las ramillas' },
  'lk.opt.long':            { it: 'Lunghi (oltre 10 cm)', en: 'Long (over 10 cm)', fr: 'Longues (plus de 10 cm)', es: 'Largas (más de 10 cm)' },
  'lk.opt.medium':          { it: 'Medi e pungenti (8-12 cm)', en: 'Medium and stiff (8-12 cm)', fr: 'Moyennes et piquantes (8-12 cm)', es: 'Medianas y pinchosas (8-12 cm)' },
  'lk.opt.deciduous':       { it: 'Caducifoglia', en: 'Deciduous', fr: 'Caducifoliée', es: 'Caducifolia' },
  'lk.opt.evergreen':       { it: 'Sempreverde', en: 'Evergreen', fr: 'Persistante', es: 'Perennifolia' },
  'lk.opt.red_berries':     { it: 'Bacche rosse velenose', en: 'Red poisonous berries', fr: 'Baies rouges toxiques', es: 'Bayas rojas venenosas' },
  'lk.opt.true_cones':      { it: 'Coni eretti veri', en: 'True upright cones', fr: 'Vrais cônes dressés', es: 'Conos erguidos verdaderos' },
  'lk.opt.column':          { it: 'Albero colonnare slanciato', en: 'Slender columnar tree', fr: 'Arbre colonnaire élancé', es: 'Árbol columnar esbelto' },
  'lk.opt.bush':            { it: 'Cespuglio con bacche scure', en: 'Bush with dark berries', fr: 'Buisson à baies sombres', es: 'Arbusto con bayas oscuras' },
  'lk.opt.spiny_lobed':     { it: 'Spinoso o lobato', en: 'Spiny or lobed', fr: 'Épineux ou lobé', es: 'Espinoso o lobulado' },
  'lk.opt.entire':          { it: 'Margine intero (liscio)', en: 'Entire margin (smooth)', fr: 'Bord entier (lisse)', es: 'Margen entero (liso)' },
  'lk.opt.true_spines':     { it: 'Vere spine pungenti', en: 'True sharp spines', fr: 'Vraies épines piquantes', es: 'Verdaderas espinas punzantes' },
  'lk.opt.lobed_climber':   { it: 'Lobi senza spine (rampicante)', en: 'Lobes without spines (climber)', fr: 'Lobes sans épines (grimpante)', es: 'Lóbulos sin espinas (trepadora)' },
  'lk.opt.shiny_thick':     { it: 'Spessa, lucida, spine vere', en: 'Thick, glossy, real spines', fr: 'Épaisse, brillante, vraies épines', es: 'Gruesa, brillante, espinas reales' },
  'lk.opt.tomentose':       { it: 'Pelosa-grigia nella pagina inferiore', en: 'Hairy-grey on the underside', fr: 'Poilue-grise au revers', es: 'Pelosa-gris en el envés' },
  'lk.opt.narrow':          { it: 'Stretta e allungata', en: 'Narrow and elongated', fr: 'Étroite et allongée', es: 'Estrecha y alargada' },
  'lk.opt.wide':            { it: 'Larga (ovata o tondeggiante)', en: 'Wide (ovate or roundish)', fr: 'Large (ovée ou arrondie)', es: 'Ancha (ovada o redondeada)' },
  'lk.opt.silver_under':    { it: 'Lanceolata, argentea sotto', en: 'Lanceolate, silver underneath', fr: 'Lancéolée, argentée dessous', es: 'Lanceolada, plateada por debajo' },
  'lk.opt.long_linear':     { it: 'Lineare lunga (15-20 cm)', en: 'Long linear (15-20 cm)', fr: 'Linéaire longue (15-20 cm)', es: 'Lineal larga (15-20 cm)' },
  'lk.opt.aromatic':        { it: 'Aromatica al tatto', en: 'Aromatic when touched', fr: 'Aromatique au toucher', es: 'Aromática al tacto' },
  'lk.opt.big_glossy':      { it: 'Grande, coriacea, lucida', en: 'Large, leathery, glossy', fr: 'Grande, coriace, brillante', es: 'Grande, coriácea, brillante' },
  'lk.opt.simple':          { it: 'Semplice (una sola lamina)', en: 'Simple (single blade)', fr: 'Simple (un seul limbe)', es: 'Simple (un solo limbo)' },
  'lk.opt.compound':        { it: 'Composta (più foglioline)', en: 'Compound (multiple leaflets)', fr: 'Composée (plusieurs folioles)', es: 'Compuesta (varios folíolos)' },
  'lk.opt.entire_or_dented':{ it: 'Margine liscio o dentato', en: 'Smooth or dented margin', fr: 'Bord lisse ou denté', es: 'Margen liso o dentado' },
  'lk.opt.deeply_lobed':    { it: 'Profondamente lobata', en: 'Deeply lobed', fr: 'Profondément lobée', es: 'Profundamente lobulada' },
  'lk.opt.heart_entire':    { it: 'A cuore, intera', en: 'Heart-shaped, entire', fr: 'En cœur, entière', es: 'Acorazonada, entera' },
  'lk.opt.dented':          { it: 'Dentata o seghettata', en: 'Dented or serrated', fr: 'Dentée ou en scie', es: 'Dentada o aserrada' },
  'lk.opt.asymmetric':      { it: 'Asimmetrica alla base', en: 'Asymmetric at the base', fr: 'Asymétrique à la base', es: 'Asimétrica en la base' },
  'lk.opt.symmetric':       { it: 'Simmetrica', en: 'Symmetric', fr: 'Symétrique', es: 'Simétrica' },
  'lk.opt.lanceolate':      { it: 'Lanceolata lunga (salice)', en: 'Long lanceolate (willow)', fr: 'Lancéolée longue (saule)', es: 'Lanceolada larga (sauce)' },
  'lk.opt.triang_rhomb':    { it: 'Triangolare o romboidale', en: 'Triangular or rhomboid', fr: 'Triangulaire ou rhomboïde', es: 'Triangular o romboidal' },
  'lk.opt.triangular':      { it: 'Triangolare a base larga', en: 'Wide-based triangular', fr: 'Triangulaire à base large', es: 'Triangular de base ancha' },
  'lk.opt.rhomboid':        { it: 'Romboidale, corteccia bianca', en: 'Rhomboid, white bark', fr: 'Rhomboïde, écorce blanche', es: 'Romboidal, corteza blanca' },
  'lk.opt.cordate':         { it: 'Cuoriforme alla base', en: 'Heart-shaped at base', fr: 'En cœur à la base', es: 'Acorazonada en la base' },
  'lk.opt.ovate':           { it: 'Ovata con punta', en: 'Pointed ovate', fr: 'Ovée pointue', es: 'Ovada con punta' },
  'lk.opt.small_regular':   { it: 'Piccola e regolare', en: 'Small and regular', fr: 'Petite et régulière', es: 'Pequeña y regular' },
  'lk.opt.big_roundish':    { it: 'Grande, tondeggiante, denti grossolani', en: 'Big, roundish, coarse teeth', fr: 'Grande, arrondie, dents grossières', es: 'Grande, redondeada, dientes gruesos' },
  'lk.opt.long_sharp_teeth':{ it: 'Lunga (15-25 cm), denti acuti', en: 'Long (15-25 cm), sharp teeth', fr: 'Longue (15-25 cm), dents aiguës', es: 'Larga (15-25 cm), dientes agudos' },
  'lk.opt.small_soft_teeth':{ it: 'Piccola, denti morbidi ondulati', en: 'Small, soft wavy teeth', fr: 'Petite, dents douces ondulées', es: 'Pequeña, dientes suaves ondulados' },
  'lk.opt.pinnate_lobed':   { it: 'Lobi a piuma (lungo l\'asse)', en: 'Pinnate lobes (along axis)', fr: 'Lobes pennés (le long de l\'axe)', es: 'Lóbulos pinnados (a lo largo del eje)' },
  'lk.opt.palmate_lobed':   { it: 'Lobi a stella (dal centro)', en: 'Palmate lobes (from center)', fr: 'Lobes palmés (du centre)', es: 'Lóbulos palmados (desde el centro)' },
  'lk.opt.rounded_lobes':   { it: 'Lobi arrotondati', en: 'Rounded lobes', fr: 'Lobes arrondis', es: 'Lóbulos redondeados' },
  'lk.opt.pointed_lobes':   { it: 'Lobi appuntiti', en: 'Pointed lobes', fr: 'Lobes pointus', es: 'Lóbulos puntiagudos' },
  'lk.opt.small_hairy':     { it: 'Piccola (5-10 cm), pelosa sotto', en: 'Small (5-10 cm), hairy below', fr: 'Petite (5-10 cm), poilue dessous', es: 'Pequeña (5-10 cm), pelosa por debajo' },
  'lk.opt.big_glabrous':    { it: 'Grande (10-15 cm), glabra', en: 'Big (10-15 cm), glabrous', fr: 'Grande (10-15 cm), glabre', es: 'Grande (10-15 cm), glabra' },
  'lk.opt.deep_pointed':    { it: 'Profondamente lobata, appuntita', en: 'Deeply lobed, pointed', fr: 'Profondément lobée, pointue', es: 'Profundamente lobulada, puntiaguda' },
  'lk.opt.three_five':      { it: '3-5 lobi grandi (mano aperta)', en: '3-5 big lobes (open hand)', fr: '3-5 grands lobes (main ouverte)', es: '3-5 lóbulos grandes (mano abierta)' },
  'lk.opt.large_palmate':   { it: 'Foglia grande (>15 cm)', en: 'Large leaf (>15 cm)', fr: 'Grande feuille (>15 cm)', es: 'Hoja grande (>15 cm)' },
  'lk.opt.medium_palmate':  { it: 'Foglia media (5-12 cm)', en: 'Medium leaf (5-12 cm)', fr: 'Feuille moyenne (5-12 cm)', es: 'Hoja mediana (5-12 cm)' },
  'lk.opt.rounded_big':     { it: 'Lobi arrotondati grandi', en: 'Big rounded lobes', fr: 'Grands lobes arrondis', es: 'Lóbulos redondeados grandes' },
  'lk.opt.pointed_big':     { it: 'Lobi acuminati simmetrici', en: 'Symmetric acuminate lobes', fr: 'Lobes acuminés symétriques', es: 'Lóbulos acuminados simétricos' },
  'lk.opt.small_rounded':   { it: 'Piccola con lobi arrotondati', en: 'Small with rounded lobes', fr: 'Petite à lobes arrondis', es: 'Pequeña con lóbulos redondeados' },
  'lk.opt.heart_palmate':   { it: 'Cuoriforme con lobi grossi', en: 'Heart-shaped with thick lobes', fr: 'En cœur à gros lobes', es: 'Acorazonada con lóbulos gruesos' },
  'lk.opt.palmate_compound':{ it: 'Foglioline a stella (5-7)', en: 'Star-arranged leaflets (5-7)', fr: 'Folioles en étoile (5-7)', es: 'Folíolos en estrella (5-7)' },
  'lk.opt.pinnate_compound':{ it: 'Foglioline a piuma (lungo asse)', en: 'Feather leaflets (along axis)', fr: 'Folioles en plume (le long axe)', es: 'Folíolos en pluma (a lo largo del eje)' },
  'lk.opt.big_leaflets':    { it: 'Grandi (oltre 5 cm)', en: 'Big (over 5 cm)', fr: 'Grandes (plus de 5 cm)', es: 'Grandes (más de 5 cm)' },
  'lk.opt.small_leaflets':  { it: 'Medie o piccole', en: 'Medium or small', fr: 'Moyennes ou petites', es: 'Medianas o pequeñas' },
  'lk.opt.aromatic_walnut': { it: 'Aromatiche al tocco (noce)', en: 'Aromatic when touched (walnut)', fr: 'Aromatiques au toucher (noyer)', es: 'Aromáticas al tacto (nogal)' },
  'lk.opt.gland_base':      { it: 'Con ghiandola alla base', en: 'With gland at the base', fr: 'Avec glande à la base', es: 'Con glándula en la base' },
  'lk.opt.leaflets_entire': { it: 'Foglioline a margine intero', en: 'Leaflets with entire margin', fr: 'Folioles à bord entier', es: 'Folíolos con margen entero' },
  'lk.opt.leaflets_dented': { it: 'Foglioline dentate', en: 'Dented leaflets', fr: 'Folioles dentées', es: 'Folíolos dentados' },
  'lk.opt.ovate_many':      { it: 'Molte (11-21) ovate ellittiche', en: 'Many (11-21) elliptic ovate', fr: 'Nombreuses (11-21) ovées elliptiques', es: 'Muchas (11-21) ovadas elípticas' },
  'lk.opt.ovate_paired':    { it: 'Poche (7-13) ovate appaiate', en: 'Few (7-13) paired ovate', fr: 'Peu (7-13) ovées appariées', es: 'Pocas (7-13) ovadas emparejadas' },
  'lk.opt.narrow_dented':   { it: 'Strette lanceolate dentate (sorbo)', en: 'Narrow lanceolate dented (rowan)', fr: 'Étroites lancéolées dentées (sorbier)', es: 'Estrechas lanceoladas dentadas (serbal)' },
  'lk.opt.ovate_dented':    { it: 'Ovate dentate (sambuco)', en: 'Ovate dented (elder)', fr: 'Ovées dentées (sureau)', es: 'Ovadas dentadas (saúco)' },

  // Nomi comuni delle 35 specie
  'lk.leaf.pinus_pinea':          { it: 'Pino domestico', en: 'Stone pine', fr: 'Pin parasol', es: 'Pino piñonero' },
  'lk.leaf.pinus_pinaster':       { it: 'Pino marittimo', en: 'Maritime pine', fr: 'Pin maritime', es: 'Pino resinero' },
  'lk.leaf.cupressus_sempervirens':{ it: 'Cipresso comune', en: 'Italian cypress', fr: 'Cyprès commun', es: 'Ciprés común' },
  'lk.leaf.juniperus_communis':   { it: 'Ginepro comune', en: 'Common juniper', fr: 'Genévrier commun', es: 'Enebro común' },
  'lk.leaf.larix_decidua':        { it: 'Larice europeo', en: 'European larch', fr: 'Mélèze d\'Europe', es: 'Alerce europeo' },
  'lk.leaf.taxus_baccata':        { it: 'Tasso comune', en: 'Common yew', fr: 'If commun', es: 'Tejo común' },
  'lk.leaf.abies_alba':           { it: 'Abete bianco', en: 'Silver fir', fr: 'Sapin blanc', es: 'Abeto blanco' },
  'lk.leaf.ilex_aquifolium':      { it: 'Agrifoglio', en: 'Holly', fr: 'Houx', es: 'Acebo' },
  'lk.leaf.quercus_ilex':         { it: 'Leccio', en: 'Holm oak', fr: 'Chêne vert', es: 'Encina' },
  'lk.leaf.olea_europaea':        { it: 'Olivo', en: 'Olive', fr: 'Olivier', es: 'Olivo' },
  'lk.leaf.laurus_nobilis':       { it: 'Alloro', en: 'Bay laurel', fr: 'Laurier', es: 'Laurel' },
  'lk.leaf.nerium_oleander':      { it: 'Oleandro', en: 'Oleander', fr: 'Laurier-rose', es: 'Adelfa' },
  'lk.leaf.hedera_helix':         { it: 'Edera comune', en: 'Common ivy', fr: 'Lierre commun', es: 'Hiedra común' },
  'lk.leaf.magnolia_grandiflora': { it: 'Magnolia sempreverde', en: 'Southern magnolia', fr: 'Magnolia à grandes fleurs', es: 'Magnolia común' },
  'lk.leaf.cercis_siliquastrum':  { it: 'Albero di Giuda', en: 'Judas tree', fr: 'Arbre de Judée', es: 'Árbol del amor' },
  'lk.leaf.ulmus_minor':          { it: 'Olmo campestre', en: 'Field elm', fr: 'Orme champêtre', es: 'Olmo común' },
  'lk.leaf.ficus_carica':         { it: 'Fico comune', en: 'Common fig', fr: 'Figuier commun', es: 'Higuera común' },
  'lk.leaf.castanea_sativa':      { it: 'Castagno', en: 'Sweet chestnut', fr: 'Châtaignier', es: 'Castaño' },
  'lk.leaf.fagus_sylvatica':      { it: 'Faggio', en: 'European beech', fr: 'Hêtre commun', es: 'Haya' },
  'lk.leaf.tilia_cordata':        { it: 'Tiglio selvatico', en: 'Small-leaved lime', fr: 'Tilleul à petites feuilles', es: 'Tilo de hoja pequeña' },
  'lk.leaf.corylus_avellana':     { it: 'Nocciolo', en: 'Hazel', fr: 'Noisetier', es: 'Avellano' },
  'lk.leaf.salix_alba':           { it: 'Salice bianco', en: 'White willow', fr: 'Saule blanc', es: 'Sauce blanco' },
  'lk.leaf.populus_nigra':        { it: 'Pioppo nero', en: 'Black poplar', fr: 'Peuplier noir', es: 'Chopo negro' },
  'lk.leaf.betula_pendula':       { it: 'Betulla bianca', en: 'Silver birch', fr: 'Bouleau verruqueux', es: 'Abedul común' },
  'lk.leaf.quercus_pubescens':    { it: 'Roverella', en: 'Downy oak', fr: 'Chêne pubescent', es: 'Roble pubescente' },
  'lk.leaf.quercus_robur':        { it: 'Farnia', en: 'English oak', fr: 'Chêne pédonculé', es: 'Roble común' },
  'lk.leaf.quercus_cerris':       { it: 'Cerro', en: 'Turkey oak', fr: 'Chêne chevelu', es: 'Roble turco' },
  'lk.leaf.acer_pseudoplatanus':  { it: 'Acero di monte', en: 'Sycamore maple', fr: 'Érable sycomore', es: 'Arce blanco' },
  'lk.leaf.acer_campestre':       { it: 'Acero campestre', en: 'Field maple', fr: 'Érable champêtre', es: 'Arce menor' },
  'lk.leaf.platanus':             { it: 'Platano comune', en: 'London plane', fr: 'Platane commun', es: 'Plátano de sombra' },
  'lk.leaf.vitis_vinifera':       { it: 'Vite comune', en: 'Common grapevine', fr: 'Vigne cultivée', es: 'Vid común' },
  'lk.leaf.juglans_regia':        { it: 'Noce comune', en: 'Common walnut', fr: 'Noyer commun', es: 'Nogal común' },
  'lk.leaf.fraxinus_excelsior':   { it: 'Frassino maggiore', en: 'European ash', fr: 'Frêne commun', es: 'Fresno común' },
  'lk.leaf.sorbus_aucuparia':     { it: 'Sorbo degli uccellatori', en: 'Rowan', fr: 'Sorbier des oiseleurs', es: 'Serbal de los cazadores' },
  'lk.leaf.robinia_pseudoacacia': { it: 'Robinia (Acacia)', en: 'Black locust', fr: 'Robinier faux-acacia', es: 'Robinia (Acacia)' },
  'lk.leaf.ailanthus_altissima':  { it: 'Ailanto', en: 'Tree of heaven', fr: 'Ailante', es: 'Ailanto' },
  'lk.leaf.sambucus_nigra':       { it: 'Sambuco nero', en: 'Black elder', fr: 'Sureau noir', es: 'Saúco negro' },
  'lk.leaf.aesculus':             { it: 'Ippocastano', en: 'Horse chestnut', fr: 'Marronnier d\'Inde', es: 'Castaño de Indias' },

  // Descrizioni delle 35 specie
  'lk.desc.pinus_pinea':          { it: 'Conifera mediterranea dalla chioma a ombrello, aghi lunghi 10-20 cm in coppia. Produce pinoli edibili.', en: 'Mediterranean conifer with umbrella crown, paired needles 10-20 cm long. Produces edible pine nuts.', fr: 'Conifère méditerranéen à couronne en parasol, aiguilles 10-20 cm par deux. Produit des pignons comestibles.', es: 'Conífera mediterránea con copa en sombrilla, agujas 10-20 cm en pareja. Produce piñones comestibles.' },
  'lk.desc.pinus_pinaster':       { it: 'Pino delle coste tirreniche, aghi rigidi 8-12 cm a coppie. Corteccia rossastra molto fessurata.', en: 'Pine of Tyrrhenian coasts, stiff paired needles 8-12 cm. Reddish deeply fissured bark.', fr: 'Pin des côtes tyrrhéniennes, aiguilles rigides 8-12 cm par paires. Écorce rougeâtre très crevassée.', es: 'Pino de costas tirrenas, agujas rígidas 8-12 cm en pares. Corteza rojiza muy fisurada.' },
  'lk.desc.cupressus_sempervirens':{ it: 'Cipresso colonnare dei paesaggi toscani. Foglie squamiformi piccole, coni legnosi rotondeggianti.', en: 'Columnar cypress typical of Tuscan landscapes. Tiny scale leaves, rounded woody cones.', fr: 'Cyprès colonnaire typique des paysages toscans. Petites écailles, cônes ligneux arrondis.', es: 'Ciprés columnar típico del paisaje toscano. Hojas en escama pequeñas, conos leñosos redondeados.' },
  'lk.desc.juniperus_communis':   { it: 'Arbusto delle macchie con aghi pungenti corti in verticilli di 3 e bacche bluastre commestibili (gin).', en: 'Shrub with short stiff needles in whorls of 3 and edible bluish berries (used in gin).', fr: 'Arbuste à courtes aiguilles piquantes en verticilles de 3 et baies bleutées comestibles (gin).', es: 'Arbusto con cortas agujas pinchosas en verticilos de 3 y bayas azuladas comestibles (ginebra).' },
  'lk.desc.larix_decidua':        { it: 'Unica conifera europea caducifoglia. Aghi morbidi in ciuffetti dorati in autunno. Tipica delle Alpi.', en: 'The only European deciduous conifer. Soft needles in tufts, golden in autumn. Typical of the Alps.', fr: 'Seul conifère européen caducifolié. Aiguilles douces en touffes, dorées en automne. Typique des Alpes.', es: 'Única conífera europea caducifolia. Agujas suaves en mechones, doradas en otoño. Típica de los Alpes.' },
  'lk.desc.taxus_baccata':        { it: 'Sempreverde con foglie lineari verde scuro e bacche rosse (arilli). Tutto velenoso tranne l\'arillo carnoso.', en: 'Evergreen with dark linear leaves and red berries (arils). All toxic except the fleshy aril.', fr: 'Persistant à feuilles linéaires vert foncé et baies rouges (arilles). Tout est toxique sauf l\'arille.', es: 'Perennifolio con hojas lineales verde oscuro y bayas rojas (arilos). Todo tóxico salvo el arilo carnoso.' },
  'lk.desc.abies_alba':           { it: 'Abete delle foreste montane, aghi piatti con due strisce bianche sotto. Coni eretti che si disfano sull\'albero.', en: 'Fir of mountain forests, flat needles with two white stripes underneath. Upright cones that disintegrate on the tree.', fr: 'Sapin des forêts montagnardes, aiguilles plates à deux bandes blanches dessous. Cônes dressés se désagrégeant sur l\'arbre.', es: 'Abeto de bosques montanos, agujas planas con dos bandas blancas debajo. Conos erguidos que se deshacen en el árbol.' },
  'lk.desc.ilex_aquifolium':      { it: 'Sempreverde con foglie spinose lucide e bacche rosse autunnali. Simbolo natalizio.', en: 'Evergreen with shiny spiny leaves and red autumn berries. Christmas symbol.', fr: 'Persistant à feuilles épineuses brillantes et baies rouges automnales. Symbole de Noël.', es: 'Perennifolio con hojas espinosas brillantes y bayas rojas otoñales. Símbolo navideño.' },
  'lk.desc.quercus_ilex':         { it: 'Quercia sempreverde del Mediterraneo. Foglie ovate piccole, lucide sopra, grigio-tomentose sotto. Ghiande dolci.', en: 'Mediterranean evergreen oak. Small ovate leaves, glossy above, grey-tomentose below. Sweet acorns.', fr: 'Chêne persistant méditerranéen. Petites feuilles ovées, brillantes dessus, gris-tomenteuses dessous. Glands doux.', es: 'Roble perennifolio mediterráneo. Hojas ovadas pequeñas, brillantes arriba, gris-tomentosas abajo. Bellotas dulces.' },
  'lk.desc.olea_europaea':        { it: 'Albero simbolo del Mediterraneo. Foglie lanceolate verde scuro sopra, argentee sotto. Frutto: oliva.', en: 'Symbolic Mediterranean tree. Lanceolate leaves dark green above, silvery below. Fruit: olive.', fr: 'Arbre symbole de la Méditerranée. Feuilles lancéolées vert foncé dessus, argentées dessous. Fruit : olive.', es: 'Árbol símbolo del Mediterráneo. Hojas lanceoladas verde oscuro arriba, plateadas abajo. Fruto: aceituna.' },
  'lk.desc.laurus_nobilis':       { it: 'Sempreverde aromatico, foglie ovali profumate al tatto. Usato in cucina e per le corone d\'alloro.', en: 'Aromatic evergreen, oval leaves fragrant when touched. Used in cooking and for laurel wreaths.', fr: 'Persistant aromatique, feuilles ovales parfumées au toucher. Utilisé en cuisine et pour les couronnes de laurier.', es: 'Perennifolio aromático, hojas ovales perfumadas al tacto. Usado en cocina y para coronas de laurel.' },
  'lk.desc.nerium_oleander':      { it: 'Arbusto ornamentale dei climi miti. Foglie lineari coriacee, fiori vistosi. Tutta la pianta è velenosa.', en: 'Ornamental shrub of mild climates. Leathery linear leaves, showy flowers. Whole plant is poisonous.', fr: 'Arbuste ornemental des climats doux. Feuilles linéaires coriaces, fleurs voyantes. Toute la plante est toxique.', es: 'Arbusto ornamental de climas suaves. Hojas lineares coriáceas, flores vistosas. Toda la planta es venenosa.' },
  'lk.desc.hedera_helix':         { it: 'Rampicante sempreverde con foglie lobate (3-5 lobi) sui rami sterili, ovali su quelli fioriferi.', en: 'Evergreen climber with lobed leaves (3-5 lobes) on sterile branches, oval on flowering ones.', fr: 'Grimpante persistante à feuilles lobées (3-5 lobes) sur les rameaux stériles, ovales sur les fertiles.', es: 'Trepadora perennifolia con hojas lobuladas (3-5 lóbulos) en ramas estériles, ovales en las floríferas.' },
  'lk.desc.magnolia_grandiflora': { it: 'Albero ornamentale dal Nord America. Foglie grandi coriacee verde scuro lucide, ruggine sotto. Fiori bianchi profumati.', en: 'Ornamental tree from North America. Large leathery dark green leaves, rusty underneath. Fragrant white flowers.', fr: 'Arbre ornemental d\'Amérique du Nord. Grandes feuilles coriaces vert foncé, rouille dessous. Fleurs blanches parfumées.', es: 'Árbol ornamental de Norteamérica. Hojas grandes coriáceas verde oscuro, rojizas debajo. Flores blancas perfumadas.' },
  'lk.desc.cercis_siliquastrum':  { it: 'Albero ornamentale con foglie cuoriformi e fioritura rosata sui rami spogli in primavera.', en: 'Ornamental tree with heart-shaped leaves and pink blossom on bare branches in spring.', fr: 'Arbre ornemental à feuilles en cœur et floraison rose sur branches dénudées au printemps.', es: 'Árbol ornamental con hojas acorazonadas y floración rosada en ramas desnudas en primavera.' },
  'lk.desc.ulmus_minor':          { it: 'Albero europeo dalle foglie ovate asimmetriche alla base, doppiamente seghettate. Decimato dalla grafiosi.', en: 'European tree with ovate leaves asymmetric at base, doubly serrated. Decimated by Dutch elm disease.', fr: 'Arbre européen à feuilles ovées asymétriques à la base, doublement dentées. Décimé par la graphiose.', es: 'Árbol europeo con hojas ovadas asimétricas en la base, doblemente dentadas. Diezmado por la grafiosis.' },
  'lk.desc.ficus_carica':         { it: 'Albero da frutto mediterraneo. Foglie grandi con 3-5 lobi profondi, ruvide al tatto. Frutto: fico.', en: 'Mediterranean fruit tree. Large leaves with 3-5 deep lobes, rough to touch. Fruit: fig.', fr: 'Arbre fruitier méditerranéen. Grandes feuilles à 3-5 lobes profonds, rugueuses au toucher. Fruit : figue.', es: 'Árbol frutal mediterráneo. Hojas grandes con 3-5 lóbulos profundos, ásperas al tacto. Fruto: higo.' },
  'lk.desc.castanea_sativa':      { it: 'Albero dei boschi collinari. Foglie lunghe lanceolate con denti acuti regolari. Frutto: castagna.', en: 'Tree of hilly woodlands. Long lanceolate leaves with regular sharp teeth. Fruit: chestnut.', fr: 'Arbre des forêts de collines. Feuilles longues lancéolées à dents aiguës régulières. Fruit : châtaigne.', es: 'Árbol de bosques de colinas. Hojas largas lanceoladas con dientes agudos regulares. Fruto: castaña.' },
  'lk.desc.fagus_sylvatica':      { it: 'Grande albero dei boschi appenninici. Foglie ovate piccole con margine ondulato. Faggine come frutti.', en: 'Large tree of Apennine woods. Small ovate leaves with wavy margin. Beechnuts as fruits.', fr: 'Grand arbre des forêts des Apennins. Petites feuilles ovées à bord ondulé. Faînes comme fruits.', es: 'Árbol grande de bosques apeninos. Hojas ovadas pequeñas con margen ondulado. Hayucos como frutos.' },
  'lk.desc.tilia_cordata':        { it: 'Albero ornamentale e mellifero. Foglie cuoriformi piccole asimmetriche, dentate. Fiori profumati.', en: 'Ornamental and honey-producing tree. Small asymmetric heart-shaped dentate leaves. Fragrant flowers.', fr: 'Arbre ornemental et mellifère. Petites feuilles en cœur asymétriques, dentées. Fleurs parfumées.', es: 'Árbol ornamental y melífero. Hojas acorazonadas pequeñas asimétricas, dentadas. Flores perfumadas.' },
  'lk.desc.corylus_avellana':     { it: 'Arbusto-alberello dei boschi. Foglie tondeggianti con denti grossolani e punta. Frutto: nocciola.', en: 'Shrubby tree of woodlands. Roundish leaves with coarse teeth and pointed tip. Fruit: hazelnut.', fr: 'Arbuste-arbrisseau des bois. Feuilles arrondies à dents grossières et pointe. Fruit : noisette.', es: 'Arbusto-arbolillo de bosques. Hojas redondeadas con dientes gruesos y punta. Fruto: avellana.' },
  'lk.desc.salix_alba':           { it: 'Albero ripariale. Foglie strette lanceolate argentee per peluria fine. Rami flessibili usati per cesti.', en: 'Riparian tree. Narrow lanceolate leaves silvery from fine hairs. Flexible twigs used for baskets.', fr: 'Arbre des bords d\'eau. Feuilles étroites lancéolées argentées par fins poils. Rameaux flexibles tressés.', es: 'Árbol ribereño. Hojas estrechas lanceoladas plateadas por pelos finos. Ramas flexibles usadas para cestos.' },
  'lk.desc.populus_nigra':        { it: 'Albero alto delle aree umide. Foglie triangolari a base larga con denti fini. Foglie tremolanti al vento.', en: 'Tall tree of wet areas. Triangular wide-based leaves with fine teeth. Leaves trembling in the wind.', fr: 'Arbre haut des zones humides. Feuilles triangulaires à base large à dents fines. Feuilles frémissantes au vent.', es: 'Árbol alto de zonas húmedas. Hojas triangulares de base ancha con dientes finos. Hojas temblorosas al viento.' },
  'lk.desc.betula_pendula':       { it: 'Albero dalla corteccia bianca caratteristica. Foglie romboidali piccole con doppia dentatura. Pioniera.', en: 'Tree with characteristic white bark. Small rhomboid leaves with double serration. Pioneer species.', fr: 'Arbre à l\'écorce blanche caractéristique. Petites feuilles rhomboïdes à double dentelure. Pionnière.', es: 'Árbol de corteza blanca característica. Hojas romboidales pequeñas con doble dentadura. Especie pionera.' },
  'lk.desc.quercus_pubescens':    { it: 'Quercia delle colline italiane. Foglie piccole con 4-7 lobi arrotondati, pelose nella pagina inferiore.', en: 'Oak of Italian hills. Small leaves with 4-7 rounded lobes, hairy underneath.', fr: 'Chêne des collines italiennes. Petites feuilles à 4-7 lobes arrondis, poilues dessous.', es: 'Roble de colinas italianas. Hojas pequeñas con 4-7 lóbulos redondeados, pelosas por debajo.' },
  'lk.desc.quercus_robur':        { it: 'Grande quercia delle pianure. Foglie con lobi arrotondati profondi, glabre. Ghiande peduncolate.', en: 'Large lowland oak. Leaves with deep rounded lobes, glabrous. Stalked acorns.', fr: 'Grand chêne des plaines. Feuilles à lobes arrondis profonds, glabres. Glands pédonculés.', es: 'Roble grande de llanuras. Hojas con lóbulos redondeados profundos, glabras. Bellotas pedunculadas.' },
  'lk.desc.quercus_cerris':       { it: 'Quercia dei boschi misti. Foglie con lobi appuntiti profondi, ghiande con cupola pelosa.', en: 'Oak of mixed woodlands. Leaves with deep pointed lobes, acorns with hairy cup.', fr: 'Chêne des forêts mixtes. Feuilles à lobes profonds pointus, glands à cupule poilue.', es: 'Roble de bosques mixtos. Hojas con lóbulos puntiagudos profundos, bellotas con cúpula pelosa.' },
  'lk.desc.acer_pseudoplatanus':  { it: 'Acero dei boschi montani. Foglie palmate a 5 lobi acuminati con denti grossi. Samare ad angolo retto.', en: 'Maple of mountain woodlands. Palmate leaves with 5 acuminate lobes and coarse teeth. Samaras at right angle.', fr: 'Érable des forêts montagnardes. Feuilles palmées à 5 lobes acuminés à dents grossières. Samares à angle droit.', es: 'Arce de bosques montanos. Hojas palmadas con 5 lóbulos acuminados y dientes gruesos. Sámaras en ángulo recto.' },
  'lk.desc.acer_campestre':       { it: 'Acero piccolo delle siepi. Foglie palmate a 3-5 lobi piccoli arrotondati. Comune nelle campagne.', en: 'Small maple of hedgerows. Palmate leaves with 3-5 small rounded lobes. Common in countryside.', fr: 'Petit érable des haies. Feuilles palmées à 3-5 petits lobes arrondis. Commun dans la campagne.', es: 'Arce pequeño de setos. Hojas palmadas con 3-5 lóbulos pequeños redondeados. Común en el campo.' },
  'lk.desc.platanus':             { it: 'Grande albero ornamentale urbano. Foglie palmate enormi (15-25 cm) a 3-5 lobi. Corteccia che si sfoglia.', en: 'Large urban ornamental tree. Huge palmate leaves (15-25 cm) with 3-5 lobes. Peeling bark.', fr: 'Grand arbre ornemental urbain. Énormes feuilles palmées (15-25 cm) à 3-5 lobes. Écorce qui se desquame.', es: 'Gran árbol ornamental urbano. Hojas palmadas enormes (15-25 cm) con 3-5 lóbulos. Corteza que se descama.' },
  'lk.desc.vitis_vinifera':       { it: 'Rampicante coltivata per il vino. Foglie palmate cuoriformi alla base con 3-5 lobi dentati. Grappolo d\'uva.', en: 'Climber cultivated for wine. Heart-based palmate leaves with 3-5 dentate lobes. Grape cluster.', fr: 'Grimpante cultivée pour le vin. Feuilles palmées en cœur à 3-5 lobes dentés. Grappe de raisin.', es: 'Trepadora cultivada para el vino. Hojas palmadas acorazonadas en base con 3-5 lóbulos dentados. Racimo de uvas.' },
  'lk.desc.juglans_regia':        { it: 'Albero da frutto. Foglie pennate con 5-9 foglioline aromatiche grandi. Frutto: noce.', en: 'Fruit tree. Pinnate leaves with 5-9 large aromatic leaflets. Fruit: walnut.', fr: 'Arbre fruitier. Feuilles pennées à 5-9 grandes folioles aromatiques. Fruit : noix.', es: 'Árbol frutal. Hojas pinnadas con 5-9 folíolos aromáticos grandes. Fruto: nuez.' },
  'lk.desc.fraxinus_excelsior':   { it: 'Albero alto dei boschi umidi. Foglie imparipennate con 7-13 foglioline ovate appaiate, dentate.', en: 'Tall tree of damp woodlands. Imparipinnate leaves with 7-13 paired ovate dentate leaflets.', fr: 'Grand arbre des forêts humides. Feuilles imparipennées à 7-13 folioles ovées appariées et dentées.', es: 'Árbol alto de bosques húmedos. Hojas imparipinnadas con 7-13 folíolos ovados emparejados, dentados.' },
  'lk.desc.sorbus_aucuparia':     { it: 'Alberello dei boschi montani. Foglie pennate con 11-21 foglioline strette dentate. Bacche rosse autunnali.', en: 'Small tree of mountain woods. Pinnate leaves with 11-21 narrow dentate leaflets. Red autumn berries.', fr: 'Petit arbre des forêts de montagne. Feuilles pennées à 11-21 folioles étroites dentées. Baies rouges automnales.', es: 'Arbolillo de bosques de montaña. Hojas pinnadas con 11-21 folíolos estrechos dentados. Bayas rojas otoñales.' },
  'lk.desc.robinia_pseudoacacia': { it: 'Albero invasivo originario nordamericano. Foglie pennate con 11-21 foglioline ellittiche intere. Spine sui rami.', en: 'Invasive North American tree. Pinnate leaves with 11-21 entire elliptic leaflets. Thorns on branches.', fr: 'Arbre invasif d\'origine nord-américaine. Feuilles pennées à 11-21 folioles elliptiques entières. Épines sur rameaux.', es: 'Árbol invasor de origen norteamericano. Hojas pinnadas con 11-21 folíolos elípticos enteros. Espinas en ramas.' },
  'lk.desc.ailanthus_altissima':  { it: 'Albero invasivo dall\'Asia. Foglie pennate enormi (40-80 cm) con foglioline a base con ghiandola maleodorante.', en: 'Invasive tree from Asia. Huge pinnate leaves (40-80 cm), leaflets with foul-smelling basal gland.', fr: 'Arbre invasif d\'Asie. Énormes feuilles pennées (40-80 cm), folioles à glande basale malodorante.', es: 'Árbol invasor de Asia. Hojas pinnadas enormes (40-80 cm), folíolos con glándula basal maloliente.' },
  'lk.desc.sambucus_nigra':       { it: 'Arbusto dei bordi dei boschi. Foglie pennate con 5-7 foglioline ovate dentate. Fiori bianchi a ombrello, bacche nere.', en: 'Shrub of woodland edges. Pinnate leaves with 5-7 ovate dentate leaflets. Flat white umbels, black berries.', fr: 'Arbuste des lisières. Feuilles pennées à 5-7 folioles ovées dentées. Ombelles blanches plates, baies noires.', es: 'Arbusto de bordes de bosques. Hojas pinnadas con 5-7 folíolos ovados dentados. Umbelas blancas planas, bayas negras.' },
  'lk.desc.aesculus':             { it: 'Albero ornamentale dei viali. Foglie palmate composte con 5-7 foglioline a stella. Castagne (non commestibili).', en: 'Avenue ornamental tree. Palmate compound leaves with 5-7 star-arranged leaflets. Conkers (not edible).', fr: 'Arbre ornemental d\'avenues. Feuilles palmées composées à 5-7 folioles en étoile. Marrons (non comestibles).', es: 'Árbol ornamental de avenidas. Hojas palmadas compuestas con 5-7 folíolos en estrella. Castañas (no comestibles).' },
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
  // Re-render quiz dinamico se attivo
  const lk = document.getElementById('screen-leafkey');
  if (lk && lk.classList.contains('active') && typeof renderLeafkey === 'function') {
    renderLeafkey();
  }
}

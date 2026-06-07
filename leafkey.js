// =============================================
// Leafkey — Chiave dicotomica delle foglie
// =============================================
// Quiz didattico binario che identifica una specie tra 35 piante italiane comuni
// guidando l'utente con domande dal generale al particolare.
//
// Architettura:
//  - SVG_*       : illustrazioni inline per opzioni e silhouette
//  - LEAFKEY     : struttura dati dell'albero dicotomico (nodi question + leaf)
//  - lkCurrent   : id del nodo correntemente visualizzato
//  - lkHistory   : stack { nodeId, choiceIdx } per il bottone "Indietro"
// =============================================

// ---------- SVG (illustrazioni didattiche) ----------
const SVG_W = 'width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"';
const STROKE = 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
const FILL_SOFT = 'fill="currentColor" fill-opacity="0.12"';

// Opzioni livello-1: forma generale
const SVG_NEEDLE = `<svg ${SVG_W}><g ${STROKE}><line x1="40" y1="12" x2="40" y2="68"/><line x1="22" y1="22" x2="58" y2="22"/><line x1="18" y1="34" x2="62" y2="34"/><line x1="22" y1="46" x2="58" y2="46"/><line x1="28" y1="58" x2="52" y2="58"/></g></svg>`;
const SVG_SCALE = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 12 L48 22 L40 32 L32 22 Z"/><path d="M40 28 L48 38 L40 48 L32 38 Z"/><path d="M40 44 L48 54 L40 64 L32 54 Z"/></g></svg>`;
const SVG_BROAD = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 14 C58 22, 64 40, 40 66 C16 40, 22 22, 40 14 Z"/><path d="M40 14 L40 66"/></g></svg>`;

// Stagionalità
const SVG_EVERGREEN = `<svg ${SVG_W}><g ${STROKE} fill="currentColor" fill-opacity="0.2"><path d="M40 14 C58 22, 62 42, 40 66 C18 42, 22 22, 40 14 Z"/></g><g stroke="white" stroke-width="1.5"><line x1="34" y1="28" x2="36" y2="30"/><line x1="46" y1="40" x2="48" y2="42"/></g></svg>`;
const SVG_DECIDUOUS = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M22 30 C18 50, 30 64, 40 66 L40 14 C30 18, 26 22, 22 30 Z"/><path d="M58 30 C62 50, 50 64, 40 66 L40 14 C50 18, 54 22, 58 30 Z"/></g><g ${STROKE}><line x1="20" y1="68" x2="14" y2="74"/><line x1="60" y1="68" x2="66" y2="74"/></g></svg>`;

// Composizione
const SVG_SIMPLE = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 14 C58 22, 60 44, 40 66 C20 44, 22 22, 40 14 Z"/><line x1="40" y1="14" x2="40" y2="66"/></g></svg>`;
const SVG_COMPOUND = `<svg ${SVG_W}><g ${STROKE}><line x1="40" y1="10" x2="40" y2="70"/></g><g ${STROKE} ${FILL_SOFT}><ellipse cx="28" cy="22" rx="8" ry="5"/><ellipse cx="52" cy="22" rx="8" ry="5"/><ellipse cx="24" cy="38" rx="9" ry="5.5"/><ellipse cx="56" cy="38" rx="9" ry="5.5"/><ellipse cx="28" cy="54" rx="8" ry="5"/><ellipse cx="52" cy="54" rx="8" ry="5"/></g></svg>`;

// Margine
const SVG_MARGIN_ENTIRE = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 12 C60 22, 62 46, 40 68 C18 46, 20 22, 40 12 Z"/></g></svg>`;
const SVG_MARGIN_SERRATED = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 12 L46 18 L48 16 L52 22 L54 20 L58 28 L60 26 L62 38 L60 40 L62 50 L58 54 L60 56 L54 60 L52 62 L48 64 L46 66 L40 68 L34 66 L32 64 L28 62 L26 60 L20 56 L22 54 L18 50 L20 40 L18 38 L20 26 L22 28 L26 20 L28 22 L32 16 L34 18 Z"/></g></svg>`;
const SVG_MARGIN_SPINY = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 12 L44 20 L52 14 L52 24 L62 22 L58 32 L66 36 L60 42 L66 48 L58 52 L62 60 L52 58 L52 68 L44 62 L40 68 L36 62 L28 68 L28 58 L18 60 L22 52 L14 48 L20 42 L14 36 L22 32 L18 22 L28 24 L28 14 L36 20 Z"/></g></svg>`;
const SVG_MARGIN_LOBED = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 12 C50 14, 56 20, 56 28 C66 28, 68 36, 60 42 C68 48, 64 56, 56 54 C58 64, 50 66, 44 60 C42 68, 38 68, 36 60 C30 66, 22 64, 24 54 C16 56, 12 48, 20 42 C12 36, 14 28, 24 28 C24 20, 30 14, 40 12 Z"/></g></svg>`;

// Forme
const SVG_SHAPE_OVATE = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 10 C58 18, 60 46, 40 70 C20 46, 22 18, 40 10 Z"/></g></svg>`;
const SVG_SHAPE_LANCEOLATE = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 10 C46 26, 48 50, 40 70 C32 50, 34 26, 40 10 Z"/></g></svg>`;
const SVG_SHAPE_LINEAR = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 8 C44 32, 44 52, 40 72 C36 52, 36 32, 40 8 Z"/></g></svg>`;
const SVG_SHAPE_CORDATE = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 70 C18 50, 14 28, 28 16 C34 12, 40 18, 40 24 C40 18, 46 12, 52 16 C66 28, 62 50, 40 70 Z"/></g></svg>`;
const SVG_SHAPE_TRIANGULAR = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 10 L66 64 L14 64 Z"/></g></svg>`;
const SVG_SHAPE_RHOMBOID = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 10 L64 40 L40 70 L16 40 Z"/></g></svg>`;
const SVG_SHAPE_ROUND = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><circle cx="40" cy="40" r="28"/></g></svg>`;
const SVG_SHAPE_ASYMMETRIC = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 12 C58 20, 62 44, 44 68 C28 60, 18 38, 22 18 C28 14, 34 12, 40 12 Z"/></g></svg>`;

// Lobi
const SVG_PINNATE_LOBED = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 12 C50 14, 52 22, 56 26 C60 28, 60 34, 56 34 C60 38, 60 44, 56 44 C60 48, 58 54, 52 54 C50 60, 48 64, 40 68 C32 64, 30 60, 28 54 C22 54, 20 48, 24 44 C20 44, 20 38, 24 34 C20 34, 20 28, 24 26 C28 22, 30 14, 40 12 Z"/><line x1="40" y1="12" x2="40" y2="68"/></g></svg>`;
const SVG_PALMATE_LOBED = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 70 L36 50 L22 44 L20 30 L32 32 L30 18 L40 26 L50 18 L48 32 L60 30 L58 44 L44 50 Z"/><line x1="40" y1="70" x2="40" y2="48"/><line x1="40" y1="48" x2="26" y2="36"/><line x1="40" y1="48" x2="54" y2="36"/></g></svg>`;
const SVG_LOBES_ROUNDED = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 14 C46 16, 48 22, 52 24 C58 24, 60 30, 56 34 C62 36, 62 44, 56 46 C60 50, 58 56, 52 56 C50 62, 46 66, 40 66 C34 66, 30 62, 28 56 C22 56, 20 50, 24 46 C18 44, 18 36, 24 34 C20 30, 22 24, 28 24 C32 22, 34 16, 40 14 Z"/></g></svg>`;
const SVG_LOBES_POINTED = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 12 L48 22 L56 18 L54 30 L62 28 L56 38 L64 42 L56 48 L62 56 L52 54 L52 62 L46 56 L40 68 L34 56 L28 62 L28 54 L18 56 L24 48 L16 42 L24 38 L18 28 L26 30 L24 18 L32 22 Z"/></g></svg>`;

// Composte (varianti)
const SVG_PALMATE_COMPOUND = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><ellipse cx="40" cy="22" rx="6" ry="14"/><ellipse cx="24" cy="32" rx="5" ry="12" transform="rotate(-30 24 32)"/><ellipse cx="56" cy="32" rx="5" ry="12" transform="rotate(30 56 32)"/><ellipse cx="18" cy="48" rx="5" ry="10" transform="rotate(-55 18 48)"/><ellipse cx="62" cy="48" rx="5" ry="10" transform="rotate(55 62 48)"/></g><line x1="40" y1="68" x2="40" y2="36" ${STROKE}/></svg>`;
const SVG_PINNATE_COMPOUND = `<svg ${SVG_W}><g ${STROKE}><line x1="40" y1="8" x2="40" y2="72"/></g><g ${STROKE} ${FILL_SOFT}><ellipse cx="26" cy="20" rx="7" ry="4"/><ellipse cx="54" cy="20" rx="7" ry="4"/><ellipse cx="22" cy="34" rx="8" ry="4.5"/><ellipse cx="58" cy="34" rx="8" ry="4.5"/><ellipse cx="22" cy="48" rx="8" ry="4.5"/><ellipse cx="58" cy="48" rx="8" ry="4.5"/><ellipse cx="26" cy="62" rx="7" ry="4"/><ellipse cx="54" cy="62" rx="7" ry="4"/></g></svg>`;

// Misc
const SVG_BIG = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 8 C66 18, 70 50, 40 72 C10 50, 14 18, 40 8 Z"/></g></svg>`;
const SVG_SMALL = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 26 C52 32, 54 48, 40 60 C26 48, 28 32, 40 26 Z"/></g></svg>`;
const SVG_AROMATIC = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 14 C56 22, 58 46, 40 66 C22 46, 24 22, 40 14 Z"/></g><g ${STROKE}><path d="M50 18 Q56 14, 58 8"/><path d="M58 24 Q64 22, 68 18"/><path d="M58 32 Q64 32, 68 30"/></g></svg>`;
const SVG_NONAROMATIC = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 14 C56 22, 58 46, 40 66 C22 46, 24 22, 40 14 Z"/></g></svg>`;
const SVG_SILVER = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 12 C46 28, 48 52, 40 70 C32 52, 34 28, 40 12 Z"/></g><g stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"><path d="M40 18 L40 64"/></g></svg>`;
const SVG_BERRIES_RED = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><line x1="40" y1="14" x2="40" y2="68"/><line x1="22" y1="24" x2="58" y2="24"/><line x1="20" y1="36" x2="60" y2="36"/><line x1="22" y1="48" x2="58" y2="48"/></g><circle cx="30" cy="58" r="5" fill="currentColor" fill-opacity="0.5"/><circle cx="48" cy="60" r="4" fill="currentColor" fill-opacity="0.5"/></svg>`;
const SVG_CONES = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 18 L30 38 L40 36 L32 56 L40 54 L34 70 L46 70 L40 54 L48 56 L40 36 L50 38 Z"/></g></svg>`;
const SVG_FASCICLE = `<svg ${SVG_W}><g ${STROKE}><line x1="32" y1="14" x2="40" y2="50"/><line x1="40" y1="14" x2="40" y2="50"/><line x1="48" y1="14" x2="40" y2="50"/><circle cx="40" cy="54" r="6" ${FILL_SOFT}/></g></svg>`;
const SVG_SINGLE_NEEDLE = `<svg ${SVG_W}><g ${STROKE}><line x1="40" y1="10" x2="40" y2="70"/><line x1="26" y1="20" x2="40" y2="22"/><line x1="54" y1="20" x2="40" y2="22"/><line x1="22" y1="32" x2="40" y2="34"/><line x1="58" y1="32" x2="40" y2="34"/><line x1="20" y1="46" x2="40" y2="46"/><line x1="60" y1="46" x2="40" y2="46"/><line x1="24" y1="58" x2="40" y2="58"/><line x1="56" y1="58" x2="40" y2="58"/></g></svg>`;
const SVG_LONG_NEEDLE = `<svg ${SVG_W}><g ${STROKE}><line x1="40" y1="6" x2="40" y2="72"/><line x1="38" y1="6" x2="38" y2="72"/><line x1="42" y1="6" x2="42" y2="72"/><line x1="36" y1="10" x2="36" y2="68"/><line x1="44" y1="10" x2="44" y2="68"/></g></svg>`;
const SVG_MEDIUM_NEEDLE = `<svg ${SVG_W}><g ${STROKE}><line x1="36" y1="20" x2="36" y2="60"/><line x1="44" y1="20" x2="44" y2="60"/></g><circle cx="40" cy="64" r="5" ${FILL_SOFT} ${STROKE}/></svg>`;
const SVG_COLUMN = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 10 C50 30, 50 60, 40 72 C30 60, 30 30, 40 10 Z"/></g></svg>`;
const SVG_BUSH = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M14 60 C14 40, 26 30, 40 32 C54 30, 66 40, 66 60 Z"/></g><circle cx="30" cy="54" r="3" fill="currentColor" fill-opacity="0.4"/><circle cx="50" cy="52" r="3" fill="currentColor" fill-opacity="0.4"/></svg>`;

// Silhouette finali (riutilizzano shape esistenti per la maggior parte)
const SVG_SP_PINUS_PINEA = SVG_LONG_NEEDLE;
const SVG_SP_PINUS_PINASTER = SVG_MEDIUM_NEEDLE;
const SVG_SP_CUPRESSUS = SVG_COLUMN;
const SVG_SP_JUNIPERUS = SVG_BUSH;
const SVG_SP_LARIX = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><circle cx="40" cy="40" r="14"/><line x1="26" y1="40" x2="14" y2="38"/><line x1="26" y1="40" x2="16" y2="46"/><line x1="54" y1="40" x2="64" y2="38"/><line x1="54" y1="40" x2="66" y2="46"/><line x1="40" y1="26" x2="40" y2="14"/><line x1="40" y1="54" x2="40" y2="66"/></g></svg>`;
const SVG_SP_TAXUS = SVG_BERRIES_RED;
const SVG_SP_ABIES = SVG_CONES;
const SVG_SP_ILEX = SVG_MARGIN_SPINY;
const SVG_SP_QUERCUS_ILEX = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 12 L44 22 L54 18 L50 28 L62 28 L54 36 L62 44 L52 44 L56 54 L46 50 L42 60 L38 50 L24 54 L28 44 L18 44 L26 36 L18 28 L30 28 L26 18 L36 22 Z"/></g></svg>`;
const SVG_SP_OLEA = SVG_SILVER;
const SVG_SP_LAURUS = SVG_AROMATIC;
const SVG_SP_NERIUM = SVG_SHAPE_LINEAR;
const SVG_SP_HEDERA = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 70 L28 56 L14 50 L18 38 L30 42 L26 28 L40 36 L54 28 L50 42 L62 38 L66 50 L52 56 Z"/></g></svg>`;
const SVG_SP_MAGNOLIA = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 10 C62 18, 64 50, 40 70 C16 50, 18 18, 40 10 Z"/></g></svg>`;
const SVG_SP_CERCIS = SVG_SHAPE_CORDATE;
const SVG_SP_ULMUS = SVG_SHAPE_ASYMMETRIC;
const SVG_SP_FICUS = SVG_PINNATE_LOBED;
const SVG_SP_CASTANEA = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 8 L46 12 L48 18 L52 24 L56 32 L58 42 L56 52 L54 60 L48 66 L42 70 L40 72 L38 70 L32 66 L26 60 L24 52 L22 42 L24 32 L28 24 L32 18 L34 12 Z"/></g></svg>`;
const SVG_SP_FAGUS = SVG_SHAPE_OVATE;
const SVG_SP_TILIA = SVG_SHAPE_CORDATE;
const SVG_SP_CORYLUS = SVG_SHAPE_ROUND;
const SVG_SP_SALIX = SVG_SHAPE_LANCEOLATE;
const SVG_SP_POPULUS = SVG_SHAPE_TRIANGULAR;
const SVG_SP_BETULA = SVG_SHAPE_RHOMBOID;
const SVG_SP_QUERCUS_PUBESCENS = SVG_LOBES_ROUNDED;
const SVG_SP_QUERCUS_ROBUR = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 10 C44 12, 46 18, 50 20 C58 20, 60 28, 54 32 C62 34, 62 42, 54 44 C60 48, 58 56, 50 56 C50 62, 44 66, 40 66 C36 66, 30 62, 30 56 C22 56, 20 48, 26 44 C18 42, 18 34, 26 32 C20 28, 22 20, 30 20 C34 18, 36 12, 40 10 Z"/></g></svg>`;
const SVG_SP_QUERCUS_CERRIS = SVG_LOBES_POINTED;
const SVG_SP_ACER_PSEUDOPLATANUS = SVG_PALMATE_LOBED;
const SVG_SP_ACER_CAMPESTRE = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 70 L36 52 L24 46 L24 36 L36 36 L34 22 L40 28 L46 22 L44 36 L56 36 L56 46 L44 52 Z"/></g></svg>`;
const SVG_SP_PLATANUS = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 72 L36 50 L16 42 L18 28 L34 32 L30 14 L40 22 L50 14 L46 32 L62 28 L64 42 L44 50 Z"/></g></svg>`;
const SVG_SP_VITIS = `<svg ${SVG_W}><g ${STROKE} ${FILL_SOFT}><path d="M40 70 L34 48 L20 50 L18 36 L30 30 L24 16 L36 22 L40 14 L44 22 L56 16 L50 30 L62 36 L60 50 L46 48 Z"/></g></svg>`;
const SVG_SP_JUGLANS = SVG_PINNATE_COMPOUND;
const SVG_SP_FRAXINUS = `<svg ${SVG_W}><g ${STROKE}><line x1="40" y1="8" x2="40" y2="72"/></g><g ${STROKE} ${FILL_SOFT}><ellipse cx="28" cy="22" rx="6" ry="3.5"/><ellipse cx="52" cy="22" rx="6" ry="3.5"/><ellipse cx="24" cy="34" rx="7" ry="4"/><ellipse cx="56" cy="34" rx="7" ry="4"/><ellipse cx="24" cy="46" rx="7" ry="4"/><ellipse cx="56" cy="46" rx="7" ry="4"/><ellipse cx="28" cy="58" rx="6" ry="3.5"/><ellipse cx="52" cy="58" rx="6" ry="3.5"/><ellipse cx="40" cy="68" rx="6" ry="3.5"/></g></svg>`;
const SVG_SP_SORBUS = `<svg ${SVG_W}><g ${STROKE}><line x1="40" y1="8" x2="40" y2="72"/></g><g ${STROKE} ${FILL_SOFT}><ellipse cx="26" cy="18" rx="5" ry="3"/><ellipse cx="54" cy="18" rx="5" ry="3"/><ellipse cx="22" cy="28" rx="6" ry="3.5"/><ellipse cx="58" cy="28" rx="6" ry="3.5"/><ellipse cx="20" cy="40" rx="7" ry="4"/><ellipse cx="60" cy="40" rx="7" ry="4"/><ellipse cx="22" cy="52" rx="6" ry="3.5"/><ellipse cx="58" cy="52" rx="6" ry="3.5"/><ellipse cx="26" cy="62" rx="5" ry="3"/><ellipse cx="54" cy="62" rx="5" ry="3"/></g></svg>`;
const SVG_SP_ROBINIA = `<svg ${SVG_W}><g ${STROKE}><line x1="40" y1="8" x2="40" y2="72"/></g><g ${STROKE} ${FILL_SOFT}><ellipse cx="28" cy="20" rx="6" ry="4"/><ellipse cx="52" cy="20" rx="6" ry="4"/><ellipse cx="24" cy="32" rx="7" ry="4.5"/><ellipse cx="56" cy="32" rx="7" ry="4.5"/><ellipse cx="24" cy="44" rx="7" ry="4.5"/><ellipse cx="56" cy="44" rx="7" ry="4.5"/><ellipse cx="28" cy="56" rx="6" ry="4"/><ellipse cx="52" cy="56" rx="6" ry="4"/></g></svg>`;
const SVG_SP_AILANTHUS = SVG_PINNATE_COMPOUND;
const SVG_SP_SAMBUCUS = `<svg ${SVG_W}><g ${STROKE}><line x1="40" y1="14" x2="40" y2="66"/></g><g ${STROKE} ${FILL_SOFT}><path d="M22 22 L26 16 L34 18 L30 28 Z"/><path d="M58 22 L54 16 L46 18 L50 28 Z"/><path d="M20 40 L24 32 L34 34 L28 46 Z"/><path d="M60 40 L56 32 L46 34 L52 46 Z"/><path d="M26 58 L34 50 L40 54 L34 64 Z"/></g></svg>`;
const SVG_SP_AESCULUS = SVG_PALMATE_COMPOUND;

// ---------- Albero dicotomico ----------
const LEAFKEY = {
  start: 'q_form',
  nodes: {
    // ===== Q1 — Forma generale =====
    q_form: {
      type: 'question', q: 'lk.q.form',
      options: [
        { label: 'lk.opt.needle_scale', svg: SVG_NEEDLE, next: 'q_conifer_type' },
        { label: 'lk.opt.broad',         svg: SVG_BROAD,  next: 'q_evergreen' },
      ],
    },

    // ===== CONIFERE =====
    q_conifer_type: {
      type: 'question', q: 'lk.q.conifer_type',
      options: [
        { label: 'lk.opt.needles',   svg: SVG_NEEDLE, next: 'q_needles_arr' },
        { label: 'lk.opt.scales',    svg: SVG_SCALE,  next: 'q_scales' },
      ],
    },
    q_needles_arr: {
      type: 'question', q: 'lk.q.needles_arr',
      options: [
        { label: 'lk.opt.fascicle', svg: SVG_FASCICLE,      next: 'q_fascicle_len' },
        { label: 'lk.opt.single',   svg: SVG_SINGLE_NEEDLE, next: 'q_needle_decid' },
      ],
    },
    q_fascicle_len: {
      type: 'question', q: 'lk.q.fascicle_len',
      options: [
        { label: 'lk.opt.long',   svg: SVG_LONG_NEEDLE,   next: 'leaf_pinus_pinea' },
        { label: 'lk.opt.medium', svg: SVG_MEDIUM_NEEDLE, next: 'leaf_pinus_pinaster' },
      ],
    },
    q_needle_decid: {
      type: 'question', q: 'lk.q.needle_decid',
      options: [
        { label: 'lk.opt.deciduous', svg: SVG_DECIDUOUS, next: 'leaf_larix_decidua' },
        { label: 'lk.opt.evergreen', svg: SVG_EVERGREEN, next: 'q_taxus_abies' },
      ],
    },
    q_taxus_abies: {
      type: 'question', q: 'lk.q.taxus_abies',
      options: [
        { label: 'lk.opt.red_berries', svg: SVG_BERRIES_RED, next: 'leaf_taxus_baccata' },
        { label: 'lk.opt.true_cones',  svg: SVG_CONES,       next: 'leaf_abies_alba' },
      ],
    },
    q_scales: {
      type: 'question', q: 'lk.q.scales_shape',
      options: [
        { label: 'lk.opt.column', svg: SVG_COLUMN, next: 'leaf_cupressus_sempervirens' },
        { label: 'lk.opt.bush',   svg: SVG_BUSH,   next: 'leaf_juniperus_communis' },
      ],
    },

    // ===== LATIFOGLIE — Q "stagionalità" =====
    q_evergreen: {
      type: 'question', q: 'lk.q.evergreen',
      options: [
        { label: 'lk.opt.evergreen', svg: SVG_EVERGREEN, next: 'q_ev_margin' },
        { label: 'lk.opt.deciduous', svg: SVG_DECIDUOUS, next: 'q_dec_composition' },
      ],
    },

    // ----- SEMPREVERDI -----
    q_ev_margin: {
      type: 'question', q: 'lk.q.ev_margin',
      options: [
        { label: 'lk.opt.spiny_lobed', svg: SVG_MARGIN_SPINY,  next: 'q_ev_spiny_or_lobed' },
        { label: 'lk.opt.entire',      svg: SVG_MARGIN_ENTIRE, next: 'q_ev_shape' },
      ],
    },
    q_ev_spiny_or_lobed: {
      type: 'question', q: 'lk.q.ev_spiny_or_lobed',
      options: [
        { label: 'lk.opt.true_spines',   svg: SVG_MARGIN_SPINY, next: 'q_ev_spiny_type' },
        { label: 'lk.opt.lobed_climber', svg: SVG_SP_HEDERA,    next: 'leaf_hedera_helix' },
      ],
    },
    q_ev_spiny_type: {
      type: 'question', q: 'lk.q.ev_spiny_type',
      options: [
        { label: 'lk.opt.shiny_thick',  svg: SVG_SP_ILEX,         next: 'leaf_ilex_aquifolium' },
        { label: 'lk.opt.tomentose',    svg: SVG_SP_QUERCUS_ILEX, next: 'leaf_quercus_ilex' },
      ],
    },
    q_ev_shape: {
      type: 'question', q: 'lk.q.ev_shape',
      options: [
        { label: 'lk.opt.narrow',  svg: SVG_SHAPE_LANCEOLATE, next: 'q_ev_narrow' },
        { label: 'lk.opt.wide',    svg: SVG_SHAPE_OVATE,      next: 'q_ev_wide' },
      ],
    },
    q_ev_narrow: {
      type: 'question', q: 'lk.q.ev_narrow',
      options: [
        { label: 'lk.opt.silver_under', svg: SVG_SILVER,        next: 'leaf_olea_europaea' },
        { label: 'lk.opt.long_linear',  svg: SVG_SHAPE_LINEAR,  next: 'leaf_nerium_oleander' },
      ],
    },
    q_ev_wide: {
      type: 'question', q: 'lk.q.ev_wide',
      options: [
        { label: 'lk.opt.aromatic',     svg: SVG_AROMATIC,    next: 'leaf_laurus_nobilis' },
        { label: 'lk.opt.big_glossy',   svg: SVG_SP_MAGNOLIA, next: 'leaf_magnolia_grandiflora' },
      ],
    },

    // ----- CADUCIFOGLIE -----
    q_dec_composition: {
      type: 'question', q: 'lk.q.composition',
      options: [
        { label: 'lk.opt.simple',   svg: SVG_SIMPLE,   next: 'q_dec_margin' },
        { label: 'lk.opt.compound', svg: SVG_COMPOUND, next: 'q_dec_compound' },
      ],
    },

    // ----- Caduca semplice -----
    q_dec_margin: {
      type: 'question', q: 'lk.q.dec_margin',
      options: [
        { label: 'lk.opt.entire_or_dented', svg: SVG_MARGIN_SERRATED, next: 'q_dec_entire_or_dented' },
        { label: 'lk.opt.deeply_lobed',     svg: SVG_MARGIN_LOBED,    next: 'q_lobe_type' },
      ],
    },
    q_dec_entire_or_dented: {
      type: 'question', q: 'lk.q.entire_or_dented',
      options: [
        { label: 'lk.opt.heart_entire', svg: SVG_SHAPE_CORDATE,   next: 'leaf_cercis_siliquastrum' },
        { label: 'lk.opt.dented',       svg: SVG_MARGIN_SERRATED, next: 'q_dented_base' },
      ],
    },
    q_dented_base: {
      type: 'question', q: 'lk.q.dented_base',
      options: [
        { label: 'lk.opt.asymmetric',  svg: SVG_SHAPE_ASYMMETRIC, next: 'leaf_ulmus_minor' },
        { label: 'lk.opt.symmetric',   svg: SVG_SHAPE_OVATE,      next: 'q_dented_shape' },
      ],
    },
    q_dented_shape: {
      type: 'question', q: 'lk.q.dented_shape',
      options: [
        { label: 'lk.opt.narrow', svg: SVG_SHAPE_LANCEOLATE, next: 'q_dented_narrow' },
        { label: 'lk.opt.wide',   svg: SVG_SHAPE_OVATE,      next: 'q_dented_wide' },
      ],
    },
    q_dented_narrow: {
      type: 'question', q: 'lk.q.dented_narrow',
      options: [
        { label: 'lk.opt.lanceolate',     svg: SVG_SHAPE_LANCEOLATE, next: 'leaf_salix_alba' },
        { label: 'lk.opt.triang_rhomb',   svg: SVG_SHAPE_TRIANGULAR, next: 'q_dented_tri' },
      ],
    },
    q_dented_tri: {
      type: 'question', q: 'lk.q.dented_tri',
      options: [
        { label: 'lk.opt.triangular',  svg: SVG_SHAPE_TRIANGULAR, next: 'leaf_populus_nigra' },
        { label: 'lk.opt.rhomboid',    svg: SVG_SHAPE_RHOMBOID,   next: 'leaf_betula_pendula' },
      ],
    },
    q_dented_wide: {
      type: 'question', q: 'lk.q.dented_wide',
      options: [
        { label: 'lk.opt.cordate', svg: SVG_SHAPE_CORDATE, next: 'q_cordate_type' },
        { label: 'lk.opt.ovate',   svg: SVG_SHAPE_OVATE,   next: 'q_ovate_type' },
      ],
    },
    q_cordate_type: {
      type: 'question', q: 'lk.q.cordate_type',
      options: [
        { label: 'lk.opt.small_regular',    svg: SVG_SP_TILIA,    next: 'leaf_tilia_cordata' },
        { label: 'lk.opt.big_roundish',     svg: SVG_SP_CORYLUS,  next: 'leaf_corylus_avellana' },
      ],
    },
    q_ovate_type: {
      type: 'question', q: 'lk.q.ovate_type',
      options: [
        { label: 'lk.opt.long_sharp_teeth', svg: SVG_SP_CASTANEA, next: 'leaf_castanea_sativa' },
        { label: 'lk.opt.small_soft_teeth', svg: SVG_SP_FAGUS,    next: 'leaf_fagus_sylvatica' },
      ],
    },

    // ----- Caduca semplice LOBATA -----
    q_lobe_type: {
      type: 'question', q: 'lk.q.lobe_type',
      options: [
        { label: 'lk.opt.pinnate_lobed', svg: SVG_PINNATE_LOBED, next: 'q_pinnate_lobed' },
        { label: 'lk.opt.palmate_lobed', svg: SVG_PALMATE_LOBED, next: 'q_palmate_lobed' },
      ],
    },
    q_pinnate_lobed: {
      type: 'question', q: 'lk.q.pinnate_lobed',
      options: [
        { label: 'lk.opt.rounded_lobes',  svg: SVG_LOBES_ROUNDED, next: 'q_oak_round' },
        { label: 'lk.opt.pointed_lobes',  svg: SVG_LOBES_POINTED, next: 'q_oak_pointed_or_fig' },
      ],
    },
    q_oak_round: {
      type: 'question', q: 'lk.q.oak_round',
      options: [
        { label: 'lk.opt.small_hairy',  svg: SVG_SP_QUERCUS_PUBESCENS, next: 'leaf_quercus_pubescens' },
        { label: 'lk.opt.big_glabrous', svg: SVG_SP_QUERCUS_ROBUR,     next: 'leaf_quercus_robur' },
      ],
    },
    q_oak_pointed_or_fig: {
      type: 'question', q: 'lk.q.oak_pointed_or_fig',
      options: [
        { label: 'lk.opt.deep_pointed',  svg: SVG_SP_QUERCUS_CERRIS, next: 'leaf_quercus_cerris' },
        { label: 'lk.opt.three_five',    svg: SVG_SP_FICUS,          next: 'leaf_ficus_carica' },
      ],
    },
    q_palmate_lobed: {
      type: 'question', q: 'lk.q.palmate_lobed',
      options: [
        { label: 'lk.opt.large_palmate', svg: SVG_SP_PLATANUS, next: 'q_large_palmate' },
        { label: 'lk.opt.medium_palmate', svg: SVG_SP_ACER_CAMPESTRE, next: 'q_medium_palmate' },
      ],
    },
    q_large_palmate: {
      type: 'question', q: 'lk.q.large_palmate',
      options: [
        { label: 'lk.opt.rounded_big', svg: SVG_SP_PLATANUS,           next: 'leaf_platanus' },
        { label: 'lk.opt.pointed_big', svg: SVG_SP_ACER_PSEUDOPLATANUS, next: 'leaf_acer_pseudoplatanus' },
      ],
    },
    q_medium_palmate: {
      type: 'question', q: 'lk.q.medium_palmate',
      options: [
        { label: 'lk.opt.small_rounded', svg: SVG_SP_ACER_CAMPESTRE, next: 'leaf_acer_campestre' },
        { label: 'lk.opt.heart_palmate', svg: SVG_SP_VITIS,          next: 'leaf_vitis_vinifera' },
      ],
    },

    // ----- Caduca COMPOSTA -----
    q_dec_compound: {
      type: 'question', q: 'lk.q.compound_type',
      options: [
        { label: 'lk.opt.palmate_compound', svg: SVG_PALMATE_COMPOUND, next: 'leaf_aesculus' },
        { label: 'lk.opt.pinnate_compound', svg: SVG_PINNATE_COMPOUND, next: 'q_pinnate_size' },
      ],
    },
    q_pinnate_size: {
      type: 'question', q: 'lk.q.pinnate_size',
      options: [
        { label: 'lk.opt.big_leaflets',    svg: SVG_BIG,   next: 'q_big_leaflets' },
        { label: 'lk.opt.small_leaflets',  svg: SVG_SMALL, next: 'q_small_leaflets_margin' },
      ],
    },
    q_big_leaflets: {
      type: 'question', q: 'lk.q.big_leaflets',
      options: [
        { label: 'lk.opt.aromatic_walnut',  svg: SVG_AROMATIC,    next: 'leaf_juglans_regia' },
        { label: 'lk.opt.gland_base',       svg: SVG_NONAROMATIC, next: 'leaf_ailanthus_altissima' },
      ],
    },
    q_small_leaflets_margin: {
      type: 'question', q: 'lk.q.small_leaflets_margin',
      options: [
        { label: 'lk.opt.leaflets_entire',  svg: SVG_MARGIN_ENTIRE,   next: 'q_pinnate_entire' },
        { label: 'lk.opt.leaflets_dented',  svg: SVG_MARGIN_SERRATED, next: 'q_pinnate_dented' },
      ],
    },
    q_pinnate_entire: {
      type: 'question', q: 'lk.q.pinnate_entire',
      options: [
        { label: 'lk.opt.ovate_many',      svg: SVG_SP_ROBINIA,  next: 'leaf_robinia_pseudoacacia' },
        { label: 'lk.opt.ovate_paired',    svg: SVG_SP_FRAXINUS, next: 'leaf_fraxinus_excelsior' },
      ],
    },
    q_pinnate_dented: {
      type: 'question', q: 'lk.q.pinnate_dented',
      options: [
        { label: 'lk.opt.narrow_dented',   svg: SVG_SP_SORBUS,   next: 'leaf_sorbus_aucuparia' },
        { label: 'lk.opt.ovate_dented',    svg: SVG_SP_SAMBUCUS, next: 'leaf_sambucus_nigra' },
      ],
    },

    // ===== FOGLIE FINALI =====
    leaf_pinus_pinea:           { type: 'leaf', sci: 'Pinus pinea',            common: 'lk.leaf.pinus_pinea',           family: 'Pinaceae',     desc: 'lk.desc.pinus_pinea',           svg: SVG_SP_PINUS_PINEA },
    leaf_pinus_pinaster:        { type: 'leaf', sci: 'Pinus pinaster',         common: 'lk.leaf.pinus_pinaster',        family: 'Pinaceae',     desc: 'lk.desc.pinus_pinaster',        svg: SVG_SP_PINUS_PINASTER },
    leaf_cupressus_sempervirens:{ type: 'leaf', sci: 'Cupressus sempervirens', common: 'lk.leaf.cupressus_sempervirens',family: 'Cupressaceae', desc: 'lk.desc.cupressus_sempervirens',svg: SVG_SP_CUPRESSUS },
    leaf_juniperus_communis:    { type: 'leaf', sci: 'Juniperus communis',     common: 'lk.leaf.juniperus_communis',    family: 'Cupressaceae', desc: 'lk.desc.juniperus_communis',    svg: SVG_SP_JUNIPERUS },
    leaf_larix_decidua:         { type: 'leaf', sci: 'Larix decidua',          common: 'lk.leaf.larix_decidua',         family: 'Pinaceae',     desc: 'lk.desc.larix_decidua',         svg: SVG_SP_LARIX },
    leaf_taxus_baccata:         { type: 'leaf', sci: 'Taxus baccata',          common: 'lk.leaf.taxus_baccata',         family: 'Taxaceae',     desc: 'lk.desc.taxus_baccata',         svg: SVG_SP_TAXUS },
    leaf_abies_alba:            { type: 'leaf', sci: 'Abies alba',             common: 'lk.leaf.abies_alba',            family: 'Pinaceae',     desc: 'lk.desc.abies_alba',            svg: SVG_SP_ABIES },

    leaf_ilex_aquifolium:       { type: 'leaf', sci: 'Ilex aquifolium',        common: 'lk.leaf.ilex_aquifolium',       family: 'Aquifoliaceae',desc: 'lk.desc.ilex_aquifolium',       svg: SVG_SP_ILEX },
    leaf_quercus_ilex:          { type: 'leaf', sci: 'Quercus ilex',           common: 'lk.leaf.quercus_ilex',          family: 'Fagaceae',     desc: 'lk.desc.quercus_ilex',          svg: SVG_SP_QUERCUS_ILEX },
    leaf_olea_europaea:         { type: 'leaf', sci: 'Olea europaea',          common: 'lk.leaf.olea_europaea',         family: 'Oleaceae',     desc: 'lk.desc.olea_europaea',         svg: SVG_SP_OLEA },
    leaf_laurus_nobilis:        { type: 'leaf', sci: 'Laurus nobilis',         common: 'lk.leaf.laurus_nobilis',        family: 'Lauraceae',    desc: 'lk.desc.laurus_nobilis',        svg: SVG_SP_LAURUS },
    leaf_nerium_oleander:       { type: 'leaf', sci: 'Nerium oleander',        common: 'lk.leaf.nerium_oleander',       family: 'Apocynaceae',  desc: 'lk.desc.nerium_oleander',       svg: SVG_SP_NERIUM },
    leaf_hedera_helix:          { type: 'leaf', sci: 'Hedera helix',           common: 'lk.leaf.hedera_helix',          family: 'Araliaceae',   desc: 'lk.desc.hedera_helix',          svg: SVG_SP_HEDERA },
    leaf_magnolia_grandiflora:  { type: 'leaf', sci: 'Magnolia grandiflora',   common: 'lk.leaf.magnolia_grandiflora',  family: 'Magnoliaceae', desc: 'lk.desc.magnolia_grandiflora',  svg: SVG_SP_MAGNOLIA },

    leaf_cercis_siliquastrum:   { type: 'leaf', sci: 'Cercis siliquastrum',    common: 'lk.leaf.cercis_siliquastrum',   family: 'Fabaceae',     desc: 'lk.desc.cercis_siliquastrum',   svg: SVG_SP_CERCIS },
    leaf_ulmus_minor:           { type: 'leaf', sci: 'Ulmus minor',            common: 'lk.leaf.ulmus_minor',           family: 'Ulmaceae',     desc: 'lk.desc.ulmus_minor',           svg: SVG_SP_ULMUS },
    leaf_ficus_carica:          { type: 'leaf', sci: 'Ficus carica',           common: 'lk.leaf.ficus_carica',          family: 'Moraceae',     desc: 'lk.desc.ficus_carica',          svg: SVG_SP_FICUS },

    leaf_castanea_sativa:       { type: 'leaf', sci: 'Castanea sativa',        common: 'lk.leaf.castanea_sativa',       family: 'Fagaceae',     desc: 'lk.desc.castanea_sativa',       svg: SVG_SP_CASTANEA },
    leaf_fagus_sylvatica:       { type: 'leaf', sci: 'Fagus sylvatica',        common: 'lk.leaf.fagus_sylvatica',       family: 'Fagaceae',     desc: 'lk.desc.fagus_sylvatica',       svg: SVG_SP_FAGUS },
    leaf_tilia_cordata:         { type: 'leaf', sci: 'Tilia cordata',          common: 'lk.leaf.tilia_cordata',         family: 'Malvaceae',    desc: 'lk.desc.tilia_cordata',         svg: SVG_SP_TILIA },
    leaf_corylus_avellana:      { type: 'leaf', sci: 'Corylus avellana',       common: 'lk.leaf.corylus_avellana',      family: 'Betulaceae',   desc: 'lk.desc.corylus_avellana',      svg: SVG_SP_CORYLUS },
    leaf_salix_alba:            { type: 'leaf', sci: 'Salix alba',             common: 'lk.leaf.salix_alba',            family: 'Salicaceae',   desc: 'lk.desc.salix_alba',            svg: SVG_SP_SALIX },
    leaf_populus_nigra:         { type: 'leaf', sci: 'Populus nigra',          common: 'lk.leaf.populus_nigra',         family: 'Salicaceae',   desc: 'lk.desc.populus_nigra',         svg: SVG_SP_POPULUS },
    leaf_betula_pendula:        { type: 'leaf', sci: 'Betula pendula',         common: 'lk.leaf.betula_pendula',        family: 'Betulaceae',   desc: 'lk.desc.betula_pendula',        svg: SVG_SP_BETULA },

    leaf_quercus_pubescens:     { type: 'leaf', sci: 'Quercus pubescens',      common: 'lk.leaf.quercus_pubescens',     family: 'Fagaceae',     desc: 'lk.desc.quercus_pubescens',     svg: SVG_SP_QUERCUS_PUBESCENS },
    leaf_quercus_robur:         { type: 'leaf', sci: 'Quercus robur',          common: 'lk.leaf.quercus_robur',         family: 'Fagaceae',     desc: 'lk.desc.quercus_robur',         svg: SVG_SP_QUERCUS_ROBUR },
    leaf_quercus_cerris:        { type: 'leaf', sci: 'Quercus cerris',         common: 'lk.leaf.quercus_cerris',        family: 'Fagaceae',     desc: 'lk.desc.quercus_cerris',        svg: SVG_SP_QUERCUS_CERRIS },
    leaf_acer_pseudoplatanus:   { type: 'leaf', sci: 'Acer pseudoplatanus',    common: 'lk.leaf.acer_pseudoplatanus',   family: 'Sapindaceae',  desc: 'lk.desc.acer_pseudoplatanus',   svg: SVG_SP_ACER_PSEUDOPLATANUS },
    leaf_acer_campestre:        { type: 'leaf', sci: 'Acer campestre',         common: 'lk.leaf.acer_campestre',        family: 'Sapindaceae',  desc: 'lk.desc.acer_campestre',        svg: SVG_SP_ACER_CAMPESTRE },
    leaf_platanus:              { type: 'leaf', sci: 'Platanus × acerifolia',  common: 'lk.leaf.platanus',              family: 'Platanaceae',  desc: 'lk.desc.platanus',              svg: SVG_SP_PLATANUS },
    leaf_vitis_vinifera:        { type: 'leaf', sci: 'Vitis vinifera',         common: 'lk.leaf.vitis_vinifera',        family: 'Vitaceae',     desc: 'lk.desc.vitis_vinifera',        svg: SVG_SP_VITIS },

    leaf_juglans_regia:         { type: 'leaf', sci: 'Juglans regia',          common: 'lk.leaf.juglans_regia',         family: 'Juglandaceae', desc: 'lk.desc.juglans_regia',         svg: SVG_SP_JUGLANS },
    leaf_fraxinus_excelsior:    { type: 'leaf', sci: 'Fraxinus excelsior',     common: 'lk.leaf.fraxinus_excelsior',    family: 'Oleaceae',     desc: 'lk.desc.fraxinus_excelsior',    svg: SVG_SP_FRAXINUS },
    leaf_sorbus_aucuparia:      { type: 'leaf', sci: 'Sorbus aucuparia',       common: 'lk.leaf.sorbus_aucuparia',      family: 'Rosaceae',     desc: 'lk.desc.sorbus_aucuparia',      svg: SVG_SP_SORBUS },
    leaf_robinia_pseudoacacia:  { type: 'leaf', sci: 'Robinia pseudoacacia',   common: 'lk.leaf.robinia_pseudoacacia',  family: 'Fabaceae',     desc: 'lk.desc.robinia_pseudoacacia',  svg: SVG_SP_ROBINIA },
    leaf_ailanthus_altissima:   { type: 'leaf', sci: 'Ailanthus altissima',    common: 'lk.leaf.ailanthus_altissima',   family: 'Simaroubaceae',desc: 'lk.desc.ailanthus_altissima',   svg: SVG_SP_AILANTHUS },
    leaf_sambucus_nigra:        { type: 'leaf', sci: 'Sambucus nigra',         common: 'lk.leaf.sambucus_nigra',        family: 'Adoxaceae',    desc: 'lk.desc.sambucus_nigra',        svg: SVG_SP_SAMBUCUS },
    leaf_aesculus:              { type: 'leaf', sci: 'Aesculus hippocastanum', common: 'lk.leaf.aesculus',              family: 'Sapindaceae',  desc: 'lk.desc.aesculus',              svg: SVG_SP_AESCULUS },
  },
};

// ---------- Stato runtime ----------
let lkCurrent = LEAFKEY.start;
let lkHistory = [];   // [{ nodeId, choiceIdx, choiceLabel }]

// ---------- API pubblica ----------
function startLeafKey() {
  lkCurrent = LEAFKEY.start;
  lkHistory = [];
  renderLeafkey();
}

function lkAnswer(idx) {
  const node = LEAFKEY.nodes[lkCurrent];
  if (!node || node.type !== 'question') return;
  const opt = node.options[idx];
  if (!opt) return;
  lkHistory.push({ nodeId: lkCurrent, choiceIdx: idx, choiceLabel: opt.label });
  lkCurrent = opt.next;
  renderLeafkey();
}

function lkBack() {
  if (lkHistory.length === 0) return;
  const prev = lkHistory.pop();
  lkCurrent = prev.nodeId;
  renderLeafkey();
}

function lkRestart() {
  startLeafKey();
}

function lkUseResult() {
  const node = LEAFKEY.nodes[lkCurrent];
  if (!node || node.type !== 'leaf') return;
  navigateTo('screen-record');
  setTimeout(() => {
    const floraBtn = document.querySelector('.obs-type-btn[data-type="flora"]');
    if (floraBtn) selectObsType(floraBtn);
    const input = document.getElementById('species-input');
    if (input) input.value = node.sci;
    if (typeof showToast === 'function') showToast(t('lk.toast.used'), 'check_circle');
  }, 150);
}

// ---------- Rendering ----------
function renderLeafkey() {
  const node = LEAFKEY.nodes[lkCurrent];
  const container = document.getElementById('lk-container');
  if (!container || !node) return;
  if (node.type === 'question') renderQuestion(node, container);
  else if (node.type === 'leaf') renderResult(node, container);
  renderBreadcrumb();
}

function renderBreadcrumb() {
  const bc = document.getElementById('lk-breadcrumb');
  if (!bc) return;
  if (lkHistory.length === 0) { bc.textContent = ''; return; }
  bc.textContent = lkHistory.map(h => t(h.choiceLabel)).join(' › ');
}

function renderQuestion(node, container) {
  const step = lkHistory.length + 1;
  container.innerHTML = `
    <section class="space-y-2">
      <p class="font-label text-[11px] font-medium uppercase tracking-widest text-primary">${t('lk.step')} ${step}</p>
      <h2 class="font-headline text-2xl font-extrabold tracking-tight text-on-surface">${t(node.q)}</h2>
    </section>
    <div class="space-y-3">
      ${node.options.map((opt, i) => `
        <button type="button" onclick="lkAnswer(${i})"
          class="lk-opt w-full bg-surface-container-lowest rounded-tr-[2rem] rounded-bl-[2rem] p-5 border-2 border-outline-variant/20 hover:bg-surface-container-low hover:border-primary/40 active:scale-[0.98] transition-all flex items-center gap-4 text-left">
          <div class="shrink-0 w-20 h-20 text-primary">${opt.svg}</div>
          <div class="flex-1">
            <p class="font-headline font-bold text-base text-on-surface">${t(opt.label)}</p>
          </div>
          <span class="material-symbols-outlined text-primary">chevron_right</span>
        </button>
      `).join('')}
    </div>
    ${lkHistory.length > 0 ? `
      <div class="pt-2">
        <button type="button" onclick="lkBack()" class="text-sm font-label font-semibold text-on-surface-variant inline-flex items-center gap-1 active:scale-95 transition-transform">
          <span class="material-symbols-outlined text-base">arrow_back</span>
          ${t('lk.back')}
        </button>
      </div>` : ''}
  `;
}

function renderResult(node, container) {
  container.innerHTML = `
    <section class="text-center space-y-3 pt-4">
      <div class="mx-auto w-40 h-40 text-primary">${node.svg}</div>
      <p class="font-label text-[11px] font-bold uppercase tracking-widest text-primary">${t('lk.identified')}</p>
      <h2 class="font-headline text-3xl font-extrabold italic tracking-tight text-on-surface">${node.sci}</h2>
      <p class="font-headline text-lg text-on-surface">${t(node.common)}</p>
      <p class="inline-block bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">${node.family}</p>
    </section>
    <section class="bg-surface-container-lowest rounded-tr-[2rem] rounded-bl-[2rem] p-5 border border-outline-variant/10">
      <p class="text-sm text-on-surface leading-relaxed">${t(node.desc)}</p>
    </section>
    <div class="space-y-3 pt-2 pb-4">
      <button type="button" onclick="lkUseResult()"
        class="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-xl font-label text-sm font-bold uppercase tracking-[0.1em] shadow-[0_12px_40px_rgba(13,99,27,0.25)] active:scale-95 transition-all flex items-center justify-center gap-2">
        <span class="material-symbols-outlined text-base filled">eco</span>
        <span>${t('lk.use_result')}</span>
      </button>
      <button type="button" onclick="lkBack()"
        class="w-full py-3 bg-surface-container-low text-on-surface rounded-xl font-label text-xs font-bold uppercase tracking-[0.1em] active:scale-95 transition-all">
        ${t('lk.review_last')}
      </button>
      <button type="button" onclick="lkRestart()"
        class="w-full py-2 text-on-surface-variant font-label text-xs font-bold uppercase tracking-[0.1em]">
        ${t('lk.restart')}
      </button>
    </div>
  `;
}

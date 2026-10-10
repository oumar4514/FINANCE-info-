
"use strict";

/* =====================================================
   FINANCE-info 🗞️
   Bot éducatif à réponses prédéfinies
   Aucune IA externe, aucune API nécessaire.
===================================================== */

const DATABASE = [
  {
    id: "FX001", category: "Forex",
    question: "Qu'est-ce que le Forex ?",
    aliases: ["c'est quoi le forex", "comment fonctionne le forex", "marche des devises", "definition forex"],
    keywords: ["forex", "devises", "change"],
    answer: "Le Forex est le marché sur lequel les devises sont échangées. Une paire de devises exprime la valeur d'une devise par rapport à une autre. Les prix évoluent notamment selon l'offre, la demande et les conditions économiques."
  },
  {
    id: "FX002", category: "Forex",
    question: "Qu'est-ce qu'une paire de devises ?",
    aliases: ["paire forex", "comment lire une paire de devises"],
    keywords: ["paire", "devise", "eurusd"],
    answer: "Une paire de devises compare deux monnaies. Dans EUR/USD, l'euro est la devise de base et le dollar américain la devise de cotation. Le prix indique combien de dollars correspondent à un euro."
  },
  {
    id: "FX003", category: "Forex",
    question: "Que signifie EUR/USD ?",
    aliases: ["c'est quoi eurusd", "euro dollar", "signification eur usd"],
    keywords: ["eurusd", "euro", "dollar"],
    answer: "EUR/USD est la paire euro/dollar américain. Si elle cote 1,1000, un euro vaut 1,10 dollar selon ce cours indicatif. Le prix évolue constamment pendant les périodes de cotation."
  },
  {
    id: "FX004", category: "Forex",
    question: "Qu'est-ce qu'un pip ?",
    aliases: ["calcul du pip", "valeur d'un pip", "definition pip forex"],
    keywords: ["pip", "pips"],
    answer: "Un pip est une unité de variation du prix d'une paire de devises. Il correspond généralement à 0,0001 pour beaucoup de paires et à 0,01 pour les paires cotées en yens. La valeur monétaire du pip dépend de la position et du contrat."
  },
  {
    id: "FX005", category: "Forex",
    question: "Qu'est-ce que le spread ?",
    aliases: ["frais de spread", "bid ask", "ecart acheteur vendeur"],
    keywords: ["spread", "bid", "ask", "courtier"],
    answer: "Le spread est l'écart entre le prix acheteur (bid) et le prix vendeur (ask). C'est un coût de transaction implicite. Il varie selon l'instrument, le courtier et les conditions du marché."
  },
  {
    id: "FX006", category: "Forex",
    question: "Qu'est-ce que l'effet de levier ?",
    aliases: ["leverage trading", "comment fonctionne le levier"],
    keywords: ["levier", "leverage", "marge"],
    answer: "L'effet de levier permet de contrôler une exposition supérieure aux fonds immobilisés. Il amplifie les gains comme les pertes et peut entraîner une liquidation rapide du capital. Les limites dépendent du produit et du courtier."
  },
  {
    id: "FX007", category: "Forex",
    question: "Qu'est-ce qu'un lot en Forex ?",
    aliases: ["taille de lot", "lot standard mini lot micro lot"],
    keywords: ["lot", "lots", "taille position"],
    answer: "Un lot mesure la taille d'une position. Sur le Forex, un lot standard correspond souvent à 100 000 unités de la devise de base, un mini-lot à 10 000 et un micro-lot à 1 000. Vérifie les spécifications du contrat."
  },
  {
    id: "FX008", category: "Forex",
    question: "Quelle est la différence entre achat et vente ?",
    aliases: ["buy sell", "position longue courte", "long short"],
    keywords: ["achat", "vente", "buy", "sell", "long", "short"],
    answer: "Acheter (buy) revient généralement à profiter d'une hausse du prix de l'actif. Vendre à découvert (sell) revient à profiter d'une baisse. Les modalités et risques dépendent du produit négocié."
  },
  {
    id: "FX009", category: "Forex",
    question: "Quelles sont les sessions de trading ?",
    aliases: ["session asiatique london new york", "horaires forex"],
    keywords: ["session", "londres", "new york", "tokyo", "sydney"],
    answer: "Les principales sessions généralement suivies sont Sydney, Tokyo, Londres et New York. Les heures exactes changent avec les fuseaux horaires et l'heure d'été. Les chevauchements peuvent offrir davantage de liquidité, sans garantir de bons résultats."
  },
  {
    id: "FX010", category: "Forex",
    question: "Qu'est-ce que la liquidité ?",
    aliases: ["liquidite du marche", "marche liquide"],
    keywords: ["liquidite", "liquide", "slippage"],
    answer: "La liquidité décrit la facilité avec laquelle un actif peut être acheté ou vendu sans modifier fortement son prix. Une liquidité faible peut élargir les spreads et accroître le slippage."
  },

  {
    id: "XAU001", category: "Or & XAUUSD",
    question: "Qu'est-ce que le XAUUSD ?",
    aliases: ["c'est quoi xauusd", "definition xauusd", "trading de l'or", "prix de l'or en dollar"],
    keywords: ["xauusd", "gold", "or", "once"],
    answer: "XAUUSD désigne l'or coté en dollars américains, généralement par once troy sur les plateformes de trading. Son cours dépend notamment du dollar, des taux d'intérêt, des anticipations économiques et de la demande d'or."
  },
  {
    id: "XAU002", category: "Or & XAUUSD",
    question: "Quels facteurs influencent le prix de l'or ?",
    aliases: ["pourquoi l'or monte", "pourquoi l'or baisse", "facteurs du gold"],
    keywords: ["or", "gold", "taux", "dollar", "prix"],
    answer: "L'or peut réagir au dollar américain, aux taux d'intérêt réels, aux anticipations de politique monétaire, aux risques géopolitiques et aux achats des banques centrales. Ces relations ne sont pas mécaniques : plusieurs facteurs peuvent se contredire."
  },
  {
    id: "XAU003", category: "Or & XAUUSD",
    question: "Quel est le lien entre l'or et le dollar ?",
    aliases: ["correlation or dollar", "dxy et xauusd"],
    keywords: ["or", "dollar", "dxy", "correlation"],
    answer: "L'or et le dollar évoluent parfois en sens inverse, car l'or est souvent coté en dollars. Cependant, cette relation n'est pas constante : les taux, les risques et les flux de marché peuvent modifier leur comportement."
  },
  {
    id: "XAU004", category: "Or & XAUUSD",
    question: "Comment calculer la taille d'une position sur l'or ?",
    aliases: ["lot xauusd", "calculer lot gold", "taille position or"],
    keywords: ["xauusd", "lot", "taille", "risque"],
    answer: "Définis d'abord le montant que tu acceptes de risquer, puis la distance entre ton entrée et ton stop-loss. Utilise ensuite la valeur par mouvement de prix indiquée dans les spécifications du contrat de ton courtier. Les contrats XAUUSD peuvent différer selon les plateformes."
  },
  {
    id: "XAU005", category: "Or & XAUUSD",
    question: "L'or est-il toujours une valeur refuge ?",
    aliases: ["or valeur refuge", "gold refuge"],
    keywords: ["or", "refuge", "crise"],
    answer: "L'or est souvent considéré comme une valeur refuge, mais son prix peut aussi chuter lors d'une crise. Les besoins de liquidité, les taux d'intérêt, le dollar et les positions des investisseurs influencent son cours."
  },

  {
    id: "TA001", category: "Analyse technique",
    question: "Qu'est-ce que l'analyse technique ?",
    aliases: ["definition analyse technique", "analyser un graphique", "technical analysis"],
    keywords: ["analyse", "technique", "graphique", "prix"],
    answer: "L'analyse technique étudie les graphiques, les prix, les volumes disponibles et les configurations historiques pour construire des scénarios. Elle ne prédit pas l'avenir avec certitude et doit être associée à une gestion du risque."
  },
  {
    id: "TA002", category: "Analyse technique",
    question: "Qu'est-ce qu'un support ?",
    aliases: ["zone de support", "comment tracer support"],
    keywords: ["support", "niveau", "rebond"],
    answer: "Un support est une zone où la demande a historiquement contribué à freiner une baisse. Il s'agit d'une zone d'observation, pas d'une garantie de rebond."
  },
  {
    id: "TA003", category: "Analyse technique",
    question: "Qu'est-ce qu'une résistance ?",
    aliases: ["zone de resistance", "comment tracer resistance"],
    keywords: ["resistance", "niveau", "rejet"],
    answer: "Une résistance est une zone où la pression vendeuse a historiquement contribué à freiner une hausse. Le prix peut la respecter, la traverser ou effectuer une fausse cassure."
  },
  {
    id: "TA004", category: "Analyse technique",
    question: "Comment reconnaître une tendance haussière ?",
    aliases: ["structure haussiere", "higher highs higher lows"],
    keywords: ["tendance", "haussiere", "sommets", "creux"],
    answer: "Une tendance haussière présente généralement des sommets et des creux successifs plus élevés. Il faut préciser l'unité de temps et surveiller les changements de structure."
  },
  {
    id: "TA005", category: "Analyse technique",
    question: "Comment reconnaître une tendance baissière ?",
    aliases: ["structure baissiere", "lower highs lower lows"],
    keywords: ["tendance", "baissiere", "sommets", "creux"],
    answer: "Une tendance baissière présente généralement des sommets et des creux successifs plus bas. Cette lecture reste liée à l'unité de temps et ne garantit pas que la baisse continuera."
  },
  {
    id: "TA006", category: "Analyse technique",
    question: "Qu'est-ce qu'une bougie japonaise ?",
    aliases: ["candlestick", "lire une bougie", "chandeliers japonais"],
    keywords: ["bougie", "chandelier", "ouverture", "cloture", "meche"],
    answer: "Une bougie représente l'ouverture, la clôture, le plus haut et le plus bas d'une période. Son corps montre l'écart entre ouverture et clôture, tandis que ses mèches indiquent les extrêmes atteints."
  },
  {
    id: "TA007", category: "Analyse technique",
    question: "Qu'est-ce qu'une cassure de niveau ?",
    aliases: ["breakout", "cassure resistance", "cassure support"],
    keywords: ["cassure", "breakout", "niveau"],
    answer: "Une cassure se produit lorsque le prix franchit une zone surveillée. Certaines cassures échouent ou deviennent de fausses cassures. Une clôture, le contexte et la gestion du risque peuvent aider à évaluer le scénario."
  },
  {
    id: "TA008", category: "Analyse technique",
    question: "Qu'est-ce que le RSI ?",
    aliases: ["indicateur rsi", "relative strength index"],
    keywords: ["rsi", "surachat", "survente", "indicateur"],
    answer: "Le RSI est un indicateur de momentum, généralement calculé sur 14 périodes par défaut. Les niveaux 70 et 30 sont souvent utilisés comme repères de surachat et de survente, mais ils ne signalent pas automatiquement un retournement."
  },
  {
    id: "TA009", category: "Analyse technique",
    question: "Qu'est-ce qu'une moyenne mobile ?",
    aliases: ["moving average", "ema sma", "moyenne mobile exponentielle"],
    keywords: ["moyenne", "mobile", "ema", "sma"],
    answer: "Une moyenne mobile lisse les prix sur une période donnée. La SMA utilise une moyenne simple, tandis que l'EMA accorde davantage de poids aux prix récents. Ces indicateurs restent retardés par rapport au prix."
  },
  {
    id: "TA010", category: "Analyse technique",
    question: "Qu'est-ce que le volume en trading ?",
    aliases: ["volume du marche", "volume des transactions"],
    keywords: ["volume", "transactions", "liquidite"],
    answer: "Le volume mesure la quantité échangée sur un marché pendant une période. Selon la plateforme et le marché, il peut représenter un volume réel ou un indicateur de ticks. Il faut comprendre sa source avant de l'interpréter."
  },

  {
    id: "RISK001", category: "Gestion du risque",
    question: "Qu'est-ce que le stop-loss ?",
    aliases: ["definition stop loss", "placer un stop loss"],
    keywords: ["stop", "loss", "perte", "protection"],
    answer: "Un stop-loss vise à clôturer une position lorsque le prix atteint un seuil défini. En cas de gap ou de forte volatilité, l'exécution peut se faire à un prix différent du seuil."
  },
  {
    id: "RISK002", category: "Gestion du risque",
    question: "Qu'est-ce que le take-profit ?",
    aliases: ["definition take profit", "tp trading"],
    keywords: ["take", "profit", "objectif"],
    answer: "Un take-profit est un ordre destiné à clôturer une position lorsqu'un objectif de prix est atteint. Il aide à planifier une sortie, mais n'assure pas toujours une exécution exacte au prix visé."
  },
  {
    id: "RISK003", category: "Gestion du risque",
    question: "Comment calculer le risque d'un trade ?",
    aliases: ["calcul risque trading", "risquer combien par trade"],
    keywords: ["risque", "capital", "position", "trade"],
    answer: "Détermine le montant maximal acceptable à perdre, puis calcule la taille de position en fonction de la distance au stop-loss et de la valeur du mouvement de prix. Prends en compte les frais et le slippage. Un risque de 1 % n'est pas une garantie de sécurité."
  },
  {
    id: "RISK004", category: "Gestion du risque",
    question: "Qu'est-ce que le ratio risque/rendement ?",
    aliases: ["risk reward ratio", "ratio rr", "ratio risque gain"],
    keywords: ["ratio", "rendement", "gain", "risque"],
    answer: "Le ratio risque/rendement compare la perte potentielle au gain potentiel prévu. Un ratio de 1:2 signifie viser deux unités de gain potentiel pour une unité de risque. Il ne suffit pas à déterminer la rentabilité sans tenir compte du taux de réussite et des frais."
  },
  {
    id: "RISK005", category: "Gestion du risque",
    question: "Qu'est-ce que le drawdown ?",
    aliases: ["perte maximale du compte", "drawdown prop firm"],
    keywords: ["drawdown", "perte", "capital"],
    answer: "Le drawdown mesure la baisse d'un capital par rapport à un sommet précédent. Certaines sociétés de trading financé imposent des limites spécifiques, parfois calculées sur le solde ou l'équité. Il faut lire leurs règles exactes."
  },
  {
    id: "RISK006", category: "Gestion du risque",
    question: "Qu'est-ce que la diversification ?",
    aliases: ["diversifier ses investissements", "risque de concentration"],
    keywords: ["diversification", "diversifier", "portefeuille"],
    answer: "La diversification consiste à répartir les investissements entre plusieurs actifs ou sources de risque. Elle peut réduire la dépendance à un seul investissement, mais ne supprime ni le risque de marché ni la possibilité de pertes."
  },
  {
    id: "RISK007", category: "Gestion du risque",
    question: "Pourquoi éviter le surtrading ?",
    aliases: ["trop trader", "overtrading", "surtrading"],
    keywords: ["surtrading", "overtrading", "transactions"],
    answer: "Le surtrading consiste à multiplier les positions sans avantage clair. Il peut augmenter les frais, la fatigue et les décisions impulsives. Un plan de trading avec des critères d'entrée précis aide à rester discipliné."
  },

  {
    id: "PSY001", category: "Psychologie",
    question: "Qu'est-ce que le revenge trading ?",
    aliases: ["se venger du marche", "recuperer une perte rapidement"],
    keywords: ["revenge", "vengeance", "perte", "emotion"],
    answer: "Le revenge trading consiste à prendre des positions impulsives pour récupérer une perte. Une pause, une limite de perte journalière et un journal de trading peuvent aider à interrompre ce comportement."
  },
  {
    id: "PSY002", category: "Psychologie",
    question: "Comment gérer ses émotions en trading ?",
    aliases: ["peur et cupidite", "controler les emotions trading"],
    keywords: ["emotion", "peur", "cupidite", "discipline"],
    answer: "Prépare un plan avant d'entrer en position, définis le risque à l'avance et consigne tes décisions dans un journal. Évite de trader lorsque tu es épuisé ou sous le coup d'une forte émotion."
  },
  {
    id: "PSY003", category: "Psychologie",
    question: "Pourquoi tenir un journal de trading ?",
    aliases: ["journal de trade", "suivi des performances"],
    keywords: ["journal", "performance", "statistiques"],
    answer: "Un journal consigne la stratégie, le contexte, l'entrée, la sortie, le risque et les résultats. Il permet d'identifier des erreurs récurrentes et de mesurer les performances sur un échantillon suffisant de transactions."
  },

  {
    id: "FUND001", category: "Fondamentaux",
    question: "Qu'est-ce que l'inflation ?",
    aliases: ["definition inflation", "hausse des prix"],
    keywords: ["inflation", "prix", "pouvoir achat"],
    answer: "L'inflation est une hausse générale et durable du niveau des prix. Lorsque les revenus progressent moins vite que les prix, le pouvoir d'achat diminue."
  },
  {
    id: "FUND002", category: "Fondamentaux",
    question: "Qu'est-ce que le CPI ?",
    aliases: ["consumer price index", "indice des prix consommation"],
    keywords: ["cpi", "inflation", "indice"],
    answer: "Le CPI est un indice des prix à la consommation utilisé pour suivre l'évolution du coût d'un panier de biens et services. Sa publication peut influencer les anticipations de taux et provoquer de la volatilité sur les marchés."
  },
  {
    id: "FUND003", category: "Fondamentaux",
    question: "Qu'est-ce que le NFP ?",
    aliases: ["non farm payrolls", "rapport emploi americain"],
    keywords: ["nfp", "emploi", "payrolls", "dollar"],
    answer: "Le NFP est un indicateur mensuel de l'emploi salarié non agricole aux États-Unis. Il est suivi pour évaluer la conjoncture du marché du travail. Les réactions de marché dépendent aussi des révisions, des salaires et des attentes."
  },
  {
    id: "FUND004", category: "Fondamentaux",
    question: "Quel est le rôle de la Réserve fédérale américaine ?",
    aliases: ["fed americaine", "federal reserve", "banque centrale usa"],
    keywords: ["fed", "reserve", "taux", "dollar"],
    answer: "La Réserve fédérale est la banque centrale des États-Unis. Ses décisions de politique monétaire influencent les conditions financières et peuvent affecter le dollar, les obligations, les actions et l'or."
  },
  {
    id: "FUND005", category: "Fondamentaux",
    question: "Comment les taux d'intérêt influencent-ils les marchés ?",
    aliases: ["impact des taux", "hausse baisse des taux"],
    keywords: ["taux", "interet", "banque centrale"],
    answer: "Les taux influencent le coût du crédit, les rendements obligataires et les valorisations. Une hausse ou une baisse peut affecter différemment les actifs selon ce qui était anticipé et le contexte économique."
  },
  {
    id: "FUND006", category: "Fondamentaux",
    question: "Qu'est-ce que le calendrier économique ?",
    aliases: ["news forex", "actualites economiques", "calendrier forex"],
    keywords: ["calendrier", "news", "actualites", "publication"],
    answer: "Un calendrier économique répertorie les publications et événements susceptibles d'influencer les marchés : inflation, emploi, décisions de banques centrales et croissance. Vérifie l'heure locale, les valeurs précédentes, les prévisions et le résultat publié."
  },

  {
    id: "INV001", category: "Investissement",
    question: "Quelle est la différence entre épargne et investissement ?",
    aliases: ["epargner ou investir", "difference epargne investissement"],
    keywords: ["epargne", "investissement", "capital"],
    answer: "L'épargne vise généralement à conserver des fonds disponibles, tandis que l'investissement cherche un rendement en acceptant un certain niveau de risque. Le choix dépend de l'horizon, des besoins de liquidité et de la tolérance aux pertes."
  },
  {
    id: "INV002", category: "Investissement",
    question: "Qu'est-ce qu'une action ?",
    aliases: ["acheter des actions", "part du capital entreprise"],
    keywords: ["action", "bourse", "entreprise"],
    answer: "Une action représente une part du capital d'une entreprise. Son prix peut monter ou baisser. Certains actionnaires reçoivent des dividendes, mais ceux-ci ne sont ni automatiques ni garantis."
  },
  {
    id: "INV003", category: "Investissement",
    question: "Qu'est-ce qu'un ETF ?",
    aliases: ["fonds indiciel cote", "exchange traded fund"],
    keywords: ["etf", "fonds", "indice"],
    answer: "Un ETF est un fonds négocié en bourse qui détient généralement un panier d'actifs ou suit une stratégie définie. Les risques, frais, méthode de réplication et actifs sous-jacents varient d'un ETF à l'autre."
  },
  {
    id: "INV004", category: "Investissement",
    question: "Qu'est-ce qu'un dividende ?",
    aliases: ["revenu actionnaire", "versement dividende"],
    keywords: ["dividende", "actionnaire", "revenu"],
    answer: "Un dividende est une distribution de bénéfices ou de réserves à des actionnaires lorsqu'une entreprise décide d'en verser un. Son montant et son versement ne sont pas garantis."
  },
  {
    id: "INV005", category: "Investissement",
    question: "Qu'est-ce qu'une obligation ?",
    aliases: ["marche obligataire", "obligation financiere"],
    keywords: ["obligation", "coupon", "emetteur"],
    answer: "Une obligation est un titre de dette émis par un État, une entreprise ou une autre entité. Elle peut verser des intérêts et prévoir un remboursement à l'échéance. Le risque de crédit et le risque de taux restent importants."
  },

  {
    id: "CRY001", category: "Crypto",
    question: "Qu'est-ce qu'une cryptomonnaie ?",
    aliases: ["monnaie numerique", "actif crypto"],
    keywords: ["crypto", "cryptomonnaie", "bitcoin", "blockchain"],
    answer: "Une cryptomonnaie est un actif numérique utilisant des mécanismes cryptographiques et souvent une blockchain. Les prix peuvent être très volatils et les utilisateurs s'exposent à des risques de piratage, de fraude et de perte."
  },
  {
    id: "CRY002", category: "Crypto",
    question: "Qu'est-ce que la blockchain ?",
    aliases: ["definition blockchain", "chaine de blocs"],
    keywords: ["blockchain", "blocs", "registre"],
    answer: "Une blockchain est un registre numérique partagé dont les enregistrements sont liés cryptographiquement. Son fonctionnement, sa gouvernance et ses garanties varient selon le réseau."
  },
  {
    id: "CRY003", category: "Crypto",
    question: "Qu'est-ce que Bitcoin ?",
    aliases: ["c'est quoi bitcoin", "btc definition"],
    keywords: ["bitcoin", "btc", "crypto"],
    answer: "Bitcoin est un système monétaire numérique décentralisé lancé en 2009. Son unité, le bitcoin, est négociée sur différents marchés. Son prix est volatil et il ne bénéficie pas d'une garantie universelle de valeur."
  },

  {
    id: "BIZ001", category: "Finance d'entreprise",
    question: "Qu'est-ce que le chiffre d'affaires ?",
    aliases: ["ca entreprise", "revenus des ventes"],
    keywords: ["chiffre", "affaires", "ventes", "revenu"],
    answer: "Le chiffre d'affaires correspond au montant des ventes de biens et services réalisées sur une période, avant déduction des charges. Il ne représente donc pas le bénéfice net."
  },
  {
    id: "BIZ002", category: "Finance d'entreprise",
    question: "Quelle est la différence entre chiffre d'affaires et bénéfice ?",
    aliases: ["ca contre benefice", "profit net entreprise"],
    keywords: ["chiffre", "affaires", "benefice", "profit", "charges"],
    answer: "Le chiffre d'affaires mesure les ventes réalisées. Le bénéfice est ce qui reste après déduction des coûts et charges selon la définition comptable utilisée. Une entreprise peut avoir un chiffre d'affaires élevé et subir des pertes."
  },
  {
    id: "BIZ003", category: "Finance d'entreprise",
    question: "Qu'est-ce que la trésorerie ?",
    aliases: ["tresorerie entreprise", "cash disponible"],
    keywords: ["tresorerie", "liquidite", "cash"],
    answer: "La trésorerie désigne les liquidités et ressources de trésorerie immédiatement mobilisables, selon le périmètre retenu. La suivre aide à anticiper les paiements et à éviter les problèmes de liquidité."
  },

  {
    id: "GEN001", category: "Finance générale",
    question: "Qu'est-ce que la finance ?",
    aliases: ["definition finance", "explique la finance"],
    keywords: ["finance", "argent", "capital"],
    answer: "La finance étudie la gestion de l'argent, du capital et des risques. Elle englobe notamment la finance personnelle, les marchés financiers, le financement des entreprises et les décisions des institutions."
  },
  {
    id: "GEN002", category: "Finance générale",
    question: "Qu'est-ce que le risque financier ?",
    aliases: ["definition risque financier", "risques en finance"],
    keywords: ["risque", "perte", "financier"],
    answer: "Le risque financier est la possibilité qu'un résultat réel diffère du résultat attendu, notamment par une perte. Il peut venir du marché, du crédit, de la liquidité, du fonctionnement opérationnel ou d'autres facteurs."
  }
];

/* =====================================================
   RECHERCHE ET NORMALISATION
===================================================== */

const STOP_WORDS = new Set([
  "le", "la", "les", "un", "une", "des", "du", "de", "d",
  "a", "au", "aux", "et", "ou", "en", "dans", "pour", "par",
  "sur", "avec", "est", "ce", "cest", "que", "quoi", "qui",
  "comment", "pourquoi", "quel", "quelle", "quels", "quelles",
  "me", "moi", "mon", "ma", "mes", "explique", "donne",
  "dis", "faire", "fait", "fonctionne", "signifie", "expliquer"
]);

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s%.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(value) {
  return normalize(value)
    .split(" ")
    .filter(word => word.length > 1 && !STOP_WORDS.has(word));
}

function similarity(question, candidate) {
  const q = normalize(question);
  const c = normalize(candidate);

  if (!q || !c) return 0;
  if (q === c) return 1;
  if (c.includes(q) || q.includes(c)) return 0.88;

  const a = new Set(tokens(q));
  const b = new Set(tokens(c));
  if (!a.size || !b.size) return 0;

  let common = 0;
  for (const word of a) {
    if (b.has(word)) common++;
  }

  const overlap = common / Math.max(a.size, b.size);
  const coverage = common / a.size;

  return Math.max(overlap, coverage * 0.82);
}

function findBestMatch(question, category = "Toutes") {
  let best = null;

  for (const item of DATABASE) {
    if (category !== "Toutes" && item.category !== category) continue;

    const candidates = [
      item.question,
      ...(item.aliases || [])
    ];

    let score = 0;

    for (const candidate of candidates) {
      score = Math.max(score, similarity(question, candidate));
    }

    const questionTokens = tokens(question);
    const itemKeywords = item.keywords || [];
    let keywordHits = 0;

    for (const word of questionTokens) {
      if (itemKeywords.some(keyword =>
        normalize(keyword).split(" ").includes(word)
      )) {
        keywordHits++;
      }
    }

    if (questionTokens.length) {
      const keywordScore = keywordHits / questionTokens.length;
      score = Math.max(score, keywordScore * 0.76);
    }

    if (!best || score > best.score) {
      best = { ...item, score };
    }
  }

  return best;
}

/* =====================================================
   FILTRE DU DOMAINE FINANCIER
   Ce filtre utilise des mots-clés, pas une IA.
===================================================== */

const FINANCE_TERMS = new Set([
  "finance", "financier", "financiere", "argent", "capital",
  "forex", "trading", "trade", "trader", "xauusd", "gold",
  "or", "bourse", "action", "actions", "obligation", "obligations",
  "etf", "crypto", "cryptomonnaie", "bitcoin", "ethereum",
  "investissement", "investir", "investis", "epargne", "epargner",
  "budget", "banque", "bancaire", "pret", "credit", "dette",
  "taux", "interet", "inflation", "cpi", "nfp", "fed", "ecb",
  "devises", "devise", "dollar", "euro", "dirham", "franc",
  "pip", "spread", "lot", "levier", "leverage", "marge",
  "support", "resistance", "bougie", "chandelier", "graphique",
  "rsi", "ema", "sma", "indicateur", "tendance", "cassure",
  "stoploss", "stop", "loss", "takeprofit", "profit", "benefice",
  "rendement", "risque", "drawdown", "portefeuille", "dividende",
  "dividendes", "courtier", "broker", "liquidite", "volatilite",
  "spread", "achat", "vente", "position", "lot", "lots",
  "banquecentrale", "obligataire", "tresorerie", "comptabilite",
  "chiffre", "affaires", "entreprise", "actif", "actifs",
  "passif", "marche", "marches", "economique", "economiques",
  "analyse", "technique", "fondamentale", "fondamental",
  "strategie", "strategies", "scalping", "swing", "daytrading",
  "liquidation", "futures", "options", "indices", "indice",
  "nasdaq", "sp500", "dowjones", "dax", "cac40", "usdjpy",
  "eurusd", "gbpusd", "us30", "nas100", "xagusd", "silver",
  "revenu", "revenus", "depense", "depenses", "economie",
  "economique", "economiques", "marchand", "facture", "factures"
]);

function isFinanceQuestion(question) {
  const words = tokens(question).map(normalize);
  return words.some(word =>
    FINANCE_TERMS.has(word) ||
    FINANCE_TERMS.has(word.replace(/[^a-z]/g, ""))
  );
}

/* =====================================================
   INTERFACE
===================================================== */

const $ = selector => document.querySelector(selector);

const welcome = $("#welcome");
const chatSection = $("#chatSection");
const messages = $("#messages");
const chatForm = $("#chatForm");
const chatInput = $("#chatInput");
const mainSearch = $("#mainSearch");
const currentCategory = $("#currentCategory");
const sidebar = $(".sidebar");

let selectedCategory = "Toutes";

$("#answerCount").textContent = DATABASE.length.toLocaleString("fr-FR");

function showChat() {
  welcome.hidden = true;
  chatSection.hidden = false;
  $("#chatInput").focus();
}

function showHome() {
  chatSection.hidden = true;
  welcome.hidden = false;
  sidebar.classList.remove("open");
}

function addMessage(text, role, category = "") {
  const row = document.createElement("div");
  row.className = `message ${role}`;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = role === "user" ? "VO" : "Fi";

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const sender = document.createElement("div");
  sender.className = "sender";
  sender.textContent = role === "user" ? "VOUS" : "FINANCE-info 🗞️";

  const paragraph = document.createElement("p");
  paragraph.textContent = text;

  bubble.append(sender, paragraph);

  if (category) {
    const label = document.createElement("div");
    label.className = "answer-category";
    label.textContent = "Catégorie : " + category;
    bubble.appendChild(label);
  }

  row.append(avatar, bubble);
  messages.appendChild(row);

  return row;
}

function answerQuestion(rawQuestion) {
  const question = rawQuestion.trim();
  if (!question) return;

  showChat();
  addMessage(question, "user");

  const match = findBestMatch(question, selectedCategory);

  /*
    Le seuil élevé évite d'afficher trop facilement
    une réponse sans rapport. À ajuster après les tests.
  */
  if (match && match.score >= 0.55) {
    addMessage(match.answer, "bot", match.category);
    return;
  }

  if (!isFinanceQuestion(question)) {
    addMessage(
      "Je suis FINANCE-info 🗞️, un bot exclusivement dédié à la finance. Ici, nous parlons uniquement de finance. Si ce sujet ne t'intéresse pas, tu peux passer ton chemin.",
      "bot"
    );
    return;
  }

  addMessage(
    "Je n'ai pas trouvé de réponse suffisamment pertinente dans ma base prédéfinie. Essaie une autre formulation ou choisis une catégorie dans le menu. Je préfère reconnaître mes limites plutôt que d'inventer une réponse.",
    "bot"
  );
}

function submitSearch() {
  const question = mainSearch.value.trim();
  if (!question) {
    mainSearch.focus();
    return;
  }

  mainSearch.value = "";
  answerQuestion(question);
}

$("#searchButton").addEventListener("click", submitSearch);

mainSearch.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitSearch();
  }
});

chatForm.addEventListener("submit", event => {
  event.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;

  chatInput.value = "";
  answerQuestion(question);
});

document.querySelectorAll(".suggestion").forEach(button => {
  button.addEventListener("click", () => {
    answerQuestion(button.dataset.question);
  });
});

$("#newChat").addEventListener("click", () => {
  messages.replaceChildren();
  showHome();
  mainSearch.focus();
});

$("#backHome").addEventListener("click", showHome);

$("#menuToggle").addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.querySelectorAll(".category").forEach(button => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;

    document.querySelectorAll(".category").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    currentCategory.textContent = selectedCategory === "Toutes"
      ? "Toutes les catégories"
      : selectedCategory;

    sidebar.classList.remove("open");

    if (selectedCategory !== "Toutes") {
      mainSearch.placeholder = "Question sur : " + selectedCategory;
      showChat();

      addMessage(
        "Tu explores la catégorie « " + selectedCategory +
        " ». Pose une question pour rechercher une réponse dans cette catégorie.",
        "bot",
        selectedCategory
      );
    } else {
      mainSearch.placeholder = "Ex. Comment fonctionne le XAUUSD ?";
      showHome();
    }
  });
});

/* Fermer le menu mobile en cliquant en dehors */
document.addEventListener("click", event => {
  if (
    window.innerWidth <= 680 &&
    sidebar.classList.contains("open") &&
    !sidebar.contains(event.target) &&
    !event.target.closest("#menuToggle")
  ) {
    sidebar.classList.remove("open");
  }
});

/* Afficher un message d'accueil dans la zone de conversation */
addMessage(
  "Bienvenue sur FINANCE-info 🗞️. Je réponds uniquement à partir de ma bibliothèque financière prédéfinie. Pose une question sur le Forex, l'or, le risque ou l'investissement.",
  "bot"
);

console.info(
  `FINANCE-info : ${DATABASE.length} réponses chargées.`
);

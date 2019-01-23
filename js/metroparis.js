// CONSTRUCTEUR STATION

function Station(identifiant, nom, ligne, position, voisins){
	this.identifiant = identifiant;
	this.nom = nom;
	this.ligne = ligne;
	this.position = position;
	this.voisins = voisins;
}

function Ligne(nom, couleur, stations){
	this.nom = nom;
	this.couleur = couleur;
	this.stations = stations;
}

// NOMS COMPLET DES STATIONS

var la_defense = "La Défense";
var esplanade_de_la_defense = "Esplanade de La Défense";
var pont_de_neuilly = "Pont de Neuilly";
var les_sablons = "Les Sablons";
var porte_maillot = "Porte Maillot";
var argentine = "Argentine";
var charles_de_gaulle_etoile = "Charles de Gaulle - Étoile";
var georges_v = "Georges V";
var franklin_d_roosevelt = "Franklin D. Roosevelt";
var champs_elysees_clemenceau = "Champs-Élysées - Clemenceau";
var concorde = "Concorde";
var tuileries = "Tuileries";
var palais_royal_musee_du_louvre = "Palais Royal - Musée du Louvre";
var louvre_rivoli = "Louvre - Rivoli";
var chatelet = "Châtelet";
var hotel_de_ville = "Hôtel de Ville";
var saint_paul = "Saint-Paul";
var bastille = "Bastille";
var gare_de_lyon = "Gare de Lyon";
var reuilly_diderot = "Reuilly - Diderot";
var nation = "Nation";
var porte_de_vincennes = "Porte de Vincennes";
var saint_mande = "Saint-Mandé";
var berault = "Bérault";
var chateau_de_vincennes = "Château de Vincennes";
var porte_dauphine = "Porte Dauphine";
var victor_hugo = "Victor Hugo";
var ternes = "Ternes";
var courcelles = "Courcelles";
var monceau = "Monceau";
var villiers = "Villiers";
var rome = "Rome";
var place_de_clichy = "Place de Clichy";
var blanche = "Blanche";
var pigalle = "Pigalle";
var anvers = "Anvers";
var barbes_rochechouart = "Barbès - Rochechouart";
var la_chapelle = "La Chapelle";
var stalingrad = "Stalingrad";
var jaures = "Jaurès";
var colonel_fabien = "Colonel Fabien";
var belleville = "Belleville";
var couronnes = "Couronnes";
var menilmontant = "Ménilmontant";
var pere_lachaise = "Père Lachaise";
var philippe_auguste = "Philippe Auguste";
var alexandre_dumas = "Alexandre Dumas";
var avron = "Avron";
var pont_de_levallois_becon = "Pont de Levallois - Bécon";
var anatole_france = "Anatole France";
var louise_michel = "Louise Michel";
var porte_de_champerret = "Porte de Champerret";
var pereire = "Pereire";
var wagram = "Wagram";
var malesherbes = "Malesherbes";
var europe = "Europe";
var saint_lazare = "Saint-Lazare";
var havre_caumartin = "Havre - Caumartin";
var opera = "Opéra";
var quatre_septembre = "Quatre-Septembre";
var bourse = "Bourse";
var sentier = "Sentier";
var reaumur_sebastopol = "Réaumur - Sébastopol";
var arts_et_metiers = "Arts et Métiers";
var temple = "Temple";
var republique = "République";
var parmentier = "Parmentier";
var rue_saint_maur = "Rue Saint-Maur";
var gambetta = "Gambetta";
var porte_de_bagnolet = "Porte de Bagnolet";
var gallieni = "Gallieni";
var pelleport = "Pelleport";
var saint_fargeau = "Saint-Fargeau";
var porte_des_lilas = "Porte des Lilas";
var porte_de_clignancourt = "Porte de Clignancourt";
var simplon = "Simplon";
var marcadet_poissonniers = "Marcadet - Poissonniers";
var chateau_rouge = "Château Rouge";
var gare_du_nord = "Gare du Nord";
var gare_de_l_est = "Gare de l'Est";
var chateau_d_eau = "Château d'Eau";
var strasbourg_saint_denis = "Strasbourg - Saint-Denis";
var etienne_marcel = "Étienne Marcel";
var les_halles = "Les Halles";
var cite = "Cité";
var saint_michel = "Saint-Michel";
var odeon = "Odéon";
var saint_germain_des_pres = "Saint-Germain-des-Prés";
var saint_sulpice = "Saint-Sulpice";
var saint_placide = "Saint-Placide";
var montparnasse_bienvenue = "Montparnasse - Bienvenüe";
var valvin = "Vavin";
var raspail = "Raspail";
var denfert_rochereau = "Denfert-Rochereau";
var mouton_duvernet = "Mouton-Duvernet";
var alesia = "Alésia";
var porte_d_orleans = "Porte d'Orléans";
var mairie_de_montrouge = "Mairie de Montrouge";
var bobigny_pablo_picasso = "Bobigny - Pablo Picasso";
var bobigny_pantin_raymond_queneau = "Bobigny - Pantin - Raymond Queneau";
var eglise_de_pantin = "Église de Pantin";
var hoche = "Hoche";
var porte_de_pantin = "Porte de Pantin";
var ourcq = "Ourcq";
var laumiere = "Laumière";
var jacques_bonsergent = "Jacques Bonsergent";
var oberkampf = "Oberkampf";
var richard_lenoir = "Richard-Lenoir";
var breguet_sabin = "Bréguet - Sabin";
var quai_de_la_rapee = "Quai de la Rapée";
var gare_d_austerlitz = "Gare d'Austerlitz";
var saint_marcel = "Saint-Marcel";
var campo_formio = "Campo-Formio";
var place_d_italie = "Place d'Italie";
var kleber = "Kléber";
var boissiere = "Boissière";
var passy = "Passy";
var bir_hakeim = "Bir-Hakeim";
var dupleix = "Dupleix";
var la_motte_picquet_grenelle = "La Motte-Picquet - Grenelle";
var cambronne = "Cambronne";
var sevres_lecourbe = "Sèvres - Lecourbe";
var pasteur = "Pasteur";
var edgar_quinet = "Edgar Quinet";
var saint_jacques = "Saint-Jacques";
var glaciere = "Glacière";
var corvisart = "Corvisart";
var nationale = "Nationale";
var chevaleret = "Chevaleret";
var quai_de_la_gare = "Quai de la Gare";
var bercy = "Bercy";
var dugommier = "Dugommier";
var daumesnil = "Daumesnil";
var bel_air = "Bel-Air";
var picpus = "Picpus";
var la_courneuve_8_mai_1945 = "La Courneuve - 8 Mai 1945";
var fort_d_aubervilliers = "Fort d'Aubervilliers";
var aubervilliers_pantin_quatre_chemins = "Aubervilliers - Pantin - Quatre Chemins";
var porte_de_la_villette = "Porte de la Villette";
var corentin_cariou = "Corentin Cariou";
var crimee = "Crimée";
var riquet = "Riquet";
var louis_blanc = "Louis Blanc";
var chateau_landon = "Château-Landon";
var poissonniere = "Poissonnière";
var cadet = "Cadet";
var le_peletier = "Le Peletier";
var chaussee_d_antin_la_fayette = "Chaussée d'Antin - La Fayette";
var pyramides = "Pyramides";
var pont_neuf = "Pont Neuf";
var pont_marie = "Pont Marie";
var sully_morland = "Sully - Morland";
var jussieu = "Jussieu";
var place_monge = "Place Monge";
var censier_daubenton = "Censier - Daubenton";
var les_gobelins = "Les Gobelins";
var tolbiac = "Tolbiac";
var maison_blanche = "Maison Blanche";
var le_kremlin_bicetre = "Le Kremlin-Bicêtre";
var villejuif_leo_lagrange = "Villejuif - Léo Lagrange";
var villejuif_paul_vaillant_couturier = "Villejuif - Paul Vaillant-Couturier";
var villejuif_louis_aragon = "Villejuif - Louis Aragon";
var porte_d_italie = "Porte d'Italie";
var porte_de_choisy = "Porte de Choisy";
var porte_d_ivry = "Porte d'Ivry";
var pierre_et_marie_curie = "Pierre et Marie Curie";
var mairie_d_ivry = "Mairie d'Ivry";
var bolivar = "Bolivar";
var buttes_chaumont = "Buttes Chaumont";
var botzaris = "Botzaris";
var place_des_fetes = "Place des Fêtes";
var pre_saint_gervais = "Pré Saint-Gervais";
var danube = "Danube";
var balard = "Balard";
var lourmel = "Lourmel";
var boucicaut = "Boucicaut";
var felix_faure = "Félix Faure";
var commerce = "Commerce";
var ecole_militaire = "École Militaire";
var la_tour_maubourg = "La Tour-Maubourg";
var invalides = "Invalides";
var madeleine = "Madeleine";
var richelieu_drouot = "Richelieu - Drouot";
var grands_boulevards = "Grands Boulevards";
var bonne_nouvelle = "Bonne-Nouvelle";
var filles_du_calvaire = "Filles du Calvaire";
var saint_sebastien_froissart = "Saint-Sébastien - Froissart";
var chemin_vert = "Chemin Vert";
var ledru_rollin = "Ledru-Rollin";
var faidherbe_chaligny = "Faidherbe - Chaligny";
var montgallet = "Montgallet";
var michel_bizot = "Michel Bizot";
var porte_doree = "Porte Dorée";
var porte_de_charenton = "Porte de Charenton";
var liberte = "Liberté";
var charenton_ecoles = "Charenton - Écoles";
var ecole_veterinaire_de_maisons_alfort = "École vétérinaire de Maisons-Alfort";
var maisons_alfort_stade = "Maisons-Alfort - Stade";
var maisons_alfort_les_juilliottes = "Maisons-Alfort - Les Juilliottes";
var creteil_l_echat = "Créteil - L'Échat";
var creteil_universite = "Créteil - Université";
var creteil_prefecture = "Créteil - Préfecture";
var pointe_du_lac = "Pointe du Lac";
var pont_de_sevres = "Pont de Sèvres";
var billancourt = "Billancourt";
var marcel_sembat = "Marcel Sembat";
var porte_de_saint_cloud = "Porte de Saint-Cloud";
var exelmans = "Exelmans";
var michel_ange_molitor = "Michel-Ange - Molitor";
var michel_ange_auteuil = "Michel-Ange - Auteuil";
var jasmin = "Jasmin";
var ranelagh = "Ranelagh";
var la_muette = "La Muette";
var rue_de_la_pompe = "Rue de la Pompe";
var trocadero = "Trocadéro";
var iena = "Iéna";
var alma_marceau = "Alma - Marceau";
var saint_philippe_du_roule = "Saint-Philippe du Roule";
var miromesnil = "Miromesnil";
var saint_augustin = "Saint-Augustin";
var havre_caumartin = "Havre - Caumartin";
var saint_ambroise = "Saint-Ambroise";
var voltaire = "Voltaire";
var charonne = "Charonne";
var rue_des_boulets = "Rue des Boulets";
var buzenval = "Buzenval";
var maraichers = "Maraîchers";
var porte_de_montreuil = "Porte de Montreuil";
var robespierre = "Robespierre";
var croix_de_chavaux = "Croix de Chavaux";
var mairie_de_montreuil = "Mairie de Montreuil";
var boulogne_pont_de_saint_cloud = "Boulogne - Pont de Saint-Cloud";
var boulogne_jean_jaures = "Boulogne - Jean Jaurès";
var chardon_lagache = "Chardon-Lagache";
var mirabeau = "Mirabeau";
var javel_andre_citroen = "Javel - André Citroën";
var charles_michels = "Charles Michels";
var avenue_emile_zola = "Avenue Émile-Zola";
var segur = "Ségur";
var duroc = "Duroc";
var vaneau = "Vaneau";
var sevres_babylone = "Sèvres - Babylone";
var mabillon = "Mabillon";
var cluny_la_sorbonne = "Cluny - La Sorbonne";
var maubert_mutualite = "Maubert - Mutualité";
var cardinal_lemoine = "Cardinal Lemoine";
var porte_d_auteuil = "Porte d'Auteuil";
var eglise_d_auteuil = "Église d'Auteuil";
var rambuteau = "Rambuteau";
var goncourt = "Goncourt";
var pyrenees = "Pyrénées";
var jourdain = "Jourdain";
var telegraphe = "Télégraphe";
var porte_des_lilas = "Porte des Lilas";
var mairie_des_lilas = "Mairie des Lilas";
var front_populaire = "Front Populaire";
var porte_de_la_chapelle = "Porte de la Chapelle";
var marx_dormoy = "Marx Dormoy";
var jules_joffrin = "Jules Joffrin";
var lamarck_caulaincourt = "Lamarck - Caulaincourt";
var abbesses = "Abbesses";
var saint_georges = "Saint-Georges";
var notre_dame_de_lorette = "Notre-Dame-de-Lorette";
var trinite_d_estienne_d_orves = "Trinité - d'Estienne d'Orves";
var assemblee_nationale = "Assemblée nationale";
var solferino = "Solférino";
var rue_du_bac = "Rue du Bac";
var rennes = "Rennes";
var notre_dame_des_champs = "Notre-Dame-des-Champs";
var falguiere = "Falguière";
var volontaires = "Volontaires";
var vaugirard = "Vaugirard";
var convention = "Convention";
var porte_de_versailles = "Porte de Versailles";
var corentin_celton = "Corentin Celton";
var mairie_d_issy = "Mairie d'Issy";
var asnieres_gennevilliers_les_courtilles = "Asnières - Gennevilliers - Les Courtilles";
var les_agnettes = "Les Agnettes";
var gabriel_peri = "Gabriel Péri";
var mairie_de_clichy = "Mairie de Clichy";
var porte_de_clichy = "Porte de Clichy";
var brochant = "Brochant";
var la_fourche = "La Fourche";
var liege = "Liège";
var varenne = "Varenne";
var saint_francois_xavier = "Saint-François-Xavier";
var gaite = "Gaîté";
var pernety = "Pernety";
var plaisance = "Plaisance";
var porte_de_vanves = "Porte de Vanves";
var malakoff_plateau_de_vanves = "Malakoff - Plateau de Vanves";
var malakoff_rue_etienne_dolet = "Malakoff - Rue Étienne-Dolet";
var chatillon_montrouge = "Châtillon - Montrouge";
var saint_denis_universite = "Saint-Denis - Université";
var basilique_de_saint_denis = "Basilique de Saint-Denis";
var saint_denis_porte_de_paris = "Saint-Denis - Porte de Paris";
var carrefour_pleyel = "Carrefour Pleyel";
var mairie_de_saint_ouen = "Mairie de Saint-Ouen";
var garibaldi = "Garibaldi";
var porte_de_saint_ouen = "Porte de Saint-Ouen";
var guy_moquet = "Guy Môquet";
var cour_saint_emilion = "Cour Saint-Émilion";
var bibliotheque_francois_mitterrand = "Bibliothèque François-Mitterrand";
var olympiades = "Olympiades";

// POSITION DES STATIONS

var p_la_defense = [592,1414,20,0];
var p_esplanade_de_la_defense = [670,1492,20,0];
var p_pont_de_neuilly = [752,1575,20,0];
var p_les_sablons = [835,1658,20,0];
var p_porte_maillot = [928,1752,20,0];
var p_argentine = [1062,1885,20,0];
var p_charles_de_gaulle_etoile = [1166,1989,20,0];
var p_georges_v = [1294,2117,20,0];
var p_franklin_d_roosevelt = [1418,2240,-175,0];
var p_champs_elysees_clemenceau = [1507,2330,-125,25];
var p_concorde = [1583,2406,20,0];
var p_tuileries = [1774,2465,20,-10];
var p_palais_royal_musee_du_louvre = [1953,2465,-100,30];
var p_louvre_rivoli = [2099,2465,20,-10];
var p_chatelet = [2420,2476,15,-15];
var p_hotel_de_ville = [2599,2465,20,0];
var p_saint_paul = [2747,2616,20,0];
var p_bastille = [2940,2664,20,0];
var p_gare_de_lyon = [3124,3050,20,10];
var p_reuilly_diderot = [3332,2923,20,7];
var p_nation = [3600,2776,-60,0];
var p_porte_de_vincennes = [3773,2830,20,0];
var p_saint_mande = [3904,2904,20,0];
var p_berault = [3999,3000,20,0];
var p_chateau_de_vincennes = [4036,3035,20,0];
var p_porte_dauphine = [798,2008,20,0];
var p_victor_hugo = [951,2161,-100,20];
var p_ternes = [1279,1876,20,0];
var p_courcelles = [1376,1779,20,0];
var p_monceau = [1473,1683,20,0];
var p_villiers = [1569,1586,20,0];
var p_rome = [1677,1478,20,20];
var p_place_de_clichy = [1812,1448,20,-10];
var p_blanche = [2030,1448,20,-10];
var p_pigalle = [2251,1448,20,-10];
var p_anvers = [2418,1448,20,-10];
var p_barbes_rochechouart = [2619,1448,20,-10];
var p_la_chapelle = [2835,1448,20,-10];
var p_stalingrad = [3089,1481,20,0];
var p_jaures = [3193,1553,20,0];
var p_colonel_fabien = [3211,1708,20,0];
var p_belleville = [3211,1857,20,10];
var p_couronnes = [3304,1982,20,0];
var p_menilmontant = [3420,2097,20,0];
var p_pere_lachaise = [3528,2238,15,-15];
var p_philippe_auguste = [3528,2356,20,0];
var p_alexandre_dumas = [3528,2503,20,0];
var p_avron = [3542,2652,20,0];
var p_pont_de_levallois_becon = [1158,1174,20,0];
var p_anatole_france = [1211,1227,20,0];
var p_louise_michel = [1263,1279,20,0];
var p_porte_de_champerret = [1316,1332,20,0];
var p_pereire = [1393,1409,20,0];
var p_wagram = [1446,1462,20,0];
var p_malesherbes = [1507,1523,20,0];
var p_europe = [1680,1697,20,0];
var p_saint_lazare = [1801,1862,20,10];
var p_havre_caumartin = [1868,2017,20,0];
var p_opera = [1957,2106,20,10];
var p_quatre_septembre = [2059,2207,20,0];
var p_bourse = [2210,2260,20,-10];
var p_sentier = [2368,2260,20,-10];
var p_reaumur_sebastopol = [2575,2271,20,15];
var p_arts_et_metiers = [2825,2226,-100,-20];
var p_temple = [2895,2141,-70,0];
var p_republique = [2969,2098,20,-1];
var p_parmentier = [3313,2180,20,0];
var p_rue_saint_maur = [3404,2238,-30,30];
var p_gambetta = [3708,2238,-30,30];
var p_porte_de_bagnolet = [3890,2238,-40,-20];
var p_gallieni = [4021,2238,-20,-20];
var p_pelleport = [3819,2078,20,0];
var p_saint_fargeau = [3910,1931,20,0];
var p_porte_des_lilas = [3910,1790,20,0];
var p_porte_de_clignancourt = [2367,1074,20,0];
var p_simplon = [2434,1141,20,0];
var p_marcadet_poissonniers = [2498,1243,20,15];
var p_chateau_rouge = [2498,1332,20,10];
var p_gare_du_nord = [2840,1547,20,15];
var p_gare_de_l_est = [2840,1718,20,10];
var p_chateau_d_eau = [2721,1833,20,0];
var p_strasbourg_saint_denis = [2675,2038,20,-5];
var p_etienne_marcel = [2421,2304,20,20];
var p_les_halles = [2421,2387,20,0];
var p_cite = [2352,2605,20,0];
var p_saint_michel = [2293,2766,20,0];
var p_odeon = [2260,2852,20,-10];
var p_saint_germain_des_pres = [2078,2840,-80,-20];
var p_saint_sulpice = [2028,2957,20,0];
var p_saint_placide = [2028,3100,-110,5];
var p_montparnasse_bienvenue = [2005,3255,35,-20];
var p_valvin = [2158,3254,20,0];
var p_raspail = [2263,3315,20,0];
var p_denfert_rochereau = [2326,3392,20,0];
var p_mouton_duvernet = [2326,3531,10,20];
var p_alesia = [2257,3681,20,0];
var p_porte_d_orleans = [2198,3739,20,0];
var p_mairie_de_montrouge = [2198,3851,20,0];
var p_bobigny_pablo_picasso = [4024,1133,20,0];
var p_bobigny_pantin_raymond_queneau = [3909,1247,20,0];
var p_eglise_de_pantin = [3832,1324,20,0];
var p_hoche = [3722,1387,20,10];
var p_porte_de_pantin = [3563,1387,20,-10];
var p_ourcq = [3405,1387,20,-10];
var p_laumiere = [3283,1462,20,10];
var p_jacques_bonsergent = [2895,1921,20,0];
var p_oberkampf = [3061,2175,20,0];
var p_richard_lenoir = [3127,2427,15,0];
var p_breguet_sabin = [3033,2520,20,0];
var p_quai_de_la_rapee = [2938,2968,-140,0];
var p_gare_d_austerlitz = [2938,3173,20,0];
var p_saint_marcel = [2938,3294,20,0];
var p_campo_formio = [2869,3386,20,0];
var p_place_d_italie = [2779,3543,20,-10];
var p_kleber = [1038,2149,20,0];
var p_boissiere = [905,2281,20,0];
var p_passy = [909,2696,20,0];
var p_bir_hakeim = [1034,2819,20,0];
var p_dupleix = [1142,2926,20,0];
var p_la_motte_picquet_grenelle = [1293,3045,20,0];
var p_cambronne = [1500,3091,20,0];
var p_sevres_lecourbe = [1609,3214,20,0];
var p_pasteur = [1767,3278,20,20];
var p_edgar_quinet = [2075,3275,-50,30];
var p_saint_jacques = [2416,3483,20,0];
var p_glaciere = [2531,3541,20,-10];
var p_corvisart = [2663,3542,20,-10];
var p_nationale = [2922,3542,20,-10];
var p_chevaleret = [3062,3542,20,10];
var p_quai_de_la_gare = [3200,3481,20,0];
var p_bercy = [3351,3329,20,0];
var p_dugommier = [3442,3239,20,0];
var p_daumesnil = [3545,3136,20,0];
var p_bel_air = [3625,3054,20,0];
var p_picpus = [3707,2974,20,0];
var p_la_courneuve_8_mai_1945 = [3548,800,20,0];
var p_fort_d_aubervilliers = [3548,928,20,0];
var p_aubervilliers_pantin_quatre_chemins = [3439,1068,20,0];
var p_porte_de_la_villette = [3337,1170,20,0];
var p_corentin_cariou = [3255,1251,20,0];
var p_crimee = [3190,1316,20,0];
var p_riquet = [3124,1383,20,0];
var p_louis_blanc = [3058,1580,20,20];
var p_chateau_landon = [2981,1655,20,0];
var p_poissonniere = [2530,1717,20,-10];
var p_cadet = [2317,1750,10,-20];
var p_le_peletier = [2244,1824,20,0];
var p_chaussee_d_antin_la_fayette = [2058,2016,20,-5];
var p_pyramides = [1953,2280,20,0];
var p_pont_neuf = [2218,2486,20,20];
var p_pont_marie = [2617,2610,20,0];
var p_sully_morland = [2743,2763,-120,0];
var p_jussieu = [2685,3071,20,0];
var p_place_monge = [2596,3166,20,0];
var p_censier_daubenton = [2596,3288,20,0];
var p_les_gobelins = [2681,3401,20,0];
var p_tolbiac = [2756,3635,20,0];
var p_maison_blanche = [2756,3720,20,0];
var p_le_kremlin_bicetre = [2756,3830,20,0];
var p_villejuif_leo_lagrange = [2756,3923,20,0];
var p_villejuif_paul_vaillant_couturier = [2756,4017,20,0];
var p_villejuif_louis_aragon = [2756,4104,20,0];
var p_porte_d_italie = [2878,3796,10,-10];
var p_porte_de_choisy = [3023,3796,10,-10];
var p_porte_d_ivry = [3164,3796,10,-10];
var p_pierre_et_marie_curie = [3265,3843,20,0];
var p_mairie_d_ivry = [3333,3912,20,0];
var p_bolivar = [3287,1633,20,-5];
var p_buttes_chaumont = [3451,1663,-20,-20];
var p_botzaris = [3541,1663,20,5];
var p_place_des_fetes = [3669,1789,-40,30];
var p_pre_saint_gervais = [3785,1646,20,0];
var p_danube = [3669,1558,20,0];
var p_balard = [1040,3650,20,0];
var p_lourmel = [1157,3533,20,0];
var p_boucicaut = [1250,3442,20,0];
var p_felix_faure = [1292,3315,20,0];
var p_commerce = [1292,3194,20,0];
var p_ecole_militaire = [1292,2832,20,0];
var p_la_tour_maubourg = [1398,2685,-140,0];
var p_invalides = [1507,2578,20,0];
var p_madeleine = [1607,2256,15,25];
var p_richelieu_drouot = [2183,2038,5,25];
var p_grands_boulevards = [2343,2038,10,-20];
var p_bonne_nouvelle = [2560,2038,-20,-20];
var p_filles_du_calvaire = [2917,2292,20,0];
var p_saint_sebastien_froissart = [2917,2413,-210,0];
var p_chemin_vert = [2917,2529,-100,0];
var p_ledru_rollin = [3041,2748,20,0];
var p_faidherbe_chaligny = [3234,2826,20,0];
var p_montgallet = [3437,3030,20,0];
var p_michel_bizot = [3615,3207,20,0];
var p_porte_doree = [3680,3304,20,0];
var p_porte_de_charenton = [3589,3398,20,0];
var p_liberte = [3657,3512,20,0];
var p_charenton_ecoles = [3759,3613,20,0];
var p_ecole_veterinaire_de_maisons_alfort = [3858,3712,20,0];
var p_maisons_alfort_stade = [3932,3791,20,0];
var p_maisons_alfort_les_juilliottes = [3932,3871,20,0];
var p_creteil_l_echat = [3932,3953,20,0];
var p_creteil_universite = [3932,4027,20,0];
var p_creteil_prefecture = [3932,4106,20,0];
var p_pointe_du_lac = [3932,4183,20,0];
var p_pont_de_sevres = [462,3743,20,0];
var p_billancourt = [534,3671,20,0];
var p_marcel_sembat = [604,3601,20,0];
var p_porte_de_saint_cloud = [674,3510,20,0];
var p_exelmans = [674,3403,20,0];
var p_michel_ange_molitor = [674,3285,10,30];
var p_michel_ange_auteuil = [674,3173,-175,-10];
var p_jasmin = [674,3000,20,0];
var p_ranelagh = [674,2828,20,0];
var p_la_muette = [674,2654,20,0];
var p_rue_de_la_pompe = [707,2465,20,-10];
var p_trocadero = [895,2465,20,-10];
var p_iena = [1075,2465,20,20];
var p_alma_marceau = [1270,2386,20,0];
var p_saint_philippe_du_roule = [1553,2104,-160,-20];
var p_miromesnil = [1635,2022,-100,0];
var p_saint_augustin = [1686,1933,-120,0];
var p_havre_caumartin = [1867,2016,20,-10];
var p_saint_ambroise = [3260,2402,20,0];
var p_voltaire = [3339,2482,20,0];
var p_charonne = [3418,2559,20,0];
var p_rue_des_boulets = [3494,2637,-130,20];
var p_buzenval = [3729,2691,20,0];
var p_maraichers = [3790,2631,20,0];
var p_porte_de_montreuil = [3853,2566,20,0];
var p_robespierre = [3911,2510,20,0];
var p_croix_de_chavaux = [3975,2446,20,0];
var p_mairie_de_montreuil = [4035,2383,20,0];
var p_boulogne_pont_de_saint_cloud = [389,3397,20,0];
var p_boulogne_jean_jaures = [469,3317,20,20];
var p_chardon_lagache = [747,3286,30,5];
var p_mirabeau = [857,3248,20,0];
var p_javel_andre_citroen = [995,3170,20,20];
var p_charles_michels = [1121,3139,20,0];
var p_avenue_emile_zola = [1191,3068,-150,0];
var p_segur = [1566,3137,20,15];
var p_duroc = [1712,3100,20,0];
var p_vaneau = [1803,3009,20,0];
var p_sevres_babylone = [1896,2916,-150,0];
var p_mabillon = [2122,2861,20,20];
var p_cluny_la_sorbonne = [2376,2861,20,0];
var p_maubert_mutualite = [2479,2937,20,0];
var p_cardinal_lemoine = [2558,3015,20,0];
var p_porte_d_auteuil = [546,3239,-125,0];
var p_eglise_d_auteuil = [807,3170,20,-10];
var p_rambuteau = [2708,2358,20,0];
var p_goncourt = [3099,1967,20,0];
var p_pyrenees = [3355,1789,-20,30];
var p_jourdain = [3525,1789,-30,30];
var p_telegraphe = [3815,1789,-10,30];
var p_porte_des_lilas = [3910,1789,20,0];
var p_mairie_des_lilas = [4035,1651,20,0];
var p_front_populaire = [3001,1009,20,0];
var p_porte_de_la_chapelle = [2851,1074,20,10];
var p_marx_dormoy = [2851,1200,20,0];
var p_jules_joffrin = [2366,1242,20,-10];
var p_lamarck_caulaincourt = [2250,1260,20,20];
var p_abbesses = [2250,1354,20,0];
var p_saint_georges = [2250,1611,20,0];
var p_notre_dame_de_lorette = [2200,1767,-125,30];
var p_trinite_d_estienne_d_orves = [1983,1767,-100,-15];
var p_assemblee_nationale = [1603,2624,20,0];
var p_solferino = [1695,2718,20,0];
var p_rue_du_bac = [1801,2822,20,0];
var p_rennes = [1992,3014,-60,20];
var p_notre_dame_des_champs = [2088,3152,20,0];
var p_falguiere = [1812,3233,20,-10];
var p_volontaires = [1647,3397,20,0];
var p_vaugirard = [1540,3504,20,0];
var p_convention = [1495,3610,20,0];
var p_porte_de_versailles = [1351,3694,20,5];
var p_corentin_celton = [1174,3872,20,0];
var p_mairie_d_issy = [1051,3993,20,0];
var p_asnieres_gennevilliers_les_courtilles = [1174,538,20,0];
var p_les_agnettes = [1242,743,20,0];
var p_gabriel_peri = [1311,811,20,0];
var p_mairie_de_clichy = [1469,970,20,0];
var p_porte_de_clichy = [1628,1129,20,0];
var p_brochant = [1718,1219,-75,20];
var p_la_fourche = [1812,1339,20,0];
var p_liege = [1812,1608,20,0];
var p_varenne = [1506,2748,20,0];
var p_saint_francois_xavier = [1572,2958,20,0];
var p_gaite = [2005,3420,20,0];
var p_pernety = [1945,3520,20,0];
var p_plaisance = [1846,3619,20,0];
var p_porte_de_vanves = [1726,3739,20,0];
var p_malakoff_plateau_de_vanves = [1669,3851,20,0];
var p_malakoff_rue_etienne_dolet = [1669,3978,20,0];
var p_chatillon_montrouge = [1669,4104,20,0];
var p_saint_denis_universite = [2726,494,20,0];
var p_basilique_de_saint_denis = [2646,574,20,0];
var p_saint_denis_porte_de_paris = [2376,685,20,10];
var p_carrefour_pleyel = [2124,743,20,15];
var p_mairie_de_saint_ouen = [2019,848,20,0];
var p_garibaldi = [1912,956,20,0];
var p_porte_de_saint_ouen = [1812,1077,20,0];
var p_guy_moquet = [1812,1201,20,0];
var p_cour_saint_emilion = [3410,3473,20,0];
var p_bibliotheque_francois_mitterrand = [3325,3558,20,0];
var p_olympiades = [3113,3637,20,10];

// NOM COMPLET DES LIGNES

var l1 = "1";
var l2 = "2";
var l3 = "3";
var l3bis = "3 bis";
var l4 = "4";
var l5 = "5";
var l6 = "6";
var l7 = "7";
var l7bis = "7 bis";
var l8 = "8";
var l9 = "9";
var l10 = "10";
var l11 = "11";
var l12 = "12";
var l13 = "13";
var l14 = "14";

// LIGNES DE METRO

var m1 = new Ligne(l1, "rgb(242, 201, 49)");
var m2 = new Ligne(l2, "rgb(33, 110, 180)");
var m3 = new Ligne(l3, "rgb(154, 153, 64)");
var m3bis = new Ligne(l3bis, "rgb(137, 199, 214)");
var m4 = new Ligne(l4, "rgb(187, 77, 152)");
var m5 = new Ligne(l5, "rgb(222, 139, 83)");
var m6 = new Ligne(l6, "rgb(121, 187, 146)");
var m7a = new Ligne(l7, "rgb(223, 154, 177)");
var m7b = new Ligne(l7, "rgb(223, 154, 177)");
var m7bisa = new Ligne(l7bis, "rgb(121, 187, 146)");
var m7bisb = new Ligne(l7bis, "rgb(121, 187, 146)");
var m8 = new Ligne(l8, "rgb(197, 163, 202)");
var m9 = new Ligne(l9, "rgb(206, 201, 43)");
var m10a = new Ligne(l10, "rgb(223, 176, 57)");
var m10b = new Ligne(l10, "rgb(223, 176, 57)");
var m11 = new Ligne(l11, "rgb(142, 101, 56)");
var m12 = new Ligne(l12, "rgb(50, 142, 91)");
var m13a = new Ligne(l13, "rgb(137, 199, 214)");
var m13b = new Ligne(l13, "rgb(137, 199, 214)");
var m14 = new Ligne(l4, "rgb(103, 50, 142)");

var listeLignes = [m1, m2, m3, m3bis, m4, m5, m6, m7a, m7b, m7bisa, m7bisb, m8, m9, m10a, m10b, m11, m12, m13a, m13b, m14];


// COUT DES DEPLACEMENTS ENTRE STATIONS

var DIR = 1;
var COR = 5;
var CORL = 10;

// CREATION DES OBJETS STATIONS (ID, NOM COMPLET, LIGNE, POSITION)

var la_defense_m1 = new Station("la_defense/M1", la_defense, m1, p_la_defense);
var esplanade_de_la_defense_m1 = new Station("esplanade_de_la_defense/M1", esplanade_de_la_defense, m1, p_esplanade_de_la_defense);
var pont_de_neuilly_m1 = new Station("pont_de_neuilly/M1", pont_de_neuilly, m1, p_pont_de_neuilly);
var les_sablons_m1 = new Station("les_sablons/M1", les_sablons, m1, p_les_sablons);
var porte_maillot_m1 = new Station("porte_maillot/M1", porte_maillot, m1, p_porte_maillot);
var argentine_m1 = new Station("argentine/M1", argentine, m1, p_argentine);
var charles_de_gaulle_etoile_m1 = new Station("charles_de_gaulle_etoile/M1", charles_de_gaulle_etoile, m1, p_charles_de_gaulle_etoile);
var georges_v_m1 = new Station("georges_v/M1", georges_v, m1, p_georges_v);
var franklin_d_roosevelt_m1 = new Station("franklin_d_roosevelt/M1", franklin_d_roosevelt, m1, p_franklin_d_roosevelt);
var champs_elysees_clemenceau_m1 = new Station("champs_elysees_clemenceau/M1", champs_elysees_clemenceau, m1, p_champs_elysees_clemenceau);
var concorde_m1 = new Station("concorde/M1", concorde, m1, p_concorde);
var tuileries_m1 = new Station("tuileries/M1", tuileries, m1, p_tuileries);
var palais_royal_musee_du_louvre_m1 = new Station("palais_royal_musee_du_louvre/M1", palais_royal_musee_du_louvre, m1, p_palais_royal_musee_du_louvre);
var louvre_rivoli_m1 = new Station("louvre_rivoli/M1", louvre_rivoli, m1, p_louvre_rivoli);
var chatelet_m1 = new Station("chatelet/M1", chatelet, m1, p_chatelet);
var hotel_de_ville_m1 = new Station("hotel_de_ville/M1", hotel_de_ville, m1, p_hotel_de_ville);
var saint_paul_m1 = new Station("saint_paul/M1", saint_paul, m1, p_saint_paul);
var bastille_m1 = new Station("bastille/M1", bastille, m1, p_bastille);
var gare_de_lyon_m1 = new Station("gare_de_lyon/M1", gare_de_lyon, m1, p_gare_de_lyon);
var reuilly_diderot_m1 = new Station("reuilly_diderot/M1", reuilly_diderot, m1, p_reuilly_diderot);
var nation_m1 = new Station("nation/M1", nation, m1, p_nation);
var porte_de_vincennes_m1 = new Station("porte_de_vincennes/M1", porte_de_vincennes, m1, p_porte_de_vincennes);
var saint_mande_m1 = new Station("saint_mande/M1", saint_mande, m1, p_saint_mande);
var berault_m1 = new Station("berault/M1", berault, m1, p_berault);
var chateau_de_vincennes_m1 = new Station("chateau_de_vincennes/M1", chateau_de_vincennes, m1, p_chateau_de_vincennes);

var porte_dauphine_m2 = new Station("porte_dauphine/M2", porte_dauphine, m2, p_porte_dauphine);
var victor_hugo_m2 = new Station("victor_hugo/M2", victor_hugo, m2, p_victor_hugo);
var charles_de_gaulle_etoile_m2 = new Station("charles_de_gaulle_etoile/M2", charles_de_gaulle_etoile, m2, p_charles_de_gaulle_etoile);
var ternes_m2 = new Station("ternes/M2", ternes, m2, p_ternes);
var courcelles_m2 = new Station("courcelles/M2", courcelles, m2, p_courcelles);
var monceau_m2 = new Station("monceau/M2", monceau, m2, p_monceau);
var villiers_m2 = new Station("villiers/M2", villiers, m2, p_villiers);
var rome_m2 = new Station("rome/M2", rome, m2, p_rome);
var place_de_clichy_m2 = new Station("place_de_clichy/M2", place_de_clichy, m2, p_place_de_clichy);
var blanche_m2 = new Station("blanche/M2", blanche, m2, p_blanche);
var pigalle_m2 = new Station("pigalle/M2", pigalle, m2, p_pigalle);
var anvers_m2 = new Station("anvers/M2", anvers, m2, p_anvers);
var barbes_rochechouart_m2 = new Station("barbes_rochechouart/M2", barbes_rochechouart, m2, p_barbes_rochechouart);
var la_chapelle_m2 = new Station("la_chapelle/M2", la_chapelle, m2, p_la_chapelle);
var stalingrad_m2 = new Station("stalingrad/M2", stalingrad, m2, p_stalingrad);
var jaures_m2 = new Station("jaures/M2", jaures, m2, p_jaures);
var colonel_fabien_m2 = new Station("colonel_fabien/M2", colonel_fabien, m2, p_colonel_fabien);
var belleville_m2 = new Station("belleville/M2", belleville, m2, p_belleville);
var couronnes_m2 = new Station("couronnes/M2", couronnes, m2, p_couronnes);
var menilmontant_m2 = new Station("menilmontant/M2", menilmontant, m2, p_menilmontant);
var pere_lachaise_m2 = new Station("pere_lachaise/M2", pere_lachaise, m2, p_pere_lachaise);
var philippe_auguste_m2 = new Station("philippe_auguste/M2", philippe_auguste, m2, p_philippe_auguste);
var alexandre_dumas_m2 = new Station("alexandre_dumas/M2", alexandre_dumas, m2, p_alexandre_dumas);
var avron_m2 = new Station("avron/M2", avron, m2, p_avron);
var nation_m2 = new Station("nation/M2", nation, m2, p_nation);

var pont_de_levallois_becon_m3 = new Station("pont_de_levallois_becon/M3", pont_de_levallois_becon, m3, p_pont_de_levallois_becon);
var anatole_france_m3 = new Station("anatole_france/M3", anatole_france, m3, p_anatole_france);
var louise_michel_m3 = new Station("louise_michel/M3", louise_michel, m3, p_louise_michel);
var porte_de_champerret_m3 = new Station("porte_de_champerret/M3", porte_de_champerret, m3, p_porte_de_champerret);
var pereire_m3 = new Station("pereire/M3", pereire, m3, p_pereire);
var wagram_m3 = new Station("wagram/M3", wagram, m3, p_wagram);
var malesherbes_m3 = new Station("malesherbes/M3", malesherbes, m3, p_malesherbes);
var villiers_m3 = new Station("villiers/M3", villiers, m3, p_villiers);
var europe_m3 = new Station("europe/M3", europe, m3, p_europe);
var saint_lazare_m3 = new Station("saint_lazare/M3", saint_lazare, m3, p_saint_lazare);
var havre_caumartin_m3 = new Station("havre_caumartin/M3", havre_caumartin, m3, p_havre_caumartin);
var opera_m3 = new Station("opera/M3", opera, m3, p_opera);
var quatre_septembre_m3 = new Station("quatre_septembre/M3", quatre_septembre, m3, p_quatre_septembre);
var bourse_m3 = new Station("bourse/M3", bourse, m3, p_bourse);
var sentier_m3 = new Station("sentier/M3", sentier, m3, p_sentier);
var reaumur_sebastopol_m3 = new Station("reaumur_sebastopol/M3", reaumur_sebastopol, m3, p_reaumur_sebastopol);
var arts_et_metiers_m3 = new Station("arts_et_metiers/M3", arts_et_metiers, m3, p_arts_et_metiers);
var temple_m3 = new Station("temple/M3", temple, m3, p_temple);
var republique_m3 = new Station("republique/M3", republique, m3, p_republique);
var parmentier_m3 = new Station("parmentier/M3", parmentier, m3, p_parmentier);
var rue_saint_maur_m3 = new Station("rue_saint_maur/M3", rue_saint_maur, m3, p_rue_saint_maur);
var pere_lachaise_m3 = new Station("pere_lachaise/M3", pere_lachaise, m3, p_pere_lachaise);
var gambetta_m3 = new Station("gambetta/M3", gambetta, m3, p_gambetta);
var porte_de_bagnolet_m3 = new Station("porte_de_bagnolet/M3", porte_de_bagnolet, m3, p_porte_de_bagnolet);
var gallieni_m3 = new Station("gallieni/M3", gallieni, m3, p_gallieni);

var gambetta_m3b = new Station("gambetta/M3bis", gambetta, m3bis, p_gambetta);
var pelleport_m3b = new Station("pelleport/M3bis", pelleport, m3bis, p_pelleport);
var saint_fargeau_m3b = new Station("saint_fargeau/M3bis", saint_fargeau, m3bis, p_saint_fargeau);
var porte_des_lilas_m3b = new Station("porte_des_lilas/M3bis", porte_des_lilas, m3bis, p_porte_des_lilas);

var porte_de_clignancourt_m4 = new Station("porte_de_clignancourt/M4", porte_de_clignancourt, m4, p_porte_de_clignancourt);
var simplon_m4 = new Station("simplon/M4", simplon, m4, p_simplon);
var marcadet_poissonniers_m4 = new Station("marcadet_poissonniers/M4", marcadet_poissonniers, m4, p_marcadet_poissonniers);
var chateau_rouge_m4 = new Station("chateau_rouge/M4", chateau_rouge, m4, p_chateau_rouge);
var barbes_rochechouart_m4 = new Station("barbes_rochechouart/M4", barbes_rochechouart, m4, p_barbes_rochechouart);
var gare_du_nord_m4 = new Station("gare_du_nord/M4", gare_du_nord, m4, p_gare_du_nord);
var gare_de_l_est_m4 = new Station("gare_de_l_est/M4", gare_de_l_est, m4, p_gare_de_l_est);
var chateau_d_eau_m4 = new Station("chateau_d_eau/M4", chateau_d_eau, m4, p_chateau_d_eau);
var strasbourg_saint_denis_m4 = new Station("strasbourg_saint_denis/M4", strasbourg_saint_denis, m4, p_strasbourg_saint_denis);
var reaumur_sebastopol_m4 = new Station("reaumur_sebastopol/M4", reaumur_sebastopol, m4, p_reaumur_sebastopol);
var etienne_marcel_m4 = new Station("etienne_marcel/M4", etienne_marcel, m4, p_etienne_marcel);
var les_halles_m4 = new Station("les_halles/M4", les_halles, m4, p_les_halles);
var chatelet_m4 = new Station("chatelet/M4", chatelet, m4, p_chatelet);
var cite_m4 = new Station("cite/M4", cite, m4, p_cite);
var saint_michel_m4 = new Station("saint_michel/M4", saint_michel, m4, p_saint_michel);
var odeon_m4 = new Station("odeon/M4", odeon, m4, p_odeon);
var saint_germain_des_pres_m4 = new Station("saint_germain_des_pres/M4", saint_germain_des_pres, m4, p_saint_germain_des_pres);
var saint_sulpice_m4 = new Station("saint_sulpice/M4", saint_sulpice, m4, p_saint_sulpice);
var saint_placide_m4 = new Station("saint_placide/M4", saint_placide, m4, p_saint_placide);
var montparnasse_bienvenue_m4 = new Station("montparnasse_bienvenue/M4", montparnasse_bienvenue, m4, p_montparnasse_bienvenue);
var valvin_m4 = new Station("valvin/M4", valvin, m4, p_valvin);
var raspail_m4 = new Station("raspail/M4", raspail, m4, p_raspail);
var denfert_rochereau_m4 = new Station("denfert_rochereau/M4", denfert_rochereau, m4, p_denfert_rochereau);
var mouton_duvernet_m4 = new Station("mouton_duvernet/M4", mouton_duvernet, m4, p_mouton_duvernet);
var alesia_m4 = new Station("alesia/M4", alesia, m4, p_alesia);
var porte_d_orleans_m4 = new Station("porte_d_orleans/M4", porte_d_orleans, m4, p_porte_d_orleans);
var mairie_de_montrouge_m4 = new Station("mairie_de_montrouge/M4", mairie_de_montrouge, m4, p_mairie_de_montrouge);

var bobigny_pablo_picasso_m5 = new Station("bobigny_pablo_picasso/M5", bobigny_pablo_picasso, m5, p_bobigny_pablo_picasso);
var bobigny_pantin_raymond_queneau_m5 = new Station("bobigny_pantin_raymond_queneau/M5", bobigny_pantin_raymond_queneau, m5, p_bobigny_pantin_raymond_queneau);
var eglise_de_pantin_m5 = new Station("eglise_de_pantin/M5", eglise_de_pantin, m5, p_eglise_de_pantin);
var hoche_m5 = new Station("hoche/M5", hoche, m5, p_hoche);
var porte_de_pantin_m5 = new Station("porte_de_pantin/M5", porte_de_pantin, m5, p_porte_de_pantin);
var ourcq_m5 = new Station("ourcq/M5", ourcq, m5, p_ourcq);
var laumiere_m5 = new Station("laumiere/M5", laumiere, m5, p_laumiere);
var jaures_m5 = new Station("jaures/M5", jaures, m5, p_jaures);
var stalingrad_m5 = new Station("stalingrad/M5", stalingrad, m5, p_stalingrad);
var gare_du_nord_m5 = new Station("gare_du_nord/M5", gare_du_nord, m5, p_gare_du_nord);
var gare_de_l_est_m5 = new Station("gare_de_l_est/M5", gare_de_l_est, m5, p_gare_de_l_est);
var jacques_bonsergent_m5 = new Station("jacques_bonsergent/M5", jacques_bonsergent, m5, p_jacques_bonsergent);
var republique_m5 = new Station("republique/M5", republique, m5, p_republique);
var oberkampf_m5 = new Station("oberkampf/M5", oberkampf, m5, p_oberkampf);
var richard_lenoir_m5 = new Station("richard_lenoir/M5", richard_lenoir, m5, p_richard_lenoir);
var breguet_sabin_m5 = new Station("breguet_sabin/M5", breguet_sabin, m5, p_breguet_sabin);
var bastille_m5 = new Station("bastille/M5", bastille, m5, p_bastille);
var quai_de_la_rapee_m5 = new Station("quai_de_la_rapee/M5", quai_de_la_rapee, m5, p_quai_de_la_rapee);
var gare_d_austerlitz_m5 = new Station("gare_d_austerlitz/M5", gare_d_austerlitz, m5, p_gare_d_austerlitz);
var saint_marcel_m5 = new Station("saint_marcel/M5", saint_marcel, m5, p_saint_marcel);
var campo_formio_m5 = new Station("campo_formio/M5", campo_formio, m5, p_campo_formio);
var place_d_italie_m5 = new Station("place_d_italie/M5", place_d_italie, m5, p_place_d_italie);

var charles_de_gaulle_etoile_m6 = new Station("charles_de_gaulle_etoile/M6", charles_de_gaulle_etoile, m6, p_charles_de_gaulle_etoile);
var kleber_m6 = new Station("kleber/M6", kleber, m6, p_kleber);
var boissiere_m6 = new Station("boissiere/M6", boissiere, m6, p_boissiere);
var trocadero_m6 = new Station("trocadero/M6", trocadero, m6, p_trocadero);
var passy_m6 = new Station("passy/M6", passy, m6, p_passy);
var bir_hakeim_m6 = new Station("bir_hakeim/M6", bir_hakeim, m6, p_bir_hakeim);
var dupleix_m6 = new Station("dupleix/M6", dupleix, m6, p_dupleix);
var la_motte_picquet_grenelle_m6 = new Station("la_motte_picquet_grenelle/M6", la_motte_picquet_grenelle, m6, p_la_motte_picquet_grenelle);
var cambronne_m6 = new Station("cambronne/M6", cambronne, m6, p_cambronne);
var sevres_lecourbe_m6 = new Station("sevres_lecourbe/M6", sevres_lecourbe, m6, p_sevres_lecourbe);
var pasteur_m6 = new Station("pasteur/M6", pasteur, m6, p_pasteur);
var montparnasse_bienvenue_m6 = new Station("montparnasse_bienvenue/M6", montparnasse_bienvenue, m6, p_montparnasse_bienvenue);
var edgar_quinet_m6 = new Station("edgar_quinet/M6", edgar_quinet, m6, p_edgar_quinet);
var raspail_m6 = new Station("raspail/M6", raspail, m6, p_raspail);
var denfert_rochereau_m6 = new Station("denfert_rochereau/M6", denfert_rochereau, m6, p_denfert_rochereau);
var saint_jacques_m6 = new Station("saint_jacques/M6", saint_jacques, m6, p_saint_jacques);
var glaciere_m6 = new Station("glaciere/M6", glaciere, m6, p_glaciere);
var corvisart_m6 = new Station("corvisart/M6", corvisart, m6, p_corvisart);
var place_d_italie_m6 = new Station("place_d_italie/M6", place_d_italie, m6, p_place_d_italie);
var nationale_m6 = new Station("nationale/M6", nationale, m6, p_nationale);
var chevaleret_m6 = new Station("chevaleret/M6", chevaleret, m6, p_chevaleret);
var quai_de_la_gare_m6 = new Station("quai_de_la_gare/M6", quai_de_la_gare, m6, p_quai_de_la_gare);
var bercy_m6 = new Station("bercy/M6", bercy, m6, p_bercy);
var dugommier_m6 = new Station("dugommier/M6", dugommier, m6, p_dugommier);
var daumesnil_m6 = new Station("daumesnil/M6", daumesnil, m6, p_daumesnil);
var bel_air_m6 = new Station("bel_air/M6", bel_air, m6, p_bel_air);
var picpus_m6 = new Station("picpus/M6", picpus, m6, p_picpus);
var nation_m6 = new Station("nation/M6", nation, m6, p_nation);

var la_courneuve_8_mai_1945_m7a = new Station("la_courneuve_8_mai_1945/M7A", la_courneuve_8_mai_1945, m7a, p_la_courneuve_8_mai_1945);
var fort_d_aubervilliers_m7a = new Station("fort_d_aubervilliers/M7A", fort_d_aubervilliers, m7a, p_fort_d_aubervilliers);
var aubervilliers_pantin_quatre_chemins_m7a = new Station("aubervilliers_pantin_quatre_chemins/M7A", aubervilliers_pantin_quatre_chemins, m7a, p_aubervilliers_pantin_quatre_chemins);
var porte_de_la_villette_m7a = new Station("porte_de_la_villette/M7A", porte_de_la_villette, m7a, p_porte_de_la_villette);
var corentin_cariou_m7a = new Station("corentin_cariou/M7A", corentin_cariou, m7a, p_corentin_cariou);
var crimee_m7a = new Station("crimee/M7A", crimee, m7a, p_crimee);
var riquet_m7a = new Station("riquet/M7A", riquet, m7a, p_riquet);
var stalingrad_m7a = new Station("stalingrad/M7A", stalingrad, m7a, p_stalingrad);
var louis_blanc_m7a = new Station("louis_blanc/M7A", louis_blanc, m7a, p_louis_blanc);
var chateau_landon_m7a = new Station("chateau_landon/M7A", chateau_landon, m7a, p_chateau_landon);
var gare_de_l_est_m7a = new Station("gare_de_l_est/M7A", gare_de_l_est, m7a, p_gare_de_l_est);
var poissonniere_m7a = new Station("poissonniere/M7A", poissonniere, m7a, p_poissonniere);
var cadet_m7a = new Station("cadet/M7A", cadet, m7a, p_cadet);
var le_peletier_m7a = new Station("le_peletier/M7A", le_peletier, m7a, p_le_peletier);
var chaussee_d_antin_la_fayette_m7a = new Station("chaussee_d_antin_la_fayette/M7A", chaussee_d_antin_la_fayette, m7a, p_chaussee_d_antin_la_fayette);
var opera_m7a = new Station("opera/M7A", opera, m7a, p_opera);
var pyramides_m7a = new Station("pyramides/M7A", pyramides, m7a, p_pyramides);
var palais_royal_musee_du_louvre_m7a = new Station("palais_royal_musee_du_louvre/M7A", palais_royal_musee_du_louvre, m7a, p_palais_royal_musee_du_louvre);
var pont_neuf_m7a = new Station("pont_neuf/M7A", pont_neuf, m7a, p_pont_neuf);
var chatelet_m7a = new Station("chatelet/M7A", chatelet, m7a, p_chatelet);
var pont_marie_m7a = new Station("pont_marie/M7A", pont_marie, m7a, p_pont_marie);
var sully_morland_m7a = new Station("sully_morland/M7A", sully_morland, m7a, p_sully_morland);
var jussieu_m7a = new Station("jussieu/M7A", jussieu, m7a, p_jussieu);
var place_monge_m7a = new Station("place_monge/M7A", place_monge, m7a, p_place_monge);
var censier_daubenton_m7a = new Station("censier_daubenton/M7A", censier_daubenton, m7a, p_censier_daubenton);
var les_gobelins_m7a = new Station("les_gobelins/M7A", les_gobelins, m7a, p_les_gobelins);
var place_d_italie_m7a = new Station("place_d_italie/M7A", place_d_italie, m7a, p_place_d_italie);
var tolbiac_m7a = new Station("tolbiac/M7A", tolbiac, m7a, p_tolbiac);
var maison_blanche_m7a = new Station("maison_blanche/M7A", maison_blanche, m7a, p_maison_blanche);
var le_kremlin_bicetre_m7a = new Station("le_kremlin_bicetre/M7A", le_kremlin_bicetre, m7a, p_le_kremlin_bicetre);
var villejuif_leo_lagrange_m7a = new Station("villejuif_leo_lagrange/M7A", villejuif_leo_lagrange, m7a, p_villejuif_leo_lagrange);
var villejuif_paul_vaillant_couturier_m7a = new Station("villejuif_paul_vaillant_couturier/M7A", villejuif_paul_vaillant_couturier, m7a, p_villejuif_paul_vaillant_couturier);
var villejuif_louis_aragon_m7a = new Station("villejuif_louis_aragon/M7A", villejuif_louis_aragon, m7a, p_villejuif_louis_aragon);

var la_courneuve_8_mai_1945_m7b = new Station("la_courneuve_8_mai_1945/M7B", la_courneuve_8_mai_1945, m7b, p_la_courneuve_8_mai_1945);
var fort_d_aubervilliers_m7b = new Station("fort_d_aubervilliers/M7B", fort_d_aubervilliers, m7b, p_fort_d_aubervilliers);
var aubervilliers_pantin_quatre_chemins_m7b = new Station("aubervilliers_pantin_quatre_chemins/M7B", aubervilliers_pantin_quatre_chemins, m7b, p_aubervilliers_pantin_quatre_chemins);
var porte_de_la_villette_m7b = new Station("porte_de_la_villette/M7B", porte_de_la_villette, m7b, p_porte_de_la_villette);
var corentin_cariou_m7b = new Station("corentin_cariou/M7B", corentin_cariou, m7b, p_corentin_cariou);
var crimee_m7b = new Station("crimee/M7B", crimee, m7b, p_crimee);
var riquet_m7b = new Station("riquet/M7B", riquet, m7b, p_riquet);
var stalingrad_m7b = new Station("stalingrad/M7B", stalingrad, m7b, p_stalingrad);
var louis_blanc_m7b = new Station("louis_blanc/M7B", louis_blanc, m7b, p_louis_blanc);
var chateau_landon_m7b = new Station("chateau_landon/M7B", chateau_landon, m7b, p_chateau_landon);
var gare_de_l_est_m7b = new Station("gare_de_l_est/M7B", gare_de_l_est, m7b, p_gare_de_l_est);
var poissonniere_m7b = new Station("poissonniere/M7B", poissonniere, m7b, p_poissonniere);
var cadet_m7b = new Station("cadet/M7B", cadet, m7b, p_cadet);
var le_peletier_m7b = new Station("le_peletier/M7B", le_peletier, m7b, p_le_peletier);
var chaussee_d_antin_la_fayette_m7b = new Station("chaussee_d_antin_la_fayette/M7B", chaussee_d_antin_la_fayette, m7b, p_chaussee_d_antin_la_fayette);
var opera_m7b = new Station("opera/M7B", opera, m7b, p_opera);
var pyramides_m7b = new Station("pyramides/M7B", pyramides, m7b, p_pyramides);
var palais_royal_musee_du_louvre_m7b = new Station("palais_royal_musee_du_louvre/M7B", palais_royal_musee_du_louvre, m7b, p_palais_royal_musee_du_louvre);
var pont_neuf_m7b = new Station("pont_neuf/M7B", pont_neuf, m7b, p_pont_neuf);
var chatelet_m7b = new Station("chatelet/M7B", chatelet, m7b, p_chatelet);
var pont_marie_m7b = new Station("pont_marie/M7B", pont_marie, m7b, p_pont_marie);
var sully_morland_m7b = new Station("sully_morland/M7B", sully_morland, m7b, p_sully_morland);
var jussieu_m7b = new Station("jussieu/M7B", jussieu, m7b, p_jussieu);
var place_monge_m7b = new Station("place_monge/M7B", place_monge, m7b, p_place_monge);
var censier_daubenton_m7b = new Station("censier_daubenton/M7B", censier_daubenton, m7b, p_censier_daubenton);
var les_gobelins_m7b = new Station("les_gobelins/M7B", les_gobelins, m7b, p_les_gobelins);
var place_d_italie_m7b = new Station("place_d_italie/M7B", place_d_italie, m7b, p_place_d_italie);
var tolbiac_m7b = new Station("tolbiac/M7B", tolbiac, m7b, p_tolbiac);
var maison_blanche_m7b = new Station("maison_blanche/M7B", maison_blanche, m7b, p_maison_blanche);
var porte_d_italie_m7b = new Station("porte_d_italie/M7B", porte_d_italie, m7b, p_porte_d_italie);
var porte_de_choisy_m7b = new Station("porte_de_choisy/M7B", porte_de_choisy, m7b, p_porte_de_choisy);
var porte_d_ivry_m7b = new Station("porte_d_ivry/M7B", porte_d_ivry, m7b, p_porte_d_ivry);
var pierre_et_marie_curie_m7b = new Station("pierre_et_marie_curie/M7B", pierre_et_marie_curie, m7b, p_pierre_et_marie_curie);
var mairie_d_ivry_m7b = new Station("mairie_d_ivry/M7B", mairie_d_ivry, m7b, p_mairie_d_ivry);

var louis_blanc_m7bisa = new Station("louis_blanc/M7bisA", louis_blanc, m7bisa, p_louis_blanc);
var jaures_m7bisa = new Station("jaures/M7bisA", jaures, m7bisa, p_jaures);
var bolivar_m7bisa = new Station("bolivar/M7bisA", bolivar, m7bisa, p_bolivar);
var buttes_chaumont_m7bisa = new Station("buttes_chaumont/M7bisA", buttes_chaumont, m7bisa, p_buttes_chaumont);
var botzaris_m7bisa = new Station("botzaris/M7bisA", botzaris, m7bisa, p_botzaris);
var place_des_fetes_m7bisa = new Station("place_des_fetes/M7bisA", place_des_fetes, m7bisa, p_place_des_fetes);
var pre_saint_gervais_m7bisa = new Station("pre_saint_gervais/M7bisA", pre_saint_gervais, m7bisa, p_pre_saint_gervais);

var louis_blanc_m7bisb = new Station("louis_blanc/M7bisB", louis_blanc, m7bisb, p_louis_blanc);
var jaures_m7bisb = new Station("jaures/M7bisB", jaures, m7bisb, p_jaures);
var bolivar_m7bisb = new Station("bolivar/M7bisB", bolivar, m7bisb, p_bolivar);
var buttes_chaumont_m7bisb = new Station("buttes_chaumont/M7bisB", buttes_chaumont, m7bisb, p_buttes_chaumont);
var botzaris_m7bisb = new Station("botzaris/M7bisB", botzaris, m7bisb, p_botzaris);
var danube_m7bisb = new Station("danube/M7bisB", danube, m7bisb, p_danube);
var pre_saint_gervais_m7bisb = new Station("pre_saint_gervais/M7bisB", pre_saint_gervais, m7bisb, p_pre_saint_gervais);

var balard_m8 = new Station("balard/M8", balard, m8, p_balard);
var lourmel_m8 = new Station("lourmel/M8", lourmel, m8, p_lourmel);
var boucicaut_m8 = new Station("boucicaut/M8", boucicaut, m8, p_boucicaut);
var felix_faure_m8 = new Station("felix_faure/M8", felix_faure, m8, p_felix_faure);
var commerce_m8 = new Station("commerce/M8", commerce, m8, p_commerce);
var la_motte_picquet_grenelle_m8 = new Station("la_motte_picquet_grenelle/M8", la_motte_picquet_grenelle, m8, p_la_motte_picquet_grenelle);
var ecole_militaire_m8 = new Station("ecole_militaire/M8", ecole_militaire, m8, p_ecole_militaire);
var la_tour_maubourg_m8 = new Station("la_tour_maubourg/M8", la_tour_maubourg, m8, p_la_tour_maubourg);
var invalides_m8 = new Station("invalides/M8", invalides, m8, p_invalides);
var concorde_m8 = new Station("concorde/M8", concorde, m8, p_concorde);
var madeleine_m8 = new Station("madeleine/M8", madeleine, m8, p_madeleine);
var opera_m8 = new Station("opera/M8", opera, m8, p_opera);
var richelieu_drouot_m8 = new Station("richelieu_drouot/M8", richelieu_drouot, m8, p_richelieu_drouot);
var grands_boulevards_m8 = new Station("grands_boulevards/M8", grands_boulevards, m8, p_grands_boulevards);
var bonne_nouvelle_m8 = new Station("bonne_nouvelle/M8", bonne_nouvelle, m8, p_bonne_nouvelle);
var strasbourg_saint_denis_m8 = new Station("strasbourg_saint_denis/M8", strasbourg_saint_denis, m8, p_strasbourg_saint_denis);
var republique_m8 = new Station("republique/M8", republique, m8, p_republique);
var filles_du_calvaire_m8 = new Station("filles_du_calvaire/M8", filles_du_calvaire, m8, p_filles_du_calvaire);
var saint_sebastien_froissart_m8 = new Station("saint_sebastien_froissart/M8", saint_sebastien_froissart, m8, p_saint_sebastien_froissart);
var chemin_vert_m8 = new Station("chemin_vert/M8", chemin_vert, m8, p_chemin_vert);
var bastille_m8 = new Station("bastille/M8", bastille, m8, p_bastille);
var ledru_rollin_m8 = new Station("ledru_rollin/M8", ledru_rollin, m8, p_ledru_rollin);
var faidherbe_chaligny_m8 = new Station("faidherbe_chaligny/M8", faidherbe_chaligny, m8, p_faidherbe_chaligny);
var reuilly_diderot_m8 = new Station("reuilly_diderot/M8", reuilly_diderot, m8, p_reuilly_diderot);
var montgallet_m8 = new Station("montgallet/M8", montgallet, m8, p_montgallet);
var daumesnil_m8 = new Station("daumesnil/M8", daumesnil, m8, p_daumesnil);
var michel_bizot_m8 = new Station("michel_bizot/M8", michel_bizot, m8, p_michel_bizot);
var porte_doree_m8 = new Station("porte_doree/M8", porte_doree, m8, p_porte_doree);
var porte_de_charenton_m8 = new Station("porte_de_charenton/M8", porte_de_charenton, m8, p_porte_de_charenton);
var liberte_m8 = new Station("liberte/M8", liberte, m8, p_liberte);
var charenton_ecoles_m8 = new Station("charenton_ecoles/M8", charenton_ecoles, m8, p_charenton_ecoles);
var ecole_veterinaire_de_maisons_alfort_m8 = new Station("ecole_veterinaire_de_maisons_alfort/M8", ecole_veterinaire_de_maisons_alfort, m8, p_ecole_veterinaire_de_maisons_alfort);
var maisons_alfort_stade_m8 = new Station("maisons_alfort_stade/M8", maisons_alfort_stade, m8, p_maisons_alfort_stade);
var maisons_alfort_les_juilliottes_m8 = new Station("maisons_alfort_les_juilliottes/M8", maisons_alfort_les_juilliottes, m8, p_maisons_alfort_les_juilliottes);
var creteil_l_echat_m8 = new Station("creteil_l_echat/M8", creteil_l_echat, m8, p_creteil_l_echat);
var creteil_universite_m8 = new Station("creteil_universite/M8", creteil_universite, m8, p_creteil_universite);
var creteil_prefecture_m8 = new Station("creteil_prefecture/M8", creteil_prefecture, m8, p_creteil_prefecture);
var pointe_du_lac_m8 = new Station("pointe_du_lac/M8", pointe_du_lac, m8, p_pointe_du_lac);

var pont_de_sevres_m9 = new Station("pont_de_sevres/M9", pont_de_sevres, m9, p_pont_de_sevres);
var billancourt_m9 = new Station("billancourt/M9", billancourt, m9, p_billancourt);
var marcel_sembat_m9 = new Station("marcel_sembat/M9", marcel_sembat, m9, p_marcel_sembat);
var porte_de_saint_cloud_m9 = new Station("porte_de_saint_cloud/M9", porte_de_saint_cloud, m9, p_porte_de_saint_cloud);
var exelmans_m9 = new Station("exelmans/M9", exelmans, m9, p_exelmans);
var michel_ange_molitor_m9 = new Station("michel_ange_molitor/M9", michel_ange_molitor, m9, p_michel_ange_molitor);
var michel_ange_auteuil_m9 = new Station("michel_ange_auteuil/M9", michel_ange_auteuil, m9, p_michel_ange_auteuil);
var jasmin_m9 = new Station("jasmin/M9", jasmin, m9, p_jasmin);
var ranelagh_m9 = new Station("ranelagh/M9", ranelagh, m9, p_ranelagh);
var la_muette_m9 = new Station("la_muette/M9", la_muette, m9, p_la_muette);
var rue_de_la_pompe_m9 = new Station("rue_de_la_pompe/M9", rue_de_la_pompe, m9, p_rue_de_la_pompe);
var trocadero_m9 = new Station("trocadero/M9", trocadero, m9, p_trocadero);
var iena_m9 = new Station("iena/M9", iena, m9, p_iena);
var alma_marceau_m9 = new Station("alma_marceau/M9", alma_marceau, m9, p_alma_marceau);
var franklin_d_roosevelt_m9 = new Station("franklin_d_roosevelt/M9", franklin_d_roosevelt, m9, p_franklin_d_roosevelt);
var saint_philippe_du_roule_m9 = new Station("saint_philippe_du_roule/M9", saint_philippe_du_roule, m9, p_saint_philippe_du_roule);
var miromesnil_m9 = new Station("miromesnil/M9", miromesnil, m9, p_miromesnil);
var saint_augustin_m9 = new Station("saint_augustin/M9", saint_augustin, m9, p_saint_augustin);
var havre_caumartin_m9 = new Station("havre_caumartin/M9", havre_caumartin, m9, p_havre_caumartin);
var chaussee_d_antin_la_fayette_m9 = new Station("chaussee_d_antin_la_fayette/M9", chaussee_d_antin_la_fayette, m9, p_chaussee_d_antin_la_fayette);
var richelieu_drouot_m9 = new Station("richelieu_drouot/M9", richelieu_drouot, m9, p_richelieu_drouot);
var grands_boulevards_m9 = new Station("grands_boulevards/M9", grands_boulevards, m9, p_grands_boulevards);
var bonne_nouvelle_m9 = new Station("bonne_nouvelle/M9", bonne_nouvelle, m9, p_bonne_nouvelle);
var strasbourg_saint_denis_m9 = new Station("strasbourg_saint_denis/M9", strasbourg_saint_denis, m9, p_strasbourg_saint_denis);
var republique_m9 = new Station("republique/M9", republique, m9, p_republique);
var oberkampf_m9 = new Station("oberkampf/M9", oberkampf, m9, p_oberkampf);
var saint_ambroise_m9 = new Station("saint_ambroise/M9", saint_ambroise, m9, p_saint_ambroise);
var voltaire_m9 = new Station("voltaire/M9", voltaire, m9, p_voltaire);
var charonne_m9 = new Station("charonne/M9", charonne, m9, p_charonne);
var rue_des_boulets_m9 = new Station("rue_des_boulets/M9", rue_des_boulets, m9, p_rue_des_boulets);
var nation_m9 = new Station("nation/M9", nation, m9, p_nation);
var buzenval_m9 = new Station("buzenval/M9", buzenval, m9, p_buzenval);
var maraichers_m9 = new Station("maraichers/M9", maraichers, m9, p_maraichers);
var porte_de_montreuil_m9 = new Station("porte_de_montreuil/M9", porte_de_montreuil, m9, p_porte_de_montreuil);
var robespierre_m9 = new Station("robespierre/M9", robespierre, m9, p_robespierre);
var croix_de_chavaux_m9 = new Station("croix_de_chavaux/M9", croix_de_chavaux, m9, p_croix_de_chavaux);
var mairie_de_montreuil_m9 = new Station("mairie_de_montreuil/M9", mairie_de_montreuil, m9, p_mairie_de_montreuil);

var boulogne_pont_de_saint_cloud_m10a = new Station("boulogne_pont_de_saint_cloud/M10A", boulogne_pont_de_saint_cloud, m10a, p_boulogne_pont_de_saint_cloud);
var boulogne_jean_jaures_m10a = new Station("boulogne_jean_jaures/M10A", boulogne_jean_jaures, m10a, p_boulogne_jean_jaures);
var michel_ange_molitor_m10a = new Station("michel_ange_molitor/M10A", michel_ange_molitor, m10a, p_michel_ange_molitor);
var chardon_lagache_m10a = new Station("chardon_lagache/M10A", chardon_lagache, m10a, p_chardon_lagache);
var mirabeau_m10a = new Station("mirabeau/M10A", mirabeau, m10a, p_mirabeau);
var javel_andre_citroen_m10a = new Station("javel_andre_citroen/M10A", javel_andre_citroen, m10a, p_javel_andre_citroen);
var charles_michels_m10a = new Station("charles_michels/M10A", charles_michels, m10a, p_charles_michels);
var avenue_emile_zola_m10a = new Station("avenue_emile_zola/M10A", avenue_emile_zola, m10a, p_avenue_emile_zola);
var la_motte_picquet_grenelle_m10a = new Station("la_motte_picquet_grenelle/M10A", la_motte_picquet_grenelle, m10a, p_la_motte_picquet_grenelle);
var segur_m10a = new Station("segur/M10A", segur, m10a, p_segur);
var duroc_m10a = new Station("duroc/M10A", duroc, m10a, p_duroc);
var vaneau_m10a = new Station("vaneau/M10A", vaneau, m10a, p_vaneau);
var sevres_babylone_m10a = new Station("sevres_babylone/M10A", sevres_babylone, m10a, p_sevres_babylone);
var mabillon_m10a = new Station("mabillon/M10A", mabillon, m10a, p_mabillon);
var odeon_m10a = new Station("odeon/M10A", odeon, m10a, p_odeon);
var cluny_la_sorbonne_m10a = new Station("cluny_la_sorbonne/M10A", cluny_la_sorbonne, m10a, p_cluny_la_sorbonne);
var maubert_mutualite_m10a = new Station("maubert_mutualite/M10A", maubert_mutualite, m10a, p_maubert_mutualite);
var cardinal_lemoine_m10a = new Station("cardinal_lemoine/M10A", cardinal_lemoine, m10a, p_cardinal_lemoine);
var jussieu_m10a = new Station("jussieu/M10A", jussieu, m10a, p_jussieu);
var gare_d_austerlitz_m10a = new Station("gare_d_austerlitz/M10A", gare_d_austerlitz, m10a, p_gare_d_austerlitz);

var boulogne_pont_de_saint_cloud_m10b = new Station("boulogne_pont_de_saint_cloud/M10B", boulogne_pont_de_saint_cloud, m10b, p_boulogne_pont_de_saint_cloud);
var boulogne_jean_jaures_m10b = new Station("boulogne_jean_jaures/M10B", boulogne_jean_jaures, m10b, p_boulogne_jean_jaures);
var porte_d_auteuil_m10b = new Station("porte_d_auteuil/M10B", porte_d_auteuil, m10b, p_porte_d_auteuil);
var michel_ange_auteuil_m10b = new Station("michel_ange_auteuil/M10B", michel_ange_auteuil, m10b, p_michel_ange_auteuil);
var eglise_d_auteuil_m10b = new Station("eglise_d_auteuil/M10B", eglise_d_auteuil, m10b, p_eglise_d_auteuil);
var javel_andre_citroen_m10b = new Station("javel_andre_citroen/M10B", javel_andre_citroen, m10b, p_javel_andre_citroen);
var charles_michels_m10b = new Station("charles_michels/M10B", charles_michels, m10b, p_charles_michels);
var avenue_emile_zola_m10b = new Station("avenue_emile_zola/M10B", avenue_emile_zola, m10b, p_avenue_emile_zola);
var la_motte_picquet_grenelle_m10b = new Station("la_motte_picquet_grenelle/M10B", la_motte_picquet_grenelle, m10b, p_la_motte_picquet_grenelle);
var segur_m10b = new Station("segur/M10B", segur, m10b, p_segur);
var duroc_m10b = new Station("duroc/M10B", duroc, m10b, p_duroc);
var vaneau_m10b = new Station("vaneau/M10B", vaneau, m10b, p_vaneau);
var sevres_babylone_m10b = new Station("sevres_babylone/M10B", sevres_babylone, m10b, p_sevres_babylone);
var mabillon_m10b = new Station("mabillon/M10B", mabillon, m10b, p_mabillon);
var odeon_m10b = new Station("odeon/M10B", odeon, m10b, p_odeon);
var cluny_la_sorbonne_m10b = new Station("cluny_la_sorbonne/M10B", cluny_la_sorbonne, m10b, p_cluny_la_sorbonne);
var maubert_mutualite_m10b = new Station("maubert_mutualite/M10B", maubert_mutualite, m10b, p_maubert_mutualite);
var cardinal_lemoine_m10b = new Station("cardinal_lemoine/M10B", cardinal_lemoine, m10b, p_cardinal_lemoine);
var jussieu_m10b = new Station("jussieu/M10B", jussieu, m10b, p_jussieu);
var gare_d_austerlitz_m10b = new Station("gare_d_austerlitz/M10B", gare_d_austerlitz, m10b, p_gare_d_austerlitz);

var chatelet_m11 = new Station("chatelet/M11", chatelet, m11, p_chatelet);
var hotel_de_ville_m11 = new Station("hotel_de_ville/M11", hotel_de_ville, m11, p_hotel_de_ville);
var rambuteau_m11 = new Station("rambuteau/M11", rambuteau, m11, p_rambuteau);
var arts_et_metiers_m11 = new Station("arts_et_metiers/M11", arts_et_metiers, m11, p_arts_et_metiers);
var republique_m11 = new Station("republique/M11", republique, m11, p_republique);
var goncourt_m11 = new Station("goncourt/M11", goncourt, m11, p_goncourt);
var belleville_m11 = new Station("belleville/M11", belleville, m11, p_belleville);
var pyrenees_m11 = new Station("pyrenees/M11", pyrenees, m11, p_pyrenees);
var jourdain_m11 = new Station("jourdain/M11", jourdain, m11, p_jourdain);
var place_des_fetes_m11 = new Station("place_des_fetes/M11", place_des_fetes, m11, p_place_des_fetes);
var telegraphe_m11 = new Station("telegraphe/M11", telegraphe, m11, p_telegraphe);
var porte_des_lilas_m11 = new Station("porte_des_lilas/M11", porte_des_lilas, m11, p_porte_des_lilas);
var mairie_des_lilas_m11 = new Station("mairie_des_lilas/M11", mairie_des_lilas, m11, p_mairie_des_lilas);

var front_populaire_m12 = new Station("front_populaire/M12", front_populaire, m12, p_front_populaire);
var porte_de_la_chapelle_m12 = new Station("porte_de_la_chapelle/M12", porte_de_la_chapelle, m12, p_porte_de_la_chapelle);
var marx_dormoy_m12 = new Station("marx_dormoy/M12", marx_dormoy, m12, p_marx_dormoy);
var marcadet_poissonniers_m12 = new Station("marcadet_poissonniers/M12", marcadet_poissonniers, m12, p_marcadet_poissonniers);
var jules_joffrin_m12 = new Station("jules_joffrin/M12", jules_joffrin, m12, p_jules_joffrin);
var lamarck_caulaincourt_m12 = new Station("lamarck_caulaincourt/M12", lamarck_caulaincourt, m12, p_lamarck_caulaincourt);
var abbesses_m12 = new Station("abbesses/M12", abbesses, m12, p_abbesses);
var pigalle_m12 = new Station("pigalle/M12", pigalle, m12, p_pigalle);
var saint_georges_m12 = new Station("saint_georges/M12", saint_georges, m12, p_saint_georges);
var notre_dame_de_lorette_m12 = new Station("notre_dame_de_lorette/M12", notre_dame_de_lorette, m12, p_notre_dame_de_lorette);
var trinite_d_estienne_d_orves_m12 = new Station("trinite_d_estienne_d_orves/M12", trinite_d_estienne_d_orves, m12, p_trinite_d_estienne_d_orves);
var saint_lazare_m12 = new Station("saint_lazare/M12", saint_lazare, m12, p_saint_lazare);
var madeleine_m12 = new Station("madeleine/M12", madeleine, m12, p_madeleine);
var concorde_m12 = new Station("concorde/M12", concorde, m12, p_concorde);
var assemblee_nationale_m12 = new Station("assemblee_nationale/M12", assemblee_nationale, m12, p_assemblee_nationale);
var solferino_m12 = new Station("solferino/M12", solferino, m12, p_solferino);
var rue_du_bac_m12 = new Station("rue_du_bac/M12", rue_du_bac, m12, p_rue_du_bac);
var sevres_babylone_m12 = new Station("sevres_babylone/M12", sevres_babylone, m12, p_sevres_babylone);
var rennes_m12 = new Station("rennes/M12", rennes, m12, p_rennes);
var notre_dame_des_champs_m12 = new Station("notre_dame_des_champs/M12", notre_dame_des_champs, m12, p_notre_dame_des_champs);
var montparnasse_bienvenue_m12 = new Station("montparnasse_bienvenue/M12", montparnasse_bienvenue, m12, p_montparnasse_bienvenue);
var falguiere_m12 = new Station("falguiere/M12", falguiere, m12, p_falguiere);
var pasteur_m12 = new Station("pasteur/M12", pasteur, m12, p_pasteur);
var volontaires_m12 = new Station("volontaires/M12", volontaires, m12, p_volontaires);
var vaugirard_m12 = new Station("vaugirard/M12", vaugirard, m12, p_vaugirard);
var convention_m12 = new Station("convention/M12", convention, m12, p_convention);
var porte_de_versailles_m12 = new Station("porte_de_versailles/M12", porte_de_versailles, m12, p_porte_de_versailles);
var corentin_celton_m12 = new Station("corentin_celton/M12", corentin_celton, m12, p_corentin_celton);
var mairie_d_issy_m12 = new Station("mairie_d_issy/M12", mairie_d_issy, m12, p_mairie_d_issy);

var asnieres_gennevilliers_les_courtilles_m13a = new Station("asnieres_gennevilliers_les_courtilles/M13A", asnieres_gennevilliers_les_courtilles, m13a, p_asnieres_gennevilliers_les_courtilles);
var les_agnettes_m13a = new Station("les_agnettes/M13A", les_agnettes, m13a, p_les_agnettes);
var gabriel_peri_m13a = new Station("gabriel_peri/M13A", gabriel_peri, m13a, p_gabriel_peri);
var mairie_de_clichy_m13a = new Station("mairie_de_clichy/M13A", mairie_de_clichy, m13a, p_mairie_de_clichy);
var porte_de_clichy_m13a = new Station("porte_de_clichy/M13A", porte_de_clichy, m13a, p_porte_de_clichy);
var brochant_m13a = new Station("brochant/M13A", brochant, m13a, p_brochant);
var la_fourche_m13a = new Station("la_fourche/M13A", la_fourche, m13a, p_la_fourche);
var place_de_clichy_m13a = new Station("place_de_clichy/M13A", place_de_clichy, m13a, p_place_de_clichy);
var liege_m13a = new Station("liege/M13A", liege, m13a, p_liege);
var saint_lazare_m13a = new Station("saint_lazare/M13A", saint_lazare, m13a, p_saint_lazare);
var miromesnil_m13a = new Station("miromesnil/M13A", miromesnil, m13a, p_miromesnil);
var champs_elysees_clemenceau_m13a = new Station("champs_elysees_clemenceau/M13A", champs_elysees_clemenceau, m13a, p_champs_elysees_clemenceau);
var invalides_m13a = new Station("invalides/M13A", invalides, m13a, p_invalides);
var varenne_m13a = new Station("varenne/M13A", varenne, m13a, p_varenne);
var saint_francois_xavier_m13a = new Station("saint_francois_xavier/M13A", saint_francois_xavier, m13a, p_saint_francois_xavier);
var duroc_m13a = new Station("duroc/M13A", duroc, m13a, p_duroc);
var montparnasse_bienvenue_m13a = new Station("montparnasse_bienvenue/M13A", montparnasse_bienvenue, m13a, p_montparnasse_bienvenue);
var gaite_m13a = new Station("gaite/M13A", gaite, m13a, p_gaite);
var pernety_m13a = new Station("pernety/M13A", pernety, m13a, p_pernety);
var plaisance_m13a = new Station("plaisance/M13A", plaisance, m13a, p_plaisance);
var porte_de_vanves_m13a = new Station("porte_de_vanves/M13A", porte_de_vanves, m13a, p_porte_de_vanves);
var malakoff_plateau_de_vanves_m13a = new Station("malakoff_plateau_de_vanves/M13A", malakoff_plateau_de_vanves, m13a, p_malakoff_plateau_de_vanves);
var malakoff_rue_etienne_dolet_m13a = new Station("malakoff_rue_etienne_dolet/M13A", malakoff_rue_etienne_dolet, m13a, p_malakoff_rue_etienne_dolet);
var chatillon_montrouge_m13a = new Station("chatillon_montrouge/M13A", chatillon_montrouge, m13a, p_chatillon_montrouge);

var saint_denis_universite_m13b = new Station("saint_denis_universite/M13B", saint_denis_universite, m13b, p_saint_denis_universite);
var basilique_de_saint_denis_m13b = new Station("basilique_de_saint_denis/M13B", basilique_de_saint_denis, m13b, p_basilique_de_saint_denis);
var saint_denis_porte_de_paris_m13b = new Station("saint_denis_porte_de_paris/M13B", saint_denis_porte_de_paris, m13b, p_saint_denis_porte_de_paris);
var carrefour_pleyel_m13b = new Station("carrefour_pleyel/M13B", carrefour_pleyel, m13b, p_carrefour_pleyel);
var mairie_de_saint_ouen_m13b = new Station("mairie_de_saint_ouen/M13B", mairie_de_saint_ouen, m13b, p_mairie_de_saint_ouen);
var garibaldi_m13b = new Station("garibaldi/M13B", garibaldi, m13b, p_garibaldi);
var porte_de_saint_ouen_m13b = new Station("porte_de_saint_ouen/M13B", porte_de_saint_ouen, m13b, p_porte_de_saint_ouen);
var guy_moquet_m13b = new Station("guy_moquet/M13B", guy_moquet, m13b, p_guy_moquet);
var la_fourche_m13b = new Station("la_fourche/M13B", la_fourche, m13b, p_la_fourche);
var place_de_clichy_m13b = new Station("place_de_clichy/M13B", place_de_clichy, m13b, p_place_de_clichy);
var liege_m13b = new Station("liege/M13B", liege, m13b, p_liege);
var saint_lazare_m13b = new Station("saint_lazare/M13B", saint_lazare, m13b, p_saint_lazare);
var miromesnil_m13b = new Station("miromesnil/M13B", miromesnil, m13b, p_miromesnil);
var champs_elysees_clemenceau_m13b = new Station("champs_elysees_clemenceau/M13B", champs_elysees_clemenceau, m13b, p_champs_elysees_clemenceau);
var invalides_m13b = new Station("invalides/M13B", invalides, m13b, p_invalides);
var varenne_m13b = new Station("varenne/M13B", varenne, m13b, p_varenne);
var saint_francois_xavier_m13b = new Station("saint_francois_xavier/M13B", saint_francois_xavier, m13b, p_saint_francois_xavier);
var duroc_m13b = new Station("duroc/M13B", duroc, m13b, p_duroc);
var montparnasse_bienvenue_m13b = new Station("montparnasse_bienvenue/M13B", montparnasse_bienvenue, m13b, p_montparnasse_bienvenue);
var gaite_m13b = new Station("gaite/M13B", gaite, m13b, p_gaite);
var pernety_m13b = new Station("pernety/M13B", pernety, m13b, p_pernety);
var plaisance_m13b = new Station("plaisance/M13B", plaisance, m13b, p_plaisance);
var porte_de_vanves_m13b = new Station("porte_de_vanves/M13B", porte_de_vanves, m13b, p_porte_de_vanves);
var malakoff_plateau_de_vanves_m13b = new Station("malakoff_plateau_de_vanves/M13B", malakoff_plateau_de_vanves, m13b, p_malakoff_plateau_de_vanves);
var malakoff_rue_etienne_dolet_m13b = new Station("malakoff_rue_etienne_dolet/M13B", malakoff_rue_etienne_dolet, m13b, p_malakoff_rue_etienne_dolet);
var chatillon_montrouge_m13b = new Station("chatillon_montrouge/M13B", chatillon_montrouge, m13b, p_chatillon_montrouge);

var saint_lazare_m14 = new Station("saint_lazare/M14", saint_lazare, m14, p_saint_lazare);
var madeleine_m14 = new Station("madeleine/M14", madeleine, m14, p_madeleine);
var pyramides_m14 = new Station("pyramides/M14", pyramides, m14, p_pyramides);
var chatelet_m14 = new Station("chatelet/M14", chatelet, m14, p_chatelet);
var gare_de_lyon_m14 = new Station("gare_de_lyon/M14", gare_de_lyon, m14, p_gare_de_lyon);
var bercy_m14 = new Station("bercy/M14", bercy, m14, p_bercy);
var cour_saint_emilion_m14 = new Station("cour_saint_emilion/M14", cour_saint_emilion, m14, p_cour_saint_emilion);
var bibliotheque_francois_mitterrand_m14 = new Station("bibliotheque_francois_mitterrand/M14", bibliotheque_francois_mitterrand, m14, p_bibliotheque_francois_mitterrand);
var olympiades_m14 = new Station("olympiades/M14", olympiades, m14, p_olympiades);




// VOISINS DE CHAQUE STATION ET LEURS COUTS : 
// DIR pour les voisins directs de même ligne
// COR pour les correspondances rapides
// CORL pour les correspondances longues ou faut marcher un bon moment


la_defense_m1.voisins = {"esplanade_de_la_defense/M1":DIR, /* Corresp ---> */      };
esplanade_de_la_defense_m1.voisins = {"la_defense/M1":DIR, "pont_de_neuilly/M1":DIR, /* Corresp ---> */      };
pont_de_neuilly_m1.voisins = {"esplanade_de_la_defense/M1":DIR, "les_sablons/M1":DIR, /* Corresp ---> */      };
les_sablons_m1.voisins = {"pont_de_neuilly/M1":DIR, "porte_maillot/M1":DIR, /* Corresp ---> */      };
porte_maillot_m1.voisins = {"les_sablons/M1":DIR, "argentine/M1":DIR, /* Corresp ---> */      };
argentine_m1.voisins = {"porte_maillot/M1":DIR, "charles_de_gaulle_etoile/M1":DIR, /* Corresp ---> */      };
charles_de_gaulle_etoile_m1.voisins = {"argentine/M1":DIR, "georges_v/M1":DIR, /* Corresp ---> */ "charles_de_gaulle_etoile/M2":COR, "charles_de_gaulle_etoile/M6":COR };
georges_v_m1.voisins = {"charles_de_gaulle_etoile/M1":DIR, "franklin_d_roosevelt/M1":DIR, /* Corresp ---> */      };
franklin_d_roosevelt_m1.voisins = {"georges_v/M1":DIR, "champs_elysees_clemenceau/M1":DIR, /* Corresp ---> */ "franklin_d_roosevelt/M9":COR };
champs_elysees_clemenceau_m1.voisins = {"franklin_d_roosevelt/M1":DIR, "concorde/M1":DIR, /* Corresp ---> */ "champs_elysees_clemenceau/M13A":COR, "champs_elysees_clemenceau/M13B":COR };
concorde_m1.voisins = {"champs_elysees_clemenceau/M1":DIR, "tuileries/M1":DIR, /* Corresp ---> */ "concorde/M8":COR, "concorde/M12":COR };
tuileries_m1.voisins = {"concorde/M1":DIR, "palais_royal_musee_du_louvre/M1":DIR, /* Corresp ---> */  };
palais_royal_musee_du_louvre_m1.voisins = {"tuileries/M1":DIR, "louvre_rivoli/M1":DIR, /* Corresp ---> */ "palais_royal_musee_du_louvre/M7A":COR, "palais_royal_musee_du_louvre/M7B":COR };
louvre_rivoli_m1.voisins = {"palais_royal_musee_du_louvre/M1":DIR, "chatelet/M1":DIR, /* Corresp ---> */ };
chatelet_m1.voisins = {"louvre_rivoli/M1":DIR, "hotel_de_ville/M1":DIR, /* Corresp ---> */ "chatelet/M4":COR, "chatelet/M7A":COR, "chatelet/M7B":COR, "chatelet/M11":COR, "chatelet/m14":COR, "les_halles/M4":CORL };
hotel_de_ville_m1.voisins = {"chatelet/M1":DIR, "saint_paul/M1":DIR, /* Corresp ---> */ "hotel_de_ville/M11":COR };
saint_paul_m1.voisins = {"hotel_de_ville/M1":DIR, "bastille/M1":DIR, /* Corresp ---> */  };
bastille_m1.voisins = {"saint_paul/M1":DIR, "gare_de_lyon/M1":DIR, /* Corresp ---> */ "bastille/M5":COR, "bastille/M8":COR };
gare_de_lyon_m1.voisins = {"bastille/M1":DIR, "reuilly_diderot/M1":DIR, /* Corresp ---> */ "gare_de_lyon/M14":COR };
reuilly_diderot_m1.voisins = {"gare_de_lyon/M1":DIR, "nation/M1":DIR, /* Corresp ---> */ "reuilly_diderot/M8":COR };
nation_m1.voisins = {"reuilly_diderot/M1":DIR, "porte_de_vincennes/M1":DIR, /* Corresp ---> */ "nation/M2":COR, "nation/M6":COR, "nation/M9":COR };
porte_de_vincennes_m1.voisins = {"nation/M1":DIR, "saint_mande/M1":DIR, /* Corresp ---> */  };
saint_mande_m1.voisins = {"porte_de_vincennes/M1":DIR, "berault/M1":DIR, /* Corresp ---> */      };
berault_m1.voisins = {"saint_mande/M1":DIR, "chateau_de_vincennes/M1":DIR, /* Corresp ---> */      };
chateau_de_vincennes_m1.voisins = {"berault/M1":DIR, /* Corresp ---> */      };

porte_dauphine_m2.voisins = {"victor_hugo/M2":DIR, /* Corresp ---> */  };
victor_hugo_m2.voisins = {"porte_dauphine/M2":DIR, "charles_de_gaulle_etoile/M2":DIR, /* Corresp ---> */  };
charles_de_gaulle_etoile_m2.voisins = {"victor_hugo/M2":DIR, "ternes/M2":DIR, /* Corresp ---> */ "charles_de_gaulle_etoile/M1":COR, "charles_de_gaulle_etoile/M6":COR };
ternes_m2.voisins = {"charles_de_gaulle_etoile/M2":DIR, "courcelles/M2":DIR, /* Corresp ---> */  };
courcelles_m2.voisins = {"ternes/M2":DIR, "monceau/M2":DIR, /* Corresp ---> */  };
monceau_m2.voisins = {"courcelles/M2":DIR, "villiers/M2":DIR, /* Corresp ---> */  };
villiers_m2.voisins = {"monceau/M2":DIR, "rome/M2":DIR, /* Corresp ---> */ "villiers/M3":COR };
rome_m2.voisins = {"villiers/M2":DIR, "place_de_clichy/M2":DIR, /* Corresp ---> */  };
place_de_clichy_m2.voisins = {"rome/M2":DIR, "blanche/M2":DIR, /* Corresp ---> */ "place_de_clichy/M13A":COR, "place_de_clichy/M13B":COR };
blanche_m2.voisins = {"place_de_clichy/M2":DIR, "pigalle/M2":DIR, /* Corresp ---> */  };
pigalle_m2.voisins = {"blanche/M2":DIR, "anvers/M2":DIR, /* Corresp ---> */ "pigalle/M12":COR };
anvers_m2.voisins = {"pigalle/M2":DIR, "barbes_rochechouart/M2":DIR, /* Corresp ---> */  };
barbes_rochechouart_m2.voisins = {"anvers/M2":DIR, "la_chapelle/M2":DIR, /* Corresp ---> */ "barbes_rochechouart/M4":COR };
la_chapelle_m2.voisins = {"barbes_rochechouart/M2":DIR, "stalingrad/M2":DIR, /* Corresp ---> */ "gare_du_nord/M4":CORL, "gare_du_nord/M5":CORL };
stalingrad_m2.voisins = {"la_chapelle/M2":DIR, "jaures/M2":DIR, /* Corresp ---> */ "stalingrad/M5":COR, "stalingrad/M7A":COR, "stalingrad/M7B":COR };
jaures_m2.voisins = {"stalingrad/M2":DIR, "colonel_fabien/M2":DIR, /* Corresp ---> */ "jaures/M5":COR, "jaures/M7bisA":COR, "jaures/M7bisB":COR };
colonel_fabien_m2.voisins = {"jaures/M2":DIR, "belleville/M2":DIR, /* Corresp ---> */  };
belleville_m2.voisins = {"colonel_fabien/M2":DIR, "couronnes/M2":DIR, /* Corresp ---> */ "belleville/M11":COR };
couronnes_m2.voisins = {"belleville/M2":DIR, "menilmontant/M2":DIR, /* Corresp ---> */  };
menilmontant_m2.voisins = {"couronnes/M2":DIR, "pere_lachaise/M2":DIR, /* Corresp ---> */  };
pere_lachaise_m2.voisins = {"menilmontant/M2":DIR, "philippe_auguste/M2":DIR, /* Corresp ---> */ "pere_lachaise/M3":COR };
philippe_auguste_m2.voisins = {"pere_lachaise/M2":DIR, "alexandre_dumas/M2":DIR, /* Corresp ---> */  };
alexandre_dumas_m2.voisins = {"philippe_auguste/M2":DIR, "avron/M2":DIR, /* Corresp ---> */  };
avron_m2.voisins = {"alexandre_dumas/M2":DIR, "nation/M2":DIR, /* Corresp ---> */  };
nation_m2.voisins = {"avron/M2":DIR, /* Corresp ---> */ "nation/M1":COR, "nation/M6":COR, "nation/M9":COR };

pont_de_levallois_becon_m3.voisins = {"anatole_france/M3":DIR, /* Corresp ---> */  };
anatole_france_m3.voisins = {"pont_de_levallois_becon/M3":DIR, "louise_michel/M3":DIR, /* Corresp ---> */  };
louise_michel_m3.voisins = {"anatole_france/M3":DIR, "porte_de_champerret/M3":DIR, /* Corresp ---> */  };
porte_de_champerret_m3.voisins = {"louise_michel/M3":DIR, "pereire/M3":DIR, /* Corresp ---> */  };
pereire_m3.voisins = {"porte_de_champerret/M3":DIR, "wagram/M3":DIR, /* Corresp ---> */  };
wagram_m3.voisins = {"pereire/M3":DIR, "malesherbes/M3":DIR, /* Corresp ---> */  };
malesherbes_m3.voisins = {"wagram/M3":DIR, "villiers/M3":DIR, /* Corresp ---> */  };
villiers_m3.voisins = {"malesherbes/M3":DIR, "europe/M3":DIR, /* Corresp ---> */ "villiers/M2":COR };
europe_m3.voisins = {"villiers/M3":DIR, "saint_lazare/M3":DIR, /* Corresp ---> */  };
saint_lazare_m3.voisins = {"europe/M3":DIR, "havre_caumartin/M3":DIR, /* Corresp ---> */ "saint_lazare/M12":COR, "saint_lazare/M14":COR, "saint_lazare/M13A":COR, "saint_lazare/M13B":COR, "saint_augustin/M9":CORL, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
havre_caumartin_m3.voisins = {"saint_lazare/M3":DIR, "opera/M3":DIR, /* Corresp ---> */ "havre_caumartin/M9":COR, "saint_lazare/M3":CORL, "saint_lazare/M12":CORL, "saint_lazare/M13A":CORL, "saint_lazare/M13B":CORL, "saint_lazare/M14":CORL, "opera/M3":CORL, "opera/M8":CORL, "opera/M7A":CORL, "opera/M7B":CORL };
opera_m3.voisins = {"havre_caumartin/M3":DIR, "quatre_septembre/M3":DIR, /* Corresp ---> */ "opera/M7A":COR, "opera/M7B":COR, "opera/M8":COR, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
quatre_septembre_m3.voisins = {"opera/M3":DIR, "bourse/M3":DIR, /* Corresp ---> */  };
bourse_m3.voisins = {"quatre_septembre/M3":DIR, "sentier/M3":DIR, /* Corresp ---> */  };
sentier_m3.voisins = {"bourse/M3":DIR, "reaumur_sebastopol/M3":DIR, /* Corresp ---> */  };
reaumur_sebastopol_m3.voisins = {"sentier/M3":DIR, "arts_et_metiers/M3":DIR, /* Corresp ---> */ "reaumur_sebastopol/M4":COR };
arts_et_metiers_m3.voisins = {"reaumur_sebastopol/M3":DIR, "temple/M3":DIR, /* Corresp ---> */ "arts_et_metiers/M11":COR };
temple_m3.voisins = {"arts_et_metiers/M3":DIR, "republique/M3":DIR, /* Corresp ---> */  };
republique_m3.voisins = {"temple/M3":DIR, "parmentier/M3":DIR, /* Corresp ---> */ "republique/M5":COR, "republique/M8":COR, "republique/M9":COR, "republique/M11":COR };
parmentier_m3.voisins = {"republique/M3":DIR, "rue_saint_maur/M3":DIR, /* Corresp ---> */  };
rue_saint_maur_m3.voisins = {"parmentier/M3":DIR, "pere_lachaise/M3":DIR, /* Corresp ---> */  };
pere_lachaise_m3.voisins = {"rue_saint_maur/M3":DIR, "gambetta/M3":DIR, /* Corresp ---> */ "pere_lachaise/M2":COR };
gambetta_m3.voisins = {"pere_lachaise/M3":DIR, "porte_de_bagnolet/M3":DIR, /* Corresp ---> */ "gambetta/M3bis":COR };
porte_de_bagnolet_m3.voisins = {"gambetta/M3":DIR, "gallieni/M3":DIR, /* Corresp ---> */  };
gallieni_m3.voisins = {"porte_de_bagnolet/M3":DIR, /* Corresp ---> */  };

gambetta_m3b.voisins = {"pelleport/M3bis":DIR, /* Corresp ---> */ "gambetta/M3":COR };
pelleport_m3b.voisins = {"gambetta/M3bis":DIR, "saint_fargeau/M3bis":DIR, /* Corresp ---> */  };
saint_fargeau_m3b.voisins = {"pelleport/M3bis":DIR, "porte_des_lilas/M3bis":DIR, /* Corresp ---> */  };
porte_des_lilas_m3b.voisins = {"saint_fargeau/M3bis":DIR, /* Corresp ---> */ "porte_des_lilas/M11":COR };

porte_de_clignancourt_m4.voisins = {"simplon/M4":DIR, /* Corresp ---> */  };
simplon_m4.voisins = {"porte_de_clignancourt/M4":DIR, "marcadet_poissonniers/M4":DIR, /* Corresp ---> */  };
marcadet_poissonniers_m4.voisins = {"simplon/M4":DIR, "chateau_rouge/M4":DIR, /* Corresp ---> */ "marcadet_poissonniers/M12":COR };
chateau_rouge_m4.voisins = {"marcadet_poissonniers/M4":DIR, "barbes_rochechouart/M4":DIR, /* Corresp ---> */  };
barbes_rochechouart_m4.voisins = {"chateau_rouge/M4":DIR, "gare_du_nord/M4":DIR, /* Corresp ---> */ "barbes_rochechouart/M2":COR };
gare_du_nord_m4.voisins = {"barbes_rochechouart/M4":DIR, "gare_de_l_est/M4":DIR, /* Corresp ---> */ "gare_du_nord/M5":COR, "la_chapelle/M2":CORL };
gare_de_l_est_m4.voisins = {"gare_du_nord/M4":DIR, "chateau_d_eau/M4":DIR, /* Corresp ---> */ "gare_de_l_est/M5":COR, "gare_de_l_est/M7A":COR, "gare_de_l_est/M7B":COR, "chateau_landon_m7a":CORL, "chateau_landon_m7b":CORL };
chateau_d_eau_m4.voisins = {"gare_de_l_est/M4":DIR, "strasbourg_saint_denis/M4":DIR, /* Corresp ---> */  };
strasbourg_saint_denis_m4.voisins = {"chateau_d_eau/M4":DIR, "reaumur_sebastopol/M4":DIR, /* Corresp ---> */ "strasbourg_saint_denis/M8":COR, "strasbourg_saint_denis/M9":COR };
reaumur_sebastopol_m4.voisins = {"strasbourg_saint_denis/M4":DIR, "etienne_marcel/M4":DIR, /* Corresp ---> */ "reaumur_sebastopol/M3":COR };
etienne_marcel_m4.voisins = {"reaumur_sebastopol/M4":DIR, "les_halles/M4":DIR, /* Corresp ---> */  };
les_halles_m4.voisins = {"etienne_marcel/M4":DIR, "chatelet/M4":DIR, /* Corresp ---> */ "chatelet/M4":CORL, "chatelet/M1":CORL, "chatelet/M7A":CORL, "chatelet/M7B":CORL, "chatelet/M11":CORL, "chatelet/M14":CORL };
chatelet_m4.voisins = {"les_halles/M4":DIR, "cite/M4":DIR, /* Corresp ---> */ "chatelet/M1":COR, "chatelet/M7A":COR, "chatelet/M7B":COR, "chatelet/M11":COR, "chatelet/M14":COR, "les_halles/M4":CORL  };
cite_m4.voisins = {"chatelet/M4":DIR, "saint_michel/M4":DIR, /* Corresp ---> */  };
saint_michel_m4.voisins = {"cite/M4":DIR, "odeon/M4":DIR, /* Corresp ---> */ "cluny_la_sorbonne/M10A":CORL, "cluny_la_sorbonne/M10B":CORL };
odeon_m4.voisins = {"saint_michel/M4":DIR, "saint_germain_des_pres/M4":DIR, /* Corresp ---> */ "odeon/M10A":COR, "odeon/M10B":COR };
saint_germain_des_pres_m4.voisins = {"odeon/M4":DIR, "saint_sulpice/M4":DIR, /* Corresp ---> */  };
saint_sulpice_m4.voisins = {"saint_germain_des_pres/M4":DIR, "saint_placide/M4":DIR, /* Corresp ---> */  };
saint_placide_m4.voisins = {"saint_sulpice/M4":DIR, "montparnasse_bienvenue/M4":DIR, /* Corresp ---> */  };
montparnasse_bienvenue_m4.voisins = {"saint_placide/M4":DIR, "valvin/M4":DIR, /* Corresp ---> */ "montparnasse_bienvenue/M6":COR, "montparnasse_bienvenue/M12":COR, "montparnasse_bienvenue/M13A":COR, "montparnasse_bienvenue/M13B":COR };
valvin_m4.voisins = {"montparnasse_bienvenue/M4":DIR, "raspail/M4":DIR, /* Corresp ---> */  };
raspail_m4.voisins = {"valvin/M4":DIR, "denfert_rochereau/M4":DIR, /* Corresp ---> */ "raspail/M6":COR };
denfert_rochereau_m4.voisins = {"raspail/M4":DIR, "mouton_duvernet/M4":DIR, /* Corresp ---> */ "denfert_rochereau/M6":COR };
mouton_duvernet_m4.voisins = {"denfert_rochereau/M4":DIR, "alesia/M4":DIR, /* Corresp ---> */  };
alesia_m4.voisins = {"mouton_duvernet/M4":DIR, "porte_d_orleans/M4":DIR, /* Corresp ---> */  };
porte_d_orleans_m4.voisins = {"alesia/M4":DIR, "mairie_de_montrouge/M4":DIR, /* Corresp ---> */  };
mairie_de_montrouge_m4.voisins = {"porte_d_orleans/M4":DIR, /* Corresp ---> */  };

bobigny_pablo_picasso_m5.voisins = {"bobigny_pantin_raymond_queneau/M5":DIR, /* Corresp ---> */  };
bobigny_pantin_raymond_queneau_m5.voisins = {"bobigny_pablo_picasso/M5":DIR, "eglise_de_pantin/M5":DIR, /* Corresp ---> */  };
eglise_de_pantin_m5.voisins = {"bobigny_pantin_raymond_queneau/M5":DIR, "hoche/M5":DIR, /* Corresp ---> */  };
hoche_m5.voisins = {"eglise_de_pantin/M5":DIR, "porte_de_pantin/M5":DIR, /* Corresp ---> */  };
porte_de_pantin_m5.voisins = {"hoche/M5":DIR, "ourcq/M5":DIR, /* Corresp ---> */  };
ourcq_m5.voisins = {"porte_de_pantin/M5":DIR, "laumiere/M5":DIR, /* Corresp ---> */  };
laumiere_m5.voisins = {"ourcq/M5":DIR, "jaures/M5":DIR, /* Corresp ---> */  };
jaures_m5.voisins = {"laumiere/M5":DIR, "stalingrad/M5":DIR, /* Corresp ---> */ "jaures/M2":COR, "jaures/M7bisA":COR, "jaures/M7bisB":COR };
stalingrad_m5.voisins = {"jaures/M5":DIR, "gare_du_nord/M5":DIR, /* Corresp ---> */ "stalingrad/M2":COR, "stalingrad/M7A":COR, "stalingrad/M7B":COR };
gare_du_nord_m5.voisins = {"stalingrad/M5":DIR, "gare_de_l_est/M5":DIR, /* Corresp ---> */ "gare_du_nord/M4":COR, "la_chapelle/M2":CORL };
gare_de_l_est_m5.voisins = {"gare_du_nord/M5":DIR, "jacques_bonsergent/M5":DIR, /* Corresp ---> */ "gare_de_l_est/M4":COR, "gare_de_l_est/M7A":COR, "gare_de_l_est/M7B":COR, "chateau_landon/M7A":CORL, "chateau_landon/M7B":CORL };
jacques_bonsergent_m5.voisins = {"gare_de_l_est/M5":DIR, "republique/M5":DIR, /* Corresp ---> */  };
republique_m5.voisins = {"jacques_bonsergent/M5":DIR, "oberkampf/M5":DIR, /* Corresp ---> */ "republique/M3":COR, "republique/M8":COR, "republique/M9":COR, "republique/M11":COR };
oberkampf_m5.voisins = {"republique/M5":DIR, "richard_lenoir/M5":DIR, /* Corresp ---> */ "oberkampf/M9":COR };
richard_lenoir_m5.voisins = {"oberkampf/M5":DIR, "breguet_sabin/M5":DIR, /* Corresp ---> */  };
breguet_sabin_m5.voisins = {"richard_lenoir/M5":DIR, "bastille/M5":DIR, /* Corresp ---> */  };
bastille_m5.voisins = {"breguet_sabin/M5":DIR, "quai_de_la_rapee/M5":DIR, /* Corresp ---> */ "bastille/M1":COR, "bastille/M8":COR };
quai_de_la_rapee_m5.voisins = {"bastille/M5":DIR, "gare_d_austerlitz/M5":DIR, /* Corresp ---> */  };
gare_d_austerlitz_m5.voisins = {"quai_de_la_rapee/M5":DIR, "saint_marcel/M5":DIR, /* Corresp ---> */ "gare_d_austerlitz/M10A":COR, "gare_d_austerlitz/M10B":COR };
saint_marcel_m5.voisins = {"gare_d_austerlitz/M5":DIR, "campo_formio/M5":DIR, /* Corresp ---> */  };
campo_formio_m5.voisins = {"saint_marcel/M5":DIR, "place_d_italie/M5":DIR, /* Corresp ---> */  };
place_d_italie_m5.voisins = {"campo_formio/M5":DIR, /* Corresp ---> */ "place_d_italie/M6":COR, "place_d_italie/M7A":COR, "place_d_italie/M7B":COR };

charles_de_gaulle_etoile_m6.voisins = {"kleber/M6":DIR, /* Corresp ---> */ "charles_de_gaulle_etoile/M1":COR, "charles_de_gaulle_etoile/M2":COR };
kleber_m6.voisins = {"charles_de_gaulle_etoile/M6":DIR, "boissiere/M6":DIR, /* Corresp ---> */  };
boissiere_m6.voisins = {"kleber/M6":DIR, "trocadero/M6":DIR, /* Corresp ---> */  };
trocadero_m6.voisins = {"boissiere/M6":DIR, "passy/M6":DIR, /* Corresp ---> */ "trocadero/M9":COR };
passy_m6.voisins = {"trocadero/M6":DIR, "bir_hakeim/M6":DIR, /* Corresp ---> */  };
bir_hakeim_m6.voisins = {"passy/M6":DIR, "dupleix/M6":DIR, /* Corresp ---> */  };
dupleix_m6.voisins = {"bir_hakeim/M6":DIR, "la_motte_picquet_grenelle/M6":DIR, /* Corresp ---> */  };
la_motte_picquet_grenelle_m6.voisins = {"dupleix/M6":DIR, "cambronne/M6":DIR, /* Corresp ---> */ "la_motte_picquet_grenelle/M8":COR, "la_motte_picquet_grenelle/M10A":COR, "la_motte_picquet_grenelle/M10B":COR };
cambronne_m6.voisins = {"la_motte_picquet_grenelle/M6":DIR, "sevres_lecourbe/M6":DIR, /* Corresp ---> */  };
sevres_lecourbe_m6.voisins = {"cambronne/M6":DIR, "pasteur/M6":DIR, /* Corresp ---> */  };
pasteur_m6.voisins = {"sevres_lecourbe/M6":DIR, "montparnasse_bienvenue/M6":DIR, /* Corresp ---> */ "pasteur/M12":COR };
montparnasse_bienvenue_m6.voisins = {"pasteur/M6":DIR, "edgar_quinet/M6":DIR, /* Corresp ---> */ "montparnasse_bienvenue/M4":COR, "montparnasse_bienvenue/M12":COR, "montparnasse_bienvenue/M13A":COR, "montparnasse_bienvenue/M13B":COR };
edgar_quinet_m6.voisins = {"montparnasse_bienvenue/M6":DIR, "raspail/M6":DIR, /* Corresp ---> */  };
raspail_m6.voisins = {"edgar_quinet/M6":DIR, "denfert_rochereau/M6":DIR, /* Corresp ---> */ "raspail/M4":COR };
denfert_rochereau_m6.voisins = {"raspail/M6":DIR, "saint_jacques/M6":DIR, /* Corresp ---> */ "denfert_rochereau/M4":COR };
saint_jacques_m6.voisins = {"denfert_rochereau/M6":DIR, "glaciere/M6":DIR, /* Corresp ---> */  };
glaciere_m6.voisins = {"saint_jacques/M6":DIR, "corvisart/M6":DIR, /* Corresp ---> */  };
corvisart_m6.voisins = {"glaciere/M6":DIR, "place_d_italie/M6":DIR, /* Corresp ---> */  };
place_d_italie_m6.voisins = {"corvisart/M6":DIR, "nationale/M6":DIR, /* Corresp ---> */ "place_d_italie/M5":COR, "place_d_italie/M7A":COR, "place_d_italie/M7B":COR };
nationale_m6.voisins = {"place_d_italie/M6":DIR, "chevaleret/M6":DIR, /* Corresp ---> */  };
chevaleret_m6.voisins = {"nationale/M6":DIR, "quai_de_la_gare/M6":DIR, /* Corresp ---> */  };
quai_de_la_gare_m6.voisins = {"chevaleret/M6":DIR, "bercy/M6":DIR, /* Corresp ---> */  };
bercy_m6.voisins = {"quai_de_la_gare/M6":DIR, "dugommier/M6":DIR, /* Corresp ---> */ "bercy/M14":COR };
dugommier_m6.voisins = {"bercy/M6":DIR, "daumesnil/M6":DIR, /* Corresp ---> */  };
daumesnil_m6.voisins = {"dugommier/M6":DIR, "bel_air/M6":DIR, /* Corresp ---> */ "daumesnil/M8":COR };
bel_air_m6.voisins = {"daumesnil/M6":DIR, "picpus/M6":DIR, /* Corresp ---> */  };
picpus_m6.voisins = {"bel_air/M6":DIR, "nation/M6":DIR, /* Corresp ---> */  };
nation_m6.voisins = {"picpus/M6":DIR, /* Corresp ---> */ "nation/M1":COR, "nation/M2":COR, "nation/M9":COR };

la_courneuve_8_mai_1945_m7a.voisins = {"fort_d_aubervilliers/M7A":DIR, /* Corresp ---> */  };
fort_d_aubervilliers_m7a.voisins = {"la_courneuve_8_mai_1945/M7A":DIR, "aubervilliers_pantin_quatre_chemins/M7A":DIR, /* Corresp ---> */  };
aubervilliers_pantin_quatre_chemins_m7a.voisins = {"fort_d_aubervilliers/M7A":DIR, "porte_de_la_villette/M7A":DIR, /* Corresp ---> */  };
porte_de_la_villette_m7a.voisins = {"aubervilliers_pantin_quatre_chemins/M7A":DIR, "corentin_cariou/M7A":DIR, /* Corresp ---> */  };
corentin_cariou_m7a.voisins = {"porte_de_la_villette/M7A":DIR, "crimee/M7A":DIR, /* Corresp ---> */  };
crimee_m7a.voisins = {"corentin_cariou/M7A":DIR, "riquet/M7A":DIR, /* Corresp ---> */  };
riquet_m7a.voisins = {"crimee/M7A":DIR, "stalingrad/M7A":DIR, /* Corresp ---> */  };
stalingrad_m7a.voisins = {"riquet/M7A":DIR, "louis_blanc/M7A":DIR, /* Corresp ---> */ "stalingrad/M2":COR, "stalingrad/M5":COR };
louis_blanc_m7a.voisins = {"stalingrad/M7A":DIR, "chateau_landon/M7A":DIR, /* Corresp ---> */ "louis_blanc/M7bisA":COR, "louis_blanc/M7bisB":COR };
chateau_landon_m7a.voisins = {"louis_blanc/M7A":DIR, "gare_de_l_est/M7A":DIR, /* Corresp ---> */ "gare_de_l_est/M7A":CORL, "gare_de_l_est/M7B":CORL, "gare_de_l_est/M4":CORL, "gare_de_l_est/M5":CORL };
gare_de_l_est_m7a.voisins = {"chateau_landon/M7A":DIR, "poissonniere/M7A":DIR, /* Corresp ---> */ "gare_de_l_est/M4":COR, "gare_de_l_est/M5":COR, "chateau_landon/M7A":CORL, "chateau_landon/M7B":CORL };
poissonniere_m7a.voisins = {"gare_de_l_est/M7A":DIR, "cadet/M7A":DIR, /* Corresp ---> */  };
cadet_m7a.voisins = {"poissonniere/M7A":DIR, "le_peletier/M7A":DIR, /* Corresp ---> */  };
le_peletier_m7a.voisins = {"cadet/M7A":DIR, "chaussee_d_antin_la_fayette/M7A":DIR, /* Corresp ---> */  };
chaussee_d_antin_la_fayette_m7a.voisins = {"le_peletier/M7A":DIR, "opera/M7A":DIR, /* Corresp ---> */ "chaussee_d_antin_la_fayette/M9":COR };
opera_m7a.voisins = {"chaussee_d_antin_la_fayette/M7A":DIR, "pyramides/M7A":DIR, /* Corresp ---> */ "opera/M3":COR, "opera/M8":COR, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
pyramides_m7a.voisins = {"opera/M7A":DIR, "palais_royal_musee_du_louvre/M7A":DIR, /* Corresp ---> */ "pyramides/M14":COR };
palais_royal_musee_du_louvre_m7a.voisins = {"pyramides/M7A":DIR, "pont_neuf/M7A":DIR, /* Corresp ---> */ "palais_royal_musee_du_louvre/M1":COR };
pont_neuf_m7a.voisins = {"palais_royal_musee_du_louvre/M7A":DIR, "chatelet/M7A":DIR, /* Corresp ---> */  };
chatelet_m7a.voisins = {"pont_neuf/M7A":DIR, "pont_marie/M7A":DIR, /* Corresp ---> */ "chatelet/M1":COR, "chatelet/M4":COR, "chatelet/M11":COR, "chatelet/M14":COR, "les_halles/M4":CORL };
pont_marie_m7a.voisins = {"chatelet/M7A":DIR, "sully_morland/M7A":DIR, /* Corresp ---> */  };
sully_morland_m7a.voisins = {"pont_marie/M7A":DIR, "jussieu/M7A":DIR, /* Corresp ---> */  };
jussieu_m7a.voisins = {"sully_morland/M7A":DIR, "place_monge/M7A":DIR, /* Corresp ---> */ "jussieu/M10A":COR, "jussieu/M10B":COR };
place_monge_m7a.voisins = {"jussieu/M7A":DIR, "censier_daubenton/M7A":DIR, /* Corresp ---> */  };
censier_daubenton_m7a.voisins = {"place_monge/M7A":DIR, "les_gobelins/M7A":DIR, /* Corresp ---> */  };
les_gobelins_m7a.voisins = {"censier_daubenton/M7A":DIR, "place_d_italie/M7A":DIR, /* Corresp ---> */  };
place_d_italie_m7a.voisins = {"les_gobelins/M7A":DIR, "tolbiac/M7A":DIR, /* Corresp ---> */ "place_d_italie/M5":COR, "place_d_italie/M6":COR };
tolbiac_m7a.voisins = {"place_d_italie/M7A":DIR, "maison_blanche/M7A":DIR, /* Corresp ---> */  };
maison_blanche_m7a.voisins = {"tolbiac/M7A":DIR, "le_kremlin_bicetre/M7A":DIR, /* Corresp ---> */  };
le_kremlin_bicetre_m7a.voisins = {"maison_blanche/M7A":DIR, "villejuif_leo_lagrange/M7A":DIR, /* Corresp ---> */  };
villejuif_leo_lagrange_m7a.voisins = {"le_kremlin_bicetre/M7A":DIR, "villejuif_paul_vaillant_couturier/M7A":DIR, /* Corresp ---> */  };
villejuif_paul_vaillant_couturier_m7a.voisins = {"villejuif_leo_lagrange/M7A":DIR, "villejuif_louis_aragon/M7A":DIR, /* Corresp ---> */  };
villejuif_louis_aragon_m7a.voisins = {"villejuif_paul_vaillant_couturier/M7A":DIR, /* Corresp ---> */  };

la_courneuve_8_mai_1945_m7b.voisins = {"fort_d_aubervilliers/M7B":DIR, /* Corresp ---> */  };
fort_d_aubervilliers_m7b.voisins = {"la_courneuve_8_mai_1945/M7B":DIR, "aubervilliers_pantin_quatre_chemins/M7B":DIR, /* Corresp ---> */  };
aubervilliers_pantin_quatre_chemins_m7b.voisins = {"fort_d_aubervilliers/M7B":DIR, "porte_de_la_villette/M7B":DIR, /* Corresp ---> */  };
porte_de_la_villette_m7b.voisins = {"aubervilliers_pantin_quatre_chemins/M7B":DIR, "corentin_cariou/M7B":DIR, /* Corresp ---> */  };
corentin_cariou_m7b.voisins = {"porte_de_la_villette/M7B":DIR, "crimee/M7B":DIR, /* Corresp ---> */  };
crimee_m7b.voisins = {"corentin_cariou/M7B":DIR, "riquet/M7B":DIR, /* Corresp ---> */  };
riquet_m7b.voisins = {"crimee/M7B":DIR, "stalingrad/M7B":DIR, /* Corresp ---> */  };
stalingrad_m7b.voisins = {"riquet/M7B":DIR, "louis_blanc/M7B":DIR, /* Corresp ---> */ "stalingrad/M2":COR, "stalingrad/M5":COR };
louis_blanc_m7b.voisins = {"stalingrad/M7B":DIR, "chateau_landon/M7B":DIR, /* Corresp ---> */ "louis_blanc/M7bisA":COR, "louis_blanc/M7bisB":COR };
chateau_landon_m7b.voisins = {"louis_blanc/M7B":DIR, "gare_de_l_est/M7B":DIR, /* Corresp ---> */ "gare_de_l_est/M7A":CORL, "gare_de_l_est/M7B":CORL, "gare_de_l_est/M4":CORL, "gare_de_l_est/M5":CORL };
gare_de_l_est_m7b.voisins = {"chateau_landon/M7B":DIR, "poissonniere/M7B":DIR, /* Corresp ---> */ "gare_de_l_est/M4":COR, "gare_de_l_est/M5":COR, "chateau_landon/M7A":CORL, "chateau_landon/M7B":CORL };
poissonniere_m7b.voisins = {"gare_de_l_est/M7B":DIR, "cadet/M7B":DIR, /* Corresp ---> */  };
cadet_m7b.voisins = {"poissonniere/M7B":DIR, "le_peletier/M7B":DIR, /* Corresp ---> */  };
le_peletier_m7b.voisins = {"cadet/M7B":DIR, "chaussee_d_antin_la_fayette/M7B":DIR, /* Corresp ---> */  };
chaussee_d_antin_la_fayette_m7b.voisins = {"le_peletier/M7B":DIR, "opera/M7B":DIR, /* Corresp ---> */ "chaussee_d_antin_la_fayette/M9":COR };
opera_m7b.voisins = {"chaussee_d_antin_la_fayette/M7B":DIR, "pyramides/M7B":DIR, /* Corresp ---> */ "opera/M3":COR, "opera/M8":COR, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
pyramides_m7b.voisins = {"opera/M7B":DIR, "palais_royal_musee_du_louvre/M7B":DIR, /* Corresp ---> */ "pyramides/M14":COR };
palais_royal_musee_du_louvre_m7b.voisins = {"pyramides/M7B":DIR, "pont_neuf/M7B":DIR, /* Corresp ---> */ "palais_royal_musee_du_louvre/M1":COR };
pont_neuf_m7b.voisins = {"palais_royal_musee_du_louvre/M7B":DIR, "chatelet/M7B":DIR, /* Corresp ---> */  };
chatelet_m7b.voisins = {"pont_neuf/M7B":DIR, "pont_marie/M7B":DIR, /* Corresp ---> */ "chatelet/M1":COR, "chatelet/M4":COR, "chatelet/M11":COR, "chatelet/M14":COR, "les_halles/M4":CORL };
pont_marie_m7b.voisins = {"chatelet/M7B":DIR, "sully_morland/M7B":DIR, /* Corresp ---> */  };
sully_morland_m7b.voisins = {"pont_marie/M7B":DIR, "jussieu/M7B":DIR, /* Corresp ---> */  };
jussieu_m7b.voisins = {"sully_morland/M7B":DIR, "place_monge/M7B":DIR, /* Corresp ---> */ "jussieu/M10A":COR, "jussieu/M10B":COR };
place_monge_m7b.voisins = {"jussieu/M7B":DIR, "censier_daubenton/M7B":DIR, /* Corresp ---> */  };
censier_daubenton_m7b.voisins = {"place_monge/M7B":DIR, "les_gobelins/M7B":DIR, /* Corresp ---> */  };
les_gobelins_m7b.voisins = {"censier_daubenton/M7B":DIR, "place_d_italie/M7B":DIR, /* Corresp ---> */  };
place_d_italie_m7b.voisins = {"les_gobelins/M7B":DIR, "tolbiac/M7B":DIR, /* Corresp ---> */ "place_d_italie/M5":COR, "place_d_italie/M6":COR };
tolbiac_m7b.voisins = {"place_d_italie/M7B":DIR, "maison_blanche/M7B":DIR, /* Corresp ---> */  };
maison_blanche_m7b.voisins = {"tolbiac/M7B":DIR, "porte_d_italie/M7B":DIR, /* Corresp ---> */  };
porte_d_italie_m7b.voisins = {"maison_blanche/M7B":DIR, "porte_de_choisy/M7B":DIR, /* Corresp ---> */  };
porte_de_choisy_m7b.voisins = {"porte_d_italie/M7B":DIR, "porte_d_ivry/M7B":DIR, /* Corresp ---> */  };
porte_d_ivry_m7b.voisins = {"porte_de_choisy/M7B":DIR, "pierre_et_marie_curie/M7B":DIR, /* Corresp ---> */  };
pierre_et_marie_curie_m7b.voisins = {"porte_d_ivry/M7B":DIR, "mairie_d_ivry/M7B":DIR, /* Corresp ---> */  };
mairie_d_ivry_m7b.voisins = {"pierre_et_marie_curie/M7B":DIR, /* Corresp ---> */  };

louis_blanc_m7bisa.voisins = {"jaures/M7bisA":DIR, /* Corresp ---> */ "louis_blanc/M7A":COR, "louis_blanc/M7B":COR };
jaures_m7bisa.voisins = {"louis_blanc/M7bisA":DIR, "bolivar/M7bisA":DIR, /* Corresp ---> */ "jaures/M2":COR, "jaures/M5":COR };
bolivar_m7bisa.voisins = {"jaures/M7bisA":DIR, "buttes_chaumont/M7bisA":DIR, /* Corresp ---> */  };
buttes_chaumont_m7bisa.voisins = {"bolivar/M7bisA":DIR, "botzaris/M7bisA":DIR, /* Corresp ---> */  };
botzaris_m7bisa.voisins = {"buttes_chaumont/M7bisA":DIR, "place_des_fetes/M7bisA":DIR, /* Corresp ---> */ "botzaris/M7bisB":COR };
place_des_fetes_m7bisa.voisins = {"pre_saint_gervais/M7bisA":DIR, /* Corresp ---> */ "place_des_fetes/M11":COR };
pre_saint_gervais_m7bisa.voisins = { /* Corresp ---> */ "pre_saint_gervais/M7bisB":COR };

louis_blanc_m7bisb.voisins = {"jaures/M7bisB":DIR, /* Corresp ---> */ "louis_blanc/M7A":COR, "louis_blanc/M7B":COR };
jaures_m7bisb.voisins = {"louis_blanc/M7bisB":DIR, "bolivar/M7bisB":DIR, /* Corresp ---> */ "jaures/M2":COR, "jaures/M5":COR };
bolivar_m7bisb.voisins = {"jaures/M7bisB":DIR, "buttes_chaumont/M7bisB":DIR, /* Corresp ---> */  };
buttes_chaumont_m7bisb.voisins = {"bolivar/M7bisB":DIR, "botzaris/M7bisB":DIR, /* Corresp ---> */  };
botzaris_m7bisb.voisins = {"buttes_chaumont/M7bisB":DIR, /* Corresp ---> */ "botzaris/M7bisA":COR };
danube_m7bisb.voisins = {"botzaris/M7bisB":DIR, /* Corresp ---> */  };
pre_saint_gervais_m7bisb.voisins = {"danube/M7bisB":DIR, /* Corresp ---> */ "pre_saint_gervais/M7bisA":COR };

balard_m8.voisins = {"lourmel/M8":DIR, /* Corresp ---> */  };
lourmel_m8.voisins = {"balard/M8":DIR, "boucicaut/M8":DIR, /* Corresp ---> */  };
boucicaut_m8.voisins = {"lourmel/M8":DIR, "felix_faure/M8":DIR, /* Corresp ---> */  };
felix_faure_m8.voisins = {"boucicaut/M8":DIR, "commerce/M8":DIR, /* Corresp ---> */  };
commerce_m8.voisins = {"felix_faure/M8":DIR, "la_motte_picquet_grenelle/M8":DIR, /* Corresp ---> */  };
la_motte_picquet_grenelle_m8.voisins = {"commerce/M8":DIR, "ecole_militaire/M8":DIR, /* Corresp ---> */ "la_motte_picquet_grenelle/M6":COR, "la_motte_picquet_grenelle/M10A":COR, "la_motte_picquet_grenelle/M10B":COR };
ecole_militaire_m8.voisins = {"la_motte_picquet_grenelle/M8":DIR, "la_tour_maubourg/M8":DIR, /* Corresp ---> */  };
la_tour_maubourg_m8.voisins = {"ecole_militaire/M8":DIR, "invalides/M8":DIR, /* Corresp ---> */  };
invalides_m8.voisins = {"la_tour_maubourg/M8":DIR, "concorde/M8":DIR, /* Corresp ---> */ "invalides/M13A":COR, "invalides/M13B":COR };
concorde_m8.voisins = {"invalides/M8":DIR, "madeleine/M8":DIR, /* Corresp ---> */ "concorde/M1":COR, "concorde/M12":COR };
madeleine_m8.voisins = {"concorde/M8":DIR, "opera/M8":DIR, /* Corresp ---> */ "madeleine/M12":COR, "madeleine/M14":COR };
opera_m8.voisins = {"madeleine/M8":DIR, "richelieu_drouot/M8":DIR, /* Corresp ---> */ "opera/M3":COR, "opera/M7A":COR, "opera/M7B":COR, "havre_caumartin_m3":CORL, "havre_caumartin_m9":CORL };
richelieu_drouot_m8.voisins = {"opera/M8":DIR, "grands_boulevards/M8":DIR, /* Corresp ---> */ "richelieu_drouot/M9":COR };
grands_boulevards_m8.voisins = {"richelieu_drouot/M8":DIR, "bonne_nouvelle/M8":DIR, /* Corresp ---> */ "grands_boulevards/M9":COR };
bonne_nouvelle_m8.voisins = {"grands_boulevards/M8":DIR, "strasbourg_saint_denis/M8":DIR, /* Corresp ---> */ "bonne_nouvelle/M9":COR };
strasbourg_saint_denis_m8.voisins = {"bonne_nouvelle/M8":DIR, "republique/M8":DIR, /* Corresp ---> */ "strasbourg_saint_denis/M4":COR, "strasbourg_saint_denis/M9":COR };
republique_m8.voisins = {"strasbourg_saint_denis/M8":DIR, "filles_du_calvaire/M8":DIR, /* Corresp ---> */ "republique/M3":COR, "republique/M5":COR, "republique/M9":COR, "republique/M11":COR };
filles_du_calvaire_m8.voisins = {"republique/M8":DIR, "saint_sebastien_froissart/M8":DIR, /* Corresp ---> */  };
saint_sebastien_froissart_m8.voisins = {"filles_du_calvaire/M8":DIR, "chemin_vert/M8":DIR, /* Corresp ---> */  };
chemin_vert_m8.voisins = {"saint_sebastien_froissart/M8":DIR, "bastille/M8":DIR, /* Corresp ---> */  };
bastille_m8.voisins = {"chemin_vert/M8":DIR, "ledru_rollin/M8":DIR, /* Corresp ---> */ "bastille/M1":COR, "bastille/M5":COR };
ledru_rollin_m8.voisins = {"bastille/M8":DIR, "faidherbe_chaligny/M8":DIR, /* Corresp ---> */  };
faidherbe_chaligny_m8.voisins = {"ledru_rollin/M8":DIR, "reuilly_diderot/M8":DIR, /* Corresp ---> */  };
reuilly_diderot_m8.voisins = {"faidherbe_chaligny/M8":DIR, "montgallet/M8":DIR, /* Corresp ---> */ "reuilly_diderot/M1":COR };
montgallet_m8.voisins = {"reuilly_diderot/M8":DIR, "daumesnil/M8":DIR, /* Corresp ---> */  };
daumesnil_m8.voisins = {"montgallet/M8":DIR, "michel_bizot/M8":DIR, /* Corresp ---> */ "daumesnil/M6":COR };
michel_bizot_m8.voisins = {"daumesnil/M8":DIR, "porte_doree/M8":DIR, /* Corresp ---> */  };
porte_doree_m8.voisins = {"michel_bizot/M8":DIR, "porte_de_charenton/M8":DIR, /* Corresp ---> */  };
porte_de_charenton_m8.voisins = {"porte_doree/M8":DIR, "liberte/M8":DIR, /* Corresp ---> */  };
liberte_m8.voisins = {"porte_de_charenton/M8":DIR, "charenton_ecoles/M8":DIR, /* Corresp ---> */  };
charenton_ecoles_m8.voisins = {"liberte/M8":DIR, "ecole_veterinaire_de_maisons_alfort/M8":DIR, /* Corresp ---> */  };
ecole_veterinaire_de_maisons_alfort_m8.voisins = {"charenton_ecoles/M8":DIR, "maisons_alfort_stade/M8":DIR, /* Corresp ---> */  };
maisons_alfort_stade_m8.voisins = {"ecole_veterinaire_de_maisons_alfort/M8":DIR, "maisons_alfort_les_juilliottes/M8":DIR, /* Corresp ---> */  };
maisons_alfort_les_juilliottes_m8.voisins = {"maisons_alfort_stade/M8":DIR, "creteil_l_echat/M8":DIR, /* Corresp ---> */  };
creteil_l_echat_m8.voisins = {"maisons_alfort_les_juilliottes/M8":DIR, "creteil_universite/M8":DIR, /* Corresp ---> */  };
creteil_universite_m8.voisins = {"creteil_l_echat/M8":DIR, "creteil_prefecture/M8":DIR, /* Corresp ---> */  };
creteil_prefecture_m8.voisins = {"creteil_universite/M8":DIR, "pointe_du_lac/M8":DIR, /* Corresp ---> */  };
pointe_du_lac_m8.voisins = {"creteil_prefecture/M8":DIR, /* Corresp ---> */  };

pont_de_sevres_m9.voisins = {"billancourt/M9":DIR, /* Corresp ---> */  };
billancourt_m9.voisins = {"pont_de_sevres/M9":DIR, "marcel_sembat/M9":DIR, /* Corresp ---> */  };
marcel_sembat_m9.voisins = {"billancourt/M9":DIR, "porte_de_saint_cloud/M9":DIR, /* Corresp ---> */  };
porte_de_saint_cloud_m9.voisins = {"marcel_sembat/M9":DIR, "exelmans/M9":DIR, /* Corresp ---> */  };
exelmans_m9.voisins = {"porte_de_saint_cloud/M9":DIR, "michel_ange_molitor/M9":DIR, /* Corresp ---> */  };
michel_ange_molitor_m9.voisins = {"exelmans/M9":DIR, "michel_ange_auteuil/M9":DIR, /* Corresp ---> */ "michel_ange_molitor/M10A":COR };
michel_ange_auteuil_m9.voisins = {"michel_ange_molitor/M9":DIR, "jasmin/M9":DIR, /* Corresp ---> */ "michel_ange_auteuil/M10B":COR };
jasmin_m9.voisins = {"michel_ange_auteuil/M9":DIR, "ranelagh/M9":DIR, /* Corresp ---> */  };
ranelagh_m9.voisins = {"jasmin/M9":DIR, "la_muette/M9":DIR, /* Corresp ---> */  };
la_muette_m9.voisins = {"ranelagh/M9":DIR, "rue_de_la_pompe/M9":DIR, /* Corresp ---> */  };
rue_de_la_pompe_m9.voisins = {"la_muette/M9":DIR, "trocadero/M9":DIR, /* Corresp ---> */  };
trocadero_m9.voisins = {"rue_de_la_pompe/M9":DIR, "iena/M9":DIR, /* Corresp ---> */ "trocadero/M6":COR };
iena_m9.voisins = {"trocadero/M9":DIR, "alma_marceau/M9":DIR, /* Corresp ---> */  };
alma_marceau_m9.voisins = {"iena/M9":DIR, "franklin_d_roosevelt/M9":DIR, /* Corresp ---> */  };
franklin_d_roosevelt_m9.voisins = {"alma_marceau/M9":DIR, "saint_philippe_du_roule/M9":DIR, /* Corresp ---> */ "franklin_d_roosevelt/M1":COR };
saint_philippe_du_roule_m9.voisins = {"franklin_d_roosevelt/M9":DIR, "miromesnil/M9":DIR, /* Corresp ---> */  };
miromesnil_m9.voisins = {"saint_philippe_du_roule/M9":DIR, "saint_augustin/M9":DIR, /* Corresp ---> */ "miromesnil/M13A":COR, "miromesnil/M13B":COR };
saint_augustin_m9.voisins = {"miromesnil/M9":DIR, "havre_caumartin/M9":DIR, /* Corresp ---> */ "saint_lazare/M3":CORL, "saint_lazare/M12":CORL, "saint_lazare/M13A":CORL, "saint_lazare/M13B":CORL, "saint_lazare/M14":CORL };
havre_caumartin_m9.voisins = {"saint_augustin/M9":DIR, "chaussee_d_antin_la_fayette/M9":DIR, /* Corresp ---> */ "havre_caumartin/M3":COR, "opera_m3":CORL, "opera/M7A":CORL, "opera/M7B":CORL, "opera/M8":CORL, "saint_lazare/M3":CORL, "saint_lazare/M12":CORL, "saint_lazare/M13A":CORL, "saint_lazare/M13B":CORL, "saint_lazare/M14":CORL };
chaussee_d_antin_la_fayette_m9.voisins = {"havre_caumartin/M9":DIR, "richelieu_drouot/M9":DIR, /* Corresp ---> */ "chaussee_d_antin_la_fayette/M7A":COR, "chaussee_d_antin_la_fayette/M7B":COR };
richelieu_drouot_m9.voisins = {"chaussee_d_antin_la_fayette/M9":DIR, "grands_boulevards/M9":DIR, /* Corresp ---> */ "richelieu_drouot/M8":COR };
grands_boulevards_m9.voisins = {"richelieu_drouot/M9":DIR, "bonne_nouvelle/M9":DIR, /* Corresp ---> */ "grands_boulevards/M8":COR };
bonne_nouvelle_m9.voisins = {"grands_boulevards/M9":DIR, "strasbourg_saint_denis/M9":DIR, /* Corresp ---> */ "bonne_nouvelle/M8":COR };
strasbourg_saint_denis_m9.voisins = {"bonne_nouvelle/M9":DIR, "republique/M9":DIR, /* Corresp ---> */ "strasbourg_saint_denis/M4":COR, "strasbourg_saint_denis/M8":COR };
republique_m9.voisins = {"strasbourg_saint_denis/M9":DIR, "oberkampf/M9":DIR, /* Corresp ---> */ "republique/M3":COR, "republique/M5":COR, "republique/M8":COR, "republique/M11":COR };
oberkampf_m9.voisins = {"republique/M9":DIR, "saint_ambroise/M9":DIR, /* Corresp ---> */ "oberkampf/M5":COR };
saint_ambroise_m9.voisins = {"oberkampf/M9":DIR, "voltaire/M9":DIR, /* Corresp ---> */  };
voltaire_m9.voisins = {"saint_ambroise/M9":DIR, "charonne/M9":DIR, /* Corresp ---> */  };
charonne_m9.voisins = {"voltaire/M9":DIR, "rue_des_boulets/M9":DIR, /* Corresp ---> */  };
rue_des_boulets_m9.voisins = {"charonne/M9":DIR, "nation/M9":DIR, /* Corresp ---> */  };
nation_m9.voisins = {"rue_des_boulets/M9":DIR, "buzenval/M9":DIR, /* Corresp ---> */ "nation/M1":COR, "nation/M2":COR, "nation/M6":COR };
buzenval_m9.voisins = {"nation/M9":DIR, "maraichers/M9":DIR, /* Corresp ---> */  };
maraichers_m9.voisins = {"buzenval/M9":DIR, "porte_de_montreuil/M9":DIR, /* Corresp ---> */  };
porte_de_montreuil_m9.voisins = {"maraichers/M9":DIR, "robespierre/M9":DIR, /* Corresp ---> */  };
robespierre_m9.voisins = {"porte_de_montreuil/M9":DIR, "croix_de_chavaux/M9":DIR, /* Corresp ---> */  };
croix_de_chavaux_m9.voisins = {"robespierre/M9":DIR, "mairie_de_montreuil/M9":DIR, /* Corresp ---> */  };
mairie_de_montreuil_m9.voisins = {"croix_de_chavaux/M9":DIR, /* Corresp ---> */  };

boulogne_pont_de_saint_cloud_m10a.voisins = {"boulogne_jean_jaures/M10A":DIR, /* Corresp ---> */  };
boulogne_jean_jaures_m10a.voisins = {"boulogne_pont_de_saint_cloud/M10A":DIR, "michel_ange_molitor/M10A":DIR, /* Corresp ---> */ "boulogne_jean_jaures/M10B":COR };
michel_ange_molitor_m10a.voisins = {"chardon_lagache/M10A":DIR, /* Corresp ---> */ "michel_ange_molitor/M9":COR };
chardon_lagache_m10a.voisins = {"mirabeau/M10A":DIR, /* Corresp ---> */  };
mirabeau_m10a.voisins = {"javel_andre_citroen/M10A":DIR, /* Corresp ---> */  };
javel_andre_citroen_m10a.voisins = {"charles_michels/M10A":DIR, /* Corresp ---> */ "javel_andre_citroen/M10B":COR };
charles_michels_m10a.voisins = {"javel_andre_citroen/M10A":DIR, "avenue_emile_zola/M10A":DIR, /* Corresp ---> */  };
avenue_emile_zola_m10a.voisins = {"charles_michels/M10A":DIR, "la_motte_picquet_grenelle/M10A":DIR, /* Corresp ---> */  };
la_motte_picquet_grenelle_m10a.voisins = {"avenue_emile_zola/M10A":DIR, "segur/M10A":DIR, /* Corresp ---> */ "la_motte_picquet_grenelle/M6":COR, "la_motte_picquet_grenelle/M8":COR };
segur_m10a.voisins = {"la_motte_picquet_grenelle/M10A":DIR, "duroc/M10A":DIR, /* Corresp ---> */  };
duroc_m10a.voisins = {"segur/M10A":DIR, "vaneau/M10A":DIR, /* Corresp ---> */ "duroc/M13A":COR, "duroc/M13B":COR };
vaneau_m10a.voisins = {"duroc/M10A":DIR, "sevres_babylone/M10A":DIR, /* Corresp ---> */  };
sevres_babylone_m10a.voisins = {"vaneau/M10A":DIR, "mabillon/M10A":DIR, /* Corresp ---> */ "sevres_babylone/M12":COR };
mabillon_m10a.voisins = {"sevres_babylone/M10A":DIR, "odeon/M10A":DIR, /* Corresp ---> */  };
odeon_m10a.voisins = {"mabillon/M10A":DIR, "cluny_la_sorbonne/M10A":DIR, /* Corresp ---> */ "odeon/M4":COR };
cluny_la_sorbonne_m10a.voisins = {"odeon/M10A":DIR, "maubert_mutualite/M10A":DIR, /* Corresp ---> */ "saint_michel/M4":CORL };
maubert_mutualite_m10a.voisins = {"cluny_la_sorbonne/M10A":DIR, "cardinal_lemoine/M10A":DIR, /* Corresp ---> */  };
cardinal_lemoine_m10a.voisins = {"maubert_mutualite/M10A":DIR, "jussieu/M10A":DIR, /* Corresp ---> */  };
jussieu_m10a.voisins = {"cardinal_lemoine/M10A":DIR, "gare_d_austerlitz/M10A":DIR, /* Corresp ---> */ "jussieu/M7A":COR, "jussieu/M7B":COR };
gare_d_austerlitz_m10a.voisins = {"jussieu/M10A":DIR, /* Corresp ---> */ "gare_d_austerlitz/M5":COR };

boulogne_pont_de_saint_cloud_m10b.voisins = {"boulogne_jean_jaures/M10B":DIR, /* Corresp ---> */  };
boulogne_jean_jaures_m10b.voisins = {"boulogne_pont_de_saint_cloud/M10B":DIR, /* Corresp ---> */ "boulogne_jean_jaures/M10A":COR };
porte_d_auteuil_m10b.voisins = {"boulogne_jean_jaures/M10B":DIR, /* Corresp ---> */  };
michel_ange_auteuil_m10b.voisins = {"porte_d_auteuil/M10B":DIR, /* Corresp ---> */ "michel_ange_auteuil/M9":COR };
eglise_d_auteuil_m10b.voisins = {"michel_ange_auteuil/M10B":DIR, /* Corresp ---> */  };
javel_andre_citroen_m10b.voisins = {"eglise_d_auteuil/M10B":DIR, "charles_michels/M10B":DIR, /* Corresp ---> */ "javel_andre_citroen/M10A":COR };
charles_michels_m10b.voisins = {"javel_andre_citroen/M10B":DIR, "avenue_emile_zola/M10B":DIR, /* Corresp ---> */  };
avenue_emile_zola_m10b.voisins = {"charles_michels/M10B":DIR, "la_motte_picquet_grenelle/M10B":DIR, /* Corresp ---> */  };
la_motte_picquet_grenelle_m10b.voisins = {"avenue_emile_zola/M10B":DIR, "segur/M10B":DIR, /* Corresp ---> */ "la_motte_picquet_grenelle/M6":COR, "la_motte_picquet_grenelle/M8":COR };
segur_m10b.voisins = {"la_motte_picquet_grenelle/M10B":DIR, "duroc/M10B":DIR, /* Corresp ---> */  };
duroc_m10b.voisins = {"segur/M10B":DIR, "vaneau/M10B":DIR, /* Corresp ---> */ "duroc/M13A":COR, "duroc/M13B":COR };
vaneau_m10b.voisins = {"duroc/M10B":DIR, "sevres_babylone/M10B":DIR, /* Corresp ---> */  };
sevres_babylone_m10b.voisins = {"vaneau/M10B":DIR, "mabillon/M10B":DIR, /* Corresp ---> */ "sevres_babylone/M12":COR };
mabillon_m10b.voisins = {"sevres_babylone/M10B":DIR, "odeon/M10B":DIR, /* Corresp ---> */  };
odeon_m10b.voisins = {"mabillon/M10B":DIR, "cluny_la_sorbonne/M10B":DIR, /* Corresp ---> */ "odeon/M4":COR };
cluny_la_sorbonne_m10b.voisins = {"odeon/M10B":DIR, "maubert_mutualite/M10B":DIR, /* Corresp ---> */ "saint_michel/M4":CORL };
maubert_mutualite_m10b.voisins = {"cluny_la_sorbonne/M10B":DIR, "cardinal_lemoine/M10B":DIR, /* Corresp ---> */  };
cardinal_lemoine_m10b.voisins = {"maubert_mutualite/M10B":DIR, "jussieu/M10B":DIR, /* Corresp ---> */  };
jussieu_m10b.voisins = {"cardinal_lemoine/M10B":DIR, "gare_d_austerlitz/M10B":DIR, /* Corresp ---> */ "jussieu/M7A":COR, "jussieu/M7B":COR };
gare_d_austerlitz_m10b.voisins = {"jussieu/M10B":DIR, /* Corresp ---> */ "gare_d_austerlitz/M5":COR };

chatelet_m11.voisins = {"hotel_de_ville/M11":DIR, /* Corresp ---> */ "chatelet/M1":COR, "chatelet/M4":COR, "chatelet/M7A":COR, "chatelet/M7B":COR, "chatelet/M14":COR, "les_halles/M4":CORL };
hotel_de_ville_m11.voisins = {"chatelet/M11":DIR, "rambuteau/M11":DIR, /* Corresp ---> */ "hotel_de_ville/M1":COR };
rambuteau_m11.voisins = {"hotel_de_ville/M11":DIR, "arts_et_metiers/M11":DIR, /* Corresp ---> */  };
arts_et_metiers_m11.voisins = {"rambuteau/M11":DIR, "republique/M11":DIR, /* Corresp ---> */ "arts_et_metiers/M3":COR };
republique_m11.voisins = {"arts_et_metiers/M11":DIR, "goncourt/M11":DIR, /* Corresp ---> */ "republique/M3":COR, "republique/M5":COR, "republique/M8":COR, "republique/M9":COR };
goncourt_m11.voisins = {"republique/M11":DIR, "belleville/M11":DIR, /* Corresp ---> */  };
belleville_m11.voisins = {"goncourt/M11":DIR, "pyrenees/M11":DIR, /* Corresp ---> */ "belleville/M2":COR };
pyrenees_m11.voisins = {"belleville/M11":DIR, "jourdain/M11":DIR, /* Corresp ---> */  };
jourdain_m11.voisins = {"pyrenees/M11":DIR, "place_des_fetes/M11":DIR, /* Corresp ---> */  };
place_des_fetes_m11.voisins = {"jourdain/M11":DIR, "telegraphe/M11":DIR, /* Corresp ---> */ "place_des_fetes/M7bisA":COR };
telegraphe_m11.voisins = {"place_des_fetes/M11":DIR, "porte_des_lilas/M11":DIR, /* Corresp ---> */  };
porte_des_lilas_m11.voisins = {"telegraphe/M11":DIR, "mairie_des_lilas/M11":DIR, /* Corresp ---> */ "porte_des_lilas/M3bis":COR };
mairie_des_lilas_m11.voisins = {"porte_des_lilas/M11":DIR, /* Corresp ---> */  };

front_populaire_m12.voisins = {"porte_de_la_chapelle/M12":DIR, /* Corresp ---> */  };
porte_de_la_chapelle_m12.voisins = {"front_populaire/M12":DIR, "marx_dormoy/M12":DIR, /* Corresp ---> */  };
marx_dormoy_m12.voisins = {"porte_de_la_chapelle/M12":DIR, "marcadet_poissonniers/M12":DIR, /* Corresp ---> */  };
marcadet_poissonniers_m12.voisins = {"marx_dormoy/M12":DIR, "jules_joffrin/M12":DIR, /* Corresp ---> */ "marcadet_poissonniers/M4":COR };
jules_joffrin_m12.voisins = {"marcadet_poissonniers/M12":DIR, "lamarck_caulaincourt/M12":DIR, /* Corresp ---> */  };
lamarck_caulaincourt_m12.voisins = {"jules_joffrin/M12":DIR, "abbesses/M12":DIR, /* Corresp ---> */  };
abbesses_m12.voisins = {"lamarck_caulaincourt/M12":DIR, "pigalle/M12":DIR, /* Corresp ---> */  };
pigalle_m12.voisins = {"abbesses/M12":DIR, "saint_georges/M12":DIR, /* Corresp ---> */ "pigalle/M2":COR };
saint_georges_m12.voisins = {"pigalle/M12":DIR, "notre_dame_de_lorette/M12":DIR, /* Corresp ---> */  };
notre_dame_de_lorette_m12.voisins = {"saint_georges/M12":DIR, "trinite_d_estienne_d_orves/M12":DIR, /* Corresp ---> */  };
trinite_d_estienne_d_orves_m12.voisins = {"notre_dame_de_lorette/M12":DIR, "saint_lazare/M12":DIR, /* Corresp ---> */  };
saint_lazare_m12.voisins = {"trinite_d_estienne_d_orves/M12":DIR, "madeleine/M12":DIR, /* Corresp ---> */ "saint_lazare/M3":COR, "saint_lazare/M13A":COR, "saint_lazare/M13B":COR, "saint_lazare/M14":COR, "saint_augustin/M9":CORL, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
madeleine_m12.voisins = {"saint_lazare/M12":DIR, "concorde/M12":DIR, /* Corresp ---> */ "madeleine/M8":COR, "madeleine/M14":COR };
concorde_m12.voisins = {"madeleine/M12":DIR, "assemblee_nationale/M12":DIR, /* Corresp ---> */ "concorde/M1":COR, "concorde/M8":COR };
assemblee_nationale_m12.voisins = {"concorde/M12":DIR, "solferino/M12":DIR, /* Corresp ---> */  };
solferino_m12.voisins = {"assemblee_nationale/M12":DIR, "rue_du_bac/M12":DIR, /* Corresp ---> */  };
rue_du_bac_m12.voisins = {"solferino/M12":DIR, "sevres_babylone/M12":DIR, /* Corresp ---> */  };
sevres_babylone_m12.voisins = {"rue_du_bac/M12":DIR, "rennes/M12":DIR, /* Corresp ---> */ "sevres_babylone/M10A":COR, "sevres_babylone/M10B":COR };
rennes_m12.voisins = {"sevres_babylone/M12":DIR, "notre_dame_des_champs/M12":DIR, /* Corresp ---> */  };
notre_dame_des_champs_m12.voisins = {"rennes/M12":DIR, "montparnasse_bienvenue/M12":DIR, /* Corresp ---> */  };
montparnasse_bienvenue_m12.voisins = {"notre_dame_des_champs/M12":DIR, "falguiere/M12":DIR, /* Corresp ---> */ "montparnasse_bienvenue/M4":COR, "montparnasse_bienvenue/M6":COR, "montparnasse_bienvenue/M13A":COR, "montparnasse_bienvenue/M13B":COR };
falguiere_m12.voisins = {"montparnasse_bienvenue/M12":DIR, "pasteur/M12":DIR, /* Corresp ---> */  };
pasteur_m12.voisins = {"falguiere/M12":DIR, "volontaires/M12":DIR, /* Corresp ---> */ "pasteur/M6":COR };
volontaires_m12.voisins = {"pasteur/M12":DIR, "vaugirard/M12":DIR, /* Corresp ---> */  };
vaugirard_m12.voisins = {"volontaires/M12":DIR, "convention/M12":DIR, /* Corresp ---> */  };
convention_m12.voisins = {"vaugirard/M12":DIR, "porte_de_versailles/M12":DIR, /* Corresp ---> */  };
porte_de_versailles_m12.voisins = {"convention/M12":DIR, "corentin_celton/M12":DIR, /* Corresp ---> */  };
corentin_celton_m12.voisins = {"porte_de_versailles/M12":DIR, "mairie_d_issy/M12":DIR, /* Corresp ---> */  };
mairie_d_issy_m12.voisins = {"corentin_celton/M12":DIR, /* Corresp ---> */  };

asnieres_gennevilliers_les_courtilles_m13a.voisins = {"les_agnettes/M13A":DIR, /* Corresp ---> */  };
les_agnettes_m13a.voisins = {"asnieres_gennevilliers_les_courtilles/M13A":DIR, "gabriel_peri/M13A":DIR, /* Corresp ---> */  };
gabriel_peri_m13a.voisins = {"les_agnettes/M13A":DIR, "mairie_de_clichy/M13A":DIR, /* Corresp ---> */  };
mairie_de_clichy_m13a.voisins = {"gabriel_peri/M13A":DIR, "porte_de_clichy/M13A":DIR, /* Corresp ---> */  };
porte_de_clichy_m13a.voisins = {"mairie_de_clichy/M13A":DIR, "brochant/M13A":DIR, /* Corresp ---> */  };
brochant_m13a.voisins = {"porte_de_clichy/M13A":DIR, "la_fourche/M13A":DIR, /* Corresp ---> */  };
la_fourche_m13a.voisins = {"brochant/M13A":DIR, "place_de_clichy/M13A":DIR, /* Corresp ---> */  };
place_de_clichy_m13a.voisins = {"la_fourche/M13A":DIR, "liege/M13A":DIR, /* Corresp ---> */ "place_de_clichy/M2":COR };
liege_m13a.voisins = {"place_de_clichy/M13A":DIR, "saint_lazare/M13A":DIR, /* Corresp ---> */  };
saint_lazare_m13a.voisins = {"liege/M13A":DIR, "miromesnil/M13A":DIR, /* Corresp ---> */ "saint_lazare/M3":COR, "saint_lazare/M12":COR, "saint_lazare/M14":COR, "saint_augustin/M9":CORL, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
miromesnil_m13a.voisins = {"saint_lazare/M13A":DIR, "champs_elysees_clemenceau/M13A":DIR, /* Corresp ---> */ "miromesnil/M9":COR };
champs_elysees_clemenceau_m13a.voisins = {"miromesnil/M13A":DIR, "invalides/M13A":DIR, /* Corresp ---> */ "champs_elysees_clemenceau/M1":COR };
invalides_m13a.voisins = {"champs_elysees_clemenceau/M13A":DIR, "varenne/M13A":DIR, /* Corresp ---> */ "invalides/M8":COR };
varenne_m13a.voisins = {"invalides/M13A":DIR, "saint_francois_xavier/M13A":DIR, /* Corresp ---> */  };
saint_francois_xavier_m13a.voisins = {"varenne/M13A":DIR, "duroc/M13A":DIR, /* Corresp ---> */  };
duroc_m13a.voisins = {"saint_francois_xavier/M13A":DIR, "montparnasse_bienvenue/M13A":DIR, /* Corresp ---> */ "duroc/M10A":COR, "duroc/M10B":COR };
montparnasse_bienvenue_m13a.voisins = {"duroc/M13A":DIR, "gaite/M13A":DIR, /* Corresp ---> */ "montparnasse_bienvenue/M4":COR, "montparnasse_bienvenue/M6":COR, "montparnasse_bienvenue/M12":COR };
gaite_m13a.voisins = {"montparnasse_bienvenue/M13A":DIR, "pernety/M13A":DIR, /* Corresp ---> */  };
pernety_m13a.voisins = {"gaite/M13A":DIR, "plaisance/M13A":DIR, /* Corresp ---> */  };
plaisance_m13a.voisins = {"pernety/M13A":DIR, "porte_de_vanves/M13A":DIR, /* Corresp ---> */  };
porte_de_vanves_m13a.voisins = {"plaisance/M13A":DIR, "malakoff_plateau_de_vanves/M13A":DIR, /* Corresp ---> */  };
malakoff_plateau_de_vanves_m13a.voisins = {"porte_de_vanves/M13A":DIR, "malakoff_rue_etienne_dolet/M13A":DIR, /* Corresp ---> */  };
malakoff_rue_etienne_dolet_m13a.voisins = {"malakoff_plateau_de_vanves/M13A":DIR, "chatillon_montrouge/M13A":DIR, /* Corresp ---> */  };
chatillon_montrouge_m13a.voisins = {"malakoff_rue_etienne_dolet/M13A":DIR, /* Corresp ---> */  };

saint_denis_universite_m13b.voisins = {"basilique_de_saint_denis/M13B":DIR, /* Corresp ---> */ };
basilique_de_saint_denis_m13b.voisins = {"saint_denis_universite/M13B":DIR, "saint_denis_porte_de_paris/M13B":DIR, /* Corresp ---> */  };
saint_denis_porte_de_paris_m13b.voisins = {"basilique_de_saint_denis/M13B":DIR, "carrefour_pleyel/M13B":DIR, /* Corresp ---> */  };
carrefour_pleyel_m13b.voisins = {"saint_denis_porte_de_paris/M13B":DIR, "mairie_de_saint_ouen/M13B":DIR, /* Corresp ---> */  };
mairie_de_saint_ouen_m13b.voisins = {"carrefour_pleyel/M13B":DIR, "garibaldi/M13B":DIR, /* Corresp ---> */  };
garibaldi_m13b.voisins = {"mairie_de_saint_ouen/M13B":DIR, "porte_de_saint_ouen/M13B":DIR, /* Corresp ---> */  };
porte_de_saint_ouen_m13b.voisins = {"garibaldi/M13B":DIR, "guy_moquet/M13B":DIR, /* Corresp ---> */  };
guy_moquet_m13b.voisins = {"porte_de_saint_ouen/M13B":DIR, "la_fourche/M13B":DIR, /* Corresp ---> */  };
la_fourche_m13b.voisins = {"guy_moquet/M13B":DIR, "place_de_clichy/M13B":DIR, /* Corresp ---> */ "place_de_clichy/M2":COR };
place_de_clichy_m13b.voisins = {"la_fourche/M13B":DIR, "liege/M13B":DIR, /* Corresp ---> */  };
liege_m13b.voisins = {"place_de_clichy/M13B":DIR, "saint_lazare/M13B":DIR, /* Corresp ---> */  };
saint_lazare_m13b.voisins = {"liege/M13B":DIR, "miromesnil/M13B":DIR, /* Corresp ---> */ "saint_lazare/M3":COR, "saint_lazare/M12":COR, "saint_lazare/M14":COR, "saint_augustin/M9":CORL, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
miromesnil_m13b.voisins = {"saint_lazare/M13B":DIR, "champs_elysees_clemenceau/M13B":DIR, /* Corresp ---> */ "miromesnil/M9":COR };
champs_elysees_clemenceau_m13b.voisins = {"miromesnil/M13B":DIR, "invalides/M13B":DIR, /* Corresp ---> */ "champs_elysees_clemenceau/M1":COR };
invalides_m13b.voisins = {"champs_elysees_clemenceau/M13B":DIR, "varenne/M13B":DIR, /* Corresp ---> */ "invalides/M8":COR };
varenne_m13b.voisins = {"invalides/M13B":DIR, "saint_francois_xavier/M13B":DIR, /* Corresp ---> */  };
saint_francois_xavier_m13b.voisins = {"varenne/M13B":DIR, "duroc/M13B":DIR, /* Corresp ---> */  };
duroc_m13b.voisins = {"saint_francois_xavier/M13B":DIR, "montparnasse_bienvenue/M13B":DIR, /* Corresp ---> */ "duroc/M10A":COR, "duroc/M10B":COR };
montparnasse_bienvenue_m13b.voisins = {"duroc/M13B":DIR, "gaite/M13B":DIR, /* Corresp ---> */ "montparnasse_bienvenue/M4":COR, "montparnasse_bienvenue/M6":COR, "montparnasse_bienvenue/M12":COR };
gaite_m13b.voisins = {"montparnasse_bienvenue/M13B":DIR, "pernety/M13B":DIR, /* Corresp ---> */  };
pernety_m13b.voisins = {"gaite/M13B":DIR, "plaisance/M13B":DIR, /* Corresp ---> */  };
plaisance_m13b.voisins = {"pernety/M13B":DIR, "porte_de_vanves/M13B":DIR, /* Corresp ---> */  };
porte_de_vanves_m13b.voisins = {"plaisance/M13B":DIR, "malakoff_plateau_de_vanves/M13B":DIR, /* Corresp ---> */  };
malakoff_plateau_de_vanves_m13b.voisins = {"porte_de_vanves/M13B":DIR, "malakoff_rue_etienne_dolet/M13B":DIR, /* Corresp ---> */  };
malakoff_rue_etienne_dolet_m13b.voisins = {"malakoff_plateau_de_vanves/M13B":DIR, "chatillon_montrouge/M13B":DIR, /* Corresp ---> */  };
chatillon_montrouge_m13b.voisins = {"malakoff_rue_etienne_dolet/M13B":DIR, /* Corresp ---> */  };

saint_lazare_m14.voisins = {"madeleine/M14":DIR, /* Corresp ---> */ "saint_lazare/M3":COR, "saint_lazare/M12":COR, "saint_lazare/M13A":COR, "saint_lazare/M13B":COR, "saint_augustin/M9":CORL, "havre_caumartin/M3":CORL, "havre_caumartin/M9":CORL };
madeleine_m14.voisins = {"saint_lazare/M14":DIR, "pyramides/M14":DIR, /* Corresp ---> */ "madeleine/M8":COR, "madeleine/M12":COR };
pyramides_m14.voisins = {"madeleine/M14":DIR, "chatelet/M14":DIR, /* Corresp ---> */ "pyramides/M7A":COR, "pyramides/M7B":COR };
chatelet_m14.voisins = {"pyramides/M14":DIR, "gare_de_lyon/M14":DIR, /* Corresp ---> */ "chatelet/M1":COR, "chatelet/M4":COR, "chatelet/M7A":COR, "chatelet/M7B":COR, "chatelet/M11":COR, "les_halles/M4":CORL };
gare_de_lyon_m14.voisins = {"chatelet/M14":DIR, "bercy/M14":DIR, /* Corresp ---> */ "gare_de_lyon/M1":COR };
bercy_m14.voisins = {"gare_de_lyon/M14":DIR, "cour_saint_emilion/M14":DIR, /* Corresp ---> */ "bercy/M6":COR };
cour_saint_emilion_m14.voisins = {"bercy/M14":DIR, "bibliotheque_francois_mitterrand/M14":DIR, /* Corresp ---> */  };
bibliotheque_francois_mitterrand_m14.voisins = {"cour_saint_emilion/M14":DIR, "olympiades/M14":DIR, /* Corresp ---> */  };
olympiades_m14.voisin = {"bibliotheque_francois_mitterrand/M14":DIR, /* Corresp ---> */  };

var listeStations = [
	la_defense_m1,esplanade_de_la_defense_m1,pont_de_neuilly_m1,les_sablons_m1,porte_maillot_m1,argentine_m1,charles_de_gaulle_etoile_m1,georges_v_m1,franklin_d_roosevelt_m1,champs_elysees_clemenceau_m1,concorde_m1,tuileries_m1,palais_royal_musee_du_louvre_m1,louvre_rivoli_m1,chatelet_m1,hotel_de_ville_m1,saint_paul_m1,bastille_m1,gare_de_lyon_m1,reuilly_diderot_m1,nation_m1,porte_de_vincennes_m1,saint_mande_m1,berault_m1,chateau_de_vincennes_m1,
	porte_dauphine_m2,victor_hugo_m2,charles_de_gaulle_etoile_m2,ternes_m2,courcelles_m2,monceau_m2,villiers_m2,rome_m2,place_de_clichy_m2,blanche_m2,pigalle_m2,anvers_m2,barbes_rochechouart_m2,la_chapelle_m2,stalingrad_m2,jaures_m2,colonel_fabien_m2,belleville_m2,couronnes_m2,menilmontant_m2,pere_lachaise_m2,philippe_auguste_m2,alexandre_dumas_m2,avron_m2,nation_m2,
	pont_de_levallois_becon_m3,anatole_france_m3,louise_michel_m3,porte_de_champerret_m3,pereire_m3,wagram_m3,malesherbes_m3,villiers_m3,europe_m3,saint_lazare_m3,havre_caumartin_m3,opera_m3,quatre_septembre_m3,bourse_m3,sentier_m3,reaumur_sebastopol_m3,arts_et_metiers_m3,temple_m3,republique_m3,parmentier_m3,rue_saint_maur_m3,pere_lachaise_m3,gambetta_m3,porte_de_bagnolet_m3,gallieni_m3,
	gambetta_m3b,pelleport_m3b,saint_fargeau_m3b,porte_des_lilas_m3b,
	porte_de_clignancourt_m4, simplon_m4,marcadet_poissonniers_m4,chateau_rouge_m4,barbes_rochechouart_m4,gare_du_nord_m4,gare_de_l_est_m4,chateau_d_eau_m4,strasbourg_saint_denis_m4,reaumur_sebastopol_m4,etienne_marcel_m4,les_halles_m4,chatelet_m4,cite_m4,saint_michel_m4,odeon_m4,saint_germain_des_pres_m4,saint_sulpice_m4,saint_placide_m4,montparnasse_bienvenue_m4,valvin_m4,raspail_m4,denfert_rochereau_m4,mouton_duvernet_m4,alesia_m4,porte_d_orleans_m4,mairie_de_montrouge_m4,
	bobigny_pablo_picasso_m5,bobigny_pantin_raymond_queneau_m5,eglise_de_pantin_m5,hoche_m5,porte_de_pantin_m5,ourcq_m5,laumiere_m5,jaures_m5,stalingrad_m5,gare_du_nord_m5,gare_de_l_est_m5,jacques_bonsergent_m5,republique_m5,oberkampf_m5,richard_lenoir_m5,breguet_sabin_m5,bastille_m5,quai_de_la_rapee_m5,gare_d_austerlitz_m5,saint_marcel_m5,campo_formio_m5,place_d_italie_m5,
	charles_de_gaulle_etoile_m6,kleber_m6,boissiere_m6,trocadero_m6,passy_m6,bir_hakeim_m6,dupleix_m6,la_motte_picquet_grenelle_m6,cambronne_m6,sevres_lecourbe_m6,pasteur_m6,montparnasse_bienvenue_m6,edgar_quinet_m6,raspail_m6,denfert_rochereau_m6,saint_jacques_m6,glaciere_m6,corvisart_m6,place_d_italie_m6,nationale_m6,chevaleret_m6,quai_de_la_gare_m6,bercy_m6,dugommier_m6,daumesnil_m6,bel_air_m6,picpus_m6,nation_m6,
	la_courneuve_8_mai_1945_m7a,fort_d_aubervilliers_m7a,aubervilliers_pantin_quatre_chemins_m7a,porte_de_la_villette_m7a,corentin_cariou_m7a,crimee_m7a,riquet_m7a,stalingrad_m7a,louis_blanc_m7a,chateau_landon_m7a,gare_de_l_est_m7a,poissonniere_m7a,cadet_m7a,le_peletier_m7a,chaussee_d_antin_la_fayette_m7a,opera_m7a,pyramides_m7a,palais_royal_musee_du_louvre_m7a,pont_neuf_m7a,chatelet_m7a,pont_marie_m7a,sully_morland_m7a,jussieu_m7a,place_monge_m7a,censier_daubenton_m7a,les_gobelins_m7a,place_d_italie_m7a,tolbiac_m7a,maison_blanche_m7a,le_kremlin_bicetre_m7a,villejuif_leo_lagrange_m7a,villejuif_paul_vaillant_couturier_m7a,villejuif_louis_aragon_m7a,
	la_courneuve_8_mai_1945_m7b,fort_d_aubervilliers_m7b,aubervilliers_pantin_quatre_chemins_m7b,porte_de_la_villette_m7b,corentin_cariou_m7b,crimee_m7b,riquet_m7b,stalingrad_m7b,louis_blanc_m7b,chateau_landon_m7b,gare_de_l_est_m7b,poissonniere_m7b,cadet_m7b,le_peletier_m7b,chaussee_d_antin_la_fayette_m7b,opera_m7b,pyramides_m7b,palais_royal_musee_du_louvre_m7b,pont_neuf_m7b,chatelet_m7b,pont_marie_m7b,sully_morland_m7b,jussieu_m7b,place_monge_m7b,censier_daubenton_m7b,les_gobelins_m7b,place_d_italie_m7b,tolbiac_m7b,maison_blanche_m7b,porte_d_italie_m7b,porte_de_choisy_m7b,porte_d_ivry_m7b,pierre_et_marie_curie_m7b,mairie_d_ivry_m7b,
	louis_blanc_m7bisa,jaures_m7bisa,bolivar_m7bisa,buttes_chaumont_m7bisa,botzaris_m7bisa,place_des_fetes_m7bisa,pre_saint_gervais_m7bisa,
	louis_blanc_m7bisb,jaures_m7bisb,bolivar_m7bisb,buttes_chaumont_m7bisb,botzaris_m7bisb,danube_m7bisb,pre_saint_gervais_m7bisb,
	balard_m8,lourmel_m8,boucicaut_m8,felix_faure_m8,commerce_m8,la_motte_picquet_grenelle_m8,ecole_militaire_m8,la_tour_maubourg_m8,invalides_m8,concorde_m8,madeleine_m8,opera_m8,richelieu_drouot_m8,grands_boulevards_m8,bonne_nouvelle_m8,strasbourg_saint_denis_m8,republique_m8,filles_du_calvaire_m8,saint_sebastien_froissart_m8,chemin_vert_m8,bastille_m8,ledru_rollin_m8,faidherbe_chaligny_m8,reuilly_diderot_m8,montgallet_m8,daumesnil_m8,michel_bizot_m8,porte_doree_m8,porte_de_charenton_m8,liberte_m8,charenton_ecoles_m8,ecole_veterinaire_de_maisons_alfort_m8,maisons_alfort_stade_m8,maisons_alfort_les_juilliottes_m8,creteil_l_echat_m8,creteil_universite_m8,creteil_prefecture_m8,pointe_du_lac_m8,
	pont_de_sevres_m9,billancourt_m9,marcel_sembat_m9,porte_de_saint_cloud_m9,exelmans_m9,michel_ange_molitor_m9,michel_ange_auteuil_m9,jasmin_m9,ranelagh_m9,la_muette_m9,rue_de_la_pompe_m9,trocadero_m9,iena_m9,alma_marceau_m9,franklin_d_roosevelt_m9,saint_philippe_du_roule_m9,miromesnil_m9,saint_augustin_m9,havre_caumartin_m9,chaussee_d_antin_la_fayette_m9,richelieu_drouot_m9,grands_boulevards_m9,bonne_nouvelle_m9,strasbourg_saint_denis_m9,republique_m9,oberkampf_m9,saint_ambroise_m9,voltaire_m9,charonne_m9,rue_des_boulets_m9,nation_m9,buzenval_m9,maraichers_m9,porte_de_montreuil_m9,robespierre_m9,croix_de_chavaux_m9,mairie_de_montreuil_m9,
	boulogne_pont_de_saint_cloud_m10a,boulogne_jean_jaures_m10a,michel_ange_molitor_m10a,chardon_lagache_m10a,mirabeau_m10a,javel_andre_citroen_m10a,charles_michels_m10a,avenue_emile_zola_m10a,la_motte_picquet_grenelle_m10a,segur_m10a,duroc_m10a,vaneau_m10a,sevres_babylone_m10a,mabillon_m10a,odeon_m10a,cluny_la_sorbonne_m10a,maubert_mutualite_m10a,cardinal_lemoine_m10a,jussieu_m10a,gare_d_austerlitz_m10a,
	boulogne_pont_de_saint_cloud_m10b,boulogne_jean_jaures_m10b,porte_d_auteuil_m10b,michel_ange_auteuil_m10b,eglise_d_auteuil_m10b,javel_andre_citroen_m10b,charles_michels_m10b,avenue_emile_zola_m10b,la_motte_picquet_grenelle_m10b,segur_m10b,duroc_m10b,vaneau_m10b,sevres_babylone_m10b,mabillon_m10b,odeon_m10b,cluny_la_sorbonne_m10b,maubert_mutualite_m10b,cardinal_lemoine_m10b,jussieu_m10b,gare_d_austerlitz_m10b,
	chatelet_m11,hotel_de_ville_m11,rambuteau_m11,arts_et_metiers_m11,republique_m11,goncourt_m11,belleville_m11,pyrenees_m11,jourdain_m11,place_des_fetes_m11,telegraphe_m11,porte_des_lilas_m11,mairie_des_lilas_m11,
	front_populaire_m12,porte_de_la_chapelle_m12,marx_dormoy_m12,marcadet_poissonniers_m12,jules_joffrin_m12,lamarck_caulaincourt_m12,abbesses_m12,pigalle_m12,saint_georges_m12,notre_dame_de_lorette_m12,trinite_d_estienne_d_orves_m12,saint_lazare_m12,madeleine_m12,concorde_m12,assemblee_nationale_m12,solferino_m12,rue_du_bac_m12,sevres_babylone_m12,rennes_m12,notre_dame_des_champs_m12,montparnasse_bienvenue_m12,falguiere_m12,pasteur_m12,volontaires_m12,vaugirard_m12,convention_m12,porte_de_versailles_m12,corentin_celton_m12,mairie_d_issy_m12,
	asnieres_gennevilliers_les_courtilles_m13a,les_agnettes_m13a,gabriel_peri_m13a,mairie_de_clichy_m13a,porte_de_clichy_m13a,brochant_m13a,la_fourche_m13a,place_de_clichy_m13a,liege_m13a,saint_lazare_m13a,miromesnil_m13a,champs_elysees_clemenceau_m13a,invalides_m13a,varenne_m13a,saint_francois_xavier_m13a,duroc_m13a,montparnasse_bienvenue_m13a,gaite_m13a,pernety_m13a,plaisance_m13a,porte_de_vanves_m13a,malakoff_plateau_de_vanves_m13a,malakoff_rue_etienne_dolet_m13a,chatillon_montrouge_m13a,
	saint_denis_universite_m13b,basilique_de_saint_denis_m13b,saint_denis_porte_de_paris_m13b,carrefour_pleyel_m13b,mairie_de_saint_ouen_m13b,garibaldi_m13b,porte_de_saint_ouen_m13b,guy_moquet_m13b,la_fourche_m13b,place_de_clichy_m13b,liege_m13b,saint_lazare_m13b,miromesnil_m13b,champs_elysees_clemenceau_m13b,invalides_m13b,varenne_m13b,saint_francois_xavier_m13b,duroc_m13b,montparnasse_bienvenue_m13b,gaite_m13b,pernety_m13b,plaisance_m13b,porte_de_vanves_m13b,malakoff_plateau_de_vanves_m13b,malakoff_rue_etienne_dolet_m13b,chatillon_montrouge_m13b,
	saint_lazare_m14,madeleine_m14,pyramides_m14,chatelet_m14,gare_de_lyon_m14,bercy_m14,cour_saint_emilion_m14,bibliotheque_francois_mitterrand_m14,olympiades_m14
];
listeStations.sort(function(a,b){return a.nom >= b.nom});

// LISTE DES STATIONS PAR LIGNE

m1.stations = [la_defense_m1, esplanade_de_la_defense_m1, pont_de_neuilly_m1, les_sablons_m1, porte_maillot_m1, argentine_m1, charles_de_gaulle_etoile_m1, georges_v_m1, franklin_d_roosevelt_m1, champs_elysees_clemenceau_m1, concorde_m1, tuileries_m1, palais_royal_musee_du_louvre_m1, louvre_rivoli_m1, chatelet_m1, hotel_de_ville_m1, saint_paul_m1, bastille_m1, gare_de_lyon_m1, reuilly_diderot_m1, nation_m1, porte_de_vincennes_m1, saint_mande_m1, berault_m1, chateau_de_vincennes_m1];
m2.stations = [porte_dauphine_m2, victor_hugo_m2, charles_de_gaulle_etoile_m2, ternes_m2, courcelles_m2, monceau_m2, villiers_m2, rome_m2, place_de_clichy_m2, blanche_m2, pigalle_m2, anvers_m2, barbes_rochechouart_m2, la_chapelle_m2, stalingrad_m2, jaures_m2, colonel_fabien_m2, belleville_m2, couronnes_m2, menilmontant_m2, pere_lachaise_m2, philippe_auguste_m2, alexandre_dumas_m2, avron_m2, nation_m2];
m3.stations = [pont_de_levallois_becon_m3, anatole_france_m3, louise_michel_m3, porte_de_champerret_m3, pereire_m3, wagram_m3, malesherbes_m3, villiers_m3, europe_m3, saint_lazare_m3, havre_caumartin_m3, opera_m3, quatre_septembre_m3, bourse_m3, sentier_m3, reaumur_sebastopol_m3, arts_et_metiers_m3, temple_m3, republique_m3, parmentier_m3, rue_saint_maur_m3, pere_lachaise_m3, gambetta_m3, porte_de_bagnolet_m3, gallieni_m3];
m3bis.stations = [gambetta_m3b, pelleport_m3b, saint_fargeau_m3b, porte_des_lilas_m3b];
m4.stations = [porte_de_clignancourt_m4, simplon_m4, marcadet_poissonniers_m4, chateau_rouge_m4, barbes_rochechouart_m4, gare_du_nord_m4, gare_de_l_est_m4, chateau_d_eau_m4, strasbourg_saint_denis_m4, reaumur_sebastopol_m4, etienne_marcel_m4, les_halles_m4, chatelet_m4, cite_m4, saint_michel_m4, odeon_m4, saint_germain_des_pres_m4, saint_sulpice_m4, saint_placide_m4, montparnasse_bienvenue_m4, valvin_m4, raspail_m4, denfert_rochereau_m4, mouton_duvernet_m4, alesia_m4, porte_d_orleans_m4, mairie_de_montrouge_m4];
m5.stations = [bobigny_pablo_picasso_m5, bobigny_pantin_raymond_queneau_m5, eglise_de_pantin_m5, hoche_m5, porte_de_pantin_m5, ourcq_m5, laumiere_m5, jaures_m5, stalingrad_m5, gare_du_nord_m5, gare_de_l_est_m5, jacques_bonsergent_m5, republique_m5, oberkampf_m5, richard_lenoir_m5, breguet_sabin_m5, bastille_m5, quai_de_la_rapee_m5, gare_d_austerlitz_m5, saint_marcel_m5, campo_formio_m5, place_d_italie_m5];
m6.stations = [charles_de_gaulle_etoile_m6, kleber_m6, boissiere_m6, trocadero_m6, passy_m6, bir_hakeim_m6, dupleix_m6, la_motte_picquet_grenelle_m6, cambronne_m6, sevres_lecourbe_m6, pasteur_m6, montparnasse_bienvenue_m6, edgar_quinet_m6, raspail_m6, denfert_rochereau_m6, saint_jacques_m6, glaciere_m6, corvisart_m6, place_d_italie_m6, nationale_m6, chevaleret_m6, quai_de_la_gare_m6, bercy_m6, dugommier_m6, daumesnil_m6, bel_air_m6, picpus_m6, nation_m6];
m7a.stations = [la_courneuve_8_mai_1945_m7a, fort_d_aubervilliers_m7a, aubervilliers_pantin_quatre_chemins_m7a, porte_de_la_villette_m7a, corentin_cariou_m7a, crimee_m7a, riquet_m7a, stalingrad_m7a, louis_blanc_m7a, chateau_landon_m7a, gare_de_l_est_m7a, poissonniere_m7a, cadet_m7a, le_peletier_m7a, chaussee_d_antin_la_fayette_m7a, opera_m7a, pyramides_m7a, palais_royal_musee_du_louvre_m7a, pont_neuf_m7a, chatelet_m7a, pont_marie_m7a, sully_morland_m7a, jussieu_m7a, place_monge_m7a, censier_daubenton_m7a, les_gobelins_m7a, place_d_italie_m7a, tolbiac_m7a, maison_blanche_m7a, le_kremlin_bicetre_m7a, villejuif_leo_lagrange_m7a, villejuif_paul_vaillant_couturier_m7a, villejuif_louis_aragon_m7a];
m7b.stations = [la_courneuve_8_mai_1945_m7b, fort_d_aubervilliers_m7b, aubervilliers_pantin_quatre_chemins_m7b, porte_de_la_villette_m7b, corentin_cariou_m7b, crimee_m7b, riquet_m7b, stalingrad_m7b, louis_blanc_m7b, chateau_landon_m7b, gare_de_l_est_m7b, poissonniere_m7b, cadet_m7b, le_peletier_m7b, chaussee_d_antin_la_fayette_m7b, opera_m7b, pyramides_m7b, palais_royal_musee_du_louvre_m7b, pont_neuf_m7b, chatelet_m7b, pont_marie_m7b, sully_morland_m7b, jussieu_m7b, place_monge_m7b, censier_daubenton_m7b, les_gobelins_m7b, place_d_italie_m7b, tolbiac_m7b, maison_blanche_m7b, porte_d_italie_m7b, porte_de_choisy_m7b, porte_d_ivry_m7b, pierre_et_marie_curie_m7b, mairie_d_ivry_m7b];
m7bisa.stations = [louis_blanc_m7bisa, jaures_m7bisa, bolivar_m7bisa, buttes_chaumont_m7bisa, botzaris_m7bisa, place_des_fetes_m7bisa, pre_saint_gervais_m7bisa];
m7bisb.stations = [louis_blanc_m7bisb, jaures_m7bisb, bolivar_m7bisb, buttes_chaumont_m7bisb, botzaris_m7bisb, danube_m7bisb, pre_saint_gervais_m7bisb];
m8.stations = [balard_m8, lourmel_m8, boucicaut_m8, felix_faure_m8, commerce_m8, la_motte_picquet_grenelle_m8, ecole_militaire_m8, la_tour_maubourg_m8, invalides_m8, concorde_m8, madeleine_m8, opera_m8, richelieu_drouot_m8, grands_boulevards_m8, bonne_nouvelle_m8, strasbourg_saint_denis_m8, republique_m8, filles_du_calvaire_m8, saint_sebastien_froissart_m8, chemin_vert_m8, bastille_m8, ledru_rollin_m8, faidherbe_chaligny_m8, reuilly_diderot_m8, montgallet_m8, daumesnil_m8, michel_bizot_m8, porte_doree_m8, porte_de_charenton_m8, liberte_m8, charenton_ecoles_m8, ecole_veterinaire_de_maisons_alfort_m8, maisons_alfort_stade_m8, maisons_alfort_les_juilliottes_m8, creteil_l_echat_m8, creteil_universite_m8, creteil_prefecture_m8, pointe_du_lac_m8];
m9.stations = [pont_de_sevres_m9, billancourt_m9, marcel_sembat_m9, porte_de_saint_cloud_m9, exelmans_m9, michel_ange_molitor_m9, michel_ange_auteuil_m9, jasmin_m9, ranelagh_m9, la_muette_m9, rue_de_la_pompe_m9, trocadero_m9, iena_m9, alma_marceau_m9, franklin_d_roosevelt_m9, saint_philippe_du_roule_m9, miromesnil_m9, saint_augustin_m9, havre_caumartin_m9, chaussee_d_antin_la_fayette_m9, richelieu_drouot_m9, grands_boulevards_m9, bonne_nouvelle_m9, strasbourg_saint_denis_m9, republique_m9, oberkampf_m9, saint_ambroise_m9, voltaire_m9, charonne_m9, rue_des_boulets_m9, nation_m9, buzenval_m9, maraichers_m9, porte_de_montreuil_m9, robespierre_m9, croix_de_chavaux_m9, mairie_de_montreuil_m9];
m10a.stations = [boulogne_pont_de_saint_cloud_m10a, boulogne_jean_jaures_m10a, michel_ange_molitor_m10a, chardon_lagache_m10a, mirabeau_m10a, javel_andre_citroen_m10a, charles_michels_m10a, avenue_emile_zola_m10a, la_motte_picquet_grenelle_m10a, segur_m10a, duroc_m10a, vaneau_m10a, sevres_babylone_m10a, mabillon_m10a, odeon_m10a, cluny_la_sorbonne_m10a, maubert_mutualite_m10a, cardinal_lemoine_m10a, jussieu_m10a, gare_d_austerlitz_m10a];
m10b.stations = [boulogne_pont_de_saint_cloud_m10b, boulogne_jean_jaures_m10b, porte_d_auteuil_m10b, michel_ange_auteuil_m10b, eglise_d_auteuil_m10b, javel_andre_citroen_m10b, charles_michels_m10b, avenue_emile_zola_m10b, la_motte_picquet_grenelle_m10b, segur_m10b, duroc_m10b, vaneau_m10b, sevres_babylone_m10b, mabillon_m10b, odeon_m10b, cluny_la_sorbonne_m10b, maubert_mutualite_m10b, cardinal_lemoine_m10b, jussieu_m10b, gare_d_austerlitz_m10a];
m11.stations = [chatelet_m11, hotel_de_ville_m11, rambuteau_m11, arts_et_metiers_m11, republique_m11, goncourt_m11, belleville_m11, pyrenees_m11, jourdain_m11, place_des_fetes_m11, telegraphe_m11, porte_des_lilas_m11, mairie_des_lilas_m11];
m12.stations = [front_populaire_m12, porte_de_la_chapelle_m12, marx_dormoy_m12, marcadet_poissonniers_m12, jules_joffrin_m12, lamarck_caulaincourt_m12, abbesses_m12, pigalle_m12, saint_georges_m12, notre_dame_de_lorette_m12, trinite_d_estienne_d_orves_m12, saint_lazare_m12, madeleine_m12, concorde_m12, assemblee_nationale_m12, solferino_m12, rue_du_bac_m12, sevres_babylone_m12, rennes_m12, notre_dame_des_champs_m12, montparnasse_bienvenue_m12, falguiere_m12, pasteur_m12, volontaires_m12, vaugirard_m12, convention_m12, porte_de_versailles_m12, corentin_celton_m12, mairie_d_issy_m12];
m13a.stations = [asnieres_gennevilliers_les_courtilles_m13a, les_agnettes_m13a, gabriel_peri_m13a, mairie_de_clichy_m13a, porte_de_clichy_m13a, brochant_m13a, la_fourche_m13a, place_de_clichy_m13a, liege_m13a, saint_lazare_m13a, miromesnil_m13a, champs_elysees_clemenceau_m13a, invalides_m13a, varenne_m13a, saint_francois_xavier_m13a, duroc_m13a, montparnasse_bienvenue_m13a, gaite_m13a, pernety_m13a, plaisance_m13a, porte_de_vanves_m13a, malakoff_plateau_de_vanves_m13a, malakoff_rue_etienne_dolet_m13a, chatillon_montrouge_m13a];
m13b.stations = [saint_denis_universite_m13b, basilique_de_saint_denis_m13b, saint_denis_porte_de_paris_m13b, carrefour_pleyel_m13b, mairie_de_saint_ouen_m13b, garibaldi_m13b, porte_de_saint_ouen_m13b, guy_moquet_m13b, la_fourche_m13b, place_de_clichy_m13b, liege_m13b, saint_lazare_m13b, miromesnil_m13b, champs_elysees_clemenceau_m13b, invalides_m13b, varenne_m13b, saint_francois_xavier_m13b, duroc_m13b, montparnasse_bienvenue_m13b, gaite_m13b, pernety_m13b, plaisance_m13b, porte_de_vanves_m13b, malakoff_plateau_de_vanves_m13b, malakoff_rue_etienne_dolet_m13b, chatillon_montrouge_m13b];
m14.stations = [saint_lazare_m14, madeleine_m14, pyramides_m14, chatelet_m14, gare_de_lyon_m14, bercy_m14, cour_saint_emilion_m14, bibliotheque_francois_mitterrand_m14, olympiades_m14];



// CREATION DU GRAPHE POUR LE CALCUL DU PLUS BAS COUT

var planMetro = function(){
	var graphe = {
		"la_defense/M1" : la_defense_m1.voisins,
		"esplanade_de_la_defense/M1" : esplanade_de_la_defense_m1.voisins,
		"pont_de_neuilly/M1" : pont_de_neuilly_m1.voisins,
		"les_sablons/M1" : les_sablons_m1.voisins,
		"porte_maillot/M1" : porte_maillot_m1.voisins,
		"argentine/M1" : argentine_m1.voisins,
		"charles_de_gaulle_etoile/M1" : charles_de_gaulle_etoile_m1.voisins,
		"georges_v/M1" : georges_v_m1.voisins,
		"franklin_d_roosevelt/M1" : franklin_d_roosevelt_m1.voisins,
		"champs_elysees_clemenceau/M1" : champs_elysees_clemenceau_m1.voisins,
		"concorde/M1" : concorde_m1.voisins,
		"tuileries/M1" : tuileries_m1.voisins,
		"palais_royal_musee_du_louvre/M1" : palais_royal_musee_du_louvre_m1.voisins,
		"louvre_rivoli/M1" : louvre_rivoli_m1.voisins,
		"chatelet/M1" : chatelet_m1.voisins,
		"hotel_de_ville/M1" : hotel_de_ville_m1.voisins,
		"saint_paul/M1" : saint_paul_m1.voisins,
		"bastille/M1" : bastille_m1.voisins,
		"gare_de_lyon/M1" : gare_de_lyon_m1.voisins,
		"reuilly_diderot/M1" : reuilly_diderot_m1.voisins,
		"nation/M1" : nation_m1.voisins,
		"porte_de_vincennes/M1" : porte_de_vincennes_m1.voisins,
		"saint_mande/M1" : saint_mande_m1.voisins,
		"berault/M1" : berault_m1.voisins,
		"chateau_de_vincennes/M1" : chateau_de_vincennes_m1.voisins,
		"porte_dauphine/M2" : porte_dauphine_m2.voisins,
		"victor_hugo/M2" : victor_hugo_m2.voisins,
		"charles_de_gaulle_etoile/M2" : charles_de_gaulle_etoile_m2.voisins,
		"ternes/M2" : ternes_m2.voisins,
		"courcelles/M2" : courcelles_m2.voisins,
		"monceau/M2" : monceau_m2.voisins,
		"villiers/M2" : villiers_m2.voisins,
		"rome/M2" : rome_m2.voisins,
		"place_de_clichy/M2" : place_de_clichy_m2.voisins,
		"blanche/M2" : blanche_m2.voisins,
		"pigalle/M2" : pigalle_m2.voisins,
		"anvers/M2" : anvers_m2.voisins,
		"barbes_rochechouart/M2" : barbes_rochechouart_m2.voisins,
		"la_chapelle/M2" : la_chapelle_m2.voisins,
		"stalingrad/M2" : stalingrad_m2.voisins,
		"jaures/M2" : jaures_m2.voisins,
		"colonel_fabien/M2" : colonel_fabien_m2.voisins,
		"belleville/M2" : belleville_m2.voisins,
		"couronnes/M2" : couronnes_m2.voisins,
		"menilmontant/M2" : menilmontant_m2.voisins,
		"pere_lachaise/M2" : pere_lachaise_m2.voisins,
		"philippe_auguste/M2" : philippe_auguste_m2.voisins,
		"alexandre_dumas/M2" : alexandre_dumas_m2.voisins,
		"avron/M2" : avron_m2.voisins,
		"nation/M2" : nation_m2.voisins,
		"pont_de_levallois_becon/M3" : pont_de_levallois_becon_m3.voisins,
		"anatole_france/M3" : anatole_france_m3.voisins,
		"louise_michel/M3" : louise_michel_m3.voisins,
		"porte_de_champerret/M3" : porte_de_champerret_m3.voisins,
		"pereire/M3" : pereire_m3.voisins,
		"wagram/M3" : wagram_m3.voisins,
		"malesherbes/M3" : malesherbes_m3.voisins,
		"villiers/M3" : villiers_m3.voisins,
		"europe/M3" : europe_m3.voisins,
		"saint_lazare/M3" : saint_lazare_m3.voisins,
		"havre_caumartin/M3" : havre_caumartin_m3.voisins,
		"opera/M3" : opera_m3.voisins,
		"quatre_septembre/M3" : quatre_septembre_m3.voisins,
		"bourse/M3" : bourse_m3.voisins,
		"sentier/M3" : sentier_m3.voisins,
		"reaumur_sebastopol/M3" : reaumur_sebastopol_m3.voisins,
		"arts_et_metiers/M3" : arts_et_metiers_m3.voisins,
		"temple/M3" : temple_m3.voisins,
		"republique/M3" : republique_m3.voisins,
		"parmentier/M3" : parmentier_m3.voisins,
		"rue_saint_maur/M3" : rue_saint_maur_m3.voisins,
		"pere_lachaise/M3" : pere_lachaise_m3.voisins,
		"gambetta/M3" : gambetta_m3.voisins,
		"porte_de_bagnolet/M3" : porte_de_bagnolet_m3.voisins,
		"gallieni/M3" : gallieni_m3.voisins,
		"gambetta/M3bis" : gambetta_m3b.voisins,
		"pelleport/M3bis" : pelleport_m3b.voisins,
		"saint_fargeau/M3bis" : saint_fargeau_m3b.voisins,
		"porte_des_lilas/M3bis" : porte_des_lilas_m3b.voisins,
		"porte_de_clignancourt/M4" : porte_de_clignancourt_m4.voisins,
		"simplon/M4" : simplon_m4.voisins,
		"marcadet_poissonniers/M4" : marcadet_poissonniers_m4.voisins,
		"chateau_rouge/M4" : chateau_rouge_m4.voisins,
		"barbes_rochechouart/M4" : barbes_rochechouart_m4.voisins,
		"gare_du_nord/M4" : gare_du_nord_m4.voisins,
		"gare_de_l_est/M4" : gare_de_l_est_m4.voisins,
		"chateau_d_eau/M4" : chateau_d_eau_m4.voisins,
		"strasbourg_saint_denis/M4" : strasbourg_saint_denis_m4.voisins,
		"reaumur_sebastopol/M4" : reaumur_sebastopol_m4.voisins,
		"etienne_marcel/M4" : etienne_marcel_m4.voisins,
		"les_halles/M4" : les_halles_m4.voisins,
		"chatelet/M4" : chatelet_m4.voisins,
		"cite/M4" : cite_m4.voisins,
		"saint_michel/M4" : saint_michel_m4.voisins,
		"odeon/M4" : odeon_m4.voisins,
		"saint_germain_des_pres/M4" : saint_germain_des_pres_m4.voisins,
		"saint_sulpice/M4" : saint_sulpice_m4.voisins,
		"saint_placide/M4" : saint_placide_m4.voisins,
		"montparnasse_bienvenue/M4" : montparnasse_bienvenue_m4.voisins,
		"valvin/M4" : valvin_m4.voisins,
		"raspail/M4" : raspail_m4.voisins,
		"denfert_rochereau/M4" : denfert_rochereau_m4.voisins,
		"mouton_duvernet/M4" : mouton_duvernet_m4.voisins,
		"alesia/M4" : alesia_m4.voisins,
		"porte_d_orleans/M4" : porte_d_orleans_m4.voisins,
		"mairie_de_montrouge/M4" : mairie_de_montrouge_m4.voisins,
		"bobigny_pablo_picasso/M5" : bobigny_pablo_picasso_m5.voisins,
		"bobigny_pantin_raymond_queneau/M5" : bobigny_pantin_raymond_queneau_m5.voisins,
		"eglise_de_pantin/M5" : eglise_de_pantin_m5.voisins,
		"hoche/M5" : hoche_m5.voisins,
		"porte_de_pantin/M5" : porte_de_pantin_m5.voisins,
		"ourcq/M5" : ourcq_m5.voisins,
		"laumiere/M5" : laumiere_m5.voisins,
		"jaures/M5" : jaures_m5.voisins,
		"stalingrad/M5" : stalingrad_m5.voisins,
		"gare_du_nord/M5" : gare_du_nord_m5.voisins,
		"gare_de_l_est/M5" : gare_de_l_est_m5.voisins,
		"jacques_bonsergent/M5" : jacques_bonsergent_m5.voisins,
		"republique/M5" : republique_m5.voisins,
		"oberkampf/M5" : oberkampf_m5.voisins,
		"richard_lenoir/M5" : richard_lenoir_m5.voisins,
		"breguet_sabin/M5" : breguet_sabin_m5.voisins,
		"bastille/M5" : bastille_m5.voisins,
		"quai_de_la_rapee/M5" : quai_de_la_rapee_m5.voisins,
		"gare_d_austerlitz/M5" : gare_d_austerlitz_m5.voisins,
		"saint_marcel/M5" : saint_marcel_m5.voisins,
		"campo_formio/M5" : campo_formio_m5.voisins,
		"place_d_italie/M5" : place_d_italie_m5.voisins,
		"charles_de_gaulle_etoile/M6" : charles_de_gaulle_etoile_m6.voisins,
		"kleber/M6" : kleber_m6.voisins,
		"boissiere/M6" : boissiere_m6.voisins,
		"trocadero/M6" : trocadero_m6.voisins,
		"passy/M6" : passy_m6.voisins,
		"bir_hakeim/M6" : bir_hakeim_m6.voisins,
		"dupleix/M6" : dupleix_m6.voisins,
		"la_motte_picquet_grenelle/M6" : la_motte_picquet_grenelle_m6.voisins,
		"cambronne/M6" : cambronne_m6.voisins,
		"sevres_lecourbe/M6" : sevres_lecourbe_m6.voisins,
		"pasteur/M6" : pasteur_m6.voisins,
		"montparnasse_bienvenue/M6" : montparnasse_bienvenue_m6.voisins,
		"edgar_quinet/M6" : edgar_quinet_m6.voisins,
		"raspail/M6" : raspail_m6.voisins,
		"denfert_rochereau/M6" : denfert_rochereau_m6.voisins,
		"saint_jacques/M6" : saint_jacques_m6.voisins,
		"glaciere/M6" : glaciere_m6.voisins,
		"corvisart/M6" : corvisart_m6.voisins,
		"place_d_italie/M6" : place_d_italie_m6.voisins,
		"nationale/M6" : nationale_m6.voisins,
		"chevaleret/M6" : chevaleret_m6.voisins,
		"quai_de_la_gare/M6" : quai_de_la_gare_m6.voisins,
		"bercy/M6" : bercy_m6.voisins,
		"dugommier/M6" : dugommier_m6.voisins,
		"daumesnil/M6" : daumesnil_m6.voisins,
		"bel_air/M6" : bel_air_m6.voisins,
		"picpus/M6" : picpus_m6.voisins,
		"nation/M6" : nation_m6.voisins,
		"la_courneuve_8_mai_1945/M7A" : la_courneuve_8_mai_1945_m7a.voisins,
		"fort_d_aubervilliers/M7A" : fort_d_aubervilliers_m7a.voisins,
		"aubervilliers_pantin_quatre_chemins/M7A" : aubervilliers_pantin_quatre_chemins_m7a.voisins,
		"porte_de_la_villette/M7A" : porte_de_la_villette_m7a.voisins,
		"corentin_cariou/M7A" : corentin_cariou_m7a.voisins,
		"crimee/M7A" : crimee_m7a.voisins,
		"riquet/M7A" : riquet_m7a.voisins,
		"stalingrad/M7A" : stalingrad_m7a.voisins,
		"louis_blanc/M7A" : louis_blanc_m7a.voisins,
		"chateau_landon/M7A" : chateau_landon_m7a.voisins,
		"gare_de_l_est/M7A" : gare_de_l_est_m7a.voisins,
		"poissonniere/M7A" : poissonniere_m7a.voisins,
		"cadet/M7A" : cadet_m7a.voisins,
		"le_peletier/M7A" : le_peletier_m7a.voisins,
		"chaussee_d_antin_la_fayette/M7A" : chaussee_d_antin_la_fayette_m7a.voisins,
		"opera/M7A" : opera_m7a.voisins,
		"pyramides/M7A" : pyramides_m7a.voisins,
		"palais_royal_musee_du_louvre/M7A" : palais_royal_musee_du_louvre_m7a.voisins,
		"pont_neuf/M7A" : pont_neuf_m7a.voisins,
		"chatelet/M7A" : chatelet_m7a.voisins,
		"pont_marie/M7A" : pont_marie_m7a.voisins,
		"sully_morland/M7A" : sully_morland_m7a.voisins,
		"jussieu/M7A" : jussieu_m7a.voisins,
		"place_monge/M7A" : place_monge_m7a.voisins,
		"censier_daubenton/M7A" : censier_daubenton_m7a.voisins,
		"les_gobelins/M7A" : les_gobelins_m7a.voisins,
		"place_d_italie/M7A" : place_d_italie_m7a.voisins,
		"tolbiac/M7A" : tolbiac_m7a.voisins,
		"maison_blanche/M7A" : maison_blanche_m7a.voisins,
		"le_kremlin_bicetre/M7A" : le_kremlin_bicetre_m7a.voisins,
		"villejuif_leo_lagrange/M7A" : villejuif_leo_lagrange_m7a.voisins,
		"villejuif_paul_vaillant_couturier/M7A" : villejuif_paul_vaillant_couturier_m7a.voisins,
		"villejuif_louis_aragon/M7A" : villejuif_louis_aragon_m7a.voisins,
		"la_courneuve_8_mai_1945/M7B" : la_courneuve_8_mai_1945_m7b.voisins,
		"fort_d_aubervilliers/M7B" : fort_d_aubervilliers_m7b.voisins,
		"aubervilliers_pantin_quatre_chemins/M7B" : aubervilliers_pantin_quatre_chemins_m7b.voisins,
		"porte_de_la_villette/M7B" : porte_de_la_villette_m7b.voisins,
		"corentin_cariou/M7B" : corentin_cariou_m7b.voisins,
		"crimee/M7B" : crimee_m7b.voisins,
		"riquet/M7B" : riquet_m7b.voisins,
		"stalingrad/M7B" : stalingrad_m7b.voisins,
		"louis_blanc/M7B" : louis_blanc_m7b.voisins,
		"chateau_landon/M7B" : chateau_landon_m7b.voisins,
		"gare_de_l_est/M7B" : gare_de_l_est_m7b.voisins,
		"poissonniere/M7B" : poissonniere_m7b.voisins,
		"cadet/M7B" : cadet_m7b.voisins,
		"le_peletier/M7B" : le_peletier_m7b.voisins,
		"chaussee_d_antin_la_fayette/M7B" : chaussee_d_antin_la_fayette_m7b.voisins,
		"opera/M7B" : opera_m7b.voisins,
		"pyramides/M7B" : pyramides_m7b.voisins,
		"palais_royal_musee_du_louvre/M7B" : palais_royal_musee_du_louvre_m7b.voisins,
		"pont_neuf/M7B" : pont_neuf_m7b.voisins,
		"chatelet/M7B" : chatelet_m7b.voisins,
		"pont_marie/M7B" : pont_marie_m7b.voisins,
		"sully_morland/M7B" : sully_morland_m7b.voisins,
		"jussieu/M7B" : jussieu_m7b.voisins,
		"place_monge/M7B" : place_monge_m7b.voisins,
		"censier_daubenton/M7B" : censier_daubenton_m7b.voisins,
		"les_gobelins/M7B" : les_gobelins_m7b.voisins,
		"place_d_italie/M7B" : place_d_italie_m7b.voisins,
		"tolbiac/M7B" : tolbiac_m7b.voisins,
		"maison_blanche/M7B" : maison_blanche_m7b.voisins,
		"porte_d_italie/M7B" : porte_d_italie_m7b.voisins,
		"porte_de_choisy/M7B" : porte_de_choisy_m7b.voisins,
		"porte_d_ivry/M7B" : porte_d_ivry_m7b.voisins,
		"pierre_et_marie_curie/M7B" : pierre_et_marie_curie_m7b.voisins,
		"mairie_d_ivry/M7B" : mairie_d_ivry_m7b.voisins,
		"louis_blanc/M7bisA" : louis_blanc_m7bisa.voisins,
		"jaures/M7bisA" : jaures_m7bisa.voisins,
		"bolivar/M7bisA" : bolivar_m7bisa.voisins,
		"buttes_chaumont/M7bisA" : buttes_chaumont_m7bisa.voisins,
		"botzaris/M7bisA" : botzaris_m7bisa.voisins,
		"place_des_fetes/M7bisA" : place_des_fetes_m7bisa.voisins,
		"pre_saint_gervais/M7bisA" : pre_saint_gervais_m7bisa.voisins,
		"louis_blanc/M7bisB" : louis_blanc_m7bisb.voisins,
		"jaures/M7bisB" : jaures_m7bisb.voisins,
		"bolivar/M7bisB" : bolivar_m7bisb.voisins,
		"buttes_chaumont/M7bisB" : buttes_chaumont_m7bisb.voisins,
		"botzaris/M7bisB" : botzaris_m7bisb.voisins,
		"danube/M7bisB" : danube_m7bisb.voisins,
		"pre_saint_gervais/M7bisB" : pre_saint_gervais_m7bisb.voisins,
		"balard/M8" : balard_m8.voisins,
		"lourmel/M8" : lourmel_m8.voisins,
		"boucicaut/M8" : boucicaut_m8.voisins,
		"felix_faure/M8" : felix_faure_m8.voisins,
		"commerce/M8" : commerce_m8.voisins,
		"la_motte_picquet_grenelle/M8" : la_motte_picquet_grenelle_m8.voisins,
		"ecole_militaire/M8" : ecole_militaire_m8.voisins,
		"la_tour_maubourg/M8" : la_tour_maubourg_m8.voisins,
		"invalides/M8" : invalides_m8.voisins,
		"concorde/M8" : concorde_m8.voisins,
		"madeleine/M8" : madeleine_m8.voisins,
		"opera/M8" : opera_m8.voisins,
		"richelieu_drouot/M8" : richelieu_drouot_m8.voisins,
		"grands_boulevards/M8" : grands_boulevards_m8.voisins,
		"bonne_nouvelle/M8" : bonne_nouvelle_m8.voisins,
		"strasbourg_saint_denis/M8" : strasbourg_saint_denis_m8.voisins,
		"republique/M8" : republique_m8.voisins,
		"filles_du_calvaire/M8" : filles_du_calvaire_m8.voisins,
		"saint_sebastien_froissart/M8" : saint_sebastien_froissart_m8.voisins,
		"chemin_vert/M8" : chemin_vert_m8.voisins,
		"bastille/M8" : bastille_m8.voisins,
		"ledru_rollin/M8" : ledru_rollin_m8.voisins,
		"faidherbe_chaligny/M8" : faidherbe_chaligny_m8.voisins,
		"reuilly_diderot/M8" : reuilly_diderot_m8.voisins,
		"montgallet/M8" : montgallet_m8.voisins,
		"daumesnil/M8" : daumesnil_m8.voisins,
		"michel_bizot/M8" : michel_bizot_m8.voisins,
		"porte_doree/M8" : porte_doree_m8.voisins,
		"porte_de_charenton/M8" : porte_de_charenton_m8.voisins,
		"liberte/M8" : liberte_m8.voisins,
		"charenton_ecoles/M8" : charenton_ecoles_m8.voisins,
		"ecole_veterinaire_de_maisons_alfort/M8" : ecole_veterinaire_de_maisons_alfort_m8.voisins,
		"maisons_alfort_stade/M8" : maisons_alfort_stade_m8.voisins,
		"maisons_alfort_les_juilliottes/M8" : maisons_alfort_les_juilliottes_m8.voisins,
		"creteil_l_echat/M8" : creteil_l_echat_m8.voisins,
		"creteil_universite/M8" : creteil_universite_m8.voisins,
		"creteil_prefecture/M8" : creteil_prefecture_m8.voisins,
		"pointe_du_lac/M8" : pointe_du_lac_m8.voisins,
		"pont_de_sevres/M9" : pont_de_sevres_m9.voisins,
		"billancourt/M9" : billancourt_m9.voisins,
		"marcel_sembat/M9" : marcel_sembat_m9.voisins,
		"porte_de_saint_cloud/M9" : porte_de_saint_cloud_m9.voisins,
		"exelmans/M9" : exelmans_m9.voisins,
		"michel_ange_molitor/M9" : michel_ange_molitor_m9.voisins,
		"michel_ange_auteuil/M9" : michel_ange_auteuil_m9.voisins,
		"jasmin/M9" : jasmin_m9.voisins,
		"ranelagh/M9" : ranelagh_m9.voisins,
		"la_muette/M9" : la_muette_m9.voisins,
		"rue_de_la_pompe/M9" : rue_de_la_pompe_m9.voisins,
		"trocadero/M9" : trocadero_m9.voisins,
		"iena/M9" : iena_m9.voisins,
		"alma_marceau/M9" : alma_marceau_m9.voisins,
		"franklin_d_roosevelt/M9" : franklin_d_roosevelt_m9.voisins,
		"saint_philippe_du_roule/M9" : saint_philippe_du_roule_m9.voisins,
		"miromesnil/M9" : miromesnil_m9.voisins,
		"saint_augustin/M9" : saint_augustin_m9.voisins,
		"havre_caumartin/M9" : havre_caumartin_m9.voisins,
		"chaussee_d_antin_la_fayette/M9" : chaussee_d_antin_la_fayette_m9.voisins,
		"richelieu_drouot/M9" : richelieu_drouot_m9.voisins,
		"grands_boulevards/M9" : grands_boulevards_m9.voisins,
		"bonne_nouvelle/M9" : bonne_nouvelle_m9.voisins,
		"strasbourg_saint_denis/M9" : strasbourg_saint_denis_m9.voisins,
		"republique/M9" : republique_m9.voisins,
		"oberkampf/M9" : oberkampf_m9.voisins,
		"saint_ambroise/M9" : saint_ambroise_m9.voisins,
		"voltaire/M9" : voltaire_m9.voisins,
		"charonne/M9" : charonne_m9.voisins,
		"rue_des_boulets/M9" : rue_des_boulets_m9.voisins,
		"nation/M9" : nation_m9.voisins,
		"buzenval/M9" : buzenval_m9.voisins,
		"maraichers/M9" : maraichers_m9.voisins,
		"porte_de_montreuil/M9" : porte_de_montreuil_m9.voisins,
		"robespierre/M9" : robespierre_m9.voisins,
		"croix_de_chavaux/M9" : croix_de_chavaux_m9.voisins,
		"mairie_de_montreuil/M9" : mairie_de_montreuil_m9.voisins,
		"boulogne_pont_de_saint_cloud/M10A" : boulogne_pont_de_saint_cloud_m10a.voisins,
		"boulogne_jean_jaures/M10A" : boulogne_jean_jaures_m10a.voisins,
		"michel_ange_molitor/M10A" : michel_ange_molitor_m10a.voisins,
		"chardon_lagache/M10A" : chardon_lagache_m10a.voisins,
		"mirabeau/M10A" : mirabeau_m10a.voisins,
		"javel_andre_citroen/M10A" : javel_andre_citroen_m10a.voisins,
		"charles_michels/M10A" : charles_michels_m10a.voisins,
		"avenue_emile_zola/M10A" : avenue_emile_zola_m10a.voisins,
		"la_motte_picquet_grenelle/M10A" : la_motte_picquet_grenelle_m10a.voisins,
		"segur/M10A" : segur_m10a.voisins,
		"duroc/M10A" : duroc_m10a.voisins,
		"vaneau/M10A" : vaneau_m10a.voisins,
		"sevres_babylone/M10A" : sevres_babylone_m10a.voisins,
		"mabillon/M10A" : mabillon_m10a.voisins,
		"odeon/M10A" : odeon_m10a.voisins,
		"cluny_la_sorbonne/M10A" : cluny_la_sorbonne_m10a.voisins,
		"maubert_mutualite/M10A" : maubert_mutualite_m10a.voisins,
		"cardinal_lemoine/M10A" : cardinal_lemoine_m10a.voisins,
		"jussieu/M10A" : jussieu_m10a.voisins,
		"gare_d_austerlitz/M10A" : gare_d_austerlitz_m10a.voisins,
		"boulogne_pont_de_saint_cloud/M10B" : boulogne_pont_de_saint_cloud_m10b.voisins,
		"boulogne_jean_jaures/M10B" : boulogne_jean_jaures_m10b.voisins,
		"porte_d_auteuil/M10B" : porte_d_auteuil_m10b.voisins,
		"michel_ange_auteuil/M10B" : michel_ange_auteuil_m10b.voisins,
		"eglise_d_auteuil/M10B" : eglise_d_auteuil_m10b.voisins,
		"javel_andre_citroen/M10B" : javel_andre_citroen_m10b.voisins,
		"charles_michels/M10B" : charles_michels_m10b.voisins,
		"avenue_emile_zola/M10B" : avenue_emile_zola_m10b.voisins,
		"la_motte_picquet_grenelle/M10B" : la_motte_picquet_grenelle_m10b.voisins,
		"segur/M10B" : segur_m10b.voisins,
		"duroc/M10B" : duroc_m10b.voisins,
		"vaneau/M10B" : vaneau_m10b.voisins,
		"sevres_babylone/M10B" : sevres_babylone_m10b.voisins,
		"mabillon/M10B" : mabillon_m10b.voisins,
		"odeon/M10B" : odeon_m10b.voisins,
		"cluny_la_sorbonne/M10B" : cluny_la_sorbonne_m10b.voisins,
		"maubert_mutualite/M10B" : maubert_mutualite_m10b.voisins,
		"cardinal_lemoine/M10B" : cardinal_lemoine_m10b.voisins,
		"jussieu/M10B" : jussieu_m10b.voisins,
		"gare_d_austerlitz/M10B" : gare_d_austerlitz_m10b.voisins,
		"chatelet/M11" : chatelet_m11.voisins,
		"hotel_de_ville/M11" : hotel_de_ville_m11.voisins,
		"rambuteau/M11" : rambuteau_m11.voisins,
		"arts_et_metiers/M11" : arts_et_metiers_m11.voisins,
		"republique/M11" : republique_m11.voisins,
		"goncourt/M11" : goncourt_m11.voisins,
		"belleville/M11" : belleville_m11.voisins,
		"pyrenees/M11" : pyrenees_m11.voisins,
		"jourdain/M11" : jourdain_m11.voisins,
		"place_des_fetes/M11" : place_des_fetes_m11.voisins,
		"telegraphe/M11" : telegraphe_m11.voisins,
		"porte_des_lilas/M11" : porte_des_lilas_m11.voisins,
		"mairie_des_lilas/M11" : mairie_des_lilas_m11.voisins,
		"front_populaire/M12" : front_populaire_m12.voisins,
		"porte_de_la_chapelle/M12" : porte_de_la_chapelle_m12.voisins,
		"marx_dormoy/M12" : marx_dormoy_m12.voisins,
		"marcadet_poissonniers/M12" : marcadet_poissonniers_m12.voisins,
		"jules_joffrin/M12" : jules_joffrin_m12.voisins,
		"lamarck_caulaincourt/M12" : lamarck_caulaincourt_m12.voisins,
		"abbesses/M12" : abbesses_m12.voisins,
		"pigalle/M12" : pigalle_m12.voisins,
		"saint_georges/M12" : saint_georges_m12.voisins,
		"notre_dame_de_lorette/M12" : notre_dame_de_lorette_m12.voisins,
		"trinite_d_estienne_d_orves/M12" : trinite_d_estienne_d_orves_m12.voisins,
		"saint_lazare/M12" : saint_lazare_m12.voisins,
		"madeleine/M12" : madeleine_m12.voisins,
		"concorde/M12" : concorde_m12.voisins,
		"assemblee_nationale/M12" : assemblee_nationale_m12.voisins,
		"solferino/M12" : solferino_m12.voisins,
		"rue_du_bac/M12" : rue_du_bac_m12.voisins,
		"sevres_babylone/M12" : sevres_babylone_m12.voisins,
		"rennes/M12" : rennes_m12.voisins,
		"notre_dame_des_champs/M12" : notre_dame_des_champs_m12.voisins,
		"montparnasse_bienvenue/M12" : montparnasse_bienvenue_m12.voisins,
		"falguiere/M12" : falguiere_m12.voisins,
		"pasteur/M12" : pasteur_m12.voisins,
		"volontaires/M12" : volontaires_m12.voisins,
		"vaugirard/M12" : vaugirard_m12.voisins,
		"convention/M12" : convention_m12.voisins,
		"porte_de_versailles/M12" : porte_de_versailles_m12.voisins,
		"corentin_celton/M12" : corentin_celton_m12.voisins,
		"mairie_d_issy/M12" : mairie_d_issy_m12.voisins,
		"asnieres_gennevilliers_les_courtilles/M13A" : asnieres_gennevilliers_les_courtilles_m13a.voisins,
		"les_agnettes/M13A" : les_agnettes_m13a.voisins,
		"gabriel_peri/M13A" : gabriel_peri_m13a.voisins,
		"mairie_de_clichy/M13A" : mairie_de_clichy_m13a.voisins,
		"porte_de_clichy/M13A" : porte_de_clichy_m13a.voisins,
		"brochant/M13A" : brochant_m13a.voisins,
		"la_fourche/M13A" : la_fourche_m13a.voisins,
		"place_de_clichy/M13A" : place_de_clichy_m13a.voisins,
		"liege/M13A" : liege_m13a.voisins,
		"saint_lazare/M13A" : saint_lazare_m13a.voisins,
		"miromesnil/M13A" : miromesnil_m13a.voisins,
		"champs_elysees_clemenceau/M13A" : champs_elysees_clemenceau_m13a.voisins,
		"invalides/M13A" : invalides_m13a.voisins,
		"varenne/M13A" : varenne_m13a.voisins,
		"saint_francois_xavier/M13A" : saint_francois_xavier_m13a.voisins,
		"duroc/M13A" : duroc_m13a.voisins,
		"montparnasse_bienvenue/M13A" : montparnasse_bienvenue_m13a.voisins,
		"gaite/M13A" : gaite_m13a.voisins,
		"pernety/M13A" : pernety_m13a.voisins,
		"plaisance/M13A" : plaisance_m13a.voisins,
		"porte_de_vanves/M13A" : porte_de_vanves_m13a.voisins,
		"malakoff_plateau_de_vanves/M13A" : malakoff_plateau_de_vanves_m13a.voisins,
		"malakoff_rue_etienne_dolet/M13A" : malakoff_rue_etienne_dolet_m13a.voisins,
		"chatillon_montrouge/M13A" : chatillon_montrouge_m13a.voisins,
		"saint_denis_universite/M13B" : saint_denis_universite_m13b.voisins,
		"basilique_de_saint_denis/M13B" : basilique_de_saint_denis_m13b.voisins,
		"saint_denis_porte_de_paris/M13B" : saint_denis_porte_de_paris_m13b.voisins,
		"carrefour_pleyel/M13B" : carrefour_pleyel_m13b.voisins,
		"mairie_de_saint_ouen/M13B" : mairie_de_saint_ouen_m13b.voisins,
		"garibaldi/M13B" : garibaldi_m13b.voisins,
		"porte_de_saint_ouen/M13B" : porte_de_saint_ouen_m13b.voisins,
		"guy_moquet/M13B" : guy_moquet_m13b.voisins,
		"la_fourche/M13B" : la_fourche_m13b.voisins,
		"place_de_clichy/M13B" : place_de_clichy_m13b.voisins,
		"liege/M13B" : liege_m13b.voisins,
		"saint_lazare/M13B" : saint_lazare_m13b.voisins,
		"miromesnil/M13B" : miromesnil_m13b.voisins,
		"champs_elysees_clemenceau/M13B" : champs_elysees_clemenceau_m13b.voisins,
		"invalides/M13B" : invalides_m13b.voisins,
		"varenne/M13B" : varenne_m13b.voisins,
		"saint_francois_xavier/M13B" : saint_francois_xavier_m13b.voisins,
		"duroc/M13B" : duroc_m13b.voisins,
		"montparnasse_bienvenue/M13B" : montparnasse_bienvenue_m13b.voisins,
		"gaite/M13B" : gaite_m13b.voisins,
		"pernety/M13B" : pernety_m13b.voisins,
		"plaisance/M13B" : plaisance_m13b.voisins,
		"porte_de_vanves/M13B" : porte_de_vanves_m13b.voisins,
		"malakoff_plateau_de_vanves/M13B" : malakoff_plateau_de_vanves_m13b.voisins,
		"malakoff_rue_etienne_dolet/M13B" : malakoff_rue_etienne_dolet_m13b.voisins,
		"chatillon_montrouge/M13B" : chatillon_montrouge_m13b.voisins,
		"saint_lazare/M14" : saint_lazare_m14.voisins,
		"madeleine/M14" : madeleine_m14.voisins,
		"pyramides/M14" : pyramides_m14.voisins,
		"chatelet/M14" : chatelet_m14.voisins,
		"gare_de_lyon/M14" : gare_de_lyon_m14.voisins,
		"bercy/M14" : bercy_m14.voisins,
		"cour_saint_emilion/M14" : cour_saint_emilion_m14.voisins,
		"bibliotheque_francois_mitterrand/M14" : bibliotheque_francois_mitterrand_m14.voisins,
		"olympiades/M14" : olympiades_m14.voisins,
	};
	return function(){
		return graphe;
	}
}

// FONCTIONS

var direction = function(ligne, depart, suivant){
	var lig = [];
	switch(ligne){
		case "M1" : lig = m1.stations; break;
		case "M2" : lig = m2.stations; break;
		case "M3" : lig = m3.stations; break;
		case "M3bis" : lig = m3bis.stations; break;
		case "M4" : lig = m4.stations; break;
		case "M5" : lig = m5.stations; break;
		case "M6" : lig = m6.stations; break;
		case "M7A" : lig = m7a.stations; break;
		case "M7B" : lig = m7b.stations; break;
		case "M7bisA" : lig = m7bisa.stations; break;
		case "M7bisB" : lig = m7bisb.stations; break;
		case "M8" : lig = m8.stations; break;
		case "M9" : lig = m9.stations; break;
		case "M10A" : lig = m10a.stations; break;
		case "M10B" : lig = m10b.stations; break;
		case "M11" : lig = m11.stations; break;
		case "M12" : lig = m12.stations; break;
		case "M13A" : lig = m13a.stations; break;
		case "M13B" : lig = m13b.stations; break;
		case "M14" : lig = m14.stations; break;
	}
	var dep = lig.indexOf(depart);
	var sui = lig.indexOf(suivant);
	var res = dep - sui;
	if(res < 0)
		return lig[lig.length-1];
	else if(res > 0)
		return lig[0];
	else
		return depart;
}


var nomToObject = function(nom){
	for (i in listeStations){
		if(listeStations[i].nom.toLowerCase() == nom.toLowerCase()){
			return listeStations[i];
		}
	}
	return null;
}

var idToObject = function(id){
	for (i in listeStations){
		if(listeStations[i].identifiant == id){
			return listeStations[i];
		}
	}
	return null;
}

var stationToLigne = function(station){
	for (i in listeLignes){
		if(listeLignes[i].nom == station.ligne){
			return listeLignes[i];
		}
	}
	return null;
}

var stringToObject = function(recherche){

	var stations = rechercheStations(recherche);
	return (stations.length > 0 ? stations[0] : null);
}

var rechercheStations = function(recherche){
	stations = []
	for (i in listeStations){
		index = simplifier(listeStations[i].nom.toLowerCase()).indexOf(simplifier(recherche.toLowerCase()));
		if(index >= 0){
			stations.push([index,listeStations[i]]);
		}
	}
	stations.sort(function(a,b){return (a[0] != b[0] ? a[0] >= b[0] : a[1].nom >= b[1].nom)});
	
	sta = []
	for(i in stations){
		sta.push(stations[i][1]);
	}
	return sta;	
}

var simplifier = function(nom){
	str = nom;
	str = str.replace(/[ç]/,"c");
	str = str.replace(/[éèêë]/,"e");
	str = str.replace(/[ô]/,"o");
	str = str.replace(/[â]/,"a");
	str = str.replace(/[ùü]/,"u");
	str = str.replace(/[ïî]/,"i");
	str = str.replace(/[-']/," ");
	str = str.replace(/[ ]/,"");
	return str;
}

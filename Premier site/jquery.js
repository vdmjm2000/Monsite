/* !
 * Bibliothèque JavaScript jQuery v3.6.0
 * https://jquery.com/
 *
 * Inclut Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation et autres contributeurs
 * Publié sous la licence MIT
 * https://jquery.org/license
 *
 * Date : 2021-03-02T17:08Z
 */
( fonction( global, usine ) {

	"utiliser strictement" ;

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// Pour les environnements de type CommonJS et CommonJS où une "fenêtre" appropriée
		// est présent, exécutez la fabrique et récupérez jQuery.
		// Pour les environnements qui n'ont pas de `fenêtre` avec un `document`
		// (comme Node.js), expose une usine en tant que module.exports.
		// Cela accentue la nécessité de la création d'une véritable `fenêtre`.
		// par exemple var jQuery = require("jquery")(window);
		// Voir le ticket #14549 pour plus d'informations.
		module.exports = global.document ?
			usine( global, vrai ) :
			fonction( w ) {
				si ( !w.document ) {
					throw new Error( "jQuery requiert une fenêtre avec un document" );
				}
				retour usine( w );
			} ;
	} autre {
		usine (globale);
	}

// Passez ceci si la fenêtre n'est pas encore définie
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Bord <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lève des exceptions lorsque du code non strict (par exemple, ASP.NET 4.5) accède au mode strict
// arguments.appelé.appelant (trac-13335). Mais à partir de jQuery 3.0 (2016), le mode strict devrait être commun
// suffisamment pour que toutes ces tentatives soient gardées dans un bloc try.
"utiliser strictement" ;

var arr = [] ;

var getProto = Object.getPrototypeOf ;

var tranche = arr.tranche ;

var plat = arr.plat ? fonction (tableau) {
	return arr.flat.call( array );
} : fonction (tableau) {
	return arr.concat.apply( [], tableau );
} ;


var push = arr.push;

var indexOf = arr.indexOf;

var classe2type = {} ;

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty ;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var prise en charge = {} ;

var estFonction = fonction estFonction( obj ) {

		// Prise en charge : Chrome <=57, Firefox <=52
		// Dans certains navigateurs, typeof renvoie "function" pour les éléments HTML <object>
		// (c'est-à-dire, `typeof document.createElement( "object" ) === "function"`).
		// Nous ne voulons pas classer *n'importe* nœud DOM en tant que fonction.
		// Prise en charge : QtWeb <=3.8.5, WebKit <=534.34, outil wkhtmltopdf <=0.12.5
		// De plus pour l'ancien WebKit, typeof renvoie "function" pour les collections HTML
		// (par exemple, `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "fonction" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "fonction" ;
	} ;


var estFenêtre = function estFenêtre( obj ) {
		return obj != null && obj === obj.window;
	} ;


var document = fenêtre.document;



	var AttributsScript préservés = {
		type : vrai,
		src : vrai,
		nonce : vrai,
		aucunModule : vrai
	} ;

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var je, val,
			script = doc.createElement( "script" );

		script.text = code;
		si ( nœud ) {
			for ( i in preserveScriptAttributes ) {

				// Prise en charge : Firefox 64+, Edge 18+
				// Certains navigateurs ne prennent pas en charge la propriété "nonce" sur les scripts.
				// D'un autre côté, il ne suffit pas d'utiliser `getAttribute` car
				// l'attribut `nonce` est réinitialisé à une chaîne vide chaque fois qu'il
				// devient connecté au contexte de navigation.
				// Voir https://github.com/whatwg/html/issues/2369
				// Voir https://html.spec.whatwg.org/#nonce-attributes
				// La vérification `node.getAttribute` a été ajoutée pour des raisons de
				// `jQuery.globalEval` afin qu'il puisse simuler un nœud contenant nonce
				// via un objet.
				val = nœud[ je ] || node.getAttribute && node.getAttribute( i );
				si (val) {
					script.setAttribute( je, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	si ( obj == null ) {
		retourner obj + "" ;
	}

	// Support : Android <=2.3 uniquement (RegExp fonctionnel)
	return typeof obj === "objet" || type d'obj === "fonction" ?
		class2type[ toString.call( obj ) ] || "objet" :
		type d'obj ;
}
/* Symbole global */
// Définir ce global dans .eslintrc.json créerait un danger d'utiliser le global
// non surveillé à un autre endroit, il semble plus sûr de définir global uniquement pour ce module



var
	version = "3.6.0",

	// Définit une copie locale de jQuery
	jQuery = fonction (sélecteur, contexte) {

		// L'objet jQuery n'est en fait que le constructeur init 'amélioré'
		// Besoin d'init si jQuery est appelé (permettez simplement à l'erreur d'être générée si elle n'est pas incluse)
		return new jQuery.fn.init( selector, context );
	} ;

jQuery.fn = jQuery.prototype = {

	// La version actuelle de jQuery utilisée
	jquery : version,

	constructeur : jQuery,

	// La longueur par défaut d'un objet jQuery est 0
	longueur : 0,

	versTableau : fonction() {
		return slice.call( this );
	},

	// Récupère le Nième élément dans l'ensemble d'éléments correspondant OU
	// Récupère l'ensemble des éléments correspondants sous la forme d'un tableau propre
	obtenir : fonction (num) {

		// Retourne tous les éléments dans un tableau propre
		si (num == nul) {
			return slice.call( this );
		}

		// Renvoie un seul élément de l'ensemble
		nombre de retour < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Prend un tableau d'éléments et le pousse sur la pile
	// (renvoie le nouvel ensemble d'éléments correspondants)
	pushStack : fonction (éléments) {

		// Construire un nouvel ensemble d'éléments correspondants jQuery
		var ret = jQuery.merge( this.constructor(), elems );

		// Ajoute l'ancien objet sur la pile (comme référence)
		ret.prevObject = this ;

		// Renvoie l'ensemble d'éléments nouvellement formé
		retour ret;
	},

	// Exécute un rappel pour chaque élément de l'ensemble correspondant.
	chacun : fonction (rappel) {
		return jQuery.each( this, callback );
	},

	carte : fonction (rappel) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	tranche : fonction() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	d'abord : fonction() {
		retourne this.eq( 0 );
	},

	dernier : fonction() {
		return this.eq( -1 );
	},

	pair : fonction() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			retour ( je + 1 ) % 2;
		} ) );
	},

	impair : fonction() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			renvoie je % 2;
		} ) );
	},

	eq : fonction( je ) {
		var len = this.length,
			j = +i + ( je < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	fin : fonction() {
		renvoie this.prevObject || this.constructor();
	},

	// Pour usage interne uniquement.
	// Se comporte comme une méthode Array, pas comme une méthode jQuery.
	poussez, poussez,
	trier : arr.trier,
	splice : arr.splice
} ;

jQuery.extend = jQuery.fn.extend = fonction() {
	options var, nom, src, copie, copyIsArray, clone,
		cible = arguments[ 0 ] || {},
		je = 1,
		longueur = arguments.longueur,
		profond = faux ;

	// Gérer une situation de copie profonde
	if ( typeof cible === "booléen" ) {
		profond = cible ;

		// Ignore le booléen et la cible
		cible = arguments[ je ] || {} ;
		je++ ;
	}

	// Gère la casse lorsque la cible est une chaîne ou quelque chose (possible en copie profonde)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		cible = {} ;
	}

	// Étend jQuery lui-même si un seul argument est passé
	si ( je === longueur ) {
		cible = ceci ;
		je--;
	}

	pour (; je < longueur; je++ ) {

		// Ne traite que les valeurs non nulles/indéfinies
		si ( ( options = arguments[ je ] ) != null ) {

			// Étendre l'objet de base
			pour ( nom dans les options ) {
				copie = options[ nom ] ;

				// Empêcher la pollution d'Objet.prototype
				// Empêcher la boucle sans fin
				if ( nom === "__proto__" || cible === copier ) {
					Continuez;
				}

				// Recurse si nous fusionnons des objets simples ou des tableaux
				if ( profonde && copie && ( jQuery.isPlainObject( copie ) ||
					( copyIsArray = Array.isArray( copie ) ) ) ) {
					src = cible[ nom ] ;

					// Garantit le bon type pour la valeur source
					if ( copyIsArray && !Array.isArray( src ) ) {
						cloner = [] ;
					} sinon si ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						cloner = {} ;
					} autre {
						clone = src ;
					}
					copyIsArray = faux ;

					// Ne déplacez jamais les objets d'origine, clonez-les
					cible[ nom ] = jQuery.extend( profondeur, clone, copie );

				// N'apporte pas de valeurs indéfinies
				} sinon si ( copier !== non défini ) {
					cible[ nom ] = copier ;
				}
			}
		}
	}

	// Retourne l'objet modifié
	cible de retour ;
} ;

jQuery.extend( {

	// Unique pour chaque copie de jQuery sur la page
	expando : "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Supposons que jQuery est prêt sans le module prêt
	est prêt : vrai,

	erreur : fonction( msg ) {
		lancer une nouvelle erreur ( msg );
	},

	noop: fonction() {},

	estObjetPlain : fonction( obj ) {
		var proto, Ctor ;

		// Détecter les négatifs évidents
		// Utilisez toString au lieu de jQuery.type pour intercepter les objets hôtes
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			retourner faux ;
		}

		proto = getProto( obj );

		// Les objets sans prototype (par exemple, `Object.create( null )`) sont simples
		si ( !proto ) {
			retourner vrai ;
		}

		// Les objets avec prototype sont clairs ssi ils ont été construits par une fonction globale d'objet
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "fonction" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject : fonction( obj ) {
		nom de la variable ;

		pour ( nom dans obj ) {
			retourner faux ;
		}
		retourner vrai ;
	},

	// Évalue un script dans un contexte fourni ; retombe dans le global
	// si non spécifié.
	globalEval : fonction( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	chacun : function( obj, callback ) {
		var longueur, je = 0 ;

		if ( isArrayLike( obj ) ) {
			longueur = obj.longueur ;
			pour (; je < longueur; je++ ) {
				if ( callback.call( obj[ je ], je, obj[ je ] ) === faux ) {
					Pause;
				}
			}
		} autre {
			pour ( je dans obj ) {
				if ( callback.call( obj[ je ], je, obj[ je ] ) === faux ) {
					Pause;
				}
			}
		}

		retourner obj ;
	},

	// les résultats sont à usage interne uniquement
	makeArray: function( arr, résultats ) {
		var ret = résultats || [] ;

		si ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "chaîne" ?
						[ arr ] : arr
				);
			} autre {
				push.call( ret, arr );
			}
		}

		retour ret;
	},

	inArray: function( elem, arr, je ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Prise en charge : Android <= 4.0 uniquement, PhantomJS 1 uniquement
	// push.apply(_, arraylike) lance sur l'ancien WebKit
	fusionner : fonction (premier, deuxième) {
		var len = +seconde.longueur,
			j = 0,
			i = première.longueur ;

		pour ( ; j < len; j++ ) {
			premier[ i++ ] = deuxième[ j ] ;
		}

		première.longueur = i ;

		revenir en premier ;
	},

	grep : fonction (éléments, rappel, inversion) {
		var callbackInverse,
			correspondances = [],
			je = 0,
			longueur = éléments.longueur,
			callbackAttend = !inversé;

		// Parcourt le tableau en ne sauvegardant que les éléments
		// qui passe la fonction validateur
		pour (; je < longueur; je++ ) {
			callbackInverse = !callback( elems[ je ], je );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		matchs retour;
	},

	// arg est à usage interne uniquement
	map: function( elems, callback, arg ) {
		var longueur, valeur,
			je = 0,
			ret = [] ;

		// Parcourez le tableau, traduisant chacun des éléments en leurs nouvelles valeurs
		if ( isArrayLike( elems ) ) {
			longueur = elems.longueur ;
			pour (; je < longueur; je++ ) {
				value = callback( elems[ je ], je, arg );

				si ( valeur != null ) {
					ret.push( valeur );
				}
			}

		// Parcourt toutes les touches de l'objet,
		} autre {
			pour ( je en éléments ) {
				value = callback( elems[ je ], je, arg );

				si ( valeur != null ) {
					ret.push( valeur );
				}
			}
		}

		// Aplatir tous les tableaux imbriqués
		return flat( ret );
	},

	// Un compteur GUID global pour les objets
	guide : 1,

	// jQuery.support n'est pas utilisé dans Core mais d'autres projets attachent leur
	// propriétés pour qu'il existe.
	soutien : soutien
} );

if ( typeof Symbol === "fonction" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Remplir la carte class2type
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	fonction( _i, nom ) {
		class2type[ "[objet " + nom + "]" ] = nom.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support : réel iOS 8.2 uniquement (non reproductible en simulateur)
	// Vérification `in` utilisée pour empêcher l'erreur JIT (gh-2145)
	// hasOwn n'est pas utilisé ici en raison de faux négatifs
	// concernant la longueur de la Nodelist dans IE
	var longueur = !!obj && "longueur" dans obj && obj.longueur,
		type = toType( obj );

	si ( estFonction( obj ) || estFenêtre( obj ) ) {
		retourner faux ;
	}

	type de retour === "tableau" || longueur === 0 ||
		typeof longueur === "nombre" && longueur > 0 && ( longueur - 1 ) dans obj;
}
var grésillement =
/* !
 * Moteur de sélection CSS Sizzle v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation et autres contributeurs
 * Publié sous la licence MIT
 * https://js.fondation/
 *
 * Date : 2021-02-16
 */
( fonction ( fenêtre ) {
var je,
	Support,
	expr,
	getText,
	estXML,
	tokeniser,
	compiler,
	sélectionner,
	OutermostContext,
	sortInput,
	aDuplique,

	// Variables locales du document
	setDocument,
	document,
	docElem,
	documentEstHTML,
	rbuggyQSA,
	rbuggyMatchs,
	allumettes,
	contient,

	// Données spécifiques à l'instance
	expando = "grésiller" + 1 * nouvelle Date(),
	preferedDoc = window.document,
	dirruns = 0,
	fait = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	triOrdre = fonction( a, b ) {
		si ( une === b ) {
			aDuplique = vrai;
		}
		renvoie 0 ;
	},

	// Méthodes d'instance
	aOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	tranche = arr.tranche,

	// Utilisez un indexOf simplifié car il est plus rapide que le natif
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = fonction( liste, elem ) {
		var je = 0,
			len = liste.longueur ;
		pour (; je < longueur; je++ ) {
			si ( liste[ je ] === élém ) {
				retourner je ;
			}
		}
		retour -1 ;
	},

	booléens = "vérifié|sélectionné|asynchrone|autofocus|lecture automatique|contrôles|différer|désactivé|caché|" +
		"ismap|boucle|multiple|ouvert|lecture seule|obligatoire|étendue",

	// Expressions régulières

	// http://www.w3.org/TR/css3-selectors/#whitespace
	espace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifiant = "(?:\\\\[\\da-fA-F]{1,6}" + espace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Sélecteurs d'attributs : http://www.w3.org/TR/selectors/#attribute-selectors
	attributs = "\\[" + espace + "*(" + identifiant + ")(?:" + espace +

		// Opérateur (capture 2)
		"*([*^$|!~]?=)" + espace +

		// "Les valeurs des attributs doivent être des identifiants CSS [capture 5]
		// ou chaînes [capture 3 ou capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"] )*)\"|(" + identifiant + "))|)" +
		espace + "*\\]",

	pseudos = ":(" + identifiant + ")(?:\\((" +

		// Pour réduire le nombre de sélecteurs nécessitant une tokenisation dans le préFiltre, préférez les arguments :
		// 1. entre guillemets (capture 3 ; capture 4 ou capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*) \")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributs + ")*)|" +

		// 3. autre chose (capture 2)
		".*" +
		")\\)|)",

	// Espace blanc de début et de fin non échappé, capturant certains caractères non blancs précédant ce dernier
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + espace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		espace + "+$", "g" ),

	rcomma = new RegExp( "^" + espace + "*," + espace + "*" ),
	rcombinators = new RegExp( "^" + espace + "*([>+~]|" + espace + ")" + espace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifiant + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifiant + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifiant + ")" ),
		"TAG": new RegExp( "^(" + identifiant + "|[*])" ),
		"ATTR": nouvelle RegExp( "^" + attributs ),
		"PSEUDO": nouvelle RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|ntième|ntième-dernier)-(child|of-type)(?:\\(" +
			espace + "*(pair|impair|(([+-]|)(\\d*)n|)" + espace + "*(?:([+-]|)" +
			espace + "*(\\d+)|))" + espace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booléens + ")$", "i" ),

		// A utiliser dans les bibliothèques implémentant .is()
		// Nous l'utilisons pour la correspondance POS dans `select`
		"needsContext": new RegExp( "^" + espace +
			"*[>+~]|:(pair|impair|eq|gt|lt|ntième|premier|dernier)(?:\\(" + espace +
			"*((?:-\\d)?\\d*)" + espace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|zonetexte|bouton)$/i,
	rheader = /^h\d$/i,

	rnatif = /^[^{]+\{\s*\[natif \w/,

	// Sélecteurs d'ID ou de TAG ou de CLASS facilement analysables/récupérables
	rExprrapide = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	frère = /[+~]/,

	// échappements CSS
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + espace + "?|\\\\([^\\r\\n\\f])" , "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		retourner nonHex ?

			// Supprime le préfixe antislash d'une séquence d'échappement non hexadécimale
			nonHex :

			// Remplace une séquence d'échappement hexadécimale par le point de code Unicode encodé
			// Prise en charge : Internet Explorer <=11+
			// Pour les valeurs en dehors du plan multilingue de base (BMP), construisez manuellement un
			// paire de substitution
			élevé < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( haut >> 10 | 0xD800, haut & 0x3FF | 0xDC00 );
	},

	// Sérialisation de chaîne CSS/identifiant
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		si ( asCodePoint ) {

			// U+0000 NULL devient U+FFFD CARACTERE DE REMPLACEMENT
			si ( ch === "\0" ) {
				retourne "\uFFFD" ;
			}

			// Les caractères de contrôle et (selon la position) les nombres sont échappés en tant que points de code
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " " ;
		}

		// D'autres caractères ASCII potentiellement spéciaux sont échappés par une barre oblique inverse
		retourne "\\" + ch ;
	},

	// Utilisé pour les iframes
	// Voir setDocument()
	// La suppression du wrapper de la fonction provoque un "Permission Denied"
	// erreur dans IE
	déchargerHandler = fonction() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		fonction (élément) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset" ;
		},
		{ répertoire : "parentNode", suivant : "légende" }
	);

// Optimiser pour push.apply( _, NodeList )
essayer {
	push.apply(
		( arr = slice.call( preferDoc.childNodes ) ),
		preferedDoc.childNodes
	);

	// Prise en charge : Android<4.0
	// Détecte l'échec silencieux de push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferedDoc.childNodes.length ].nodeType ;
} attraper ( e ) {
	push = { appliquer : arr.longueur ?

		// Tirez parti de la tranche si possible
		fonction( cible, els ) {
			pushNative.apply( cible, slice.call( els ) );
		} :

		// Prise en charge : IE<9
		// Sinon ajouter directement
		fonction( cible, els ) {
			var j = cible.longueur,
				je = 0 ;

			// Impossible de faire confiance à NodeList.length
			tandis que ( ( cible[ j++ ] = els[ i++ ] ) ) {}
			cible.longueur = j - 1 ;
		}
	} ;
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, correspondance, groupes, newSelector,
		newContext = contexte && context.ownerDocument,

		// nodeType vaut 9 par défaut, puisque context vaut document par défaut
		nodeType = contexte ? context.nodeType : 9;

	résultats = résultats || [] ;

	// Retour anticipé à partir d'appels avec un sélecteur ou un contexte invalide
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		retourner les résultats ;
	}

	// Essayez de raccourcir les opérations de recherche (par opposition aux filtres) dans les documents HTML
	si ( ! graine ) {
		setDocument(contexte);
		contexte = contexte || document;

		si ( documentEstHTML ) {

			// Si le sélecteur est suffisamment simple, essayez d'utiliser une méthode DOM "get*By*"
			// (à l'exception du contexte DocumentFragment, où les méthodes n'existent pas)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// Sélecteur d'identifiant
				si ( ( m = match[ 1 ] ) ) {

					// Contexte du document
					si ( nodeType === 9 ) {
						si ( ( elem = context.getElementById( m ) ) ) {

							// Prise en charge : IE, Opera, Webkit
							// TODO : identifier les versions
							// getElementById peut faire correspondre les éléments par leur nom au lieu de leur ID
							si ( elem.id === m ) {
								résultats.push( elem );
								retourner les résultats ;
							}
						} autre {
							retourner les résultats ;
						}

					// Contexte de l'élément
					} autre {

						// Prise en charge : IE, Opera, Webkit
						// TODO : identifier les versions
						// getElementById peut faire correspondre les éléments par leur nom au lieu de leur ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contient (contexte, élément) &&
							elem.id === m ) {

							résultats.push( elem );
							retourner les résultats ;
						}
					}

				// Sélecteur de type
				} sinon si ( match[ 2 ] ) {
					push.apply( résultats, context.getElementsByTagName( selector ) );
					retourner les résultats ;

				// Sélecteur de classe
				} sinon si ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					contexte.getElementsByClassName ) {

					push.apply( résultats, context.getElementsByClassName( m ) );
					retourner les résultats ;
				}
			}

			// Profitez de querySelectorAll
			si ( support.qsa &&
				!nonnativeSelectorCache[ sélecteur + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( sélecteur ) ) &&

				// Prise en charge : IE 8 uniquement
				// Exclure les éléments de l'objet
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				nouveauSélecteur = sélecteur ;
				nouveauContexte = contexte ;

				// qSA considère les éléments en dehors d'une racine de portée lors de l'évaluation de l'enfant ou
				// combinateurs descendants, ce qui n'est pas ce que nous voulons.
				// Dans de tels cas, nous contournons le comportement en préfixant chaque sélecteur dans le
				// liste avec un sélecteur d'ID référençant le contexte de portée.
				// La technique doit également être utilisée lorsqu'un combinateur principal est utilisé
				// en tant que tels, les sélecteurs ne sont pas reconnus par querySelectorAll.
				// Merci à Andrew Dupont pour cette technique.
				si ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Développer le contexte pour les sélecteurs frères
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						le contexte;

					// Nous pouvons utiliser :scope au lieu de l'ID hack si le navigateur
					// le prend en charge & si nous ne modifions pas le contexte.
					if ( nouveauContexte !== contexte || !support.scope ) {

						// Capturez l'ID de contexte, en le définissant d'abord si nécessaire
						si ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} autre {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Préfixe chaque sélecteur dans la liste
					groupes = tokenize( sélecteur );
					i = groupes.longueur ;
					alors que je-- ) {
						groupes[ je ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groupes[ i ] );
					}
					nouveauSélecteur = groupes.join( "," );
				}

				essayer {
					push.apply( résultats,
						newContext.querySelectorAll( nouveauSelecteur )
					);
					retourner les résultats ;
				} capture ( erreur qsa ) {
					nonnativeSelectorCache( selector, true );
				} finalement {
					if (nid === expando) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// Tous les autres
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Créer des caches clé-valeur de taille limitée
 * @returns {function(string, object)} Renvoie les données de l'objet après les avoir stockées sur lui-même avec
 * nom de la propriété la chaîne (avec un suffixe d'espace) et (si le cache est plus grand que Expr.cacheLength)
 * suppression de l'entrée la plus ancienne
 */
function créerCache() {
	var clés = [] ;

	fonction cache( clé, valeur ) {

		// Utilisez (touche + " ") pour éviter les collisions avec les propriétés natives du prototype (voir le problème n° 157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Ne conserver que les entrées les plus récentes
			supprimer le cache[keys.shift()] ;
		}
		return ( cache[ clé + " " ] = valeur );
	}
	cache de retour ;
}

/**
 * Marquer une fonction pour une utilisation spéciale par Sizzle
 * @param {Fonction} fn La fonction à marquer
 */
fonction marqueFonction( fn ) {
	fn[ expando ] = vrai ;
	retour fn ;
}

/**
 * Prise en charge des tests à l'aide d'un élément
 * @param {Fonction} fn Passe l'élément créé et renvoie un résultat booléen
 */
fonction assert( fn ) {
	var el = document.createElement( "ensemble de champs" );

	essayer {
		return !!fn( el );
	} attraper ( e ) {
		retourner faux ;
	} finalement {

		// Supprimer de son parent par défaut
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// libère de la mémoire dans IE
		el = nul ;
	}
}

/**
 * Ajoute le même gestionnaire pour tous les attributs spécifiés
 * @param {String} attrs Liste d'attributs séparés par des tubes
 * @param {Function} handler La méthode qui sera appliquée
 */
fonction addHandle( attrs, gestionnaire ) {
	var arr = attrs.split( "|" ),
		i = arr.longueur ;

	alors que je-- ) {
		Expr.attrHandle[ arr[ i ] ] = gestionnaire ;
	}
}

/**
 * Vérifie l'ordre des documents de deux frères et sœurs
 * @param {Élément} a
 * @param {Élément} b
 * @returns {Number} Renvoie inférieur à 0 si a précède b, supérieur à 0 si a suit b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex ;

	// Utiliser IE sourceIndex si disponible sur les deux nœuds
	si ( diff ) {
		retour diff ;
	}

	// Vérifie si b suit a
	si ( cur ) {
		tandis que ( ( cur = cur.nextSibling ) ) {
			si ( cur === b ) {
				retour -1 ;
			}
		}
	}

	retourner un ? 1 : -1 ;
}

/**
 * Renvoie une fonction à utiliser dans les pseudos pour les types d'entrée
 * Type @param {chaîne}
 */
function createInputPseudo( type ) {
	fonction de retour (élément) {
		var nom = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	} ;
}

/**
 * Renvoie une fonction à utiliser dans les pseudos pour les boutons
 * Type @param {chaîne}
 */
function createButtonPseudo( type ) {
	fonction de retour (élément) {
		var nom = elem.nodeName.toLowerCase();
		return ( nom === "entrée" || nom === "bouton" ) && elem.type === type;
	} ;
}

/**
 * Renvoie une fonction à utiliser dans les pseudos pour :enabled/:disabled
 * @param {booléen} désactivé true pour :disabled ; faux pour : activé
 */
fonction createDisabledPseudo (désactivé) {

	// Connus :désactivés faux positifs : fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	fonction de retour (élément) {

		// Seuls certains éléments peuvent correspondre à :enabled ou :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "forme" dans elem ) {

			// Vérifie la désactivation héritée sur les éléments pertinents non désactivés :
			// * éléments listés associés au formulaire dans un fieldset désactivé
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * éléments d'option dans un optgroup désactivé
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Tous ces éléments ont une propriété "form".
			if ( elem.parentNode && elem.disabled === false ) {

				// Les éléments d'option renvoient à un optgroup parent s'il est présent
				if ( "étiquette" dans elem ) {
					if ( "étiquette" dans elem.parentNode ) {
						return elem.parentNode.disabled === désactivé ;
					} autre {
						return elem.disabled === désactivé ;
					}
				}

				// Prise en charge : Internet Explorer 6 - 11
				// Utilisez la propriété de raccourci isDisabled pour vérifier les ancêtres des ensembles de champs désactivés
				return elem.isDisabled === désactivé ||

					// Là où il n'y a pas isDisabled, vérifier manuellement
					/* jshint -W018 */
					elem.isDisabled !== !désactivé &&
					inDisabledFieldset( elem ) === désactivé ;
			}

			return elem.disabled === désactivé ;

		// Essayez de trier les éléments qui ne peuvent pas être désactivés avant de faire confiance à la propriété disabled.
		// Certaines victimes se font prendre dans nos filets (étiquette, légende, menu, piste), mais il ne faut pas
		// existent même sur eux, et encore moins ont une valeur booléenne.
		} else if ( "étiquette" dans elem ) {
			return elem.disabled === désactivé ;
		}

		// Les éléments restants ne sont ni :enabled ni :disabled
		retourner faux ;
	} ;
}

/**
 * Renvoie une fonction à utiliser dans les pseudos pour les positionnels
 * @param {Fonction} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( fonction( argument ) {
		argument = +argument ;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.longueur ;

			// Faire correspondre les éléments trouvés aux index spécifiés
			alors que je-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					graine[ j ] = !( correspond à[ j ] = graine[ j ] );
				}
			}
		} );
	} );
}

/**
 * Vérifie la validité d'un nœud en tant que contexte Sizzle
 * @param {Élément|Objet=} contexte
 * @returns {Element|Object|Boolean} Le nœud d'entrée si acceptable, sinon une valeur fausse
 */
fonction testContext( contexte ) {
	renvoie le contexte && type de contexte.getElementsByTagName !== "undefined" && context;
}

// Expose les variables de support pour plus de commodité
support = Sizzle.support = {} ;

/**
 * Détecte les nœuds XML
 * @param {Element|Objet} elem Un élément ou un document
 * @returns {Boolean} Vrai ssi elem est un nœud XML non-HTML
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Prise en charge : IE <=8
	// Suppose HTML lorsque documentElement n'existe pas encore, comme à l'intérieur du chargement des iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
} ;

/**
 * Définit les variables liées au document une fois en fonction du document actuel
 * @param {Element|Object} [doc] Un élément ou un objet document à utiliser pour définir le document
 * @returns {Object} Renvoie le document courant
 */
setDocument = Sizzle.setDocument = fonction (nœud) {
	var hasCompare, subWindow,
		doc = nœud ? node.ownerDocument || nœud : doc préféré ;

	// Renvoyer plus tôt si le document est invalide ou déjà sélectionné
	// Prise en charge : IE 11+, Edge 17 - 18+
	// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
	// deux documents ; les comparaisons superficielles fonctionnent.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		document de retour ;
	}

	// Mettre à jour les variables globales
	document = doc;
	docElem = document.documentElement;
	documentEstHTML = !estXML( document );

	// Prise en charge : IE 9 - 11+, Edge 12 - 18+
	// L'accès aux documents iframe après le déchargement génère des erreurs "autorisation refusée" (jQuery #13936)
	// Prise en charge : IE 11+, Edge 17 - 18+
	// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
	// deux documents ; les comparaisons superficielles fonctionnent.
	// eslint-disable-next-line eqeqeq
	si ( preferedDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Prise en charge : IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Prise en charge : IE 9 - 10 uniquement
		} sinon si ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Prise en charge : IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 uniquement, Firefox <=3.6 - 31 uniquement,
	// Safari 4 - 5 uniquement, Opera <=11.6 - 12.x uniquement
	// Les navigateurs IE/Edge et plus anciens ne prennent pas en charge la pseudo-classe :scope.
	// Prise en charge : Safari 6.0 uniquement
	// Safari 6.0 prend en charge :scope mais c'est un alias de :root ici.
	support.scope = assert( fonction( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Les attributs
	-------------------------------------------------- -------------------- */

	// Prise en charge : Internet Explorer<8
	// Vérifier que getAttribute renvoie bien des attributs et non des propriétés
	// (sauf les booléens IE8)
	support.attributes = assert( fonction( el ) {
		el.className = "je" ;
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	-------------------------------------------------- -------------------- */

	// Vérifie si getElementsByTagName("*") renvoie uniquement des éléments
	support.getElementsByTagName = assert( fonction( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Prise en charge : IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Prise en charge : Internet Explorer<10
	// Vérifie si getElementById renvoie les éléments par nom
	// Les méthodes getElementById cassées ne récupèrent pas les noms définis par programme,
	// utilisez donc un test getElementsByName détourné
	support.getById = assert( fonction( el ) {
		docElem.appendChild( el ).id = expando;
		retourner !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// Filtre d'ID et recherche
	si ( support.getById ) {
		Expr.filter[ "ID" ] = fonction( id ) {
			var attrId = id.replace( runescape, funescape );
			fonction de retour (élément) {
				return elem.getAttribute( "id" ) === attrId ;
			} ;
		} ;
		Expr.find[ "ID" ] = fonction( id, contexte ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				élément de retour ? [ élém ] : [] ;
			}
		} ;
	} autre {
		Expr.filter[ "ID" ] = fonction( id ) {
			var attrId = id.replace( runescape, funescape );
			fonction de retour (élément) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				nœud de retour && node.value === attrId ;
			} ;
		} ;

		// Prise en charge : IE 6 - 7 uniquement
		// getElementById n'est pas fiable comme raccourci de recherche
		Expr.find[ "ID" ] = fonction( id, contexte ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				nœud var, je, éléments,
					elem = context.getElementById( id );

				si (élément) {

					// Vérifier l'attribut id
					nœud = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						retour [élément] ;
					}

					// Repli sur getElementsByName
					elems = context.getElementsByName( id );
					je = 0 ;
					tandis que ( ( elem = elems[ i++ ] ) ) {
						nœud = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							retour [élément] ;
						}
					}
				}

				retourner [];
			}
		} ;
	}

	// Étiqueter
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		fonction (balise, contexte) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// Les nœuds DocumentFragment n'ont pas de gEBTN
			} sinon si ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		fonction (balise, contexte) {
			var élément,
				tmp = [],
				je = 0,

				// Par une heureuse coïncidence, un gEBTN (cassé) apparaît également sur les nœuds DocumentFragment
				résultats = context.getElementsByTagName( tag );

			// Filtrer les commentaires possibles
			si ( balise === "*" ) {
				tandis que ( ( elem = résultats[ i++ ] ) ) {
					si ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				retourner tmp ;
			}
			retourner les résultats ;
		} ;

	// Classer
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	} ;

	/* QSA/matchesSelector
	-------------------------------------------------- -------------------- */

	// Prise en charge de QSA et de matchesSelector

	// matchesSelector(:active) renvoie false lorsque true (IE9/Opera 11.5)
	rbuggyMatches = [] ;

	// qSa(:focus) renvoie faux quand vrai (Chrome 21)
	// Nous autorisons cela à cause d'un bogue dans IE8/9 qui renvoie une erreur
	// chaque fois que `document.activeElement` est accédé sur un iframe
	// Donc, nous autorisons :focus à passer par QSA tout le temps pour éviter l'erreur IE
	// Voir https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [] ;

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Construire la regex QSA
		// Stratégie Regex adoptée par Diego Perini
		assert( fonction( el ) {

			entrée var ;

			// Select est défini sur une chaîne vide à dessein
			// C'est pour tester le traitement par IE de pas explicitement
			// définition d'un attribut de contenu booléen,
			// puisque sa présence devrait suffire
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>" ;

			// Prise en charge : IE8, Opera 11-12.16
			// Rien ne doit être sélectionné lorsque des chaînes vides suivent ^= ou $= ou *=
			// L'attribut test doit être inconnu dans Opera mais "sûr" pour WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + espace + "*(?:''|\"\")" );
			}

			// Prise en charge : IE8
			// Les attributs booléens et la "valeur" ne sont pas traités correctement
			if ( !el.querySelectorAll( "[sélectionné]" ).length ) {
				rbuggyQSA.push( "\\[" + espace + "*(?:value|" + booléens + ")" );
			}

			// Prise en charge : Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Prise en charge : IE 11+, Edge 15 - 18+
			// IE 11/Edge ne trouve pas d'éléments sur une requête `[name='']` dans certains cas.
			// Ajout d'un attribut temporaire au document avant que la sélection ne fonctionne
			// autour du problème.
			// Fait intéressant, IE 10 et plus ne semblent pas avoir le problème.
			entrée = document.createElement( "entrée" );
			input.setAttribute( "nom", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[nom='']" ).length ) {
				rbuggyQSA.push( "\\[" + espace + "*nom" + espace + "*=" +
					espace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked doit renvoyer les éléments d'option sélectionnés
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 génère une erreur ici et ne verra pas les tests ultérieurs
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":vérifié" );
			}

			// Prise en charge : Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// Dans la page `selector#id sibling-combinator selector` échoue
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Prise en charge : Firefox <=3.6 - 5 uniquement
			// L'ancien Firefox ne lance pas un identifiant mal échappé.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( fonction( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>" ;

			// Prise en charge : applications natives Windows 8
			// Les attributs type et name sont restreints lors de l'affectation .innerHTML
			var input = document.createElement( "input" );
			input.setAttribute( "type", "caché" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Prise en charge : IE8
			// Appliquer la sensibilité à la casse de l'attribut name
			if ( el.querySelectorAll( "[nom=d]" ).length ) {
				rbuggyQSA.push( "nom" + espace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - éléments :enabled/:disabled et cachés (les éléments cachés sont toujours activés)
			// IE8 génère une erreur ici et ne verra pas les tests ultérieurs
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Prise en charge : IE9-11+
			// Le sélecteur désactivé d'IE ne récupère pas les enfants des ensembles de champs désactivés
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Prise en charge : Opera 10 - 11 uniquement
			// Opera 10-11 ne lance pas de pseudos invalides post-virgule
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( fonction( el ) {

			// Vérifie s'il est possible de faire matchesSelector
			// sur un noeud déconnecté (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// Cela devrait échouer avec une exception
			// Gecko ne fait pas d'erreur, renvoie false à la place
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos);
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contient
	-------------------------------------------------- -------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// L'élément contient un autre
	// Volontairement auto-exclusif
	// Comme dans, un élément ne se contient pas
	contient = hasCompare || rnative.test( docElem.contains ) ?
		fonction( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			renvoie un === bup || !!( bup && bup.nodeType === 1 && (
				adown.contient ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		fonction( a, b ) {
			si ( b ) {
				tandis que ( ( b = b.parentNode ) ) {
					si ( b === une ) {
						retourner vrai ;
					}
				}
			}
			retourner faux ;
		} ;

	/* Tri
	-------------------------------------------------- -------------------- */

	// Tri de l'ordre des documents
	sortOrder = hasCompare ?
	fonction( a, b ) {

		// Indicateur de suppression des doublons
		si ( une === b ) {
			aDuplique = vrai;
			renvoie 0 ;
		}

		// Trier sur l'existence de la méthode si une seule entrée a compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition ;
		si (comparer) {
			retour comparer;
		}

		// Calcule la position si les deux entrées appartiennent au même document
		// Prise en charge : IE 11+, Edge 17 - 18+
		// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
		// deux documents ; les comparaisons superficielles fonctionnent.
		// eslint-disable-next-line eqeqeq
		comparer = ( a.ownerDocument || une ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Sinon, nous savons qu'ils sont déconnectés
			1;

		// Nœuds déconnectés
		si ( comparer & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === comparer ) ) {

			// Choisissez le premier élément qui est lié à notre document préféré
			// Prise en charge : IE 11+, Edge 17 - 18+
			// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
			// deux documents ; les comparaisons superficielles fonctionnent.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferedDoc &&
				contient( preferedDoc, a ) ) {
				retour -1 ;
			}

			// Prise en charge : IE 11+, Edge 17 - 18+
			// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
			// deux documents ; les comparaisons superficielles fonctionnent.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferedDoc &&
				contient( docpréféré, b ) ) {
				retour 1 ;
			}

			// Conserver la commande d'origine
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0 ;
		}

		retour comparer & 4 ? -1 : 1 ;
	} :
	fonction( a, b ) {

		// Sortie anticipée si les nœuds sont identiques
		si ( une === b ) {
			aDuplique = vrai;
			renvoie 0 ;
		}

		var cur,
			je = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ une ],
			pb = [ b ] ;

		// Les nœuds sans parents sont soit des documents soit déconnectés
		si ( !aup || !bup ) {

			// Prise en charge : IE 11+, Edge 17 - 18+
			// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
			// deux documents ; les comparaisons superficielles fonctionnent.
			/* eslint-disable eqeqeq */
			retourner un == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				hop ? -1 :
				bof ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0 ;

		// Si les nœuds sont frères, nous pouvons faire une vérification rapide
		} sinon si ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Sinon, nous avons besoin de listes complètes de leurs ancêtres pour comparaison
		cur = a ;
		tandis que ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		tandis que ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Descendez l'arbre à la recherche d'un écart
		tandis que ( ap[ je ] === bp[ je ] ) {
			je++ ;
		}

		je reviens ?

			// Effectue une vérification des frères si les nœuds ont un ancêtre commun
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Sinon, les nœuds de notre document sont triés en premier
			// Prise en charge : IE 11+, Edge 17 - 18+
			// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
			// deux documents ; les comparaisons superficielles fonctionnent.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferedDoc ? -1 :
			bp[ i ] == preferedDoc ? 1 :
			/* eslint-enable eqeqeq */
			0 ;
	} ;

	document de retour ;
} ;

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
} ;

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	si ( support.matchesSelector && documentEstHTML &&
		!nonnativeSelectorCache[ expression + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		essayer {
			var ret = matches.call( elem, expr );

			// MatchSelector d'IE 9 renvoie false sur les nœuds déconnectés
			if ( ret || support.disconnectedMatch ||

				// De même, les nœuds déconnectés sont dits être dans un document
				// fragment dans IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				retour ret;
			}
		} attraper ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
} ;

Sizzle.contains = function( context, elem ) {

	// Définissez les variables du document si nécessaire
	// Prise en charge : IE 11+, Edge 17 - 18+
	// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
	// deux documents ; les comparaisons superficielles fonctionnent.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || contexte ) != document ) {
		setDocument(contexte);
	}
	return contains( context, elem );
} ;

Sizzle.attr = fonction( élément, nom ) {

	// Définissez les variables du document si nécessaire
	// Prise en charge : IE 11+, Edge 17 - 18+
	// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
	// deux documents ; les comparaisons superficielles fonctionnent.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ nom.toLowerCase() ],

		// Ne vous laissez pas berner par les propriétés Object.prototype (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( élément, nom, !documentEstHTML ) :
			indéfini;

	valeur de retour !== indéfini ?
		val :
		support.attributs || !documentEstHTML ?
			elem.getAttribute( nom ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				nul;
} ;

Sizzle.escape = fonction (sel) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
} ;

Sizzle.error = fonction (msg) {
	throw new Error( "Erreur de syntaxe, expression non reconnue : " + msg );
} ;

/**
 * Tri des documents et suppression des doublons
 * @param {ArrayLike} résultats
 */
Sizzle.uniqueSort = fonction (résultats) {
	var élément,
		doublons = [],
		j = 0,
		je = 0 ;

	// Sauf si nous * savons * que nous pouvons détecter les doublons, supposons leur présence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && résultats.slice( 0 );
	résultats.sort( sortOrder );

	si ( aDuplique ) {
		tandis que ( ( elem = résultats[ i++ ] ) ) {
			si ( elem === résultats[ je ] ) {
				j = doublons.push( je );
			}
		}
		tandis que ( j-- ) {
			résultats.splice( doublons[ j ], 1 );
		}
	}

	// Effacer l'entrée après le tri pour libérer les objets
	// Voir https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	retourner les résultats ;
} ;

/**
 * Fonction utilitaire pour récupérer la valeur textuelle d'un tableau de nœuds DOM
 * @param {Tableau|Élément} élément
 */
getText = Sizzle.getText = fonction (élément) {
	nœud var,
		ret = "",
		je = 0,
		nodeType = elem.nodeType;

	si ( !NodeType ) {

		// S'il n'y a pas de nodeType, cela devrait être un tableau
		tandis que ( ( nœud = elem[ i++ ] ) ) {

			// Ne traverse pas les nœuds de commentaire
			ret += getText( nœud );
		}
	} sinon si ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Utiliser textContent pour les éléments
		// Utilisation de innerText supprimée pour la cohérence des nouvelles lignes (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent ;
		} autre {

			// Traverser ses enfants
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( élém );
			}
		}
	} sinon si ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue ;
	}

	// N'incluez pas les nœuds de commentaires ou d'instructions de traitement

	retour ret;
} ;

Expr = Sizzle.selectors = {

	// Peut être ajusté par l'utilisateur
	cacheLongueur : 50,

	createPseudo : markFunction,

	match: matchExpr,

	attrHandle : {},

	trouver: {},

	parent : {
		">": { répertoire : "parentNode", premier : vrai },
		" " : { répertoire : "parentNode" },
		"+": { répertoire : "previousSibling", premier : vrai },
		"~": { répertoire : "previousSibling" }
	},

	préfiltre : {
		"ATTR": fonction (correspondance) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Déplace la valeur donnée vers match[3] qu'elle soit entre guillemets ou non
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			si ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"ENFANT": fonction (correspondance) {

			/* correspondances de matchExpr["CHILD"]
				1 type (uniquement|nième|...)
				2 quoi (enfant|de-type)
				3 argument (pair|impair|\d*|\d*n([+-]\d+)?|...)
				4 xn-composant de l'argument xn+y ([+-]?\d*n|)
				5 signe de la composante xn
				6 x du composant xn
				7 signe de la composante y
				8 y de composant y
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			si ( match[ 1 ].slice( 0, 3 ) === "nième" ) {

				// nième-* nécessite un argument
				si ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// paramètres numériques x et y pour Expr.filter.CHILD
				// rappelez-vous que false/true est converti respectivement en 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "pair" || match[ 3 ] === "impair" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "impair" );

				// les autres types interdisent les arguments
			} sinon si ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			revanche;
		},

		"PSEUDO": fonction (correspondance) {
			excès de var,
				sans guillemets = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "ENFANT" ].test( match[ 0 ] ) ) {
				renvoie nul ;
			}

			// Accepte les arguments entre guillemets tels quels
			si ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "" ;

			// Supprime les caractères en excès des arguments sans guillemets
			} else if ( sans guillemets && rpseudo.test( sans guillemets ) &&

				// Récupère l'excédent de tokenize (récursivement)
				( excès = tokenize( sans guillemets, vrai ) ) &&

				// avance à la prochaine parenthèse fermante
				( excès = unquoted.indexOf( ")", unquoted.length - excès ) - unquoted.length ) ) {

				// l'excès est un indice négatif
				match[ 0 ] = match[ 0 ].slice( 0, excès );
				match[ 2 ] = unquoted.slice( 0, excès );
			}

			// Renvoie uniquement les captures nécessaires à la méthode du pseudo filtre (type et argument)
			return match.slice( 0, 3 );
		}
	},

	filtre : {

		"TAG": fonction( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				une fonction() {
					retourner vrai ;
				} :
				fonction (élément) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				} ;
		},

		"CLASS": fonction( nomClasse ) {
			var pattern = classCache[ className + " " ] ;

			modèle de retour ||
				( pattern = new RegExp( "(^|" + espace +
					")" + nom_classe + "(" + espace + "|$)" ) ) && classCache(
						nom_classe, fonction( elem ) {
							retourner motif.test(
								typeof elem.className === "chaîne" && elem.className ||
								typeof elem.getAttribute !== "non défini" &&
									elem.getAttribute( "classe" ) ||
								""
							);
				} );
		},

		"ATTR": fonction( nom, opérateur, vérification ) {
			fonction de retour (élément) {
				var result = Sizzle.attr( elem, name );

				si ( résultat == null ) {
					opérateur de retour === "!=" ;
				}
				si ( !opérateur ) {
					retourner vrai ;
				}

				résultat += "" ;

				/* eslint-disable max-len */

				opérateur de retour === "=" ? résultat === vérifier :
					opérateur === "!=" ? résultat !== vérifier :
					opérateur === "^=" ? vérifier && result.indexOf( vérifier ) === 0 :
					opérateur === "*=" ? vérifier && result.indexOf( vérifier ) > -1 :
					opérateur === "$=" ? vérifier && result.slice( -check.length ) === vérifier :
					opérateur === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					opérateur === "|=" ? résultat === vérifier || result.slice( 0, check.length + 1 ) === check + "-" :
					faux;
				/* eslint-enable max-len */

			} ;
		},

		"ENFANT": fonction( type, quoi, _argument, premier, dernier ) {
			var simple = type.slice( 0, 3 ) !== "nième",
				avant = type.tranche( -4 ) !== "dernier",
				ofType = quoi === "de-type" ;

			retourner premier === 1 && dernier === 0 ?

				// Raccourci pour :nth-*(n)
				fonction (élément) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, nœud, nodeIndex, début,
						dir = simple !== avant ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						nom = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = faux ;

					si (parent) {

						// :(premier|dernier|uniquement)-(enfant|du-type)
						si (simple) {
							tandis que (répertoire) {
								nœud = élément ;
								tandis que ( ( nœud = nœud[ répertoire ] ) ) {
									si (deType ?
										node.nodeName.toLowerCase() === nom :
										nœud.nodeType === 1 ) {

										retourner faux ;
									}
								}

								// Sens inverse pour :only-* (si nous ne l'avons pas encore fait)
								start = dir = type === "uniquement" && !start && "nextSibling" ;
							}
							retourner vrai ;
						}

						début = [ avant ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stocke les données du cache sur `parent`
						si ( avant && useCache ) {

							// Recherche `elem` à partir d'un index précédemment mis en cache

							// ... d'une manière compatible avec gzip
							nœud = parent ;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Prise en charge : IE <9 uniquement
							// Se défendre contre les attaques clonées (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [] ;
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							tandis que ( ( nœud = ++nodeIndex && nœud && nœud[ répertoire ] ||

								// Retour à la recherche de `elem` depuis le début
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// Lorsqu'il est trouvé, met en cache les index sur `parent` et casse
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ] ;
									Pause;
								}
							}

						} autre {

							// Utilise l'index d'élément précédemment mis en cache s'il est disponible
							si (useCache) {

								// ... d'une manière compatible avec gzip
								nœud = élément ;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Prise en charge : IE <9 uniquement
								// Se défendre contre les attaques clonées (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [] ;
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex ;
							}

							// xml :nth-enfant(...)
							// ou :nth-dernier-enfant(...) ou :nth(-dernier)?-de-type(...)
							si ( diff === faux ) {

								// Utilisez la même boucle que ci-dessus pour rechercher `elem` depuis le début
								tandis que ( ( nœud = ++nodeIndex && nœud && nœud[ répertoire ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									si ( ( deType ?
										node.nodeName.toLowerCase() === nom :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache l'index de chaque élément rencontré
										si (useCache) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Prise en charge : IE <9 uniquement
											// Se défendre contre les attaques clonées (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ] ;
										}

										si ( nœud === élément ) {
											Pause;
										}
									}
								}
							}
						}

						// Incorporer le décalage, puis vérifier la taille du cycle
						diff -= dernier ;
						return diff === premier || ( diff % premier === 0 && diff / premier >= 0 );
					}
				} ;
		},

		"PSEUDO": fonction( pseudo, argument ) {

			// les noms de pseudo-classes sont insensibles à la casse
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioriser par sensibilité à la casse au cas où des pseudos personnalisés seraient ajoutés avec des lettres majuscules
			// Rappelez-vous que setFilters hérite des pseudos
			var arguments,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "pseudo non pris en charge : " + pseudo );

			// L'utilisateur peut utiliser createPseudo pour indiquer que
			// des arguments sont nécessaires pour créer la fonction de filtrage
			// comme le fait Sizzle
			si ( fn[ développer ] ) {
				retourner fn( argument );
			}

			// Mais conserve le support des anciennes signatures
			si ( longueur fn > 1 ) {
				args = [ pseudo, pseudo, "", argument ] ;
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( fonction( seed, matches ) {
						var idx,
							matched = fn( graine, argument ),
							i = longueur.correspondante ;
						alors que je-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					fonction (élément) {
						return fn( elem, 0, args );
					} ;
			}

			retour fn ;
		}
	},

	pseudos : {

		// Pseudos potentiellement complexes
		"not": markFunction( fonction( sélecteur ) {

			// Découpe le sélecteur passé à compiler
			// pour éviter de traiter le début et la fin
			// espaces comme combinateurs
			var entrée = [],
				résultats = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( fonction( seed, matches, _context, xml ) {
					var élément,
						inégalé = matcher( graine, null, xml, [] ),
						i = graine.longueur ;

					// Correspondance des éléments sans correspondance par `matcher`
					alors que je-- ) {
						si ( ( elem = sans correspondance[ je ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					entrée[ 0 ] = élément ;
					matcher( entrée, null, xml, résultats );

					// Ne garde pas l'élément (problème #299)
					entrée[ 0 ] = null ;
					return !results.pop();
				} ;
		} ),

		"a": markFunction( fonction( sélecteur ) {
			fonction de retour (élément) {
				return Sizzle( selector, elem ).length > 0;
			} ;
		} ),

		"contient": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			fonction de retour (élément) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			} ;
		} ),

		// "Si un élément est représenté par un sélecteur :lang()
		// est basé uniquement sur la valeur de langue de l'élément
		// étant égal à l'identifiant C,
		// ou commençant par l'identifiant C immédiatement suivi de "-".
		// La correspondance de C avec la valeur de langage de l'élément est effectuée sans tenir compte de la casse.
		// L'identifiant C n'a pas besoin d'être un nom de langue valide."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( fonction( lang ) {

			// la valeur lang doit être un identifiant valide
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "langue non prise en charge : " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			fonction de retour (élément) {
				var elemLang ;
				faire {
					si ( ( elemLang = documentEstHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} tandis que ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				retourner faux ;
			} ;
		} ),

		// Divers
		"cible": fonction (élément) {
			var hash = window.location && window.location.hash;
			retourner le hachage && hash.slice( 1 ) === elem.id;
		},

		"racine": fonction (élément) {
			return elem === docElem ;
		},

		"focus": fonction (élément) {
			retour élément === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Propriétés booléennes
		"enabled": createDisabledPseudo( false ),
		"désactivé": createDisabledPseudo( true ),

		"vérifié": function( elem ) {

			// En CSS3, :checked doit renvoyer à la fois les éléments cochés et sélectionnés
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"sélectionné": fonction (élément) {

			// L'accès à cette propriété rend la sélection par défaut
			// les options de Safari fonctionnent correctement
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex ;
			}

			return elem.selected === vrai ;
		},

		// Contenu
		"vide": fonction (élément) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty est annulé par l'élément (1) ou les nœuds de contenu (text : 3 ; cdata : 4 ; entity ref : 5),
			// mais pas par d'autres (commentaire : 8 ; instruction de traitement : 7 ; etc.)
			// nodeType < 6 fonctionne car les attributs (2) n'apparaissent pas comme enfants
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					retourner faux ;
				}
			}
			retourner vrai ;
		},

		"parent": fonction (élément) {
			return !Expr.pseudos[ "vide" ]( elem );
		},

		// Types d'élément/d'entrée
		"en-tête": fonction (élément) {
			return rheader.test( elem.nodeName );
		},

		"entrée": fonction (élément) {
			return rinputs.test( elem.nodeName );
		},

		"bouton": fonction (élément) {
			var nom = elem.nodeName.toLowerCase();
			return name === "entrée" && elem.type === "bouton" || nom === "bouton" ;
		},

		"texte": fonction (élément) {
			attribut var ;
			return elem.nodeName.toLowerCase() === "entrée" &&
				elem.type === "texte" &&

				// Prise en charge : Internet Explorer<8
				// Les nouvelles valeurs d'attribut HTML5 (par exemple, "search") apparaissent avec elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "texte" );
		},

		// Position dans la collection
		"premier": createPositionalPseudo( fonction() {
			retour [ 0 ] ;
		} ),

		"dernier": createPositionalPseudo( fonction( _matchIndexes, longueur ) {
			return [ longueur - 1 ] ;
		} ),

		"eq": createPositionalPseudo( fonction( _matchIndexes, longueur, argument) {
			retour [ argument < 0 ? argument + longueur : argument ] ;
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var je = 0 ;
			pour ( ; je < longueur; je += 2 ) {
				matchIndexes.push( i );
			}
			renvoie les index de correspondance ;
		} ),

		"impair": createPositionalPseudo( function( matchIndexes, length ) {
			var je = 1 ;
			pour ( ; je < longueur; je += 2 ) {
				matchIndexes.push( i );
			}
			renvoie les index de correspondance ;
		} ),

		"lt": createPositionalPseudo( fonction( matchIndexes, longueur, argument ) {
			var je = argument < 0 ?
				argument + longueur :
				argument > longueur ?
					longueur :
					argument;
			pour (; --i >= 0; ) {
				matchIndexes.push( i );
			}
			renvoie les index de correspondance ;
		} ),

		"gt": createPositionalPseudo( fonction( matchIndexes, longueur, argument ) {
			var je = argument < 0 ? argument + longueur : argument;
			pour (; ++i < longueur; ) {
				matchIndexes.push( i );
			}
			renvoie les index de correspondance ;
		} )
	}
} ;

Expr.pseudos[ "nt" ] = Expr.pseudos[ "eq" ];

// Ajouter des pseudos de bouton/type d'entrée
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ je ] = createInputPseudo( je );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ je ] = createButtonPseudo( je );
}

// API facile pour créer de nouveaux setFilters
fonction setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos ;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var apparié, correspondance, jetons, type,
		soFar, groupes, préfiltres,
		mis en cache = tokenCache[ sélecteur + " " ] ;

	si (en cache) {
		retour parseOnly ? 0 : cache.slice( 0 );
	}

	soFar = sélecteur ;
	groupes = [] ;
	preFilters = Expr.preFilter;

	tandis que ( jusqu'à présent ) {

		// Virgule et première exécution
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			si (concordance) {

				// Ne consomme pas les virgules de fin comme valides
				soFar = soFar. tranche( match[ 0 ].length ) || jusqu'à présent;
			}
			groupes.push( ( jetons = [] ) );
		}

		correspondant = faux ;

		// Combinateurs
		si ( ( match = rcombinators.exec( jusqu'à présent ) ) ) {
			matched = match.shift();
			jetons.push( {
				valeur : correspondant,

				// Cast des combinateurs descendants dans l'espace
				tapez : match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filtres
		for (tapez dans Expr.filter) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				jetons.push( {
					valeur : correspondant,
					type : type,
					matchs : match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		si ( ! correspond ) {
			Pause;
		}
	}

	// Retourne la longueur de l'excédent invalide
	// si nous ne faisons qu'analyser
	// Sinon, lance une erreur ou renvoie des jetons
	retour parseOnly ?
		soFar.length :
		jusqu'à présent ?
			Sizzle.error( selector ) :

			// Cache les jetons
			tokenCache( sélecteur, groupes ).slice( 0 );
} ;

function toSelector( tokens ) {
	var je = 0,
		len = tokens.length,
		sélecteur = "" ;
	pour (; je < longueur; je++ ) {
		selector += tokens[ i ].value;
	}
	sélecteur de retour ;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		sauter = combinateur.suivant,
		clé = sauter || directeur,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Vérification par rapport à l'ancêtre le plus proche/élément précédent
		fonction (élément, contexte, xml) {
			tandis que ( ( elem = elem[ répertoire ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			retourner faux ;
		} :

		// Vérification par rapport à tous les éléments ancêtres/précédents
		fonction (élément, contexte, xml) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// Nous ne pouvons pas définir de données arbitraires sur les nœuds XML, ils ne bénéficient donc pas de la mise en cache du combinateur
			si ( xml ) {
				tandis que ( ( elem = elem[ répertoire ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							retourner vrai ;
						}
					}
				}
			} autre {
				tandis que ( ( elem = elem[ répertoire ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Prise en charge : IE <9 uniquement
						// Se défendre contre les attaques clonées (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( sauter && sauter === elem.nodeName.toLowerCase() ) {
							elem = elem[ répertoire ] || élément ;
						} sinon si ( ( oldCache = uniqueCache[ clé ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Attribuer à newCache pour que les résultats se propagent aux éléments précédents
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} autre {

							// Réutiliser newcache pour que les résultats se propagent aux éléments précédents
							uniqueCache[ clé ] = newCache ;

							// Une correspondance signifie que nous avons terminé ; un échec signifie que nous devons continuer à vérifier
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								retourner vrai ;
							}
						}
					}
				}
			}
			retourner faux ;
		} ;
}

function elementMatcher( matchers ) {
	renvoie matchers.length > 1 ?
		fonction (élément, contexte, xml) {
			var i = matchers.length;
			alors que je-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					retourner faux ;
				}
			}
			retourner vrai ;
		} :
		matchers[ 0 ] ;
}

function multipleContexts( selector, contexts, results ) {
	var je = 0,
		len = contextes.longueur ;
	pour (; je < longueur; je++ ) {
		Sizzle( sélecteur, contextes[ i ], résultats );
	}
	retourner les résultats ;
}

function condense( sans correspondance, carte, filtre, contexte, xml ) {
	var élément,
		newUnmatched = [],
		je = 0,
		len = unmatched.length,
		mappé = carte != null;

	pour (; je < longueur; je++ ) {
		si ( ( elem = sans correspondance[ je ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				si ( mappé ) {
					map.push( je );
				}
			}
		}
	}

	renvoie newUnmatched ;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( fonction( graine, résultats, contexte, xml ) {
		var temp, je, elem,
			préCarte = [],
			postCarte = [],
			préexistant = résultats.longueur,

			// Récupère les éléments initiaux à partir de la graine ou du contexte
			éléments = graine || multipleContexts(
				sélecteur || "*",
				contexte.nodeType ? [ contexte ] : contexte,
				[]
			),

			// Préfiltre pour obtenir l'entrée du matcher, en préservant une carte pour la synchronisation des résultats de départ
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				éléments,

			matcherOut = matcher ?

				// Si nous avons un postFinder, ou une graine filtrée, ou un postFilter non graine ou des résultats préexistants,
				postFinder || ( seed ? preFilter : préexistant || postFilter ) ?

					// ... un traitement intermédiaire est nécessaire
					[] :

					// ...sinon utiliser directement les résultats
					résultats :
				matcherIn ;

		// Trouver les correspondances principales
		si (concordance) {
			matcher( matcherIn, matcherOut, contexte, xml );
		}

		// Appliquer le post-filtre
		si ( postFiltre ) {
			temp = condense( matcherOut, postMap );
			postFiltre( temp, [], contexte, xml );

			// Dissocie les éléments défaillants en les replaçant dans matcherIn
			i = temp.longueur ;
			alors que je-- ) {
				si ( ( elem = temp[ je ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		si ( graine ) {
			if ( postFinder || préFiltre ) {
				si ( postFinder ) {

					// Récupère le matcherOut final en condensant cet intermédiaire dans les contextes postFinder
					temp = [] ;
					i = matcherOut.longueur ;
					alors que je-- ) {
						si ( ( elem = matcherOut[ je ] ) ) {

							// Restaurer matcherIn puisque elem n'est pas encore une correspondance finale
							temp.push( ( matcherIn[ je ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Déplacer les éléments correspondants de la graine vers les résultats pour les garder synchronisés
				i = matcherOut.longueur ;
				alors que je-- ) {
					si ( ( elem = matcherOut[ je ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						graine[ temp ] = !( résultats[ temp ] = elem );
					}
				}
			}

		// Ajouter des éléments aux résultats, via postFinder si défini
		} autre {
			matcherOut = condense(
				matcherOut === résultats ?
					matcherOut.splice( préexistant, matcherOut.length ) :
					matcherOut
			);
			si ( postFinder ) {
				postFinder( null, résultats, matcherOut, xml );
			} autre {
				push.apply( résultats, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( jetons ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadRelative = Expr.relative[ tokens[ 0 ].type ],
		impliciteRelative = leadRelative || Expr.relatif[ " " ],
		i = leaderRelative ? dix,

		// Le matcher fondamental garantit que les éléments sont accessibles à partir du ou des contextes de niveau supérieur
		matchContext = addCombinator( fonction( elem ) {
			return elem === checkContext;
		}, impliciteRelatif, vrai ),
		matchAnyContext = addCombinator( fonction( elem ) {
			return indexOf( checkContext, elem ) > -1 ;
		}, impliciteRelatif, vrai ),
		matchers = [ fonction( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || contexte !== outermostContext ) ) || (
				( checkContext = contexte ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Éviter de s'accrocher à l'élément (issue #299)
			checkContext = null;
			retour ret;
		} ] ;

	pour (; je < longueur; je++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} autre {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Renvoie special en voyant un matcher positionnel
			if ( matcher[ expando ] ) {

				// Trouve le prochain opérateur relatif (le cas échéant) pour une manipulation correcte
				j = ++i ;
				pour ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						Pause;
					}
				}
				retourner ensembleMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// Si le jeton précédent était un combinateur descendant, insère un élément quelconque implicite `*`
					jetons
						.slice( 0, je - 1 )
						.concat( { valeur : tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					je < j && matcherFromTokens( jetons. tranche( je, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = fonction (graine, contexte, xml, résultats, le plus à l'extérieur) {
			var elem, j, matcher,
				matchedCount = 0,
				je = "0",
				inégalé = graine && [],
				setMatched = [],
				contextBackup = outermostContext,

				// Nous devons toujours avoir des éléments de départ ou un contexte le plus externe
				éléments = graine || byElement && Expr.find[ "TAG" ]( "*", le plus à l'extérieur ),

				// Utilise des dirruns entiers ssi c'est le matcher le plus externe
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.longueur ;

			si (le plus à l'extérieur) {

				// Prise en charge : IE 11+, Edge 17 - 18+
				// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
				// deux documents ; les comparaisons superficielles fonctionnent.
				// eslint-disable-next-line eqeqeq
				outermostContext = contexte == document || contexte || le plus à l'extérieur ;
			}

			// Ajoute des éléments en passant des elementMatchers directement aux résultats
			// Prise en charge : IE<9, Safari
			// Tolère les propriétés NodeList (IE : "longueur" ; Safari : <nombre>) correspondant aux éléments par identifiant
			for ( ; je !== len && ( elem = elems[ je ] ) != null; je++ ) {
				if ( byElement && elem ) {
					j = 0 ;

					// Prise en charge : IE 11+, Edge 17 - 18+
					// IE/Edge génère parfois une erreur "Autorisation refusée" lors d'une comparaison stricte
					// deux documents ; les comparaisons superficielles fonctionnent.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentEstHTML;
					}
					tandis que ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							résultats.push( elem );
							Pause;
						}
					}
					si (le plus à l'extérieur) {
						dirruns = dirrunsUnique ;
					}
				}

				// Suivre les éléments sans correspondance pour les filtres définis
				si ( parEnsemble ) {

					// Ils auront parcouru tous les matchers possibles
					if ( ( elem = !matcher && elem ) ) {
						matchedCount-- ;
					}

					// Allonge le tableau pour chaque élément, apparié ou non
					si ( graine ) {
						inégalé.push( elem );
					}
				}
			}

			// `i` est maintenant le nombre d'éléments visités ci-dessus, et l'ajoute à `matchedCount`
			// rend ce dernier non négatif.
			matchedCount += i ;

			// Appliquer les filtres définis aux éléments sans correspondance
			// REMARQUE : ceci peut être ignoré s'il n'y a pas d'éléments sans correspondance (par exemple, `matchedCount`
			// est égal à `i`), à moins que nous n'ayons visité _aucun_ élément dans la boucle ci-dessus car nous avons
			// pas de matchers d'éléments et pas de graine.
			// L'incrémentation d'une chaîne initiale "0" `i` permet à `i` de rester une chaîne uniquement dans ce
			// cas, qui se traduira par un "00" `matchedCount` qui diffère de `i` mais est également
			// numériquement zéro.
			if ( bySet && i !== matchedCount ) {
				j = 0 ;
				tandis que ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( sans correspondance, setMatched, context, xml );
				}

				si ( graine ) {

					// Réintègre les correspondances d'éléments pour éliminer le besoin de tri
					si (matchedCount> 0) {
						alors que je-- ) {
							si ( !( sans correspondance[ je ] || setMatched[ je ] ) ) {
								setMatched[ i ] = pop.call( résultats );
							}
						}
					}

					// Ignorer les valeurs d'espace réservé d'index pour obtenir uniquement les correspondances réelles
					setMatched = condense( setMatched );
				}

				// Ajouter des correspondances aux résultats
				push.apply( résultats, setMatched );

				// Les correspondances d'ensemble sans graines succédant à plusieurs correspondances réussies stipulent le tri
				if ( le plus à l'extérieur && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( résultats );
				}
			}

			// Remplace la manipulation des globals par les matchers imbriqués
			si (le plus à l'extérieur) {
				dirruns = dirrunsUnique ;
				outermostContext = contextBackup ;
			}

			retour inégalé;
		} ;

	retour parEnsemble ?
		markFunction( superMatcher ) :
		superMatcher ;
}

compile = Sizzle.compile = function( selector, match /* Usage interne uniquement */ ) {
	var je,
		setMatchers = [],
		elementMatchers = [],
		mis en cache = compilerCache[ sélecteur + " " ] ;

	si ( !caché ) {

		// Génère une fonction de fonctions récursives permettant de vérifier chaque élément
		si ( !match ) {
			match = tokenize( sélecteur );
		}
		i = match.longueur ;
		alors que je-- ) {
			mis en cache = matcherFromTokens( match[ i ] );
			si (caché[expanser]) {
				setMatchers.push( mis en cache );
			} autre {
				elementMatchers.push( mis en cache );
			}
		}

		// Cache la fonction compilée
		mis en cache = compilerCache(
			sélecteur,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Enregistrer le sélecteur et la tokenisation
		cached.selector = sélecteur;
	}
	retour en cache ;
} ;

/**
 * Une fonction de sélection de bas niveau qui fonctionne avec la compilation compilée de Sizzle
 * fonctions de sélecteur
 * @param {String|Function} selector Un sélecteur ou un pré-compilé
 * fonction de sélection construite avec Sizzle.compile
 * contexte @param {Élément}
 * @param {Tableau} [résultats]
 * @param {Array} [seed] Un ensemble d'éléments à comparer
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compilé = typeof sélecteur === "fonction" && sélecteur,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	résultats = résultats || [] ;

	// Essayez de minimiser les opérations s'il n'y a qu'un seul sélecteur dans la liste et pas de graine
	// (ce dernier nous garantit le contexte)
	si ( correspondance.longueur === 1 ) {

		// Réduit le contexte si le premier sélecteur composé est un ID
		jetons = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			contexte = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), contexte ) || [] )[ 0 ] ;
			si ( !contexte ) {
				retourner les résultats ;

			// Les matchers précompilés vérifieront toujours l'ascendance, donc montez d'un niveau
			} sinon si (compilé) {
				contexte = contexte.parentNode ;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Récupère un ensemble de graines pour une correspondance de droite à gauche
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : jetons.longueur ;
		alors que je-- ) {
			jeton = jetons[ je ] ;

			// Abandon si nous touchons un combinateur
			if ( Expr.relative[ ( type = token.type ) ] ) {
				Pause;
			}
			si ( ( trouver = Expr. trouver[ type ] ) ) {

				// Recherche, élargissant le contexte pour les principaux combinateurs frères
				si ( ( graine = trouver(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						le contexte
				) ) ) {

					// Si la graine est vide ou qu'il ne reste aucun jeton, nous pouvons revenir plus tôt
					tokens.splice( je, 1 );
					selector = seed.length && toSelector( tokens );
					si ( !sélecteur ) {
						push.apply( résultats, graine );
						retourner les résultats ;
					}

					Pause;
				}
			}
		}
	}

	// Compile et exécute une fonction de filtrage si aucune n'est fournie
	// Fournissez `match` pour éviter la retokenisation si nous avons modifié le sélecteur ci-dessus
	( compilé || compile( selector, match ) )(
		planter,
		le contexte,
		!documentEstHTML,
		résultats,
		!contexte || rsibling.test( selector ) && testContext( context.parentNode ) || le contexte
	);
	retourner les résultats ;
} ;

// Devoirs ponctuels

// Stabilité du tri
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando ;

// Prise en charge : Chrome 14-35+
// Suppose toujours les doublons s'ils ne sont pas passés à la fonction de comparaison
support.detectDuplicates = !!hasDuplicate;

// Initialiser par rapport au document par défaut
setDocument();

// Support : Webkit<537.32 - Safari 6.0.3/Chrome 25 (corrigé dans Chrome 27)
// Les nœuds détachés se suivent *l'un l'autre* de façon confuse
support.sortDetached = assert( fonction( el ) {

	// Devrait renvoyer 1, mais renvoie 4 (suivant)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Prise en charge : Internet Explorer<8
// Empêche l'"interpolation" d'attribut/propriété
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
si ( !assert( fonction( el ) {
	el.innerHTML = "<a href='#'></a>" ;
	return el.firstChild.getAttribute( "href" ) === "#" ;
} ) ) {
	addHandle( "type|href|hauteur|largeur", function( elem, nom, isXML ) {
		si ( !estXML ) {
			return elem.getAttribute( nom, nom.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Prise en charge : IE<9
// Utilise defaultValue à la place de getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>" ;
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "" ;
} ) ) {
	addHandle( "valeur", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "entrée" ) {
			return elem.defaultValue ;
		}
	} );
}

// Prise en charge : IE<9
// Utilisez getAttributeNode pour récupérer les booléens lorsque getAttribute se trouve
si ( !assert( fonction( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		si ( !estXML ) {
			return elem[ nom ] === vrai ? nom.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					nul;
		}
	} );
}

retour Sizzle;

} )( la fenêtre );



jQuery.find = Sizzle ;
jQuery.expr = Sizzle.selectors ;

// Obsolète
jQuery.expr[ ":" ] = jQuery.expr.pseudos ;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort ;
jQuery.text = Sizzle.getText ;
jQuery.isXMLDoc = Sizzle.isXML ;
jQuery.contains = Sizzle.contains ;
jQuery.escapeSelector = Sizzle.escape ;




var dir = fonction( elem, dir, jusqu'à ) {
	var correspond = [],
		tronquer = jusqu'à !== indéfini ;

	tandis que ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		si ( elem.nodeType === 1 ) {
			if ( tronquer && jQuery( elem ).is( jusqu'à ) ) {
				Pause;
			}
			matched.push( elem );
		}
	}
	retour correspondant ;
} ;


var frères et soeurs = fonction( n, elem ) {
	var correspondant = [] ;

	for (; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	retour correspondant ;
} ;


var rneedsContext = jQuery.expr.match.needsContext ;



fonction nodeName( élément, nom ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>( ?:<\/\1>|)$/i );



// Implémenter la fonctionnalité identique pour le filtre et non
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualificateur ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Élément unique
	si ( qualificateur.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualificateur ) !== not;
		} );
	}

	// Arraylike d'éléments (jQuery, arguments, Array)
	if ( typeof qualificateur !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualificateur, elem ) > -1 ) !== not;
		} );
	}

	// Filtré directement pour les sélecteurs simples et complexes
	return jQuery.filter( qualificateur, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	si non ) {
		expr = ":non(" + expr + ")" ;
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ élém ] : [] ;
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1 ;
	} ) );
} ;

jQuery.fn.extend( {
	trouver : fonction (sélecteur) {
		var je, ret,
			len = this.longueur,
			soi = ceci ;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				pour ( je = 0; je < longueur; je++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						retourner vrai ;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		pour ( je = 0; je < longueur; je++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		retour longueur > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filtre : fonction (sélecteur) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	pas : fonction (sélecteur) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	est : fonction (sélecteur) {
		retour !!vanner(
			cette,

			// S'il s'agit d'un sélecteur positionnel/relatif, vérifie l'appartenance à l'ensemble renvoyé
			// donc $("p:first").is("p:last") ne retournera pas vrai pour un doc avec deux "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( sélecteur ) :
				sélecteur || [],
			faux
		).longueur;
	}
} );


// Initialise un objet jQuery


// Une référence centrale à la racine jQuery(document)
var rootjQuery,

	// Un moyen simple de vérifier les chaînes HTML
	// Prioriser #id sur <tag> pour éviter XSS via location.hash (#9521)
	// Reconnaissance HTML stricte (#11290 : doit commencer par <)
	// Raccourci simple #id case pour la vitesse
	rExprrapide = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = fonction (sélecteur, contexte, racine) {
		correspondance var, élément ;

		// HANDLE : $(""), $(null), $(undefined), $(false)
		si ( !sélecteur ) {
			retournez ceci;
		}

		// La méthode init() accepte un autre rootjQuery
		// donc migrate peut prendre en charge jQuery.sub (gh-2101)
		racine = racine || rootjQuery ;

		// Gérer les chaînes HTML
		if ( typeof selector === "string" ) {
			si ( sélecteur[ 0 ] === "<" &&
				sélecteur[ sélecteur.longueur - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Supposons que les chaînes qui commencent et se terminent par <> sont HTML et ignorent la vérification des expressions régulières
				match = [ null, sélecteur, null ] ;

			} autre {
				match = rquickExpr.exec( sélecteur );
			}

			// Faites correspondre le HTML ou assurez-vous qu'aucun contexte n'est spécifié pour #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// POIGNEE : $(html) -> $(tableau)
				si ( match[ 1 ] ) {
					contexte = contexte instance de jQuery ? contexte[ 0 ] : contexte ;

					// L'option d'exécution des scripts est vraie pour la rétrocompatibilité
					// Laisse intentionnellement l'erreur être générée si parseHTML n'est pas présent
					jQuery.merge( ceci, jQuery.parseHTML(
						match[ 1 ],
						contexte && contexte.nodeType ? context.ownerDocument || contexte : document,
						vrai
					) );

					// POIGNÉE : $(html, accessoires)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( correspondance dans le contexte ) {

							// Les propriétés du contexte sont appelées comme des méthodes si possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ... et autrement défini comme attributs
							} autre {
								this.attr( correspondance, contexte[ correspondance ] );
							}
						}
					}

					retournez ceci;

				// POIGNEE : $(#id)
				} autre {
					elem = document.getElementById( match[ 2 ] );

					si (élément) {

						// Injecte l'élément directement dans l'objet jQuery
						this[ 0 ] = elem ;
						this.length = 1;
					}
					retournez ceci;
				}

			// POIGNÉE : $(expr, $(...))
			} sinon si ( !context || contexte.jquery ) {
				return ( contexte || racine ).find( selector );

			// POIGNÉE : $(expr, contexte)
			// (qui est juste équivalent à : $(context).find(expr)
			} autre {
				return this.constructor( context ).find( selector );
			}

		// POIGNÉE : $(ÉlémentDOME)
		} sinon si ( selector.nodeType ) {
			this[ 0 ] = sélecteur ;
			this.length = 1;
			retournez ceci;

		// POIGNEE : $(fonction)
		// Raccourci pour le document prêt
		} sinon si (estFonction(sélecteur)) {
			renvoie root.ready !== non défini ?
				root.ready( sélecteur ) :

				// Exécuter immédiatement si ready n'est pas présent
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	} ;

// Donne à la fonction init le prototype jQuery pour une instanciation ultérieure
init.prototype = jQuery.fn;

// Initialiser la référence centrale
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Jusqu'à|Tous))/,

	// Méthodes garanties pour produire un ensemble unique en partant d'un ensemble unique
	garantiUnique = {
		enfants : vrai,
		contenu : vrai,
		suivant : vrai,
		précédent : vrai
	} ;

jQuery.fn.extend( {
	a : fonction (cible) {
		var cibles = jQuery( cible, ceci ),
			l = cibles.longueur ;

		return this.filter( fonction() {
			var je = 0 ;
			pour (; je < l; je++ ) {
				if ( jQuery.contains( this, target[ i ] ) ) {
					retourner vrai ;
				}
			}
		} );
	},

	le plus proche : fonction( sélecteurs, contexte ) {
		var cur,
			je = 0,
			l = cette.longueur,
			correspondant = [],
			cibles = typede sélecteurs !== "chaîne" && jQuery( sélecteurs );

		// Les sélecteurs positionnels ne correspondent jamais, puisqu'il n'y a pas de contexte _selection_
		if ( !rneedsContext.test( selectors ) ) {
			pour (; je < l; je++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Ignore toujours les fragments de document
					if ( cur.nodeType < 11 && ( cibles ?
						cibles.index( cur ) > -1 :

						// Ne passe pas les non-éléments à Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, sélecteurs ) ) ) {

						matched.push( cur );
						Pause;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Détermine la position d'un élément dans l'ensemble
	index : fonction (élément) {

		// Aucun argument, renvoie l'index dans le parent
		si ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index dans le sélecteur
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Localise la position de l'élément désiré
		return indexOf.call( this,

			// S'il reçoit un objet jQuery, le premier élément est utilisé
			elem.jquery ? élément[ 0 ] : élément
		);
	},

	ajouter : fonction (sélecteur, contexte) {
		retourne this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack : fonction (sélecteur) {
		renvoie this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

fonction frère( cur, dir ) {
	tandis que ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	retour courant ;
}

jQuery.each( {
	parent : fonction (élément) {
		var parent = elem.parentNode;
		renvoie le parent && parent.nodeType !== 11 ? père : nul ;
	},
	parents : fonction (élément) {
		return dir( elem, "parentNode" );
	},
	parentsJusqu'à : function( elem, _i, until ) {
		return dir( elem, "parentNode", jusqu'à );
	},
	suivant : fonction (élément) {
		return sibling( elem, "nextSibling" );
	},
	précédent : fonction (élément) {
		return sibling( elem, "previousSibling" );
	},
	suivantTout : fonction (élément) {
		return dir( elem, "nextSibling" );
	},
	prevAll : fonction (élément) {
		return dir( elem, "previousSibling" );
	},
	nextUntil : fonction( elem, _i, jusqu'à ) {
		return dir( elem, "nextSibling", jusqu'à );
	},
	prevUntil : fonction( elem, _i, jusqu'à ) {
		return dir( elem, "previousSibling", jusqu'à );
	},
	frères et sœurs : function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	enfants : fonction (élément) {
		return siblings( elem.firstChild );
	},
	contenu : fonction (élément) {
		si ( elem.contentDocument != null &&

			// Prise en charge : IE 11+
			// Les éléments <object> sans attribut `data` ont un objet
			// `contentDocument` avec un prototype `null`.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument ;
		}

		// Prise en charge : IE 9 - 11 uniquement, iOS 7 uniquement, navigateur Android <= 4.3 uniquement
		// Traite l'élément de modèle comme un élément normal dans les navigateurs qui
		// ne le supporte pas.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.contenu || élément ;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, fonction( nom, fn ) {
	jQuery.fn[ nom ] = fonction( jusqu'à, sélecteur ) {
		var matched = jQuery.map( this, fn, until );

		if ( nom.tranche( -5 ) !== "Jusqu'à" ) {
			sélecteur = jusqu'à ;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		si ( this.length > 1 ) {

			// Supprimer les doublons
			if ( !guaranteedUnique[ nom ] ) {
				jQuery.uniqueSort( correspondant );
			}

			// Ordre inverse pour les parents* et les dérivés précédents
			if ( rparentsprev.test( nom ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	} ;
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convertit les options au format chaîne en options au format objet
function créerOptions( options ) {
	var objet = {} ;
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		objet[ drapeau ] = vrai ;
	} );
	objet de retour ;
}

/*
 * Créez une liste de rappel en utilisant les paramètres suivants :
 *
 * options : une liste facultative d'options séparées par des espaces qui modifient la façon dont
 * la liste de rappel se comporte ou un objet d'option plus traditionnel
 *
 * Par défaut, une liste de rappel agira comme une liste de rappel d'événement et peut être
 * "tiré" plusieurs fois.
 *
 *Options possibles :
 *
 * une fois : garantira que la liste de rappel ne peut être déclenchée qu'une seule fois (comme un différé)
 *
 * mémoire : gardera une trace des valeurs précédentes et appellera tout rappel ajouté
 * après que la liste ait été tirée tout de suite avec le dernier "mémorisé"
 * valeurs (comme un Différé)
 *
 * unique : garantit qu'un rappel ne peut être ajouté qu'une seule fois (pas de doublon dans la liste)
 *
 * stopOnFalse : interrompt les appels lorsqu'un rappel renvoie faux
 *
 */
jQuery.Callbacks = fonction (options) {

	// Convertit les options du format chaîne au format objet si nécessaire
	// (nous vérifions d'abord le cache)
	options = type d'options === "chaîne" ?
		createOptions( options ) :
		jQuery.extend({}, options);

	var // Drapeau pour savoir si la liste est en train de se déclencher
		cuisson,

		// Valeur du dernier tir pour les listes inoubliables
		Mémoire,

		// Drapeau pour savoir si la liste a déjà été déclenchée
		mis à la porte,

		// Drapeau pour empêcher le tir
		fermé à clé,

		// Liste de rappel réelle
		liste = [],

		// File d'attente des données d'exécution pour les listes répétables
		file d'attente = [],

		// Index du rappel en cours de déclenchement (modifié par ajout/suppression si nécessaire)
		index de tir = -1,

		// Rappels de feu
		feu = fonction() {

			// Appliquer le tir unique
			verrouillé = verrouillé || options.une fois ;

			// Exécute les rappels pour toutes les exécutions en attente,
			// en respectant les substitutions d'index de tir et les changements d'exécution
			tiré = tir = vrai ;
			for (; queue.length; index de tir = -1 ) {
				mémoire = queue.shift();
				tandis que ( ++firingIndex < list.length ) {

					// Exécuter le rappel et vérifier la résiliation anticipée
					if ( liste[ index de tir ].apply( mémoire[ 0 ], mémoire[ 1 ] ) === faux &&
						options.stopOnFalse ) {

						// Aller à la fin et oublier les données pour que .add ne se relance pas
						tirIndex = liste.longueur ;
						mémoire = faux ;
					}
				}
			}

			// Oubliez les données si nous en avons fini
			if ( !options.memory ) {
				mémoire = faux ;
			}

			tir = faux ;

			// Nettoyer si nous avons fini de tirer pour de bon
			si ( verrouillé ) {

				// Conserver une liste vide si nous avons des données pour les futurs appels d'ajout
				si ( mémoire ) {
					liste = [] ;

				// Sinon, cet objet est dépensé
				} autre {
					liste = "" ;
				}
			}
		},

		// Objet de rappels réels
		soi = {

			// Ajoute un rappel ou une collection de rappels à la liste
			ajouter : fonction() {
				si ( liste ) {

					// Si nous avons de la mémoire d'une exécution passée, nous devrions nous déclencher après avoir ajouté
					si (mémoire && !tir) {
						tirIndex = liste.longueur - 1 ;
						queue.push( mémoire );
					}

					( fonction ajouter( args ) {
						jQuery.each( args, fonction( _, arg ) {
							si ( estFonction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									liste.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspecter récursivement
								ajouter( arg );
							}
						} );
					} )( arguments );

					si (mémoire && !tir) {
						Feu();
					}
				}
				retournez ceci;
			},

			// Supprime un rappel de la liste
			supprimer : fonction() {
				jQuery.each( arguments, fonction( _, arg ) {
					indice variable ;
					tandis que ( ( index = jQuery.inArray( arg, liste, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Gérer les index de tir
						si ( index <= index de tir ) {
							index de tir-- ;
						}
					}
				} );
				retournez ceci;
			},

			// Vérifie si un rappel donné est dans la liste.
			// Si aucun argument n'est donné, retourne si oui ou non la liste a des rappels attachés.
			a : fonction ( fn ) {
				retour fn ?
					jQuery.inArray( fn, liste ) > -1 :
					liste.longueur > 0 ;
			},

			// Supprime tous les rappels de la liste
			vide : fonction() {
				si ( liste ) {
					liste = [] ;
				}
				retournez ceci;
			},

			// Désactiver .fire et .add
			// Abandonner toutes les exécutions en cours/en attente
			// Effacer tous les rappels et valeurs
			désactiver : fonction() {
				verrouillé = file d'attente = [] ;
				liste = mémoire = "" ;
				retournez ceci;
			},
			désactivé : fonction() {
				retourner !liste;
			},

			// Désactiver .fire
			// Désactive également .add sauf si nous avons de la mémoire (car cela n'aurait aucun effet)
			// Abandonner toutes les exécutions en attente
			verrouiller : fonction() {
				verrouillé = file d'attente = [] ;
				if ( !mémoire && !tir ) {
					liste = mémoire = "" ;
				}
				retournez ceci;
			},
			verrouillé : fonction() {
				retour !! verrouillé;
			},

			// Appelle tous les rappels avec le contexte et les arguments donnés
			feuAvec : fonction (contexte, arguments) {
				si ( ! verrouillé ) {
					args = args || [] ;
					args = [ contexte, args.tranche ? args.tranche() : args ];
					queue.push( args );
					si ( ! tir ) {
						Feu();
					}
				}
				retournez ceci;
			},

			// Appelle tous les rappels avec les arguments donnés
			feu : fonction() {
				self.fireWith( this, arguments );
				retournez ceci;
			},

			// Pour savoir si les callbacks ont déjà été appelés au moins une fois
			déclenché : fonction() {
				retour !! tiré;
			}
		} ;

	revenir soi-même;
} ;


fonction Identité( v ) {
	retourner v ;
}
fonction Lanceur( ex ) {
	jeter ex;
}

function adoptValue( valeur, résoudre, rejeter, noValue ) {
	méthode var ;

	essayer {

		// Vérifier d'abord l'aspect promesse pour privilégier le comportement synchrone
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( valeur ).done( résoudre ).fail( rejeter );

		// Autres variables
		} else if ( valeur && isFunction( ( method = value.then ) ) ) {
			method.call( valeur, résoudre, rejeter );

		// Autres non-thénables
		} autre {

			// Contrôlez les arguments `resolve` en laissant Array#slice convertir booléen `noValue` en entier :
			// * faux : [ valeur ].tranche( 0 ) => résoudre ( valeur )
			// * vrai : [ valeur ].tranche( 1 ) => résoudre()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// Pour Promises/A+, convertir les exceptions en rejets
	// Puisque jQuery.when ne déballe pas thenables, nous pouvons ignorer les vérifications supplémentaires apparaissant dans
	// Deferred#then pour supprimer conditionnellement le rejet.
	} capture ( valeur ) {

		// Prise en charge : Android 4.0 uniquement
		// Les fonctions en mode strict appelées sans .call/.apply obtiennent le contexte d'objet global
		rejeter.appliquer( non défini, [ valeur ] );
	}
}

jQuery.extend( {

	Différé : function( func ) {
		var tuples = [

				// action, ajouter un écouteur, des rappels,
				// ... .then gestionnaires, index d'argument, [état final]
				[ "notifier", "progression", jQuery.Callbacks( "mémoire" ),
					jQuery.Callbacks( "mémoire" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "une fois la mémoire"),
					jQuery.Callbacks( "une fois la mémoire" ), 0, "résolu" ],
				[ "reject", "fail", jQuery.Callbacks( "une fois la mémoire"),
					jQuery.Callbacks( "une fois la mémoire" ), 1, "rejeté" ]
			],
			état = "en attente",
			promesse = {
				fonction d'état() {
					état de retour ;
				},
				toujours : fonction() {
					différé.done( arguments ).fail( arguments );
					retournez ceci;
				},
				"attraper": fonction( fn ) {
					return promise.then( null, fn );
				},

				// Conserver le tuyau pour la rétrocompatibilité
				pipe : function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments ;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, fonction( _i, tuple ) {

							// Mappez les tuples (progress, done, fail) aux arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// différé.progress(fonction() { lier à newDefer ou newDefer.notify })
							// différé.done(fonction() { lier à newDefer ou newDefer.resolve })
							// différé.fail(fonction() { lier à newDefer ou newDefer.reject })
							différé[ tuple[ 1 ] ]( fonction() {
								var renvoyé = fn && fn.apply( this, arguments );
								if ( retourné && isFunction( return.promise ) ) {
									retour.promesse()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} autre {
									newDefer[ tuple[ 0 ] + "Avec" ](
										cette,
										fn ? [ retourné ] : arguments
									);
								}
							} );
						} );
						fns = nul ;
					} ).promesse();
				},
				puis : function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0 ;
					function résoudre (profondeur, différé, gestionnaire, spécial) {
						fonction de retour() {
							var ça = ça,
								args = arguments,
								pourraitJeter = fonction() {
									var est revenu, alors ;

									// Support : Promesses/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignorer les tentatives de double résolution
									si ( profondeur < maxDepth ) {
										retourner;
									}

									retourné = handler.apply( that, args );

									// Support : Promesses/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									si ( retourné === différé.promesse() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support : Promesses/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Récupérer `then` une seule fois
									then = retourné &&

										// Support : Promesses/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Ne vérifie que les objets et les fonctions pour leur aptitude
										( typeof renvoyé === "objet" ||
											typeof renvoyé === "fonction" ) &&
										retourné.alors;

									// Gère un thenable retourné
									si ( estFonction( alors ) ) {

										// Les processeurs spéciaux (notifier) ​​attendent juste la résolution
										si ( spécial ) {
											puis.appel(
												revenu,
												résoudre ( maxDepth, différé, identité, spécial ),
												résoudre( maxDepth, différé, Lanceur, spécial )
											);

										// Les processeurs normaux (résolution) s'accrochent également à la progression
										} autre {

											// ...et ignorer les anciennes valeurs de résolution
											maxDepth++ ;

											puis.appel(
												revenu,
												résoudre ( maxDepth, différé, identité, spécial ),
												résoudre( maxDepth, différé, Lanceur, spécial ),
												résoudre (maxDepth, différé, identité,
													différé.notifyWith )
											);
										}

									// Traite toutes les autres valeurs renvoyées
									} autre {

										// Seuls les gestionnaires de substitution transmettent le contexte
										// et plusieurs valeurs (comportement non spécifié)
										if ( gestionnaire !== Identité ) {
											cela = indéfini ;
											args = [ renvoyé ] ;
										}

										// Traiter la ou les valeurs
										// Le processus par défaut est la résolution
										( spécial || différé. résolutionAvec )( cela, args );
									}
								},

								// Seuls les processeurs normaux (résolution) interceptent et rejettent les exceptions
								processus = spécial ?
									couldThrow :
									une fonction() {
										essayer {
											pourraitJeter();
										} attraper ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support : Promesses/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignorer les exceptions post-résolution
											si ( profondeur + 1 >= maxDepth ) {

												// Seuls les gestionnaires de substitution transmettent le contexte
												// et plusieurs valeurs (comportement non spécifié)
												if ( gestionnaire !== Lanceur ) {
													cela = indéfini ;
													args = [ e ] ;
												}

												différé.rejectWith( cela, args );
											}
										}
									} ;

							// Support : Promesses/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-résolvez les promesses immédiatement pour éviter les faux rejets de
							// erreurs suivantes
							si ( profondeur ) {
								traiter();
							} autre {

								// Appel d'un hook optionnel pour enregistrer la pile, en cas d'exception
								// puisqu'il est autrement perdu lorsque l'exécution devient asynchrone
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( processus );
							}
						} ;
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							résoudre(
								0,
								nouveau Différer,
								isFunction( onProgress ) ?
									en cours :
									Identité,
								newDefer.notifyWith
							)
						);

						// remplis_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							résoudre(
								0,
								nouveau Différer,
								isFunction( onFulfilled ) ?
									surRéalisé :
									Identité
							)
						);

						// gestionnaires_rejetés.add( ... )
						tuples[ 2 ][ 3 ].add(
							résoudre(
								0,
								nouveau Différer,
								isFunction( onRejected ) ?
									onRejected :
									Lanceur
							)
						);
					} ).promesse();
				},

				// Obtenir une promesse pour ce différé
				// Si obj est fourni, l'aspect promesse est ajouté à l'objet
				promesse : fonction (obj) {
					retourner obj != null ? jQuery.extend( obj, promesse ) : promesse;
				}
			},
			différé = {} ;

		// Ajouter des méthodes spécifiques à la liste
		jQuery.each( tuples, fonction( je, tuple ) {
			var liste = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promesse.progress = liste.add
			// promesse.done = liste.add
			// promesse.fail = liste.add
			promesse[ tuple[ 1 ] ] = liste.add;

			// Etat de la poignée
			si ( chaîne d'état ) {
				liste.add(
					une fonction() {

						// état = "résolu" (c'est-à-dire rempli)
						// état = "rejeté"
						état = chaîne d'état ;
					},

					// rejet_rappels.disable
					// rempli_rappels.disable
					tuples[ 3 - i ][ 2 ].disable,

					// handlers_rejetés.disable
					// rempli_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// rempli_handlers.fire
			// handlers_rejetés.fire
			list.add( tuple[ 3 ].fire );

			// différé.notifier = fonction() { différé.notifierAvec(...) }
			// différé.résolution = fonction() { différé.résolutionAvec(...) }
			// différé.rejet = fonction() { différé.rejetAvec(...) }
			différé[ tuple[ 0 ] ] = fonction() {
				différé[ tuple[ 0 ] + "Avec" ]( this === différé ? undefined : this, arguments );
				retournez ceci;
			} ;

			// différé.notifyWith = list.fireWith
			// différé.résolutionAvec = liste.feuAvec
			// différé.rejectWith = list.fireWith
			différé[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Faire du différé une promesse
		promesse.promesse( différée );

		// Appelez la fonction donnée s'il y en a
		si (fonction) {
			func.call(différé, différé);
		}

		// Terminé!
		retour différé;
	},

	// Helper différé
	quand : fonction (valeur unique) {
		var

			// compte des subordonnés inachevés
			restant = arguments.longueur,

			// nombre d'arguments non traités
			je = restant,

			// données d'exécution subordonnées
			resolveContexts = Array( i ),
			resolveValues ​​= slice.call( arguments ),

			// le Différé principal
			primaire = jQuery. Différé(),

			// usine de rappel subordonnée
			updateFunc = fonction( je ) {
				fonction de retour (valeur) {
					résoudreContexts[ je ] = ceci ;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : valeur;
					si ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues ​​);
					}
				} ;
			} ;

		// Les arguments simples et vides sont adoptés comme Promise.resolve
		si ( restant <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!restant );

			// Utilisez .then() pour déballer les thenables secondaires (cf. gh-3000)
			if ( primary.state() === "en attente" ||
				estFonction (résolventValeurs[ je ] && résolventValeurs[ je ].alors ) ) {

				return primary.then();
			}
		}

		// Plusieurs arguments sont agrégés comme les éléments du tableau Promise.all
		alors que je-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// Ceux-ci indiquent généralement une erreur du programmeur lors du développement,
// en avertir dès que possible plutôt que de les avaler par défaut.
var rerrorNames = /^(Eval|Interne|Plage|Référence|Syntaxe|Type|URI)Erreur$/ ;

jQuery.Deferred.exceptionHook = fonction (erreur, pile) {

	// Prise en charge : IE 8 - 9 uniquement
	// La console existe lorsque les outils de développement sont ouverts, ce qui peut arriver à tout moment
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
} ;




jQuery.readyException = fonction (erreur) {
	window.setTimeout( fonction() {
		lancer une erreur ;
	} );
} ;




// Le différé utilisé sur DOM prêt
var readyList = jQuery.Deferred();

jQuery.fn.ready = fonction( fn ) {

	readyList
		.alors( fn )

		// Enveloppez jQuery.readyException dans une fonction pour que la recherche
		// se produit au moment de la gestion des erreurs au lieu du rappel
		// enregistrement.
		.catch( fonction( erreur ) {
			jQuery.readyException( erreur );
		} );

	retournez ceci;
} ;

jQuery.extend( {

	// Le DOM est-il prêt à être utilisé ? Définir sur vrai une fois qu'il se produit.
	estPrêt : faux,

	// Un compteur pour suivre le nombre d'éléments à attendre avant
	// l'événement prêt se déclenche. Voir #6781
	prêtAttendre : 1,

	// Gérer lorsque le DOM est prêt
	prêt : fonction (attendre) {

		// Abandonner s'il y a des suspensions en attente ou si nous sommes déjà prêts
		si ( attendre === vrai ? --jQuery.readyWait : jQuery.isReady ) {
			retourner;
		}

		// Rappelez-vous que le DOM est prêt
		jQuery.isReady = vrai;

		// Si un événement DOM Ready normal s'est déclenché, décrémente et attend si nécessaire
		si ( attendez !== vrai && --jQuery.readyWait > 0 ) {
			retourner;
		}

		// S'il y a des fonctions liées, à exécuter
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// Le gestionnaire d'événements prêt et la méthode d'auto-nettoyage
fonction terminée() {
	document.removeEventListener( "DOMContentLoaded", terminé );
	window.removeEventListener( "charger", terminé );
	jQuery.ready();
}

// Attrape les cas où $(document).ready() est appelé
// après que l'événement du navigateur s'est déjà produit.
// Prise en charge : IE <=9 - 10 uniquement
// IE plus ancien signale parfois "interactif" trop tôt
if ( document.readyState === "complet" ||
	( document.readyState !== "chargement" && !document.documentElement.doScroll ) ) {

	// Gérez-le de manière asynchrone pour permettre aux scripts de retarder la disponibilité
	window.setTimeout( jQuery.ready );

} autre {

	// Utilisez le rappel d'événement pratique
	document.addEventListener( "DOMContentLoaded", terminé );

	// Un repli vers window.onload, qui fonctionnera toujours
	window.addEventListener( "charger", terminé );
}




// Méthode multifonctionnelle pour obtenir et définir les valeurs d'une collection
// La ou les valeurs peuvent éventuellement être exécutées s'il s'agit d'une fonction
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var je = 0,
		len = elems.longueur,
		vrac = clé == null ;

	// Définit plusieurs valeurs
	if ( toType( key ) === "object" ) {
		enchaînable = vrai ;
		pour ( je dans la clé ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Définit une valeur
	} sinon si ( valeur !== non défini ) {
		enchaînable = vrai ;

		si ( !estFonction( valeur ) ) {
			brut = vrai ;
		}

		si ( en masse ) {

			// Les opérations en bloc sont exécutées sur l'ensemble complet
			si ( brut ) {
				fn.call( éléments, valeur );
				fn = nul ;

			// ...sauf lors de l'exécution des valeurs de fonction
			} autre {
				volume = fn ;
				fn = fonction (élément, _clé, valeur) {
					return bulk.call( jQuery( elem ), value );
				} ;
			}
		}

		si ( fn ) {
			pour (; je < longueur; je++ ) {
				fn(
					elems[ i ], clé, raw ?
						valeur :
						value.call( elems[ je ], je, fn( elems[ je ], clé ) )
				);
			}
		}
	}

	si (chaîné) {
		éléments de retour ;
	}

	// Récupère
	si ( en masse ) {
		return fn.call( elems );
	}

	retour len ? fn( elems[ 0 ], key ) : emptyGet;
} ;


// Correspond à la chaîne en pointillés pour la camelisation
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([az])/g ;

// Utilisé par camelCase comme rappel pour replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convertit les tirets en camelCase ; utilisé par les modules css et data
// Prise en charge : IE <=9 - 11, Edge 12 - 15
// Microsoft a oublié d'augmenter le préfixe de son fournisseur (#9572)
fonction camelCase( chaîne ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = fonction (propriétaire) {

	// Accepte uniquement :
	// - Nœud
	// - Noeud.ELEMENT_NODE
	// - Noeud.DOCUMENT_NODE
	// - Objet
	// - Quelconque
	renvoie propriétaire.nodeType === 1 || propriétaire.nodeType === 9 || !( +owner.nodeType );
} ;




fonction Données() {
	this.expando = jQuery.expando + Data.uid++ ;
}

Données.uid = 1 ;

Données.prototype = {

	cache : fonction (propriétaire) {

		// Vérifie si l'objet propriétaire a déjà un cache
		var valeur = propriétaire[ this.expando ] ;

		// Sinon, créez-en un
		si ( !valeur ) {
			valeur = {} ;

			// Nous pouvons accepter des données pour les nœuds non élémentaires dans les navigateurs modernes,
			// mais nous ne devrions pas, voir #8335.
			// Retourne toujours un objet vide.
			si ( acceptData( propriétaire ) ) {

				// S'il s'agit d'un nœud peu susceptible d'être stringifié ou bouclé
				// utilise l'affectation simple
				si ( propriétaire.nodeType ) {
					propriétaire[ this.expando ] = valeur ;

				// Sinon, sécurisez-le dans une propriété non énumérable
				// configurable doit être vrai pour permettre à la propriété d'être
				// supprimé lorsque les données sont supprimées
				} autre {
					Object.defineProperty( propriétaire, this.expando, {
						valeur : valeur,
						paramétrable : vrai
					} );
				}
			}
		}

		valeur de retour ;
	},
	set : fonction (propriétaire, données, valeur) {
		accessoire var,
			cache = this.cache( propriétaire );

		// Descripteur : [ propriétaire, clé, valeur ] args
		// Toujours utiliser la clé camelCase (gh-2257)
		si ( type de données === "chaîne" ) {
			cache[ camelCase( data ) ] = valeur ;

		// Descripteur : [ propriétaire, { propriétés } ] args
		} autre {

			// Copie les propriétés une par une dans l'objet cache
			pour (prop dans les données) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		cache de retour ;
	},
	obtenir : fonction (propriétaire, clé) {
		touche de retour === indéfini ?
			this.cache( propriétaire ) :

			// Toujours utiliser la clé camelCase (gh-2257)
			propriétaire[ this.expando ] && propriétaire[ this.expando ][ camelCase( key ) ] ;
	},
	access: function( propriétaire, clé, valeur ) {

		// Dans les cas où soit :
		//
		// 1. Aucune clé n'a été spécifiée
		// 2. Une clé de chaîne a été spécifiée, mais aucune valeur n'a été fournie
		//
		// Prend le chemin "read" et permet à la méthode get de déterminer
		// quelle valeur retourner, respectivement soit :
		//
		// 1. L'intégralité de l'objet cache
		// 2. Les données stockées à la clé
		//
		si ( clé === indéfini ||
				( ( clé && type de clé === "chaîne" ) && valeur === indéfini ) ) {

			return this.get( propriétaire, clé );
		}

		// Lorsque la clé n'est pas une chaîne, ou à la fois une clé et une valeur
		// sont spécifiés, définis ou étendus (objets existants) avec soit :
		//
		// 1. Un objet de propriétés
		// 2. Une clé et une valeur
		//
		this.set( propriétaire, clé, valeur );

		// Puisque le chemin "set" peut avoir deux points d'entrée possibles
		// renvoie les données attendues en fonction du chemin emprunté[*]
		valeur de retour !== non défini ? valeur : clé ;
	},
	supprimer : fonction (propriétaire, clé) {
		var je,
			cache = propriétaire[ this.expando ] ;

		si (cache === non défini) {
			retourner;
		}

		si ( clé !== non défini ) {

			// Prise en charge d'un tableau ou d'une chaîne de clés séparées par des espaces
			if ( Array.isArray( clé ) ) {

				// Si clé est un tableau de clés...
				// Nous définissons toujours les clés camelCase, donc supprimez-les.
				key = key.map( camelCase );
			} autre {
				clé = camelCase( clé );

				// Si une clé avec des espaces existe, utilisez-la.
				// Sinon, créez un tableau en faisant correspondre des espaces non blancs
				clé = clé dans le cache ?
					[ clé ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = clé.longueur ;

			alors que je-- ) {
				supprimer le cache[ clé[ i ] ] ;
			}
		}

		// Supprime l'expando s'il n'y a plus de données
		if ( clé === indéfini || jQuery.isEmptyObject( cache ) ) {

			// Prise en charge : Chrome <=35 - 45
			// Les performances de Webkit & Blink souffrent lors de la suppression de propriétés
			// à partir des nœuds DOM, donc mis à undefined à la place
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bogue limité)
			si ( propriétaire.nodeType ) {
				propriétaire[ this.expando ] = non défini ;
			} autre {
				supprimer le propriétaire[ this.expando ] ;
			}
		}
	},
	hasData : fonction (propriétaire) {
		var cache = propriétaire[ this.expando ] ;
		renvoie le cache !== non défini && !jQuery.isEmptyObject( cache );
	}
} ;
var dataPriv = new Data();

var dataUser = new Data();



// Résumé de la mise en œuvre
//
// 1. Appliquer la surface API et la compatibilité sémantique avec la branche 1.9.x
// 2. Améliorer la maintenabilité du module en réduisant le stockage
// chemins vers un seul mécanisme.
// 3. Utilisez le même mécanisme unique pour prendre en charge les données "privées" et "utilisateurs".
// 4. _Never_ exposez des données "privées" au code utilisateur (TODO : Drop _data, _removeData)
// 5. Évitez d'exposer les détails d'implémentation sur les objets utilisateur (par exemple, les propriétés expando)
// 6. Fournir un chemin clair pour la mise à niveau de la mise en œuvre vers WeakMap en 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[AZ]/g ;

fonction getData( données ) {
	si (données === "vrai" ) {
		retourner vrai ;
	}

	si ( données === "faux" ) {
		retourner faux ;
	}

	si ( données === "null" ) {
		renvoie nul ;
	}

	// Ne convertit en nombre que s'il ne change pas la chaîne
	si (données === +données + "" ) {
		retour +données ;
	}

	si (rbrace.test(données)) {
		return JSON.parse( data );
	}

	renvoyer des données ;
}

function dataAttr( elem, key, data ) {
	nom de la variable ;

	// Si rien n'a été trouvé en interne, essayez d'en récupérer
	// données de l'attribut HTML5 data-*
	if ( data === indéfini && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( nom );

		si ( type de données === "chaîne" ) {
			essayer {
				données = getData( données );
			} attraper ( e ) {}

			// Assurez-vous que nous avons défini les données afin qu'elles ne soient pas modifiées ultérieurement
			dataUser.set( élément, clé, données );
		} autre {
			données = indéfini ;
		}
	}
	renvoyer des données ;
}

jQuery.extend( {
	aDonnées : fonction (élément) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	données : fonction (élément, nom, données) {
		return dataUser.access( elem, name, data );
	},

	removeData : fonction (élément, nom) {
		dataUser.remove( elem, nom );
	},

	// TODO : Maintenant que tous les appels à _data et _removeData ont été remplacés
	// avec des appels directs aux méthodes dataPriv, celles-ci peuvent être obsolètes.
	_data : fonction (élément, nom, données) {
		return dataPriv.access( elem, nom, données );
	},

	_removeData : fonction (élément, nom) {
		dataPriv.remove( elem, nom );
	}
} );

jQuery.fn.extend( {
	données : fonction (clé, valeur) {
		var i, nom, données,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Obtient toutes les valeurs
		si ( clé === indéfini ) {
			si ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.longueur ;
					alors que je-- ) {

						// Prise en charge : IE 11 uniquement
						// Les éléments attrs peuvent être nuls (#14894)
						si ( attrs[ je ] ) {
							nom = attrs[ je ].nom ;
							si ( nom.indexOf( "données-" ) === 0 ) {
								nom = camelCase( nom.tranche( 5 ) );
								dataAttr( elem, nom, data[ nom ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			renvoyer des données ;
		}

		// Définit plusieurs valeurs
		si ( type de clé === "objet" ) {
			return this.each( fonction() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			données var ;

			// L'objet jQuery appelant (l'élément correspond) n'est pas vide
			// (et a donc un élément apparaît à this[ 0 ]) et le
			// Le paramètre `value` n'était pas indéfini. Un objet jQuery vide
			// se traduira par `undefined` pour elem = this[ 0 ] qui sera
			// lève une exception si une tentative de lecture d'un cache de données est faite.
			if ( elem && valeur === indéfini ) {

				// Tentative d'obtention des données du cache
				// La clé sera toujours camelCased dans Data
				data = dataUser.get( elem, key );
				si ( données !== non défini ) {
					renvoyer des données ;
				}

				// Tentative de "découvrir" les données dans
				// Attrs de données personnalisées HTML5-*
				data = dataAttr( elem, key );
				si ( données !== non défini ) {
					renvoyer des données ;
				}

				// Nous avons vraiment essayé, mais les données n'existent pas.
				retourner;
			}

			// Définit les données...
			this.each( fonction() {

				// Nous stockons toujours la clé camelCased
				dataUser.set( this, key, value );
			} );
		}, null, valeur, arguments.length > 1, null, true );
	},

	removeData : fonction (clé) {
		return this.each( fonction() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	file d'attente : fonction (élément, type, données) {
		file d'attente var ;

		si (élément) {
			type = ( type || "fx" ) + "file d'attente" ;
			queue = dataPriv.get( elem, type );

			// Accélérez la sortie de file d'attente en sortant rapidement s'il ne s'agit que d'une recherche
			si ( données ) {
				if ( !file d'attente || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} autre {
					queue.push( data );
				}
			}
			file d'attente de retour || [] ;
		}
	},

	retirer de la file d'attente : fonction (élément, type) {
		type = type || "fx" ;

		var queue = jQuery.queue( elem, type ),
			startLength = queue.longueur,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( élément, type ),
			suivant = fonction() {
				jQuery.dequeue( elem, type );
			} ;

		// Si la file d'attente fx est retirée de la file d'attente, supprimez toujours la sentinelle de progression
		si ( fn === "en cours" ) {
			fn = queue.shift();
			startLength-- ;
		}

		si ( fn ) {

			// Ajout d'une sentinelle de progression pour empêcher la file d'attente fx d'être
			// automatiquement retiré de la file d'attente
			si ( tapez === "fx" ) {
				queue.unshift( "en cours" );
			}

			// Efface la dernière fonction d'arrêt de file d'attente
			supprimer hooks.stop ;
			fn.call( elem, next, crochets );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Non public - génère un objet queueHooks ou renvoie l'objet courant
	_queueHooks : fonction (élément, type) {
		clé var = type + "queueHooks" ;
		return dataPriv.get( elem, key ) || dataPriv.access( élément, clé, {
			vide : jQuery.Callbacks( "une fois la mémoire") .add( function() {
				dataPriv.remove( elem, [ type + "file d'attente", clé ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	file d'attente : fonction (type, données) {
		var setter = 2;

		si ( typede type !== "chaîne" ) {
			données = type ;
			type = "fx" ;
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		données de retour === non défini ?
			cette :
			this.each( fonction() {
				var queue = jQuery.queue( this, type, data );

				// Assure un crochet pour cette file d'attente
				jQuery._queueHooks( this, type );

				si ( type === "fx" && queue[ 0 ] !== "en cours" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	retirer de la file d'attente : fonction (type) {
		return this.each( fonction() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue : fonction (type) {
		return this.queue( type || "fx", [] );
	},

	// Obtient une promesse résolue lorsque les files d'attente d'un certain type
	// sont vidés (fx est le type par défaut)
	promesse : fonction (type, obj) {
		var tmp,
			compter = 1,
			différer = jQuery. Différé(),
			éléments = ceci,
			i = cette.longueur,
			résoudre = fonction() {
				si ( !( --count ) ) {
					defer.resolveWith( éléments, [ éléments ] );
				}
			} ;

		si ( typede type !== "chaîne" ) {
			obj = type ;
			type = indéfini ;
		}
		type = type || "fx" ;

		alors que je-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			si ( tmp && tmp.empty ) {
				compter++ ;
				tmp.empty.add( résoudre );
			}
		}
		résoudre();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i" );


var cssExpand = [ "Haut", "Droite", "Bas", "Gauche" ] ;

var documentElement = document.documentElement;



	var est attaché = fonction (élément) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composé = { composé : vrai } ;

	// Prise en charge : IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 uniquement
	// Vérifier l'attachement à travers les limites du DOM fantôme lorsque cela est possible (gh-3504)
	// Prise en charge : iOS 10.0-10.2 uniquement
	// Les premières versions d'iOS 10 prennent en charge `attachShadow` mais pas `getRootNode`,
	// conduit à des erreurs. Nous devons vérifier `getRootNode`.
	si ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode ( composé ) === elem.ownerDocument ;
		} ;
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree peut être appelé depuis la fonction jQuery#filter ;
		// dans ce cas, l'élément sera le deuxième argument
		elem = el || élément ;

		// Le style en ligne l'emporte sur tout
		return elem.style.display === "aucun" ||
			elem.style.display === "" &&

			// Sinon, vérifier le style calculé
			// Prise en charge : Firefox <=43 - 45
			// Les éléments déconnectés peuvent avoir un affichage calculé : aucun, donc confirmez d'abord que l'élément est
			// dans le document.
			est Attaché (élément) &&

			jQuery.css( elem, "display" ) === "aucun" ;
	} ;



fonction ajusterCSS( elem, prop, valueParts, tween ) {
	var ajusté, échelle,
		maxItérations = 20,
		valeuractuelle = tween ?
			une fonction() {
				return tween.cur();
			} :
			une fonction() {
				return jQuery.css( elem, prop, "" );
			},
		initiale = valeurcourante(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Le calcul de la valeur de départ est requis pour les incompatibilités potentielles d'unités
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unité !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unité ) {

		// Prise en charge : Firefox <=54
		// Réduisez de moitié la valeur cible de l'itération pour éviter les interférences des limites supérieures CSS (gh-2144)
		initiale = initiale / 2 ;

		// Unités de confiance rapportées par jQuery.css
		unité = unité || initialInUnit[ 3 ] ;

		// Approche itérative à partir d'un point de départ différent de zéro
		initialeDansUnité = +initiale || 1;

		tandis que ( maxIterations-- ) {

			// Évaluer et mettre à jour notre meilleure estimation (doubler les hypothèses qui se mettent à zéro).
			// Terminer si l'échelle est égale ou dépasse 1 (ce qui rend l'ancien*nouveau produit non positif).
			jQuery.style( elem, prop, initialInUnit + unit );
			si ( ( 1 - échelle ) * ( 1 - ( échelle = valeuractuelle() / initiale || 0,5 ) ) <= 0 ) {
				maxItérations = 0 ;
			}
			initialInUnit = initialInUnit / échelle ;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Assurez-vous que nous mettrons à jour les propriétés de l'interpolation plus tard
		valueParts = valueParts || [] ;
	}

	si (valeurParts) {
		initialInUnit = +initialInUnit || +initiale || 0 ;

		// Applique le décalage relatif (+=/-=) si spécifié
		ajusté = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ] ;
		si (interpolation) {
			tween.unit = unité ;
			tween.start = initialInUnit;
			tween.end = ajusté ;
		}
	}
	rendement ajusté ;
}


var defaultDisplayMap = {} ;

function getDefaultDisplay( elem ) {
	température variable,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ] ;

	si (afficher) {
		retour affichage ;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "aucun" ) {
		display = "bloc" ;
	}
	defaultDisplayMap[ nodeName ] = afficher ;

	retour affichage ;
}

function showHide( elements, show ) {
	affichage var, élément,
		valeurs = [],
		indice = 0,
		longueur = éléments.longueur ;

	// Détermine la nouvelle valeur d'affichage pour les éléments qui doivent changer
	for ( ; index < longueur; index++ ) {
		elem = éléments[ index ] ;
		if ( !elem.style ) {
			Continuez;
		}

		display = elem.style.display;
		si (montrer) {

			// Puisque nous forçons la visibilité sur les éléments cachés en cascade, un effet immédiat (et lent)
			// une vérification est requise dans cette première boucle sauf si nous avons une valeur d'affichage non vide (soit
			// en ligne ou sur le point d'être restauré)
			if ( display === "aucun" ) {
				valeurs[ index ] = dataPriv.get( elem, "display" ) || nul;
				si ( !valeurs[ index ] ) {
					elem.style.display = "" ;
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				valeurs[ index ] = getDefaultDisplay( elem );
			}
		} autre {
			si ( affiche !== "aucun" ) {
				valeurs[ index ] = "aucun" ;

				// Se souvenir de ce que nous écrasons
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Définit l'affichage des éléments dans une deuxième boucle pour éviter un reflow constant
	for ( index = 0; index < longueur; index++ ) {
		si ( valeurs[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	éléments de retour ;
}

jQuery.fn.extend( {
	afficher : fonction() {
		return showHide( this, true );
	},
	cacher : fonction() {
		return showHide( this );
	},
	bascule : fonction (état) {
		si ( type d'état === "booléen" ) {
			état de retour ? this.show() : this.hide();
		}

		return this.each( fonction() {
			si ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} autre {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([az][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( une fonction() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		entrée = document.createElement( "entrée" );

	// Prise en charge : Android 4.0 - 4.3 uniquement
	// Vérifier l'état perdu si le nom est défini (#11217)
	// Prise en charge : applications Web Windows (WWA)
	// `name` et `type` doivent utiliser .setAttribute pour WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "vérifié", "vérifié" );
	input.setAttribute( "nom", "t" );

	div.appendChild( input );

	// Prise en charge : Android <=4.1 uniquement
	// L'ancien WebKit ne clone pas correctement l'état coché dans les fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Prise en charge : IE <=11 uniquement
	// Assurez-vous que la zone de texte (et la case à cocher) defaultValue est correctement clonée
	div.innerHTML = "<textarea>x</textarea>" ;
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Prise en charge : IE <=9 uniquement
	// IE <=9 remplace les balises <option> par leur contenu lorsqu'elles sont insérées en dehors de
	// l'élément sélectionné.
	div.innerHTML = "<option></option>" ;
	support.option = !!div.lastChild;
} )();


// Nous devons fermer ces balises pour supporter XHTML (#13200)
var wrapMap = {

	// Les parseurs XHTML n'insèrent pas comme par magie des éléments dans le
	// de la même manière que les analyseurs de soupe de balises. Nous ne pouvons donc pas raccourcir
	// cela en omettant <tbody> ou d'autres éléments requis.
	tête : [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr : [ 2, "<table><tbody>", "</tbody></table>"],
	td : [ 3, "<table><tbody><tr>", "</tr></tbody></table>"],

	_défaut : [ 0, "", "" ]
} ;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead ;
wrapMap.th = wrapMap.td ;

// Prise en charge : IE <=9 uniquement
si ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ] ;
}


function getAll( contexte, tag ) {

	// Prise en charge : IE <=9 - 11 uniquement
	// Utilisez typeof pour éviter l'invocation de méthode sans argument sur les objets hôtes (#15151)
	varret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( balise || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( balise || "*" );

	} autre {
		ret = [] ;
	}

	if ( tag === indéfini || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ contexte ], ret );
	}

	retour ret;
}


// Marquer les scripts comme ayant déjà été évalués
function setGlobalEval( elems, refElements ) {
	var je = 0,
		l = elems.longueur ;

	pour (; je < l; je++ ) {
		dataPriv.set(
			éléments[ je ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( éléments, contexte, scripts, sélection, ignoré ) {
	var elem, tmp, étiquette, envelopper, attaché, j,
		fragment = context.createDocumentFragment(),
		nœuds = [],
		je = 0,
		l = elems.longueur ;

	pour (; je < l; je++ ) {
		elem = elems[ je ] ;

		si ( élém || élém === 0 ) {

			// Ajouter des nœuds directement
			if ( toType( elem ) === "object" ) {

				// Prise en charge : Android <= 4.0 uniquement, PhantomJS 1 uniquement
				// push.apply(_, arraylike) lance sur l'ancien WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convertit non-html en un nœud de texte
			} sinon si ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convertit le HTML en nœuds DOM
			} autre {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Désérialise une représentation standard
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapCarte[ balise ] || wrapMap._default ;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descendez à travers les wrappers jusqu'au bon contenu
				j = envelopper[ 0 ] ;
				tandis que ( j-- ) {
					tmp = tmp.dernierenfant ;
				}

				// Prise en charge : Android <= 4.0 uniquement, PhantomJS 1 uniquement
				// push.apply(_, arraylike) lance sur l'ancien WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Mémoriser le conteneur de niveau supérieur
				tmp = fragment.firstChild ;

				// Assurez-vous que les nœuds créés sont orphelins (#12392)
				tmp.textContent = "" ;
			}
		}
	}

	// Supprime le wrapper du fragment
	fragment.textContent = "" ;

	je = 0 ;
	tandis que ( ( elem = nodes[ i++ ] ) ) {

		// Ignore les éléments déjà dans la collection de contexte (trac-4087)
		if ( sélection && jQuery.inArray( elem, selection ) > -1 ) {
			si ( ignoré ) {
				ignoré.push( elem );
			}
			Continuez;
		}

		Attaché = isAttached( elem );

		// Ajoute au fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Conserver l'historique d'évaluation des scripts
		si Joint ) {
			setGlobalEval( tmp );
		}

		// Capture des exécutables
		si (scripts) {
			j = 0 ;
			tandis que ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	fragment de retour ;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/ ;

fonction retourVrai() {
	retourner vrai ;
}

fonction returnFalse() {
	retourner faux ;
}

// Prise en charge : IE <=9 - 11+
// focus() et blur() sont asynchrones, sauf lorsqu'ils sont no-op.
// Attendez-vous donc à ce que le focus soit synchrone lorsque l'élément est déjà actif,
// et flou pour être synchrone lorsque l'élément n'est pas déjà actif.
// (la mise au point et le flou sont toujours synchrones dans les autres navigateurs pris en charge,
// cela définit juste quand nous pouvons compter dessus).
function attendSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Prise en charge : IE <=9 uniquement
// L'accès à document.activeElement peut lancer de manière inattendue
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	essayer {
		retourner document.activeElement ;
	} attrape ( erreur ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origineFn, type ;

	// Les types peuvent être une carte de types/gestionnaires
	si ( typeof types === "objet" ) {

		// ( types-Objet, sélecteur, données )
		if ( typeof selector !== "string" ) {

			// ( types-Objet, données )
			données = données || sélecteur;
			sélecteur = indéfini ;
		}
		pour (taper les types) {
			on( elem, type, selector, data, types[ type ], one );
		}
		élément de retour ;
	}

	si (données == null && fn == null ) {

		// ( types, fn )
		fn = sélecteur ;
		données = sélecteur = indéfini ;
	} sinon si ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, sélecteur, fn )
			fn = données ;
			données = indéfini ;
		} autre {

			// ( types, données, fn )
			fn = données ;
			données = sélecteur ;
			sélecteur = indéfini ;
		}
	}
	si ( fn === faux ) {
		fn = retourFaux ;
	} sinon si ( !fn ) {
		élément de retour ;
	}

	si ( un === 1 ) {
		origineFn = fn ;
		fn = fonction (événement) {

			// Peut utiliser un ensemble vide, car l'événement contient les informations
			jQuery().off( événement );
			return origFn.apply( this, arguments );
		} ;

		// Utiliser le même guid pour que l'appelant puisse supprimer en utilisant origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( fonction() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Fonctions d'assistance pour la gestion des événements - ne faisant pas partie de l'interface publique.
 * Accessoires de la bibliothèque addEvent de Dean Edwards pour de nombreuses idées.
 */
jQuery.événement = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			événements, t, handleObj,
			spécial, gestionnaires, type, espaces de noms, origType,
			elemData = dataPriv.get( elem );

		// N'attache des événements qu'aux objets qui acceptent des données
		if ( !acceptData( elem ) ) {
			retourner;
		}

		// L'appelant peut transmettre un objet de données personnalisées à la place du gestionnaire
		si ( gestionnaire. gestionnaire ) {
			handleObjIn = gestionnaire ;
			gestionnaire = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Assurez-vous que les sélecteurs non valides lèvent des exceptions au moment de l'attachement
		// Évaluer par rapport à documentElement dans le cas où elem est un nœud non-élément (par exemple, document)
		si (sélecteur) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Assurez-vous que le gestionnaire a un identifiant unique, utilisé pour le retrouver/supprimer plus tard
		si ( !handler.guid ) {
			gestionnaire.guid = jQuery.guid++;
		}

		// Initialise la structure d'événement et le gestionnaire principal de l'élément, s'il s'agit du premier
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = fonction( e ) {

				// Ignorer le deuxième événement d'un jQuery.event.trigger() et
				// lorsqu'un événement est appelé après le déchargement d'une page
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : indéfini;
			} ;
		}

		// Gérer plusieurs événements séparés par un espace
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ] ;
		t = types.longueur ;
		tandis que ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [] ;
			type = origType = tmp[ 1 ] ;
			espaces de noms = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Il * doit * y avoir un type, aucun gestionnaire d'espace de noms attaché uniquement
			si ( !type ) {
				Continuez;
			}

			// Si l'événement change de type, utilisez les gestionnaires d'événements spéciaux pour le type modifié
			special = jQuery.event.special[ type ] || {} ;

			// Si le sélecteur est défini, détermine le type d'api d'événement spécial, sinon le type est donné
			type = ( selector ? special.delegateType : special.bindType ) || taper;

			// Mise à jour spéciale basée sur le type récemment réinitialisé
			special = jQuery.event.special[ type ] || {} ;

			// handleObj est passé à tous les gestionnaires d'événements
			handleObj = jQuery.extend( {
				type : type,
				type d'origine : type d'origine,
				données : données,
				gestionnaire : gestionnaire,
				guid : gestionnaire.guid,
				sélecteur : sélecteur,
				needContext : sélecteur && jQuery.expr.match.needsContext.test( sélecteur ),
				espace de noms : espaces de noms.join( "." )
			}, handleObjIn );

			// Initialise la file d'attente du gestionnaire d'événements si nous sommes le premier
			si ( !( gestionnaires = événements[ type ] ) ) {
				gestionnaires = événements[ type ] = [] ;
				handlers.delegateCount = 0 ;

				// N'utilisez addEventListener que si le gestionnaire d'événements spéciaux renvoie false
				si ( !spécial.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			si (spécial.add) {
				special.add.call( elem, handleObj );

				si ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid ;
				}
			}

			// Ajouter à la liste des gestionnaires de l'élément, délégués devant
			si (sélecteur) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} autre {
				handlers.push( handleObj );
			}

			// Gardez une trace des événements qui ont déjà été utilisés, pour l'optimisation des événements
			jQuery.event.global[ type ] = vrai;
		}

	},

	// Détacher un événement ou un ensemble d'événements d'un élément
	supprimer : function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			événements, t, handleObj,
			spécial, gestionnaires, type, espaces de noms, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			retourner;
		}

		// Une fois pour chaque type.namespace dans types ; le type peut être omis
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ] ;
		t = types.longueur ;
		tandis que ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [] ;
			type = origType = tmp[ 1 ] ;
			espaces de noms = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Dissocie tous les événements (sur cet espace de noms, s'il est fourni) pour l'élément
			si ( !type ) {
				for (tapez des événements) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				Continuez;
			}

			special = jQuery.event.special[ type ] || {} ;
			type = ( selector ? special.delegateType : special.bindType ) || taper;
			gestionnaires = événements[ type ] || [] ;
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Supprimer les événements correspondants
			origCount = j = handlers.length ;
			tandis que ( j-- ) {
				handleObj = gestionnaires[ j ] ;

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || sélecteur === handleObj.selector ||
						sélecteur === "**" && handleObj.selector ) ) {
					gestionnaires.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount-- ;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Supprime le gestionnaire d'événement générique si nous avons supprimé quelque chose et qu'il n'existe plus de gestionnaire
			// (évite le potentiel de récursivité sans fin lors de la suppression des gestionnaires d'événements spéciaux)
			if ( origCount && !handlers.length ) {
				si ( !special.demontage ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				supprimer les événements[ type ] ;
			}
		}

		// Supprime les données et l'expando s'il n'est plus utilisé
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "gérer les événements" );
		}
	},

	dispatch : fonction( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Créer un jQuery.Event accessible en écriture à partir de l'objet événement natif
			event = jQuery.event.fix( nativeEvent ),

			gestionnaires = (
				dataPriv.get( this, "events" ) || Objet.create( null )
			)[ type.événement ] || [],
			special = jQuery.event.special[ event.type ] || {} ;

		// Utilisez le jQuery.Event corrigé plutôt que l'événement natif (en lecture seule)
		args[ 0 ] = événement ;

		for ( je = 1; je < arguments.longueur; je++ ) {
			args[ je ] = arguments[ je ] ;
		}

		event.delegateTarget = this ;

		// Appelez le crochet preDispatch pour le type mappé, et laissez-le se libérer si vous le souhaitez
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			retourner;
		}

		// Déterminer les gestionnaires
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Exécuter les délégués en premier ; ils peuvent vouloir arrêter la propagation sous nous
		je = 0 ;
		while ( ( correspond = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem ;

			j = 0 ;
			tandis que ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Si l'événement est dans un espace de noms, alors chaque gestionnaire n'est appelé que s'il est
				// spécialement universel ou ses espaces de noms sont un sur-ensemble de l'événement.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj ;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					si ( ret !== indéfini ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Appel du hook postDispatch pour le type mappé
		si ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	gestionnaires : fonction (événement, gestionnaires) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = événement.cible ;

		// Trouver les gestionnaires délégués
		si ( nombre de délégués &&

			// Prise en charge : Internet Explorer <=9
			// Arbres d'instance SVG <use> trou noir (trac-13180)
			cur.nodeType &&

			// Prise en charge : Firefox <=42
			// Supprime les clics violant les spécifications indiquant un bouton de pointeur non principal (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Prise en charge : IE 11 uniquement
			// ...mais pas les "clics" des touches fléchées des entrées radio, qui peuvent avoir `bouton` -1 (gh-2343)
			!( event.type === "clic" && event.button >= 1 ) ) {

			for (; cur !== this; cur = cur.parentNode || this ) {

				// Ne vérifie pas les non-éléments (#13208)
				// Ne traite pas les clics sur les éléments désactivés (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [] ;
					matchedSelectors = {} ;
					pour ( je = 0; je < nombre de délégués; je ++ ) {
						handleObj = handlers[ i ] ;

						// N'entre pas en conflit avec les propriétés d'Object.prototype (#13203)
						sel = handleObj.selector + " " ;

						if (matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if (matchedSelectors[sel]) {
							matchedHandlers.push( handleObj );
						}
					}
					si (matchedHandlers.length) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Ajoute les gestionnaires restants (liés directement)
		cur = ceci ;
		si (déléguéCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegationCount ) } );
		}

		gestionnaire de retourQueue ;
	},

	addProp : fonction (nom, crochet) {
		Object.defineProperty( jQuery.Event.prototype, nom, {
			énumérable : vrai,
			paramétrable : vrai,

			obtenir : isFunction( hook ) ?
				une fonction() {
					si ( this.originalEvent ) {
						crochet de retour (this.originalEvent);
					}
				} :
				une fonction() {
					si ( this.originalEvent ) {
						retourne this.originalEvent[ nom ] ;
					}
				},

			ensemble : fonction (valeur) {
				Object.defineProperty( this, name, {
					énumérable : vrai,
					paramétrable : vrai,
					inscriptible : vrai,
					valeur : valeur
				} );
			}
		} );
	},

	correction : function( originalEvent ) {
		retourner originalEvent[ jQuery.expando ] ?
			événement d'origine :
			nouveau jQuery.Event( originalEvent );
	},

	spécial: {
		charger: {

			// Empêcher les événements image.load déclenchés de se propager à window.load
			pas de bulle : vrai
		},
		Cliquez sur: {

			// Utiliser l'événement natif pour garantir l'état correct des entrées vérifiables
			configuration : fonction (données) {

				// Pour une compressibilité mutuelle avec _default, remplacez `this` access par une variable locale.
				// `|| data` est un code mort destiné uniquement à préserver la variable par minification.
				var el = ceci || Les données;

				// Réclamer le premier gestionnaire
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					levierNative( el, "clic", returnTrue );
				}

				// Renvoie false pour permettre un traitement normal dans l'appelant
				retourner faux ;
			},
			déclencheur : fonction (données) {

				// Pour une compressibilité mutuelle avec _default, remplacez `this` access par une variable locale.
				// `|| data` est un code mort destiné uniquement à préserver la variable par minification.
				var el = ceci || Les données;

				// Force la configuration avant de déclencher un clic
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					levierNative( el, "clic" );
				}

				// Renvoie non faux pour permettre la propagation normale du chemin d'événement
				retourner vrai ;
			},

			// Pour la cohérence entre navigateurs, supprimez le .click() natif sur les liens
			// L'empêcher également si nous sommes actuellement à l'intérieur d'une pile d'événements natifs à effet de levier
			_default : fonction (événement) {
				var cible = événement.cible ;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( cible, "clic" ) ||
					nodeName( cible, "a" );
			}
		},

		avant le déchargement : {
			postDispatch : fonction (événement) {

				// Prise en charge : Firefox 20+
				// Firefox n'alerte pas si le champ returnValue n'est pas défini.
				if ( event.result !== non défini && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
} ;

// S'assure de la présence d'un écouteur d'événement qui gère les événements déclenchés manuellement
// événements synthétiques en interrompant la progression jusqu'à ce qu'ils soient réinvoqués en réponse à
// événements *natifs* qu'il déclenche directement, garantissant que les changements d'état ont
// s'est déjà produit avant que d'autres écouteurs ne soient invoqués.
function levierNative( el, type, expectSync ) {

	// Missing expectSync indique un appel de déclencheur, qui doit forcer la configuration via jQuery.event.add
	si ( !attendezSync ) {
		si ( dataPriv.get( el, type ) === indéfini ) {
			jQuery.event.add( el, type, returnTrue );
		}
		retourner;
	}

	// Enregistre le contrôleur en tant que gestionnaire universel spécial pour tous les espaces de noms d'événements
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		espace de noms : faux,
		gestionnaire : fonction (événement) {
			var notAsync, résultat,
				enregistré = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrompre le traitement de l'événement externe synthétique .trigger()ed
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
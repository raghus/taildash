const words = [
  'ABBA',
  'ABBE',
  'ABLE',
  'ABLY',
  'ABUT',
  'ACED',
  'ACES',
  'ACHE',
  'ACID',
  'ACME',
  'ACNE',
  'ACRE',
  'ACTA',
  'ACTS',
  'ACYL',
  'ADDS',
  'AERO',
  'AFAR',
  'AFRO',
  'AGAR',
  'AGED',
  'AGER',
  'AGES',
  'AIDA',
  'AIDE',
  'AIDS',
  'AIMS',
  'AIRS',
  'AIRY',
  'AJAR',
  'AKIN',
  'ALAP',
  'ALAS',
  'ALBA',
  'ALEC',
  'ALGA',
  'ALLY',
  'ALMA',
  'ALMS',
  'ALOE',
  'ALPS',
  'ALSO',
  'ALTO',
  'ALUM',
  'AMEN',
  'AMES',
  'AMID',
  'AMIN',
  'AMIR',
  'AMIS',
  'AMMO',
  'AMPS',
  'ANAL',
  'ANCE',
  'ANEW',
  'ANNA',
  'ANNO',
  'ANON',
  'ANTE',
  'ANTI',
  'ANTS',
  'ANUS',
  'APES',
  'APEX',
  'APSE',
  'AQUA',
  'ARCH',
  'ARCO',
  'ARCS',
  'AREA',
  'ARES',
  'ARIA',
  'ARID',
  'ARMS',
  'ARMY',
  'ARSE',
  'ARTS',
  'ASKS',
  'ATOM',
  'ATOP',
  'AULD',
  'AUNT',
  'AURA',
  'AUTO',
  'AVER',
  'AVID',
  'AWAY',
  'AWED',
  'AWRY',
  'AXEL',
  'AXES',
  'AXIS',
  'AXLE',
  'AXON',
  'BAAL',
  'BABA',
  'BABE',
  'BABU',
  'BABY',
  'BACH',
  'BACK',
  'BADE',
  'BAGS',
  'BAHT',
  'BAIL',
  'BAIT',
  'BAKE',
  'BALD',
  'BALE',
  'BALK',
  'BALL',
  'BALM',
  'BAND',
  'BANE',
  'BANG',
  'BANK',
  'BANS',
  'BAPU',
  'BARB',
  'BARD',
  'BARE',
  'BARK',
  'BARN',
  'BARS',
  'BASE',
  'BASH',
  'BASK',
  'BASS',
  'BAST',
  'BATE',
  'BATH',
  'BATS',
  'BAUD',
  'BAYS',
  'BEAD',
  'BEAK',
  'BEAM',
  'BEAN',
  'BEAR',
  'BEAT',
  'BEAU',
  'BECK',
  'BEDE',
  'BEDS',
  'BEEF',
  'BEEN',
  'BEEP',
  'BEER',
  'BEES',
  'BEET',
  'BEGS',
  'BEIN',
  'BELL',
  'BELT',
  'BEND',
  'BENE',
  'BENI',
  'BENT',
  'BERG',
  'BEST',
  'BETA',
  'BETH',
  'BETS',
  'BHAI',
  'BIAS',
  'BIDE',
  'BIDS',
  'BIEN',
  'BIER',
  'BIKE',
  'BILE',
  'BILK',
  'BILL',
  'BIND',
  'BING',
  'BINS',
  'BIOS',
  'BIRD',
  'BITE',
  'BITS',
  'BLAB',
  'BLAH',
  'BLED',
  'BLEW',
  'BLIP',
  'BLOB',
  'BLOC',
  'BLOG',
  'BLOT',
  'BLOW',
  'BLUE',
  'BLUR',
  'BOAR',
  'BOAS',
  'BOAT',
  'BOCK',
  'BODE',
  'BODY',
  'BOGS',
  'BOIL',
  'BOLD',
  'BOLL',
  'BOLT',
  'BOMB',
  'BONA',
  'BOND',
  'BONE',
  'BONG',
  'BONK',
  'BONY',
  'BOOB',
  'BOOK',
  'BOOL',
  'BOOM',
  'BOON',
  'BOOR',
  'BOOS',
  'BOOT',
  'BORA',
  'BORE',
  'BORN',
  'BOSS',
  'BOTH',
  'BOTS',
  'BOUT',
  'BOWL',
  'BOWS',
  'BOYS',
  'BOXY',
  'BRAD',
  'BRAG',
  'BRAN',
  'BRAS',
  'BRAT',
  'BRAY',
  'BRED',
  'BREW',
  'BRIG',
  'BRIM',
  'BRIT',
  'BROS',
  'BROW',
  'BUCK',
  'BUDS',
  'BUFF',
  'BUGS',
  'BULB',
  'BULK',
  'BULL',
  'BUMP',
  'BUMS',
  'BUND',
  'BUNK',
  'BUNS',
  'BUNT',
  'BUOY',
  'BURG',
  'BURN',
  'BURR',
  'BURY',
  'BUSH',
  'BUSS',
  'BUST',
  'BUSY',
  'BUTE',
  'BUTT',
  'BUYS',
  'BUZZ',
  'BYTE',
  'CABS',
  'CADE',
  'CAFE',
  'CAGE',
  'CAIN',
  'CAKE',
  'CALF',
  'CALL',
  'CALM',
  'CAME',
  'CAMP',
  'CAMS',
  'CANE',
  'CANS',
  'CANT',
  'CAPE',
  'CAPO',
  'CAPS',
  'CARB',
  'CARD',
  'CARE',
  'CARL',
  'CARP',
  'CARR',
  'CARS',
  'CART',
  'CASA',
  'CASE',
  'CASH',
  'CASK',
  'CAST',
  'CATE',
  'CATS',
  'CAVA',
  'CAVE',
  'CEDE',
  'CELL',
  'CENT',
  'CERT',
  'CESS',
  'CHAD',
  'CHAI',
  'CHAM',
  'CHAO',
  'CHAP',
  'CHAR',
  'CHAS',
  'CHAT',
  'CHEF',
  'CHEW',
  'CHEZ',
  'CHIA',
  'CHIC',
  'CHIN',
  'CHIP',
  'CHIT',
  'CHOP',
  'CHOU',
  'CHOW',
  'CHUM',
  'CINE',
  'CITE',
  'CITY',
  'CLAD',
  'CLAM',
  'CLAN',
  'CLAP',
  'CLAW',
  'CLAY',
  'CLEM',
  'CLIP',
  'CLIT',
  'CLOD',
  'CLOG',
  'CLOT',
  'CLUB',
  'CLUE',
  'COAL',
  'COAT',
  'COAX',
  'COBB',
  'COCA',
  'COCK',
  'COCO',
  'CODA',
  'CODE',
  'COED',
  'COIL',
  'COIN',
  'COKE',
  'COLA',
  'COLD',
  'COLE',
  'COLL',
  'COLS',
  'COLT',
  'COMA',
  'COMB',
  'COME',
  'CONE',
  'CONS',
  'COOK',
  'COOL',
  'COON',
  'COOP',
  'COOS',
  'COOT',
  'COPE',
  'COPS',
  'COPY',
  'CORD',
  'CORE',
  'CORK',
  'CORN',
  'CORY',
  'COST',
  'COSY',
  'COTE',
  'COTS',
  'COUP',
  'COUR',
  'COVE',
  'COWL',
  'COWS',
  'COZY',
  'CRAB',
  'CRAG',
  'CRAM',
  'CRAP',
  'CRAW',
  'CRAY',
  'CREE',
  'CREW',
  'CRIB',
  'CRIT',
  'CROP',
  'CROW',
  'CRUX',
  'CUBE',
  'CUBS',
  'CUES',
  'CUFF',
  'CULT',
  'CUNT',
  'CUPS',
  'CURB',
  'CURD',
  'CURE',
  'CURL',
  'CURR',
  'CURT',
  'CUSP',
  'CUTE',
  'CUTS',
  'CYST',
  'CZAR',
  'DADA',
  'DAFT',
  'DAHL',
  'DAIS',
  'DALE',
  'DAME',
  'DAMN',
  'DAMP',
  'DAMS',
  'DANG',
  'DANK',
  'DANS',
  'DARE',
  'DARK',
  'DARN',
  'DART',
  'DASH',
  'DATA',
  'DATE',
  'DAVY',
  'DAWN',
  'DAYS',
  'DAZE',
  'DEAD',
  'DEAF',
  'DEAL',
  'DEAN',
  'DEAR',
  'DEBS',
  'DEBT',
  'DECK',
  'DECO',
  'DEED',
  'DEEM',
  'DEEP',
  'DEER',
  'DEFT',
  'DEFY',
  'DELI',
  'DELL',
  'DEMI',
  'DEMO',
  'DENS',
  'DENT',
  'DENY',
  'DERM',
  'DESK',
  'DEUS',
  'DEVA',
  'DIAL',
  'DICE',
  'DICK',
  'DIDO',
  'DIED',
  'DIES',
  'DIET',
  'DIFF',
  'DIGS',
  'DIKE',
  'DILL',
  'DIME',
  'DINE',
  'DING',
  'DINO',
  'DINT',
  'DIPS',
  'DIRE',
  'DIRK',
  'DIRT',
  'DISC',
  'DISH',
  'DISK',
  'DISS',
  'DIVE',
  'DOCK',
  'DOCS',
  'DOER',
  'DOES',
  'DOGS',
  'DOIT',
  'DOLE',
  'DOLL',
  'DOLT',
  'DOME',
  'DONA',
  'DONE',
  'DONG',
  'DONS',
  'DOOM',
  'DOOR',
  'DOPA',
  'DOPE',
  'DORE',
  'DORK',
  'DORM',
  'DOSE',
  'DOTE',
  'DOTH',
  'DOTS',
  'DOTY',
  'DOUR',
  'DOVE',
  'DOWN',
  'DOZE',
  'DRAB',
  'DRAG',
  'DRAM',
  'DRAW',
  'DREW',
  'DRIP',
  'DROP',
  'DRUB',
  'DRUG',
  'DRUM',
  'DUAL',
  'DUBS',
  'DUCE',
  'DUCK',
  'DUCT',
  'DUDE',
  'DUEL',
  'DUES',
  'DUET',
  'DUFF',
  'DUKE',
  'DULL',
  'DULY',
  'DUMA',
  'DUMB',
  'DUMP',
  'DUNE',
  'DUNG',
  'DUNK',
  'DUNS',
  'DUPE',
  'DURA',
  'DUSK',
  'DUST',
  'DUTY',
  'DYAD',
  'DYED',
  'DYER',
  'DYES',
  'DYKE',
  'EACH',
  'EARL',
  'EARN',
  'EARS',
  'EASE',
  'EAST',
  'EASY',
  'EATS',
  'ECHO',
  'EDDY',
  'EDGE',
  'EDGY',
  'EDIT',
  'EELS',
  'EGGS',
  'EGOS',
  'EINE',
  'ELAN',
  'ELMS',
  'ELSE',
  'EMIR',
  'EMIT',
  'EMMA',
  'EMMY',
  'ENDS',
  'ENVY',
  'EPIC',
  'ERAS',
  'ERGO',
  'ERIC',
  'EROS',
  'ERST',
  'ESSE',
  'ETAT',
  'ETCH',
  'EURO',
  'EVEN',
  'EVER',
  'EVIL',
  'EWES',
  'EXAM',
  'EXEC',
  'EXIT',
  'EXON',
  'EXPO',
  'EYED',
  'EYES',
  'EYRE',
  'FACE',
  'FACT',
  'FADE',
  'FADS',
  'FAIL',
  'FAIN',
  'FAIR',
  'FAKE',
  'FALL',
  'FAME',
  'FANG',
  'FANS',
  'FARE',
  'FARM',
  'FART',
  'FAST',
  'FATE',
  'FATS',
  'FAUT',
  'FAUX',
  'FAWN',
  'FAZE',
  'FEAR',
  'FEAT',
  'FEDS',
  'FEED',
  'FEEL',
  'FEES',
  'FEET',
  'FELL',
  'FELT',
  'FEND',
  'FERN',
  'FETE',
  'FEUD',
  'FIAT',
  'FIEF',
  'FIFE',
  'FIGS',
  'FILE',
  'FILL',
  'FILM',
  'FILS',
  'FIND',
  'FINE',
  'FINK',
  'FINS',
  'FIRE',
  'FIRM',
  'FIRS',
  'FISH',
  'FISK',
  'FIST',
  'FITS',
  'FIVE',
  'FIZZ',
  'FLAB',
  'FLAG',
  'FLAK',
  'FLAM',
  'FLAP',
  'FLAT',
  'FLAW',
  'FLAX',
  'FLAY',
  'FLEA',
  'FLED',
  'FLEE',
  'FLEW',
  'FLEX',
  'FLIP',
  'FLIT',
  'FLOE',
  'FLOP',
  'FLOR',
  'FLOW',
  'FLUE',
  'FLUX',
  'FOAL',
  'FOAM',
  'FOCI',
  'FOES',
  'FOIL',
  'FOLD',
  'FOLK',
  'FOND',
  'FONT',
  'FOOD',
  'FOOL',
  'FOOT',
  'FORA',
  'FORD',
  'FORE',
  'FORK',
  'FORM',
  'FORT',
  'FOSS',
  'FOUL',
  'FOUR',
  'FOWL',
  'FRAT',
  'FRAU',
  'FRAY',
  'FREE',
  'FRET',
  'FROG',
  'FROM',
  'FUCK',
  'FUEL',
  'FUJI',
  'FULL',
  'FUME',
  'FUND',
  'FUNG',
  'FUNK',
  'FURL',
  'FURS',
  'FURY',
  'FUSE',
  'FUSS',
  'GAGE',
  'GAIN',
  'GAIT',
  'GALA',
  'GALE',
  'GALL',
  'GAMA',
  'GAME',
  'GAMP',
  'GANG',
  'GAOL',
  'GAPE',
  'GAPS',
  'GARB',
  'GASH',
  'GASP',
  'GATE',
  'GAVE',
  'GAYS',
  'GAZE',
  'GEAR',
  'GEEK',
  'GELS',
  'GEMS',
  'GENE',
  'GENS',
  'GENT',
  'GERM',
  'GETS',
  'GHAT',
  'GHEE',
  'GIFT',
  'GILD',
  'GILL',
  'GILT',
  'GINN',
  'GIRL',
  'GIST',
  'GIVE',
  'GLAD',
  'GLEE',
  'GLEN',
  'GLIA',
  'GLIB',
  'GLOW',
  'GLUE',
  'GLUM',
  'GLUT',
  'GOAD',
  'GOAL',
  'GOAT',
  'GODS',
  'GOES',
  'GOFF',
  'GOLD',
  'GOLF',
  'GONE',
  'GONG',
  'GOOD',
  'GOOF',
  'GOON',
  'GORE',
  'GORY',
  'GOSH',
  'GOSS',
  'GOTH',
  'GOUT',
  'GOWN',
  'GRAB',
  'GRAD',
  'GRAM',
  'GRAN',
  'GRAY',
  'GREW',
  'GREY',
  'GRID',
  'GRIM',
  'GRIN',
  'GRIP',
  'GRIT',
  'GROW',
  'GRUB',
  'GULF',
  'GULL',
  'GULP',
  'GUMS',
  'GUNK',
  'GUNS',
  'GURU',
  'GUSH',
  'GUST',
  'GUTS',
  'GUYS',
  'GYRO',
  'HACK',
  'HAGS',
  'HAIL',
  'HAIR',
  'HAJI',
  'HAJJ',
  'HALE',
  'HALF',
  'HALL',
  'HALO',
  'HALT',
  'HAMS',
  'HAND',
  'HANG',
  'HANK',
  'HARD',
  'HARE',
  'HARK',
  'HARM',
  'HARP',
  'HART',
  'HASH',
  'HASP',
  'HAST',
  'HATE',
  'HATH',
  'HATS',
  'HAUL',
  'HAUT',
  'HAVE',
  'HAWK',
  'HAYS',
  'HAZE',
  'HAZY',
  'HEAD',
  'HEAL',
  'HEAP',
  'HEAR',
  'HEAT',
  'HECK',
  'HEED',
  'HEEL',
  'HEFT',
  'HEIR',
  'HELD',
  'HELL',
  'HELM',
  'HELP',
  'HEME',
  'HEMP',
  'HENS',
  'HERB',
  'HERD',
  'HERE',
  'HERO',
  'HERS',
  'HEWN',
  'HICK',
  'HIDE',
  'HIGH',
  'HIKE',
  'HILL',
  'HILT',
  'HIND',
  'HINT',
  'HIPS',
  'HIRE',
  'HISS',
  'HIST',
  'HITS',
  'HIVE',
  'HOAR',
  'HOAX',
  'HOCK',
  'HOES',
  'HOGG',
  'HOGS',
  'HOLD',
  'HOLE',
  'HOLM',
  'HOLT',
  'HOLY',
  'HOME',
  'HOMO',
  'HONE',
  'HONG',
  'HONS',
  'HOOD',
  'HOOF',
  'HOOK',
  'HOOP',
  'HOOT',
  'HOPE',
  'HOPS',
  'HORA',
  'HORN',
  'HORS',
  'HOSE',
  'HOST',
  'HOTS',
  'HOUR',
  'HOVE',
  'HOWE',
  'HOWL',
  'HUBS',
  'HUCK',
  'HUES',
  'HUFF',
  'HUGE',
  'HUGS',
  'HULK',
  'HULL',
  'HUMP',
  'HUMS',
  'HUNG',
  'HUNK',
  'HUNS',
  'HUNT',
  'HURL',
  'HURT',
  'HUSH',
  'HUSK',
  'HUTS',
  'HYMN',
  'HYPE',
  'HYPO',
  'IBIS',
  'ICED',
  'ICES',
  'ICON',
  'IDEA',
  'IDEE',
  'IDEM',
  'IDLE',
  'IDLY',
  'IDOL',
  'ILIA',
  'ILLS',
  'IMAM',
  'INCH',
  'INFO',
  'INGS',
  'INKS',
  'INKY',
  'INNS',
  'INTO',
  'IONS',
  'IOTA',
  'IRIS',
  'IRON',
  'ISLE',
  'ITCH',
  'ITEM',
  'JABS',
  'JACK',
  'JADE',
  'JAIL',
  'JAKE',
  'JAMB',
  'JAMS',
  'JANE',
  'JAPS',
  'JARS',
  'JAVA',
  'JAWS',
  'JAYS',
  'JAZZ',
  'JEAN',
  'JEEP',
  'JEER',
  'JEFF',
  'JERK',
  'JESS',
  'JEST',
  'JETS',
  'JEWS',
  'JIGS',
  'JILL',
  'JIVE',
  'JOBS',
  'JOGS',
  'JOKE',
  'JOLL',
  'JOCK',
  'JOEY',
  'JOHN',
  'JOIN',
  'JOKE',
  'JOLT',
  'JONG',
  'JOSH',
  'JOTS',
  'JOUR',
  'JOYS',
  'JUDY',
  'JUGS',
  'JUKE',
  'JUMP',
  'JUNK',
  'JURA',
  'JURE',
  'JURY',
  'JUST',
  'JUTE',
  'JUTS',
  'KALE',
  'KAMI',
  'KANE',
  'KANG',
  'KEEL',
  'KEEN',
  'KEEP',
  'KELP',
  'KEMP',
  'KENT',
  'KEPT',
  'KERN',
  'KETO',
  'KEYS',
  'KHAN',
  'KICK',
  'KIDS',
  'KIEV',
  'KILL',
  'KILN',
  'KILO',
  'KILT',
  'KIND',
  'KING',
  'KINK',
  'KINO',
  'KIRK',
  'KISS',
  'KITE',
  'KITS',
  'KIVA',
  'KNEE',
  'KNEW',
  'KNIT',
  'KNOB',
  'KNOT',
  'KNOW',
  'KOAN',
  'KOHL',
  'KOLA',
  'KOOK',
  'KRIS',
  'KYLE',
  'LABS',
  'LACE',
  'LACK',
  'LACY',
  'LADS',
  'LADY',
  'LAGS',
  'LAID',
  'LAIN',
  'LAIR',
  'LAKE',
  'LAKH',
  'LAMA',
  'LAMB',
  'LAME',
  'LAMP',
  'LANA',
  'LAND',
  'LANE',
  'LANG',
  'LAPS',
  'LARD',
  'LARK',
  'LARS',
  'LASH',
  'LASS',
  'LAST',
  'LATE',
  'LATH',
  'LAUD',
  'LAVA',
  'LAVE',
  'LAWN',
  'LAWS',
  'LAYS',
  'LAZE',
  'LAZY',
  'LEAD',
  'LEAF',
  'LEAK',
  'LEAM',
  'LEAN',
  'LEAP',
  'LEAR',
  'LEAS',
  'LEDE',
  'LEEK',
  'LEER',
  'LEES',
  'LEFT',
  'LEGS',
  'LEND',
  'LENS',
  'LENT',
  'LESS',
  'LEST',
  'LETS',
  'LEVY',
  'LEWD',
  'LIAR',
  'LIAS',
  'LICE',
  'LICK',
  'LIDS',
  'LIED',
  'LIEN',
  'LIES',
  'LIEU',
  'LIFE',
  'LIFT',
  'LIKE',
  'LILY',
  'LIMA',
  'LIMB',
  'LIME',
  'LIMO',
  'LIMP',
  'LIND',
  'LINE',
  'LING',
  'LINK',
  'LINN',
  'LINT',
  'LION',
  'LIPS',
  'LIRA',
  'LIRE',
  'LISP',
  'LIST',
  'LITE',
  'LIVE',
  'LOAD',
  'LOAF',
  'LOAM',
  'LOAN',
  'LOBE',
  'LOBS',
  'LOCH',
  'LOCI',
  'LOCK',
  'LOCO',
  'LODE',
  'LOFT',
  'LOGO',
  'LOGS',
  'LOIN',
  'LOLL',
  'LOMA',
  'LOME',
  'LONE',
  'LONG',
  'LOOK',
  'LOOM',
  'LOON',
  'LOOP',
  'LOOS',
  'LOOT',
  'LOPE',
  'LORD',
  'LORE',
  'LOSE',
  'LOSS',
  'LOST',
  'LOTH',
  'LOTS',
  'LOUD',
  'LOUT',
  'LOVE',
  'LOWE',
  'LOWS',
  'LUBE',
  'LUCE',
  'LUCK',
  'LUGS',
  'LUKE',
  'LULL',
  'LULU',
  'LUMP',
  'LUNA',
  'LUNG',
  'LURE',
  'LURK',
  'LUSH',
  'LUST',
  'LUTE',
  'LUTZ',
  'LYME',
  'LYNX',
  'LYRE',
  'MAAS',
  'MACE',
  'MACH',
  'MACK',
  'MADE',
  'MAGE',
  'MAGI',
  'MAHA',
  'MAID',
  'MAIL',
  'MAIN',
  'MAIR',
  'MAKE',
  'MALA',
  'MALE',
  'MALL',
  'MALM',
  'MALT',
  'MAMA',
  'MANA',
  'MANE',
  'MANI',
  'MANO',
  'MANS',
  'MANY',
  'MAPS',
  'MARA',
  'MARC',
  'MARE',
  'MARK',
  'MARL',
  'MARS',
  'MART',
  'MARY',
  'MASH',
  'MASK',
  'MASS',
  'MAST',
  'MATE',
  'MATH',
  'MATS',
  'MAUD',
  'MAWR',
  'MAYA',
  'MAYO',
  'MAYS',
  'MAZE',
  'MEAD',
  'MEAL',
  'MEAN',
  'MEAT',
  'MEEK',
  'MEER',
  'MEET',
  'MEGA',
  'MEIN',
  'MELT',
  'MEME',
  'MEMO',
  'MEMS',
  'MEND',
  'MENG',
  'MENT',
  'MENU',
  'MERE',
  'MESA',
  'MESH',
  'MESS',
  'META',
  'METH',
  'METS',
  'MICA',
  'MICE',
  'MICK',
  'MIDI',
  'MIEN',
  'MIKE',
  'MILD',
  'MILE',
  'MILK',
  'MILL',
  'MILO',
  'MIME',
  'MINA',
  'MIND',
  'MINE',
  'MING',
  'MINI',
  'MINK',
  'MINT',
  'MIRE',
  'MIRO',
  'MISE',
  'MISS',
  'MIST',
  'MITE',
  'MITT',
  'MOAN',
  'MOAT',
  'MOBS',
  'MOBY',
  'MOCK',
  'MODE',
  'MOHR',
  'MOLD',
  'MOLE',
  'MOLL',
  'MOLT',
  'MOMS',
  'MONA',
  'MONK',
  'MONO',
  'MONS',
  'MOOD',
  'MOON',
  'MOOR',
  'MOOT',
  'MORA',
  'MORE',
  'MORN',
  'MORT',
  'MOSS',
  'MOST',
  'MOTE',
  'MOTH',
  'MOTS',
  'MOTT',
  'MOVE',
  'MUCH',
  'MUCK',
  'MUDS',
  'MUFF',
  'MUGS',
  'MUIR',
  'MULE',
  'MULL',
  'MUNI',
  'MUON',
  'MUSE',
  'MUSH',
  'MUSK',
  'MUST',
  'MUTE',
  'MUTT',
  'MYTH',
  'NACH',
  'NADA',
  'NAGA',
  'NAIL',
  'NAME',
  'NANA',
  'NANG',
  'NAPA',
  'NAPE',
  'NAPS',
  'NAVE',
  'NAVY',
  'NAZI',
  'NEAL',
  'NEAR',
  'NEAT',
  'NECK',
  'NEED',
  'NEEM',
  'NEON',
  'NERD',
  'NERF',
  'NESS',
  'NEST',
  'NETS',
  'NEVI',
  'NEWS',
  'NEWT',
  'NEXT',
  'NICE',
  'NICK',
  'NIGH',
  'NILS',
  'NINE',
  'NISI',
  'NOAH',
  'NODE',
  'NODS',
  'NOEL',
  'NOIR',
  'NOME',
  'NONE',
  'NOOK',
  'NOON',
  'NOPE',
  'NORM',
  'NOSE',
  'NOSH',
  'NOSY',
  'NOTE',
  'NOUN',
  'NOUS',
  'NOVA',
  'NUDE',
  'NULL',
  'NUMB',
  'NUNS',
  'NURS',
  'NUTS',
  'OAKS',
  'OARS',
  'OATH',
  'OATS',
  'OBEY',
  'OBOE',
  'ODDS',
  'ODES',
  'ODOR',
  'OFFS',
  'OGRE',
  'OHMS',
  'OILS',
  'OILY',
  'OKAY',
  'OLDS',
  'OMEN',
  'OMER',
  'OMIT',
  'ONCE',
  'ONES',
  'ONLY',
  'ONTO',
  'ONUS',
  'OOZE',
  'OPAL',
  'OPEN',
  'OPUS',
  'ORAL',
  'ORES',
  'ORGY',
  'OTTO',
  'OUCH',
  'OURS',
  'OUST',
  'OUTS',
  'OVAL',
  'OVEN',
  'OVER',
  'OVUM',
  'OWED',
  'OWES',
  'OWLS',
  'OWNS',
  'OXEN',
  'PACE',
  'PACK',
  'PACO',
  'PACT',
  'PADS',
  'PAGE',
  'PAID',
  'PAIL',
  'PAIN',
  'PAIR',
  'PALE',
  'PALL',
  'PALM',
  'PALS',
  'PANE',
  'PANG',
  'PANS',
  'PANT',
  'PAPA',
  'PARA',
  'PARE',
  'PARK',
  'PARR',
  'PARS',
  'PART',
  'PASS',
  'PAST',
  'PATE',
  'PATH',
  'PATS',
  'PAUL',
  'PAVE',
  'PAWN',
  'PAWS',
  'PAYS',
  'PEAK',
  'PEAL',
  'PEAR',
  'PEAS',
  'PEAT',
  'PECK',
  'PEEK',
  'PEEL',
  'PEEP',
  'PEER',
  'PEGS',
  'PELL',
  'PELT',
  'PENS',
  'PENT',
  'PERE',
  'PERI',
  'PERK',
  'PERM',
  'PERT',
  'PESO',
  'PEST',
  'PETS',
  'PEWS',
  'PHEW',
  'PICA',
  'PICK',
  'PIED',
  'PIER',
  'PIES',
  'PIET',
  'PIGS',
  'PIKE',
  'PILE',
  'PILL',
  'PIMA',
  'PIMP',
  'PINE',
  'PING',
  'PINK',
  'PINS',
  'PINT',
  'PION',
  'PIPE',
  'PIPS',
  'PISS',
  'PITH',
  'PITS',
  'PITY',
  'PLAN',
  'PLAT',
  'PLAY',
  'PLEA',
  'PLEX',
  'PLOD',
  'PLOP',
  'PLOT',
  'PLOW',
  'PLOY',
  'PLUG',
  'PLUM',
  'PLUS',
  'POCK',
  'POCO',
  'PODS',
  'POEM',
  'POET',
  'POKE',
  'POLE',
  'POLK',
  'POLL',
  'POLO',
  'POLY',
  'POMP',
  'POND',
  'PONG',
  'PONS',
  'PONT',
  'PONY',
  'POOH',
  'POOL',
  'POOP',
  'POOR',
  'POPE',
  'POPS',
  'PORE',
  'PORK',
  'PORN',
  'PORT',
  'POSE',
  'POSH',
  'POST',
  'POTS',
  'POUR',
  'POWS',
  'PRAM',
  'PRAY',
  'PREP',
  'PREY',
  'PRIG',
  'PRIM',
  'PROB',
  'PROD',
  'PROG',
  'PROM',
  'PROP',
  'PROS',
  'PROW',
  'PUBS',
  'PUCK',
  'PUFF',
  'PUGH',
  'PUGS',
  'PUJA',
  'PULL',
  'PULP',
  'PUMP',
  'PUNK',
  'PUNS',
  'PUNT',
  'PUNY',
  'PUPA',
  'PUPS',
  'PURE',
  'PURI',
  'PUSH',
  'PUTS',
  'PUTT',
  'PYRE',
  'QUAD',
  'QUAI',
  'QUAY',
  'QUID',
  'QUIN',
  'QUIP',
  'QUIT',
  'QUIZ',
  'QUOD',
  'RABI',
  'RACE',
  'RACK',
  'RACY',
  'RADS',
  'RAFT',
  'RAGA',
  'RAGE',
  'RAGS',
  'RAID',
  'RAIL',
  'RAIN',
  'RAJA',
  'RAKE',
  'RAMI',
  'RAMP',
  'RAMS',
  'RANA',
  'RAND',
  'RANG',
  'RANI',
  'RANK',
  'RANT',
  'RAPE',
  'RAPT',
  'RARE',
  'RASH',
  'RASP',
  'RATA',
  'RATE',
  'RATH',
  'RATS',
  'RAVE',
  'RAYS',
  'RAZE',
  'READ',
  'REAL',
  'REAM',
  'REAP',
  'REAR',
  'REDE',
  'REDO',
  'REDS',
  'REED',
  'REEF',
  'REEK',
  'REEL',
  'REES',
  'REFS',
  'REIN',
  'REIS',
  'RELY',
  'REND',
  'RENT',
  'REPS',
  'REST',
  'RHEA',
  'RIBS',
  'RICE',
  'RICH',
  'RICK',
  'RIDE',
  'RIFE',
  'RIFT',
  'RIGS',
  'RIME',
  'RIMS',
  'RIND',
  'RING',
  'RINK',
  'RIOT',
  'RIPE',
  'RISE',
  'RISK',
  'RITE',
  'RITZ',
  'ROAD',
  'ROAM',
  'ROAN',
  'ROAR',
  'ROBE',
  'ROBS',
  'ROCK',
  'RODE',
  'RODS',
  'ROLE',
  'ROLF',
  'ROLL',
  'ROMA',
  'ROMS',
  'ROOD',
  'ROOF',
  'ROOK',
  'ROOM',
  'ROOS',
  'ROOT',
  'ROPE',
  'ROSE',
  'ROSY',
  'ROTE',
  'ROTS',
  'ROUT',
  'ROUX',
  'ROVE',
  'ROWS',
  'RUBS',
  'RUBY',
  'RUDD',
  'RUDE',
  'RUFF',
  'RUGS',
  'RUIN',
  'RULE',
  'RUMP',
  'RUNG',
  'RUNS',
  'RUNT',
  'RUSE',
  'RUSH',
  'RUSK',
  'RUST',
  'RUTH',
  'RUTS',
  'SACK',
  'SACS',
  'SADE',
  'SAFE',
  'SAGA',
  'SAGE',
  'SAGO',
  'SAID',
  'SAIL',
  'SAKE',
  'SALE',
  'SALT',
  'SAMA',
  'SAME',
  'SAMS',
  'SAND',
  'SANE',
  'SANG',
  'SANK',
  'SANS',
  'SANT',
  'SARI',
  'SARS',
  'SASH',
  'SATI',
  'SAUL',
  'SAVE',
  'SAWN',
  'SAWS',
  'SAYS',
  'SCAB',
  'SCAM',
  'SCAN',
  'SCAR',
  'SCAT',
  'SCOT',
  'SCUM',
  'SEAL',
  'SEAM',
  'SEAN',
  'SEAS',
  'SEAT',
  'SECT',
  'SEED',
  'SEEK',
  'SEEM',
  'SEEN',
  'SEEP',
  'SEER',
  'SEES',
  'SELF',
  'SELL',
  'SEMI',
  'SENA',
  'SEND',
  'SENS',
  'SENT',
  'SEPT',
  'SERA',
  'SERF',
  'SESS',
  'SETS',
  'SEWN',
  'SEXY',
  'SHAD',
  'SHAH',
  'SHAM',
  'SHAW',
  'SHAY',
  'SHEA',
  'SHED',
  'SHIM',
  'SHIN',
  'SHIP',
  'SHIT',
  'SHOD',
  'SHOE',
  'SHOP',
  'SHOT',
  'SHOW',
  'SHRI',
  'SHUN',
  'SHUT',
  'SICH',
  'SICK',
  'SIDE',
  'SIFT',
  'SIGH',
  'SIGN',
  'SILK',
  'SILL',
  'SILO',
  'SILT',
  'SIMS',
  'SIND',
  'SINE',
  'SING',
  'SINK',
  'SINS',
  'SIPS',
  'SIRE',
  'SIRS',
  'SITE',
  'SITS',
  'SIZE',
  'SKEW',
  'SKID',
  'SKIM',
  'SKIN',
  'SKIP',
  'SKIS',
  'SKIT',
  'SLAB',
  'SLAG',
  'SLAM',
  'SLAP',
  'SLAT',
  'SLAV',
  'SLAW',
  'SLAY',
  'SLED',
  'SLEW',
  'SLID',
  'SLIM',
  'SLIP',
  'SLIT',
  'SLOB',
  'SLOG',
  'SLOP',
  'SLOT',
  'SLOW',
  'SLUG',
  'SLUM',
  'SLUR',
  'SLUT',
  'SMOG',
  'SMUG',
  'SNAG',
  'SNAP',
  'SNIP',
  'SNOB',
  'SNOW',
  'SNUB',
  'SNUG',
  'SOAK',
  'SOAP',
  'SOAR',
  'SOBS',
  'SOCK',
  'SODA',
  'SOFA',
  'SOFT',
  'SOHO',
  'SOIL',
  'SOLA',
  'SOLD',
  'SOLE',
  'SOLO',
  'SOMA',
  'SOME',
  'SONG',
  'SONS',
  'SOON',
  'SOOT',
  'SORE',
  'SORT',
  'SOUL',
  'SOUP',
  'SOUR',
  'SOUS',
  'SOWN',
  'SOWS',
  'SOYA',
  'SPAM',
  'SPAN',
  'SPAR',
  'SPAT',
  'SPAY',
  'SPEC',
  'SPED',
  'SPEW',
  'SPIE',
  'SPIN',
  'SPIT',
  'SPOT',
  'SPRY',
  'SPUD',
  'SPUN',
  'SPUR',
  'STAB',
  'STAG',
  'STAR',
  'STAT',
  'STAY',
  'STEM',
  'STEP',
  'STEW',
  'STIR',
  'STOP',
  'STOW',
  'STUB',
  'STUD',
  'STUN',
  'STYE',
  'SUBS',
  'SUCH',
  'SUCK',
  'SUED',
  'SUIT',
  'SULU',
  'SUMP',
  'SUMS',
  'SUNG',
  'SUNK',
  'SUNS',
  'SURA',
  'SURE',
  'SURF',
  'SWAB',
  'SWAG',
  'SWAM',
  'SWAN',
  'SWAP',
  'SWAT',
  'SWAY',
  'SWIG',
  'SWIM',
  'SYED',
  'SYNC',
  'TABS',
  'TABU',
  'TACK',
  'TACO',
  'TACT',
  'TAGS',
  'TAIL',
  'TAIN',
  'TAIT',
  'TAKE',
  'TALC',
  'TALE',
  'TALK',
  'TALL',
  'TAME',
  'TANA',
  'TANG',
  'TANK',
  'TAOS',
  'TAPE',
  'TAPS',
  'TARA',
  'TARE',
  'TARN',
  'TARO',
  'TARP',
  'TART',
  'TASK',
  'TATE',
  'TAUT',
  'TAXA',
  'TAXI',
  'TEAK',
  'TEAL',
  'TEAM',
  'TEAR',
  'TEAS',
  'TEAT',
  'TECH',
  'TEEM',
  'TEEN',
  'TEIL',
  'TELE',
  'TELL',
  'TEMP',
  'TEND',
  'TENS',
  'TENT',
  'TERM',
  'TERN',
  'TEST',
  'TETE',
  'TEXT',
  'THAN',
  'THAR',
  'THAT',
  'THAW',
  'THEE',
  'THEM',
  'THEN',
  'THEY',
  'THIN',
  'THIS',
  'THOU',
  'THRO',
  'THRU',
  'THUD',
  'THUS',
  'TIAN',
  'TICK',
  'TICS',
  'TIDE',
  'TIDY',
  'TIED',
  'TIER',
  'TIES',
  'TILE',
  'TILL',
  'TILT',
  'TIME',
  'TINA',
  'TINE',
  'TING',
  'TINS',
  'TINT',
  'TINY',
  'TIPS',
  'TIRE',
  'TITS',
  'TOAD',
  'TOBY',
  'TOED',
  'TOES',
  'TOFU',
  'TOGA',
  'TOIL',
  'TOLD',
  'TOLL',
  'TOMB',
  'TOME',
  'TOMS',
  'TONE',
  'TONG',
  'TONK',
  'TONS',
  'TONY',
  'TOOK',
  'TOOL',
  'TOOT',
  'TOPS',
  'TORE',
  'TORI',
  'TORN',
  'TORO',
  'TORR',
  'TORT',
  'TORY',
  'TOSS',
  'TOTE',
  'TOTS',
  'TOUR',
  'TOUT',
  'TOWN',
  'TOYS',
  'TRAM',
  'TRAP',
  'TRAY',
  'TREE',
  'TREK',
  'TRES',
  'TRIE',
  'TRIM',
  'TRIO',
  'TRIP',
  'TROD',
  'TROP',
  'TROT',
  'TROY',
  'TRUE',
  'TSAR',
  'TUAN',
  'TUBE',
  'TUBS',
  'TUCK',
  'TUFF',
  'TUFT',
  'TUGS',
  'TUNA',
  'TUNE',
  'TUNG',
  'TURD',
  'TURF',
  'TURK',
  'TURN',
  'TUSH',
  'TUSK',
  'TWAS',
  'TWIG',
  'TWIN',
  'TWOS',
  'TYNE',
  'TYPE',
  'TYPO',
  'TYRE',
  'UGLY',
  'ULNA',
  'UNDE',
  'UNDO',
  'UNIT',
  'UNTO',
  'UPON',
  'UREA',
  'URGE',
  'URIC',
  'URNS',
  'USED',
  'USER',
  'USES',
  'VAIL',
  'VAIN',
  'VALE',
  'VANE',
  'VAPE',
  'VANS',
  'VARY',
  'VASA',
  'VASE',
  'VAST',
  'VATS',
  'VEAL',
  'VEER',
  'VEGA',
  'VEIL',
  'VEIN',
  'VENA',
  'VENT',
  'VERA',
  'VERB',
  'VERS',
  'VERT',
  'VERY',
  'VEST',
  'VETO',
  'VIAL',
  'VICE',
  'VIDE',
  'VIED',
  'VIEW',
  'VILE',
  'VINE',
  'VISA',
  'VISE',
  'VITA',
  'VIVA',
  'VIVE',
  'VIVO',
  'VOID',
  'VOLK',
  'VOLS',
  'VOLT',
  'VOTE',
  'VOWS',
  'WADE',
  'WADI',
  'WAGE',
  'WAGS',
  'WAIL',
  'WAIS',
  'WAIT',
  'WAKE',
  'WALE',
  'WALK',
  'WALL',
  'WAND',
  'WANE',
  'WANG',
  'WANK',
  'WANT',
  'WARD',
  'WARE',
  'WARM',
  'WARN',
  'WARP',
  'WARS',
  'WART',
  'WARY',
  'WASH',
  'WASP',
  'WATT',
  'WAVE',
  'WAVY',
  'WAXY',
  'WAYS',
  'WEAK',
  'WEAL',
  'WEAN',
  'WEAR',
  'WEBS',
  'WEED',
  'WEEK',
  'WEEP',
  'WEFT',
  'WEIL',
  'WEIR',
  'WELD',
  'WELL',
  'WELT',
  'WEND',
  'WENT',
  'WEPT',
  'WERE',
  'WEST',
  'WHAT',
  'WHEN',
  'WHET',
  'WHEY',
  'WHEW',
  'WHIG',
  'WHIM',
  'WHIP',
  'WHIT',
  'WHIZ',
  'WHOA',
  'WHOM',
  'WICK',
  'WIDE',
  'WIFE',
  'WIGS',
  'WILD',
  'WILL',
  'WILT',
  'WILY',
  'WIND',
  'WINE',
  'WING',
  'WINK',
  'WINN',
  'WINS',
  'WIPE',
  'WIRE',
  'WIRY',
  'WISE',
  'WISH',
  'WISP',
  'WISS',
  'WITH',
  'WITS',
  'WOES',
  'WOKE',
  'WOLF',
  'WOMB',
  'WONK',
  'WONT',
  'WOOD',
  'WOOL',
  'WORD',
  'WORE',
  'WORK',
  'WORM',
  'WORN',
  'WORT',
  'WOVE',
  'WRAP',
  'WREN',
  'WRIT',
  'YAMS',
  'YANG',
  'YANK',
  'YARD',
  'YARN',
  'YAWN',
  'YEAH',
  'YEAN',
  'YEAR',
  'YELL',
  'YOGA',
  'YOGI',
  'YOKE',
  'YOLK',
  'YORE',
  'YORK',
  'YOUR',
  'YUAN',
  'YULE',
  'ZANY',
  'ZAPS',
  'ZEAL',
  'ZERO',
  'ZEST',
  'ZETA',
  'ZINC',
  'ZINE',
  'ZING',
  'ZIPS',
  'ZONE',
  'ZOOM',
  'ZOOS',
  'ZULU'
];

module.exports = words;

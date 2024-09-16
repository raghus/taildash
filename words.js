const words = [
  'ABBA',
  'ABBE',
  'ABLE',
  'ABLY',
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
  'ALAN',
  'ALAS',
  'ALBA',
  'ALEC',
  'ALFA',
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
  'ARDS',
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
  'BLAH',
  'BLED',
  'BLEW',
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
  'BOIS',
  'BOLD',
  'BOLL',
  'BOLT',
  'BOMB',
  'BONA',
  'BOND',
  'BONE',
  'BONY',
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
  'CHER',
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
  'COMM',
  'COMP',
  'COND',
  'CONE',
  'CONF',
  'CONN',
  'CONS',
  'COOK',
  'COOL',
  'COON',
  'COOP',
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
  'COWS',
  'COZY',
  'CRAB',
  'CRAG',
  'CRAM',
  'CRAP',
  'CRAY',
  'CREE',
  'CREW',
  'CRIB',
  'CRIM',
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
  'DALI',
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
  'DORM',
  'DOSE',
  'DOST',
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
  'DRUG',
  'DRUM',
  'DUAL',
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
  'FLAG',
  'FLAK',
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
  'GANG',
  'GAOL',
  'GAPS',
  'GARB',
  'GASH',
  'GASP',
  'GATE',
  'GAVE',
  'GAYS',
  'GAZE',
  'GEAR',
  'GELS',
  'GEMS',
  'GENE',
  'GENS',
  'GENT',
  'GERM',
  'GETS',
  'GHEE',
  'GIFT',
  'GILA',
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
  'GORE',
  'GORY',
  'GOSH',
  'GOSS',
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
  'GUNS',
  'GURU',
  'GUSH',
  'GUST',
  'GUTS',
  'GUYS',
  'GYRO',
  'HACK',
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
  'JEFF',
  'JERK',
  'JESS',
  'JEST',
  'JETS',
  'JEWS',
  'JILL',
  'JOBS',
  'JOCK',
  'JOEY',
  'JOHN',
  'JOIN',
  'JOKE',
  'JOLT',
  'JONG',
  'JOSH',
  'JOUR',
  'JOYS',
  'JUDY',
  'JUGS',
  'JUMP',
  'JUNK',
  'JURA',
  'JURE',
  'JURY',
  'JUST',
  'JUTE',
  'KALE',
  'KALI',
  'KAMA',
  'KAMI',
  'KANE',
  'KANG',
  'KANT',
  'KARA',
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
  'KOHL',
  'KOLA',
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
  'LOVE',
  'LOWE',
  'LOWS',
  'LUCE',
  'LUCK',
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
  'MALI',
  'MALL',
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
  'MATT',
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
  'MICH',
  'MICK',
  'MIDI',
  'MIEN',
  'MIHI',
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
  'NEON',
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
  'PACS',
  'PACT',
  'PADS',
  'PAGE',
  'PAID',
  'PAIL',
  'PAIN',
  'PAIR',
  'PAIS',
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
  'PERM',
  'PERT',
  'PESO',
  'PEST',
  'PETS',
  'PEWS',
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
  'PISS',
  'PITH',
  'PITS',
  'PITY',
  'PLAN',
  'PLAT',
  'PLAY',
  'PLEA',
  'PLOT',
  'PLOW',
  'PLOY',
  'PLUG',
  'PLUM',
  'PLUS',
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
  'PRAY',
  'PREM',
  'PREP',
  'PREY',
  'PRIM',
  'PROB',
  'PROD',
  'PROF',
  'PROG',
  'PROM',
  'PROP',
  'PROS',
  'PROW',
  'PUBS',
  'PUCK',
  'PUFF',
  'PUGH',
  'PUJA',
  'PULL',
  'PULP',
  'PUMP',
  'PUNK',
  'PUNS',
  'PUNT',
  'PUNY',
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
  'QUIT',
  'QUIZ',
  'QUOD',
  'RABI',
  'RACE',
  'RACK',
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
  'RATA',
  'RATE',
  'RATH',
  'RATS',
  'RAVE',
  'RAYS',
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
  'RORY',
  'ROSE',
  'ROSY',
  'ROTE',
  'ROTS',
  'ROUT',
  'ROUX',
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
  'SHAN',
  'SHAW',
  'SHAY',
  'SHEA',
  'SHED',
  'SHEW',
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
  'SLAB',
  'SLAG',
  'SLAM',
  'SLAP',
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
  'TECH',
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
  'TONS',
  'TONY',
  'TOOK',
  'TOOL',
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
  'TURF',
  'TURK',
  'TURN',
  'TWAS',
  'TWIG',
  'TWIN',
  'TWOS',
  'TYNE',
  'TYPE',
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
  'WALD',
  'WALK',
  'WALL',
  'WAND',
  'WANE',
  'WANG',
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
  'WENT',
  'WEPT',
  'WERE',
  'WERT',
  'WEST',
  'WHAT',
  'WHEN',
  'WHEY',
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
  'WYNN',
  'YALE',
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
  'ZACK',
  'ZEAL',
  'ZERO',
  'ZEST',
  'ZETA',
  'ZINC',
  'ZONA',
  'ZONE',
  'ZOOM',
  'ZOOS',
  'ZULU'
];

module.exports = words;

// let line = new Array(
//     new Array(new Point(0, 0), new Point(-2, -16), new Point(-7, -41), new Point(-11, -72), new Point(-12, -125), new Point(-6, -184), new Point(0, -234), new Point(2, -267), new Point(2, -283)),

//     new Array(new Point(0, 0), new Point(-1, 2), new Point(-3, 9), new Point(-5, 20), new Point(-6, 43), new Point(-9, 69), new Point(-11, 88), new Point(-16, 107), new Point(-19, 115), new Point(-19, 117), new Point(-19, 123), new Point(-15, 135), new Point(-14, 144), new Point(-14, 147), new Point(-12, 152)),
    
//     new Array(new Point(0, 0), new Point(0, 1), new Point(0, 2), new Point(0, 4), new Point(0, 5), new Point(0, 6), new Point(1, 6), new Point(1, 7), new Point(1, 9), new Point(1, 10), new Point(1, 12), new Point(1, 14), new Point(1, 15), new Point(1, 16), new Point(1, 17), new Point(2, 19), new Point(2, 20), new Point(2, 21), new Point(2, 22), new Point(4, 23), new Point(4, 25), new Point(4, 26), new Point(4, 27), new Point(4, 28), new Point(4, 30), new Point(4, 31), new Point(4, 32), new Point(4, 33), new Point(4, 35), new Point(4, 36), new Point(4, 37), new Point(4, 38), new Point(4, 40), new Point(2, 41), new Point(2, 42), new Point(2, 43), new Point(1, 45), new Point(1, 46), new Point(1,47), new Point(1, 48), new Point(0, 48), new Point(0, 51), new Point(0, 52), new Point(0, 53), new Point(-1, 53), new Point(-1, 54), new Point(-1, 56), new Point(-1, 57), new Point(-1, 58), new Point(-1, 59), new Point(-1, 61), new Point(-1, 62), new Point(-1, 63), new Point(-1, 64), new Point(-1, 66), new Point(-1, 68), new Point(-1, 69), new Point(-1, 70), new Point(-1, 72), new Point(-1, 73), new Point(-1, 74), new Point(-1, 75), new Point(-1, 77), new Point(-1, 78), new Point(-1, 79), new Point(-1, 80), new Point(-1, 82), new Point(-1, 83), new Point(-1, 84), new Point(-1, 85), new Point(-1, 87), new Point(-1, 88), new Point(-1, 89), new Point(-1, 90), new Point(-1, 91), new Point(-1, 94), new Point(-1, 95), new Point(-1, 96), new Point(-1, 99), new Point(-1, 100), new Point(-1, 101), new Point(-1, 103), new Point(-1, 104), new Point(-1, 105), new Point(-1, 106), new Point(-1, 108), new Point(-1, 109), new Point(-2, 111), new Point(-2, 112), new Point(-2, 114), new Point(-2, 115), new Point(-2, 116), new Point(-2, 117), new Point(-2, 119), new Point(-2, 120), new Point(-4, 126), new Point(-4, 130), new Point(-5, 131), new Point(-5, 132), new Point(-5, 133), new Point(-5, 135), new Point(-5, 136), new Point(-5, 137), new Point(-5, 140), new Point(-5, 141), new Point(-5, 142), new Point(-5, 143)),
    
//     new Array(new Point(0,0),new Point(0,-17),new Point(0,-92),new Point(3,-189),new Point(9,-232)),
    
//     new Array(new Point(0,0),new Point(0,4),new Point(4,16),new Point(6,44),new Point(6,79),new Point(6,128),new Point(1,194),new Point(-1,241),new Point(-1,269),new Point(-1,280)),
    
//     new Array(new Point(0,0),new Point(0,2),new Point(-1,4),new Point(-1,9),new Point(-2,17),new Point(-2,24),new Point(-2,29),new Point(-2,32),new Point(-2,33),new Point(-2,34)),
// );

// let carat = new Array(
//     new Array(new Point(0,0),new Point(2,-3),new Point(6,-12),new Point(26,-51),new Point(74,-133),new Point(83,-151),new Point(86,-154),new Point(87,-154),new Point(88,-154),new Point(94,-151),new Point(111,-143),new Point(137,-130),new Point(157,-116),new Point(175,-91),new Point(187,-68),new Point(195,-47),new Point(201,-32),new Point(204,-17),new Point(205,-7),new Point(206,-3),new Point(206,-1),new Point(206,0),new Point(206,1)),

//     new Array(new Point(0,0),new Point(-5,-6),new Point(-17,-17),new Point(-56,-60),new Point(-78,-87),new Point(-109,-109),new Point(-115,-108),new Point(-129,-101),new Point(-155,-80),new Point(-182,-50),new Point(-199,-22),new Point(-209,-1),new Point(-214,12),new Point(-218,20)),

//     new Array(new Point(0,0),new Point(-1,-4),new Point(-2,-23),new Point(3,-35),new Point(10,-51),new Point(18,-64),new Point(29,-82),new Point(59,-120),new Point(69,-132),new Point(77,-139),new Point(84,-145),new Point(91,-150),new Point(99,-154),new Point(107,-156),new Point(113,-157),new Point(122,-157),new Point(128,-155),new Point(139,-144),new Point(144,-134),new Point(148,-121),new Point(152,-106),new Point(156,-90),new Point(162,-72),new Point(168,-54),new Point(172,-36),new Point(177,-25),new Point(179,-18),new Point(181,-12),new Point(183,-8),new Point(184,-4)),

//     new Array(new Point(0,0),new Point(-1,1),new Point(-2,1),new Point(-3,0),new Point(-5,-2),new Point(-8,-6),new Point(-10,-10),new Point(-16,-19),new Point(-18,-23),new Point(-20,-28),new Point(-22,-32),new Point(-25,-37),new Point(-28,-43),new Point(-31,-48),new Point(-38,-59),new Point(-42,-65),new Point(-46,-73),new Point(-51,-80),new Point(-56,-85),new Point(-61,-92),new Point(-65,-98),new Point(-68,-102),new Point(-71,-105),new Point(-75,-108),new Point(-78,-112),new Point(-82,-115),new Point(-85,-119),new Point(-89,-122),new Point(-93,-124),new Point(-97,-127),new Point(-101,-130),new Point(-104,-132),new Point(-106,-134),new Point(-108,-135), new Point(-111,-138),new Point(-112,-139),new Point(-113,-140),new Point(-114,-141),new Point(-115,-142),new Point(-116,-142),new Point(-117,-141),new Point(-118,-140),new Point(-119,-139),new Point(-120,-138),new Point(-123,-135),new Point(-126,-130),new Point(-131,-125),new Point(-140,-112),new Point(-149,-97),new Point(-154,-89),new Point(-156,-86),new Point(-158,-81),new Point(-160,-77),new Point(-162,-73),new Point(-164,-69),new Point(-166,-65),new Point(-168,-60),new Point(-170,-55),new Point(-171,-51),new Point(-173,-46),new Point(-175,-42),new Point(-178,-37),new Point(-182,-32),new Point(-185,-27),new Point(-187,-22),new Point(-190,-17),new Point(-192,-12),new Point(-195,-7),new Point(-198,-2),new Point(-202,3),new Point(-204,6),new Point(-205,8),new Point(-206,9),new Point(-206,10),new Point(-207,10),new Point(-207,11)),

//     new Array(new Point(0,0),new Point(28,-71),new Point(135,-150),new Point(187,-134),new Point(207,-109),new Point(219,-73),new Point(215,28)),

//     new Array(new Point(0,0),new Point(14,-22),new Point(27,-48),new Point(35,-59),new Point(44,-71),new Point(45,-72),new Point(45,-71),new Point(48,-68),new Point(53,-63),new Point(64,-53),new Point(71,-47),new Point(78,-42),new Point(86,-36),new Point(102,-27),new Point(107,-23),new Point(109,-21),new Point(112,-20),new Point(113,-20))
// );

// let circle= new Array(
//     new Array(new Point(0,0),new Point(-21,-5),new Point(-75,-20),new Point(-107,-34),new Point(-133,-47),new Point(-155,-62),new Point(-175,-76),new Point(-197,-102),new Point(-217,-130),new Point(-223,-148),new Point(-222,-160),new Point(-215,-175),new Point(-198,-196),new Point(-166,-220),new Point(-114,-243),new Point(-62,-255),new Point(-38,-256),new Point(-28,-250),new Point(-17,-238),new Point(-7,-223),new Point(1,-204),new Point(14,-181),new Point(23,-150),new Point(28,-119),new Point(25,-88),new Point(20,-70),new Point(11,-55),new Point(-4,-38),new Point(-20,-25),new Point(-36,-18),new Point(-49,-14)),

//     new Array(new Point(0,0),new Point(-5,0),new Point(-12,1),new Point(-18,3),new Point(-24,5),new Point(-40,9),new Point(-52,10),new Point(-88,3),new Point(-98,-4),new Point(-107,-14),new Point(-117,-29),new Point(-127,-51),new Point(-139,-73),new Point(-149,-91),new Point(-156,-106),new Point(-163,-119),new Point(-166,-132),new Point(-166,-146),new Point(-164,-159),new Point(-160,-174),new Point(-156,-184),new Point(-149,-196),new Point(-138,-208),new Point(-121,-222),new Point(-103,-235),new Point(-88,-243),new Point(-76,-250),new Point(-62,-254),new Point(-46,-257),new Point(-28,-259),new Point(-11,-259),new Point(4,-257),new Point(15,-254),new Point(27,-248),new Point(36,-240),new Point(46,-231),new Point(54,-222),new Point(62,-209),new Point(67,-199),new Point(71,-190),new Point(74,-181),new Point(76,-170),new Point(79,-159),new Point(79,-145),new Point(79,-131),new Point(77,-116),new Point(74,-101),new Point(68,-86),new Point(61,-71),new Point(55,-59),new Point(51,-47),new Point(46,-38),new Point(39,-30),new Point(33,-24),new Point(26,-19),new Point(19,-15),new Point(12,-12),new Point(5,-8),new Point(1,-6),new Point(-3,-5),new Point(-9,-5),new Point(-14,-4),new Point(-17,-4)),

//     new Array(new Point(0,0),new Point(-2,-4),new Point(-3,-20),new Point(-1,-31),new Point(3,-39),new Point(8,-46),new Point(15,-50),new Point(24,-54),new Point(34,-58),new Point(49,-61),new Point(63,-62),new Point(76,-61),new Point(87,-56),new Point(95,-52),new Point(102,-45),new Point(108,-36),new Point(114,-29),new Point(119,-20),new Point(124,-10),new Point(131,0),new Point(136,13),new Point(141,24),new Point(144,40),new Point(147,58),new Point(148,77),new Point(148,97),new Point(145,116),new Point(140,136),new Point(132,156),new Point(111,189),new Point(98,208),new Point(84,221),new Point(66,232),new Point(47,236),new Point(29,235),new Point(9,227),new Point(-13,214),new Point(-34,199),new Point(-53,183),new Point(-71,163),new Point(-84,142),new Point(-98,120),new Point(-106,100),new Point(-110,84),new Point(-112,67),new Point(-110,47),new Point(-106,28),new Point(-98,11),new Point(-87,-4),new Point(-72,-18),new Point(-53,-35),new Point(-31,-49),new Point(-9,-60),new Point(5,-65),new Point(11,-67),new Point(17,-67),new Point(28,-68),new Point(42,-67),new Point(59,-68),new Point(70,-68),new Point(75,-68),new Point(78,-67),new Point(79,-67)),

//     new Array(new Point(0,0),new Point(0,-7),new Point(1,-13),new Point(5,-31),new Point(10,-43),new Point(18,-52),new Point(31,-64),new Point(50,-74),new Point(77,-87),new Point(107,-95),new Point(128,-98),new Point(142,-95),new Point(157,-90),new Point(171,-82),new Point(181,-68),new Point(191,-50),new Point(197,-30),new Point(200,-7),new Point(199,19),new Point(197,41),new Point(192,57),new Point(179,83),new Point(165,105),new Point(154,123),new Point(144,137),new Point(134,145),new Point(120,149),new Point(102,148),new Point(82,141),new Point(63,128),new Point(45,109),new Point(28,90),new Point(11,66),new Point(-1,48),new Point(-4,35),new Point(-5,24),new Point(-4,14),new Point(-2,8)),

//     new Array(new Point(0,0),new Point(-7,4),new Point(-13,7),new Point(-32,8),new Point(-45,4),new Point(-57,-4),new Point(-72,-29),new Point(-72,-40),new Point(-67,-53),new Point(-56,-69),new Point(-37,-86),new Point(-18,-98),new Point(-5,-104),new Point(5,-107),new Point(14,-104),new Point(25,-98),new Point(35,-89),new Point(42,-77),new Point(46,-61),new Point(47,-45),new Point(44,-28),new Point(36,-12),new Point(27,1),new Point(14,12),new Point(1,21),new Point(-19,22),new Point(-26,17),new Point(-30,13),new Point(-32,11))
// );

// let arch = new Array(
//     new Array(new Point(0,0),new Point(-3,-18),new Point(-11,-40),new Point(-23,-79),new Point(-40,-122),new Point(-49,-158),new Point(-55,-188),new Point(-56,-210),new Point(-56,-224),new Point(-53,-231),new Point(-51,-238),new Point(-46,-248),new Point(-39,-263),new Point(-23,-278),new Point(-3,-292),new Point(24,-304),new Point(57,-317),new Point(94,-327),new Point(116,-331),new Point(127,-331),new Point(137,-330),new Point(148,-328),new Point(160,-321),new Point(173,-314),new Point(181,-305),new Point(191,-289),new Point(199,-268),new Point(208,-242),new Point(215,-211),new Point(219,-183),new Point(219,-155),new Point(218,-133),new Point(217,-118),new Point(216,-106),new Point(215,-100),new Point(215,-95),new Point(215,-91),new Point(214,-90)),

//     new Array(new Point(0,0),new Point(-1,-2),new Point(-2,-7),new Point(-2,-21),new Point(-5,-96),new Point(-8,-130),new Point(-10,-149),new Point(-10,-162),new Point(-11,-171),new Point(-9,-175),new Point(-8,-179),new Point(-8,-180),new Point(-7,-182),new Point(-7,-183),new Point(-6,-183),new Point(-5,-183),new Point(0,-184),new Point(33,-195),new Point(114,-216),new Point(153,-223),new Point(168,-226),new Point(177,-227),new Point(180,-228),new Point(180,-227),new Point(179,-227),new Point(178,-226),new Point(177,-226),new Point(176,-225),new Point(176,-224),new Point(175,-222),new Point(175,-217),new Point(175,-188),new Point(177,-154),new Point(181,-103),new Point(183,-45),new Point(177,-6),new Point(179,11),new Point(179,23),new Point(180,31),new Point(180,33),new Point(180,35),new Point(181,38),new Point(181,39),new Point(182,40),new Point(182,41)),
    
//     new Array(new Point(0,0),new Point(0,-14),new Point(1,-37),new Point(2,-66),new Point(8,-98),new Point(11,-131),new Point(13,-160),new Point(15,-183),new Point(15,-202),new Point(15,-218),new Point(20,-223),new Point(33,-225),new Point(57,-230),new Point(91,-237),new Point(119,-245),new Point(129,-249),new Point(130,-249),new Point(132,-247),new Point(133,-246),new Point(134,-240),new Point(140,-219),new Point(146,-193),new Point(155,-162),new Point(164,-130),new Point(172,-104),new Point(177,-78),new Point(177,-61),new Point(177,-56),new Point(178,-53),new Point(181,-48),new Point(185,-41),new Point(187,-34),new Point(188,-31)),

//     new Array(new Point(0,0),new Point(0,-15),new Point(2,-39),new Point(2,-72),new Point(4,-95),new Point(6,-103),new Point(9,-108),new Point(12,-111),new Point(17,-113),new Point(29,-117),new Point(51,-123),new Point(82,-127),new Point(104,-127),new Point(112,-122),new Point(117,-114),new Point(118,-98),new Point(114,-78),new Point(111,-58),new Point(110,-41),new Point(110,-27)),

//     new Array(new Point(0,0),new Point(0,-4),new Point(-1,-5),new Point(-5,-18),new Point(-9,-33),new Point(-14,-60),new Point(-20,-86),new Point(-27,-120),new Point(-35,-154),new Point(-37,-180),new Point(-37,-198),new Point(-38,-209),new Point(-38,-211),new Point(-39,-216),new Point(-41,-219),new Point(-43,-219),new Point(-60,-221),new Point(-86,-224),new Point(-124,-224),new Point(-159,-224),new Point(-186,-224),new Point(-197,-221),new Point(-197,-220),new Point(-198,-214),new Point(-200,-200),new Point(-200,-184),new Point(-200,-163),new Point(-200,-145),new Point(-200,-120),new Point(-200,-95),new Point(-198,-64),new Point(-198,-27),new Point(-198,17),new Point(-202,53),new Point(-202,84),new Point(-202,105),new Point(-202,121),new Point(-202,137))
// );

// let line2 = new Array(
// 	// top to bottom
// 	new Array(new Point(0,0), new Point(0,9), new Point(0,21), new Point(1,39), new Point(1,58), new Point(1,83), new Point(0,106), new Point(-1,129), new Point(-3,153), new Point(-3,177), new Point(-3,200), new Point(-3,223), new Point(-5,245), new Point(-6,263), new Point(-8,282), new Point(-10,301), new Point(-13,317), new Point(-15,330), new Point(-16,342), new Point(-16,351), new Point(-16,357), new Point(-16,361)),
// 	new Array(new Point(0,0), new Point(4,8), new Point(4,17), new Point(4,27), new Point(4,43), new Point(4,61), new Point(4,85), new Point(2,110), new Point(0,138), new Point(-3,166), new Point(-5,191), new Point(-6,213), new Point(-6,234), new Point(-6,250), new Point(-6,268), new Point(-6,285), new Point(-4,300), new Point(-2,312), new Point(-1,322)),
// 	new Array(new Point(0,0), new Point(0,9), new Point(0,21), new Point(0,38), new Point(0,57), new Point(0,79), new Point(0,101), new Point(0,123), new Point(0,145), new Point(0,167), new Point(0,189), new Point(0,207), new Point(0,223), new Point(0,237), new Point(1,246)),
// 	new Array(new Point(0,0), new Point(4,3), new Point(4,5), new Point(4,8), new Point(4,11), new Point(4,15), new Point(4,18), new Point(4,21), new Point(4,24), new Point(4,27), new Point(4,30), new Point(5,33), new Point(6,36), new Point(6,40), new Point(7,43), new Point(8,47), new Point(9,52), new Point(10,56), new Point(11,60), new Point(11,65), new Point(12,69), new Point(13,74), new Point(13,78), new Point(14,83), new Point(14,88), new Point(14,93), new Point(14,98), new Point(14,103), new Point(14,108), new Point(14,113), new Point(14,118), new Point(14,122), new Point(14,127), new Point(14,131), new Point(14,136), new Point(14,141), new Point(14,145), new Point(14,150), new Point(14,155), new Point(14,160), new Point(14,164), new Point(14,170), new Point(14,174), new Point(14,178), new Point(14,183), new Point(14,187), new Point(14,191), new Point(14,195), new Point(14,200), new Point(14,204), new Point(14,208), new Point(14,213), new Point(14,218), new Point(14,223), new Point(14,228), new Point(14,232), new Point(14,236), new Point(14,240), new Point(15,244), new Point(16,249), new Point(17,252), new Point(17,256), new Point(17,259), new Point(18,263), new Point(18,266), new Point(18,269), new Point(18,272), new Point(18,274), new Point(18,277), new Point(18,278), new Point(18,281), new Point(18,283), new Point(18,286), new Point(18,289), new Point(18,293), new Point(18,296), new Point(18,299), new Point(18,303), new Point(18,306), new Point(18,310), new Point(18,313), new Point(18,317), new Point(18,320), new Point(18,324), new Point(18,327), new Point(18,331), new Point(18,334), new Point(18,337), new Point(17,340), new Point(17,342), new Point(16,345), new Point(16,348), new Point(16,350), new Point(16,353), new Point(16,355), new Point(16,358), new Point(16,359), new Point(16,360), new Point(16,361)),
// 	new Array(new Point(0,0), new Point(0,11), new Point(0,19), new Point(0,29), new Point(-1,45), new Point(-2,60), new Point(-3,76), new Point(-4,91), new Point(-4,103), new Point(-4,116), new Point(-4,128), new Point(-4,137), new Point(-4,144), new Point(-4,151)),
// 	new Array(new Point(0,0), new Point(0,10), new Point(0,18), new Point(0,29), new Point(0,40), new Point(0,53), new Point(1,69), new Point(2,84), new Point(3,99), new Point(3,111), new Point(4,124), new Point(5,136), new Point(6,148), new Point(7,157), new Point(8,165), new Point(8,171), new Point(9,177), new Point(9,179)),
// 	new Array(new Point(0,0), new Point(0,12), new Point(-2,25), new Point(-4,42), new Point(-7,67), new Point(-10,94), new Point(-10,127), new Point(-10,161), new Point(-12,198), new Point(-14,234), new Point(-16,271), new Point(-18,306)),
// 	new Array(new Point(0,0), new Point(0,12), new Point(0,28), new Point(0,54), new Point(-4,91), new Point(-9,129), new Point(-14,171), new Point(-19,216), new Point(-21,257), new Point(-23,298), new Point(-23,332)),
// 	new Array(new Point(0,0), new Point(0,7), new Point(0,14), new Point(0,22), new Point(0,32), new Point(0,41), new Point(0,50), new Point(1,59), new Point(1,68), new Point(2,76), new Point(3,83), new Point(3,90), new Point(3,97), new Point(3,103), new Point(3,110), new Point(3,117), new Point(3,125), new Point(3,133), new Point(3,140), new Point(3,149), new Point(3,156), new Point(3,162), new Point(3,168)),
// 	new Array(new Point(0,0), new Point(1,8), new Point(1,14), new Point(1,21), new Point(1,29), new Point(1,38), new Point(2,47), new Point(2,56), new Point(3,64), new Point(3,73), new Point(4,79), new Point(5,86), new Point(5,93), new Point(5,98), new Point(6,103), new Point(6,109), new Point(6,113), new Point(7,118), new Point(7,122), new Point(7,126), new Point(8,130), new Point(8,135), new Point(8,139), new Point(8,142), new Point(8,146), new Point(8,149), new Point(9,153), new Point(9,157), new Point(9,160), new Point(10,163), new Point(10,166), new Point(10,169), new Point(10,172), new Point(10,174), new Point(11,177), new Point(11,179), new Point(11,181), new Point(11,183), new Point(11,185), new Point(11,187), new Point(11,190), new Point(11,192), new Point(11,194), new Point(12,195)),
// );

// let line3 = new Array(
// 	// bottom to top
// 	new Array(new Point(0,0), new Point(0,-7), new Point(0,-17), new Point(0,-33), new Point(0,-57), new Point(0,-81), new Point(0,-109), new Point(0,-136), new Point(0,-162), new Point(0,-188), new Point(1,-217), new Point(3,-252), new Point(3,-279), new Point(3,-306), new Point(3,-330), new Point(3,-346), new Point(1,-357), new Point(1,-365)),
// 	new Array(new Point(0,0), new Point(0,-6), new Point(0,-14), new Point(0,-28), new Point(0,-44), new Point(-1,-63), new Point(-2,-86), new Point(-2,-103), new Point(-3,-122), new Point(-3,-141), new Point(-3,-160), new Point(-3,-183), new Point(-4,-207), new Point(-4,-230), new Point(-4,-253), new Point(-4,-275), new Point(-6,-293), new Point(-8,-309), new Point(-9,-319)),
// 	new Array(new Point(0,0), new Point(0,-8), new Point(0,-18), new Point(0,-29), new Point(0,-41), new Point(-2,-58), new Point(-2,-70), new Point(-3,-85), new Point(-4,-98), new Point(-5,-113), new Point(-7,-128), new Point(-10,-143), new Point(-12,-159), new Point(-13,-174), new Point(-13,-189), new Point(-14,-205), new Point(-15,-220), new Point(-17,-231)),
// 	new Array(new Point(0,0), new Point(1,-6), new Point(1,-9), new Point(1,-11), new Point(1,-14), new Point(1,-18), new Point(1,-21), new Point(1,-25), new Point(1,-29), new Point(1,-33), new Point(1,-37), new Point(1,-42), new Point(1,-46), new Point(1,-51), new Point(1,-57), new Point(1,-62), new Point(1,-67), new Point(1,-73), new Point(1,-78), new Point(1,-84), new Point(1,-91), new Point(1,-97), new Point(1,-104), new Point(1,-110), new Point(2,-117), new Point(2,-125), new Point(2,-133), new Point(2,-141), new Point(2,-150), new Point(2,-161), new Point(2,-169), new Point(2,-179), new Point(2,-189), new Point(2,-198), new Point(2,-207), new Point(2,-215), new Point(2,-224), new Point(2,-232), new Point(2,-241), new Point(2,-248), new Point(2,-255), new Point(2,-262), new Point(2,-269), new Point(4,-275), new Point(4,-281), new Point(5,-287), new Point(5,-293), new Point(5,-298), new Point(6,-303), new Point(6,-308), new Point(7,-312), new Point(7,-317), new Point(7,-320), new Point(7,-324), new Point(7,-327), new Point(7,-330), new Point(7,-333), new Point(7,-337), new Point(7,-339), new Point(7,-342), new Point(7,-344), new Point(7,-346), new Point(7,-348), new Point(7,-350), new Point(7,-351)),
// 	new Array(new Point(0,0), new Point(1,-7), new Point(1,-11), new Point(1,-18), new Point(1,-26), new Point(1,-38), new Point(1,-51), new Point(2,-66), new Point(3,-82), new Point(3,-98), new Point(4,-114), new Point(4,-130), new Point(4,-144), new Point(4,-156), new Point(4,-165), new Point(4,-173), new Point(4,-178), new Point(4,-181), new Point(3,-183)),
// 	new Array(new Point(0,0), new Point(3,-6), new Point(3,-9), new Point(3,-13), new Point(3,-17), new Point(3,-23), new Point(2,-31), new Point(1,-36), new Point(0,-43), new Point(0,-50), new Point(0,-59), new Point(-1,-67), new Point(-1,-76), new Point(-1,-86), new Point(-1,-95), new Point(-1,-107), new Point(-1,-117), new Point(-1,-129), new Point(-1,-141), new Point(-2,-152), new Point(-2,-163), new Point(-2,-172), new Point(-2,-182), new Point(-2,-191), new Point(-2,-199), new Point(-2,-207), new Point(-3,-214), new Point(-3,-220), new Point(-4,-226), new Point(-5,-231), new Point(-6,-236), new Point(-6,-239), new Point(-6,-243), new Point(-6,-246), new Point(-6,-248), new Point(-6,-249)),
// 	new Array(new Point(0,0), new Point(0,-12), new Point(0,-28), new Point(1,-50), new Point(2,-75), new Point(5,-102), new Point(7,-131), new Point(12,-166), new Point(16,-201), new Point(19,-238)),
// 	new Array(new Point(0,0), new Point(0,-5), new Point(0,-11), new Point(1,-18), new Point(2,-26), new Point(3,-37), new Point(5,-48), new Point(6,-60), new Point(8,-71), new Point(10,-83), new Point(10,-95), new Point(12,-108), new Point(12,-120), new Point(12,-134), new Point(12,-148), new Point(12,-161), new Point(11,-175), new Point(10,-187), new Point(8,-200), new Point(6,-212), new Point(5,-224), new Point(4,-235), new Point(3,-246), new Point(2,-257), new Point(2,-266), new Point(2,-278), new Point(2,-288), new Point(2,-298), new Point(2,-308), new Point(2,-317), new Point(2,-326), new Point(2,-335), new Point(2,-344), new Point(2,-351), new Point(2,-358), new Point(2,-365), new Point(2,-371), new Point(3,-377), new Point(3,-382), new Point(4,-387), new Point(4,-391), new Point(4,-394), new Point(4,-397), new Point(4,-400)),
// 	new Array(new Point(0,0), new Point(0,-4), new Point(0,-8), new Point(0,-14), new Point(0,-18), new Point(0,-24), new Point(0,-32), new Point(0,-40), new Point(0,-48), new Point(0,-56), new Point(0,-65), new Point(0,-73), new Point(-1,-82), new Point(-2,-91), new Point(-3,-99), new Point(-4,-108), new Point(-4,-117), new Point(-4,-125), new Point(-4,-133), new Point(-4,-141), new Point(-4,-147), new Point(-4,-153), new Point(-4,-157), new Point(-6,-159)),
// 	new Array(new Point(0,0), new Point(2,-5), new Point(2,-8), new Point(2,-11), new Point(2,-16), new Point(2,-20), new Point(3,-26), new Point(4,-32), new Point(5,-38), new Point(6,-45), new Point(6,-52), new Point(7,-58), new Point(8,-65), new Point(8,-73), new Point(8,-80), new Point(8,-88), new Point(8,-96), new Point(8,-103), new Point(8,-111), new Point(8,-119), new Point(8,-125), new Point(7,-131), new Point(6,-137), new Point(5,-142), new Point(5,-148), new Point(4,-153), new Point(4,-158), new Point(3,-163), new Point(2,-168), new Point(2,-173), new Point(2,-178), new Point(2,-184), new Point(2,-189), new Point(2,-195), new Point(2,-201), new Point(2,-206), new Point(2,-209), new Point(2,-212), new Point(3,-213))
// );

// let carat2 = new Array(
// 	// left to right
// 	new Array(new Point(0,0), new Point(3,-5), new Point(5,-8), new Point(7,-12), new Point(10,-15), new Point(13,-20), new Point(17,-25), new Point(21,-32), new Point(26,-39), new Point(31,-46), new Point(38,-56), new Point(44,-66), new Point(50,-76), new Point(57,-87), new Point(64,-97), new Point(70,-107), new Point(77,-117), new Point(83,-127), new Point(89,-136), new Point(94,-144), new Point(99,-154), new Point(103,-161), new Point(107,-167), new Point(110,-173), new Point(114,-178), new Point(116,-181), new Point(118,-184), new Point(121,-185), new Point(122,-186), new Point(123,-187), new Point(124,-187), new Point(125,-187), new Point(126,-184), new Point(126,-180), new Point(128,-173), new Point(131,-165), new Point(135,-155), new Point(139,-144), new Point(146,-130), new Point(153,-116), new Point(161,-101), new Point(170,-86), new Point(179,-71), new Point(187,-58), new Point(194,-46), new Point(199,-36), new Point(204,-25), new Point(208,-17), new Point(212,-9), new Point(215,-4), new Point(218,2), new Point(221,6), new Point(223,8), new Point(224,10), new Point(225,12), new Point(227,13), new Point(227,14)),
// 	new Array(new Point(0,0), new Point(6,-6), new Point(8,-10), new Point(11,-13), new Point(15,-17), new Point(18,-22), new Point(22,-28), new Point(26,-35), new Point(30,-43), new Point(34,-50), new Point(38,-58), new Point(42,-65), new Point(46,-72), new Point(50,-79), new Point(54,-88), new Point(58,-98), new Point(62,-107), new Point(66,-114), new Point(70,-120), new Point(74,-126), new Point(77,-131), new Point(80,-135), new Point(83,-138), new Point(86,-141), new Point(87,-142), new Point(88,-142), new Point(89,-142), new Point(90,-142), new Point(92,-139), new Point(93,-134), new Point(96,-127), new Point(98,-118), new Point(102,-108), new Point(105,-96), new Point(108,-85), new Point(112,-73), new Point(116,-62), new Point(121,-51), new Point(126,-41), new Point(130,-33), new Point(134,-24), new Point(137,-17), new Point(140,-12), new Point(142,-7), new Point(144,-3), new Point(145,1), new Point(146,4), new Point(147,7), new Point(149,9), new Point(150,12), new Point(153,13), new Point(155,16), new Point(157,18), new Point(159,20), new Point(161,23), new Point(163,26), new Point(165,30), new Point(167,33), new Point(168,37), new Point(170,39), new Point(171,41)),
// 	new Array(new Point(0,0), new Point(3,-6), new Point(4,-10), new Point(6,-15), new Point(10,-23), new Point(16,-33), new Point(23,-44), new Point(30,-55), new Point(38,-65), new Point(44,-71), new Point(50,-75), new Point(57,-77), new Point(63,-77), new Point(68,-77), new Point(75,-70), new Point(81,-61), new Point(87,-48), new Point(95,-34), new Point(101,-21), new Point(107,-10), new Point(113,3)),
// 	new Array(new Point(0,0), new Point(4,-7), new Point(6,-11), new Point(9,-16), new Point(12,-21), new Point(16,-28), new Point(20,-35), new Point(24,-42), new Point(29,-50), new Point(33,-58), new Point(38,-65), new Point(42,-73), new Point(46,-80), new Point(50,-86), new Point(54,-92), new Point(57,-97), new Point(60,-101), new Point(62,-104), new Point(64,-107), new Point(65,-108), new Point(67,-108), new Point(69,-108), new Point(70,-108), new Point(71,-105), new Point(73,-100), new Point(75,-96), new Point(78,-90), new Point(82,-83), new Point(86,-77), new Point(90,-70), new Point(95,-63), new Point(100,-56), new Point(104,-49), new Point(109,-41), new Point(114,-34), new Point(119,-27), new Point(124,-19), new Point(127,-13), new Point(130,-5), new Point(133,1), new Point(135,7), new Point(138,14)),
// 	new Array(new Point(0,0), new Point(6,-5), new Point(6,-7), new Point(7,-10), new Point(8,-14), new Point(10,-18), new Point(11,-22), new Point(13,-26), new Point(14,-31), new Point(16,-36), new Point(17,-41), new Point(18,-47), new Point(20,-54), new Point(21,-60), new Point(23,-68), new Point(25,-74), new Point(27,-81), new Point(29,-87), new Point(32,-94), new Point(34,-100), new Point(37,-106), new Point(41,-113), new Point(44,-119), new Point(47,-126), new Point(49,-132), new Point(51,-139), new Point(54,-146), new Point(56,-152), new Point(59,-158), new Point(61,-164), new Point(63,-170), new Point(65,-175), new Point(67,-180), new Point(69,-184), new Point(71,-189), new Point(72,-192), new Point(74,-196), new Point(75,-199), new Point(76,-201), new Point(78,-203), new Point(80,-204), new Point(81,-205), new Point(82,-205), new Point(83,-205), new Point(84,-205), new Point(85,-203), new Point(86,-199), new Point(87,-194), new Point(89,-190), new Point(90,-184), new Point(92,-179), new Point(93,-173), new Point(94,-167), new Point(95,-162), new Point(96,-155), new Point(98,-149), new Point(99,-144), new Point(100,-137), new Point(102,-129), new Point(104,-124), new Point(105,-117), new Point(107,-109), new Point(109,-102), new Point(110,-96), new Point(112,-88), new Point(114,-82), new Point(115,-75), new Point(117,-69), new Point(119,-63), new Point(121,-57), new Point(122,-51), new Point(124,-46), new Point(126,-41), new Point(128,-35), new Point(130,-30), new Point(132,-25), new Point(133,-21), new Point(134,-17), new Point(136,-13), new Point(137,-9), new Point(139,-5), new Point(141,-2), new Point(142,2), new Point(144,6), new Point(146,10)),
// 	new Array(new Point(0,0), new Point(3,-5), new Point(3,-9), new Point(3,-15), new Point(3,-25), new Point(5,-36), new Point(8,-53), new Point(12,-69), new Point(18,-85), new Point(25,-99), new Point(33,-110), new Point(42,-119), new Point(52,-124), new Point(63,-126), new Point(73,-126), new Point(87,-120), new Point(100,-110), new Point(111,-96), new Point(121,-82), new Point(130,-64), new Point(138,-47), new Point(145,-28), new Point(150,-11)),
// 	new Array(new Point(0,0), new Point(4,-6), new Point(4,-9), new Point(5,-12), new Point(8,-17), new Point(13,-25), new Point(17,-32), new Point(23,-42), new Point(29,-52), new Point(35,-62), new Point(41,-72), new Point(46,-82), new Point(52,-91), new Point(57,-100), new Point(62,-108), new Point(66,-116), new Point(71,-124), new Point(74,-131), new Point(76,-136), new Point(79,-140), new Point(81,-141), new Point(84,-142), new Point(87,-142), new Point(90,-141), new Point(94,-137), new Point(100,-130), new Point(106,-123), new Point(113,-114), new Point(120,-105), new Point(128,-95), new Point(136,-85), new Point(143,-75), new Point(150,-65), new Point(157,-55), new Point(163,-46), new Point(168,-37), new Point(174,-27), new Point(180,-18), new Point(186,-8)),
// 	new Array(new Point(0,0), new Point(7,-4), new Point(10,-7), new Point(13,-11), new Point(18,-17), new Point(23,-25), new Point(29,-34), new Point(37,-44), new Point(44,-55), new Point(54,-68), new Point(62,-77), new Point(70,-88), new Point(78,-98), new Point(86,-107), new Point(95,-117), new Point(103,-125), new Point(110,-130), new Point(118,-135), new Point(125,-138), new Point(131,-138), new Point(139,-138), new Point(146,-136), new Point(153,-130), new Point(161,-123), new Point(169,-115), new Point(176,-107), new Point(184,-98), new Point(193,-87), new Point(201,-76), new Point(210,-63), new Point(217,-53), new Point(224,-41), new Point(233,-28), new Point(242,-15)),
// 	new Array(new Point(0,0), new Point(4,-8), new Point(7,-12), new Point(9,-16), new Point(12,-21), new Point(16,-27), new Point(21,-34), new Point(26,-40), new Point(31,-47), new Point(36,-54), new Point(41,-61), new Point(46,-69), new Point(51,-77), new Point(58,-86), new Point(63,-96), new Point(70,-106), new Point(77,-116), new Point(83,-125), new Point(89,-132), new Point(95,-139), new Point(101,-144), new Point(106,-146), new Point(112,-148), new Point(118,-148), new Point(126,-147), new Point(135,-142), new Point(145,-135), new Point(155,-126), new Point(164,-118), new Point(174,-110), new Point(183,-101), new Point(192,-93), new Point(201,-84), new Point(211,-75), new Point(219,-67), new Point(228,-58), new Point(235,-50), new Point(242,-42), new Point(249,-33), new Point(253,-27), new Point(258,-20), new Point(262,-13), new Point(265,-8), new Point(268,-2), new Point(270,2), new Point(271,7)),
// 	new Array(new Point(0,0), new Point(5,-6), new Point(8,-11), new Point(12,-17), new Point(18,-26), new Point(26,-37), new Point(36,-51), new Point(47,-65), new Point(58,-79), new Point(70,-93), new Point(82,-105), new Point(94,-115), new Point(103,-123), new Point(114,-131), new Point(123,-135), new Point(132,-137), new Point(143,-137), new Point(151,-132), new Point(161,-122), new Point(171,-109), new Point(181,-96), new Point(191,-81), new Point(199,-67), new Point(207,-52), new Point(213,-37), new Point(220,-23), new Point(224,-11)),
// );

// let carat3 = new Array(
// 	// right to left
// 	new Array(new Point(0,0), new Point(-4,-7), new Point(-8,-14), new Point(-15,-23), new Point(-20,-30), new Point(-26,-40), new Point(-32,-49), new Point(-39,-58), new Point(-46,-68), new Point(-53,-78), new Point(-59,-86), new Point(-65,-94), new Point(-72,-103), new Point(-77,-110), new Point(-83,-117), new Point(-88,-124), new Point(-93,-131), new Point(-97,-136), new Point(-101,-141), new Point(-104,-146), new Point(-107,-150), new Point(-109,-153), new Point(-111,-156), new Point(-113,-159), new Point(-115,-161), new Point(-116,-162), new Point(-116,-163), new Point(-117,-163), new Point(-118,-163), new Point(-119,-163), new Point(-120,-163), new Point(-121,-162), new Point(-123,-158), new Point(-125,-153), new Point(-127,-146), new Point(-129,-139), new Point(-132,-131), new Point(-135,-122), new Point(-139,-111), new Point(-142,-101), new Point(-145,-92), new Point(-150,-82), new Point(-155,-72), new Point(-159,-64), new Point(-164,-56), new Point(-169,-48), new Point(-173,-41), new Point(-177,-34), new Point(-180,-28), new Point(-183,-20), new Point(-185,-14), new Point(-187,-7), new Point(-189,-1), new Point(-192,5), new Point(-194,10), new Point(-196,15), new Point(-197,19), new Point(-199,22), new Point(-200,25), new Point(-200,27), new Point(-200,28)),
// 	new Array(new Point(0,0), new Point(3,-8), new Point(-2,-16), new Point(-10,-28), new Point(-21,-43), new Point(-34,-61), new Point(-46,-80), new Point(-59,-99), new Point(-71,-112), new Point(-81,-120), new Point(-89,-122), new Point(-100,-122), new Point(-109,-113), new Point(-118,-98), new Point(-132,-76), new Point(-146,-57), new Point(-159,-38), new Point(-170,-23), new Point(-180,-9), new Point(-187,-1), new Point(-193,7)),
// 	new Array(new Point(0,0), new Point(-4,-7), new Point(-8,-14), new Point(-12,-21), new Point(-17,-27), new Point(-23,-33), new Point(-30,-39), new Point(-36,-44), new Point(-43,-49), new Point(-49,-51), new Point(-55,-54), new Point(-62,-56), new Point(-68,-58), new Point(-73,-59), new Point(-79,-59), new Point(-83,-59), new Point(-88,-59), new Point(-92,-59), new Point(-97,-54), new Point(-102,-48), new Point(-107,-41), new Point(-111,-34), new Point(-115,-26), new Point(-119,-20), new Point(-123,-12), new Point(-127,-5), new Point(-129,1), new Point(-132,7), new Point(-134,12)),
// 	new Array(new Point(0,0), new Point(0,-3), new Point(0,-6), new Point(0,-10), new Point(-2,-14), new Point(-3,-18), new Point(-5,-24), new Point(-6,-30), new Point(-9,-36), new Point(-10,-42), new Point(-12,-51), new Point(-13,-58), new Point(-15,-66), new Point(-18,-73), new Point(-20,-81), new Point(-22,-88), new Point(-24,-95), new Point(-27,-102), new Point(-29,-108), new Point(-32,-115), new Point(-35,-121), new Point(-38,-128), new Point(-41,-135), new Point(-43,-140), new Point(-46,-146), new Point(-48,-152), new Point(-49,-157), new Point(-51,-162), new Point(-52,-166), new Point(-54,-169), new Point(-55,-172), new Point(-57,-174), new Point(-58,-176), new Point(-59,-177), new Point(-62,-178), new Point(-64,-178), new Point(-67,-178), new Point(-69,-178), new Point(-72,-177), new Point(-74,-174), new Point(-77,-170), new Point(-80,-166), new Point(-83,-162), new Point(-87,-155), new Point(-89,-149), new Point(-92,-143), new Point(-95,-135), new Point(-97,-129), new Point(-100,-121), new Point(-102,-113), new Point(-104,-105), new Point(-106,-97), new Point(-108,-89), new Point(-110,-81), new Point(-112,-74), new Point(-113,-66), new Point(-115,-59), new Point(-117,-52), new Point(-119,-45), new Point(-122,-37), new Point(-123,-31), new Point(-125,-25), new Point(-126,-19), new Point(-128,-13), new Point(-130,-8), new Point(-131,-3), new Point(-132,1), new Point(-133,4), new Point(-134,5)),
// 	new Array(new Point(0,0), new Point(-2,-6), new Point(-2,-10), new Point(-5,-14), new Point(-8,-21), new Point(-13,-33), new Point(-20,-49), new Point(-31,-72), new Point(-40,-91), new Point(-46,-104), new Point(-52,-114), new Point(-56,-120), new Point(-59,-125), new Point(-62,-127), new Point(-65,-127), new Point(-69,-127), new Point(-72,-121), new Point(-76,-110), new Point(-81,-94), new Point(-87,-78), new Point(-95,-63), new Point(-102,-49), new Point(-111,-35), new Point(-118,-21), new Point(-123,-10), new Point(-128,0)),
// 	new Array(new Point(0,0), new Point(-2,-9), new Point(-3,-20), new Point(-7,-31), new Point(-15,-47), new Point(-26,-66), new Point(-39,-82), new Point(-51,-94), new Point(-67,-105), new Point(-84,-115), new Point(-101,-122), new Point(-117,-126), new Point(-133,-126), new Point(-148,-123), new Point(-161,-112), new Point(-173,-97), new Point(-183,-83), new Point(-191,-68), new Point(-197,-56), new Point(-203,-44), new Point(-207,-36)),
// 	new Array(new Point(0,0), new Point(-4,-4), new Point(-9,-9), new Point(-14,-15), new Point(-21,-23), new Point(-30,-32), new Point(-40,-43), new Point(-50,-54), new Point(-61,-66), new Point(-70,-78), new Point(-79,-86), new Point(-87,-95), new Point(-95,-102), new Point(-101,-108), new Point(-109,-112), new Point(-115,-115), new Point(-122,-116), new Point(-129,-116), new Point(-135,-116), new Point(-143,-113), new Point(-152,-107), new Point(-160,-99), new Point(-168,-90), new Point(-177,-81), new Point(-184,-73), new Point(-192,-65), new Point(-200,-57), new Point(-208,-50), new Point(-216,-43), new Point(-225,-36), new Point(-233,-29), new Point(-240,-23), new Point(-247,-16)),
// 	new Array(new Point(0,0), new Point(-4,-5), new Point(-8,-10), new Point(-13,-17), new Point(-20,-26), new Point(-26,-34), new Point(-32,-44), new Point(-38,-53), new Point(-43,-63), new Point(-48,-73), new Point(-53,-83), new Point(-57,-93), new Point(-62,-104), new Point(-67,-115), new Point(-72,-126), new Point(-77,-136), new Point(-83,-146), new Point(-89,-155), new Point(-94,-163), new Point(-100,-170), new Point(-105,-175), new Point(-109,-179), new Point(-114,-183), new Point(-119,-186), new Point(-124,-189), new Point(-130,-191), new Point(-135,-193), new Point(-142,-193), new Point(-148,-193), new Point(-154,-192), new Point(-161,-187), new Point(-167,-182), new Point(-172,-175), new Point(-178,-168), new Point(-184,-159), new Point(-190,-151), new Point(-196,-143), new Point(-202,-133), new Point(-208,-124), new Point(-214,-115), new Point(-219,-108), new Point(-225,-97), new Point(-230,-87), new Point(-236,-77), new Point(-241,-66), new Point(-246,-54), new Point(-251,-43), new Point(-255,-32), new Point(-259,-21), new Point(-263,-13), new Point(-267,-4), new Point(-269,2)),
// 	new Array(new Point(-32,-82), new Point(-38,-95), new Point(-43,-108), new Point(-50,-122), new Point(-56,-136), new Point(-61,-150), new Point(-66,-164), new Point(-70,-175), new Point(-75,-186), new Point(-79,-195), new Point(-84,-204), new Point(-89,-211), new Point(-92,-215), new Point(-95,-219), new Point(-98,-220), new Point(-100,-221), new Point(-101,-221), new Point(-103,-221), new Point(-105,-217), new Point(-107,-212), new Point(-111,-204), new Point(-114,-197), new Point(-118,-188), new Point(-123,-177), new Point(-128,-167), new Point(-133,-156), new Point(-139,-144), new Point(-144,-130), new Point(-149,-116), new Point(-154,-101), new Point(-158,-87), new Point(-163,-76), new Point(-168,-65), new Point(-173,-53), new Point(-177,-42), new Point(-181,-30), new Point(-184,-22), new Point(-187,-13), new Point(-191,-2), new Point(-194,6), new Point(-197,15)),
// 	new Array(new Point(0,0), new Point(-6,-11), new Point(-14,-26), new Point(-29,-48), new Point(-44,-70), new Point(-59,-92), new Point(-74,-112), new Point(-89,-129), new Point(-103,-141), new Point(-117,-151), new Point(-129,-156), new Point(-141,-156), new Point(-151,-154), new Point(-163,-143), new Point(-173,-128), new Point(-185,-113), new Point(-197,-97), new Point(-209,-81), new Point(-220,-67), new Point(-229,-51), new Point(-237,-39), new Point(-244,-29), new Point(-251,-20))
// );

// let circle2 = new Array(
// 	// top, clockwise
// 	new Array(new Point(0,0), new Point(4,-3), new Point(10,-5), new Point(17,-9), new Point(28,-11), new Point(39,-12), new Point(53,-13), new Point(69,-13), new Point(84,-11), new Point(100,-5), new Point(114,3), new Point(127,11), new Point(137,22), new Point(146,35), new Point(152,50), new Point(155,67), new Point(156,85), new Point(156,102), new Point(153,120), new Point(146,136), new Point(136,152), new Point(125,166), new Point(113,177), new Point(99,187), new Point(83,193), new Point(67,198), new Point(48,202), new Point(29,202), new Point(11,202), new Point(-6,196), new Point(-21,188), new Point(-35,177), new Point(-45,164), new Point(-54,149), new Point(-61,134), new Point(-64,120), new Point(-66,105), new Point(-66,92), new Point(-66,77), new Point(-63,65), new Point(-56,51), new Point(-50,41), new Point(-42,30), new Point(-34,22), new Point(-27,18)),
// 	new Array(new Point(0,0), new Point(7,-4), new Point(12,-5), new Point(17,-6), new Point(24,-8), new Point(33,-8), new Point(42,-9), new Point(52,-9), new Point(63,-8), new Point(70,-4), new Point(77,1), new Point(84,9), new Point(88,17), new Point(91,26), new Point(94,38), new Point(96,47), new Point(97,56), new Point(97,65), new Point(97,73), new Point(91,81), new Point(83,89), new Point(74,95), new Point(64,101), new Point(53,105), new Point(42,106), new Point(30,107), new Point(18,107), new Point(7,105), new Point(-3,101), new Point(-12,94), new Point(-20,86), new Point(-26,78), new Point(-31,67), new Point(-33,56), new Point(-33,43), new Point(-33,32), new Point(-30,25), new Point(-24,17), new Point(-17,12), new Point(-10,7), new Point(-4,4), new Point(3,3), new Point(10,1)),
// 	new Array(new Point(0,0), new Point(2,-8), new Point(5,-9), new Point(10,-11), new Point(17,-12), new Point(26,-14), new Point(37,-14), new Point(50,-14), new Point(63,-14), new Point(80,-13), new Point(92,-9), new Point(107,-3), new Point(118,3), new Point(130,12), new Point(140,19), new Point(150,28), new Point(160,38), new Point(168,48), new Point(175,59), new Point(180,70), new Point(184,82), new Point(186,94), new Point(186,107), new Point(186,124), new Point(184,139), new Point(180,153), new Point(174,168), new Point(167,181), new Point(159,194), new Point(151,204), new Point(140,214), new Point(127,223), new Point(113,229), new Point(98,234), new Point(81,237), new Point(64,237), new Point(47,237), new Point(30,236), new Point(14,231), new Point(0,224), new Point(-13,216), new Point(-25,206), new Point(-34,194), new Point(-42,185), new Point(-49,172), new Point(-53,162), new Point(-57,150), new Point(-59,139), new Point(-60,127), new Point(-60,116), new Point(-60,104), new Point(-58,89), new Point(-54,78), new Point(-48,65), new Point(-41,54), new Point(-32,41), new Point(-24,32), new Point(-16,22), new Point(-8,14), new Point(0,9), new Point(8,4), new Point(17,0), new Point(25,-3), new Point(32,-6)),
// 	new Array(new Point(0,0), new Point(7,-6), new Point(11,-6), new Point(17,-7), new Point(28,-7), new Point(43,-6), new Point(64,1), new Point(83,12), new Point(102,27), new Point(120,46), new Point(136,70), new Point(150,97), new Point(159,125), new Point(162,153), new Point(162,182), new Point(151,210), new Point(134,233), new Point(112,250), new Point(88,261), new Point(60,268), new Point(30,268), new Point(-5,265), new Point(-37,251), new Point(-65,232), new Point(-88,210), new Point(-103,189), new Point(-112,166), new Point(-114,141), new Point(-113,112), new Point(-105,78), new Point(-94,53), new Point(-80,29), new Point(-64,14), new Point(-48,7)),
// 	new Array(new Point(0,0), new Point(5,-4), new Point(9,-5), new Point(15,-7), new Point(23,-8), new Point(36,-10), new Point(51,-10), new Point(67,-9), new Point(82,-5), new Point(97,2), new Point(112,10), new Point(124,20), new Point(135,31), new Point(145,45), new Point(153,62), new Point(160,79), new Point(165,101), new Point(168,122), new Point(168,146), new Point(168,168), new Point(164,185), new Point(156,203), new Point(143,224), new Point(126,242), new Point(107,256), new Point(88,267), new Point(69,277), new Point(48,284), new Point(27,289), new Point(5,290), new Point(-16,290), new Point(-33,288), new Point(-52,278), new Point(-69,263), new Point(-83,245), new Point(-97,228), new Point(-105,212), new Point(-110,194), new Point(-110,172), new Point(-110,151), new Point(-109,130), new Point(-106,110), new Point(-100,94), new Point(-93,78), new Point(-85,62), new Point(-75,47), new Point(-63,31), new Point(-49,16), new Point(-35,4), new Point(-20,-5), new Point(-4,-10), new Point(11,-12), new Point(27,-12), new Point(40,-12), new Point(54,-12), new Point(65,-9), new Point(74,-5), new Point(83,2), new Point(89,7)),
// 	new Array(new Point(0,0), new Point(5,0), new Point(9,0), new Point(15,2), new Point(22,5), new Point(32,9), new Point(41,15), new Point(51,22), new Point(61,33), new Point(69,45), new Point(75,57), new Point(79,70), new Point(80,83), new Point(80,96), new Point(80,109), new Point(75,120), new Point(69,131), new Point(60,140), new Point(50,148), new Point(39,153), new Point(24,158), new Point(12,159), new Point(-5,159), new Point(-18,159), new Point(-33,157), new Point(-45,152), new Point(-57,145), new Point(-67,136), new Point(-76,126), new Point(-81,115), new Point(-84,103), new Point(-85,92), new Point(-85,80), new Point(-83,69), new Point(-80,57), new Point(-75,46), new Point(-69,37), new Point(-63,30), new Point(-55,23), new Point(-47,17), new Point(-36,13), new Point(-26,11), new Point(-15,11), new Point(-7,11), new Point(3,11), new Point(12,11), new Point(20,15), new Point(28,18), new Point(33,22), new Point(38,26), new Point(41,30)),
// 	new Array(new Point(0,0), new Point(10,-3), new Point(14,-3), new Point(18,-3), new Point(22,-1), new Point(28,3), new Point(34,9), new Point(39,16), new Point(43,24), new Point(46,33), new Point(47,43), new Point(47,54), new Point(47,61), new Point(45,70), new Point(41,77), new Point(36,83), new Point(30,88), new Point(23,92), new Point(16,95), new Point(7,96), new Point(-1,96), new Point(-8,96), new Point(-16,94), new Point(-23,89), new Point(-30,83), new Point(-34,75), new Point(-38,67), new Point(-40,58), new Point(-41,47), new Point(-41,39), new Point(-41,29), new Point(-40,21), new Point(-35,13), new Point(-30,6), new Point(-24,1), new Point(-19,-3), new Point(-12,-6), new Point(-6,-8), new Point(1,-8), new Point(8,-8), new Point(13,-7)),
// 	new Array(new Point(0,0), new Point(6,-10), new Point(10,-11), new Point(16,-13), new Point(24,-13), new Point(34,-13), new Point(47,-12), new Point(63,-7), new Point(78,-2), new Point(93,4), new Point(104,9), new Point(116,17), new Point(125,26), new Point(133,37), new Point(139,49), new Point(142,61), new Point(144,72), new Point(144,83), new Point(143,93), new Point(139,103), new Point(132,112), new Point(124,122), new Point(116,130), new Point(107,137), new Point(98,142), new Point(88,148), new Point(78,152), new Point(67,156), new Point(55,158), new Point(43,159), new Point(27,159), new Point(13,159), new Point(2,154), new Point(-13,147), new Point(-24,142), new Point(-34,134), new Point(-46,123), new Point(-54,114), new Point(-62,101), new Point(-68,91), new Point(-73,79), new Point(-76,67), new Point(-79,55), new Point(-79,43), new Point(-79,31), new Point(-79,19), new Point(-78,10), new Point(-72,0), new Point(-66,-6), new Point(-57,-11), new Point(-48,-15), new Point(-37,-17), new Point(-26,-18), new Point(-14,-18), new Point(0,-18), new Point(13,-17), new Point(27,-10)),
// 	new Array(new Point(0,0), new Point(5,0), new Point(12,0), new Point(22,0), new Point(34,2), new Point(50,7), new Point(65,13), new Point(77,21), new Point(88,29), new Point(97,39), new Point(105,50), new Point(111,66), new Point(114,83), new Point(115,102), new Point(115,121), new Point(113,143), new Point(106,160), new Point(95,180), new Point(84,193), new Point(70,207), new Point(56,217), new Point(40,227), new Point(22,234), new Point(3,237), new Point(-16,238), new Point(-34,238), new Point(-51,234), new Point(-68,225), new Point(-82,216), new Point(-96,202), new Point(-106,187), new Point(-114,170), new Point(-120,152), new Point(-123,135), new Point(-123,120), new Point(-123,105), new Point(-120,91), new Point(-114,77), new Point(-109,65), new Point(-102,51), new Point(-93,40), new Point(-82,31), new Point(-70,22), new Point(-59,16), new Point(-47,11), new Point(-32,7), new Point(-20,6), new Point(-6,6), new Point(7,6), new Point(22,12)),
// 	new Array(new Point(0,0), new Point(16,-5), new Point(22,-5), new Point(30,-5), new Point(38,-3), new Point(48,2), new Point(58,8), new Point(69,15), new Point(78,24), new Point(86,34), new Point(93,46), new Point(96,58), new Point(97,71), new Point(97,87), new Point(91,101), new Point(85,112), new Point(75,123), new Point(66,131), new Point(54,135), new Point(41,138), new Point(28,138), new Point(15,138), new Point(2,136), new Point(-10,129), new Point(-20,120), new Point(-28,108), new Point(-33,93), new Point(-35,81), new Point(-35,68), new Point(-35,56), new Point(-29,44), new Point(-22,33), new Point(-14,23), new Point(-5,15), new Point(5,9), new Point(15,5), new Point(26,4), new Point(35,4), new Point(47,4)),
// );

// let circle3 = new Array(
// 	// // top, counterclockwise
// 	new Array(new Point(0,0), new Point(-7,-2), new Point(-12,-2), new Point(-19,-1), new Point(-26,2), new Point(-37,7), new Point(-47,13), new Point(-57,21), new Point(-65,30), new Point(-71,39), new Point(-74,50), new Point(-75,61), new Point(-75,73), new Point(-73,86), new Point(-66,98), new Point(-57,110), new Point(-46,119), new Point(-33,127), new Point(-22,132), new Point(-8,133), new Point(8,133), new Point(19,128), new Point(30,120), new Point(39,110), new Point(46,99), new Point(51,87), new Point(55,75), new Point(55,62), new Point(55,47), new Point(54,32), new Point(46,20), new Point(39,11), new Point(28,2), new Point(16,-3), new Point(3,-6)),
// 	new Array(new Point(0,0), new Point(-5,-5), new Point(-10,-6), new Point(-19,-9), new Point(-29,-13), new Point(-41,-16), new Point(-53,-17), new Point(-65,-17), new Point(-76,-14), new Point(-87,-6), new Point(-98,6), new Point(-108,20), new Point(-117,35), new Point(-123,51), new Point(-127,68), new Point(-128,81), new Point(-128,96), new Point(-128,109), new Point(-123,123), new Point(-115,133), new Point(-103,146), new Point(-91,154), new Point(-76,160), new Point(-60,162), new Point(-43,162), new Point(-26,161), new Point(-9,156), new Point(6,150), new Point(19,143), new Point(30,135), new Point(39,123), new Point(45,112), new Point(51,97), new Point(54,83), new Point(54,68), new Point(54,53), new Point(48,38), new Point(38,24), new Point(25,10), new Point(11,-1), new Point(-6,-12), new Point(-23,-21), new Point(-41,-28), new Point(-58,-33), new Point(-75,-36)),
// 	new Array(new Point(0,0), new Point(-6,-1), new Point(-12,-1), new Point(-20,-1), new Point(-28,1), new Point(-39,4), new Point(-48,10), new Point(-56,18), new Point(-63,26), new Point(-69,35), new Point(-74,45), new Point(-78,55), new Point(-82,67), new Point(-84,80), new Point(-85,92), new Point(-85,103), new Point(-84,111), new Point(-77,123), new Point(-69,132), new Point(-57,142), new Point(-44,152), new Point(-30,160), new Point(-15,167), new Point(1,173), new Point(13,176), new Point(29,178), new Point(41,178), new Point(54,178), new Point(64,173), new Point(73,167), new Point(81,160), new Point(88,151), new Point(94,142), new Point(99,131), new Point(102,119), new Point(105,107), new Point(106,96), new Point(106,86), new Point(106,75), new Point(102,64), new Point(96,55), new Point(88,45), new Point(79,36), new Point(69,27), new Point(58,19), new Point(46,11), new Point(36,6), new Point(25,2), new Point(17,0), new Point(8,-2), new Point(-1,-2), new Point(-11,-2), new Point(-20,-1)),
// 	new Array(new Point(0,0), new Point(-8,3), new Point(-14,4), new Point(-21,7), new Point(-28,11), new Point(-35,16), new Point(-45,23), new Point(-51,29), new Point(-59,38), new Point(-66,46), new Point(-71,55), new Point(-76,64), new Point(-80,75), new Point(-83,86), new Point(-86,97), new Point(-88,108), new Point(-89,120), new Point(-90,131), new Point(-90,143), new Point(-90,155), new Point(-90,166), new Point(-86,178), new Point(-81,189), new Point(-73,202), new Point(-66,211), new Point(-54,222), new Point(-43,230), new Point(-29,237), new Point(-14,243), new Point(3,248), new Point(20,253), new Point(37,257), new Point(54,259), new Point(70,259), new Point(86,259), new Point(102,254), new Point(117,248), new Point(130,241), new Point(142,232), new Point(153,222), new Point(164,210), new Point(174,198), new Point(181,188), new Point(188,172), new Point(193,158), new Point(196,143), new Point(198,128), new Point(198,112), new Point(198,95), new Point(194,78), new Point(187,62), new Point(179,46), new Point(169,32), new Point(159,19), new Point(148,8), new Point(137,-2), new Point(127,-9), new Point(115,-16), new Point(104,-20), new Point(92,-23), new Point(80,-24), new Point(68,-25), new Point(57,-25), new Point(45,-25), new Point(34,-25), new Point(25,-25), new Point(16,-25), new Point(8,-23), new Point(1,-19), new Point(-6,-15), new Point(-13,-10), new Point(-18,-7), new Point(-25,-2), new Point(-31,0), new Point(-37,3)),
// 	new Array(new Point(0,0), new Point(-5,6), new Point(-8,10), new Point(-13,14), new Point(-17,19), new Point(-22,27), new Point(-25,35), new Point(-27,44), new Point(-27,54), new Point(-27,63), new Point(-27,72), new Point(-25,81), new Point(-21,89), new Point(-15,96), new Point(-9,102), new Point(-2,107), new Point(6,109), new Point(16,109), new Point(28,109), new Point(41,107), new Point(53,104), new Point(65,101), new Point(76,96), new Point(82,91), new Point(87,84), new Point(91,75), new Point(92,64), new Point(92,56), new Point(92,44), new Point(89,34), new Point(83,25), new Point(78,18), new Point(69,10), new Point(62,5), new Point(53,1), new Point(44,-1), new Point(34,-2), new Point(23,-2), new Point(15,-2), new Point(5,-2), new Point(-2,2), new Point(-10,8), new Point(-16,13), new Point(-21,17)),
// 	new Array(new Point(0,0), new Point(-6,7), new Point(-9,13), new Point(-12,19), new Point(-16,26), new Point(-20,34), new Point(-23,46), new Point(-24,57), new Point(-24,70), new Point(-24,81), new Point(-24,93), new Point(-20,101), new Point(-13,110), new Point(-5,118), new Point(3,124), new Point(14,128), new Point(26,128), new Point(37,128), new Point(49,128), new Point(58,121), new Point(65,115), new Point(70,107), new Point(74,97), new Point(76,86), new Point(76,74), new Point(76,63), new Point(75,52), new Point(70,42), new Point(63,32), new Point(54,24), new Point(44,18), new Point(34,12), new Point(23,10), new Point(12,10), new Point(1,10), new Point(-9,15), new Point(-18,21), new Point(-26,25)),
// 	new Array(new Point(0,0), new Point(-4,0), new Point(-10,0), new Point(-17,1), new Point(-25,3), new Point(-36,7), new Point(-46,12), new Point(-57,16), new Point(-68,22), new Point(-80,30), new Point(-91,37), new Point(-102,48), new Point(-110,57), new Point(-118,68), new Point(-124,80), new Point(-129,93), new Point(-131,108), new Point(-132,121), new Point(-132,137), new Point(-130,153), new Point(-124,167), new Point(-116,181), new Point(-106,194), new Point(-93,206), new Point(-78,217), new Point(-57,226), new Point(-36,233), new Point(-14,236), new Point(9,237), new Point(31,237), new Point(48,232), new Point(65,223), new Point(80,211), new Point(92,198), new Point(102,181), new Point(111,161), new Point(117,139), new Point(121,118), new Point(121,96), new Point(121,75), new Point(115,55), new Point(106,40), new Point(91,23), new Point(76,12), new Point(55,2), new Point(39,-3), new Point(21,-5), new Point(4,-5), new Point(-11,0), new Point(-24,6), new Point(-36,11)),
// 	new Array(new Point(0,0), new Point(-5,0), new Point(-8,0), new Point(-13,1), new Point(-17,4), new Point(-22,8), new Point(-28,14), new Point(-33,21), new Point(-38,29), new Point(-42,37), new Point(-45,46), new Point(-46,56), new Point(-46,65), new Point(-46,74), new Point(-45,83), new Point(-41,91), new Point(-35,98), new Point(-28,103), new Point(-20,107), new Point(-9,108), new Point(2,108), new Point(13,108), new Point(24,103), new Point(34,98), new Point(41,93), new Point(48,87), new Point(53,80), new Point(57,73), new Point(59,65), new Point(60,55), new Point(60,44), new Point(60,36), new Point(58,27), new Point(54,18), new Point(46,10), new Point(37,3), new Point(28,-3), new Point(17,-6), new Point(5,-7), new Point(-6,-7), new Point(-17,-5), new Point(-26,0), new Point(-34,5)),
// 	new Array(new Point(0,0), new Point(-3,0), new Point(-5,0), new Point(-9,0), new Point(-12,1), new Point(-16,3), new Point(-19,6), new Point(-23,8), new Point(-27,11), new Point(-30,14), new Point(-33,18), new Point(-36,21), new Point(-39,26), new Point(-42,29), new Point(-44,33), new Point(-47,38), new Point(-50,42), new Point(-52,47), new Point(-55,52), new Point(-57,58), new Point(-58,66), new Point(-60,73), new Point(-61,81), new Point(-61,89), new Point(-61,98), new Point(-61,106), new Point(-61,114), new Point(-59,122), new Point(-57,130), new Point(-54,136), new Point(-49,143), new Point(-44,150), new Point(-38,155), new Point(-31,161), new Point(-24,166), new Point(-19,170), new Point(-12,176), new Point(-8,178), new Point(-3,181), new Point(2,183), new Point(7,185), new Point(12,187), new Point(18,188), new Point(23,189), new Point(29,190), new Point(35,190), new Point(41,191), new Point(47,191), new Point(54,191), new Point(60,191), new Point(67,191), new Point(74,191), new Point(82,190), new Point(88,188), new Point(96,185), new Point(103,181), new Point(109,176), new Point(115,170), new Point(121,165), new Point(126,159), new Point(130,155), new Point(135,150), new Point(138,144), new Point(140,139), new Point(142,132), new Point(144,126), new Point(146,120), new Point(148,114), new Point(149,107), new Point(150,101), new Point(151,94), new Point(152,88), new Point(153,81), new Point(153,75), new Point(153,69), new Point(153,64), new Point(153,58), new Point(153,52), new Point(153,46), new Point(151,40), new Point(149,34), new Point(146,28), new Point(143,22), new Point(138,15), new Point(135,10), new Point(129,4), new Point(124,-1), new Point(117,-6), new Point(111,-10), new Point(104,-14), new Point(96,-18), new Point(89,-22), new Point(83,-25), new Point(75,-27), new Point(67,-29), new Point(60,-31), new Point(52,-33), new Point(45,-34), new Point(39,-34), new Point(32,-34), new Point(26,-34), new Point(20,-34), new Point(14,-32), new Point(9,-30), new Point(4,-27), new Point(-2,-23), new Point(-6,-20), new Point(-9,-18), new Point(-12,-15), new Point(-14,-12), new Point(-16,-10), new Point(-17,-8), new Point(-18,-6)),
// 	new Array(new Point(0,0), new Point(-9,1), new Point(-12,1), new Point(-14,1), new Point(-17,1), new Point(-19,1), new Point(-22,1), new Point(-24,1), new Point(-25,2), new Point(-27,4), new Point(-29,7), new Point(-31,11), new Point(-32,15), new Point(-34,19), new Point(-35,23), new Point(-37,29), new Point(-39,35), new Point(-41,40), new Point(-43,46), new Point(-45,52), new Point(-47,58), new Point(-48,63), new Point(-50,71), new Point(-50,77), new Point(-50,83), new Point(-50,90), new Point(-50,98), new Point(-50,105), new Point(-47,111), new Point(-44,119), new Point(-40,126), new Point(-35,133), new Point(-30,139), new Point(-25,145), new Point(-19,151), new Point(-12,155), new Point(-5,160), new Point(1,163), new Point(8,166), new Point(16,168), new Point(22,170), new Point(28,170), new Point(35,171), new Point(41,171), new Point(47,171), new Point(54,171), new Point(62,171), new Point(70,170), new Point(78,167), new Point(85,163), new Point(90,159), new Point(96,154), new Point(100,149), new Point(104,142), new Point(107,137), new Point(110,129), new Point(112,123), new Point(114,117), new Point(115,110), new Point(116,104), new Point(116,97), new Point(117,91), new Point(117,84), new Point(117,77), new Point(117,71), new Point(114,64), new Point(111,57), new Point(108,50), new Point(105,43), new Point(102,38), new Point(99,31), new Point(95,26), new Point(91,20), new Point(86,14), new Point(81,9), new Point(76,5), new Point(69,0), new Point(62,-4), new Point(55,-7), new Point(50,-9), new Point(44,-10), new Point(38,-10), new Point(32,-10), new Point(26,-10), new Point(20,-10), new Point(15,-9), new Point(9,-7), new Point(4,-5), new Point(-1,-4), new Point(-4,-2), new Point(-8,0), new Point(-11,2), new Point(-14,3))
// );

// let arch2 = new Array(
// 	// left to right
// 	new Array(new Point(0,0), new Point(1,-5), new Point(1,-9), new Point(1,-14), new Point(1,-22), new Point(1,-32), new Point(2,-44), new Point(2,-58), new Point(2,-73), new Point(2,-88), new Point(2,-101), new Point(3,-114), new Point(5,-126), new Point(6,-137), new Point(7,-146), new Point(8,-154), new Point(8,-160), new Point(8,-164), new Point(9,-167), new Point(9,-169), new Point(10,-169), new Point(12,-169), new Point(15,-169), new Point(19,-169), new Point(24,-169), new Point(29,-169), new Point(37,-169), new Point(46,-169), new Point(55,-169), new Point(67,-168), new Point(78,-168), new Point(89,-166), new Point(101,-165), new Point(112,-165), new Point(122,-165), new Point(131,-165), new Point(138,-165), new Point(145,-165), new Point(150,-165), new Point(155,-165), new Point(158,-165), new Point(160,-164), new Point(162,-162), new Point(163,-159), new Point(164,-152), new Point(165,-144), new Point(166,-132), new Point(166,-119), new Point(166,-102), new Point(166,-87), new Point(166,-76), new Point(166,-63), new Point(166,-51), new Point(166,-42), new Point(166,-33), new Point(166,-26), new Point(166,-20)),
// 	new Array(new Point(0,0), new Point(0,-5), new Point(0,-10), new Point(0,-17), new Point(0,-26), new Point(0,-36), new Point(0,-45), new Point(0,-54), new Point(0,-61), new Point(0,-68), new Point(0,-74), new Point(0,-78), new Point(0,-81), new Point(0,-84), new Point(1,-85), new Point(2,-86), new Point(3,-87), new Point(4,-88), new Point(6,-89), new Point(8,-89), new Point(12,-90), new Point(15,-90), new Point(19,-90), new Point(23,-90), new Point(30,-90), new Point(36,-90), new Point(43,-90), new Point(51,-90), new Point(59,-91), new Point(66,-91), new Point(74,-92), new Point(80,-93), new Point(87,-94), new Point(93,-95), new Point(98,-95), new Point(102,-96), new Point(105,-96), new Point(108,-96), new Point(109,-96), new Point(110,-96), new Point(110,-94), new Point(110,-90), new Point(110,-85), new Point(110,-78), new Point(110,-69), new Point(111,-60), new Point(111,-51), new Point(112,-43), new Point(113,-34), new Point(114,-26), new Point(114,-16), new Point(114,-8), new Point(114,-2), new Point(114,4), new Point(114,7)),
// 	new Array(new Point(0,0), new Point(1,-7), new Point(1,-14), new Point(1,-23), new Point(2,-34), new Point(3,-46), new Point(4,-60), new Point(4,-75), new Point(4,-90), new Point(5,-102), new Point(5,-116), new Point(5,-129), new Point(5,-142), new Point(5,-154), new Point(5,-165), new Point(5,-176), new Point(5,-184), new Point(5,-191), new Point(5,-198), new Point(5,-203), new Point(5,-207), new Point(6,-210), new Point(7,-211), new Point(8,-212), new Point(9,-212), new Point(11,-212), new Point(15,-212), new Point(19,-212), new Point(25,-212), new Point(32,-212), new Point(41,-213), new Point(50,-215), new Point(62,-216), new Point(73,-217), new Point(84,-217), new Point(95,-218), new Point(107,-218), new Point(118,-218), new Point(130,-218), new Point(142,-218), new Point(154,-218), new Point(165,-219), new Point(176,-220), new Point(184,-221), new Point(193,-222), new Point(200,-223), new Point(206,-224), new Point(211,-225), new Point(215,-225), new Point(219,-225), new Point(222,-225), new Point(224,-224), new Point(226,-221), new Point(228,-216), new Point(229,-208), new Point(229,-200), new Point(229,-188), new Point(229,-177), new Point(229,-165), new Point(229,-153), new Point(229,-142), new Point(230,-129), new Point(230,-117), new Point(231,-104), new Point(232,-91), new Point(233,-79), new Point(233,-67), new Point(234,-55), new Point(234,-44), new Point(234,-34), new Point(235,-24), new Point(236,-13), new Point(238,-3), new Point(238,5), new Point(239,12), new Point(239,17), new Point(240,21)),
// 	new Array(new Point(0,0), new Point(0,-7), new Point(0,-12), new Point(0,-19), new Point(0,-27), new Point(0,-34), new Point(1,-42), new Point(1,-49), new Point(2,-55), new Point(2,-59), new Point(3,-62), new Point(3,-65), new Point(4,-67), new Point(5,-68), new Point(6,-69), new Point(7,-70), new Point(9,-70), new Point(11,-71), new Point(13,-71), new Point(17,-71), new Point(21,-72), new Point(26,-72), new Point(32,-72), new Point(38,-72), new Point(46,-72), new Point(53,-72), new Point(59,-72), new Point(65,-72), new Point(70,-72), new Point(73,-72), new Point(77,-72), new Point(80,-72), new Point(81,-72), new Point(82,-72), new Point(83,-71), new Point(84,-68), new Point(84,-64), new Point(84,-58), new Point(84,-51), new Point(84,-44), new Point(84,-38), new Point(84,-32), new Point(84,-26), new Point(84,-22), new Point(84,-19), new Point(85,-16), new Point(85,-14), new Point(86,-13), new Point(87,-12), new Point(87,-11), new Point(88,-11), new Point(89,-10), new Point(89,-9), new Point(89,-8), new Point(89,-6)),
// 	new Array(new Point(0,0), new Point(1,-6), new Point(1,-10), new Point(1,-16), new Point(1,-23), new Point(1,-32), new Point(1,-44), new Point(1,-55), new Point(1,-63), new Point(1,-69), new Point(1,-75), new Point(1,-80), new Point(1,-84), new Point(1,-87), new Point(1,-89), new Point(2,-91), new Point(3,-93), new Point(4,-94), new Point(5,-95), new Point(7,-96), new Point(9,-96), new Point(12,-96), new Point(15,-96), new Point(20,-96), new Point(25,-96), new Point(31,-96), new Point(38,-96), new Point(45,-96), new Point(53,-96), new Point(61,-96), new Point(68,-96), new Point(76,-96), new Point(82,-98), new Point(89,-98), new Point(95,-99), new Point(100,-99), new Point(104,-99), new Point(108,-99), new Point(111,-99), new Point(113,-99), new Point(115,-98), new Point(116,-95), new Point(117,-91), new Point(119,-84), new Point(119,-75), new Point(120,-63), new Point(120,-52), new Point(121,-41), new Point(121,-31), new Point(122,-21), new Point(123,-12), new Point(124,-5), new Point(124,1), new Point(124,7), new Point(125,10), new Point(125,12), new Point(125,13)),
// 	new Array(new Point(0,0), new Point(0,-5), new Point(0,-11), new Point(0,-17), new Point(0,-25), new Point(1,-37), new Point(1,-47), new Point(1,-59), new Point(2,-70), new Point(2,-82), new Point(2,-94), new Point(2,-105), new Point(3,-116), new Point(3,-126), new Point(3,-135), new Point(4,-145), new Point(5,-153), new Point(6,-160), new Point(8,-166), new Point(10,-171), new Point(12,-175), new Point(16,-178), new Point(20,-180), new Point(26,-181), new Point(34,-183), new Point(42,-184), new Point(51,-184), new Point(60,-186), new Point(72,-187), new Point(84,-188), new Point(93,-189), new Point(106,-190), new Point(115,-191), new Point(125,-191), new Point(137,-192), new Point(145,-193), new Point(154,-193), new Point(164,-193), new Point(171,-193), new Point(178,-193), new Point(185,-193), new Point(190,-193), new Point(195,-193), new Point(198,-192), new Point(201,-189), new Point(203,-184), new Point(204,-177), new Point(204,-170), new Point(205,-159), new Point(205,-148), new Point(206,-137), new Point(206,-124), new Point(206,-111), new Point(206,-98), new Point(206,-85), new Point(206,-72), new Point(206,-60), new Point(206,-48), new Point(206,-36), new Point(206,-25), new Point(206,-16), new Point(207,-7), new Point(208,-1), new Point(208,5), new Point(209,10)),
// 	new Array(new Point(0,0), new Point(2,-10), new Point(2,-18), new Point(2,-29), new Point(2,-42), new Point(3,-56), new Point(3,-73), new Point(3,-88), new Point(3,-100), new Point(3,-114), new Point(3,-127), new Point(3,-139), new Point(3,-151), new Point(3,-164), new Point(3,-176), new Point(3,-189), new Point(4,-200), new Point(4,-209), new Point(4,-218), new Point(5,-224), new Point(6,-230), new Point(7,-234), new Point(8,-236), new Point(9,-238), new Point(10,-239), new Point(11,-240), new Point(13,-240), new Point(15,-240), new Point(19,-240), new Point(23,-240), new Point(28,-240), new Point(33,-240), new Point(40,-240), new Point(47,-240), new Point(55,-240), new Point(63,-240), new Point(72,-241), new Point(82,-241), new Point(91,-241), new Point(102,-242), new Point(113,-242), new Point(123,-243), new Point(132,-244), new Point(142,-244), new Point(150,-245), new Point(157,-245), new Point(165,-245), new Point(173,-245), new Point(178,-245), new Point(184,-246), new Point(188,-246), new Point(193,-246), new Point(196,-246), new Point(199,-246), new Point(201,-246), new Point(203,-245), new Point(204,-243), new Point(205,-241), new Point(205,-236), new Point(206,-230), new Point(206,-223), new Point(206,-213), new Point(207,-202), new Point(207,-190), new Point(207,-178), new Point(207,-165), new Point(207,-151), new Point(207,-138), new Point(207,-124), new Point(207,-110), new Point(207,-96), new Point(207,-83), new Point(207,-69), new Point(207,-56), new Point(207,-43), new Point(207,-32), new Point(207,-23), new Point(207,-13), new Point(207,-5), new Point(207,3), new Point(207,9), new Point(207,14), new Point(207,17)),
// 	new Array(new Point(0,0), new Point(1,-8), new Point(1,-13), new Point(1,-22), new Point(1,-34), new Point(1,-52), new Point(1,-69), new Point(1,-84), new Point(-1,-96), new Point(-2,-106), new Point(-3,-114), new Point(-4,-122), new Point(-4,-129), new Point(-5,-135), new Point(-5,-140), new Point(-5,-144), new Point(-5,-148), new Point(-5,-150), new Point(-5,-152), new Point(-5,-154), new Point(-5,-156), new Point(-5,-158), new Point(-5,-160), new Point(-5,-162), new Point(-5,-164), new Point(-5,-166), new Point(-5,-168), new Point(-5,-169), new Point(-5,-170), new Point(-5,-171), new Point(-3,-171), new Point(0,-172), new Point(4,-172), new Point(9,-172), new Point(14,-172), new Point(20,-173), new Point(26,-174), new Point(33,-174), new Point(42,-175), new Point(51,-176), new Point(60,-176), new Point(69,-176), new Point(80,-176), new Point(89,-177), new Point(101,-177), new Point(111,-178), new Point(122,-178), new Point(133,-178), new Point(141,-179), new Point(153,-179), new Point(161,-180), new Point(169,-181), new Point(177,-182), new Point(183,-182), new Point(189,-182), new Point(193,-182), new Point(196,-182), new Point(198,-181), new Point(200,-177), new Point(201,-171), new Point(201,-163), new Point(202,-152), new Point(203,-141), new Point(203,-128), new Point(203,-116), new Point(203,-103), new Point(203,-90), new Point(204,-78), new Point(204,-67), new Point(205,-56), new Point(206,-47), new Point(207,-37), new Point(208,-27), new Point(209,-20), new Point(210,-14), new Point(211,-10), new Point(212,-7), new Point(212,-6), new Point(212,-5)),
// 	new Array(new Point(0,0), new Point(1,-4), new Point(1,-10), new Point(1,-16), new Point(1,-24), new Point(1,-35), new Point(1,-47), new Point(1,-59), new Point(1,-72), new Point(1,-85), new Point(1,-97), new Point(1,-111), new Point(1,-123), new Point(1,-132), new Point(1,-141), new Point(1,-148), new Point(1,-154), new Point(3,-159), new Point(4,-163), new Point(6,-166), new Point(9,-168), new Point(12,-170), new Point(15,-171), new Point(19,-171), new Point(24,-171), new Point(29,-171), new Point(35,-171), new Point(42,-172), new Point(48,-172), new Point(55,-172), new Point(64,-172), new Point(71,-172), new Point(79,-172), new Point(88,-173), new Point(96,-174), new Point(107,-174), new Point(115,-175), new Point(125,-176), new Point(135,-176), new Point(144,-176), new Point(153,-176), new Point(161,-176), new Point(168,-176), new Point(174,-175), new Point(179,-172), new Point(183,-168), new Point(186,-162), new Point(188,-155), new Point(189,-145), new Point(189,-134), new Point(190,-123), new Point(190,-111), new Point(190,-99), new Point(190,-88), new Point(190,-76), new Point(190,-64), new Point(190,-52), new Point(190,-42), new Point(190,-33), new Point(190,-24), new Point(190,-16), new Point(190,-9), new Point(190,-4)),
// 	new Array(new Point(0,0), new Point(0,-4), new Point(0,-9), new Point(0,-15), new Point(0,-25), new Point(0,-35), new Point(0,-48), new Point(0,-65), new Point(1,-82), new Point(1,-99), new Point(1,-116), new Point(1,-131), new Point(1,-143), new Point(1,-155), new Point(1,-167), new Point(2,-175), new Point(3,-181), new Point(5,-188), new Point(8,-192), new Point(12,-195), new Point(17,-197), new Point(25,-199), new Point(33,-199), new Point(44,-200), new Point(55,-200), new Point(67,-201), new Point(81,-201), new Point(97,-202), new Point(112,-202), new Point(128,-202), new Point(141,-202), new Point(154,-202), new Point(166,-202), new Point(175,-200), new Point(183,-195), new Point(188,-189), new Point(192,-179), new Point(193,-168), new Point(194,-153), new Point(194,-138), new Point(195,-121), new Point(195,-106), new Point(195,-93), new Point(195,-79), new Point(195,-67), new Point(195,-56), new Point(195,-48), new Point(195,-39), new Point(196,-32), new Point(197,-25)),
// ); 

// let arch3 = new Array(
// 	// right to left
// 	new Array(new Point(0,0), new Point(3,-3), new Point(3,-7), new Point(3,-13), new Point(3,-24), new Point(3,-40), new Point(3,-58), new Point(2,-77), new Point(1,-95), new Point(1,-111), new Point(1,-124), new Point(0,-138), new Point(0,-150), new Point(-1,-159), new Point(-1,-169), new Point(-2,-175), new Point(-3,-181), new Point(-4,-185), new Point(-4,-187), new Point(-5,-188), new Point(-6,-188), new Point(-7,-188), new Point(-8,-188), new Point(-11,-188), new Point(-15,-188), new Point(-20,-188), new Point(-27,-188), new Point(-36,-188), new Point(-48,-188), new Point(-60,-188), new Point(-74,-188), new Point(-90,-188), new Point(-105,-188), new Point(-118,-188), new Point(-132,-187), new Point(-144,-186), new Point(-156,-185), new Point(-165,-185), new Point(-174,-185), new Point(-181,-184), new Point(-186,-183), new Point(-189,-182), new Point(-192,-181), new Point(-194,-178), new Point(-195,-173), new Point(-195,-166), new Point(-195,-156), new Point(-195,-140), new Point(-195,-124), new Point(-195,-106), new Point(-195,-87), new Point(-195,-69), new Point(-195,-53), new Point(-197,-38), new Point(-199,-26), new Point(-200,-14), new Point(-201,-6), new Point(-201,0), new Point(-201,4), new Point(-201,6)),
// 	new Array(new Point(0,0), new Point(0,-5), new Point(0,-9), new Point(0,-14), new Point(-2,-24), new Point(-4,-37), new Point(-5,-55), new Point(-7,-73), new Point(-8,-91), new Point(-10,-109), new Point(-10,-121), new Point(-11,-131), new Point(-12,-138), new Point(-12,-145), new Point(-12,-149), new Point(-12,-150), new Point(-12,-151), new Point(-14,-151), new Point(-16,-151), new Point(-21,-151), new Point(-28,-151), new Point(-38,-151), new Point(-49,-151), new Point(-62,-151), new Point(-75,-151), new Point(-88,-151), new Point(-101,-151), new Point(-113,-151), new Point(-122,-151), new Point(-129,-150), new Point(-136,-148), new Point(-141,-147), new Point(-145,-146), new Point(-147,-146), new Point(-149,-145), new Point(-150,-143), new Point(-150,-139), new Point(-150,-133), new Point(-150,-124), new Point(-150,-108), new Point(-150,-93), new Point(-150,-75), new Point(-150,-58), new Point(-150,-44), new Point(-150,-30), new Point(-150,-21), new Point(-150,-12)),
// 	new Array(new Point(0,0), new Point(0,-4), new Point(0,-9), new Point(0,-16), new Point(0,-26), new Point(0,-38), new Point(0,-52), new Point(0,-68), new Point(0,-80), new Point(-1,-93), new Point(-2,-106), new Point(-2,-117), new Point(-2,-126), new Point(-2,-135), new Point(-2,-144), new Point(-2,-151), new Point(-2,-158), new Point(-2,-165), new Point(-2,-170), new Point(-2,-175), new Point(-2,-178), new Point(-2,-180), new Point(-4,-182), new Point(-7,-183), new Point(-10,-184), new Point(-15,-185), new Point(-21,-185), new Point(-29,-186), new Point(-37,-188), new Point(-46,-188), new Point(-55,-189), new Point(-65,-190), new Point(-74,-190), new Point(-85,-190), new Point(-94,-190), new Point(-104,-190), new Point(-115,-190), new Point(-123,-190), new Point(-133,-190), new Point(-142,-190), new Point(-149,-190), new Point(-157,-190), new Point(-164,-190), new Point(-170,-190), new Point(-176,-190), new Point(-181,-190), new Point(-185,-190), new Point(-188,-190), new Point(-191,-190), new Point(-193,-188), new Point(-195,-187), new Point(-197,-184), new Point(-197,-180), new Point(-198,-176), new Point(-198,-169), new Point(-198,-163), new Point(-198,-154), new Point(-198,-146), new Point(-198,-138), new Point(-198,-130), new Point(-198,-121), new Point(-198,-113), new Point(-198,-105), new Point(-198,-95), new Point(-198,-86), new Point(-198,-77), new Point(-198,-69), new Point(-198,-61), new Point(-198,-54), new Point(-198,-46), new Point(-198,-38), new Point(-198,-32), new Point(-198,-25), new Point(-198,-19), new Point(-198,-13), new Point(-198,-8), new Point(-198,-1), new Point(-198,5), new Point(-198,10), new Point(-198,14)),
// 	new Array(new Point(0,0), new Point(3,-12), new Point(3,-26), new Point(3,-51), new Point(2,-75), new Point(1,-93), new Point(-1,-106), new Point(-2,-113), new Point(-3,-117), new Point(-4,-120), new Point(-8,-120), new Point(-14,-120), new Point(-25,-120), new Point(-37,-120), new Point(-54,-120), new Point(-71,-120), new Point(-90,-120), new Point(-109,-120), new Point(-126,-120), new Point(-139,-120), new Point(-149,-119), new Point(-156,-116), new Point(-162,-110), new Point(-164,-98), new Point(-165,-81), new Point(-165,-64), new Point(-165,-46), new Point(-165,-34), new Point(-165,-20)),
// 	new Array(new Point(0,0), new Point(2,-18), new Point(2,-39), new Point(0,-63), new Point(-2,-87), new Point(-4,-105), new Point(-7,-123), new Point(-9,-133), new Point(-11,-138), new Point(-15,-140), new Point(-22,-140), new Point(-32,-140), new Point(-47,-140), new Point(-64,-140), new Point(-82,-140), new Point(-101,-140), new Point(-118,-140), new Point(-135,-140), new Point(-146,-140), new Point(-155,-140), new Point(-163,-135), new Point(-168,-126), new Point(-171,-111), new Point(-172,-93), new Point(-172,-73), new Point(-172,-55), new Point(-172,-37), new Point(-171,-25)),
// 	new Array(new Point(0,0), new Point(2,-9), new Point(2,-17), new Point(2,-28), new Point(2,-45), new Point(2,-63), new Point(2,-86), new Point(1,-107), new Point(-1,-127), new Point(-2,-144), new Point(-4,-161), new Point(-4,-174), new Point(-5,-187), new Point(-5,-197), new Point(-6,-205), new Point(-7,-212), new Point(-8,-217), new Point(-11,-220), new Point(-15,-222), new Point(-22,-223), new Point(-32,-224), new Point(-44,-225), new Point(-60,-226), new Point(-75,-227), new Point(-91,-227), new Point(-107,-227), new Point(-122,-227), new Point(-137,-227), new Point(-149,-227), new Point(-160,-227), new Point(-169,-227), new Point(-176,-227), new Point(-181,-227), new Point(-185,-227), new Point(-188,-225), new Point(-188,-220), new Point(-188,-211), new Point(-188,-199), new Point(-186,-183), new Point(-185,-166), new Point(-184,-147), new Point(-184,-124), new Point(-184,-102), new Point(-184,-80), new Point(-185,-63), new Point(-187,-49), new Point(-187,-33)),
// 	new Array(new Point(0,0), new Point(0,-6), new Point(0,-13), new Point(0,-22), new Point(1,-33), new Point(2,-48), new Point(2,-63), new Point(2,-81), new Point(2,-100), new Point(2,-119), new Point(2,-139), new Point(2,-157), new Point(2,-174), new Point(3,-190), new Point(3,-202), new Point(3,-214), new Point(4,-222), new Point(4,-229), new Point(4,-234), new Point(4,-238), new Point(4,-240), new Point(4,-241), new Point(2,-241), new Point(0,-242), new Point(-3,-242), new Point(-8,-243), new Point(-14,-244), new Point(-23,-244), new Point(-33,-245), new Point(-44,-246), new Point(-58,-247), new Point(-72,-248), new Point(-88,-248), new Point(-101,-248), new Point(-114,-248), new Point(-127,-248), new Point(-136,-248), new Point(-146,-248), new Point(-152,-246), new Point(-159,-244), new Point(-163,-243), new Point(-167,-241), new Point(-169,-239), new Point(-171,-234), new Point(-173,-227), new Point(-173,-217), new Point(-173,-204), new Point(-173,-187), new Point(-173,-169), new Point(-173,-150), new Point(-173,-128), new Point(-173,-106), new Point(-174,-88), new Point(-176,-69), new Point(-177,-53), new Point(-178,-40), new Point(-178,-25), new Point(-178,-14), new Point(-178,-3)),
// 	new Array(new Point(0,0), new Point(0,-9), new Point(0,-20), new Point(0,-33), new Point(0,-49), new Point(0,-65), new Point(0,-82), new Point(0,-101), new Point(0,-119), new Point(0,-136), new Point(-1,-149), new Point(-2,-162), new Point(-4,-173), new Point(-6,-182), new Point(-8,-191), new Point(-10,-199), new Point(-12,-204), new Point(-14,-209), new Point(-17,-213), new Point(-20,-215), new Point(-25,-218), new Point(-30,-219), new Point(-38,-221), new Point(-47,-222), new Point(-59,-223), new Point(-71,-223), new Point(-84,-224), new Point(-97,-225), new Point(-111,-226), new Point(-123,-226), new Point(-137,-226), new Point(-149,-226), new Point(-160,-226), new Point(-170,-226), new Point(-181,-225), new Point(-189,-222), new Point(-197,-218), new Point(-203,-213), new Point(-208,-206), new Point(-211,-196), new Point(-214,-184), new Point(-216,-169), new Point(-217,-152), new Point(-218,-134), new Point(-220,-116), new Point(-222,-97), new Point(-223,-79), new Point(-224,-62), new Point(-226,-44), new Point(-226,-25), new Point(-226,-9), new Point(-227,7)),
// 	new Array(new Point(0,0), new Point(0,-9), new Point(0,-18), new Point(1,-29), new Point(3,-41), new Point(5,-55), new Point(7,-71), new Point(9,-89), new Point(10,-107), new Point(12,-125), new Point(14,-142), new Point(14,-159), new Point(15,-174), new Point(15,-187), new Point(15,-199), new Point(15,-207), new Point(15,-213), new Point(15,-217), new Point(13,-220), new Point(10,-222), new Point(4,-224), new Point(-4,-225), new Point(-15,-227), new Point(-26,-228), new Point(-41,-230), new Point(-56,-231), new Point(-71,-233), new Point(-87,-234), new Point(-102,-234), new Point(-117,-235), new Point(-129,-235), new Point(-142,-235), new Point(-151,-235), new Point(-160,-234), new Point(-165,-232), new Point(-172,-227), new Point(-175,-220), new Point(-178,-210), new Point(-180,-197), new Point(-182,-179), new Point(-183,-160), new Point(-184,-141), new Point(-186,-118), new Point(-188,-96), new Point(-188,-78), new Point(-189,-58), new Point(-191,-41)),
// 	new Array(new Point(0,0), new Point(0,-10), new Point(0,-21), new Point(0,-36), new Point(0,-53), new Point(0,-71), new Point(0,-90), new Point(0,-109), new Point(0,-127), new Point(0,-144), new Point(-1,-161), new Point(-3,-173), new Point(-4,-186), new Point(-5,-194), new Point(-6,-203), new Point(-6,-210), new Point(-7,-217), new Point(-8,-225), new Point(-9,-230), new Point(-10,-236), new Point(-11,-241), new Point(-14,-245), new Point(-18,-247), new Point(-22,-248), new Point(-27,-250), new Point(-35,-251), new Point(-44,-251), new Point(-53,-251), new Point(-65,-251), new Point(-76,-251), new Point(-88,-251), new Point(-100,-251), new Point(-111,-252), new Point(-122,-252), new Point(-131,-252), new Point(-140,-252), new Point(-149,-252), new Point(-157,-252), new Point(-163,-252), new Point(-169,-250), new Point(-174,-247), new Point(-178,-244), new Point(-181,-239), new Point(-183,-232), new Point(-184,-223), new Point(-184,-212), new Point(-184,-200), new Point(-184,-187), new Point(-184,-171), new Point(-184,-155), new Point(-184,-138), new Point(-184,-120), new Point(-184,-105), new Point(-184,-89), new Point(-184,-77), new Point(-184,-60), new Point(-184,-48), new Point(-184,-32), new Point(-184,-20), new Point(-184,-7))
// );

// let custom = [[{X: 1, Y:1, time: null}, {X:2, Y:2, time: null}, {X: 1, Y:1, time: null}, {X:2, Y:2, time: null}]];


////////////////////////////////////


//
// Point class
//
function Point(x, y) // constructor
{
	this.X = x;
	this.Y = y;
	this.time = null;
}

function PathLength(points)
{
	var d = 0.0;
	for (var i = 1; i < points.length; i++)
		d += Distance(points[i - 1], points[i]);
	return d;
}
function Distance(p1, p2)
{
	var dx = p2.X - p1.X;
	var dy = p2.Y - p1.Y;
	return Math.sqrt(dx * dx + dy * dy + 0.01);
}

////////////// OUR CODE BELOW

/* 

Training data array: 

gesture <- Array of Point
gestureClass <- Array of gesture for a single gesture class
gestureClasses <- Array of gestureClass 

*/

// Constants
const NUM_FEATURES = 11;
const math = require('mathjs');
// var gestures = require('./exampleGestures.js');
// console.log(gestures.line2);

// helper function for f9
function getAngle(p1, p2, p3) 
{
	let dxp1 = p3.X - p2.X;
	let dyp1 = p3.Y - p2.Y;
	let dxp0 = p2.X - p1.X;
	let dyp0 = p2.Y - p1.Y;
	return Math.atan((dxp1*dyp0 - dxp0*dyp1) / (dxp1*dxp0 + dyp1*dyp0 + 0.01)); // adding 0.01 to avoid dividing by 0 and getting NaN
}

// this is the initial cosine of the gesture 
function f1(points)
{
	p1 = points[0];
	p2 = points[2];
	return ((p2.X - p1.X) / Distance(p1, p2));
}

// this is the initial sine of the gesture 
function f2(points)
{
	p1 = points[0];
	p2 = points[2];
	return ((p2.Y - p1.Y) / Distance(p1, p2));
}

// the length of the bounding box diagonal
function f3(points)
{
	var minX = +Infinity, maxX = -Infinity, minY = +Infinity, maxY = -Infinity;
	for (var i = 0; i < points.length; i++) {
		minX = Math.min(minX, points[i].X);
		minY = Math.min(minY, points[i].Y);
		maxX = Math.max(maxX, points[i].X);
		maxY = Math.max(maxY, points[i].Y);
	}
	p1 = new Point(minX, minY);
	p2 = new Point(maxX, maxY);
	return Distance(p1, p2);
}

// the angle of the bounding box diagonal
function f4(points)
{
	var minX = +Infinity, maxX = -Infinity, minY = +Infinity, maxY = -Infinity;
	for (var i = 0; i < points.length; i++) {
		minX = Math.min(minX, points[i].X);
		minY = Math.min(minY, points[i].Y);
		maxX = Math.max(maxX, points[i].X);
		maxY = Math.max(maxY, points[i].Y);
	}
	p1 = new Point(minX, minY);
	p2 = new Point(maxX, maxY);
	return Math.atan((p2.Y - p1.Y)/(p2.X - p1.X));
}

// the distance between the first and last point
function f5(points)
{
	p1 = points[0];
	p2 = points[points.length-1];
	return Distance(p1, p2);
}

// the cosine between the first and last point
function f6(points)
{
	p1 = points[0];
	p2 = points[points.length-1];
	return ((p2.X - p1.X) / Distance(p1, p2));
}

// the sine between the first and last point
function f7(points)
{
	p1 = points[0];
	p2 = points[points.length-1];
	return ((p2.Y - p1.Y) / Distance(p1, p2));
}

// the path length
function f8(points)
{
	return PathLength(points);
}

// the total angle traversed
function f9(points)
{
	var sum = 0.0;
	for (var i = 1; i < points.length-1; i++)
		sum += getAngle(points[i - 1], points[i], points[i + 1]);
	return sum;
}

// the sum of the absolute value of the angles
function f10(points)
{
	var sum = 0.0;
	for (var i = 1; i < points.length-1; i++)
		sum += Math.abs(getAngle(points[i - 1], points[i], points[i + 1]));
	return sum;
}

// the sum of the squares of the angles
function f11(points)
{
	var sum = 0.0;
	for (var i = 1; i < points.length-1; i++)
		sum += Math.pow(getAngle(points[i - 1], points[i], points[i + 1]), 2);
	return sum;
}

// takes feature of index `featureIndex` from a training set (all gestures in training set must
// belong to the same gesture class) and returns the average of these values
function getAvgFeatureForClass(gestureClass, featureIndex) {
	let avg = 0;
	switch (featureIndex) {
		case 1:
			gestureClass.forEach(set => {avg += f1(set);});
			break;
		case 2:
			gestureClass.forEach(set => {avg += f2(set);});
			break;
		case 3:
			gestureClass.forEach(set => {avg += f3(set);});
			break;
		case 4:
			gestureClass.forEach(set => {avg += f4(set);});
			break;
		case 5:
			gestureClass.forEach(set => {avg += f5(set);});
			break;
		case 6:
			gestureClass.forEach(set => {avg += f6(set);});
			break;
		case 7:
			gestureClass.forEach(set => {avg += f7(set);});
			break;
		case 8:
			gestureClass.forEach(set => {avg += f8(set);});
			break;
		case 9:
			gestureClass.forEach(set => {avg += f9(set);});
			break;
		case 10:
			gestureClass.forEach(set => {avg += f10(set);});
			break;
		case 11:
			gestureClass.forEach(set => {avg += f11(set);});
			break;
	}
	avg /= gestureClass.length;
	return avg;
}

// creates the average feature vector for a training set,
// (all gestures in training set must belong to the same gesture class)
function getAvgFeatureVectorForClass(gestureClass) {
	let avgFeatureVector = new Array();
	for (let i=1; i<NUM_FEATURES+1; i++) {
		avgFeatureVector.push(getAvgFeatureForClass(gestureClass, i));
	}
	return avgFeatureVector;
}

// generates the feature vector for a set of points
function getFeaturesForGesture(points){
	features = new Array();
	features.push(f1(points));
	features.push(f2(points));
	features.push(f3(points));
	features.push(f4(points));
	features.push(f5(points));
	features.push(f6(points));
	features.push(f7(points));
	features.push(f8(points));
	features.push(f9(points));
	features.push(f10(points));
	features.push(f11(points));
	return features;
}

// generates the covariance matrix for a single gesture class from a training set
// (all gestures in training set must belong to the same gesture class)
function getCovarianceMatrix(gestureClass){
	let E = gestureClass.length;
	let avgFeatures = getAvgFeatureVectorForClass(gestureClass);
	let covMatrix = [...Array(NUM_FEATURES)].map(e => Array(NUM_FEATURES));
	featuresForGestureClass = new Array(E);

	for (let i=0; i<E; i++){
		featuresForGestureClass[i] = getFeaturesForGesture(gestureClass[i]);
	}

	let sum = 0;
	for (let i=0; i<NUM_FEATURES; i++){
		for (let j=0; j<NUM_FEATURES; j++){
			for (let k=0; k<E; k++){
				let features = featuresForGestureClass[k];
				sum += (features[i] - avgFeatures[i])*(features[j] - avgFeatures[j]);
			}
			covMatrix[i][j] = sum;
			sum = 0;
		}
	}
	return covMatrix;
}

// creates the commonCovariance matrix for all gesture classes
function getCommonCovarianceMatrix(gestureClasses){
	let commonCovMatrix = [...Array(NUM_FEATURES)].map(e => Array(NUM_FEATURES));
	let numClasses = gestureClasses.length; // C
	let covMatrices = new Array(numClasses);
	let numGestureExamples = 0;

	for (let i=0; i<numClasses; i++){
		numGestureExamples += gestureClasses[i].length;
		covMatrices[i] = getCovarianceMatrix(gestureClasses[i]);
	}
	let denominator = -numClasses + numGestureExamples;

	let sum = 0;
	for (let i=0; i<NUM_FEATURES; i++){
		for (let j=0; j<NUM_FEATURES; j++){
			for (let k=0; k<numClasses; k++){
				let covMatrix = covMatrices[k];
				sum += covMatrix[i][j];
			}
			commonCovMatrix[i][j] = sum/denominator;
			sum = 0;
		}
	}
	return commonCovMatrix;
}


function getFeatureWeightsForClasses(gestureClasses){
	let numClasses = gestureClasses.length;
	let commonCovarianceMatrix = getCommonCovarianceMatrix(gestureClasses);
	let invComCovMatrix = math.inv(commonCovarianceMatrix);  // this is a different math library than Math

	let weights = [...Array(numClasses)].map(e => Array(NUM_FEATURES));
	let sum=0;
	for (let k=0; k<numClasses; k++){
		let gestureClass = gestureClasses[k];
		let averageFeatures = getAvgFeatureVectorForClass(gestureClass);
		for (let j=0; j<NUM_FEATURES; j++){
			for (let i=0; i<NUM_FEATURES; i++){
				sum += invComCovMatrix[i][j]*averageFeatures[i];
			}
			weights[k][j] = sum;
			sum = 0;
		}
	}
	return weights; //weights is an array of array, elements of weights -> gesture class, elements of gesture class -> weight of feature 
}

function getWeight0s(gestureClasses){
	let numClasses = gestureClasses.length;
	let weight0s = new Array(numClasses);
	let featureWeightsForClasses = getFeatureWeightsForClasses(gestureClasses);

	let sum = 0;
	for (let i=0; i<numClasses; i++){
		let gestureClass = gestureClasses[i];
		let avgFeatureForClass = getAvgFeatureVectorForClass(gestureClass);
		for (let j=0; j<NUM_FEATURES; j++){
			sum += featureWeightsForClasses[i][j] * avgFeatureForClass[j];
		}
		weight0s[i] = (-1/2) * sum;
		sum = 0;
	}
	return weight0s; //weight0s is an array of w0 for each class, length = no. of gestures
}

let gestureRecognizer = class{
	constructor(trainingData){
		this._numClasses = 0;
		this._classNames = new Array();
		this._gestureClasses = new Array()

		this._invComCovMatrix = new Array();
		this._avgFeatures = new Array();
		this._weight0sofAllVectors = new Array();
		this._featureWeightsForClasses = new Array();	
		
		this._weight0sofAllVectors = new Array();
		this._featureWeightsForClasses = new Array();

		// Where training data is added in order to train
		if (trainingData) {
			this.addGestures(trainingData);
		}
	}

	train(){
		for (let i=0; i<this._numClasses; i++){
			this._avgFeatures.push(getAvgFeatureVectorForClass(this._gestureClasses[i]))
		}
		// console.log("COV ::: ", getCommonCovarianceMatrix(this._gestureClasses));

		this._invComCovMatrix = math.inv(getCommonCovarianceMatrix(this._gestureClasses));
		// console.log("COMMON COV ::: ", this._invComCovMatrix)

		this._weight0sofAllVectors = getWeight0s(this._gestureClasses);
		this._featureWeightsForClasses = getFeatureWeightsForClasses(this._gestureClasses);
		console.log('numClasses: ', this._numClasses);
	}

	addGestures(trainingData) {
		var self = this;
		trainingData.forEach(function(gestureClass) {
			self.addGesture(gestureClass.gestureClassName, gestureClass.trainingGestures);
		})
		this.train();
	}
	
	addGesture(className, gestureClass){
		this._classNames.push(className);
		this._gestureClasses.push(gestureClass);
		this._numClasses += 1;
	}

	removeGesture(className){
		let index = this._classNames.indexOf(className);
		this.className.splice(index, 1);
		this._gestureClasses.splice(index, 1);
		this.train();
	}

	classifyGesture(points){
		console.log(JSON.stringify(points));
		let weightEval = new Array(this._numClasses);
		let sum = 0;
		let featureVector = getFeaturesForGesture(points);
		for (let i=0; i<this._numClasses; i++){
			for (let j=0; j<NUM_FEATURES; j++){
				sum += this._featureWeightsForClasses[i][j] * featureVector[j];
			}
			weightEval[i] = this._weight0sofAllVectors[i] + sum;
			sum = 0;
		}
		let max = Math.max.apply(Math, weightEval);
		let maxIndex = weightEval.indexOf(max);
		// console.log(weightEval)
		// console.log(max, maxIndex)
		let classificationProb = this.getClassificationProb(weightEval);
		console.log("PROB ::: ", classificationProb);
		this.getMahalanobisDistance(maxIndex, featureVector);
		return this._classNames[maxIndex]

	}

	getClassificationProb(weights){
		let max = Math.max.apply(Math, weights);
		let maxWeightIndex = weights.indexOf(max);
		let sum = 0;
		for (let i=0; i<this._numClasses; i++){
			// console.log(max, max - weights[i])
			// console.log(Math.exp(max - weights[i]));
			sum += Math.exp(weights[i] - max);
			// console.log(weights[i] - max);
		}
		return (1/sum);
	}

	getMahalanobisDistance(classIndex, featureVector){
		let averageFeatures = this._avgFeatures[classIndex];
		let sum = 0
		// console.log(featureVector)
		// console.log(averageFeatures)
		for (let j=0; j<NUM_FEATURES; j++){
			for (let k=0; k<NUM_FEATURES; k++){
				sum += this._invComCovMatrix[j][k] * (featureVector[j] - averageFeatures[j]) * (featureVector[k] - averageFeatures[k]);
			}
		}
		// console.log ("M Dist :  ", sum, "1/2 F2 : ", (1/2)*NUM_FEATURES*NUM_FEATURES);
		return sum;
	}
};

export default gestureRecognizer;
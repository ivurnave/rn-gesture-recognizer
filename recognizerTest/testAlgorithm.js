
//TRAIN DATA: 

let line2 = new Array(
	// top to bottom
	new Array(new Point2(0,0), new Point2(0,9), new Point2(0,21), new Point2(1,39), new Point2(1,58), new Point2(1,83), new Point2(0,106), new Point2(-1,129), new Point2(-3,153), new Point2(-3,177), new Point2(-3,200), new Point2(-3,223), new Point2(-5,245), new Point2(-6,263), new Point2(-8,282), new Point2(-10,301), new Point2(-13,317), new Point2(-15,330), new Point2(-16,342), new Point2(-16,351), new Point2(-16,357), new Point2(-16,361)),
	new Array(new Point2(0,0), new Point2(4,8), new Point2(4,17), new Point2(4,27), new Point2(4,43), new Point2(4,61), new Point2(4,85), new Point2(2,110), new Point2(0,138), new Point2(-3,166), new Point2(-5,191), new Point2(-6,213), new Point2(-6,234), new Point2(-6,250), new Point2(-6,268), new Point2(-6,285), new Point2(-4,300), new Point2(-2,312), new Point2(-1,322)),
	new Array(new Point2(0,0), new Point2(0,9), new Point2(0,21), new Point2(0,38), new Point2(0,57), new Point2(0,79), new Point2(0,101), new Point2(0,123), new Point2(0,145), new Point2(0,167), new Point2(0,189), new Point2(0,207), new Point2(0,223), new Point2(0,237), new Point2(1,246)),
	new Array(new Point2(0,0), new Point2(4,3), new Point2(4,5), new Point2(4,8), new Point2(4,11), new Point2(4,15), new Point2(4,18), new Point2(4,21), new Point2(4,24), new Point2(4,27), new Point2(4,30), new Point2(5,33), new Point2(6,36), new Point2(6,40), new Point2(7,43), new Point2(8,47), new Point2(9,52), new Point2(10,56), new Point2(11,60), new Point2(11,65), new Point2(12,69), new Point2(13,74), new Point2(13,78), new Point2(14,83), new Point2(14,88), new Point2(14,93), new Point2(14,98), new Point2(14,103), new Point2(14,108), new Point2(14,113), new Point2(14,118), new Point2(14,122), new Point2(14,127), new Point2(14,131), new Point2(14,136), new Point2(14,141), new Point2(14,145), new Point2(14,150), new Point2(14,155), new Point2(14,160), new Point2(14,164), new Point2(14,170), new Point2(14,174), new Point2(14,178), new Point2(14,183), new Point2(14,187), new Point2(14,191), new Point2(14,195), new Point2(14,200), new Point2(14,204), new Point2(14,208), new Point2(14,213), new Point2(14,218), new Point2(14,223), new Point2(14,228), new Point2(14,232), new Point2(14,236), new Point2(14,240), new Point2(15,244), new Point2(16,249), new Point2(17,252), new Point2(17,256), new Point2(17,259), new Point2(18,263), new Point2(18,266), new Point2(18,269), new Point2(18,272), new Point2(18,274), new Point2(18,277), new Point2(18,278), new Point2(18,281), new Point2(18,283), new Point2(18,286), new Point2(18,289), new Point2(18,293), new Point2(18,296), new Point2(18,299), new Point2(18,303), new Point2(18,306), new Point2(18,310), new Point2(18,313), new Point2(18,317), new Point2(18,320), new Point2(18,324), new Point2(18,327), new Point2(18,331), new Point2(18,334), new Point2(18,337), new Point2(17,340), new Point2(17,342), new Point2(16,345), new Point2(16,348), new Point2(16,350), new Point2(16,353), new Point2(16,355), new Point2(16,358), new Point2(16,359), new Point2(16,360), new Point2(16,361)),
	new Array(new Point2(0,0), new Point2(0,11), new Point2(0,19), new Point2(0,29), new Point2(-1,45), new Point2(-2,60), new Point2(-3,76), new Point2(-4,91), new Point2(-4,103), new Point2(-4,116), new Point2(-4,128), new Point2(-4,137), new Point2(-4,144), new Point2(-4,151)),
	new Array(new Point2(0,0), new Point2(0,10), new Point2(0,18), new Point2(0,29), new Point2(0,40), new Point2(0,53), new Point2(1,69), new Point2(2,84), new Point2(3,99), new Point2(3,111), new Point2(4,124), new Point2(5,136), new Point2(6,148), new Point2(7,157), new Point2(8,165), new Point2(8,171), new Point2(9,177), new Point2(9,179)),
	new Array(new Point2(0,0), new Point2(0,12), new Point2(-2,25), new Point2(-4,42), new Point2(-7,67), new Point2(-10,94), new Point2(-10,127), new Point2(-10,161), new Point2(-12,198), new Point2(-14,234), new Point2(-16,271), new Point2(-18,306)),
	new Array(new Point2(0,0), new Point2(0,12), new Point2(0,28), new Point2(0,54), new Point2(-4,91), new Point2(-9,129), new Point2(-14,171), new Point2(-19,216), new Point2(-21,257), new Point2(-23,298), new Point2(-23,332)),
	new Array(new Point2(0,0), new Point2(0,7), new Point2(0,14), new Point2(0,22), new Point2(0,32), new Point2(0,41), new Point2(0,50), new Point2(1,59), new Point2(1,68), new Point2(2,76), new Point2(3,83), new Point2(3,90), new Point2(3,97), new Point2(3,103), new Point2(3,110), new Point2(3,117), new Point2(3,125), new Point2(3,133), new Point2(3,140), new Point2(3,149), new Point2(3,156), new Point2(3,162), new Point2(3,168)),
	new Array(new Point2(0,0), new Point2(1,8), new Point2(1,14), new Point2(1,21), new Point2(1,29), new Point2(1,38), new Point2(2,47), new Point2(2,56), new Point2(3,64), new Point2(3,73), new Point2(4,79), new Point2(5,86), new Point2(5,93), new Point2(5,98), new Point2(6,103), new Point2(6,109), new Point2(6,113), new Point2(7,118), new Point2(7,122), new Point2(7,126), new Point2(8,130), new Point2(8,135), new Point2(8,139), new Point2(8,142), new Point2(8,146), new Point2(8,149), new Point2(9,153), new Point2(9,157), new Point2(9,160), new Point2(10,163), new Point2(10,166), new Point2(10,169), new Point2(10,172), new Point2(10,174), new Point2(11,177), new Point2(11,179), new Point2(11,181), new Point2(11,183), new Point2(11,185), new Point2(11,187), new Point2(11,190), new Point2(11,192), new Point2(11,194), new Point2(12,195)),
);

let line3 = new Array(
	// bottom to top
	new Array(new Point2(0,0), new Point2(0,-7), new Point2(0,-17), new Point2(0,-33), new Point2(0,-57), new Point2(0,-81), new Point2(0,-109), new Point2(0,-136), new Point2(0,-162), new Point2(0,-188), new Point2(1,-217), new Point2(3,-252), new Point2(3,-279), new Point2(3,-306), new Point2(3,-330), new Point2(3,-346), new Point2(1,-357), new Point2(1,-365)),
	new Array(new Point2(0,0), new Point2(0,-6), new Point2(0,-14), new Point2(0,-28), new Point2(0,-44), new Point2(-1,-63), new Point2(-2,-86), new Point2(-2,-103), new Point2(-3,-122), new Point2(-3,-141), new Point2(-3,-160), new Point2(-3,-183), new Point2(-4,-207), new Point2(-4,-230), new Point2(-4,-253), new Point2(-4,-275), new Point2(-6,-293), new Point2(-8,-309), new Point2(-9,-319)),
	new Array(new Point2(0,0), new Point2(0,-8), new Point2(0,-18), new Point2(0,-29), new Point2(0,-41), new Point2(-2,-58), new Point2(-2,-70), new Point2(-3,-85), new Point2(-4,-98), new Point2(-5,-113), new Point2(-7,-128), new Point2(-10,-143), new Point2(-12,-159), new Point2(-13,-174), new Point2(-13,-189), new Point2(-14,-205), new Point2(-15,-220), new Point2(-17,-231)),
	new Array(new Point2(0,0), new Point2(1,-6), new Point2(1,-9), new Point2(1,-11), new Point2(1,-14), new Point2(1,-18), new Point2(1,-21), new Point2(1,-25), new Point2(1,-29), new Point2(1,-33), new Point2(1,-37), new Point2(1,-42), new Point2(1,-46), new Point2(1,-51), new Point2(1,-57), new Point2(1,-62), new Point2(1,-67), new Point2(1,-73), new Point2(1,-78), new Point2(1,-84), new Point2(1,-91), new Point2(1,-97), new Point2(1,-104), new Point2(1,-110), new Point2(2,-117), new Point2(2,-125), new Point2(2,-133), new Point2(2,-141), new Point2(2,-150), new Point2(2,-161), new Point2(2,-169), new Point2(2,-179), new Point2(2,-189), new Point2(2,-198), new Point2(2,-207), new Point2(2,-215), new Point2(2,-224), new Point2(2,-232), new Point2(2,-241), new Point2(2,-248), new Point2(2,-255), new Point2(2,-262), new Point2(2,-269), new Point2(4,-275), new Point2(4,-281), new Point2(5,-287), new Point2(5,-293), new Point2(5,-298), new Point2(6,-303), new Point2(6,-308), new Point2(7,-312), new Point2(7,-317), new Point2(7,-320), new Point2(7,-324), new Point2(7,-327), new Point2(7,-330), new Point2(7,-333), new Point2(7,-337), new Point2(7,-339), new Point2(7,-342), new Point2(7,-344), new Point2(7,-346), new Point2(7,-348), new Point2(7,-350), new Point2(7,-351)),
	new Array(new Point2(0,0), new Point2(1,-7), new Point2(1,-11), new Point2(1,-18), new Point2(1,-26), new Point2(1,-38), new Point2(1,-51), new Point2(2,-66), new Point2(3,-82), new Point2(3,-98), new Point2(4,-114), new Point2(4,-130), new Point2(4,-144), new Point2(4,-156), new Point2(4,-165), new Point2(4,-173), new Point2(4,-178), new Point2(4,-181), new Point2(3,-183)),
	new Array(new Point2(0,0), new Point2(3,-6), new Point2(3,-9), new Point2(3,-13), new Point2(3,-17), new Point2(3,-23), new Point2(2,-31), new Point2(1,-36), new Point2(0,-43), new Point2(0,-50), new Point2(0,-59), new Point2(-1,-67), new Point2(-1,-76), new Point2(-1,-86), new Point2(-1,-95), new Point2(-1,-107), new Point2(-1,-117), new Point2(-1,-129), new Point2(-1,-141), new Point2(-2,-152), new Point2(-2,-163), new Point2(-2,-172), new Point2(-2,-182), new Point2(-2,-191), new Point2(-2,-199), new Point2(-2,-207), new Point2(-3,-214), new Point2(-3,-220), new Point2(-4,-226), new Point2(-5,-231), new Point2(-6,-236), new Point2(-6,-239), new Point2(-6,-243), new Point2(-6,-246), new Point2(-6,-248), new Point2(-6,-249)),
	new Array(new Point2(0,0), new Point2(0,-12), new Point2(0,-28), new Point2(1,-50), new Point2(2,-75), new Point2(5,-102), new Point2(7,-131), new Point2(12,-166), new Point2(16,-201), new Point2(19,-238)),
	new Array(new Point2(0,0), new Point2(0,-5), new Point2(0,-11), new Point2(1,-18), new Point2(2,-26), new Point2(3,-37), new Point2(5,-48), new Point2(6,-60), new Point2(8,-71), new Point2(10,-83), new Point2(10,-95), new Point2(12,-108), new Point2(12,-120), new Point2(12,-134), new Point2(12,-148), new Point2(12,-161), new Point2(11,-175), new Point2(10,-187), new Point2(8,-200), new Point2(6,-212), new Point2(5,-224), new Point2(4,-235), new Point2(3,-246), new Point2(2,-257), new Point2(2,-266), new Point2(2,-278), new Point2(2,-288), new Point2(2,-298), new Point2(2,-308), new Point2(2,-317), new Point2(2,-326), new Point2(2,-335), new Point2(2,-344), new Point2(2,-351), new Point2(2,-358), new Point2(2,-365), new Point2(2,-371), new Point2(3,-377), new Point2(3,-382), new Point2(4,-387), new Point2(4,-391), new Point2(4,-394), new Point2(4,-397), new Point2(4,-400)),
	new Array(new Point2(0,0), new Point2(0,-4), new Point2(0,-8), new Point2(0,-14), new Point2(0,-18), new Point2(0,-24), new Point2(0,-32), new Point2(0,-40), new Point2(0,-48), new Point2(0,-56), new Point2(0,-65), new Point2(0,-73), new Point2(-1,-82), new Point2(-2,-91), new Point2(-3,-99), new Point2(-4,-108), new Point2(-4,-117), new Point2(-4,-125), new Point2(-4,-133), new Point2(-4,-141), new Point2(-4,-147), new Point2(-4,-153), new Point2(-4,-157), new Point2(-6,-159)),
	new Array(new Point2(0,0), new Point2(2,-5), new Point2(2,-8), new Point2(2,-11), new Point2(2,-16), new Point2(2,-20), new Point2(3,-26), new Point2(4,-32), new Point2(5,-38), new Point2(6,-45), new Point2(6,-52), new Point2(7,-58), new Point2(8,-65), new Point2(8,-73), new Point2(8,-80), new Point2(8,-88), new Point2(8,-96), new Point2(8,-103), new Point2(8,-111), new Point2(8,-119), new Point2(8,-125), new Point2(7,-131), new Point2(6,-137), new Point2(5,-142), new Point2(5,-148), new Point2(4,-153), new Point2(4,-158), new Point2(3,-163), new Point2(2,-168), new Point2(2,-173), new Point2(2,-178), new Point2(2,-184), new Point2(2,-189), new Point2(2,-195), new Point2(2,-201), new Point2(2,-206), new Point2(2,-209), new Point2(2,-212), new Point2(3,-213))
	);

let carat2 = new Array(
	// left to right
	new Array(new Point2(0,0), new Point2(3,-5), new Point2(5,-8), new Point2(7,-12), new Point2(10,-15), new Point2(13,-20), new Point2(17,-25), new Point2(21,-32), new Point2(26,-39), new Point2(31,-46), new Point2(38,-56), new Point2(44,-66), new Point2(50,-76), new Point2(57,-87), new Point2(64,-97), new Point2(70,-107), new Point2(77,-117), new Point2(83,-127), new Point2(89,-136), new Point2(94,-144), new Point2(99,-154), new Point2(103,-161), new Point2(107,-167), new Point2(110,-173), new Point2(114,-178), new Point2(116,-181), new Point2(118,-184), new Point2(121,-185), new Point2(122,-186), new Point2(123,-187), new Point2(124,-187), new Point2(125,-187), new Point2(126,-184), new Point2(126,-180), new Point2(128,-173), new Point2(131,-165), new Point2(135,-155), new Point2(139,-144), new Point2(146,-130), new Point2(153,-116), new Point2(161,-101), new Point2(170,-86), new Point2(179,-71), new Point2(187,-58), new Point2(194,-46), new Point2(199,-36), new Point2(204,-25), new Point2(208,-17), new Point2(212,-9), new Point2(215,-4), new Point2(218,2), new Point2(221,6), new Point2(223,8), new Point2(224,10), new Point2(225,12), new Point2(227,13), new Point2(227,14)),
	new Array(new Point2(0,0), new Point2(6,-6), new Point2(8,-10), new Point2(11,-13), new Point2(15,-17), new Point2(18,-22), new Point2(22,-28), new Point2(26,-35), new Point2(30,-43), new Point2(34,-50), new Point2(38,-58), new Point2(42,-65), new Point2(46,-72), new Point2(50,-79), new Point2(54,-88), new Point2(58,-98), new Point2(62,-107), new Point2(66,-114), new Point2(70,-120), new Point2(74,-126), new Point2(77,-131), new Point2(80,-135), new Point2(83,-138), new Point2(86,-141), new Point2(87,-142), new Point2(88,-142), new Point2(89,-142), new Point2(90,-142), new Point2(92,-139), new Point2(93,-134), new Point2(96,-127), new Point2(98,-118), new Point2(102,-108), new Point2(105,-96), new Point2(108,-85), new Point2(112,-73), new Point2(116,-62), new Point2(121,-51), new Point2(126,-41), new Point2(130,-33), new Point2(134,-24), new Point2(137,-17), new Point2(140,-12), new Point2(142,-7), new Point2(144,-3), new Point2(145,1), new Point2(146,4), new Point2(147,7), new Point2(149,9), new Point2(150,12), new Point2(153,13), new Point2(155,16), new Point2(157,18), new Point2(159,20), new Point2(161,23), new Point2(163,26), new Point2(165,30), new Point2(167,33), new Point2(168,37), new Point2(170,39), new Point2(171,41)),
	new Array(new Point2(0,0), new Point2(3,-6), new Point2(4,-10), new Point2(6,-15), new Point2(10,-23), new Point2(16,-33), new Point2(23,-44), new Point2(30,-55), new Point2(38,-65), new Point2(44,-71), new Point2(50,-75), new Point2(57,-77), new Point2(63,-77), new Point2(68,-77), new Point2(75,-70), new Point2(81,-61), new Point2(87,-48), new Point2(95,-34), new Point2(101,-21), new Point2(107,-10), new Point2(113,3)),
	new Array(new Point2(0,0), new Point2(4,-7), new Point2(6,-11), new Point2(9,-16), new Point2(12,-21), new Point2(16,-28), new Point2(20,-35), new Point2(24,-42), new Point2(29,-50), new Point2(33,-58), new Point2(38,-65), new Point2(42,-73), new Point2(46,-80), new Point2(50,-86), new Point2(54,-92), new Point2(57,-97), new Point2(60,-101), new Point2(62,-104), new Point2(64,-107), new Point2(65,-108), new Point2(67,-108), new Point2(69,-108), new Point2(70,-108), new Point2(71,-105), new Point2(73,-100), new Point2(75,-96), new Point2(78,-90), new Point2(82,-83), new Point2(86,-77), new Point2(90,-70), new Point2(95,-63), new Point2(100,-56), new Point2(104,-49), new Point2(109,-41), new Point2(114,-34), new Point2(119,-27), new Point2(124,-19), new Point2(127,-13), new Point2(130,-5), new Point2(133,1), new Point2(135,7), new Point2(138,14)),
	new Array(new Point2(0,0), new Point2(6,-5), new Point2(6,-7), new Point2(7,-10), new Point2(8,-14), new Point2(10,-18), new Point2(11,-22), new Point2(13,-26), new Point2(14,-31), new Point2(16,-36), new Point2(17,-41), new Point2(18,-47), new Point2(20,-54), new Point2(21,-60), new Point2(23,-68), new Point2(25,-74), new Point2(27,-81), new Point2(29,-87), new Point2(32,-94), new Point2(34,-100), new Point2(37,-106), new Point2(41,-113), new Point2(44,-119), new Point2(47,-126), new Point2(49,-132), new Point2(51,-139), new Point2(54,-146), new Point2(56,-152), new Point2(59,-158), new Point2(61,-164), new Point2(63,-170), new Point2(65,-175), new Point2(67,-180), new Point2(69,-184), new Point2(71,-189), new Point2(72,-192), new Point2(74,-196), new Point2(75,-199), new Point2(76,-201), new Point2(78,-203), new Point2(80,-204), new Point2(81,-205), new Point2(82,-205), new Point2(83,-205), new Point2(84,-205), new Point2(85,-203), new Point2(86,-199), new Point2(87,-194), new Point2(89,-190), new Point2(90,-184), new Point2(92,-179), new Point2(93,-173), new Point2(94,-167), new Point2(95,-162), new Point2(96,-155), new Point2(98,-149), new Point2(99,-144), new Point2(100,-137), new Point2(102,-129), new Point2(104,-124), new Point2(105,-117), new Point2(107,-109), new Point2(109,-102), new Point2(110,-96), new Point2(112,-88), new Point2(114,-82), new Point2(115,-75), new Point2(117,-69), new Point2(119,-63), new Point2(121,-57), new Point2(122,-51), new Point2(124,-46), new Point2(126,-41), new Point2(128,-35), new Point2(130,-30), new Point2(132,-25), new Point2(133,-21), new Point2(134,-17), new Point2(136,-13), new Point2(137,-9), new Point2(139,-5), new Point2(141,-2), new Point2(142,2), new Point2(144,6), new Point2(146,10)),
	new Array(new Point2(0,0), new Point2(3,-5), new Point2(3,-9), new Point2(3,-15), new Point2(3,-25), new Point2(5,-36), new Point2(8,-53), new Point2(12,-69), new Point2(18,-85), new Point2(25,-99), new Point2(33,-110), new Point2(42,-119), new Point2(52,-124), new Point2(63,-126), new Point2(73,-126), new Point2(87,-120), new Point2(100,-110), new Point2(111,-96), new Point2(121,-82), new Point2(130,-64), new Point2(138,-47), new Point2(145,-28), new Point2(150,-11)),
	new Array(new Point2(0,0), new Point2(4,-6), new Point2(4,-9), new Point2(5,-12), new Point2(8,-17), new Point2(13,-25), new Point2(17,-32), new Point2(23,-42), new Point2(29,-52), new Point2(35,-62), new Point2(41,-72), new Point2(46,-82), new Point2(52,-91), new Point2(57,-100), new Point2(62,-108), new Point2(66,-116), new Point2(71,-124), new Point2(74,-131), new Point2(76,-136), new Point2(79,-140), new Point2(81,-141), new Point2(84,-142), new Point2(87,-142), new Point2(90,-141), new Point2(94,-137), new Point2(100,-130), new Point2(106,-123), new Point2(113,-114), new Point2(120,-105), new Point2(128,-95), new Point2(136,-85), new Point2(143,-75), new Point2(150,-65), new Point2(157,-55), new Point2(163,-46), new Point2(168,-37), new Point2(174,-27), new Point2(180,-18), new Point2(186,-8)),
	new Array(new Point2(0,0), new Point2(7,-4), new Point2(10,-7), new Point2(13,-11), new Point2(18,-17), new Point2(23,-25), new Point2(29,-34), new Point2(37,-44), new Point2(44,-55), new Point2(54,-68), new Point2(62,-77), new Point2(70,-88), new Point2(78,-98), new Point2(86,-107), new Point2(95,-117), new Point2(103,-125), new Point2(110,-130), new Point2(118,-135), new Point2(125,-138), new Point2(131,-138), new Point2(139,-138), new Point2(146,-136), new Point2(153,-130), new Point2(161,-123), new Point2(169,-115), new Point2(176,-107), new Point2(184,-98), new Point2(193,-87), new Point2(201,-76), new Point2(210,-63), new Point2(217,-53), new Point2(224,-41), new Point2(233,-28), new Point2(242,-15)),
	new Array(new Point2(0,0), new Point2(4,-8), new Point2(7,-12), new Point2(9,-16), new Point2(12,-21), new Point2(16,-27), new Point2(21,-34), new Point2(26,-40), new Point2(31,-47), new Point2(36,-54), new Point2(41,-61), new Point2(46,-69), new Point2(51,-77), new Point2(58,-86), new Point2(63,-96), new Point2(70,-106), new Point2(77,-116), new Point2(83,-125), new Point2(89,-132), new Point2(95,-139), new Point2(101,-144), new Point2(106,-146), new Point2(112,-148), new Point2(118,-148), new Point2(126,-147), new Point2(135,-142), new Point2(145,-135), new Point2(155,-126), new Point2(164,-118), new Point2(174,-110), new Point2(183,-101), new Point2(192,-93), new Point2(201,-84), new Point2(211,-75), new Point2(219,-67), new Point2(228,-58), new Point2(235,-50), new Point2(242,-42), new Point2(249,-33), new Point2(253,-27), new Point2(258,-20), new Point2(262,-13), new Point2(265,-8), new Point2(268,-2), new Point2(270,2), new Point2(271,7)),
	new Array(new Point2(0,0), new Point2(5,-6), new Point2(8,-11), new Point2(12,-17), new Point2(18,-26), new Point2(26,-37), new Point2(36,-51), new Point2(47,-65), new Point2(58,-79), new Point2(70,-93), new Point2(82,-105), new Point2(94,-115), new Point2(103,-123), new Point2(114,-131), new Point2(123,-135), new Point2(132,-137), new Point2(143,-137), new Point2(151,-132), new Point2(161,-122), new Point2(171,-109), new Point2(181,-96), new Point2(191,-81), new Point2(199,-67), new Point2(207,-52), new Point2(213,-37), new Point2(220,-23), new Point2(224,-11)),
	);

	let carat3 = new Array(
	// right to left
	new Array(new Point2(0,0), new Point2(-4,-7), new Point2(-8,-14), new Point2(-15,-23), new Point2(-20,-30), new Point2(-26,-40), new Point2(-32,-49), new Point2(-39,-58), new Point2(-46,-68), new Point2(-53,-78), new Point2(-59,-86), new Point2(-65,-94), new Point2(-72,-103), new Point2(-77,-110), new Point2(-83,-117), new Point2(-88,-124), new Point2(-93,-131), new Point2(-97,-136), new Point2(-101,-141), new Point2(-104,-146), new Point2(-107,-150), new Point2(-109,-153), new Point2(-111,-156), new Point2(-113,-159), new Point2(-115,-161), new Point2(-116,-162), new Point2(-116,-163), new Point2(-117,-163), new Point2(-118,-163), new Point2(-119,-163), new Point2(-120,-163), new Point2(-121,-162), new Point2(-123,-158), new Point2(-125,-153), new Point2(-127,-146), new Point2(-129,-139), new Point2(-132,-131), new Point2(-135,-122), new Point2(-139,-111), new Point2(-142,-101), new Point2(-145,-92), new Point2(-150,-82), new Point2(-155,-72), new Point2(-159,-64), new Point2(-164,-56), new Point2(-169,-48), new Point2(-173,-41), new Point2(-177,-34), new Point2(-180,-28), new Point2(-183,-20), new Point2(-185,-14), new Point2(-187,-7), new Point2(-189,-1), new Point2(-192,5), new Point2(-194,10), new Point2(-196,15), new Point2(-197,19), new Point2(-199,22), new Point2(-200,25), new Point2(-200,27), new Point2(-200,28)),
	new Array(new Point2(0,0), new Point2(3,-8), new Point2(-2,-16), new Point2(-10,-28), new Point2(-21,-43), new Point2(-34,-61), new Point2(-46,-80), new Point2(-59,-99), new Point2(-71,-112), new Point2(-81,-120), new Point2(-89,-122), new Point2(-100,-122), new Point2(-109,-113), new Point2(-118,-98), new Point2(-132,-76), new Point2(-146,-57), new Point2(-159,-38), new Point2(-170,-23), new Point2(-180,-9), new Point2(-187,-1), new Point2(-193,7)),
	new Array(new Point2(0,0), new Point2(-4,-7), new Point2(-8,-14), new Point2(-12,-21), new Point2(-17,-27), new Point2(-23,-33), new Point2(-30,-39), new Point2(-36,-44), new Point2(-43,-49), new Point2(-49,-51), new Point2(-55,-54), new Point2(-62,-56), new Point2(-68,-58), new Point2(-73,-59), new Point2(-79,-59), new Point2(-83,-59), new Point2(-88,-59), new Point2(-92,-59), new Point2(-97,-54), new Point2(-102,-48), new Point2(-107,-41), new Point2(-111,-34), new Point2(-115,-26), new Point2(-119,-20), new Point2(-123,-12), new Point2(-127,-5), new Point2(-129,1), new Point2(-132,7), new Point2(-134,12)),
	new Array(new Point2(0,0), new Point2(0,-3), new Point2(0,-6), new Point2(0,-10), new Point2(-2,-14), new Point2(-3,-18), new Point2(-5,-24), new Point2(-6,-30), new Point2(-9,-36), new Point2(-10,-42), new Point2(-12,-51), new Point2(-13,-58), new Point2(-15,-66), new Point2(-18,-73), new Point2(-20,-81), new Point2(-22,-88), new Point2(-24,-95), new Point2(-27,-102), new Point2(-29,-108), new Point2(-32,-115), new Point2(-35,-121), new Point2(-38,-128), new Point2(-41,-135), new Point2(-43,-140), new Point2(-46,-146), new Point2(-48,-152), new Point2(-49,-157), new Point2(-51,-162), new Point2(-52,-166), new Point2(-54,-169), new Point2(-55,-172), new Point2(-57,-174), new Point2(-58,-176), new Point2(-59,-177), new Point2(-62,-178), new Point2(-64,-178), new Point2(-67,-178), new Point2(-69,-178), new Point2(-72,-177), new Point2(-74,-174), new Point2(-77,-170), new Point2(-80,-166), new Point2(-83,-162), new Point2(-87,-155), new Point2(-89,-149), new Point2(-92,-143), new Point2(-95,-135), new Point2(-97,-129), new Point2(-100,-121), new Point2(-102,-113), new Point2(-104,-105), new Point2(-106,-97), new Point2(-108,-89), new Point2(-110,-81), new Point2(-112,-74), new Point2(-113,-66), new Point2(-115,-59), new Point2(-117,-52), new Point2(-119,-45), new Point2(-122,-37), new Point2(-123,-31), new Point2(-125,-25), new Point2(-126,-19), new Point2(-128,-13), new Point2(-130,-8), new Point2(-131,-3), new Point2(-132,1), new Point2(-133,4), new Point2(-134,5)),
	new Array(new Point2(0,0), new Point2(-2,-6), new Point2(-2,-10), new Point2(-5,-14), new Point2(-8,-21), new Point2(-13,-33), new Point2(-20,-49), new Point2(-31,-72), new Point2(-40,-91), new Point2(-46,-104), new Point2(-52,-114), new Point2(-56,-120), new Point2(-59,-125), new Point2(-62,-127), new Point2(-65,-127), new Point2(-69,-127), new Point2(-72,-121), new Point2(-76,-110), new Point2(-81,-94), new Point2(-87,-78), new Point2(-95,-63), new Point2(-102,-49), new Point2(-111,-35), new Point2(-118,-21), new Point2(-123,-10), new Point2(-128,0)),
	new Array(new Point2(0,0), new Point2(-2,-9), new Point2(-3,-20), new Point2(-7,-31), new Point2(-15,-47), new Point2(-26,-66), new Point2(-39,-82), new Point2(-51,-94), new Point2(-67,-105), new Point2(-84,-115), new Point2(-101,-122), new Point2(-117,-126), new Point2(-133,-126), new Point2(-148,-123), new Point2(-161,-112), new Point2(-173,-97), new Point2(-183,-83), new Point2(-191,-68), new Point2(-197,-56), new Point2(-203,-44), new Point2(-207,-36)),
	new Array(new Point2(0,0), new Point2(-4,-4), new Point2(-9,-9), new Point2(-14,-15), new Point2(-21,-23), new Point2(-30,-32), new Point2(-40,-43), new Point2(-50,-54), new Point2(-61,-66), new Point2(-70,-78), new Point2(-79,-86), new Point2(-87,-95), new Point2(-95,-102), new Point2(-101,-108), new Point2(-109,-112), new Point2(-115,-115), new Point2(-122,-116), new Point2(-129,-116), new Point2(-135,-116), new Point2(-143,-113), new Point2(-152,-107), new Point2(-160,-99), new Point2(-168,-90), new Point2(-177,-81), new Point2(-184,-73), new Point2(-192,-65), new Point2(-200,-57), new Point2(-208,-50), new Point2(-216,-43), new Point2(-225,-36), new Point2(-233,-29), new Point2(-240,-23), new Point2(-247,-16)),
	new Array(new Point2(0,0), new Point2(-4,-5), new Point2(-8,-10), new Point2(-13,-17), new Point2(-20,-26), new Point2(-26,-34), new Point2(-32,-44), new Point2(-38,-53), new Point2(-43,-63), new Point2(-48,-73), new Point2(-53,-83), new Point2(-57,-93), new Point2(-62,-104), new Point2(-67,-115), new Point2(-72,-126), new Point2(-77,-136), new Point2(-83,-146), new Point2(-89,-155), new Point2(-94,-163), new Point2(-100,-170), new Point2(-105,-175), new Point2(-109,-179), new Point2(-114,-183), new Point2(-119,-186), new Point2(-124,-189), new Point2(-130,-191), new Point2(-135,-193), new Point2(-142,-193), new Point2(-148,-193), new Point2(-154,-192), new Point2(-161,-187), new Point2(-167,-182), new Point2(-172,-175), new Point2(-178,-168), new Point2(-184,-159), new Point2(-190,-151), new Point2(-196,-143), new Point2(-202,-133), new Point2(-208,-124), new Point2(-214,-115), new Point2(-219,-108), new Point2(-225,-97), new Point2(-230,-87), new Point2(-236,-77), new Point2(-241,-66), new Point2(-246,-54), new Point2(-251,-43), new Point2(-255,-32), new Point2(-259,-21), new Point2(-263,-13), new Point2(-267,-4), new Point2(-269,2)),
	new Array(new Point2(-32,-82), new Point2(-38,-95), new Point2(-43,-108), new Point2(-50,-122), new Point2(-56,-136), new Point2(-61,-150), new Point2(-66,-164), new Point2(-70,-175), new Point2(-75,-186), new Point2(-79,-195), new Point2(-84,-204), new Point2(-89,-211), new Point2(-92,-215), new Point2(-95,-219), new Point2(-98,-220), new Point2(-100,-221), new Point2(-101,-221), new Point2(-103,-221), new Point2(-105,-217), new Point2(-107,-212), new Point2(-111,-204), new Point2(-114,-197), new Point2(-118,-188), new Point2(-123,-177), new Point2(-128,-167), new Point2(-133,-156), new Point2(-139,-144), new Point2(-144,-130), new Point2(-149,-116), new Point2(-154,-101), new Point2(-158,-87), new Point2(-163,-76), new Point2(-168,-65), new Point2(-173,-53), new Point2(-177,-42), new Point2(-181,-30), new Point2(-184,-22), new Point2(-187,-13), new Point2(-191,-2), new Point2(-194,6), new Point2(-197,15)),
	new Array(new Point2(0,0), new Point2(-6,-11), new Point2(-14,-26), new Point2(-29,-48), new Point2(-44,-70), new Point2(-59,-92), new Point2(-74,-112), new Point2(-89,-129), new Point2(-103,-141), new Point2(-117,-151), new Point2(-129,-156), new Point2(-141,-156), new Point2(-151,-154), new Point2(-163,-143), new Point2(-173,-128), new Point2(-185,-113), new Point2(-197,-97), new Point2(-209,-81), new Point2(-220,-67), new Point2(-229,-51), new Point2(-237,-39), new Point2(-244,-29), new Point2(-251,-20))
	);

let circle2 = new Array(
	// top, clockwise
	new Array(new Point2(0,0), new Point2(4,-3), new Point2(10,-5), new Point2(17,-9), new Point2(28,-11), new Point2(39,-12), new Point2(53,-13), new Point2(69,-13), new Point2(84,-11), new Point2(100,-5), new Point2(114,3), new Point2(127,11), new Point2(137,22), new Point2(146,35), new Point2(152,50), new Point2(155,67), new Point2(156,85), new Point2(156,102), new Point2(153,120), new Point2(146,136), new Point2(136,152), new Point2(125,166), new Point2(113,177), new Point2(99,187), new Point2(83,193), new Point2(67,198), new Point2(48,202), new Point2(29,202), new Point2(11,202), new Point2(-6,196), new Point2(-21,188), new Point2(-35,177), new Point2(-45,164), new Point2(-54,149), new Point2(-61,134), new Point2(-64,120), new Point2(-66,105), new Point2(-66,92), new Point2(-66,77), new Point2(-63,65), new Point2(-56,51), new Point2(-50,41), new Point2(-42,30), new Point2(-34,22), new Point2(-27,18)),
	new Array(new Point2(0,0), new Point2(7,-4), new Point2(12,-5), new Point2(17,-6), new Point2(24,-8), new Point2(33,-8), new Point2(42,-9), new Point2(52,-9), new Point2(63,-8), new Point2(70,-4), new Point2(77,1), new Point2(84,9), new Point2(88,17), new Point2(91,26), new Point2(94,38), new Point2(96,47), new Point2(97,56), new Point2(97,65), new Point2(97,73), new Point2(91,81), new Point2(83,89), new Point2(74,95), new Point2(64,101), new Point2(53,105), new Point2(42,106), new Point2(30,107), new Point2(18,107), new Point2(7,105), new Point2(-3,101), new Point2(-12,94), new Point2(-20,86), new Point2(-26,78), new Point2(-31,67), new Point2(-33,56), new Point2(-33,43), new Point2(-33,32), new Point2(-30,25), new Point2(-24,17), new Point2(-17,12), new Point2(-10,7), new Point2(-4,4), new Point2(3,3), new Point2(10,1)),
	new Array(new Point2(0,0), new Point2(2,-8), new Point2(5,-9), new Point2(10,-11), new Point2(17,-12), new Point2(26,-14), new Point2(37,-14), new Point2(50,-14), new Point2(63,-14), new Point2(80,-13), new Point2(92,-9), new Point2(107,-3), new Point2(118,3), new Point2(130,12), new Point2(140,19), new Point2(150,28), new Point2(160,38), new Point2(168,48), new Point2(175,59), new Point2(180,70), new Point2(184,82), new Point2(186,94), new Point2(186,107), new Point2(186,124), new Point2(184,139), new Point2(180,153), new Point2(174,168), new Point2(167,181), new Point2(159,194), new Point2(151,204), new Point2(140,214), new Point2(127,223), new Point2(113,229), new Point2(98,234), new Point2(81,237), new Point2(64,237), new Point2(47,237), new Point2(30,236), new Point2(14,231), new Point2(0,224), new Point2(-13,216), new Point2(-25,206), new Point2(-34,194), new Point2(-42,185), new Point2(-49,172), new Point2(-53,162), new Point2(-57,150), new Point2(-59,139), new Point2(-60,127), new Point2(-60,116), new Point2(-60,104), new Point2(-58,89), new Point2(-54,78), new Point2(-48,65), new Point2(-41,54), new Point2(-32,41), new Point2(-24,32), new Point2(-16,22), new Point2(-8,14), new Point2(0,9), new Point2(8,4), new Point2(17,0), new Point2(25,-3), new Point2(32,-6)),
	new Array(new Point2(0,0), new Point2(7,-6), new Point2(11,-6), new Point2(17,-7), new Point2(28,-7), new Point2(43,-6), new Point2(64,1), new Point2(83,12), new Point2(102,27), new Point2(120,46), new Point2(136,70), new Point2(150,97), new Point2(159,125), new Point2(162,153), new Point2(162,182), new Point2(151,210), new Point2(134,233), new Point2(112,250), new Point2(88,261), new Point2(60,268), new Point2(30,268), new Point2(-5,265), new Point2(-37,251), new Point2(-65,232), new Point2(-88,210), new Point2(-103,189), new Point2(-112,166), new Point2(-114,141), new Point2(-113,112), new Point2(-105,78), new Point2(-94,53), new Point2(-80,29), new Point2(-64,14), new Point2(-48,7)),
	new Array(new Point2(0,0), new Point2(5,-4), new Point2(9,-5), new Point2(15,-7), new Point2(23,-8), new Point2(36,-10), new Point2(51,-10), new Point2(67,-9), new Point2(82,-5), new Point2(97,2), new Point2(112,10), new Point2(124,20), new Point2(135,31), new Point2(145,45), new Point2(153,62), new Point2(160,79), new Point2(165,101), new Point2(168,122), new Point2(168,146), new Point2(168,168), new Point2(164,185), new Point2(156,203), new Point2(143,224), new Point2(126,242), new Point2(107,256), new Point2(88,267), new Point2(69,277), new Point2(48,284), new Point2(27,289), new Point2(5,290), new Point2(-16,290), new Point2(-33,288), new Point2(-52,278), new Point2(-69,263), new Point2(-83,245), new Point2(-97,228), new Point2(-105,212), new Point2(-110,194), new Point2(-110,172), new Point2(-110,151), new Point2(-109,130), new Point2(-106,110), new Point2(-100,94), new Point2(-93,78), new Point2(-85,62), new Point2(-75,47), new Point2(-63,31), new Point2(-49,16), new Point2(-35,4), new Point2(-20,-5), new Point2(-4,-10), new Point2(11,-12), new Point2(27,-12), new Point2(40,-12), new Point2(54,-12), new Point2(65,-9), new Point2(74,-5), new Point2(83,2), new Point2(89,7)),
	new Array(new Point2(0,0), new Point2(5,0), new Point2(9,0), new Point2(15,2), new Point2(22,5), new Point2(32,9), new Point2(41,15), new Point2(51,22), new Point2(61,33), new Point2(69,45), new Point2(75,57), new Point2(79,70), new Point2(80,83), new Point2(80,96), new Point2(80,109), new Point2(75,120), new Point2(69,131), new Point2(60,140), new Point2(50,148), new Point2(39,153), new Point2(24,158), new Point2(12,159), new Point2(-5,159), new Point2(-18,159), new Point2(-33,157), new Point2(-45,152), new Point2(-57,145), new Point2(-67,136), new Point2(-76,126), new Point2(-81,115), new Point2(-84,103), new Point2(-85,92), new Point2(-85,80), new Point2(-83,69), new Point2(-80,57), new Point2(-75,46), new Point2(-69,37), new Point2(-63,30), new Point2(-55,23), new Point2(-47,17), new Point2(-36,13), new Point2(-26,11), new Point2(-15,11), new Point2(-7,11), new Point2(3,11), new Point2(12,11), new Point2(20,15), new Point2(28,18), new Point2(33,22), new Point2(38,26), new Point2(41,30)),
	new Array(new Point2(0,0), new Point2(10,-3), new Point2(14,-3), new Point2(18,-3), new Point2(22,-1), new Point2(28,3), new Point2(34,9), new Point2(39,16), new Point2(43,24), new Point2(46,33), new Point2(47,43), new Point2(47,54), new Point2(47,61), new Point2(45,70), new Point2(41,77), new Point2(36,83), new Point2(30,88), new Point2(23,92), new Point2(16,95), new Point2(7,96), new Point2(-1,96), new Point2(-8,96), new Point2(-16,94), new Point2(-23,89), new Point2(-30,83), new Point2(-34,75), new Point2(-38,67), new Point2(-40,58), new Point2(-41,47), new Point2(-41,39), new Point2(-41,29), new Point2(-40,21), new Point2(-35,13), new Point2(-30,6), new Point2(-24,1), new Point2(-19,-3), new Point2(-12,-6), new Point2(-6,-8), new Point2(1,-8), new Point2(8,-8), new Point2(13,-7)),
	new Array(new Point2(0,0), new Point2(6,-10), new Point2(10,-11), new Point2(16,-13), new Point2(24,-13), new Point2(34,-13), new Point2(47,-12), new Point2(63,-7), new Point2(78,-2), new Point2(93,4), new Point2(104,9), new Point2(116,17), new Point2(125,26), new Point2(133,37), new Point2(139,49), new Point2(142,61), new Point2(144,72), new Point2(144,83), new Point2(143,93), new Point2(139,103), new Point2(132,112), new Point2(124,122), new Point2(116,130), new Point2(107,137), new Point2(98,142), new Point2(88,148), new Point2(78,152), new Point2(67,156), new Point2(55,158), new Point2(43,159), new Point2(27,159), new Point2(13,159), new Point2(2,154), new Point2(-13,147), new Point2(-24,142), new Point2(-34,134), new Point2(-46,123), new Point2(-54,114), new Point2(-62,101), new Point2(-68,91), new Point2(-73,79), new Point2(-76,67), new Point2(-79,55), new Point2(-79,43), new Point2(-79,31), new Point2(-79,19), new Point2(-78,10), new Point2(-72,0), new Point2(-66,-6), new Point2(-57,-11), new Point2(-48,-15), new Point2(-37,-17), new Point2(-26,-18), new Point2(-14,-18), new Point2(0,-18), new Point2(13,-17), new Point2(27,-10)),
	new Array(new Point2(0,0), new Point2(5,0), new Point2(12,0), new Point2(22,0), new Point2(34,2), new Point2(50,7), new Point2(65,13), new Point2(77,21), new Point2(88,29), new Point2(97,39), new Point2(105,50), new Point2(111,66), new Point2(114,83), new Point2(115,102), new Point2(115,121), new Point2(113,143), new Point2(106,160), new Point2(95,180), new Point2(84,193), new Point2(70,207), new Point2(56,217), new Point2(40,227), new Point2(22,234), new Point2(3,237), new Point2(-16,238), new Point2(-34,238), new Point2(-51,234), new Point2(-68,225), new Point2(-82,216), new Point2(-96,202), new Point2(-106,187), new Point2(-114,170), new Point2(-120,152), new Point2(-123,135), new Point2(-123,120), new Point2(-123,105), new Point2(-120,91), new Point2(-114,77), new Point2(-109,65), new Point2(-102,51), new Point2(-93,40), new Point2(-82,31), new Point2(-70,22), new Point2(-59,16), new Point2(-47,11), new Point2(-32,7), new Point2(-20,6), new Point2(-6,6), new Point2(7,6), new Point2(22,12)),
	new Array(new Point2(0,0), new Point2(16,-5), new Point2(22,-5), new Point2(30,-5), new Point2(38,-3), new Point2(48,2), new Point2(58,8), new Point2(69,15), new Point2(78,24), new Point2(86,34), new Point2(93,46), new Point2(96,58), new Point2(97,71), new Point2(97,87), new Point2(91,101), new Point2(85,112), new Point2(75,123), new Point2(66,131), new Point2(54,135), new Point2(41,138), new Point2(28,138), new Point2(15,138), new Point2(2,136), new Point2(-10,129), new Point2(-20,120), new Point2(-28,108), new Point2(-33,93), new Point2(-35,81), new Point2(-35,68), new Point2(-35,56), new Point2(-29,44), new Point2(-22,33), new Point2(-14,23), new Point2(-5,15), new Point2(5,9), new Point2(15,5), new Point2(26,4), new Point2(35,4), new Point2(47,4)),
	);

let circle3 = new Array(
	// // top, counterclockwise
	new Array(new Point2(0,0), new Point2(-7,-2), new Point2(-12,-2), new Point2(-19,-1), new Point2(-26,2), new Point2(-37,7), new Point2(-47,13), new Point2(-57,21), new Point2(-65,30), new Point2(-71,39), new Point2(-74,50), new Point2(-75,61), new Point2(-75,73), new Point2(-73,86), new Point2(-66,98), new Point2(-57,110), new Point2(-46,119), new Point2(-33,127), new Point2(-22,132), new Point2(-8,133), new Point2(8,133), new Point2(19,128), new Point2(30,120), new Point2(39,110), new Point2(46,99), new Point2(51,87), new Point2(55,75), new Point2(55,62), new Point2(55,47), new Point2(54,32), new Point2(46,20), new Point2(39,11), new Point2(28,2), new Point2(16,-3), new Point2(3,-6)),
	new Array(new Point2(0,0), new Point2(-5,-5), new Point2(-10,-6), new Point2(-19,-9), new Point2(-29,-13), new Point2(-41,-16), new Point2(-53,-17), new Point2(-65,-17), new Point2(-76,-14), new Point2(-87,-6), new Point2(-98,6), new Point2(-108,20), new Point2(-117,35), new Point2(-123,51), new Point2(-127,68), new Point2(-128,81), new Point2(-128,96), new Point2(-128,109), new Point2(-123,123), new Point2(-115,133), new Point2(-103,146), new Point2(-91,154), new Point2(-76,160), new Point2(-60,162), new Point2(-43,162), new Point2(-26,161), new Point2(-9,156), new Point2(6,150), new Point2(19,143), new Point2(30,135), new Point2(39,123), new Point2(45,112), new Point2(51,97), new Point2(54,83), new Point2(54,68), new Point2(54,53), new Point2(48,38), new Point2(38,24), new Point2(25,10), new Point2(11,-1), new Point2(-6,-12), new Point2(-23,-21), new Point2(-41,-28), new Point2(-58,-33), new Point2(-75,-36)),
	new Array(new Point2(0,0), new Point2(-6,-1), new Point2(-12,-1), new Point2(-20,-1), new Point2(-28,1), new Point2(-39,4), new Point2(-48,10), new Point2(-56,18), new Point2(-63,26), new Point2(-69,35), new Point2(-74,45), new Point2(-78,55), new Point2(-82,67), new Point2(-84,80), new Point2(-85,92), new Point2(-85,103), new Point2(-84,111), new Point2(-77,123), new Point2(-69,132), new Point2(-57,142), new Point2(-44,152), new Point2(-30,160), new Point2(-15,167), new Point2(1,173), new Point2(13,176), new Point2(29,178), new Point2(41,178), new Point2(54,178), new Point2(64,173), new Point2(73,167), new Point2(81,160), new Point2(88,151), new Point2(94,142), new Point2(99,131), new Point2(102,119), new Point2(105,107), new Point2(106,96), new Point2(106,86), new Point2(106,75), new Point2(102,64), new Point2(96,55), new Point2(88,45), new Point2(79,36), new Point2(69,27), new Point2(58,19), new Point2(46,11), new Point2(36,6), new Point2(25,2), new Point2(17,0), new Point2(8,-2), new Point2(-1,-2), new Point2(-11,-2), new Point2(-20,-1)),
	new Array(new Point2(0,0), new Point2(-8,3), new Point2(-14,4), new Point2(-21,7), new Point2(-28,11), new Point2(-35,16), new Point2(-45,23), new Point2(-51,29), new Point2(-59,38), new Point2(-66,46), new Point2(-71,55), new Point2(-76,64), new Point2(-80,75), new Point2(-83,86), new Point2(-86,97), new Point2(-88,108), new Point2(-89,120), new Point2(-90,131), new Point2(-90,143), new Point2(-90,155), new Point2(-90,166), new Point2(-86,178), new Point2(-81,189), new Point2(-73,202), new Point2(-66,211), new Point2(-54,222), new Point2(-43,230), new Point2(-29,237), new Point2(-14,243), new Point2(3,248), new Point2(20,253), new Point2(37,257), new Point2(54,259), new Point2(70,259), new Point2(86,259), new Point2(102,254), new Point2(117,248), new Point2(130,241), new Point2(142,232), new Point2(153,222), new Point2(164,210), new Point2(174,198), new Point2(181,188), new Point2(188,172), new Point2(193,158), new Point2(196,143), new Point2(198,128), new Point2(198,112), new Point2(198,95), new Point2(194,78), new Point2(187,62), new Point2(179,46), new Point2(169,32), new Point2(159,19), new Point2(148,8), new Point2(137,-2), new Point2(127,-9), new Point2(115,-16), new Point2(104,-20), new Point2(92,-23), new Point2(80,-24), new Point2(68,-25), new Point2(57,-25), new Point2(45,-25), new Point2(34,-25), new Point2(25,-25), new Point2(16,-25), new Point2(8,-23), new Point2(1,-19), new Point2(-6,-15), new Point2(-13,-10), new Point2(-18,-7), new Point2(-25,-2), new Point2(-31,0), new Point2(-37,3)),
	new Array(new Point2(0,0), new Point2(-5,6), new Point2(-8,10), new Point2(-13,14), new Point2(-17,19), new Point2(-22,27), new Point2(-25,35), new Point2(-27,44), new Point2(-27,54), new Point2(-27,63), new Point2(-27,72), new Point2(-25,81), new Point2(-21,89), new Point2(-15,96), new Point2(-9,102), new Point2(-2,107), new Point2(6,109), new Point2(16,109), new Point2(28,109), new Point2(41,107), new Point2(53,104), new Point2(65,101), new Point2(76,96), new Point2(82,91), new Point2(87,84), new Point2(91,75), new Point2(92,64), new Point2(92,56), new Point2(92,44), new Point2(89,34), new Point2(83,25), new Point2(78,18), new Point2(69,10), new Point2(62,5), new Point2(53,1), new Point2(44,-1), new Point2(34,-2), new Point2(23,-2), new Point2(15,-2), new Point2(5,-2), new Point2(-2,2), new Point2(-10,8), new Point2(-16,13), new Point2(-21,17)),
	new Array(new Point2(0,0), new Point2(-6,7), new Point2(-9,13), new Point2(-12,19), new Point2(-16,26), new Point2(-20,34), new Point2(-23,46), new Point2(-24,57), new Point2(-24,70), new Point2(-24,81), new Point2(-24,93), new Point2(-20,101), new Point2(-13,110), new Point2(-5,118), new Point2(3,124), new Point2(14,128), new Point2(26,128), new Point2(37,128), new Point2(49,128), new Point2(58,121), new Point2(65,115), new Point2(70,107), new Point2(74,97), new Point2(76,86), new Point2(76,74), new Point2(76,63), new Point2(75,52), new Point2(70,42), new Point2(63,32), new Point2(54,24), new Point2(44,18), new Point2(34,12), new Point2(23,10), new Point2(12,10), new Point2(1,10), new Point2(-9,15), new Point2(-18,21), new Point2(-26,25)),
	new Array(new Point2(0,0), new Point2(-4,0), new Point2(-10,0), new Point2(-17,1), new Point2(-25,3), new Point2(-36,7), new Point2(-46,12), new Point2(-57,16), new Point2(-68,22), new Point2(-80,30), new Point2(-91,37), new Point2(-102,48), new Point2(-110,57), new Point2(-118,68), new Point2(-124,80), new Point2(-129,93), new Point2(-131,108), new Point2(-132,121), new Point2(-132,137), new Point2(-130,153), new Point2(-124,167), new Point2(-116,181), new Point2(-106,194), new Point2(-93,206), new Point2(-78,217), new Point2(-57,226), new Point2(-36,233), new Point2(-14,236), new Point2(9,237), new Point2(31,237), new Point2(48,232), new Point2(65,223), new Point2(80,211), new Point2(92,198), new Point2(102,181), new Point2(111,161), new Point2(117,139), new Point2(121,118), new Point2(121,96), new Point2(121,75), new Point2(115,55), new Point2(106,40), new Point2(91,23), new Point2(76,12), new Point2(55,2), new Point2(39,-3), new Point2(21,-5), new Point2(4,-5), new Point2(-11,0), new Point2(-24,6), new Point2(-36,11)),
	new Array(new Point2(0,0), new Point2(-5,0), new Point2(-8,0), new Point2(-13,1), new Point2(-17,4), new Point2(-22,8), new Point2(-28,14), new Point2(-33,21), new Point2(-38,29), new Point2(-42,37), new Point2(-45,46), new Point2(-46,56), new Point2(-46,65), new Point2(-46,74), new Point2(-45,83), new Point2(-41,91), new Point2(-35,98), new Point2(-28,103), new Point2(-20,107), new Point2(-9,108), new Point2(2,108), new Point2(13,108), new Point2(24,103), new Point2(34,98), new Point2(41,93), new Point2(48,87), new Point2(53,80), new Point2(57,73), new Point2(59,65), new Point2(60,55), new Point2(60,44), new Point2(60,36), new Point2(58,27), new Point2(54,18), new Point2(46,10), new Point2(37,3), new Point2(28,-3), new Point2(17,-6), new Point2(5,-7), new Point2(-6,-7), new Point2(-17,-5), new Point2(-26,0), new Point2(-34,5)),
	new Array(new Point2(0,0), new Point2(-3,0), new Point2(-5,0), new Point2(-9,0), new Point2(-12,1), new Point2(-16,3), new Point2(-19,6), new Point2(-23,8), new Point2(-27,11), new Point2(-30,14), new Point2(-33,18), new Point2(-36,21), new Point2(-39,26), new Point2(-42,29), new Point2(-44,33), new Point2(-47,38), new Point2(-50,42), new Point2(-52,47), new Point2(-55,52), new Point2(-57,58), new Point2(-58,66), new Point2(-60,73), new Point2(-61,81), new Point2(-61,89), new Point2(-61,98), new Point2(-61,106), new Point2(-61,114), new Point2(-59,122), new Point2(-57,130), new Point2(-54,136), new Point2(-49,143), new Point2(-44,150), new Point2(-38,155), new Point2(-31,161), new Point2(-24,166), new Point2(-19,170), new Point2(-12,176), new Point2(-8,178), new Point2(-3,181), new Point2(2,183), new Point2(7,185), new Point2(12,187), new Point2(18,188), new Point2(23,189), new Point2(29,190), new Point2(35,190), new Point2(41,191), new Point2(47,191), new Point2(54,191), new Point2(60,191), new Point2(67,191), new Point2(74,191), new Point2(82,190), new Point2(88,188), new Point2(96,185), new Point2(103,181), new Point2(109,176), new Point2(115,170), new Point2(121,165), new Point2(126,159), new Point2(130,155), new Point2(135,150), new Point2(138,144), new Point2(140,139), new Point2(142,132), new Point2(144,126), new Point2(146,120), new Point2(148,114), new Point2(149,107), new Point2(150,101), new Point2(151,94), new Point2(152,88), new Point2(153,81), new Point2(153,75), new Point2(153,69), new Point2(153,64), new Point2(153,58), new Point2(153,52), new Point2(153,46), new Point2(151,40), new Point2(149,34), new Point2(146,28), new Point2(143,22), new Point2(138,15), new Point2(135,10), new Point2(129,4), new Point2(124,-1), new Point2(117,-6), new Point2(111,-10), new Point2(104,-14), new Point2(96,-18), new Point2(89,-22), new Point2(83,-25), new Point2(75,-27), new Point2(67,-29), new Point2(60,-31), new Point2(52,-33), new Point2(45,-34), new Point2(39,-34), new Point2(32,-34), new Point2(26,-34), new Point2(20,-34), new Point2(14,-32), new Point2(9,-30), new Point2(4,-27), new Point2(-2,-23), new Point2(-6,-20), new Point2(-9,-18), new Point2(-12,-15), new Point2(-14,-12), new Point2(-16,-10), new Point2(-17,-8), new Point2(-18,-6)),
	new Array(new Point2(0,0), new Point2(-9,1), new Point2(-12,1), new Point2(-14,1), new Point2(-17,1), new Point2(-19,1), new Point2(-22,1), new Point2(-24,1), new Point2(-25,2), new Point2(-27,4), new Point2(-29,7), new Point2(-31,11), new Point2(-32,15), new Point2(-34,19), new Point2(-35,23), new Point2(-37,29), new Point2(-39,35), new Point2(-41,40), new Point2(-43,46), new Point2(-45,52), new Point2(-47,58), new Point2(-48,63), new Point2(-50,71), new Point2(-50,77), new Point2(-50,83), new Point2(-50,90), new Point2(-50,98), new Point2(-50,105), new Point2(-47,111), new Point2(-44,119), new Point2(-40,126), new Point2(-35,133), new Point2(-30,139), new Point2(-25,145), new Point2(-19,151), new Point2(-12,155), new Point2(-5,160), new Point2(1,163), new Point2(8,166), new Point2(16,168), new Point2(22,170), new Point2(28,170), new Point2(35,171), new Point2(41,171), new Point2(47,171), new Point2(54,171), new Point2(62,171), new Point2(70,170), new Point2(78,167), new Point2(85,163), new Point2(90,159), new Point2(96,154), new Point2(100,149), new Point2(104,142), new Point2(107,137), new Point2(110,129), new Point2(112,123), new Point2(114,117), new Point2(115,110), new Point2(116,104), new Point2(116,97), new Point2(117,91), new Point2(117,84), new Point2(117,77), new Point2(117,71), new Point2(114,64), new Point2(111,57), new Point2(108,50), new Point2(105,43), new Point2(102,38), new Point2(99,31), new Point2(95,26), new Point2(91,20), new Point2(86,14), new Point2(81,9), new Point2(76,5), new Point2(69,0), new Point2(62,-4), new Point2(55,-7), new Point2(50,-9), new Point2(44,-10), new Point2(38,-10), new Point2(32,-10), new Point2(26,-10), new Point2(20,-10), new Point2(15,-9), new Point2(9,-7), new Point2(4,-5), new Point2(-1,-4), new Point2(-4,-2), new Point2(-8,0), new Point2(-11,2), new Point2(-14,3))
	 );

let arch2 = new Array(
	// left to right
	new Array(new Point2(0,0), new Point2(1,-5), new Point2(1,-9), new Point2(1,-14), new Point2(1,-22), new Point2(1,-32), new Point2(2,-44), new Point2(2,-58), new Point2(2,-73), new Point2(2,-88), new Point2(2,-101), new Point2(3,-114), new Point2(5,-126), new Point2(6,-137), new Point2(7,-146), new Point2(8,-154), new Point2(8,-160), new Point2(8,-164), new Point2(9,-167), new Point2(9,-169), new Point2(10,-169), new Point2(12,-169), new Point2(15,-169), new Point2(19,-169), new Point2(24,-169), new Point2(29,-169), new Point2(37,-169), new Point2(46,-169), new Point2(55,-169), new Point2(67,-168), new Point2(78,-168), new Point2(89,-166), new Point2(101,-165), new Point2(112,-165), new Point2(122,-165), new Point2(131,-165), new Point2(138,-165), new Point2(145,-165), new Point2(150,-165), new Point2(155,-165), new Point2(158,-165), new Point2(160,-164), new Point2(162,-162), new Point2(163,-159), new Point2(164,-152), new Point2(165,-144), new Point2(166,-132), new Point2(166,-119), new Point2(166,-102), new Point2(166,-87), new Point2(166,-76), new Point2(166,-63), new Point2(166,-51), new Point2(166,-42), new Point2(166,-33), new Point2(166,-26), new Point2(166,-20)),
	new Array(new Point2(0,0), new Point2(0,-5), new Point2(0,-10), new Point2(0,-17), new Point2(0,-26), new Point2(0,-36), new Point2(0,-45), new Point2(0,-54), new Point2(0,-61), new Point2(0,-68), new Point2(0,-74), new Point2(0,-78), new Point2(0,-81), new Point2(0,-84), new Point2(1,-85), new Point2(2,-86), new Point2(3,-87), new Point2(4,-88), new Point2(6,-89), new Point2(8,-89), new Point2(12,-90), new Point2(15,-90), new Point2(19,-90), new Point2(23,-90), new Point2(30,-90), new Point2(36,-90), new Point2(43,-90), new Point2(51,-90), new Point2(59,-91), new Point2(66,-91), new Point2(74,-92), new Point2(80,-93), new Point2(87,-94), new Point2(93,-95), new Point2(98,-95), new Point2(102,-96), new Point2(105,-96), new Point2(108,-96), new Point2(109,-96), new Point2(110,-96), new Point2(110,-94), new Point2(110,-90), new Point2(110,-85), new Point2(110,-78), new Point2(110,-69), new Point2(111,-60), new Point2(111,-51), new Point2(112,-43), new Point2(113,-34), new Point2(114,-26), new Point2(114,-16), new Point2(114,-8), new Point2(114,-2), new Point2(114,4), new Point2(114,7)),
	new Array(new Point2(0,0), new Point2(1,-7), new Point2(1,-14), new Point2(1,-23), new Point2(2,-34), new Point2(3,-46), new Point2(4,-60), new Point2(4,-75), new Point2(4,-90), new Point2(5,-102), new Point2(5,-116), new Point2(5,-129), new Point2(5,-142), new Point2(5,-154), new Point2(5,-165), new Point2(5,-176), new Point2(5,-184), new Point2(5,-191), new Point2(5,-198), new Point2(5,-203), new Point2(5,-207), new Point2(6,-210), new Point2(7,-211), new Point2(8,-212), new Point2(9,-212), new Point2(11,-212), new Point2(15,-212), new Point2(19,-212), new Point2(25,-212), new Point2(32,-212), new Point2(41,-213), new Point2(50,-215), new Point2(62,-216), new Point2(73,-217), new Point2(84,-217), new Point2(95,-218), new Point2(107,-218), new Point2(118,-218), new Point2(130,-218), new Point2(142,-218), new Point2(154,-218), new Point2(165,-219), new Point2(176,-220), new Point2(184,-221), new Point2(193,-222), new Point2(200,-223), new Point2(206,-224), new Point2(211,-225), new Point2(215,-225), new Point2(219,-225), new Point2(222,-225), new Point2(224,-224), new Point2(226,-221), new Point2(228,-216), new Point2(229,-208), new Point2(229,-200), new Point2(229,-188), new Point2(229,-177), new Point2(229,-165), new Point2(229,-153), new Point2(229,-142), new Point2(230,-129), new Point2(230,-117), new Point2(231,-104), new Point2(232,-91), new Point2(233,-79), new Point2(233,-67), new Point2(234,-55), new Point2(234,-44), new Point2(234,-34), new Point2(235,-24), new Point2(236,-13), new Point2(238,-3), new Point2(238,5), new Point2(239,12), new Point2(239,17), new Point2(240,21)),
	new Array(new Point2(0,0), new Point2(0,-7), new Point2(0,-12), new Point2(0,-19), new Point2(0,-27), new Point2(0,-34), new Point2(1,-42), new Point2(1,-49), new Point2(2,-55), new Point2(2,-59), new Point2(3,-62), new Point2(3,-65), new Point2(4,-67), new Point2(5,-68), new Point2(6,-69), new Point2(7,-70), new Point2(9,-70), new Point2(11,-71), new Point2(13,-71), new Point2(17,-71), new Point2(21,-72), new Point2(26,-72), new Point2(32,-72), new Point2(38,-72), new Point2(46,-72), new Point2(53,-72), new Point2(59,-72), new Point2(65,-72), new Point2(70,-72), new Point2(73,-72), new Point2(77,-72), new Point2(80,-72), new Point2(81,-72), new Point2(82,-72), new Point2(83,-71), new Point2(84,-68), new Point2(84,-64), new Point2(84,-58), new Point2(84,-51), new Point2(84,-44), new Point2(84,-38), new Point2(84,-32), new Point2(84,-26), new Point2(84,-22), new Point2(84,-19), new Point2(85,-16), new Point2(85,-14), new Point2(86,-13), new Point2(87,-12), new Point2(87,-11), new Point2(88,-11), new Point2(89,-10), new Point2(89,-9), new Point2(89,-8), new Point2(89,-6)),
	new Array(new Point2(0,0), new Point2(1,-6), new Point2(1,-10), new Point2(1,-16), new Point2(1,-23), new Point2(1,-32), new Point2(1,-44), new Point2(1,-55), new Point2(1,-63), new Point2(1,-69), new Point2(1,-75), new Point2(1,-80), new Point2(1,-84), new Point2(1,-87), new Point2(1,-89), new Point2(2,-91), new Point2(3,-93), new Point2(4,-94), new Point2(5,-95), new Point2(7,-96), new Point2(9,-96), new Point2(12,-96), new Point2(15,-96), new Point2(20,-96), new Point2(25,-96), new Point2(31,-96), new Point2(38,-96), new Point2(45,-96), new Point2(53,-96), new Point2(61,-96), new Point2(68,-96), new Point2(76,-96), new Point2(82,-98), new Point2(89,-98), new Point2(95,-99), new Point2(100,-99), new Point2(104,-99), new Point2(108,-99), new Point2(111,-99), new Point2(113,-99), new Point2(115,-98), new Point2(116,-95), new Point2(117,-91), new Point2(119,-84), new Point2(119,-75), new Point2(120,-63), new Point2(120,-52), new Point2(121,-41), new Point2(121,-31), new Point2(122,-21), new Point2(123,-12), new Point2(124,-5), new Point2(124,1), new Point2(124,7), new Point2(125,10), new Point2(125,12), new Point2(125,13)),
	new Array(new Point2(0,0), new Point2(0,-5), new Point2(0,-11), new Point2(0,-17), new Point2(0,-25), new Point2(1,-37), new Point2(1,-47), new Point2(1,-59), new Point2(2,-70), new Point2(2,-82), new Point2(2,-94), new Point2(2,-105), new Point2(3,-116), new Point2(3,-126), new Point2(3,-135), new Point2(4,-145), new Point2(5,-153), new Point2(6,-160), new Point2(8,-166), new Point2(10,-171), new Point2(12,-175), new Point2(16,-178), new Point2(20,-180), new Point2(26,-181), new Point2(34,-183), new Point2(42,-184), new Point2(51,-184), new Point2(60,-186), new Point2(72,-187), new Point2(84,-188), new Point2(93,-189), new Point2(106,-190), new Point2(115,-191), new Point2(125,-191), new Point2(137,-192), new Point2(145,-193), new Point2(154,-193), new Point2(164,-193), new Point2(171,-193), new Point2(178,-193), new Point2(185,-193), new Point2(190,-193), new Point2(195,-193), new Point2(198,-192), new Point2(201,-189), new Point2(203,-184), new Point2(204,-177), new Point2(204,-170), new Point2(205,-159), new Point2(205,-148), new Point2(206,-137), new Point2(206,-124), new Point2(206,-111), new Point2(206,-98), new Point2(206,-85), new Point2(206,-72), new Point2(206,-60), new Point2(206,-48), new Point2(206,-36), new Point2(206,-25), new Point2(206,-16), new Point2(207,-7), new Point2(208,-1), new Point2(208,5), new Point2(209,10)),
	new Array(new Point2(0,0), new Point2(2,-10), new Point2(2,-18), new Point2(2,-29), new Point2(2,-42), new Point2(3,-56), new Point2(3,-73), new Point2(3,-88), new Point2(3,-100), new Point2(3,-114), new Point2(3,-127), new Point2(3,-139), new Point2(3,-151), new Point2(3,-164), new Point2(3,-176), new Point2(3,-189), new Point2(4,-200), new Point2(4,-209), new Point2(4,-218), new Point2(5,-224), new Point2(6,-230), new Point2(7,-234), new Point2(8,-236), new Point2(9,-238), new Point2(10,-239), new Point2(11,-240), new Point2(13,-240), new Point2(15,-240), new Point2(19,-240), new Point2(23,-240), new Point2(28,-240), new Point2(33,-240), new Point2(40,-240), new Point2(47,-240), new Point2(55,-240), new Point2(63,-240), new Point2(72,-241), new Point2(82,-241), new Point2(91,-241), new Point2(102,-242), new Point2(113,-242), new Point2(123,-243), new Point2(132,-244), new Point2(142,-244), new Point2(150,-245), new Point2(157,-245), new Point2(165,-245), new Point2(173,-245), new Point2(178,-245), new Point2(184,-246), new Point2(188,-246), new Point2(193,-246), new Point2(196,-246), new Point2(199,-246), new Point2(201,-246), new Point2(203,-245), new Point2(204,-243), new Point2(205,-241), new Point2(205,-236), new Point2(206,-230), new Point2(206,-223), new Point2(206,-213), new Point2(207,-202), new Point2(207,-190), new Point2(207,-178), new Point2(207,-165), new Point2(207,-151), new Point2(207,-138), new Point2(207,-124), new Point2(207,-110), new Point2(207,-96), new Point2(207,-83), new Point2(207,-69), new Point2(207,-56), new Point2(207,-43), new Point2(207,-32), new Point2(207,-23), new Point2(207,-13), new Point2(207,-5), new Point2(207,3), new Point2(207,9), new Point2(207,14), new Point2(207,17)),
	new Array(new Point2(0,0), new Point2(1,-8), new Point2(1,-13), new Point2(1,-22), new Point2(1,-34), new Point2(1,-52), new Point2(1,-69), new Point2(1,-84), new Point2(-1,-96), new Point2(-2,-106), new Point2(-3,-114), new Point2(-4,-122), new Point2(-4,-129), new Point2(-5,-135), new Point2(-5,-140), new Point2(-5,-144), new Point2(-5,-148), new Point2(-5,-150), new Point2(-5,-152), new Point2(-5,-154), new Point2(-5,-156), new Point2(-5,-158), new Point2(-5,-160), new Point2(-5,-162), new Point2(-5,-164), new Point2(-5,-166), new Point2(-5,-168), new Point2(-5,-169), new Point2(-5,-170), new Point2(-5,-171), new Point2(-3,-171), new Point2(0,-172), new Point2(4,-172), new Point2(9,-172), new Point2(14,-172), new Point2(20,-173), new Point2(26,-174), new Point2(33,-174), new Point2(42,-175), new Point2(51,-176), new Point2(60,-176), new Point2(69,-176), new Point2(80,-176), new Point2(89,-177), new Point2(101,-177), new Point2(111,-178), new Point2(122,-178), new Point2(133,-178), new Point2(141,-179), new Point2(153,-179), new Point2(161,-180), new Point2(169,-181), new Point2(177,-182), new Point2(183,-182), new Point2(189,-182), new Point2(193,-182), new Point2(196,-182), new Point2(198,-181), new Point2(200,-177), new Point2(201,-171), new Point2(201,-163), new Point2(202,-152), new Point2(203,-141), new Point2(203,-128), new Point2(203,-116), new Point2(203,-103), new Point2(203,-90), new Point2(204,-78), new Point2(204,-67), new Point2(205,-56), new Point2(206,-47), new Point2(207,-37), new Point2(208,-27), new Point2(209,-20), new Point2(210,-14), new Point2(211,-10), new Point2(212,-7), new Point2(212,-6), new Point2(212,-5)),
	new Array(new Point2(0,0), new Point2(1,-4), new Point2(1,-10), new Point2(1,-16), new Point2(1,-24), new Point2(1,-35), new Point2(1,-47), new Point2(1,-59), new Point2(1,-72), new Point2(1,-85), new Point2(1,-97), new Point2(1,-111), new Point2(1,-123), new Point2(1,-132), new Point2(1,-141), new Point2(1,-148), new Point2(1,-154), new Point2(3,-159), new Point2(4,-163), new Point2(6,-166), new Point2(9,-168), new Point2(12,-170), new Point2(15,-171), new Point2(19,-171), new Point2(24,-171), new Point2(29,-171), new Point2(35,-171), new Point2(42,-172), new Point2(48,-172), new Point2(55,-172), new Point2(64,-172), new Point2(71,-172), new Point2(79,-172), new Point2(88,-173), new Point2(96,-174), new Point2(107,-174), new Point2(115,-175), new Point2(125,-176), new Point2(135,-176), new Point2(144,-176), new Point2(153,-176), new Point2(161,-176), new Point2(168,-176), new Point2(174,-175), new Point2(179,-172), new Point2(183,-168), new Point2(186,-162), new Point2(188,-155), new Point2(189,-145), new Point2(189,-134), new Point2(190,-123), new Point2(190,-111), new Point2(190,-99), new Point2(190,-88), new Point2(190,-76), new Point2(190,-64), new Point2(190,-52), new Point2(190,-42), new Point2(190,-33), new Point2(190,-24), new Point2(190,-16), new Point2(190,-9), new Point2(190,-4)),
	new Array(new Point2(0,0), new Point2(0,-4), new Point2(0,-9), new Point2(0,-15), new Point2(0,-25), new Point2(0,-35), new Point2(0,-48), new Point2(0,-65), new Point2(1,-82), new Point2(1,-99), new Point2(1,-116), new Point2(1,-131), new Point2(1,-143), new Point2(1,-155), new Point2(1,-167), new Point2(2,-175), new Point2(3,-181), new Point2(5,-188), new Point2(8,-192), new Point2(12,-195), new Point2(17,-197), new Point2(25,-199), new Point2(33,-199), new Point2(44,-200), new Point2(55,-200), new Point2(67,-201), new Point2(81,-201), new Point2(97,-202), new Point2(112,-202), new Point2(128,-202), new Point2(141,-202), new Point2(154,-202), new Point2(166,-202), new Point2(175,-200), new Point2(183,-195), new Point2(188,-189), new Point2(192,-179), new Point2(193,-168), new Point2(194,-153), new Point2(194,-138), new Point2(195,-121), new Point2(195,-106), new Point2(195,-93), new Point2(195,-79), new Point2(195,-67), new Point2(195,-56), new Point2(195,-48), new Point2(195,-39), new Point2(196,-32), new Point2(197,-25)),
	);

let arch3 = new Array(
	// right to left
	new Array(new Point2(0,0), new Point2(3,-3), new Point2(3,-7), new Point2(3,-13), new Point2(3,-24), new Point2(3,-40), new Point2(3,-58), new Point2(2,-77), new Point2(1,-95), new Point2(1,-111), new Point2(1,-124), new Point2(0,-138), new Point2(0,-150), new Point2(-1,-159), new Point2(-1,-169), new Point2(-2,-175), new Point2(-3,-181), new Point2(-4,-185), new Point2(-4,-187), new Point2(-5,-188), new Point2(-6,-188), new Point2(-7,-188), new Point2(-8,-188), new Point2(-11,-188), new Point2(-15,-188), new Point2(-20,-188), new Point2(-27,-188), new Point2(-36,-188), new Point2(-48,-188), new Point2(-60,-188), new Point2(-74,-188), new Point2(-90,-188), new Point2(-105,-188), new Point2(-118,-188), new Point2(-132,-187), new Point2(-144,-186), new Point2(-156,-185), new Point2(-165,-185), new Point2(-174,-185), new Point2(-181,-184), new Point2(-186,-183), new Point2(-189,-182), new Point2(-192,-181), new Point2(-194,-178), new Point2(-195,-173), new Point2(-195,-166), new Point2(-195,-156), new Point2(-195,-140), new Point2(-195,-124), new Point2(-195,-106), new Point2(-195,-87), new Point2(-195,-69), new Point2(-195,-53), new Point2(-197,-38), new Point2(-199,-26), new Point2(-200,-14), new Point2(-201,-6), new Point2(-201,0), new Point2(-201,4), new Point2(-201,6)),
	new Array(new Point2(0,0), new Point2(0,-5), new Point2(0,-9), new Point2(0,-14), new Point2(-2,-24), new Point2(-4,-37), new Point2(-5,-55), new Point2(-7,-73), new Point2(-8,-91), new Point2(-10,-109), new Point2(-10,-121), new Point2(-11,-131), new Point2(-12,-138), new Point2(-12,-145), new Point2(-12,-149), new Point2(-12,-150), new Point2(-12,-151), new Point2(-14,-151), new Point2(-16,-151), new Point2(-21,-151), new Point2(-28,-151), new Point2(-38,-151), new Point2(-49,-151), new Point2(-62,-151), new Point2(-75,-151), new Point2(-88,-151), new Point2(-101,-151), new Point2(-113,-151), new Point2(-122,-151), new Point2(-129,-150), new Point2(-136,-148), new Point2(-141,-147), new Point2(-145,-146), new Point2(-147,-146), new Point2(-149,-145), new Point2(-150,-143), new Point2(-150,-139), new Point2(-150,-133), new Point2(-150,-124), new Point2(-150,-108), new Point2(-150,-93), new Point2(-150,-75), new Point2(-150,-58), new Point2(-150,-44), new Point2(-150,-30), new Point2(-150,-21), new Point2(-150,-12)),
	new Array(new Point2(0,0), new Point2(0,-4), new Point2(0,-9), new Point2(0,-16), new Point2(0,-26), new Point2(0,-38), new Point2(0,-52), new Point2(0,-68), new Point2(0,-80), new Point2(-1,-93), new Point2(-2,-106), new Point2(-2,-117), new Point2(-2,-126), new Point2(-2,-135), new Point2(-2,-144), new Point2(-2,-151), new Point2(-2,-158), new Point2(-2,-165), new Point2(-2,-170), new Point2(-2,-175), new Point2(-2,-178), new Point2(-2,-180), new Point2(-4,-182), new Point2(-7,-183), new Point2(-10,-184), new Point2(-15,-185), new Point2(-21,-185), new Point2(-29,-186), new Point2(-37,-188), new Point2(-46,-188), new Point2(-55,-189), new Point2(-65,-190), new Point2(-74,-190), new Point2(-85,-190), new Point2(-94,-190), new Point2(-104,-190), new Point2(-115,-190), new Point2(-123,-190), new Point2(-133,-190), new Point2(-142,-190), new Point2(-149,-190), new Point2(-157,-190), new Point2(-164,-190), new Point2(-170,-190), new Point2(-176,-190), new Point2(-181,-190), new Point2(-185,-190), new Point2(-188,-190), new Point2(-191,-190), new Point2(-193,-188), new Point2(-195,-187), new Point2(-197,-184), new Point2(-197,-180), new Point2(-198,-176), new Point2(-198,-169), new Point2(-198,-163), new Point2(-198,-154), new Point2(-198,-146), new Point2(-198,-138), new Point2(-198,-130), new Point2(-198,-121), new Point2(-198,-113), new Point2(-198,-105), new Point2(-198,-95), new Point2(-198,-86), new Point2(-198,-77), new Point2(-198,-69), new Point2(-198,-61), new Point2(-198,-54), new Point2(-198,-46), new Point2(-198,-38), new Point2(-198,-32), new Point2(-198,-25), new Point2(-198,-19), new Point2(-198,-13), new Point2(-198,-8), new Point2(-198,-1), new Point2(-198,5), new Point2(-198,10), new Point2(-198,14)),
	new Array(new Point2(0,0), new Point2(3,-12), new Point2(3,-26), new Point2(3,-51), new Point2(2,-75), new Point2(1,-93), new Point2(-1,-106), new Point2(-2,-113), new Point2(-3,-117), new Point2(-4,-120), new Point2(-8,-120), new Point2(-14,-120), new Point2(-25,-120), new Point2(-37,-120), new Point2(-54,-120), new Point2(-71,-120), new Point2(-90,-120), new Point2(-109,-120), new Point2(-126,-120), new Point2(-139,-120), new Point2(-149,-119), new Point2(-156,-116), new Point2(-162,-110), new Point2(-164,-98), new Point2(-165,-81), new Point2(-165,-64), new Point2(-165,-46), new Point2(-165,-34), new Point2(-165,-20)),
	new Array(new Point2(0,0), new Point2(2,-18), new Point2(2,-39), new Point2(0,-63), new Point2(-2,-87), new Point2(-4,-105), new Point2(-7,-123), new Point2(-9,-133), new Point2(-11,-138), new Point2(-15,-140), new Point2(-22,-140), new Point2(-32,-140), new Point2(-47,-140), new Point2(-64,-140), new Point2(-82,-140), new Point2(-101,-140), new Point2(-118,-140), new Point2(-135,-140), new Point2(-146,-140), new Point2(-155,-140), new Point2(-163,-135), new Point2(-168,-126), new Point2(-171,-111), new Point2(-172,-93), new Point2(-172,-73), new Point2(-172,-55), new Point2(-172,-37), new Point2(-171,-25)),
	new Array(new Point2(0,0), new Point2(2,-9), new Point2(2,-17), new Point2(2,-28), new Point2(2,-45), new Point2(2,-63), new Point2(2,-86), new Point2(1,-107), new Point2(-1,-127), new Point2(-2,-144), new Point2(-4,-161), new Point2(-4,-174), new Point2(-5,-187), new Point2(-5,-197), new Point2(-6,-205), new Point2(-7,-212), new Point2(-8,-217), new Point2(-11,-220), new Point2(-15,-222), new Point2(-22,-223), new Point2(-32,-224), new Point2(-44,-225), new Point2(-60,-226), new Point2(-75,-227), new Point2(-91,-227), new Point2(-107,-227), new Point2(-122,-227), new Point2(-137,-227), new Point2(-149,-227), new Point2(-160,-227), new Point2(-169,-227), new Point2(-176,-227), new Point2(-181,-227), new Point2(-185,-227), new Point2(-188,-225), new Point2(-188,-220), new Point2(-188,-211), new Point2(-188,-199), new Point2(-186,-183), new Point2(-185,-166), new Point2(-184,-147), new Point2(-184,-124), new Point2(-184,-102), new Point2(-184,-80), new Point2(-185,-63), new Point2(-187,-49), new Point2(-187,-33)),
	new Array(new Point2(0,0), new Point2(0,-6), new Point2(0,-13), new Point2(0,-22), new Point2(1,-33), new Point2(2,-48), new Point2(2,-63), new Point2(2,-81), new Point2(2,-100), new Point2(2,-119), new Point2(2,-139), new Point2(2,-157), new Point2(2,-174), new Point2(3,-190), new Point2(3,-202), new Point2(3,-214), new Point2(4,-222), new Point2(4,-229), new Point2(4,-234), new Point2(4,-238), new Point2(4,-240), new Point2(4,-241), new Point2(2,-241), new Point2(0,-242), new Point2(-3,-242), new Point2(-8,-243), new Point2(-14,-244), new Point2(-23,-244), new Point2(-33,-245), new Point2(-44,-246), new Point2(-58,-247), new Point2(-72,-248), new Point2(-88,-248), new Point2(-101,-248), new Point2(-114,-248), new Point2(-127,-248), new Point2(-136,-248), new Point2(-146,-248), new Point2(-152,-246), new Point2(-159,-244), new Point2(-163,-243), new Point2(-167,-241), new Point2(-169,-239), new Point2(-171,-234), new Point2(-173,-227), new Point2(-173,-217), new Point2(-173,-204), new Point2(-173,-187), new Point2(-173,-169), new Point2(-173,-150), new Point2(-173,-128), new Point2(-173,-106), new Point2(-174,-88), new Point2(-176,-69), new Point2(-177,-53), new Point2(-178,-40), new Point2(-178,-25), new Point2(-178,-14), new Point2(-178,-3)),
	new Array(new Point2(0,0), new Point2(0,-9), new Point2(0,-20), new Point2(0,-33), new Point2(0,-49), new Point2(0,-65), new Point2(0,-82), new Point2(0,-101), new Point2(0,-119), new Point2(0,-136), new Point2(-1,-149), new Point2(-2,-162), new Point2(-4,-173), new Point2(-6,-182), new Point2(-8,-191), new Point2(-10,-199), new Point2(-12,-204), new Point2(-14,-209), new Point2(-17,-213), new Point2(-20,-215), new Point2(-25,-218), new Point2(-30,-219), new Point2(-38,-221), new Point2(-47,-222), new Point2(-59,-223), new Point2(-71,-223), new Point2(-84,-224), new Point2(-97,-225), new Point2(-111,-226), new Point2(-123,-226), new Point2(-137,-226), new Point2(-149,-226), new Point2(-160,-226), new Point2(-170,-226), new Point2(-181,-225), new Point2(-189,-222), new Point2(-197,-218), new Point2(-203,-213), new Point2(-208,-206), new Point2(-211,-196), new Point2(-214,-184), new Point2(-216,-169), new Point2(-217,-152), new Point2(-218,-134), new Point2(-220,-116), new Point2(-222,-97), new Point2(-223,-79), new Point2(-224,-62), new Point2(-226,-44), new Point2(-226,-25), new Point2(-226,-9), new Point2(-227,7)),
	new Array(new Point2(0,0), new Point2(0,-9), new Point2(0,-18), new Point2(1,-29), new Point2(3,-41), new Point2(5,-55), new Point2(7,-71), new Point2(9,-89), new Point2(10,-107), new Point2(12,-125), new Point2(14,-142), new Point2(14,-159), new Point2(15,-174), new Point2(15,-187), new Point2(15,-199), new Point2(15,-207), new Point2(15,-213), new Point2(15,-217), new Point2(13,-220), new Point2(10,-222), new Point2(4,-224), new Point2(-4,-225), new Point2(-15,-227), new Point2(-26,-228), new Point2(-41,-230), new Point2(-56,-231), new Point2(-71,-233), new Point2(-87,-234), new Point2(-102,-234), new Point2(-117,-235), new Point2(-129,-235), new Point2(-142,-235), new Point2(-151,-235), new Point2(-160,-234), new Point2(-165,-232), new Point2(-172,-227), new Point2(-175,-220), new Point2(-178,-210), new Point2(-180,-197), new Point2(-182,-179), new Point2(-183,-160), new Point2(-184,-141), new Point2(-186,-118), new Point2(-188,-96), new Point2(-188,-78), new Point2(-189,-58), new Point2(-191,-41)),
	new Array(new Point2(0,0), new Point2(0,-10), new Point2(0,-21), new Point2(0,-36), new Point2(0,-53), new Point2(0,-71), new Point2(0,-90), new Point2(0,-109), new Point2(0,-127), new Point2(0,-144), new Point2(-1,-161), new Point2(-3,-173), new Point2(-4,-186), new Point2(-5,-194), new Point2(-6,-203), new Point2(-6,-210), new Point2(-7,-217), new Point2(-8,-225), new Point2(-9,-230), new Point2(-10,-236), new Point2(-11,-241), new Point2(-14,-245), new Point2(-18,-247), new Point2(-22,-248), new Point2(-27,-250), new Point2(-35,-251), new Point2(-44,-251), new Point2(-53,-251), new Point2(-65,-251), new Point2(-76,-251), new Point2(-88,-251), new Point2(-100,-251), new Point2(-111,-252), new Point2(-122,-252), new Point2(-131,-252), new Point2(-140,-252), new Point2(-149,-252), new Point2(-157,-252), new Point2(-163,-252), new Point2(-169,-250), new Point2(-174,-247), new Point2(-178,-244), new Point2(-181,-239), new Point2(-183,-232), new Point2(-184,-223), new Point2(-184,-212), new Point2(-184,-200), new Point2(-184,-187), new Point2(-184,-171), new Point2(-184,-155), new Point2(-184,-138), new Point2(-184,-120), new Point2(-184,-105), new Point2(-184,-89), new Point2(-184,-77), new Point2(-184,-60), new Point2(-184,-48), new Point2(-184,-32), new Point2(-184,-20), new Point2(-184,-7))
	);

//
// Point class
//
function spitPoints(points){
	retStr = "[";
	points.forEach(function(point) {
		retStr += "("+point.X+","+point.Y+")"+",";
	})
	retStr.slice(0, -1);
	retStr += "]";
	console.log(retStr)
}

//
// frechet's distance

function frechetHelper(ca, i, j, P, Q){
	if (ca[i][j] > -1){		
		return ca[i][j];
	}
	else if (i==0 && j==0){		
		ca[i][j] = Distance(P[0],Q[0]);
	}
	else if (i>0 && j==0){	
		ca[i][j] = Math.max(frechetHelper(ca,i-1,0,P,Q),Distance(P[i],Q[0]));
	}
	else if (i==0 && j>0){
		ca[i][j] = Math.max(frechetHelper(ca,0,j-1,P,Q),Distance(P[0],Q[j]));
	}
	else if (i>0 && j>0){	
		ca[i][j] = Math.max(Math.min(frechetHelper(ca,i-1,j,P,Q),frechetHelper(ca,i-1,j-1,P,Q),frechetHelper(ca,i,j-1,P,Q)),Distance(P[i],Q[j]));
	}
	else{		
		ca[i][j] = Infinity;
	}
	return ca[i][j]
}

function frechetDistance(points1, points2){
	l1 = points1.length;
	l2 = points2.length;
	ca = [...Array(l1)].map(e => Array.apply(null, Array(l2)).map(Number.prototype.valueOf,-1));
	return frechetHelper(ca, l1-1, l2-1, points1, points2);
}

function Point2(x, y, timestamp) // constructor
{
	this.X = x;
	this.Y = y;
	this.time = timestamp;
}

// scaling function:
const SquareSize = 500.0;
const Origin = new Point2(0,0);

// Rectangle class
function Rectangle(x, y, width, height) // constructor
{
	this.X = x;
	this.Y = y;
	this.Width = width;
	this.Height = height;
}
function BoundingBox(points)
{
	var minX = +Infinity, maxX = -Infinity, minY = +Infinity, maxY = -Infinity;
	for (var i = 0; i < points.length; i++) {
		minX = Math.min(minX, points[i].X);
		minY = Math.min(minY, points[i].Y);
		maxX = Math.max(maxX, points[i].X);
		maxY = Math.max(maxY, points[i].Y);
	}
	return new Rectangle(minX, minY, maxX - minX, maxY - minY);
}

function Centroid(points)
{
	var x = 0.0, y = 0.0;
	for (var i = 0; i < points.length; i++) {
		x += points[i].X;
		y += points[i].Y;
	}
	x /= points.length;
	y /= points.length;
	return new Point2(x, y);
}

function Resample(points, n)
{
	var I = PathLength(points) / (n - 1); // interval length
	var D = 0.0;
	var newpoints = new Array(points[0]);
	for (var i = 1; i < points.length; i++)
	{
		var d = Distance(points[i-1], points[i]);
		if ((D + d) >= I)
		{
			var qx = points[i-1].X + ((I - D) / d) * (points[i].X - points[i-1].X);
			var qy = points[i-1].Y + ((I - D) / d) * (points[i].Y - points[i-1].Y);
			var q = new Point2(qx, qy);
			newpoints[newpoints.length] = q; // append new point 'q'
			points.splice(i, 0, q); // insert 'q' at position i in points s.t. 'q' will be the next i
			D = 0.0;
		}
		else D += d;
	}
	if (newpoints.length == n - 1) // somtimes we fall a rounding-error short of adding the last point, so add it if so
		newpoints[newpoints.length] = new Point(points[points.length - 1].X, points[points.length - 1].Y);
	return newpoints;
}

function IndicativeAngle(points)
{
	var c = Centroid(points);
	return Math.atan2(c.Y - points[0].Y, c.X - points[0].X);
}

function RotateBy(points, radians) // rotates points around centroid
{
	var c = Centroid(points);
	var cos = Math.cos(radians);
	var sin = Math.sin(radians);
	var newpoints = new Array();
	for (var i = 0; i < points.length; i++) {
		var qx = (points[i].X - c.X) * cos - (points[i].Y - c.Y) * sin + c.X
		var qy = (points[i].X - c.X) * sin + (points[i].Y - c.Y) * cos + c.Y;
		newpoints[newpoints.length] = new Point2(qx, qy);
	}
	return newpoints;
}

function ScaleTo(points, size) // non-uniform scale; assumes 2D gestures (i.e., no lines)
{
	var B = BoundingBox(points);
	if (B.Width == 0){
		B.Width = 1;
	}
	if (B.Height == 0){
		B.Height = 1;
	}
	var newpoints = new Array();
	for (var i = 0; i < points.length; i++) {
		var qx = points[i].X * (size / B.Width);
		var qy = points[i].Y * (size / B.Height);
		newpoints[newpoints.length] = new Point2(qx, qy);
	}
	return newpoints;
}

function TranslateTo(points, pt) // translates points' centroid
{
	var c = Centroid(points);
	var newpoints = new Array();
	for (var i = 0; i < points.length; i++) {
		var qx = points[i].X + pt.X - c.X;
		var qy = points[i].Y + pt.Y - c.Y;
		newpoints[newpoints.length] = new Point2(qx, qy);
	}
	return newpoints;
}

function normalize(points){
	newpoints = Resample(points, 200);		
	newpoints = TranslateTo(newpoints, Origin);
	newpoints = resize(newpoints, SquareSize);
	// let radians = IndicativeAngle(points);
	// points = RotateBy(points, -radians);
	return newpoints
}


function PathDistance(pts1, pts2)
{
	var d = 0.0;
	for (var i = 0; i < pts1.length; i++) // assumes pts1.length == pts2.length
		d += Distance(pts1[i], pts2[i]);
	return d / pts1.length;
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
// function Deg2Rad(d) { return (d * Math.PI / 180.0); }

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

// helper function for f9
function getAngle(p1, p2, p3) 
{
	let dxp1 = p3.X - p2.X;
	let dyp1 = p3.Y - p2.Y;
	let dxp0 = p2.X - p1.X;
	let dyp0 = p2.Y - p1.Y;
	return Math.atan((dxp1*dyp0 - dxp0*dyp1) / (dxp1*dxp0 + dyp1*dyp0 + 0.01)); // adding 0.01 to avoid dividing by 0 and getting NaN
}

function getHeight(points)
{
	var minY = +Infinity, maxY = -Infinity;
	for (var i = 0; i < points.length; i++) {
		minY = Math.min(minY, points[i].Y);
		maxY = Math.max(maxY, points[i].Y);
	}
	return (maxY-minY);
}

function getWidth(points)
{
	var minX = +Infinity, maxX = -Infinity;
	for (var i = 0; i < points.length; i++) {
		minX = Math.min(minX, points[i].X);
		maxX = Math.max(maxX, points[i].X);
	}
	return (maxX-minX);
}



function resize(points, size){
	var minX = +Infinity, maxX = -Infinity, minY = +Infinity, maxY = -Infinity;
	for (var i = 0; i < points.length; i++) {
		minX = Math.min(minX, points[i].X);
		minY = Math.min(minY, points[i].Y);
		maxX = Math.max(maxX, points[i].X);
		maxY = Math.max(maxY, points[i].Y);
	}
	p1 = new Point2(minX, minY);
	p2 = new Point2(maxX, maxY);
	diag = Distance(p1,p2);

	fact = size/diag;
	points.forEach(point => {
		point.X = point.X * fact;
		point.Y = point.Y * fact;
	});
	return points
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
	p1 = new Point2(minX, minY);
	p2 = new Point2(maxX, maxY);
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
	p1 = new Point2(minX, minY);
	p2 = new Point2(maxX, maxY);
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
	constructor(){
		this._numClasses = 0;
		this._classNames = new Array();
		this._gestureClasses = new Array();
		this._meanTrainGesture = new Array();

		this._invComCovMatrix = new Array();
		this._avgFeatures = new Array();
		this._weight0sofAllVectors = new Array();
		this._featureWeightsForClasses = new Array();	
		
		this._weight0sofAllVectors = new Array();
		this._featureWeightsForClasses = new Array();
// 
		this.addGesture("line", line2);
		this.addGesture("carat", carat2);
		this.addGesture("circle", circle2);
		this.addGesture("arch", arch2);		
		this.addGesture("line2", line3);
		this.addGesture("carat2", carat3);
		this.addGesture("circle2", circle3);
		this.addGesture("arch2", arch3);
	}

	train(){
		for (let i=0; i<this._numClasses; i++){
			this._avgFeatures.push(getAvgFeatureVectorForClass(this._gestureClasses[i]))
		}

		this._invComCovMatrix = math.inv(getCommonCovarianceMatrix(this._gestureClasses));
		this._weight0sofAllVectors = getWeight0s(this._gestureClasses);
		this._featureWeightsForClasses = getFeatureWeightsForClasses(this._gestureClasses);
	}
	
	addGesture(className, gestureClass){
		let trainingGesures = new Array();
		gestureClass.forEach(points => {
			trainingGesures.push(normalize(points))
		});	

		this._classNames.push(className);
		this._gestureClasses.push(trainingGesures);
		this._numClasses += 1;
		this.train();
	}

	removeGesture(className){
		let index = this._classNames.indexOf(className);
		this.className.splice(index, 1);
		this._gestureClasses.splice(index, 1);
		this.train();
	}

	classifyGesture(points){
		points =  normalize(points)
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
		console.log(weightEval)
		let classificationProb = this.getClassificationProb(weightEval);
		console.log("P ::: ", classificationProb);
		this.getMahalanobisDistance(maxIndex, featureVector);
		console.log("FD::: ", frechetDistance(points, this._gestureClasses[maxIndex][0]));
		console.log("Line ::: ", frechetDistance(points, normalize(line2[0])))
		console.log("Circle ::: ", frechetDistance(points, normalize(circle2[0])))
		console.log("Carat ::: ", frechetDistance(points, normalize(carat2[0])))
		console.log("Arch ::: ", frechetDistance(points, normalize(arch2[0])))
		return this._classNames[maxIndex]

	}

	getClassificationProb(weights){
		let max = Math.max.apply(Math, weights);
		let maxWeightIndex = weights.indexOf(max);
		let sum = 0;
		for (let i=0; i<this._numClasses; i++){
			sum += Math.exp(weights[i] - max);
		}
		return (1/sum);
	}

	getMahalanobisDistance(classIndex, featureVector){
		let averageFeatures = this._avgFeatures[classIndex];
		let sum = 0
		for (let j=0; j<NUM_FEATURES; j++){
			for (let k=0; k<NUM_FEATURES; k++){
				sum += this._invComCovMatrix[j][k] * (featureVector[j] - averageFeatures[j]) * (featureVector[k] - averageFeatures[k]);
			}
		}
		console.log ("Mahalanobis Dist :  ", sum, "1/2 F2 : ", (1/2)*NUM_FEATURES*NUM_FEATURES);
		return sum;
	}
};

module.exports = gestureRecognizer;

let myGestureClass = new gestureRecognizer();

let points = new Array(new Point2(0,0),new Point2(28,-71),new Point2(135,-150),new Point2(187,-134),new Point2(207,-109),new Point2(219,-73),new Point2(215,28));

let lineTest1 = new Array(new Point2(0, 0), new Point2(-2, -16), new Point2(-7, -41), new Point2(-11, -72), new Point2(-12, -125), new Point2(-6, -184), new Point2(0, -234), new Point2(2, -267), new Point2(2, -283));
let lineTest2 = new Array(new Point2(0, 0), new Point2(-1, 2), new Point2(-3, 9), new Point2(-5, 20), new Point2(-6, 43), new Point2(-9, 69), new Point2(-11, 88), new Point2(-16, 107), new Point2(-19, 115), new Point2(-19, 117), new Point2(-19, 123), new Point2(-15, 135), new Point2(-14, 144), new Point2(-14, 147), new Point2(-12, 152));


let caratTest1 = new Array(new Point2(0,0),new Point2(2,-3),new Point2(6,-12),new Point2(26,-51),new Point2(74,-133),new Point2(83,-151),new Point2(86,-154),new Point2(87,-154),new Point2(88,-154),new Point2(94,-151),new Point2(111,-143),new Point2(137,-130),new Point2(157,-116),new Point2(175,-91),new Point2(187,-68),new Point2(195,-47),new Point2(201,-32),new Point2(204,-17),new Point2(205,-7),new Point2(206,-3),new Point2(206,-1),new Point2(206,0),new Point2(206,1));
let caratTest2 = new Array(new Point2(0,0),new Point2(-5,-6),new Point2(-17,-17),new Point2(-56,-60),new Point2(-78,-87),new Point2(-109,-109),new Point2(-115,-108),new Point2(-129,-101),new Point2(-155,-80),new Point2(-182,-50),new Point2(-199,-22),new Point2(-209,-1),new Point2(-214,12),new Point2(-218,20));


let circleTest1 = new Array(new Point2(0,0),new Point2(-21,-5),new Point2(-75,-20),new Point2(-107,-34),new Point2(-133,-47),new Point2(-155,-62),new Point2(-175,-76),new Point2(-197,-102),new Point2(-217,-130),new Point2(-223,-148),new Point2(-222,-160),new Point2(-215,-175),new Point2(-198,-196),new Point2(-166,-220),new Point2(-114,-243),new Point2(-62,-255),new Point2(-38,-256),new Point2(-28,-250),new Point2(-17,-238),new Point2(-7,-223),new Point2(1,-204),new Point2(14,-181),new Point2(23,-150),new Point2(28,-119),new Point2(25,-88),new Point2(20,-70),new Point2(11,-55),new Point2(-4,-38),new Point2(-20,-25),new Point2(-36,-18),new Point2(-49,-14));
let circleTest2 = new Array(new Point2(0,0),new Point2(-5,0),new Point2(-12,1),new Point2(-18,3),new Point2(-24,5),new Point2(-40,9),new Point2(-52,10),new Point2(-88,3),new Point2(-98,-4),new Point2(-107,-14),new Point2(-117,-29),new Point2(-127,-51),new Point2(-139,-73),new Point2(-149,-91),new Point2(-156,-106),new Point2(-163,-119),new Point2(-166,-132),new Point2(-166,-146),new Point2(-164,-159),new Point2(-160,-174),new Point2(-156,-184),new Point2(-149,-196),new Point2(-138,-208),new Point2(-121,-222),new Point2(-103,-235),new Point2(-88,-243),new Point2(-76,-250),new Point2(-62,-254),new Point2(-46,-257),new Point2(-28,-259),new Point2(-11,-259),new Point2(4,-257),new Point2(15,-254),new Point2(27,-248),new Point2(36,-240),new Point2(46,-231),new Point2(54,-222),new Point2(62,-209),new Point2(67,-199),new Point2(71,-190),new Point2(74,-181),new Point2(76,-170),new Point2(79,-159),new Point2(79,-145),new Point2(79,-131),new Point2(77,-116),new Point2(74,-101),new Point2(68,-86),new Point2(61,-71),new Point2(55,-59),new Point2(51,-47),new Point2(46,-38),new Point2(39,-30),new Point2(33,-24),new Point2(26,-19),new Point2(19,-15),new Point2(12,-12),new Point2(5,-8),new Point2(1,-6),new Point2(-3,-5),new Point2(-9,-5),new Point2(-14,-4),new Point2(-17,-4));

let archTest1 = new Array(new Point2(0,0),new Point2(-3,-18),new Point2(-11,-40),new Point2(-23,-79),new Point2(-40,-122),new Point2(-49,-158),new Point2(-55,-188),new Point2(-56,-210),new Point2(-56,-224),new Point2(-53,-231),new Point2(-51,-238),new Point2(-46,-248),new Point2(-39,-263),new Point2(-23,-278),new Point2(-3,-292),new Point2(24,-304),new Point2(57,-317),new Point2(94,-327),new Point2(116,-331),new Point2(127,-331),new Point2(137,-330),new Point2(148,-328),new Point2(160,-321),new Point2(173,-314),new Point2(181,-305),new Point2(191,-289),new Point2(199,-268),new Point2(208,-242),new Point2(215,-211),new Point2(219,-183),new Point2(219,-155),new Point2(218,-133),new Point2(217,-118),new Point2(216,-106),new Point2(215,-100),new Point2(215,-95),new Point2(215,-91),new Point2(214,-90));
let archTest2 = new Array(new Point2(0,0),new Point2(-1,-2),new Point2(-2,-7),new Point2(-2,-21),new Point2(-5,-96),new Point2(-8,-130),new Point2(-10,-149),new Point2(-10,-162),new Point2(-11,-171),new Point2(-9,-175),new Point2(-8,-179),new Point2(-8,-180),new Point2(-7,-182),new Point2(-7,-183),new Point2(-6,-183),new Point2(-5,-183),new Point2(0,-184),new Point2(33,-195),new Point2(114,-216),new Point2(153,-223),new Point2(168,-226),new Point2(177,-227),new Point2(180,-228),new Point2(180,-227),new Point2(179,-227),new Point2(178,-226),new Point2(177,-226),new Point2(176,-225),new Point2(176,-224),new Point2(175,-222),new Point2(175,-217),new Point2(175,-188),new Point2(177,-154),new Point2(181,-103),new Point2(183,-45),new Point2(177,-6),new Point2(179,11),new Point2(179,23),new Point2(180,31),new Point2(180,33),new Point2(180,35),new Point2(181,38),new Point2(181,39),new Point2(182,40),new Point2(182,41));

let circleTest3 = new Array(new Point2(0,0),new Point2(-16,1),new Point2(-35,10),new Point2(-56,28),new Point2(-72,51),new Point2(-83,77),new Point2(-86,106),new Point2(-86,141),new Point2(-81,166),new Point2(-69,190),new Point2(-52,208),new Point2(-30,221),new Point2(-4,226),new Point2(25,226),new Point2(57,217),new Point2(84,199),new Point2(107,176),new Point2(128,149),new Point2(142,127),new Point2(151,100),new Point2(151,67),new Point2(141,38),new Point2(126,17),new Point2(99,-4),new Point2(74,-14),new Point2(45,-15),new Point2(19,-15))

let badArch = new Array(new Point2(0,0),new Point2(0,-3),new Point2(2,-9),new Point2(5,-14),new Point2(8,-20),new Point2(11,-25),new Point2(14,-33),new Point2(17,-40),new Point2(18,-46),new Point2(21,-54),new Point2(22,-62),new Point2(24,-70),new Point2(26,-78),new Point2(28,-88),new Point2(30,-97),new Point2(32,-107),new Point2(34,-115),new Point2(36,-124),new Point2(37,-130),new Point2(40,-139),new Point2(42,-147),new Point2(45,-153),new Point2(48,-164),new Point2(50,-171),new Point2(54,-181),new Point2(56,-188),new Point2(58,-196),new Point2(61,-204),new Point2(64,-210),new Point2(68,-218),new Point2(71,-224),new Point2(74,-229),new Point2(76,-234),new Point2(78,-237),new Point2(80,-239),new Point2(82,-241),new Point2(84,-243),new Point2(86,-243),new Point2(89,-244),new Point2(93,-245),new Point2(96,-245),new Point2(100,-245),new Point2(104,-245),new Point2(109,-245),new Point2(114,-245),new Point2(120,-245),new Point2(126,-245),new Point2(131,-245),new Point2(137,-245),new Point2(142,-244),new Point2(148,-243),new Point2(154,-243),new Point2(161,-242),new Point2(167,-242),new Point2(173,-242),new Point2(178,-242),new Point2(182,-242),new Point2(185,-242),new Point2(187,-242),new Point2(188,-242),new Point2(189,-243),new Point2(190,-243),new Point2(191,-242),new Point2(192,-241),new Point2(194,-240),new Point2(195,-238),new Point2(197,-237),new Point2(199,-234),new Point2(201,-232),new Point2(203,-228),new Point2(204,-225),new Point2(206,-223),new Point2(207,-220),new Point2(208,-216),new Point2(210,-213),new Point2(212,-209),new Point2(215,-205),new Point2(218,-200),new Point2(222,-193),new Point2(226,-186),new Point2(230,-178),new Point2(234,-170),new Point2(238,-160),new Point2(241,-152),new Point2(245,-143),new Point2(248,-134),new Point2(252,-126),new Point2(256,-118),new Point2(259,-111),new Point2(262,-103),new Point2(265,-92),new Point2(268,-80),new Point2(272,-69),new Point2(276,-58),new Point2(279,-50),new Point2(282,-41),new Point2(285,-33),new Point2(288,-28),new Point2(291,-23),new Point2(293,-19),new Point2(295,-15),new Point2(296,-10),new Point2(297,-7),new Point2(297,-3),new Point2(298,-3),new Point2(298,-1),new Point2(298,0))

// console.log(myGestureClass.classifyGesture(points));

console.log(myGestureClass.classifyGesture(lineTest2));

// console.log(myGestureClass.classifyGesture(lineTest2));

// console.log(myGestureClass.classifyGesture(caratTest1));
// console.log(myGestureClass.classifyGesture(caratTest2));

// console.log(myGestureClass.classifyGesture(circleTest1));
// console.log(myGestureClass.classifyGesture(circleTest2));

// console.log(myGestureClass.classifyGesture(archTest1)); // gets classified as carat
// console.log(myGestureClass.classifyGesture(archTest2));

// console.log(myGestureClass.classifyGesture(circleTest3));
// console.log(myGestureClass.classifyGesture(badArch));

// console.log(myGestureClass.classifyGesture(arch2[1]));

// p1 = new Array(new Point2(1,3), new Point2(3,5), new Point2(2,4));
// p2 = new Array(new Point2(7,8), new Point2(1,4), new Point2(2,3));

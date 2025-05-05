function overworldFunction() {
    document.getElementById("info").innerHTML= 
    /* Intro */"There are 54 different biomes in the Overworld compared to the Nether's and End's 5 biomes each, so biomes are grouped generally by biome type. Any specific information for a biome includes their name." +
    /* Forest Biomes */"<h3>Forest Biomes</h3><img src=./Images/paleGarden.png alt='pale garden, dark oak forest and jungle' style='float:right'>" +
    "<p>The trees with the gray leaves in the picture to the right is a pale garden. Pale oak trees are only found in this biome, along with pale moss, hanging moss and eyeblossoms. "+
    "At night creakings spawn and attack any player not looking at them.</p>"+
    "Immediately surrounding the pale garden is a dark oak forest. These trees are also only found in this biome. " +
    "The leaves of the trees cover a lot of the sky when a player is on the ground, making it so mobs can spawn in a few very dark places."+
    "<p>The tall trees in the back of the picture are from one of the 3 jungle biomes, jungle, sparse jungle and bamboo jungle. " +
    "In all of these biomes jungle trees generate as the main tree, with normal oak trees also occasionally generating in jungles</p>" +
    "<p>Not pictured are a few biomes, including birch forest, old growth birch forest, forest, flower forest, taiga, old growth pine taiga, old growth spruce taiga, snowy taiga and old growth snowy taiga."+
    "The difference between the regular forests and the old growth forests is that in the old growth forests the trees will be taller and will have thicker trunks if it is a taiga biome. " +
    "The two birch forest varients are populated with only birch trees and some flower patches. The forest and flower forest will generate with more trees being oak trees than birch trees. " +
    "While flowers can generate here, there will be more flowers and more varities of flowers in the flower grove. " +
    "Finally, in all of the taiga biomes, spruce trees will be the only tree to generate. " +
    "Only grass will generate on the ground in normal taigas, whereas in old growth taigas it will be a mix between grass, podzl and sometimes corse dirt.</p>" +
    /* Mountainous Biomes */"<h3>Mountainous biomes</h3><img src=./Images/cherryGrove.png alt='cherry grove' style='float:left'>" +
    "<p>Pictured to the left is a cherry grove. This is the only place cherry trees and pink petals spawn. You can also find patches of poppies and dandelions." +
    "There are a few other mountainous biomes that don't have snow, including meadows, windswept hills, windswept gravelly hills, windswept forest and stony peaks." +
    "Meadows are located on top of mountains, have barely any trees and a variety of flowers. Windswept hills are similar, but with less flowers. " +
    "Windswept forests have more trees and are part of the side of and right next to mountains. They can sometimes have floating islands. " +
    "Windswept gravelly hills look like a mixture of windswept hills and stony peaks. It has grass, stone and gravel patches for ground with few trees. " +
    "Stony peaks are entirely stone and can have a few stripes of calcite and exposed ores spawn on top of them. No passive mobs spawn on stony peaks and no snow accumulates in this biome.</p>"+
    "<p>There are also snow-covered mountainous biomes, which consist of grove, snowy slopes, jagged peaks and frozen peaks. All of them are covered with snow blocks. " +
    "Grove is the only snowy mountain biome to have trees, spruce trees specifically, all other snowy mountain biomes don't have any trees. "+
    "Snowy slopes have mountains with softer summits than the jagged peaks biome. Snowy slopes and grove are the only 2 biomes to generate powdered snow." +
    "Jagged peaks and frozen peaks both have sharper and harder-to-traverse mountains, though the main difference between the two biomes is that frozen peaks also naturally generates with large patches of ice while jagged peaks does not.</p>"+
    /* Desert & Savanna Biomes */"<h3>Desert & Savanna Biomes</h3><img src=./Images/desertBadlandsAndSavanna.avif alt='mangrove swamp' style='float:right'>" +
    "<p>The desert biome is made up of entirely regular, yellow sand on the surface, with a few layers of sandstone below it before the regular stone. Scattered around on top of the sand are dead bushes, cacti and dry grass. " +
    "Villages that spawn in deserts will spawn with camels as well. The only trees that can be found in this biome are azalea trees if there is a lush cave beneth the sand.</p>" +
    "<p>The badlands and eroded badlands contain orange stand and orange standstone in place of yellow sand and sandstone. " +
    "These biomes contain the same sparse foliage as a regular desert, though the higher boints and mountains in these badland biomes replace the sand and sandstone with different colors of terracota. " +
    "And in both of these biomes, gold is sigifcantly more abundent and can spawn much higher up than in other biomes.</p>"+
    "<p>In the savanna, windswept savanna and savanna plateau, the ground is grass or dirt with acacia (a-kay-sh-a) tree scattered about sparsely. " +
    "A few flower pactches can be found, but no foliage from the desert or badland biomes will be found in savannas</p>"+
    /* Swamp & Beach Biomes */"<h3>Swamp & Beach Biomes</h3><img src=./Images/mangroveSwamp.avif alt='mangrove swamp' style='float:left'>" +
    "<p>Pictured to the left is a mangrove swamp. This and a normal swamp are partially water, partially land. One  difference between the two is that mangrove swamps are the only place mud naturally generates. "+
    "A variation of normal oak trees generate across normal swamp biomes while large mangrove trees generate in mangrove forests. Witch huts can generate in both biomes, and frogs can also spawn in both biomes.</p>"+
    "<p>There are 3 diffrerent beach-like biomes. First is the regular beach biome that generates with sand, rarely a player may find a beached shipwreck here. The second kind of beach is the stony shore biome." +
    "These shores are made up of stone with occasional patches of gravel and dirt, with small clumps of coal and sometimes iron. These can generate right next to mountains so their slopes can vary drasticly compared to both other types of beaches." +
    "The final beach biome is the snowy beach. It is almost identical to the regular beach, but on top of the sand there's a layer or two of snow</p>One final note is that no passive mobs spawn on any of these beaches."+
    /* Ocean Biomes */"<img src=./Images/oceanIsOcean.jpg alt='mr. incredibles 'ocean is ocean' meme' style='float:right;width:200px;height:auto;margin: 0px 15px 50px 15px'><h3>Ocean Biomes</h3>"+
    "<p>There are 9 different ocean biomes: warm ocean, lukewarm ocean, deep lukewarm ocean, ocean, deep ocean, cold ocean, deep cold ocean, frozen ocean and deep cold frozen ocean. " +
    "2 depths for almost all oceans, regular and deep, and 5 different temperatures for all oceans, warm, lukewarm, regular, cold and frozen. " +
    "The major different between deep oceans and regular oceans is that ocean monuemnts can spawn in deep oceans because of the extra depth, whereas they don't spawn in an ocean with a regular depth. "+ 
    "Every temperature varient except warm oceans have a deep ocean counterpart.</p>" +
    "<p>Ice only spawns both frozen oceans varients. Likewise coral spawns only in warm oceans. Kelp only spawns in the varients from frozen oceans to lukewarm oceans whereas sea grass spawns in all ocean biomes.</p>" +
    "<p>Drowned and squid can spawn in all ocean biomes, dolphins can only spawn in variants of warm through temperate ocean biomes. Tropical fish spawn in warm through lukewarm ocean varients.</p>";
    document.getElementById("f").style.height="auto";
}

function netherFunction() {
    document.getElementById("info").innerHTML= 
    /* Intro */"<p>There are 5 biomes in the Nether, each very unique from the others. Below each biome are lava lakes that go to bedrock.</p>" +
    /* Basalt Delta */"<h3>Basalt Delta</h3><img src='./Images/basaltdelta.webp' alt='basalt delta' style=float:left>" +
    "<p>The first one to mention is the 'Basalt Deltas'. Made up of mostly its namesake, basalt in varying heights of pillers. " +
    "There is also a good amount of blackstone, magma blocks and lava scattered throughtout the basalt deltas.</p>" +
    "<p>Quartz ore, neather gold ore and ancient debris all spawn underground in basalt deltas</p>" +
    "<p>Be wary while traversing through here, attempting to mine directly through the basalt could lead to lava pools. " +
    "Traveling through these biomes is recommended to be done with an elytra or by placing blocks.</p><br>" +
    "<p>Magma cubes spawn more frequently in basalt deltas, striders and ghasts also spawn in basalt deltas. Pigmen, piglins and hoglins don't spawn in basalt deltas.</p>" +
    /* Crimson Forest */"<h3>Crimson Forest</h3><img src='./Images/crimsonForest.webp' alt='crimson forest' style=float:right>" +
    "Crimson forests house grown crimson fungi, which are the tree-like plants with red warts for leaves and crimson stems for trunks. " +
    "Hung on the interior of the red warts are shroomlights, and weeping vines hanging from the exterior." +
    "Crimson fungi and occasionally warped fungi can be found on the crimson nylium-covered netherrack. Nither will grow unless bonemealed." +
    "<p>Nether gold ore and quartz ore can be seen exposed on the sides of hills and cliffs, while ancient debris is underground.</p>"+
    "<p>When traveling by foot through a crimson forest, it's recommeded you bring a warped fungis to scare off hoglins. " +
    "A piece of gold armor is also recommended in case a player runs into any piglins.</p>"+
    "<p>The mobs that can spawn here are striders, hoglins, piglins and zombified piglins while all other nether mobs don't spawn here.</p><br>" +
    /* Warped Forest */"<h3>Warped Forest</h3><img src='./Images/warpedForest.webp' alt='warped forest' style=float:left>" +
    "The warped forest is very similar to crimson forests, one key difference is that instead of crimson nylium, crimson stems, crimson warts and weeping vines " +
    "there is warped nylium, warped stems, warped warts and twisting vines. Warped fungis is found much more frequently on the ground than crimson fungis, and it will not grow unless it's bonemealed." +
    "<p>Quartz ore and neather gold ore also spawn on cliffs and visable netherrack on the sides of hills in warped forests.</p>" +
    "Players could for the most part walk through here without any armor or weapons, although that isn't recommended incase they look into the eyes of an enderman. " +
    "It is recommend to bring blocks for traversal of the biome and to aid in keeping hostile enderman away. " +
    "A carved pumpkin is something a player could wear if they don't want to worry about enderaman." +
    "<p>Another key difference is that absolutely no mobs except enderman spawn in warped forests. Hoglings will also actively avoid entering these forests.</p><br>" +
    /* Nether Wastes */"<h3>Nether Wastes</h3><img src='./Images/netherWastes.webp' alt='nether wastes' style=float:right>" +
    "<p>Nether wastes are the most common nether biome and consist almost entirely of netherrack.</p><p>Nether gold ore and quartz ore can be found exposed on the surface, ancient debris is found under the surface.</p>" +
    "<p>All nether mobs barring piglin brutes, blazes, wither skeletons and skeletons can spawn here.</p><br><br><br><br><br><br>" +
    /* Soul Sand Valley */"<h3>Soul Sand Valley</h3><img src='./Images/soulSandValley.webp' alt='soul sand valley' style='float:left;margin: 0px 15px 50px 15px'>"+
    "<p>Soul sand valleys are made up of soul sand and soul soil with the occasional bone block structure.</p>"+
    "<p>No ore spawns directly on the surface of soul sand valleys, it is either on the side of a mountains and pillars or underground.</p><p>Skeletons spawn frequently here, but no other mob spawns here.</p>";
    document.getElementById("f").style.height = "auto";
}

function endFunction() {
    document.getElementById("info").innerHTML= "<p>There surprisingly are 5 biomes in the End, though all End biomes are made up of floating endstone islands.</p>"+
    /* End */"<h3>End (the biome)</h3><img src='./Images/endBiome.webp' alt='end' (the biome) style='float:left;margin:0px 15px 15px 15px'>" +
    "<p>The first one you encounter is called 'The End'. It's the end island a player spawn on. The radius of the end island is roughly 1,000 blocks (meters) and is centered at (0, 0). " +
    "Large obsidian pillers with end crystals generate in a circle formation around the end portal back to the overworld. " +
    "The first time a player enters the ender dragon spawns and the portal home is not activated until the ender dragon is defeated.</p>" +
    /* All other biomes */"</h3><img src='./Images/endAllOtherBiomes.png' alt= 'all other end biomes' style='float:right;margin: 0px 15px 50px 15px'>" +
    "<h3>Small End Islands, End Midlands, End Highlands, End Barrens</h3><p>After using the end gateway to teleport to the further away islands, you will notice there are some very tiny islands clustered around. " +
    "These are the 'Small End Islands'. The larger outer end islands are made up of 3 different biomes each. There's the 'End Barrens' which is the edges of the larger islands. " +
    "There's the 'End Midlands', which is the slope from the hillier parts of a larger island to the edges of it. And finally there's the 'End Highlands', the hilltops of the larger islands. " +
    "The 'End Highlands' is the only place chorus fruit and end cities spawn.</p>";
    document.getElementById("f").style.height = "auto";
}
netherFunction();
function overworldFunction() {
    document.getElementById("info").innerHTML= "stronghold" +
    "<br>ancient city" +
    "<br>pillager outpost" +
    "<br>village" +
    "<br>desert temple" +
    "<br>woodland mansion" +
    "<br>ocean monument" +
    "<br>trial chambers" +
    "<br>trail ruins";
}

function netherFunction() {
    document.getElementById("info").innerHTML= "<p><h3>Bastion Remnents</h3><img src ='/Images/bastionRemnent.jpg' alt='bastion remnent' style='float:right;'>" +
    "Bastion remnants or 'bastions'are found in every nether biome except basalt deltas. They are full of piglins, which can be avoided if a player wears gold. " +
    "Piglin brutes and the occasional hoglin ignore gold and hit very hard, so it's recommended to bring a shield. If a player hits a piglin brute, " +
    "all other piglins will attack the player, so it's also recommended to try to drop piglin brutes in lava or kill them through other indirect ways. "+
    "<br><br>The most notable loot from bastions are snout smithing templates, smithing upgrades, lodestones, pigset music disk, ancient debris, " +
    "ancient debris scrap, diamond armor, diamond tools and a lot of gold.</p>" +
    "<p><h3>Nether Fortress</h3><img src='/Images/netherFortress.jpg' alt='nether fortress' style='float:left'>Nether Fortresses or 'fortresses' are found " +
    "in all nether biomes. Fortresses are the only place wither skeletons and blazes spawn, so a ranged weapon and blocks to stop wither skeletons are recommended. " +
    "</p>" +
    "Nether fossil" +
    "ruined portal";
}

function endFunction() {
    document.getElementById("info").innerHTML= "There is only 1 structure in the End, End Cities. These cities can have enchanted diamond armor, tools and loose diamonds, emeralds, gold and iron." +
    "<br> These cities also have shulks, which can drop shulker shells that can be used to create shulker boxes. If there is a floating boat at the end city, " +
    "<br>then there is an elytra also at the city, which when paired with flight rockets allow you to travel much faster than most modes of transportation.";
}
netherFunction(); /*sets default to overworld*/
function overworldFunction() {
    document.getElementById("info").innerHTML = "stronghold" +
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
    document.getElementById("info").innerHTML =
    /* Bastion Remnent */"<h3>Bastion Remnent</h3><img src ='/Images/bastionRemnent.jpg' alt='bastion remnent' style='float:right;'>" +
        "<p>Bastion remnants or 'bastions'are found in every nether biome except basalt deltas. They are full of piglins, which can be avoided if a player wears gold. " +
        "Piglin brutes and the occasional hoglin ignore gold and hit very hard, so it's recommended to bring a shield. If a player hits a piglin brute, " +
        "all other piglins will attack the player, so it's also recommended to try to drop piglin brutes in lava or kill them through other indirect ways. </p>" +
        "<p>The most notable loot from bastions are snout smithing templates, smithing upgrades, lodestones, pigset music disk, ancient debris, " +
        "ancient debris scrap, diamond armor, diamond tools and a lot of gold.</p>" +
    /* Nether Fortress */"<br><h3>Nether Fortress</h3><img src='/Images/netherFortress.jpg' alt='nether fortress' style='float:left'><p>Nether Fortresses or 'fortresses' are found " +
        "in all nether biomes. Parts of fortresses can be very opened aired, so bringing a bow for ghasts, blazes and skeletons is strongly recommended. Shields are also recommended to block " +
        "the smaller ranged strikes from blazes and for close quarters with wither skeletons. A stack or two of blocks is also recommended for shorting floor-to-ceiling " +
        "height to prevent wither skeletons from getting in melee range</p>" +
        "<p>The most notable loot from fortresses is iron horse armor, gold horse armor, diamond horse armor, saddles, gold, diamonds and rib armor trim template</p>" +
     /* Ruined Portal */"<br><h3>Ruined Portal (Nether)</h3><img src ='/Images/ruinedPortalNether.jpg' alt='ruined portal (nether)' style='float:right;'>" +
        "<p>Ruined Portals in the nether spawn about as frequently as their overworld counterparts. The only difference between this structures between dimensions is " +
        "that in the Nether, the decorative frame is made up of blackstone, whereas Overworld ruined portals have a decorative frame made up of stone. " +
        "Ruined portals are the only structures that generate in more than one dimension, and they spawn in any biome in the nether. In air-pockets they spawn between Y-level 32-100 and in open air they spawn between Y-level 27-100. "+
        "There is a 5% chance a giant ruined portal can spawn instead of a small nether portal.</p>" +
        "<p>Notable loot from ruined portals is gold, golden apples, enchanted golden apples, lodestones, golden carrots, glistering melon slices and bells. If iron or gold nuggets are rolled for loot, they spawn in groups of 9-18 and 4-24 respectfully instead of singularly.</p>" +
    /* Nether Fossil */"<br><img src='/Images/netherFossil.jpg' alt='nether fossil' style='float:left'><h3>Nether Fossil</h3><p>Nether fossils only spawn in soul sand vallies and are solely comprised of bone blocks.</p>" +
    "<p>The only notable loot is the bone blocks from the fossil, and dried ghasts that will be added in a future update.</p>";
    document.getElementById("f").style.height = "175vh";
}

function endFunction() {
    document.getElementById("info").innerHTML = 
        /* End City */"<h3>End City</h3><img src=/Images/endCity.avif alt='end city' style='float:left;width:550px;'>" +
        "<p>There is only one structure in the End, End Cities. End cities are found on the larger, outer islands in the End. Shulkers are the only mob that spawn in end cities, " +
        "though enderman can teleport into end cities. So it's recommended you bring a shield to deflect levation crystals, a carved pumpkin to be used in the " +
        "presence of enderman and some form of way to save yourself from plummeting to your death</p><p>These cities can have enchanted diamond armor, tools and loose diamonds, emeralds, gold and iron. " +
        "These cities also have shulks, which can drop shulker shells that can be used to create shulker boxes. If there is a floating boat at the end city, " +
        "then there is an elytra also at the city, which when paired with flight rockets allow you to travel much faster than most modes of transportation.</p>";
        document.getElementById("f").style.height = "75vh";
}
endFunction(); /*sets default to overworld*/

const background = document.getElementById("scrollBackground");

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let newHeight = Math.max(0, 200 - scrollY);
    background.style.height = `${newHeight}px`;
});
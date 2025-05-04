function overworldFunction() {
    document.getElementById("info").innerHTML= "<br>Plains biomes" +
    "<br>forest biomes" +
    "<br>savanna biomes" +
    "<br>highlands biomes" +
    "<br>desert biomes" +
    "<br>swamp & beach biomes" +
    "<br>Cave biomes" +
    "<br>ocean biomes";
    document.getElementById("f").style.height = "auto";
}

function netherFunction() {
    document.getElementById("info").innerHTML= "<p>There are 5 biomes in the Nether, each very unique from the others. Below each biome are lava lakes that go to bedrock.</p>" +
    /* Basalt Delta */"<h3>Basalt Delta</h3><img src='/Images/basaltdelta.webp' alt='basalt delta' style=float:left>" +
    "<p>The first one to mention is the 'Basalt Deltas'. Made up of mostly its namesake, basalt in varying heights of pillers. " +
    "There is also a good amount of blackstone, magma blocks and lava scattered throughtout the basalt deltas.</p>" +
    "<p>Quartz ore, neather gold ore and ancient debris all spawn underground in basalt deltas</p>" +
    "<p>Be wary while traversing through here, attempting to mine directly through the basalt could lead to lava pools. " +
    "Traveling through these biomes is recommended to be done with an elytra or by placing blocks.</p>" +
    "<p>Magma cubes spawn more frequently in basalt deltas, striders and ghasts also spawn in basalt deltas. Pigmen, piglins and hoglins don't spawn in basalt deltas.</p>" +
    "<h3>crimson forest</h3>" +
    "<h3>warped forest</h3>" +
    "<h3>nether wastes</h3>" +
    "<h3>soul sand vally</h3>";
    document.getElementById("f").style.height = "auto";
}

function endFunction() {
    document.getElementById("info").innerHTML= "<p>There surprisingly are 5 biomes in the End, though all End biomes are made up of floating endstone islands.</p>"+
    /* End */"<h3>End (the biome)</h3><img src='/Images/endBiome.webp' alt='end' (the biome) style='float:left;margin:0px 15px 15px 15px'>" +
    "<p>The first one you encounter is called 'The End'. It's the end island a player spawn on. The radius of the end island is roughly 1,000 blocks (meters) and is centered at (0, 0). " +
    "Large obsidian pillers with end crystals generate in a circle formation around the end portal back to the overworld. " +
    "The first time a player enters the ender dragon spawns and the portal home is not activated until the ender dragon is defeated.</p>" +
    /* All other biomes */"</h3><img src='/Images/endAllOtherBiomes.png' alt= 'all other end biomes' style='float:right;margin: 0px 15px 50px 15px'>" +
    "<h3>Small End Islands, End Midlands, End Highlands, End Barrens</h3><p>After using the end gateway to teleport to the further away islands, you will notice there are some very tiny islands clustered around. " +
    "These are the 'Small End Islands'. The larger outer end islands are made up of 3 different biomes each. There's the 'End Barrens' which is the edges of the larger islands. " +
    "There's the 'End Midlands', which is the slope from the hillier parts of a larger island to the edges of it. And finally there's the 'End Highlands', the hilltops of the larger islands. " +
    "The 'End Highlands' is the only place chorus fruit and end cities spawn.</p>";
    document.getElementById("f").style.height = "auto";
}
netherFunction();
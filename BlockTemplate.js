const TexturelinkTemplate = "https://raw.githubusercontent.com/Goofberg/Minecraft/main/Textures/TEMPLATE.png"

export function SolidBlockTemplate(texture, PosX, PosY, PosZ) {
    const modifiedLink = TexturelinkTemplate.replace("TEMPLATE", texture);

    const BlockCode = `
    <div class="cube" style="transform: translateX(POSITIONX) translateY(POSITIONY) translateZ(POSITIONZ);">
        <div class="pixelcube cube-face front" style="background-image: url('TEXTUREDLINKED'); background-position: 0 0;"></div>
        <div class="pixelcube cube-face back" style="background-image: url('TEXTUREDLINKED'); background-position: 0 0;"></div>
        <div class="pixelcube cube-face left" style="background-image: url('TEXTUREDLINKED'); background-position: 0 0;"></div>
        <div class="pixelcube cube-face right" style="background-image: url('TEXTUREDLINKED'); background-position: 0 0;"></div>
        <div class="pixelcube cube-face top" style="background-image: url('TEXTUREDLINKED'); background-position: 0 0;"></div>
        <div class="pixelcube cube-face bottom" style="background-image: url('TEXTUREDLINKED'); background-position: 0 0;"></div>
    </div>`

    let finalString = BlockCode.replace(/TEXTUREDLINKED/g, modifiedLink);
    finalString = finalString.replace("POSITIONX", `${PosX}px`);
    finalString = finalString.replace("POSITIONY", `${PosY}px`);
    finalString = finalString.replace("POSITIONZ", `${PosZ}px`);
    return finalString;
}

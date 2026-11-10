const imagePathsA = [
    "image/Peligin.jpg",
    "image/Violant.jpg",
    "image/Viric.jpg",
    "image/Gant.jpg",
    "image/Cosmogone.jpg",
    "image/Apocyan.jpg",
    "image/Irrigo.jpg",
];

const imagePathsB = [
    "image/Chthonosophy.jpg",
    "image/MonstrousAnatomy.jpg",
    "image/ArtisanOfTheRedScience.jpg",
    "image/APlayerOfChess.jpg",
    "image/KatalepticToxicology.jpg",
    "image/Zeefaring.jpg",
    "image/Glasswork.jpg",
    "image/Mithridacy.jpg",
    "image/ShaplingArts.jpg",
];

function loadRandomImageA() {
    const box = document.getElementById('random-img-left-box');
    if (box && imagePathsA.length > 0) {
        const randomIndex = Math.floor(Math.random() * imagePathsA.length);
        box.innerHTML = `<img src="${imagePathsA[randomIndex]}" alt="Skill A">`;
    }
}

function loadRandomImageB() {
    const box = document.getElementById('random-img-right-box');
    if (box && imagePathsB.length > 0) {
        const randomIndex = Math.floor(Math.random() * imagePathsB.length);
        box.innerHTML = `<img src="${imagePathsB[randomIndex]}" alt="Skill B">`;
    }
}

async function loadSnippet() {
    const snippetElement = document.getElementById('snippet-text');
    if (!snippetElement) return;
    
    try {
        const response = await fetch('snippets.txt');
        if (!response.ok) throw new Error('Network response was not ok');
        const text = await response.text();
        const snippets = text.split('---').map(s => s.trim()).filter(s => s.length > 0);
        
        if (snippets.length > 0) {
            const randomIndex = Math.floor(Math.random() * snippets.length);
            snippetElement.textContent = snippets[randomIndex];
        }   
    } catch (error) {
        snippetElement.textContent = "The whispers are silent... (Please use Live Server).";
    }
}

async function loadIntroduction() {
    const introElement = document.getElementById('intro-content');
    if (!introElement) return;

    try {
        const response = await fetch('introduction.txt');
        if (!response.ok) throw new Error('Network response was not ok');
        const text = await response.text();
        introElement.innerHTML = text;
    } catch (error) {
        introElement.innerHTML = "<p>Failed to load introduction. (Please use Live Server).</p>";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadRandomImageA();
    loadRandomImageB();
    loadSnippet();
    loadIntroduction();
});
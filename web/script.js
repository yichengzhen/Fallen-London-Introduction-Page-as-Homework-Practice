const imagePathsA = [
    "../image/Peligin.jpg",
    "../image/Violant.jpg",
    "../image/Viric.jpg",
    "../image/Gant.jpg",
    "../image/Cosmogone.jpg",
    "../image/Apocyan.jpg",
    "../image/Irrigo.jpg",
];

const imagePathsB = [
    "../image/Chthonosophy.jpg",
    "../image/MonstrousAnatomy.jpg",
    "../image/ArtisanOfTheRedScience.jpg",
    "../image/APlayerOfChess.jpg",
    "../image/KatalepticToxicology.jpg",
    "../image/Zeefaring.jpg",
    "../image/Glasswork.jpg",
    "../image/Mithridacy.jpg",
    "../image/ShaplingArts.jpg",
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
        const response = await fetch('../snippets.txt');
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

async function loadContent() {
    const introElement = document.getElementById('intro-content');
    if (!introElement) return;

    const pageId = document.body.id;
    let fileToLoad = '';

    if (pageId === 'page-setting') {
        fileToLoad = 'setting.txt';
    } else if (pageId === 'page-gameplay') {
        fileToLoad = 'gameplay.txt';
    } else if (pageId === 'page-legacy') {
        fileToLoad = 'legacy.txt';
    } else if (pageId === 'page-universe') {
        fileToLoad = 'universe.txt';
    } else {
        return;
    }

    try {
        const response = await fetch(fileToLoad);
        if (!response.ok) throw new Error('Network response was not ok');
        const text = await response.text();
        introElement.innerHTML = text;
    } catch (error) {
        introElement.innerHTML = "<p>Failed to load text. (Please use Live Server).</p>";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadRandomImageA();
    loadRandomImageB();
    loadSnippet();
    loadContent();
});
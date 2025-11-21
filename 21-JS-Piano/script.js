let main = document.querySelector('main');
let h1 = document.querySelector('h1');
let audioA = new Audio('./Audio/a.mp3');
let audioB = new Audio('./Audio/b.mp3');
let audioC = new Audio('./Audio/c.mp3');
let audioD = new Audio('./Audio/d.mp3');
let audioF = new Audio('./Audio/f.mp3');
let audioG = new Audio('./Audio/g.mp3');
let audioH = new Audio('./Audio/h.mp3');
let audioJ = new Audio('./Audio/j.mp3');
let audioK = new Audio('./Audio/k.mp3');
let audioM = new Audio('./Audio/m.mp3');
let audioN = new Audio('./Audio/n.mp3');
let audioS = new Audio('./Audio/s.mp3');
let audioV = new Audio('./Audio/v.mp3');
let audioX = new Audio('./Audio/x.mp3');
let audioZ = new Audio('./Audio/z.mp3');

document.addEventListener('keydown', (event) => {
    let key = event.key.toLocaleLowerCase();
    h1.textContent=event.key;

    if (key === 'a') {
        audioA.currentTime = 0;
        audioA.play();
    } else if (key === 'b') {
        audioB.currentTime = 0;
        audioB.play();
    } else if (key === 'c') {
        audioC.currentTime = 0;
        audioC.play();
    } else if (key === 'd') {
        audioD.currentTime = 0;
        audioD.play();
    } else if (key === 'f') {
        audioF.currentTime = 0;
        audioF.play();
    } else if (key === 'g') {
        audioG.currentTime = 0;
        audioG.play();
    } else if (key === 'h') {
        audioH.currentTime = 0;
        audioH.play();
    } else if (key === 'j') {
        audioJ.currentTime = 0;
        audioJ.play();
    } else if (key === 'k') {
        audioK.currentTime = 0;
        audioK.play();
    } else if (key === 'm') {
        audioM.currentTime = 0;
        audioM.play();
    } else if (key === 'n') {
        audioN.currentTime = 0;
        audioN.play();
    } else if (key === 's') {
        audioS.currentTime = 0;
        audioS.play();
    } else if (key === 'v') {
        audioV.currentTime = 0;
        audioV.play();
    } else if (key === 'x') {
        audioX.currentTime = 0;
        audioX.play();
    } else if (key === 'z') {
        audioZ.currentTime = 0;
        audioZ.play();
    }

     else if (key === 'Enter') {
        audioB.currentTime = 0;
        audioB.play();
    } else if (key === 'Backspace') {
        audioC.currentTime = 0;
        audioC.play();
    } else if (key === 'Space') {
        audioD.currentTime = 0;
        audioD.play();
    } else if (key === 'Tab') {
        audioF.currentTime = 0;
        audioF.play();
    } else if (key === 'Shift') {
        audioG.currentTime = 0;
        audioG.play();
    } else if (key === 'Control') {
        audioH.currentTime = 0;
        audioH.play();
    } else if (key === 'Alt') {
        audioJ.currentTime = 0;
        audioJ.play();
    } else if (key === 'Meta') {
        audioK.currentTime = 0;
        audioK.play();
    } else if (key === 'Escape') {
        audioM.currentTime = 0;
        audioM.play();
    } else if (key === 'CapsLock') {
        audioN.currentTime = 0;
        audioN.play();
    } else if (key === 'Insert') {
        audioS.currentTime = 0;
        audioS.play();
    } else if (key === 'Delete') {
        audioV.currentTime = 0;
        audioV.play();
    } else if (key === 'Home') {
        audioX.currentTime = 0;
        audioX.play();
    } else if (key === 'End') {
        audioZ.currentTime = 0;
        audioZ.play();
    }

    else if (key === 'PageUp') {
        audioB.currentTime = 0;
        audioB.play();
    } else if (key === 'PageDown') {
        audioC.currentTime = 0;
        audioC.play();
    } else if (key === 'PrintScreen') {
        audioD.currentTime = 0;
        audioD.play();
    } else if (key === 'ScrollLock') {
        audioF.currentTime = 0;
        audioF.play();
    } else if (key === 'Pause') {
        audioG.currentTime = 0;
        audioG.play();
    } else if (key === 'ContextMenu') { 
        audioH.currentTime = 0;
        audioH.play();
    } else if (key === 'e') {
        audioJ.currentTime = 0;
        audioJ.play();
    } else if (key === 'i') {
        audioK.currentTime = 0;
        audioK.play();
    } else if (key === 'l') {
        audioM.currentTime = 0;
        audioM.play();
    } else if (key === 'o') {
        audioN.currentTime = 0;
        audioN.play();
    } else if (key === 'p') {
        audioS.currentTime = 0;
        audioS.play();
    } else if (key === 'q') {
        audioV.currentTime = 0;
        audioV.play();
    } else if (key === 'r') {
        audioX.currentTime = 0;
        audioX.play();
    } else if (key === 't') {
        audioZ.currentTime = 0;
        audioZ.play();
    }


    else if (key === 'u') {
        audioJ.currentTime = 0;
        audioJ.play();
    } else if (key === 'w') {
        audioK.currentTime = 0;
        audioK.play();
    } else if (key === 'y') {
        audioM.currentTime = 0;
        audioM.play();
    } else if (key === '0') {
        audioN.currentTime = 0;
        audioN.play();
    } else if (key === '1') {
        audioS.currentTime = 0;
        audioS.play();
    } else if (key === '2') {
        audioV.currentTime = 0;
        audioV.play();
    } else if (key === '3') {
        audioX.currentTime = 0;
        audioX.play();
    } else if (key === '4') {
        audioZ.currentTime = 0;
        audioZ.play();
    }

    else if (key === '5') {
        audioN.currentTime = 0;
        audioN.play();
    } else if (key === '6') {
        audioS.currentTime = 0;
        audioS.play();
    } else if (key === '7') {
        audioV.currentTime = 0;
        audioV.play();
    } else if (key === '8') {
        audioX.currentTime = 0;
        audioX.play();
    } else if (key === '9') {
        audioZ.currentTime = 0;
        audioZ.play();
    }
});

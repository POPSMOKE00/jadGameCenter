// Ljudfiler för bokstäver
const letterSounds = {
    a: './sounds/Letter_A.mp3',
    b: './sounds/Letter_B.mp3',
    c: './sounds/Letter_C.mp3',
    d: './sounds/Letter_D.mp3',
    e: './sounds/Letter_E.mp3',
    f: './sounds/Letter_F.mp3',
    g: './sounds/Letter_G.mp3',
    h: './sounds/Letter_H.mp3',
    i: './sounds/Letter_I.mp3',
    j: './sounds/Letter_J.mp3',
    k: './sounds/Letter_K.mp3',
    l: './sounds/Letter_L.mp3',
    m: './sounds/Letter_M.mp3',
    n: './sounds/Letter_N.mp3',
    o: './sounds/Letter_O.mp3',
    p: './sounds/Letter_P.mp3',
    q: './sounds/Letter_Q.mp3',
    r: './sounds/Letter_R.mp3',
    s: './sounds/Letter_S.mp3',
    t: './sounds/Letter_T.mp3',
    u: './sounds/Letter_U.mp3',
    v: './sounds/Letter_V.mp3',
    w: './sounds/Letter_W.mp3',
    x: './sounds/Letter_X.mp3',
    y: './sounds/Letter_Y.mp3',
    z: './sounds/Letter_Z.mp3',
};

//ljud spel
function playSound(letter) {
    const audio = document.getElementById('audio');
    audio.src = letterSounds[letter];
    audio.play();
}

document.querySelectorAll('.letter').forEach(letter => {
    letter.addEventListener('click', () => {
        const id = letter.id;
        playSound(id);
    });
});
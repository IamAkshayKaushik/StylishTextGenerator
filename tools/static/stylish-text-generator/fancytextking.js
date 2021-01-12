function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Start on type
function createBoxes(containerId, input_text) {

    let containerHead = document.getElementById(containerId);
    // col_count = shuffle(forward(input_text).split('\n\n'));
    col_count = forward(input_text).split('\n\n');
    // col_count = forward("Lakshya Kaushik").split('\n\n').filter(i => i !== '');
    let tblHead = document.createElement("div");
    tblHead.className = "row";
    tblHead.id = "row";
    let index = 1;
    for (let col of col_count) {
        let main_div = document.createElement("div");
        main_div.className = "col-sm-6";
        let inputGroup = document.createElement("div");
        inputGroup.className = "input-group mb-3";

        let cellText = document.createElement("input");

        Object.assign(cellText, {className: 'form-control', type: "text", value: col, style: "text-align:center;"});
        cellText.setAttribute('aria-describedby', (index % 2) ? 'basic-addon2' : 'basic-addon1');
        cellText.setAttribute('aria-label', '');
        cellText.setAttribute('readonly', '');
        let copyButtonDiv = document.createElement("div");
        copyButtonDiv.className = (index % 2) ? 'input-group-append' : 'input-group-prepend';
        cellButton = document.createElement('button');
        Object.assign(cellButton, {
            className: (index % 2) ? 'btn btn-outline-success' : 'btn btn-outline-secondary',
            type: 'button',
            onclick: copyToClipboard
        });
        cellButton.innerHTML = 'Copy';
        copyButtonDiv.appendChild(cellButton);
        if (index % 2) {
            inputGroup.appendChild(cellText);
            inputGroup.appendChild(copyButtonDiv);
        } else {
            inputGroup.appendChild(copyButtonDiv);
            inputGroup.appendChild(cellText);
        }
        main_div.appendChild(inputGroup);
        tblHead.appendChild(main_div);
        index++;
    }
    containerHead.appendChild(tblHead);
}

function makeStyle(input_text) {
    input_text = input_text.target.value;
    let d = document.getElementById("text-block");
    d.innerHTML = '';
    if (input_text.trim() !== '') {
        createBoxes("text-block", input_text);
    }
}

// End on type

// copyToClipboard
function copyToClipboard(input_box) {
    path = input_box.path || (input_box.composedPath && input_box.composedPath());
    let textBox = path[2].querySelector('.form-control');
    textBox.select();
    document.execCommand("copy");
    toastIt('Copied', 2000, {fontSize: '18px'});
}

// end copyToClipboard

// Start css defer
const url_array = ['https://fonts.googleapis.com/css?family=Noto+Sans|Pacifico|Cardo&display=swap', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css'];
url_array.forEach(function (element) {
    let giftofspeed = document.createElement('link');
    giftofspeed.rel = 'stylesheet';
    giftofspeed.href = element;
    giftofspeed.type = 'text/css';
    let godefer = document.getElementsByTagName('link')[0];
    godefer.parentNode.insertBefore(giftofspeed, godefer);
});
// End css defer


// change text on keyup
document.getElementById("input_text").addEventListener('keyup', makeStyle, false);

// function createBoxes(containerId, input_text) {
//
//     let containerHead = document.getElementById(containerId);
//     // col_count = shuffle(forward(input_text).split('\n\n'));
//     col_count = forward(input_text).split('\n\n');
//     let index = 1;
//     for (let col of col_count) {
//         let cellText = document.createElement("input");
//
//         Object.assign(cellText, {className: 'form-control', value: col, style: "text-align:center;"});
//         cellText.setAttribute('aria-describedby', (index % 2) ? 'basic-addon2' : 'basic-addon1');
//         cellText.setAttribute('aria-label', '');
//         cellText.setAttribute('readonly', 'True');
//         Object.assign(cellText, {
//             onfocus: copyToClipboard
//         });
//         index++;
//         containerHead.appendChild(cellText);
//     }
// }
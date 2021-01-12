function applyCharMap(map, text) {
    let out = "";
    for(let c of text.split("")) {
        if(map[c] !== undefined) out += map[c];
        else if(map[c.toLowerCase()] !== undefined) out += map[c.toLowerCase()];
        else out += c;
    }
    return out;
}


const subscriptCharMap =   {"0":"₀","1":"₁","2":"₂","3":"₃","4":"₄","5":"₅","6":"₆","7":"₇","8":"₈","9":"₉","a":"ₐ","b":"ᵦ","c":"𝒸","d":"𝒹","e":"ₑ","f":"𝒻","g":"𝓰","h":"ₕ","i":"ᵢ","j":"ⱼ","k":"ₖ","l":"ₗ","m":"ₘ","n":"ₙ","o":"ₒ","p":"ₚ","q":"ᵩ","r":"ᵣ","s":"ₛ","t":"ₜ","u":"ᵤ","v":"ᵥ","w":"ᵥᵥ","x":"ₓ","y":"ᵧ","z":"𝓏","A":"ₐ","B":"ᵦ","C":"𝒸","D":"𝒹","E":"ₑ","F":"F","G":"𝓰","H":"ₕ","I":"ᵢ","J":"ⱼ","K":"ₖ","L":"ₗ","M":"ₘ","N":"ₙ","O":"ₒ","P":"ₚ","Q":"ᵩ","R":"ᵣ","S":"ₛ","T":"ₜ","U":"ᵤ","V":"ᵥ","W":"ᵥᵥ","X":"ₓ","Y":"ᵧ","Z":"𝓏","+":"₊","-":"₋","=":"₌","(":"₍",")":"₎"};
const superscriptCharMap = {"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","a":"ᵃ","b":"ᵇ","c":"ᶜ","d":"ᵈ","e":"ᵉ","f":"ᶠ","g":"ᵍ","h":"ʰ","i":"ⁱ","j":"ʲ","k":"ᵏ","l":"ˡ","m":"ᵐ","n":"ⁿ","o":"ᵒ","p":"ᵖ","q":"ᵠ","r":"ʳ","s":"ˢ","t":"ᵗ","u":"ᵘ","v":"ᵛ","w":"ʷ","x":"ˣ","y":"ʸ","z":"ᶻ","A":"ᴬ","B":"ᴮ","C":"ᶜ","D":"ᴰ","E":"ᴱ","F":"ᶠ","G":"ᴳ","H":"ᴴ","I":"ᴵ","J":"ᴶ","K":"ᴷ","L":"ᴸ","M":"ᴹ","N":"ᴺ","O":"ᴼ","P":"ᴾ","Q":"ᵠ","R":"ᴿ","S":"ˢ","T":"ᵀ","U":"ᵁ","V":"ⱽ","W":"ᵂ","X":"ˣ","Y":"ʸ","Z":"ᶻ","+":"⁺","-":"⁻","=":"⁼","(":"⁽",")":"⁾"};

function convertData(text){
    text = text.trim();
    if(text === "") {
        return "";
    }
    var finalText = "";
    finalText += applyCharMap(subscriptCharMap, text) + "\n\n";
    finalText += applyCharMap(superscriptCharMap, text) + "\n\n";
    return finalText.trim();
}


// Start onkeyup
function createBoxes(containerId, input_text) {

    let containerHead = document.getElementById(containerId);
    col_count = convertData(input_text).split('\n\n');
    // col_count = forward("Lakshya Kaushik").split('\n\n').filter(i => i !== '');
    let tblHead = document.createElement("div");
    tblHead.className = "row";
    tblHead.id = "row";
    let index = 1;
    for (let col of col_count) {
        let main_div = document.createElement("div");
        main_div.className = "col-sm-12";
        let inputGroup = document.createElement("div");
        inputGroup.className = "input-group mb-3";

        let cellText = document.createElement("input");

        Object.assign(cellText, { className: 'form-control', type: "text", value: col , style: "text-align:center;" });
        cellText.setAttribute('aria-describedby', (index % 2) ? 'basic-addon2' : 'basic-addon1');
        cellText.setAttribute('aria-label', '');
        let copyButtonDiv = document.createElement("div");
        copyButtonDiv.className = (index % 2) ? 'input-group-append' : 'input-group-prepend';
        cellButton = document.createElement('button');
        Object.assign(cellButton, { className: (index % 2) ? 'btn btn-outline-success' : 'btn btn-outline-secondary', type: 'button', onclick: copyToClipboard });
        cellButton.innerHTML = 'Copy';
        copyButtonDiv.appendChild(cellButton);
        // if (index % 2) {
            inputGroup.appendChild(cellText);
            inputGroup.appendChild(copyButtonDiv);
        // }
        // else {
        //     inputGroup.appendChild(copyButtonDiv);
        //     inputGroup.appendChild(cellText);
        // }
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
    if (input_text.trim() != '') {
        createBoxes("text-block", input_text);
    }
}
// get and change text on keyup
document.getElementById("input_text").addEventListener('keyup', makeStyle,false);
// End onkeyup

// copyToClipboard
function copyToClipboard(input_box) {
    path = input_box.path || (input_box.composedPath && input_box.composedPath());
    let textBox = path[2].querySelector('.form-control');
    textBox.select();
    document.execCommand("copy");
}
// end copyToClipboard

// Start css defer
const url_array = ['https://fonts.googleapis.com/css?family=Noto+Sans|Pacifico&display=swap', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.css'];
url_array.forEach(function(element){
    let giftofspeed = document.createElement('link');
    giftofspeed.rel = 'stylesheet';
    giftofspeed.href = element;
    giftofspeed.type = 'text/css';
    let godefer = document.getElementsByTagName('link')[0];
    godefer.parentNode.insertBefore(giftofspeed, godefer);
});
// End css defer


mybutton.addEventListener("click", topFunction);
// ScrollToTop Button End

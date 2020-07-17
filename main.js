const logo = 'https://production.haystack-assets.com/assets/avatars/defaults/hey-84b6169bf4060a76a94a072fe96b5fef7970b02d19507e2ab3952c042c21b154.svg';

const listOfItems  = [
    "John.academy",
    "twitter@JohnDoe",
    "FB.com/JohnDoe",
    "YT.com/JohnDoe",
    "twitter@JohnDoe",
    "IG/JohnDoe",
    "JohnDoe.net",
];


const baseScaleChange  = 0.0333333
        
const baseTranslateChange  = 0.7

document.addEventListener('DOMContentLoaded', function() {

    const stack = document.getElementById('stack');
    
    for(let i = 0; i < listOfItems.length; i++) {

        const reverseIndex = (listOfItems.length - i - 1);

        let div = document.createElement('div');

        div.classList.add('single-block');

        div.innerHTML = `
            <div class="content">
                <img src=${logo} />
                <div>
                    <h3>${listOfItems[i]}</h3>
                    <p>description</p>
                </div>
            </div>
        `;
        
        div.style.transform = `scale(${1 - (reverseIndex * baseScaleChange)}) translateY(-${reverseIndex * baseTranslateChange}rem)`;

        stack.appendChild(div);
    }

    stack.addEventListener('click', function(e) {

        e.stopPropagation();

        const blocks = this.querySelectorAll('.single-block');

        blocks.forEach((block, index) => {
            const reverseIndex = (listOfItems.length - index - 1);
            block.style.transform = `rotate(${1.1 * reverseIndex}deg) translate(-${reverseIndex * 0.2}rem, -${reverseIndex * 4}rem)`;
        });
    });

    document.addEventListener('click', function(e) {

        const blocks = stack.querySelectorAll('.single-block');

        blocks.forEach((block, i) => {
            const reverseIndex = (listOfItems.length - i - 1);
            block.style.transform = `scale(${1 - (reverseIndex * baseScaleChange)}) translateY(-${reverseIndex * baseTranslateChange}rem)`;
        });

    });

});
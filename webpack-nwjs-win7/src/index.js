import '@babel/polyfill';

window.onload = function () {
    const es6btn = document.querySelector('#es6btn');
    const es7btn = document.querySelector('#es7btn');

    es6btn.addEventListener('click', () => {
        const arr = [1, 2, 3, 4, 5];
        arr.map(item => {
            let a = 1;
            console.log(item + a);
        });
    });

    function sleep(time) {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        });
    }

    es7btn.addEventListener('click', async () => {
        console.log('start');
        await sleep(1000);
        console.log('end');
    });
}

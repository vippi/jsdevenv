import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('первый тест', () => {
    it('должен пройти', () => {
        expect(true).to.equal(true);
    })
});

describe('index.html', () => {
    it('должен сказать hello', (done) => {
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            //console.log('h1==', h1.innerHTML);
            expect(h1.innerHTML).to.equal("hello!!!");
            done(); // сигнал что тест закончен! ВАЖНО!!
            window.close();
        });
    })
});
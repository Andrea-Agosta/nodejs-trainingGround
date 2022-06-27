import assert from 'assert';
import { getAge, getAgeGroup } from './index.mjs';

describe('age calculator', () => {
    it('someone born 1972 is 50 2022', () => {  
        //act
        const result = getAge(1972, 2022);
        
        //assert
        assert.equal(result, 50);
    });

    it('someone born 2021 is 1 2022', () => {
        // arrange
        // act
        const result = getAge(2021, 2022);
      
        // assert
        assert.equal(result, 1);
    });

    it('someone born 1985 is 37 2022', () => {
        // arrange
        const result = getAge(1985, 2022);

        //assert
        assert.equal(result, 37);
    });
});

describe('age classifier', () => {
    it('0-3 years old should be a toddler', () => {
        //arrange
        //act
        const result0 = getAgeGroup(0);
        const result1 = getAgeGroup(1);
        const result2 = getAgeGroup(2);
        const result3 = getAgeGroup(3);

        //assert
        assert.equal(result0, "toddler");
        assert.equal(result1, "toddler");
        assert.equal(result2, "toddler");
        assert.equal(result3, "toddler");
    });

    it('4-12 years old should be a kid', () => {
        //arrange
        //act
        const result = getAgeGroup(4);

        //assert
        assert.equal(result, "kid");
    });

    it('13-19 years old should be a teenager', () => {
        //arrange
        //act
        const result = getAgeGroup(13);

        //assert
        assert.equal(result, 'teenager');
    });

    it('20-39 years old should be a adult',() => {
        //arrange
        //act
        const result = getAgeGroup(38);

        //assert
        assert.equal(result, 'adult');
    });

    it('above 39 years old ... you are just old', () =>{
        //arrange
        //act
        const result = getAgeGroup(40);

        //assert
        assert.equal(result, 'old');
    });

    it('But 50 - that is prime age, my friend. PRIME. AGE.', () => {
        //arrange
        //act
        const result = getAgeGroup(50);

        //assert
        assert.equal(result, 'prime');
    });

    it('Error age < 0', () => {
        //arrange
        //act
        const result = getAgeGroup(-1);

        //assert
        assert.equal(result, 'error');
    });

    it('Error space input type', () => {
        //arrange
        //act
        const result = getAgeGroup(' ');

        //assert
        assert.equal(result, 'error');
    });

    it('Error no input type', () => {
        //arrange
        //act
        const result = getAgeGroup('');

        //assert
        assert.equal(result, 'error');
    });

    it('Error text input type', () => {
        //arrange
        //act
        const result = getAgeGroup('some text');

        //assert
        assert.equal(result, 'error');
    });
});

import assert from 'assert';
import { getAge } from './index.mjs';

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

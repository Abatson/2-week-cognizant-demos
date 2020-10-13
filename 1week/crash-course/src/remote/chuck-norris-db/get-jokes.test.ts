


import { chuckNorrisDBGetOneJoke } from './get-jokes'
import { chuckNorrisDBClient } from './index'
import { mocked } from 'ts-jest/dist/utils/testing'


jest.mock('./index')

const mockClient = mocked(chuckNorrisDBClient,true)

// functions as a group of related tests
//can contain beforEach and afterEach functions
describe('Chuck Norris DB get one joke', ()=>{

    beforeEach(()=>{
        console.log('This function is run before every single test in the suite');
        console.log('you can use it to reset your mocks or setup data, whatever');
        
        
    })

    afterEach(()=>{
        console.log('this runs after each test, for cleanup, deleting files made, stuff like that');
        
    })

    it('should return a string on success', async ()=>{
        //make fake response data
        //manual mock
        const resp = {data:{value:{joke:"No statement can catch the ChuckNorrisException."}}}
        //used mocked dependency to fake the function call
        mockClient.get.mockResolvedValue(resp)
        //we call our function and verify its return
        let returnValue = await chuckNorrisDBGetOneJoke()
        
        expect(returnValue).toBe("No statement can catch the ChuckNorrisException.")
        expect(mockClient.get).toBeCalled()
    })


    it('should handle a 500 error appropiately', ()=>{

    })
})
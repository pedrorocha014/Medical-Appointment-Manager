const { TestScheduler } = require('jest');
const createModule = require('../modules/doctors/createModule');
const deleteModule = require('../modules/doctors/deleteModule');
const readModule = require('../modules/doctors/readModule');


test('Doctors Methods', () => {
    const data = createModule("doctorName", "doctorSpecialty"); 
    expect(data).toBeDefined();
})

test('Doctors Methods aaa', async () => {
    const data2 = await readModule()
    console.log(data2);
    expect(data2).toBeDefined();
})
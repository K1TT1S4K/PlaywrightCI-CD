const { test, expect } = require('@playwright/test');

var user_id;
//การทดสอบ API Method GET
test('Get User CI/CD@get', async ({request}) => {
    //การส่ง api แบบ get และเก็บใส่ตัวแปร response
    const response = await request.get('https://reqres.in/api/user/2');
    // console.log(response)

    //การยืนยัน Assertion
    expect(response.status()).toBe(200)
});

//การทดสอบ API Method POST
test('Post User CI/CD@post', async ({request}) => {
    //การส่ง api แบบ get และเก็บใส่ตัวแปร response
    const response = await request.post('https://reqres.in/api/user',{
        data:{"name": "morpheus","job": "leader"},
        headers:{"Accept":"application/json"}
    });
    expect(response.status()).toBe(201);

    //การเก็บค่า ID User ที่เพิ่งสร้าง
    var res = await response.json()
    user_id = res.id
});

//การทดสอบ API Method PUT
test('Update User CI/CD@put', async ({request}) => {
    //การส่ง api แบบ get และเก็บใส่ตัวแปร response
    const response = await request.put('https://reqres.in/api/user/' + user_id,
    {
        data:{"name": "John","job": "leader"},
        headers:{"Accept":"application/json"}
    });

    expect(response.status()).toBe(200)
});

//การทดสอบ API Method DELETE
test('Delete User CI/CD@delete', async ({request}) => {
    //การส่ง api แบบ get และเก็บใส่ตัวแปร response
    const response = await request.delete('https://reqres.in/api/user/' + user_id);
    expect(response.status()).toBe(204)
});
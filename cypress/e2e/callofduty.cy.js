/// <reference types="cypress" />
it('test callofduty', async () => {
    // await cy.visit('https://signin.ea.com/p/juno/login?execution=e1484502940s1&initref=https%3A%2F%2Faccounts.ea.com%3A443%2Fconnect%2Fauth%3Fhide_create%3Dtrue%26display%3Dweb2%252Flogin%26scope%3Dbasic.identity%2Boffline%2Bsignin%2Bbasic.entitlement%2Bbasic.persona%26release_type%3Dprod%26response_type%3Dtoken%26redirect_uri%3Dhttps%253A%252F%252Fwww.ea.com%252Fpl-pl%252Ffifa%252Fultimate-team%252Fweb-app%252Fauth.html%26accessToken%3DeyJraWQiOiI0MDZmYmUxZS0xYzc3LTQ0MzQtYWQ1ZC04ODRkZDY1NmZmNjciLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJhY2NvdW50cy5lYS5jb20iLCJqdGkiOiJTa0V4T2pNdU1Eb3hMakE2TmpRM09EUXpPV1V0Wm1NellpMDBaR1k0TFdFME5XTXRaVEkyT0RRelkySXpaV1U0IiwiYXpwIjoiRklGQTIyX0pTX1dFQl9BUFAiLCJpYXQiOjE2NjAwNTYzNzMsImV4cCI6MTY2MDA3MDc3MywidmVyIjoxLCJuZXh1cyI6eyJyc3ZkIjp7ImVmcGx0eSI6IjEzIn0sImNsaSI6IkZJRkEyMl9KU19XRUJfQVBQIiwicHJkIjoiMDhiZTM1MTAtZjQyMC0yYTk3LTQyZDMtZTk5Y2VmMDgzYTQxIiwic2NvIjoib2ZmbGluZSBzZWN1cml0eS50d29mYWN0b3Igc2VjdXJpdHkuY2hhbGxlbmdlIHNpZ25pbiBiYXNpYy5pZGVudGl0eSBiYXNpYy5wZXJzb25hIGJhc2ljLmVudGl0bGVtZW50IiwicGlkIjoiMTAwMDI4NzM3MjU2NiIsInB0eSI6Ik5VQ0xFVVMiLCJ1aWQiOiIxMDAwMjg3MzcyNTY2IiwiZHZpZCI6ImE2NWZhNzcxLTg3MmQtNGRkNS04OTE0LTUzNzQ2ZDcwYzVhZSIsInBsdHlwIjoiV0VCIiwicG5pZCI6IkVBIiwiZHBpZCI6IldFQiIsInN0cHMiOiJPRkYiLCJ1ZGciOmZhbHNlLCJjbnR5IjoiMSIsImF1c3JjIjoiMzE0NjU0IiwiaXBnZW8iOnsiaXAiOiI5MS4yMzEuKi4qIiwiY3R5IjoiUEwiLCJyZWciOiJQb21lcmFuaWEiLCJjaXQiOiJTemVtdWQiLCJpc3AiOiJJTlRFUktBUiBLT01QVVRFUiAtIFNFUldJUyBLYXJvbCBEemllY2llbHNraSIsImxhdCI6IjU0LjQ4OTYiLCJsZ3QiOiIxOC4yMzAzIiwidHoiOiIyIn0sInVpZiI6eyJ1ZGciOmZhbHNlLCJjdHkiOiJQTCIsImxhbiI6InBsIiwic3RhIjoiQUNUSVZFIiwiYW5vIjpmYWxzZSwiYWdlIjo0NH0sInBzaWYiOlt7ImlkIjo5ODY0OTE1MjQsIm5zIjoiY2VtX2VhX2lkIiwiZGlzIjoibWtvbmtvbDk0IiwibmljIjoibWtvbmtvbDk0In1dLCJlbmMiOiIwcnpYaDV0TUYyMVE4RTFCZ1B2VktQTlJWWnh0bWIzK2hNQTE2SytMYnZPcTZRZ1ZRLzNPWHQ5TUpiY0VzVGp5RnZIejdsK2xIVXI3cDRwMlZNV3pUMXZSby9CQ1diajNsNVFoMmtYbDJtNFpGTmJCSEppTXRQRmF6QzUxRmQveGRRVUpDTkIxUXBzYkNiVG1QSU1ER0xMcElBV0czazlKcFFTSS9nelJzaW9ibWpwTisxY1lRc0pYTjFxZDlCUW9hZTBneFA0bG1pNmEwK1pZdlRJTERBTDZ1aFRwTFhxSU52RWlYbExLaWdkVCtLaVIwK2F1aGxNSTFsR29uSDhXTkdOWWtCemkraG1za0hXS2c1aFErTnRPMnp4VndNSEU5U3ZUQnhjTzJROExwL2h0WW4wY0xIM1B0MW9udDNhaXphOHZCa1JpeENQWGMvci9wZitPT09heTdJcWk5VHVoV29oTFUzUlBFNWtsNGZoWHA1clN0WXB4RG83NVl5dmloTi9xRnF3OGNic1hsQTNhcy92YkNRaDNGNWEyajhySmVkUmVGSnpYbmtZSXNTd05heGYrMkVkWGpxcFlDazFWOUkyUFowc2lJdUFZclAzbjlISVNUaEVyTmM2K1RqNU5scFIyUnlVWGd5eFp6cE1BNTlsNTdxSjhxUHpZVUx1dHlTbWZ1dnFmMUxjL3BlbHpzN1VKVkg4aXlIN2Z6QkZCYTI0aW4ybHJhWm1KREhLeDNndlB0bFpYVEhGWTUwVjNaemlINkFTRTJFdkp0aUd5L1ZKQU5zSXltcHdnWG43REFJVkViaU92TTVBaWp3cmtsMkg3TndMUVJRZGFHeVRmTVlQbU9aUUpJblcyWElLWmptNzhwTVpVbjRyM3hJOFpNYk1YYnhScFB3dnZBRGlybDk2eTZ5K1kwclVGUDlkWEpja09GK3o1WXRMTDlnTlNwUDNwM2d4MmFGanJVSVNZZHNabjNiS2J5Qkp6dDNlNXplUnQxTW1QSkNjd3Y3VHdNc1dzRXhWa2g2ZmpHVkl6ZlpQYjFMS1BKZGJtWG1wTjNWeVIwWEpwNWNkUWVsV2dwRlNpZWJwZDVNWGQyREN4UTdDYjB2T1N6VnJ3MmQ4bC9JQ3JQTEJLN3BpN09oSkVIMmM0aDhncHZUNnVZRFhYd2JMN1NqMHNNZ1hObitCd0lPcHBkSjR5MFRKSHl1Z0xDSDBGSmc9PSJ9fQ.jeK14jqmOjjH5w0sEgcfz3BGnmR9RO7D9IX41vKLYuDG5FdFV1_ZVuMcXkv-LDbrPMFQjhzsi2-CF_ZPyjtZ0h11QyZZ9jwC1h7FjbOBVFUCPHWkSo4ABkVLVLU2ktD3F4OR_V0oNhVtRQ2I8_n9TzqHCaZjzRKk8opQL6tXO4V2CEUbkQH5w2OJxRhYhoR7E4lgsHXS8blQIvLyX4FV9uqldwfnNsYDzdoUlfr3xIoYDzTzHAZy4ms_7WBIQRmZpcFhdcsr2Bq1C6sxpdgr0LRbhqIR5qaZIfKNurr0VNfWeiM-destwGLB4cESkpoOdko6NfRB7GtXyxA9ZdzabA%26locale%3Dpl_PL%26client_id%3DFIFA23_JS_WEB_APP')

    // cy.get('#email').click().type('example@gmail.com', { force: true })
    // cy.get('#password').click().type('12345')
    // const button = cy.get('#logInBtn').click()
    // cy.get('#email').invoke('css', 'border-color').then(red => red).should('equal', 'rgb(102, 97, 110)')

    cy.visit('https://www.tiktok.com')
    cy.get('button[data-e2e="top-login-button"]').click()
    cy.get('a[href="/login/phone-or-email"]').click()
    cy.get('input[name="mobile"]').type('694469595')
    cy.get('input[placeholder="Enter 6-digit code"]').type('006060')
    // cy.get('button[data-e2e="send-code-button"]').click()
    cy.get('button[data-e2e="login-button"]').click()

});
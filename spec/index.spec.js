describe("La fonction HelloWorld", () => {

    beforeEach(() => {
        excepted = "HelloWorld";
    });
    afterEach(() => {
        excepted = "";
    });
    it('doit retourner Bonjour', () => {
        expect(helloWorld())
            .toEqual("Bonjour")
    });
});
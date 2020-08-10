describe("La fonction HelloWorld", () => {

    const data = () => {
        return "status 200";
    }

    const helloWorld = () => {
        return "Bonjour";
    }

    const toLowerCase =(str)=> {
        return str.toLowerCase();
    }
const utils = ()=>{
    // rien
}
    beforeAll(function () {
        console.log('Tous lire');
    });

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
    it('deuxième tâche', function () {
        console.log('deuxième tâche');
        expect(true).toBe(true);
    });
    it('troisième tâche', function () {
        console.log('troisième tâche');
        expect(true).toBe(true);
    });


    afterAll(() => console.log('Effacer les data'));

});
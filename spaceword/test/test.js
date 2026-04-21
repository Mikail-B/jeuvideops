const assert = require("assert")
const { describe } = require("mocha") // permet de faire des test de facon automatisé
const spaceword = require("../script"); // permet de récuperer le fichier qui nous interaisse

describe('getRandomInt',() =>{ //"describe" permet de regroupé les testes et c'est "it" pour définir le teste précis
    it('getRandomInt doit return 43',() =>{
const result= getRandomInt(-42, 42);//getRamdomint sert a appeler la fonction et entre parentaise on met la valeur donc 42et-42
assert.equal(result<43 ,true);//permet de verifier le resultat returné c'est donc vrai si le retour et correct
return result//permet de return le resultat 
    });
it('getRandomint doit return 42', ()=>{
const result=getRandomInt(42,42);
assert.equal(result=42);//la valeur doit returné une valeur égale a 42
return result
})
})
describe('rectIntersect', () =>{
    it('rectIntersect doit returné false',()=>{
        const result= rectIntersect(1,1,2,1,4,1,1,1);
        assert.equal(result=false);//recIntersect doit cette fois ci returné false pour passé le test 
        return result
    })
    it('rectInstersect doit returné true',()=>{
        const result=rectIntersect(1,1,5,2,4,1,1,1);
        assert.equal(result=true);// recIntersect doit return true 
        return result
    })
})
describe('timeToString',() =>{
    it('timeToString dois returné 17:36:78',()=>{
       const result =  timeToString(123456789);
       assert.equal(result="17:36:78");//timeToString doit returné ce resultat en fonction du chiffre donné
       return result
    })
})
class Hero{
    constructor(name,age,type){
        this.name = name
        this.age = age
        this.type = type
    }

atacar(){
    let ataque

    switch (this.type) {
        case "Guerreiro":
            ataque = "Espada"
            break
        case "Mago":
            ataque = "Magia"
            break
        case "Monge":
            ataque = "Artes Marciais"
            break
        case "Ninja":
            ataque = "Shuriken"
            break
        case "Arqueiro":
            ataque = "Arco"
            break
        default:
            ataque = "Punho"
            break
        }
        console.log(`O ${this.type} atacou usando ${ataque}`)
    }
}

let hero1 = new Hero('Kael',25,"Guerreiro")
let hero2 = new Hero("Gandalf",100,"Mago")
let hero3 = new Hero("Jackie Chan",40,"Monge")
let hero4 = new Hero("Naruto",18,"Ninja")
let hero5 = new Hero("Arqueiro Verde",35,"Arqueiro")

hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()
hero5.atacar()
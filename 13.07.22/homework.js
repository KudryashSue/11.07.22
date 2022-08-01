class Language {
    constructor(name, alphabet, country){
        this.name = name;
        this.alphabet = alphabet;
        this.country = country;
    }

    getInfo(){
        console.log(`Язык: ${this.name}, Алфавит: ${this.alphabet}, Страна, в которой говорят на этом языке: ${this.country}`);
    }
}

let language_1 = new Language('английский', 'латиница', 'Соединённое Королевство Великобритании и Северной Ирландии.');

console.log(language_1);

language_1.getInfo();
class Way {
    someName() {
        return new Promise(function (resolve, reject) {
            setTimeout(
                function () {
                    resolve("First Func");
                }
                , 1000)
        });
    }

    anotherName() {
        return new Promise(function (resolve, reject) {
                resolve("hello there");
        });
    }
   async  Final() {
        let num =  await this.someName();
        let test =  await this.anotherName();
        console.log(num.toString() +"  " + test);

    }
}

module.exports = Way;
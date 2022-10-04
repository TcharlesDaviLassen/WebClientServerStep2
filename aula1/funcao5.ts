function printID2(id: number | string) {
    if (typeof id === "string") {
        console.log("Seu ID é " + id.toUpperCase())
    } else {
        console.log(id)
    }
}
printID2('202')
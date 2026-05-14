
class Item {
 constructor (public title: string){
 }
}

class TodoList {
private itens: Item[] = [];
private filePath: String;

constructor(filePath: string) {
this.filePath = filePath
this.readListFromDisc()
}

private async saveListToDisc(){
    const file = Bun.file(this.filePath)
    const data = JSON.stringify(this.itens)
    await file.write(data)
}

private sync readListFromDisc(){
    const file = Bun.file(this.filePath)
    const data = await file.json
    this.itens = data.map((v : any) => {
        return new Item(v.title)
    })
}

/**
 * 
 * adiciona um item na lista de items
 */
async addItem(item: Item) {
 this.itens.push(item)
 await this.saveListToDisc
}
/**
 * 
 * remove um item na lista de items
 */
removeItem(index: number){
this.itens.splice(index,1);
}
/**
 * 
 * retorna uma cópia da lista de items
 */
geiItems(): Item [] {
    return Array.from(this.itens);
}
}

const lista = new TodoList('arquivo.txt')
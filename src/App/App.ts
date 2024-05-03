import {ProductsList} from "./Components/ProductsList";

export class App {
    private productsList = new ProductsList();
    render () {
        return `
            <h1>App</h1>
            <div>
                ${this.productsList.render()}
            </div>
        `;
    }

}
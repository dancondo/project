import { navbarCollapse } from "./components/navbar.js";
import { deleteItem } from "./coreFunctions/delete_item.js";

document.addEventListener('DOMContentLoaded', () => {
    navbarCollapse();
    deleteItem();
});
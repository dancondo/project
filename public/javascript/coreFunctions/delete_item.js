export const deleteItem = () => {

    const btns = document.querySelectorAll('.delete-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            if(confirm('Delete this Product?')) {
                btn.parentNode.submit();
            }
        })
    })
}
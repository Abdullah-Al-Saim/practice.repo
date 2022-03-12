const addLocalStorage = () => {
    const storageId = document.getElementById('storage-id')
    id = storageId.value;

    const storageValue = document.getElementById('storage-value')
    value = storageValue.value;
    if (id && value) {
        localStorage.setItem(id, value);
    }
    storageId.value = '';
    storageValue.value = '';
}
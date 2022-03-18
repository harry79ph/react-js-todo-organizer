
const useLocalStorage = () => {

    const addToLocal = (types, candos, todos) => {
        types.forEach(type => {
          function clearAll() {// clears local storage for cando and todo items
            for (let i = 0; i < localStorage.length; i++) {
              const key = localStorage.key(i);
              if (key && key.startsWith(type)) localStorage.removeItem(key);
            }
          }
          clearAll();
          let type_of_state = null;
          type === 'cando' ? type_of_state = candos : type_of_state = todos;      
          if (type_of_state.length !== 0) {
            type_of_state.forEach((each, index) => {
              const key = type + index;
              const item = [each.title, each.content];
              localStorage[key] = JSON.stringify(item);
            });
            localStorage.setItem(type + '_length', type_of_state.length);
          } else {
            clearAll();
          }
        });
    }

    const retrieveFromLocal = (types, setCandos, setTodos) => {
        types.forEach((type) => {
          let stateSetter = null;
          type === "cando" ? (stateSetter = setCandos) : (stateSetter = setTodos);
          const loc_string = localStorage.getItem(type + "_length");
          const loc_number = parseInt(loc_string);
          for (let i = 0; i < loc_number; i++) {
            const json = localStorage.getItem(type + i);
            const arr = JSON.parse(json);
            const [title, content] = [arr[0], arr[1]];
            stateSetter((prev) => [...prev, { className: type, title: title, content: content, isActive: false }]);
          }
        });
      };

    return { addToLocal, retrieveFromLocal };
}

export default useLocalStorage;
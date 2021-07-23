# Todo Organizer

Todo Organizer is a todo planner app to help users to make their decisions by considering choices (candos) and making decisions (todos). It is built with **React** and **Sass** and it uses **Local Storage** to store items for later.

![todo-organizer](https://user-images.githubusercontent.com/73724613/126723005-7a3a8b37-4382-422c-85ed-d81a9cd5621d.jpg)

As you can see, there are two sections for items: Candos and Todos and each item has three buttons, from left to right: 
- Move (left or right arrow)
- Extend (down chevron)
- Delete (bin icon)

If user hovers over one of those buttons a tooltip appears indicating its function.

## Creating an item
Items first go directly to Candos section when they first created in the form using submit button. And then they can be moved from Candos section to Todos section using Move button.
## Moving items between Candos and Todos sections
Items can be replaced between the two sections by clicking Move button on them at any time.
## Deleting an item
Items can be deleted by clicking on Delete button.
## Extending an item
Users can open the content section of the item by clicking on Extend button. The same button can be used to close content back.
## Saving items for later
Items can be stored in local storage by clicking on Save button in the form so when user comes back later to the app all the saved items will be showing up again. If items saved before and then new item added or existing one deleted in the sections, this button can be used to update the items in local storage. If user wants to clear up the storage, they can delete all items and click on Save button.

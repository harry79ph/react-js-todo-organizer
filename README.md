# Todo Organizer

Todo Organizer is a todo planner app to help users to make their decisions by considering choices (candos) and making decisions (todos). It is built with **React** and **Sass** and it uses **Local Storage** to store items for later.

![todo-organizer](https://user-images.githubusercontent.com/73724613/126723005-7a3a8b37-4382-422c-85ed-d81a9cd5621d.jpg)

As you can see, there are two sections for items: Candos and Todos and each item has three buttons, from left to right: 
- Move (left or right arrow)
- Extend (down chevron)
- Delete (bin icon)

If user hovers over one of those buttons, a tooltip will appear about its function.

## Creating an item
To create an item, users fill in the form and click submit button. Items first go directly to Candos section when they created and then they can be moved from Candos section to Todos section clicking Move button.
## Moving items between Candos and Todos sections
Items can be replaced between the two sections by clicking Move button at any time.
## Deleting an item
Items can be deleted by clicking on Delete button.
## Extending an item (opening description section of each item)
Users can open the content section of the item by clicking on Extend button. The same button can be used to close the content back.
## Saving items for later
All items can be saved into local storage by clicking on Save button at that time for later views. So when user comes back later to the app, all the saved items will be showing up again. If new item(s) added or existing one(s) deleted, this button can be used again to update the items in local storage. If the user wants to clear up the storage, they can delete all the items and click on Save button again.

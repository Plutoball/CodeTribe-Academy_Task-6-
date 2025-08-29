# Shopping List API

Simple REST API to manage a shopping list.

## Endpoints

- `POST /items` → Add item
- `GET /items` → Get all items
- `GET /items/:id` → Get item by ID
- `PUT /items/:id` → Update item
- `DELETE /items/:id` → Delete item

## Data Format

```json
{
  "name": "Eggs",
  "quantity": "12",
  "purchased": false
}

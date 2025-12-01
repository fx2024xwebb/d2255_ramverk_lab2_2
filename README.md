
## Fullstack-utveckling med ramverk
### Laboration 2.2
API som används för att hantera böcker från en NoSql-databas.<br>

### Funktion
Dessa metoder används för hantering av data:<br>

- GET (books/): Hämtar alla inlägg från databasen.
- GET:ID (books/{id}): Hämtar specifikt inlägg via dess ID.
- POST (books/): Skapar ett nytt inlägg.
- PUT (books/{id}): Uppdaterar ett befintligt inlägg via dess ID.
- DELETE (books/{id}): Raderar ett inlägg via dess ID.

<br>
Inläggen lagras i JSON-format:
<br>

```
{
    "name": "Titel",
    "year": "Utgivningsår",
    "read": "true/false"
}
```


## Fullstack-utveckling med ramverk
### Laboration 2.2

API som används för att hantera böcker från en NoSql-databas.<br>
<br>
### Funktion
Dessa metoder används för hantering av data:<br>

- GET (books/): Hämtar alla inlägg från databasen.
<br>
- GET:ID (books/{id}): Hämtar specifikt inlägg via dess id.
<br>
- POST (books/): Skapar ett nytt inlägg.
<br>
- PUT (books/{id}): Uppdaterar ett befintligt inlägg.
<br>
DELETE (books/{id}): Raderar ett inlägg.
<br>
Inläggen lagras i JSON-format:

```
{
    "name": "Titel",
    "year": "Utgivningsår",
    "read": "true/false"
}
```
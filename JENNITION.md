# API

## render()

- Detalis

    in Txxxxxxx, should work with `mappingDOM`.

## Layout()

- Detalis
    ```
    +----- render -----+
    |+---- Layout ----+|
    ||                ||
    |+----------------+|
    +------------------+
    ```

    Attributes of Element

    if property is an array, layout should merge all of value of array be a string.

    ```js
    ["page", "base", "user"]

    // result
    "page base user"

    // <div main="page base user"></div>
    ```
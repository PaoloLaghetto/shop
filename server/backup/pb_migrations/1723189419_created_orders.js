migrate((db) => {
  const collection = new Collection({
    "id": "8q7ra15mbjwq2r3",
    "created": "2024-08-09 07:43:39.374Z",
    "updated": "2024-08-09 07:43:39.374Z",
    "name": "orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jme8xtlh",
        "name": "order",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "dum4xtk9",
        "name": "user",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "otcuhvyn",
        "name": "total",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "6yx0sygj",
        "name": "status",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "pending",
            "done"
          ]
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8q7ra15mbjwq2r3");

  return dao.deleteCollection(collection);
})

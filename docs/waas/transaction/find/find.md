# Obtener Detalles de una Transacción

Obtiene los detalles de una transacción realizada previamente. Este endpoint tiene como función traer una transacción ya hecha para poder conocer su estado y ver información relacionada.

## <span style='color: #81d294;'>GET</span> /{prefix}/transactions/{transactionId}

### Autenticación de Usuarios Globales (JWT)

```bash
curl --request GET \
  --url '{baseUrl}/auth/transactions/779af86e-89c5-4d39-b1d5-dfe5c5875e14' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: JWT {JWT}' \
  --header 'apiKey: {apiKey}'
```

### Autenticación de Proyectos (apiKey)

```bash
curl --request GET \
  --url '{baseUrl}/auth-pair/transactions/779af86e-89c5-4d39-b1d5-dfe5c5875e14' \
  --header 'Content-Type: application/json' \
  --header 'apiKey: {apiKey}' \
  --header 'secret: {Secret}'
```

## Parámetros de la URL

- `transactionId`: ID de la transacción existente.

## Respuestas posibles

- `200 OK`: Se obtuvieron los detalles de la transacción con éxito. El cuerpo de la respuesta será un objeto JSON con los detalles de la transacción:

```json
{
    "id": "779af86e-89c5-4d39-b1d5-dfe5c5875e14",
    "reason": "mint",
    "tokenId": "64959864eb91f24be255e284",
    "amount": 2000,
    "status": "waiting",
    "message": "Initial Supply",
    "receiver": {
        "name": "waaaas-test",
        "id": "8087da57-da37-4c38-88d7-b37baacb90ff"
    }
}
```

- `404 Not Found`: No se encontró la transacción con el ID proporcionado. El cuerpo de la respuesta será un objeto JSON con la razón del error y un mensaje:

```json
{
    "reason": "NOT_FOUND",
    "msg": "User with ID: <1> not found"
}
```

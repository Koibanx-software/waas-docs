# Distribuir Tokens desde Wallet Centralizada

Distribuye una cantidad específica de un token desde la wallet centralizada a los usuarios locales. Este endpoint solo está disponible para tokens de tipo 'centralizedSupplyToken'. La suma de todas las cantidades a distribuir debe ser menor o igual al balance actual de la wallet centralizada.

### <span style='color: #81d294;'>POST</span> /{prefix}/distributions

#### Autenticación de Usuarios Globales (JWT)

```bash
curl --request POST \
  --url '{baseUrl}/auth/distributions' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: JWT {JWT}' \
  --header 'apiKey: {apiKey}' \
  --data '{
    "id": "ff2ba3c0-c4ae-4900-beb5-638e3b48074c",
    "tokenId": "123e4567-e89b-12d3-a456-426614174000",
    "deposits": [
      {
        "userId": "987f6543-e21b-48c3-a456-987654321000",
        "amount": 1000
      },
      {
        "userId": "987f6543-e21b-48c3-a456-987654321001",
        "amount": 1000
      }
    ]
  }'
```

#### Autenticación de Proyectos (apiKey)

```bash
curl --request POST \
  --url '{baseUrl}/auth-pair/distributions' \
  --header 'Content-Type: application/json' \
  --header 'apiKey: {apiKey}' \
  --header 'secret: {Secret}' \
  --data '{
    "id": "ff2ba3c0-c4ae-4900-beb5-638e3b48074c",
    "tokenId": "123e4567-e89b-12d3-a456-426614174000",
    "deposits": [
      {
        "userId": "987f6543-e21b-48c3-a456-987654321000",
        "amount": 1000
      },
      {
        "userId": "987f6543-e21b-48c3-a456-987654321001",
        "amount": 1000
      }
    ]
  }'
```

### Parámetros del cuerpo

- `id`: UUID o Mongo ID para crear la distribución, la cual se podrá consultar en el futuro.
- `tokenId`: ID del token existente.
- `deposits`: Lista de usuarios y cuánto se quiere distribuir a cada uno. Cada objeto en la lista debe tener un `userId` (UUID o Mongo ID del usuario local) y un `amount` (cantidad a distribuir).

### Respuestas posibles

- `200 OK`: Los tokens fueron distribuidos con éxito. El cuerpo de la respuesta estará vacío.
- `404 Not Found`: No se encontró el token con el ID proporcionado. El cuerpo de la respuesta será un objeto JSON con la razón del error y un mensaje:

```json
{
	"reason": "NOT_FOUND",
	"msg": "User with ID: <1> not found"
}
```

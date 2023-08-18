# Burn Token

Quema una cantidad específica de un token de un usuario. 

### <span style='color: #81d294;'>POST</span> /{prefix}/tokens/{tokenId}/burn

#### Autenticación de Usuarios Globales (JWT)

```bash
curl --request POST \
  --url '{baseUrl}/auth/tokens/123e4567-e89b-12d3-a456-426614174000/burn' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: JWT {JWT}' \
  --header 'apiKey: {apiKey}' \
  --data '{
    "id": "987f6543-e21b-48c3-a456-987654321000",
    "amount": 10,
    "userId": "123e4567-e89b-12d3-a456-426614174000",
    "message": "Burning 10 tokens"
  }'
```

#### Autenticación de Proyectos (apiKey)

```bash
curl --request POST \
  --url '{baseUrl}/auth-pair/tokens/123e4567-e89b-12d3-a456-426614174000/burn' \
  --header 'Content-Type: application/json' \
  --header 'apiKey: {apiKey}' \
  --header 'secret: {Secret}' \
  --data '{
    "id": "987f6543-e21b-48c3-a456-987654321000",
    "amount": 10,
    "userId": "123e4567-e89b-12d3-a456-426614174000",
    "message": "Burning 10 tokens"
  }'
```

### Parámetros de la URL

- `tokenId`: ID del token existente.

### Parámetros del cuerpo

- `id`: UUID o Mongo ID para crear la transacción, la cual se podrá consultar en el futuro.
- `amount`: Cantidad de tokens a quemar.
- `userId`: ID del usuario al que se le van a quemar los tokens.
- `message`: Un mensaje para la transacción.

### Respuestas posibles

- `200 OK`: Los tokens fueron quemados con éxito. El cuerpo de la respuesta estará vacío.
- `404 Not Found`: No se encontró el token con el ID proporcionado. El cuerpo de la respuesta será un objeto JSON con la razón del error y un mensaje:
```json
{
	"reason": "NOT_FOUND",
	"msg": "User with ID: <1> not found"
}
``` 

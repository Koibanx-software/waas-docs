# Obtener Detalles de una Distribución

Obtiene los detalles de una distribución realizada previamente. Este endpoint solo está disponible para tokens de tipo 'centralizedSupplyToken'.

### <span style='color: #81d294;'>GET</span> /{prefix}/distributions/{distributionId}

#### Autenticación de Usuarios Globales (JWT)

```bash
curl --request GET \
  --url '{baseUrl}/auth/distributions/ff2ba3c0-c4ae-4900-beb5-638e3b48074c' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: JWT {JWT}' \
  --header 'apiKey: {apiKey}'
```

#### Autenticación de Proyectos (apiKey)

```bash
curl --request GET \
  --url '{baseUrl}/auth-pair/distributions/ff2ba3c0-c4ae-4900-beb5-638e3b48074c' \
  --header 'Content-Type: application/json' \
  --header 'apiKey: {apiKey}' \
  --header 'secret: {Secret}'
```

### Parámetros de la URL

- `distributionId`: ID de la distribución existente.

### Respuestas posibles

- `200 OK`: Se obtuvieron los detalles de la distribución con éxito. El cuerpo de la respuesta será un objeto JSON con los detalles de la distribución:

  - `id`: ID de la distribución.
  - `totalDeposits`: Número total de depósitos realizados en la distribución.
  - `tokenId`: ID del token distribuido.
  - `status`: Estado de la distribución. Puede ser 'successfullyComplete', 'completeWithErrors' o 'pending'.
  - `deposits`: Lista de depósitos realizados. Cada depósito es un objeto que contiene el `userId` del usuario que recibió el depósito y el `amount` que recibió.
  - `idsWithErrors`: Lista de IDs de depósitos que tuvieron errores durante la distribución.

```json
{
	"id": "ff2ba3c0-c4ae-4900-beb5-638e3b48074c",
	"totalDeposits": 2,
	"tokenId": "616efaef-a2b5-41a8-9373-b362234c46ec",
	"status": "successfullyComplete",
	"deposits": [
		{
			"userId": "40f69ff6-38e2-4033-a5de-48f02d6ef4eb",
			"amount": 1000
		},
		{
			"userId": "518eb8b8-949d-4ba9-a615-f3f1799aae62",
			"amount": 1000
		}
	],
	"idsWithErrors": []
}
```

- `404 Not Found`: No se encontró la distribución con el ID proporcionado. El cuerpo de la respuesta será un objeto JSON con la razón del error y un mensaje:

```json
{
	"reason": "NOT_FOUND",
	"msg": "User with ID: <1> not found"
}
```

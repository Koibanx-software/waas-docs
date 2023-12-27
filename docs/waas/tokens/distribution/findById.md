---
title: "Obtener detalles de una distribución"
sidebar_position: 2
---

# Obtener Detalles de una Distribución

Obtiene los detalles de una distribución realizada previamente. Este endpoint solo está disponible para tokens de tipo 'centralizedSupplyToken'.

### <span>GET</span> /{prefix}/distributions/{distributionId}

---

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
  - `depositsDone`: Número total de depósitos que estan correctos en el momento de la busqueda.
  - `totalAmount`: Amount total distribuido.
  - `totalNewUsers`: Número total de usuarios que son nuevos.
  - `depositsWithErrors`: Lista de depósitos que tuvieron errores durante la distribución.
  - `message`: (Opcional) Un mensaje para las transacciónes de la distribución.

```json
{
  "id": "ff2ba3c0-c4ae-4900-beb5-638e3b48074c",
  "totalDeposits": 2,
  "tokenId": "616efaef-a2b5-41a8-9373-b362234c46ec",
  "depositsDone": 2,
  "totalNewUsers": 1,
  "totalAmount": 2000,
  "status": "successfullyComplete",
  "depositsWithErrors": []
}
```

- `404 Not Found`: No se encontró la distribución con el ID proporcionado. El cuerpo de la respuesta será un objeto JSON con la razón del error y un mensaje:

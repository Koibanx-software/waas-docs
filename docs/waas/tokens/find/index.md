---
title: "Obtener detalles de un token"
sidebar_position: 2
---

# Obtener Token

Obtiene la información de un token existente utilizando su ID.

### <span>GET</span> /{prefix}/tokens/:tokenId

---

### Autenticación de Usuarios Globales (JWT)

```bash
curl --request GET \
  --url '{baseUrl}/auth/tokens/123e4567-e89b-12d3-a456-426614174000' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: JWT {JWT}' \
  --header 'apiKey: {apiKey}'
```

### Autenticación de Proyectos (apiKey)

```bash
curl --request GET \
  --url '{baseUrl}/auth-pair/tokens/123e4567-e89b-12d3-a456-426614174000' \
  --header 'Content-Type: application/json' \
  --header 'apiKey: {apiKey}' \
  --header 'secret: {Secret}'
```

## Parámetros de la URL

- `tokenId`: ID del token existente.

## Respuestas posibles

- `200 OK`: El token fue obtenido con éxito. El cuerpo de la respuesta será un objeto JSON con la información del token:

```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "myToken",
  "code": "mtk",
  "description": "My Token description",
  "status": "active",
  "type": "centralizedSupplyToken",
  "projectId": "987f6543-e21b-48c3-a456-987654321000",
  "initialSupply": 1000,
  "totalSupply": 1500,
  "balance": 2000,
  "extraData": {
    "test": "prueba"
  },
  "callback": "localhost:3000"
}
```

Los campos en la respuesta son:

- `id`: ID del token.
- `name`: Nombre del token.
- `code`: Código del token.
- `description`: Descripción del token.
- `status`: Estado del token.
- `type`: Tipo de token, puede ser 'token' o 'centralizedSupplyToken'.
- `projectId`: ID del proyecto al que pertenece el token.
- `initialSupply`: (Solo para 'centralizedSupplyToken') Suministro inicial del token.
- `totalSupply`: Cantidad de tokens en circulación entre los usuarios locales y la wallet concentradora.
- `balance`: (Solo para 'centralizedSupplyToken') Balance de la wallet central del token.
- `extraData`: (Opcional) información adicional que no se ajusta directamente a los campos estándar o predefinidos.
- `callback`: (Opcional) URL a la que se llamará una vez que se complete una operación

# Crear Token

Crea un token. El tipo de token puede ser 'token' o 'centralizedSupplyToken'. Para el tipo 'centralizedSupplyToken', se debe proporcionar un 'initialSupply' positivo.

### <span style='color: #81d294;'>POST</span> /{prefix}/tokens
---

#### Autenticación de Usuarios Globales (JWT)

```bash
curl --request POST \
  --url '{baseUrl}/auth/tokens' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: JWT {JWT}' \
  --header 'apiKey: {apiKey}' \
  --data '{
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "myToken",
    "code": "mtk",
    "description": "My Token description",
    "type": "token"
  }'
```

#### Autenticación de Proyectos (apiKey)

```bash
curl --request POST \
  --url '{baseUrl}/auth-pair/tokens' \
  --header 'Content-Type: application/json' \
  --header 'apiKey: {apiKey}' \
  --header 'secret: {Secret}' \
  --data '{
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "name": "myToken",
    "code": "mtk",
    "description": "My Token description",
    "type": "centralizedSupplyToken",
    "initialSupply": 1000
  }'
```

### Parámetros del *body*

- `id`: UUID o Mongo ID del token.
- `name`: Nombre único del token.
- `code`: Código único del token.
- `description`: Descripción del token.
- `type`: Tipo de token, puede ser 'token' o 'centralizedSupplyToken'.
- `initialSupply`: (Opcional) Suministro inicial para el tipo 'centralizedSupplyToken'. Debe ser un número positivo.

### Respuestas posibles

- `200 OK`: El token fue creado con éxito. El cuerpo de la respuesta estará vacío.

### Diagrama de secuencia

![Flujo crear un token](./CreateToken.png 'FlowCreateToken')

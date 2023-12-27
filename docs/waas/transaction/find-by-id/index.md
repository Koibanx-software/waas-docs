---
title: "Obtener detalles"
sidebar_position: 1
---

# Obtener Detalles de una Transacción

Obtiene los detalles de una transacción realizada previamente. Este endpoint tiene como función traer una transacción ya hecha para poder conocer su estado y ver información relacionada.

### <span>GET</span> /{prefix}/transactions/{transactionId}

---

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
  "reason": "transfer",
  "tokenId": "64959864eb91f24be255e284",
  "amount": 2000,
  "status": "waiting",
  "message": "Initial Supply",
  "extraData": {
    "test": "prueba"
  },
  "txHash": "T4DG5MGTL2XYWOUAK3LHC3VOSTX6WKN25GVEZ2WOECJULXIN4V5Q",
  "sender": {
    "name": "TransactionalEngineReciver@koibanx.com",
    "id": "56490f32-45b2-455f-90e4-b30e5826d7e9"
  },
  "receiver": {
    "name": "waaaas-test",
    "id": "8087da57-da37-4c38-88d7-b37baacb90ff"
  },
  "callback": "localhost:3000"
}
```

Los campos en la respuesta son:

- `id`: ID de la transaccion.
- `reason`: la razón de la transacción, que puede ser una de las siguientes: "mint" (creación de tokens), "burn" (destrucción de tokens) o "transference" (transferencia de tokens).
- `tokenId`: ID del token involucrado en la transacción.
- `amount`: Cantidad de tokens involucrados.
- `status`: Estado de la transaccion.
- `message`: Mensaje adicional asociado a la transacción.
- `extraData`: (Opcional) información adicional que no se ajusta directamente a los campos estándar o predefinidos.
- `callback`: (Opcional) URL a la que se llamará una vez que se complete una operación
- `txHash`: ID de la transaccion en la blockchain.
- `receiver`: Objeto que contiene los detalles del receptor de la transacción, incluyendo el `name` (nombre) y el `id` (ID).
- `sender` (solo en caso de transacciones de transferencia): Objeto que contiene los detalles del remitente de la transacción, incluyendo el `name` (nombre) y el `id` (ID).

- `404 Not Found`: No se encontró la transacción con el ID proporcionado. El cuerpo de la respuesta será un objeto JSON con la razón del error y un mensaje

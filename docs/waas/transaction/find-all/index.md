---
title: "Obtener todos"
sidebar_position: 2
---

# Obtener Transacciones Paginadas

Obtiene una lista paginada de transacciones. Este endpoint se utiliza para paginar las transacciones y obtener resultados en lotes.

### <span>GET</span> /{prefix}/transactions?page=1&limit=10

---

### Autenticación de Usuarios Globales (JWT)

```bash
curl --request GET \
 --url '{baseUrl}/auth/transactions?page=1&limit=10' \
 --header 'Content-Type: application/json' \
 --header 'Authorization: JWT {JWT}' \
 --header 'apiKey: {apiKey}'
```

### Autenticación de Proyectos (apiKey)

```bash
curl --request GET \
 --url '{baseUrl}/auth-pair/transactions?page=1&limit=10' \
 --header 'Content-Type: application/json' \
 --header 'apiKey: {apiKey}' \
 --header 'secret: {Secret}'
```

## Parámetros de la URL

- `page`: Número de página que se desea obtener (por defecto es 1).
- `limit`: Número máximo de transacciones por página (por defecto es 10).
- `filters`: (Opcional) Filtros segun el **_patron criteria_**.
- `sort`: (Opcional) Orden segun el **_patron criteria_**.

**_NOTA:_** Para el patron criteria se utiliza la siguiente entidad para mayor información consulta esta [documentacion](https://wiki.koibanx.com/es/devs/Tooling/criteria-pattern)

```typeScript
    type Transaction = {
      id: string;
      reason: string;
      tokenId: string;
      callback: string;
      senderId: string;
      extraData: object;
      receiverId: string;
      amount: number;
      status: string;
      message: string;
      projectId: string;
      createdAt: string;
      txHash: string;
    };
```

## Respuestas posibles

- `200 OK`: Se obtuvieron las transacciones paginadas con éxito. El cuerpo de la respuesta será un objeto JSON con la siguiente información:

  - `pages`: Número total de páginas.
  - `total`: Número total de transacciones.
  - `limit`: Límite de transacciones por página.
  - `page`: Página actual.
  - `results`: Lista de transacciones en la página actual. Cada transacción es un objeto que contiene los siguientes detalles:

    - `id`: ID de la transacción.
    - `reason`: la razón de la transacción, que puede ser una de las siguientes: "mint" (creación de tokens), "burn" (destrucción de tokens) o "transference" (transferencia de tokens).
    - `tokenId`: ID del token involucrado en la transacción.
    - `amount`: Cantidad de tokens involucrados.
    - `status`: Estado de la transacción.
    - `message`: Mensaje adicional asociado a la transacción.
    - `extraData`: (Opcional) información adicional que no se ajusta directamente a los campos estándar o predefinidos.
    - `callback`: (Opcional) URL a la que se llamará una vez que se complete una operación
    - `txHash`: ID de la transaccion en la blockchain.
    - `receiver`: Objeto que contiene los detalles del receptor de la transacción, incluyendo el `name` (nombre) y el `id` (ID).
    - `sender` (solo en caso de transacciones de transferencia): Objeto que contiene los detalles del remitente de la transacción, incluyendo el `name` (nombre) y el `id` (ID).

  Ejemplo de cuerpo de respuesta:

  ```json
  {
    "pages": 2,
    "total": 13,
    "limit": "10",
    "page": "1",
    "results": [
        {
            "id": "ad96e2bb-c2a0-461f-8e33-44ba8fe7bb5b",
            "reason": "mint",
            "tokenId": "64938dd1eb91f24be255be9a",
            "amount": 2000,
            "status": "waiting",
            "message": "Initial Supply",
            "extraData":{
              "test":"prueba"
            },
            "txHash": "T4DG5MGTL2XYWOUAK3LHC3VOSTX6WKN25GVEZ2WOECJULXIN4V5Q",
            "receiver": {
                "name": "test-waes5",
                "id": "e34adea2-31da-4c98-89d4-ec7545aa5521"
            },
            "callback":"localhost:3000"
        },
        ...
    ]
  }
  ```

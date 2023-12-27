---
title: "Obtener todas las distribuciones"
sidebar_position: 3
---

# Obtener todas las distribuciones

Recupera los detalles de todas las distribuciones. Esta solicitud es filtra automáticamente por proyecto, basándose en la autenticación utilizada durante la solicitud.

### <span>GET</span> /{prefix}/distributions?page=1&limit=10

---

#### Autenticación de Usuarios Globales (JWT)

```bash
curl --request GET \
  --url '{baseUrl}/auth/distributions?page=1&limit=10' \
  --header 'Content-Type: application/json' \
  --header 'Authorization: JWT {JWT}' \
  --header 'apiKey: {apiKey}'
```

#### Autenticación de Proyectos (apiKey)

```bash
curl --request GET \
  --url '{baseUrl}/auth-pair/distributions?page=1&limit=10' \
  --header 'Content-Type: application/json' \
  --header 'apiKey: {apiKey}' \
  --header 'secret: {Secret}'
```

## Parámetros de la URL

- `page`: Número de página para la paginación de resultados. Valor predeterminado: 1.
- `limit`: Número máximo de usuarios por página. Valor predeterminado: 10.
- `filters`: (Opcional) Filtros segun el **_patron criteria_**.
- `sort`: (Opcional) Orden segun el **_patron criteria_**.

**_NOTA:_** Para el patron criteria se utiliza la siguiente entidad para mayor información consulta esta [documentacion](https://wiki.koibanx.com/es/devs/Tooling/criteria-pattern)

```typeScript
type Distribucion = {
  id: string;
  status: string;
  message: string;
  totalAmount: number;
  tokenId: string;
  totalDeposits: number;
  depositsDone: number;
  totalNewUsers: number;
};

```

## Respuestas posibles

- `200 OK`: Se obtuvieron las distribuciones paginadas con éxito. El cuerpo de la respuesta será un objeto JSON con la siguiente información:

  - `pages`: Número total de páginas.
  - `total`: Número total de distribuciones.
  - `limit`: Límite de distribuciones por página.
  - `page`: Página actual.
  - `results`: Lista de distribuciones en la página actual. Cada distribución es un objeto que contiene los siguientes detalles:

    - `id`: ID de la distribución.
    - `totalDeposits`: Número total de depósitos realizados en la distribución.
    - `tokenId`: ID del token distribuido.
    - `status`: Estado de la distribución. Puede ser 'successfullyComplete', 'completeWithErrors' o 'pending'.
    - `depositsDone`: Número total de depósitos que estan correctos en el momento de la busqueda.
    - `totalAmount`: Amount total distribuido.
    - `totalNewUsers`: Número total de usuarios que son nuevos.
    - `depositsWithErrors`: Lista de depósitos que tuvieron errores durante la distribución.
    - `message`: (Opcional) Un mensaje para las transacciónes de la distribución.

  Ejemplo de cuerpo de respuesta:

  ```json
  {
    "pages": 2,
    "total": 13,
    "limit": "10",
    "page": "1",
    "results": [
        {
          "id": "ff2ba3c0-c4ae-4900-beb5-638e3b48074c",
          "totalDeposits": 2,
          "tokenId": "616efaef-a2b5-41a8-9373-b362234c46ec",
          "depositsDone": 2,
          "totalNewUsers": 1,
          "totalAmount": 2000,
          "status": "successfullyComplete",
          "depositsWithErrors": []

        },
        ...
    ]
  }
  ```
